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

  // Edge pixels, kept on a grid so we can walk them in contour order.
  const grid = new Uint8Array(SAMPLE * SAMPLE)
  const edges: number[] = []
  for (let y = 1; y < SAMPLE - 1; y++) {
    for (let x = 1; x < SAMPLE - 1; x++) {
      if (alpha(x, y) <= ALPHA_CUTOFF) continue
      if (
        alpha(x - 1, y) <= ALPHA_CUTOFF ||
        alpha(x + 1, y) <= ALPHA_CUTOFF ||
        alpha(x, y - 1) <= ALPHA_CUTOFF ||
        alpha(x, y + 1) <= ALPHA_CUTOFF
      ) {
        grid[y * SAMPLE + x] = 1
        edges.push(y * SAMPLE + x)
      }
    }
  }
  if (!edges.length) return []

  const ordered = traceContours(grid, edges)

  // Thin by taking every Nth point *along the trace*, so the order — and with
  // it the line the particles draw — survives.
  const step = Math.max(1, Math.ceil(ordered.length / MAX_POINTS))
  const out: ShapePoint[] = []
  for (let i = 0; i < ordered.length; i += step) {
    out.push({ x: (ordered[i] % SAMPLE) / SAMPLE, y: Math.floor(ordered[i] / SAMPLE) / SAMPLE })
  }
  return out
}

/**
 * Walk the edge pixels into contour order: from each point, hop to the nearest
 * unvisited neighbour, so consecutive points are adjacent on the silhouette.
 * A raster scan would instead jump left-to-right down the image, and the mark
 * would appear in scanlines rather than being drawn as a line.
 */
function traceContours(grid: Uint8Array, edges: number[]): number[] {
  const visited = new Uint8Array(grid.length)
  const ordered: number[] = []

  const nearest = (from: number): number => {
    const fx = from % SAMPLE
    const fy = (from / SAMPLE) | 0
    // Expanding ring search — cheap because the next edge pixel is adjacent.
    for (let r = 1; r <= 6; r++) {
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue
          const x = fx + dx
          const y = fy + dy
          if (x < 0 || y < 0 || x >= SAMPLE || y >= SAMPLE) continue
          const idx = y * SAMPLE + x
          if (grid[idx] && !visited[idx]) return idx
        }
      }
    }
    return -1
  }

  for (const seed of edges) {
    if (visited[seed]) continue
    // Start a new contour and follow it as far as it goes.
    let current = seed
    visited[current] = 1
    ordered.push(current)
    for (;;) {
      const next = nearest(current)
      if (next < 0) break
      visited[next] = 1
      ordered.push(next)
      current = next
    }
  }
  return ordered
}
