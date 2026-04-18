import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Zap, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Two-Minute Rule Calendar — When to do it now vs. when to schedule it',
  description:
    'David Allen\'s two-minute rule says: if a task takes less than two minutes, do it now rather than scheduling it. But most "two-minute tasks" take longer, and doing them interrupts deep work. Here\'s when to apply the rule — and when to schedule instead.',
  alternates: { canonical: '/two-minute-rule-calendar' },
  openGraph: {
    title: 'Two-Minute Rule Calendar — Momenties',
    description: 'When to do it now vs. when to schedule it — applying the two-minute rule intelligently.',
    url: '/two-minute-rule-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Zap,
    title: 'Instant capture for scheduling decisions',
    desc: 'The two-minute question is: should I do this now or schedule it? Voice input answers the second option in 5 seconds. "Reply to David about Thursday meeting — 4pm." Captured, scheduled, off your mind. The scheduling decision costs less than the task.',
  },
  {
    icon: Clock,
    title: 'Admin batch for sub-two-minute tasks',
    desc: 'The two-minute rule applied literally during deep work breaks deep work. Alternative: capture all small tasks in a list, then process them during an admin batch block in the afternoon. The batch handles 20 two-minute tasks in 30 focused minutes.',
  },
  {
    icon: Shield,
    title: 'Deep work protected from rule violations',
    desc: 'The most common misapplication: doing "two-minute" tasks during deep work. A quick reply, a fast check, a brief response — each one ends the deep work session. The two-minute rule belongs in admin time. Deep work blocks have no two-minute tasks.',
  },
  {
    icon: BarChart3,
    title: 'Interruption analytics reveal the pattern',
    desc: 'Tag events by task type: deep work, admin, communication. Analytics shows interruption frequency during deep work blocks. If the deep work block shows frequent sub-30-minute events, the two-minute rule is being misapplied in the wrong time window.',
  },
]

const DECISION_FRAMEWORK = [
  {
    scenario: 'During deep work block',
    action: 'Never apply the two-minute rule',
    reason: 'Any task during deep work breaks the focus session. Capture it for the admin batch. The cost of the interruption exceeds the cost of scheduling it.',
  },
  {
    scenario: 'Between tasks or meetings',
    action: 'Apply the two-minute rule',
    reason: 'Transition windows are ideal for two-minute tasks. You\'re not in deep focus. A quick reply or action in the buffer between commitments costs almost nothing.',
  },
  {
    scenario: 'During admin batch',
    action: 'Process everything immediately',
    reason: 'Admin batch time is explicitly for small tasks. Do them all in sequence. If something requires more than 10 minutes, schedule it — it\'s not an admin task.',
  },
  {
    scenario: 'End of workday',
    action: 'Apply the rule for true two-minute items',
    reason: 'End of day is low-energy, low-focus. Genuine two-minute tasks can be processed here. Anything requiring thought gets scheduled for the next day.',
  },
]

const SCHEDULING_GUIDE = [
  { task: 'Reply to a short email (under 2 min)', decision: 'Do it in admin batch — not during deep work' },
  { task: 'Schedule a meeting request', decision: 'Voice capture to calendar: 5 seconds now, done' },
  { task: 'Quick Slack reply', decision: 'Admin batch — not during deep work. Toggle off notifications.' },
  { task: 'Expense report', decision: 'Schedule 30-min admin block — takes longer than 2 min' },
  { task: 'Review a short document', decision: 'Schedule proper time block — 2 min is rarely accurate' },
  { task: 'Quick phone call', decision: 'Schedule in calls batch — avoid during deep work' },
]

export default function TwoMinuteRuleCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Two-Minute Rule Calendar"
        title={
          <>
            Know when to do it now.
            <br />
            <em className="not-italic text-gold">Know when to schedule it.</em>
          </>
        }
        lede="The two-minute rule says: if it takes less than two minutes, do it now. But applied during deep work, it destroys focus. Applied constantly, it produces the illusion of productivity while preventing real work. Here's how to apply the rule intelligently — only in windows where small tasks belong."
        crumbs={[{ label: 'Two-Minute Rule Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/batch-processing-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Batch processing guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties supports intelligent task routing.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Decision framework</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">When to apply the two-minute rule — and when not to.</h2>
          </Reveal>
          <div className="space-y-3">
            {DECISION_FRAMEWORK.map((item, i) => (
              <Reveal key={item.scenario} delay={i * 50}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-sm font-medium text-foreground">{item.scenario}</h3>
                    <span className={`font-mono text-[10px] uppercase tracking-wide shrink-0 ${item.action.startsWith('Never') ? 'text-amber-400/70' : 'text-emerald-400/70'}`}>{item.action.startsWith('Never') ? 'avoid' : 'apply'}</span>
                  </div>
                  <p className="text-xs font-medium text-foreground/80 mb-1">{item.action}</p>
                  <p className="text-xs text-muted-foreground">{item.reason}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Scheduling guide</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Do it now vs. schedule it — specific guidance.</h2>
          </Reveal>
          <div className="space-y-2">
            {SCHEDULING_GUIDE.map((item, i) => (
              <Reveal key={item.task} delay={i * 30}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <p className="text-sm text-foreground/80 w-48 shrink-0">{item.task}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.decision}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for task routing decisions.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Deep work session interruption rate',
                'Admin batch utilization — planned vs. actual',
                'Sub-30-minute events during deep work blocks',
                'Communication outside batched windows',
                'Task routing accuracy over time',
                'Deep work completion rate vs. interruption count',
                'Admin vs. deep work time ratio',
                'Daily task capture volume — scheduled vs. done immediately',
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
        title="Deep work protected. Small tasks batched. Focus preserved."
        subtitle="Intelligent task routing, batch processing, and focus analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Batch processing guide', href: '/batch-processing-calendar' }}
      />
    </>
  )
}
