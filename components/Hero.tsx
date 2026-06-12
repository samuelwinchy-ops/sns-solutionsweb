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

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-6 pt-14 md:px-12">
      <div className="max-w-3xl">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-6 font-mono text-xs uppercase tracking-widest text-sns-muted"
        >
          SNS Solutions — est. 2025 — Vienna, AT
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-5xl font-bold leading-tight text-sns-text md:text-6xl"
        >
          We build the software
          <br />
          <span className="text-gradient-blue">infrastructure</span> others
          can&apos;t.
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-6 max-w-xl font-sans text-lg text-sns-muted"
        >
          AI automation, custom tooling, and systems integration — built by
          engineers, for businesses that can&apos;t afford to slow down.
        </motion.p>
      </div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={3}
        className="mt-24 flex items-center gap-4"
        aria-hidden="true"
      >
        <span className="animate-blink font-mono text-sm text-sns-blue">█</span>
        <span className="h-px flex-1 bg-sns-border" />
      </motion.div>
    </section>
  )
}
