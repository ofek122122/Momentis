import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Zap, Shield, BarChart3, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Google Calendar Tips — 15 things power users do that most people miss',
  description:
    'Most Google Calendar users use maybe 30% of what\'s available. Here are 15 tips that power users rely on — plus what Momenties adds on top for natural language, analytics, and AI scheduling.',
  alternates: { canonical: '/google-calendar-tips' },
  openGraph: {
    title: 'Google Calendar Tips — Momenties',
    description: '15 Google Calendar tips power users know — plus what AI adds on top.',
    url: '/google-calendar-tips',
    type: 'website',
  },
}

type TipCategory = 'speed' | 'organization' | 'focus' | 'team' | 'advanced'

const CATEGORY_COLORS: Record<TipCategory, string> = {
  speed: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  organization: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  focus: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  team: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  advanced: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
}

const TIPS: { number: number; category: TipCategory; title: string; body: string }[] = [
  { number: 1, category: 'speed', title: 'Use keyboard shortcuts everywhere', body: 'Press "c" to create an event, "t" to jump to today, "/" to search, "d" for day view, "w" for week view. Most Google Calendar users never touch the keyboard.' },
  { number: 2, category: 'speed', title: 'Type the event name to quick-create', body: 'Click any time slot and just type the event name. Google parses "Lunch with Sarah thursday 12pm" into a real event. Fast — but limited. Momenties does this for any input format including voice.' },
  { number: 3, category: 'organization', title: 'Color-code calendars, not individual events', body: 'Create separate calendars: Work, Personal, Side Project, Health. Color them differently. One glance at the week tells you the balance. Coloring individual events is noise.' },
  { number: 4, category: 'focus', title: 'Block time using "Out of office" for external signals', body: '"Out of office" blocks decline meeting invites automatically. Use it for deep work blocks that should actually protect time — not just appear blocked.' },
  { number: 5, category: 'team', title: 'View other people\'s calendars in "Other people\'s calendars"', body: 'Add teammates\' calendars to see their availability without asking. Works for anyone in the same Google Workspace who has shared their calendar.' },
  { number: 6, category: 'organization', title: 'Use event descriptions for prep context', body: 'Add agenda, relevant links, and prep notes in the event description. The context is there when you open the event 5 minutes before the meeting — not buried in 7 email threads.' },
  { number: 7, category: 'advanced', title: 'Set up Focus Time to block scheduling', body: 'In Google Calendar\'s "Focus Time" feature, block slots that automatically decline meeting invites from coworkers. Pairs with Momenties voice and analytics for full deep work infrastructure.' },
  { number: 8, category: 'speed', title: 'Use recurring events for standing structure', body: '"Weekly review — friday 4pm" recurring forever. "Daily planning — 8:45am" every weekday. Structure set once. Never re-scheduled. Calendar builds the week automatically.' },
  { number: 9, category: 'team', title: 'Send calendar invites directly from the event', body: 'Add attendees from within the event creation view. Google Calendar checks their availability and suggests meeting times. Faster than email-then-calendar.' },
  { number: 10, category: 'organization', title: 'Use multiple time zones in settings', body: 'Settings → General → Time zone → Add second time zone. For distributed teams, your calendar shows both time zones in the day view. No mental math.' },
  { number: 11, category: 'advanced', title: 'Create events from Gmail', body: 'Google Calendar integrates with Gmail to suggest events from emails. "Flight confirmation" becomes a calendar event automatically. Momenties adds photo parsing for schedule screenshots.' },
  { number: 12, category: 'focus', title: 'Hide weekends if you don\'t work them', body: 'Settings → View options → Hide weekends. Cleans up the view dramatically. Five focused columns instead of seven distracting ones.' },
  { number: 13, category: 'speed', title: 'Drag events to reschedule', body: 'Drag any event to a new time or day. No click, no edit, no save. Rescheduling a meeting takes 2 seconds. Most people open the event and change the time manually.' },
  { number: 14, category: 'advanced', title: 'Use Goals for recurring personal habits', body: 'Google Calendar\'s Goals feature auto-schedules recurring personal goals (exercise, reading) around existing events. Limited — Momenties does this more flexibly with recurring blocks and analytics.' },
  { number: 15, category: 'advanced', title: 'Export to CSV for custom analysis', body: 'Export your calendar to CSV. Build your own analysis. Or let Momenties analytics do it automatically — hours per project, deep work percentage, meeting load trend.' },
]

