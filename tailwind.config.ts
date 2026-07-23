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
        // ── Daylight surfaces (warm cream paper, mirrors Immvela) ──
        'sns-bg': '#f2f1e8', // warm cream base
        'sns-surface': '#faf9f2', // elevated surface (cards)
        'sns-surface-2': '#f4f2e9', // higher elevation (hover / nested)
        'sns-border': '#dcdacb', // solid border fallback
        // ── Accent spectrum (indigo → blue → cyan), deepened to read on cream ──
        'sns-indigo': '#4f46e5', // primary accent (fills + accent text)
        'sns-violet': '#7c3aed', // gradient partner
        'sns-blue': '#2563eb', // brand blue
        // Darkened from #0891b2 — the original only hit ~3.3:1 on cream, below
        // WCAG AA's 4.5:1 for the small mono labels/status-chip text it's used
        // for site-wide. This still clears AA with margin on every surface.
        'sns-cyan': '#067590', // bright highlight (teal on light)
        'sns-accent': '#4338ca', // deep indigo — links / hover
        'sns-blue-dim': '#1d4ed8', // deep blue
        // ── Text (deep navy ink on cream) ──
        'sns-text': '#14192b', // primary text
        'sns-muted': '#545d70', // secondary text (AA on cream)
        // Darkened from #878c99 (~3:1 on cream, below AA for the small labels
        // it's used for everywhere — nav meta, chip counts, footer text).
        'sns-faint': '#686c76', // tertiary / decorative labels
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
