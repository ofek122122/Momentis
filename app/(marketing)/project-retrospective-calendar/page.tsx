import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { RefreshCw, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Project Retrospective Calendar — How to schedule retrospectives that actually improve future projects',
  description:
    'A project retrospective calendar schedules structured reviews immediately after project close, captures lessons while context is fresh, and places follow-up checks to verify that identified improvements were actually made. Most retrospective insights are never acted on — not because teams lack insight, but because improvements were identified without placing a follow-up on the calendar.',
  alternates: { canonical: '/project-retrospective-calendar' },
  openGraph: {
    title: 'Project Retrospective Calendar — Momenties',
    description: 'Schedule retrospectives that produce improvements, not just observations.',
    url: '/project-retrospective-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: RefreshCw,
    title: 'Retrospective scheduled within 72 hours of project close',
    desc: '"Project retrospective — 72 hours after delivery." The retrospective placed as a calendar event when the project starts — not scheduled reactively after delivery. Retrospectives held within 72 hours capture specific, contextual observations. Retrospectives held two weeks after delivery capture impressions, not facts. The window placed at project kickoff is the window that actually gets scheduled.',
  },
  {
    icon: Clock,
    title: 'Mid-project review placed at scope change, not sprint boundary',
    desc: '"Mid-project review — triggered by scope change, blocker, or milestone miss." Mid-project reviews placed as conditional events: when scope changes, when a blocker surfaces, or when a milestone is missed. Teams that wait for sprint boundaries to surface blockers wait longer than necessary. The mid-project review event triggers the conversation before compounding begins.',
  },
  {
    icon: BarChart3,
    title: 'Improvement follow-up placed 30 days after retrospective',
    desc: '"Retrospective follow-up — 30 days after retro, verify implemented changes." Retrospective action items die in notes that no one revisits. A 30-day follow-up placed at the time of the retrospective converts observations into accountable changes. The follow-up review: which improvements were implemented, which were not, and why. Without the follow-up, the retrospective is documentation, not improvement.',
  },
  {
    icon: Shield,
    title: 'Quarterly meta-retrospective placed across multiple projects',
    desc: '"Quarterly meta-retrospective — which patterns repeat across all retros?" Quarterly meta-retrospective placed as a standing event: review the last quarter\'s retrospective notes for patterns. Teams that see the same blockers appearing in four consecutive retrospectives have a structural problem, not a project problem. The quarterly meta-retrospective is the event that identifies systemic issues.',
  },
]

const RETRO_STEPS = [
  {
    step: 'Place the retrospective date at project kickoff — not close',
    detail: '"Project kickoff: delivery date confirmed → retrospective placed 72 hours after delivery." Retrospective scheduled when the project starts. End-of-project scheduling pressure always produces retrospectives that are deferred, compressed, or skipped entirely. A retrospective placed at kickoff is treated as a project deliverable — not an optional cleanup task. The calendar commitment is made before the pressure builds.',
  },
  {
    step: 'Place a pre-retrospective data collection window',
    detail: '"Pre-retro data collection — 24 hours before retrospective, 20 minutes." Survey distributed the day before. Team members document what went well, what didn\'t, and what to change before the meeting. Teams that arrive at a retrospective without prior reflection spend the first half generating observations rather than analyzing them. Pre-collection produces better input in less facilitation time.',
  },
  {
    step: 'Structure the retrospective into four time blocks',
    detail: '"What went well — 20 minutes." "What didn\'t — 20 minutes." "Root causes — 15 minutes." "Action items — 15 minutes." Four blocks with hard stops placed on the calendar. Action items are assigned owners and deadlines during the meeting — not documented as bullets that no one owns. The action item becomes a calendar event before the retrospective ends.',
  },
  {
    step: 'Convert every action item into a calendar event during the retro',
    detail: '"Action item: improve pre-deployment testing checklist — owner: [name], due: [30 days]." Each action item from the retrospective placed as a calendar event with an owner and a due date during the retrospective meeting. Action items that leave the retrospective as meeting notes without calendar events are not action items — they are observations. The calendar event is the accountability mechanism.',
  },
  {
    step: 'Place the 30-day follow-up before the retrospective ends',
    detail: '"30-day retrospective follow-up — [date], 20 minutes." Follow-up event placed before the retrospective ends. Not scheduled after the retrospective. Not added to a backlog. Placed on the calendar in the meeting. The follow-up reviews: which action items were completed, which were not, and which are still valid. The follow-up converts retrospective insights into measurable outcomes.',
  },
  {
    step: 'Conduct a quarterly meta-retrospective across all projects',
    detail: '"Quarterly meta-retrospective — Q2, Q3, Q4, Q1, 60 minutes." Quarterly meta-retrospective placed in January as a standing event for the full year. Pull all retrospective notes from the quarter. What patterns appear in multiple projects? What blockers recurred? What improvements were actually made? The meta-retrospective is the event that surfaces systemic problems invisible at the project level.',
  },
]

