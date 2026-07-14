'use client'

import { motion, type Variants } from 'framer-motion'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale } from '@/i18n/config'
import WaitlistForm from './WaitlistForm'

const EASE = [0.16, 1, 0.3, 1] as const

// One accent per roadmap tier: shipped → green, in progress → amber, later → faint.
const TIER_ACCENT = [
  { dot: 'bg-sns-green', text: 'text-sns-green', ring: 'border-sns-green/25' },
  { dot: 'bg-sns-amber', text: 'text-sns-amber', ring: 'border-sns-amber/25' },
  { dot: 'bg-sns-faint', text: 'text-sns-faint', ring: 'border-white/10' },
]

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export default function Waitlist({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).waitlistPage

  return (
    <>
      {/* header */}
      <div className="mb-12 max-w-2xl">
        <p className="mb-4 inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-sns-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sns-amber opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-sns-amber" />
          </span>
          {t.eyebrow}
        </p>
        <h1 className="text-[2.4rem] font-bold leading-[1.05] tracking-[-0.02em] text-sns-text md:text-5xl">
          {t.heading}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-sns-muted">{t.intro}</p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        {/* roadmap */}
        <div>
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-sns-faint">{t.tiersLabel}</p>
          <div className="flex flex-col gap-4">
            {t.tiers.map((tier, i) => {
              const accent = TIER_ACCENT[i % TIER_ACCENT.length]
              return (
                <motion.div
                  key={tier.label}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  className={`glass edge-light rounded-sns-lg border ${accent.ring} p-5 md:p-6`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-semibold text-sns-text">{tier.label}</span>
                    <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] ${accent.text}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
                      {tier.status}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 font-mono text-sm leading-snug text-sns-muted">
                        <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${accent.dot}`} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* form */}
        <div className="lg:sticky lg:top-24">
          <WaitlistForm locale={locale} />
        </div>
      </div>
    </>
  )
}
