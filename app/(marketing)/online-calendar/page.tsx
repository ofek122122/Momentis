import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Zap, Globe, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Online Calendar — The AI-powered web calendar that works anywhere',
  description:
    'An online calendar that works on any device, syncs with Google Calendar, and lets you add events by voice, natural language, or photo. Momenties is the web calendar built for how people actually schedule.',
  alternates: { canonical: '/online-calendar' },
  openGraph: {
    title: 'Online Calendar — Momenties',
    description: 'Voice, natural language, and photo scheduling. Works on any device.',
    url: '/online-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Zap,
    title: 'Natural language input — no form fields',
    desc: '"Team lunch thursday 12:30pm." "Monthly review first monday, recurring." "Flight to Chicago tuesday 6am, 2h15m." Type how you think. The calendar understands everything.',
  },
  {
    icon: Globe,
    title: 'Works on any device, any browser',
    desc: 'Momenties is a progressive web app — no download, no installation. Open it in Chrome, Safari, or Firefox on any device. Add to your home screen for native-app speed and offline access.',
  },
  {
    icon: BarChart3,
    title: 'Analytics that show where time goes',
    desc: 'Most online calendars show meetings. Momenties shows patterns. Hours by category, focus time percentage, meeting load by day. The data you need to schedule better next week.',
  },
  {
    icon: Shield,
    title: 'Google Calendar native sync',
    desc: 'Events go directly into your Google Calendar. No separate system. No double maintenance. All the events you create in Momenties appear in every tool that connects to Google Calendar.',
  },
]

const ONLINE_VS_TRADITIONAL = [
  { feature: 'Event creation', traditional: 'Click, fill forms, set dropdowns', momenties: 'Type or speak: "dentist friday 3pm"' },
  { feature: 'Photo schedules', traditional: 'Manual entry required', momenties: 'Photograph and import in 30 seconds' },
  { feature: 'Voice input', traditional: 'Not available', momenties: 'Full voice scheduling from any device' },
  { feature: 'Time analytics', traditional: 'Basic or none', momenties: 'Category breakdown, trends, focus ratio' },
  { feature: 'Mobile experience', traditional: 'Reduced functionality', momenties: 'Full parity — PWA with home screen install' },
  { feature: 'Team scheduling', traditional: 'Separate invite flow', momenties: 'Availability overlay + instant booking' },
]

export default function OnlineCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Online Calendar"
        title={
          <>
            The web calendar
            <br />
            <em className="not-italic text-gold">that thinks ahead.</em>
          </>
        }
        lede="An online calendar should work faster than the thought that precedes it. Momenties adds events by voice, natural language, and photo — on any device, in any browser. It syncs with Google Calendar and shows you analytics that help you schedule better."
        crumbs={[{ label: 'Online Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Open online <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/natural-language-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            How input works
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No download · Works on any device</p>
      </PageHero>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Features</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">What makes Momenties different online.</h2>
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

      {/* Comparison */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How it compares</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Momenties vs. traditional online calendars.</h2>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-mono text-[10px] text-muted-foreground uppercase tracking-wide">Feature</th>
                    <th className="text-left py-3 pr-4 font-mono text-[10px] text-muted-foreground uppercase tracking-wide">Traditional</th>
                    <th className="text-left py-3 font-mono text-[10px] text-gold/70 uppercase tracking-wide">Momenties</th>
                  </tr>
                </thead>
                <tbody>
                  {ONLINE_VS_TRADITIONAL.map((row) => (
                    <tr key={row.feature} className="border-b border-border/30">
                      <td className="py-3 pr-4 text-foreground/90 font-medium">{row.feature}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.traditional}</td>
                      <td className="py-3 text-foreground/90">{row.momenties}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's included free */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Free online calendar. No catch.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Unlimited events, no cap',
                'Natural language input',
                'Voice scheduling',
                'Photo schedule import',
                'Google Calendar sync',
                'Apple Calendar sync',
                'Daily Brief',
                'Recurring events',
                'Focus mode',
                'Weekly analytics',
                'Mobile PWA (add to home screen)',
                'Works offline',
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
        title="The online calendar built for real scheduling speed."
        subtitle="Free forever, works on any device, syncs with Google Calendar."
        primary={{ label: 'Open Momenties', href: '/login' }}
        secondary={{ label: 'See all features', href: '/features' }}
      />
    </>
  )
}
