import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, BarChart3, Calendar, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendar for Creatives — How creative professionals protect time for the work that matters',
  description:
    'Creative work requires long uninterrupted blocks that most calendars never protect. Here\'s how designers, writers, artists, photographers, and other creative professionals use the calendar to protect their best work — not just schedule meetings around it.',
  alternates: { canonical: '/calendar-for-creatives' },
  openGraph: {
    title: 'Calendar for Creatives — Momenties',
    description: 'Protect creative time, track client work, and manage creative practice on the calendar.',
    url: '/calendar-for-creatives',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Shield,
    title: 'Creative sessions blocked like the work they are',
    desc: 'Writing, designing, composing, or building requires 2–3 hour uninterrupted blocks. Block them before anything else. "Creative work — 9am to noon." The block is protected before the brief arrives, before the client calls, before the day fills.',
  },
  {
    icon: Calendar,
    title: 'Project deadlines per client',
    desc: 'Every creative deliverable on the calendar: first concept, revision round, final delivery. The full project timeline visible from day one. No deadline emerges as a surprise. The work is planned before the panic.',
  },
  {
    icon: BarChart3,
    title: 'Time per client reveals the real business',
    desc: 'Tag every creative session, revision call, and client meeting by project. Analytics shows hours invested per client. The flat-fee client who consumes 40% of your time? Now you can see it and change it.',
  },
  {
    icon: Zap,
    title: 'Voice capture between creative sessions',
    desc: '"Revision call - Studio A wednesday 3pm." Voice-added while reviewing feedback. On the calendar before opening the laptop. Never lose a scheduling commitment to the "I\'ll do it later" void.',
  },
]

const CREATIVE_TYPES = [
  {
    type: 'Writers',
    how: 'Morning writing blocks before email opens. Daily Brief shows the day at 6am. Word count blocks set as calendar events. No calls before 11am — protected by calendar signal.',
  },
  {
    type: 'Designers',
    how: 'Studio time 9am–noon every day. Project deadline calendar per client. Revision rounds templated. No design meetings before the concept session — creative work goes first.',
  },
  {
    type: 'Photographers',
    how: 'Shoot days blocked weeks in advance. Editing blocks templated after each shoot. Client gallery review sessions scheduled at delivery. Seasonal busy periods planned 3 months out.',
  },
  {
    type: 'Musicians & composers',
    how: 'Composition sessions in the morning peak window. Practice and rehearsal templated weekly. Gig and session dates on calendar from booking confirmation. Recording sessions blocked with setup and teardown time.',
  },
  {
    type: 'Illustrators & artists',
    how: 'Studio hours protected daily. Commission deadlines per project. Client feedback sessions scheduled at delivery. Exhibition prep milestones on calendar months before.',
  },
  {
    type: 'Filmmakers & videographers',
    how: 'Pre-production milestones on calendar from first meeting. Shoot days blocked with weather contingency. Editing timeline protected. Delivery window scheduled before production starts.',
  },
]

const CREATIVE_WEEK = [
  { time: 'Monday', action: '"Creative work block — 9am-noon." The highest-priority creative session of the week is protected before Monday arrives. No meeting booked over it. No exception.' },
  { time: 'Client calls', action: '"Client review — tuesday 2pm, wednesday 11am, thursday 3pm." Calls batched into the afternoon. Morning is creative time. Every week, consistently.' },
  { time: 'Revision rounds', action: '"Revision delivery — thursday noon." Tagged to the project. Hours tracked. The client knows when to expect it because it\'s on the calendar.' },
  { time: 'Friday', action: '"Friday wrap + weekly review — 4pm 30 mins." Analytics reviewed: creative hours vs. call hours vs. admin. Which client is getting the most time? Is the ratio right?' },
]

export default function CalendarForCreativesPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar for Creatives"
        title={
          <>
            Create first.
            <br />
            <em className="not-italic text-gold">Meetings second.</em>
          </>
        }
        lede="Creative work requires long uninterrupted focus that most calendars never protect. The best creative professionals don't find time for creative work — they block it first and schedule everything else around it. Here's how designers, writers, artists, and other creative professionals use the calendar to protect what matters most."
        crumbs={[{ label: 'Calendar for Creatives' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · No client data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four features for creative work</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How the calendar protects creative practice.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">By creative type</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How different creatives structure the week.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {CREATIVE_TYPES.map((type, i) => (
              <Reveal key={type.type} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-5 h-full">
                  <h3 className="text-xs font-mono text-gold/70 uppercase tracking-wide mb-2">{type.type}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{type.how}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Creative week rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A creative professional&apos;s week with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {CREATIVE_WEEK.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-24 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Creative analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Your creative practice in numbers.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Creative hours per week — trend over time',
                'Client work hours per project',
                'Creative time vs. client call ratio',
                'Revision rounds per deliverable',
                'Deadline hit rate',
                'Most productive day of the week',
                'Morning vs. afternoon creative output',
                'Effective hourly rate by client type',
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
        title="Create first. Deadlines met. Practice growing."
        subtitle="Creative block scheduling, project deadline tracking, and client analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Focus time guide', href: '/focus-time' }}
      />
    </>
  )
}
