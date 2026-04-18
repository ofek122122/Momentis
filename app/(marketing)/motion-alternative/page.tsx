import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Motion alternative — Calendar control without auto-scheduling',
  description:
    'Motion auto-schedules your tasks. Momenties doesn\'t. If you want AI input speed and analytics without surrendering control of your calendar to an algorithm, Momenties is the alternative.',
  alternates: { canonical: '/motion-alternative' },
  openGraph: {
    title: 'Motion alternative',
    description: 'Calendar control without auto-scheduling.',
    url: '/motion-alternative',
    type: 'website',
  },
}

const COMPARISON = [
  { feature: 'Natural language event input', motion: false, momenties: true },
  { feature: 'Voice input', motion: false, momenties: true },
  { feature: 'Photo-to-calendar', motion: false, momenties: true },
  { feature: 'Calendar analytics', motion: false, momenties: true },
  { feature: 'Focus mode (protect blocks)', motion: false, momenties: true },
  { feature: 'Daily Brief', motion: false, momenties: true },
  { feature: 'Manual calendar control', motion: false, momenties: true, note: 'Motion overrides your schedule' },
  { feature: 'AI task auto-scheduling', motion: true, momenties: false },
  { feature: 'Task management built-in', motion: true, momenties: false },
  { feature: 'Free plan', motion: false, momenties: true },
  { feature: 'Price', motion: false, momenties: true, note: 'Motion from $34/mo; Momenties from free/$12 Pro' },
]

export default function MotionAlternativePage() {
  return (
    <>
      <PageHero
        eyebrow="Motion alternative"
        title={
          <>
            AI speed.
            <br />
            <em className="not-italic text-gold">You stay in control.</em>
          </>
        }
        lede="Motion's core feature is AI that auto-schedules your tasks. That's powerful if task auto-placement is your main problem. If you want AI-fast input and analytics without surrendering calendar control, Momenties is the better fit."
        crumbs={[{ label: 'Motion alternative' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · Pro from $12/month · No task auto-scheduling</p>
      </PageHero>

      {/* The key distinction */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">The core difference</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Two very different philosophies.</h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                <strong className="font-medium text-foreground">Motion's philosophy:</strong> Give the AI your tasks and deadlines. Let it decide when you do each thing. Your calendar is a managed output — the AI fills it based on priority and availability.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                <strong className="font-medium text-foreground">Momenties' philosophy:</strong> You decide what goes on your calendar and when. The AI helps you add things fast (under 20ms for most events), understand your patterns (analytics), and protect your time (Focus mode) — but you remain in control.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Neither is wrong. If you trust an AI to optimize your task schedule and want to stop making those decisions manually, Motion might work well for you. If you want to make those decisions yourself but want the admin cost minimized, Momenties is the better fit.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Motion vs Momenties.</h2>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-[#0a0a0d]">
                    <th className="text-left px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Feature</th>
                    <th className="text-center px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Motion</th>
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
                        {row.motion ? <CheckCircle2 className="h-4 w-4 text-foreground/40 mx-auto" /> : <XCircle className="h-4 w-4 text-red-400/40 mx-auto" />}
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

      {/* When to use Motion */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">When Motion makes sense.</h2>
          </Reveal>
          <Reveal>
            <div className="space-y-3">
              {[
                'You have many tasks with deadlines and want AI to decide the schedule',
                'You trust algorithmic optimization over your own schedule intuition',
                'You\'re willing to pay $34/month for task auto-scheduling',
              ].map((r, i) => (
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
        title="Fast AI input. Your schedule, your decisions."
        subtitle="Momenties doesn't auto-schedule you. It helps you schedule faster."
        primary={{ label: 'Try Momenties free', href: '/login' }}
        secondary={{ label: 'See all features', href: '/features' }}
      />
    </>
  )
}
