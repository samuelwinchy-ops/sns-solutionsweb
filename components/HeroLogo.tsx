'use client'

import { useEffect, useRef } from 'react'
import { setShapeTarget, type ShapePoint } from '@/lib/shapeTarget'

const SRC = '/sns-icon.png'
const SAMPLE = 200 // offscreen resolution the logo is traced at
const ALPHA_CUTOFF = 120
// Kept below the background's particle count so part of the field carries on
// drifting around the mark instead of every particle being swallowed by it.
const MAX_POINTS = 620

/**
 * Traces the logo's silhouette and hands it to the global neural background,
 * which gathers its own particles onto it. This component paints nothing — it
 * only reserves the hero's right-hand box and reports where it is.
 */
export default function HeroLogo() {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const box = boxRef.current
    if (!box) return

    // The mark is decoration: skip it on small screens, where the box is
    // hidden anyway and the field is already thinned for battery.
    if (window.matchMedia('(max-width: 767px)').matches) return

    let cancelled = false
    const img = new Image()
    img.src = SRC
    img
      .decode()
      .then(() => {
        if (cancelled) return
        const points = outlineFromImage(img)
        if (!points.length) return
        setShapeTarget({
          points,
          getRect: () => (boxRef.current ? boxRef.current.getBoundingClientRect() : null),
        })
      })
      .catch(() => {
        /* Decorative only — without the logo the field just keeps drifting. */
      })

    return () => {
      cancelled = true
      setShapeTarget(null)
    }
  }, [])

  return (
    <div
      ref={boxRef}
      aria-hidden="true"
      className="relative mx-auto hidden aspect-square w-full max-w-[520px] md:block"
    />
  )
}

/**
 * Keep pixels that are opaque but border a transparent one — that yields the
 * outline (including the gaps between the three figures) rather than a filled
 * blob. Returns points normalised to 0..1.
 */
function outlineFromImage(img: HTMLImageElement): ShapePoint[] {
  const c = document.createElement('canvas')
  c.width = SAMPLE
  c.height = SAMPLE
  const ctx = c.getContext('2d', { willReadFrequently: true })
  if (!ctx) return []
  ctx.drawImage(img, 0, 0, SAMPLE, SAMPLE)
  const { data } = ctx.getImageData(0, 0, SAMPLE, SAMPLE)
  const alpha = (x: number, y: number) => data[(y * SAMPLE + x) * 4 + 3]

  const pts: ShapePoint[] = []
  for (let y = 1; y < SAMPLE - 1; y++) {
    for (let x = 1; x < SAMPLE - 1; x++) {
      if (alpha(x, y) <= ALPHA_CUTOFF) continue
      if (
        alpha(x - 1, y) <= ALPHA_CUTOFF ||
        alpha(x + 1, y) <= ALPHA_CUTOFF ||
        alpha(x, y - 1) <= ALPHA_CUTOFF ||
        alpha(x, y + 1) <= ALPHA_CUTOFF
      ) {
        pts.push({ x: x / SAMPLE, y: y / SAMPLE })
      }
    }
  }

  // Thin evenly across the whole outline.
  for (let i = pts.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0
    ;[pts[i], pts[j]] = [pts[j], pts[i]]
  }
  return pts.slice(0, MAX_POINTS)
}
