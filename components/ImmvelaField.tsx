'use client'

import NeuralBackground from './NeuralBackground'

/**
 * Immvela's "daylight" version of the SNS particle field: the same flow-field,
 * but green particles drifting over warm cream instead of blue over obsidian.
 *
 * `glow` is off on purpose — additive blending brightens toward white, which
 * reads as glow on the dark site but would erase the particles on a light
 * ground. With source-over, each green dot leaves a soft fading trail on the
 * cream, like ink on paper.
 */
export default function ImmvelaField() {
  return (
    <NeuralBackground
      colors={['#16352a', '#1f5c3f', '#2f7d5b', '#3fa876']}
      fadeColor="#f2f1e8"
      trailOpacity={0.16}
      particleCount={900}
      density={0.32}
      speed={0.4}
      glow={false}
    />
  )
}
