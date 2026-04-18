import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, BarChart3, Shield, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Habit Tracker Calendar — Build habits on the calendar, not in a separate app',
  description:
    'A habit tracker only works if you actually check it. Building habits directly into your calendar means they live where your day already lives. No separate app, no friction, just recurring blocks that show up alongside everything else.',
  alternates: { canonical: '/habit-tracker-calendar' },
  openGraph: {
    title: 'Habit Tracker Calendar — Momenties',
    description: 'Build and track habits directly on the calendar — no separate app needed.',
    url: '/habit-tracker-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Calendar,
    title: 'Habits are recurring calendar events',
    desc: 'A habit is just a recurring event with intention. "Morning run — 6:30am, every weekday." "Journaling — 10 mins, every morning." "Weekly review — sunday 6pm." On the calendar before you start the habit.',
  },
  {
    icon: Shield,
    title: 'Habits protected like meetings',
    desc: 'A recurring block signals to everyone — including yourself — that this time is committed. The run doesn\'t get skipped for a call because the call can\'t book a block that already exists.',
  },
  {
    icon: BarChart3,
    title: 'Completion analytics over time',
    desc: 'Tag habit blocks as completed or rescheduled. Analytics shows completion rate over weeks and months. Streak tracking. Which habits stuck? Which ones got moved every week until they disappeared? The data tells the truth.',
  },
  {
    icon: Zap,
    title: 'Voice-captured habit adjustments',
    desc: '"Reschedule morning run to 7am tuesday." Voice-added at 5:55am when the alarm is too loud. The habit moves, not disappears. One adjustment — not a broken streak.',
  },
]

const HABIT_TYPES = [
  {
    category: 'Morning habits',
    examples: ['Morning run — 6:30am 30 mins, weekdays', 'Journaling — 7am 10 mins, daily', 'Cold shower — 7:15am 5 mins, daily', 'Reading — 7:20am 20 mins, daily'],
  },
  {
    category: 'Work habits',
    examples: ['Daily planning — 8:45am 15 mins, weekdays', 'Deep work block — 9am 2hr, weekdays', 'Inbox zero — 5pm 15 mins, weekdays', 'Weekly review — friday 4pm 45 mins'],
  },
  {
    category: 'Evening habits',
    examples: ['No-screen wind-down — 9:30pm, daily', 'Next-day prep — 9pm 10 mins, weekdays', 'Gratitude journal — 9:45pm 5 mins, daily', 'Reading before sleep — 10pm 30 mins, daily'],
  },
  {
    category: 'Weekly habits',
    examples: ['Long run — saturday 7am 90 mins', 'Meal prep — sunday 2pm 2hrs', 'Weekly review — sunday 6pm 45 mins', 'Family dinner — sunday 6pm, weekly'],
  },
]

const CALENDAR_ADVANTAGES = [
  { title: 'No app switching', detail: 'Habits live where your day already lives. You see them when you check your calendar — not only when you open a habit app.' },
  { title: 'Context alongside habits', detail: 'Your run is next to the 7am meeting. Your journaling block is before your 8am standup. Context makes habits easier to fit, not harder.' },
  { title: 'Schedule conflicts surface early', detail: 'A packed Tuesday shows the run needs to move. You see it the night before — not when the alarm goes off.' },
  { title: 'Analytics on the same data', detail: 'Habit completion contributes to total time analytics. See how personal habits affect productive work time and vice versa.' },
]

export default function HabitTrackerCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Habit Tracker Calendar"
        title={
          <>
            Habits on the calendar.
            <br />
            <em className="not-italic text-gold">Not in a separate app.</em>
          </>
        }
        lede="A habit tracker only works if you check it. Building habits directly into your calendar means they live where your day already lives — next to meetings, alongside work blocks, visible every time you look at today. No separate app, no friction, just recurring blocks that show up and get done."
        crumbs={[{ label: 'Habit Tracker Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start tracking free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/morning-routine"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Morning routine guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How habit tracking works in Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four reasons calendar-based habit tracking works.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Habit examples</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Common habits as calendar blocks.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {HABIT_TYPES.map((type, i) => (
              <Reveal key={type.category} delay={i * 60}>
                <div className="rounded-xl border border-border lux-card p-5 h-full">
                  <h3 className="text-xs font-mono text-gold/70 uppercase tracking-wide mb-3">{type.category}</h3>
                  <div className="space-y-2">
                    {type.examples.map((ex) => (
                      <div key={ex} className="flex items-start gap-2 text-xs text-foreground/80">
                        <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                        {ex}
                      </div>
                    ))}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Why calendar beats a separate app</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">The calendar is already where your day lives.</h2>
          </Reveal>
          <div className="space-y-3">
            {CALENDAR_ADVANTAGES.map((item, i) => (
              <Reveal key={item.title} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-2">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Build habits where your day already lives."
        subtitle="Recurring habit blocks, completion analytics, and streak tracking. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Morning routine guide', href: '/morning-routine' }}
      />
    </>
  )
}
