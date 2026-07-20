'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath } from '@/i18n/config'
import GlowCard from './GlowCard'

const EASE = [0.16, 1, 0.3, 1] as const

type GlowColor = 'indigo' | 'cyan' | 'violet'
// Accent hue + matching hex, one per card, across the site's indigo→cyan→violet spectrum.
const ACCENTS: { glow: GlowColor; hex: string }[] = [
  { glow: 'indigo', hex: '#818CF8' },
  { glow: 'cyan', hex: '#22D3EE' },
  { glow: 'violet', hex: '#8B5CF6' },
]

const icons: ReactNode[] = [
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" key="0">
      <path d="M3 7h4M3 12h2M3 17h4M21 7h-4M21 12h-2M21 17h-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="8" y="6" width="8" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 9.5v5M9.8 12h4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" key="1">
      <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 8.5h18" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 6.2h.01M8.2 6.2h.01M10.4 6.2h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 13l-2 2 2 2M13 13l2 2-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" key="2">
      <path d="M5 6l-2.5 6L5 18M19 6l2.5 6L19 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.5 5l-3 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
]

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export default function WhatWeDo({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).whatWeDo

  return (
    <section id="what-we-do" className="relative scroll-mt-24 px-5 pb-28 pt-28 md:px-10">
      <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
            <span className="h-px w-8 bg-sns-indigo/50" />
            {t.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-sns-text md:text-4xl">
            {t.heading}
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {t.items.map((entry, i) => {
            const accent = ACCENTS[i % ACCENTS.length]
            return (
              <motion.div key={i} variants={item}>
                <GlowCard glowColor={accent.glow} className="h-full p-7 md:p-8">
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sns border border-sns-text/10 bg-white/70"
                      style={{ color: accent.hex }}
                    >
                      {icons[i]}
                    </span>
                    <span className="font-mono text-sm font-semibold text-sns-muted">0{i + 1}</span>
                  </div>

                  <p className="mt-6 text-lg font-semibold leading-snug text-sns-text">
                    {entry.main}
                  </p>
                  <p className="mt-3 font-mono text-sm leading-relaxed text-sns-muted">
                    {entry.sub}
                  </p>
                </GlowCard>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="mt-10">
          <Link
            href={localePath(locale, '/services')}
            className="group inline-flex items-center gap-2 font-mono text-sm text-sns-accent transition-colors duration-300 hover:text-sns-cyan"
          >
            {t.seeAll}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 ease-sns-out group-hover:translate-x-1">
              <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
