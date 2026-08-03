import { SITE, SITE_URL } from '@/lib/site'

/**
 * The WebSite node for sns-austria.com.
 *
 * This used to sit in the root layout alongside the Organization node, which
 * meant every immvela.com page shipped a WebSite node saying the site is
 * "SNS Solutions" at sns-austria.com *and* Immvela's own WebSite node saying it
 * is "Immvela" at immvela.com. Google reads the site name for search results
 * from this node, so two contradictory ones on the same page is the last thing
 * a brand-new domain trying to establish its own identity needs.
 *
 * WebSite markup belongs on the homepage anyway — that's where Google looks for
 * it — so it lives here and is rendered only by the SNS homepages.
 */
export default function SnsWebSiteSchema({ locale = 'en' }: { locale?: 'en' | 'de' }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE.name,
    description: SITE.description,
    inLanguage: locale,
    publisher: { '@id': `${SITE_URL}/#organization` },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
