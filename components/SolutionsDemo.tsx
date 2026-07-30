'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { track } from '@vercel/analytics'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath } from '@/i18n/config'
import VoiceDemo from './VoiceDemo'
import ReceptionistDemo from './ReceptionistDemo'

const EASE = [0.16, 1, 0.3, 1] as const
type Channel = 'voice' | 'chat'
type Industry = 'hvac' | 'realEstate'

const channelIcon: Record<Channel, JSX.Element> = {
  voice: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.5 5.5c0 8 6 14 14 14l2-3.5-4.5-2-2 2c-2.5-1.2-4.8-3.5-6-6l2-2-2-4.5L4.5 5.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  ),
  chat: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 11.5a8 8 0 0 1-11.5 7.2L4 20l1.3-4.2A8 8 0 1 1 20 11.5z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

export default function SolutionsDemo({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).demoPage
  const sp = getDict(locale).solutionsPage
  const industries = sp.industries
  const proof = sp.proof
  const guardrail = sp.guardrail

  const [channel, setChannel] = useState<Channel>('voice')
  const [industry, setIndustry] = useState<Industry>('hvac')

  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    const i = q.get('industry')
    const c = q.get('channel')
    if (i === 'hvac' || i === 'realEstate') setIndustry(i)
    if (c === 'voice' || c === 'chat') setChannel(c)
  }, [])

  const label = (k: Industry) => industries.find((x) => x.key === k)?.label ?? k

  const seg =
    'flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors duration-300'
  const segOn = 'bg-sns-indigo text-white'
  const segOff = 'text-sns-muted hover:text-sns-text'

  const primaryBtn =
    'group inline-flex items-center gap-2 rounded-full bg-sns-indigo px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.7)] transition-all duration-300 ease-sns-out hover:-translate-y-0.5 hover:bg-sns-accent hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent'

  return (
    <>
      {/* header */}
      <div className="mb-8 max-w-2xl">
        <Link
          href={localePath(locale, '/solutions')}
          className="mb-6 inline-flex items-center gap-1.5 font-mono text-xs text-sns-muted transition-colors hover:text-sns-accent"
        >
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M11 7H3M6.5 3.5 3 7l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t.backCta}
        </Link>
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-cyan">
          <span className="h-px w-8 bg-sns-cyan/50" />
          {t.eyebrow}
        </p>
        <h1 className="text-[2.2rem] font-bold leading-[1.06] tracking-[-0.02em] text-sns-text md:text-4xl">{t.heading}</h1>
        <p className="mt-5 text-lg leading-relaxed text-sns-muted">{t.intro}</p>
      </div>

      {/* controls */}
      <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:gap-10">
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-sns-faint">{t.channelLabel}</p>
          <div className="inline-flex rounded-full border border-sns-text/12 bg-white/50 p-1">
            {(['voice', 'chat'] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setChannel(c)
                  track('demo_channel', { channel: c })
                }}
                aria-pressed={channel === c}
                className={`${seg} ${channel === c ? segOn : segOff}`}
              >
                {channelIcon[c]}
                {t.channels[c]}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-sns-faint">{t.industryLabel}</p>
          <div className="inline-flex rounded-full border border-sns-text/12 bg-white/50 p-1">
            {(['hvac', 'realEstate'] as const).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setIndustry(k)}
                aria-pressed={industry === k}
                className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors duration-300 ${
                  industry === k ? segOn : segOff
                }`}
              >
                {label(k)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* demo */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <motion.div
          key={`${channel}-${industry}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          {channel === 'voice' ? (
            <VoiceDemo locale={locale} audience={industry} />
          ) : (
            <ReceptionistDemo locale={locale} audience={industry} />
          )}
        </motion.div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-3">
            {proof.map((p) => (
              <div key={p.label} className="glass edge-light rounded-sns p-4 text-center">
                <p className="text-xl font-bold text-sns-text md:text-2xl">{p.stat}</p>
                <p className="mt-1 font-mono text-[10px] leading-snug text-sns-faint">{p.label}</p>
              </div>
            ))}
          </div>
          <div className="glass edge-light rounded-sns-lg p-5">
            <p className="mb-2 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-sns-amber">
              <span className="h-1.5 w-1.5 rounded-full bg-sns-amber" />
              {guardrail.label}
            </p>
            <p className="text-sm leading-relaxed text-sns-muted">{guardrail.text}</p>
          </div>
        </div>
      </div>

      {/* FAQ — inbound-agent specifics live here, not on the umbrella products page */}
      <section className="mt-16">
        {/* The section label is the h2 that the questions below hang off. As a
            <p> it left them as h3s with no h2 anywhere above, which is what
            broke the sequential-heading order on this page. */}
        <h2 className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-sns-faint">{sp.faqLabel}</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {sp.faq.map((item) => (
            <div key={item.q} className="glass edge-light rounded-sns-lg p-6">
              <h3 className="font-semibold text-sns-text">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sns-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="glass edge-light glow-blue mt-14 flex flex-col items-start justify-between gap-6 rounded-sns-lg p-8 md:flex-row md:items-center md:p-10">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-sns-text md:text-3xl">{t.ctaHeading}</h2>
          <p className="mt-2 text-sns-muted">{t.ctaSub}</p>
        </div>
        <Link href={localePath(locale, '/contact')} onClick={() => track('demo_walkthrough_cta')} className={`${primaryBtn} shrink-0`}>
          {t.ctaButton}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 ease-sns-out group-hover:translate-x-1">
            <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </section>
    </>
  )
}
