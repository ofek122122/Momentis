import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Google Calendar vs Outlook — Which is better? (And a third option)',
  description:
    'Google Calendar and Outlook are the two dominant calendar apps. This honest comparison covers sync, collaboration, platform support, and why neither has AI input or analytics — but Momenties does.',
  alternates: { canonical: '/google-calendar-vs-outlook' },
  openGraph: {
    title: 'Google Calendar vs Outlook',
    description: 'An honest comparison — and a third option worth considering.',
    url: '/google-calendar-vs-outlook',
    type: 'website',
  },
}

const COMPARISON = [
  { feature: 'Gmail / Google Workspace integration', google: true, outlook: false, momenties: true, note: 'Momenties via Google Calendar sync' },
  { feature: 'Microsoft 365 / Teams integration', google: false, outlook: true, momenties: false, note: 'Momenties via Google Calendar bridge' },
  { feature: 'Mobile apps (iOS + Android)', google: true, outlook: true, momenties: true, note: 'Momenties is web-based' },
  { feature: 'Natural language event input', google: false, outlook: false, momenties: true },
  { feature: 'Voice event creation', google: false, outlook: false, momenties: true },
  { feature: 'Photo-to-calendar', google: false, outlook: false, momenties: true },
  { feature: 'Calendar analytics', google: false, outlook: false, momenties: true },
  { feature: 'Focus mode (protect blocks)', google: false, outlook: false, momenties: true },
  { feature: 'Daily Brief', google: false, outlook: false, momenties: true },
  { feature: 'Free (basic features)', google: true, outlook: false, momenties: true, note: 'Outlook requires M365 subscription' },
  { feature: 'Shared team calendars', google: true, outlook: true, momenties: true, note: 'Momenties on Team plan' },
  { feature: 'Room booking', google: true, outlook: true, momenties: false, note: 'Enterprise only; Momenties integrates via sync' },
]

const WHEN_TO_USE = [
  {
    app: 'Google Calendar',
    use: 'Your company runs on Google Workspace, you need full Gmail integration, or you want a free calendar for personal use with no subscription required.',
  },
  {
    app: 'Outlook',
    use: 'Your company runs on Microsoft 365, you need deep Exchange/Teams integration, room booking in a corporate environment, or you primarily work in the Microsoft ecosystem.',
  },
  {
    app: 'Momenties',
    use: 'You want AI input, time analytics, Focus mode, or voice scheduling — and you want to keep using Google Calendar or Apple Calendar as the backend while gaining these capabilities on top.',
  },
]

export default function GoogleCalendarVsOutlookPage() {
  return (
    <>
      <PageHero
        eyebrow="Google Calendar vs Outlook"
        title={
          <>
            Two great calendars.
            <br />
            <em className="not-italic text-gold">Neither has AI input.</em>
          </>
        }
        lede="Google Calendar and Outlook dominate the calendar market for good reasons — deep ecosystem integration, reliability, and ubiquity. This comparison covers both honestly, plus explains where Momenties fits as an AI layer on top of either."
        crumbs={[{ label: 'Google Calendar vs Outlook' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · Works with Google Calendar · No Outlook migration needed</p>
      </PageHero>

      {/* Honest take */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Honest take</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Why both are worth using — in their context.</h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                <strong className="font-medium text-foreground">Google Calendar</strong> wins on simplicity, price (free), and Google ecosystem integration. If your company runs on Gmail and Google Meet, Google Calendar is the obvious choice — it's deeply connected to everything else you use.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                <strong className="font-medium text-foreground">Outlook</strong> wins on Microsoft 365 integration — Exchange, Teams, SharePoint, room booking, and enterprise compliance features that Google Calendar doesn't match. In a Microsoft-heavy environment, Outlook is the right calendar.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Where both fall short: neither has AI-powered natural language input, neither has time analytics, and neither has the ability to protect focus blocks with active enforcement. Momenties adds these as a layer on top of Google Calendar, without requiring you to migrate away from either.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Feature comparison.</h2>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-[#0a0a0d]">
                    <th className="text-left px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Feature</th>
                    <th className="text-center px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Google</th>
                    <th className="text-center px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Outlook</th>
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
                        {row.google ? <CheckCircle2 className="h-4 w-4 text-foreground/40 mx-auto" /> : <XCircle className="h-4 w-4 text-red-400/40 mx-auto" />}
                      </td>
                      <td className="px-4 py-2.5 text-center">
                        {row.outlook ? <CheckCircle2 className="h-4 w-4 text-foreground/40 mx-auto" /> : <XCircle className="h-4 w-4 text-red-400/40 mx-auto" />}
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

      {/* When to use each */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Use the right tool for your context.</h2>
          </Reveal>
          <div className="space-y-4">
            {WHEN_TO_USE.map((item, i) => (
              <Reveal key={item.app} delay={i * 60}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-1.5">{item.app}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.use}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Keep Google Calendar or Outlook. Add AI on top."
        subtitle="Momenties layers natural language input, analytics, and Focus mode onto your existing calendar."
        primary={{ label: 'Try Momenties free', href: '/login' }}
        secondary={{ label: 'Full calendar comparison', href: '/best-calendar-app' }}
      />
    </>
  )
}
