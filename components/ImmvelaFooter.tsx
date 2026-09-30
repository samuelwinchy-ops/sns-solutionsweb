'use client'

import Link from 'next/link'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath } from '@/i18n/config'
import { SITE_URL } from '@/lib/site'

const SOCIALS = {
  linkedin: 'https://www.linkedin.com/company/sns-solutionswien/',
  instagram: 'https://www.instagram.com/sns_solutions_/',
}

const socialIcons: Record<keyof typeof SOCIALS, JSX.Element> = {
  linkedin: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0zM3.4 8.4h3.1V21H3.4V8.4zM9.2 8.4h2.97v1.72h.04c.41-.78 1.42-1.6 2.93-1.6 3.13 0 3.71 2.06 3.71 4.74V21h-3.1v-5.36c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V21H9.2V8.4z" />
    </svg>
  ),
  instagram: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="4.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </svg>
  ),
}

/** Slim footer for the Immvela pages. */
export default function ImmvelaFooter({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).footer
  const legalLinks = [
    { href: localePath(locale, '/legal/imprint'), label: t.legal.imprint },
    { href: localePath(locale, '/legal/privacy'), label: t.legal.privacy },
    { href: localePath(locale, '/legal/terms'), label: t.legal.terms },
  ]

  return (
    <footer className="relative px-5 pb-12 pt-16 md:px-10">
      <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
        <div className="h-px w-full bg-[var(--im-line)]" />
        <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <p className="im-faint text-[13px]">
              <span className="im-wordmark text-sm">
                Immvela<span className="dot">.</span>
              </span>
              <span className="ml-2">a product by SNS Software Solutions GmbH · Vienna 2026</span>
            </p>
            <div className="flex items-center gap-2">
              {(Object.keys(SOCIALS) as (keyof typeof SOCIALS)[]).map((key) => (
                <a
                  key={key}
                  href={SOCIALS[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`SNS Solutions on ${key === 'linkedin' ? 'LinkedIn' : 'Instagram'}`}
                  className="im-link flex h-11 w-11 items-center justify-center rounded-full"
                >
                  {socialIcons[key]}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-0">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="im-link-ink inline-flex min-h-11 items-center text-[13px]"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`${SITE_URL}${localePath(locale, '/')}`}
              className="im-link-ink inline-flex min-h-11 items-center gap-2 text-[13px]"
            >
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M11 7H3M6.5 3.5 3 7l3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              SNS Solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
