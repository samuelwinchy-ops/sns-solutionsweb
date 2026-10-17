'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import Image from 'next/image'
import { easeRate, renderHelix, type HelixTheme } from '@/lib/helix-contour'
import { useMotionPaused } from '@/lib/motion'

const REDUCED = '(prefers-reduced-motion: reduce)'
const FALLBACK = '/immvela/redesign/helix-light.svg'

/**
 * Immvela's helix, drawn live as the app draws it (lib/helix-contour.ts): the band turns in 3D, so the
 * hairlines move with depth instead of a picture being rotated. It fills its box, which must be square.
 *
 * It only turns: a constant band width, no breathing or pulse. `rate` is turns per 24 s and is eased
 * (about a second to settle), never jumped. `intro` draws the lines in once, turning fast,
 * then settles to `rate`. The site's pause switch (lib/motion.ts) eases it to a stop. Reduced motion gets
 * one still frame and no loop. The loop sleeps while the
 * canvas is off screen or the tab is hidden. Before the client takes over (and with no JavaScript) the
 * static SVG stands in; a helix with an intro keeps that fallback for no-JavaScript visitors only.
 */
export default function HelixCanvas({
  rate = 1,
  intro,
  theme = 'light',
  className,
  style,
}: {
  rate?: number
  intro?: { delay: number; duration: number }
  theme?: HelixTheme
  className?: string
  style?: CSSProperties
}) {
  const box = useRef<HTMLSpanElement | null>(null)
  const canvas = useRef<HTMLCanvasElement | null>(null)
  const [mode, setMode] = useState<'server' | 'still' | 'live'>('server')
  const paused = useMotionPaused()
  const rateRef = useRef(rate)
  rateRef.current = paused ? 0 : rate
  const pausedRef = useRef(paused)
  pausedRef.current = paused
  const introRef = useRef(intro)

  useEffect(() => {
    const q = window.matchMedia?.(REDUCED)
    const sync = () => setMode(q?.matches ? 'still' : 'live')
    sync()
    q?.addEventListener('change', sync)
    return () => q?.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const el = box.current
    const c = canvas.current
    const ctx = c?.getContext('2d')
    if (mode === 'server' || !el || !c || !ctx) return

    let size = 0
    let dpr = 1
    let t = 0
    let elapsed = 0
    // Arriving with motion already paused: no draw-in either, the helix is simply there.
    let reveal = mode === 'live' && introRef.current && !pausedRef.current ? 0 : 1
    let current = reveal < 1 ? 3 : rateRef.current

    const draw = () => {
      if (!size) return
      renderHelix(ctx, size, theme, t, dpr, undefined, reveal)
    }
    const measure = () => {
      const w = Math.min(el.clientWidth, el.clientHeight || el.clientWidth)
      if (!w) return
      // CSS zoom (the phone mockup) makes the drawn box smaller or larger than its layout box.
      const zoom = el.getBoundingClientRect().width / (el.clientWidth || 1) || 1
      size = w
      dpr = Math.min(3, (window.devicePixelRatio || 1) * zoom)
      c.width = Math.round(size * dpr)
      c.height = c.width
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      draw()
    }
    measure()
    const resized = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(measure)
    resized?.observe(el)
    if (mode === 'still') return () => resized?.disconnect()

    let id = 0
    let last = 0
    let inView = true
    let visible = document.visibilityState !== 'hidden'
    let on = false
    const tick = (now: number) => {
      const dt = last ? Math.min(0.1, (now - last) / 1000) : 0
      last = now
      elapsed += dt
      const io = introRef.current
      let target = rateRef.current
      if (io && reveal < 1) {
        const p = Math.min(1, Math.max(0, (elapsed - io.delay) / io.duration))
        reveal = 1 - Math.pow(1 - p, 3)
        target = 3
      }
      current = easeRate(current, target, dt)
      // The easing is exponential: snap the last imperceptible step so rate 0 really stands still.
      if (Math.abs(current - target) < 0.004) current = target
      if (current !== 0 || reveal < 1) {
        t += dt * current
        draw()
      }
      id = requestAnimationFrame(tick)
    }
    const sync = () => {
      const want = inView && visible
      if (want && !on) {
        on = true
        last = 0
        id = requestAnimationFrame(tick)
      } else if (!want && on) {
        on = false
        cancelAnimationFrame(id)
      }
    }
    const seen =
      typeof IntersectionObserver === 'undefined'
        ? null
        : new IntersectionObserver((entries) => {
            inView = entries.some((e) => e.isIntersecting)
            sync()
          })
    seen?.observe(c)
    const onVisibility = () => {
      visible = document.visibilityState !== 'hidden'
      sync()
    }
    document.addEventListener('visibilitychange', onVisibility)
    sync()
    return () => {
      on = false
      cancelAnimationFrame(id)
      seen?.disconnect()
      resized?.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [mode, theme])

  const fallback = (
    <Image
      src={FALLBACK}
      alt=""
      width={200}
      height={200}
      unoptimized
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  )

  return (
    <span ref={box} className={className} style={{ display: 'block', ...style }} data-helix={mode}>
      {mode === 'server' && (intro ? <noscript>{fallback}</noscript> : fallback)}
      <canvas
        ref={canvas}
        aria-hidden="true"
        style={{ display: mode === 'server' ? 'none' : 'block', width: '100%', height: '100%' }}
      />
    </span>
  )
}
