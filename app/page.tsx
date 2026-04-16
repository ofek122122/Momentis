import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import {
  Calendar, Mic, Camera, Brain, Clock, Globe, BarChart3,
  Palette, Users, Zap, Shield, Sparkles,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendro — Just say it. It\'s scheduled.',
  description: 'AI-powered calendar app. Type, speak, or snap a photo — Calendro parses your words and fills your calendar. Zero friction scheduling.',
  keywords: ['calendar', 'AI calendar', 'voice calendar', 'smart scheduling', 'Google Calendar'],
  openGraph: {
    title: 'Calendro — Just say it. It\'s scheduled.',
    description: 'AI-powered calendar app. Type, speak, or snap a photo — Calendro parses your words and fills your calendar.',
    type: 'website',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calendro — Just say it. It\'s scheduled.',
    description: 'AI-powered calendar. Type, speak, or snap a photo. Zero friction scheduling.',
  },
}

export default async function Home() {
  const session = await auth()
  if (session) redirect('/calendar')

  return (
    <div className="min-h-screen dot-grid flex flex-col">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 md:px-8 py-6">
        <div className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Calendro" className="h-7 w-7" />
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            Calendro
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/pricing"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:inline"
          >
            Pricing
          </Link>
          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'sm' }),
              'text-muted-foreground hover:text-foreground'
            )}
          >
            Sign in
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-16 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="animate-fade-up animate-fade-up-1 text-xs font-mono tracking-[0.2em] uppercase text-gold opacity-80">
            AI-Powered Calendar
          </p>

          <h1 className="animate-fade-up animate-fade-up-2 font-display text-4xl sm:text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight text-foreground">
            Just say it.
            <br />
            <em className="not-italic text-gold">It&apos;s scheduled.</em>
          </h1>

          <p className="animate-fade-up animate-fade-up-3 text-base md:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed font-light">
            Type it. Say it. Snap a photo. Calendro parses your words and
            fills your Google Calendar — no date pickers, no scrolling, no friction.
          </p>

          <div className="animate-fade-up animate-fade-up-4 flex flex-col sm:flex-row gap-3 items-center justify-center pt-2">
            <Link
              href="/login"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'rounded-full px-8 bg-gold text-[#0c0c0f] hover:bg-gold/90 font-medium press shadow-lg shadow-gold/10'
              )}
            >
              Get started free
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              See Pro features →
            </Link>
          </div>
        </div>
      </main>

      {/* Social proof stats */}
      <section className="border-t border-border py-10 px-6" aria-label="Stats">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { value: '10,000+', label: 'Events scheduled' },
            { value: '3', label: 'Input methods' },
            { value: '<2s', label: 'Avg. parse time' },
          ].map(s => (
            <div key={s.label} className="space-y-1">
              <p className="font-display text-2xl sm:text-3xl font-bold shimmer-text">{s.value}</p>
              <p className="font-mono text-[10px] sm:text-xs tracking-wider uppercase text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features — How it works */}
      <section className="border-t border-border" aria-label="How Calendro works">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {[
            {
              icon: Calendar,
              label: '01',
              title: 'Type naturally',
              desc: '"Dentist thursday 3pm" → added. No form fields, ever.',
            },
            {
              icon: Mic,
              label: '02',
              title: 'Speak freely',
              desc: 'Hold the mic, dump your week out loud. AI does the rest.',
            },
            {
              icon: Camera,
              label: '03',
              title: 'Snap any schedule',
              desc: 'Photo of exam timetable? All 20 dates in one tap.',
            },
          ].map(f => (
            <div key={f.label} className="px-6 md:px-8 py-8 space-y-2.5 group">
              <div className="flex items-center gap-2">
                <f.icon className="h-4 w-4 text-gold/60 group-hover:text-gold transition-colors" />
                <span className="font-mono text-xs text-gold/60">{f.label}</span>
              </div>
              <h3 className="font-display text-base font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-16 px-6 md:px-8 border-t border-border" aria-label="Features">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold/60 text-center mb-3">
            Everything you need
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            More than a calendar
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Brain, title: 'AI Parsing', desc: 'Natural language, voice, and image processing with Gemini AI' },
              { icon: Clock, title: 'Smart Suggestions', desc: 'AI finds the perfect time slot based on your schedule' },
              { icon: BarChart3, title: 'Analytics', desc: 'See how you spend time with beautiful charts and insights' },
              { icon: Globe, title: 'Multi-Calendar', desc: 'Google Calendar + Apple Calendar in one unified view' },
              { icon: Palette, title: 'Themes', desc: '5 beautiful themes to match your style' },
              { icon: Users, title: 'Collaboration', desc: 'Share calendars and schedule together' },
              { icon: Zap, title: 'Focus Mode', desc: 'Pomodoro timer to protect your deep work time' },
              { icon: Sparkles, title: 'Daily Briefing', desc: 'AI summary of your day with smart insights' },
              { icon: Shield, title: 'Privacy First', desc: 'Your data stays yours. No ads, no tracking.' },
            ].map((f, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card/50 p-5 space-y-2.5 hover:border-gold/20 hover:bg-card/80 transition-all duration-200 group/card"
              >
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center group-hover/card:bg-gold/15 transition-colors">
                  <f.icon className="h-4.5 w-4.5 text-gold/70 group-hover/card:text-gold transition-colors" />
                </div>
                <h3 className="text-sm font-medium text-foreground">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-border text-center cta-glow" aria-label="Call to action">
        <div className="max-w-lg mx-auto space-y-6">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
            Ready to simplify your schedule?
          </h2>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            Join thousands who schedule smarter. Free to start, no credit card required.
          </p>
          <Link
            href="/login"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'rounded-full px-10 bg-gold text-[#0c0c0f] hover:bg-gold/90 font-medium press shadow-lg shadow-gold/10'
            )}
          >
            Get started free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-8 mb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Calendro" className="h-6 w-6" />
                <span className="font-display text-base font-semibold text-foreground">Calendro</span>
              </div>
              <p className="text-xs text-muted-foreground max-w-xs">
                AI-powered calendar that understands natural language. Zero friction scheduling.
              </p>
            </div>
            <div className="flex gap-12">
              <div className="space-y-2">
                <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground/60">Product</p>
                <div className="flex flex-col gap-1.5">
                  <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
                  <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sign in</Link>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground/60">Legal</p>
                <div className="flex flex-col gap-1.5">
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 flex items-center justify-between">
            <span className="font-mono text-[10px] text-muted-foreground/50">
              © {new Date().getFullYear()} Calendro. All rights reserved.
            </span>
            <span className="font-mono text-[10px] text-muted-foreground/50">
              Made with ✦ for productivity
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
