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
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sns-austria.com').replace(
  /\/$/,
  ''
)

/**
 * Immvela lives on its own domain but is served from this same deployment
 * (see middleware.ts, which maps immvela.com's root onto the /immvela routes).
 * Single source of truth for the Immvela origin — used for canonical URLs and
 * the SNS→Immvela handover redirect. Override with NEXT_PUBLIC_IMMVELA_URL.
 */
// Vercel serves the domain at www.immvela.com (the apex 308-redirects there), so
// canonicals and links use www to match the served domain — same convention as
// SITE_URL. Override with NEXT_PUBLIC_IMMVELA_URL (e.g. to make the apex primary).
export const IMMVELA_URL = (
  process.env.NEXT_PUBLIC_IMMVELA_URL || 'https://www.immvela.com'
).replace(/\/$/, '')

export const SITE = {
  name: 'SNS Solutions',
  legalName: 'SNS Software Solutions GmbH',
  // Real estate leads, because that is the focus and the product. The services
  // follow it rather than the other way round — they are what SNS also sells,
  // not what a search result should lead with.
  title: 'SNS Solutions | AI for Real Estate, Custom Software & Automation in Vienna',
  description:
    'SNS Solutions is an AI software studio in Vienna. We build Immvela, our agentic platform for real-estate teams, plus custom software, AI automation and AI & IT consulting for businesses.',
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

/**
 * The site-level title, description and keywords in each language.
 *
 * These are the *defaults* a page inherits when it doesn't set its own — the
 * document title, the Open Graph card, the Twitter card. The German half used
 * to exist only as literals inside app/de/page.tsx, which meant the German
 * root had no defaults at all and every German page fell back to the English
 * ones. See lib/metadata.ts.
 */
export const SITE_COPY = {
  en: {
    title: SITE.title,
    description: SITE.description,
    ogLocale: 'en_US',
    imageAlt: 'SNS Solutions · agentic software studio',
    keywords: [
      'AI for real estate',
      'real estate software',
      'AI software studio',
      'software development',
      'AI automation',
      'Vienna',
      'Austria',
      'SNS Solutions',
      'Immvela',
    ],
  },
  de: {
    title: 'SNS Solutions | KI für Immobilien, individuelle Software & Automatisierung in Wien',
    description:
      'SNS Solutions ist ein KI-Software-Studio in Wien. Wir entwickeln Immvela, unsere agentische Plattform für Immobilienteams, sowie individuelle Software, KI-Automatisierung und KI- & IT-Beratung für Unternehmen.',
    ogLocale: 'de_AT',
    imageAlt: 'SNS Solutions · agentisches Software-Studio',
    // Not a translation of the English list: these are the terms an Austrian
    // business actually searches. "Immobiliensoftware" and "Softwareentwicklung
    // Wien" are the queries; "automation infrastructure" has no German
    // equivalent anyone types.
    keywords: [
      'KI für Immobilien',
      'Immobiliensoftware',
      'KI-Software-Studio',
      'Softwareentwicklung Wien',
      'KI-Automatisierung',
      'KI-Beratung',
      'Wien',
      'Österreich',
      'SNS Solutions',
      'Immvela',
    ],
  },
} as const
