import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Compliance Officers — Regulatory deadlines, CCEP certification, and audit calendar',
  description:
    'Compliance officers manage regulatory filing deadlines, CCEP or other professional certification requirements, internal audit schedules, training delivery calendars, and policy review cycles simultaneously. Momenties tracks CCE credits, surfaces regulatory deadlines early, and manages the compliance calendar.',
  alternates: { canonical: '/for/compliance-officers' },
  openGraph: {
    title: 'Momenties for Compliance Officers',
    description: 'Regulatory deadlines, CCEP certification, and compliance audit calendar management.',
    url: '/for/compliance-officers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CCEP or CRCM certification and CCE tracking',
    desc: 'Tag every professional development activity toward CCEP, CRCM, CAMS, or other compliance certification. "SCCE CCE credits — 20 per 2-year cycle." "CRCM continuing education — banking regulatory topics." Each certification tracked separately per its own cycle and category requirements.',
  },
  {
    icon: Clock,
    title: 'Regulatory filing deadline calendar',
    desc: '"SAR filing — 30-day window from detection." "Annual privacy notice distribution — january 31." "BSA/AML model validation — annual, september." "GDPR data audit — quarterly." "Exam preparation materials — 4 weeks before examination." Every regulatory deadline with advance visibility.',
  },
  {
    icon: BarChart3,
    title: 'Compliance function time analytics',
    desc: 'Tag every meeting and working session by compliance function: regulatory exams, training delivery, policy review, monitoring and testing, reporting. Analytics shows hours per function. Which compliance activities are consuming the most bandwidth relative to risk?',
  },
  {
    icon: Users,
    title: 'Training delivery and policy review calendar',
    desc: '"Annual compliance training — all employees, Q1." "New hire compliance orientation — first day of employment." "Policy review cycle — annual, by policy category." "Risk assessment — semi-annual." All compliance program deliverables on calendar with preparation time blocked.',
  },
]

const CO_WORKFLOW = [
  { time: 'Annual planning', action: 'All regulatory filing deadlines, examination cycles, policy review dates, annual training delivery windows, and CCEP recertification milestones on calendar at year start. Compliance calendar visible before the first regulatory request arrives.' },
  { time: 'Regulatory exams', action: '"Regulatory examination — estimated Q3, prep starts april." Backwards-planned preparation blocks added: document review 8 weeks prior, mock exam walkthrough 4 weeks prior, materials package complete 3 weeks prior. Examinations are projects.' },
  { time: 'CCE credits', action: '"SCCE compliance and ethics institute — october 14-17." CCE credits by category tagged. 2-year cycle counter updates. Compliance webinar series tagged and logged monthly. No scramble to find 20 CCEs in the final months of the cycle.' },
  { time: 'Training delivery', action: '"Annual compliance training — Q1, all 200 employees." Training completion tracking window blocked: 6 weeks for completion, reminder schedule built, manager reporting block added week 4. 100% completion before the deadline.' },
  { time: 'Monitoring cycle', action: '"Monthly compliance monitoring review — first tuesday." "Quarterly risk assessment — last week of quarter." "Annual testing plan completion — december." Compliance monitoring rhythm templated and recurring. Consistent cadence documented for regulators.' },
]

export default function ForComplianceOfficersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Compliance Officers"
        title={
          <>
            No regulatory deadline missed.
            <br />
            <em className="not-italic text-gold">Certification current.</em>
          </>
        }
        lede="Compliance officers manage regulatory filing deadlines, professional certification requirements, internal audit schedules, annual training delivery, and policy review cycles simultaneously. Momenties tracks CCE credits toward recertification, surfaces regulatory deadlines 90 days early, and manages the full compliance calendar in one view."
        crumbs={[{ label: 'For Compliance Officers' }]}
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
            Compliance analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No regulatory data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How compliance officers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for compliance program management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Compliance calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Annual planning to examination readiness with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {CO_WORKFLOW.map((step, i) => (
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
                &ldquo;I manage compliance for a regional bank with 15+ regulatory deadlines per quarter. Before Momenties, I had a giant compliance calendar spreadsheet that was always slightly out of date. Now every deadline is in my calendar with 90-day alerts and backwards-planned preparation blocks. When examiners come in, I can show them a documented, managed program — not a firefighting operation.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">V</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Valerie S., CRCM, CCEP</div>
                  <div className="text-xs text-muted-foreground">Chief Compliance Officer, regional bank</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Compliance deadlines tracked</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every compliance obligation on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CCE credits by category — per certification cycle',
                'CCEP / CRCM / CAMS recertification deadlines',
                'Regulatory filing and reporting deadlines',
                'Examination preparation timelines',
                'Annual compliance training delivery window',
                'Policy review and update cycle',
                'Risk assessment schedule',
                'SCCE and compliance association events',
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
        title="No deadline missed. Examination ready. Certification current."
        subtitle="Compliance deadline tracking, CCE management, and compliance analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Compliance analytics', href: '/features/analytics' }}
      />
    </>
  )
}
