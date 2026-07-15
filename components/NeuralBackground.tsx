'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { getShapeTarget } from '@/lib/shapeTarget'

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
  speed = 1,
  glow = true,
}: NeuralBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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
    const mouse = { x: -1000, y: -1000 }

    // Ambient drift looks identical at 30fps but halves the per-frame cost.
    const FRAME_INTERVAL = 1000 / 30
    // Milliseconds between successive outline points being claimed. ~620 points
    // at 12ms is a little over seven seconds to draw the whole mark.
    const REVEAL_PER_POINT = 12
    let revealStart = 0
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
      /** 0 = drifting in the field, 1 = fully held by a shape target. */
      cap = 0
      held = false

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

      update(tx: number | null, ty: number | null) {
        const held = tx !== null && ty !== null
        this.held = held
        this.cap += ((held ? 1 : 0) - this.cap) * 0.02

        if (held) {
          // Drift onto the shape and stay there. Weak spring and heavy damping
          // so a particle glides into place over a couple of seconds instead of
          // snapping to it. No ageing while held, or it would reach the end of
          // its life and teleport out of the mark.
          this.vx += (tx - this.x) * 0.012
          this.vy += (ty - this.y) * 0.012
          this.x += this.vx
          this.y += this.vy
          this.vx *= 0.9
          this.vy *= 0.9
          return
        }

        // Flow field: angle derived from position for smooth currents
        const angle =
          (Math.cos(this.x * 0.005) + Math.sin(this.y * 0.005)) * Math.PI

        this.vx += Math.cos(angle) * 0.2 * speed
        this.vy += Math.sin(angle) * 0.2 * speed

        // Cursor repulsion — compare squared distance to avoid sqrt per frame
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distSq = dx * dx + dy * dy
        const interactionRadius = 150
        if (distSq < interactionRadius * interactionRadius && distSq > 0) {
          const distance = Math.sqrt(distSq)
          const force = (interactionRadius - distance) / interactionRadius
          this.vx -= dx * force * 0.05
          this.vy -= dy * force * 0.05
        }

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
        // Even out toward a steady value as a particle is captured, so the mark
        // reads evenly instead of inheriting each particle's place in its life.
        context.globalAlpha = flow + (0.8 - flow) * this.cap
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

      const effectiveCount =
        width < 768 ? Math.round(particleCount * 0.45) : particleCount
      particles = []
      for (let i = 0; i < effectiveCount; i++) {
        particles.push(new Particle())
      }
    }

    const drawParticles = () => {
      // Drifting particles blend additively for the luminous "neural" glow.
      ctx.globalCompositeOperation = glow ? 'lighter' : 'source-over'
      for (const p of particles) if (!p.held) p.draw(ctx)

      // Held ones are drawn flat. They sit still, so additive blending would
      // re-add their colour every frame while the trail fade only removes 14%
      // of it — any stationary additive dot climbs to white regardless of its
      // alpha. source-over keeps the mark the same blue as the field.
      ctx.globalCompositeOperation = 'source-over'
      for (const p of particles) if (p.held) p.draw(ctx)
    }

    const renderStaticFrame = () => {
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

      // A registered shape (the hero logo) pulls a slice of the field onto its
      // outline. The canvas is fixed to the viewport, so the element's client
      // rect maps straight onto canvas coordinates — and re-reading it each
      // frame keeps the mark pinned to the hero box as the page scrolls,
      // rather than the particles letting go and scattering.
      const target = getShapeTarget()
      const rect = target ? target.getRect() : null
      const active = !!rect && rect.width > 0
      const pts = active ? target!.points : null
      const span = active ? Math.min(rect!.width, rect!.height) * 0.84 : 0
      const ox = active ? rect!.left + (rect!.width - span) / 2 : 0
      const oy = active ? rect!.top + (rect!.height - span) / 2 : 0

      // Draw the outline on gradually, in the order the points were traced, so
      // the mark is built as a line rather than appearing everywhere at once.
      if (active && revealStart === 0) revealStart = now
      const revealed = active
        ? Math.min(pts!.length, Math.floor((now - revealStart) / REVEAL_PER_POINT))
        : 0
      const heldCount = pts ? Math.min(revealed, pts.length, particles.length) : 0

      for (let i = 0; i < particles.length; i++) {
        if (pts && i < heldCount) {
          particles[i].update(ox + pts[i].x * span, oy + pts[i].y * span)
        } else {
          particles[i].update(null, null)
        }
      }
      drawParticles()
      ctx.globalAlpha = 1
    }

    const start = () => {
      cancelAnimationFrame(animationFrameId)
      init()
      if (prefersReducedMotion.matches) {
        renderStaticFrame()
      } else {
        animate()
      }
    }

    const handleResize = () => {
      width = container.clientWidth
      height = container.clientHeight
      start()
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Canvas is fixed to the viewport, so client coords map directly
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    start()

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    prefersReducedMotion.addEventListener('change', start)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
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
