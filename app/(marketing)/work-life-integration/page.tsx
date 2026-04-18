import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BarChart3, Shield, Calendar, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Work-Life Integration — How to manage both on a single calendar',
  description:
    'Work-life balance implies two separate zones. Work-life integration puts both on the same calendar — visible, planned, and protected together. Here\'s how to build a calendar that holds work and life without sacrificing either.',
  alternates: { canonical: '/work-life-integration' },
  openGraph: {
    title: 'Work-Life Integration — Momenties',
    description: 'Work and personal life on one calendar — integrated, visible, and protected.',
    url: '/work-life-integration',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Calendar,
    title: 'Personal and work on the same calendar',
    desc: 'Two calendars that never talk to each other means double-booking, invisible conflicts, and a work week that expands into personal time without you seeing it. One calendar shows the whole picture — and the places where the two worlds collide.',
  },
  {
    icon: Shield,
    title: 'Personal commitments protected like meetings',
    desc: '"School pickup 3:15pm" is as non-negotiable as the board meeting. When it\'s on the calendar with the same structural weight as work events, colleagues see the constraint. It doesn\'t get overridden. It becomes a planning fact.',
  },
  {
    icon: BarChart3,
    title: 'Analytics show the actual ratio',
    desc: 'The subjective feeling of "I work too much" becomes measurable. Analytics shows hours per week on work, personal life, health, relationships, and rest. The ratio you want vs. the ratio you have. A number you can act on.',
  },
  {
    icon: Clock,
    title: 'Transition blocks between modes',
    desc: '"End of work — 5:30pm, shutdown ritual." A 15-minute shutdown block signals the transition from work mode to personal mode. The day doesn\'t blur into the evening. Both sides get genuine presence.',
  },
]

const INTEGRATION_PATTERNS = [
  {
    pattern: 'One calendar, color-coded domains',
    detail: 'Work events in one color. Personal in another. Health in a third. One view — all contexts. The week reveals balance or imbalance at a glance, without two separate calendars that never sync.',
  },
  {
    pattern: 'Hard stops as calendar events',
    detail: '"School pickup — 3:15pm, daily." "Partner dinner — 7pm fridays." "No-meeting window — after 5pm weekdays." Hard stops on the calendar communicate constraints before someone tries to book over them.',
  },
  {
    pattern: 'Personal projects get calendar time',
    detail: 'The book you\'re writing. The garden project. The language you\'re learning. If it doesn\'t have calendar time, it doesn\'t exist in your schedule — only in your guilt. Block the time. Make it visible.',
  },
  {
    pattern: 'Vacation and recovery as non-negotiable',
    detail: 'Vacation blocked on the calendar 6 months before it happens prevents it from being negotiated away. Recovery time after intense work periods isn\'t optional — it\'s planned. Protected like a product launch.',
  },
  {
    pattern: 'Weekly review shows the ratio',
    detail: 'Every Friday: analytics review. Work hours this week? Personal time? Health? The ratio is visible. Did work expand into personal time? Was there recovery? The data creates accountability — to yourself.',
  },
]

const INTEGRATION_ANALYTICS = [
  'Work hours per week — planned vs. actual',
  'Personal time percentage',
  'Health and fitness time',
  'Family and relationship time',
  'Rest and recovery hours',
  'Creative and personal project time',
  'Work-encroachment trend over weeks',
  'Weekend work rate',
]

export default function WorkLifeIntegrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Work-Life Integration"
        title={
          <>
            Both on one calendar.
            <br />
            <em className="not-italic text-gold">Neither sacrificed.</em>
          </>
        }
        lede="Work-life balance implies two zones that you switch between. Work-life integration puts both on the same calendar — visible to each other, planned together, and protected with equal weight. Here's how to build a calendar that holds work and personal life without collapsing one into the other."
        crumbs={[{ label: 'Work-Life Integration' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/work-life-balance"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Work-life balance
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How it works</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four ways Momenties supports work-life integration.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Five patterns</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Calendar habits that integrate work and life.</h2>
          </Reveal>
          <div className="space-y-3">
            {INTEGRATION_PATTERNS.map((item, i) => (
              <Reveal key={item.pattern} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-2">{item.pattern}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Integration analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties analytics shows across your whole life.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {INTEGRATION_ANALYTICS.map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                  <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Work and life integrated. Both visible. Both protected."
        subtitle="Integrated calendar, domain analytics, hard stop scheduling, and weekly review. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Work-life balance', href: '/work-life-balance' }}
      />
    </>
  )
}
