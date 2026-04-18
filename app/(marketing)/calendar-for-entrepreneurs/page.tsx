import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BarChart3, Shield, Zap, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendar for Entrepreneurs — How founders use their calendar differently',
  description:
    'Entrepreneurs wear every hat simultaneously. The calendar is how they prioritize ruthlessly, protect building time, track where hours go across customers, investors, and team, and avoid drowning in meetings.',
  alternates: { canonical: '/calendar-for-entrepreneurs' },
  openGraph: {
    title: 'Calendar for Entrepreneurs — Momenties',
    description: 'How founders protect building time and track where hours go.',
    url: '/calendar-for-entrepreneurs',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Shield,
    title: 'Building time protected like a meeting',
    desc: 'Founders who don\'t block building time find their calendar fills with meetings. The product doesn\'t get built between the gaps. Block product work the same way you\'d block an investor call — because it\'s more important.',
  },
  {
    icon: BarChart3,
    title: 'Time by area: customers, team, investors, building',
    desc: 'Tag every event: customer, team, investor, recruiting, product, admin. Weekly analytics shows the split. If you\'re spending 60% on team management and 10% on customers at a stage that requires the opposite, the data shows it.',
  },
  {
    icon: Zap,
    title: 'Capture at entrepreneur speed',
    desc: '"Coffee with Sarah Chen tuesday 8am." "Investor demo thursday 3pm, deck review prep 2pm." "Product sprint planning monday 10am 2 hours." Voice-add between meetings. On calendar before the taxi arrives.',
  },
  {
    icon: Clock,
    title: 'Quarterly and OKR milestone tracking',
    desc: '"Q2 ends june 30." "Series A close target july 15." "Product launch september." Strategic milestones on calendar. The quarter doesn\'t sneak up when the end date has been visible for 90 days.',
  },
]

const FOUNDER_FRAMEWORK = [
  { area: 'Building', target: '40%', description: 'The work that made you start the company. Protected in the morning before the world wants your attention.' },
  { area: 'Customers', target: '25%', description: 'Sales calls, customer success, feedback sessions. The revenue signal that tells you if you\'re building the right thing.' },
  { area: 'Team', target: '20%', description: '1:1s, recruiting, culture. The multiplier. More valuable per hour than most other use of time.' },
  { area: 'Investors/Board', target: '10%', description: 'Updates, fundraising, board prep. Batched and templated to minimize context switch cost.' },
  { area: 'Admin', target: '5%', description: 'Legal, finance, ops. Delegated as fast as possible. What remains: blocked weekly, not scattered through the day.' },
]

const FOUNDER_WEEK = [
  { time: 'Monday AM', action: 'Weekly planning: review OKR progress, block product time for the week before anything else gets scheduled.' },
  { time: 'Mon-Wed AM', action: 'Product/building blocks, 9am-1pm, Focus mode. The calendar shows "busy." Meeting requests route to afternoons.' },
  { time: 'Mon-Thu PM', action: 'Customer calls, team 1:1s, investor meetings. Voice-added as they\'re confirmed. Analytics tracks hours per category.' },
  { time: 'Friday', action: 'Weekly review: where did time actually go? Analytics shows intent vs. reality. Adjust next week\'s blocks accordingly.' },
  { time: 'Quarterly', action: 'Strategic calendar review: time per area vs. target percentages. Are you spending like a seed-stage or Series A company?' },
]

export default function CalendarForEntrepreneursPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar for Entrepreneurs"
        title={
          <>
            Build more.
            <br />
            <em className="not-italic text-gold">Meet less.</em>
          </>
        }
        lede="Entrepreneurs are the sum of their time allocation decisions. The calendar is where those decisions get made — or get made for them. Founders who use their calendar deliberately protect building time, track where hours go across every role they play, and structure the week around what actually moves the company."
        crumbs={[{ label: 'Calendar for Entrepreneurs' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/founders"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            For founders
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How founders use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four calendar tools for company builders.</h2>
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

      {/* Time allocation framework */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Time allocation</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A framework for founder time allocation.</h2>
          </Reveal>
          <div className="space-y-3">
            {FOUNDER_FRAMEWORK.map((item, i) => (
              <Reveal key={item.area} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <div className="shrink-0 text-right w-24">
                    <p className="text-sm font-medium text-foreground">{item.area}</p>
                    <p className="font-mono text-xs text-gold/70">{item.target}</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder week */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Founder week structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A founder's week with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {FOUNDER_WEEK.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-24 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Build more. Track where the time goes."
        subtitle="Deep work protection, time allocation analytics, and voice scheduling. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'For founders', href: '/for/founders' }}
      />
    </>
  )
}
