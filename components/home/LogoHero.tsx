'use client'

import { useEffect, useRef, useState } from 'react'
import HelixCanvas from '@/components/immvela/HelixCanvas'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath } from '@/i18n/config'

/*
 * The home page's first screen: the headline and one action over a slideshow of the two product marks,
 * seven seconds each with a 1.2 s crossfade. Immvela: its live helix (only ever rotating). QFUtool: its dial
 * (components/Mark.js in the QFUtool app) revs, overshoots and settles exactly on the logo's needle angle,
 * then holds still. "See our products" takes the colour of the product on screen.
 * The loop runs only while the billboard is on screen, the tab is visible and the slideshow is not paused;
 * pausing also stops the helix. Reduced motion: the Immvela slide only, nothing moves, no control.
 */

const SLIDE = 7
const FADE = 1.2
const IMMVELA_RGB = [61, 187, 132]
const QFUTOOL_RGB = [236, 116, 88]
const LOGO = (Math.atan2(-4.5, 5) * 180) / Math.PI // the needle's angle in the mark
const START = -183 // rotation from the mark's pose back to "zero", down and to the left
const TICKS = Array.from({ length: 21 }, (_, i) => {
  const rel = START + i * ((24 - START) / 20)
  const a = ((LOGO + rel) * Math.PI) / 180
  const r2 = i % 5 === 0 ? 9.55 : 9.15
  return {
    rel,
    x1: 12 + 8.3 * Math.cos(a),
    y1: 12 + 8.3 * Math.sin(a),
    x2: 12 + r2 * Math.cos(a),
    y2: 12 + r2 * Math.sin(a),
    major: i % 5 === 0,
  }
})

const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x))
const ease = (x: number) => 1 - Math.pow(1 - clamp(x), 3)
const smooth = (x: number) => {
  const c = clamp(x)
  return c * c * (3 - 2 * c)
}
// A damped spring towards the mark's pose, launched with a kick, so the needle overshoots once and settles.
const Z = 0.5
const W = 4.6
const WD = W * Math.sqrt(1 - Z * Z)
const spring = (tau: number, x0: number, v0: number) =>
  Math.exp(-Z * W * tau) * (x0 * Math.cos(WD * tau) + ((v0 + Z * W * x0) / WD) * Math.sin(WD * tau))
function angle(t: number) {
  if (t < 0.35) return START
  if (t < 0.95) {
    const u = (t - 0.35) / 0.6
    return u < 0.35
      ? START + 30 * smooth(u / 0.35)
      : START + 30 + (-168 - START - 30) * smooth((u - 0.35) / 0.35)
  }
  // The last fraction of a degree eases out, so from 3.4 s the needle is exactly at the mark's angle.
  return spring(t - 0.95, -168, 260) * (1 - smooth((t - 3.0) / 0.4))
}
const speed = (t: number) => Math.abs(angle(t + 0.008) - angle(t - 0.008)) / 0.016

