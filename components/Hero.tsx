'use client'

import { motion, type Variants } from 'framer-motion'
import { track } from '@vercel/analytics'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath, immvelaHref } from '@/i18n/config'
import { CTA_PRIMARY_SM, CTA_SECONDARY } from '@/lib/cta'
import ImmvelaShowcase from './ImmvelaShowcase'

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
    <section className="relative flex min-h-[74vh] flex-col justify-center overflow-hidden px-5 pb-16 pt-32 md:px-10 md:pb-20">
      {/* Indigo light source, upper-left, behind the headline. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 h-[520px] w-[720px]"
        style={{
          background:
            'radial-gradient(ellipse at 22% 34%, rgba(79, 70, 229, 0.14) 0%, transparent 66%)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl 2xl:max-w-7xl">
        {/* The Immvela panel isn't decoration filling dead space — it is the
            studio's own product, so it gets real estate equal to the pitch.
            Copy leads on lg; on smaller screens the panel stacks underneath,
            because a carousel above the headline buries what we are. */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="max-w-2xl">
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="text-[2.6rem] font-bold leading-[1.05] tracking-[-0.02em] text-sns-text md:text-[3.4rem] 2xl:text-[3.9rem]"
            >
              {t.h1a}
              <br />
              <span className="text-gradient-blue text-glow">{t.h1b}</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mt-6 max-w-xl text-lg leading-relaxed text-sns-muted"
            >
              {t.subtitle.map((seg, i) => (
                <span key={i} className={seg.strong ? 'font-semibold text-sns-text' : undefined}>
                  {seg.t}
                </span>
              ))}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href={localePath(locale, '/contact')}
                onClick={() => track('hero_start_build')}
                className={CTA_PRIMARY_SM}
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
                href={immvelaHref(locale)}
                onClick={() => track('hero_view_immvela')}
                className={CTA_SECONDARY}
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

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="w-full"
          >
            <ImmvelaShowcase locale={locale} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
