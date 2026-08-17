'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion'
import { track } from '@vercel/analytics'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, immvelaHref } from '@/i18n/config'

const EASE = [0.16, 1, 0.3, 1] as const
// Clips are encoded to exactly 8.5s, so this gives each one a beat to finish
// before the slide turns. Re-encode the clips and this has to move with them.
const INTERVAL = 9000

/**
 * The Immvela advert filling the right half of the SNS hero: one module at a
 * time, with a clip of it running, pointing at the waitlist.
 *
 * ── On the palette ──────────────────────────────────────────────────────
 * An earlier version rendered this in Immvela's own cream-and-emerald brand.
 * It was correct in theory (Immvela is a separate product) and wrong on the
 * page: a warm cream block on cool porcelain read as a foreign object pasted
 * onto the site, not as a product being shown off. So it wears the SNS palette
 * now — indigo/violet glass, same `.lift` language as every other card — and
 * carries Immvela's identity through the wordmark and its green live dot only.
 *
 * ── On the clips ────────────────────────────────────────────────────────
 * Each module can have a silent, looping clip at `${CLIP_DIR}/<product>.mp4`
 * in lower case (quill.mp4, verlag.mp4, …). Files are NOT required: a module
 * with no clip falls back to a title card, so the hero never renders a hole.
 *
 * They are **1:1 square**, matching the 1080×1080 social-ad masters exactly.
 * This slot was 3:4 while the masters were 1080×1920 vertical and had to be
 * cropped; the square re-cuts compose for the frame themselves (header, demo
 * and caption all inside it), so nothing is thrown away and the slot simply
 * mirrors the source. The aspect ratio here and the crop in
 * scripts/encode-immvela-clips.mjs are one decision in two files — a master at
 * a new aspect means changing both, not either.
 *
 * Encoded with: normalised to 8.5s via setpts, 30fps, scaled to 600×600, no
 * audio. ~1.1 MB for all seven.
 */
const CLIP_DIR = '/immvela'

type Accent = { grad: string; text: string; ring: string }

// Alternating accents so consecutive slides don't look identical.
const ACCENTS: Accent[] = [
  { grad: 'from-sns-indigo/90 to-sns-violet/70', text: 'text-sns-accent', ring: 'ring-sns-indigo/25' },
  { grad: 'from-sns-blue/90 to-sns-cyan/70', text: 'text-sns-cyan', ring: 'ring-sns-blue/25' },
]

