import Link from 'next/link'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath } from '@/i18n/config'
import { CTA_PRIMARY } from '@/lib/cta'

/**
 * The consultation offer, one band after the products. Secondary by design:
 * the homepage's job is to hand visitors to a product, and this catches the
 * ones neither product fits. The detail (the four-step engagement) lives on
 * /services, one link away.
 */
export default function ConsultBand({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).consult

  return (
    <section id="consulting" className="scroll-mt-20 px-5 pb-16 md:px-10 md:pb-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 border-t border-sns-border pt-12 md:pt-16 lg:grid-cols-12 2xl:max-w-7xl">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-3">{t.eyebrow}</p>
          <h2 className="section-title text-sns-text">{t.heading}</h2>
        </div>
        <div className="flex flex-col items-start gap-6 lg:col-span-5 lg:pt-8">
          <p className="text-lg leading-relaxed text-sns-muted">{t.sub}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href={localePath(locale, '/contact')} className={CTA_PRIMARY}>
              {t.cta}
            </Link>
            <Link
              href={localePath(locale, '/services')}
              className="group inline-flex min-h-11 items-center gap-1 text-[15px] font-semibold text-sns-action underline-offset-4 hover:underline"
            >
              {t.link}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-200 ease-out group-hover:translate-x-1"
              >
                <path
                  d="m5.5 3 4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
