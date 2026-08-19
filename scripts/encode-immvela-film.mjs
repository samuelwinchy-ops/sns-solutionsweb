/**
 * Re-encode the Immvela explainer film from its masters for the web.
 *
 * The masters are 16:9 H.264/AAC at ~13 Mbps — 222 MB (de, 2m27) and 210 MB
 * (en, 2m16). That is a delivery bitrate for a cinema, not a landing page.
 *
 * Two things make this cheap despite the running time:
 *
 *  1. CRF rather than a target bitrate. The film is flat vector-ish animation
 *     on a near-solid cream ground, which is exactly the content x264 encodes
 *     efficiently — a fixed bitrate would spend the same bits on a still title
 *     card as on the busiest motion. Expect roughly 15–30 MB per language.
 *
 *  2. `+faststart`, which relocates the moov atom to the head of the file so
 *     playback can begin before the whole thing has arrived. Without it a
 *     progressive download of a 25 MB file looks broken for several seconds.
 *
 * Audio is kept — the voiceover is the entire point of this asset, unlike the
 * hero clips (see encode-immvela-clips.mjs), which are muted by design.
 *
 * The poster frames already live at public/immvela/film-{de,en}.jpg and were
 * pulled from the films' own title cards; re-run with --poster to refresh them
 * from a new master, which needs ffmpeg too.
 *
 * ── Running it ────────────────────────────────────────────────────────────
 *   node scripts/encode-immvela-film.mjs [--src DIR] [--crf N] [--height N]
 *                                        [--ffmpeg PATH] [--poster]
 *
 * Needs ffmpeg with libx264 + aac:
 *
 *   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
 *   brew install ffmpeg
 *
 * ── The no-ffmpeg fallback, which is what actually shipped these ──────────
 * A stock Mac has neither ffmpeg nor Homebrew, but it does have `avconvert`,
 * and one of its presets is usable. The distinction that matters is not
 * resolution but *family*:
 *
 *   Preset1280x720         ~10 Mbps   quality preset, no rate control
 *   PresetAppleM4V1080pHD   ~9 Mbps   "delivery" in name only
 *   PresetAppleM4V720pHD    ~1 Mbps   the one real delivery preset  ✅
 *
 * measured on this source over a 20s slice. So:
 *
 *   avconvert -s <master> -o film-en.m4v -p PresetAppleM4V720pHD --replace
 *
 * Two gotchas. It *silently fails* unless the output extension is `.m4v` — an
 * `.mp4` output exits non-zero with no useful message — so encode to .m4v and
 * rename, which is free because M4V and MP4 are the same container. And
 * fast-start is on unless you pass --disableFastStart, which is the one thing
 * you must not do: without the moov atom at the head, a progressive download
 * of a 16 MB file looks broken for several seconds.
 *
 * What that produced, and why it is fine: 18 MB (en) and 19 MB (de) at
 * 1280x720. This film is flat vector animation on a near-solid ground, which
 * is the easiest thing there is to compress — checked at 720p against the
 * master, the wordmark, the 10px module labels and the hairline ring all
 * survive intact with no blocking on the cream.
 *
 * ffmpeg is still preferred when available — CRF spends bits where the picture
 * needs them, which a fixed-bitrate preset cannot do, and it can hit the same
 * quality smaller.
 */
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const OUT_DIR = join(ROOT, 'public', 'immvela')

const arg = (flag, fallback) => {
  const i = process.argv.indexOf(flag)
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback
}
const has = (flag) => process.argv.includes(flag)

const SRC = arg('--src', join(process.env.HOME ?? '', 'Downloads'))
const FFMPEG = arg('--ffmpeg', 'ffmpeg')
const CRF = arg('--crf', '24')
const HEIGHT = arg('--height', '1080')

// master basename → published name. The site resolves these by locale, so the
// suffix has to match the `Locale` union, not the master's naming.
const FILMS = [
  { locale: 'de', master: 'immvela_erklaervideo_de_16x9_FINAL_HQ.mp4' },
  { locale: 'en', master: 'immvela_erklaervideo_en_16x9_FINAL_HQ.mp4' },
]

const mb = (p) => (statSync(p).size / 1048576).toFixed(1)

mkdirSync(OUT_DIR, { recursive: true })

for (const { locale, master } of FILMS) {
  const src = join(SRC, master)
  if (!existsSync(src)) {
    console.error(`✗ ${locale}: master not found at ${src}`)
    continue
  }
  const out = join(OUT_DIR, `film-${locale}.mp4`)

  console.log(`→ ${locale}: encoding (${mb(src)} MB master, crf ${CRF}, ${HEIGHT}p)…`)
  execFileSync(
    FFMPEG,
    [
      '-y',
      '-i', src,
      // -2 keeps width even and preserves the source aspect, so a master that
      // arrives at a different size than 1920×1080 still lands correctly.
      '-vf', `scale=-2:${HEIGHT}`,
      '-c:v', 'libx264',
      '-profile:v', 'high',
      '-preset', 'slow',
      '-crf', CRF,
      // Cap the buffer so a burst in a busy passage cannot spike far above the
      // average — a progressive download has no ABR to fall back on.
      '-maxrate', '3M',
      '-bufsize', '6M',
      '-pix_fmt', 'yuv420p',
      '-c:a', 'aac',
      '-b:a', '128k',
      '-ac', '2',
      '-movflags', '+faststart',
      out,
    ],
    { stdio: ['ignore', 'ignore', 'inherit'] }
  )
  console.log(`✓ ${locale}: ${mb(out)} MB → public/immvela/film-${locale}.mp4`)

  if (has('--poster')) {
    const poster = join(OUT_DIR, `film-${locale}.jpg`)
    execFileSync(
      FFMPEG,
      ['-y', '-ss', '1', '-i', src, '-frames:v', '1', '-vf', 'scale=1600:-2', '-q:v', '4', poster],
      { stdio: ['ignore', 'ignore', 'inherit'] }
    )
    console.log(`✓ ${locale}: poster ${mb(poster)} MB → public/immvela/film-${locale}.jpg`)
  }
}
