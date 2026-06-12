'use client'

import { motion } from 'framer-motion'

const founders = [
  { initials: 'S', name: 'Samuel Winch', role: 'Co-Founder & CTO' },
  { initials: 'N', name: 'Nicholas Pellechi', role: 'Co-Founder & CEO' },
  { initials: 'S', name: 'Samson Belachew', role: 'Co-Founder & CSO' },
]

export default function Team() {
  return (
    <section
      id="team"
      className="overflow-hidden px-6 pb-24 pt-24 md:px-12"
    >
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-sns-muted">
        {'// THE TEAM'}
      </p>
      <p className="mb-12 font-mono text-xs text-sns-muted">
        Three founders. One standard: if it&apos;s complicated to use, it&apos;s
        not finished.
      </p>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
        {founders.map((founder, i) => (
          <motion.div
            key={founder.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            className="min-w-0 border border-sns-border bg-sns-surface p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center bg-sns-border">
              <span className="font-mono text-2xl font-bold text-sns-blue">
                {founder.initials}
              </span>
            </div>
            <p className="mt-4 text-base font-semibold text-sns-text">
              {founder.name}
            </p>
            <p className="mt-1 font-mono text-xs text-sns-muted">
              {founder.role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