const WHAT_MOMENTIES_ADDS = [
  { title: 'Natural language scheduling', detail: 'Google Calendar parses basic phrases. Momenties understands "dentist thursday afternoon for an hour" and places it correctly — handling complex natural language, time zone conversions, and ambiguous references.' },
  { title: 'Voice input from anywhere', detail: 'No keyboard required. Speak the event while driving, walking, or between meetings. Deepgram transcribes in real time. Faster than any keyboard shortcut.' },
  { title: 'Calendar analytics built in', detail: 'Google Calendar shows you what\'s scheduled. Momenties shows you where your time went — hours per project, deep work percentage, meeting load over time.' },
  { title: 'Photo scheduling', detail: 'Photograph a conference schedule, class timetable, or paper itinerary. Momenties parses the image and adds the events. No manual entry.' },
]

export default function GoogleCalendarTipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Google Calendar Tips"
        title={
          <>
            15 things power users do
            <br />
            <em className="not-italic text-gold">that most people miss.</em>
          </>
        }
        lede="Most Google Calendar users use a fraction of what's available. Keyboard shortcuts, calendar organization, focus time blocking, meeting prep context, time zone management — here are 15 tips that change how the calendar feels to use, plus what AI adds on top."
        crumbs={[{ label: 'Google Calendar Tips' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Add AI to your calendar <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/google-calendar-alternative"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Google Calendar alternative
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Works with your existing Google Calendar</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">15 tips</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">What power Google Calendar users actually do.</h2>
          </Reveal>
          <div className="space-y-3">
            {TIPS.map((tip, i) => (
              <Reveal key={tip.number} delay={(i % 5) * 30}>
                <div className="rounded-xl border border-border/50 p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="font-mono text-[11px] text-gold/40 w-6 shrink-0 pt-0.5">{String(tip.number).padStart(2, '0')}</span>
                    <div className="flex items-center gap-2 flex-1">
                      <p className="text-sm font-medium text-foreground">{tip.title}</p>
                      <span className={`text-[10px] font-mono uppercase tracking-wide border px-2 py-0.5 rounded-full shrink-0 ${CATEGORY_COLORS[tip.category]}`}>{tip.category}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-9">{tip.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What Momenties adds</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">What AI scheduling adds to Google Calendar.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {WHAT_MOMENTIES_ADDS.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-5 h-full">
                  <h3 className="text-sm font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Related guides</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">More ways to get more from your calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { label: 'Calendar tips', href: '/calendar-tips' },
                { label: 'Calendar hacks', href: '/calendar-hacks' },
                { label: 'Time blocking', href: '/time-blocking' },
                { label: 'Calendar blocking', href: '/calendar-blocking' },
                { label: 'Deep work schedule', href: '/deep-work-schedule' },
                { label: 'Weekly review', href: '/weekly-review' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-xs text-foreground/80 hover:text-gold transition-colors rounded-lg border border-border/40 px-3 py-2.5"
                >
                  <CheckCircle2 className="h-3 w-3 text-gold/50 shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="The Google Calendar tips you already know — plus AI on top."
        subtitle="Natural language scheduling, voice input, photo parsing, and analytics. Syncs with Google Calendar. Free."
        primary={{ label: 'Add AI to your calendar', href: '/login' }}
        secondary={{ label: 'Google Calendar alternative', href: '/google-calendar-alternative' }}
      />
    </>
  )
}
