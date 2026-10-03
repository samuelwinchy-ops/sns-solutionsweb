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
 * Motion budget: the product stage plays once, when a third of it is on screen; the trace and
 * the staging move only when the visitor acts. Reduced motion shows every final frame.
 */
const SOURCES = {
  wf: ['Wohnfläche 76 m²', 'Grundriss', 'Wohnfläche gesamt: 76,0 m²'],
  zi: ['Zimmer 3', 'Grundriss', 'Zimmer: 3'],
  bj: ['Baujahr 1908', 'Energieausweis', 'Baujahr: 1908'],
  hwb: ['HWB 48', 'Energieausweis', 'Heizwärmebedarf HWB: 48 kWh/m²a'],
  fg: ['fGEE 0,92', 'Energieausweis', 'Gesamtenergieeffizienz-Faktor fGEE: 0,92'],
} as const
type Key = keyof typeof SOURCES
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
  const [trSel, setTrSel] = useState<Key>('hwb')
  const [trStill, setTrStill] = useState(true)
  const [swEase, setSwEase] = useState(false)
  const [swPos, setSwPos] = useState(50)
  // The product helix's speed follows the stage: fast while the documents go in, slower while it
  // drafts, nearly still while it waits on the agent's answer, back to rest once confirmed.
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
      [3600, 0.12],
      [6200, 1],
    ]
    const ids = steps.map(([ms, r]) => window.setTimeout(() => setPvHelixRate(r), ms))
    return () => ids.forEach(clearTimeout)
  }, [pvPhase, pvRun])

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

  const src = SOURCES[trSel]
  const pick = (k: Key) => () => {
    setTrSel(k)
    setTrStill(false)
  }
  const cls = (k: Key, base: string) => base + (trSel === k ? ' is-on' : '')
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

    trStageClass: 'tr-stage' + (trStill ? ' is-still' : ''),
    dGr: 'tr-doc' + (src[1] === 'Grundriss' ? ' is-on' : ''),
    dEa: 'tr-doc' + (src[1] === 'Energieausweis' ? ' is-on' : ''),
    live: trStill
      ? ''
      : `${src[0]}${t(', read from the ')}${src[1]}${t(', page 1: ')}${src[2]}${t('. Confirmed by you on 2 October.')}`,
    cWf: cls('wf', 'tr-v'),
    pWf: trSel === 'wf',
    hWf: cls('wf', 'tr-hl'),
    kWf: cls('wf', 'tr-k'),
    tWf: pick('wf'),
    cZi: cls('zi', 'tr-v'),
    pZi: trSel === 'zi',
    hZi: cls('zi', 'tr-hl'),
    kZi: cls('zi', 'tr-k'),
    tZi: pick('zi'),
    cBj: cls('bj', 'tr-v'),
    pBj: trSel === 'bj',
    hBj: cls('bj', 'tr-hl'),
    kBj: cls('bj', 'tr-k'),
    tBj: pick('bj'),
    cHwb: cls('hwb', 'tr-v'),
    pHwb: trSel === 'hwb',
    hHwb: cls('hwb', 'tr-hl'),
    kHwb: cls('hwb', 'tr-k'),
    tHwb: pick('hwb'),
    cFg: cls('fg', 'tr-v'),
    pFg: trSel === 'fg',
    hFg: cls('fg', 'tr-hl'),
    kFg: cls('fg', 'tr-k'),
    tFg: pick('fg'),

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
