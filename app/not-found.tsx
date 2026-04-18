import Link from 'next/link'
import { CalendarX, ArrowRight, Search } from 'lucide-react'
import { SiteHeader } from '@/components/marketing/SiteHeader'
import { SiteFooter } from '@/components/marketing/SiteFooter'

export default function NotFound() {
  const suggestions = [
    { label: 'Home', href: '/', desc: 'Start fresh' },
    { label: 'Features', href: '/features', desc: 'What Momenties does' },
    { label: 'Pricing', href: '/pricing', desc: 'Plans & pricing' },
    { label: 'Demo', href: '/demo', desc: 'Try it in browser' },
    { label: 'Help Center', href: '/help', desc: 'Answers & guides' },
    { label: 'Contact', href: '/contact', desc: 'Reach a human' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 flex items-center px-5 md:px-8 py-20 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 dot-grid opacity-30"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(50% 60% at 50% 30%, rgba(197,163,92,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto w-full text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 border border-gold/15 mb-6 float-y">
            <CalendarX className="h-7 w-7 text-gold/80" />
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/60 mb-3">
            404 · page not found
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-[0.95] tracking-tight">
            Nothing <em className="not-italic text-gold">scheduled</em><br />
            on this page.
          </h1>
          <p className="mt-6 text-muted-foreground max-w-md mx-auto leading-relaxed">
            The URL you followed doesn&apos;t lead anywhere — or maybe it used to and doesn&apos;t anymore.
            Either way, here are some places that do.
          </p>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors shadow-lg shadow-gold/10"
            >
              Take me home <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-3">
            {suggestions.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-xl border border-border lux-card p-4 text-left group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                    {s.label}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/50 group-hover:text-gold group-hover:translate-x-0.5 transition-all" />
                </div>
                <span className="text-xs text-muted-foreground">{s.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
