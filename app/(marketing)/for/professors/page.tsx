import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, Shield, BarChart3, Clock, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Professors — Teaching, research, and academic service calendar management',
  description:
    'Professors manage teaching schedules, research deadlines, grant cycles, committee service, conference submissions, and tenure and promotion timelines simultaneously. Momenties tracks all academic deadlines, shows time per role, and surfaces grant and publication deadlines early.',
  alternates: { canonical: '/for/professors' },
  openGraph: {
    title: 'Momenties for Professors',
    description: 'Teaching, research, and academic service calendar management for professors.',
    url: '/for/professors',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Calendar,
    title: 'Semester teaching calendar',
    desc: 'Course schedule, office hours, exam dates, and grade submission deadlines on calendar from day one of the semester. Prep blocks scheduled before each lecture. Paper grading blocks distributed over the deadline window — not crammed into one weekend.',
  },
  {
    icon: Shield,
    title: 'Grant and publication deadline tracking',
    desc: '"NSF proposal due — january 15." "NIH R01 submission — february 5." "Journal manuscript revision — 3 weeks." "Conference abstract — october 1." All research submission deadlines with 90-day advance visibility. Nothing missed because it was in a different system.',
  },
  {
    icon: BarChart3,
    title: 'Teaching vs. research time analytics',
    desc: 'Tag every event by role: teaching, research, service, administration. Analytics shows hours per role each week. The classic academic problem — service and teaching crowding out research — made visible with data. What percentage of your week is research? Now you know.',
  },
  {
    icon: Clock,
    title: 'Tenure and promotion milestones',
    desc: '"Tenure dossier due — december 1." "Mid-tenure review — spring year 3." "Annual review — march 15." "External reviewer materials — october 1." Tenure timeline milestones on calendar years in advance. No surprise about what\'s due and when.',
  },
]

const PROF_WORKFLOW = [
  { time: 'Semester start', action: 'Full semester teaching calendar loaded: class sessions, office hours, exam dates, grade submission deadlines. Research writing blocks placed for the semester before service commitments fill the gaps. Grant deadlines added for the coming months.' },
  { time: 'Research time', action: '"Writing block — article revision, monday/wednesday 9-11am." Protected before any other meeting is scheduled in that window. Research block is first on the calendar, not whatever time remains after teaching and service.' },
  { time: 'Grant cycle', action: '"NIH R01 submission — february 5." Working backwards: specific aims finalized 8 weeks before, budget complete 4 weeks before, review scheduled 2 weeks before. Backwards planning from the deadline produces a realistic work timeline.' },
  { time: 'Conference', action: '"APA annual convention — august 7-10." Abstract submission deadline added 90 days before. Travel and hotel blocked once accepted. Session presentation prep block added 2 weeks before travel.' },
  { time: 'Service management', action: 'Committee meetings templated recurring. "Faculty senate — third wednesday monthly." "Dissertation committee — by request." Service tracked by hours. Analytics shows when service is expanding beyond sustainable allocation.' },
]

export default function ForProfessorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Professors"
        title={
          <>
            Research protected.
            <br />
            <em className="not-italic text-gold">Deadlines never missed.</em>
          </>
        }
        lede="Professors manage teaching schedules, research deadlines, grant cycles, committee service, conference submissions, and tenure timelines simultaneously — all in the same calendar. Momenties tracks every academic deadline, shows time per role, and protects research writing time before teaching and service fill every available slot."
        crumbs={[{ label: 'For Professors' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · No student data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How professors use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for academic calendar management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Academic calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From semester start to tenure milestone with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {PROF_WORKFLOW.map((step, i) => (
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
                &ldquo;Academic calendars are deceptive — they look open until suddenly everything is due at once. I started blocking research writing time at the beginning of each semester before scheduling anything else. Momenties analytics showed me I was spending 60% of my time on service and teaching and only 18% on research. That data changed how I say no to committee work.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">E</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Dr. Elena V., PhD</div>
                  <div className="text-xs text-muted-foreground">Associate professor, research university</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Academic deadlines tracked</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every academic commitment on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Grant submission deadlines — federal and foundation',
                'Journal submission and revision deadlines',
                'Conference abstract and paper deadlines',
                'Semester teaching calendar and exams',
                'Grade submission deadlines',
                'Tenure and promotion milestones',
                'Annual review dates',
                'Committee and service commitments',
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
        title="Research protected. Grants submitted. Tenure on track."
        subtitle="Academic deadline tracking, research time protection, and role-based time analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Time analytics', href: '/features/analytics' }}
      />
    </>
  )
}
