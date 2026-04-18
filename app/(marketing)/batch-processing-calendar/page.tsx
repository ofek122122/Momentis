import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Zap, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Batch Processing Calendar — Stop switching contexts, start batching similar work',
  description:
    'Context-switching kills productivity. Batching similar tasks into dedicated calendar blocks eliminates the cost of switching — emails processed once, calls clustered together, deep work protected in uninterrupted stretches. Here\'s how to build a batched calendar.',
  alternates: { canonical: '/batch-processing-calendar' },
  openGraph: {
    title: 'Batch Processing Calendar — Momenties',
    description: 'Eliminate context-switching by batching similar work into dedicated calendar blocks.',
    url: '/batch-processing-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Zap,
    title: 'Similar tasks grouped into dedicated blocks',
    desc: 'Email processed once or twice a day in a dedicated 30-minute block — not constantly. Calls clustered together in the afternoon. Admin tasks batched end of day. Deep work in long uninterrupted morning blocks. Every task type in its own dedicated time.',
  },
  {
    icon: Clock,
    title: 'Context-switching cost eliminated',
    desc: 'Every time you switch from deep work to email to a call and back, you pay a cognitive setup cost. Research puts it at 15-20 minutes of recovery per switch. Batching means fewer switches per day — and significantly more productive output from the same hours.',
  },
  {
    icon: BarChart3,
    title: 'Batch analytics reveal switching patterns',
    desc: 'Tag events by task type: deep work, communication, admin, meetings, learning. Analytics shows context switches per day. How many times did you switch between deep work and communication? The data reveals what batching needs to fix.',
  },
  {
    icon: Shield,
    title: 'Deep work batch protected from interruption',
    desc: 'The deep work batch — typically morning — blocked and protected before the communication calendar is shared. Meetings scheduled in the communication batch window. The deep work block is inviolable: no email, no calls, no Slack during the batch.',
  },
]

const BATCH_TYPES = [
  {
    batch: 'Deep work batch',
    when: 'Morning, 9am–noon (peak cognitive hours)',
    what: 'Writing, analysis, design, coding, strategy — any work requiring concentration and flow',
    rules: 'No email, no Slack, no calls. Full block uninterrupted. This batch is non-negotiable.',
  },
  {
    batch: 'Communication batch',
    when: 'Post-lunch, 1–2pm (energy valley)',
    what: 'Email processing, Slack responses, quick replies, scheduling. Process to inbox zero in the batch.',
    rules: 'Batch, don\'t monitor. Process all at once rather than checking every 15 minutes all day.',
  },
  {
    batch: 'Calls and meetings batch',
    when: 'Early afternoon, 2–4pm',
    what: 'Calls, video meetings, check-ins, collaborative sessions — all communication that requires speaking',
    rules: 'Cluster calls back-to-back. Don\'t let calls interrupt deep work. One batch for all voice communication.',
  },
  {
    batch: 'Admin batch',
    when: 'End of day, 4:30–5:30pm (low energy)',
    what: 'Expenses, scheduling, filing, invoices, routine tasks requiring no cognitive load',
    rules: 'Admin never in deep work hours. Use low-energy window for low-demand tasks.',
  },
]

const BATCH_PRINCIPLES = [
  { principle: 'Design the batch structure first', detail: 'Before any specific meeting or task enters the calendar, design the batch windows: when is deep work, when is communication, when is meetings. Structure comes before content.' },
  { principle: 'Protect batch boundaries rigorously', detail: 'Batching only works if batch boundaries are enforced. A meeting in the deep work batch defeats the system. Communication during the deep work batch defeats the system. The boundary is the discipline.' },
  { principle: 'Cluster similar calls back-to-back', detail: 'Five 30-minute calls in a row are less disruptive than five calls distributed across the day. Back-to-back calls in a clustered batch leave the rest of the day intact. Spread out, they fragment everything.' },
  { principle: 'Measure context switches, not just time', detail: 'The cost of work isn\'t just duration — it\'s setup. Track context switches per day with analytics. A day with 3 deep work switches is different from a day with 15. Batching reduces the switch count.' },
  { principle: 'Train your environment to match your batches', detail: 'Communicating your batch schedule to colleagues creates a self-reinforcing system. "I\'m in deep work until noon" becomes a known boundary. The calendar signal trains the environment.' },
]

export default function BatchProcessingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Batch Processing Calendar"
        title={
          <>
            Stop switching.
            <br />
            <em className="not-italic text-gold">Start batching.</em>
          </>
        }
        lede="Context-switching is the most common productivity killer — and the most invisible. Every switch from deep work to email to a call costs 15-20 minutes of cognitive recovery. Batching eliminates this cost by grouping similar work into dedicated calendar blocks, so deep work stays deep, communication gets handled efficiently, and your calendar stops fragmenting your attention."
        crumbs={[{ label: 'Batch Processing Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/deep-work-schedule"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Deep work schedule
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties supports batch-processed calendars.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four core batches</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to structure a batched workday.</h2>
          </Reveal>
          <div className="space-y-3">
            {BATCH_TYPES.map((batch, i) => (
              <Reveal key={batch.batch} delay={i * 50}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-sm font-medium text-foreground">{batch.batch}</h3>
                    <span className="font-mono text-[10px] text-gold/60 uppercase tracking-wide shrink-0">{batch.when}</span>
                  </div>
                  <p className="text-xs text-foreground/80 mb-2">{batch.what}</p>
                  <p className="text-xs text-muted-foreground italic">{batch.rules}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Five principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to make batch processing work in practice.</h2>
          </Reveal>
          <div className="space-y-3">
            {BATCH_PRINCIPLES.map((item, i) => (
              <Reveal key={item.principle} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-2">{item.principle}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Batch analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for batch-processed calendars.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Context switches per day — trend',
                'Deep work batch integrity rate',
                'Communication batch vs. scattered email time',
                'Calls in deep work hours (should be zero)',
                'Admin in peak hours (should be zero)',
                'Batch adherence by day of week',
                'Weekly deep work hours — protected vs. lost',
                'Output per batch type comparison',
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
        title="Deep work protected. Communication batched. Switching minimized."
        subtitle="Batch-based scheduling, context-switch tracking, and deep work analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Deep work schedule', href: '/deep-work-schedule' }}
      />
    </>
  )
}
