import Link from 'next/link'
import { NewsletterForm } from './NewsletterForm'

function Icon({ d, viewBox = '0 0 24 24' }: { d: string; viewBox?: string }) {
  return (
    <svg viewBox={viewBox} aria-hidden="true" className="h-4 w-4 fill-current">
      <path d={d} />
    </svg>
  )
}

const SOCIAL_ICONS = {
  twitter:
    'M18.244 2H21l-6.52 7.44L22 22h-6.79l-5.31-6.77L3.74 22H1l6.98-7.97L1 2h6.92l4.79 6.24L18.244 2Zm-1.18 18h1.72L7.02 4h-1.8l11.844 16Z',
  github:
    'M12 .5A11.5 11.5 0 0 0 .5 12c0 5.09 3.3 9.4 7.86 10.92.58.1.78-.26.78-.56v-2.2c-3.2.7-3.88-1.38-3.88-1.38-.52-1.32-1.28-1.68-1.28-1.68-1.04-.7.08-.68.08-.68 1.16.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.26 3.4.98.1-.76.4-1.26.74-1.56-2.56-.3-5.26-1.28-5.26-5.68 0-1.26.44-2.28 1.18-3.08-.12-.28-.5-1.46.1-3.04 0 0 .96-.3 3.16 1.18a10.95 10.95 0 0 1 5.74 0c2.2-1.48 3.16-1.18 3.16-1.18.6 1.58.22 2.76.1 3.04.74.8 1.18 1.82 1.18 3.08 0 4.42-2.7 5.38-5.28 5.66.42.36.78 1.04.78 2.1v3.12c0 .3.2.66.8.56A11.5 11.5 0 0 0 12 .5Z',
  linkedin:
    'M20.447 20.452H16.9v-5.569c0-1.328-.023-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.362V9h3.412v1.561h.049c.477-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.113 20.452H3.558V9h3.555v11.452z',
  youtube:
    'M23.498 6.186a2.997 2.997 0 0 0-2.11-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.388.566a2.997 2.997 0 0 0-2.11 2.12A31.09 31.09 0 0 0 0 12a31.09 31.09 0 0 0 .502 5.814 2.997 2.997 0 0 0 2.11 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.388-.566a2.997 2.997 0 0 0 2.11-2.12A31.09 31.09 0 0 0 24 12a31.09 31.09 0 0 0-.502-5.814ZM9.75 15.568V8.432L15.818 12 9.75 15.568Z',
}

type FooterColumn = { title: string; links: { label: string; href: string; badge?: string }[] }

const COLUMNS: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Product tour', href: '/product' },
      { label: 'Pro', href: '/pro' },
      { label: 'Gift Momenties', href: '/gift' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Pricing calculator', href: '/pricing/calculator' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'For teams', href: '/teams' },
      { label: 'Enterprise', href: '/enterprise' },
      { label: 'Demo', href: '/demo' },
      { label: 'AI', href: '/ai' },
      { label: 'Templates', href: '/templates' },
      { label: 'Downloads', href: '/downloads' },
      { label: 'Mobile app', href: '/mobile', badge: 'Soon' },
      { label: 'For startups', href: '/startups' },
      { label: 'For students', href: '/education' },
      { label: 'Compare', href: '/compare' },
      { label: 'Scheduling links', href: '/schedule', badge: 'Q3' },
      { label: 'Switch to Momenties', href: '/switch' },
      { label: 'Changelog', href: '/changelog' },
      { label: 'Launch Week 01', href: '/launch-week-1', badge: 'New' },
      { label: 'Year in review', href: '/year-in-review' },
      { label: 'Roadmap', href: '/roadmap' },
      { label: 'Labs', href: '/labs', badge: 'Beta' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Manifesto', href: '/manifesto' },
      { label: 'Method', href: '/method' },
      { label: 'Uses', href: '/uses' },
      { label: 'Customers', href: '/customers' },
      { label: 'Wall of love', href: '/wall-of-love' },
      { label: 'Careers', href: '/careers', badge: 'Hiring' },
      { label: 'Press', href: '/press' },
      { label: 'Brand', href: '/brand' },
      { label: 'Design language', href: '/design' },
      { label: 'Investors', href: '/investors' },
      { label: 'Contact', href: '/contact' },
      { label: 'Affiliates', href: '/affiliates' },
      { label: 'Ambassadors', href: '/ambassadors' },
      { label: 'Partners', href: '/partners' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Newsletter', href: '/newsletter', badge: 'New' },
      { label: 'Use cases', href: '/use-cases' },
      { label: 'Help Center', href: '/help' },
      { label: 'Getting started', href: '/getting-started' },
      { label: 'Learn', href: '/learn', badge: 'New' },
      { label: 'Keyboard reference', href: '/keyboard' },
      { label: 'API', href: '/api', badge: 'Q3' },
      { label: 'Developers', href: '/developers' },
      { label: 'CLI', href: '/cli' },
      { label: 'API Docs', href: '/api-docs' },
      { label: 'Feedback', href: '/feedback' },
      { label: 'Community', href: '/community' },
      { label: 'Webinars', href: '/webinars' },
      { label: 'Podcast', href: '/podcast' },
      { label: 'Glossary', href: '/glossary' },
      { label: 'Status', href: '/status' },
      { label: 'Open metrics', href: '/open' },
      { label: 'Authors', href: '/authors' },
      { label: 'Sitemap', href: '/sitemap' },
      { label: 'Search', href: '/search' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Refund policy', href: '/refund' },
      { label: 'Cancel subscription', href: '/cancel' },
      { label: 'Terms', href: '/terms' },
      { label: 'Security', href: '/security' },
      { label: 'Report vulnerability', href: '/security/report' },
      { label: 'Trust center', href: '/trust' },
      { label: 'Subprocessors', href: '/subprocessors' },
      { label: 'Accessibility', href: '/accessibility' },
      { label: 'SLA', href: '/sla' },
      { label: 'Cookies', href: '/cookies' },
    ],
  },
]

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-[#0a0a0d] relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-8">
          <div className="col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2.5">
              <img src="/logo.png" alt="" className="h-7 w-7" />
              <span className="font-display text-lg font-semibold text-foreground">Momenties</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              The zero-friction AI calendar. Type it, speak it, snap it — it&apos;s scheduled.
            </p>
            <NewsletterForm source="footer" />
            <div className="flex gap-3 pt-1" aria-label="Social media">
              {[
                { d: SOCIAL_ICONS.twitter, href: 'https://twitter.com', label: 'X / Twitter' },
                { d: SOCIAL_ICONS.github, href: 'https://github.com', label: 'GitHub' },
                { d: SOCIAL_ICONS.linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { d: SOCIAL_ICONS.youtube, href: 'https://youtube.com', label: 'YouTube' },
              ].map(({ d, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-gold hover:border-gold/30 transition-colors"
                >
                  <Icon d={d} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                    >
                      {link.label}
                      {link.badge && (
                        <span className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider rounded-full bg-gold/15 text-gold border border-gold/20">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-muted-foreground/60">
            © {year} Momenties, Inc. · Built with care in a quiet corner of the internet.
          </p>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2 text-[11px] font-mono text-muted-foreground/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All systems operational
            </span>
            <Link href="/status" className="text-[11px] font-mono text-muted-foreground/60 hover:text-gold transition-colors">
              status →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
