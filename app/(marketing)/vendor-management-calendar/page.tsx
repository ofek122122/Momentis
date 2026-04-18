import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { RefreshCw, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Vendor Management Calendar — How to schedule contract reviews before renewal deadlines',
  description:
    'A vendor management calendar schedules contract review windows 60-90 days before renewal dates, places vendor performance reviews quarterly, and ensures renegotiation leverage is preserved before auto-renewal clauses activate. Most unfavorable vendor renewals are not caused by bad contracts — they are caused by missing the review window.',
  alternates: { canonical: '/vendor-management-calendar' },
  openGraph: {
    title: 'Vendor Management Calendar — Momenties',
    description: 'Schedule contract reviews before renewal deadlines — not after.',
    url: '/vendor-management-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: RefreshCw,
    title: 'Contract renewal windows placed 60-90 days before auto-renewal',
    desc: '"SaaS subscription renewal — 90 days prior review window, june." "Annual vendor contract — 60 days prior negotiation window, october." "Month-to-month vendor assessment — quarterly." Renewal review windows placed as calendar events when contracts are signed, not when auto-renewal notices arrive. The review happens before the leverage window closes — not after the invoice.',
  },
  {
    icon: Clock,
    title: 'Vendor performance review scheduled before renewal decision',
    desc: '"Q2 vendor performance review — SaaS stack, mid-june." "Annual vendor scorecard — Q4." "Monthly SLA review — first monday of each month." Performance reviews placed as recurring events before each renewal decision. Vendors who underperform have evidence against renewal. Vendors who overperform get renewal with minimal renegotiation friction. Performance data precedes the decision.',
  },
  {
    icon: BarChart3,
    title: 'Contract spend and compliance review calendar',
    desc: 'Vendor spend that is reviewed annually against budget often reveals 20-30% of contracts that are redundant, underutilized, or superseded. Monthly spend review: "Vendor spend review — last day of each month, 20 minutes." Annual contract audit: "Full vendor contract audit — Q4, before budget season." Spend visibility precedes budget planning — not follows it.',
  },
  {
    icon: Shield,
    title: 'Vendor security and compliance review windows',
    desc: '"Annual vendor SOC 2 report review — Q3." "Vendor data processing agreement audit — annually." "Third-party risk assessment — biennial." Vendor compliance reviews placed as recurring calendar events with lead time for follow-up requests. Security teams that review vendor compliance after an incident are not managing risk — they are documenting it.',
  },
]

const VENDOR_STEPS = [
  {
    step: 'Load all contract renewal dates in one pass',
    detail: '"Load every contract into the vendor calendar: renewal date, auto-renewal date, notice-required date, and contract value." One annual pass creates the full renewal calendar for the year. Renewal dates loaded in January for the full year — and next year\'s renewals pre-loaded in Q4. No vendor contract renews as a surprise when all renewal dates are on the calendar 12 months in advance.',
  },
  {
    step: 'Place review windows at contract signing — not renewal time',
    detail: '"New vendor contract signed — renewal review window placed 90 days before renewal date." Review windows placed when contracts are executed, not when renewal approaches. A contract signed in March with a December renewal gets a September review window placed in March. The review window is a consequence of signing the contract, not a reactive task when renewal pressure builds.',
  },
  {
    step: 'Schedule quarterly vendor performance reviews',
    detail: '"Quarterly vendor review — first monday of Q2, Q3, Q4, and Q1. 60-90 minutes per major vendor category." Performance reviews placed quarterly as standing calendar items. Review: SLA adherence, utilization rate, support responsiveness, competitor pricing benchmarks. Three quarters of performance data precede the annual renewal decision.',
  },
  {
    step: 'Place negotiation preparation windows before review',
    detail: '"Contract negotiation prep — 2 weeks before renewal review window." Negotiation preparation placed as a calendar block before the vendor review meeting. Pull competitor pricing, review SLA performance data, confirm current utilization, identify renegotiation points. Preparation happens before the call — not during it.',
  },
  {
    step: 'Schedule the annual vendor contract audit before budget season',
    detail: '"Full vendor contract audit — September, before Q4 budget planning." Annual audit placed before budget season. Review: all active contracts, renewal cadence, total vendor spend vs. budget, redundant contracts, underutilized licenses. Vendor rationalization decisions made before budget planning — not after budget is approved without consolidation opportunities.',
  },
  {
    step: 'Place new vendor onboarding milestones as calendar events',
    detail: '"New vendor: 30-day check-in, 90-day performance baseline, 6-month review." New vendor milestones placed at contract signing. 30-day check-in confirms setup is complete. 90-day baseline establishes performance expectations. 6-month review confirms vendor is meeting contractual commitments before year-end renewal decision is finalized.',
  },
]

