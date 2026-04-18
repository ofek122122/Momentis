import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cron alternative — AI input, analytics, and works on every OS',
  description:
    'Cron is keyboard-first and team-focused. Momenties adds AI parsing, voice and photo input, calendar analytics, and cross-platform web access. An honest comparison.',
  alternates: { canonical: '/cron-alternative' },
  openGraph: {
    title: 'Cron alternative',
    description: 'AI input, analytics, and every OS.',
    url: '/cron-alternative',
    type: 'website',
  },
}

const COMPARISON = [
  { feature: 'AI natural language parsing', cron: false, momenties: true },
  { feature: 'Voice input', cron: false, momenties: true },
  { feature: 'Photo-to-calendar', cron: false, momenties: true },
  { feature: 'Calendar analytics (meeting load, focus ratio)', cron: true, momenties: true },
  { feature: 'Focus mode with auto-DND', cron: false, momenties: true },
  { feature: 'Daily Brief', cron: false, momenties: true },
  { feature: 'Web app', cron: false, momenties: true },
  { feature: 'Windows support', cron: false, momenties: true },
  { feature: 'Keyboard-first navigation', cron: true, momenties: false },
  { feature: 'Team availability overlay', cron: true, momenties: true, note: 'Momenties: Pro' },
  { feature: 'Google Calendar sync', cron: true, momenties: true },
  { feature: 'Apple Calendar sync', cron: true, momenties: true, note: 'Momenties: Pro' },
  { feature: 'Native desktop app', cron: true, momenties: false },
]

export default function CronAlternativePage() {
  return (
    <>
      <PageHero
        eyebrow="Cron alternative"
        title={
          <>
            Keyboard-first was great.
            <br />
            <em className="not-italic text-gold">AI-first is next.</em>
          </>
        }
        lede="Cron proved that people want fast, keyboard-driven calendar tools. Momenties takes that speed further — instead of keyboard shortcuts, you type or speak events naturally and AI does the rest."
        crumbs={[{ label: 'Cron alternative' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try Momenties free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/compare"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            All comparisons
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Works in any browser · No download</p>
      </PageHero>

      {/* The honest take */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Honest take</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Who should stay on Cron.</h2>
          </Reveal>
          <Reveal>
            <div className="space-y-3">
              {[
                { reason: 'You prefer keyboard navigation over natural language', detail: 'Cron\'s keyboard shortcuts are fast and well-designed. If your muscle memory is built around ⌘+K command palettes, Momenties doesn\'t replicate that.' },
                { reason: 'You use Cron\'s native desktop app extensively', detail: 'Cron has system-level integrations Momenties doesn\'t have (native meeting join, menu bar). These matter if you rely on them.' },
                { reason: 'Your team is already on Cron', detail: 'Team calendar switching has a coordination cost. If everyone is on Cron, the friction of moving may outweigh the feature improvement.' },
              ].map((r) => (
                <div key={r.reason} className="flex items-start gap-3 rounded-xl border border-border/50 p-4">
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground/30 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{r.reason}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{r.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Cron vs Momenties feature comparison.</h2>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-[#0a0a0d]">
                    <th className="text-left px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Feature</th>
                    <th className="text-center px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Cron</th>
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
                        {row.cron ? <CheckCircle2 className="h-4 w-4 text-foreground/40 mx-auto" /> : <XCircle className="h-4 w-4 text-red-400/40 mx-auto" />}
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

      <CTA
        title="Keyboard-first was the fastest input. Until voice and AI."
        subtitle="Natural language + voice + photo. Free forever."
        primary={{ label: 'Try Momenties free', href: '/login' }}
        secondary={{ label: 'See all features', href: '/features' }}
      />
    </>
  )
}
