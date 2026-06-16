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
    <footer className="px-6 py-8 md:px-12">
      <div
        className="mb-8 h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3) 30%, rgba(96, 165, 250, 0.4) 50%, rgba(59, 130, 246, 0.3) 70%, transparent)',
        }}
      />
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-xs text-sns-muted">
          SNS Solutions GmbH — Vienna, Austria — 2026
        </p>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy email address ${EMAIL}`}
          className="group inline-flex items-center gap-2 font-mono text-xs text-sns-blue transition-colors hover:text-sns-accent"
        >
          <span>{EMAIL}</span>
          <span
            className={`transition-colors ${copied ? 'text-sns-green' : 'text-sns-muted group-hover:text-sns-accent'}`}
          >
            {copied ? 'copied ✓' : '⧉'}
          </span>
        </button>
      </div>
    </footer>
  )
}
