'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { track } from '@vercel/analytics'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath, immvelaHref } from '@/i18n/config'
import { CTA_PRIMARY } from '@/lib/cta'

const EASE = [0.16, 1, 0.3, 1] as const
type Industry = 'hvac' | 'realEstate'
type Status = 'live' | 'beta' | 'waitlist' | 'roadmap'

const industryIcon: Record<Industry, ReactNode> = {
  hvac: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3c2.5 3 4.5 4.8 4.5 8a4.5 4.5 0 0 1-9 0c0-1.4.6-2.5 1.4-3.4C9.7 9 11 7 12 3z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19v2M8.5 18.5 7 20M15.5 18.5 17 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  realEstate: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 11 12 5l8 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10v9h12v-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19v-5h4v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}
const industryText: Record<Industry, string> = { hvac: 'text-sns-violet', realEstate: 'text-sns-cyan' }

// Products that have a shipped app of their own, keyed `${industry}:${category}`.
// These live on their own subdomain, so the link must be a plain <a> — a full
// page load — rather than next/link, which would try to route client-side and
// never leave this site.
const APP_URL: Record<string, string> = {
  // The landing page, not /login — a prospect clicking through from here has
  // no account yet, so a login wall is a dead end. The landing page explains
  // the product and carries its own sign-in.
  'realEstate:marketing': 'https://repost.sns-austria.com/',
}

