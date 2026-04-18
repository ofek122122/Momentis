import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import {
  Mic, Camera, Keyboard, Zap, Calendar, Bell, Search, Moon,
  ArrowRight, CheckCircle2, ChevronRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Product Tour — See Momenties in action',
  description:
    'A visual walkthrough of Momenties: natural language input, AI parsing, smart scheduling, voice add, photo-to-calendar, and the quiet daily view that keeps you sane.',
  alternates: { canonical: '/product' },
  openGraph: {
    title: 'Momenties Product Tour',
    description: 'See how the calendar that understands you actually works.',
    url: '/product',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momenties — Product Tour',
    description: 'Natural language. Voice. Photo. Your calendar, effortlessly.',
  },
}

const FLOW_STEPS = [
  {
    step: '01',
    label: 'Type it, speak it, or snap it',
    desc: 'Three ways to add an event — all understood instantly. No forms. No fields.',
  },
  {
    step: '02',
    label: 'AI parses the intent',
    desc: 'chrono-node handles 75% of inputs locally. Gemini handles the rest. Sub-second either way.',
  },
  {
    step: '03',
    label: 'You confirm (or don\'t)',
    desc: 'A one-tap confirmation. Or skip it entirely in auto-confirm mode. Your call.',
  },
  {
    step: '04',
    label: 'It\'s on your calendar',
    desc: 'Synced to Google Calendar and/or Apple Calendar the same instant.',
  },
]

const FEATURES_DEEP = [
  {
    icon: Keyboard,
    title: 'Natural language input',
    badge: 'Core',
    badgeColor: 'text-gold bg-gold/10 border-gold/20',
    desc: 'Type the way you think. "Coffee with Elena next Tuesday 10am for an hour" is understood exactly as said. Titles, times, durations, locations, recurrence — all extracted.',
    demoLines: [
      { input: 'standup every weekday 9am for 15 minutes', parsed: 'Standup · Mon–Fri · 09:00 (15m)' },
      { input: 'dentist next friday 3pm, budget 2 hours', parsed: 'Dentist · Fri Apr 25 · 15:00 (2h)' },
      { input: 'dinner with Iris on her birthday apr 28', parsed: 'Dinner with Iris · Mon Apr 28 · dinner (7pm)' },
    ],
  },
  {
    icon: Mic,
    title: 'Voice add',
    badge: 'Powered by Deepgram',
    badgeColor: 'text-sky-300 bg-sky-500/10 border-sky-500/20',
    desc: 'Hold the mic button, say it out loud, let go. Deepgram Nova-3 transcribes. The parser understands. Done in under two seconds. Available from the lock screen on mobile.',
    demoLines: [
      { input: '🎤 "yoga Saturday eight in the morning"', parsed: 'Yoga · Sat Apr 19 · 08:00' },
      { input: '🎤 "remind me to call mum tonight at seven"', parsed: 'Call Mum · Today · 19:00 · Reminder' },
    ],
  },
  {
    icon: Camera,
    title: 'Point-and-parse',
    badge: 'Powered by Gemini Vision',
    badgeColor: 'text-violet-300 bg-violet-500/10 border-violet-500/20',
    desc: 'Aim your camera at any printed schedule, class timetable, conference agenda, or whiteboard. Gemini Vision reads every event and adds them all in one go.',
    demoLines: [
      { input: '📷 Conference agenda image', parsed: '11 events extracted · Mon–Wed · preview shown' },
      { input: '📷 Exam timetable photo', parsed: '6 exams · May 12–30 · calendar added' },
    ],
  },
  {
    icon: Zap,
    title: 'Smart scheduling',
    badge: 'Experimental',
    badgeColor: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
    desc: 'No time specified? Momenties finds the best free slot — respecting your focus blocks, working hours, timezone, and travel time. One suggestion, not a list.',
    demoLines: [
      { input: 'lunch with Mike (no time given)', parsed: '12:30 — you\'re free, no conflicts until 14:00' },
      { input: '30-minute brainstorm session', parsed: '16:00 — quieter second half, right before shutdown' },
    ],
  },
]

