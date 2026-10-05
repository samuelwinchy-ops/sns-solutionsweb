'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { track } from '@vercel/analytics'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, immvelaHref } from '@/i18n/config'

const QFUTOOL_URL = 'https://www.qfutool.com'
const INTERVAL = 10_000
const EASE = 'cubic-bezier(.65,0,.35,1)'

/**
 * The homepage hero, "cinema" style: the whole first screen is a slide, and
 * it moves between the two products every 10 seconds. The company line stays
 * put; the ground, the type colour, the product and its hardware change.
 *
 * Each slide wears its product's own brand — Immvela beige and forest with
 * the helix and "Immvela.", QFUtool slate and orange — so the parent company
 * presents two separate products rather than one combined pitch.
 *
 * Accessibility: anything that moves on its own for more than 5 s needs a
 * way to stop it (WCAG 2.2.2), so there is a pause button; visitors who ask
 * for reduced motion start paused; the logo tabs are real tabs.
 *
 * The Immvela screens are real captures of app.immvela.com (property page,
 * 2026-10-04, 2× resolution, cropped to the 16:10 working area so it shows near full size, served unoptimized so Next does not recompress it; the filename carries the date so a new capture is never hidden by a cache; the phone is the
 * sign-in screen). The QFUtool email is an example and says so.
 */
