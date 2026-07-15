'use client'

import { motion, type Variants } from 'framer-motion'
import { track } from '@vercel/analytics'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath, SLOGAN } from '@/i18n/config'
import HeroLogo from './HeroLogo'

const EASE = [0.16, 1, 0.3, 1] as const

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
}

export default function Hero({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).hero

  return (
    <section className="relative flex min-h-dvh flex-col items-start justify-center overflow-hidden px-5 pt-28 md:px-10 md:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 h-[500px] w-[700px]"
        style={{
          background:
            'radial-gradient(ellipse at 18% 38%, rgba(99, 102, 241, 0.12) 0%, transparent 68%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 38%, rgba(6,8,15,0.85) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1.15fr_1fr] md:gap-16 2xl:max-w-7xl 2xl:gap-20">
        <div className="flex min-w-0 flex-col">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-7 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-2.5 pr-3.5 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-sns-cyan" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sns-muted">
              {SLOGAN}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-[2.6rem] font-bold leading-[1.04] tracking-[-0.02em] text-sns-text md:text-[4rem] 2xl:text-[4.6rem]"
          >
            {t.h1a}
            <br />
            <span className="text-gradient-blue text-glow">{t.h1b}</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-7 max-w-xl text-lg leading-relaxed text-sns-muted md:text-xl 2xl:max-w-2xl 2xl:text-[1.35rem]"
          >
            {t.subtitle.map((seg, i) => (
              <span key={i} className={seg.strong ? 'font-medium text-sns-text' : undefined}>
                {seg.t}
              </span>
            ))}
            <span className="mt-4 block font-medium text-sns-text">{t.closer}</span>
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href={localePath(locale, '/contact')}
              onClick={() => track('hero_start_build')}
              className="group inline-flex items-center gap-2 rounded-full bg-sns-indigo px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.7)] transition-all duration-300 ease-sns-out hover:-translate-y-0.5 hover:bg-sns-accent hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent"
            >
              {t.ctaStart}
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
            </a>
            <a
              href={localePath(locale, '/solutions')}
              onClick={() => track('hero_view_solutions')}
              className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.02] px-5 py-3 font-mono text-sm text-sns-text transition-all duration-300 ease-sns-out hover:border-white/25 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent"
            >
              {t.ctaSolutions}
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
            </a>
          </motion.div>
        </div>

        <HeroLogo />
      </div>
    </section>
  )
}
