'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath } from '@/i18n/config'

const EASE = [0.16, 1, 0.3, 1] as const

const icons: ReactNode[] = [
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" key="0">
      <path d="M8.5 8.5 5 12l3.5 3.5M15.5 8.5 19 12l-3.5 3.5M13.5 6l-3 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" key="1">
      <path d="M13 3 5 13h5l-1 8 8-11h-5l1-7z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" key="2">
      <path d="M20 11.5a8 8 0 0 1-11.5 7.2L4 20l1.3-4.2A8 8 0 1 1 20 11.5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 10.5h6M9 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
]

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

export default function Services({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).servicesPage
  // The contact form only pre-selects a service when the ?service= value is an
  // exact match from its own list, so take the consulting option from there
  // rather than hardcoding a string that would miss in German.
  const consultService = getDict(locale).contactForm.services[2]

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

      {/* Lead with the consultation — the page's primary action is a meeting,
          not a build request. */}
      <section className="glass edge-light glow-blue mb-14 overflow-hidden rounded-sns-lg p-7 md:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_1fr] md:gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-sns-indigo/30 bg-sns-indigo/[0.1] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-sns-accent">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sns-green opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sns-green" />
              </span>
              {t.consult.tag}
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-[-0.02em] text-sns-text md:text-3xl">
              {t.consult.heading}
            </h2>
            <p className="mt-3 leading-relaxed text-sns-muted">{t.consult.sub}</p>
          </div>

          <div className="flex flex-col justify-center">
            <ul className="flex flex-col gap-2.5">
              {t.consult.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sns-text">
                  <span className="mt-1 shrink-0 text-sns-cyan" aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <path d="M3.5 8.5 6.5 11.5 12.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="leading-snug">{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href={localePath(locale, `/contact?service=${encodeURIComponent(consultService)}`)}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sns-indigo px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.7)] transition-all duration-300 ease-sns-out hover:-translate-y-0.5 hover:bg-sns-accent hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent sm:w-auto"
            >
              {t.consult.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 ease-sns-out group-hover:translate-x-1">
                <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-sns-faint">{t.consult.aside}</p>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-6">
        {t.items.map((service, index) => (
        <motion.article
          key={service.name}
          id={`svc-${index + 1}`}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="glass edge-light scroll-mt-24 rounded-sns-lg p-7 md:p-10"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.1fr] md:gap-12">
            <div>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sns border border-sns-text/10 bg-white/70 text-sns-accent">
                  {icons[index]}
                </span>
                <span className="font-mono text-sm text-sns-faint">0{index + 1}</span>
              </div>
              <h2 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-sns-text md:text-3xl">
                {service.name}
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-sns-muted">{service.tagline}</p>

              <Link
                href={localePath(locale, `/contact?service=${encodeURIComponent(service.name)}`)}
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-sns-indigo px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.7)] transition-all duration-300 ease-sns-out hover:-translate-y-0.5 hover:bg-sns-accent hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent"
              >
                {service.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 ease-sns-out group-hover:translate-x-1">
                  <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-sns-faint">
                  {t.problemLabel}
                </p>
                <p className="leading-relaxed text-sns-muted">{service.problem}</p>
              </div>

              <div>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-sns-faint">
                  {t.whatWeDoLabel}
                </p>
                <p className="leading-relaxed text-sns-muted">{service.whatWeDo}</p>
              </div>

              <div>
                <p className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-sns-faint">
                  {t.outcomesLabel}
                </p>
                <ul className="flex flex-col gap-2">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2.5 text-sns-text">
                      <span className="mt-1 text-sns-cyan" aria-hidden="true">
                        <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                          <path d="M3.5 8.5 6.5 11.5 12.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="leading-snug">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="border-t border-sns-text/[0.08] pt-4 font-mono text-xs leading-relaxed text-sns-faint">
                {service.example}
              </p>
            </div>
          </div>
        </motion.article>
      ))}
      </div>

      <div className="glass edge-light mt-12 flex flex-col items-start justify-between gap-6 rounded-sns-lg p-8 md:flex-row md:items-center md:p-10">
        <div>
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-sns-text md:text-3xl">
            {t.closingHeading}
          </h2>
          <p className="mt-2 text-sns-muted">{t.closingSub}</p>
        </div>
        <Link
          href={localePath(locale, '/contact')}
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-sns-indigo px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.7)] transition-all duration-300 ease-sns-out hover:-translate-y-0.5 hover:bg-sns-accent hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent"
        >
          {t.closingCta}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 ease-sns-out group-hover:translate-x-1">
            <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </>
  )
}
