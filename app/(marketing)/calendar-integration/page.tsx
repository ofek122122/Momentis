import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { RefreshCw, Smartphone, Globe, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendar Integration — Google Calendar, Apple Calendar, and more',
  description:
    'Momenties integrates with Google Calendar (bidirectional sync), Apple Calendar (CalDAV), and Outlook (via Google). Keep your existing calendar ecosystem — add AI input and analytics on top.',
  alternates: { canonical: '/calendar-integration' },
  openGraph: {
    title: 'Calendar Integration — Momenties',
    description: 'Sync with Google Calendar, Apple Calendar, and more.',
    url: '/calendar-integration',
    type: 'website',
  },
}

const INTEGRATIONS = [
  {
    icon: RefreshCw,
    name: 'Google Calendar',
    badge: 'Free',
    desc: 'Bidirectional sync. Events created in Momenties appear in Google Calendar instantly. Events created in Google Calendar appear in Momenties. Changes sync both ways in real time.',
    details: [
      'Full bidirectional event sync',
      'Multiple Google calendars supported',
      'Google Meet links preserved',
      'Attendee invites sent via Google',
      'Available on free plan',
    ],
  },
  {
    icon: Smartphone,
    name: 'Apple Calendar',
    badge: 'Pro',
    desc: 'CalDAV sync. Momenties events appear in Apple Calendar, Calendar.app, Siri, Apple Watch, Lock Screen, and CarPlay. Apple ecosystem fully intact — Momenties adds AI on top.',
    details: [
      'CalDAV bidirectional sync',
      'Siri still works for voice queries',
      'Apple Watch calendar widget synced',
      'Lock Screen and CarPlay see events',
      'Available on Pro plan',
    ],
  },
  {
    icon: Globe,
    name: 'Outlook',
    badge: 'Via Google',
    desc: 'Outlook works via Google Calendar. Connect Outlook to Google Calendar (standard Microsoft feature), then connect Momenties to Google Calendar. Events flow through the chain.',
    details: [
      'Works via Google Calendar bridge',
      'No direct Outlook OAuth required',
      'Standard Microsoft → Google sync',
      'Teams meeting links preserved',
      'No additional Momenties setup',
    ],
  },
]

const SYNC_FAQ = [
  {
    q: 'How fast does sync happen?',
    a: 'Google Calendar sync is near-instant — under 30 seconds in both directions. Apple Calendar CalDAV sync typically updates within 60 seconds.',
  },
  {
    q: 'Does sync work offline?',
    a: 'Momenties queues changes when offline and syncs when connectivity is restored. Your calendar is always readable offline; changes sync on reconnect.',
  },
  {
    q: 'Can I connect multiple Google accounts?',
    a: 'Yes. Connect multiple Google accounts and choose which calendars from each account to show in Momenties.',
  },
  {
    q: 'What happens if I delete Momenties?',
    a: 'All your events remain in Google Calendar and Apple Calendar. Momenties doesn\'t own your data — it syncs with the calendar ecosystems you already use.',
  },
  {
    q: 'Does Momenties see my full calendar history?',
    a: 'Momenties reads your calendar to display events. AI parsing only receives the input string you type — it never sends your existing calendar data to Gemini.',
  },
]

export default function CalendarIntegrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar Integration"
        title={
          <>
            Add AI to the calendar
            <br />
            <em className="not-italic text-gold">you already use.</em>
          </>
        }
        lede="Momenties doesn't replace your calendar ecosystem — it extends it. Bidirectional sync with Google Calendar and Apple Calendar means everything you add in Momenties appears in your existing apps automatically."
        crumbs={[{ label: 'Calendar Integration' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Connect your calendar <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/calendar-sync"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Sync details
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Google Calendar sync free · Apple Calendar sync on Pro</p>
      </PageHero>

      {/* Integrations */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Supported integrations</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Every major calendar platform.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {INTEGRATIONS.map((int, i) => (
              <Reveal key={int.name} delay={i * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center">
                      <int.icon className="h-4 w-4 text-gold" />
                    </div>
                    <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${int.badge === 'Free' ? 'text-gold/70 border-gold/20 bg-gold/5' : int.badge === 'Pro' ? 'text-foreground/50 border-border/50' : 'text-muted-foreground/50 border-border/30'}`}>
                      {int.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{int.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{int.desc}</p>
                  <div className="space-y-1">
                    {int.details.map((d) => (
                      <div key={d} className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3 w-3 text-gold/60 shrink-0" />
                        <p className="text-[11px] text-muted-foreground/70">{d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Sync FAQ</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How calendar sync works.</h2>
          </Reveal>
          <div className="space-y-4">
            {SYNC_FAQ.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-1.5">{faq.q}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy note */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border/50 p-6 flex items-start gap-4">
              <Shield className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-foreground mb-1.5">Your calendar data stays yours</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Momenties uses OAuth to access your Google Calendar — you can revoke access at any time from Google Account settings. All your events remain in Google Calendar regardless. We don't own your data; we provide an interface to it.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Keep your calendar. Add AI on top."
        subtitle="Bidirectional sync means nothing changes in your existing workflow. You just get faster."
        primary={{ label: 'Connect your calendar', href: '/login' }}
        secondary={{ label: 'Sync details', href: '/calendar-sync' }}
      />
    </>
  )
}
