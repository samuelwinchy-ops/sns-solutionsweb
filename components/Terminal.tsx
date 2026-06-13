'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

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
    title: 'HubSpot → ERP sync layer',
    detail: 'event-driven, zero-latency',
    date: '2026-01',
  },
  {
    status: 'SHIPPED',
    title: 'AI conference intelligence system',
    detail: 'transcription + LLM extraction',
    date: '2026-03',
  },
  {
    status: 'BUILDING',
    title: 'enterprise API mesh — internal tooling',
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

const statusGlow: Partial<Record<Status, string>> = {
  ACTIVE: '0 0 12px rgba(34, 197, 94, 0.4)',
  BUILDING: '0 0 12px rgba(245, 158, 11, 0.4)',
  SHIPPED: '0 0 12px rgba(59, 130, 246, 0.4)',
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
}: {
  entries?: LogEntry[]
}) {
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
    <section id="build-log" className="px-6 pb-24 pt-24 md:px-12">
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-sns-muted">
          {'// BUILD LOG — CURRENT OPERATIONS'}
        </p>
        <p className="mb-6 font-mono text-xs text-sns-muted">
          Active projects are under NDA. Descriptions are intentionally
          redacted.
        </p>

        <div
          ref={ref}
          className="relative border border-sns-border bg-[#060b16]"
          style={{
            borderTop: '1px solid rgba(59, 130, 246, 0.3)',
            boxShadow:
              '0 0 0 1px rgba(59, 130, 246, 0.1), 0 0 40px rgba(59, 130, 246, 0.08), 0 0 80px rgba(59, 130, 246, 0.04)',
          }}
        >
          {/* CRT scan-line overlay */}
          <div
            aria-hidden="true"
            className="scanlines pointer-events-none absolute inset-0 z-20"
          />

          {/* Top bar */}
          <div className="relative flex h-9 items-center justify-between border-b border-sns-border bg-sns-surface px-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="absolute left-1/2 -translate-x-1/2 font-mono text-xs text-sns-muted">
              sns-ops — build-tracker v1.0.0
            </span>
            <span className="font-mono text-xs text-sns-muted">{today}</span>
          </div>

          {/* Body */}
          <div className="overflow-x-auto p-6 font-mono text-sm leading-7">
            <div className="min-w-[52rem]">
              {headerLines.map((line) => (
                <p key={line} className="text-sns-muted">
                  {line}
                </p>
              ))}
              <div className="my-3 border-t border-sns-border" />

              {entries.slice(0, visibleCount).map((entry, i) => (
                <motion.div
                  key={`${entry.title}-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-[6.5rem_minmax(0,1.35fr)_minmax(0,1fr)_4.5rem] gap-x-6 whitespace-nowrap"
                >
                  <span
                    className={statusColor[entry.status]}
                    style={{ textShadow: statusGlow[entry.status] }}
                  >
                    [{entry.status.padEnd(8, ' ')}]
                  </span>
                  <span className="text-sns-text">{entry.title}</span>
                  <span className="text-sns-muted">— {entry.detail}</span>
                  <span className="text-right text-sns-muted">
                    {entry.date}
                  </span>
                </motion.div>
              ))}

              {done && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="my-3 border-t border-sns-border" />
                  <p className="text-sns-muted">
                    {`> ${entries.length} records loaded  |  ${counts.active} active  |  ${counts.building} in build  |  ${counts.shipped} shipped  |  ${counts.research} in research`}
                  </p>
                  <p className="text-sns-muted">
                    {'> uptime: '}
                    <span className="text-sns-green">{uptime}</span>
                  </p>
                  <p className="text-sns-blue">
                    {'> '}
                    <span className="animate-blink">█</span>
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
