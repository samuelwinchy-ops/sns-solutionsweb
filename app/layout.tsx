import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { Inter } from 'next/font/google'
import NeuralBackground from '@/components/NeuralBackground'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SNS Solutions',
  description:
    'AI-powered software studio. We build automation infrastructure for businesses that move fast.',
  icons: {
    icon: '/sns-icon.png',
  },
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
            particleCount={650}
          />
        </div>

        <div className="grain-overlay" aria-hidden="true" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
