import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, Shield, BarChart3, Camera, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Lawyers — Track billable time without friction',
  description:
    'Lawyers need precise time tracking, client matter organization, and calendar control. Momenties adds AI event input for instant matter-time logging, analytics for billing accuracy, and focus protection for deep work.',
  alternates: { canonical: '/for/lawyers' },
  openGraph: {
    title: 'Momenties for Lawyers',
    description: 'Billable time tracking without friction.',
    url: '/for/lawyers',
    type: 'website',
  },
}

const PAINS = [
  {
    icon: Clock,
    problem: 'Reconstructing billable time at end of day loses 15–20% of hours',
    fix: 'Add matter time in real time: "client research ACME acquisition 2 hours." Categorized, timestamped, on your calendar. No reconstruction needed.',
  },
  {
    icon: BarChart3,
    problem: 'No visibility into time distribution across matters',
    fix: 'Analytics shows time by label (client/matter). See if you\'re approaching budget on any matter before it becomes a problem.',
  },
  {
    icon: Shield,
    problem: 'Client calls arrive during research and writing blocks',
    fix: 'Focus mode protects writing and research windows. Attendee warnings fire when someone tries to book over a protected block. The work happens.',
  },
  {
    icon: Camera,
    problem: 'Court schedules, deposition notices, and hearing dates arrive as PDFs',
    fix: 'Snap the document. Hearing dates, deposition slots, and filing deadlines extracted and added to your calendar automatically.',
  },
]

const BILLING_FLOW = [
  { time: 'Start of client call', action: 'Voice: "client call with ACME re: merger terms." 3 seconds. On calendar, categorized.' },
  { time: 'After research session', action: 'Type: "2.5 hours ACME acquisition research." Added as billable block with accurate start/end.' },
  { time: 'Receive court notice PDF', action: 'Snap the PDF. Hearing dates and deadlines auto-extracted to calendar.' },
  { time: 'End of week', action: 'Analytics: total hours per client. Compare to matter budgets. Flag overages before billing.' },
  { time: 'Monthly billing', action: 'Export calendar data (pro) for billing software. Accurate hours, organized by client.' },
]

export default function ForLawyersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Lawyers"
        title={
          <>
            Every billable hour
            <br />
            <em className="not-italic text-gold">captured in real time.</em>
          </>
        }
        lede="Lawyers who log time as it happens bill 15–20% more accurately than those who reconstruct at day's end. Momenties makes real-time logging instant — voice, text, or photo."
        crumbs={[{ label: 'For Lawyers' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free plan · Pro from $12/month</p>
      </PageHero>

      {/* Pain points */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What we solve</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four lawyer time problems.</h2>
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
              Real-time billing workflow.
            </h2>
          </Reveal>
          <div className="space-y-3">
            {BILLING_FLOW.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-28 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy callout */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border/50 p-6">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2">Client confidentiality and data handling</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Momenties sends only the text you input to AI parsing — never your full calendar or client details. Event text sent to Gemini for parsing is not used for model training (contractually prohibited). Calendar data is encrypted in transit and at rest. See our full privacy policy and AI ethics page for details.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/privacy" className="text-xs text-gold/70 hover:text-gold transition-colors">Privacy policy →</Link>
                    <Link href="/ai/ethics" className="text-xs text-gold/70 hover:text-gold transition-colors">AI ethics →</Link>
                    <Link href="/security" className="text-xs text-gold/70 hover:text-gold transition-colors">Security →</Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I started logging time in Momenties as events the moment work happens. My end-of-month billing is now 20 minutes instead of 3 hours, and I\'m capturing time I used to lose entirely.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">R</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Rachel F.</div>
                  <div className="text-xs text-muted-foreground">Corporate associate, mid-size firm</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Every hour you don't log is an hour you don't bill."
        subtitle="Real-time time tracking with AI speed. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See analytics', href: '/features/analytics' }}
      />
    </>
  )
}
