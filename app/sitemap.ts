import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Marketing pages exist in English (default, unprefixed) and German (/de),
  // each declaring the other as an hreflang alternate.
  const bilingual = [
    { path: '', changeFrequency: 'monthly' as const, priority: 1 },
    { path: '/services', changeFrequency: 'monthly' as const, priority: 0.9 },
    // The /solutions section is gone — the HVAC/SHK line is discontinued and
    // real estate is Immvela, which has its own domain and its own sitemap.
    // Those URLs 301 to it (middleware.ts) and a sitemap must only list URLs
    // that answer 200, so listing a redirect here would be a crawl error.
    // Immvela itself isn't advertised here for the same reason.
    { path: '/team', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/contact', changeFrequency: 'yearly' as const, priority: 0.8 },
  ]

  const marketing: MetadataRoute.Sitemap = bilingual.flatMap(
    ({ path, changeFrequency, priority }) => {
      const en = `${SITE_URL}${path}` || SITE_URL
      const de = `${SITE_URL}/de${path}`
      const languages = { en, de }
      return [
        { url: en, lastModified: now, changeFrequency, priority, alternates: { languages } },
        { url: de, lastModified: now, changeFrequency, priority, alternates: { languages } },
      ]
    }
  )

  const legal: MetadataRoute.Sitemap = [
    '/legal/imprint',
    '/legal/privacy',
    '/legal/terms',
  ].flatMap((path) => {
    const en = `${SITE_URL}${path}`
    const de = `${SITE_URL}/de${path}`
    const languages = { en, de }
    return [
      { url: en, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3, alternates: { languages } },
      { url: de, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3, alternates: { languages } },
    ]
  })

  return [...marketing, ...legal]
}
