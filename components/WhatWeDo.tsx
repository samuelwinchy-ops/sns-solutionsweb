'use client'

import { motion } from 'framer-motion'

const statements = [
  {
    number: '01',
    main: 'We automate the manual work that slows your business down.',
    sub: 'AI pipelines, data sync, workflow orchestration.',
  },
  {
    number: '02',
    main: "We build bespoke software products when off-the-shelf doesn't cut it.",
    sub: 'From architecture to deployment.',
  },
  {
    number: '03',
    main: 'We turn internal tooling into standalone products.',
    sub: 'We eat our own cooking.',
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
            className="group relative flex flex-col gap-2 border-b border-sns-border py-8 pl-0 transition-[padding] duration-300 ease-out hover:pl-5 md:flex-row md:items-baseline md:gap-6"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-sns-blue transition-transform duration-300 ease-out group-hover:scale-y-100"
            />
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
