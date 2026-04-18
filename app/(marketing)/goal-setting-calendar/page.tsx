import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Target, Calendar, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Goal Setting Calendar — Turn goals into scheduled actions that actually happen',
  description:
    'Goals without calendar entries are wishes. Here\'s how to translate annual goals into quarterly milestones, monthly actions, and weekly calendar blocks — so goals become scheduled commitments, not aspirations.',
  alternates: { canonical: '/goal-setting-calendar' },
  openGraph: {
    title: 'Goal Setting Calendar — Momenties',
    description: 'Translate goals into calendar blocks that move you forward every week.',
    url: '/goal-setting-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Target,
    title: 'Goals broken into calendar actions',
    desc: 'Every goal needs a calendar entry or it won\'t happen. "Write a book" becomes "writing — 9am-11am, monday through friday." "Run a marathon" becomes "training run — tuesday/thursday 6am, long run saturday 7am." Goals on the calendar are goals in motion.',
  },
  {
    icon: Calendar,
    title: 'Milestone deadlines with 90-day visibility',
    desc: 'Break annual goals into quarterly milestones. "Book draft complete — march 31." "Marathon registration — january 15." "Revenue goal Q1 — march 31." Milestones surfaced 90 days before the deadline. Time to course-correct before it\'s too late.',
  },
  {
    icon: BarChart3,
    title: 'Progress analytics by goal',
    desc: 'Tag calendar events by goal. Analytics shows hours invested per goal each week. Which goals are on the calendar vs. just in your head? The gap between your stated priorities and your actual calendar is usually large. Data to close it.',
  },
  {
    icon: Shield,
    title: 'Goal time protected before other commitments',
    desc: 'Goal-related calendar blocks filled first, then meetings scheduled around them. Goal work can\'t be protected after the fact — it must be blocked before anyone else can claim those hours. The calendar defends what matters most.',
  },
]

const GOAL_TYPES = [
  {
    category: 'Professional goals',
    examples: ['Complete certification — study blocks 3x/week', 'Launch new service — project milestones per month', 'Revenue target — client outreach blocks weekly', 'Build audience — content creation 2 hours/day'],
  },
  {
    category: 'Health and fitness',
    examples: ['Marathon training — running schedule 5 days/week', 'Weight goal — gym blocks morning before work', 'Sleep improvement — hard stop at 10pm on calendar', 'Stress reduction — meditation 15 min each morning'],
  },
  {
    category: 'Creative and learning',
    examples: ['Write a book — morning writing 2 hours daily', 'Learn a language — study 30 min each evening', 'New skill — course sessions blocked twice weekly', 'Side project — weekend 3-hour deep work blocks'],
  },
  {
    category: 'Relationships and life',
    examples: ['Family time — dinner together, no phones, 6:30pm daily', 'Date night — every other friday, unscheduled by default', 'Parents — bi-weekly call sunday afternoon', 'Friends — monthly dinner, first saturday'],
  },
]

const GOAL_SYSTEM = [
  { step: '1', title: 'Define the goal specifically', detail: 'Vague goals produce vague calendar entries. "Get fit" can\'t be scheduled. "Run 3 miles in under 30 minutes by June 1" can. Specific goals produce specific calendar blocks, specific milestones, and specific measurement criteria.' },
  { step: '2', title: 'Break into quarterly milestones', detail: 'What does 25%, 50%, 75%, 100% progress look like? Put those milestones on the calendar as deadline entries. Milestones surface as alerts 90 days in advance. You\'ll know if you\'re on pace before it\'s too late to adjust.' },
  { step: '3', title: 'Schedule weekly actions first', detail: 'What recurring actions does this goal require? Add them to the calendar before anything else. Writing blocks, training runs, study sessions — blocked weekly, recurring, protected. These blocks are non-negotiable.' },
  { step: '4', title: 'Tag goal-related events', detail: 'Tag every event related to the goal consistently. Analytics will show hours invested per goal per week. The data will tell you whether your calendar actually reflects your priorities — or just what other people asked for.' },
  { step: '5', title: 'Review weekly against milestones', detail: 'Every friday or monday, compare actual progress to milestone targets. On pace? Continue. Behind? Add a catch-up block this week. The weekly review is the feedback loop that keeps goals alive past February.' },
  { step: '6', title: 'Adjust at quarterly reviews', detail: 'At the end of each quarter, review goal progress with data. Hours invested, milestones hit, trajectory. Some goals need more blocks. Some need to be renegotiated. Some need to be dropped. Do it with data, not guilt.' },
]

export default function GoalSettingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Goal Setting Calendar"
        title={
          <>
            Goals on the calendar
            <br />
            <em className="not-italic text-gold">become goals that happen.</em>
          </>
        }
        lede="A goal without a calendar entry is a wish. Every goal you actually achieve has specific blocks of time dedicated to it — weekly, recurring, protected from other commitments. Here's the system for translating annual goals into quarterly milestones, monthly actions, and weekly calendar blocks that move you forward every single week."
        crumbs={[{ label: 'Goal Setting Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/quarter-planning"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Quarter planning guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties supports goal-driven calendaring.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">By goal type</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">What goal-driven calendar blocks look like.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {GOAL_TYPES.map((type, i) => (
              <Reveal key={type.category} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-5 h-full">
                  <h3 className="text-xs font-mono text-gold/70 uppercase tracking-wide mb-3">{type.category}</h3>
                  <ul className="space-y-1.5">
                    {type.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3 text-gold/60 shrink-0 mt-0.5" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Six-step system</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a goal-driven calendar that works.</h2>
          </Reveal>
          <div className="space-y-3">
            {GOAL_SYSTEM.map((item, i) => (
              <Reveal key={item.step} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-5">
                  <span className="font-mono text-lg font-bold text-gold/40 w-8 shrink-0 leading-tight">{item.step}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1.5">{item.title}</p>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Goal analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for goal-driven calendaring.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Hours per goal per week — trend',
                'Goal blocks scheduled vs. completed',
                'Milestone hit rate — on pace tracking',
                'Goal time vs. reactive time ratio',
                'Most productive goal-work time of day',
                'Weekly goal consistency score',
                'Quarter progress vs. milestone targets',
                'Goal time protected vs. surrendered to meetings',
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
        title="Goals on the calendar. Milestones tracked. Progress measured."
        subtitle="Goal-driven scheduling, milestone alerts, and progress analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Quarter planning guide', href: '/quarter-planning' }}
      />
    </>
  )
}
