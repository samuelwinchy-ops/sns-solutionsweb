'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath } from '@/i18n/config'

const EASE = [0.16, 1, 0.3, 1] as const

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}
const rail: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.1, ease: EASE, delay: 0.15 } },
}

/**
 * The engagement model: audit → baseline → pilot → prove. Replaces the old
 * "what we do" card trio on the homepage.
 *
 * Built as a stepped rail rather than a fourth card grid on purpose — the page
 * already runs two of those (HomeFocus, and the Immvela module grid one click
 * away), and a third would read as more of the same. The rail also carries the
 * argument visually: these are ordered stages, not a menu.
 */
export default function HowWeWork({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).howWeWork

  return (
    <section id="how-we-work" className="relative scroll-mt-24 px-5 pb-28 pt-24 md:px-10">
      <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
            <span className="h-px w-8 bg-sns-indigo/50" />
            {t.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-sns-text md:text-4xl">
            {t.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-sns-muted">{t.sub}</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
        >
          {/* The rail itself — desktop only. It sits behind the step markers and
              draws itself in once, left to right, so the order is legible before
              a single word is read. */}
          <motion.div
            aria-hidden="true"
            variants={rail}
            className="absolute left-0 right-0 top-[13px] hidden h-px origin-left bg-gradient-to-r from-sns-indigo/45 via-sns-cyan/35 to-transparent md:block"
          />

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-4">
            {t.steps.map((step) => (
              <motion.div key={step.k} variants={item} className="relative min-w-0">
                <div className="flex items-center gap-3 md:block">
                  {/* Marker: a filled node on the rail. On mobile there is no
                      rail, so the number sits inline with the stage name. */}
                  <span className="relative z-10 flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full border border-sns-indigo/30 bg-white font-mono text-[10px] font-bold text-sns-indigo shadow-[0_2px_8px_-3px_rgba(79,70,229,0.5)]">
                    {step.k}
                  </span>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-sns-faint md:mt-4">
                    {step.name}
                  </p>
                </div>

                <p className="mt-3 text-lg font-semibold leading-snug text-sns-text">{step.main}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-sns-muted">{step.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-14 flex flex-col items-start gap-5 border-t border-sns-text/[0.08] pt-7 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-mono text-sm leading-relaxed text-sns-muted">{t.note}</p>
          <Link
            href={localePath(locale, '/services')}
            className="group inline-flex shrink-0 items-center gap-2 font-mono text-sm text-sns-accent transition-colors duration-300 hover:text-sns-cyan"
          >
            {t.cta}
            <svg
              width="14"
              height="14"
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
          </Link>
        </div>
      </div>
    </section>
  )
}
