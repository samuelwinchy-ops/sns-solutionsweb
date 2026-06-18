'use client'

import { useState } from 'react'

const EMAIL = 'sns.solutionswien@gmail.com'

export default function Footer() {
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
      <div className="mx-auto w-full max-w-6xl">
        {/* Contact CTA card */}
        <div className="glass edge-light relative overflow-hidden rounded-sns-lg p-8 md:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sns-indigo/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-sns-cyan/10 blur-3xl"
          />

          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
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

            <button
              type="button"
              onClick={handleCopy}
              aria-label={`Copy email address ${EMAIL}`}
              className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 font-mono text-sm text-sns-text transition-all duration-300 ease-sns-out hover:-translate-y-0.5 hover:border-sns-indigo/50 hover:bg-sns-indigo/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent"
            >
              <span>{EMAIL}</span>
              <span
                className={`flex h-5 w-5 items-center justify-center transition-colors ${
                  copied ? 'text-sns-green' : 'text-sns-muted group-hover:text-sns-accent'
                }`}
                aria-hidden="true"
              >
                {copied ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3.5 8.5 6.5 11.5 12.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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

        {/* Shimmer hairline + meta row */}
        <div className="mt-12 hairline-shimmer h-px w-full" />
        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs text-sns-faint">
            SNS Solutions GmbH — Vienna, Austria — 2026
          </p>
          <p className="flex items-center gap-2 font-mono text-xs text-sns-faint">
            <span className="h-1.5 w-1.5 rounded-full bg-sns-green" />
            all systems operational
          </p>
        </div>
      </div>
    </footer>
  )
}
