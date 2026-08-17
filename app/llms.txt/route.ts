import { getDict } from '@/i18n'
import { IMMVELA_URL, SITE, SITE_URL } from '@/lib/site'

/**
 * /llms.txt — the concise index an answer engine reads to find its way around
 * the site (llmstxt.org).
 *
 * This replaces the hand-written public/llms.txt, which had gone stale: it
 * listed Home, Services, Contact and the two legal pages, and knew nothing
 * about /team or the German half of the site. A hand-maintained copy of the
 * site's own copy always ends up describing a site that no longer exists, so
 * this is generated from the same dictionary the pages render from — the same
 * thing app/immvela/llms.txt does.
 *
 * Keep this one short and link-shaped. The full text lives at /llms-full.txt.
 */
export function GET() {
  const t = getDict('en')
  const de = getDict('de')

  const url = (p = '') => `${SITE_URL}${p}`

  // "Name — tagline" for each of the three service lines.
  const services = t.servicesPage.items
    .map((s) => `${s.name} (${s.tagline.replace(/\.$/, '')})`)
    .join('; ')

  const immvelaLive = t.waitlistPage.modules
    .filter((m) => m.status === 'active')
    .map((m) => `${m.name} (${m.code})`)
    .join(', ')

  const body = `# ${SITE.name}

> ${SITE.description}

${SITE.legalName} is based in Vienna, Austria (${SITE.address.streetAddress}, ${SITE.address.postalCode}) and was founded in ${SITE.foundingDate} by ${SITE.founders.join(', ')}. The whole site is published in English and German (Austrian German, formal Sie-form); German pages live under /de.

Real estate is the focus. Our product is Immvela, an agentic operating system for real-estate teams, and it lives on its own domain — ${IMMVELA_URL}/ (${immvelaLive} live today). The studio also takes on custom software and automation work outside it.

Services: ${services}.

Contact: ${SITE.email}, ${SITE.phone}. ${t.contactPage.details.response}: ${t.contactPage.details.responseValue.toLowerCase()}.

## Pages

- [Home](${url('/')}): what SNS Solutions is, who we build for, and how we work. [Deutsch](${url('/de')}).
- [Services](${url('/services')}): the three service lines in detail — the problem each solves, what we do, and what you get. Includes a free 30-minute consultation offer. [Deutsch](${url('/de/services')}).
- [Immvela](${IMMVELA_URL}/): our real-estate platform, on its own domain, with its own ${IMMVELA_URL}/llms.txt and module-by-module build status.
- [Team](${url('/team')}): the three founders and what each of them leads. [Deutsch](${url('/de/team')}).
- [Contact](${url('/contact')}): email, phone, and the inquiry form. [Deutsch](${url('/de/contact')}).

## Optional

- [Full site text](${url('/llms-full.txt')}): every page's content in one Markdown file.
- [Imprint](${url('/legal/imprint')}) · [Privacy](${url('/legal/privacy')}) · [Terms](${url('/legal/terms')})
- German equivalents of every page above are at ${url('/de')}… — for example ${url('/de/services')} is "${de.servicesPage.heading}".
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
