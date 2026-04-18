import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Target, Clock, BarChart3, Layers, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Personal Development Calendar — How to schedule growth activities that compound over time',
  description:
    'Personal development without a calendar is aspirational, not operational. A personal development calendar converts growth activities into scheduled appointments, tracks skill progress against quarterly goals, and ensures development time compounds rather than evaporating into reactive work.',
  alternates: { canonical: '/personal-development-calendar' },
  openGraph: {
    title: 'Personal Development Calendar — Momenties',
    description: 'Schedule growth activities, track skill progress, and compound development over time.',
    url: '/personal-development-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Target,
    title: 'Development goals translated to calendar time',
    desc: 'Every development goal has an implicit time requirement that most people never calculate. "Learn Spanish" → 15 minutes daily = 1.75 hours/week = 91 hours/year. "Complete leadership training" → 2 hours/week = 104 hours/year. "Write a book" → 45 minutes daily = 273 hours/year. When development goals become scheduled time, the question shifts from "will I get to it" to "is the time I allocated sufficient?"',
  },
  {
    icon: Clock,
    title: 'Development sessions protected from reactive work',
    desc: '"Learning block — monday/wednesday/friday 5:30am, 45 minutes." Placed as protected time, not as tentative intentions. The hardest part of personal development is not the work — it is protecting the time from the legitimate competing demands that fill every available slot. Calendar blocking creates a structure that requires active override, not passive forgetting.',
  },
  {
    icon: BarChart3,
    title: 'Skill progress tracked with quarterly milestones',
    desc: 'Development goals set in January without quarterly milestones become invisible until December, when the gap between intention and reality is discovered. "Q1: foundational vocabulary — 500 words." "Q2: conversational practice with native speaker." "Q3: comprehension of authentic content." Milestones make progress visible and course-correction timely — in April, not November.',
  },
  {
    icon: Layers,
    title: 'Development domains balanced across time',
    desc: '"Professional skills — 3 hours/week." "Physical development — 5 hours/week." "Creative practice — 2 hours/week." "Relational investment — 4 hours/week." Development that concentrates in one domain at the expense of others produces imbalance that eventually corrects — often through a crisis in the neglected area. Calendar analytics shows domain allocation before the imbalance creates consequences.',
  },
]

const PD_STEPS = [
  {
    step: 'Identify the development goals for the year by domain',
    detail: '"Professional: [specific skill or credential]." "Physical: [specific training goal]." "Creative: [specific output or practice]." "Learning: [specific knowledge area]." Development goals stated as outcomes, not activities. "Run a half-marathon by October 15" not "run more." Outcome specificity is what makes progress measurable.',
  },
  {
    step: 'Calculate the time requirement for each goal',
    detail: '"Half-marathon training: 5 runs/week averaging 45 minutes each = 3.75 hours/week for 16 weeks." "Spanish: 20 minutes/day = 2.3 hours/week for 52 weeks." Time requirements calculated and compared to available development hours. If requirements exceed capacity, goals are pruned before starting — not abandoned mid-year.',
  },
  {
    step: 'Place recurring development sessions on the calendar',
    detail: '"Spanish practice — 6:00am, 20 minutes, daily." "Leadership reading — tuesday/thursday 6:30am, 30 minutes." "Physical training — Mon/Wed/Fri/Sat 6:00am, varies." Recurring events placed as fixed appointments. Morning sessions before work are more reliably protected than evening sessions that compete with fatigue and family demands.',
  },
  {
    step: 'Set quarterly milestones and review dates',
    detail: '"Q1 milestone: [specific measurable outcome], review date: march 31." Milestone reviews placed on the calendar in January — not scheduled when the quarter is ending. Quarterly review is 20 minutes: did the milestone get reached? If yes, set Q2 milestone. If no, diagnose why and adjust.',
  },
  {
    step: 'Track development hours monthly',
    detail: '"Monthly development tally — last friday of each month, 15 minutes." Count actual hours invested in each development domain. Compare to planned allocation. The monthly tally is where invisible drift becomes visible. "I planned 12 leadership learning hours in March and completed 4" is information. "I\'ve been busy" is not.',
  },
  {
    step: 'Conduct an annual development review and reset',
    detail: '"Annual development review — december, 60 minutes." What skills advanced materially? What milestones were reached? What was the actual versus planned development hour allocation? What domains were under-invested? Next year\'s goals seeded from this review. Development compounds across years when this review happens every year without exception.',
  },
]

const PD_FAILURES = [
  { failure: 'Development goals set, no calendar time allocated', consequence: 'Development goals are aspirational by definition — they compete with the urgent, the reactive, and the already-scheduled. Without calendar allocation, development time is reliably consumed by work and does not return.' },
  { failure: 'Development sessions scheduled at end of day', consequence: 'End-of-day development time is the first to be pushed. Hard days push it consistently. Development happens only on easy days — which, for ambitious people, are rare.' },
  { failure: 'No milestones within a year-long goal', consequence: 'A one-year goal without quarterly milestones is invisible for nine months. By October it is too late to course-correct. Milestones make the year navigable in real time, not only in retrospect.' },
  { failure: 'Too many development goals simultaneously', consequence: 'Three major development goals competing for calendar time produce three underdeveloped outcomes rather than one completed outcome. Development focus is not lack of ambition — it is accurate estimation of available attention.' },
]

export default function PersonalDevelopmentCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Personal Development Calendar"
        title={
          <>
            Growth scheduled. Progress visible.
            <br />
            <em className="not-italic text-gold">Development time protected.</em>
          </>
        }
        lede="Personal development without a calendar is aspirational, not operational. A personal development calendar converts growth goals into scheduled appointments, calculates time requirements before commitments are made, tracks quarterly milestones so course correction happens in April not November, and ensures development time compounds rather than evaporating into reactive work."
        crumbs={[{ label: 'Personal Development Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/goal-setting-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Goal setting calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties makes personal development operational.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a personal development calendar that compounds.</h2>
          </Reveal>
          <div className="space-y-3">
            {PD_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four development calendar patterns that produce no compounding.</h2>
          </Reveal>
          <div className="space-y-3">
            {PD_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Development analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for personal development compounding.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Development hours per domain — weekly and monthly',
                'Quarterly milestone completion rate',
                'Development session completion rate',
                'Planned vs. actual development hour allocation',
                'Domain balance — professional vs. physical vs. creative',
                'Year-over-year development hour investment trends',
                'Goal completion rate by domain',
                'Annual development review preparation',
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
        title="Growth scheduled. Progress visible."
        subtitle="Development time protected, quarterly milestones tracked, and domain balance maintained. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Goal setting calendar', href: '/goal-setting-calendar' }}
      />
    </>
  )
}
