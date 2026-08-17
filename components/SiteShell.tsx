import { GeistMono } from 'geist/font/mono'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import BackgroundField from '@/components/BackgroundField'
import JsonLd from '@/components/JsonLd'
import { snsOrganizationNode } from '@/lib/schema'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

/**
 * Everything inside <body>, shared by both root layouts.
 *
 * There are two root layouts — app/(en) and app/(de) — because only a root
 * layout can render <html>, and the German pages need `lang="de-AT"` on it
 * rather than the `lang="en"` the single shared layout used to hardcode. This
 * component is what keeps that split from becoming two copies of the site
 * chrome that drift apart: the layouts differ in the <html> tag and their
 * metadata, and in nothing else.
 */
export const bodyClassName = `${GeistMono.variable} ${inter.variable} relative min-h-dvh bg-sns-bg font-sans text-sns-text antialiased`

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': [snsOrganizationNode()] }} />
      {/* Interactive neural flow-field — global animated background.
          Density is route-aware: dense on the homepage to feed the hero
          logo, sparse elsewhere. */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <BackgroundField />
      </div>

      <div className="grain-overlay" aria-hidden="true" />
      <div className="relative z-10">{children}</div>
      <Analytics />
    </>
  )
}
