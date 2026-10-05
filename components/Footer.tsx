'use client'

import Link from 'next/link'
import { useState } from 'react'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath, immvelaHref } from '@/i18n/config'
import { CTA_PRIMARY } from '@/lib/cta'

const EMAIL = 'office@sns-austria.com'

const SOCIALS = {
  linkedin: 'https://www.linkedin.com/company/sns-solutionswien/',
  instagram: 'https://www.instagram.com/sns_solutions_/',
}

const socialIcons: Record<keyof typeof SOCIALS, JSX.Element> = {
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0zM3.4 8.4h3.1V21H3.4V8.4zM9.2 8.4h2.97v1.72h.04c.41-.78 1.42-1.6 2.93-1.6 3.13 0 3.71 2.06 3.71 4.74V21h-3.1v-5.36c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V21H9.2V8.4z" />
    </svg>
  ),
  instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

export default function Footer({
  locale = defaultLocale,
  showCta = true,
}: {
  locale?: Locale
  showCta?: boolean
}) {
  const dict = getDict(locale)
  const t = dict.footer
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  const columns: { title: string; links: { href: string; label: string; external?: boolean }[] }[] =
    [
      {
        title: t.cols.products,
        links: [
          { href: immvelaHref(locale), label: 'Immvela' },
          {
            href: locale === 'de' ? 'https://www.qfutool.com/de' : 'https://www.qfutool.com',
            label: 'QFUtool',
            external: true,
          },
        ],
      },
      {
        title: t.cols.company,
        links: [
          { href: localePath(locale, '/services'), label: dict.nav.services },
          { href: localePath(locale, '/team'), label: t.team },
          // The blog is English-only for now (see Nav.tsx).
          ...(locale === 'en' ? [{ href: '/blog', label: t.blog }] : []),
          { href: localePath(locale, '/contact'), label: t.contact },
        ],
      },
      {
        title: t.cols.legal,
        links: [
          { href: localePath(locale, '/legal/imprint'), label: t.legal.imprint },
          { href: localePath(locale, '/legal/privacy'), label: t.legal.privacy },
          { href: localePath(locale, '/legal/terms'), label: t.legal.terms },
        ],
      },
    ]

  return (
    <footer id="contact" className="relative scroll-mt-24 px-5 pb-12 pt-16 md:px-10">
      <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
        {showCta && (
          <div className="sns-card p-6 md:p-12">
            <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <p className="eyebrow mb-3">{t.eyebrow}</p>
                <h2 className="section-title text-sns-text">{t.heading}</h2>
                <p className="mt-3 text-lg leading-relaxed text-sns-muted">{t.sub}</p>
              </div>

              <div className="flex shrink-0 flex-col items-start gap-3 md:items-end">
                <Link href={localePath(locale, '/contact')} className={CTA_PRIMARY}>
                  {t.ctaStart}
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

                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label={`${t.or} ${EMAIL}`}
                  className="group inline-flex min-h-11 items-center gap-2 text-sm text-sns-muted transition-colors duration-150 hover:text-sns-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent"
                >
                  <span>
                    {t.or} {EMAIL}
                  </span>
                  <span
                    className={`flex h-4 w-4 items-center justify-center ${copied ? 'text-sns-green' : ''}`}
                    aria-hidden="true"
                  >
                    {copied ? (
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M3.5 8.5 6.5 11.5 12.5 4.5"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <rect
                          x="5"
                          y="5"
                          width="8"
                          height="8"
                          rx="1.6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M3 10.5V4a1.5 1.5 0 0 1 1.5-1.5H10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* A sitemap footer, the way a company site ends: what we make, who
            we are, the legal pages, then the company line. Every product is one
            click from every page. */}
        <div
          className={`${showCta ? 'mt-16' : 'mt-2'} grid grid-cols-2 gap-8 border-t border-sns-border pt-12 md:grid-cols-4`}
        >
          <div className="col-span-2 md:col-span-1">
            <p className="flex items-center gap-2.5 text-[15px] font-bold text-sns-text">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/sns-logo.svg" alt="" width={28} height={28} className="h-7 w-7" />
              SNS Solutions
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-sns-muted">
              SNS Software Solutions GmbH
              <br />
              Vienna, Austria
            </p>
            <div className="-ml-3 mt-3 flex items-center">
              {(Object.keys(SOCIALS) as (keyof typeof SOCIALS)[]).map((key) => (
                <a
                  key={key}
                  href={SOCIALS[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`SNS Solutions on ${key === 'linkedin' ? 'LinkedIn' : 'Instagram'}`}
                  className="flex h-11 w-11 items-center justify-center rounded-sns text-sns-muted transition-colors duration-150 hover:bg-sns-text/[0.06] hover:text-sns-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent"
                >
                  {socialIcons[key]}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-sm font-semibold text-sns-text">{col.title}</p>
              <ul className="mt-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    {l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex min-h-11 items-center text-sm text-sns-muted transition-colors duration-150 hover:text-sns-text"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="inline-flex min-h-11 items-center text-sm text-sns-muted transition-colors duration-150 hover:text-sns-text"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-8 border-t border-sns-border pt-6 text-sm text-sns-faint">
          © 2026 SNS Software Solutions GmbH
        </p>
      </div>
    </footer>
  )
}
