import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, Clock, BarChart3, Shield, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for School Counselors — Student caseload, CE credits, and license renewals',
  description:
    'School counselors manage large student caseloads, individual and group sessions, CE requirements, and license renewals while coordinating with teachers, parents, and administrators. Momenties tracks CE by category, surfaces renewal deadlines, and shows time per student type.',
  alternates: { canonical: '/for/school-counselors' },
  openGraph: {
    title: 'Momenties for School Counselors',
    description: 'Caseload management, CE tracking, and renewal deadlines for school counselors.',
    url: '/for/school-counselors',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Users,
    title: 'Student session scheduling',
    desc: 'Individual counseling, group sessions, classroom presentations, college planning appointments — all templated. "Individual session - at-risk caseload, monday 10am 30 mins." Sessions repeating throughout the week without manual re-entry.',
  },
  {
    icon: Shield,
    title: 'CE credits by ASCA competency area',
    desc: 'Tag CE by area: academic development, career development, social/emotional learning, school counselor identity, technology, equity. Analytics shows CE hours per domain. School counseling license renewal without year-end scramble.',
  },
  {
    icon: Clock,
    title: 'License and renewal deadlines',
    desc: '"School counseling license renewal — june 30." "School counselor certification renewal — august." "First aid recertification — april." All professional deadlines on calendar. Visible 90 days before expiration.',
  },
  {
    icon: BarChart3,
    title: 'Caseload time distribution',
    desc: 'Tag sessions by student type: individual counseling, group counseling, college planning, crisis response, teacher consultation, parent meetings. Analytics shows where caseload time actually goes — and whether it matches the program mission.',
  },
]

const COUNSELOR_WORKFLOW = [
  { time: 'School year start', action: 'Apply counseling program template. All classroom presentation dates, college application deadlines, testing windows, and registration dates on the counseling calendar from day one.' },
  { time: 'Weekly scheduling', action: '"Individual check-in - student A, tuesday 11am." "Group — social skills, wednesday 10am 45 mins." "Parent consult — thursday 3:30pm." All recurring sessions templated. Walk-ins get the remaining slots.' },
  { time: 'College season', action: 'All application deadlines (FAFSA, early decision, regular decision) on calendar per student. Counseling appointments templated into the application timeline. Nothing gets missed in October crunch.' },
  { time: 'Professional dev', action: '"ASCA national conference — june 24-27." "CEU webinar — trauma-informed practices, wednesday 4pm, 1.5 CE." Tagged and counted. Annual renewal preparation runs through the year.' },
  { time: 'License renewal', action: 'Daily Brief surfaces license deadline 90 days out. CE audit: hours needed, hours completed, domain breakdown. Renews with documentation ready — not scrambling in June.' },
]

export default function ForSchoolCounselorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for School Counselors"
        title={
          <>
            Every student seen.
            <br />
            <em className="not-italic text-gold">Every cert maintained.</em>
          </>
        }
        lede="School counselors manage large caseloads, individual and group sessions, college planning, crisis response, CE requirements, and license renewals simultaneously. Momenties templates the school counseling program calendar, tracks CE by competency area, and surfaces professional deadlines before they become urgent."
        crumbs={[{ label: 'For School Counselors' }]}
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
            Caseload analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No student data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How school counselors use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for school counseling programs.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">School year rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A school counselor&apos;s year with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {COUNSELOR_WORKFLOW.map((step, i) => (
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
                &ldquo;I work in a high school with 350 students on my caseload. College application season used to overwhelm me because I was tracking every student&apos;s deadlines in my head. Momenties gave me a counseling program calendar where every student&apos;s key deadline is tagged to them. I went from reactive to proactive in one application cycle.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">N</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Nicole B., M.Ed.</div>
                  <div className="text-xs text-muted-foreground">High school counselor, 350-student caseload</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Privacy</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Student privacy built into the design.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'No student names shared with AI models',
                'Event parsing uses initials or codes, not full names',
                'Analytics aggregated — no individual student data exposed',
                'GDPR-compliant data handling',
                'All calendar data encrypted at rest',
                'No data sold to third parties',
                'Student session notes never leave your device',
                'Export and delete your data anytime',
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
        title="Every student prioritized. Every credential maintained."
        subtitle="Session scheduling, CE tracking, and caseload analytics for school counselors. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Caseload analytics', href: '/features/analytics' }}
      />
    </>
  )
}
