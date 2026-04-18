import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Task Management vs. Calendar — Why your calendar should be your operating system',
  description:
    'Task managers capture what needs to be done. Calendars capture when it\'s going to happen. Here\'s why the calendar wins as the single source of truth — and how to use both together without duplication.',
  alternates: { canonical: '/task-management-vs-calendar' },
  openGraph: {
    title: 'Task Management vs. Calendar — Momenties',
    description: 'Why the calendar should be your productivity operating system.',
    url: '/task-management-vs-calendar',
    type: 'website',
  },
}

const TASK_VS_CAL = [
  { dimension: 'What it captures', tasks: 'What needs to happen', calendar: 'When it\'s going to happen' },
  { dimension: 'Time constraint', tasks: 'None — tasks float freely', calendar: 'Hard — time is finite' },
  { dimension: 'Reality check', tasks: 'Easy to add 50 tasks for Tuesday', calendar: 'Tuesday is 8 hours. Calendar enforces limits.' },
  { dimension: 'Visibility to others', tasks: 'Private — others can\'t see your task list', calendar: 'Shared — team sees your commitments' },
  { dimension: 'Captures meetings', tasks: 'Only with manual effort', calendar: 'Native — what it was built for' },
  { dimension: 'Time analytics', tasks: 'None — no time data', calendar: 'Full — hours by category, meeting load' },
  { dimension: 'Voice input', tasks: 'Limited in most tools', calendar: 'Full — Momenties voice scheduling' },
  { dimension: 'Planning realism', tasks: 'Can plan aspirationally', calendar: 'Forces realistic scheduling' },
]

const WHEN_USE_TASKS = [
  'Capturing ideas before they have a time',
  'Project checklists and sub-tasks without time blocks',
  'Someday/maybe items that don\'t need a calendar slot',
  'Waiting-for lists and delegated items',
]

const WHEN_USE_CALENDAR = [
  'Anything with a deadline or due date',
  'Work you\'re committing to do at a specific time',
  'Meetings, calls, and appointments',
  'Deep work and focus blocks',
  'Events and recurring commitments',
  'Anything other people need to know about',
]

const INTEGRATION_SYSTEM = [
  { step: '01', title: 'Capture in tasks, execute on calendar', body: 'New ideas and to-dos go into the task manager. When you\'re ready to execute, move them to the calendar: block specific time to do the work. The calendar is where intentions become commitments.' },
  { step: '02', title: 'Weekly planning bridges the systems', body: 'Every Sunday: review task backlog, identify the top 3-5 priorities, add them to next week\'s calendar as work blocks. Tasks become scheduled. Everything else waits.' },
  { step: '03', title: 'Calendar is the single source of truth', body: 'The calendar shows reality. Task lists show aspiration. When they conflict, the calendar wins. "I want to do this" becomes "I\'m doing this Tuesday 2pm" only when it hits the calendar.' },
]

export default function TaskManagementVsCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Task Management vs. Calendar"
        title={
          <>
            Tasks capture intent.
            <br />
            <em className="not-italic text-gold">Calendar creates reality.</em>
          </>
        }
        lede="Task managers are where you store what needs to happen. Calendars are where you commit to when. The most effective productivity systems treat the calendar as the operating system — and use task managers as the backlog that feeds it. Here's how to think about both."
        crumbs={[{ label: 'Task Management vs. Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try Momenties free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/productivity-system"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Productivity system
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      {/* Comparison table */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">The comparison</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Task managers vs. calendars, across 8 dimensions.</h2>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-mono text-[10px] text-muted-foreground uppercase tracking-wide">Dimension</th>
                    <th className="text-left py-3 pr-4 font-mono text-[10px] text-muted-foreground uppercase tracking-wide">Task manager</th>
                    <th className="text-left py-3 font-mono text-[10px] text-gold/70 uppercase tracking-wide">Calendar</th>
                  </tr>
                </thead>
                <tbody>
                  {TASK_VS_CAL.map((row) => (
                    <tr key={row.dimension} className="border-b border-border/30">
                      <td className="py-3 pr-4 text-foreground/90 font-medium">{row.dimension}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.tasks}</td>
                      <td className="py-3 text-foreground/90">{row.calendar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* When to use each */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">When to use which</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">The right tool for the right capture.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            <Reveal>
              <div className="rounded-xl border border-border/50 p-5">
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Use a task manager for:</h3>
                <div className="space-y-2">
                  {WHEN_USE_TASKS.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-foreground/70">
                      <CheckCircle2 className="h-3 w-3 text-muted-foreground shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={60}>
              <div className="rounded-xl border border-border/50 p-5">
                <h3 className="text-sm font-medium text-gold mb-3">Use the calendar for:</h3>
                <div className="space-y-2">
                  {WHEN_USE_CALENDAR.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-foreground/90">
                      <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Integration system */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How to use both</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">The integration that makes both systems work.</h2>
          </Reveal>
          <div className="space-y-4">
            {INTEGRATION_SYSTEM.map((step, i) => (
              <Reveal key={step.step} delay={i * 60}>
                <div className="rounded-xl border border-border/50 p-5">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xl font-bold text-gold/30 shrink-0 w-8">{step.step}</span>
                    <div>
                      <h3 className="text-sm font-medium text-foreground mb-2">{step.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="The calendar half of your productivity system."
        subtitle="Natural language input, time analytics, and focus protection. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Productivity system', href: '/productivity-system' }}
      />
    </>
  )
}
