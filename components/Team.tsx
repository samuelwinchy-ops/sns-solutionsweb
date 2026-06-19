'use client'

import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const founders = [
  { initials: 'S', name: 'Samuel Winch', role: 'Co-Founder & CTO' },
  { initials: 'N', name: 'Nicholas Pellechi', role: 'Co-Founder & CEO' },
  { initials: 'S', name: 'Samson Belachew', role: 'Co-Founder & CSO' },
]

export default function Team() {
  return (
    <section
      id="team"
      className="relative scroll-mt-24 overflow-hidden px-5 pb-28 pt-28 md:px-10"
    >
      <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
            <span className="h-px w-8 bg-sns-indigo/50" />
            the team
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-sns-text md:text-4xl">
            Three founders. One standard.
          </h2>
          <p className="mt-4 font-mono text-sm text-sns-muted">
            If it&apos;s complicated to use, it&apos;s not finished.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="group relative min-w-0 overflow-hidden rounded-sns-lg border border-white/[0.07] bg-white/[0.015] p-7 transition-all duration-500 ease-sns-out hover:border-sns-indigo/30 hover:bg-white/[0.03] hover:glow-blue"
            >
              {/* Corner bloom on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sns-indigo/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Avatar bubble — filled gradient, glossy, glowing */}
              <div
                className="relative flex h-16 w-16 items-center justify-center rounded-sns bg-gradient-to-br from-sns-indigo via-sns-blue to-sns-cyan ring-1 ring-white/20 transition-transform duration-500 ease-sns-out group-hover:-translate-y-0.5 group-hover:scale-[1.06]"
                style={{
                  boxShadow:
                    '0 10px 30px -8px rgba(99,102,241,0.65), inset 0 1px 0 0 rgba(255,255,255,0.4)',
                }}
              >
                {/* glossy top highlight */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-1.5 top-1.5 h-1/3 rounded-full bg-white/25 blur-md"
                />
                <span
                  className="relative font-mono text-2xl font-bold tracking-tight text-white"
                  style={{ textShadow: '0 1px 3px rgba(0,0,0,0.35)' }}
                >
                  {founder.initials}
                </span>
              </div>

              <p className="mt-5 text-lg font-semibold text-sns-text">
                {founder.name}
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-sns-muted">
                {founder.role}
              </p>

              <div className="mt-5 flex items-center gap-2 font-mono text-[11px] text-sns-faint">
                <span className="h-1.5 w-1.5 rounded-full bg-sns-green" />
                building
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
