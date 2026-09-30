'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion'
import { track } from '@vercel/analytics'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale } from '@/i18n/config'
import { useImmvelaPath } from '@/lib/immvela-nav'

const EASE = [0.16, 1, 0.3, 1] as const

/**
 * Immvela's module walkthrough — /immvela/demo, the daylight counterpart to the
 * SNS inbound-agent demo at /solutions/demo.
 *
 * ── Why a picker and not a carousel ─────────────────────────────────────
 * The visitor arrived here *to look at the modules*, so nothing moves on its
 * own. Seven tabs, you choose.
 *
 * ── On the clips ────────────────────────────────────────────────────────
 * Silent 1:1 files, `${CLIP_DIR}/<code>.mp4` in lower case, with fail-closed
 * loading: the title card renders by default and
 * the video only reveals itself once it reports it can play, so a missing file
 * is a designed frame rather than an empty box. Encoded by
 * scripts/encode-immvela-clips.mjs.
 */
const CLIP_DIR = '/immvela'

const Arrow = ({ back = false }: { back?: boolean }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d={back ? 'M11 7H3M6.5 3.5 3 7l3.5 3.5' : 'M3 7h8M7.5 3.5 11 7l-3.5 3.5'}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Check = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="mt-1 shrink-0"
  >
    <path
      d="M3.2 8.4 6.3 11.4 12.8 4.9"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function ImmvelaDemo({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).waitlistPage
  const d = t.demo
  const modules = t.modules
  const immvela = useImmvelaPath(locale)
  const reduced = useReducedMotion()

  const [index, setIndex] = useState(0)
  const module_ = modules[index]
  const active = module_.status === 'active'
  const clipKey = module_.code.toLowerCase()

  // Fail-closed clip state, keyed by module — see the note above.
  const [ready, setReady] = useState<Record<string, boolean>>({})
  const [broken, setBroken] = useState<Record<string, boolean>>({})
  const hasClip = !broken[clipKey]
  const isReady = !!ready[clipKey]

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([])

  // A cached clip can reach readyState 4 before React attaches `onCanPlay`
  // during commit, and media events don't bubble — so the event never arrives
  // and the clip stays at opacity 0 forever. Check the element directly too.
  useEffect(() => {
    const v = videoRef.current
    if (v && v.readyState >= 3) setReady((r) => ({ ...r, [clipKey]: true }))
  }, [clipKey])

  // `autoPlay` is only an initial attribute, and it is already in the
  // server-rendered HTML by the time `useReducedMotion` resolves — so a visitor
  // who asked for reduced motion has to be paused imperatively, not by
  // withholding the attribute. They still get the controls to start it.
  useEffect(() => {
    if (reduced) videoRef.current?.pause()
  }, [reduced, clipKey])

  const go = (next: number, focusTab = false) => {
    const i = ((next % modules.length) + modules.length) % modules.length
    setIndex(i)
    track('immvela_demo_module', { module: modules[i].code })
    if (focusTab) tabsRef.current[i]?.focus()
  }

  // Arrow keys move between tabs, which is what a tablist is expected to do —
  // without it the seven tabs are seven separate tab stops before the panel.
  const onTabKey = (e: React.KeyboardEvent) => {
    const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (delta) {
      e.preventDefault()
      go(index + delta, true)
      return
    }
    if (e.key === 'Home' || e.key === 'End') {
      e.preventDefault()
      go(e.key === 'Home' ? 0 : modules.length - 1, true)
    }
  }

  const fade: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
    exit: { opacity: 0, y: reduced ? 0 : -6, transition: { duration: 0.22, ease: EASE } },
  }

  return (
    <>
      {/* ── Header ────────────────────────────────────────────────────── */}
      <div className="mb-9 max-w-2xl">
        <Link
          href={immvela()}
          className="im-link-ink mb-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium"
        >
          <Arrow back />
          {d.backCta}
        </Link>
        <p className="im-eyebrow mb-3 text-sm">{d.eyebrow}</p>
        <h1 className="im-title im-ink text-[2.25rem] md:text-[3rem]">{d.heading}</h1>
        <p className="im-muted mt-5 text-lg leading-relaxed">{d.intro}</p>
      </div>

      {/* ── Module picker ─────────────────────────────────────────────── */}
      <p className="im-ink mb-3 text-[13px] font-medium" id="module-picker-label">
        {d.pickerLabel}
      </p>
      <div
        role="tablist"
        aria-labelledby="module-picker-label"
        onKeyDown={onTabKey}
        className="mb-8 flex flex-wrap gap-2"
      >
        {modules.map((m, i) => {
          const on = i === index
          const live = m.status === 'active'
          return (
            <button
              key={m.code}
              ref={(el) => {
                tabsRef.current[i] = el
              }}
              type="button"
              role="tab"
              id={`tab-${m.code}`}
              aria-selected={on}
              aria-controls="module-panel"
              // Roving tabindex: the tablist is one tab stop, arrows move within
              // it. Seven stops in a row would bury the panel for keyboard users.
              tabIndex={on ? 0 : -1}
              onClick={() => go(i)}
              className={`im-tab ${on ? 'is-on' : ''} inline-flex min-h-11 items-center gap-2 px-4 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--im-green)]`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${live ? 'im-dot' : 'border border-current'}`}
                aria-hidden="true"
              />
              {m.code}
            </button>
          )
        })}
      </div>

      {/* ── Clip + detail ─────────────────────────────────────────────── */}
      <div
        role="tabpanel"
        id="module-panel"
        aria-labelledby={`tab-${module_.code}`}
        className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-10"
      >
        {/* Clip. Capped at 460px: the masters are 1080px-wide UI recordings and
            the interface stops being readable much below ~340px on screen. */}
        <div className="mx-auto w-full max-w-[460px] lg:mx-0">
          <div className="im-card relative overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={module_.code}
                variants={fade}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute inset-0"
              >
                {/* Title card, always underneath the clip, so a module with no
                    footage reads as a deliberate frame and not a missing asset. */}
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[var(--im-cream-2)]">
                  <p className="im-ink relative text-3xl font-bold tracking-[-0.03em]">
                    {module_.code}
                  </p>
                  <p className="im-faint relative max-w-[16rem] px-6 text-center text-[13px] leading-relaxed">
                    {d.noClip}
                  </p>
                </div>

                {hasClip && (
                  <video
                    key={clipKey}
                    ref={videoRef}
                    src={`${CLIP_DIR}/${clipKey}.mp4`}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                      isReady ? 'opacity-100' : 'opacity-0'
                    }`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    // `controls` on purpose: this is the page the visitor came
                    // to watch, so scrubbing and pausing are the point. The
                    // homepage showcase has no controls because it is an advert.
                    controls
                    preload="metadata"
                    aria-label={`${module_.code}: ${module_.name}`}
                    onCanPlay={() => setReady((r) => ({ ...r, [clipKey]: true }))}
                    onError={() => setBroken((b) => ({ ...b, [clipKey]: true }))}
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Opaque paper behind the capsule: it sits on top of the video. */}
            <span
              className={`im-chip pointer-events-none absolute left-3 top-3 bg-[var(--im-paper)] ${active ? 'im-chip-active' : 'im-chip-progress'}`}
            >
              <span
                aria-hidden="true"
                className={`h-1.5 w-1.5 rounded-full ${active ? 'bg-current' : 'border border-current'}`}
              />
              {active ? t.statusActive : t.statusProgress}
            </span>
          </div>

          <p className="im-faint mt-3 text-[13px] leading-relaxed">{d.clipNote}</p>
        </div>

        {/* Detail. min-h so the panel doesn't jump between modules of different
            copy lengths; German runs ~25% longer, so the floor is its worst case. */}
        <div className="flex min-h-[420px] flex-col">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={module_.code}
              variants={fade}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <p className="im-green text-sm font-semibold">{module_.code}</p>
              {/* h2: the page h1 is the heading above. */}
              <h2 className="im-title im-ink mt-2 text-[1.875rem] md:text-[2.25rem]">
                {module_.name}
              </h2>
              <p className="im-muted mt-4 text-base leading-relaxed md:text-lg">{module_.desc}</p>

              <p className="im-ink mt-7 text-[13px] font-medium">{d.panelLabel}</p>
              <ul className="mt-3 flex flex-col gap-3">
                {module_.demo.map((point) => (
                  <li key={point} className="im-ink flex items-start gap-3 text-sm leading-relaxed">
                    <span className="im-green">
                      <Check />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Prev/next duplicates the tablist on purpose: the tabs answer "which
              module", these answer "show me the next one" without aiming. */}
          <div className="mt-auto flex items-center gap-2 pt-8">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label={d.prev}
              className="im-btn-ghost flex h-11 w-11 items-center justify-center"
            >
              <Arrow back />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label={d.next}
              className="im-btn-ghost flex h-11 w-11 items-center justify-center"
            >
              <Arrow />
            </button>
            <span className="im-faint ml-1 font-mono text-[13px] tabular-nums" aria-hidden="true">
              {index + 1} / {modules.length}
            </span>
          </div>
        </div>
      </div>

      {/* ── Proof + guardrail ─────────────────────────────────────────── */}
      <section className="mt-16 grid grid-cols-1 gap-4 border-t border-[var(--im-line)] pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <div>
          <h2 className="im-eyebrow mb-4 text-sm">{t.proofLabel}</h2>
          {/* Stacked below sm: three columns on a 390px screen leaves ~90px per
              card, which breaks "EU-hosted; you stay the data controller" over
              four lines. */}
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {t.proof.map((p) => (
              <div key={p.label} className="im-card p-4">
                <dt className="im-green text-xl font-bold tracking-[-0.02em] md:text-2xl">
                  {p.stat}
                </dt>
                <dd className="im-muted mt-2 text-[13px] leading-snug">{p.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="im-panel p-6">
          <h2 className="im-eyebrow mb-2 text-sm">{t.guardrail.label}</h2>
          <p className="im-ink text-sm leading-relaxed">{t.guardrail.text}</p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="im-panel mt-14 flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center md:p-10">
        <div className="max-w-xl">
          <h2 className="im-title im-section-title im-ink">{d.ctaHeading}</h2>
          <p className="im-muted mt-2">{d.ctaSub}</p>
        </div>
        <Link
          href={`${immvela()}#early-access`}
          onClick={() => track('immvela_demo_cta')}
          className="im-btn inline-flex shrink-0 items-center gap-2 px-5 py-3 text-[15px] font-semibold"
        >
          {d.ctaButton}
          <Arrow />
        </Link>
      </section>
    </>
  )
}
