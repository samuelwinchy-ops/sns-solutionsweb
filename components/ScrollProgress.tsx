'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 top-14 z-50 h-0.5 w-full origin-left bg-gradient-to-r from-sns-indigo via-sns-blue to-sns-cyan shadow-[0_0_12px_rgba(99,102,241,0.6)]"
    />
  )
}
