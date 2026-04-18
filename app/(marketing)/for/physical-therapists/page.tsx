import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, Shield, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Physical Therapists — CE tracking, caseload management, and compliance deadlines',
  description:
    'Physical therapists manage CE license requirements, caseload meetings, documentation time, and board renewal deadlines. Momenties tracks CE hours by category and keeps every compliance deadline visible.',
  alternates: { canonical: '/for/physical-therapists' },
  openGraph: {
    title: 'Momenties for Physical Therapists',
    description: 'CE tracking and practice schedule management for PTs.',
    url: '/for/physical-therapists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE hours by licensure category',
    desc: 'Tag every CE event by state board category: manual therapy, ethics, clinical topics, professional development. Analytics shows hours per category against your renewal requirement.',
  },
  {
    icon: Clock,
    title: 'License renewal and certification deadlines',
    desc: '"PT license renewal october 31." "APTA certification renewal Q3." "BLS recertification may." All compliance deadlines on calendar. All visible 60 days before they\'re due.',
  },
  {
    icon: Users,
    title: 'Documentation and case review blocks',
    desc: 'Block documentation time as real calendar time. Protect case review sessions before supervision meetings. The calendar shows when clinical work happens vs. administrative work.',
  },
  {
    icon: BarChart3,
    title: 'Professional development analytics',
    desc: 'Track CE courses, study groups, association meetings, and peer consultation time separately. See the hours per month going to professional growth. Calibrate the pace to your renewal cycle.',
  },
]

const PT_WORKFLOW = [
  { time: 'January', action: 'Annual CE plan: audit current hours per category, identify gaps, add APTA CSM and regional courses to calendar.' },
  { time: 'Monthly', action: 'Team case review (templated) and documentation block. Both created for the full year in January.' },
  { time: 'CE course', action: '"Manual therapy advanced seminar, saturday may 3, 8 hours." Tagged to category. CE total updated. Certificate reminder added.' },
  { time: 'Q3 check', action: 'Analytics: 24/36 CE hours complete, manual therapy category satisfied, ethics needs 3 hours. Fall conference covers it.' },
  { time: 'Renewal', action: 'License visible in Daily Brief for 60 days prior. Renewal application deadline blocked. CE certificate checklist on calendar.' },
]

export default function ForPhysicalTherapistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Physical Therapists"
        title={
          <>
            Every CE hour tracked.
            <br />
            <em className="not-italic text-gold">Every license renewed.</em>
          </>
        }
        lede="Physical therapists manage CE requirements across multiple categories, board renewal deadlines, documentation time, and professional development alongside clinical caseloads. Momenties tracks all of it — CE by category, compliance deadlines surfaced early, recurring meetings templated."
        crumbs={[{ label: 'For Physical Therapists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How physical therapists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for PT practice management.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and compliance management through the year.</h2>
          </Reveal>
          <div className="space-y-3">
            {PT_WORKFLOW.map((step, i) => (
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

      {/* Testimonial */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I had no system for tracking CE beyond a spreadsheet I updated maybe twice a year. Now I tag every course as I add it, and I can see exactly where I stand at any point in the renewal cycle. No more year-end scramble.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">K</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Kim R., DPT</div>
                  <div className="text-xs text-muted-foreground">Physical therapist, outpatient ortho practice</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="CE tracked. Deadlines visible. Practice managed."
        subtitle="CE category analytics, license renewal reminders, and documentation blocks. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
