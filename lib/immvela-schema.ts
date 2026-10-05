import { immvelaT } from '@/i18n/immvela'
import type { Locale } from '@/i18n/config'
import { IMMVELA_URL, SITE_URL } from '@/lib/site'
import { SNS_ORG_ID, langTag } from '@/lib/schema'

// Kept in sync with the SOCIALS map in components/ImmvelaFooter.tsx.
const SOCIALS = [
  'https://www.linkedin.com/company/sns-solutionswien/',
  'https://www.instagram.com/sns_solutions_/',
]

const SOFTWARE_ID = `${IMMVELA_URL}/#software`
const WEBSITE_ID = `${IMMVELA_URL}/#website`

/** The public URL of an Immvela page — immvela.com serves these at its root. */
function pageUrl(locale: Locale, path = ''): string {
  return `${IMMVELA_URL}${locale === 'de' ? '/de' : ''}${path}`
}

/**
 * A BreadcrumbList for an Immvela page. `trail` is the crumbs *after* the
 * product home, which is always first.
 */
function breadcrumb(locale: Locale, path: string, trail: { name: string; path: string }[]) {
  const items = [{ name: 'Immvela', path: '' }, ...trail]
  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl(locale, path)}#breadcrumb`,
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: pageUrl(locale, c.path),
    })),
  }
}

/**
 * What Immvela does today, for answer engines. Every line here is one the page itself makes and
 * design/immvela-redesign/TRUTH.md allows: present tense only for what is live, no hosting region,
 * no compliance label, no price. Written from the same i18n strings as the page.
 */
function features(locale: Locale): string[] {
  const t = immvelaT(locale)
  return [
    `${t('Documents')}: ${t('Reads the Energieausweis and the Grundbuchauszug, flags contradictions and expiring certificates. Nothing is used until you confirm it.')}`,
    `${t('Exposé, brochure and posts')}: ${t('Drafted from your confirmed values, in the German of the listing’s country, with your office brand.')}`,
    `Staging: ${t('Furnishes photos of empty rooms. Every staged photo is labelled as virtually staged.')}`,
    `${t('Integrations')}: ${t('Listings in from your CRM by OpenImmo export, posts out to five social channels after your approval.')}`,
    `${t('Document checklist')}: ${t('Every listing gets a checklist of the documents it needs, from SNS’s standard lists for flats and houses.')}`,
    `${t('Your office')}: ${t('Listings, documents and confirmed values belong to the office. Every agent has their own login.')}`,
    `${t('Language')}: ${t('German first, English available. Written for Austria, Germany and Switzerland.')}`,
  ]
}

function description(locale: Locale): string {
  return locale === 'de'
    ? 'Ihr persönlicher Immobilien-Assistent. Immvela liest Energieausweis, Grundriss und Fotos, entwirft Exposé, Broschüre und Posts aus bestätigten Werten und fragt, wenn sich zwei Unterlagen widersprechen. In einer geschlossenen Beta, entwickelt in Wien von SNS Solutions.'
    : 'Your personal real estate assistant. Immvela reads the Energieausweis, the floor plan and the photos, drafts the Exposé, brochure and posts from confirmed values, and asks when two documents disagree. In a closed beta, built in Vienna by SNS Solutions.'
}

/**
 * The nodes that describe Immvela itself, repeated on every Immvela page so an `about` reference
 * never dangles.
 */
function coreNodes(locale: Locale) {
  return [
    {
      '@type': 'SoftwareApplication',
      '@id': SOFTWARE_ID,
      name: 'Immvela',
      alternateName: 'Immvela by SNS Solutions',
      url: IMMVELA_URL,
      description: description(locale),
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Real estate',
      operatingSystem: 'Web',
      image: `${SITE_URL}/og.png`,
      inLanguage: ['de-AT', 'en'],
      availableLanguage: ['German', 'English'],
      countriesSupported: ['AT', 'DE', 'CH'],
      brand: { '@id': SNS_ORG_ID },
      creator: { '@id': SNS_ORG_ID },
      publisher: { '@id': SNS_ORG_ID },
      featureList: features(locale),
      // No price: access is by application to a closed beta.
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/LimitedAvailability',
        description:
          locale === 'de'
            ? 'Geschlossene Beta, Zugang auf Bewerbung'
            : 'Closed beta, access by application',
      },
      sameAs: SOCIALS,
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: IMMVELA_URL,
      name: 'Immvela',
      alternateName: 'Immvela by SNS Solutions',
      description: description(locale),
      inLanguage: ['de-AT', 'en'],
      publisher: { '@id': SNS_ORG_ID },
      about: { '@id': SOFTWARE_ID },
    },
  ]
}

/**
 * Structured data for the immvela.com home page. Immvela is typed as a SoftwareApplication made by
 * SNS Software Solutions GmbH, not as an organisation of its own.
 */
export function immvelaJsonLd(locale: Locale) {
  const t = immvelaT(locale)
  const url = pageUrl(locale)
  // the page's own answers; the hosting answer is still a placeholder on the page, so it is left out
  const faq: [string, string][] = [
    [
      'Is it in German?',
      'Yes. German first, English available. The Exposé is always written in the German of the listing’s country.',
    ],
    [
      'Does it work with my CRM?',
      'Bring listings in with an OpenImmo export from onOffice, Justimmo, Propstack or FLOWFACT.',
    ],
  ]
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ...coreNodes(locale),
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: `Immvela · ${t('Your personal real estate assistant')}`,
        description: description(locale),
        inLanguage: langTag(locale),
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': SOFTWARE_ID },
        breadcrumb: { '@id': `${url}#breadcrumb` },
        primaryImageOfPage: `${SITE_URL}/og.png`,
      },
      breadcrumb(locale, '', []),
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: langTag(locale),
        mainEntity: faq.map(([q, a]) => ({
          '@type': 'Question',
          name: t(q),
          acceptedAnswer: { '@type': 'Answer', text: t(a) },
        })),
      },
    ],
  }
}
