import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Reclaim.ai alternative — Fast input and analytics without auto-scheduling',
  description:
    'Reclaim auto-schedules your habits and tasks. Momenties doesn\'t touch your schedule — it helps you add events faster and understand your time better. Compare and decide which philosophy fits you.',
  alternates: { canonical: '/reclaim-alternative' },
  openGraph: {
    title: 'Reclaim.ai alternative',
    description: 'Fast input and analytics. You stay in control.',
    url: '/reclaim-alternative',
    type: 'website',
  },
}

const COMPARISON = [
  { feature: 'Natural language event input', reclaim: false, momenties: true },
  { feature: 'Voice input (AI-parsed)', reclaim: false, momenties: true },
  { feature: 'Photo-to-calendar', reclaim: false, momenties: true },
  { feature: 'Calendar analytics (time by category)', reclaim: true, momenties: true },
  { feature: 'Focus mode (manual protect)', reclaim: false, momenties: true },
  { feature: 'Daily Brief', reclaim: false, momenties: true },
  { feature: 'Habit auto-scheduling', reclaim: true, momenties: false },
  { feature: 'Task auto-scheduling', reclaim: true, momenties: false },
  { feature: 'Buffer time auto-insertion', reclaim: true, momenties: false },
  { feature: 'Manual calendar control', reclaim: false, momenties: true, note: 'Reclaim modifies your schedule automatically' },
  { feature: 'Free plan', reclaim: true, momenties: true, note: 'Both have generous free tiers' },
  { feature: 'Price (paid)', reclaim: false, momenties: true, note: 'Reclaim from $10/mo; Momenties from $12/mo' },
]

export default function ReclaimAlternativePage() {
  return (
    <>
      <PageHero
        eyebrow="Reclaim.ai alternative"
        title={
          <>
            Your schedule,
            <br />
            <em className="not-italic text-gold">your decisions.</em>
          </>
        }
        lede="Reclaim automatically reschedules your habits, tasks, and focus blocks based on your availability. Momenties takes the opposite approach: you decide what goes where. The AI just makes input and analysis faster."
        crumbs={[{ label: 'Reclaim alternative' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try Momenties free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/best-calendar-app"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Full calendar comparison
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Pro from $12/month · No auto-scheduling</p>
      </PageHero>

      {/* Philosophy section */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Core difference</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Two different theories of time management.</h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                <strong className="font-medium text-foreground">Reclaim's theory:</strong> Most people are bad at defending their habits, deep work, and focus time against the pressure of incoming meetings. Give an AI permission to automatically protect and reschedule those blocks. The calendar becomes a managed system, not a passive record.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                <strong className="font-medium text-foreground">Momenties' theory:</strong> The bottleneck isn't willpower — it's friction. Creating events is slow, finding patterns in your time is hard, and protecting blocks requires deliberate action. Remove those frictions and let the person remain in control of their own schedule.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Both are valid philosophies. If you want to stop fighting for your own time and outsource that fight to an AI, Reclaim solves it well. If you want to win that fight yourself but want better weapons — faster input, better visibility, deliberate focus protection — Momenties is the fit.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Reclaim vs Momenties.</h2>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-[#0a0a0d]">
                    <th className="text-left px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Feature</th>
                    <th className="text-center px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Reclaim</th>
                    <th className="text-center px-4 py-3 text-xs font-mono text-gold/60 uppercase tracking-wider">Momenties</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={row.feature} className={`border-b border-border/40 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                      <td className="px-4 py-2.5 text-sm text-foreground/80">
                        {row.feature}
                        {row.note && <span className="text-[10px] text-muted-foreground ml-2">({row.note})</span>}
                      </td>
                      <td className="px-4 py-2.5 text-center">
                        {row.reclaim ? <CheckCircle2 className="h-4 w-4 text-foreground/40 mx-auto" /> : <XCircle className="h-4 w-4 text-red-400/40 mx-auto" />}
                      </td>
                      <td className="px-4 py-2.5 text-center">
                        {row.momenties ? <CheckCircle2 className="h-4 w-4 text-gold mx-auto" /> : <XCircle className="h-4 w-4 text-red-400/40 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* When Reclaim makes sense */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">When Reclaim makes sense.</h2>
          </Reveal>
          <Reveal>
            <div className="space-y-3">
              {[
                'You have recurring habits (gym, deep work, meals) you can\'t consistently protect manually',
                'You want tasks auto-placed in available gaps without thinking about it',
                'You\'re fine with your calendar being dynamically rescheduled throughout the day',
                'Buffer time automation matters more to you than manual event input speed',
              ].map((r) => (
                <div key={r} className="flex items-start gap-3 rounded-xl border border-border/50 p-4">
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground/30 shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/80">{r}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Faster input. Better analytics. You stay in charge."
        subtitle="No auto-scheduling. No algorithmic calendar management. Just you, faster."
        primary={{ label: 'Try Momenties free', href: '/login' }}
        secondary={{ label: 'See all features', href: '/features' }}
      />
    </>
  )
}
