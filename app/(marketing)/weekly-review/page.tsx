import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, BarChart3, Shield, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Weekly Review — How to do a weekly review on your calendar that actually works',
  description:
    'A weekly review that doesn\'t rely on memory or a separate app. Built into the calendar, powered by analytics, and completed in under 30 minutes. Here\'s the weekly review process that sticks.',
  alternates: { canonical: '/weekly-review' },
  openGraph: {
    title: 'Weekly Review — Momenties',
    description: 'Calendar-based weekly review: analytics-driven, under 30 minutes, and built into the week.',
    url: '/weekly-review',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: BarChart3,
    title: 'Analytics make the review honest',
    desc: 'A memory-based review is biased. Analytics shows the actual numbers: hours per project, deep work percentage, meeting load, task completion. The weekly review starts with data — not an impression of how the week went.',
  },
  {
    icon: Calendar,
    title: 'Next week blocked before Friday ends',
    desc: 'The weekly review ends with next week set up. Deep work blocked. Priority meetings scheduled. Prep blocks added. Calendar ready on Monday morning before the inbox opens.',
  },
  {
    icon: Shield,
    title: 'Friday review block protected',
    desc: '"Weekly review — friday 4pm 30 mins." Recurring, protected, un-movable. A review that requires finding 30 minutes doesn\'t happen. A review that\'s already on the calendar does.',
  },
  {
    icon: Clock,
    title: 'Daily Brief complements the weekly view',
    desc: 'Each morning, Daily Brief surfaces the day\'s priorities, time until the next event, and tasks due. Weekly review sees the cumulative picture. Both together eliminate the feeling of losing track.',
  },
]

const REVIEW_STEPS = [
  { step: '1', title: 'Clear the capture (5 min)', detail: 'Add anything from the week that didn\'t get scheduled: next week\'s tasks, deadlines, commitments made in conversations. Capture to calendar before the week closes.' },
  { step: '2', title: 'Review analytics (5 min)', detail: 'Check time distribution: deep work hours, meeting load, time per project. Any surprises? Any project getting systematically under-resourced?' },
  { step: '3', title: 'Assess what moved (5 min)', detail: 'What shipped this week? What didn\'t? What moved from last week\'s plan? Honest assessment from the calendar — not from what you remember.' },
  { step: '4', title: 'Plan next week (10 min)', detail: 'Block deep work first. Schedule the week\'s key meetings. Add prep blocks for important commitments. Identify the one thing each day that would make it a good day.' },
  { step: '5', title: 'Set the intention (5 min)', detail: 'What does next week need to accomplish? Three outcomes — project deliverables, relationships advanced, personal commitments kept. Added as a weekly note block.' },
]

const REVIEW_QUESTIONS = [
  { category: 'This week', questions: ['What shipped vs. what was planned?', 'Where did time actually go?', 'What got less attention than it deserved?', 'What's still open from last week?'] },
  { category: 'Next week', questions: ['What must be done, no matter what?', 'What deep work blocks does next week need?', 'What meetings should be prepped for?', 'What one thing would make each day successful?'] },
]

export default function WeeklyReviewPage() {
  return (
    <>
      <PageHero
        eyebrow="Weekly Review"
        title={
          <>
            Review the week.
            <br />
            <em className="not-italic text-gold">Set the next one.</em>
          </>
        }
        lede="A weekly review that works isn't a task on your to-do list — it's a recurring calendar block, powered by analytics that show what actually happened, and ending with the next week already structured. Under 30 minutes. Built into the calendar. And the reason Monday mornings feel different."
        crumbs={[{ label: 'Weekly Review' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start your review free <ArrowRight className="h-4 w-4" />
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Why calendar-based review works</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four reasons this weekly review actually sticks.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Five-step process</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">The 30-minute weekly review.</h2>
          </Reveal>
          <div className="space-y-3">
            {REVIEW_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-5">
                  <span className="font-mono text-lg font-bold text-gold/40 w-8 shrink-0 leading-tight">{step.step}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">{step.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.detail}</p>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Review questions</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">The questions that make the review honest.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {REVIEW_QUESTIONS.map((section, i) => (
              <Reveal key={section.category} delay={i * 60}>
                <div className="rounded-xl border border-border lux-card p-5 h-full">
                  <h3 className="text-xs font-mono text-gold/70 uppercase tracking-wide mb-4">{section.category}</h3>
                  <div className="space-y-2">
                    {section.questions.map((q) => (
                      <div key={q} className="flex items-start gap-2 text-xs text-foreground/80">
                        <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                        {q}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="30 minutes. Honest analytics. Next week ready."
        subtitle="Weekly review block, time distribution analytics, and weekly planning. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Productivity planner', href: '/productivity-planner' }}
      />
    </>
  )
}
