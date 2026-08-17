import { getDict } from '@/i18n'
import { localePath, type Locale } from '@/i18n/config'
import { IMMVELA_URL, SITE, SITE_URL } from '@/lib/site'

/**
 * Structured data for the SNS pages.
 *
 * The root layout emits the site-wide Organization node and the homepage emits
 * the WebSite node; everything here is the *per-page* layer that was missing —
 * a WebPage/CollectionPage node, a BreadcrumbList, and whatever entity the page
 * is actually about (Service, Person, FAQ). Every node points back at the two
 * site-wide nodes by @id, so a crawler assembling the graph gets one connected
 * entity rather than a pile of unrelated pages.
 *
 * The `@id` values are the contract between files — change one here and the
 * reference in app/layout.tsx, components/SnsWebSiteSchema.tsx or
 * lib/immvela-schema.ts has to change with it.
 */

export const SNS_ORG_ID = `${SITE_URL}/#organization`
export const SNS_WEBSITE_ID = `${SITE_URL}/#website`

/** Immvela's SoftwareApplication node, which lives on the immvela.com pages. */
export const IMMVELA_SOFTWARE_ID = `${IMMVELA_URL}/#software`

/**
 * Profiles that belong to the SNS entity.
 *
 * `sameAs` is what lets a search or answer engine tie sns-austria.com, the
 * LinkedIn page and the Instagram account together as one organization instead
 * of three unrelated mentions of a similar name. It is the cheapest
 * disambiguation signal there is, and it matters most for a company nobody has
 * heard of yet — which is exactly the case here.
 *
 * Kept in sync with the SOCIALS maps in components/Footer.tsx and
 * components/ImmvelaFooter.tsx.
 */
export const SNS_SOCIALS = [
  'https://www.linkedin.com/company/sns-solutionswien/',
  'https://www.instagram.com/sns_solutions_/',
]

/**
 * The site-wide Organization node, rendered by both root layouts.
 *
 * It runs on immvela.com too — that's deliberate and harmless, because
 * Immvela's own schema names this organization as its `brand`/`creator` by @id
 * and the reference has to resolve. The matching WebSite node deliberately does
 * *not* live here; see snsWebSiteNode() below.
 */
export function snsOrganizationNode() {
  return {
    '@type': 'ProfessionalService',
    '@id': SNS_ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE_URL,
    email: SITE.email,
    telephone: SITE.phone,
    description: SITE.description,
    slogan: SITE.tagline,
    foundingDate: SITE.foundingDate,
    logo: `${SITE_URL}/sns-icon.png`,
    image: `${SITE_URL}/og.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.streetAddress,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.city,
      addressCountry: SITE.address.country,
    },
    areaServed: { '@type': 'Country', name: 'Austria' },
    // Ties sns-austria.com to the LinkedIn and Instagram profiles as one
    // entity. Without it the three are just similarly-named strangers to a
    // crawler, which is the difference between a knowledge-graph entity and an
    // unrecognised brand for a company this new.
    sameAs: SNS_SOCIALS,
    contactPoint: contactPoint('en'),
    // @id'd rather than inlined by name, so the fuller Person nodes on /team
    // (job title, bio, employer) merge with these references instead of
    // standing beside them as unrelated people of the same name.
    founder: FOUNDER_REFS,
    knowsAbout: [
      'Custom software development',
      'AI automation',
      'AI agents',
      'Data pipelines',
      'IT consulting',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: SITE.services.map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
  }
}

/** BCP-47 tag for a locale. The German site is Austrian German, not de-DE. */
export function langTag(locale: Locale): string {
  return locale === 'de' ? 'de-AT' : 'en'
}

/** Absolute URL for a path in a locale — `/services` + 'de' → …/de/services. */
export function pageUrl(locale: Locale, path: string): string {
  return `${SITE_URL}${localePath(locale, path)}`
}

/**
 * Breadcrumb labels, by path. A breadcrumb trail is what turns the bare URL
 * under a search result into a readable hierarchy, and it tells an answer
 * engine where a page sits in the site rather than leaving it to guess from the
 * slug. The nav dictionary can't be reused for this: its labels are lowercased
 * for the nav's own typography ("custom builds").
 */
const CRUMB_LABELS: Record<Locale, Record<string, string>> = {
  en: {
    '/': 'Home',
    '/services': 'Services',
    '/team': 'Team',
    '/contact': 'Contact',
  },
  de: {
    '/': 'Start',
    '/services': 'Leistungen',
    '/team': 'Team',
    '/contact': 'Kontakt',
  },
}

/** `/a/b` → ['/', '/a', '/a/b'] — every ancestor of a path, root first. */
function ancestors(path: string): string[] {
  const parts = path.split('/').filter(Boolean)
  return ['/', ...parts.map((_, i) => `/${parts.slice(0, i + 1).join('/')}`)]
}

function breadcrumb(locale: Locale, path: string) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl(locale, path)}#breadcrumb`,
    itemListElement: ancestors(path).map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: CRUMB_LABELS[locale][p] ?? p,
      item: pageUrl(locale, p),
    })),
  }
}

