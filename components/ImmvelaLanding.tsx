'use client'

import Link from 'next/link'
import { track } from '@vercel/analytics'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale } from '@/i18n/config'
import { useImmvelaPath } from '@/lib/immvela-nav'
import WaitlistForm from './WaitlistForm'
import ImmvelaFilm from './ImmvelaFilm'


// The hero's arrival is the page's one orchestrated moment; everything below
// it renders in place. Children rise 70ms apart (`.arrive` in globals.css,
// CSS rather than JS so the hero is never stuck invisible before hydration),
// under the ~100ms at which a stagger stops reading as one movement.

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M3 7h8M7.5 3.5 11 7l-3.5 3.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * Immvela — the campaign landing for SNS's end-to-end real-estate agent.
 * Lives on /immvela, in Immvela's own light palette.
 */
export default function ImmvelaLanding({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).waitlistPage
  const immvela = useImmvelaPath(locale)
  const live = t.modules.filter((m) => m.status === 'active')
  const building = t.modules.filter((m) => m.status !== 'active')

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      {/* Deliberately bare: no status pill, no wash behind the wordmark. Both
          were removed together — the pill ("Now in early access", pinging dot)
          and the warm radial aura it sat in read as stock landing-page
          furniture, and the aura's only job was to frame the pill. The proof
          row below already says where the product stands, in specifics. */}
      <section id="top" className="pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="max-w-3xl">
          <h1
            className="arrive im-wordmark text-6xl leading-[0.92] tracking-[-0.035em] md:text-8xl"
            style={{ animationDelay: '0ms' }}
          >
            Immvela<span className="dot">.</span>
          </h1>

          <p className="arrive im-eyebrow mt-5 text-sm" style={{ animationDelay: '70ms' }}>
            {t.builtInOpen}
          </p>

          <p
            className="arrive im-title im-ink mt-6 text-[1.875rem] md:text-[2.5rem]"
            style={{ animationDelay: '140ms' }}
          >
            {t.tagline}
          </p>

          <p
            className="arrive im-muted mt-5 max-w-2xl text-lg leading-relaxed"
            style={{ animationDelay: '210ms' }}
          >
            {t.heroSub}
          </p>

          <div
            className="arrive mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: '280ms' }}
          >
            <a
              href="#early-access"
              onClick={() => track('immvela_hero_cta')}
              className="im-btn group inline-flex items-center gap-2 px-5 py-3 text-[15px] font-semibold"
            >
              {t.primaryCta}
              <Arrow />
            </a>
            <a
              href="#modules"
              className="im-btn-ghost group inline-flex items-center gap-2 px-5 py-3 text-[15px] font-medium"
            >
              {t.secondaryCta}
              <Arrow />
            </a>
          </div>

          <dl
            className="arrive mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-[var(--im-line)] pt-7"
            style={{ animationDelay: '350ms' }}
          >
            {t.proof.map((p) => (
              <div key={p.label} className="min-w-0">
                <dt className="im-green text-2xl font-bold tracking-[-0.02em] md:text-3xl">
                  {p.stat}
                </dt>
                <dd className="im-muted mt-1 max-w-[12rem] text-xs leading-snug">{p.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── FILM ──────────────────────────────────────────────────────── */}
      {/* Sits between the hero's claim and the module grid that details it,
          because "what even is this" is the question a cold visitor has at
          exactly this point — and the film answers it better than the grid
          can. Anyone who does not want to spend the running time simply
          scrolls past it into the modules, which lose nothing by following. */}
      <ImmvelaFilm locale={locale} />

      {/* ── MODULES ───────────────────────────────────────────────────── */}
      <section
        id="modules"
        className="scroll-mt-20 border-t border-[var(--im-line)] pt-16 md:pt-20"
      >
        <div className="mb-10 max-w-3xl">
          <p className="im-eyebrow mb-3 text-sm">{t.modulesLabel}</p>
          <h2 className="im-title im-section-title im-ink">
            {t.modulesHeadingA} <span className="im-green">{t.modulesHeadingB}</span>
          </h2>
        </div>

        {/* Not a grid of seven equal cards. The two modules you can use today
            are set large on the left; the five in development are a plain
            index on the right. Rank is carried by size and position, so the
            page answers "what can I use now" before anything is read — and it
            does not pretend seven modules are equally finished. */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-4 lg:col-span-7">
            {live.map((m) => (
              <div key={m.code} className="im-card flex flex-col gap-3 p-6 md:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="im-faint text-sm font-medium">{m.code}</span>
                  <span className="im-chip im-chip-active">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
                    {t.statusActive}
                  </span>
                </div>
                <h3 className="im-title im-ink text-[1.75rem]">{m.name}</h3>
                <p className="im-muted leading-relaxed">{m.desc}</p>
              </div>
            ))}

            <div className="im-panel flex flex-col gap-2 p-6">
              <p className="im-ink text-[15px] leading-relaxed">{t.liveNote}</p>
              <div className="flex flex-wrap items-center gap-x-6">
                <a
                  href="#early-access"
                  onClick={() => track('immvela_get_signin')}
                  className="im-green group inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold underline-offset-4 hover:underline"
                >
                  {t.signinCta}
                  <Arrow />
                </a>
                {/* Immvela's own module walkthrough, not the SNS inbound-agent
                    demo at /solutions/demo this used to point at — that one
                    lives on the SNS domain and shows a receptionist, which is
                    one in-development module out of seven. */}
                <Link
                  href={immvela('/demo')}
                  onClick={() => track('immvela_see_demo')}
                  className="im-green group inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold underline-offset-4 hover:underline"
                >
                  {t.demoCta}
                  <Arrow />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="im-faint mb-2 flex items-center gap-2 text-sm font-medium">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full border border-current" />
              {t.statusProgress}
            </p>
            <ol className="border-t border-[var(--im-line)]">
              {building.map((m) => (
                <li key={m.code} className="border-b border-[var(--im-line)] py-5">
                  <h3 className="im-ink text-lg font-semibold">
                    {m.name} <span className="im-faint font-normal">· {m.code}</span>
                  </h3>
                  <p className="im-muted mt-1 text-[15px] leading-relaxed">{m.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── GUARDRAIL ─────────────────────────────────────────────────── */}
      <section className="mt-14">
        <div className="im-panel p-6 md:p-8">
          <p className="im-eyebrow mb-2 text-sm">{t.guardrail.label}</p>
          <p className="im-ink max-w-3xl text-base leading-relaxed md:text-lg">
            {t.guardrail.text}
          </p>
        </div>
      </section>

      {/* ── WAITLIST ──────────────────────────────────────────────────── */}
      <section
        id="early-access"
        className="mt-16 scroll-mt-20 border-t border-[var(--im-line)] pt-16 md:pt-20"
      >
        <div className="mb-10 max-w-2xl">
          <p className="im-eyebrow mb-3 text-sm">{t.eyebrow}</p>
          <h2 className="im-title im-section-title im-ink">{t.heading}</h2>
          <p className="im-muted mt-4 text-lg leading-relaxed">{t.intro}</p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="im-ink text-2xl font-semibold leading-[1.2] tracking-[-0.02em] md:text-[1.9rem]">
              {t.closingA} <span className="im-green">{t.closingB}</span>
            </p>
            <p className="im-faint mt-6 text-sm">Immvela — {t.byline}</p>
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
        <h2 className="im-title im-section-title im-ink mb-8">{t.faqLabel}</h2>
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
          {t.faq.map((f) => (
            <div key={f.q}>
              <h3 className="im-ink text-base font-semibold">{f.q}</h3>
              <p className="im-muted mt-2 text-[15px] leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