const VENDOR_FAILURES = [
  { failure: 'Auto-renewal discovered after the fact', consequence: 'Contracts with 30-60 day notice requirements auto-renew when the notice window is missed. Teams that discover the auto-renewal after the renewal date have committed to another term without a renegotiation opportunity. The 90-day review window placed at contract signing prevents this — but only if it was placed at signing.' },
  { failure: 'Performance review happens at renewal, not quarterly', consequence: 'Annual vendor performance review conducted at renewal time suffers from recency bias and produces decisions based on the last 30 days, not the full year. Quarterly performance reviews accumulate objective data across four periods. Vendors know when renewal is approaching — quarterly reviews measure performance before they are motivated to perform.' },
  { failure: 'Vendor spend reviewed during budget season, not before it', consequence: 'Vendor consolidation opportunities identified during budget planning require removing contracts that were just renewed. A September vendor audit — before Q4 planning season — allows consolidation decisions to inform the budget rather than conflict with it. The audit must precede the plan.' },
  { failure: 'New vendor milestones not placed at contract signing', consequence: '30-day and 90-day vendor check-ins placed at signing become standing obligations. Check-ins placed reactively when problems emerge are post-mortems, not oversight. Vendors onboarded without structured milestones have no contractual performance baseline to reference at year-end renewal.' },
]

export default function VendorManagementCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Vendor Management Calendar"
        title={
          <>
            Renewal windows placed. Leverage preserved.
            <br />
            <em className="not-italic text-gold">No contract auto-renews without review.</em>
          </>
        }
        lede="Most unfavorable vendor renewals are not caused by bad contracts — they are caused by missing the 60-day notice window that preserved the right to renegotiate. A vendor management calendar places contract review windows 90 days before every renewal date, schedules quarterly performance reviews before decisions, and loads the full annual contract audit before budget season — so every renewal decision is made with current data and lead time."
        crumbs={[{ label: 'Vendor Management Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/budget-planning-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Budget planning calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties prevents missed renewal windows.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Six steps</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a vendor management calendar that preserves renewal leverage.</h2>
          </Reveal>
          <div className="space-y-3">
            {VENDOR_STEPS.map((item, i) => (
              <Reveal key={item.step} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-6 shrink-0 pt-0.5 text-center">{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">{item.step}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Common failures</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four vendor calendar patterns that produce preventable renewals.</h2>
          </Reveal>
          <div className="space-y-3">
            {VENDOR_FAILURES.map((item, i) => (
              <Reveal key={item.failure} delay={i * 40}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <h3 className="text-sm font-medium text-foreground mb-1">{item.failure}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.consequence}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Vendor analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for vendor management discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Contracts reviewed before renewal deadline rate',
                'Average lead time before renewal decision',
                'Quarterly performance review completion rate',
                'Auto-renewal contracts caught before notice window',
                'Vendor spend review completion rate',
                'New vendor milestone completion rate',
                'Annual vendor audit completion before budget season',
                'Contract notice window missed incidents',
              ].map((item) => (
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
        title="Renewal windows placed. Leverage preserved."
        subtitle="Contract review windows, quarterly performance reviews, and full annual vendor audit calendar. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Budget planning calendar', href: '/budget-planning-calendar' }}
      />
    </>
  )
}
