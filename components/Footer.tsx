'use client'

import Link from 'next/link'
import { useState } from 'react'

const EMAIL = 'office@sns-austria.com'

const legalLinks = [
  { href: '/legal/imprint', label: 'Imprint' },
  { href: '/legal/privacy', label: 'Privacy' },
  { href: '/legal/terms', label: 'Terms' },
]

export default function Footer({ showCta = true }: { showCta?: boolean }) {
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

  return (
    <footer id="contact" className="relative scroll-mt-24 px-5 pb-12 pt-16 md:px-10">
      <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
        {/* Contact CTA card — hidden on the contact page itself */}
        {showCta && (
          <div className="glass edge-light relative overflow-hidden rounded-sns-lg p-8 md:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sns-indigo/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-sns-cyan/10 blur-3xl"
            />

            <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
                  {'> get in touch'}
                </p>
                <h2 className="text-3xl font-bold tracking-[-0.02em] text-sns-text md:text-4xl">
                  Have something complex to simplify?
                </h2>
                <p className="mt-3 font-mono text-sm text-sns-muted">
                  Tell us what&apos;s slowing you down. We&apos;ll tell you how
                  we&apos;d automate it.
                </p>
              </div>

              <div className="flex shrink-0 flex-col items-start gap-3 md:items-end">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-sns-indigo px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.7)] transition-all duration-300 ease-sns-out hover:-translate-y-0.5 hover:bg-sns-accent hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent"
                >
                  Start a build
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                    className="transition-transform duration-300 ease-sns-out group-hover:translate-x-1"
                  >
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
                  aria-label={`Copy email address ${EMAIL}`}
                  className="group inline-flex items-center gap-2 font-mono text-xs text-sns-faint transition-colors duration-300 hover:text-sns-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent"
                >
                  <span>or {EMAIL}</span>
                  <span
                    className={`flex h-4 w-4 items-center justify-center ${
                      copied ? 'text-sns-green' : ''
                    }`}
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
                  <span className="sr-only" role="status" aria-live="polite">
                    {copied ? 'Email copied to clipboard' : ''}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Shimmer hairline + meta row */}
        <div
          className={`${showCta ? 'mt-12' : ''} hairline-shimmer h-px w-full`}
        />
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs text-sns-faint">
            SNS Software Solutions GmbH i.G. — Vienna, Austria — 2026
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono text-xs text-sns-muted transition-colors duration-300 hover:text-sns-accent"
              >
                {l.label}
              </Link>
            ))}
            <span className="flex items-center gap-2 font-mono text-xs text-sns-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-sns-green" />
              all systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