type PageNode = {
  /** WebPage subtype — CollectionPage for indexes, AboutPage for /team, etc. */
  type?: string
  name: string
  description: string
}

function webPage(locale: Locale, path: string, { type = 'WebPage', name, description }: PageNode) {
  const url = pageUrl(locale, path)
  return {
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: langTag(locale),
    isPartOf: { '@id': SNS_WEBSITE_ID },
    about: { '@id': SNS_ORG_ID },
    breadcrumb: { '@id': `${url}#breadcrumb` },
    publisher: { '@id': SNS_ORG_ID },
  }
}

/**
 * The WebSite node for sns-austria.com.
 *
 * Every WebPage below says `isPartOf: { '@id': …#website }`, and a reference to
 * a node the page never defines tells a consumer nothing — so the node ships
 * with each page's own graph rather than being left to the homepage. It can't
 * simply go back in the root layout (where it used to live): that layout also
 * renders on immvela.com, where a node asserting "this site is SNS Solutions"
 * directly contradicts Immvela's own WebSite node, and the site name in search
 * results is read from exactly that node. Nothing in lib/schema.ts renders on
 * immvela.com, so putting it here is safe.
 *
 * components/SnsWebSiteSchema.tsx renders this same node on the two homepages,
 * which have no per-page graph of their own.
 */
export function snsWebSiteNode() {
  return {
    '@type': 'WebSite',
    '@id': SNS_WEBSITE_ID,
    url: SITE_URL,
    name: SITE.name,
    alternateName: SITE.legalName,
    description: SITE.description,
    // Both, always. This node has one @id for the whole site, so making
    // `inLanguage` follow the rendering locale would have the English and
    // German copies publish two contradictory versions of the same node — the
    // site is bilingual regardless of which copy you are looking at.
    inLanguage: ['en', 'de-AT'],
    publisher: { '@id': SNS_ORG_ID },
  }
}

/** Assemble a page's @graph: the page node, its breadcrumb, then its entities. */
function graph(locale: Locale, path: string, page: PageNode, ...entities: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      webPage(locale, path, page),
      breadcrumb(locale, path),
      snsWebSiteNode(),
      ...entities,
    ],
  }
}

