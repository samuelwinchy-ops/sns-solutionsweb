import { IMMVELA_URL, SITE, SITE_URL } from '@/lib/site'

/**
 * /llms-full.txt on immvela.com (via the middleware rewrite): the site's own copy as one
 * Markdown document, for answer engines that should not have to reconstruct it from a React
 * tree. It says no more than the pages do (design/immvela-redesign/TRUTH.md): no hosting
 * region, no compliance label, no pricing, and "Next" for anything not built.
 */
export function GET() {
  const body = `# Immvela, full product text

> Your personal real estate assistant.

Immvela is a product by ${SITE.legalName} (${SITE.name}), Vienna, Austria (${SITE_URL}/).
Contact: ${SITE.email}. Immvela is live today in a closed beta.

## Documents in, a checked listing out

Give Immvela the Energieausweis, the floor plan and the photos. It drafts the Exposé and the posts,
and when two documents disagree, it asks you before anything goes out.

## Every number in your Exposé, traced to its document

Immvela keeps the page and the exact line each value was read from, and who confirmed it, so any
number can be checked in one tap.

## One standard for every listing in your office

Every agent works from confirmed documents. No ad goes out with missing energy values, and you can
see who confirmed what, from which document. Next: the office sets its own rules, required
documents, templates and approval before publishing.

## Say "get it ready"

Immvela makes the plan, does the work and shows you each result in the thread.

## Furnished before the first viewing

Upload a photo of an empty room. Immvela furnishes it and marks the result as virtually staged.

## Everything Immvela does

- Documents (live): reads the Energieausweis and the Grundbuchauszug, flags contradictions and
  expiring certificates. Nothing is used until you confirm it.
- Exposé, brochure and posts (live): drafted from your confirmed values, in the German of the
  listing's country, with your office brand.
- Staging (live): furnishes photos of empty rooms. Every staged photo is labelled as virtually staged.
- Publishing (live): Instagram, Facebook, LinkedIn, TikTok and YouTube from one place, always after
  your approval.
- CRM import (live): bring listings in with an OpenImmo export from onOffice, Justimmo, Propstack
  or FLOWFACT.
- Your office (live): listings, documents and confirmed values belong to the office. Every agent
  has their own login.
- Language (live): German first, English available. Written for Austria, Germany and Switzerland.
- Enquiries (next): answers and qualifies enquiries. Never books viewings or quotes prices.

## Documents and data, ${IMMVELA_URL}/trust

- Listings, values and documents belong to the office, not to the individual agent. Offices are
  kept separate in the database.
- Documents and text are processed by AI providers based in the USA. Staging photos are processed
  by a separate AI image provider. EU-only processing is not in place today.
- Nothing read from a document is used until a person confirms it.
- Immvela always asks before anything is published.
- Accounts are deleted on request. Documents are kept as evidence and are not deleted on the photo
  schedule. Immvela does not state legal retention periods.
- Storage: the database and the files you upload are stored with Supabase in Frankfurt, Germany.
- Service providers: Supabase (database and files), Vercel (hosting), Trigger.dev (background
  jobs), Anthropic (documents and text) and fal.ai (staging photos).
- Data processing agreement (AVV): no standard AVV is offered yet. Offices write to
  office@sns-austria.com before uploading documents that name people.

## Apply, ${IMMVELA_URL}/#apply

Apply for the closed beta with your name, email and office size. SNS replies within a week and sets
up your first listing with you. Estate agents who want to shape the product can book a 30 minute
conversation at ${IMMVELA_URL}/partner.
`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
