'use client'

import { motion, type Variants } from 'framer-motion'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const stats = [
  { symbol: '∞', color: 'text-sns-blue', label: 'problems left to solve' },
  { symbol: '3', color: 'text-sns-text', label: 'founders, zero passengers' },
  { symbol: 'Now', color: 'text-sns-accent', label: 'always building' },
]

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-start justify-start overflow-hidden px-6 pt-32 md:px-12">
      {/* A. Animated dot grid */}
      <div aria-hidden="true" className="dot-grid absolute inset-0 z-0" />
      {/* Edge fade — densest in the centre, gone at the borders */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, #080d1a 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 grid w-full grid-cols-1 items-center gap-16 md:grid-cols-2">
        {/* Left col — existing content */}
        <div className="flex flex-col">
          <div className="max-w-3xl">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="mb-6 font-mono text-xs uppercase tracking-widest text-sns-muted"
            >
              est. 2026 — Vienna, AT
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl font-bold leading-tight text-sns-text md:whitespace-nowrap md:text-5xl"
            >
              <span className="text-gradient-blue">Simplicity</span> is the
              solution.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-8 max-w-2xl font-sans text-xl font-medium text-sns-text"
            >
              We build the infrastructure. You take the credit.
            </motion.p>
          </div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-16 flex items-center gap-4"
            aria-hidden="true"
          >
            <span className="animate-blink font-mono text-sm text-sns-blue">
              █
            </span>
            <span className="h-px flex-1 bg-sns-blue/30" />
          </motion.div>
        </div>

        {/* Right col — stat block */}
        <div className="hidden flex-col justify-center gap-8 md:flex">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
              className={`flex items-baseline gap-4 ${
                index < stats.length - 1 ? 'border-b border-sns-border pb-6' : ''
              }`}
            >
              <span
                className={`min-w-[4rem] font-mono text-4xl font-bold ${stat.color}`}
                style={{
                  fontFamily:
                    'var(--font-geist-mono), "JetBrains Mono", monospace',
                }}
              >
                {stat.symbol}
              </span>
              <span className="font-mono text-base text-sns-muted">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
