import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { AI_CRAWLERS } from '@/lib/crawlers'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // Named explicitly rather than left to the wildcard. See lib/crawlers.ts:
      // several of these agents (Google-Extended, Applebot-Extended) are opt-out
      // controls that a wildcard rule doesn't speak to at all, and the rest
      // benefit from an unambiguous allow.
      { userAgent: AI_CRAWLERS, allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
