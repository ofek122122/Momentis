import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BarChart3, Globe, Camera, Zap, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Consultants — Multi-client time clarity, zero friction',
  description:
    'Consultants juggle multiple clients, timezone hell, and precise time tracking. Momenties tracks client time automatically, handles timezone scheduling, and surfaces the analytics to bill accurately.',
  alternates: { canonical: '/for/consultants' },
  openGraph: {
    title: 'Momenties for Consultants',
    description: 'Multi-client time clarity, zero friction.',
    url: '/for/consultants',
    type: 'website',
  },
}

const PAINS = [
  {
    icon: BarChart3,
    problem: 'No clear picture of time per client until billing',
    fix: 'Analytics shows hours by client tag in real time. See ACME is at 80% of their monthly budget on day 15. Adjust or flag before you invoice.',
  },
  {
    icon: Globe,
    problem: 'Clients in multiple timezones — every scheduling takes mental math',
    fix: 'Momenties displays all times in your timezone, converts correctly for international slots. Scheduling links (Q3 2026) handle timezone conversion automatically for clients.',
  },
  {
    icon: Camera,
    problem: 'Workshop and conference agendas arrive as PDFs with a dozen sessions',
    fix: 'Snap the PDF. Every session appears on your calendar. Takes 30 seconds, not 30 minutes.',
  },
  {
    icon: Zap,
    problem: 'Context-switching between clients costs minutes of admin each time',
    fix: 'Voice-add meeting context on the go: "strategy call Deloitte project 2 hours." Zero friction logging, correct client attribution.',
  },
]

const WORKFLOW = [
  { time: 'Client kickoff', action: 'Snap the project timeline PDF. All milestones added. Share calendar link with client for scheduling (Q3 2026).' },
  { time: 'During client work', action: 'Voice: "client research McKinsey proposal 3 hours." Logged with client tag. Zero disruption to work.' },
  { time: 'End of week', action: 'Analytics: hours per client this week. Is McKinsey close to monthly cap? Do you have capacity for that KPMG ask?' },
  { time: 'Monthly billing', action: 'Export calendar data organized by client. Match with invoicing. Takes 20 minutes instead of 3 hours.' },
  { time: 'Quarterly', action: 'Trend view: which clients are growing their share? Where is your time going vs. where is the revenue?' },
]

export default function ForConsultantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Consultants"
        title={
          <>
            Multi-client clarity.
            <br />
            <em className="not-italic text-gold">Zero friction.</em>
          </>
        }
        lede="Consultants serving multiple clients need precise time attribution, clear scheduling across timezones, and fast event input between context switches. Momenties handles all of it."
        crumbs={[{ label: 'For Consultants' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/analytics"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Client analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Pro from $12/month</p>
      </PageHero>

      {/* Pain points */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What we solve</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four consultant calendar problems.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {PAINS.map((item, i) => (
              <Reveal key={item.problem} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <item.icon className="h-4 w-4 text-gold" />
                  </div>
                  <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-2">Problem</p>
                  <p className="text-sm text-muted-foreground mb-3">{item.problem}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/90 leading-relaxed">{item.fix}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Billing workflow */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Consulting workflow with Momenties.
            </h2>
          </Reveal>
          <div className="space-y-3">
            {WORKFLOW.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-24 shrink-0 pt-0.5 uppercase tracking-wide">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I have four clients across three timezones. The analytics tab finally gives me a number for what I already felt: Client C takes 30% of my time but 15% of my revenue. That conversation happened in the next monthly review.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">N</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Nadia K.</div>
                  <div className="text-xs text-muted-foreground">Strategy consultant, 8 years independent</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Know exactly where your time goes. Bill exactly what you earn."
        subtitle="Client analytics, AI input, and scheduling links. Pro trial."
        primary={{ label: 'Start free trial', href: '/login' }}
        secondary={{ label: 'See analytics', href: '/features/analytics' }}
      />
    </>
  )
}
