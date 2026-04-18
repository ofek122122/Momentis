import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BarChart3, Calendar, Clock, Shield, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Business Owners — Operations calendar, tax deadlines, and time analytics',
  description:
    'Business owners manage quarterly tax deadlines, payroll schedules, vendor contracts, team reviews, and client commitments simultaneously. Momenties tracks every operational deadline, shows time per business area, and surfaces tax and compliance deadlines 90 days early.',
  alternates: { canonical: '/for/business-owners' },
  openGraph: {
    title: 'Momenties for Business Owners',
    description: 'Operations calendar, tax deadlines, and business time analytics for owners.',
    url: '/for/business-owners',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Calendar,
    title: 'Tax and compliance deadline calendar',
    desc: '"Q1 estimated taxes — april 15." "Q2 estimated taxes — june 16." "Q3 estimated — september 15." "Q4 — january 15." "Business license renewal — march 31." "Annual report filing — april 1." All compliance deadlines on calendar. Nothing missed to penalties.',
  },
  {
    icon: Clock,
    title: 'Operational rhythm built in',
    desc: '"Payroll — every other friday." "Monthly bookkeeping review — first monday." "Vendor contract renewals — surfaced 90 days early." "Annual insurance renewal — november." "Employee reviews — Q4." Recurring operational cadences on calendar once, running forever.',
  },
  {
    icon: BarChart3,
    title: 'Time per business area analytics',
    desc: 'Tag every meeting, client call, and working session by business area: operations, sales, client delivery, finance, hiring. Analytics shows where owner time actually goes. The business that needs the most time vs. generates the most revenue? Now visible.',
  },
  {
    icon: Shield,
    title: 'Strategic planning calendar',
    desc: '"Quarterly business review — last week of quarter." "Annual planning retreat — december." "Mid-year strategy review — june." "Board or advisory board — quarterly." Strategic planning time blocked before the operational calendar fills every available slot.',
  },
]

const OWNER_WORKFLOW = [
  { time: 'Annual planning', action: 'All tax deadlines, payroll schedule, vendor renewal dates, insurance renewals, employee review cycles, and strategic planning dates placed on calendar at the year\'s start. The full operational year is visible before January ends.' },
  { time: 'Tax quarters', action: '"Q1 estimated tax — april 15." 90-day alert added. Bookkeeper meeting scheduled 3 weeks before to review Q1 financials. Payment amount estimated early — not discovered the day before the deadline.' },
  { time: 'Client work', action: '"Client project — discovery meeting, tuesday 10am." "Proposal deadline — thursday noon." "Kickoff — monday 9am." All client commitments tagged. Hours per client tracked. Which clients are profitable relative to time invested? Data on calendar.' },
  { time: 'Operations', action: '"Monthly team meeting — first monday, 9am." "Bookkeeping review — wednesday 2pm." "Vendor check-in — bi-weekly thursday." Operational cadences templated and repeating. Consistent rhythm without manually scheduling each occurrence.' },
  { time: 'Quarterly review', action: 'Analytics: time per business area for the quarter. Strategic goals vs. actual calendar — aligned? Which area consumed the most owner time? Next quarter\'s priorities blocked before the operational calendar claims those slots.' },
]

export default function ForBusinessOwnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Business Owners"
        title={
          <>
            Tax deadlines met.
            <br />
            <em className="not-italic text-gold">Business calendar managed.</em>
          </>
        }
        lede="Business owners manage quarterly tax deadlines, payroll schedules, vendor contracts, client commitments, team reviews, and strategic planning simultaneously. Momenties tracks every operational deadline, shows time per business area, and surfaces tax and compliance deadlines 90 days early — so the business runs on your calendar, not your anxiety."
        crumbs={[{ label: 'For Business Owners' }]}
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
            Business analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No client data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How business owners use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for business operations management.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {USE_CASES.map((uc, i) => (
              <Reveal key={uc.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <uc.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{uc.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Business calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Annual planning to quarterly review with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {OWNER_WORKFLOW.map((step, i) => (
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

      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I ran my business reactively for three years — I&apos;d find out about a tax deadline two weeks before it was due and scramble to get funds together. Once I put all four estimated tax dates, every license renewal, and every vendor contract expiration on Momenties, I stopped living in that constant low-grade panic. The business calendar is just... managed now.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">R</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Roberto F.</div>
                  <div className="text-xs text-muted-foreground">Owner, marketing services agency</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Deadlines tracked</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every business deadline on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Quarterly estimated tax payments',
                'Annual business tax filing deadlines',
                'Business license and permit renewals',
                'Vendor contract renewal dates',
                'Insurance policy renewals',
                'Payroll schedule — recurring',
                'Employee performance review cycle',
                'Annual state and local compliance filings',
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
        title="Tax deadlines met. Operations running. Business growing."
        subtitle="Compliance deadline tracking, operational calendar management, and business time analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Business analytics', href: '/features/analytics' }}
      />
    </>
  )
}
