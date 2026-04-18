import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, BarChart3, Zap, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Daily Planner App — Why the calendar is the only daily planner you need',
  description:
    'Most daily planner apps live separate from the calendar — which means your plan and your actual day never quite connect. Momenties is a daily planner built directly into the calendar: voice capture, Daily Brief, analytics, and planning that lives where work happens.',
  alternates: { canonical: '/daily-planner-app' },
  openGraph: {
    title: 'Daily Planner App — Momenties',
    description: 'Calendar-native daily planning: Daily Brief, voice capture, and analytics.',
    url: '/daily-planner-app',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Calendar,
    title: 'Daily Brief every morning',
    desc: 'Each morning, Daily Brief surfaces today\'s events in order, time until the next commitment, approaching deadlines, and the day\'s priorities. A plan for the day — without opening a separate app.',
  },
  {
    icon: Zap,
    title: 'Capture plans in under 10 seconds',
    desc: '"Team lunch tuesday noon." "Doctor appointment thursday 2pm." "Review proposal friday morning 30 mins." Voice or text — captured before you finish the thought. The plan is on the calendar immediately.',
  },
  {
    icon: Shield,
    title: 'Plan the day the night before',
    desc: '"Deep work block tomorrow 9-11am." "Morning run 6:30am." Voice-captured the evening before. Tomorrow\'s calendar is structured before you go to sleep — not improvised when the alarm goes off.',
  },
  {
    icon: BarChart3,
    title: 'Analytics turn plans into insights',
    desc: 'Did the day match the plan? Analytics shows planned vs. completed, deep work hours, meeting load, and time per project. The daily planner that tells you what actually happened — not just what was scheduled.',
  },
]

const PLANNING_RITUAL = [
  { time: 'Evening before', steps: ['Voice-capture tomorrow\'s key blocks and tasks', 'Check next day\'s existing calendar commitments', 'Set deep work and focus blocks before meetings fill the day', 'Identify the one thing that would make tomorrow successful'] },
  { time: 'Morning', steps: ['Open Daily Brief — review the day in order', 'Confirm deep work block is protected', 'Add any overnight thoughts or new commitments', 'Close the brief and begin the first block'] },
  { time: 'End of day', steps: ['Check analytics: what did the day actually contain?', 'Note anything unfinished for tomorrow', 'Voice-capture tomorrow\'s additions', 'Disconnect — the next day is already structured'] },
]

const DAILY_PLANNER_COMPARISON = [
  { dimension: 'Where the plan lives', standalone: 'Separate app — requires switching context', calendar: 'Inside the calendar — plan and day are one' },
  { dimension: 'Adding to the plan', standalone: 'Open app, tap, type, save', calendar: 'Voice or text, 10 seconds' },
  { dimension: 'Conflict visibility', standalone: 'Plan doesn\'t know about your meetings', calendar: 'Plan and meetings on the same timeline' },
  { dimension: 'Analytics', standalone: 'Task completion rate', calendar: 'Time distribution, deep work hours, meeting ratio' },
  { dimension: 'Morning review', standalone: 'Open planner app, open calendar app', calendar: 'One Daily Brief — both in one' },
]

export default function DailyPlannerAppPage() {
  return (
    <>
      <PageHero
        eyebrow="Daily Planner App"
        title={
          <>
            Plan the day.
            <br />
            <em className="not-italic text-gold">In the calendar itself.</em>
          </>
        }
        lede="Most daily planner apps live separate from the calendar — which means your plan and your actual day never quite connect. Momenties is a daily planner built directly into the calendar: voice capture for instant planning, a Daily Brief that surfaces the day every morning, and analytics that show whether the plan became reality."
        crumbs={[{ label: 'Daily Planner App' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start planning free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/productivity-planner"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Productivity planner
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How daily planning works</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for calendar-native daily planning.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Daily planning ritual</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Evening, morning, and end of day.</h2>
          </Reveal>
          <div className="space-y-4">
            {PLANNING_RITUAL.map((phase, i) => (
              <Reveal key={phase.time} delay={i * 60}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <h3 className="text-xs font-mono text-gold/70 uppercase tracking-wide mb-4">{phase.time}</h3>
                  <div className="space-y-2">
                    {phase.steps.map((step) => (
                      <div key={step} className="flex items-start gap-2 text-xs text-foreground/80">
                        <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                        {step}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Comparison</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Standalone daily planner vs. calendar-native.</h2>
          </Reveal>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-mono text-[10px] text-gold/60 uppercase tracking-wide">Dimension</th>
                  <th className="text-left py-3 px-4 font-mono text-[10px] text-gold/60 uppercase tracking-wide">Standalone planner</th>
                  <th className="text-left py-3 px-4 font-mono text-[10px] text-gold/60 uppercase tracking-wide">Momenties</th>
                </tr>
              </thead>
              <tbody>
                {DAILY_PLANNER_COMPARISON.map((row, i) => (
                  <tr key={i} className="border-b border-border/30 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-xs text-foreground/80 font-medium">{row.dimension}</td>
                    <td className="py-3 px-4 text-xs text-muted-foreground">{row.standalone}</td>
                    <td className="py-3 px-4 text-xs text-gold/90">{row.calendar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTA
        title="Plan the day. Inside the calendar. In under 5 minutes."
        subtitle="Daily Brief, voice capture, evening planning, and daily analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Productivity planner', href: '/productivity-planner' }}
      />
    </>
  )
}
