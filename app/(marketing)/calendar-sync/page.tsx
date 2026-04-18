import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2, RefreshCw, Apple, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendar sync — Google Calendar and Apple Calendar, unified',
  description:
    'Momenties syncs bidirectionally with Google Calendar and Apple Calendar. Add an event in Momenties and it appears everywhere. Add it in Google Calendar and it appears in Momenties. One source of truth.',
  alternates: { canonical: '/calendar-sync' },
  openGraph: {
    title: 'Calendar sync — One source of truth',
    description: 'Google Calendar + Apple Calendar, unified.',
    url: '/calendar-sync',
    type: 'website',
  },
}

const SYNC_FEATURES = [
  {
    icon: Globe,
    title: 'Google Calendar sync',
    desc: 'Full bidirectional sync via Google Calendar API. Events created in Momenties appear in Google Calendar immediately. Changes in Google Calendar appear in Momenties in real time.',
    plan: 'Free',
  },
  {
    icon: Apple,
    title: 'Apple Calendar sync',
    desc: 'CalDAV-based sync with Apple Calendar. Your events appear on iPhone, iPad, Mac, Apple Watch, Siri, and CarPlay — because they\'re stored in iCloud where Apple expects them.',
    plan: 'Pro',
  },
  {
    icon: RefreshCw,
    title: 'Bidirectional, conflict-free',
    desc: 'If you edit the same event in two places simultaneously, Momenties uses last-write-wins with a clear conflict indicator. No silent overwrites.',
    plan: 'Free + Pro',
  },
]

const HOW_SYNC_WORKS = [
  { step: 'Create event in Momenties', result: 'Written to Google Calendar API immediately. Apple Calendar updated within 60 seconds via CalDAV push.' },
  { step: 'Edit event in Google Calendar', result: 'Momenties receives webhook within ~2 seconds. Update visible in Momenties without refresh.' },
  { step: 'Edit event in Apple Calendar', result: 'CalDAV change detected on next poll (60 second interval). Propagated to Momenties and Google Calendar.' },
  { step: 'Delete event anywhere', result: 'Deletion propagates to all connected calendars within 2 minutes.' },
]

const FAQ = [
  {
    q: 'Does sync require leaving Momenties running?',
    a: 'No. Google Calendar sync uses webhooks — Google pushes changes to Momenties in real time, even when you\'re not in the app. Apple Calendar sync uses CalDAV polling every 60 seconds.',
  },
  {
    q: 'Will my existing Google Calendar events appear in Momenties?',
    a: 'Yes. On first connection, Momenties imports your existing events (up to 12 months back and all future events). They appear in your Momenties calendar immediately.',
  },
  {
    q: 'Can I sync multiple Google Calendar accounts?',
    a: 'Pro plan supports multiple calendar connections. Free plan supports one Google Calendar account.',
  },
  {
    q: 'Is Apple Calendar sync available on the free plan?',
    a: 'Apple Calendar sync (CalDAV) is a Pro feature. Google Calendar sync is available on the free plan.',
  },
  {
    q: 'What happens if sync breaks?',
    a: 'Momenties shows a sync status indicator if the connection is disrupted. Events created during a sync outage are queued and synced when the connection restores.',
  },
]

export default function CalendarSyncPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar sync"
        title={
          <>
            Google Calendar.
            <br />
            <em className="not-italic text-gold">Apple Calendar. Unified.</em>
          </>
        }
        lede="Add an event in Momenties and it appears in Google Calendar, Apple Calendar, Siri, Apple Watch, and CarPlay within seconds. One calendar. Everywhere you need it."
        crumbs={[{ label: 'Calendar sync' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Connect your calendars <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/integrations"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            All integrations
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Google sync: Free · Apple sync: Pro</p>
      </PageHero>

      {/* Sync features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Sync capabilities</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              What syncs and how.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {SYNC_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-foreground">{f.title}</h3>
                    <span className={`text-[9px] font-mono rounded-full px-2 py-0.5 ${f.plan === 'Free' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-gold/10 text-gold'}`}>
                      {f.plan}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works table */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Sync flow</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What happens in each direction.</h2>
          </Reveal>
          <Reveal>
            <div className="space-y-3">
              {HOW_SYNC_WORKS.map((row, i) => (
                <div key={row.step} className="rounded-xl border border-border/50 p-4">
                  <p className="text-xs font-mono text-gold/60 uppercase tracking-wider mb-1">Action</p>
                  <p className="text-sm font-medium text-foreground mb-2">{row.step}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                    <p className="text-xs text-foreground/80 leading-relaxed">{row.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Sync FAQ</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Common sync questions.</h2>
          </Reveal>
          <div className="space-y-4">
            {FAQ.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 35}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-2">{faq.q}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Your calendars, finally in sync."
        subtitle="Google Calendar sync is free. Apple Calendar sync is on Pro."
        primary={{ label: 'Connect your calendar', href: '/login' }}
        secondary={{ label: 'See Pro features', href: '/pro' }}
      />
    </>
  )
}
