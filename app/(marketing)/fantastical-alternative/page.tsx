import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fantastical alternative — More AI, more analytics, cross-platform',
  description:
    'Fantastical is a great Mac/iOS calendar. Momenties goes further with AI photo input, calendar analytics, Focus mode, and a web app that works on any device. Here\'s an honest comparison.',
  alternates: { canonical: '/fantastical-alternative' },
  openGraph: {
    title: 'Fantastical alternative',
    description: 'More AI, more analytics, cross-platform.',
    url: '/fantastical-alternative',
    type: 'website',
  },
}

const COMPARISON = [
  { feature: 'Natural language text input', fantastical: true, momenties: true },
  { feature: 'Voice input', fantastical: true, momenties: true },
  { feature: 'Photo-to-calendar', fantastical: false, momenties: true },
  { feature: 'AI model (contextual parsing)', fantastical: false, momenties: true, note: 'Gemini 2.5 Flash' },
  { feature: 'Calendar analytics', fantastical: false, momenties: true },
  { feature: 'Focus mode (auto-DND)', fantastical: false, momenties: true },
  { feature: 'Daily Brief', fantastical: false, momenties: true },
  { feature: 'Web app (no download required)', fantastical: false, momenties: true },
  { feature: 'Windows / Linux support', fantastical: false, momenties: true },
  { feature: 'Apple Calendar sync', fantastical: true, momenties: true, note: 'Momenties: Pro' },
  { feature: 'Google Calendar sync', fantastical: true, momenties: true },
  { feature: 'Calendars sets / multiple views', fantastical: true, momenties: false },
  { feature: 'Task integration (Reminders, etc.)', fantastical: true, momenties: false },
  { feature: 'Native macOS menu bar app', fantastical: true, momenties: false },
]

export default function FantasticalAlternativePage() {
  return (
    <>
      <PageHero
        eyebrow="Fantastical alternative"
        title={
          <>
            Same NLP.
            <br />
            <em className="not-italic text-gold">More AI. More analytics.</em>
          </>
        }
        lede="Fantastical's natural language input is genuinely good — it was the first to prove people would use it. Momenties builds on that foundation and adds a full AI model, photo input, analytics, and a cross-platform web app."
        crumbs={[{ label: 'Fantastical alternative' }]}
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
            Full comparison
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No download required</p>
      </PageHero>

      {/* Honest comparison */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">The honest truth</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">When to stay on Fantastical.</h2>
          </Reveal>
          <Reveal>
            <div className="space-y-3">
              {[
                { reason: 'You use Apple Reminders or tasks in your calendar', detail: 'Fantastical\'s Reminders integration is native and deep. Momenties is calendar-only — no task management.' },
                { reason: 'You rely on the macOS menu bar app', detail: 'Fantastical\'s native menu bar experience is excellent. Momenties is a web app — no system-level integration.' },
                { reason: 'Calendar sets / multiple view layouts matter to you', detail: 'Fantastical\'s multi-calendar view organization is more flexible. Momenties has a simpler, more focused view.' },
              ].map((r, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Feature comparison</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Fantastical vs Momenties.</h2>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-[#0a0a0d]">
                    <th className="text-left px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Feature</th>
                    <th className="text-center px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Fantastical</th>
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
                        {row.fantastical
                          ? <CheckCircle2 className="h-4 w-4 text-foreground/40 mx-auto" />
                          : <XCircle className="h-4 w-4 text-red-400/40 mx-auto" />
                        }
                      </td>
                      <td className="px-4 py-2.5 text-center">
                        {row.momenties
                          ? <CheckCircle2 className="h-4 w-4 text-gold mx-auto" />
                          : <XCircle className="h-4 w-4 text-red-400/40 mx-auto" />
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Where Momenties wins */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Where Momenties wins</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Three clear advantages.</h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                <strong className="font-medium text-foreground">Photo-to-calendar:</strong> Fantastical has no image input. Momenties reads schedules, conference agendas, and timetables from photos and converts them to events. For people who receive printed or PDF schedules, this is significant.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                <strong className="font-medium text-foreground">Analytics:</strong> Fantastical is a calendar viewer. Momenties adds a data layer that shows your meeting load, focus ratio, and time-by-person. If understanding your time patterns matters to you, Momenties is ahead.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                <strong className="font-medium text-foreground">Cross-platform web app:</strong> Fantastical requires a download and is Apple-only. Momenties works in any browser on any operating system. If you use Windows at work and Mac at home, or if you don't want to install an app, Momenties is the option.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="Try Momenties if Fantastical's analytics and AI aren't enough."
        subtitle="Free forever. No download. Works on every OS."
        primary={{ label: 'Try Momenties free', href: '/login' }}
        secondary={{ label: 'See all AI features', href: '/ai-calendar' }}
      />
    </>
  )
}
