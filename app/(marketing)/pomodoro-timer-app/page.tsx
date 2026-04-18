import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, BarChart3, Calendar, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pomodoro Timer App — Why calendar-based Pomodoro outperforms a standalone timer',
  description:
    'Standalone Pomodoro timers track sessions but not what happened in them. Calendar-based Pomodoro connects your focused sessions to the rest of your day — the meetings, the context, the analytics that show where your time actually went.',
  alternates: { canonical: '/pomodoro-timer-app' },
  openGraph: {
    title: 'Pomodoro Timer App — Momenties',
    description: 'Calendar-based Pomodoro: focused sessions tracked alongside your whole day.',
    url: '/pomodoro-timer-app',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Clock,
    title: '25-minute focus blocks on the calendar',
    desc: 'Add Pomodoro sessions as 25-minute calendar blocks. "Pomodoro — email replies, 9am." "Pomodoro — report draft, 9:30am." The session is time-blocked, not just timed. It can\'t be double-booked.',
  },
  {
    icon: Calendar,
    title: 'Sessions sit alongside your real day',
    desc: 'A standalone timer runs in isolation. Calendar-based Pomodoro shows your sessions in context — next to the meeting they\'re preparing for, between the blocks that constrain them. Real schedule, real constraints.',
  },
  {
    icon: BarChart3,
    title: 'Focus session analytics',
    desc: 'Tag Pomodoro blocks. Analytics shows: sessions per day, completion rate, focus hours vs. meeting hours, best-performing days. See whether your Pomodoro habit is actually building or quietly eroding.',
  },
  {
    icon: Shield,
    title: 'Pomodoro blocks that protect themselves',
    desc: 'A calendar block tells the team this slot is taken. Colleagues can\'t book a quick call over your Pomodoro session. The focus time is defended by the calendar infrastructure — not just your willpower.',
  },
]

const POMODORO_PATTERNS = [
  {
    pattern: 'Four morning Pomodoros before meetings',
    detail: '8am–10am: four 25-minute Pomodoros with 5-minute breaks. Two hours of deep work before the first meeting. The highest-value work happens when energy is highest. Calendar protected from 8–10am.',
  },
  {
    pattern: 'Task-labeled Pomodoros',
    detail: 'Every Pomodoro labeled with the specific task: "Pomodoro — intro section of report." When the session ends, the label tells you exactly what got done. No "I was working on something" ambiguity.',
  },
  {
    pattern: 'Pomodoro batching for shallow work',
    detail: 'Three Pomodoros after lunch for email, Slack, admin. Shallow work batched into a defined window — not scattered throughout the day. The calendar signals the transition from deep to shallow.',
  },
  {
    pattern: 'Weekly Pomodoro review',
    detail: 'Every Friday afternoon: analytics review. How many Pomodoros this week? Which days were best? What time blocks had the highest completion rate? Adjust next week\'s schedule based on the data.',
  },
]

const COMPARISON = [
  { dimension: 'Session tracking', timer: 'Count of sessions', calendar: 'Sessions with context and labels' },
  { dimension: 'Conflict visibility', timer: 'None — timer runs regardless', calendar: 'Sessions protected by calendar blocking' },
  { dimension: 'Analytics', timer: 'Session count and streaks', calendar: 'Focus hours, meeting ratio, weekly trends' },
  { dimension: 'Team visibility', timer: 'Invisible to colleagues', calendar: 'Shared availability signal' },
  { dimension: 'Day context', timer: 'Isolated from the rest of the day', calendar: 'Sessions next to meetings and events' },
]

export default function PomodoroTimerAppPage() {
  return (
    <>
      <PageHero
        eyebrow="Pomodoro Timer App"
        title={
          <>
            Focused sessions on
            <br />
            <em className="not-italic text-gold">the calendar itself.</em>
          </>
        }
        lede="A standalone Pomodoro timer counts sessions. A calendar-based approach places sessions where your day actually lives — next to meetings, protected by blocking, analyzed alongside everything else. Here's why calendar-based Pomodoro outperforms a timer running in isolation."
        crumbs={[{ label: 'Pomodoro Timer App' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/focus-time"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Focus time guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How it works</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four advantages of calendar-based Pomodoro.</h2>
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

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Timer vs. calendar</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Standalone timer vs. calendar-based Pomodoro.</h2>
          </Reveal>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-mono text-[10px] text-gold/60 uppercase tracking-wide">Dimension</th>
                  <th className="text-left py-3 px-4 font-mono text-[10px] text-gold/60 uppercase tracking-wide">Standalone timer</th>
                  <th className="text-left py-3 px-4 font-mono text-[10px] text-gold/60 uppercase tracking-wide">Momenties</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} className="border-b border-border/30 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-xs text-foreground/80 font-medium">{row.dimension}</td>
                    <td className="py-3 px-4 text-xs text-muted-foreground">{row.timer}</td>
                    <td className="py-3 px-4 text-xs text-gold/90">{row.calendar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four patterns</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How effective Pomodoro users structure the calendar.</h2>
          </Reveal>
          <div className="space-y-3">
            {POMODORO_PATTERNS.map((item, i) => (
              <Reveal key={item.pattern} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-2">{item.pattern}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What Momenties adds</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Beyond the 25-minute timer.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Task-labeled Pomodoro blocks',
                'Calendar protection — blocks prevent double-booking',
                'Focus session analytics and trends',
                'Completion rate tracking',
                'Session-to-meeting ratio',
                'Daily and weekly focus hour totals',
                'Voice capture: "Pomodoro on report intro, 9am"',
                'Integration with Google Calendar',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                  <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Pomodoro sessions on the calendar. Protected and tracked."
        subtitle="Focus time blocking, session analytics, and Pomodoro patterns. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Focus time guide', href: '/focus-time' }}
      />
    </>
  )
}
