'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

type Service = {
  number: string
  name: string
  tagline: string
  problem: string
  whatWeDo: string
  outcomes: string[]
  example: string
  cta: string
  icon: ReactNode
}

const services: Service[] = [
  {
    number: '01',
    name: 'Custom Software',
    tagline: 'Software built around your business, not the other way round.',
    problem:
      'Off-the-shelf tools rarely match how your business actually works. Your team ends up bending their process around the software, or stitching together apps that were never meant to talk to each other.',
    whatWeDo:
      'We design and build software around your exact workflow: web apps, internal tools, dashboards, and customer-facing products. Serious engineering underneath, and an interface the people using it every day find genuinely simple.',
    outcomes: [
      'A tool built for your process, not a generic one you adapt to',
      'Software your team actually wants to use',
      'A system that grows with you instead of holding you back',
    ],
    example:
      'For example: real-time publishing engines and internal operations tools built around a client’s existing way of working.',
    cta: 'Start a custom build',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8.5 8.5 5 12l3.5 3.5M15.5 8.5 19 12l-3.5 3.5M13.5 6l-3 12"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: '02',
    name: 'AI Automation',
    tagline: 'Let the repetitive work run itself.',
    problem:
      'Your team loses hours every week to repetitive work: copying data between systems, processing documents by hand, chasing updates. It is slow, easy to get wrong, and it does not scale as you grow.',
    whatWeDo:
      'We build automations and AI agents that do that work in the background: document processing, data syncing between your tools, and pipelines that run reliably without anyone watching them.',
    outcomes: [
      'The repetitive work runs on its own, around the clock',
      'Fewer errors, because the process is consistent',
      'Your team gets their time back for work that needs a human',
    ],
    example:
      'For example: an autonomous document ingestion pipeline with OCR and validation, and an event-driven sync between a CRM, an ERP, and analytics.',
    cta: 'Automate a workflow',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M13 3 5 13h5l-1 8 8-11h-5l1-7z"
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
    name: 'AI & IT Consulting',
    tagline: 'Straight answers on where AI actually pays off.',
    problem:
      'AI is moving fast and the options are overwhelming. It is easy to spend money on tools that do not fit, or to put it off because you are not sure where to start.',
    whatWeDo:
      'We help you work out where AI and better systems will actually pay off for your business, then plan the architecture, and build it if you want us to. Straight answers, not hype.',
    outcomes: [
      'A clear, practical plan you can act on',
      'Honest advice from people who build, not just advise',
      'A partner who stays involved as far as you need',
    ],
    example:
      'For example: going from a first “where do we even start” conversation to a working, deployed system.',
    cta: 'Get advice',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20 11.5a8 8 0 0 1-11.5 7.2L4 20l1.3-4.2A8 8 0 1 1 20 11.5z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 10.5h6M9 13h4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

export default function Services() {
  return (
    <div className="flex flex-col gap-6">
      {services.map((service) => (
        <motion.article
          key={service.number}
          id={service.name.toLowerCase().replace(/[^a-z]+/g, '-')}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="glass edge-light scroll-mt-24 rounded-sns-lg p-7 md:p-10"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.1fr] md:gap-12">
            {/* Left — identity */}
            <div>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sns border border-white/10 bg-sns-surface text-sns-accent">
                  {service.icon}
                </span>
                <span className="font-mono text-sm text-sns-faint">
                  {service.number}
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-sns-text md:text-3xl">
                {service.name}
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-sns-muted">
                {service.tagline}
              </p>

              <Link
                href={`/contact?service=${encodeURIComponent(service.name)}`}
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-sns-indigo px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.7)] transition-all duration-300 ease-sns-out hover:-translate-y-0.5 hover:bg-sns-accent hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent"
              >
                {service.cta}
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

            {/* Right — the detail */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-sns-faint">
                  The problem
                </p>
                <p className="leading-relaxed text-sns-muted">
                  {service.problem}
                </p>
              </div>

              <div>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-sns-faint">
                  What we do
                </p>
                <p className="leading-relaxed text-sns-muted">
                  {service.whatWeDo}
                </p>
              </div>

              <div>
                <p className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-sns-faint">
                  What you get
                </p>
                <ul className="flex flex-col gap-2">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2.5 text-sns-text">
                      <span className="mt-1 text-sns-cyan" aria-hidden="true">
                        <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M3.5 8.5 6.5 11.5 12.5 4.5"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="leading-snug">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="border-t border-white/[0.07] pt-4 font-mono text-xs leading-relaxed text-sns-faint">
                {service.example}
              </p>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
