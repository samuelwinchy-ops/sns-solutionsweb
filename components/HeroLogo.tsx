'use client'

import { useEffect, useRef } from 'react'

// Same palette as the global neural background, so this reads as the field
// gathering itself into the mark rather than as a separate effect.
const PALETTE = ['#6366f1', '#3b82f6', '#22d3ee', '#818cf8']

const SRC = '/sns-icon.png'
const SAMPLE = 200 // offscreen resolution the logo is traced at
const ALPHA_CUTOFF = 120
const MAX_POINTS = 900

// Timeline (ms)
const ASSEMBLE = 1100
const STAGGER = 420

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

type Pt = { x: number; y: number }

/**
 * Trace the logo's silhouette: keep pixels that are opaque but border a
 * transparent one. That yields the outline (including the gaps between the
 * three figures) rather than a filled blob.
 */
function outlineFromImage(img: HTMLImageElement): Pt[] {
  const c = document.createElement('canvas')
  c.width = SAMPLE
  c.height = SAMPLE
  const ctx = c.getContext('2d', { willReadFrequently: true })
  if (!ctx) return []
  ctx.drawImage(img, 0, 0, SAMPLE, SAMPLE)
  const { data } = ctx.getImageData(0, 0, SAMPLE, SAMPLE)
  const alpha = (x: number, y: number) => data[(y * SAMPLE + x) * 4 + 3]

  const pts: Pt[] = []
  for (let y = 1; y < SAMPLE - 1; y++) {
    for (let x = 1; x < SAMPLE - 1; x++) {
      if (alpha(x, y) <= ALPHA_CUTOFF) continue
      if (
        alpha(x - 1, y) <= ALPHA_CUTOFF ||
        alpha(x + 1, y) <= ALPHA_CUTOFF ||
        alpha(x, y - 1) <= ALPHA_CUTOFF ||
        alpha(x, y + 1) <= ALPHA_CUTOFF
      ) {
        pts.push({ x, y })
      }
    }
  }

  // Thin the outline down to a particle-sized set, evenly across the shape.
  for (let i = pts.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0
    ;[pts[i], pts[j]] = [pts[j], pts[i]]
  }
  return pts.slice(0, MAX_POINTS)
}

export default function HeroLogo() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let cancelled = false

    type P = { sx: number; sy: number; tx: number; ty: number; delay: number; color: string; phase: number }
    let particles: P[] = []
    let width = 0
    let height = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)

    let basePts: Pt[] = []

    const resize = () => {
      width = wrap.clientWidth
      height = wrap.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    /** Map the sampled logo points into the current canvas box. */
    const retarget = () => {
      const span = Math.min(width, height) * 0.84
      const scale = span / SAMPLE
      const ox = (width - span) / 2
      const oy = (height - span) / 2
      particles.forEach((p, i) => {
        p.tx = ox + basePts[i].x * scale
        p.ty = oy + basePts[i].y * scale
      })
    }

    const layout = (pts: Pt[]) => {
      basePts = pts
      resize()
      particles = pts.map(() => ({
        // Scatter the start positions across the panel, like drifting field
        // particles that then find their place.
        sx: Math.random() * width,
        sy: Math.random() * height,
        tx: 0,
        ty: 0,
        delay: Math.random() * STAGGER,
        color: PALETTE[(Math.random() * PALETTE.length) | 0],
        phase: Math.random() * Math.PI * 2,
      }))
      retarget()
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'lighter'
      // A little bloom so the mark holds its own in the hero.
      ctx.shadowBlur = 6
      for (const p of particles) {
        ctx.shadowColor = p.color
        const local = Math.min(1, Math.max(0, (t - p.delay) / ASSEMBLE))
        const e = easeOut(local)
        // Once settled, drift gently around the target so the mark breathes
        // instead of freezing into a static image.
        const settled = local >= 1 ? 1 : 0
        const wob = settled ? Math.sin(t / 900 + p.phase) * 0.9 : 0
        const x = p.sx + (p.tx - p.sx) * e + wob
        const y = p.sy + (p.ty - p.sy) * e + Math.cos(t / 1100 + p.phase) * 0.9 * settled
        ctx.globalAlpha = Math.min(1, local * 1.5)
        ctx.fillStyle = p.color
        ctx.fillRect(x, y, 2, 2)
      }
      ctx.globalAlpha = 1
      ctx.shadowBlur = 0
    }

    const start = performance.now()
    const frame = (now: number) => {
      if (cancelled) return
      draw(now - start)
      raf = requestAnimationFrame(frame)
    }

    const img = new Image()
    img.src = SRC
    img
      .decode()
      .then(() => {
        if (cancelled) return
        const pts = outlineFromImage(img)
        if (!pts.length) return
        layout(pts)

        if (reduced) {
          // Skip the assembly: draw the finished outline once.
          draw(ASSEMBLE + STAGGER)
          return
        }
        raf = requestAnimationFrame(frame)
      })
      .catch(() => {
        /* Decorative only — if the logo can't load there's nothing to show. */
      })

    const onResize = () => {
      if (!particles.length) return
      resize()
      retarget()
      // Past the assembly the particles sit on their targets, so pin the
      // start points to the new ones and they simply re-place themselves.
      particles.forEach((p) => {
        p.sx = p.tx
        p.sy = p.ty
      })
      if (reduced) draw(ASSEMBLE + STAGGER)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="relative mx-auto hidden aspect-square w-full max-w-[520px] md:block"
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
