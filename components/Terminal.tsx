'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale } from '@/i18n/config'

type Status = 'ACTIVE' | 'SHIPPED' | 'BUILDING' | 'RESEARCH'

export type LogEntry = {
  status: Status
  title: string
  detail: string
  date: string
}

const defaultEntries: LogEntry[] = [
  {
    status: 'ACTIVE',
    title: 'autonomous document ingestion pipeline',
    detail: 'NLP/OCR/validation stack',
    date: '2025-11',
  },
  {
    status: 'ACTIVE',
    title: 'real-time multi-platform publishing engine',
    detail: 'queue orchestration + CDN routing',
    date: '2025-12',
  },
  {
    status: 'ACTIVE',
    title: 'CRM - ERP - Data Analytics Sync',
    detail: 'event-driven, zero-latency',
    date: '2026-01',
  },
  {
    status: 'SHIPPED',
    title: 'AI medical conference intelligence system',
    detail: 'transcription + LLM extraction',
    date: '2026-03',
  },
  {
    status: 'BUILDING',
    title: 'HVAC platform',
    detail: 'cross-system auth + rate management',
    date: '2026-04',
  },
  {
    status: 'BUILDING',
    title: 'ML inference wrapper — edge-deployed',
    detail: 'sub-100ms response target',
    date: '2026-05',
  },
  {
    status: 'RESEARCH',
    title: 'vector store + retrieval pipeline',
    detail: 'RAG architecture, production-grade',
    date: '2026-06',
  },
  {
    status: 'RESEARCH',
    title: 'proptech document intelligence platform',
    detail: 'automated compliance + verification',
    date: '2026-06',
  },
]

const statusColor: Record<Status, string> = {
  ACTIVE: 'text-sns-green',
  SHIPPED: 'text-sns-blue',
  BUILDING: 'text-sns-amber',
  RESEARCH: 'text-sns-muted',
}

const statusDot: Record<Status, string> = {
  ACTIVE: 'bg-sns-green',
  SHIPPED: 'bg-sns-blue',
  BUILDING: 'bg-sns-amber',
  RESEARCH: 'bg-sns-faint',
}

const statusGlow: Partial<Record<Status, string>> = {
  ACTIVE: '0 0 12px rgba(52, 211, 153, 0.45)',
  BUILDING: '0 0 12px rgba(251, 191, 36, 0.45)',
  SHIPPED: '0 0 12px rgba(59, 130, 246, 0.45)',
}

const headerLines = [
  '> sns-ops init',
  '> loading project registry...',
  '> authentication: OK',
  '> fetching active builds...',
]

// Fixed "boot" timestamp — uptime counts up from here in real time.
const BOOT_TIME = new Date('2026-04-26T09:00:00Z').getTime()