function slug(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/**
 * Where SNS sells. The Organization node claims Austria (where the company is);
 * the product pages say "built for the DACH market" in their own copy, so the
 * services and products they describe claim the three DACH countries. Don't
 * widen either one past what a page actually says.
 */
const DACH = ['Austria', 'Germany', 'Switzerland'].map((name) => ({
  '@type': 'Country',
  name,
}))

const AUSTRIA = [{ '@type': 'Country', name: 'Austria' }]

/**
 * The founders, as referenceable entities.
 *
 * The Organization node in the root layout used to inline them as bare
 * `{ '@type': 'Person', name }` objects, which is three anonymous strings as
 * far as a graph is concerned. Giving each a stable @id means the richer node
 * on /team (job title, bio, employer) merges with the reference from the
 * Organization instead of sitting beside it as an unrelated person of the same
 * name. Roles are the ones shown in components/Founders.tsx.
 */
const FOUNDERS = [
  { name: 'Samuel Winch', jobTitle: 'Co-founder & CTO' },
  { name: 'Nicholas Pellechi', jobTitle: 'Co-founder & CEO' },
  { name: 'Samson Belachew', jobTitle: 'Co-founder & CSO' },
]

export function founderId(name: string): string {
  return `${SITE_URL}/team#${slug(name)}`
}

/** Bare @id references, for the `founder` property of the Organization node. */
export const FOUNDER_REFS = FOUNDERS.map((f) => ({
  '@type': 'Person',
  '@id': founderId(f.name),
  name: f.name,
}))

/** How to reach SNS. Attached to the Organization from the contact page. */
export function contactPoint(locale: Locale) {
  return {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: SITE.email,
    telephone: SITE.phone,
    areaServed: DACH.map((c) => c.name),
    availableLanguage: ['German', 'English'],
    url: pageUrl(locale, '/contact'),
  }
}

// ── Per-page graphs ────────────────────────────────────────────────────────
// One export per route, taking the locale. Each page renders exactly one of
// these, so the EN and DE copies of a route can't describe themselves
// differently by accident.

/**
 * /services — the three service lines as first-class Service entities.
 *
 * Without these, "what does SNS Solutions do" was answerable only from prose.
 * A Service node names the offering, ties it to the provider by @id, and states
 * where it's offered, which is precisely the shape an answer engine can quote.
 */
export function servicesGraph(locale: Locale) {
  const t = getDict(locale).servicesPage
  const url = pageUrl(locale, '/services')

  const services = t.items.map((item) => ({
    '@type': 'Service',
    '@id': `${url}#${slug(item.name)}`,
    name: item.name,
    serviceType: item.name,
    // The tagline is the one-line definition; `problem`/`whatWeDo` are the
    // page's own explanation of the offering, and both are visible on the page.
    description: `${item.tagline} ${item.whatWeDo}`,
    provider: { '@id': SNS_ORG_ID },
    areaServed: AUSTRIA,
    audience: { '@type': 'BusinessAudience', name: 'Businesses' },
  }))

  return graph(
    locale,
    '/services',
    {
      type: 'CollectionPage',
      name: t.heading,
      description: t.intro,
    },
    {
      '@type': 'ItemList',
      '@id': `${url}#services`,
      name: t.heading,
      itemListElement: services.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: { '@id': s['@id'] },
      })),
    },
    ...services,
    // The free consultation is a real, priced offer (zero) that the page states
    // outright — worth declaring rather than leaving buried in body copy.
    {
      '@type': 'Offer',
      '@id': `${url}#consultation`,
      name: t.consult.heading,
      description: t.consult.sub,
      price: 0,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      offeredBy: { '@id': SNS_ORG_ID },
      url: pageUrl(locale, '/contact'),
    }
  )
}

/** /team — the founders as Person entities, merged into the Organization. */
export function teamGraph(locale: Locale) {
  const t = getDict(locale).teamPage

  const people = FOUNDERS.map((f, i) => ({
    '@type': 'Person',
    '@id': founderId(f.name),
    name: f.name,
    jobTitle: f.jobTitle,
    // Bios are ordered to match the FOUNDERS list — same contract as
    // components/Founders.tsx, which renders them against the same order.
    description: t.bios[i]?.trim(),
    worksFor: { '@id': SNS_ORG_ID },
    url: pageUrl(locale, '/team'),
  }))

  return graph(
    locale,
    '/team',
    { type: 'AboutPage', name: t.heading, description: t.intro },
    ...people
  )
}

/** /contact — a ContactPage plus the contact point it describes. */
export function contactGraph(locale: Locale) {
  const t = getDict(locale).contactPage

  return graph(
    locale,
    '/contact',
    { type: 'ContactPage', name: t.heading, description: t.intro },
    {
      '@type': 'Organization',
      '@id': SNS_ORG_ID,
      contactPoint: contactPoint(locale),
    }
  )
}
