'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { track } from '@vercel/analytics'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath } from '@/i18n/config'

const EASE = [0.16, 1, 0.3, 1] as const
type Industry = 'hvac' | 'realEstate'
type Status = 'live' | 'beta' | 'waitlist' | 'roadmap'

const industryIcon: Record<Industry, ReactNode> = {
  hvac: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3c2.5 3 4.5 4.8 4.5 8a4.5 4.5 0 0 1-9 0c0-1.4.6-2.5 1.4-3.4C9.7 9 11 7 12 3z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19v2M8.5 18.5 7 20M15.5 18.5 17 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  realEstate: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 11 12 5l8 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10v9h12v-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19v-5h4v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

const industryAccent: Record<Industry, { text: string; ring: string }> = {
  hvac: { text: 'text-sns-cyan', ring: 'hover:border-sns-cyan/40' },
  realEstate: { text: 'text-sns-violet', ring: 'hover:border-sns-violet/40' },
}

const industrySlug: Record<Industry, string> = {
  hvac: '/solutions/hvac',
  realEstate: '/solutions/real-estate',
}

const STATUS_DOT: Record<Status, string> = {
  live: 'bg-sns-green',
  beta: 'bg-sns-cyan',
  waitlist: 'bg-sns-amber',
  roadmap: 'bg-sns-faint',
}

const container: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 ease-sns-out group-hover:translate-x-1">
    <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/**
 * The /solutions landing page: an industry picker. Each industry's products
 * live on its own dedicated page rather than being stacked together here.
 */
export default function SolutionsIndex({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).solutionsPage

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
        <h1 className="text-[2.4rem] font-bold leading-[1.05] tracking-[-0.02em] text-sns-text md:text-5xl">{t.heading}</h1>
        <p className="mt-6 text-lg leading-relaxed text-sns-muted">{t.intro}</p>
      </div>

      {/* industry picker */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {t.industries.map((ind) => {
          const key = ind.key as Industry
          const acc = industryAccent[key]
          return (
            <motion.div key={ind.key} variants={item}>
              <Link
                href={localePath(locale, industrySlug[key])}
                onClick={() => track('solutions_index_pick', { industry: ind.key })}
                className={`group flex h-full flex-col rounded-sns-lg border border-white/[0.08] bg-sns-surface-2 p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset,0_24px_48px_-28px_rgba(0,0,0,0.75)] transition-colors duration-300 ease-sns-out ${acc.ring} md:p-7`}
              >
                <div className="flex items-start gap-4">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-sns border border-white/10 bg-sns-surface ${acc.text}`}>
                    {industryIcon[key]}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h2 className="text-xl font-semibold text-sns-text md:text-2xl">{ind.label}</h2>
                      <span className={`shrink-0 ${acc.text}`}>
                        <Arrow />
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-sns-faint">{ind.descriptor}</p>
                  </div>
                </div>

                <p className="mt-4 leading-relaxed text-sns-muted">{ind.blurb}</p>

                {/* what's inside */}
                <ul className="mt-5 flex flex-col gap-2 border-t border-white/[0.06] pt-4">
                  {ind.categories.map((cat) => (
                    <li key={cat.key} className="flex items-center gap-2.5 text-sm text-sns-muted">
                      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${STATUS_DOT[cat.status as Status]}`} aria-hidden="true" />
                      <span className="min-w-0 flex-1 truncate">{cat.name}</span>
                      <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-sns-faint">
                        {t.status[cat.status as Status]}
                      </span>
                    </li>
                  ))}
                </ul>

                <span className={`mt-5 inline-flex items-center gap-1.5 font-mono text-xs font-semibold ${acc.text}`}>
                  {t.indexCta}
                  <Arrow />
                </span>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>

      {/* final CTA — generic, umbrella-level */}
      <section className="glass edge-light glow-blue mt-16 flex flex-col items-start justify-between gap-6 rounded-sns-lg p-8 md:flex-row md:items-center md:p-10">
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
