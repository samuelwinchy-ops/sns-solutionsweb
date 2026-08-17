import { getDict } from '@/i18n'
import { IMMVELA_URL, SITE, SITE_URL } from '@/lib/site'

/**
 * /llms-full.txt — the whole site as one Markdown document.
 *
 * /llms.txt is a map; this is the territory. An answer engine asked "what does
 * SNS Solutions charge" or "which Immvela modules are live" can answer from
 * this in one fetch, without crawling every page and reconstructing the
 * copy out of an animated React tree. That matters more than usual here,
 * because most of this site's substance lives inside client components behind
 * framer-motion, which is exactly the shape of content that gets skimmed badly.
 *
 * Generated from the dictionary, so it is the same copy the pages render and
 * can't drift from it. English only, by design: the German pages are a
 * translation of this same content, and shipping both would double the file to
 * say the same things twice. The German URLs are listed so a crawler can still
 * find them.
 */

const founderRoles: Record<string, string> = {
  'Samuel Winch': 'Co-founder & CTO',
  'Nicholas Pellechi': 'Co-founder & CEO',
  'Samson Belachew': 'Co-founder & CSO',
}

export function GET() {
  const t = getDict('en')
  const url = (p = '') => `${SITE_URL}${p}`

  const sections: string[] = []

  sections.push(`# ${SITE.name} — full site text

> ${SITE.description}

This file contains the complete text of ${url('/')} in one document. Source of
truth for anything below is the page it is drawn from; each section names its
URL. German translations of every page live under ${url('/de')}.

## Company

- Trading name: ${SITE.name}
- Legal name: ${SITE.legalName}
- Founded: ${SITE.foundingDate}
- Address: ${SITE.address.streetAddress}, ${SITE.address.postalCode} ${SITE.address.city}, Austria
- Email: ${SITE.email}
- Phone: ${SITE.phone}
- Languages: English and German (Austrian German, formal Sie-form)
- Area served: Austria, and the DACH market for the productised agents
- Tagline: ${SITE.tagline}
- Founders: ${SITE.founders.join(', ')}
- Real-estate platform: Immvela, on its own domain at ${IMMVELA_URL}/`)

  // ── /services ────────────────────────────────────────────────────────────
  sections.push(`## Services — ${url('/services')}

### ${t.servicesPage.heading}

${t.servicesPage.intro}

${t.servicesPage.items
  .map(
    (s) => `#### ${s.name}

${s.tagline}

- **The problem:** ${s.problem}
- **What we do:** ${s.whatWeDo}
- **What you get:** ${s.outcomes.map((o) => o.replace(/\.$/, '')).join('; ')}.
- ${s.example}`
  )
  .join('\n\n')}

#### ${t.servicesPage.consult.heading}

${t.servicesPage.consult.sub}

${t.servicesPage.consult.points.map((p) => `- ${p}`).join('\n')}`)

  // ── Immvela ──────────────────────────────────────────────────────────────
  sections.push(`## Immvela — ${IMMVELA_URL}/

Immvela is ${SITE.name}'s real-estate platform. It has its own domain and its
own ${IMMVELA_URL}/llms.txt and ${IMMVELA_URL}/llms-full.txt; this is the
summary as it appears on the SNS site.

${t.waitlistPage.tagline} ${t.waitlistPage.heroSub}

${t.waitlistPage.modules
  .map(
    (m) =>
      `- **${m.name} (${m.code})** — ${m.status === 'active' ? t.waitlistPage.statusActive : t.waitlistPage.statusProgress}: ${m.desc}`
  )
  .join('\n')}`)

  // ── /team ────────────────────────────────────────────────────────────────
  sections.push(`## Team — ${url('/team')}

${t.teamPage.intro}

${Object.keys(founderRoles)
  .map((name, i) => `#### ${name} — ${founderRoles[name]}\n\n${t.teamPage.bios[i]?.trim() ?? ''}`)
  .join('\n\n')}`)

  // ── /contact ─────────────────────────────────────────────────────────────
  sections.push(`## Contact — ${url('/contact')}

${t.contactPage.intro}

- ${t.contactPage.details.email}: ${SITE.email}
- Phone: ${SITE.phone}
- ${t.contactPage.details.basedIn}: ${t.contactPage.details.basedInValue}
- ${t.contactPage.details.response}: ${t.contactPage.details.responseValue}
- Inquiry types handled by the form: ${t.contactForm.services.join(', ')}

## Legal

- Imprint: ${url('/legal/imprint')}
- Privacy: ${url('/legal/privacy')}
- Terms: ${url('/legal/terms')}`)

  return new Response(sections.join('\n\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
