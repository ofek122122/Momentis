import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, BarChart3, Zap, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendar Blocking — The complete guide to time blocking your week',
  description:
    'Calendar blocking is the practice of scheduling every hour of your week in advance — including work, focus time, meetings, and recovery. Learn the system that turns your calendar from a record of what happened to a plan that happens.',
  alternates: { canonical: '/calendar-blocking' },
  openGraph: {
    title: 'Calendar Blocking — Momenties',
    description: 'The complete guide to blocking your calendar for maximum output.',
    url: '/calendar-blocking',
    type: 'website',
  },
}

const BLOCK_TYPES = [
  {
    icon: Shield,
    title: 'Deep work blocks',
    desc: '2-4 hours for highest-complexity tasks. Scheduled in the morning before other commitments land. Named specifically: "Write quarterly report" not "work time." These blocks produce the most value.',
  },
  {
    icon: Clock,
    title: 'Meeting blocks',
    desc: 'All meetings consolidated into designated windows — ideally afternoons on meeting-heavy days. When meetings have a home, they stop colonizing the entire calendar.',
  },
  {
    icon: Zap,
    title: 'Reactive and admin blocks',
    desc: 'Email, Slack, quick reviews, and approval tasks get a daily block — not constant availability. 60-90 minutes in the afternoon handles the inbox without it dominating the day.',
  },
  {
    icon: BarChart3,
    title: 'Review and planning blocks',
    desc: 'Weekly review on Fridays. Daily brief every morning. These meta-blocks keep the system running. Without them, the calendar fills with reactive work.',
  },
]

const BLOCKING_STEPS = [
  {
    number: '01',
    title: 'Start with the non-negotiables',
    body: 'Block personal commitments, hard deadlines, and recurring meetings first. These are the skeleton of the week. Build everything else around them.',
  },
  {
    number: '02',
    title: 'Block deep work before anything else',
    body: 'Before the week begins, claim the morning hours for your most important work. Monday morning planning session: block Tuesday-Thursday mornings for deep work. Do this before the inbox opens.',
  },
  {
    number: '03',
    title: 'Cluster meetings into designated windows',
    body: 'Choose 2-3 meeting windows per day: e.g., 10-12am and 2-4pm. Block everything outside these windows as unavailable. Meetings that don\'t fit the windows get declined or rescheduled.',
  },
  {
    number: '04',
    title: 'Name every block specifically',
    body: '"Q2 planning deck, slides 4-8" has cognitive weight. "Work time" has none. The title is the commitment. Specific titles get honored; generic ones get sacrificed first.',
  },
  {
    number: '05',
    title: 'Build in transition and buffer time',
    body: '10-15 minutes between blocks. No back-to-back. The buffer is not wasted time — it\'s cognitive recovery, notes completion, and context switching cost paid in advance rather than accumulated as debt.',
  },
  {
    number: '06',
    title: 'Review and adjust weekly',
    body: 'Every Sunday or Friday: what got done vs. planned? Analytics shows the delta. What patterns emerged? Adjust the next week\'s blocking based on what actually happened, not what you wished would happen.',
  },
]

export default function CalendarBlockingPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar Blocking"
        title={
          <>
            Block the week before
            <br />
            <em className="not-italic text-gold">it blocks you.</em>
          </>
        }
        lede="Calendar blocking is the practice of scheduling every hour of your week in advance — deep work, meetings, admin, and recovery. When the week is blocked before it starts, you make decisions from intention rather than react to whatever arrived in your inbox first."
        crumbs={[{ label: 'Calendar Blocking' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start blocking <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/time-blocking"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Time blocking guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      {/* Block types */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">The four block types</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">What to block and why each type matters.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {BLOCK_TYPES.map((b, i) => (
              <Reveal key={b.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <b.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{b.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How to do it</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Six steps to a fully blocked calendar.</h2>
          </Reveal>
          <div className="space-y-4">
            {BLOCKING_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xl font-bold text-gold/30 shrink-0 w-8">{step.number}</span>
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

      {/* What Momenties adds */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What Momenties adds</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">How Momenties makes calendar blocking stick.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Voice-add blocks in 3 seconds while still in context',
                'Focus mode silences notifications during blocks',
                'Analytics shows block completion rate over time',
                'Natural language: "deep work block thursday 9am 3 hours"',
                'Recurring blocks set once, run for weeks',
                'Daily Brief confirms tomorrow\'s blocks before the day starts',
                'Team overlay shows when blocks conflict with team needs',
                'Weekly analytics shows actual vs. planned block hours',
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
        title="Block the week before it fills itself."
        subtitle="Voice blocking, focus mode, and analytics to measure whether it's working. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Time blocking guide', href: '/time-blocking' }}
      />
    </>
  )
}
