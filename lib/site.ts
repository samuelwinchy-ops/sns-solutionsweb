/**
 * Single source of truth for site-wide metadata and the canonical URL.
 *
 * Canonical domain is sns-austria.com. It can be overridden per-environment
 * with NEXT_PUBLIC_SITE_URL (e.g. for a staging domain), but by default every
 * canonical, sitemap entry, and Open Graph URL points at the real production
 * domain — never a *.vercel.app URL, which would split indexing.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://sns-austria.com'
).replace(/\/$/, '')

export const SITE = {
  name: 'SNS Solutions',
  legalName: 'SNS Software Solutions GmbH i.G.',
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
