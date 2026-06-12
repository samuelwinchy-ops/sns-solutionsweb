'use client'

import { useState } from 'react'

const EMAIL = 'hello@snssolutions.io'

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
    <footer className="flex flex-col gap-2 border-t border-sns-border px-6 py-8 md:flex-row md:items-center md:justify-between md:px-12">
      <p className="font-mono text-xs text-sns-muted">
        SNS Solutions GmbH (in formation) — Vienna, Austria — 2026
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
    </footer>
  )
}
