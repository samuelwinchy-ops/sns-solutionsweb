'use client'

import { useCallback, useEffect, useRef, useState, type ChangeEvent } from 'react'
import { track } from '@vercel/analytics'
import type { Locale } from '@/i18n/config'
import type { T } from '@/i18n/immvela'

/**
 * The home page's behaviour, carried over from the logic class at the foot of
 * design/immvela-redesign/project/Immvela.dc.html. The sections read everything they bind
 * from the object this returns, under the names the design used.
 *
 * Motion budget: the product stage plays once, when a third of it is on screen; the trace answers
 * its question once in view if the visitor has not; everything else moves only when the visitor
 * acts. Reduced motion shows every final frame.
 */
/** The trace section's example listing (Praterstraße 31): each value, its document, and the line. */
const SOURCES = {
  wf: ['Wohnfläche 76 m²', 'Grundriss', 'Wohnfläche gesamt: 76,0 m²'],
  zi: ['Zimmer 3', 'Grundriss', 'Zimmer: 3'],
  bj: ['Baujahr 1898', 'Energieausweis', 'Baujahr: 1898'],
  hwb: ['HWB 61', 'Energieausweis', 'Heizwärmebedarf HWB: 61 kWh/m²a'],
  fg: ['fGEE 1,02', 'Energieausweis', 'Gesamtenergieeffizienz-Faktor fGEE: 1,02'],
} as const
export type TraceKey = keyof typeof SOURCES
type Phase = 'idle' | 'play' | 'out' | 'reset' | 'done'

