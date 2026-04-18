import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, Calendar, BarChart3, Clock, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for School Principals — Academic calendar, staff coordination, and CE compliance',
  description:
    'School principals manage the academic calendar, staff evaluation cycles, professional development coordination, community events, district meetings, and administrative CE compliance simultaneously. Momenties templates the school year calendar, tracks principal CE requirements, and shows time distribution across leadership functions.',
  alternates: { canonical: '/for/school-principals' },
  openGraph: {
    title: 'Momenties for School Principals',
    description: 'Academic calendar management, staff coordination, and CE compliance for school principals.',
    url: '/for/school-principals',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Calendar,
    title: 'Academic year calendar templates',
    desc: 'Template: staff development days, parent-teacher conferences, standardized testing windows, report card deadlines, school events, district meetings, staff evaluation cycles. Applied in August — the whole year visible before September.',
  },
  {
    icon: Users,
    title: 'Staff evaluation cycle management',
    desc: '"Pre-observation conference — Ms. Chen, october 15." "Classroom observation — Room 204, november 3." "Post-conference — Ms. Chen, november 10." "Formal evaluation due — december 1." Every evaluation milestone tracked to each staff member.',
  },
  {
    icon: Clock,
    title: 'Principal certification and CE deadlines',
    desc: '"Principal license renewal — june 30." "NASSP membership renewal — july." "Administrator certification renewal — state board." All credential deadlines on calendar. Visible before they require emergency action.',
  },
  {
    icon: BarChart3,
    title: 'Leadership time distribution analytics',
    desc: 'Tag time by function: instructional leadership, staff evaluation, community relations, district meetings, administrative, crisis response. Analytics shows where leadership time actually goes. Is instructional leadership getting enough time?',
  },
]

const PRINCIPAL_WORKFLOW = [
  { time: 'August planning', action: 'Apply school year template. All staff development days, testing windows, evaluation cycles, parent conferences, and reporting deadlines on calendar before teachers return. The year is visible before it begins.' },
  { time: 'Staff evaluation', action: 'Evaluation template applied per staff member. Observation windows, pre/post conferences, and submission deadlines all on calendar. Evaluation cycle managed for 40+ staff without manual tracking.' },
  { time: 'Community', action: '"Back to school night — september 10 6pm." "Parent-teacher conference week — october 21-25." "Title I parent meeting — november." All community touchpoints on calendar. Never double-booked with district obligations.' },
  { time: 'District meetings', action: '"Principal PLN — second wednesday monthly 8am." "Curriculum director meeting — third tuesday." "Superintendent cabinet — quarterly." All recurring district obligations templated. Block travel time before.' },
  { time: 'Leadership review', action: 'Analytics: instructional leadership hours vs. administrative hours this month. Enough classroom walkthroughs? Too much time in district meetings? Data drives schedule adjustment for next month.' },
]

export default function ForSchoolPrincipalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for School Principals"
        title={
          <>
            School year managed.
            <br />
            <em className="not-italic text-gold">Instruction led.</em>
          </>
        }
        lede="School principals manage the academic year calendar, staff evaluation cycles, professional development coordination, community events, district obligations, and administrative compliance simultaneously. Momenties templates the full school year calendar, tracks every staff member's evaluation timeline, and shows whether leadership time is actually going to what matters most."
        crumbs={[{ label: 'For School Principals' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/calendar-templates"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            School year templates
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No student data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How principals use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for school leadership.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">August planning to June close with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {PRINCIPAL_WORKFLOW.map((step, i) => (
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
                &ldquo;Principals get pulled in 20 directions at once. Analytics showed me I was spending only 11% of my week on instructional leadership — the thing that actually moves student outcomes. I restructured my week: 3 classroom walkthrough blocks per week, protected. That number went to 28% within a month.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">M</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Marcus J., Ed.D.</div>
                  <div className="text-xs text-muted-foreground">Elementary school principal, 480 students</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What principals track</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">School leadership analytics in Momenties.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Instructional leadership hours per week',
                'Classroom walkthrough frequency',
                'Staff evaluation cycle completion rate',
                'District meeting time vs. campus time',
                'Community engagement hours',
                'Administrative time per week',
                'Principal CE and certification status',
                'Leadership time distribution trend',
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
        title="School year managed. Instruction led. Time accounted."
        subtitle="Academic year templates, staff evaluation tracking, and leadership analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'School year templates', href: '/calendar-templates' }}
      />
    </>
  )
}
