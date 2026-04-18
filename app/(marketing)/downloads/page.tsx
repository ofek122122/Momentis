import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Monitor, Smartphone, Globe, Terminal, Download, ArrowUpRight, Puzzle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Downloads — Momenties, everywhere',
  description: 'Momenties runs in your browser, on Mac and Windows, iOS and Android, and in your terminal. Download the version that fits your week.',
  alternates: { canonical: '/downloads' },
  openGraph: {
    title: 'Momenties Downloads',
    description: 'Browser, desktop, mobile, terminal — everywhere.',
    url: '/downloads',
  },
}

const PLATFORMS = [
  {
    icon: Globe,
    name: 'Web',
    sub: 'Any modern browser',
    desc: 'The full Momenties experience. No install required. Works on Chrome, Firefox, Safari, Edge, and Arc.',
    cta: 'Open web app',
    href: '/calendar',
    featured: true,
    meta: 'v1.4.0 · ~1.1 MB loaded',
  },
  {
    icon: Monitor,
    name: 'macOS',
    sub: 'Apple Silicon & Intel',
    desc: 'Native app with Menu Bar quick-add, global hotkeys, and offline reading. Requires macOS 13 or newer.',
    cta: 'Download for Mac',
    href: '#',
    featured: false,
    meta: 'v1.4.0 · 78 MB',
  },
  {
    icon: Monitor,
    name: 'Windows',
    sub: 'Windows 11 & newer',
    desc: 'Native app with jump-list integration, focus-assist awareness, and offline reading.',
    cta: 'Download for Windows',
    href: '#',
    featured: false,
    meta: 'v1.4.0 · 82 MB',
  },
  {
    icon: Smartphone,
    name: 'iOS',
    sub: 'iPhone & iPad',
    desc: 'Siri Shortcuts, widget for today\'s events, and an Apple Watch complication that quietly just works.',
    cta: 'App Store (TestFlight)',
    href: '#',
    featured: false,
    meta: 'v1.3 beta · requires iOS 17',
  },
  {
    icon: Smartphone,
    name: 'Android',
    sub: 'Phone & tablet',
    desc: 'Material You themed. Home-screen widget. Google Assistant integration.',
    cta: 'Download APK (beta)',
    href: '#',
    featured: false,
    meta: 'v1.3 beta · Android 11+',
  },
  {
    icon: Terminal,
    name: 'Terminal CLI',
    sub: 'macOS & Linux',
    desc: 'For the keyboard-first crowd. Schedule from your shell: `momenties add "dentist thursday 3pm"`.',
    cta: 'brew install momenties',
    href: '#',
    featured: false,
    meta: 'v0.8.0 · open source',
  },
]

const EXTRAS = [
  {
    icon: Puzzle,
    title: 'Chrome extension',
    desc: 'Right-click any date on any webpage, click "Schedule in Momenties". Works on Gmail, Airbnb, Ticketmaster — everywhere.',
    cta: 'Install extension',
  },
  {
    icon: Puzzle,
    title: 'Raycast plugin',
    desc: 'Command-K → type event → done. Also supports voice via Raycast\'s AI.',
    cta: 'Install on Raycast',
  },
  {
    icon: Puzzle,
    title: 'iOS Shortcut',
    desc: 'Say "hey Siri, add event" to trigger Momenties from anywhere on your phone.',
    cta: 'Download Shortcut',
  },
]

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Apps & downloads"
        title={
          <>
            Momenties, <em className="not-italic text-gold">wherever you are</em>.
          </>
        }
        lede="Six native homes and a web app. All share the same data. All feel like Momenties. Pick the one that fits your day."
        crumbs={[{ label: 'Downloads' }]}
      />

      {/* Platform grid */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PLATFORMS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 70}>
              <div
                className={`relative rounded-2xl border p-7 h-full flex flex-col ${
                  p.featured
                    ? 'border-gold/40 bg-gradient-to-b from-gold/5 to-transparent'
                    : 'border-border lux-card'
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-2.5 left-6 inline-flex items-center px-2.5 py-0.5 rounded-full bg-gold text-[#0c0c0f] text-[10px] font-mono uppercase tracking-wider">
                    Recommended
                  </span>
                )}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/15 flex items-center justify-center">
                    <p.icon className="h-5 w-5 text-gold" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                    {p.sub}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                <Link
                  href={p.href}
                  className={`mt-6 inline-flex items-center justify-center h-10 rounded-full text-sm font-medium transition-colors ${
                    p.featured
                      ? 'bg-gold text-[#0c0c0f] hover:bg-gold/90'
                      : 'border border-border text-foreground hover:border-gold/30 hover:text-gold'
                  }`}
                >
                  <Download className="h-4 w-4 mr-2" />
                  {p.cta}
                </Link>
                <p className="mt-3 font-mono text-[10px] text-center text-muted-foreground/60">{p.meta}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Extras */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              Extensions & launchers
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Bring Momenties everywhere else.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {EXTRAS.map((e, i) => (
              <Reveal key={e.title} delay={i * 80}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <e.icon className="h-5 w-5 text-gold mb-5" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{e.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{e.desc}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors"
                  >
                    {e.cta} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* System requirements */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8">
              System requirements
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border lux-card p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-3">Desktop</p>
              <ul className="space-y-1.5 text-sm text-foreground/90">
                <li>• macOS 13 (Ventura) or newer</li>
                <li>• Windows 11 build 22000 or newer</li>
                <li>• Linux: AppImage for Ubuntu 22.04+</li>
                <li>• 500 MB free disk space</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border lux-card p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-3">Mobile</p>
              <ul className="space-y-1.5 text-sm text-foreground/90">
                <li>• iOS 17 and iPadOS 17 or newer</li>
                <li>• Android 11 (API 30) or newer</li>
                <li>• watchOS 10 (for Apple Watch)</li>
                <li>• Wear OS 4 (beta)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="One account, everywhere."
        subtitle="Sign in once on any platform and your events, preferences, and calendars sync instantly."
        primary={{ label: 'Open web app', href: '/calendar' }}
        secondary={{ label: 'See features', href: '/features' }}
      />
    </>
  )
}
