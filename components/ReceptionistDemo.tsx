'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale } from '@/i18n/config'

const EASE = [0.16, 1, 0.3, 1] as const

// A self-contained, auto-playing scripted conversation. No backend — the script
// lives in i18n so it stays bilingual. Plays when scrolled into view; a Replay
// button restarts it. Under reduced motion the full transcript renders at once.
export default function ReceptionistDemo({
  locale = defaultLocale,
  audience = 'hvac',
}: {
  locale?: Locale
  audience?: 'hvac' | 'realEstate'
}) {
  const demo = getDict(locale).solutionsPage.demo
  const t = demo[audience] // audience-specific: channel, qualified, script
  const script = t.script

  const [shown, setShown] = useState(0) // fully-rendered messages
  const [typing, setTyping] = useState(false) // typing bubble for the next msg
  const [done, setDone] = useState(false)
  const startedRef = useRef(false)
  const reduceRef = useRef(false)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)

  const clearTimers = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  const play = useCallback(() => {
    clearTimers()
    setShown(0)
    setTyping(false)
    setDone(false)

    if (reduceRef.current) {
      setShown(script.length)
      setDone(true)
      return
    }

    let delay = 500
    script.forEach((msg, i) => {
      const isAgent = msg.from === 'agent'
      // Agent "thinks" before replying; the lead types faster.
      const think = isAgent ? 950 : 550
      const read = Math.min(2600, 900 + msg.text.length * 22)

      if (isAgent) {
        timers.current.push(setTimeout(() => setTyping(true), delay))
        delay += think
      }
      timers.current.push(
        setTimeout(() => {
          setTyping(false)
          setShown(i + 1)
        }, delay)
      )
      delay += read
    })
    timers.current.push(setTimeout(() => setDone(true), delay))
  }, [script])

  // Play once when the panel scrolls into view. Gated by a ref (not state) so
  // starting playback doesn't re-run this effect and clear its own timers.
  useEffect(() => {
    reduceRef.current = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    const el = scrollRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          play()
          io.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      clearTimers()
    }
  }, [play])

  // Keep the newest message in view within the scroll area.
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: reduceRef.current ? 'auto' : 'smooth' })
  }, [shown, typing])

  return (
    <div className="glass-strong edge-light overflow-hidden rounded-sns-lg">
      {/* header */}
      <div className="flex items-center justify-between border-b border-sns-text/[0.08] px-4 py-3">
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-sns-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sns-green opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-sns-green" />
          </span>
          {t.channel}
        </span>
        <button
          type="button"
          onClick={play}
          className="flex items-center gap-1.5 rounded-full border border-sns-text/12 bg-white/50 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-sns-muted transition-colors duration-300 hover:border-sns-indigo/50 hover:text-sns-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent"
        >
          <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M12 7a5 5 0 1 1-1.5-3.6M12 2v2.5H9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {demo.replay}
        </button>
      </div>

      {/* transcript */}
      <div ref={scrollRef} className="scanlines flex h-[26rem] flex-col gap-3 overflow-y-auto p-4 md:p-5">
        {script.slice(0, shown).map((msg, i) => (
          <Bubble key={i} from={msg.from} agentLabel={demo.agentLabel} leadLabel={demo.leadLabel}>
            {msg.text}
          </Bubble>
        ))}

        <AnimatePresence>
          {typing && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex justify-start"
            >
              <span className="inline-flex items-center gap-1 rounded-2xl rounded-bl-sm border border-sns-text/12 bg-white/60 px-3.5 py-3">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="h-1.5 w-1.5 rounded-full bg-sns-muted"
                    style={{ animation: 'blink 1.1s ease-in-out infinite', animationDelay: `${d * 0.18}s` }}
                  />
                ))}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {done && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mt-1 flex items-center gap-2.5 rounded-sns border border-sns-green/25 bg-sns-green/[0.07] px-4 py-3"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sns-green/15 text-sns-green">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3.5 8.5 6.5 11.5 12.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-mono text-xs leading-snug text-sns-green">{t.qualified}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function Bubble({
  from,
  agentLabel,
  leadLabel,
  children,
}: {
  from: string
  agentLabel: string
  leadLabel: string
  children: React.ReactNode
}) {
  const isAgent = from === 'agent'
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
      className={isAgent ? 'flex justify-start' : 'flex justify-end'}
    >
      <div className="max-w-[85%]">
        <p
          className={`mb-1 font-mono text-[10px] uppercase tracking-[0.16em] ${
            isAgent ? 'text-sns-accent' : 'text-right text-sns-faint'
          }`}
        >
          {isAgent ? agentLabel : leadLabel}
        </p>
        <div
          className={
            isAgent
              ? 'rounded-2xl rounded-bl-sm border border-sns-indigo/25 bg-sns-indigo/[0.1] px-4 py-2.5 text-sm leading-relaxed text-sns-text'
              : 'rounded-2xl rounded-br-sm border border-sns-text/12 bg-white/70 px-4 py-2.5 text-sm leading-relaxed text-sns-text'
          }
        >
          {children}
        </div>
      </div>
    </motion.div>
  )
}
