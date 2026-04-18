import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SLA — Service Level Agreement',
  description:
    'Momenties service level commitments: uptime guarantees, response times, and what happens when we miss a target.',
  alternates: { canonical: '/sla' },
  openGraph: {
    title: 'Momenties SLA',
    description: 'Our uptime and response-time commitments.',
    url: '/sla',
  },
}

const TIERS = [
  {
    plan: 'Free',
    uptime: 'Best-effort',
    sla: 'No SLA guarantee',
    supportTime: '5 business days',
    incidents: 'Status page only',
    highlight: false,
  },
  {
    plan: 'Pro',
    uptime: '99.9% / month',
    sla: 'Service credits for breaches',
    supportTime: '24 hours',
    incidents: 'Email notification',
    highlight: false,
  },
  {
    plan: 'Team',
    uptime: '99.9% / month',
    sla: 'Service credits for breaches',
    supportTime: '8 business hours',
    incidents: 'Email + Slack',
    highlight: true,
  },
  {
    plan: 'Enterprise',
    uptime: '99.95% / month (custom)',
    sla: 'Credits + escalation process',
    supportTime: '2 business hours',
    incidents: 'Dedicated channel + CSM',
    highlight: false,
  },
]

const CREDITS = [
  { breach: '< 99.9% (> 43.8 min downtime/month)', credit: '10% of monthly fee' },
  { breach: '< 99.5% (> 3.65 hr downtime/month)', credit: '25% of monthly fee' },
  { breach: '< 99.0% (> 7.3 hr downtime/month)', credit: '50% of monthly fee' },
]

export default function SLAPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Level Agreement"
        title={
          <>
            Uptime you can
            <br />
            <em className="not-italic text-gold">rely on.</em>
          </>
        }
        lede="Our commitments for availability, support response times, and what we do when we fall short. Plain language, no asterisks."
        crumbs={[{ label: 'SLA' }]}
      />

      {/* Tier comparison */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">By plan</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Commitments across tiers.
            </h2>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-5 bg-[#0f0f14] border-b border-border text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
                <div className="px-4 py-3">Plan</div>
                <div className="px-4 py-3">Uptime target</div>
                <div className="px-4 py-3">SLA</div>
                <div className="px-4 py-3">Support SLA</div>
                <div className="px-4 py-3">Incidents</div>
              </div>
              {TIERS.map((t, i) => (
                <div
                  key={t.plan}
                  className={`grid grid-cols-5 border-b border-border last:border-b-0 text-sm ${t.highlight ? 'bg-gold/[0.04]' : ''} ${i % 2 === 0 && !t.highlight ? '' : ''}`}
                >
                  <div className={`px-4 py-3.5 font-medium ${t.highlight ? 'text-gold' : 'text-foreground'}`}>{t.plan}</div>
                  <div className="px-4 py-3.5 text-foreground/85">{t.uptime}</div>
                  <div className="px-4 py-3.5 text-foreground/85">{t.sla}</div>
                  <div className="px-4 py-3.5 text-foreground/85">{t.supportTime}</div>
                  <div className="px-4 py-3.5 text-foreground/85">{t.incidents}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Uptime definition */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Definitions</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">What "uptime" means here.</h2>
          </Reveal>

          <div className="space-y-5 text-[15px] leading-[1.78] text-foreground/85 font-light">
            <Reveal>
              <p>
                Uptime is measured as the percentage of minutes in a calendar month during which the Momenties web app, API, and calendar sync are available and responding with &lt;2 second median latency. We use third-party uptime monitoring (Checkly) as the authoritative source, checked every 60 seconds from 6 global regions.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Scheduled maintenance windows announced with &gt;48 hours notice do not count against uptime. Emergency maintenance that requires taking the service down counts against uptime only if not announced within 15 minutes of starting.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Partial outages — where some features are degraded but the core app is reachable — are not counted as full downtime. We publish incident reports for all events &gt;10 minutes.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Service credits */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Service credits</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              What happens if we miss the target.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xl">
              Applies to Pro, Team, and Enterprise plans. Credits are applied to the next invoice. Requests must be made within 30 days of the month in which the breach occurred.
            </p>
          </Reveal>

          <Reveal>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-2 bg-[#0f0f14] border-b border-border text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
                <div className="px-5 py-3">Monthly uptime</div>
                <div className="px-5 py-3">Service credit</div>
              </div>
              {CREDITS.map((c, i) => (
                <div key={i} className={`grid grid-cols-2 border-b border-border last:border-b-0 ${i % 2 === 0 ? '' : 'bg-white/[0.015]'}`}>
                  <div className="px-5 py-3.5 text-sm text-foreground/85">{c.breach}</div>
                  <div className="px-5 py-3.5 text-sm font-medium text-gold">{c.credit}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={60}>
            <p className="mt-5 text-xs text-muted-foreground/70 leading-relaxed">
              To claim a service credit, email <a href="mailto:billing@momenties.app" className="text-gold hover:text-gold/80 transition-colors">billing@momenties.app</a> with the subject line &ldquo;SLA credit request&rdquo; within 30 days. Include the affected billing period. We will verify against our monitoring logs and apply credits within 5 business days.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What's excluded */}
      <section className="py-14 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">Exclusions</p>
            <h2 className="font-display text-xl font-bold text-foreground mb-5">What the SLA doesn&apos;t cover.</h2>
            <ul className="space-y-3">
              {[
                'Third-party outages beyond our control (Google Calendar, Deepgram, Gemini)',
                'Issues caused by your network, your device, or third-party browser extensions',
                'Force majeure events',
                'Planned maintenance announced ≥48 hours in advance',
                'Free-tier accounts',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <AlertCircle className="h-4 w-4 text-muted-foreground/50 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Live status */}
      <section className="py-14 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[11px] text-emerald-400/80">All systems operational</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link
                href="/status"
                className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors"
              >
                Live status page <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/trust"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Trust center <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/enterprise"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Enterprise SLA (custom) <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Need a custom SLA?"
        subtitle="Enterprise customers get custom uptime guarantees, dedicated CSMs, and contractual commitments."
        primary={{ label: 'Talk to Enterprise', href: '/enterprise' }}
        secondary={{ label: 'Current status', href: '/status' }}
      />
    </>
  )
}
