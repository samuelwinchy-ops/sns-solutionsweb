import { getDict } from '@/i18n'
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

function slug(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
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
 * The seven modules, as parts of the platform.
 *
 * This is the highest-value thing on the Immvela pages for an answer engine:
 * "what does Immvela do" is a question about a module list, and until now that
 * list existed only as prose inside an animated component. Each module is its
 * own SoftwareApplication so its name, its function and — critically — whether
 * it actually ships today are separately readable, instead of a paragraph a
 * model has to infer shipping status from.
 *
 * `status` is the dictionary's build state, straight from the Immvela repo's
 * STATUS.md: 'active' means signed-in and usable today, anything else is in
 * development. Nothing here may claim more than the dictionary does.
 */
function modules(locale: Locale) {
  const t = getDict(locale).waitlistPage

  return t.modules.map((m) => ({
    '@type': 'SoftwareApplication',
    '@id': `${IMMVELA_URL}/#module-${slug(m.code)}`,
    name: `${m.name} (${m.code})`,
    alternateName: m.code,
    description: m.desc,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Real estate',
    operatingSystem: 'Web',
    isPartOf: { '@id': SOFTWARE_ID },
    creator: { '@id': SNS_ORG_ID },
    offers: {
      '@type': 'Offer',
      // Live modules can be bought and used; the rest are genuinely not
      // available yet, and saying otherwise would be a false claim in a format
      // built to be trusted.
      availability:
        m.status === 'active' ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
      description: m.status === 'active' ? t.statusActive : t.statusProgress,
    },
  }))
}

/**
 * The nodes that describe Immvela itself: the platform, its modules and the
 * site. Every Immvela page carries the full set.
 *
 * They are repeated per page rather than emitted once on the landing page,
 * because a page whose WebPage node says `about: {'@id': …#software}` without
 * defining that node has told the reader nothing — the reference dangles and
 * the module list is invisible on the one page that demonstrates the modules.
 * Repetition across pages is the norm for site-level JSON-LD nodes and costs a
 * couple of kB of static HTML.
 */
function coreNodes(locale: Locale) {
  const t = getDict(locale).waitlistPage
  const parts = modules(locale)

  return [
    {
      '@type': 'SoftwareApplication',
      '@id': SOFTWARE_ID,
      name: t.brand,
      alternateName: 'Immvela by SNS Solutions',
      url: IMMVELA_URL,
      description: t.heroSub,
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Real estate',
      operatingSystem: 'Web',
      image: `${SITE_URL}/og.png`,
      // The platform is bilingual with a German default, and both facts are
      // load-bearing claims on the page — don't let this follow the locale
      // the page happens to render in.
      inLanguage: ['de-AT', 'en'],
      availableLanguage: ['German', 'English'],
      countriesSupported: ['AT', 'DE', 'CH'],
      brand: { '@id': SNS_ORG_ID },
      creator: { '@id': SNS_ORG_ID },
      publisher: { '@id': SNS_ORG_ID },
      // The plain-string mirror of `hasPart` below. Redundant on purpose:
      // featureList is the property a summariser is most likely to read
      // straight through, and it survives being flattened out of the graph.
      featureList: t.modules.map((m) => `${m.name} (${m.code}): ${m.desc}`),
      hasPart: parts.map((p) => ({ '@id': p['@id'] })),
      // No price yet (the page's own FAQ says so) — describe the waitlist
      // rather than fabricate a price/availability that isn't real.
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/PreOrder',
        description: 'Early-access waitlist',
      },
      sameAs: SOCIALS,
    },
    ...parts,
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      // The site is immvela.com as a whole, not the page being rendered —
      // pointing this at /de made the German page claim a second, differently
      // scoped site under the same @id. Same reasoning applies to
      // `inLanguage`: one @id can't be two languages depending on the visit.
      url: IMMVELA_URL,
      name: t.brand,
      alternateName: 'Immvela by SNS Solutions',
      description: t.heroSub,
      inLanguage: ['de-AT', 'en'],
      // A publisher is an organization, not a piece of software: this pointed
      // at Immvela itself, so the node said the site publishes itself and no
      // machine-readable line ran from immvela.com back to SNS. The @id
      // resolves against the Organization node the root layout emits.
      publisher: { '@id': SNS_ORG_ID },
      about: { '@id': SOFTWARE_ID },
    },
  ]
}

