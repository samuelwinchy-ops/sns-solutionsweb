'use client'

import { useEffect, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { track } from '@vercel/analytics'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath } from '@/i18n/config'
import ReceptionistDemo from './ReceptionistDemo'

const EASE = [0.16, 1, 0.3, 1] as const

type Industry = 'hvac' | 'realEstate'

// HVAC reads in cyan, real estate in violet — a persistent visual tell for
// which specialty you're looking at, carried through the selector and demo.
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

const industryAccent: Record<Industry, { text: string; dot: string; selBorder: string; selBg: string; selShadow: string }> = {
  hvac: {
    text: 'text-sns-cyan',
    dot: 'bg-sns-cyan',
    selBorder: 'border-sns-cyan/50',
    selBg: 'bg-sns-cyan/[0.06]',
    selShadow: 'shadow-[0_0_0_1px_rgba(34,211,238,0.28),0_20px_50px_-28px_rgba(34,211,238,0.4)]',
  },
  realEstate: {
    text: 'text-sns-violet',
    dot: 'bg-sns-violet',
    selBorder: 'border-sns-violet/50',
    selBg: 'bg-sns-violet/[0.07]',
    selShadow: 'shadow-[0_0_0_1px_rgba(139,92,246,0.3),0_20px_50px_-28px_rgba(139,92,246,0.45)]',
  },
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

const Check = () => (
  <span className="mt-1 shrink-0 text-sns-cyan" aria-hidden="true">
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <path d="M3.5 8.5 6.5 11.5 12.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 ease-sns-out group-hover:translate-x-1">
    <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Solutions({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).solutionsPage
  const [audience, setAudience] = useState<Industry>('hvac')
  const active = t.audiences[audience]

  // Preselect the industry when arriving from a homepage card (?industry=…).
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get('industry')
    if (param === 'hvac' || param === 'realEstate') setAudience(param)
  }, [])

  const primaryBtn =
    'group inline-flex items-center gap-2 rounded-full bg-sns-indigo px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.7)] transition-all duration-300 ease-sns-out hover:-translate-y-0.5 hover:bg-sns-accent hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent'

  return (
    <>
      {/* header */}
      <div className="mb-12 max-w-2xl">
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
          <span className="h-px w-8 bg-sns-indigo/50" />
          {t.eyebrow}
        </p>
        <h1 className="text-[2.4rem] font-bold leading-[1.05] tracking-[-0.02em] text-sns-text md:text-5xl">
          {t.heading}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-sns-muted">{t.intro}</p>
      </div>

      {/* product intro */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="glass edge-light glow-blue relative overflow-hidden rounded-sns-lg p-7 md:p-10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sns-indigo/15 blur-3xl"
        />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-sns-green/25 bg-sns-green/[0.08] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-sns-green">
            <span className="h-1.5 w-1.5 rounded-full bg-sns-green" />
            {t.product.tag}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.02em] text-sns-text md:text-4xl">
            {t.product.name}
          </h2>
          <p className="mt-2 text-xl font-medium text-gradient-blue md:text-2xl">
            {t.product.positioning}
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sns-muted">{t.product.lead}</p>
        </div>
      </motion.div>

      {/* industry selector — the two specialties, upfront; drives the demo below */}
      <section className="mt-20">
        <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
          <span className="h-px w-8 bg-sns-indigo/50" />
          {t.audienceLabel}
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {(['hvac', 'realEstate'] as const).map((key) => {
            const a = t.audiences[key]
            const acc = industryAccent[key]
            const selected = audience === key
            return (
              <button
                key={key}
                type="button"
                onClick={() => setAudience(key)}
                aria-pressed={selected}
                className={`group flex items-start gap-4 rounded-sns-lg border p-5 text-left transition-all duration-300 ease-sns-out md:p-6 ${
                  selected ? `${acc.selBorder} ${acc.selBg} ${acc.selShadow}` : 'border-white/[0.08] bg-sns-surface-2 hover:border-white/20'
                }`}
              >
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-sns border border-white/10 bg-sns-surface transition-colors duration-300 ${selected ? acc.text : 'text-sns-muted group-hover:text-sns-text'}`}>
                  {industryIcon[key]}
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-2.5">
                    <span className="text-lg font-semibold text-sns-text">{a.label}</span>
                    {selected && (
                      <span className={`inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest ${acc.text}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${acc.dot}`} />
                        selected
                      </span>
                    )}
                  </span>
                  <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.14em] text-sns-faint">{a.descriptor}</span>
                  <span className="mt-2.5 block text-sm leading-relaxed text-sns-muted">{a.blurb}</span>
                </span>
              </button>
            )
          })}
        </div>

        {/* qualifiers for the selected industry */}
        <motion.div
          key={audience}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="mt-4 grid grid-cols-1 gap-2.5 md:grid-cols-3"
        >
          {active.qualifiers.map((q) => (
            <div key={q} className="glass edge-light flex items-start gap-2.5 rounded-sns p-4 leading-snug text-sns-muted">
              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${industryAccent[audience].dot}`} aria-hidden="true" />
              {q}
            </div>
          ))}
        </motion.div>
      </section>

      {/* demo — reflects the selected industry */}
      <section id="demo" className="mt-16 scroll-mt-24">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-sns-cyan">{t.demo.label}</p>
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-sns-text md:text-3xl">{t.demo.heading}</h2>
            <p className="mt-3 leading-relaxed text-sns-muted">{t.demo[audience].sub}</p>
          </div>
          <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] ${industryAccent[audience].selBorder} ${industryAccent[audience].text}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${industryAccent[audience].dot}`} />
            {active.label}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <ReceptionistDemo key={audience} locale={locale} audience={audience} />
          <div className="flex flex-col gap-4">
            {/* proof stats */}
            <div className="grid grid-cols-3 gap-3">
              {t.proof.map((p) => (
                <div key={p.label} className="glass edge-light rounded-sns p-4 text-center">
                  <p className="text-xl font-bold text-sns-text md:text-2xl">{p.stat}</p>
                  <p className="mt-1 font-mono text-[10px] leading-snug text-sns-faint">{p.label}</p>
                </div>
              ))}
            </div>
            {/* guardrail */}
            <div className="glass edge-light rounded-sns-lg p-5">
              <p className="mb-2 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-sns-amber">
                <span className="h-1.5 w-1.5 rounded-full bg-sns-amber" />
                {t.guardrail.label}
              </p>
              <p className="text-sm leading-relaxed text-sns-muted">{t.guardrail.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* features + outcomes */}
      <section className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="glass edge-light rounded-sns-lg p-7 md:p-8">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-sns-faint">{t.featuresLabel}</p>
          <ul className="flex flex-col gap-3.5">
            {t.features.map((f) => (
              <li key={f} className="flex items-start gap-3 leading-snug text-sns-text">
                <Check />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass edge-light rounded-sns-lg p-7 md:p-8">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-sns-faint">{t.outcomesLabel}</p>
          <ul className="flex flex-col gap-3.5">
            {t.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3 leading-snug text-sns-text">
                <Check />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-20">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-sns-faint">{t.faqLabel}</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {t.faq.map((item) => (
            <div key={item.q} className="glass edge-light rounded-sns-lg p-6">
              <h3 className="font-semibold text-sns-text">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sns-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="glass edge-light glow-blue mt-20 flex flex-col items-start justify-between gap-6 rounded-sns-lg p-8 md:flex-row md:items-center md:p-10">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-sns-text md:text-3xl">{t.ctaHeading}</h2>
          <p className="mt-2 text-sns-muted">{t.ctaSub}</p>
        </div>
        <Link
          href={localePath(locale, '/contact')}
          onClick={() => track('solutions_walkthrough_cta')}
          className={`${primaryBtn} shrink-0`}
        >
          {t.ctaButton}
          <Arrow />
        </Link>
      </section>

      {/* waitlist teaser */}
      <section className="mt-6 overflow-hidden rounded-sns-lg border border-white/[0.08] bg-sns-surface-2 p-8 md:p-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-sns-amber/30 bg-sns-amber/[0.08] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-sns-amber">
          <span className="h-1.5 w-1.5 rounded-full bg-sns-amber" />
          {t.waitlistTeaser.tag}
        </span>
        <div className="mt-4 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-sns-text md:text-3xl">{t.waitlistTeaser.heading}</h2>
            <p className="mt-2 text-sns-muted">{t.waitlistTeaser.sub}</p>
          </div>
          <Link
            href={localePath(locale, '/build-log')}
            onClick={() => track('solutions_waitlist_cta')}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-sns-text transition-all duration-300 ease-sns-out hover:border-sns-indigo/50 hover:bg-sns-indigo/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent"
          >
            {t.waitlistTeaser.cta}
            <Arrow />
          </Link>
        </div>
      </section>

      {/* sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.08] bg-sns-bg/85 p-3 backdrop-blur-md md:hidden">
        <a
          href="#demo"
          onClick={() => track('solutions_sticky_cta')}
          className="flex items-center justify-center gap-2 rounded-full bg-sns-indigo px-6 py-3 text-sm font-semibold text-white"
        >
          {t.stickyCta}
          <Arrow />
        </a>
      </div>
    </>
  )
}
