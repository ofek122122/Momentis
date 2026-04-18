import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, BarChart3, Clock, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Focus Time — How to protect deep work hours with your calendar',
  description:
    'Focus time doesn\'t protect itself. Learn how to use calendar blocking, focus mode, and time analytics to create uninterrupted work sessions that actually hold — even in a busy week.',
  alternates: { canonical: '/focus-time' },
  openGraph: {
    title: 'Focus Time — Momenties',
    description: 'Protect deep work with calendar blocking and focus mode.',
    url: '/focus-time',
    type: 'website',
  },
}

const FOCUS_FEATURES = [
  {
    icon: Shield,
    title: 'Calendar blocking that signals unavailability',
    desc: 'A blocked focus session on your calendar tells collaborators you\'re unavailable — the same way a meeting does. The block has weight. Unstructured "I\'ll find time" has none.',
  },
  {
    icon: Zap,
    title: 'Focus mode: notifications silenced automatically',
    desc: 'When a focus block starts, Focus mode silences Slack, email, and app notifications. No willpower required. The calendar enforces what you decided when you were calm.',
  },
  {
    icon: BarChart3,
    title: 'Focus hours tracked in analytics',
    desc: 'Weekly analytics shows focus hours vs. meeting hours. Most professionals are shocked by the ratio. The data creates accountability that good intentions alone cannot.',
  },
  {
    icon: Clock,
    title: 'Time-of-day matching: energy to task',
    desc: 'Schedule deep work during your peak energy window — typically morning for most people. Meetings and admin in the afternoon. The calendar structure matches work to biology.',
  },
]

const FOCUS_BLOCKS = [
  {
    type: 'Deep work block',
    length: '2-4 hours',
    when: 'Morning (9am–1pm)',
    description: 'Highest-complexity cognitive work. Code, writing, analysis, strategy. No interruptions.',
  },
  {
    type: 'Creative block',
    length: '1-3 hours',
    when: 'Morning or early afternoon',
    description: 'Design, writing, problem-solving that benefits from sustained attention without pressure.',
  },
  {
    type: 'Admin block',
    length: '45-90 mins',
    when: 'Afternoon (2-4pm)',
    description: 'Email, scheduling, approvals, low-stakes decisions. Energy-appropriate timing.',
  },
  {
    type: 'Learning block',
    length: '30-60 mins',
    when: 'Flexible',
    description: 'Courses, reading, skill development. Protected time that compounds over months.',
  },
]

const FOCUS_PRINCIPLES = [
  'Block focus time before the week fills with meetings — Tuesday morning is safer than Thursday afternoon',
  'Name focus blocks specifically: "Write feature spec" beats "Deep work" every time',
  'Start with one 2-hour block per day and defend it ruthlessly before adding more',
  'Buffer blocks before and after focus sessions protect the cognitive transition',
  'Track focus completion rate in analytics — the data motivates more than the intention',
  'Team focus norms ("no meetings before 10am") protect time at the system level',
]

export default function FocusTimePage() {
  return (
    <>
      <PageHero
        eyebrow="Focus Time"
        title={
          <>
            Deep work doesn't
            <br />
            <em className="not-italic text-gold">protect itself.</em>
          </>
        }
        lede="Focus time is the first thing that disappears when a week gets busy. Protecting it requires a system: calendar blocks that signal unavailability, focus mode that removes friction, and analytics that show whether the protection is working. Momenties builds all three."
        crumbs={[{ label: 'Focus Time' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Protect your focus time <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/deep-work"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Deep work system
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Focus mode included</p>
      </PageHero>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Focus protection system</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties protects focus time.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {FOCUS_FEATURES.map((f, i) => (
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

      {/* Focus block types */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Block types</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four focus block types and when to use them.</h2>
          </Reveal>
          <div className="space-y-3">
            {FOCUS_BLOCKS.map((block, i) => (
              <Reveal key={block.type} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-sm font-medium text-foreground">{block.type}</h3>
                    <div className="flex gap-2 shrink-0">
                      <span className="font-mono text-[9px] px-1.5 py-0.5 rounded-full border text-gold/70 bg-gold/5 border-gold/20">{block.length}</span>
                    </div>
                  </div>
                  <p className="text-[10px] font-mono text-muted-foreground mb-2 uppercase tracking-wide">{block.when}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{block.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What works</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Six principles of effective focus time.</h2>
          </Reveal>
          <div className="space-y-3">
            {FOCUS_PRINCIPLES.map((p, i) => (
              <Reveal key={i} delay={i * 30}>
                <div className="flex items-start gap-3 rounded-xl border border-border/50 p-4">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/90">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Block it. Protect it. Measure it."
        subtitle="Focus blocking, focus mode, and analytics to track whether it's working. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Focus mode features', href: '/focus-mode' }}
      />
    </>
  )
}
