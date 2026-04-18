import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Meeting-Free Day — How to protect one full day per week for deep work',
  description:
    'A meeting-free day is the single most impactful calendar policy for knowledge workers. Here\'s how to establish it, defend it, and use analytics to measure whether it\'s actually holding — week over week.',
  alternates: { canonical: '/meeting-free-day' },
  openGraph: {
    title: 'Meeting-Free Day — Momenties',
    description: 'How to protect one full day per week for deep work.',
    url: '/meeting-free-day',
    type: 'website',
  },
}

const WHY_IT_WORKS = [
  { stat: '4.2x', label: 'More deep work output', desc: 'A full uninterrupted day produces more than four fragmented hours across the week.' },
  { stat: '31%', label: 'Less reported burnout', desc: 'Teams with protected focus days report significantly lower meeting fatigue and burnout scores.' },
  { stat: '2 weeks', label: 'To notice the difference', desc: 'Most people feel the change within two weeks of consistent meeting-free protection.' },
]

const HOW_TO_ESTABLISH = [
  {
    step: '01',
    title: 'Choose the day with lowest natural meeting pressure',
    body: 'Wednesday or Thursday work well for most teams. Avoid Monday (planning-heavy) and Friday (recap-heavy). The middle of the week has fewer natural anchors for recurring meetings.',
  },
  {
    step: '02',
    title: 'Block the full day on your calendar — immediately',
    body: '"Meeting-free thursday, recurring weekly." Block it before any meetings can land there. The calendar shows busy. Scheduling tools can\'t override a blocked day. First-mover advantage on your own calendar.',
  },
  {
    step: '03',
    title: 'Name specific work for each block',
    body: 'A vague "no meetings" block gets violated. "Product design thursday 9am-1pm" and "code review thursday 2-5pm" have weight. Specific deliverables make the block worth defending.',
  },
  {
    step: '04',
    title: 'Communicate the policy to your team',
    body: 'A private policy fails. A team policy holds. "No meetings on Thursdays — unless there\'s a genuine reason" turns individual protection into a team norm. Most teammates are relieved to have the same day.',
  },
  {
    step: '05',
    title: 'Measure with analytics',
    body: 'After 4 weeks, check analytics: how many meetings are actually landing on the protected day? Focus hours on that day vs. others? The data shows whether the policy is holding or eroding.',
  },
]

const WHAT_TO_DO_WITH_IT = [
  'The highest-complexity project you\'ve been avoiding',
  'Strategic thinking and writing without interruption',
  'Learning and skill development',
  'Deep code review or architecture planning',
  'Writing: reports, proposals, articles, documentation',
  'Product work that requires sustained creative attention',
  'Data analysis that needs unbroken concentration',
  'Personal development: courses, reading, reflection',
]

export default function MeetingFreeDayPage() {
  return (
    <>
      <PageHero
        eyebrow="Meeting-Free Day"
        title={
          <>
            One day.
            <br />
            <em className="not-italic text-gold">No meetings. Real work.</em>
          </>
        }
        lede="The meeting-free day is the highest-leverage calendar policy for knowledge workers. One full day per week without interruptions produces more meaningful work than four fragmented afternoons combined. Here's how to establish it, protect it, and measure whether it's holding."
        crumbs={[{ label: 'Meeting-Free Day' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Block your day <ArrowRight className="h-4 w-4" />
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

      {/* Stats */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Why it works</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">The data behind meeting-free days.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {WHY_IT_WORKS.map((item, i) => (
              <Reveal key={item.label} delay={i * 60}>
                <div className="rounded-xl border border-border/50 p-6 text-center">
                  <p className="font-display text-4xl font-bold text-gold mb-1">{item.stat}</p>
                  <p className="text-sm font-medium text-foreground mb-2">{item.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to establish */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Implementation</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Five steps to a protected meeting-free day.</h2>
          </Reveal>
          <div className="space-y-4">
            {HOW_TO_ESTABLISH.map((item, i) => (
              <Reveal key={item.step} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xl font-bold text-gold/30 shrink-0 w-8">{item.step}</span>
                    <div>
                      <h3 className="text-sm font-medium text-foreground mb-2">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What to do with it */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Use it well</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What belongs on a meeting-free day.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {WHAT_TO_DO_WITH_IT.map((item) => (
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
        title="Block Thursday. Protect it. Measure whether it holds."
        subtitle="Recurring focus blocks, Focus mode, and weekly analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Focus mode', href: '/focus-mode' }}
      />
    </>
  )
}
