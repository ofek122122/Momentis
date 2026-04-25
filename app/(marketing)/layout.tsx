import { SiteHeader } from '@/components/marketing/SiteHeader'
import { SiteFooter } from '@/components/marketing/SiteFooter'

// Skip pre-rendering the 400+ marketing pages at build time.
// Pages are generated on first request and cached for 24 h (ISR).
// Drops cold build time from ~5 min to under 60 s.
export const revalidate = 86400

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main id="main-content" className="flex-1 animate-fade-up">{children}</main>
      <SiteFooter />
    </div>
  )
}
