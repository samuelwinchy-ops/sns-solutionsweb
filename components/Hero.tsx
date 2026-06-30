'use client'

import { motion, type Variants } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
}

const services = [
  {
    n: '01',
    name: 'Custom Software',
    desc: 'Web, mobile & internal tools, built to fit.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    n: '02',
    name: 'AI Automation',
    desc: 'Pipelines & agents that remove the busywork.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    n: '03',
    name: 'AI & IT Consulting',
    desc: 'Strategy, architecture & hands-on delivery.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col items-start justify-center overflow-hidden px-5 pt-28 md:px-10 md:pt-32">
      {/* Local hero bloom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 h-[500px] w-[700px]"
        style={{
          background:
            'radial-gradient(ellipse at 18% 38%, rgba(99, 102, 241, 0.12) 0%, transparent 68%)',
        }}
      />
      {/* Edge fade toward the base colour — calms the field behind the headline */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 38%, rgba(6,8,15,0.85) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1.15fr_1fr] md:gap-16 2xl:max-w-7xl 2xl:gap-20">
        {/* Left column */}
        <div className="flex min-w-0 flex-col">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-7 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-2.5 pr-3.5 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-sns-cyan" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sns-muted">
              Simplicity is the solution
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-[2.6rem] font-bold leading-[1.04] tracking-[-0.02em] text-sns-text md:text-[4rem] 2xl:text-[4.6rem]"
          >
            Powerful underneath.
            <br />
            <span className="text-gradient-blue text-glow">Simple on top.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-7 max-w-xl text-lg leading-relaxed text-sns-muted md:text-xl 2xl:max-w-2xl 2xl:text-[1.35rem]"
          >
            An AI software studio in Vienna. We build{' '}
            <span className="font-medium text-sns-text">custom software</span> and{' '}
            <span className="font-medium text-sns-text">AI automation</span>, from
            the systems running quietly in the background to the tools your team
            uses every day. We also advise on the{' '}
            <span className="font-medium text-sns-text">AI &amp; IT</span> behind
            them.
            <span className="mt-4 block font-medium text-sns-text">
              We do the hard part. You get the win.
            </span>
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-sns-indigo px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.7)] transition-all duration-300 ease-sns-out hover:-translate-y-0.5 hover:bg-sns-accent hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent"
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
            </a>
            <a
              href="#build-log"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.02] px-5 py-3 font-mono text-sm text-sns-text transition-all duration-300 ease-sns-out hover:border-white/25 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent"
            >
              <span className="text-sns-green">●</span> view build log
            </a>
          </motion.div>
        </div>

        {/* Right column — live "system status" panel */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: EASE }}
          className="glass edge-light glow-blue relative flex flex-col rounded-sns-lg p-6 2xl:p-8"
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sns-faint">
              ~/sns — services
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-sns-green">
              <span className="h-1.5 w-1.5 rounded-full bg-sns-green" />
              available
            </span>
          </div>

          <div className="flex flex-col">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.14, duration: 0.6, ease: EASE }}
                className={`group flex items-start gap-4 py-4 ${
                  index < services.length - 1 ? 'border-b border-white/[0.06]' : ''
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sns border border-white/10 bg-sns-surface text-sns-accent transition-colors duration-300 ease-sns-out group-hover:border-sns-indigo/40 group-hover:bg-sns-indigo/10 group-hover:text-sns-cyan">
                  {service.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-semibold text-sns-text">
                      {service.name}
                    </span>
                    <span className="font-mono text-[11px] text-sns-faint">
                      {service.n}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-xs leading-relaxed text-sns-muted">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2 border-t border-white/[0.06] pt-4 font-mono text-xs text-sns-faint">
            <span className="text-sns-indigo">$</span>
            <span>ship --simple --reliable</span>
            <span className="animate-blink text-sns-indigo">█</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
