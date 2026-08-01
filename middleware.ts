import { NextResponse, type NextRequest } from 'next/server'
import { IMMVELA_URL, SITE_URL } from '@/lib/site'

/**
 * Immvela runs on its own domain (immvela.com) but is served from this same
 * Next.js deployment as the SNS site. Routing is by hostname:
 *
 *   • On immvela.com  → the /immvela pages are served at the domain root:
 *       immvela.com/         → renders /immvela
 *       immvela.com/de       → renders /de/immvela
 *       immvela.com/demo     → renders /immvela/demo
 *       immvela.com/de/demo  → renders /de/immvela/demo
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

/**
 * Every Immvela page, as `internal route → public path on immvela.com`. All
 * three rules below (root rewrite, canonical redirect, SNS handover) read from
 * this one map, so adding a page is one line here — miss it and the page is
 * reachable on immvela.com only at its internal /immvela/… path, with the SNS
 * domain still serving a second copy of it.
 *
 * `lib/immvela-nav.ts` is the client-side counterpart: it resolves links
 * *between* these pages to whichever shape is currently being served.
 */
const IMMVELA_PAGES: Record<string, string> = {
  '/immvela': '/',
  '/de/immvela': '/de',
  '/immvela/demo': '/demo',
  '/de/immvela/demo': '/de/demo',
}
const IMMVELA_ROUTE_FOR = new Map(Object.entries(IMMVELA_PAGES).map(([route, pub]) => [pub, route]))

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
    const route = IMMVELA_ROUTE_FOR.get(pathname)
    if (route) {
      const url = req.nextUrl.clone()
      url.pathname = route
      return NextResponse.rewrite(url)
    }
    // The internal paths shouldn't be a second public URL on this domain — send
    // them to their canonical root.
    const canonical = IMMVELA_PAGES[pathname]
    if (canonical) {
      const url = req.nextUrl.clone()
      url.pathname = canonical
      return NextResponse.redirect(url, 308)
    }
    return NextResponse.next()
  }

  // ── On the SNS domain: hand the old Immvela URLs over to immvela.com ───────
  if (SNS_HOSTS.has(host) && IMMVELA_PAGES[pathname]) {
    return NextResponse.redirect(`${IMMVELA_URL}${IMMVELA_PAGES[pathname]}`, 301)
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
