import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Zap, Shield, BarChart3, Globe, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendar Chrome Extension — Add events from any web page instantly',
  description:
    'Add calendar events without leaving your browser tab. Momenties works as a progressive web app with keyboard shortcuts, letting you capture events from emails, documents, and web pages in seconds.',
  alternates: { canonical: '/calendar-chrome-extension' },
  openGraph: {
    title: 'Calendar Chrome Extension — Momenties',
    description: 'Add events from any web page without leaving your tab.',
    url: '/calendar-chrome-extension',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Zap,
    title: 'Add events without switching tabs',
    desc: 'Momenties opens as a sidebar or popup while you browse. Spot a meeting time in an email? Select the text, open Momenties, add the event. Calendar updated without leaving the page.',
  },
  {
    icon: Globe,
    title: 'Natural language from anywhere on the web',
    desc: 'Reading a newsletter that mentions "webinar thursday 3pm"? Type it into Momenties. The AI parses the intent and adds it to your calendar — context captured, tab context preserved.',
  },
  {
    icon: Shield,
    title: 'Works with your existing Google Calendar',
    desc: 'Events go directly into your Google Calendar via OAuth. No duplicate system. No separate calendar to maintain. The same events you already rely on, with better input methods.',
  },
  {
    icon: BarChart3,
    title: 'Weekly analytics in the browser',
    desc: 'Open Momenties while planning your week. See the hours breakdown, meeting load, and upcoming focus blocks — all without leaving your current workflow.',
  },
]

const USE_FROM_BROWSER = [
  { source: 'Email', example: '"Zoom call friday 2pm" → select text → add event', speed: '3 seconds' },
  { source: 'Slack message', example: '"Planning session monday morning" → open sidebar → confirm', speed: '4 seconds' },
  { source: 'Website event page', example: 'Conference dates visible on screen → type "Web Summit nov 12-14" → added', speed: '5 seconds' },
  { source: 'Calendar invite text', example: '"Board meeting Q4 dates" in doc → parse → add multiple events', speed: '8 seconds' },
  { source: 'LinkedIn post', example: '"Webinar next tuesday 1pm EST" → open Momenties → voice-add', speed: '3 seconds' },
]

export default function CalendarChromeExtensionPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar in Your Browser"
        title={
          <>
            Add events without
            <br />
            <em className="not-italic text-gold">switching tabs.</em>
          </>
        }
        lede="The fastest calendar workflow doesn't require a Chrome extension — it requires the right input methods. Momenties works from any browser tab via its web app, adding events in seconds from emails, documents, and web pages without breaking your flow."
        crumbs={[{ label: 'Calendar Chrome Extension' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try in browser <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/natural-language-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            How input works
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Works in any modern browser</p>
      </PageHero>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Browser workflow features</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Your calendar, inside the browser.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Speed examples */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How fast it is</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Adding events from common browser contexts.</h2>
          </Reveal>
          <div className="space-y-3">
            {USE_FROM_BROWSER.map((item, i) => (
              <Reveal key={item.source} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-gold/60 uppercase tracking-wide">{item.source}</span>
                    <span className="font-mono text-[10px] text-emerald-400/70 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">{item.speed}</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono">{item.example}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Browser capabilities</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties does from any browser tab.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Natural language event creation',
                'Voice input via microphone',
                'Photo upload for printed schedules',
                'Google Calendar sync (real-time)',
                'Weekly analytics dashboard',
                'Daily Brief for today\'s schedule',
                'Team availability overlay',
                'Focus mode activation',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-foreground/80">
                  <CheckCircle2 className="h-3 w-3 text-gold shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Your calendar, available in any browser tab."
        subtitle="Natural language, voice, and photo input — all from the web. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See all input methods', href: '/natural-language-calendar' }}
      />
    </>
  )
}