const CALENDAR_EVENTS = [
  { time: '09:00', title: 'Standup', duration: '15m', color: 'border-gold/30 bg-gold/5', dot: 'bg-gold' },
  { time: '10:30', title: 'Design review', duration: '1h', color: 'border-violet-500/30 bg-violet-500/5', dot: 'bg-violet-400' },
  { time: '12:30', title: 'Lunch with Mike', duration: '1h', color: 'border-emerald-500/30 bg-emerald-500/5', dot: 'bg-emerald-400' },
  { time: '14:30', title: '1:1 with Iris', duration: '1h', color: 'border-sky-500/30 bg-sky-500/5', dot: 'bg-sky-400' },
  { time: '17:00', title: 'Focus block', duration: '2h', color: 'border-white/5 bg-white/[0.03]', dot: 'bg-white/30' },
]

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product tour"
        title={
          <>
            See how it
            <br />
            <em className="not-italic text-gold">actually works.</em>
          </>
        }
        lede="A walkthrough of Momenties from first keystroke to synced calendar. No marketing gloss — just the product as it is."
        crumbs={[{ label: 'Product tour' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press"
          >
            Try the live demo <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-10 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Start free
          </Link>
        </div>
      </PageHero>

      {/* The flow */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">The loop</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              From thought to calendar in four steps.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FLOW_STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 60}>
                <div className="relative rounded-xl border border-border lux-card p-5 h-full">
                  {i < FLOW_STEPS.length - 1 && (
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 hidden lg:flex">
                      <ChevronRight className="h-4 w-4 text-gold/30" />
                    </div>
                  )}
                  <div className="font-mono text-3xl font-bold text-gold/20 mb-4">{s.step}</div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{s.label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar mockup */}
      <section className="py-24 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">The view</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-5">
                Quiet by design.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The main view shows your day. Just your day. No widgets to configure, no panels to collapse, no sidebar begging for attention. The calendar is the interface.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Time grid with 15-minute increments',
                  'Color-coded by calendar or by type',
                  'Drag to reschedule, click to edit',
                  'Mini month for quick navigation',
                  'Keyboard-first: j/k to move, n to add, e to edit',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/85">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              {/* Calendar mockup */}
              <div className="rounded-2xl border border-border overflow-hidden shadow-2xl shadow-black/40">
                {/* Top bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-[#0f0f14]">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-rose-500/60" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                    </div>
                    <span className="font-mono text-[11px] text-muted-foreground">Momenties</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Moon className="h-3.5 w-3.5 text-muted-foreground/50" />
                    <Search className="h-3.5 w-3.5 text-muted-foreground/50" />
                    <Bell className="h-3.5 w-3.5 text-muted-foreground/50" />
                  </div>
                </div>
                {/* Date header */}
                <div className="px-5 pt-4 pb-3 border-b border-border bg-[#0c0c0f]">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                        Friday
                      </span>
                      <div className="font-display text-2xl font-bold text-foreground">April 18</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-[10px] text-muted-foreground/60">5 events</div>
                      <div className="font-mono text-[10px] text-gold/70">3h 15m scheduled</div>
                    </div>
                  </div>
                </div>
                {/* Events */}
                <div className="px-4 py-3 space-y-2 bg-[#0c0c0f] min-h-[260px]">
                  {CALENDAR_EVENTS.map((e) => (
                    <div key={e.title} className={`rounded-xl border px-3 py-2.5 flex items-center gap-3 ${e.color}`}>
                      <div className={`w-2 h-2 rounded-full shrink-0 ${e.dot}`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-foreground truncate">{e.title}</div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-mono text-[10px] text-muted-foreground">{e.time}</span>
                        <span className="font-mono text-[9px] text-muted-foreground/60">{e.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Input bar */}
                <div className="border-t border-border px-4 py-3 bg-[#0f0f14] flex items-center gap-3">
                  <div className="flex-1 rounded-lg border border-border/50 bg-[#0a0a0d] px-3 py-2 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground/50 flex-1">Add event...</span>
                    <div className="flex items-center gap-1.5">
                      <Mic className="h-3.5 w-3.5 text-gold/40" />
                      <Camera className="h-3.5 w-3.5 text-gold/40" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Input modes deep dive */}
      <section className="py-24 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How input works</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Three ways in. One result.
            </h2>
          </Reveal>

          <div className="space-y-10">
            {FEATURES_DEEP.map((f, fi) => (
              <Reveal key={f.title} delay={fi * 50}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-start ${fi % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <div>
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/10 flex items-center justify-center shrink-0">
                        <f.icon className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display text-xl font-semibold text-foreground">{f.title}</h3>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full border text-[9px] font-mono uppercase tracking-wider ${f.badgeColor}`}>
                            {f.badge}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Demo block */}
                  <div className="rounded-xl border border-border overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-[#0f0f14]">
                      <div className="flex gap-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                      </div>
                      <span className="font-mono text-[10px] text-muted-foreground ml-1">Parsing demo</span>
                    </div>
                    <div className="bg-[#080810] divide-y divide-border/40">
                      {f.demoLines.map((line, li) => (
                        <div key={li} className="px-4 py-3">
                          <div className="flex items-start gap-2 mb-2">
                            <span className="font-mono text-[10px] text-gold/50 mt-0.5 shrink-0">IN</span>
                            <code className="font-mono text-xs text-foreground/80 leading-relaxed">
                              {line.input}
                            </code>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="font-mono text-[10px] text-emerald-400/70 mt-0.5 shrink-0">→</span>
                            <span className="font-mono text-xs text-emerald-400/80 leading-relaxed">
                              {line.parsed}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sync & integrations strip */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal>
              <div className="flex items-start gap-4">
                <Calendar className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Syncs both ways</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Events created anywhere — web, mobile, voice — appear in Google Calendar and Apple Calendar within seconds. Edits sync back.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={60}>
              <div className="flex items-start gap-4">
                <Bell className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Smart reminders</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Reminders that account for travel time, meeting prep, and your personal rhythm. Push, email, or SMS — you choose.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex items-start gap-4">
                <Zap className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">60+ integrations</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Slack, Zoom, Notion, Linear, Zapier, and more. Your calendar doesn't live in a silo — it connects to your stack.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Keyboard shortcuts teaser */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">Keyboard-first</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
                Never touch the mouse.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Every action in Momenties has a keyboard shortcut. Power users never leave the home row. Beginners can ignore this entirely — it&apos;s there when you&apos;re ready.
              </p>
              <Link
                href="/keyboard"
                className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors"
              >
                See the full keyboard reference <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
            <Reveal delay={80}>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="px-4 py-2.5 border-b border-border bg-[#0f0f14]">
                  <span className="font-mono text-[10px] text-muted-foreground">Common shortcuts</span>
                </div>
                <div className="bg-[#080810] divide-y divide-border/30">
                  {[
                    { key: 'N', desc: 'Add new event' },
                    { key: '/', desc: 'Jump to search' },
                    { key: 'T', desc: 'Go to today' },
                    { key: 'J / K', desc: 'Next / previous day' },
                    { key: 'E', desc: 'Edit selected event' },
                    { key: 'V', desc: 'Toggle voice input' },
                    { key: '?', desc: 'Show all shortcuts' },
                  ].map((row) => (
                    <div key={row.key} className="flex items-center justify-between px-4 py-2.5">
                      <span className="text-xs text-foreground/80">{row.desc}</span>
                      <kbd className="font-mono text-[11px] px-2 py-0.5 rounded border border-border bg-white/5 text-muted-foreground">
                        {row.key}
                      </kbd>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="See it for yourself."
        subtitle="The live demo runs entirely in your browser. No sign-up required."
        primary={{ label: 'Open the live demo', href: '/demo' }}
        secondary={{ label: 'Start free', href: '/login' }}
      />
    </>
  )
}
