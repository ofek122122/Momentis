import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { OrganizationJsonLd, WebsiteJsonLd } from '@/components/marketing/StructuredData'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://momenties.app'
  ),
  title: {
    default: 'Momenties — Just say it. It\'s scheduled.',
    template: '%s | Momenties',
  },
  description: 'Zero-friction AI calendar. Type it, say it, snap it. Momenties parses your words and fills your Google Calendar automatically.',
  manifest: '/manifest.json',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Momenties',
  },
  formatDetection: { telephone: false },
  keywords: ['calendar app', 'AI calendar', 'voice calendar', 'Google Calendar', 'smart scheduling', 'natural language calendar'],
  authors: [{ name: 'Momenties' }],
  openGraph: {
    type: 'website',
    title: 'Momenties — Just say it. It\'s scheduled.',
    description: 'AI-powered calendar. Type, speak, or snap a photo to add events instantly.',
    siteName: 'Momenties',
    images: [{ url: '/logo.png', width: 512, height: 512 }],
  },
  twitter: {
    card: 'summary',
    title: 'Momenties — AI Calendar',
    description: 'Zero-friction AI calendar. Type, speak, or snap to schedule.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#0c0c0f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        {children}
        <Script id="sw-register" strategy="lazyOnload">{`
          if ('serviceWorker' in navigator && location.hostname !== 'localhost') {
            navigator.serviceWorker.register('/sw.js').catch(() => {});
          }
        `}</Script>
      </body>
    </html>
  )
}
