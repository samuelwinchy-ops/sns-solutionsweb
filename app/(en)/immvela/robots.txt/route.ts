import { IMMVELA_URL } from '@/lib/site'
import { AI_CRAWLERS } from '@/lib/crawlers'

// Served at the public path /robots.txt on immvela.com via the middleware
// rewrite. The root app/robots.ts covers the SNS domain only — without this,
// immvela.com fell through to that file and advertised sns-austria.com's
// sitemap instead of its own.
//
// The AI agents are named for the same reason they are on the SNS domain; see
// lib/crawlers.ts. It matters more here, if anything: immvela.com is a
// brand-new domain with no link equity, so being cited by an answer engine is a
// larger share of how anyone finds it.
export function GET() {
  const aiRules = AI_CRAWLERS.map((ua) => `User-Agent: ${ua}`).join('\n')

  const body = `User-Agent: *
Allow: /

${aiRules}
Allow: /

Host: ${IMMVELA_URL}
Sitemap: ${IMMVELA_URL}/sitemap.xml
`

  return new Response(body, { headers: { 'Content-Type': 'text/plain' } })
}
