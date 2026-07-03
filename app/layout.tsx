import type { Metadata, Viewport } from 'next'
import { GeistMono } from 'geist/font/mono'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import NeuralBackground from '@/components/NeuralBackground'
import { SITE, SITE_URL } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.title,
    template: '%s | SNS Solutions',
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  keywords: [
    'AI software studio',
    'automation infrastructure',
    'software development',
    'Vienna',
    'AI pipelines',
    'data workflows',
    'SNS Solutions',
  ],
  alternates: { canonical: '/' },
  manifest: '/site.webmanifest',
  icons: {
    // The transparent SVG is declared first so modern browsers use it in the
    // tab (transparent background). Google Search and older browsers fall back
    // to the navy raster favicon.ico / PNGs below, keeping a dark-navy icon in
    // search results. ?v=3 busts aggressive favicon caching after this change.
    icon: [
      { url: '/icon.svg?v=3', type: 'image/svg+xml' },
      { url: '/favicon.ico?v=3', sizes: 'any' },
      { url: '/favicon-16x16.png?v=3', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png?v=3', type: 'image/png', sizes: '32x32' },
      { url: '/android-chrome-192x192.png?v=3', type: 'image/png', sizes: '192x192' },
      { url: '/android-chrome-512x512.png?v=3', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png?v=3', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'SNS Solutions — AI-powered software studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export const viewport: Viewport = {
  themeColor: '#06080F',
  colorScheme: 'dark',
}

// Site-wide structured data (Organization / LocalBusiness + WebSite) so search
// engines and AI answer engines can understand SNS as an entity.
const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#organization`,
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE_URL,
      email: SITE.email,
      telephone: SITE.phone,
      description: SITE.description,
      slogan: SITE.tagline,
      foundingDate: SITE.foundingDate,
      logo: `${SITE_URL}/sns-icon.png`,
      image: `${SITE_URL}/og.png`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.streetAddress,
        postalCode: SITE.address.postalCode,
        addressLocality: SITE.address.city,
        addressCountry: SITE.address.country,
      },
      areaServed: { '@type': 'Country', name: 'Austria' },
      founder: SITE.founders.map((name) => ({ '@type': 'Person', name })),
      knowsAbout: [
        'Custom software development',
        'AI automation',
        'AI agents',
        'Data pipelines',
        'IT consulting',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: SITE.services.map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE.name,
      description: SITE.description,
      inLanguage: 'en',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistMono.variable} ${inter.variable} relative min-h-dvh bg-sns-bg font-sans text-sns-text antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* Interactive neural flow-field — global animated background */}
        <div
          className="pointer-events-none fixed inset-0 z-0"
          aria-hidden="true"
        >
          <NeuralBackground
            colors={['#6366f1', '#3b82f6', '#22d3ee', '#818cf8']}
            fadeColor="#06080f"
            trailOpacity={0.14}
            particleCount={340}
          />
        </div>

        <div className="grain-overlay" aria-hidden="true" />
        <div className="relative z-10">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
