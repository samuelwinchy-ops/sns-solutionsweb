import JsonLd from '@/components/JsonLd'
import { snsWebSiteNode } from '@/lib/schema'

/**
 * The WebSite node for sns-austria.com, for the two homepages.
 *
 * This used to sit in the root layout alongside the Organization node, which
 * meant every immvela.com page shipped a WebSite node saying the site is
 * "SNS Solutions" at sns-austria.com *and* Immvela's own WebSite node saying it
 * is "Immvela" at immvela.com. Google reads the site name for search results
 * from this node, so two contradictory ones on the same page is the last thing
 * a brand-new domain trying to establish its own identity needs.
 *
 * WebSite markup belongs on the homepage anyway — that's where Google looks for
 * it. Every other SNS page carries the same node inside its own page graph
 * (see `graph()` in lib/schema.ts), which is why the node itself lives there
 * and this component only places it.
 */
export default function SnsWebSiteSchema() {
  return <JsonLd data={{ '@context': 'https://schema.org', ...snsWebSiteNode() }} />
}
