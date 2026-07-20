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

  // The Immvela waitlist (/roadmap) is a light page with its own green particle
  // field (see ImmvelaField). Suppress the dark studio field there so two
  // canvases don't run at once under the cream.
  if (pathname === '/roadmap' || pathname === '/de/roadmap') return null

  return (
    <NeuralBackground
      // Daylight: SNS blue particles drifting over cream. Glow off — additive
      // blending brightens toward white, which would erase them on a light
      // ground (same reason ImmvelaField runs glow off).
      colors={['#4f46e5', '#2563eb', '#3b5bdb', '#6366f1']}
      fadeColor="#f2f1e8"
      trailOpacity={0.16}
      particleCount={FIELD_SIZE}
      density={isHome ? 1 : INNER_DENSITY}
      speed={0.45}
      glow={false}
    />
  )
}
