import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: '12 productivity tips that start with your calendar',
  description:
    'Most productivity advice ignores the calendar. These 12 tips are specifically about using your calendar better — faster input, smarter protection, and clearer weekly review.',
  alternates: { canonical: '/productivity-tips' },
  openGraph: {
    title: '12 productivity tips that start with your calendar',
    description: 'Most productivity advice ignores the calendar.',
    url: '/productivity-tips',
    type: 'website',
  },
}

const TIPS = [
  {
    n: '01',
    title: 'Block time before you fill it',
    body: 'Add focus blocks to your calendar before accepting meeting requests for the week. A week you build proactively looks different from a week you fill reactively. The shape you choose on Sunday determines your Monday.',
    tag: 'Focus',
  },
  {
    n: '02',
    title: 'Add events as you think of them, not later',
    body: 'The intention to add something later is the intention to forget it. Use natural language or voice input to add events in seconds. The dentist appointment should take 3 seconds on your phone, not 45 in a form.',
    tag: 'Input speed',
  },
  {
    n: '03',
    title: 'Measure your meeting ratio weekly',
    body: 'Look at your meeting-to-focus ratio once a week. Most people don't know theirs. Most people who look at it once change something. The target varies by role, but 50% or above is usually worth addressing.',
    tag: 'Analytics',
  },
  {
    n: '04',
    title: 'Use your morning Daily Brief',
    body: 'Spend 60 seconds every morning reviewing your day before opening email or Slack. Know your anchor event (the thing that must happen), your load, and any scheduling conflicts. Then open communication tools.',
    tag: 'Daily Brief',
  },
  {
    n: '05',
    title: 'Schedule the work, not just the meetings',
    body: 'If a task requires 2 hours, it needs 2 hours on your calendar — not just a to-do list entry. Research consistently shows scheduled tasks are completed more reliably than listed ones.',
    tag: 'Time blocking',
  },
  {
    n: '06',
    title: 'Add 15-minute buffer blocks after key meetings',
    body: 'A meeting that runs long without buffer time derails the next event. Add recurring 15-minute "buffer" blocks after your most common recurring meetings. They get overwritten when nothing runs long; they absorb the overflow when it does.',
    tag: 'Calendar hygiene',
  },
  {
    n: '07',
    title: 'Run a monthly meeting audit',
    body: 'Look at every recurring meeting and ask: what would happen if I canceled this for one month? If the answer is "nothing," cancel it. Most people find 2–3 meetings per month that can be removed or replaced with async.',
    tag: 'Meeting hygiene',
  },
  {
    n: '08',
    title: 'Batch similar work types',
    body: 'Your calendar shapes your cognitive load. Put all external meetings on Tuesday and Thursday. Keep Monday and Friday for deep work. Batching reduces the mental cost of context-switching by half.',
    tag: 'Batching',
  },
  {
    n: '09',
    title: 'Protect one morning per week from all meetings',
    body: '"No-meeting Friday morning" is a cliché because it works. Use Focus mode to enforce it. Once it holds for a month, you'll never voluntarily schedule over it again.',
    tag: 'Focus',
  },
  {
    n: '10',
    title: 'Log client or project time as calendar blocks',
    body: 'If you bill by time or need to know where your project time goes, log it as a calendar event the moment it happens. Reconstruction at day-end loses 15–20% accuracy. Real-time logging is trivial if input is fast enough.',
    tag: 'Time tracking',
  },
  {
    n: '11',
    title: 'Review the week on Friday, not Monday',
    body: 'A 15-minute end-of-week review (what actually happened, what moved, what's held over) is more valuable than Monday morning scramble. Look at your analytics: how did the week compare to what you planned?',
    tag: 'Review',
  },
  {
    n: '12',
    title: 'Treat your calendar as a commitment device',
    body: 'A calendar event is a commitment to yourself, not a request. "Research: 2 hours Tuesday" means you're doing research on Tuesday. Say it to yourself that way. If you wouldn't cancel a meeting with a colleague for that reason, don't cancel the block.',
    tag: 'Mindset',
  },
]

const TAG_COLORS: Record<string, string> = {
  'Focus': 'text-violet-400 bg-violet-500/10',
  'Input speed': 'text-sky-400 bg-sky-500/10',
  'Analytics': 'text-gold bg-gold/10',
  'Daily Brief': 'text-amber-400 bg-amber-500/10',
  'Time blocking': 'text-emerald-400 bg-emerald-500/10',
  'Calendar hygiene': 'text-blue-400 bg-blue-500/10',
  'Meeting hygiene': 'text-red-400 bg-red-500/10',
  'Batching': 'text-indigo-400 bg-indigo-500/10',
  'Time tracking': 'text-teal-400 bg-teal-500/10',
  'Review': 'text-orange-400 bg-orange-500/10',
  'Mindset': 'text-pink-400 bg-pink-500/10',
}

export default function ProductivityTipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Productivity tips"
        title={
          <>
            12 tips that start
            <br />
            <em className="not-italic text-gold">with your calendar.</em>
          </>
        }
        lede="Most productivity advice is about todo lists, habits, and morning routines. This is about your calendar — the one tool that governs everything else."
        crumbs={[{ label: 'Productivity tips' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try Momenties free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      {/* Tips */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            {TIPS.map((tip, i) => (
              <Reveal key={tip.n} delay={i * 20}>
                <div className="rounded-xl border border-border/50 lux-card p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-gold/50">{tip.n}</span>
                    <span className={`text-[9px] font-mono uppercase tracking-wider rounded-full px-2 py-0.5 ${TAG_COLORS[tip.tag] || 'text-muted-foreground bg-white/5'}`}>
                      {tip.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-display font-bold text-foreground mb-2">{tip.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">{tip.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Apply these tips with Momenties.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: 'Time blocking guide', href: '/time-blocking' },
                { label: 'Deep work protection', href: '/deep-work' },
                { label: 'Calendar analytics', href: '/features/analytics' },
                { label: 'Daily Brief', href: '/daily-brief' },
                { label: 'Focus mode', href: '/focus-mode' },
                { label: 'Natural language input', href: '/natural-language-calendar' },
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="flex items-center justify-between rounded-xl border border-border/50 px-4 py-3 hover:border-gold/30 transition-colors group"
                >
                  <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">{l.label}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-gold transition-colors" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Tips are useful. A calendar that implements them is better."
        subtitle="Free forever. No forms. Start in 90 seconds."
        primary={{ label: 'Try Momenties free', href: '/login' }}
        secondary={{ label: 'See all features', href: '/features' }}
      />
    </>
  )
}
