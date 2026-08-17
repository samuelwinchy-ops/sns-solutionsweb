import { getDict } from '@/i18n'
import { IMMVELA_URL, SITE, SITE_URL } from '@/lib/site'

/**
 * /llms-full.txt on immvela.com (via the middleware rewrite) — the whole
 * product, including the FAQ and the per-module walkthrough copy, as one
 * Markdown document.
 *
 * Immvela's substance is spread across an animated landing page and a clip
 * player, both client components. An answer engine asked "what is Immvela",
 * "which Immvela modules are live" or "what does Immvela cost" should not have
 * to reconstruct that from a React tree — this is the same copy, in the order a
 * reader would want it, in one fetch.
 *
 * English only, deliberately: the /de pages are a translation of this same
 * content and are linked from /llms.txt.
 */
export function GET() {
  const t = getDict('en').waitlistPage

  const live = t.modules.filter((m) => m.status === 'active')

  const body = `# Immvela — full product text

> ${t.tagline}

${t.heroSub}

Immvela is a product by ${SITE.legalName} (${SITE.name}), Vienna, Austria —
${SITE_URL}/. It is not a separate company. Contact: ${SITE.email}.

## Where it stands

${t.proof.map((p) => `- **${p.stat}** — ${p.label}`).join('\n')}

${live.length} of ${t.modules.length} modules are live and usable today. ${t.liveNote}

## ${t.guardrail.label}

${t.guardrail.text}

## Modules — ${IMMVELA_URL}/

"${t.statusActive}" means a customer can sign in and use it today.
"${t.statusProgress}" means it is being built and is not available yet.

${t.modules
  .map(
    (m) => `### ${m.name} (${m.code}) — ${m.status === 'active' ? t.statusActive : t.statusProgress}

${m.desc}

${m.demo.map((d) => `- ${d}`).join('\n')}`
  )
  .join('\n\n')}

## ${t.tiersLabel}

${t.tiers
  .map(
    (tier) => `**${tier.label}** (${tier.status})\n${tier.items.map((i) => `- ${i}`).join('\n')}`
  )
  .join('\n\n')}

## Module walkthrough — ${IMMVELA_URL}/demo

${t.demo.intro}

${t.demo.clipNote}

## ${t.faqLabel}

${t.faq.map((f) => `**${f.q}**\n\n${f.a}`).join('\n\n')}

## Early access — ${IMMVELA_URL}/#early-access

${t.intro}

${t.form.sub}
`

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