export default function ImmvelaShowcase({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).waitlistPage
  const slides = t.modules
  const reduced = useReducedMotion()

  const [index, setIndex] = useState(0)
  // WCAG 2.2.2: anything moving on its own needs a way to stop it. Three things
  // stop it (the button, hover, keyboard focus inside the panel) and `paused`
  // is the union of all three.
  const [playing, setPlaying] = useState(true)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const paused = !playing || hovered || focused

  // Reduced motion sets the spotlight's *starting* state — it must not clamp
  // the control. Folding it into `paused` (and into the play/pause effect
  // below) left the button inert: pressing play set `playing`, the clamp
  // immediately overrode it, and the clip could never run at all. A control
  // that can never do anything is a worse failure than the motion it was
  // guarding against, and 2.2.2 only asks for a way to *stop* motion. So:
  // start stopped, and honour an explicit press either way.
  //
  // Read the query directly rather than through `useReducedMotion` — measured,
  // that hook resolves ~175ms after mount, by which point the clip has already
  // autoplayed a fifth of a second, and it never updates if the preference
  // changes (framer's own TODO). This lands on the mount commit instead, well
  // before the clip has fetched, and follows the preference live.
  const [userChose, setUserChose] = useState(false)
  useEffect(() => {
    if (userChose) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setPlaying(!mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [userChose])

  // Clip loading is deliberately fail-closed: the title card is what renders
  // by default and the video only *reveals itself* once it reports it can
  // actually play. Relying on `onError` to swap in a fallback is the other way
  // round and it fails open — a missing file leaves an empty <video> box on
  // screen for however long the request takes, and any browser that doesn't
  // fire the event on a 404 leaves it there forever.
  const [ready, setReady] = useState<Record<string, boolean>>({})
  // Clips that errored. Kept so a known-missing file isn't re-requested on
  // every rotation.
  const [broken, setBroken] = useState<Record<string, boolean>>({})

  const go = useCallback(
    (next: number) => setIndex(((next % slides.length) + slides.length) % slides.length),
    [slides.length],
  )

  // A ref, not `index` in the deps: depending on the index restarts the
  // interval every tick, which silently makes the dwell time wrong as soon as
  // anything else nudges the index.
  const indexRef = useRef(index)
  indexRef.current = index

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => go(indexRef.current + 1), INTERVAL)
    return () => window.clearInterval(id)
  }, [paused, go])

  const slide = slides[index]
  const active = slide.status === 'active'
  const accent = ACCENTS[index % ACCENTS.length]
  const clipKey = slide.code.toLowerCase()
  const hasClip = !broken[clipKey]

  // A clip earns the right to cover the title card only once it is actually
  // running. `ready` on its own is not enough: a clip paused at frame 0 is
  // near-blank on these masters, so revealing it there replaces the title card
  // with an empty box — which is exactly what a reduced-motion visitor saw in
  // the hero. `rolling` re-arms per slide, so picking a module while the
  // spotlight is stopped shows that module's title card, not a blank frame.
  const [rolling, setRolling] = useState(false)
  useEffect(() => setRolling(false), [clipKey])
  const isReady = !!ready[clipKey] && (playing || rolling)

  const videoRef = useRef<HTMLVideoElement | null>(null)
  // `autoPlay` is an initial attribute and fires before the effect below can
  // pause it, so the clip briefly reports itself as playing even when we never
  // wanted it to. Read the live intent to keep that blip out of `rolling`.
  const playingRef = useRef(playing)
  playingRef.current = playing

  // Same trap as `ready` below, and worse: a React `onPlaying` prop is attached
  // during commit, so for a cached clip the event has already been and gone and
  // `rolling` would never be set — pausing would then wrongly snap the panel
  // back to the title card. Bind the listeners directly and check the element
  // as well. `timeupdate` is the reliable one: it only fires while frames are
  // actually advancing, which is precisely the condition being tracked.
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const mark = () => {
      if (playingRef.current) setRolling(true)
    }
    if (playing && !v.paused && v.readyState >= 3) mark()
    v.addEventListener('playing', mark)
    v.addEventListener('timeupdate', mark)
    return () => {
      v.removeEventListener('playing', mark)
      v.removeEventListener('timeupdate', mark)
    }
  }, [clipKey, playing])

  // `onCanPlay` alone is not enough. Media events fire on the element itself
  // and don't bubble, so React attaches the handler during commit — and a
  // cached clip can reach readyState 4 *before* that happens, in which case the
  // event never reaches us and the clip stays invisible forever. (Exactly what
  // happened: readyState 4, playing, opacity 0.) So check the element directly
  // once it's attached, and keep the event for the not-yet-cached case.
  useEffect(() => {
    const v = videoRef.current
    if (v && v.readyState >= 3) setReady((r) => ({ ...r, [clipKey]: true }))
  }, [clipKey])

  // Drive playback imperatively: `autoPlay` is only an initial attribute, so
  // toggling it does not pause an already-playing clip. Hover deliberately does
  // NOT pause the video — you hover to watch it — only the explicit button
  // does, and `playing` already carries the reduced-motion starting state.
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (playing) void v.play().catch(() => {})
    else v.pause()
  }, [playing, clipKey])

  const slideVariants: Variants = {
    enter: { opacity: 0, y: reduced ? 0 : 12 },
    center: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
    exit: { opacity: 0, y: reduced ? 0 : -8, transition: { duration: 0.28, ease: EASE } },
  }

  const liveCount = slides.filter((m) => m.status === 'active').length

  return (
    <div
      className="lift lift-violet relative w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={() => setFocused(false)}
      aria-roledescription="carousel"
      aria-label="Immvela — module spotlight"
    >
      <div className="flex flex-col p-5 md:p-6">
        {/* ── Brand bar ─────────────────────────────────────────────── */}
        <div className="flex items-center justify-between gap-3">
          <a
            href={immvelaHref(locale)}
            onClick={() => track('home_showcase_wordmark')}
            className="group inline-flex items-baseline gap-2 transition-opacity hover:opacity-75"
          >
            <span className="text-lg font-extrabold tracking-[-0.03em] text-sns-text md:text-xl">
              Immvela<span className="text-sns-green">.</span>
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-sns-faint sm:inline">
              {t.byline}
            </span>
          </a>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sns-green/30 bg-sns-green/[0.09] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-sns-green">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sns-green opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sns-green" />
            </span>
            {t.earlyAccess}
          </span>
        </div>

        {/* ── Clip + caption, stacked ───────────────────────────────── */}
        {/* Stacked, with the clip capped and centred rather than sat beside the
            caption. The masters are 1080px wide UI recordings and they stop
            being readable below ~340px on screen — a side-by-side split of this
            panel can only give the clip ~245px, which renders the interface as
            a grey smudge. Verified by rendering frames at both widths. */}
        <div className="mt-4 flex flex-col items-center gap-4">
          <div
            className={`relative w-full max-w-[340px] overflow-hidden rounded-sns bg-gradient-to-br ${accent.grad} ring-1 ${accent.ring}`}
            style={{ aspectRatio: '1 / 1' }}
          >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slide.code}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              {/* Title card. Always rendered, and sits underneath the clip so
                  a module with no footage still reads as a deliberate design
                  rather than as a missing asset. */}
              {/* Shows the PRODUCT name (Quill), while the caption underneath
                  carries the FUNCTION (Listing Kit) — so the two never repeat
                  the same words at each other. */}
              <div className="flex h-full w-full items-center justify-center">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 flex select-none items-center justify-center font-mono text-[7rem] font-bold leading-none text-white/[0.13]"
                >
                  {slide.code.slice(0, 2).toUpperCase()}
                </span>
                <p className="relative text-3xl font-bold tracking-[-0.03em] text-white drop-shadow-[0_2px_12px_rgba(11,15,34,0.35)]">
                  {slide.code}
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
                  preload="metadata"
                  aria-label={`${slide.code}: ${slide.name}`}
                  onCanPlay={() => setReady((r) => ({ ...r, [clipKey]: true }))}
                  onError={() => setBroken((b) => ({ ...b, [clipKey]: true }))}
                />
              )}
            </motion.div>
          </AnimatePresence>

            {/* Status chip floats over the clip so it reads against footage. */}
            <span
              className={`absolute right-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] backdrop-blur-md ${
                active
                  ? 'bg-white/90 text-sns-green shadow-[0_2px_8px_-2px_rgba(11,15,34,0.4)]'
                  : 'bg-sns-text/45 text-white'
              }`}
            >
              {active && <span className="h-1.5 w-1.5 rounded-full bg-sns-green" />}
              {active ? t.statusActive : t.statusProgress}
            </span>
          </div>

          {/* ── Caption ─────────────────────────────────────────────── */}
          {/* min-h keeps the panel from resizing between slides of different
              copy lengths, which would jog the whole hero on every rotation.
              German runs ~25% longer, so the floor is the German worst case. */}
          <div className="relative w-full min-w-0 min-h-[112px]" aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={slide.code} variants={slideVariants} initial="enter" animate="center" exit="exit">
                <span className={`font-mono text-[11px] uppercase tracking-[0.18em] ${accent.text}`}>
                  {slide.code}
                </span>
                {/* h2, not h3: this panel sits in the hero directly after the
                    page h1, so an h3 here skips a level and fails the
                    sequential-heading audit. It is a section-level heading. */}
                <h2 className="mt-1 text-xl font-bold leading-tight tracking-[-0.02em] text-sns-text">
                  {slide.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-sns-muted">{slide.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Progress rail: one segment per module ─────────────────── */}
        <div className="mt-4 flex items-center gap-3">
          <div className="flex flex-1 items-center gap-1.5">
            {slides.map((m, i) => (
              <button
                key={m.code}
                type="button"
                onClick={() => {
                  setIndex(i)
                  setPlaying(false)
                }}
                aria-label={`${m.code} — ${m.name}`}
                aria-current={i === index ? 'true' : undefined}
                className="group relative h-4 flex-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent"
              >
                <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-sns-text/[0.12]">
                  {/* The fill marks the current slide AND shows how long is
                      left on it, so the rotation never feels arbitrary. Keyed
                      on the index so each slide restarts the sweep. */}
                  {i === index && (
                    <motion.span
                      key={`${index}-${paused}`}
                      className="block h-full rounded-full bg-sns-indigo"
                      initial={{ width: paused ? '100%' : '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: paused ? 0 : INTERVAL / 1000, ease: 'linear' }}
                    />
                  )}
                  {i !== index && (
                    <span className="block h-full w-0 rounded-full bg-sns-indigo/45 transition-all duration-300 group-hover:w-full" />
                  )}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              setUserChose(true)
              setPlaying((v) => !v)
            }}
            aria-label={playing ? t.showcase.pause : t.showcase.play}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-sns-text/15 text-sns-muted transition-colors duration-300 hover:border-sns-indigo/50 hover:text-sns-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent"
          >
            {playing ? (
              <svg width="9" height="10" viewBox="0 0 9 10" aria-hidden="true">
                <rect x="0.5" y="0.5" width="2.6" height="9" rx="1" fill="currentColor" />
                <rect x="5.9" y="0.5" width="2.6" height="9" rx="1" fill="currentColor" />
              </svg>
            ) : (
              <svg width="9" height="10" viewBox="0 0 9 10" aria-hidden="true">
                <path d="M1 0.8 8.2 5 1 9.2Z" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Conversion foot ───────────────────────────────────────────── */}
      <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-sns-text/[0.08] bg-white/45 px-5 py-3.5 md:px-6">
        <p className="font-mono text-[11px] leading-snug text-sns-faint">
          {t.showcase.liveCount
            .replace('{n}', String(liveCount))
            .replace('{total}', String(slides.length))}
        </p>
        <a
          href={immvelaHref(locale, '#early-access')}
          onClick={() => track('home_showcase_waitlist')}
          className="group inline-flex items-center gap-2 rounded-full bg-sns-indigo px-4 py-2 text-xs font-semibold text-white shadow-[0_6px_20px_-6px_rgba(79,70,229,0.7)] transition-all duration-300 ease-sns-out hover:-translate-y-0.5 hover:bg-sns-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent"
        >
          {t.primaryCta}
          <svg
            width="13"
            height="13"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-300 ease-sns-out group-hover:translate-x-1"
          >
            <path
              d="M3 7h8M7.5 3.5 11 7l-3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}
