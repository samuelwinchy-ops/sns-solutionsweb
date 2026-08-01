import { IMMVELA_URL } from '@/lib/site'

// Served at the public path /sitemap.xml on immvela.com via the middleware
// rewrite. The root app/sitemap.ts covers only the SNS domain's own paths, so
// immvela.com's pages need their own entry point.
//
// Paths are the public ones (`/`, `/de`, `/demo`, …), i.e. the values in
// middleware.ts's IMMVELA_PAGES — a new page added there belongs here too.
export function GET() {
  const now = new Date().toISOString()
  // `alt` is the same page in the other language, for the hreflang pair.
  const urls = [
    { path: '', alt: '/de', priority: '1.0' },
    { path: '/de', alt: '/de', priority: '0.9' },
    { path: '/demo', alt: '/de/demo', priority: '0.8' },
    { path: '/de/demo', alt: '/de/demo', priority: '0.7' },
  ]

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map((u) => {
    // The English URL of the pair is the alternate with the /de prefix removed.
    const en = u.alt.replace(/^\/de/, '')
    return `<url>
<loc>${IMMVELA_URL}${u.path}</loc>
<xhtml:link rel="alternate" hreflang="en" href="${IMMVELA_URL}${en}" />
<xhtml:link rel="alternate" hreflang="de" href="${IMMVELA_URL}${u.alt}" />
<xhtml:link rel="alternate" hreflang="x-default" href="${IMMVELA_URL}${en}" />
<lastmod>${now}</lastmod>
<changefreq>weekly</changefreq>
<priority>${u.priority}</priority>
</url>`
  })
  .join('\n')}
</urlset>`

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } })
}
