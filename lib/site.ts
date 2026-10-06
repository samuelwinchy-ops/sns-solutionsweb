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

/**
 * The one public sentence about Immvela that the SNS site repeats (llms files). Kept to what immvela.com
 * itself says (design/immvela-redesign/TRUTH.md): no module names, no build status, no dates.
 */
export const IMMVELA_DESCRIPTION =
  'It reads the documents for a property, drafts the listing texts and social posts from the values the agent has confirmed, and asks before anything is published. German first, English available, in a closed beta. Built in Vienna.'

export const SITE = {
  name: 'SNS Solutions',
  legalName: 'SNS Software Solutions GmbH',
  // Real estate leads, because that is the focus and the product. The services
  // follow it rather than the other way round — they are what SNS also sells,
  // not what a search result should lead with.
  title: 'SNS Solutions | Software company in Vienna, maker of Immvela and QFUtool',
  description:
    'SNS Solutions is a software company in Vienna. We build Immvela, which drafts listings, Exposés and social posts for estate agents, and QFUtool, which follows up on sent quotes for salespeople. Free consultation for custom software.',
  tagline: 'What took hours yesterday now handles itself.',
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
    imageAlt: 'SNS Solutions · software studio in Vienna',
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
    title: 'SNS Solutions | Softwareunternehmen in Wien, Hersteller von Immvela und QFUtool',
    description:
      'SNS Solutions ist ein Softwareunternehmen aus Wien. Wir bauen Immvela, das Inserate, Exposés und Beiträge für Makler schreibt, und QFUtool, das bei versendeten Angeboten nachfasst. Kostenlose Beratung für Software nach Maß.',
    ogLocale: 'de_AT',
    imageAlt: 'SNS Solutions · Softwareunternehmen in Wien',
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
