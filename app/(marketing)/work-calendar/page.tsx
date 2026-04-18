import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BarChart3, Shield, Zap, Users, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Work Calendar App — Meetings, deep work, and time analytics in one place',
  description:
    'A work calendar that does more than show meetings: Momenties tracks where your time actually goes, protects focus blocks, and gives you weekly analytics to see how work hours are really spent.',
  alternates: { canonical: '/work-calendar' },
  openGraph: {
    title: 'Work Calendar App — Momenties',
    description: 'Meetings, deep work, and time analytics in one work calendar.',
    url: '/work-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: BarChart3,
    title: 'Where your work time actually goes',
    desc: 'Most calendars show meetings. Momenties analytics show the split between meetings, deep work, admin, and reactive time. Weekly breakdown shows patterns you can\'t see in a single day.',
  },
  {
    icon: Shield,
    title: 'Focus blocks that stay protected',
    desc: 'Block deep work time like a meeting. Focus mode silences notifications and pauses collaboration tools. The protected block survives the week because the calendar defends it.',
  },
  {
    icon: Zap,
    title: 'Natural language input — works at work pace',
    desc: '"Standup tomorrow 9:15 recurring daily." "One-on-one Alex thursday 30 mins weekly." "Sprint planning next monday 2 hours." Fast enough to use during the call that just scheduled the meeting.',
  },
  {
    icon: Users,
    title: 'Team coordination without the back-and-forth',
    desc: 'Availability overlay shows your whole team\'s schedule. Find a meeting time, book it, send invites — all from one view. The "when are you free?" message becomes obsolete.',
  },
]

const WORK_PROBLEMS = [
  {
    problem: 'Meetings expand to fill all available time',
    solution: 'Block deep work before meetings get scheduled there. Protected blocks signal unavailability. Meetings fill the gaps, not the whole day.',
  },
  {
    problem: 'You don\'t know where the week went',
    solution: 'Weekly analytics shows hours by category: meetings, focus, admin, reviews. See the pattern after one week. Adjust after two.',
  },
  {
    problem: 'Back-to-back meetings with no recovery',
    solution: 'Buffer blocks between meetings. 10 minutes minimum. Block them as recurring daily buffers. Your afternoon brain thanks you.',
  },
  {
    problem: 'Work bleeds into personal time',
    solution: 'Hard stop block at 6pm. Focus mode on after-hours. Daily Brief shows the day before it starts — not the evening before it ends.',
  },
]

export default function WorkCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Work Calendar"
        title={
          <>
            Not just meetings.
            <br />
            <em className="not-italic text-gold">Your whole work week.</em>
          </>
        }
        lede="A work calendar should show where your time goes, protect the hours that matter, and make scheduling fast enough to do in real time. Most calendars only show meetings. Momenties shows the full picture — and helps you change it."
        crumbs={[{ label: 'Work Calendar' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · Works with Google Calendar</p>
      </PageHero>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Features</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Built for how work actually happens.</h2>
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

      {/* Work calendar problems */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Common problems, calendar solutions</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">What a good work calendar fixes.</h2>
          </Reveal>
          <div className="space-y-3">
            {WORK_PROBLEMS.map((item, i) => (
              <Reveal key={item.problem} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-xs font-mono text-gold/60 uppercase tracking-wide mb-1">Problem</p>
                  <p className="text-sm font-medium text-foreground mb-3">{item.problem}</p>
                  <p className="text-xs font-mono text-emerald-400/60 uppercase tracking-wide mb-1">Calendar fix</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.solution}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What it tracks */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Analytics categories</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks in your work calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Hours in meetings vs. solo work',
                'Deep work blocks completed vs. cancelled',
                'Meeting load by day of week',
                'Time per project or client tag',
                'Focus time percentage of work hours',
                'Recurring meetings: attendance and value',
                'Buffer utilization vs. eaten by overruns',
                'Week-over-week meeting trend',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-foreground/80">
                  <CheckCircle2 className="h-3 w-3 text-gold shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="See where your work week actually goes."
        subtitle="Meeting tracking, focus protection, team scheduling, and weekly analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See analytics', href: '/features/analytics' }}
      />
    </>
  )
}