// Status → colour. Live green, Beta cyan, Waitlist amber, Roadmap faint.
const STATUS: Record<Status, { text: string; dot: string; ring: string; bg: string }> = {
  live: { text: 'text-sns-green', dot: 'bg-sns-green', ring: 'border-sns-green/30', bg: 'bg-sns-green/[0.08]' },
  beta: { text: 'text-sns-cyan', dot: 'bg-sns-cyan', ring: 'border-sns-cyan/30', bg: 'bg-sns-cyan/[0.08]' },
  waitlist: { text: 'text-sns-amber', dot: 'bg-sns-amber', ring: 'border-sns-amber/30', bg: 'bg-sns-amber/[0.08]' },
  roadmap: { text: 'text-sns-faint', dot: 'bg-sns-faint', ring: 'border-sns-text/12', bg: 'bg-white/50' },
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

const Arrow = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 ease-sns-out group-hover:translate-x-1">
    <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Solutions({
  locale = defaultLocale,
  industry,
}: {
  locale?: Locale
  /** Each industry gets its own dedicated page; /solutions is the picker. */
  industry: Industry
}) {
  const t = getDict(locale).solutionsPage
  const industries = t.industries.filter((ind) => ind.key === industry)

  // Only a shipped product sends you to the general contact form. Everything
  // else asks to be put on an early-access list, and each industry has its own —
  // real estate's is the Immvela page (now on its own domain), HVAC's is the
  // on-site HVAC waitlist — so a prospect never lands on the other's list.
  const ctaHref = (status: Status) => {
    if (status === 'live') return localePath(locale, '/contact')
    if (industry === 'realEstate') return immvelaHref(locale, '#early-access')
    return `${localePath(locale, '/solutions/hvac/waitlist')}#early-access`
  }

  const primaryBtn = CTA_PRIMARY

  // The accent spectrum, in the order cards should walk it. See `.lift` in
  // globals.css.
  const LIFT = ['lift-indigo', 'lift-blue', 'lift-cyan', 'lift-violet']

  return (
    <>
      {/* header */}
      <div className="mb-12 max-w-2xl">
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
          <span className="h-px w-8 bg-sns-indigo/50" />
          {t.eyebrow}
        </p>
        <h1 className="text-[2.4rem] font-bold leading-[1.05] tracking-[-0.02em] text-sns-text md:text-5xl">{t.heading}</h1>
        <p className="mt-6 text-lg leading-relaxed text-sns-muted">{t.intro}</p>
      </div>

      {/* industry sections */}
      <div className="flex flex-col gap-16">
        {industries.map((ind) => {
          const key = ind.key as Industry
          const isRealEstate = key === 'realEstate'
          return (
            <section key={ind.key} id={ind.key} className="scroll-mt-24">
              {/* section header */}
              <div className="mb-6 flex flex-col gap-4 border-b border-sns-text/[0.08] pb-6 md:flex-row md:items-end md:justify-between">
                <div className="flex items-start gap-4">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-sns border border-sns-text/10 bg-white/70 ${industryText[key]}`}>
                    {industryIcon[key]}
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold tracking-[-0.02em] text-sns-text md:text-3xl">{ind.label}</h2>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-sns-faint">{ind.descriptor}</p>
                  </div>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-sns-muted md:text-right">{ind.blurb}</p>
              </div>

              {/* bundle note */}
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-sns-text/[0.1] bg-white/50 px-4 py-1.5 font-mono text-[11px] text-sns-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-sns-indigo" />
                {t.bundleNote}
              </p>

              {/* category cards */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {ind.categories.map((cat, ci) => {
                  const s = STATUS[cat.status as Status]
                  const appUrl = APP_URL[`${ind.key}:${cat.key}`]
                  return (
                    <motion.div
                      key={cat.key}
                      variants={reveal}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-60px' }}
                      // Hue cycles down the grid so a column of cards reads as
                      // a gradient rather than as the same block repeated.
                      className={`lift lift-hover ${LIFT[ci % LIFT.length]} flex flex-col p-6`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-lg font-semibold leading-snug text-sns-text">{cat.name}</h3>
                        <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${s.ring} ${s.bg} ${s.text}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                          {t.status[cat.status as Status]}
                        </span>
                      </div>

                      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-sns-faint">{t.whatLabel}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-sns-muted">{cat.what}</p>

                      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-sns-faint">{t.outcomeLabel}</p>
                      <p className="mt-1.5 flex items-start gap-2 text-sm leading-snug text-sns-text">
                        <span className="mt-1 shrink-0 text-sns-cyan" aria-hidden="true">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        {cat.outcome}
                      </p>

                      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-sns-text/[0.08] pt-4">
                        {appUrl && (
                          <a
                            href={appUrl}
                            onClick={() => track('solutions_open_app', { category: cat.key })}
                            className={`group inline-flex items-center gap-1.5 font-mono text-xs font-semibold ${industryText[key]} transition-opacity hover:opacity-80`}
                          >
                            {t.appCta}
                            <Arrow />
                          </a>
                        )}
                        {cat.demo && (
                          <Link
                            href={localePath(locale, `/solutions/demo?industry=${ind.key}`)}
                            onClick={() => track('solutions_see_how', { industry: ind.key })}
                            className={`group inline-flex items-center gap-1.5 font-mono text-xs font-semibold ${industryText[key]} transition-opacity hover:opacity-80`}
                          >
                            {t.demoCta}
                            <Arrow />
                          </Link>
                        )}
                        <Link
                          href={ctaHref(cat.status as Status)}
                          onClick={() => track('solutions_category_cta', { category: cat.key, status: cat.status })}
                          className="group inline-flex items-center gap-1.5 font-mono text-xs text-sns-muted transition-colors hover:text-sns-text"
                        >
                          {t.cta[cat.status as Status]}
                          <Arrow />
                        </Link>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* full-stack bundle CTA under real estate */}
              {isRealEstate && (
                <div className="lift lift-violet glow-blue mt-6 flex flex-col items-start justify-between gap-5 p-6 md:flex-row md:items-center md:p-8">
                  <div className="max-w-xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-sns-indigo/30 bg-sns-indigo/[0.1] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-sns-accent">
                      {t.fullStack.tag}
                    </span>
                    <h3 className="mt-3 text-xl font-bold tracking-[-0.02em] text-sns-text md:text-2xl">{t.fullStack.heading}</h3>
                    <p className="mt-2 text-sm text-sns-muted">{t.fullStack.sub}</p>
                  </div>
                  <Link
                    href={immvelaHref(locale, '#early-access')}
                    onClick={() => track('solutions_full_stack')}
                    className={`${primaryBtn} shrink-0`}
                  >
                    {t.fullStack.cta}
                    <Arrow />
                  </Link>
                </div>
              )}
            </section>
          )
        })}
      </div>

      {/* final CTA, generic and umbrella-level */}
      <section className="lift lift-indigo glow-blue mt-16 flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center md:p-10">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-sns-text md:text-3xl">{t.ctaHeading}</h2>
          <p className="mt-2 text-sns-muted">{t.ctaSub}</p>
        </div>
        <Link href={localePath(locale, '/contact')} onClick={() => track('solutions_walkthrough_cta')} className={`${primaryBtn} shrink-0`}>
          {t.ctaButton}
          <Arrow />
        </Link>
      </section>
    </>
  )
}
