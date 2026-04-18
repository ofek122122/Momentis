import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/marketing/Reveal'
import { SiteFooter } from '@/components/marketing/SiteFooter'
import { SiteHeader } from '@/components/marketing/SiteHeader'
import { CheckCircle2, ArrowRight, Keyboard, Mic, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'You\'re in — Welcome to Momenties',
  description: 'Your account is ready. Here\'s how to get the most out of Momenties in the first five minutes.',
  robots: { index: false },
}

const NEXT_STEPS = [
  {
    step: '01',
    title: 'Add your first event',
    desc: 'Type anything in the input bar — "dentist friday 3pm" or "standup every weekday 9am." Just say it.',
    cta: 'Open the app',
    href: '/calendar',
    icon: ArrowRight,
  },
  {
    step: '02',
    title: 'Connect Google Calendar',
    desc: 'Two-way sync with your existing Google Calendar. Takes 30 seconds. Settings → Calendars → Connect Google.',
    cta: 'Go to settings',
    href: '/settings',
    icon: ArrowRight,
  },
  {
    step: '03',
    title: 'Try voice add',
    desc: 'Hold the mic button in the input bar and speak an event. Deepgram transcribes it; the parser does the rest.',
    cta: 'Learn more',
    href: '/product',
    icon: Mic,
  },
  {
    step: '04',
    title: 'Learn the shortcuts',
    desc: 'N to add, T for today, J/K to move days, / for search. Two minutes to learn, years of faster scheduling.',
    cta: 'See all shortcuts',
    href: '/keyboard',
    icon: Keyboard,
  },
]

const RESOURCES = [
  { title: 'Quick-start guide', href: '/learn', icon: BookOpen, desc: 'An hour from sign-up to power user' },
  { title: 'Help center', href: '/help', icon: BookOpen, desc: 'Every question, answered' },
  { title: 'Product tour', href: '/product', icon: ArrowRight, desc: 'What all the pieces do' },
  { title: 'Keyboard reference', href: '/keyboard', icon: Keyboard, desc: 'Print-ready cheatsheet' },
]

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 py-16 px-5 md:px-8 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(50% 60% at 50% 0%, rgba(197,163,92,0.10) 0%, transparent 65%)',
          }}
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Confirmation */}
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/25 mb-6">
                <CheckCircle2 className="h-8 w-8 text-emerald-400" />
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
                You&apos;re in
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
                Welcome to Momenties.
              </h1>
              <p className="mt-4 text-muted-foreground max-w-md mx-auto leading-relaxed">
                Your account is live. The calendar that understands you is one click away.
              </p>
              <div className="mt-8">
                <Link
                  href="/calendar"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/15"
                >
                  Open your calendar <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* First 5 minutes */}
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-foreground tracking-tight mb-8 text-center">
              First five minutes.
            </h2>
          </Reveal>

          <div className="space-y-4 mb-16">
            {NEXT_STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 50}>
                <div className="flex items-start gap-5 rounded-xl border border-border lux-card p-5">
                  <div className="font-mono text-2xl font-bold text-gold/25 shrink-0 w-8">{s.step}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                  <Link
                    href={s.href}
                    className="shrink-0 inline-flex items-center gap-1.5 h-8 px-4 rounded-full border border-border text-xs text-muted-foreground hover:text-gold hover:border-gold/30 transition-colors"
                  >
                    {s.cta} <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Resources */}
          <Reveal>
            <h2 className="font-display text-xl font-bold text-foreground tracking-tight mb-5">
              When you have a few minutes more.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 mb-16">
            {RESOURCES.map((r, i) => (
              <Reveal key={r.href} delay={(i % 2) * 50}>
                <Link
                  href={r.href}
                  className="group block rounded-xl border border-border p-4 hover:border-gold/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                      {r.title}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-gold group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
                  </div>
                  <span className="text-xs text-muted-foreground">{r.desc}</span>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Footer note */}
          <Reveal>
            <div className="text-center border-t border-border pt-10">
              <p className="text-sm text-muted-foreground">
                Questions? Email{' '}
                <a href="mailto:hello@momenties.app" className="text-gold hover:text-gold/80 transition-colors">
                  hello@momenties.app
                </a>
                {' '}or visit the{' '}
                <Link href="/help" className="text-gold hover:text-gold/80 transition-colors">
                  help center
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
