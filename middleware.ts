import { NextResponse, type NextRequest } from 'next/server'
import { IMMVELA_URL, SITE_URL } from '@/lib/site'

/**
 * Immvela runs on its own domain (immvela.com) but is served from this same
 * Next.js deployment as the SNS site. Routing is by hostname:
 *
 *   • On immvela.com  → the /immvela pages are served at the domain root:
 *       immvela.com/      → renders /immvela
 *       immvela.com/de    → renders /de/immvela
 *     and the internal /immvela paths canonicalise back to the root so there's
 *     exactly one public URL per page.
 *
 *   • On the SNS domain → the old /immvela URLs 301 to immvela.com so links and
 *     SEO consolidate on the new home.
 *
 * It also rewrites /robots.txt, /sitemap.xml and /llms.txt on immvela.com to
 * Immvela's own versions (app/immvela/robots.txt, sitemap.xml, llms.txt) —
 * otherwise they'd fall through to the root app/robots.ts / app/sitemap.ts /
 * public/llms.txt, which all describe the SNS domain.
 *
 * Other hosts (localhost, *.vercel.app previews) are left untouched, so the
 * /immvela route stays directly reachable for local development and previews.
 */

// Base host + www for a URL, e.g. "https://www.immvela.com" → {immvela.com, www.immvela.com}.
function hostSet(url: string): Set<string> {
  const base = new URL(url).host.replace(/^www\./, '')
  return new Set([base, `www.${base}`])
}

const IMMVELA_HOSTS = hostSet(IMMVELA_URL)
const SNS_HOSTS = hostSet(SITE_URL)

export function middleware(req: NextRequest) {
  const host = (req.headers.get('host') ?? '').split(':')[0].toLowerCase()
  const { pathname } = req.nextUrl

  // ── On the Immvela domain: serve Immvela at the root ──────────────────────
  if (IMMVELA_HOSTS.has(host)) {
    if (pathname === '/robots.txt') {
      const url = req.nextUrl.clone()
      url.pathname = '/immvela/robots.txt'
      return NextResponse.rewrite(url)
    }
    if (pathname === '/sitemap.xml') {
      const url = req.nextUrl.clone()
      url.pathname = '/immvela/sitemap.xml'
      return NextResponse.rewrite(url)
    }
    if (pathname === '/llms.txt') {
      const url = req.nextUrl.clone()
      url.pathname = '/immvela/llms.txt'
      return NextResponse.rewrite(url)
    }
    if (pathname === '/' || pathname === '/de') {
      const url = req.nextUrl.clone()
      url.pathname = pathname === '/de' ? '/de/immvela' : '/immvela'
      return NextResponse.rewrite(url)
    }
    // The internal paths shouldn't be a second public URL on this domain — send
    // them to their canonical root.
    if (pathname === '/immvela' || pathname === '/de/immvela') {
      const url = req.nextUrl.clone()
      url.pathname = pathname === '/de/immvela' ? '/de' : '/'
      return NextResponse.redirect(url, 308)
    }
    return NextResponse.next()
  }

  // ── On the SNS domain: hand the old Immvela URLs over to immvela.com ───────
  if (SNS_HOSTS.has(host) && (pathname === '/immvela' || pathname === '/de/immvela')) {
    const dest = pathname === '/de/immvela' ? '/de' : '/'
    return NextResponse.redirect(`${IMMVELA_URL}${dest}`, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Page routes — skip Next internals, API routes, and static files.
    '/((?!_next/|api/|favicon\\.ico|.*\\.[\\w]+$).*)',
    // robots.txt/sitemap.xml/llms.txt are file-convention or route-handler
    // routes, not static files, but the pattern above's extension exclusion
    // skips them too — match explicitly.
    '/robots.txt',
    '/sitemap.xml',
    '/llms.txt',
  ],
}