const RETRO_FAILURES = [
  { failure: 'Retrospective scheduled reactively after project close', consequence: 'Retrospectives scheduled after delivery are subject to the same scheduling pressure that delayed the delivery. They are the first thing deferred when the next project begins. Retrospectives placed at project kickoff are treated as deliverables. The calendar commitment determines whether the retrospective happens.' },
  { failure: 'Action items documented without calendar events', consequence: 'Action items that live in retrospective notes are not committed actions — they are documented intentions. The conversion rate from retrospective note to implemented improvement is low without a calendar event and an owner. The action item event placed during the retrospective is the mechanism that closes the loop.' },
  { failure: 'No follow-up placed after retrospective', consequence: 'Retrospectives without follow-up reviews are observations, not improvement systems. Teams that hold rigorous retrospectives without 30-day follow-ups produce consistently high-quality retrospective documentation of the same unresolved problems. The follow-up is what distinguishes a retrospective practice from a retrospective ritual.' },
  { failure: 'Quarterly meta-retrospective not scheduled', consequence: 'Individual project retrospectives surface project-level issues. Quarterly meta-retrospectives surface systemic issues invisible at the project level. Teams that do not conduct meta-retrospectives see the same patterns across projects and attribute them to individual project circumstances rather than systemic causes that can be addressed.' },
]

export default function ProjectRetrospectiveCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Project Retrospective Calendar"
        title={
          <>
            Retrospectives scheduled. Improvements tracked.
            <br />
            <em className="not-italic text-gold">Action items never die in meeting notes.</em>
          </>
        }
        lede="Most retrospective insights are never acted on — not because teams lack insight, but because improvements were identified without placing a follow-up on the calendar. A project retrospective calendar places the review date at project kickoff, converts every action item into a calendar event during the retro, and schedules a 30-day follow-up before the retrospective ends — so improvements are tracked, not just documented."
        crumbs={[{ label: 'Project Retrospective Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/sprint-planning-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Sprint planning calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties converts retrospectives into improvements.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a retrospective calendar that produces improvements, not observations.</h2>
          </Reveal>
          <div className="space-y-3">
            {RETRO_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four retrospective patterns that produce documentation, not improvement.</h2>
          </Reveal>
          <div className="space-y-3">
            {RETRO_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Retrospective analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for retrospective discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Retrospective held within 72 hours of project close',
                'Action item conversion rate to calendar events',
                '30-day follow-up completion rate',
                'Action item implementation rate per retrospective',
                'Mid-project review triggered within 48 hours of blocker',
                'Quarterly meta-retrospective completion rate',
                'Recurring issue identification rate',
                'Pattern-to-systemic-fix conversion rate',
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
        title="Retrospectives scheduled. Improvements tracked."
        subtitle="72-hour retro windows, action item follow-up calendar, and quarterly meta-retrospective. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Sprint planning calendar', href: '/sprint-planning-calendar' }}
      />
    </>
  )
}
