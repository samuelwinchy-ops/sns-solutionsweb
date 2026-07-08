'use client'

import * as React from 'react'

/* HSL *hues* (0–360); the glow is drawn in HSL so only the number re-tints it.
   239 ≈ indigo (site primary), 258 ≈ violet, 187 ≈ cyan, 292 ≈ pink/spark. */
type GlowColor = 'indigo' | 'violet' | 'cyan' | 'spark'
const GLOW_HUE: Record<GlowColor, number> = {
  indigo: 239,
  violet: 258,
  cyan: 187,
  spark: 292,
}

export interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: GlowColor
  /** Strength of the interior glow, 0–1. */
  intensity?: number
}

/** True only on devices that can actually hover with a fine pointer (mouse). */
function useHoverCapable() {
  const [capable, setCapable] = React.useState(false)
  React.useEffect(() => {
    if (!window.matchMedia) return
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setCapable(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])
  return capable
}

export default function GlowCard({
  glowColor = 'indigo',
  intensity = 0.9,
  className = '',
  children,
  style,
  ...props
}: GlowCardProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const raf = React.useRef<number | null>(null)
  const hoverCapable = useHoverCapable()
  const hue = GLOW_HUE[glowColor] ?? GLOW_HUE.indigo

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!hoverCapable || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    if (raf.current) return // rAF-throttle: one DOM write per frame
    raf.current = requestAnimationFrame(() => {
      raf.current = null
      const el = ref.current
      if (!el) return
      el.style.setProperty('--glow-x', `${x}px`)
      el.style.setProperty('--glow-y', `${y}px`)
      el.style.setProperty('--glow-opacity', '1')
    })
  }
  const onLeave = () => ref.current?.style.setProperty('--glow-opacity', '0')

  React.useEffect(
    () => () => {
      if (raf.current) cancelAnimationFrame(raf.current)
    },
    []
  )

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={
        {
          '--glow-hue': hue,
          '--glow-x': '50%',
          '--glow-y': '0%',
          // soft constant glow on touch; pointer-driven on hover devices
          '--glow-opacity': hoverCapable ? 0 : 0.5,
          '--glow-intensity': intensity,
          ...style,
        } as React.CSSProperties
      }
      className={
        'group relative overflow-hidden rounded-sns border border-white/[0.08] ' +
        'bg-sns-surface transition-colors duration-500 ease-sns-out ' +
        className
      }
      {...props}
    >
      {/* pointer-following interior glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: 'var(--glow-opacity)' as unknown as number,
          background:
            'radial-gradient(300px circle at var(--glow-x) var(--glow-y), hsl(var(--glow-hue) 90% 65% / calc(0.18 * var(--glow-intensity))), transparent 62%)',
        }}
      />
      {/* hover ring — border lights up in the accent hue */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 rounded-sns opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: 'inset 0 0 0 1px hsl(var(--glow-hue) 85% 70% / 0.45)' }}
      />
      {/* static top-edge sheen */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, hsl(var(--glow-hue) 90% 72% / 0.5), transparent)',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
