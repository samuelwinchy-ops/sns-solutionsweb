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
        'sns-bg': '#080d1a', // deep navy background
        'sns-surface': '#0e1528', // slightly lighter surface
        'sns-border': '#1a2540', // subtle border
        'sns-blue': '#3b82f6', // primary electric blue
        'sns-blue-dim': '#1d4ed8', // deeper blue
        'sns-accent': '#60a5fa', // bright accent blue
        'sns-text': '#e2e8f0', // primary text
        'sns-muted': '#64748b', // muted/secondary text
        'sns-green': '#22c55e', // terminal green (active status)
        'sns-amber': '#f59e0b', // terminal amber (building status)
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'JetBrains Mono', 'monospace'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
}
export default config
