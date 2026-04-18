import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2, Brain, Clock, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Smart scheduling — Find the right time, automatically',
  description:
    'Momenties smart scheduling finds optimal time slots based on your existing calendar patterns, energy levels, and preferences. No manual analysis, no "when are you free" emails.',
  alternates: { canonical: '/smart-scheduling' },
  openGraph: {
    title: 'Smart scheduling',
    description: 'Find the right time, automatically.',
    url: '/smart-scheduling',
    type: 'website',
  },
}

const HOW_IT_WORKS = [
  {
    n: '01',
    title: 'You tell Momenties what you need',
    body: '"Find me 2 hours for focused writing this week." Or "Schedule a 30-minute team sync sometime Tuesday or Wednesday." Natural language, same as everything else.',
  },
  {
    n: '02',
    title: 'Smart scheduling analyzes your patterns',
    body: 'The algorithm looks at your existing calendar: when are your meetings typically clustered, when do you have focus blocks, what your working hours look like. It finds slots that don\'t fragment existing blocks.',
  },
  {
    n: '03',
    title: 'You get a ranked suggestion',
    body: 'Not a list of 40 options — one primary recommendation with the reasoning. "Tuesday 10–11am is your longest uninterrupted window this week." You accept, modify, or ask for alternatives.',
  },
  {
    n: '04',
    title: 'Event created and synced',
    body: 'Accept the suggestion and the event is created. Synced to Google Calendar and Apple Calendar immediately.',
  },
]

const SMART_VS_MANUAL = [
  { task: 'Find a 2h slot this week', manual: '5–10 min reviewing calendar', smart: '3 seconds' },
  { task: 'Schedule recurring weekly review', manual: 'Find optimal day, check patterns', smart: 'Analyzed automatically' },
  { task: 'Book cross-team sync across 4 people', manual: 'Email chain + Doodle + confirmation', smart: 'Scheduling link (Q3 2026)' },
  { task: 'Add "sometime this week" task time', manual: 'Manual gap hunting', smart: 'Best gap suggested instantly' },
]

export default function SmartSchedulingPage() {
  return (
    <>
      <PageHero
        eyebrow="Smart scheduling"
        title={
          <>
            Find the right time.
            <br />
            <em className="not-italic text-gold">Automatically.</em>
          </>
        }
        lede="You know what needs to happen. You don't know when. Smart scheduling analyzes your calendar patterns and suggests the optimal slot — without you reviewing 5 days of calendar manually."
        crumbs={[{ label: 'Smart scheduling' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/ai-scheduling"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            AI scheduling overview
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      {/* How it works */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How it works</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four steps from request to scheduled.</h2>
          </Reveal>
          <div className="space-y-4">
            {HOW_IT_WORKS.map((step, i) => (
              <Reveal key={step.n} delay={i * 60}>
                <div className="flex items-start gap-5 rounded-xl border border-border/50 p-5">
                  <div className="w-9 h-9 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center shrink-0">
                    <span className="font-mono text-xs text-gold/70">{step.n}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-1.5">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Time comparison */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Time saved</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Manual vs. smart scheduling.</h2>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-[#0a0a0d]">
                    <th className="text-left px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Task</th>
                    <th className="text-left px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Manual</th>
                    <th className="text-left px-4 py-3 text-xs font-mono text-gold/60 uppercase tracking-wider">Smart</th>
                  </tr>
                </thead>
                <tbody>
                  {SMART_VS_MANUAL.map((row, i) => (
                    <tr key={row.task} className={`border-b border-border/40 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                      <td className="px-4 py-3 text-foreground/80 text-sm">{row.task}</td>
                      <td className="px-4 py-3 text-muted-foreground text-xs">{row.manual}</td>
                      <td className="px-4 py-3 text-gold text-xs font-medium">{row.smart}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What it considers */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Algorithm</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What smart scheduling considers.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Your working hours (avoids suggesting 6am or 11pm)',
                'Existing meeting clusters (prefers extending blocks, not fragmenting them)',
                'Protected focus blocks (won\'t suggest slots that override your Focus blocks)',
                'Back-to-back meeting density (flags days that are already overloaded)',
                'Buffer time preferences (respects your pre/post-meeting buffer settings)',
                'Historical patterns (learns that you prefer deep work in the morning)',
              ].map((f, i) => (
                <div key={f} className="flex items-start gap-2 rounded-xl border border-border/40 p-3">
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                  <p className="text-xs text-foreground/80 leading-relaxed">{f}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Stop hunting for open time. Ask for it."
        subtitle="Smart scheduling finds the right slot. You confirm. Done."
        primary={{ label: 'Try Momenties free', href: '/login' }}
        secondary={{ label: 'AI scheduling overview', href: '/ai-scheduling' }}
      />
    </>
  )
}
