'use client'

import { type ReactNode, useEffect, useRef, useState } from 'react'

/*
 * The stories after the lead. On wide screens this adds nothing: the wrapper is display: contents and the
 * stories are cells of the news grid. On a phone they become one row of cards to swipe, with a labelled
 * header, previous/next buttons and a dot per card; the row nudges once when it first comes into view.
 */
export default function SwipeRow({
  label,
  count,
  prev,
  next,
  children,
}: {
  label: string
  count: number
  prev: string
  next: string
  children: ReactNode
}) {
  const row = useRef<HTMLUListElement>(null)
  const [at, setAt] = useState(0)
  const [nudge, setNudge] = useState(false)

  const step = () => {
    const el = row.current
    const first = el?.firstElementChild as HTMLElement | null
    if (!el || !first) return 0
    return first.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || '0')
  }

  useEffect(() => {
    const el = row.current
    if (!el) return
    const onScroll = () => {
      const s = step()
      if (s) setAt(Math.min(count - 1, Math.round(el.scrollLeft / s)))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [count])

  useEffect(() => {
    const el = row.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (getComputedStyle(el).overflowX !== 'auto') return
    const seen = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        seen.disconnect()
        setNudge(true)
      },
      { threshold: 0.6 }
    )
    seen.observe(el)
    return () => seen.disconnect()
  }, [])

  const go = (dir: number) => row.current?.scrollBy({ left: dir * step(), behavior: 'smooth' })

  return (
    <div className="hm-swipe">
      <div className="hm-swipe-head">
        <p className="hm-eyebrow">
          {label} <span className="hm-swipe-count">· {count}</span>
        </p>
        <div className="hm-swipe-nav">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={prev}
            aria-disabled={at === 0}
            className={at === 0 ? 'is-end' : undefined}
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" aria-hidden="true">
              <path
                d="M8 2 2 8l6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={next}
            aria-disabled={at === count - 1}
            className={at === count - 1 ? 'is-end' : undefined}
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" aria-hidden="true">
              <path
                d="m2 2 6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <ul
        className={nudge ? 'hm-rest is-nudge' : 'hm-rest'}
        ref={row}
        onAnimationEnd={() => setNudge(false)}
      >
        {children}
      </ul>
      <div className="hm-dots" aria-hidden="true">
        {Array.from({ length: count }, (_, i) => (
          <i key={i} className={i === at ? 'is-on' : undefined} />
        ))}
      </div>
    </div>
  )
}
