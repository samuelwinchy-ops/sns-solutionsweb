import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Daylight surfaces (cool porcelain, deliberately cooler/crisper than
        //    Immvela's warm cream so the two brands read as distinct) ──
        'sns-bg': '#eef0f7', // cool porcelain base
        'sns-surface': '#ffffff', // elevated surface (cards) — pure white for real separation
        'sns-surface-2': '#f6f7fc', // higher elevation (hover / nested)
        'sns-border': '#d3d7e6', // solid border fallback (stronger, cooler)
        // ── Accent spectrum (indigo → blue → cyan), richer for punch on light ──
        'sns-indigo': '#4f46e5', // primary accent (fills + accent text)
        'sns-violet': '#7c3aed', // gradient partner
        'sns-blue': '#2563eb', // brand blue
        // NOTE: a rose CTA (#e11d48) was tried and rejected — it read as a
        // harsh red against the cool porcelain rather than as energy. The
        // conversion colour stays indigo. What the page was actually missing
        // was surface treatment, not a second brand hue: see the `.lift` card
        // system in globals.css, which gives every card a hue off the spectrum
        // below instead of leaving it flat white.
        // Darkened from #0891b2 — the original only hit ~3.3:1 on cream, below
        // WCAG AA's 4.5:1 for the small mono labels/status-chip text it's used
        // for site-wide. This still clears AA with margin on every surface.
        'sns-cyan': '#0685a6', // tertiary — bright highlight (teal on light)
        'sns-accent': '#4338ca', // deep indigo — links / hover
        'sns-blue-dim': '#1d4ed8', // deep blue
        // ── Text (deep navy ink on cream) ──
        'sns-text': '#0b0f22', // primary text — deepened for punchier headings
        'sns-muted': '#4b5468', // secondary text (AA on porcelain)
        // Darkened from #878c99 (~3:1 on cream, below AA for the small labels
        // it's used for everywhere — nav meta, chip counts, footer text).
        'sns-faint': '#646a7a', // tertiary / decorative labels
        // ── Status ── both darkened from their originals for the same reason:
        // used as real small-text (status-chip labels, "qualified" tags), not
        // just dots/borders, so they need text-level (4.5:1) contrast on cream.
        'sns-green': '#047b56', // was #059669
        'sns-amber': '#a35904', // was #d97706
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'JetBrains Mono', 'monospace'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sns: '14px',
        'sns-lg': '20px',
      },
      transitionTimingFunction: {
        'sns-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'sns-in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        // Slow ambient drift for the aurora blobs
        aurora: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(4%, -6%, 0) scale(1.12)' },
          '66%': { transform: 'translate3d(-5%, 4%, 0) scale(0.94)' },
        },
        // Travelling sheen across borders / dividers
        shimmer: {
          '0%': { backgroundPosition: '-150% 0' },
          '100%': { backgroundPosition: '250% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.45' },
        },
      },
      animation: {
        blink: 'blink 1.1s step-end infinite',
        'aurora-slow': 'aurora 22s ease-in-out infinite',
        'aurora-slower': 'aurora 30s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