export function useHomeVals(
  t: T,
  links: {
    locale: Locale
    path: (sub?: string) => string
    privacyHref: string
    teamHref: string
  }
) {
  const [pvRun, setPvRun] = useState(0)
  const [pvPhase, setPvPhase] = useState<Phase>('idle')
  // trace: plays once in view, a step about every second and a half (0 waiting, 1 the two values,
  // 2 the source slides out as the line draws, 3 the line lifts, 4 confirmed); then every value traces
  const [trStep, setTrStep] = useState(0)
  const [trSel, setTrSel] = useState<TraceKey | null>(null)
  const [trStill, setTrStill] = useState(true)
  const trStageEl = useRef<HTMLDivElement | null>(null)
  const [swEase, setSwEase] = useState(false)
  const [swPos, setSwPos] = useState(50)
  // The product helix's speed follows the stage: fast while the documents go in, slower while it
  // drafts, back to rest once the drafts are out. HelixCanvas eases every change.
  const [pvHelixRate, setPvHelixRate] = useState(1)

  const stageEl = useRef<HTMLDivElement | null>(null)
  const seen = useRef(false)
  const reduced = useRef(false)
  const timers = useRef<{ t?: number; a?: number; b?: number }>({})

  const pvPlay = useCallback(() => {
    if (seen.current) return
    seen.current = true
    if (!reduced.current) setPvPhase('play')
  }, [])

  useEffect(() => {
    reduced.current = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    if (reduced.current) {
      seen.current = true
      setPvPhase('done')
      return
    }
    const el = stageEl.current
    if (!el || !('IntersectionObserver' in window)) {
      pvPlay()
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting && e.intersectionRatio >= 0.34)) {
          pvPlay()
          io.disconnect()
        }
      },
      { rootMargin: '-84px 0px 0px 0px', threshold: [0, 0.35] }
    )
    io.observe(el)
    const tm = timers.current
    return () => {
      io.disconnect()
      clearTimeout(tm.t)
      cancelAnimationFrame(tm.a ?? 0)
      cancelAnimationFrame(tm.b ?? 0)
    }
  }, [pvPlay])

  useEffect(() => {
    if (pvPhase !== 'play') {
      if (pvPhase === 'idle' || pvPhase === 'done') setPvHelixRate(1)
      return
    }
    setPvHelixRate(3)
    const steps: [number, number][] = [
      [2300, 1.6],
      [4100, 1],
    ]
    const ids = steps.map(([ms, r]) => window.setTimeout(() => setPvHelixRate(r), ms))
    return () => ids.forEach(clearTimeout)
  }, [pvPhase, pvRun])

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setTrStep(4)
      setTrSel('wf')
      return
    }
    const el = trStageEl.current
    if (!el || !('IntersectionObserver' in window)) {
      setTrStep(4)
      setTrSel('wf')
      return
    }
    const timers: number[] = []
    const at = (ms: number, f: () => void) => timers.push(window.setTimeout(f, ms))
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting && e.intersectionRatio >= 0.5)) return
        io.disconnect()
        at(700, () => setTrStep(1))
        at(2300, () => {
          setTrStill(false)
          setTrSel('wf')
          setTrStep(2)
        })
        at(5200, () => setTrStep(3))
        at(6900, () => setTrStep(4))
      },
      { rootMargin: '-84px 0px 0px 0px', threshold: [0, 0.5] }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      timers.forEach(clearTimeout)
    }
  }, [])

  const pvReplay = useCallback(() => {
    seen.current = true
    const tm = timers.current
    clearTimeout(tm.t)
    cancelAnimationFrame(tm.a ?? 0)
    cancelAnimationFrame(tm.b ?? 0)
    setPvPhase('out')
    tm.t = window.setTimeout(() => {
      setPvRun((r) => r + 1)
      setPvPhase('reset')
      tm.a = requestAnimationFrame(() => {
        tm.b = requestAnimationFrame(() => setPvPhase('play'))
      })
    }, 300)
  }, [])

  const scrub = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const n = Number(e.target.value)
    if (Number.isNaN(n)) return
    setSwEase(false)
    setSwPos(Math.max(0, Math.min(100, n)))
  }, [])

  const src = trSel ? SOURCES[trSel] : null
  const done = trStep >= 4
  const isOn = (k: TraceKey) => done && trSel === k
  return {
    ...links,
    setMark: undefined as undefined | ((el: HTMLDivElement | null) => void),
    onHeroCta: () => track('immvela_hero_cta'),

    pvRun,
    pvHelixRate,
    pvStageClass: 'pv-stage is-' + pvPhase,
    pvReplay,
    pvSetStage: (el: HTMLDivElement | null) => {
      stageEl.current = el
    },

    trSetStage: (el: HTMLDivElement | null) => {
      trStageEl.current = el
    },
    trStageClass: 'tr-stage' + (trStill ? ' is-still' : '') + (done ? '' : ' tr-slow'),
    trStep,
    trDone: done,
    trCell: (k: TraceKey) => 'tr-v' + (k === 'wf' && !done ? ' is-ask' : isOn(k) ? ' is-on' : ''),
    trPressed: (k: TraceKey) => isOn(k),
    trPick: (k: TraceKey) => () => {
      setTrSel(k)
      setTrStill(false)
    },
    trDoc: (doc: string) => 'tr-doc' + (src && src[1] === doc ? ' is-on' : ''),
    trHl: (k: TraceKey) =>
      'tr-hl' +
      (trSel === k && (done || trStep >= 3) ? ' is-on' : '') +
      (done ? ' is-confirmed' : ''),
    trWire: (k: TraceKey) => 'tr-k' + (trSel === k ? ' is-on' : ''),
    live:
      done && src
        ? `${src[0]}${t(', read from the ')}${src[1]}${t(', page 1: ')}${src[2]}${t('. Confirmed by you.')}`
        : '',

    swStageClass: 'sw-stage' + (swEase ? ' sw-ease' : ''),
    clip: `inset(0 ${100 - swPos}% 0 0)`,
    moverLeft: `${swPos}%`,
    pos: swPos,
    valueText: Math.round(swPos) + t(' percent staged'),
    emptyClass: 'sw-seg' + (swPos === 0 ? ' is-on' : ''),
    stagedClass: 'sw-seg' + (swPos === 100 ? ' is-on' : ''),
    emptyPressed: swPos === 0,
    stagedPressed: swPos === 100,
    scrub,
    showEmpty: () => {
      setSwEase(true)
      setSwPos(0)
    },
    showStaged: () => {
      setSwEase(true)
      setSwPos(100)
    },
  } as const
}

export type HomeVals = ReturnType<typeof useHomeVals>
