import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, BarChart3, Calendar, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Accountants — Tax season scheduling and client time tracking',
  description:
    'Accountants face brutal seasonal spikes, back-to-back client meetings, and strict deadline compliance. Momenties adds fast scheduling, deadline tracking, billable time analytics, and focus protection during crunch.',
  alternates: { canonical: '/for/accountants' },
  openGraph: {
    title: 'Momenties for Accountants',
    description: 'Tax season scheduling without the chaos.',
    url: '/for/accountants',
    type: 'website',
  },
}

const PAIN_POINTS = [
  {
    icon: Calendar,
    problem: 'Tax season: 60 client deadlines, 200 meetings, all in 10 weeks',
    fix: 'Tag every client engagement (e.g., "TaxClient", "Audit-BigCo"). Templates for recurring client work. Analytics shows hours by client — instantly see if one engagement is dominating your calendar.',
  },
  {
    icon: Clock,
    problem: 'Tracking billable hours per client across a scattered calendar',
    fix: 'Tag events with client codes. Analytics aggregates by tag. Weekly report: BigCo 12h, SmithEstate 6h, Audit Q1 4h. Export-ready time data without a separate tracker.',
  },
  {
    icon: Shield,
    problem: 'Regulatory deadlines that cannot slip (March 15, April 15, October 15)',
    fix: 'Voice-add deadlines the moment they appear: "Q1 filing deadline April 15 Smith Corp." On calendar. Tagged. Visible. No deadline falls through because it didn\'t get captured.',
  },
  {
    icon: BarChart3,
    problem: 'Seasonal burnout from no visibility into hours until it\'s too late',
    fix: 'Analytics shows weekly hours trend across months. See February creep toward 65-hour weeks before they arrive. Protect March by seeing January patterns.',
  },
]

const ACCOUNTANT_WORKFLOW = [
  { time: 'January', action: 'Template out all client tax prep windows. Apply to 30 clients in minutes. All deadlines tagged and visible.' },
  { time: 'Client call', action: '"W-2 review Smith Corp Thursday 2pm, 90 minutes." Voice-added before the call ends. Tagged to client.' },
  { time: 'Week 6 crunch', action: 'Analytics shows 58 hours logged this week. 80% in one client. Time to redistribute or push scope conversations.' },
  { time: 'April 14', action: 'All April 15 deadlines visible in tomorrow\'s view. Nothing missed. Daily Brief shows the full list.' },
  { time: 'Off-season', action: 'Analytics report: total hours per client for tax season. Use for billing reconciliation and next-year capacity planning.' },
]

export default function ForAccountantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Accountants"
        title={
          <>
            Tax season scheduling.
            <br />
            <em className="not-italic text-gold">No deadline left behind.</em>
          </>
        }
        lede="Accountants juggle dozens of client engagements, hard regulatory deadlines, and brutal seasonal spikes. Momenties tracks billable time by client, surfaces deadline conflicts, and protects focus blocks during crunch."
        crumbs={[{ label: 'For Accountants' }]}
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
            Time analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Pro from $12/month · GDPR-compliant</p>
      </PageHero>

      {/* Pain points */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What we solve</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four accounting calendar problems.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {PAIN_POINTS.map((item, i) => (
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

      {/* Accounting workflow */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Tax season with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {ACCOUNTANT_WORKFLOW.map((step, i) => (
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

      {/* Compliance note */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border/50 p-6">
              <h3 className="text-sm font-medium text-foreground mb-3">Client data and privacy</h3>
              <div className="space-y-2">
                {[
                  'Event titles and notes are not shared with third parties',
                  'AI parsing uses only the input string — your full calendar is never sent to Gemini',
                  'No advertising model — Momenties is subscription software',
                  'GDPR-compliant with data processing agreement available on request',
                  'Full privacy policy and data retention details at momenties.app/privacy',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs text-foreground/80">
                    <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Every client, every deadline, every hour — tracked."
        subtitle="Tag-based time analytics and AI scheduling for accounting workflows."
        primary={{ label: 'Start free trial', href: '/login' }}
        secondary={{ label: 'See analytics', href: '/features/analytics' }}
      />
    </>
  )
}
