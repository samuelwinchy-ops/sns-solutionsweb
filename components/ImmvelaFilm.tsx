'use client'

import { useState } from 'react'
import { track } from '@vercel/analytics'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale } from '@/i18n/config'

/**
 * The Immvela explainer film: the whole product, narrated, end to end.
 *
 * ── Why it is a click and not an autoplay ────────────────────────────────
 * Browsers block autoplay with sound, and the voiceover *is* the point — a
 * silent autoplay would be the worst of both, spending bandwidth to deliver
 * none of the argument. So the resting state is a poster, and the film starts
 * on a deliberate press, which doubles as the user gesture that lets it start
 * unmuted.
 *
 * ── Why the surround is dark ─────────────────────────────────────────────
 * The film's own title card is cream on the same paper as this site, so
 * dropped straight onto the page it dissolves into the background. The dark
 * room (.im-theatre) is what turns it into a screen: a bright rectangle in an
 * unlit room, which is the whole of the cinema metaphor. Forest rather than
 * black, so the room still belongs to Immvela — this palette has no true
 * neutral, and black would read as a foreign object.
 *
 * ── Why the running time is set large ────────────────────────────────────
 * It is the signature of the block. 2:16 is the one real objection to putting
 * a film on a landing page, and the answer is not to bury it in a caption —
 * it is to state it at full size next to what it buys, so the press is an
 * informed one. An earlier pass hid it in a mono line under the button, where
 * it collided with the poster art and read as small print.
 *
 * ── Weight ───────────────────────────────────────────────────────────────
 * The <video> is not mounted until the press, so an unplayed film costs the
 * page exactly one poster image (~118 KB) and no video bytes at all. Do not
 * "optimise" this into an always-mounted <video preload="metadata">: that
 * reintroduces a request for every visitor to serve the few who watch.
 */
export default function ImmvelaFilm({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).waitlistPage.film
  const [started, setStarted] = useState(false)

  return (
    <section id="film" className="mt-16 scroll-mt-20 md:mt-20">
      <div className="im-theatre px-5 py-10 md:px-10 md:py-12">
        {/* Left-aligned with a hairline, the same header shape every other
            section on this page uses. Centring it made the block read as a
            foreign object pasted into the layout. */}
        <div className="mb-8 max-w-2xl md:mb-10">
          <p className="im-theatre-eyebrow mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em]">
            <span className="h-px w-8 bg-current opacity-60" />
            {t.eyebrow}
          </p>
          <h2 className="im-theatre-ink text-[1.9rem] font-bold leading-[1.1] tracking-[-0.02em] md:text-[2.5rem]">
            {t.heading}
          </h2>
          <p className="im-theatre-muted mt-4 text-base leading-relaxed">{t.sub}</p>
        </div>

        {/* ── The screen ──────────────────────────────────────────────── */}
        <div
          className="relative overflow-hidden rounded-xl bg-black/25 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.85)] ring-1 ring-white/10"
          style={{ aspectRatio: '16 / 9' }}
        >
          {started ? (
            // eslint-disable-next-line jsx-a11y/media-has-caption -- shipping
            // without a caption track is a deliberate call, not an oversight.
            // The film is narrated, so this does mean it carries nothing for a
            // deaf visitor or anyone watching muted, and the page copy above
            // has to keep carrying the whole argument on its own. Adding one
            // later is a .vtt beside the mp4 plus a <track> here — no other
            // change — so revisit it when a transcript exists.
            <video
              src={`/immvela/film-${locale}.mp4`}
              poster={`/immvela/film-${locale}.jpg`}
              className="absolute inset-0 h-full w-full"
              autoPlay
              controls
              playsInline
              preload="auto"
            />
          ) : (
            <button
              type="button"
              onClick={() => {
                setStarted(true)
                track('immvela_film_play', { locale })
              }}
              aria-label={`${t.play} — ${t.durationLong}`}
              className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#f4f2e9]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- a plain
                  <img> keeps this a static asset with no loader in front of it;
                  it is one fixed 16:9 poster, not user content. */}
              <img
                src={`/immvela/film-${locale}.jpg`}
                alt={t.posterAlt}
                width={1600}
                height={900}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* Phone only. A 16:9 frame in a 350px column is ~200px tall,
                  at which point the title card's module labels are around 4px
                  and legible to nobody — so below md the poster stops being
                  information and becomes texture, and the control gets the
                  frame to itself. Above md it is readable and stays bright. */}
              <span className="absolute inset-0 bg-[#0d1f17]/30 md:hidden" />
              {/* A radial, not a flat wash. The title card is the pitch — a
                  seven-node ring and the line "Seven modules, one system" — and
                  a flat scrim greyed all of it out to give one button its
                  ground. This darkens only the middle, so the art still reads
                  to the edges, and lifts further on hover. */}
              <span
                className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-60"
                style={{
                  background:
                    'radial-gradient(44% 52% at 50% 50%, rgba(13,31,23,0.70) 0%, rgba(13,31,23,0.26) 62%, rgba(13,31,23,0.04) 100%)',
                }}
              />
              <span className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 md:gap-3.5">
                {/* The universal affordance stays a plain circle: the ring is
                    the "this plays", the line under it is the "and it has
                    sound". One job each, rather than a fat pill doing both. */}
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4f2e9] text-[#16352a] shadow-[0_14px_36px_-12px_rgba(0,0,0,0.7)] transition-transform duration-300 ease-sns-out group-hover:scale-[1.06] md:h-16 md:w-16">
                  <svg width="14" height="17" viewBox="0 0 14 17" aria-hidden="true" className="ml-0.5">
                    <path d="M1 1 13 8.5 1 16Z" fill="currentColor" />
                  </svg>
                </span>
                {/* Chipped rather than bare: on a phone the frame shrinks
                    but the poster's own headline does not, so a floating label
                    landed straight on top of "Seven modules, one system". */}
                <span className="rounded-full bg-[#0d1f17]/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#f4f2e9] backdrop-blur-sm md:text-[11px]">
                  {t.play}
                </span>
              </span>
            </button>
          )}
        </div>

        {/* ── Caption rail ────────────────────────────────────────────────
            Set like a film credit: what it is on the left, how long it runs on
            the right, at a size that answers the question before it is asked. */}
        <div className="mt-5 flex items-end justify-between gap-6 border-t border-white/10 pt-4">
          <p className="im-theatre-faint font-mono text-[11px] uppercase tracking-[0.16em]">
            {t.narration}
          </p>
          <p
            className="im-theatre-ink shrink-0 text-3xl font-bold leading-none tracking-[-0.03em] tabular-nums md:text-[2.75rem]"
            aria-hidden="true"
          >
            {t.duration}
          </p>
        </div>
      </div>
    </section>
  )
}
