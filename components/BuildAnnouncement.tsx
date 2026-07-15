'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { track } from '@vercel/analytics'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath } from '@/i18n/config'

const EASE = [0.16, 1, 0.3, 1] as const
const STORAGE_KEY = 'sns-announce-roadmap'
const SHOW_AFTER_MS = 3500

/**
 * A dismissible corner note telling first-time visitors we're building the
 * agentic OS. Deliberately not a modal: it never blocks the hero, and a
 * dismissal is remembered so it doesn't nag on return visits.
 */
export default function BuildAnnouncement({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).announce
  const [show, setShow] = useState(false)

  useEffect(() => {
    // localStorage is read after mount so the server and client markup match.
    let dismissed = false
    try {
      dismissed = window.localStorage.getItem(STORAGE_KEY) === 'dismissed'
    } catch {
      // Private mode / storage blocked — just show it this session.
    }
    if (dismissed) return

    const id = window.setTimeout(() => setShow(true), SHOW_AFTER_MS)
    return () => window.clearTimeout(id)
  }, [])

  const dismiss = () => {
    setShow(false)
    try {
      window.localStorage.setItem(STORAGE_KEY, 'dismissed')
    } catch {
      // Nothing to do — it will reappear next visit, which is acceptable.
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.5, ease: EASE }}
          role="status"
          aria-live="polite"
          className="glass-strong fixed inset-x-4 bottom-4 z-40 rounded-sns-lg border border-white/[0.09] p-4 shadow-[0_16px_44px_-12px_rgba(0,0,0,0.8)] sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[22rem]"
        >
          <div className="flex items-start justify-between gap-3">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-sns-amber">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sns-amber opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sns-amber" />
              </span>
              {t.tag}
            </span>
            <button
              type="button"
              onClick={dismiss}
              aria-label={t.dismiss}
              className="-mr-1 -mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sns-faint transition-colors duration-200 hover:bg-white/[0.06] hover:text-sns-text"
            >
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <p className="mt-2 text-sm font-semibold text-sns-text">{t.heading}</p>
          <p className="mt-1 text-sm leading-relaxed text-sns-muted">{t.body}</p>

          <Link
            href={localePath(locale, '/roadmap')}
            onClick={() => {
              track('announce_roadmap_cta')
              dismiss()
            }}
            className="group mt-3 inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-sns-accent transition-colors duration-200 hover:text-sns-cyan"
          >
            {t.cta}
            <svg
              width="13"
              height="13"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-300 ease-sns-out group-hover:translate-x-1"
            >
              <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
