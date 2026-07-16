'use client'

import { usePathname } from 'next/navigation'
import NeuralBackground from './NeuralBackground'

// The homepage packs the field densely because the hero logo claims ~620 of
// the particles to trace its outline, leaving a calm ~280 drifting. Every other
// page has no logo, so the full count stays ambient and reads as clustered and
// distracting. Off the homepage we drop to roughly that leftover density.
const HOME_COUNT = 900
const INNER_COUNT = 260

export default function BackgroundField() {
  const pathname = usePathname()
  const isHome = pathname === '/' || pathname === '/de'

  return (
    <NeuralBackground
      colors={['#6366f1', '#3b82f6', '#22d3ee', '#818cf8']}
      fadeColor="#06080f"
      trailOpacity={0.14}
      particleCount={isHome ? HOME_COUNT : INNER_COUNT}
      speed={0.45}
    />
  )
}
