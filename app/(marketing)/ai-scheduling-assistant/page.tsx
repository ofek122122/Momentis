import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Zap, Mic, Camera, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Scheduling Assistant — Natural language scheduling without the back-and-forth',
  description:
    'An AI scheduling assistant that understands natural language, responds to voice, reads photos of schedules, and connects directly to Google Calendar. Momenties is the scheduling assistant you\'ve been waiting for — built into your calendar.',
  alternates: { canonical: '/ai-scheduling-assistant' },
  openGraph: {
    title: 'AI Scheduling Assistant — Momenties',
    description: 'Natural language, voice, and photo scheduling built into your calendar.',
    url: '/ai-scheduling-assistant',
    type: 'website',
  },
}

const CAPABILITIES = [
  {
    icon: Zap,
    title: 'Natural language scheduling',
    desc: '"Investor call with Michael friday 3pm, 45 minutes." "Monthly team lunch, first thursday, recurring." "Q3 review sept 15 2pm 2 hours, all-hands." The assistant understands everything — no field filling.',
  },
  {
    icon: Mic,
    title: 'Voice commands from anywhere',
    desc: 'Walking between meetings: "Add coffee with Sam tuesday 8am." Driving: "Doctor appointment thursday 2pm." In a hurry: "Gym tomorrow 6am." The assistant listens. The event appears.',
  },
  {
    icon: Camera,
    title: 'Photo parsing for printed schedules',
    desc: 'Conference agenda. Class schedule. Team roster with times. Handwritten schedule on a whiteboard. Photograph it. The AI extracts every event in seconds. Zero manual entry.',
  },
  {
    icon: BarChart3,
    title: 'Analytics that advise on scheduling',
    desc: 'The scheduling assistant notices patterns: your Tuesday afternoons are always overloaded. Your deep work blocks rarely survive the week. The data informs better scheduling before the next week starts.',
  },
  {
    icon: Shield,
    title: 'Direct Google Calendar connection',
    desc: 'Events go into your real calendar via OAuth. No separate "AI calendar" to maintain. Every event the assistant creates appears in every tool that connects to Google Calendar — including your phone.',
  },
]

const ASSISTANT_EXAMPLES = [
  { input: '"Launch review meeting next tuesday 2pm 90 mins with the product team"', result: 'Event created: Launch Review · Tue · 2:00 PM · 90 min', latency: '18ms (chrono-node)' },
  { input: 'Voice: "Remind me to prep for the board meeting thursday morning"', result: 'Event created: Board Meeting Prep · Thu · 9:00 AM · 30 min', latency: '340ms (Deepgram + AI)' },
  { input: '"Block every wednesday afternoon for deep work, recurring"', result: 'Recurring event: Deep Work · Every Wed · 1:00–5:00 PM', latency: '25ms (chrono-node)' },
  { input: 'Photo of conference program', result: '8 sessions extracted and added across 2 days', latency: '1.8s (Gemini Vision)' },
  { input: '"Cancel the 3pm today and reschedule to thursday same time"', result: 'Event moved: Original → Thu · 3:00 PM · same duration', latency: '310ms (Gemini 2.5 Flash)' },
]

export default function AiSchedulingAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Scheduling Assistant"
        title={
          <>
            The scheduling assistant
            <br />
            <em className="not-italic text-gold">inside your calendar.</em>
          </>
        }
        lede="An AI scheduling assistant that lives inside your calendar — not a bot that emails invites or a tool that requires a separate workflow. Momenties understands how you communicate, adds events at the speed of thought, and connects directly to the calendar you already use."
        crumbs={[{ label: 'AI Scheduling Assistant' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try it free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/ai-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            AI calendar overview
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Works with Google Calendar</p>
      </PageHero>

      {/* Capabilities */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What the assistant can do</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Five scheduling capabilities in one place.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
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

      {/* Examples */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Live examples</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">What the assistant understands.</h2>
          </Reveal>
          <div className="space-y-3">
            {ASSISTANT_EXAMPLES.map((ex, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-xs font-mono text-muted-foreground mb-3 p-3 bg-white/[0.02] rounded-lg border border-border/30">
                    {ex.input}
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs text-foreground/90">{ex.result}</p>
                    <span className="font-mono text-[9px] text-gold/60 bg-gold/5 px-2 py-0.5 rounded-full border border-gold/20 shrink-0">{ex.latency}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What sets it apart */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What makes it different</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">An AI assistant that lives inside the calendar, not outside it.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'No separate tool or workflow to maintain',
                'Events go directly into Google Calendar',
                'Voice input without leaving the app',
                'Photo scheduling without manual extraction',
                'Hybrid AI: fast for common patterns, powerful for complex ones',
                'Analytics that inform better scheduling decisions',
                'Focus mode enforces the schedule AI helped create',
                'Works on any device, any browser',
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
        title="The AI scheduling assistant inside your calendar."
        subtitle="Natural language, voice, photo, and analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'AI calendar features', href: '/ai-calendar' }}
      />
    </>
  )
}
