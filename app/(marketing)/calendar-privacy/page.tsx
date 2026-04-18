import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Lock, Eye, Database, ArrowRight, CheckCircle2, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendar Privacy — How Momenties handles your schedule data',
  description:
    'Your calendar contains your location, relationships, health appointments, and personal routines. Momenties explains exactly what data we collect, what we send to AI, what we sell (nothing), and how to delete everything.',
  alternates: { canonical: '/calendar-privacy' },
  openGraph: {
    title: 'Calendar Privacy — Momenties',
    description: 'What we collect. What AI sees. What we sell (nothing).',
    url: '/calendar-privacy',
    type: 'website',
  },
}

const WHAT_AI_SEES = [
  { label: 'Event input string', access: true, desc: 'The text you type or speak — only when you create an event using AI parsing' },
  { label: 'Your full calendar', access: false, desc: 'We never send your existing calendar to Gemini or any AI model' },
  { label: 'Recurring event history', access: false, desc: 'AI only sees the current input string, not your scheduling patterns' },
  { label: 'Attendee email addresses', access: false, desc: 'Attendees are added directly to Google Calendar — AI never sees them' },
  { label: 'Location data', access: false, desc: 'Locations in event titles are parsed locally via chrono-node where possible' },
  { label: 'Analytics data', access: false, desc: 'Time analytics are computed on your calendar data locally — not sent to AI' },
]

const WHAT_WE_COLLECT = [
  { category: 'Account', items: ['Email address', 'Name', 'Profile photo (from Google OAuth)'] },
  { category: 'Calendar data', items: ['Events you create via Momenties', 'Events synced from Google Calendar', 'Tags and categories you assign'] },
  { category: 'Usage data', items: ['Feature usage (anonymous)', 'Error logs (no event content)', 'Performance metrics'] },
]

const WHAT_WE_NEVER_DO = [
  'Sell your calendar data to third parties',
  'Use your event data to train AI models',
  'Share your schedule with advertisers or data brokers',
  'Build behavioral profiles for advertising',
  'Access your calendar for any purpose other than the features you use',
  'Store voice recordings (transcription runs in-memory, audio deleted immediately)',
]

const CONTROLS = [
  { icon: Database, title: 'Data export', desc: 'Download all your Momenties data as JSON at any time from Settings → Data → Export.' },
  { icon: Lock, title: 'Account deletion', desc: 'Delete your account and all associated data instantly from Settings → Account → Delete. Deletion is permanent and immediate.' },
  { icon: Eye, title: 'AI input opt-out', desc: 'Disable AI parsing entirely. Use Momenties as a fast manual calendar — no event text ever reaches Gemini.' },
  { icon: Shield, title: 'Google Calendar disconnect', desc: 'Revoke Momenties\' Google Calendar access from your Google account settings at any time. Your events remain in Google Calendar.' },
]

export default function CalendarPrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar Privacy"
        title={
          <>
            Your schedule.
            <br />
            <em className="not-italic text-gold">Your business.</em>
          </>
        }
        lede="Your calendar is one of the most private things you own — it maps your relationships, health, finances, and routines. This page explains exactly what Momenties collects, what AI sees, and what controls you have over all of it."
        crumbs={[{ label: 'Calendar Privacy' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Full privacy policy <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/ai/ethics"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            AI ethics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">No data sold · No advertising model · GDPR compliant</p>
      </PageHero>

      {/* What AI sees */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">AI access</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What AI can and cannot see.</h2>
          </Reveal>
          <Reveal>
            <div className="rounded-xl border border-border overflow-hidden">
              {WHAT_AI_SEES.map((row, i) => (
                <div key={row.label} className={`flex items-start gap-4 p-4 border-b border-border/40 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                  <div className="pt-0.5 shrink-0">
                    {row.access
                      ? <CheckCircle2 className="h-4 w-4 text-gold" />
                      : <XCircle className="h-4 w-4 text-red-400/40" />}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-0.5">{row.label}</p>
                    <p className="text-xs text-muted-foreground">{row.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we collect */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What we collect.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {WHAT_WE_COLLECT.map((cat, i) => (
              <Reveal key={cat.category} delay={i * 60}>
                <div className="rounded-xl border border-border/50 p-4">
                  <p className="text-xs font-mono text-gold/70 uppercase tracking-wider mb-2">{cat.category}</p>
                  <ul className="space-y-1">
                    {cat.items.map((item) => (
                      <li key={item} className="text-xs text-muted-foreground">— {item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we never do */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What we never do.</h2>
          </Reveal>
          <Reveal>
            <div className="rounded-xl border border-border/50 p-6">
              <div className="space-y-2">
                {WHAT_WE_NEVER_DO.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                    <XCircle className="h-4 w-4 text-red-400/40 shrink-0 mt-0.5" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Controls */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Your controls.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {CONTROLS.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <c.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{c.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Private by default. Transparent by design."
        subtitle="No advertising. No data sales. Full control. Your calendar, your rules."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Full privacy policy', href: '/privacy' }}
      />
    </>
  )
}
