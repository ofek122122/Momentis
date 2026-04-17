'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

type NavItem = { label: string; href: string; desc?: string }
type NavGroup = { label: string; items: NavItem[] }

const NAV: NavGroup[] = [
  {
    label: 'Product',
    items: [
      { label: 'Features', href: '/features', desc: 'Everything Calendro can do' },
      { label: 'Integrations', href: '/integrations', desc: 'Google, Apple, Slack & more' },
      { label: 'Demo', href: '/demo', desc: 'Try the AI in your browser' },
      { label: 'Templates', href: '/templates', desc: 'Ready-made weekly rhythms' },
      { label: 'Downloads', href: '/downloads', desc: 'Web, desktop, mobile, CLI' },
      { label: 'Pricing', href: '/pricing', desc: 'Simple, transparent plans' },
      { label: 'Enterprise', href: '/enterprise', desc: 'For teams & organizations' },
      { label: 'For startups', href: '/startups', desc: 'Free for seed-stage teams' },
      { label: 'For students', href: '/education', desc: 'Free with a .edu email' },
      { label: 'Compare', href: '/compare', desc: 'Side-by-side with alternatives' },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About', href: '/about', desc: 'Our story & mission' },
      { label: 'Manifesto', href: '/manifesto', desc: 'Eight theses we live by' },
      { label: 'Customers', href: '/customers', desc: 'Stories from the field' },
      { label: 'Careers', href: '/careers', desc: 'Join the team' },
      { label: 'Press', href: '/press', desc: 'Media kit & coverage' },
      { label: 'Investors', href: '/investors', desc: 'Our cap table' },
      { label: 'Contact', href: '/contact', desc: 'Get in touch' },
      { label: 'Partners', href: '/partners', desc: 'Agencies & accelerators' },
      { label: 'Security', href: '/security', desc: 'How we protect your data' },
      { label: 'Trust Center', href: '/trust', desc: 'Compliance & subprocessors' },
      { label: 'Accessibility', href: '/accessibility', desc: 'Our a11y commitment' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Blog', href: '/blog', desc: 'Ideas on time & AI' },
      { label: 'Use cases', href: '/use-cases', desc: 'For founders, students, parents' },
      { label: 'Help Center', href: '/help', desc: 'Guides & FAQs' },
      { label: 'Changelog', href: '/changelog', desc: 'What we shipped' },
      { label: 'Roadmap', href: '/roadmap', desc: 'What\'s coming next' },
      { label: 'API Docs', href: '/api-docs', desc: 'For developers' },
      { label: 'Status', href: '/status', desc: 'Live uptime' },
      { label: 'Community', href: '/community', desc: 'Join the conversation' },
      { label: 'Affiliates', href: '/affiliates', desc: 'Earn by referring' },
    ],
  },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(null)
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(null)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'backdrop-blur-xl bg-[#0c0c0f]/80 border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div ref={containerRef} className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Calendro home">
          <img src="/logo.png" alt="" className="h-7 w-7 transition-transform group-hover:scale-105" />
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            Calendro
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV.map((group) => (
            <div key={group.label} className="relative">
              <button
                type="button"
                onClick={() => setOpen(open === group.label ? null : group.label)}
                onMouseEnter={() => setOpen(group.label)}
                aria-expanded={open === group.label}
                aria-haspopup="menu"
                className={cn(
                  'inline-flex items-center gap-1 px-3 py-2 text-sm rounded-lg transition-colors',
                  open === group.label
                    ? 'text-foreground bg-white/5'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {group.label}
                <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', open === group.label && 'rotate-180')} />
              </button>
              {open === group.label && (
                <div
                  onMouseLeave={() => setOpen(null)}
                  className="absolute left-0 top-full pt-2 w-[360px] animate-fade-up"
                  role="menu"
                >
                  <div className="rounded-2xl border border-border bg-[#0f0f14]/95 backdrop-blur-xl p-2 shadow-2xl shadow-black/50">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-3 py-2.5 hover:bg-white/5 transition-colors group/item"
                        role="menuitem"
                      >
                        <div className="text-sm font-medium text-foreground group-hover/item:text-gold transition-colors">
                          {item.label}
                        </div>
                        {item.desc && (
                          <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden sm:inline-flex items-center h-8 px-3 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/login"
            className="hidden sm:inline-flex items-center h-8 px-4 text-sm font-medium rounded-full bg-gold text-[#0c0c0f] hover:bg-gold/90 transition-colors press"
          >
            Get started
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-foreground hover:bg-white/5"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-[#0c0c0f] max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-5 py-4 space-y-5">
            {NAV.map((group) => (
              <div key={group.label}>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-2 px-2">
                  {group.label}
                </p>
                <div className="space-y-0.5">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between rounded-lg px-2 py-2.5 text-sm text-foreground hover:bg-white/5"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-muted-foreground">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex gap-2 pt-2">
              <Link
                href="/login"
                className="flex-1 inline-flex items-center justify-center h-10 text-sm rounded-lg border border-border text-foreground"
              >
                Sign in
              </Link>
              <Link
                href="/login"
                className="flex-1 inline-flex items-center justify-center h-10 text-sm font-medium rounded-lg bg-gold text-[#0c0c0f]"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
