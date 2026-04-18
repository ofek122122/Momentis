import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Apple Calendar alternative — Keep the privacy, add the AI',
  description:
    'Apple Calendar is private and native. But it has no AI, no analytics, and form-based event input. Momenties adds all three while syncing back to Apple Calendar so Siri and Apple Watch still work.',
  alternates: { canonical: '/apple-calendar-alternative' },
  openGraph: {
    title: 'Apple Calendar alternative',
    description: 'Keep the privacy. Add the AI.',
    url: '/apple-calendar-alternative',
    type: 'website',
  },
}

const KEY_DIFFERENCE = [
  { feature: 'AI natural language input', apple: false, momenties: true },
  { feature: 'Voice input (AI-parsed)', apple: false, momenties: true },
  { feature: 'Photo-to-calendar', apple: false, momenties: true },
  { feature: 'Calendar analytics', apple: false, momenties: true },
  { feature: 'Focus mode (auto-DND)', apple: false, momenties: true },
  { feature: 'Daily Brief', apple: false, momenties: true },
  { feature: 'Web app (Windows / Android access)', apple: false, momenties: true },
  { feature: 'Free (no subscription required)', apple: true, momenties: true },
  { feature: 'iCloud / Apple ecosystem integration', apple: true, momenties: true, note: 'via CalDAV sync' },
  { feature: 'Siri support', apple: true, momenties: true, note: 'via Apple Calendar sync' },
  { feature: 'Apple Watch support', apple: true, momenties: true, note: 'via Apple Calendar sync' },
  { feature: 'On-device, no API calls for parsing', apple: true, momenties: false, note: 'Momenties uses local + cloud AI' },
]

export default function AppleCalendarAlternativePage() {
  return (
    <>
      <PageHero
        eyebrow="Apple Calendar alternative"
        title={
          <>
            Keep the privacy.
            <br />
            <em className="not-italic text-gold">Add the AI.</em>
          </>
        }
        lede="Apple Calendar is the most private calendar app on the market — local-first, iCloud-synced, no data monetization. Momenties adds the AI input and analytics Apple Calendar will never have, and syncs back via CalDAV so nothing breaks."
        crumbs={[{ label: 'Apple Calendar alternative' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try Momenties free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/calendar-sync"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            How calendar sync works
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Apple Calendar sync on Pro · No data sold</p>
      </PageHero>

      {/* The honest take */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">The honest take</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Apple Calendar is good at one thing above all else.</h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                Privacy. Apple Calendar stores your events in iCloud, processes nothing on their servers beyond sync, and is part of a company whose business model isn't advertising. For people who care about who can see their calendar data, Apple Calendar is the most defensible choice.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Where it falls down is input and insight. Creating an event in Apple Calendar is still a form. There's no AI parsing, no voice event creation (Siri can add events, but the experience is inconsistent), and absolutely no analytics. If you want to know how many hours you were in meetings last week, Apple Calendar cannot tell you.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Momenties syncs bidirectionally with Apple Calendar via CalDAV. Your events appear in Apple Calendar — which means Siri, Apple Watch, Lock Screen, and CarPlay all see them correctly. You use Momenties for input and analysis. Apple Calendar is the storage layer that makes the Apple ecosystem work.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Apple Calendar vs Momenties.</h2>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-[#0a0a0d]">
                    <th className="text-left px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Feature</th>
                    <th className="text-center px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Apple Calendar</th>
                    <th className="text-center px-4 py-3 text-xs font-mono text-gold/60 uppercase tracking-wider">Momenties</th>
                  </tr>
                </thead>
                <tbody>
                  {KEY_DIFFERENCE.map((row, i) => (
                    <tr key={row.feature} className={`border-b border-border/40 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                      <td className="px-4 py-2.5 text-sm text-foreground/80">
                        {row.feature}
                        {row.note && <span className="text-[10px] text-muted-foreground ml-2">({row.note})</span>}
                      </td>
                      <td className="px-4 py-2.5 text-center">
                        {row.apple ? <CheckCircle2 className="h-4 w-4 text-foreground/40 mx-auto" /> : <XCircle className="h-4 w-4 text-red-400/40 mx-auto" />}
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

      {/* Privacy reassurance */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border/50 p-6">
              <h3 className="text-sm font-medium text-foreground mb-3">What Momenties does with your calendar data</h3>
              <div className="space-y-2">
                {[
                  'Event text sent to AI only for parsing — the input string only, not your full calendar',
                  'AI inputs not used for model training (contractually prohibited with Gemini)',
                  'No advertising model — Momenties is subscription software',
                  'No data sold to third parties, advertisers, or data brokers',
                  'Full privacy policy and AI ethics documentation available',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs text-foreground/80">
                    <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                    {f}
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                <Link href="/privacy" className="text-xs text-gold/70 hover:text-gold transition-colors">Privacy policy →</Link>
                <Link href="/ai/ethics" className="text-xs text-gold/70 hover:text-gold transition-colors">AI ethics →</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="All your events still go through Apple Calendar. You just add them faster."
        subtitle="CalDAV sync means Siri, Apple Watch, and everything else still works."
        primary={{ label: 'Try Momenties free', href: '/login' }}
        secondary={{ label: 'Calendar sync details', href: '/calendar-sync' }}
      />
    </>
  )
}
