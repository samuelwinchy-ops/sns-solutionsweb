'use client'

import { track } from '@vercel/analytics'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath } from '@/i18n/config'
import { CTA_PRIMARY } from '@/lib/cta'

/**
 * The homepage hero. SNS is the parent company, so this does one thing: say in
 * two lines what we do, then send the visitor to the products. Centred and
 * large, the way a company homepage opens (apple.com, stripe.com), with no
 * product chrome of its own — each product gets its own tile directly below.
 *
 * The primary action scrolls to the products; the consultation is the quiet
 * text link beside it, because it is the secondary offer.
 *
 * One arrival, in CSS (`.arrive` in globals.css), so nothing waits on
 * hydration to become visible.
 */
export default function Hero({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).hero

  return (
    <section className="px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <h1 className="arrive display-title text-sns-text">
          {t.h1a} <em className="text-sns-muted">{t.h1b}</em>
        </h1>

        <p
          className="arrive mt-8 max-w-2xl text-lg leading-relaxed text-sns-muted md:text-xl"
          style={{ animationDelay: '70ms' }}
        >
          {t.subtitle.map((seg, i) => (
            <span key={i} className={seg.strong ? 'font-semibold text-sns-text' : undefined}>
              {seg.t}
            </span>
          ))}
        </p>

        <div
          className="arrive mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          style={{ animationDelay: '140ms' }}
        >
          <a href="#products" onClick={() => track('hero_see_products')} className={CTA_PRIMARY}>
            {t.ctaProducts}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-200 ease-out group-hover:translate-y-0.5"
            >
              <path
                d="M7 3v8M3.5 7.5 7 11l3.5-3.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href={localePath(locale, '/contact')}
            onClick={() => track('hero_start_build')}
            className="group inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold text-sns-action underline-offset-4 transition-colors duration-200 hover:text-sns-action-hover hover:underline"
          >
            {t.ctaStart}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-200 ease-out group-hover:translate-x-1"
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
        </div>
      </div>
    </section>
  )
}
