'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { track } from '@vercel/analytics'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale } from '@/i18n/config'
import { useImmvelaPath } from '@/lib/immvela-nav'
import WaitlistForm from './WaitlistForm'
import ImmvelaFilm from './ImmvelaFilm'

const EASE = [0.16, 1, 0.3, 1] as const

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}
const container: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 ease-sns-out group-hover:translate-x-1">
    <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/**
 * Immvela — the campaign landing for SNS's end-to-end real-estate agent.
 * Lives on /immvela. A "daylight" version of the SNS site: same particle field
 * (green on cream, see ImmvelaField), Immvela's own light palette. Copy mirrors
 * the launch ad the social campaign points here.
 */
export default function ImmvelaLanding({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).waitlistPage
  const immvela = useImmvelaPath(locale)

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      {/* Deliberately bare: no status pill, no wash behind the wordmark. Both
          were removed together — the pill ("Now in early access", pinging dot)
          and the warm radial aura it sat in read as stock landing-page
          furniture, and the aura's only job was to frame the pill. The proof
          row below already says where the product stands, in specifics. */}
      <section id="top" className="pb-16 pt-10 md:pb-24 md:pt-14">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.h1 variants={item} className="im-wordmark text-6xl leading-[0.92] tracking-[-0.035em] md:text-8xl">
            Immvela<span className="dot">.</span>
          </motion.h1>

          <motion.div variants={item} className="mt-5 flex items-center gap-3">
            <span className="im-hairline h-px w-7" />
            <span className="im-eyebrow text-[11px]">{t.builtInOpen}</span>
            <span className="im-hairline h-px w-7" />
          </motion.div>

          <motion.p variants={item} className="mt-6 text-[1.7rem] font-semibold leading-[1.15] tracking-[-0.02em] im-ink md:text-[2.3rem]">
            {t.tagline}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-2xl text-lg leading-relaxed im-muted">
            {t.heroSub}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#early-access"
              onClick={() => track('immvela_hero_cta')}
              className="im-btn group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
            >
              {t.primaryCta}
              <Arrow />
            </a>
            <a href="#modules" className="im-btn-ghost group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium">
              {t.secondaryCta}
              <Arrow />
            </a>
          </motion.div>

          <motion.dl variants={item} className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-[var(--im-line)] pt-7">
            {t.proof.map((p) => (
              <div key={p.label} className="min-w-0">
                <dt className="im-green text-2xl font-bold tracking-[-0.02em] md:text-3xl">{p.stat}</dt>
                <dd className="mt-1 max-w-[12rem] text-xs leading-snug im-muted">{p.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </section>

      {/* ── FILM ──────────────────────────────────────────────────────── */}
      {/* Sits between the hero's claim and the module grid that details it,
          because "what even is this" is the question a cold visitor has at
          exactly this point — and the film answers it better than the grid
          can. Anyone who does not want to spend the running time simply
          scrolls past it into the modules, which lose nothing by following. */}
      <ImmvelaFilm locale={locale} />

      {/* ── MODULES ───────────────────────────────────────────────────── */}
      <section id="modules" className="scroll-mt-20 border-t border-[var(--im-line)] pt-16 md:pt-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-5 flex items-center gap-3 im-eyebrow text-xs">
            <span className="im-hairline h-px w-8" />
            {t.modulesLabel}
          </p>
          <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.02em] im-ink md:text-[2.6rem]">
            {t.modulesHeadingA} <span className="im-green">{t.modulesHeadingB}</span>
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {t.modules.map((m) => {
            const active = m.status === 'active'
            return (
              <motion.div
                key={m.code}
                variants={item}
                className={`${active ? 'im-card-warm' : 'im-card'} flex min-h-[168px] flex-col p-6`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] im-faint">{m.code}</span>
                  <span className={`im-chip ${active ? 'im-chip-active' : 'im-chip-progress'}`}>
                    {active ? (
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--im-green)' }} />
                    ) : (
                      <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M4 2.5h6M4 11.5h6M4.5 2.5c0 2.5 5 3 5 4.5s-5 2-5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    )}
                    {active ? t.statusActive : t.statusProgress}
                  </span>
                </div>
                <h3 className="mt-auto pt-8 text-xl font-semibold im-ink">{m.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed im-muted">{m.desc}</p>
              </motion.div>
            )
          })}

          {/* Closes the grid exactly at both breakpoints: 7 modules + this cell
              is 4 full rows at 2-up, and 7 + a double-width cell is 3 full rows
              at 3-up. Change the module count and this span has to be re-checked
              or the grid ends on a hole. */}
          <motion.div variants={item} className="im-card-cta flex min-h-[168px] flex-col p-6 lg:col-span-2">
            <p className="text-sm leading-relaxed im-ink">{t.liveNote}</p>
            <div className="mt-auto flex flex-col items-start gap-2.5 pt-5">
              <a
                href="#early-access"
                onClick={() => track('immvela_get_signin')}
                className="im-green group inline-flex items-center gap-1.5 font-mono text-xs font-semibold transition-opacity hover:opacity-70"
              >
                {t.signinCta}
                <Arrow />
              </a>
              {/* Immvela's own module walkthrough, not the SNS inbound-agent
                  demo at /solutions/demo this used to point at — that one lives
                  on the SNS domain and shows a receptionist, which is one
                  in-development module out of seven. */}
              <Link
                href={immvela('/demo')}
                onClick={() => track('immvela_see_demo')}
                className="im-green group inline-flex items-center gap-1.5 font-mono text-xs font-semibold transition-opacity hover:opacity-70"
              >
                {t.demoCta}
                <Arrow />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── GUARDRAIL ─────────────────────────────────────────────────── */}
      <section className="mt-14">
        <div className="im-panel p-6 md:p-8">
          <p className="mb-2 im-eyebrow text-[11px]">{t.guardrail.label}</p>
          <p className="max-w-3xl text-base leading-relaxed im-ink md:text-lg">{t.guardrail.text}</p>
        </div>
      </section>

      {/* ── WAITLIST ──────────────────────────────────────────────────── */}
      <section id="early-access" className="mt-16 scroll-mt-20 border-t border-[var(--im-line)] pt-16 md:pt-20">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 im-eyebrow text-xs">
            <span className="im-hairline h-px w-8" />
            {t.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.02em] im-ink md:text-4xl">{t.heading}</h2>
          <p className="mt-4 text-lg leading-relaxed im-muted">{t.intro}</p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-2xl font-semibold leading-[1.2] tracking-[-0.02em] im-ink md:text-[1.9rem]">
              {t.closingA} <span className="im-green">{t.closingB}</span>
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] im-faint">
              Immvela — {t.byline}
            </p>
          </div>

          {/* h3: this sits inside the "Be first on Immvela" section, which
              already carries the h2. */}
          <WaitlistForm locale={locale} industry="realEstate" theme="light" headingLevel={3} />
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="mt-16 border-t border-[var(--im-line)] pt-16 md:pt-20">
        {/* The section label carries the h2 the questions hang off. It passed
            the audit as a <p> only by accident, because the waitlist section's
            h2 happened to precede it. */}
        <h2 className="mb-8 flex items-center gap-3 im-eyebrow text-xs">
          <span className="im-hairline h-px w-8" />
          {t.faqLabel}
        </h2>
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
          {t.faq.map((f) => (
            <motion.div key={f.q} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
              <h3 className="text-base font-semibold im-ink">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed im-muted">{f.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
