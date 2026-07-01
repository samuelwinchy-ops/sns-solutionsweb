'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

type Statement = {
  number: string
  main: string
  sub: string
  icon: ReactNode
}

const statements: Statement[] = [
  {
    number: '01',
    main: "We automate the work that's slowing your business down.",
    sub: 'Complex integrations, AI pipelines, and data workflows — built to run quietly in the background.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 7h4M3 12h2M3 17h4M21 7h-4M21 12h-2M21 17h-4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <rect
          x="8"
          y="6"
          width="8"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M12 9.5v5M9.8 12h4.4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: '02',
    main: 'We build software products people actually understand how to use.',
    sub: 'Technical depth where it matters. Simplicity everywhere else.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M3 8.5h18" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M6 6.2h.01M8.2 6.2h.01M10.4 6.2h.01"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M8 13l-2 2 2 2M13 13l2 2-2 2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: '03',
    main: "We're engineers who also build our own products.",
    sub: 'We use what we build. That keeps us honest.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 6l-2.5 6L5 18M19 6l2.5 6L19 18"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 5l-3 14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative scroll-mt-24 px-5 pb-28 pt-28 md:px-10"
    >
      <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
            <span className="h-px w-8 bg-sns-indigo/50" />
            what we do
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-sns-text md:text-4xl">
            Three things, done without compromise.
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col gap-4"
        >
          {statements.map((entry) => (
            <motion.article
              key={entry.number}
              variants={item}
              className="group relative grid grid-cols-[auto_1fr] items-start gap-5 overflow-hidden rounded-sns border border-white/[0.07] bg-white/[0.015] p-6 transition-all duration-500 ease-sns-out hover:border-sns-indigo/30 hover:bg-white/[0.03] hover:glow-blue md:grid-cols-[auto_auto_1fr] md:items-center md:gap-8 md:p-8"
            >
              {/* Accent rail */}
              <span className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-gradient-to-b from-sns-indigo to-sns-cyan transition-transform duration-500 ease-sns-out group-hover:scale-y-100" />

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sns border border-white/10 bg-sns-surface text-sns-accent transition-all duration-500 ease-sns-out group-hover:border-sns-indigo/40 group-hover:bg-sns-indigo/10 group-hover:text-sns-cyan">
                {entry.icon}
              </div>

              <span className="hidden font-mono text-sm text-sns-faint transition-colors duration-300 group-hover:text-sns-indigo md:block">
                {entry.number}
              </span>

              <div className="min-w-0">
                <p className="text-lg font-semibold leading-snug text-sns-text md:text-xl">
                  {entry.main}
                </p>
                <p className="mt-2 max-w-2xl font-mono text-sm leading-relaxed text-sns-muted">
                  {entry.sub}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 font-mono text-sm text-sns-accent transition-colors duration-300 hover:text-sns-cyan"
          >
            See all services in detail
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
        </div>
      </div>
    </section>
  )
}
