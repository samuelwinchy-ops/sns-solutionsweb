import { NextResponse, type NextRequest } from 'next/server'
import { IMMVELA_URL, IMMVELA_MIGRATED } from '@/lib/site'

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
 *   • On any other host (the SNS site) → the old /immvela URLs 301 to immvela.com
 *     so links and SEO consolidate on the new home.
 *
 * The SNS→Immvela redirect is gated behind IMMVELA_MIGRATED (the shared flag in
 * lib/site, driven by NEXT_PUBLIC_IMMVELA_MIGRATED). Deploy this file any time:
 * immvela.com starts working as soon as the domain is added in Vercel, while the
 * SNS /immvela page keeps working untouched. Once immvela.com is verified live,
 * set NEXT_PUBLIC_IMMVELA_MIGRATED=1 (Vercel → Env Vars) and redeploy to switch
 * the handover on — the same flag also repoints the SNS site's links straight at
 * immvela.com. Unset it and redeploy to roll back.
 */

// Apex + www of the dedicated Immvela domain. Vercel redirects www → apex, but
// both are matched so the rewrite is robust regardless.
const IMMVELA_HOST = new URL(IMMVELA_URL).host // e.g. "immvela.com"
const IMMVELA_HOSTS = new Set([IMMVELA_HOST, `www.${IMMVELA_HOST}`])

export function middleware(req: NextRequest) {
  const host = (req.headers.get('host') ?? '').split(':')[0].toLowerCase()
  const { pathname } = req.nextUrl

  // ── On the Immvela domain: serve Immvela at the root ──────────────────────
  if (IMMVELA_HOSTS.has(host)) {
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
  if (IMMVELA_MIGRATED && (pathname === '/immvela' || pathname === '/de/immvela')) {
    const dest = pathname === '/de/immvela' ? '/de' : '/'
    return NextResponse.redirect(`${IMMVELA_URL}${dest}`, 301)
  }

  return NextResponse.next()
}

export const config = {
  // Page routes only — skip Next internals, API routes, and static files.
  matcher: ['/((?!_next/|api/|favicon\\.ico|.*\\.[\\w]+$).*)'],
}
