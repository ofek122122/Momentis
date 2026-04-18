import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Zap, Calendar, Camera, Mic, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Schedule Maker — Build any schedule fast with AI input',
  description:
    'Momenties is an AI-powered schedule maker that accepts natural language, voice, and photos. Create a weekly schedule, recurring routine, or project timeline in minutes. Free to start.',
  alternates: { canonical: '/schedule-maker' },
  openGraph: {
    title: 'Schedule Maker — Momenties',
    description: 'Build any schedule fast. Text, voice, or photo.',
    url: '/schedule-maker',
    type: 'website',
  },
}

const INPUT_METHODS = [
  {
    icon: Zap,
    title: 'Type it naturally',
    desc: '"Team standup Monday Wednesday Friday 9am, 15 mins." All three events created from one sentence. Natural language, no form, no friction.',
    example: '"Study group thursday 7pm biweekly for 10 weeks" → 5 events, spaced every 2 weeks, created instantly',
  },
  {
    icon: Mic,
    title: 'Say it out loud',
    desc: 'Voice input works on mobile and desktop. Speak your schedule while you\'re in a meeting, driving, or cooking. AI transcribes and parses in under 500ms.',
    example: '"Add workout block every morning 7am, 45 minutes, monday through friday" → 5 recurring events',
  },
  {
    icon: Camera,
    title: 'Photograph it',
    desc: 'Class timetable on a poster. Conference agenda in a PDF. Gym class schedule on the wall. Photo-to-calendar extracts every event and adds them to your calendar.',
    example: 'Photo of 12-week training plan → all 84 sessions parsed and created',
  },
  {
    icon: Calendar,
    title: 'Templates for any schedule type',
    desc: 'Work week template. Study schedule. Interview loop. Onboarding plan. Create the template once — apply to any start date. All events generated in seconds.',
    example: '"Apply onboarding template starting monday" → 40 meetings created, zero manual work',
  },
]

const SCHEDULE_TYPES = [
  { label: 'Weekly routine', example: '"Gym MWF 7am, piano lesson tuesday 6pm, meal prep sunday 2pm"' },
  { label: 'Study schedule', example: '"Study block every weekday 3-5pm, review session friday 4pm"' },
  { label: 'Work schedule', example: '"Team standup MWF 9am, 1:1 with manager thursday 2pm biweekly"' },
  { label: 'Project timeline', example: '"Kickoff monday, weekly check-ins thursdays, final review june 30"' },
  { label: 'Event schedule', example: '"Venue walkthrough tuesday, AV check thursday, run-through friday 2pm"' },
  { label: 'Training plan', example: 'Photo of 12-week marathon plan → all sessions created automatically' },
]

export default function ScheduleMakerPage() {
  return (
    <>
      <PageHero
        eyebrow="Schedule Maker"
        title={
          <>
            Build any schedule
            <br />
            <em className="not-italic text-gold">in minutes, not hours.</em>
          </>
        }
        lede="Momenties turns natural language, voice, and photos into calendar events instantly. Build a weekly routine, project timeline, training plan, or class schedule — whichever format your schedule comes in, Momenties handles it."
        crumbs={[{ label: 'Schedule Maker' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/calendar-templates"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Calendar templates
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · All input methods included · Syncs everywhere</p>
      </PageHero>

      {/* Input methods */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Input methods</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four ways to build your schedule.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {INPUT_METHODS.map((m, i) => (
              <Reveal key={m.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <m.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{m.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{m.desc}</p>
                  <div className="rounded-lg bg-white/[0.03] border border-border/30 p-3">
                    <p className="font-mono text-[10px] text-gold/60 mb-1">Example</p>
                    <p className="font-mono text-xs text-foreground/70">{m.example}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule types */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Examples</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Whatever schedule you need to build.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {SCHEDULE_TYPES.map((s, i) => (
              <Reveal key={s.label} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border/50 p-4">
                  <p className="text-sm font-medium text-foreground mb-2">{s.label}</p>
                  <p className="font-mono text-xs text-muted-foreground/70 leading-relaxed">{s.example}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why it's different */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Why Momenties beats spreadsheet schedule makers.</h2>
          </Reveal>
          <div className="space-y-2">
            {[
              'Events sync to Google Calendar and Apple Calendar automatically — no export/import',
              'Recurring events set up in one sentence, not one row at a time',
              'Voice input means you can build a schedule without touching a keyboard',
              'Photo input handles printed schedules, class timetables, and event programs',
              'Analytics shows if the schedule you built is actually the schedule you\'re living',
              'Shared calendar means a team schedule can be built by one person, seen by all',
            ].map((f) => (
              <div key={f} className="flex items-start gap-2 py-1.5 border-b border-border/20 last:border-0">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/85">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="From blank page to complete schedule in minutes."
        subtitle="Text, voice, photo, or template. Whatever format your schedule comes in."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See templates', href: '/calendar-templates' }}
      />
    </>
  )
}
