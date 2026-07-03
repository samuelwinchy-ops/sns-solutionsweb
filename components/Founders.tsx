'use client'

import { motion, type Variants } from 'framer-motion'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale } from '@/i18n/config'

const EASE = [0.16, 1, 0.3, 1] as const

// Founder bios are final, founder-approved copy — kept verbatim (and in English
// on both locales, exactly as the homepage Team cards hard-code English roles).
// Do not edit the wording here.
//
// The gradient monogram is a brand-styled placeholder, NOT a real photo. When
// headshots are available, replace each monogram at the [PLACEHOLDER] marked
// below — do not substitute stock or generated images for the real founders.
const founders = [
  {
    initials: 'SW',
    name: 'Samuel Winch',
    role: 'Co-founder & CTO',
    bio: 'Samuel leads SNS’s technical architecture and full-stack delivery. Originally from England and a self-taught engineer with a background in business, he focuses on turning complex requirements into clean, reliable systems. Outside work, he trains Muay Thai.',
  },
  {
    initials: 'NP',
    name: 'Nicholas Pellechi',
    role: 'Co-founder & CEO',
    bio: 'Nicholas leads SNS’s client relationships, delivery, and operations. From Switzerland and holding a degree in economics, he focuses on understanding what clients actually need before a line of code is written. Away from the studio, he trains at the gym.',
  },
  {
    initials: 'SB',
    name: 'Samson Belachew',
    role: 'Co-founder & CSO',
    bio: 'Samson leads product strategy and sales at SNS. From Ethiopia and holding a degree in psychology, he shapes how SNS’s capabilities meet real market needs — with an eye for the human side of what technology solves. Outside work, he plays football.',
  },
]

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export default function Founders({
  locale = defaultLocale,
}: {
  locale?: Locale
}) {
  const t = getDict(locale).teamPage

  return (
    <>
      <div className="mb-14 max-w-2xl">
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
          <span className="h-px w-8 bg-sns-indigo/50" />
          {t.eyebrow}
        </p>
        <h1 className="text-[2.4rem] font-bold leading-[1.05] tracking-[-0.02em] text-sns-text md:text-5xl">
          {t.heading}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-sns-muted">{t.intro}</p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 gap-5 md:grid-cols-3"
      >
        {founders.map((founder) => (
          <motion.article
            key={founder.name}
            variants={item}
            className="group relative flex min-w-0 flex-col overflow-hidden rounded-sns-lg border border-white/[0.07] bg-white/[0.015] p-7 transition-all duration-500 ease-sns-out hover:border-sns-indigo/30 hover:bg-white/[0.03] hover:glow-blue"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sns-indigo/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
            />

            {/* [PLACEHOLDER: photo of founder] — replace this gradient monogram
                with a real founder headshot when available. Do not use stock or
                generated images. */}
            <div
              className="relative flex h-20 w-20 items-center justify-center rounded-sns bg-gradient-to-br from-sns-indigo via-sns-blue to-sns-cyan ring-1 ring-white/20 transition-transform duration-500 ease-sns-out group-hover:-translate-y-0.5 group-hover:scale-[1.05]"
              style={{
                boxShadow:
                  '0 10px 30px -8px rgba(99,102,241,0.65), inset 0 1px 0 0 rgba(255,255,255,0.4)',
              }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-2 top-2 h-1/3 rounded-full bg-white/25 blur-md"
              />
              <span
                className="relative font-mono text-xl font-bold tracking-tight text-white"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.35)' }}
              >
                {founder.initials}
              </span>
            </div>

            <h2 className="mt-6 text-xl font-semibold text-sns-text">
              {founder.name}
            </h2>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-sns-indigo">
              {founder.role}
            </p>
            <p className="mt-4 leading-relaxed text-sns-muted">{founder.bio}</p>
          </motion.article>
        ))}
      </motion.div>
    </>
  )
}
