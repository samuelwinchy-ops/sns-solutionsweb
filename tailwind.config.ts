import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // lib/cta.ts holds the button classes; without this they are never generated.
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── The palette is read off the logo: cobalt on warm cream. ──────────
        // Warm white paper, one step brighter than Immvela's beige (#f2f1e8)
        // so the product's pages and the studio's still read as two brands.
        'sns-bg': '#faf9f5', // page
        'sns-surface': '#ffffff', // cards
        'sns-surface-2': '#f3f1ea', // a recessed panel on the paper
        'sns-border': '#e2dfd5', // the hairline — warm, not blue-grey
        // ── The ACTION colour, and nothing else. ────────────────────────────
        // Cobalt from the logo's top edge. It is spent only on things you can
        // press — primary buttons, links, the focus ring, the current nav item
        // — never on eyebrows, icons, numbers or rules. The old indigo
        // (#4f46e5) was Tailwind's stock indigo-600, the single most common
        // colour on generated landing pages; it said "template", not "SNS".
        // `sns-indigo` / `sns-accent` stay as names so existing call sites pick
        // up the cobalt; new code should use `sns-action`.
        'sns-action': '#0b3fa0', // white on it: 9.0:1
        'sns-action-hover': '#082f78',
        'sns-indigo': '#0b3fa0',
        'sns-accent': '#082f78',
        'sns-blue': '#0b3fa0',
        'sns-violet': '#0b3fa0',
        'sns-cyan': '#0b3fa0',
        'sns-blue-dim': '#082f78',
        // ── Ink (navy-black, the logo's blue taken almost to black) ──
        'sns-text': '#0e1726', // primary text
        'sns-muted': '#4a5262', // secondary text — 7.4:1 on the paper
        'sns-faint': '#676d78', // tertiary labels — 5.0:1 on the paper
        // ── Status, text-level contrast on the paper ──
        'sns-green': '#047b56',
        'sns-amber': '#a35904',
      },
      fontFamily: {
        // Display: Newsreader, an editorial serif for headlines only. Body/UI:
        // Plus Jakarta Sans. Mono: Geist Mono, reserved for literal figures.
        // Inter is kept as `inter` for the Immvela pages, where it is the
        // product's own brand face (immvela.com's stylesheet).
        display: ['var(--font-newsreader)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        // Immvela's display face (wordmark and headings), loaded by components/immvela/fonts.ts.
        bricolage: ['var(--font-bricolage)', 'var(--font-inter)', 'sans-serif'],
        title: ['var(--font-barlow)', 'var(--font-inter)', 'sans-serif'],
        // QFUtool's brand face, used only in its product tile.
        archivo: ['var(--font-archivo)', 'var(--font-jakarta)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        sns: '8px',
        'sns-lg': '12px',
      },
      transitionTimingFunction: {
        'sns-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'sns-in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [],
}
export default config
