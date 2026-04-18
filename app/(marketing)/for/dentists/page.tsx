import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, Shield, BarChart3, Calendar, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Dentists — CE tracking, staff meetings, and practice schedule management',
  description:
    'Dentists manage CE deadlines, quarterly staff meetings, lab schedules, and continuing education. Momenties tracks CE hours by category, templates recurring practice meetings, and keeps renewal deadlines visible.',
  alternates: { canonical: '/for/dentists' },
  openGraph: {
    title: 'Momenties for Dentists',
    description: 'CE tracking, staff meetings, and practice schedule management.',
    url: '/for/dentists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE hours by category',
    desc: 'Tag every continuing education event by state board category: infection control, ethics, clinical, radiography. Analytics shows hours accumulated per category. License renewal without the last-minute panic.',
  },
  {
    icon: Calendar,
    title: 'Practice meeting templates',
    desc: 'Monthly staff meeting, quarterly review, annual performance cycle, infection control update — all templated. Apply once per practice cycle. All meetings created in seconds.',
  },
  {
    icon: Clock,
    title: 'License and DEA renewal reminders',
    desc: '"Dental license renewal june 30." "DEA registration expires december." "State board CE deadline december 31." Compliance deadlines on calendar the moment they\'re confirmed. Nothing expires unnoticed.',
  },
  {
    icon: BarChart3,
    title: 'Time outside the chair analytics',
    desc: 'Track admin time, meetings, CE, and lab work separately from clinical time. See how many hours per month go to practice management. Inform decisions about hiring and delegation.',
  },
]

const DENTAL_WORKFLOW = [
  { time: 'January', action: 'CE plan for the year: audit current hours by category, identify gaps, add planned courses and conferences to calendar.' },
  { time: 'Monthly', action: 'Staff meeting (templated): 30 mins, full team, first Monday. Created for the year in January. No scheduling overhead for 12 months.' },
  { time: 'CE course', action: '"Implant CE seminar, saturday may 12, 6 hours, clinical category." Tagged and added. CE counter updates automatically.' },
  { time: 'Q3 review', action: 'CE analytics: on pace for license renewal? Which categories need more hours? 4 months remaining — still time to adjust.' },
  { time: 'December', action: 'All renewal deadlines visible in Daily Brief for 60 days prior. License, DEA, CPR, malpractice — nothing expires quietly.' },
]

export default function ForDentistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Dentists"
        title={
          <>
            Every CE hour tracked.
            <br />
            <em className="not-italic text-gold">No deadline missed.</em>
          </>
        }
        lede="Dentists manage clinical time, practice administration, CE requirements, and compliance deadlines simultaneously. Momenties tracks CE hours by category, templates recurring practice meetings, and surfaces renewal deadlines before they become emergencies."
        crumbs={[{ label: 'For Dentists' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · No client data shared with AI</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How dentists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for dental practices.</h2>
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

      {/* Workflow */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Practice calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Practice management through the year.</h2>
          </Reveal>
          <div className="space-y-3">
            {DENTAL_WORKFLOW.map((step, i) => (
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

      {/* Privacy */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border/50 p-6">
              <h3 className="text-sm font-medium text-foreground mb-1.5">Calendar-only. No patient data.</h3>
              <p className="text-xs text-muted-foreground mb-4">Momenties manages your schedule, not patient records. We never touch treatment plans, billing, or clinical notes.</p>
              <div className="space-y-2">
                {[
                  'Event titles use generic descriptions, not patient names',
                  'AI only reads event text you type — nothing from your PMS',
                  'No data sharing with third parties',
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
        title="CE tracked. Deadlines visible. Practice meetings templated."
        subtitle="CE category analytics, license renewal reminders, and practice meeting templates. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See analytics', href: '/features/analytics' }}
      />
    </>
  )
}
