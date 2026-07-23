import { IMMVELA_URL } from '@/lib/site'

// Served at the public path /robots.txt on immvela.com via the middleware
// rewrite. The root app/robots.ts covers the SNS domain only — without this,
// immvela.com fell through to that file and advertised sns-austria.com's
// sitemap instead of its own.
export function GET() {
  const body = `User-Agent: *\nAllow: /\n\nHost: ${IMMVELA_URL}\nSitemap: ${IMMVELA_URL}/sitemap.xml\n`
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } })
}