/**
 * Structured data for the Immvela landing pages. The site-wide schema in the
 * root layout only describes SNS Solutions (a ProfessionalService); without
 * this, nothing machine-readable identifies "Immvela" as a product at all,
 * which matters for AI answer engines as much as classic SEO rich results.
 *
 * Immvela is deliberately typed as a SoftwareApplication (a product), not an
 * Organization — it isn't its own legal entity, it's "a product by SNS
 * Software Solutions GmbH" per the page copy, so `brand`/`creator` point back
 * at the real organization instead of inventing one.
 */
export function immvelaJsonLd(locale: Locale) {
  const t = getDict(locale).waitlistPage
  const url = pageUrl(locale)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      ...coreNodes(locale),
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: `${t.brand} · ${t.tagline}`,
        description: t.heroSub,
        inLanguage: langTag(locale),
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': SOFTWARE_ID },
        breadcrumb: { '@id': `${url}#breadcrumb` },
        primaryImageOfPage: `${SITE_URL}/og.png`,
      },
      breadcrumb(locale, '', []),
      {
        // The explainer film. A narrated 16:9 video is one of the few assets a
        // search engine will surface as its own result, and none of that works
        // from a <video> tag alone — the duration, the thumbnail and the
        // description all have to be declared. `uploadDate` is the date the
        // film was first published here; move it only if the film is recut.
        '@type': 'VideoObject',
        '@id': `${url}#film`,
        name: `${t.brand} — ${t.film.heading}`,
        description: t.film.sub,
        thumbnailUrl: `${IMMVELA_URL}/immvela/film-${locale}.jpg`,
        contentUrl: `${IMMVELA_URL}/immvela/film-${locale}.mp4`,
        // ISO 8601. The two cuts are genuinely different lengths, so this
        // follows the locale rather than being a single shared constant.
        duration: locale === 'de' ? 'PT2M27S' : 'PT2M16S',
        uploadDate: '2026-08-19',
        inLanguage: langTag(locale),
        isFamilyFriendly: true,
        publisher: { '@id': SNS_ORG_ID },
        about: { '@id': SOFTWARE_ID },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: langTag(locale),
        mainEntity: t.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }
}

/**
 * Structured data for the module walkthrough (/demo on immvela.com).
 *
 * The page shipped with none at all, so the one page that demonstrates each
 * module working was invisible as an entity — it read as an orphan URL under a
 * brand-new domain. This ties it to the product and spells out, per module,
 * what the clip shows.
 */
export function immvelaDemoJsonLd(locale: Locale) {
  const t = getDict(locale).waitlistPage
  const url = pageUrl(locale, '/demo')

  return {
    '@context': 'https://schema.org',
    '@graph': [
      ...coreNodes(locale),
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: `${t.brand} · ${t.demo.heading}`,
        description: t.demo.intro,
        inLanguage: langTag(locale),
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': SOFTWARE_ID },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      breadcrumb(locale, '/demo', [{ name: t.demo.eyebrow, path: '/demo' }]),
      {
        '@type': 'ItemList',
        '@id': `${url}#modules`,
        name: t.demo.heading,
        description: t.demo.intro,
        itemListElement: t.modules.map((m, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: `${m.name} (${m.code})`,
          // The walkthrough bullets are this page's own description of the
          // module — what it does, the constraint it works under, and what it
          // leaves behind — which is more specific than the platform blurb.
          description: m.demo.join(' '),
          item: { '@id': `${IMMVELA_URL}/#module-${slug(m.code)}` },
        })),
      },
    ],
  }
}
