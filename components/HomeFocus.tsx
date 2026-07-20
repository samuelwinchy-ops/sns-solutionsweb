'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath } from '@/i18n/config'

const EASE = [0.16, 1, 0.3, 1] as const
type Industry = 'hvac' | 'realEstate'

// Same color language as the /solutions industry selector: HVAC = cyan,
// real estate = violet. Consistency signals "these are our two specialties".
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
  hvac: { text: 'text-sns-cyan', ring: 'group-hover:border-sns-cyan/40' },
  realEstate: { text: 'text-sns-violet', ring: 'group-hover:border-sns-violet/40' },
}

// Each industry has its own dedicated product page.
const industrySlug: Record<Industry, string> = {
  hvac: '/solutions/hvac',
  // Real estate folded into Immvela — its catalog page redirects to /immvela.
  realEstate: '/immvela',
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export default function HomeFocus({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).homeFocus
  const industries = getDict(locale).solutionsPage.industries
  const byKey = (k: Industry) => industries.find((i) => i.key === k)!

  return (
    <section id="focus" className="relative scroll-mt-24 px-5 pb-28 pt-8 md:px-10">
      <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
            <span className="h-px w-8 bg-sns-indigo/50" />
            {t.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-sns-text md:text-4xl">{t.heading}</h2>
          <p className="mt-4 text-lg leading-relaxed text-sns-muted">{t.sub}</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {(['hvac', 'realEstate'] as const).map((key) => {
            const acc = industryAccent[key]
            const info = byKey(key)
            return (
              <motion.div key={key} variants={item}>
                <Link
                  href={localePath(locale, industrySlug[key])}
                  className={`group flex h-full items-start gap-4 rounded-sns-lg border border-sns-text/[0.08] bg-sns-surface p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.8)_inset,0_24px_48px_-28px_rgba(20,25,43,0.2)] transition-colors duration-300 ease-sns-out ${acc.ring} md:p-7`}
                >
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-sns border border-sns-text/10 bg-white/70 ${acc.text}`}>
                    {industryIcon[key]}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-xl font-semibold text-sns-text">{info.label}</span>
                      <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true" className={`shrink-0 ${acc.text} transition-transform duration-300 ease-sns-out group-hover:translate-x-1`}>
                        <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.14em] text-sns-faint">{info.descriptor}</span>
                    <span className="mt-3 block leading-relaxed text-sns-muted">{info.blurb}</span>
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="mt-8">
          <Link
            href={localePath(locale, '/solutions')}
            className="group inline-flex items-center gap-2 font-mono text-sm text-sns-accent transition-colors duration-300 hover:text-sns-cyan"
          >
            {t.cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 ease-sns-out group-hover:translate-x-1">
              <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
