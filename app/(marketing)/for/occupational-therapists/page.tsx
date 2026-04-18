import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, Shield, BarChart3, Users, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Occupational Therapists — CE tracking, NBCOT renewal, and caseload management',
  description:
    'Occupational therapists manage NBCOT PDUs, state license CE requirements, fieldwork supervision, and continuing education. Momenties tracks CE by category and keeps every renewal deadline visible.',
  alternates: { canonical: '/for/occupational-therapists' },
  openGraph: {
    title: 'Momenties for Occupational Therapists',
    description: 'NBCOT PDU tracking and OT practice calendar management.',
    url: '/for/occupational-therapists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'NBCOT PDUs and state CE by category',
    desc: 'Tag every CE event by category: OT practice, professional development, ethics, education and research. Analytics shows PDUs accumulated by category against your renewal requirement.',
  },
  {
    icon: Users,
    title: 'Fieldwork and supervision tracking',
    desc: 'Block every fieldwork supervision session and tag it accordingly. Track supervision hours for Level I and Level II students separately. Know accumulated hours at any point in the rotation.',
  },
  {
    icon: Clock,
    title: 'NBCOT and state license renewals',
    desc: '"NBCOT renewal december 31." "State OT license renewal may." "CPR recertification october." All compliance deadlines on calendar, visible 60+ days before due.',
  },
  {
    icon: BarChart3,
    title: 'Professional development analytics',
    desc: 'Track AOTA conference attendance, study groups, and online CE separately from direct service. See PDUs accumulating in real time. No year-end rush to find enough hours.',
  },
]

const OT_WORKFLOW = [
  { time: 'January', action: 'NBCOT audit: check PDUs by category, identify gaps, add AOTA conference and state association events to calendar for the year.' },
  { time: 'Monthly', action: 'Supervision meetings (templated, recurring). IDT or team meetings. All created for the year in January — zero scheduling overhead per month.' },
  { time: 'CE event', action: '"Sensory integration workshop, saturday may 10, 6 hours, OT practice category." Tagged and added. PDU counter updates immediately.' },
  { time: 'Q3 check', action: 'Analytics: 28/45 PDUs accumulated, ethics category complete, professional development needs 8 more. AOTA Annual in April will cover it.' },
  { time: 'Renewal', action: 'NBCOT renewal visible in Daily Brief for 60 days prior. Application deadline blocked. PDU documentation checklist on calendar.' },
]

export default function ForOccupationalTherapistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Occupational Therapists"
        title={
          <>
            NBCOT PDUs tracked.
            <br />
            <em className="not-italic text-gold">Certification maintained.</em>
          </>
        }
        lede="OTs manage NBCOT PDU requirements, state license CE, fieldwork supervision, and professional development alongside clinical caseloads. Momenties tracks PDUs by category, surfaces renewal deadlines early, and keeps supervision and professional meetings structured."
        crumbs={[{ label: 'For Occupational Therapists' }]}
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
            PDU analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How OTs use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for OT practice management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Professional calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">PDU and licensing through the renewal cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {OT_WORKFLOW.map((step, i) => (
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
            <div className="rounded-xl border border-border/50 p-6">
              <h3 className="text-sm font-medium text-foreground mb-1.5">Calendar only. Zero patient data.</h3>
              <p className="text-xs text-muted-foreground mb-4">Momenties manages your schedule and CE tracking. Patient records, treatment plans, and clinical documentation stay in your EHR.</p>
              <div className="space-y-2">
                {[
                  'No patient health information processed by AI',
                  'CE and PDU tracking is category-based only',
                  'Supervision tracked by session, not by client',
                  'GDPR-compliant data handling',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                    <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="PDUs tracked. NBCOT maintained. Supervision logged."
        subtitle="CE category analytics, renewal deadline reminders, and supervision tracking. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
