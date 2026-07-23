import { IMMVELA_URL } from '@/lib/site'

// Served at the public path /sitemap.xml on immvela.com via the middleware
// rewrite. The root app/sitemap.ts covers only the SNS domain's own paths, so
// immvela.com's two pages (root + /de) need their own entry point.
export function GET() {
  const now = new Date().toISOString()
  const urls = [
    { loc: IMMVELA_URL, priority: '1.0' },
    { loc: `${IMMVELA_URL}/de`, priority: '0.9' },
  ]

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (u) => `<url>
<loc>${u.loc}</loc>
<xhtml:link rel="alternate" hreflang="en" href="${IMMVELA_URL}" />
<xhtml:link rel="alternate" hreflang="de" href="${IMMVELA_URL}/de" />
<xhtml:link rel="alternate" hreflang="x-default" href="${IMMVELA_URL}" />
<lastmod>${now}</lastmod>
<changefreq>weekly</changefreq>
<priority>${u.priority}</priority>
</url>`
  )
  .join('\n')}
</urlset>`

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } })
}
