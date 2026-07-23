import { getDict } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { IMMVELA_URL, SITE_URL } from '@/lib/site'

// Kept in sync with the SOCIALS map in components/ImmvelaFooter.tsx.
const SOCIALS = [
  'https://www.linkedin.com/company/sns-solutionswien/',
  'https://www.instagram.com/sns_solutions_/',
]

const SNS_ORG_ID = `${SITE_URL}/#organization`
const SOFTWARE_ID = `${IMMVELA_URL}/#software`

/**
 * Structured data for the Immvela pages. The site-wide schema in the root
 * layout only describes SNS Solutions (a ProfessionalService); without this,
 * nothing machine-readable identifies "Immvela" as a product at all, which
 * matters for AI answer engines as much as classic SEO rich results.
 *
 * Immvela is deliberately typed as a SoftwareApplication (a product), not an
 * Organization — it isn't its own legal entity, it's "a product by SNS
 * Software Solutions GmbH" per the page copy, so `brand`/`creator` point back
 * at the real organization instead of inventing one.
 */
export function immvelaJsonLd(locale: Locale) {
  const t = getDict(locale).waitlistPage
  const pageUrl = locale === 'de' ? `${IMMVELA_URL}/de` : IMMVELA_URL

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': SOFTWARE_ID,
        name: t.brand,
        url: IMMVELA_URL,
        description: t.heroSub,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        image: `${SITE_URL}/og.png`,
        inLanguage: locale,
        brand: { '@id': SNS_ORG_ID },
        creator: { '@id': SNS_ORG_ID },
        // No price yet (the page's own FAQ says so) — describe the waitlist
        // rather than fabricate a price/availability that isn't real.
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/PreOrder',
          description: 'Early-access waitlist',
        },
        sameAs: SOCIALS,
      },
      {
        '@type': 'WebSite',
        '@id': `${IMMVELA_URL}/#website`,
        url: pageUrl,
        name: t.brand,
        description: t.heroSub,
        inLanguage: locale,
        publisher: { '@id': SOFTWARE_ID },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: t.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }
}
