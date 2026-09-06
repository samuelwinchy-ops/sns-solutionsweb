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
 * It also rewrites the crawler/answer-engine files — /robots.txt, /sitemap.xml,
 * /llms.txt and /llms-full.txt — on immvela.com to Immvela's own versions under
 * app/immvela/, since otherwise they'd fall through to the root app/robots.ts /
 * app/sitemap.ts / app/llms.txt / app/llms-full.txt, which all describe the SNS
 * domain. See IMMVELA_AGENT_FILES below.
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

/**
 * Immvela's own legal documents, a different shape from IMMVELA_PAGES above and
 * so with their own rule. Two of them: the privacy policy, and — since the
 * 2026-09-05 split, where `immvela.com` is the landing page and
 * `app.immvela.com` is the product and nothing legal belongs on the product —
 * the data-deletion instructions the app used to serve itself.
 *
 * `app.immvela.com/privacy` 307s to `www.immvela.com/legal/privacy`, and every
 * platform review form (Meta, TikTok, LinkedIn, Google/YouTube) fetches that
 * URL and checks it describes the app in front of the reviewer. Without this
 * rewrite the path falls through to app/(en)/legal/privacy — the SNS policy,
 * served byte-identically on both domains and canonicalising to
 * sns-austria.com, i.e. telling every crawler the real document belongs to a
 * differently-branded company. See the page's own header comment.
 *
 * Two public paths, one document: the page is bilingual (German first), so
 * /de/legal/privacy renders the same file rather than a German translation of
 * it, and both declare the same canonical. That is why this is a Set mapping
 * onto a single route and not a two-way map like IMMVELA_PAGES.
 *
 * ⚠️ Only PRIVACY is Immvela's own. `/legal/imprint` and `/legal/terms` stay
 * shared with the SNS site on purpose — the imprint names SNS Software
 * Solutions GmbH as media owner of both domains (it says so in its own text),
 * and the terms already govern both by name. Duplicating either would buy a
 * second document to keep current and no reviewer-facing benefit; privacy is
 * the only one whose subject is the app itself.
 */
const IMMVELA_LEGAL_ROUTE_FOR: Record<string, string> = {
  '/legal/privacy': '/immvela/legal/privacy',
  '/de/legal/privacy': '/immvela/legal/privacy',
  '/legal/data-deletion': '/immvela/legal/data-deletion',
  '/de/legal/data-deletion': '/immvela/legal/data-deletion',
}
const IMMVELA_LEGAL_CANONICAL: Record<string, string> = {
  '/immvela/legal/privacy': '/legal/privacy',
  '/immvela/legal/data-deletion': '/legal/data-deletion',
}

/**
 * The machine-readable files every domain serves at its own root: two for
 * crawlers, two for answer engines (llmstxt.org). On immvela.com each is
 * rewritten to its /immvela/… counterpart. Adding one means adding it here
 * *and* to `config.matcher` below — the matcher's extension exclusion skips
 * dotted paths, so an unlisted file never reaches this middleware at all and
 * silently serves the SNS version on immvela.com.
 */
const IMMVELA_AGENT_FILES = new Set(['/robots.txt', '/sitemap.xml', '/llms.txt', '/llms-full.txt'])

/**
 * The retired /solutions section, as `old SNS path → path on immvela.com`.
 *
 * SNS used to sell two product lines — HVAC/SHK and real estate — from a shared
 * /solutions catalogue. The HVAC line is discontinued and real estate is the
 * whole focus now, which leaves the catalogue with one item that already has a
 * better home on its own domain, so the section is gone rather than kept as a
 * one-entry index.
 *
 * These are 301s, not deletions: the URLs were in the sitemap and are the kind
 * a search engine has already indexed and a proposal has already linked to.
 * Letting them 404 throws away whatever authority they earned and greets a real
 * visitor with a dead end; pointing them at the product that replaced them
 * passes both along. Keep them indefinitely — a redirect costs nothing and
 * there is no expiry date on an old link.
 */
const RETIRED_TO_IMMVELA: Record<string, string> = {
  '/solutions': '/',
  '/solutions/hvac': '/',
  '/solutions/hvac/waitlist': '/',
  // The nearest live equivalent of the old inbound-agent demo is the module
  // walkthrough, not the Immvela home page.
  '/solutions/demo': '/demo',
  '/de/solutions': '/de',
  '/de/solutions/hvac': '/de',
  '/de/solutions/hvac/waitlist': '/de',
  '/de/solutions/demo': '/de/demo',
}

export function middleware(req: NextRequest) {
  const host = (req.headers.get('host') ?? '').split(':')[0].toLowerCase()
  const { pathname } = req.nextUrl

  // Ahead of the host branches: these routes no longer exist on any host, so
  // they'd 404 everywhere — including on localhost and preview deployments,
  // where the rest of this file deliberately stays out of the way.
  const retired = RETIRED_TO_IMMVELA[pathname]
  if (retired) {
    return NextResponse.redirect(`${IMMVELA_URL}${retired === '/' ? '' : retired}`, 301)
  }

  // ── On the Immvela domain: serve Immvela at the root ──────────────────────
  if (IMMVELA_HOSTS.has(host)) {
    // Each of these has an SNS-domain counterpart at the same public path, so
    // without the rewrite immvela.com would serve the SNS one and describe the
    // wrong product.
    if (IMMVELA_AGENT_FILES.has(pathname)) {
      const url = req.nextUrl.clone()
      url.pathname = `/immvela${pathname}`
      return NextResponse.rewrite(url)
    }
    // Ahead of the IMMVELA_PAGES rules: the legal documents, whose public
    // paths (/legal/…, /de/legal/…) are not in that map.
    const legalRoute = IMMVELA_LEGAL_ROUTE_FOR[pathname]
    if (legalRoute) {
      const url = req.nextUrl.clone()
      url.pathname = legalRoute
      return NextResponse.rewrite(url)
    }
    // The internal paths shouldn't be a second public URL on this domain.
    const legalCanonical = IMMVELA_LEGAL_CANONICAL[pathname]
    if (legalCanonical) {
      const url = req.nextUrl.clone()
      url.pathname = legalCanonical
      return NextResponse.redirect(url, 308)
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

  // Same handover for the Immvela privacy route: on the SNS domain it would
  // otherwise render a second, Immvela-branded privacy policy alongside SNS's
  // own at /legal/privacy. Note this is the INTERNAL path only — the SNS
  // domain's own /legal/privacy is untouched and keeps serving SNS's policy.
  if (SNS_HOSTS.has(host) && IMMVELA_LEGAL_CANONICAL[pathname]) {
    return NextResponse.redirect(`${IMMVELA_URL}${IMMVELA_LEGAL_CANONICAL[pathname]}`, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Page routes — skip Next internals, API routes, and static files.
    '/((?!_next/|api/|favicon\\.ico|.*\\.[\\w]+$).*)',
    // These are file-convention or route-handler routes, not static files, but
    // the pattern above's extension exclusion skips them too — match
    // explicitly. Keep in step with IMMVELA_AGENT_FILES.
    '/robots.txt',
    '/sitemap.xml',
    '/llms.txt',
    '/llms-full.txt',
  ],
}
