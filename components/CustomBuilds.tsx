import Link from 'next/link'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath } from '@/i18n/config'
import { CTA_PRIMARY } from '@/lib/cta'

/**
 * How a custom build runs, on /services: talk → baseline → pilot → prove.
 *
 * It used to close the homepage; the homepage now belongs to the products,
 * with a single consultation band (ConsultBand) in place of this, and the
 * detail moved here where someone considering a build actually reads it. The
 * numbers carry the argument: these are ordered stages, not a menu. It ends at
 * /contact, because the point of the section is to start a conversation.
 */
export default function CustomBuilds({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).customBuilds

  return (
    <section id="custom-builds" className="relative scroll-mt-24 pt-24">
      <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow mb-3">{t.eyebrow}</p>
          <h2 className="section-title text-sns-text">{t.heading}</h2>
          <p className="mt-4 text-lg leading-relaxed text-sns-muted">{t.sub}</p>
        </div>

        <ol className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-4">
          {t.steps.map((step) => (
            <li key={step.k} className="min-w-0 border-t border-sns-border pt-5">
              {/* The step number is a literal figure, so it is the one place
                  here that keeps the mono face. */}
              <p className="flex items-baseline gap-3 text-sm font-medium text-sns-text">
                <span className="font-mono text-sns-faint">{step.k}</span>
                {step.name}
              </p>
              <p className="mt-3 text-lg font-semibold leading-snug text-sns-text">{step.main}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-sns-muted">{step.sub}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col items-start gap-5 border-t border-sns-border pt-7 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl leading-relaxed text-sns-muted">{t.note}</p>
          {/* A solid CTA, not the text link this used to be. This section
              is the page's closing ask, and it was carrying the specific,
              well-aimed pitch with the quiet button while the footer's generic
              one below it took the solid treatment — backwards. The footer's
              CTA card is switched off on the homepage now (showCta={false}), so
              this is the only filled button in view and the one-solid-CTA rule
              in lib/cta.ts still holds. */}
          <Link href={localePath(locale, '/contact')} className={`${CTA_PRIMARY} shrink-0`}>
            {t.cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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
