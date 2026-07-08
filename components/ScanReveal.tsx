'use client'

import { useEffect, useRef } from 'react'

// Pure <canvas> "signal field" with a violet→cyan scan line sweeping across it.
// Pauses off-screen and when the tab is hidden; renders one static frame under
// prefers-reduced-motion. The parent must give it a size — it fills it.
export default function ScanReveal({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let bars: { x: number; y: number; w: number; h: number; seed: number }[] = []

    const build = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      bars = []
      const colW = 16
      const cols = Math.ceil(width / colW)
      for (let c = 0; c < cols; c++) {
        const x = c * colW
        const seedBase = Math.sin(c * 12.9898) * 43758.5453
        const rows = 6 + Math.floor((Math.abs(seedBase) % 1) * 5)
        for (let r = 0; r < rows; r++) {
          const seed = Math.abs(Math.sin((c + 1) * (r + 3) * 7.13)) % 1
          const bh = 4 + seed * 22
          const y = height - (r + 1) * (bh + 6)
          if (y < -bh) continue
          bars.push({ x: x + 3, y, w: colW - 7, h: bh, seed })
        }
      }
    }
    build()
    window.addEventListener('resize', build)

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const draw = (scan: number) => {
      ctx.clearRect(0, 0, width, height)
      const scanY = scan * height
      for (const b of bars) {
        const d = Math.abs(b.y + b.h / 2 - scanY)
        const near = Math.max(0, 1 - d / 90)
        const baseAlpha = 0.06 + b.seed * 0.06
        const alpha = baseAlpha + near * 0.6
        // violet (top) → cyan (as the band passes downward)
        const mix = Math.min(1, Math.max(0, (b.y / height) * 0.6 + near * 0.5))
        const r = Math.round(lerp(139, 34, mix))
        const g = Math.round(lerp(92, 211, mix))
        const bl = Math.round(lerp(246, 238, mix))
        ctx.fillStyle = `rgba(${r}, ${g}, ${bl}, ${alpha})`
        ctx.fillRect(b.x, b.y, b.w, b.h)
      }

      const grad = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40)
      grad.addColorStop(0, 'rgba(139,92,246,0)')
      grad.addColorStop(0.5, 'rgba(190,140,255,0.5)')
      grad.addColorStop(1, 'rgba(34,211,238,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, scanY - 40, width, 80)

      ctx.fillStyle = 'rgba(240,171,252,0.85)'
      ctx.fillRect(0, scanY - 0.75, width, 1.5)
    }

    let raf = 0
    let running = false
    let visible = true
    const start = performance.now()

    const loop = (now: number) => {
      const cycle = ((now - start) / 4200) % 2
      const scan = cycle < 1 ? cycle : 2 - cycle
      const eased = scan * scan * (3 - 2 * scan)
      draw(eased)
      raf = requestAnimationFrame(loop)
    }
    const play = () => {
      if (running || reduce || !visible || document.hidden) return
      running = true
      raf = requestAnimationFrame(loop)
    }
    const pause = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    if (reduce) {
      draw(0.42) // static poster frame
      const onResize = () => {
        build()
        draw(0.42)
      }
      window.removeEventListener('resize', build)
      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) play()
        else pause()
      },
      { threshold: 0.01 }
    )
    io.observe(canvas)

    const onVisibility = () => (document.hidden ? pause() : play())
    document.addEventListener('visibilitychange', onVisibility)
    play()

    return () => {
      pause()
      io.disconnect()
      window.removeEventListener('resize', build)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden className={`h-full w-full ${className}`} />
}
