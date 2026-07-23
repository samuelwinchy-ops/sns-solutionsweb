/**
 * Single source of truth for site-wide metadata and the canonical URL.
 *
 * Canonical domain is www.sns-austria.com — the apex (sns-austria.com)
 * 308-redirects here, so every canonical, sitemap entry, and Open Graph URL
 * must point at www to match the served domain and avoid a canonical/redirect
 * split. It can be overridden per-environment with NEXT_PUBLIC_SITE_URL (e.g.
 * for a staging domain), but never a *.vercel.app URL, which would split
 * indexing.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sns-austria.com'
).replace(/\/$/, '')

/**
 * Immvela lives on its own domain but is served from this same deployment
 * (see middleware.ts, which maps immvela.com's root onto the /immvela routes).
 * Single source of truth for the Immvela origin — used for canonical URLs and
 * the SNS→Immvela handover redirect. Override with NEXT_PUBLIC_IMMVELA_URL.
 */
export const IMMVELA_URL = (
  process.env.NEXT_PUBLIC_IMMVELA_URL || 'https://immvela.com'
).replace(/\/$/, '')

/**
 * The migration switch. When set to '1', the handover to immvela.com is live:
 * middleware 301s the old SNS /immvela URLs to the new domain, and every link
 * from the SNS site to Immvela (nav, cards, CTAs) points straight at immvela.com
 * instead of the on-site path — see immvelaHref() in i18n/config.
 *
 * It's NEXT_PUBLIC so both the server (middleware) and the client links read the
 * same value. Flip it in Vercel → Env Vars and redeploy; unset + redeploy to roll
 * back. Keep it off until immvela.com is confirmed live.
 */
export const IMMVELA_MIGRATED = process.env.NEXT_PUBLIC_IMMVELA_MIGRATED === '1'

export const SITE = {
  name: 'SNS Solutions',
  legalName: 'SNS Software Solutions GmbH',
  title: 'SNS Solutions | Custom Software, AI Automation & Consulting in Vienna',
  description:
    'SNS Solutions is an AI software studio in Vienna building custom software, AI automation, and AI & IT consulting for businesses. Powerful underneath, simple on top.',
  tagline: 'Simplicity is the solution.',
  email: 'office@sns-austria.com',
  phone: '+436701922538',
  foundingDate: '2026',
  locale: 'Vienna, Austria',
  address: {
    streetAddress: 'Schrötlgasse 8a',
    postalCode: '1220',
    city: 'Vienna',
    country: 'AT',
  },
  founders: ['Samuel Winch', 'Nicholas Pellechi', 'Samson Adefris Belachew'],
  services: ['Custom Software', 'AI Automation', 'AI & IT Consulting'],
  url: SITE_URL,
} as const
