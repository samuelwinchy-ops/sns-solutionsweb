'use client'

import { motion } from 'framer-motion'

const statements = [
  {
    number: '01',
    main: "We automate the work that's slowing your business down.",
    sub: 'Complex integrations, AI pipelines, and data workflows — built to run quietly in the background.',
  },
  {
    number: '02',
    main: 'We build software products people actually understand how to use.',
    sub: 'Technical depth where it matters. Simplicity everywhere else.',
  },
  {
    number: '03',
    main: "We're engineers who also build our own products.",
    sub: 'We use what we build. That keeps us honest.',
  },
]

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="px-6 pb-24 pt-24 md:px-12">
      <p className="mb-12 font-mono text-xs uppercase tracking-widest text-sns-muted">
        {'// WHAT WE DO'}
      </p>

      <div className="border-t border-sns-border">
        {statements.map((item) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="group relative flex flex-col gap-2 border-b border-l-2 border-sns-border border-l-transparent py-8 pl-4 transition-all duration-300 hover:border-l-sns-blue hover:bg-sns-blue/[0.03] md:flex-row md:items-baseline md:gap-6"
          >
            <span className="font-mono text-sm text-sns-blue transition-colors duration-300 group-hover:text-sns-accent">
              {item.number} —
            </span>
            <div>
              <p className="text-xl font-semibold text-sns-text md:text-2xl">
                {item.main}
              </p>
              <p className="mt-1 font-mono text-sm text-sns-muted">
                {item.sub}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
