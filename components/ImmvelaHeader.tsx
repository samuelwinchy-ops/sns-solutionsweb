'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { track } from '@vercel/analytics'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath } from '@/i18n/config'

/**
 * Slim, light header for the Immvela waitlist page — the "daylight" counterpart
 * to the dark SNS <Nav>. Keeps the same proportions (fixed, h-14, max-w-6xl)
 * but in Immvela's palette, so the page reads as its own product without
 * looking like a different website.
 */
export default function ImmvelaHeader({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).waitlistPage
  const pathname = usePathname() || '/'
  const isDe = pathname === '/de' || pathname.startsWith('/de/')
  const enHref = isDe ? pathname.replace(/^\/de(?=\/|$)/, '') || '/' : pathname
  const deHref = isDe ? pathname : pathname === '/' ? '/de' : `/de${pathname}`

  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggle = 'rounded px-1.5 py-0.5 font-mono text-[11px] uppercase tracking-widest transition-colors duration-300'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-14 px-5 transition-all duration-500 ease-sns-out md:px-10 ${
        scrolled ? 'im-header' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between 2xl:max-w-7xl">
        <a href="#top" className="flex items-baseline gap-2.5" aria-label="Immvela — top">
          <span className="im-wordmark text-lg md:text-xl">
            Immvela<span className="dot">.</span>
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] im-faint sm:inline">
            {t.byline}
          </span>
        </a>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-0.5" role="group" aria-label="Language / Sprache">
            <Link href={enHref} aria-current={!isDe ? 'true' : undefined} className={`${toggle} im-link-ink ${!isDe ? 'is-active' : ''}`}>
              EN
            </Link>
            <span className="im-faint" aria-hidden="true">/</span>
            <Link href={deHref} aria-current={isDe ? 'true' : undefined} className={`${toggle} im-link-ink ${isDe ? 'is-active' : ''}`}>
              DE
            </Link>
          </div>

          <a
            href={localePath(locale, '/')}
            aria-label={t.backToSns}
            className="im-btn-ghost group inline-flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-widest sm:px-3"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-300 ease-sns-out group-hover:-translate-x-0.5"
            >
              <path d="M11 7H3M6.5 3.5 3 7l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="hidden sm:inline">{t.backToSns}</span>
          </a>

          <a
            href="#early-access"
            onClick={() => track('immvela_header_cta')}
            className="im-btn inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold"
          >
            {t.primaryCta}
          </a>
        </div>
      </div>
    </header>
  )
}