export default function LogoHero({ locale = defaultLocale }: { locale?: Locale }) {
  const dict = getDict(locale)
  const h = dict.hero
  const t = dict.home
  const products = localePath(locale, '/products')

  const [paused] = useState(false)
  const pausedRef = useRef(false)
  const syncRef = useRef<() => void>(() => {})
  const section = useRef<HTMLElement>(null)
  const [onImmvela, setOnImmvela] = useState(true)
  const slideA = useRef<HTMLDivElement>(null)
  const slideB = useRef<HTMLDivElement>(null)
  const go = useRef<HTMLAnchorElement>(null)
  const barA = useRef<HTMLElement>(null)
  const barB = useRef<HTMLElement>(null)
  const needle = useRef<SVGPathElement>(null)
  const glow = useRef<SVGPathElement>(null)
  const arc = useRef<SVGPathElement>(null)
  const ticks = useRef<(SVGLineElement | null)[]>([])
  const trail = useRef<(SVGPathElement | null)[]>([])
  const wordB = useRef<HTMLSpanElement>(null)
  const audB = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    pausedRef.current = paused
    syncRef.current()
  }, [paused])

  useEffect(() => {
    const rev = (s: number) => {
      const a = angle(s)
      needle.current?.setAttribute('transform', `rotate(${a} 12 12)`)
      glow.current?.setAttribute('transform', `rotate(${a} 12 12)`)
      glow.current?.setAttribute('opacity', String(clamp(speed(s) / 500) * 0.9))
      trail.current.forEach((g, i) => {
        const tt = s - (i + 1) * 0.022
        g?.setAttribute('transform', `rotate(${angle(tt)} 12 12)`)
        g?.setAttribute('opacity', String(clamp(speed(tt) / 600) * 0.32 * (1 - i / 7)))
      })
      let reach = -Infinity
      for (let k = 0; k <= 40; k++) reach = Math.max(reach, angle((Math.max(0, s) * k) / 40))
      const out = smooth((s - 2.9) / 0.9)
      TICKS.forEach((tk, i) => {
        const lit = reach >= tk.rel - 1
        const el = ticks.current[i]
        el?.setAttribute('stroke', lit ? '#e65d3f' : '#f3f6f8')
        el?.setAttribute('opacity', ((lit ? 1 : 0.22) * (1 - out)).toFixed(3))
      })
      arc.current?.setAttribute('opacity', (0.3 + 0.7 * smooth((s - 2.2) / 0.6)).toFixed(3))
      const w = ease((s - 2.15) / 0.5)
      for (const el of [wordB.current, audB.current]) {
        if (!el) continue
        el.style.opacity = String(w)
        el.style.transform = `translateY(${(1 - w) * 14}px)`
      }
    }
    let shownA = true
    const frame = (T: number) => {
      const c = T % (2 * SLIDE)
      const a = c < SLIDE ? (T >= 2 * SLIDE ? ease(c / FADE) : 1) : 1 - ease((c - SLIDE) / FADE)
      if (slideA.current) slideA.current.style.opacity = String(a)
      if (slideB.current) slideB.current.style.opacity = String(1 - a)
      rev(c < SLIDE ? 99 : c - SLIDE - 0.2)
      const m = IMMVELA_RGB.map((v, i) => Math.round(v * a + QFUTOOL_RGB[i] * (1 - a)))
      if (go.current) go.current.style.background = `rgb(${m.join(',')})`
      const onA = c < SLIDE
      if (barA.current) barA.current.style.width = onA ? `${(c / SLIDE) * 100}%` : '0'
      if (barB.current) barB.current.style.width = onA ? '0' : `${((c - SLIDE) / SLIDE) * 100}%`
      if (onA !== shownA) {
        shownA = onA
        setOnImmvela(onA)
      }
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      frame(0)
      return
    }
    let T = 0
    let last = 0
    let id = 0
    let on = false
    let inView = true
    let visible = document.visibilityState !== 'hidden'
    const tick = (now: number) => {
      const dt = last ? Math.min(0.1, (now - last) / 1000) : 0
      last = now
      T += dt
      frame(T)
      id = requestAnimationFrame(tick)
    }
    const sync = () => {
      const want = inView && visible && !pausedRef.current
      if (want && !on) {
        on = true
        last = 0
        id = requestAnimationFrame(tick)
      } else if (!want && on) {
        on = false
        cancelAnimationFrame(id)
      }
    }
    syncRef.current = sync
    frame(0)
    const seen =
      typeof IntersectionObserver === 'undefined' || !section.current
        ? null
        : new IntersectionObserver(([e]) => {
            inView = e.isIntersecting
            sync()
          })
    if (seen && section.current) seen.observe(section.current)
    const onVis = () => {
      visible = document.visibilityState !== 'hidden'
      sync()
    }
    document.addEventListener('visibilitychange', onVis)
    sync()
    return () => {
      syncRef.current = () => {}
      cancelAnimationFrame(id)
      seen?.disconnect()
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  return (
    <section className="hm-bb" aria-label={t.slidesLabel} ref={section}>
      <div className="hm-slide hm-s-imv" ref={slideA} aria-hidden="true">
        <div className="hm-logo">
          <HelixCanvas theme="dark" className="hm-art" rate={paused ? 0 : 1} />
          <span className="hm-wm">
            Immvela<i>.</i>
          </span>
          <span className="hm-aud">{t.immvelaAudience}</span>
        </div>
      </div>
      <div className="hm-slide hm-s-qfu" ref={slideB} aria-hidden="true">
        <div className="hm-logo">
          <div className="hm-art">
            <svg viewBox="0 0 24 24">
              <defs>
                <filter id="hm-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation=".35" />
                </filter>
              </defs>
              <circle
                cx="12"
                cy="12"
                r="10.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <g>
                {TICKS.map((tk, i) => (
                  <line
                    key={i}
                    ref={(el) => {
                      ticks.current[i] = el
                    }}
                    x1={tk.x1}
                    y1={tk.y1}
                    x2={tk.x2}
                    y2={tk.y2}
                    strokeWidth={tk.major ? 0.42 : 0.3}
                    strokeLinecap="round"
                    opacity="0"
                  />
                ))}
              </g>
              <path
                ref={arc}
                d="M7 16.5 A6.5 6.5 0 0 0 17 16.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="1.2 2"
              />
              <g>
                {Array.from({ length: 7 }, (_, i) => (
                  <path
                    key={i}
                    ref={(el) => {
                      trail.current[i] = el
                    }}
                    d="M12 12 L17 7.5"
                    stroke="#e65d3f"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    opacity="0"
                  />
                ))}
              </g>
              <path
                ref={glow}
                d="M12 12 L17 7.5"
                stroke="#e65d3f"
                strokeWidth="2.6"
                strokeLinecap="round"
                filter="url(#hm-glow)"
                opacity="0"
              />
              <path
                ref={needle}
                d="M12 12 L17 7.5"
                stroke="#e65d3f"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="12" cy="12" r="1.6" fill="currentColor" />
            </svg>
          </div>
          <span className="hm-wm" ref={wordB}>
            QFU<span className="hm-tool">tool</span>
          </span>
          <span className="hm-aud" ref={audB}>
            {t.qfutoolAudience}
          </span>
        </div>
      </div>
      <div className="hm-shade" />

      <div className="hm-fg">
        <h1 className="hm-h1">
          {h.h1a} <em>{h.h1b}</em>
        </h1>
        <a className="hm-go" href={products} ref={go}>
          {h.ctaProducts}
        </a>
      </div>

      <div className="hm-cap">
        <a href={`${products}#immvela`} data-active={onImmvela ? '' : undefined}>
          Immvela
          <span className="hm-bar">
            <i ref={barA} />
          </span>
        </a>
        <a href={`${products}#qfutool`} data-active={onImmvela ? undefined : ''}>
          QFUtool
          <span className="hm-bar">
            <i ref={barB} />
          </span>
        </a>
      </div>
    </section>
  )
}
