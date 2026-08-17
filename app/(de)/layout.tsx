import type { Metadata, Viewport } from 'next'
import SiteShell, { bodyClassName } from '@/components/SiteShell'
import { ROOT_VIEWPORT, rootMetadata } from '@/lib/metadata'
import '../globals.css'

/**
 * Root layout for the German site — everything under /de, including the German
 * Immvela page.
 *
 * This layout exists for one reason: `lang`. Only a root layout can render
 * <html>, so while the site had a single one the German pages were served as
 * `<html lang="en">` and compensated with a `<div lang="de">` around the
 * content. That fixed screen readers and nothing else — the document still
 * declared itself English to every crawler, translation prompt and language
 * heuristic that reads the root attribute.
 *
 * `de-AT`, not `de`: the copy is Austrian German in the formal Sie-form, and
 * the region is a genuine signal for a business selling into Vienna. It matches
 * the `de-AT` used in the JSON-LD (lib/schema.ts) and the `de_AT` Open Graph
 * locale, so all three now agree.
 */
export const metadata: Metadata = rootMetadata('de')
export const viewport: Viewport = ROOT_VIEWPORT

export default function GermanRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de-AT">
      <body className={bodyClassName}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
