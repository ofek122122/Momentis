import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Outlook Calendar alternative — Faster, smarter, less bureaucratic',
  description:
    'Outlook Calendar is powerful but slow and enterprise-heavy. Momenties is the AI calendar alternative for people who want fast event creation, real analytics, and less friction.',
  alternates: { canonical: '/outlook-calendar-alternative' },
  openGraph: {
    title: 'Outlook Calendar alternative',
    description: 'Faster, smarter, less bureaucratic.',
    url: '/outlook-calendar-alternative',
    type: 'website',
  },
}

const COMPARISON = [
  { feature: 'AI natural language input', outlook: false, momenties: true },
  { feature: 'Voice event creation', outlook: false, momenties: true },
  { feature: 'Photo-to-calendar', outlook: false, momenties: true },
  { feature: 'Calendar analytics (meeting load, focus ratio)', outlook: false, momenties: true },
  { feature: 'Focus mode with auto-DND', outlook: false, momenties: true },
  { feature: 'Daily Brief', outlook: false, momenties: true },
  { feature: 'Works without Microsoft 365 subscription', outlook: false, momenties: true },
  { feature: 'Google Calendar sync', outlook: false, momenties: true },
  { feature: 'Apple Calendar sync', outlook: false, momenties: true },
  { feature: 'Event input under 3 seconds', outlook: false, momenties: true },
  { feature: 'Microsoft Teams integration', outlook: true, momenties: false },
  { feature: 'Enterprise SSO / Active Directory', outlook: true, momenties: true, note: 'Momenties: Team plan' },
  { feature: 'Shared mailboxes', outlook: true, momenties: false },
  { feature: 'Free (without Microsoft subscription)', outlook: false, momenties: true },
]

const GRIPES = [
  {
    gripe: 'Creating a new event requires 8+ clicks',
    context: 'The Outlook new event form has 15 fields visible by default. Most users need 3.',
  },
  {
    gripe: 'The "Scheduling Assistant" is slow and outdated',
    context: 'Finding availability across attendees in Outlook takes 30+ seconds of loading. Momenties team view is instant.',
  },
  {
    gripe: 'Requires Microsoft 365 to get full features',
    context: 'Outlook\'s best features — shared calendars, room booking, policies — require enterprise licenses. Momenties AI works on a $12/mo Pro plan.',
  },
  {
    gripe: 'No analytics or time insights',
    context: 'Outlook has no native way to see your meeting-to-focus ratio or time by person. That data lives in third-party integrations.',
  },
]

export default function OutlookCalendarAlternativePage() {
  return (
    <>
      <PageHero
        eyebrow="Outlook Calendar alternative"
        title={
          <>
            Faster input.
            <br />
            <em className="not-italic text-gold">Less bureaucracy.</em>
          </>
        }
        lede="Outlook Calendar is designed for enterprise IT departments, not for people who just want to add events quickly. Momenties is built the other way around."
        crumbs={[{ label: 'Outlook alternative' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · No Microsoft subscription required</p>
      </PageHero>

      {/* The honest problem */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">The honest problem</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Why people look for an Outlook alternative.
            </h2>
          </Reveal>
          <div className="space-y-4">
            {GRIPES.map((g, i) => (
              <Reveal key={g.gripe} delay={i * 40}>
                <div className="rounded-xl border border-border/50 lux-card p-5">
                  <p className="text-sm font-medium text-foreground mb-2">"{g.gripe}"</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{g.context}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Side by side</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Outlook vs Momenties.</h2>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-[#0a0a0d]">
                    <th className="text-left px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Feature</th>
                    <th className="text-center px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Outlook</th>
                    <th className="text-center px-4 py-3 text-xs font-mono text-gold/60 uppercase tracking-wider">Momenties</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={row.feature} className={`border-b border-border/40 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                      <td className="px-4 py-2.5 text-sm text-foreground/80">
                        {row.feature}
                        {row.note && <span className="text-xs text-muted-foreground ml-2">({row.note})</span>}
                      </td>
                      <td className="px-4 py-2.5 text-center">
                        {row.outlook
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

      {/* When to stay on Outlook */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Honest advice</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">When you shouldn&apos;t switch.</h2>
          </Reveal>
          <Reveal>
            <div className="space-y-3">
              {[
                { keep: 'Your organization mandates Outlook', reason: 'We can\'t override IT policy. If you\'re locked in, you\'re locked in.' },
                { keep: 'You rely on Microsoft Teams calendar integration', reason: 'Teams-native meetings, rooms, and policies are deeply embedded in Exchange. We don\'t replicate that.' },
                { keep: 'You use shared mailboxes or resource calendars', reason: 'Exchange/Outlook\'s shared mailbox model is enterprise-only and we don\'t support it.' },
              ].map((item, i) => (
                <div key={item.keep} className="flex items-start gap-3 rounded-xl border border-border/50 p-4">
                  <XCircle className="h-4 w-4 text-muted-foreground/40 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.keep}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Coexistence */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-4">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Can Momenties work alongside Outlook?</h2>
          </Reveal>
          <Reveal>
            <p className="text-[15px] leading-[1.8] text-foreground/85 font-light">
              Yes. Momenties syncs with Google Calendar, which in turn can sync with Outlook via the Google-Exchange bridge. You get Momenties' AI input, analytics, and Focus mode on top of your existing Exchange calendar. Your IT team doesn&apos;t see Momenties. Your events appear everywhere they should.
            </p>
          </Reveal>
          <Reveal delay={40}>
            <p className="text-[15px] leading-[1.8] text-foreground/85 font-light mt-4">
              This setup is how most people who use Momenties in enterprise environments make it work. Direct Outlook/Exchange sync (without Google Calendar as an intermediary) is on the roadmap but not yet available.
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Your calendar shouldn't require a Microsoft subscription to be useful."
        subtitle="AI input, analytics, and Focus mode. Free plan available."
        primary={{ label: 'Try Momenties free', href: '/login' }}
        secondary={{ label: 'See all features', href: '/features' }}
      />
    </>
  )
}
