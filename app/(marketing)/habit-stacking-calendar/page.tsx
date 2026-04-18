import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Zap, Clock, BarChart3, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Habit Stacking Calendar — How to use your calendar to build habits that stick',
  description:
    'Habit stacking uses existing calendar anchors to insert new behaviors without relying on willpower. By tying new habits to established calendar events, the calendar becomes the cue — no separate habit tracking system required. Here\'s how to design a habit stacking calendar that builds behaviors that compound.',
  alternates: { canonical: '/habit-stacking-calendar' },
  openGraph: {
    title: 'Habit Stacking Calendar — Momenties',
    description: 'Use existing calendar anchors to build new habits without willpower or separate tracking.',
    url: '/habit-stacking-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Zap,
    title: 'Existing calendar events as habit anchors',
    desc: 'Habit stacking works by attaching a new behavior to an existing calendar anchor. "Before my monday standup — 5 minutes of focused breathing." "After my friday weekly review — 10-minute walk." The existing event is the cue; the calendar already triggers it daily or weekly. No separate habit tracker needed when the calendar is the system.',
  },
  {
    icon: Clock,
    title: 'Habit blocks placed at consistent times',
    desc: 'Habits that don\'t have calendar time get displaced. "Journaling — 7am daily" placed on the calendar as a recurring 10-minute event creates a protected commitment. When the time is visible on the calendar, it\'s defended. When it exists only as an intention, it\'s crowded out by the first meeting that requests that slot.',
  },
  {
    icon: BarChart3,
    title: 'Habit completion analytics',
    desc: 'Tag calendar blocks by habit category: health, learning, relationships, creative practice. Analytics shows which habits have consistent calendar time and which don\'t. Which days does the reading habit get displaced? Which habit consistently runs at full duration? Data surfaces which habits are calendar-stable and which need reinforcement.',
  },
  {
    icon: Calendar,
    title: 'Habit stacks designed around the weekly calendar rhythm',
    desc: 'The most durable habit stacks are synchronized with the weekly calendar rhythm. Monday morning energy is used for challenging habits. Friday afternoon is suited for reflection and review habits. Saturday morning is available for longer practice blocks. Habits matched to the natural rhythm of the week require less effort to maintain.',
  },
]

const STACKING_EXAMPLES = [
  {
    anchor: 'Morning calendar review',
    habit: 'Before opening email, spend 5 minutes writing the single most important task for the day.',
    why: 'The daily review is already a calendar anchor — adding 5 minutes of priority writing makes it a compound routine.',
  },
  {
    anchor: 'Before weekly standup',
    habit: 'Review the current sprint\'s key result progress for 3 minutes.',
    why: 'The standup is a fixed recurring event. Prepending a 3-minute review builds OKR awareness into the existing rhythm.',
  },
  {
    anchor: 'After weekly review',
    habit: 'Send one "thank you" or "thinking of you" message to someone in your network.',
    why: 'The weekly review already ends with next-week planning. A one-message relationship habit takes 2 minutes and compounds over a year.',
  },
  {
    anchor: 'Before leaving for lunch',
    habit: '10-minute walk regardless of weather.',
    why: 'Lunch is a calendar transition point. The walk is attached to the departure cue, not scheduled in the middle of a work block.',
  },
  {
    anchor: 'After last meeting of the day',
    habit: 'Process inbox to zero — respond, delegate, or archive everything received today.',
    why: 'The last meeting is a reliable daily end-point. The inbox habit takes 10-15 minutes and ends the workday with a clean slate.',
  },
]

const HABIT_DESIGN_RULES = [
  { rule: 'Stack to existing anchors, not aspirational ones', detail: 'A habit stacked to "every morning" fails if morning isn\'t a reliable calendar anchor. Stack to an event that already occurs consistently: the daily standup, the weekly review, the commute.' },
  { rule: 'Start smaller than feels significant', detail: 'A 5-minute habit that executes reliably builds more than a 30-minute habit that executes occasionally. The consistency of showing up is the compound variable — duration is secondary.' },
  { rule: 'One new habit per stack at a time', detail: 'Adding three new behaviors to an existing anchor at once succeeds rarely. One new behavior per anchor, proven consistent for 4 weeks, before the next behavior is added.' },
  { rule: 'Place the calendar block before the anchor', detail: '"Reading — 8:50am, before 9am standup" is more durable than "reading — sometime before standup." Specific time commitment makes the habit a protected block, not a vague intention.' },
  { rule: 'Track completion in the calendar, not separately', detail: 'Habit tracking apps create a second system that requires maintenance. Mark habit blocks complete or incomplete in the calendar. The calendar is already the system — keep tracking there.' },
]

export default function HabitStackingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Habit Stacking Calendar"
        title={
          <>
            New habits attached to existing ones.
            <br />
            <em className="not-italic text-gold">Calendar is the system.</em>
          </>
        }
        lede="Most habit-building fails because new behaviors rely on willpower and a separate tracking system that creates friction. Habit stacking solves this by attaching new behaviors to calendar events that already reliably occur. The calendar is already the cue — standup at 9am is already on the calendar, so the 5-minute journaling practice that precedes it requires no new habit trigger. Here's how to design a habit stacking calendar that builds behaviors without a second system."
        crumbs={[{ label: 'Habit Stacking Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/morning-routine-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Morning routine calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties supports habit stacking discipline.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Stacking examples</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Five habit stacks built from existing calendar anchors.</h2>
          </Reveal>
          <div className="space-y-3">
            {STACKING_EXAMPLES.map((item, i) => (
              <Reveal key={item.anchor} delay={i * 40}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[10px] text-gold/60 uppercase tracking-wide">Anchor:</span>
                    <span className="text-sm font-medium text-foreground">{item.anchor}</span>
                  </div>
                  <p className="text-xs text-foreground/90 mb-2"><span className="text-gold/70 font-medium">Habit: </span>{item.habit}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.why}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Design rules</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Five rules for habit stacks that survive contact with the calendar.</h2>
          </Reveal>
          <div className="space-y-3">
            {HABIT_DESIGN_RULES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Habit analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for habit stack consistency.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Habit block completion rate by habit',
                'Habit consistency streak per week',
                'Hours per habit category per month',
                'Habit displacement patterns (what replaced it)',
                'Anchor event reliability (missed anchors)',
                'Habit block duration: planned vs. actual',
                'Most consistent and least consistent habits',
                'Habit time allocation vs. stated priorities',
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
        title="Habits stacked to anchors. Calendar is the system."
        subtitle="Habit blocks attached to calendar events, consistency tracking, and habit analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Morning routine calendar', href: '/morning-routine-calendar' }}
      />
    </>
  )
}
