import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BarChart3, Shield, Clock, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Business Analysts — Project deadlines, certification renewals, and stakeholder calendar',
  description:
    'Business analysts manage project delivery timelines, CBAP or PMI-PBA certification requirements, stakeholder meeting schedules, and sprint planning cycles simultaneously. Momenties tracks CDUs toward IIBA recertification, surfaces deadline alerts, and shows time per project.',
  alternates: { canonical: '/for/business-analysts' },
  openGraph: {
    title: 'Momenties for Business Analysts',
    description: 'Project deadlines, CBAP certification, and stakeholder calendar management for BAs.',
    url: '/for/business-analysts',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'IIBA certification and CDU tracking',
    desc: 'Tag every professional development activity by IIBA CDU category: structured education, informal learning, volunteer activities, work experience. Track hours toward the 60 CDU requirement per 3-year CBAP recertification cycle. ECBA and CCBA tracked separately per their own requirements.',
  },
  {
    icon: Clock,
    title: 'Project and sprint deadline calendar',
    desc: '"Requirements document due — project A, october 15." "Sprint review — bi-weekly wednesday 3pm." "UAT sign-off — november 30." "Go-live — december 12." All project milestones on calendar. Every delivery commitment visible. No deadline discovered the week before it\'s due.',
  },
  {
    icon: BarChart3,
    title: 'Time per project analytics',
    desc: 'Tag every meeting, analysis session, and document review by project. Analytics shows hours per project each week. Which project is consuming the most BA time? Is allocation matching organizational priority? Data for capacity planning and stakeholder conversations.',
  },
  {
    icon: Users,
    title: 'Stakeholder and review meeting calendar',
    desc: '"Requirements review — product team, thursday 2pm." "Executive walkthrough — steering committee, monthly." "Business stakeholder check-in — every two weeks." All stakeholder touchpoints scheduled and recurring. No requirement review falling off the calendar.',
  },
]

const BA_WORKFLOW = [
  { time: 'Project kickoff', action: '"Project A BA engagement — requirements gathering starts monday." Full project timeline placed on calendar: stakeholder interviews, requirements workshops, document drafts, review cycles, sign-offs. All milestones visible from day one.' },
  { time: 'Sprint cycle', action: '"Sprint planning — monday 10am, bi-weekly." "Backlog refinement — thursday 2pm, bi-weekly." "Sprint review — wednesday 3pm, bi-weekly." Agile ceremonies recurring, never manually rescheduled. Consistent rhythm from sprint 1 to sprint n.' },
  { time: 'CDU activities', action: '"IIBA webinar — business analysis fundamentals, tuesday 12pm, 1.5 hours, structured education CDU." Tagged and added. 3-year cycle counter updates. No scramble to find 60 CDUs in the final quarter of the recertification period.' },
  { time: 'Stakeholder prep', action: '"Executive requirements review — friday 10am." Prep block added thursday afternoon: review materials, anticipate objections, confirm stakeholder availability. No showing up to a senior review without preparation.' },
  { time: 'CDU audit', action: 'Analytics: IIBA CDU progress by category. 3-year cycle on track? Structured education hours sufficient? Time to register for fall IIBA events to close the gap before the recertification deadline.' },
]

export default function ForBusinessAnalystsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Business Analysts"
        title={
          <>
            Projects delivered.
            <br />
            <em className="not-italic text-gold">CBAP certification current.</em>
          </>
        }
        lede="Business analysts manage project delivery timelines, IIBA certification CDU requirements, stakeholder review schedules, and sprint planning cycles simultaneously. Momenties tracks CDUs by category, surfaces recertification deadlines early, and shows time per project — so delivery and professional development both stay on track."
        crumbs={[{ label: 'For Business Analysts' }]}
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
            Project analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No project data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How business analysts use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for BA practice management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">BA calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Project delivery to certification with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {BA_WORKFLOW.map((step, i) => (
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
                &ldquo;I was working across 4 projects and my calendar was a mess of overlapping meetings with no visibility into where my time was actually going. Momenties analytics showed me I was spending 70% of my time in meetings and only 30% on actual analysis work. That data gave me the evidence to push back on meeting overload and actually do my job better.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">A</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Amara N., CBAP</div>
                  <div className="text-xs text-muted-foreground">Senior business analyst, financial services</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What Momenties tracks</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Complete BA practice and certification management.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'IIBA CDUs by category — 3-year cycle',
                'CBAP/CCBA/ECBA recertification deadlines',
                'Project delivery milestones per engagement',
                'Sprint ceremonies — recurring calendar',
                'Stakeholder review and sign-off deadlines',
                'Time per project analytics',
                'IIBA chapter and national events',
                'Requirements review and walkthrough schedule',
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
        title="Projects delivered. Certification current. Time measured."
        subtitle="IIBA CDU tracking, project milestone management, and BA time analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Project analytics', href: '/features/analytics' }}
      />
    </>
  )
}
