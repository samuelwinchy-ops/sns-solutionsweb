import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { Inter } from 'next/font/google'
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistMono.variable} ${inter.variable} bg-sns-bg font-sans text-sns-text antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
