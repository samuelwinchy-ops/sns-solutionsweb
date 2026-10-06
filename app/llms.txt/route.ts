import { getDict } from '@/i18n'
import { IMMVELA_DESCRIPTION, IMMVELA_URL, SITE, SITE_URL } from '@/lib/site'
import { sortedPosts } from '@/lib/blog'

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

  // "Name (tagline)" for each of the three service lines.
  const services = t.servicesPage.items
    .map((s) => `${s.name} (${s.tagline.replace(/\.$/, '')})`)
    .join('; ')

  const posts = sortedPosts()
  const blogList = posts
    .map((p) => `  - [${p.title}](${url(`/blog/${p.slug}`)}): ${p.description}`)
    .join('\n')

  const body = `# ${SITE.name}

> ${SITE.description}

${SITE.legalName} is based in Vienna, Austria (${SITE.address.streetAddress}, ${SITE.address.postalCode}) and was founded in ${SITE.foundingDate} by ${SITE.founders.join(', ')}. The whole site is published in English and German (Austrian German, formal Sie-form); German pages live under /de.

SNS Solutions is the parent company of two separate products, each on its own domain:

- Immvela, ${IMMVELA_URL}/: ${t.productsPage.immvelaTagline} ${IMMVELA_DESCRIPTION}
- QFUtool: automated follow-up on sent quotes for salespeople, sending from their own domain during working hours. https://www.qfutool.com/

We also offer a free 30-minute consultation and custom software work.

Services: ${services}.

Contact: ${SITE.email}, ${SITE.phone}. ${t.contactPage.details.response}: ${t.contactPage.details.responseValue.toLowerCase()}.

## Pages

- [Home](${url('/')}): what SNS Solutions is, its two products, news and updates, and the consultation offer. [Deutsch](${url('/de')}).
- [Our products](${url('/products')}): Immvela and QFUtool side by side, each with a link to its own site. [Deutsch](${url('/de/products')}).
- [Services](${url('/services')}): the three service lines in detail: the problem each solves, what we do, and what you get. Includes a free 30-minute consultation offer. [Deutsch](${url('/de/services')}).
- [Immvela](${IMMVELA_URL}/): our product for estate agents, on its own domain, with its own ${IMMVELA_URL}/llms.txt.
- [QFUtool](https://www.qfutool.com/): our quote follow-up product for salespeople, on its own domain.
- [Team](${url('/team')}): the three founders and what each of them leads. [Deutsch](${url('/de/team')}).
- [Contact](${url('/contact')}): email, phone, and the inquiry form. [Deutsch](${url('/de/contact')}).
- [Blog](${url('/blog')}): notes on the problems behind each product, filed by product. English only. Posts:
${blogList}

## Optional

- [Full site text](${url('/llms-full.txt')}): every page's content in one Markdown file.
- [Imprint](${url('/legal/imprint')}) · [Privacy](${url('/legal/privacy')}) · [Terms](${url('/legal/terms')})
- German equivalents of every page above are at ${url('/de')}…, for example ${url('/de/services')} is "${de.servicesPage.heading}".
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
