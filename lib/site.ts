/**
 * Single source of truth for site-wide metadata and the canonical URL.
 *
 * URL resolution order:
 *   1. NEXT_PUBLIC_SITE_URL  — set this to your custom domain in production.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — auto-provided by Vercel (no setup needed).
 *   3. Local placeholder fallback.
 *
 * On Vercel this resolves automatically. If you point a custom domain at the
 * site, set NEXT_PUBLIC_SITE_URL=https://yourdomain.com in the project env so
 * canonical URLs, the sitemap, and social-card image URLs are correct.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://sns-solutions.com')
).replace(/\/$/, '')

export const SITE = {
  name: 'SNS Solutions',
  legalName: 'SNS Software Solutions GmbH',
  title: 'SNS Solutions — AI-powered software studio',
  description:
    'AI-powered software studio in Vienna. We build the automation infrastructure that runs your business quietly in the background — you take the credit.',
  tagline: 'Simplicity is the solution.',
  locale: 'Vienna, Austria',
  url: SITE_URL,
} as const
