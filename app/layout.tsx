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
    template: '%s — SNS Solutions',
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
