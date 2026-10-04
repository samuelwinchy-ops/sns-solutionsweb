// Immvela's helix, as the app draws it: hairlines along a band that laps a ring twice, turned in 3D
// on a 2D canvas, so the lines themselves move with depth and shading.
// Ported from the Immvela app (apps/web/src/lib/ui/helix-contour.ts). Two additions, both marked: a
// `reveal` share for the hero's draw-in, and the website's own frame loop lives in HelixCanvas.

export type HelixTheme = 'dark' | 'light'

type Vec3 = [number, number, number]
type Rgb = [number, number, number]

const G = { laps: 2, ripple: 0.14, lift: 0.46, w: 0.36, twist: 0.75, turns: 1.5, flow: 1.05 }
const TILT = 0.5
/** Seconds for one turn at rate 1. */
export const HELIX_TURN_SECONDS = 24

export const HELIX_THEME: Record<
  HelixTheme,
  { front: Rgb; back: Rgb; a: [number, number]; w: [number, number] }
> = {
  dark: { front: [166, 232, 204], back: [76, 193, 150], a: [0.28, 1], w: [0.55, 1.25] },
  // Darker inks and heavier strokes so the front lines clear 3:1 on the cream.
  light: { front: [15, 58, 47], back: [31, 122, 90], a: [0.3, 1], w: [0.75, 1.6] },
}

// One path per depth bucket, so a line's alpha never doubles at its own joints.
const DEPTH_BUCKETS = 16

export function band(t: number, s: number, w: number = G.w): Vec3 {
  const u = G.turns * t
  const rho = 1 + G.ripple * Math.cos(u)
  const tau = G.twist * t + G.flow
  const k = s * w
  return [
    rho * Math.cos(t) + k * Math.cos(tau) * Math.cos(t),
    rho * Math.sin(t) + k * Math.cos(tau) * Math.sin(t),
    G.lift * Math.sin(u) + k * Math.sin(tau),
  ]
}

function view(p: Vec3, spin: number): Vec3 {
  const c = Math.cos(spin)
  const s = Math.sin(spin)
  const ct = Math.cos(TILT)
  const st = Math.sin(TILT)
  const x = p[0] * c - p[1] * s
  const y = p[0] * s + p[1] * c
  return [x, y * ct - p[2] * st, y * st + p[2] * ct]
}

/** Fewer hairlines at small device sizes, where twelve would merge into a smear. */
export function linesFor(devicePx: number): number {
  return devicePx >= 360 ? 12 : devicePx >= 300 ? 10 : devicePx >= 150 ? 8 : 5
}

/** Draws one frame at time `t` seconds of rate-1 motion. */
export function renderHelix(
  ctx: CanvasRenderingContext2D,
  size: number,
  theme: HelixTheme,
  t: number,
  dpr: number,
  w: number = G.w,
  // website addition: draws only the first share of every hairline, for the hero's draw-in
  reveal = 1
): void {
  const tone = HELIX_THEME[theme]
  const spin = (t / HELIX_TURN_SECONDS) * 2 * Math.PI
  const scale = size / 2 / 1.62
  const cx = size / 2
  const cy = size / 2
  const lines = linesFor(size * dpr)
  const steps = Math.round(Math.max(180, size * dpr * 1.6))
  const length = G.laps * 2 * Math.PI
  ctx.clearRect(0, 0, size, size)
  ctx.lineJoin = 'round'
  // Butt caps: runs in neighbouring depth buckets meet without a doubled-alpha bead.
  ctx.lineCap = 'butt'
  const buckets: { b: number; pts: [number, number][] }[][] = Array.from(
    { length: DEPTH_BUCKETS },
    () => []
  )
  for (let l = 0; l < lines; l++) {
    const s = -1 + (2 * l) / (lines - 1)
    let prev = view(band(0, s, w), spin)
    let run: { b: number; pts: [number, number][] } | null = null
    const end = Math.max(1, Math.round(steps * Math.min(1, Math.max(0, reveal))))
    for (let i = 1; i <= end; i++) {
      const p = view(band((i / steps) * length, s, w), spin)
      const z = Math.max(0, Math.min(0.999, ((prev[2] + p[2]) / 2 + 1.6) / 3.2))
      const b = Math.floor(z * DEPTH_BUCKETS)
      const from: [number, number] = [cx + prev[0] * scale, cy + prev[1] * scale]
      const to: [number, number] = [cx + p[0] * scale, cy + p[1] * scale]
      if (!run || run.b !== b) {
        run = { b, pts: [from, to] }
        buckets[b].push(run)
      } else run.pts.push(to)
      prev = p
    }
  }
  const minWidth = 1.4 / dpr
  for (let b = 0; b < DEPTH_BUCKETS; b++) {
    const z = (b + 0.5) / DEPTH_BUCKETS
    const alpha = tone.a[0] + (tone.a[1] - tone.a[0]) * z
    const rgb = tone.back.map((x, i) => Math.round(x + (tone.front[i] - x) * z))
    let width = (tone.w[0] + (tone.w[1] - tone.w[0]) * z) * (size / 200)
    // Never thinner than one device pixel: widen, and give the weight back in alpha.
    if (width < minWidth) {
      ctx.globalAlpha = width / minWidth + (1 - width / minWidth) * 0.35
      width = minWidth
    } else ctx.globalAlpha = 1
    ctx.strokeStyle = `rgba(${rgb.join(',')},${alpha})`
    ctx.lineWidth = width
    ctx.beginPath()
    for (const r of buckets[b]) {
      ctx.moveTo(r.pts[0][0], r.pts[0][1])
      for (let i = 1; i < r.pts.length; i++) ctx.lineTo(r.pts[i][0], r.pts[i][1])
    }
    ctx.stroke()
  }
  ctx.globalAlpha = 1
}

/** The rate after `dt` seconds of easing towards `target`: about a second to settle, never a jump. */
export function easeRate(current: number, target: number, dt: number): number {
  return current + (target - current) * Math.min(1, dt * 2.5)
}
