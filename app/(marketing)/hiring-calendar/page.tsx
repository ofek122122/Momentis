import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, Clock, BarChart3, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hiring Calendar — How to schedule a hiring process so the best candidates accept offers',
  description:
    'A hiring calendar schedules candidate communication within 24 hours of each stage, places panel interviews before candidate interest wanes, and moves offers within 48 hours of final interviews. Most lost candidates are lost to slow processes, not to better competing offers. A hiring calendar prevents candidate dropout by design.',
  alternates: { canonical: '/hiring-calendar' },
  openGraph: {
    title: 'Hiring Calendar — Momenties',
    description: 'Schedule a hiring process so the best candidates accept offers.',
    url: '/hiring-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Users,
    title: '24-hour candidate communication placed at every stage transition',
    desc: '"Candidate communication — within 24 hours of stage decision." 24-hour communication placed as a constraint at every stage — phone screen to interview, interview to panel, panel to offer. Candidates who don\'t hear within 48 hours after an interview often accept competing offers — not because the competing offer is better, but because it arrived. 24-hour communication block placed at each stage completion ensures the window stays open.',
  },
  {
    icon: Clock,
    title: 'Panel interview scheduled within 5 business days of phone screen',
    desc: '"Panel interview — within 5 business days of phone screen completion." Panel interview scheduling placed within 5 days of phone screen — not when panelists are next available. The 5-day window maintains candidate momentum. Panels assembled "when everyone is available" take 10-14 days — which is the window where strong candidates accept other offers. Panel scheduling placed as a constraint, not a convenience.',
  },
  {
    icon: BarChart3,
    title: 'Offer delivery placed within 48 hours of final interview',
    desc: '"Offer — within 48 hours of final interview." Offer placed within 48 hours of final interview panel — not after internal alignment is complete. Internal alignment placed before the final interview — offer authority, compensation range, and start date confirmed before the final interview date. Offer within 48 hours converts final interview momentum into an accepted offer. Offer at 5 days converts final interview momentum into a competing offer window.',
  },
  {
    icon: TrendingUp,
    title: 'Hiring pipeline reviewed weekly to identify stalled candidates',
    desc: '"Weekly hiring pipeline review — thursday 9am, 20 minutes." Pipeline review: candidates in each stage, days since last communication, offers pending response, and next action per candidate. Candidates stalled for more than 5 business days in any stage identified — not discovered when they withdraw. Weekly pipeline review placed as a standing event — not triggered by candidate dropout.',
  },
]

const HIRE_STEPS = [
  {
    step: 'Build the role-specific hiring timeline before posting the job',
    detail: '"Role: Senior Engineer." "Day 1-7: applications." "Day 8-14: phone screens." "Day 15-21: technical interviews." "Day 22-28: panel interviews." "Day 29-30: offer." Hiring timeline placed before job posting — not estimated when candidates are already in process. Timeline placed before posting produces a consistent candidate experience. Timeline discovered after screening produces variability that predicts candidate dropout.',
  },
  {
    step: 'Place the panel scheduling block within 5 days of phone screen completion',
    detail: '"Panel scheduling block — within 5 business days of phone screen." Panel scheduling block placed for each phone screen completion — not when the hiring manager requests it. Scheduling constraint: panel must be available within 5 business days, or a different panel must be assembled. Panels assembled "as available" produce 10-14 day waits that compound across 4-6 candidates into a hiring process that loses top candidates in every cohort.',
  },
  {
    step: 'Schedule the candidate debrief within 24 hours of each interview',
    detail: '"Interviewer debrief — within 24 hours of interview." Debrief placed for each interview with specific attendees and a structured scorecard. Debrief within 24 hours captures interviewer recall at its most accurate. Debrief at 72 hours or later produces consensus-driven feedback that converges toward the most recent interviewer opinion. Each stage transition requires a debrief completion before the next stage communication.',
  },
  {
    step: 'Complete internal alignment before the final interview date',
    detail: '"Offer alignment — completed before final interview date." Offer alignment meeting placed before the final interview — not after. Agenda: compensation range, equity structure, start date, reporting structure, and title. Offer alignment done before final interview means the 48-hour offer window is feasible. Offer alignment scheduled after final interview produces 5-7 day delays for approvals that could have been obtained in advance.',
  },
  {
    step: 'Place the offer deadline and follow-up communication sequence',
    detail: '"Offer extended — within 48 hours of final interview." "Offer follow-up — day 3 if no response." "Offer deadline — 5 business days from extension." "Offer expiry communication — day 5." Offer communication sequence placed as a connected chain — not managed ad hoc. Offer with no follow-up sequence produces candidates who need to decide but aren\'t sure if the company is still interested. Follow-up at day 3 signals interest and surfaces questions.',
  },
  {
    step: 'Place the weekly hiring pipeline review as a standing event',
    detail: '"Weekly hiring pipeline review — thursday 9am, standing, 20 minutes." Agenda: candidates by stage, days since last contact, offers pending, next action per candidate. Standing pipeline review identifies candidates stalled for more than 5 business days in any stage — before they withdraw. Hiring pipelines reviewed reactively (when someone asks) surface stalled candidates after they have already accepted elsewhere.',
  },
]

