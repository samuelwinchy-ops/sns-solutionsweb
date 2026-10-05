import { GeistMono } from 'geist/font/mono'
import {
  Archivo,
  Barlow_Semi_Condensed,
  Inter,
  Newsreader,
  Plus_Jakarta_Sans,
} from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import JsonLd from '@/components/JsonLd'
import { snsOrganizationNode } from '@/lib/schema'

// SNS: an editorial serif for headlines over a characterful grotesk for
// everything else. Immvela's pages keep the product's own faces — Inter for
// text and Barlow Semi Condensed for titles (its design system, §4.1).
const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
// QFUtool's display face, for its product tile only (qfutool.com's stylesheet).
const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['700'],
  display: 'swap',
})
const barlow = Barlow_Semi_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['600'],
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
export const bodyClassName = `${GeistMono.variable} ${newsreader.variable} ${jakarta.variable} ${inter.variable} ${barlow.variable} ${archivo.variable} relative min-h-dvh bg-sns-bg font-sans text-sns-text antialiased`

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': [snsOrganizationNode()] }} />
      <div className="relative z-10">{children}</div>
      <Analytics />
    </>
  )
}
