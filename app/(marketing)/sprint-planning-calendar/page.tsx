import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, Clock, BarChart3, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sprint Planning Calendar — How to run sprint ceremonies that actually protect dev time',
  description:
    'Sprint planning, standups, retrospectives, and demos require calendar discipline or they erode the development time they\'re meant to protect. Here\'s how to structure sprint ceremonies on the calendar so the agile rhythm serves the team instead of consuming it.',
  alternates: { canonical: '/sprint-planning-calendar' },
  openGraph: {
    title: 'Sprint Planning Calendar — Momenties',
    description: 'Sprint ceremonies structured on the calendar so agile rhythms protect dev time instead of consuming it.',
    url: '/sprint-planning-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Calendar,
    title: 'Sprint ceremonies as calendar anchors',
    desc: 'Sprint planning, daily standup, sprint review, and retrospective are recurring calendar events — not ad hoc meetings that get scheduled differently each sprint. Fixed ceremony slots protect the development hours between them. "Sprint planning — every other monday, 9-11am" creates a known structure the entire sprint depends on.',
  },
  {
    icon: Clock,
    title: 'Development focus blocks between ceremonies',
    desc: 'The calendar between ceremonies is as important as the ceremonies. Deep work blocks scheduled on tuesday through thursday mornings, before the standup, protect concentrated development time. Focus blocks placed on the calendar before availability is shared mean development hours exist as commitments, not gaps.',
  },
  {
    icon: BarChart3,
    title: 'Sprint velocity tracked through analytics',
    desc: 'Tag sprint planning, development blocks, reviews, and retrospectives separately. Analytics shows ceremony time vs. development time per sprint. Is ceremony overhead creeping up? Are deep work blocks completing as scheduled? Data identifies whether the sprint calendar is protecting or eroding development capacity.',
  },
  {
    icon: Zap,
    title: 'Backlog refinement placed mid-sprint',
    desc: 'Backlog refinement scheduled mid-sprint — not crammed before planning — gives the product owner time to prepare and the team context to estimate. "Backlog refinement — wednesday 2pm" placed in the recurring sprint calendar as a first-class ceremony. Well-refined backlog produces faster, more accurate sprint planning.',
  },
]

const CEREMONY_STRUCTURE = [
  {
    ceremony: 'Sprint planning',
    timing: 'First day of sprint, morning',
    duration: '2 hours (2-week sprint)',
    purpose: 'Commit sprint goal, select and size backlog items, assign initial owners. Output: agreed sprint goal and sprint backlog.',
  },
  {
    ceremony: 'Daily standup',
    timing: 'Every day, same time',
    duration: '15 minutes maximum',
    purpose: 'Surface blockers, share progress, identify coordination needs. Not a status report — an impediment detection mechanism.',
  },
  {
    ceremony: 'Backlog refinement',
    timing: 'Mid-sprint, Wednesday afternoon',
    duration: '60 minutes',
    purpose: 'Clarify upcoming stories, estimate complexity, identify dependencies. Output: ready-to-select backlog for next sprint planning.',
  },
  {
    ceremony: 'Sprint review',
    timing: 'Last day of sprint, afternoon',
    duration: '60-90 minutes',
    purpose: 'Demo completed work to stakeholders. Inspect what was built. Adapt the product backlog based on feedback.',
  },
  {
    ceremony: 'Retrospective',
    timing: 'Last day of sprint, after review',
    duration: '60-90 minutes',
    purpose: 'Inspect the process. One actionable improvement per sprint. Output: a single concrete change to implement next sprint.',
  },
]

const SPRINT_CALENDAR_RULES = [
  { rule: 'Ceremonies are fixed recurring events', detail: 'Sprint ceremonies recur on the same days and times every sprint. Variable ceremony scheduling requires re-negotiation each sprint and creates calendar conflicts that fragment development blocks.' },
  { rule: 'Development blocks precede ceremony availability', detail: 'Focus blocks go on the calendar before ceremony times are shared with stakeholders. Morning development blocks (9am-12pm) placed first protect the highest-value hours from meeting creep.' },
  { rule: 'No ad hoc sprint meetings without removing something', detail: 'Every unplanned meeting during a sprint displaces a development block. If a meeting must be added, a compensating focus block must be found. The sprint calendar has a fixed capacity.' },
  { rule: 'Standup is 15 minutes regardless of attendance', detail: 'A standup that runs 30 minutes is not a standup — it\'s a planning meeting in disguise. Time-box enforced on the calendar, not negotiated daily.' },
  { rule: 'Retrospective actions go on the next sprint\'s calendar', detail: 'Retrospective improvements that don\'t make it onto the next sprint\'s calendar don\'t get implemented. Convert each action to a calendar event or backlog item before the retrospective closes.' },
]

export default function SprintPlanningCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Sprint Planning Calendar"
        title={
          <>
            Sprint ceremonies structured.
            <br />
            <em className="not-italic text-gold">Dev time protected.</em>
          </>
        }
        lede="Sprint ceremonies without calendar discipline erode the development time they exist to protect. Sprint planning lands on different days each cycle, standups expand, backlog refinement gets skipped, and retrospective actions disappear. Here's how to structure sprint ceremonies as fixed calendar anchors so the agile rhythm serves the team — and how to protect development focus blocks between them."
        crumbs={[{ label: 'Sprint Planning Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/time-blocking"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Time blocking guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties supports sprint calendar discipline.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Ceremony structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How each sprint ceremony fits on the calendar.</h2>
          </Reveal>
          <div className="space-y-3">
            {CEREMONY_STRUCTURE.map((item, i) => (
              <Reveal key={item.ceremony} delay={i * 40}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-sm font-medium text-foreground">{item.ceremony}</h3>
                    <span className="font-mono text-[10px] text-gold/60 uppercase tracking-wide shrink-0">{item.duration}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{item.timing}</p>
                  <p className="text-xs text-foreground/80 leading-relaxed">{item.purpose}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Calendar rules</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Five rules for a sprint calendar that protects development time.</h2>
          </Reveal>
          <div className="space-y-3">
            {SPRINT_CALENDAR_RULES.map((item, i) => (
              <Reveal key={item.rule} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-6 shrink-0 pt-0.5 text-center">{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">{item.rule}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Sprint analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties surfaces for sprint calendar health.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Ceremony time vs. development time per sprint',
                'Focus block completion rate',
                'Deep work hours per sprint week',
                'Meeting load trend by sprint',
                'Standup duration trend',
                'Retrospective action completion rate',
                'Sprint to sprint ceremony drift',
                'Developer focus hour availability',
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
        title="Sprint ceremonies structured. Dev time protected."
        subtitle="Fixed ceremony anchors, development focus blocks, and sprint velocity analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Time blocking guide', href: '/time-blocking' }}
      />
    </>
  )
}
