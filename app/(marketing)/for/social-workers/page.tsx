import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, Shield, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Social Workers — CE tracking, supervision, and caseload management',
  description:
    'Social workers manage NASW CE requirements, clinical supervision hours, licensure renewals, and caseload meetings. Momenties tracks CE by category, supervision hours, and keeps every renewal deadline visible.',
  alternates: { canonical: '/for/social-workers' },
  openGraph: {
    title: 'Momenties for Social Workers',
    description: 'CE tracking, supervision hours, and licensure deadline management for social workers.',
    url: '/for/social-workers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE hours by licensure category',
    desc: 'Tag every CE event by state board category: ethics, clinical practice, cultural competency, supervision. Analytics shows hours per category against your LCSW or LMSW renewal requirement.',
  },
  {
    icon: Users,
    title: 'Supervision hours tracking',
    desc: 'Block every supervision session and tag it as supervision time. Track hours toward LCSW clinical hour requirements. Know exactly where you stand at any point in the supervision period.',
  },
  {
    icon: Clock,
    title: 'License renewal deadlines',
    desc: '"LCSW license renewal march 31." "NASW membership renewal december." "Clinical supervision hours deadline." All compliance deadlines on calendar, visible 60 days out.',
  },
  {
    icon: BarChart3,
    title: 'Caseload and documentation analytics',
    desc: 'Track case review meetings, team consultations, and documentation time separately from direct service. See non-direct-service hours per week. Calibrate caseload expectations with data.',
  },
]

const SW_WORKFLOW = [
  { time: 'January', action: 'CE plan: audit hours per category, identify gaps, add NASW conference and state events to calendar. Supervision schedule set for the quarter.' },
  { time: 'Monthly', action: 'Case review meeting (templated). Team consultation. Supervision sessions. All recurring meetings set for the quarter at start of quarter.' },
  { time: 'CE event', action: '"Ethics CE webinar, tuesday may 7, 3 hours, ethics category." Tagged, added, CE counter updates. Certificate reminder set.' },
  { time: 'Q3 check', action: 'Analytics: on pace for renewal? Ethics satisfied, cultural competency needs 2 more hours. Supervision hours: 1,400 of 3,000 required. On track.' },
  { time: 'Renewal', action: 'License renewal visible in Daily Brief for 60 days prior. Application deadline blocked. CE and supervision documentation checklist on calendar.' },
]

export default function ForSocialWorkersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Social Workers"
        title={
          <>
            CE tracked. Supervision logged.
            <br />
            <em className="not-italic text-gold">License maintained.</em>
          </>
        }
        lede="Social workers manage CE requirements, clinical supervision hours for LCSW licensure, board renewal deadlines, and complex caseloads simultaneously. Momenties tracks CE by category, logs supervision hours, and surfaces every compliance deadline before it becomes urgent."
        crumbs={[{ label: 'For Social Workers' }]}
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

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How social workers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for social work practice.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and licensing through the renewal cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {SW_WORKFLOW.map((step, i) => (
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
                &ldquo;Tracking supervision hours for my LCSW was a mess — a spreadsheet I updated whenever I remembered. With Momenties, I block every supervision session, tag it, and the total is always accurate. The renewal application is effortless now.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Jamie W., LMSW</div>
                  <div className="text-xs text-muted-foreground">Social worker, working toward LCSW licensure</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="CE tracked. Supervision logged. License maintained."
        subtitle="CE category analytics, supervision hour tracking, and renewal reminders. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
