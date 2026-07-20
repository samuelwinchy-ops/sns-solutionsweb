'use client'

import { usePathname } from 'next/navigation'
import NeuralBackground from './NeuralBackground'

// The field is always built at one size and never rebuilt, so it keeps flowing
// across navigations. Only how much of it is *visible* changes per route.
//
// On daylight cream the field has to stay quiet so it never competes with the
// text. The homepage shows just enough to let the hero logo form (~620 held
// particles) with a thin remainder drifting — not the full field, which would
// scatter behind the copy. Other pages have no logo, so they run sparser still.
const FIELD_SIZE = 900
const HOME_DENSITY = 0.72 // ~648 visible: enough for the 620-point logo, little scatter
const INNER_DENSITY = 0.22

export default function BackgroundField() {
  const pathname = usePathname()
  const isHome = pathname === '/' || pathname === '/de'

  // The Immvela waitlist (/immvela) is a light page with its own green particle
  // field (see ImmvelaField). Suppress the dark studio field there so two
  // canvases don't run at once under the cream.
  if (pathname === '/immvela' || pathname === '/de/immvela') return null

  return (
    <NeuralBackground
      // Daylight: soft SNS blue drifting over cream. Lighter, less-saturated
      // hues than the accents so the field recedes behind the text instead of
      // vibrating against the warm paper. Glow off — additive blending brightens
      // toward white, which would erase the particles on a light ground.
      colors={['#818cf8', '#93c5fd', '#a5b4fc', '#6366f1']}
      fadeColor="#f2f1e8"
      trailOpacity={0.2}
      particleCount={FIELD_SIZE}
      density={isHome ? HOME_DENSITY : INNER_DENSITY}
      speed={0.4}
      glow={false}
    />
  )
}
