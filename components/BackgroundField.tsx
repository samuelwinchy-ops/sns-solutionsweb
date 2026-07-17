'use client'

import { usePathname } from 'next/navigation'
import NeuralBackground from './NeuralBackground'

// The field is always built at one size and never rebuilt, so it keeps flowing
// across navigations. Only how much of it is *visible* changes per route: the
// homepage shows all of it, because the hero logo claims ~620 particles to
// trace its outline and leaves a calm remainder drifting. Other pages have no
// logo, so the full field would read as clustered and distracting — they fade
// down to roughly that leftover density instead.
const FIELD_SIZE = 900
const INNER_DENSITY = 0.29

export default function BackgroundField() {
  const pathname = usePathname()
  const isHome = pathname === '/' || pathname === '/de'

  return (
    <NeuralBackground
      colors={['#6366f1', '#3b82f6', '#22d3ee', '#818cf8']}
      fadeColor="#06080f"
      trailOpacity={0.14}
      particleCount={FIELD_SIZE}
      density={isHome ? 1 : INNER_DENSITY}
      speed={0.45}
    />
  )
}
