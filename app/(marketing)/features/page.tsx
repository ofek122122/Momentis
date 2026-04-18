import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { CTA } from '@/components/marketing/CTA'
import { Reveal } from '@/components/marketing/Reveal'
import {
  Brain, Mic, Camera, Clock, BarChart3, Globe, Palette, Users, Zap,
  Sparkles, Shield, Download, Keyboard, Bell, Moon, ArrowRight, Check, X, Minus,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Features — The complete tour',
  description: 'Every feature in Momenties, from natural-language parsing to unified multi-calendar sync. Calm, capable, and respectful of your time.',
  alternates: { canonical: '/features' },
  openGraph: {
    title: 'Momenties Features',
    description: 'Everything Momenties does, in one long, quiet tour.',
    url: '/features',
  },
}

const DEEP_FEATURES = [
  {
    icon: Brain,
    eyebrow: 'Natural language',
    title: 'AI that actually understands how you talk',
    desc: 'Under the hood: chrono-node for fast local parsing, Gemini 2.5 Flash as a second pass, and a carefully-tuned system prompt that turns phrases like "lunch with Sarah tomorrow at that ramen place" into a complete event with title, attendee, time, and location.',
    demo: (
      <div className="rounded-xl border border-border bg-[#0f0f14] p-5 font-mono text-sm space-y-3">
        <div className="text-muted-foreground">&gt; Input</div>
        <div className="text-foreground">lunch with sarah tomorrow at that ramen place</div>
        <div className="hairline" />
        <div className="text-muted-foreground">&gt; Parsed</div>
        <div className="text-foreground/90 text-xs leading-relaxed">
          <span className="text-gold">title:</span> Lunch with Sarah<br />
          <span className="text-gold">start:</span> Tomorrow 12:30 PM<br />
          <span className="text-gold">end:</span> Tomorrow 1:30 PM<br />
          <span className="text-gold">location:</span> Momofuku Ramen (learned)<br />
          <span className="text-gold">attendee:</span> sarah@...
        </div>
      </div>
    ),
  },
  {
    icon: Mic,
    eyebrow: 'Voice',
    title: 'Speak your week into the calendar',
    desc: 'Hold the mic, talk naturally, let go. Deepgram Nova-3 transcribes in sub-second, and our parser handles multiple events in one breath. "Standup every weekday at 9 for 15 minutes, dinner with Mike Friday, dentist Tuesday 4" — three events, one sentence.',
    demo: (
      <div className="rounded-xl border border-border bg-[#0f0f14] p-5 flex flex-col items-center justify-center min-h-[220px] gap-4">
        <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center gold-pulse">
          <Mic className="h-6 w-6 text-gold" />
        </div>
        <div className="flex items-end gap-1 h-10">
          {[20, 40, 80, 60, 95, 45, 70, 30, 85, 50, 65].map((h, i) => (
            <div
              key={i}
              className="w-1 bg-gold/50 rounded-full"
              style={{
                height: `${h}%`,
                animation: `float-y ${1 + (i % 3) * 0.4}s ease-in-out infinite`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
        <p className="text-xs font-mono text-muted-foreground">Listening... 0.9s latency avg.</p>
      </div>
    ),
  },
  {
    icon: Camera,
    eyebrow: 'Vision',
    title: 'Any schedule, photographed, scheduled',
    desc: 'Exam timetable, concert bill, wedding itinerary, back-of-napkin sketch — Gemini Vision reads the whole thing and extracts every date, time, and title in one pass. Twenty events from one photo, ready to review before anything lands on your calendar.',
    demo: (
      <div className="rounded-xl border border-border bg-[#0f0f14] p-5 min-h-[220px]">
        <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-3">Photo → 20 events extracted</div>
        <div className="space-y-1.5">
          {[
            'Math 101 — Thu Oct 12, 9:00 AM',
            'History seminar — Fri Oct 13, 2:00 PM',
            'Lab 4 check-in — Mon Oct 16, 10:00 AM',
            'Office hours — Tue Oct 17, 3:00 PM',
            'Midterm review — Wed Oct 18, 1:00 PM',
          ].map((e) => (
            <div key={e} className="flex items-center gap-2 text-xs text-foreground/80">
              <Check className="h-3 w-3 text-gold shrink-0" />
              <span>{e}</span>
            </div>
          ))}
          <div className="text-xs text-muted-foreground pt-1">+ 15 more</div>
        </div>
      </div>
    ),
  },
]

const GRID_FEATURES = [
  { icon: Clock, title: 'Smart time suggestions', desc: 'Momenties finds the gap that actually fits. Respects meetings, focus, and sleep.' },
  { icon: BarChart3, title: 'Insights & analytics', desc: 'Where did your week go? Meeting load, deep-work ratio, rhythm patterns.' },
  { icon: Globe, title: 'Unified calendars', desc: 'Google, Apple, Outlook (soon) in one grid. Color-coded by source.' },
  { icon: Palette, title: 'Five themes', desc: 'Obsidian, Paper, Harvest, Botanical, Aurora — all dark, each distinct.' },
  { icon: Users, title: 'Shared calendars', desc: 'Schedule with others. Find overlap. Without a spreadsheet.' },
  { icon: Zap, title: 'Focus mode', desc: 'Pomodoro with a conscience. Silences notifications automatically.' },
  { icon: Sparkles, title: 'Daily briefing', desc: 'A warm morning summary, not a 40-point checklist.' },
  { icon: Shield, title: 'Private by design', desc: 'End-to-end encrypted sync. Zero third-party trackers.' },
  { icon: Download, title: 'iCal export', desc: 'Take your data out any time. One-click .ics export.' },
  { icon: Keyboard, title: 'Keyboard-first', desc: 'Press ? to see every shortcut. Never touch the mouse.' },
  { icon: Bell, title: 'Smart reminders', desc: 'Respect your timezone. Respect your sleep. Only when it matters.' },
  { icon: Moon, title: 'Always dark (unless you don\'t want it)', desc: 'Designed for the end of the day. Clean White Pro theme available.' },
]

const COMPARISON = [
  { feature: 'Natural-language input', us: 'yes', google: 'partial', notion: 'no', superhuman: 'yes' },
  { feature: 'Voice input (native)', us: 'yes', google: 'no', notion: 'no', superhuman: 'no' },
  { feature: 'Photo → events', us: 'yes', google: 'no', notion: 'no', superhuman: 'no' },
  { feature: 'Unified multi-provider sync', us: 'yes', google: 'no', notion: 'partial', superhuman: 'yes' },
  { feature: 'AI daily briefing', us: 'yes', google: 'no', notion: 'no', superhuman: 'yes' },
  { feature: 'Dark-first design', us: 'yes', google: 'partial', notion: 'partial', superhuman: 'partial' },
  { feature: 'Zero trackers / ads', us: 'yes', google: 'no', notion: 'partial', superhuman: 'yes' },
  { feature: 'Free forever tier', us: 'yes', google: 'yes', notion: 'yes', superhuman: 'no' },
  { feature: 'Respects your attention', us: 'yes', google: 'no', notion: 'partial', superhuman: 'partial' },
]

function Cell({ v }: { v: string }) {
  if (v === 'yes') return <Check className="h-4 w-4 text-gold mx-auto" />
  if (v === 'no') return <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />
  return <Minus className="h-4 w-4 text-amber-500/70 mx-auto" />
}

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Every feature"
        title={
          <>
            The complete tour.<br />
            <em className="not-italic text-gold">Take your time.</em>
          </>
        }
        lede="A long, honest list of what Momenties actually does. No marketing fog. Just features we ship, tested and tuned."
        crumbs={[{ label: 'Features' }]}
      >
        <Link
          href="/demo"
          className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
        >
          Try the live demo <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Deep features */}
      <section className="border-b border-border">
        {DEEP_FEATURES.map((f, i) => (
          <div
            key={f.title}
            className={`border-b border-border last:border-b-0 py-20 px-5 md:px-8 ${
              i % 2 === 1 ? 'bg-white/[0.015]' : ''
            }`}
          >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <Reveal className={i % 2 === 1 ? 'md:order-2' : ''}>
                <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/15 flex items-center justify-center mb-5">
                  <f.icon className="h-5 w-5 text-gold" />
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
                  {f.eyebrow}
                </p>
                <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
                  {f.title}
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed text-[15px]">
                  {f.desc}
                </p>
              </Reveal>
              <Reveal delay={150} className={i % 2 === 1 ? 'md:order-1' : ''}>
                {f.demo}
              </Reveal>
            </div>
          </div>
        ))}
      </section>

      {/* Feature grid */}
      <section className="py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">And still more</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              The rest of it.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GRID_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 70}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-1.5">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">Next to the others</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              A fair comparison.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-xl mx-auto">
              We only included things we ship today. If something on this list becomes wrong, please write us at hello@momenties.app.
            </p>
          </Reveal>
          <div className="rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-white/[0.02] border-b border-border">
                <tr>
                  <th className="text-left px-5 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Feature
                  </th>
                  <th className="px-4 py-4 font-display text-base text-gold">Momenties</th>
                  <th className="px-4 py-4 font-display text-base text-muted-foreground">Google</th>
                  <th className="px-4 py-4 font-display text-base text-muted-foreground">Notion Cal</th>
                  <th className="px-4 py-4 font-display text-base text-muted-foreground">Superhuman</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border last:border-b-0 ${i % 2 === 0 ? '' : 'bg-white/[0.015]'}`}
                  >
                    <td className="px-5 py-3.5 text-foreground/90">{row.feature}</td>
                    <td className="px-4 py-3.5 text-center">
                      <Cell v={row.us} />
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <Cell v={row.google} />
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <Cell v={row.notion} />
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <Cell v={row.superhuman} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to schedule quieter?"
        subtitle="Type one sentence. Watch the day arrange itself."
        primary={{ label: 'Get started free', href: '/login' }}
        secondary={{ label: 'Compare pricing', href: '/pricing' }}
      />
    </>
  )
}
