import type { Metadata, Viewport } from 'next'
import SiteShell, { bodyClassName } from '@/components/SiteShell'
import { ROOT_VIEWPORT, rootMetadata } from '@/lib/metadata'
import '../globals.css'

/**
 * Root layout for the English site (and for the English Immvela page, which is
 * served from immvela.com's root — see middleware.ts).
 *
 * Its only differences from app/(de)/layout.tsx are the `lang` attribute and
 * the locale passed to rootMetadata; everything inside <body> comes from
 * <SiteShell />. A route group doesn't affect the URL, so these pages still
 * live at /, /services, /solutions, … exactly as before.
 */
export const metadata: Metadata = rootMetadata('en')
export const viewport: Viewport = ROOT_VIEWPORT

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={bodyClassName}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
