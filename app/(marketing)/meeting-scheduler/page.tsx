import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Zap, Users, Calendar, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Meeting Scheduler — AI-powered scheduling for individuals and teams',
  description:
    'Schedule any meeting in seconds with natural language, find availability across multiple people, and add all attendees at once. Momenties meeting scheduler works with Google Calendar and Apple Calendar.',
  alternates: { canonical: '/meeting-scheduler' },
  openGraph: {
    title: 'Meeting Scheduler — Momenties',
    description: 'Any meeting scheduled in seconds. No forms, no friction.',
    url: '/meeting-scheduler',
    type: 'website',
  },
}

const EXAMPLES = [
  {
    input: '"1:1 with Alex wednesday 2pm 30 mins"',
    parsed: '1:1 with Alex · Wed 2:00–2:30 PM',
    note: 'Attendee added when you\'ve connected your team',
  },
  {
    input: '"team retrospective friday afternoon, 1 hour"',
    parsed: 'Team retrospective · Fri 2:00–3:00 PM',
    note: 'AI places in afternoon when no specific time given',
  },
  {
    input: '"board meeting next tuesday 10am, 2 hours, recurring monthly"',
    parsed: 'Board meeting · Tue 10:00 AM–12:00 PM, monthly',
    note: 'Recurring set in one sentence',
  },
  {
    input: '"sales call John Smith tomorrow 3pm"',
    parsed: 'Sales call — John Smith · Tomorrow 3:00 PM',
    note: 'Name preserved in title',
  },
  {
    input: '"design review thursday morning, 45 minutes, bring mockups"',
    parsed: 'Design review · Thu 9:00 AM · notes: bring mockups',
    note: 'Context captured in description',
  },
]

const FEATURES = [
  {
    icon: Zap,
    title: 'Natural language — any format',
    desc: 'Time, duration, attendees, recurrence, and notes — all in one sentence. No form, no tab-hopping, no manual field-filling.',
  },
  {
    icon: Users,
    title: 'Multi-person availability',
    desc: 'Team overlay shows free/busy for all attendees. Find the first available slot across 5 people in seconds. No Doodle poll required.',
  },
  {
    icon: Calendar,
    title: 'Google Calendar and Apple Calendar sync',
    desc: 'Meetings created in Momenties appear instantly in Google Calendar and Apple Calendar. Attendees get Google Calendar invites automatically.',
  },
  {
    icon: Clock,
    title: 'Scheduling links (Q3)',
    desc: 'Share a link. Invitees pick from your available slots. Event appears on your calendar without any back-and-forth. Coming Q3.',
  },
]

export default function MeetingSchedulerPage() {
  return (
    <>
      <PageHero
        eyebrow="Meeting Scheduler"
        title={
          <>
            Any meeting scheduled
            <br />
            <em className="not-italic text-gold">in under 5 seconds.</em>
          </>
        }
        lede="Scheduling a meeting should take less time than it takes to open the calendar app. Momenties accepts natural language — time, duration, attendees, recurrence — and creates the event instantly. No form. No friction."
        crumbs={[{ label: 'Meeting Scheduler' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/team-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Team scheduling
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Works with Google and Apple Calendar</p>
      </PageHero>

      {/* Parsed examples */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Input → Event</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Say it. It's scheduled.</h2>
          </Reveal>
          <div className="space-y-3">
            {EXAMPLES.map((ex, i) => (
              <Reveal key={ex.input} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-4">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                    <div className="flex-1">
                      <p className="font-mono text-[10px] text-muted-foreground/60 mb-1">You type</p>
                      <p className="font-mono text-sm text-foreground">{ex.input}</p>
                    </div>
                    <div className="hidden sm:block text-gold/30 text-xl pt-4">→</div>
                    <div className="flex-1">
                      <p className="font-mono text-[10px] text-muted-foreground/60 mb-1">Calendar event</p>
                      <p className="text-sm text-foreground/90 mb-1">{ex.parsed}</p>
                      <p className="text-[11px] text-muted-foreground/60 italic">{ex.note}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Features</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Everything a meeting scheduler needs.</h2>
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

      {/* How much time scheduling costs */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">The real cost of slow scheduling.</h2>
          </Reveal>
          <div className="space-y-4 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                A typical calendar form takes 45–90 seconds to complete — title, date, start time, end time, add guests, set location, write description. For someone who schedules 10 meetings a day, that's 15 minutes of form-filling before any actual work happens.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Natural language scheduling brings that to under 5 seconds per event. Ten meetings: 50 seconds instead of 15 minutes. Across a year, that's hours back per week.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <div className="space-y-2">
                {[
                  '10 meetings/day × 5 seconds = 50 seconds scheduling time',
                  '250 working days/year = 3.5 hours saved in scheduling alone',
                  'Voice input from mobile makes it zero-friction anywhere',
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="Schedule every meeting in the time it takes to think of it."
        subtitle="Natural language, voice, team availability. Free plan includes all input methods."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Team scheduling', href: '/team-calendar' }}
      />
    </>
  )
}