function formatUptime(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000))
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`
}

export default function Terminal({
  entries = defaultEntries,
  locale = defaultLocale,
}: {
  entries?: LogEntry[]
  locale?: Locale
}) {
  const tt = getDict(locale).buildLog
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })
  const [visibleCount, setVisibleCount] = useState(0)
  const [today, setToday] = useState('')
  const [uptime, setUptime] = useState('')

  useEffect(() => {
    setToday(new Date().toISOString().split('T')[0])
  }, [])

  useEffect(() => {
    const tick = () => setUptime(formatUptime(Date.now() - BOOT_TIME))
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!inView) return
    const interval = setInterval(() => {
      setVisibleCount((count) => {
        if (count >= entries.length) {
          clearInterval(interval)
          return count
        }
        return count + 1
      })
    }, 400)
    return () => clearInterval(interval)
  }, [inView, entries.length])

  const done = visibleCount >= entries.length
  const counts = {
    active: entries.filter((e) => e.status === 'ACTIVE').length,
    building: entries.filter((e) => e.status === 'BUILDING').length,
    shipped: entries.filter((e) => e.status === 'SHIPPED').length,
    research: entries.filter((e) => e.status === 'RESEARCH').length,
  }

  return (
    <section
      id="build-log"
      className="relative scroll-mt-24 px-5 pb-28 pt-28 md:px-10"
    >
      <div className="mx-auto w-full max-w-5xl 2xl:max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
            <span className="h-px w-8 bg-sns-indigo/50" />
            {tt.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-sns-text md:text-4xl">
            {tt.heading}
          </h2>
          <p className="mt-4 font-mono text-sm text-sns-muted">{tt.note}</p>
        </div>

        {/* Bloom behind the terminal */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -inset-y-6 z-0 rounded-[2rem] opacity-70"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.16), transparent 70%)',
            }}
          />

          <div
            ref={ref}
            className="relative z-10 overflow-hidden rounded-sns-lg border border-white/[0.08] bg-[#070b14]/90 backdrop-blur-xl"
            style={{
              boxShadow:
                '0 0 0 1px rgba(99, 102, 241, 0.12), 0 24px 80px -24px rgba(99, 130, 246, 0.4), 0 0 120px -40px rgba(34, 211, 238, 0.2)',
            }}
          >
            {/* Top edge highlight */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 z-30 h-px bg-gradient-to-r from-transparent via-sns-indigo/60 to-transparent"
            />
            {/* CRT scan-line overlay */}
            <div
              aria-hidden="true"
              className="scanlines pointer-events-none absolute inset-0 z-20"
            />

            {/* Top bar */}
            <div className="relative flex h-10 items-center justify-between border-b border-white/[0.07] bg-white/[0.03] px-4 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-[0_0_8px_rgba(255,95,87,0.5)]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-[0_0_8px_rgba(254,188,46,0.5)]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-[0_0_8px_rgba(40,200,64,0.5)]" />
              </div>
              <span className="absolute left-1/2 hidden -translate-x-1/2 font-mono text-xs text-sns-muted sm:block">
                sns-ops — build-tracker v1.0.0
              </span>
              <span className="font-mono text-[11px] text-sns-faint sm:text-xs">
                {today}
              </span>
            </div>

            {/* Body */}
            <div className="overflow-x-auto p-4 font-mono text-[13px] leading-6 sm:p-5 sm:text-sm sm:leading-7 md:p-6">
              <div className="md:min-w-[52rem]">
                {headerLines.map((line) => (
                  <p key={line} className="text-sns-faint">
                    {line}
                  </p>
                ))}
                <div className="my-3 h-px bg-white/[0.07]" />

                {entries.slice(0, visibleCount).map((entry, i) => (
                  <motion.div
                    key={`${entry.title}-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="group mb-2.5 rounded border-l-2 border-white/[0.07] py-1 pl-3 pr-1.5 transition-colors duration-200 hover:bg-white/[0.025] md:mb-0 md:grid md:grid-cols-[7rem_minmax(0,1.35fr)_minmax(0,1fr)_4.5rem] md:items-center md:gap-x-6 md:border-l-0 md:py-0.5 md:pl-1.5"
                  >
                    {/* Status + date share the top line on mobile; on desktop
                        `contents` hoists them into the grid (date → last col) */}
                    <div className="mb-1 flex items-center justify-between gap-3 md:mb-0 md:contents">
                      <span
                        className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap ${statusColor[entry.status]}`}
                        style={{ textShadow: statusGlow[entry.status] }}
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusDot[entry.status]}`}
                        />
                        [{entry.status.padEnd(8, ' ')}]
                      </span>
                      <span className="shrink-0 text-sns-faint md:order-last md:text-right">
                        {entry.date}
                      </span>
                    </div>
                    <span className="block break-words text-sns-text md:whitespace-nowrap">
                      {entry.title}
                    </span>
                    <span className="block break-words text-sns-muted md:whitespace-nowrap">
                      — {entry.detail}
                    </span>
                  </motion.div>
                ))}

                {done && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="my-3 h-px bg-white/[0.07]" />
                    <p className="break-words text-sns-muted">
                      {`> ${entries.length} records loaded  |  ${counts.active} active  |  ${counts.building} in build  |  ${counts.shipped} shipped  |  ${counts.research} in research`}
                    </p>
                    <p className="text-sns-muted">
                      {'> uptime: '}
                      <span className="text-sns-green">{uptime}</span>
                    </p>
                    <p className="text-sns-indigo">
                      {'> '}
                      <span className="animate-blink">█</span>
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