export default function CinemaHero({ locale = defaultLocale }: { locale?: Locale }) {
  const dict = getDict(locale)
  const t = dict.cinema
  const p = dict.products
  const h = dict.hero

  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  const imm = i === 0

  const start = useCallback(() => {
    window.clearInterval(timer.current)
    timer.current = window.setInterval(() => setI((v) => (v + 1) % 2), INTERVAL)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPaused(true)
  }, [])

  useEffect(() => {
    if (paused) window.clearInterval(timer.current)
    else start()
    return () => window.clearInterval(timer.current)
  }, [paused, start])

  const pick = (n: number) => {
    setI(n)
    if (!paused) start()
    track(n === 0 ? 'hero_tab_immvela' : 'hero_tab_qfutool')
  }

  const slide = (on: boolean, dir: number): React.CSSProperties => ({
    opacity: on ? 1 : 0,
    transform: on ? 'none' : `translateX(${dir * 40}px)`,
    pointerEvents: on ? 'auto' : 'none',
    transition: 'opacity .7s ease-out, transform .7s ease-out',
  })

  return (
    <section
      className="relative overflow-hidden pt-14"
      style={{
        background: imm ? '#f2f1e8' : '#23384a',
        color: imm ? '#16352a' : '#f3f6f8',
        transition: `background-color .8s ${EASE}, color .8s ${EASE}`,
      }}
    >
      <div className="relative min-h-[880px] lg:h-[860px] lg:min-h-0">
        {/* The company line stays put while the products move beneath it */}
        <h1 className="relative z-10 max-w-3xl px-5 pt-12 font-display text-[2.5rem] font-normal leading-[1.02] tracking-[-0.02em] md:px-12 md:text-[3.5rem]">
          {h.h1a} <em className="opacity-60">{h.h1b}</em>
        </h1>

        {/* ── Immvela ─────────────────────────────────────────────────── */}
        <div aria-hidden={!imm} className="absolute inset-0 z-[5]" style={slide(imm, -1)}>
          <div className="absolute left-5 top-[230px] max-w-[540px] pr-5 font-inter md:left-12 md:top-[300px]">
            <div className="flex items-center gap-4">
              <Image
                src="/products/immvela/helix.svg"
                alt=""
                width={88}
                height={88}
                className="h-16 w-16 md:h-[88px] md:w-[88px]"
              />
              <span className="text-6xl font-extrabold leading-none tracking-[-0.045em] md:text-[88px]">
                Immvela<span className="text-[#2e9e6a]">.</span>
              </span>
            </div>
            <p className="mt-7 font-title text-[1.75rem] font-semibold leading-tight md:text-[2.125rem]">
              {p.immvela.tagline}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-6">
              <a
                href={immvelaHref(locale, '#early-access')}
                tabIndex={imm ? 0 : -1}
                onClick={() => track('hero_immvela_waitlist')}
                className="inline-flex min-h-12 items-center rounded-full bg-[#2b7554] px-6 font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-[#24473a] active:scale-[0.98]"
              >
                {p.immvela.cta}
              </a>
              <a
                href={immvelaHref(locale)}
                tabIndex={imm ? 0 : -1}
                className="font-semibold text-[#2b7554] hover:underline"
              >
                {p.learnMore} ›
              </a>
            </div>
          </div>
          {/* Laptop bleeding off the right edge, phone stepping in front */}
          <div className="absolute left-[620px] top-[200px] hidden w-[960px] rounded-tl-[22px] bg-[#0d0d0f] pl-4 pt-4 shadow-[0_60px_100px_-50px_rgba(16,24,20,0.6)] lg:block">
            <div className="overflow-hidden rounded-tl-lg">
              <Image
                src={`/products/immvela/immvela-app-2026-10-05-${locale}.png`}
                alt={p.immvela.webAlt}
                width={2304}
                height={1440}
                priority
                unoptimized
                className="block h-auto w-full"
              />
            </div>
          </div>
          <div className="absolute bottom-24 right-5 w-[150px] rounded-[30px] bg-gradient-to-b from-[#c8c9cc] to-[#8e9094] p-[3px] shadow-[0_40px_70px_-24px_rgba(16,24,20,0.6)] md:w-[190px] lg:bottom-auto lg:left-[588px] lg:right-auto lg:top-[340px] lg:w-[184px] lg:rounded-[36px]">
            <div className="rounded-[27px] bg-black p-[6px] lg:rounded-[33px] lg:p-[7px]">
              <div className="overflow-hidden rounded-[22px] bg-[#16201f] lg:rounded-[27px]">
                <div className="h-6" />
                <Image
                  src={`/products/immvela/immvela-phone-login-${locale}.jpg`}
                  alt={p.immvela.phoneAlt}
                  width={1206}
                  height={2460}
                  sizes="210px"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── QFUtool ─────────────────────────────────────────────────── */}
        <div aria-hidden={imm} className="absolute inset-0 z-[5]" style={slide(!imm, 1)}>
          <div className="absolute left-5 top-[230px] max-w-[560px] pr-5 md:left-12 md:top-[300px]">
            <div className="flex items-center gap-4">
              <Image
                src="/products/qfutool-icon.svg"
                alt=""
                width={76}
                height={76}
                className="h-14 w-14 md:h-[76px] md:w-[76px]"
              />
              <span className="font-archivo text-6xl font-extrabold leading-none tracking-[-0.04em] md:text-[88px]">
                QFUtool
              </span>
            </div>
            <p className="mt-7 font-archivo text-[1.75rem] font-bold leading-tight md:text-[2.125rem]">
              {p.qfutool.tagline}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-6">
              <a
                href={`${QFUTOOL_URL}/login`}
                target="_blank"
                rel="noopener"
                tabIndex={imm ? -1 : 0}
                onClick={() => track('hero_qfutool_trial')}
                className="inline-flex min-h-12 items-center rounded-full bg-[#c4432a] px-6 font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-[#a63821] active:scale-[0.98]"
              >
                {p.qfutool.cta}
              </a>
              <a
                href={locale === 'de' ? `${QFUTOOL_URL}/de` : QFUTOOL_URL}
                target="_blank"
                rel="noopener"
                tabIndex={imm ? -1 : 0}
                className="font-semibold text-[#f3f6f8] hover:underline"
              >
                {p.learnMore} ›
              </a>
            </div>
          </div>
          <div className="absolute left-[680px] top-[220px] hidden w-[640px] overflow-hidden rounded-[18px] bg-white text-[#1f3340] shadow-[0_60px_100px_-40px_rgba(0,0,0,0.6)] lg:block">
            <div className="border-b border-[#e3e8ec] px-7 py-5 text-sm leading-[1.9] text-[#5b6770]">
              <div>
                <strong className="text-[#1f3340]">{t.email.from}</strong>&nbsp; Lisa Berger
                &lt;lisa@your-company.at&gt;
              </div>
              <div>
                <strong className="text-[#1f3340]">{t.email.sent}</strong>&nbsp; {t.email.sentValue}{' '}
                · <span className="font-semibold text-[#a63821]">{t.email.followUp}</span>
              </div>
            </div>
            <div className="p-7 text-lg leading-relaxed">
              <p>{t.email.greeting}</p>
              <p className="mt-3">{t.email.body}</p>
              <p className="mt-3">{t.email.sign}</p>
              <p className="mt-6 text-[13px] text-[#5b6770]">{t.email.foot}</p>
            </div>
          </div>
          <div className="absolute left-[1100px] top-[520px] hidden w-[300px] rounded-[18px] rounded-br-[4px] bg-[#eef2f5] px-5 py-4 text-[#1f3340] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] lg:block">
            {t.email.reply}
            <div className="mt-2 text-xs font-semibold text-[#a63821]">{t.email.replyNote}</div>
          </div>
        </div>

        {/* ── Controls: logo tabs with progress, pause, up next ─────────── */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 rounded-full bg-white p-2 text-[#0e1726] shadow-[0_20px_40px_-20px_rgba(14,23,38,0.4)] md:bottom-10">
          <div role="tablist" aria-label={t.tabs} className="relative grid grid-cols-2">
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1/2 rounded-full"
              style={{
                background: imm ? 'rgba(43,117,84,0.14)' : 'rgba(196,67,42,0.14)',
                transform: `translateX(${imm ? 0 : 100}%)`,
                transition: `transform .6s ${EASE}, background-color .6s ${EASE}`,
              }}
            />
            {[
              { n: 0, on: imm, bar: '#2b7554' },
              { n: 1, on: !imm, bar: '#c4432a' },
            ].map((tab) => (
              <button
                key={tab.n}
                type="button"
                role="tab"
                aria-selected={tab.on}
                aria-label={tab.n === 0 ? 'Immvela' : 'QFUtool'}
                onClick={() => pick(tab.n)}
                className="relative z-[1] flex min-h-14 items-center gap-3 px-4 md:px-6"
              >
                {tab.n === 0 ? (
                  <>
                    <Image src="/products/immvela/helix.svg" alt="" width={28} height={28} />
                    <span className="hidden font-inter text-[17px] font-extrabold tracking-[-0.03em] sm:inline">
                      Immvela<span className="text-[#2e9e6a]">.</span>
                    </span>
                  </>
                ) : (
                  <>
                    <Image src="/products/qfutool-icon.svg" alt="" width={24} height={24} />
                    <span className="hidden font-archivo text-[17px] font-extrabold sm:inline">
                      QFUtool
                    </span>
                  </>
                )}
                <span className="absolute inset-x-4 bottom-2 h-[3px] overflow-hidden rounded-full bg-[#0e1726]/10">
                  {tab.on && (
                    <i
                      key={`${i}-${paused}`}
                      className="hero-progress block h-full rounded-full"
                      style={{
                        background: tab.bar,
                        animationPlayState: paused ? 'paused' : 'running',
                      }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setPaused((v) => !v)}
            aria-label={paused ? t.play : t.pause}
            className="flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 hover:bg-[#0e1726]/[0.06]"
          >
            {paused ? (
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2 1.2 11 7 2 12.8Z" />
              </svg>
            ) : (
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="currentColor"
                aria-hidden="true"
              >
                <rect x="1" y="1" width="3.4" height="12" rx="1" />
                <rect x="7.6" y="1" width="3.4" height="12" rx="1" />
              </svg>
            )}
          </button>
        </div>

        <button
          type="button"
          onClick={() => pick((i + 1) % 2)}
          className="absolute bottom-10 right-12 z-20 hidden min-h-14 items-center gap-3 rounded-2xl bg-white/[0.14] py-2 pl-2 pr-5 text-left transition-colors duration-200 hover:bg-white/25 lg:flex"
        >
          <span
            className="flex h-10 w-10 items-center justify-center rounded-[10px]"
            style={{ background: imm ? '#3c6378' : '#16201f' }}
          >
            <Image
              src={imm ? '/products/qfutool-icon.svg' : '/products/immvela/helix-dark.svg'}
              alt=""
              width={30}
              height={30}
            />
          </span>
          <span className="flex flex-col">
            <span className="text-xs opacity-70">{t.upNext}</span>
            <span className="text-[15px] font-bold">{imm ? 'QFUtool' : 'Immvela'}</span>
          </span>
        </button>
      </div>
    </section>
  )
}
