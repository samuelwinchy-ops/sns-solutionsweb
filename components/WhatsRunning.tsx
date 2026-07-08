'use client'

import { motion, type Variants } from 'framer-motion'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale } from '@/i18n/config'
import ScanReveal from './ScanReveal'

const EASE = [0.16, 1, 0.3, 1] as const

// Three redacted systems standing in for SNS's active (NDA'd) projects.
const SYSTEMS = [
  { tag: 'PIPELINE', width: '10rem' },
  { tag: 'INTEGRATION', width: '13rem' },
  { tag: 'AGENT', width: '9rem' },
]

const words: Variants = {
  hidden: { opacity: 0, y: '0.4em', filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: EASE } },
}

const cardIn: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
}

export default function WhatsRunning({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).buildLog
  const headingWords = t.heading.split(' ')

  return (
    <section
      id="build-log"
      className="relative scroll-mt-24 px-5 pb-28 pt-28 md:px-10"
    >
      <div className="mx-auto w-full max-w-5xl 2xl:max-w-6xl">
        {/* Bloom behind the band */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -inset-y-6 z-0 rounded-[2rem] opacity-70"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.16), transparent 70%)',
            }}
          />

          <div
            className="relative z-10 overflow-hidden rounded-sns-lg border border-white/[0.08] bg-sns-surface/60 backdrop-blur-xl"
            style={{
              boxShadow:
                '0 0 0 1px rgba(99, 102, 241, 0.12), 0 24px 80px -24px rgba(59, 130, 246, 0.4), 0 0 120px -40px rgba(34, 211, 238, 0.2)',
            }}
          >
            {/* cinematic scan band */}
            <div className="absolute inset-0 z-0 opacity-90">
              <ScanReveal />
            </div>
            {/* readability wash so the text stays legible over the scan */}
            <div
              aria-hidden="true"
              className="absolute inset-0 z-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(11,15,28,0.94), rgba(11,15,28,0.72) 55%, rgba(11,15,28,0.3))',
              }}
            />
            {/* Top edge highlight */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-sns-indigo/60 to-transparent"
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ staggerChildren: 0.09 }}
              className="relative z-10 grid grid-cols-1 gap-10 p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:p-14"
            >
              {/* Left — live label, headline, copy */}
              <div>
                <p className="mb-4 inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.22em] text-sns-muted">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sns-green opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-sns-green" />
                  </span>
                  {t.live}
                </p>

                <h2 className="flex flex-wrap gap-x-3 text-4xl font-bold tracking-[-0.02em] text-sns-text md:text-5xl">
                  {headingWords.map((w, i) => (
                    <motion.span
                      key={i}
                      variants={words}
                      style={{ display: 'inline-block' }}
                      className={i === headingWords.length - 1 ? 'text-gradient-blue' : undefined}
                    >
                      {w}
                    </motion.span>
                  ))}
                </h2>

                <p className="mt-6 max-w-md text-lg leading-relaxed text-sns-muted">
                  {t.note}
                </p>
              </div>

              {/* Right — redacted system cards */}
              <div className="flex flex-col gap-3">
                {SYSTEMS.map((s) => (
                  <motion.div
                    key={s.tag}
                    variants={cardIn}
                    className="flex items-center justify-between gap-4 rounded-sns border border-white/[0.08] bg-white/[0.04] px-5 py-4 backdrop-blur-md"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-sns-faint">
                        <span className="h-1.5 w-1.5 rounded-full bg-sns-green" />
                        {s.tag}
                      </div>
                      <span
                        className="mt-2.5 block h-3.5 rounded"
                        style={{
                          width: s.width,
                          maxWidth: '100%',
                          background:
                            'linear-gradient(90deg, rgba(139,92,246,0.22), rgba(34,211,238,0.18))',
                        }}
                        aria-label={t.note}
                      />
                      <span
                        aria-hidden="true"
                        className="mt-2 block h-3 w-24 max-w-full rounded"
                        style={{
                          background:
                            'linear-gradient(90deg, rgba(139,92,246,0.22), rgba(34,211,238,0.18))',
                        }}
                      />
                    </div>
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-sns-green/80">
                      {t.operational}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
