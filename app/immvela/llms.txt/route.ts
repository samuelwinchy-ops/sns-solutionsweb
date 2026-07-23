import { getDict } from '@/i18n'
import { IMMVELA_URL, SITE_URL } from '@/lib/site'

// Served at the public path /llms.txt on immvela.com via the middleware
// rewrite. public/llms.txt (a static file, so it can't be host-aware) is
// served on every domain by default — without this override, immvela.com's
// /llms.txt was the SNS Solutions one: wrong product, wrong page list.
// Content is pulled from the same dictionary the page itself renders, so it
// can't drift from the real copy.
export function GET() {
  const t = getDict('en').waitlistPage
  const moduleNames = t.modules.map((m) => m.name).join(', ')

  const body = `# Immvela

> ${t.tagline}

${t.heroSub} A product by SNS Software Solutions GmbH.

Currently in early access — some modules are live today, the rest are shipping incrementally: ${moduleNames}. ${t.guardrail.text}

## Pages

- [Immvela (English)](${IMMVELA_URL}/): product overview, modules, and early-access sign-up.
- [Immvela (Deutsch)](${IMMVELA_URL}/de): deutsche Version der Produktseite.
- [Early access](${IMMVELA_URL}/#early-access): join the waitlist.
- [SNS Solutions](${SITE_URL}/): the company behind Immvela.
`

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
