import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, Shield, BarChart3, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Optometrists — CE tracking, staff meetings, and practice management',
  description:
    'Optometrists manage state board CE requirements, staff meetings, vendor appointments, and license renewals. Momenties tracks CE hours by category, keeps renewal deadlines visible, and templates recurring practice meetings.',
  alternates: { canonical: '/for/optometrists' },
  openGraph: {
    title: 'Momenties for Optometrists',
    description: 'CE tracking and practice calendar management for optometrists.',
    url: '/for/optometrists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE hours by state board category',
    desc: 'Tag every CE event by board requirement: ocular disease, optics, contact lenses, office management, ethics. Analytics shows hours per category. License renewal without the last-minute scramble.',
  },
  {
    icon: Calendar,
    title: 'Practice meeting templates',
    desc: 'Monthly team huddle, quarterly staff review, annual insurance credential update — all templated. Apply once for the year. Meetings created for 12 months in a single session.',
  },
  {
    icon: Clock,
    title: 'License and vendor renewal deadlines',
    desc: '"OD license renewal october 31." "Controlled substance registration july." "Vendor contract review Q4." All compliance and business deadlines on calendar. All visible in Daily Brief before they become urgent.',
  },
  {
    icon: BarChart3,
    title: 'Non-clinical time analytics',
    desc: 'Track vendor meetings, CE courses, study groups, and admin separately from exam hours. See how many hours per month go to practice management. Calibrate delegation decisions with real data.',
  },
]

const OD_WORKFLOW = [
  { time: 'January', action: 'CE plan: audit current hours per board category, identify gaps, add Academy meeting and conferences to calendar for the year.' },
  { time: 'Monthly', action: 'Staff huddle (templated, 30 mins, first Monday of month). Set up in January for all 12 months. No scheduling overhead.' },
  { time: 'CE course', action: '"Contact lens CE seminar, saturday april 20, 4 hours, contact lens category." Tagged, added, CE counter updated.' },
  { time: 'Q3 review', action: 'Analytics: 16/25 required CE hours, 2 categories complete, ethics category still needs 3 hours. Time to plan the fall schedule.' },
  { time: 'License month', action: 'Renewal visible in Daily Brief for 60 days prior. Application deadline blocked. Supporting documents checklist on calendar. Nothing expires unexpectedly.' },
]

export default function ForOptometristsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Optometrists"
        title={
          <>
            Every CE requirement met.
            <br />
            <em className="not-italic text-gold">Every renewal on time.</em>
          </>
        }
        lede="Optometrists manage clinical hours alongside CE requirements, state board compliance, vendor relationships, and practice administration. Momenties tracks CE by category, surfaces renewal deadlines early, and keeps practice meetings templated and on schedule."
        crumbs={[{ label: 'For Optometrists' }]}
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
            CE analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How optometrists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for optometry practices.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Practice calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Practice and CE management through the year.</h2>
          </Reveal>
          <div className="space-y-3">
            {OD_WORKFLOW.map((step, i) => (
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
              <h3 className="text-sm font-medium text-foreground mb-1.5">Calendar only. No patient records.</h3>
              <p className="text-xs text-muted-foreground mb-4">Momenties manages your schedule and CE tracking, not exam records, prescriptions, or patient data.</p>
              <div className="space-y-2">
                {[
                  'No patient health information processed by AI',
                  'CE tracked by category you define',
                  'Renewal deadlines visible without risk of missed compliance',
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
        title="CE tracked. Renewals visible. Practice meetings scheduled."
        subtitle="CE category analytics, compliance deadline reminders, and practice meeting templates. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Analytics', href: '/features/analytics' }}
      />
    </>
  )
}
