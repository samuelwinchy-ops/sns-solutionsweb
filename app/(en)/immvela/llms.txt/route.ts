import { IMMVELA_URL, SITE_URL } from '@/lib/site'

// Served at the public path /llms.txt on immvela.com via the middleware rewrite, so answer
// engines read Immvela's own summary rather than the SNS one. Kept to what the site itself
// claims (design/immvela-redesign/TRUTH.md): present tense only for what works today, "Next"
// for what does not, and no hosting, compliance or pricing claims. Full text: /llms-full.txt.
export function GET() {
  const body = `# Immvela

> Your personal real estate assistant. Documents in, a checked listing out.

Immvela is a product by SNS Software Solutions GmbH, Vienna, Austria, for estate agents and
offices in Austria, Germany and Switzerland. It is in a closed beta. German first, English available.

Give it the Energieausweis, the floor plan and the photos. Immvela drafts the Exposé and the posts,
keeps the document and line every value was read from, and asks the agent before anything goes out
when two documents disagree. Nothing read from a document is used until a person confirms it.

## Pages

- [Immvela (English)](${IMMVELA_URL}/): what Immvela does today, and the closed beta application.
- [Immvela (Deutsch)](${IMMVELA_URL}/de): deutsche Version.
- [How Immvela handles documents and data](${IMMVELA_URL}/trust) ([Deutsch](${IMMVELA_URL}/de/trust)).
- [Help us build Immvela](${IMMVELA_URL}/partner): book a 30 minute conversation ([Deutsch](${IMMVELA_URL}/de/partner)).
- [What Immvela does today, and what comes next](${IMMVELA_URL}/modules) ([Deutsch](${IMMVELA_URL}/de/modules)).
- [Why Immvela](${IMMVELA_URL}/why) ([Deutsch](${IMMVELA_URL}/de/why)).
- [Apply for the closed beta](${IMMVELA_URL}/#apply).
- [SNS Solutions](${SITE_URL}/): the company behind Immvela.

## Optional

- [Full product text](${IMMVELA_URL}/llms-full.txt)
`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
