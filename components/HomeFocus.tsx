'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, immvelaHref } from '@/i18n/config'

const EASE = [0.16, 1, 0.3, 1] as const

// This was a two-up grid of industry cards, HVAC beside real estate, both read
// out of solutionsPage.industries. The HVAC line is discontinued and the
// /solutions catalogue it linked into is retired, so the section is one card:
// the product, full width, pointing at its own domain. Its copy moved into the
// homeFocus dictionary entry, since there is no industries list left to read.
const houseIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 11 12 5l8 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 10v9h12v-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 19v-5h4v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export default function HomeFocus({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).homeFocus

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
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <Link
            href={immvelaHref(locale)}
            className="lift lift-hover lift-cyan group flex h-full items-start gap-4 p-6 md:p-7"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sns border border-sns-text/10 bg-white/70 text-sns-cyan">
              {houseIcon}
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center justify-between gap-2">
                <span className="text-xl font-semibold text-sns-text">{t.card.label}</span>
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0 text-sns-cyan transition-transform duration-300 ease-sns-out group-hover:translate-x-1">
                  <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.14em] text-sns-faint">{t.card.descriptor}</span>
              <span className="mt-3 block max-w-2xl leading-relaxed text-sns-muted">{t.card.blurb}</span>
            </span>
          </Link>
        </motion.div>

        <div className="mt-8">
          <Link
            href={immvelaHref(locale)}
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
