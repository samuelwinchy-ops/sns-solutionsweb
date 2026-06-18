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
        // ── Surfaces (layered near-black, never pure #000) ──
        'sns-bg': '#06080F', // deep base
        'sns-surface': '#0B0F1C', // elevated surface (cards)
        'sns-surface-2': '#111729', // higher elevation (hover / nested)
        'sns-border': '#1B2236', // solid border fallback
        // ── Accent spectrum (indigo → blue → cyan) ──
        'sns-indigo': '#6366F1', // primary accent
        'sns-violet': '#8B5CF6', // gradient partner
        'sns-blue': '#3B82F6', // brand blue (kept for continuity)
        'sns-cyan': '#22D3EE', // bright highlight
        'sns-accent': '#818CF8', // light accent (text hover)
        'sns-blue-dim': '#1D4ED8', // deep blue
        // ── Text ──
        'sns-text': '#EDEEF4', // primary text
        'sns-muted': '#8B95AC', // secondary text (AA on dark)
        'sns-faint': '#717B94', // tertiary / decorative labels
        // ── Status ──
        'sns-green': '#34D399',
        'sns-amber': '#FBBF24',
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
