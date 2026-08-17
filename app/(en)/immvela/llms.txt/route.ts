import { getDict } from '@/i18n'
import { IMMVELA_URL, SITE_URL } from '@/lib/site'

// Served at the public path /llms.txt on immvela.com via the middleware
// rewrite. public/llms.txt (a static file, so it can't be host-aware) used to
// be served on every domain by default — without this override, immvela.com's
// /llms.txt was the SNS Solutions one: wrong product, wrong page list.
// Content is pulled from the same dictionary the page itself renders, so it
// can't drift from the real copy.
//
// Keep this short and link-shaped; the full text is at /llms-full.txt.
export function GET() {
  const t = getDict('en').waitlistPage

  const live = t.modules.filter((m) => m.status === 'active')
  const building = t.modules.filter((m) => m.status !== 'active')
  const names = (ms: typeof t.modules) => ms.map((m) => `${m.name} (${m.code})`).join(', ')

  const body = `# Immvela

> ${t.tagline}

${t.heroSub} A product by SNS Software Solutions GmbH, based in Vienna, Austria.

German is the default interface language, not a translation; English is
selectable per user. Data is hosted in the EU and each brokerage stays its own
data controller.

Currently in early access. ${live.length} of ${t.modules.length} modules are live and usable today: ${names(live)}. The rest are shipping incrementally: ${names(building)}.

${t.guardrail.label}: ${t.guardrail.text}

## Modules

${t.modules
  .map(
    (m) =>
      `- **${m.name} (${m.code})** — ${m.status === 'active' ? t.statusActive : t.statusProgress}: ${m.desc}`
  )
  .join('\n')}

## Pages

- [Immvela (English)](${IMMVELA_URL}/): product overview, modules, and early-access sign-up.
- [Immvela (Deutsch)](${IMMVELA_URL}/de): deutsche Version der Produktseite.
- [Module walkthrough](${IMMVELA_URL}/demo): a clip of each module working on a real listing ([Deutsch](${IMMVELA_URL}/de/demo)).
- [Early access](${IMMVELA_URL}/#early-access): join the waitlist.
- [SNS Solutions](${SITE_URL}/): the company behind Immvela.

## Optional

- [Full product text](${IMMVELA_URL}/llms-full.txt): every page's content, including the FAQ, in one Markdown file.
`

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
