'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface NeuralBackgroundProps {
  className?: string
  /**
   * Single particle colour. Ignored if `colors` is provided.
   * Defaults to brand indigo.
   */
  color?: string
  /**
   * Palette the particles are randomly drawn from.
   * Defaults to the SNS indigo → blue → cyan trio.
   */
  colors?: string[]
  /**
   * Colour the trails fade toward each frame. Match the page background
   * so the canvas blends seamlessly. Default: site base #06080F.
   */
  fadeColor?: string
  /**
   * Opacity of the per-frame fade (0.0–1.0).
   * Lower = longer trails. Higher = shorter trails. Default: 0.14
   */
  trailOpacity?: number
  /**
   * Number of particles on desktop. Automatically reduced on small
   * screens. Default: 600
   */
  particleCount?: number
  /**
   * Fraction of the field that is visible, 0–1. Default: 1.
   *
   * Changing this does NOT rebuild the field: the surplus particles keep
   * drifting and simply fade out, so density can change between routes without
   * the background ever resetting.
   */
  density?: number
  /**
   * Speed multiplier. Default: 1
   */
  speed?: number
  /**
   * Additive blending for a luminous "neural" glow. Default: true
   */
  glow?: boolean
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  const full =
    h.length === 3
      ? h
          .split('')
          .map((c) => c + c)
          .join('')
      : h
  const n = parseInt(full, 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

export default function NeuralBackground({
  className,
  color = '#6366f1',
  colors,
  fadeColor = '#06080f',
  trailOpacity = 0.14,
  particleCount = 600,
  density = 1,
  speed = 1,
  glow = true,
}: NeuralBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Read through a ref so the animation loop picks up density changes without
  // the effect re-running — re-running would reseed every particle, which is
  // exactly the reset we're avoiding.
  const densityRef = useRef(density)
  // Set only under prefers-reduced-motion, where a single static frame is drawn
  // and there's no loop to ease the change in.
  const staticRenderRef = useRef<(() => void) | null>(null)
  useEffect(() => {
    densityRef.current = density
    staticRenderRef.current?.()
  }, [density])

  // Depend on the palette's *contents*, not the array's identity. Callers pass
  // an inline array literal, which is a new object every render and would
  // otherwise re-run the effect and reseed the whole field.
  const paletteKey = (colors && colors.length > 0 ? colors : [color]).join(',')

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const palette = paletteKey.split(',')
    const [fr, fg, fb] = hexToRgb(fadeColor)
    const fadeFill = `rgba(${fr}, ${fg}, ${fb}, ${trailOpacity})`
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    let width = container.clientWidth
    let height = container.clientHeight
    let particles: Particle[] = []
    let animationFrameId = 0
    let lastFrame = 0

    // Ambient drift looks identical at 30fps but halves the per-frame cost.
    const FRAME_INTERVAL = 1000 / 30
    // Cap the backing-store resolution: full-canvas overdraw every frame at
    // native retina/4K DPR is the single biggest cost. 1.5 (1 on mobile) is
    // visually indistinguishable for blurred trails.
    const dprCap = () => Math.min(window.devicePixelRatio || 1, width < 768 ? 1 : 1.5)

    class Particle {
      x = 0
      y = 0
      vx = 0
      vy = 0
      age = 0
      life = 0
      color = palette[0]
      /** Eased 0–1 visibility, so density changes fade instead of popping. */
      vis = 1

      constructor() {
        this.reset(true)
      }

      reset(spread = false) {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = 0
        this.vy = 0
        // Long lives keep the field drifting instead of visibly regenerating.
        // At 30fps this is ~30-70s per particle, so a respawn is a rare,
        // individually invisible event (alpha is 0 at both ends of a life)
        // rather than the whole field dissolving every few seconds.
        this.life = Math.random() * 1200 + 900
        // Spread initial ages across the WHOLE life, not a fixed 100 frames —
        // otherwise every particle starts near birth and the field regenerates
        // in synchronised waves.
        this.age = spread ? Math.random() * this.life : 0
        this.color = palette[(Math.random() * palette.length) | 0]
      }

      update() {
        // Flow field: angle derived from position for smooth currents
        const angle =
          (Math.cos(this.x * 0.005) + Math.sin(this.y * 0.005)) * Math.PI

        this.vx += Math.cos(angle) * 0.2 * speed
        this.vy += Math.sin(angle) * 0.2 * speed

        this.x += this.vx
        this.y += this.vy
        this.vx *= 0.95
        this.vy *= 0.95

        this.age++
        if (this.age > this.life) {
          this.reset()
        }

        if (this.x < 0) this.x = width
        if (this.x > width) this.x = 0
        if (this.y < 0) this.y = height
        if (this.y > height) this.y = 0
      }

      draw(context: CanvasRenderingContext2D) {
        const flow = Math.max(0, 1 - Math.abs(this.age / this.life - 0.5) * 2) * 0.9
        context.globalAlpha = flow * this.vis
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, 1.6, 1.6)
      }
    }

    const init = () => {
      const dpr = dprCap()
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      // Reset any prior transform before re-applying DPR scale
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Paint a solid base so there's no flash before trails build up
      ctx.globalCompositeOperation = 'source-over'
      ctx.globalAlpha = 1
      ctx.fillStyle = fadeColor
      ctx.fillRect(0, 0, width, height)

      // The count is sized for the desktop viewport. A phone covers a fraction
      // of the area and every particle costs battery, so it runs far sparser.
      const effectiveCount = width < 768 ? Math.round(particleCount * 0.2) : particleCount
      particles = []
      for (let i = 0; i < effectiveCount; i++) {
        particles.push(new Particle())
      }
    }

    const drawParticles = () => {
      // Additive blending gives the luminous "neural" glow.
      ctx.globalCompositeOperation = glow ? 'lighter' : 'source-over'
      for (const p of particles) if (p.vis > 0.01) p.draw(ctx)
    }

    const renderStaticFrame = () => {
      // No animation loop here to ease `vis`, so apply density directly.
      const visibleCount = Math.round(particles.length * densityRef.current)
      particles.forEach((p, i) => {
        p.vis = i < visibleCount ? 1 : 0
      })

      ctx.globalCompositeOperation = 'source-over'
      ctx.globalAlpha = 1
      ctx.fillStyle = fadeColor
      ctx.fillRect(0, 0, width, height)
      drawParticles()
      ctx.globalAlpha = 1
    }

    const animate = (now = 0) => {
      animationFrameId = requestAnimationFrame(animate)
      if (document.hidden) return

      // Throttle to the target frame rate
      if (now - lastFrame < FRAME_INTERVAL) return
      lastFrame = now

      // Trail fade
      ctx.globalCompositeOperation = 'source-over'
      ctx.globalAlpha = 1
      ctx.fillStyle = fadeFill
      ctx.fillRect(0, 0, width, height)

      // Density is applied by fading the surplus out, never by rebuilding the
      // field. Every particle keeps flowing underneath, so a route change is a
      // gentle thinning rather than a reset.
      const visibleCount = Math.round(particles.length * densityRef.current)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.vis += ((i < visibleCount ? 1 : 0) - p.vis) * 0.06
        p.update()
      }
      drawParticles()
      ctx.globalAlpha = 1
    }

    const start = () => {
      cancelAnimationFrame(animationFrameId)
      init()
      if (prefersReducedMotion.matches) {
        // Let a density change repaint the still frame. Never expose this while
        // animating: it fills the canvas opaquely and would wipe the trails.
        staticRenderRef.current = renderStaticFrame
        renderStaticFrame()
      } else {
        staticRenderRef.current = null
        animate()
      }
    }

    const handleResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      if (w === width && h === height) return

      // Mobile browsers fire resize while you scroll, as the URL bar collapses
      // and expands. That's a height-only change of roughly the toolbar's size.
      // Re-initialising there repaints the canvas and reseeds every particle,
      // which reads as the whole background refreshing mid-scroll. The canvas
      // sits on a container filled with the same base colour, so leaving it at
      // the old height for that jitter is invisible — far better than a reset.
      if (w === width && Math.abs(h - height) < 180) return

      width = w
      height = h
      start()
    }

    start()

    window.addEventListener('resize', handleResize)
    prefersReducedMotion.addEventListener('change', start)

    return () => {
      cancelAnimationFrame(animationFrameId)
      staticRenderRef.current = null
      window.removeEventListener('resize', handleResize)
      prefersReducedMotion.removeEventListener('change', start)
    }
  }, [paletteKey, fadeColor, trailOpacity, particleCount, speed, glow])

  return (
    <div
      ref={containerRef}
      style={{ backgroundColor: fadeColor }}
      className={cn('relative h-full w-full overflow-hidden', className)}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  )
}
