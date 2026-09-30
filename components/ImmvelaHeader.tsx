'use client'

import { useEffect, useState } from 'react'
import { track } from '@vercel/analytics'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath } from '@/i18n/config'
import { SITE_URL } from '@/lib/site'
import { useImmvelaPath } from '@/lib/immvela-nav'
import LanguageToggle from './LanguageToggle'

/**
 * Slim header for the Immvela pages — the counterpart to the SNS <Nav>. Keeps
 * the same proportions (fixed, h-14, max-w-6xl) but in Immvela's palette, so
 * the page reads as its own product without looking like a different website.
 * Opaque once scrolled: a frosted header over moving content is legible only
 * some of the time.
 *
 * `subpage`: the wordmark and CTA are in-page anchors on the landing (#top,
 * #early-access), and both are dead links anywhere else. On a subpage they
 * become links back to the landing instead.
 */
export default function ImmvelaHeader({
  locale = defaultLocale,
  subpage = false,
}: {
  locale?: Locale
  subpage?: boolean
}) {
  const t = getDict(locale).waitlistPage
  const immvela = useImmvelaPath(locale)
  const homeHref = subpage ? immvela() : '#top'
  const ctaHref = subpage ? `${immvela()}#early-access` : '#early-access'

  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-14 px-5 transition-colors duration-200 md:px-10 ${
        scrolled ? 'im-header' : 'border-b border-transparent bg-[var(--im-cream)]'
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between 2xl:max-w-7xl">
        <a href={homeHref} className="flex items-baseline gap-3" aria-label="Immvela — top">
          <span className="im-wordmark text-lg md:text-xl">
            Immvela<span className="dot">.</span>
          </span>
          <span className="im-faint hidden text-[13px] sm:inline">{t.byline}</span>
        </a>

        <div className="flex items-center gap-2 md:gap-4">
          {/* The same flag switch the SNS nav uses. It was a duplicated EN/DE
              text pair here, which meant the flag change had to be made twice —
              and the second copy is exactly the one that gets forgotten. */}
          <LanguageToggle />

          {/* Immvela sits on its own domain; "back to SNS" crosses to the SNS
              marketing site, so this is an absolute URL rather than a path. */}
          <a
            href={`${SITE_URL}${localePath(locale, '/')}`}
            aria-label={t.backToSns}
            className="im-btn-ghost inline-flex min-w-11 items-center justify-center gap-2 px-3 text-sm font-medium sm:px-3"
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M11 7H3M6.5 3.5 3 7l3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden sm:inline">{t.backToSns}</span>
          </a>

          <a
            href={ctaHref}
            onClick={() => track('immvela_header_cta')}
            className="im-btn inline-flex items-center gap-2 px-4 text-sm font-semibold"
          >
            {t.primaryCta}
          </a>
        </div>
      </div>
    </header>
  )
}
