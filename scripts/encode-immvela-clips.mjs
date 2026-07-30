/**
 * Re-encode the Immvela hero clips from their social-ad masters.
 *
 * The masters are 1080×1920 vertical ads (9:16, 11–16.5s, 60fps, ~2MB each).
 * The hero needs something else, and three of the four transforms below are
 * decisions rather than housekeeping:
 *
 *  1. CROP to 3:4. The masters put their content in a band from ~10% to ~85%
 *     of the frame height, stacked vertically (a "manual" panel above a "with
 *     <module>" panel, then a caption). The rest is dead cream. `crop` trims
 *     the dead space and lands on 3:4 — it does NOT crop toward landscape,
 *     because the whole point of these clips is a vertical before/after
 *     comparison and a landscape crop destroys it. The showcase panel is built
 *     around portrait for this reason; see components/ImmvelaShowcase.tsx.
 *
 *  2. SPEED to a uniform 8.5s via setpts, rather than trimming. Trimming from
 *     the front loses the setup and from the back loses the payoff line, which
 *     is the most quotable part of every clip ("Jede Zahl hat eine Quelle.").
 *     Speeding preserves the whole argument. INTERVAL in the showcase component
 *     is 9000ms to give each clip a beat to finish — change one, change both.
 *
 *  3. SCALE to 600×800, i.e. ~1.75× the 340px the clip is displayed at, so it
 *     stays sharp on a 2× display. 340px is a measured floor, not a guess:
 *     below it the recorded interface text stops being readable.
 *
 *  4. Drop audio. The clips autoplay, and autoplay with sound is blocked
 *     anyway.
 *
 * Result: ~1.5MB for all seven, down from ~19MB of masters.
 *
 * ── Running it ────────────────────────────────────────────────────────────
 *   node scripts/encode-immvela-clips.mjs [--src DIR] [--ffmpeg PATH]
 *
 * Needs an ffmpeg with an h264 encoder. Note that a stock Windows box often has
 * no libx264: this was originally run against the ffmpeg CapCut ships, which
 * builds only hardware encoders, hence the ENCODERS fallback list. `h264_mf`
 * (Media Foundation) is listed but produced a 48-byte file in practice, so it
 * is last.
 */

import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, statSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const OUT_DIR = path.join(process.cwd(), 'public', 'immvela')

// name → [master basename, speed factor]. Factor = master duration / 8.5.
// Re-derive the factor if a master is re-cut; a stale one silently changes the
// clip's length out from under INTERVAL.
const CLIPS = {
  quill: ['s01_quill_master', 1.941], // 16.5s
  iris: ['s02_iris_master', 1.824], // 15.5s
  vignette: ['s03_vignette_master', 1.353], // 11.5s
  immerse: ['s04_immerse_master', 1.765], // 15.0s
  dossier: ['s05_dossier_master', 1.529], // 13.0s
  winston: ['s06_winston_master', 1.529], // 13.0s
  verlag: ['s07_verlag_master', 1.294], // 11.0s
}

const ENCODERS = ['libx264', 'h264_qsv', 'h264_nvenc', 'h264_amf', 'h264_mf']

const args = process.argv.slice(2)
const argOf = (flag, fallback) => {
  const i = args.indexOf(flag)
  return i === -1 ? fallback : args[i + 1]
}

const srcDir = path.resolve(argOf('--src', path.join(process.cwd(), '..')))
const ffmpeg = argOf('--ffmpeg', 'ffmpeg')

function encoderArgs(enc) {
  // Quality flags are per-encoder; libx264 wants -crf, the hardware ones want
  // -global_quality or -cq.
  if (enc === 'libx264') return ['-c:v', enc, '-crf', '26', '-preset', 'slow', '-pix_fmt', 'yuv420p']
  if (enc === 'h264_nvenc') return ['-c:v', enc, '-cq', '26']
  return ['-c:v', enc, '-global_quality', '26']
}

function tryEncode(enc, src, dst, factor) {
  execFileSync(
    ffmpeg,
    [
      '-y', '-hide_banner', '-loglevel', 'error',
      '-i', src,
      '-vf', `crop=1080:1440:0:200,setpts=PTS/${factor},fps=30,scale=600:800`,
      '-an',
      ...encoderArgs(enc),
      '-movflags', '+faststart',
      dst,
    ],
    { stdio: ['ignore', 'ignore', 'pipe'] },
  )
  // A "successful" run that wrote almost nothing is a failed encoder, not a
  // clip. h264_mf does exactly this.
  if (!existsSync(dst) || statSync(dst).size < 10_000) throw new Error('output too small')
}

mkdirSync(OUT_DIR, { recursive: true })

let encoder = null
let failures = 0

for (const [name, [base, factor]] of Object.entries(CLIPS)) {
  const src = path.join(srcDir, `${base}.mp4`)
  const dst = path.join(OUT_DIR, `${name}.mp4`)

  if (!existsSync(src)) {
    console.log(`SKIP  ${name.padEnd(9)} no master at ${src}`)
    failures++
    continue
  }

  // Settle on an encoder once, then reuse it.
  const candidates = encoder ? [encoder] : ENCODERS
  let done = false
  for (const enc of candidates) {
    try {
      tryEncode(enc, src, dst, factor)
      encoder = enc
      done = true
      break
    } catch {
      /* try the next one */
    }
  }

  if (!done) {
    console.log(`FAIL  ${name.padEnd(9)} no working h264 encoder`)
    failures++
    continue
  }

  const mb = (statSync(dst).size / 1048576).toFixed(2)
  console.log(`ok    ${name.padEnd(9)} ${mb.padStart(5)} MB  (${encoder})`)
}

if (failures) {
  console.error(`\n${failures} clip(s) not written.`)
  process.exit(1)
}
console.log(`\nAll clips written to public/immvela/ using ${encoder}.`)