const HIRE_FAILURES = [
  { failure: 'Panel interviews scheduled "when everyone is available"', consequence: 'Panels assembled by finding mutual availability typically take 10-14 days to schedule. In that window, strong candidates receive competing offers and accept them — not because the offer is better, but because it arrived. A panel scheduling constraint of 5 business days produces a different candidate pool than "when everyone is available." The constraint, not the intent, determines the outcome.' },
  { failure: 'Offer alignment happening after the final interview', consequence: 'Offer alignment scheduled after the final interview requires 3-7 business days for approvals — compensation, equity, start date, and title — during which the candidate is sitting with competing options. The same alignment completed before the final interview allows an offer within 48 hours of the final interview. Offer at 48 hours and offer at 7 days are different conversations with different acceptance rates.' },
  { failure: 'Candidate communication delayed past 48 hours at any stage', consequence: 'Candidates who don\'t hear within 48 hours after an interview don\'t necessarily withdraw — they often accept competing offers that arrive during the silence. The 48-hour communication window is not about courtesy; it\'s about keeping the candidate\'s decision window open. A structured 24-hour communication at each stage transition costs 15 minutes per candidate. The alternative is losing candidates to process speed, not to better offers.' },
  { failure: 'Hiring pipeline reviewed when a candidate withdraws rather than weekly', consequence: 'Hiring pipelines reviewed reactively — when a candidate withdraws or when the hiring manager asks — surface problems after they compound. A candidate stalled for 8 days in the scheduling stage is often past the withdrawal point when discovered. Weekly pipeline reviews surface 5-day stalls while they are still correctable — a stage-specific action can be taken before the candidate moves on.' },
]

export default function HiringCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Hiring Calendar"
        title={
          <>
            Process designed. Candidates retained.
            <br />
            <em className="not-italic text-gold">Best offers accepted, not lost to slow timelines.</em>
          </>
        }
        lede="Most lost candidates are lost to slow hiring processes, not to better competing offers. A hiring calendar places 24-hour candidate communication at every stage transition, schedules panel interviews within 5 business days of phone screens, completes offer alignment before the final interview date, and delivers offers within 48 hours — so the process speed matches the candidate decision window rather than working against it."
        crumbs={[{ label: 'Hiring Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/hr"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Momenties for HR
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties prevents candidate dropout from slow hiring processes.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Six steps</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a hiring calendar where the process speed matches the candidate decision window.</h2>
          </Reveal>
          <div className="space-y-3">
            {HIRE_STEPS.map((item, i) => (
              <Reveal key={item.step} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-6 shrink-0 pt-0.5 text-center">{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">{item.step}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Common failures</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four hiring calendar patterns that lose candidates to process speed.</h2>
          </Reveal>
          <div className="space-y-3">
            {HIRE_FAILURES.map((item, i) => (
              <Reveal key={item.failure} delay={i * 40}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <h3 className="text-sm font-medium text-foreground mb-1">{item.failure}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.consequence}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Hiring analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for hiring process discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Average days from phone screen to panel interview',
                'Candidate communication response time by stage',
                'Offer delivery days from final interview',
                'Offer alignment completion before final interview',
                'Weekly pipeline review completion rate',
                'Candidate dropout rate by stage',
                'Time-to-hire by role level',
                'Offer acceptance rate by time-to-offer',
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
        title="Process designed. Candidates retained."
        subtitle="24-hour communication cadence, 5-day panel scheduling, 48-hour offer delivery, and weekly pipeline reviews. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for HR', href: '/for/hr' }}
      />
    </>
  )
}
