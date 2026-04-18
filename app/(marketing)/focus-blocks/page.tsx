import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Focus Blocks — How to protect uninterrupted work time that actually produces output',
  description:
    'Focus blocks are scheduled periods of uninterrupted work dedicated to a single task or project. Here\'s how to design effective focus blocks, protect them from interruption, and use analytics to verify they\'re producing the output your work requires.',
  alternates: { canonical: '/focus-blocks' },
  openGraph: {
    title: 'Focus Blocks — Momenties',
    description: 'Protect uninterrupted work time with structured focus blocks that actually produce output.',
    url: '/focus-blocks',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Shield,
    title: 'Focus blocks placed before reactive work',
    desc: 'Focus blocks must be placed on the calendar before meetings are scheduled. A focus block that isn\'t on the calendar doesn\'t exist as a protected commitment. "Focus block — strategy document, monday 9-11am." This entry prevents meetings from claiming those hours.',
  },
  {
    icon: Clock,
    title: 'Single-task commitment within each block',
    desc: 'A focus block has one task. Not a list of tasks, not a priority order — one. "Write executive summary." "Build Q3 analysis." "Review and respond to design brief." Single-task focus blocks produce deeper work than multi-task blocks that become context-switches in disguise.',
  },
  {
    icon: BarChart3,
    title: 'Output analytics per focus block',
    desc: 'Tag focus blocks by project and outcome. Analytics shows focus block completion rate, hours per project, and output quality by time of day. Which tasks produce best results in morning blocks? Which need afternoon time? Data to optimize block placement.',
  },
  {
    icon: Zap,
    title: 'Pre-block ritual makes the transition instant',
    desc: 'A consistent 5-minute pre-block ritual eliminates start-up cost: clear notifications, open the one document, review the outcome target. The ritual signals the brain to enter focus mode. Cold starts from zero produce 15-20 minutes of overhead per block.',
  },
]

const BLOCK_DESIGN = [
  {
    element: 'Duration',
    guidance: '60-90 minutes for most deep work. 2 hours for complex creative or analytical work. Shorter blocks for review and editing. Don\'t block more than 3 hours — cognitive performance degrades significantly.',
  },
  {
    element: 'Single task',
    guidance: 'One clearly defined output: "Draft introduction section." Not "work on report." The specific output makes the block success-testable — you either produced it or you didn\'t.',
  },
  {
    element: 'Placement',
    guidance: 'Peak energy hours (typically 9-11am) for most cognitively demanding work. Avoid immediately post-lunch. Place in the calendar before sharing availability with others.',
  },
  {
    element: 'Environment',
    guidance: 'Notifications off. Phone in a different room or on Do Not Disturb. One window or application open. The environment must match the focus requirement or the block is performative.',
  },
  {
    element: 'Pre-block ritual',
    guidance: '5 minutes before: close email, set a timer, write the target output on a sticky note or document header. Consistent ritual becomes a focus trigger — the brain learns that this sequence means deep work follows.',
  },
]

const BLOCK_TYPES = [
  { type: 'Writing block', structure: '90 minutes, single section or piece. Pre-block: outline review. Target: X words or section complete. No editing during writing.' },
  { type: 'Analysis block', structure: '90 minutes, single analysis question. Pre-block: data open, question written. Target: finding or recommendation documented.' },
  { type: 'Design block', structure: '2 hours, single concept or component. Pre-block: brief reviewed, references open. Target: first-pass design complete.' },
  { type: 'Planning block', structure: '60 minutes, single plan or decision. Pre-block: relevant context reviewed. Target: decision made and documented, or plan structured.' },
  { type: 'Review block', structure: '60 minutes, single document or deliverable. Pre-block: document open, criteria clear. Target: marked-up version complete.' },
  { type: 'Learning block', structure: '60 minutes, single topic or chapter. Pre-block: source open, notes template ready. Target: X pages read with notes.' },
]

export default function FocusBlocksPage() {
  return (
    <>
      <PageHero
        eyebrow="Focus Blocks"
        title={
          <>
            Protected time.
            <br />
            <em className="not-italic text-gold">Real output.</em>
          </>
        }
        lede="A focus block is a calendar entry that means: this time is committed to one thing, nothing else enters. It's not a vague 'deep work time' — it's a specific task, a protected window, and a single outcome. Here's how to design focus blocks that produce the work your schedule keeps promising but never delivering."
        crumbs={[{ label: 'Focus Blocks' }]}
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties supports effective focus blocks.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Block design elements</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">What makes a focus block effective.</h2>
          </Reveal>
          <div className="space-y-3">
            {BLOCK_DESIGN.map((item, i) => (
              <Reveal key={item.element} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-24 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{item.element}</span>
                  <p className="text-sm text-foreground/90">{item.guidance}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">By work type</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Focus block structures for different types of work.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {BLOCK_TYPES.map((block, i) => (
              <Reveal key={block.type} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-5 h-full">
                  <h3 className="text-xs font-mono text-gold/70 uppercase tracking-wide mb-2">{block.type}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{block.structure}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Focus block analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for focus block effectiveness.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Focus blocks scheduled per week',
                'Focus block completion rate',
                'Average block duration achieved',
                'Focus hours per project',
                'Most productive focus block time of day',
                'Blocks interrupted vs. completed',
                'Output per block by task type',
                'Focus time trend week over week',
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
        title="Focus blocks placed. Work protected. Output measured."
        subtitle="Single-task focus scheduling, output tracking, and deep work analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Deep work schedule', href: '/deep-work-schedule' }}
      />
    </>
  )
}
