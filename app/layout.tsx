import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google'
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
  title: {
    default: 'Calendro — Just say it. It\'s scheduled.',
    template: '%s | Calendro',
  },
  description: 'Zero-friction AI calendar. Type it, say it, snap it. Calendro parses your words and fills your Google Calendar automatically.',
  manifest: '/manifest.json',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Calendro',
  },
  formatDetection: { telephone: false },
  keywords: ['calendar app', 'AI calendar', 'voice calendar', 'Google Calendar', 'smart scheduling', 'natural language calendar'],
  authors: [{ name: 'Calendro' }],
  openGraph: {
    type: 'website',
    title: 'Calendro — Just say it. It\'s scheduled.',
    description: 'AI-powered calendar. Type, speak, or snap a photo to add events instantly.',
    siteName: 'Calendro',
    images: [{ url: '/logo.png', width: 512, height: 512 }],
  },
  twitter: {
    card: 'summary',
    title: 'Calendro — AI Calendar',
    description: 'Zero-friction AI calendar. Type, speak, or snap to schedule.',
  },
  robots: {
    index: true,
    follow: true,
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
