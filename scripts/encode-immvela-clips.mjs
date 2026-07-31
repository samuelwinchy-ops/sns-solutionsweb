/**
 * Re-encode the Immvela hero clips from their social-ad masters.
 *
 * The masters are 1080×1080 square ads (1:1, 13.2–17.4s, 60fps, ~3MB each).
 *
 * NOTE FOR ANYONE READING GIT HISTORY: these were 1080×1920 vertical (9:16)
 * masters, and everything downstream had to be cropped to 3:4 and shown in a
 * portrait slot. The 1:1 re-cuts compose for the square directly — header,
 * demo and caption all sit inside the frame — so the crop is gone, not merely
 * retuned. If a future master arrives vertical again, this needs the crop back
 * AND the showcase's aspect ratio moved with it; the two are one decision.
 *
 * Three transforms remain, and two of them are decisions rather than
 * housekeeping:
 *
 *  1. SPEED to a uniform 8.5s via setpts, rather than trimming. Trimming from
 *     the front loses the setup and from the back loses the payoff line, which
 *     is the most quotable part of every clip ("Jede Zahl hat eine Quelle.").
 *     Speeding preserves the whole argument. INTERVAL in the showcase component
 *     is 9000ms to give each clip a beat to finish — change one, change both.
 *
 *  2. SCALE to 600×600, i.e. ~1.75× the 340px the clip is displayed at, so it
 *     stays sharp on a 2× display. 340px is a measured floor, not a guess:
 *     below it the recorded interface text stops being readable. The square
 *     re-cuts are easier on this than the old crops were — they carry the same
 *     UI at a larger fraction of the frame.
 *
 *  3. Drop audio. The clips autoplay, and autoplay with sound is blocked
 *     anyway.
 *
 * Result: ~1.5MB for all seven, down from ~23MB of masters.
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
  quill: ['s01_quill_1x1_final', 2.047], // 17.4s
  iris: ['s02_iris_1x1_final', 1.882], // 16.0s
  vignette: ['s03_vignette_1x1_final', 1.553], // 13.2s
  immerse: ['s04_immerse_1x1_final', 2.0], // 17.0s
  dossier: ['s05_dossier_1x1_final', 1.553], // 13.2s
  winston: ['s06_winston_1x1_final', 1.718], // 14.6s
  verlag: ['s07_verlag_1x1_final', 1.6], // 13.6s
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
      '-vf', `setpts=PTS/${factor},fps=30,scale=600:600`,
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
