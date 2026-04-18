import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, BarChart3, Clock, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Time Management Strategies — What actually works (and what doesn\'t)',
  description:
    'Most time management strategies fail because they live in a productivity system separate from the calendar where work actually happens. Here are six strategies that work — and how to build each one directly into the calendar.',
  alternates: { canonical: '/time-management-strategies' },
  openGraph: {
    title: 'Time Management Strategies — Momenties',
    description: 'Six time management strategies that actually work — built into the calendar.',
    url: '/time-management-strategies',
    type: "website",
  },
}

const WHAT_DOESNT_WORK = [
  { item: 'To-do lists without time', reason: 'A list with 40 items and no allocated time produces anxiety, not output.' },
  { item: 'Time blocking without defense', reason: 'A blocked calendar that colleagues ignore is a note to yourself.' },
  { item: 'Productivity apps that aren\'t the calendar', reason: 'Systems separate from where work happens require context switching to maintain.' },
  { item: 'Reviews that rely on memory', reason: 'Memory is biased. What felt like a productive week often wasn\'t — and vice versa.' },
  { item: 'One system for everything', reason: 'Deep work, meetings, and admin require different time structures. A single mode for all fails at each.' },
]

const STRATEGIES = [
  {
    icon: Shield,
    number: '01',
    title: 'Time blocking — but protected',
    desc: 'Block time for your most important work before anything else. The key word is protected. An unprotected block is just an intention. A block that signals unavailability to your team and collapses incoming meeting requests — that\'s protection.',
    how: 'Block deep work first thing Monday morning. Use "Out of office" or equivalent to auto-decline meeting requests during those windows.',
  },
  {
    icon: Clock,
    number: '02',
    title: 'Energy-based scheduling',
    desc: 'Most people schedule based on calendar availability, not cognitive energy. Deep analytical work at 3pm when energy craters produces half the output of the same work at 9am. Schedule work type to match energy curve.',
    how: 'Block deep work for your peak hours (usually 9–11am for morning types). Reserve admin, email, and meetings for energy valleys.',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Analytics-informed weekly review',
    desc: 'A weekly review based on memory is a biased opinion. A review that opens with analytics — hours per project, deep work percentage, meeting load — is an honest assessment. You can\'t manage time you can\'t measure.',
    how: 'Tag every event type. Review analytics every Friday. What consumed time that shouldn\'t have? What got squeezed that shouldn\'t have?',
  },
  {
    icon: Zap,
    number: '04',
    title: 'Capture speed as a system property',
    desc: 'A time management system that takes 2 minutes to add an item will be used inconsistently. When capturing a task, meeting, or deadline takes more friction than "just remembering it," things fall out of the system. Speed is structural.',
    how: 'Voice capture any scheduling thought in under 10 seconds. The system stays current because the friction is gone.',
  },
  {
    icon: Shield,
    number: '05',
    title: 'Batch shallow work',
    desc: 'Email, admin, and reactive tasks expand to fill whatever time they\'re given. Batching them into defined windows prevents them from colonizing the whole day. Three focused email sessions beat constant inbox vigilance.',
    how: 'Block email/admin windows: 8:45–9am, after lunch, 5pm. Outside those windows, close the inbox. Signal: "I respond in batches."',
  },
  {
    icon: BarChart3,
    number: '06',
    title: 'Minimum viable meeting',
    desc: 'Meetings expand to fill their slot. A 60-minute meeting with no agenda runs 60 minutes and produces nothing. A 25-minute meeting with a stated decision to reach ends when the decision is made. Structure meetings on the calendar before they happen.',
    how: 'Every calendar event has a title that states the decision or outcome. Prep block added before important meetings. Time limit enforced by the calendar slot.',
  },
]

export default function TimeManagementStrategiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Time Management Strategies"
        title={
          <>
            Six strategies that
            <br />
            <em className="not-italic text-gold">actually work.</em>
          </>
        }
        lede="Most time management strategies fail not because the ideas are wrong — they fail because they live in a productivity system separate from the calendar where work actually happens. Here are six strategies that work, and how to build each one directly into the calendar."
        crumbs={[{ label: 'Time Management Strategies' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/time-blocking"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Time blocking
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What doesn&apos;t work</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Five time management approaches that consistently fail.</h2>
          </Reveal>
          <div className="space-y-3">
            {WHAT_DOESNT_WORK.map((item, i) => (
              <Reveal key={item.item} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="text-sm text-red-400/60 shrink-0 mt-0.5">✗</span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.item}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.reason}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Six strategies</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">What works — and how to build it on the calendar.</h2>
          </Reveal>
          <div className="space-y-4">
            {STRATEGIES.map((s, i) => (
              <Reveal key={s.number} delay={i * 50}>
                <div className="rounded-xl border border-border lux-card p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center shrink-0">
                      <s.icon className="h-4 w-4 text-gold" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-[10px] text-gold/40">{s.number}</span>
                        <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                  <div className="pl-13 ml-13">
                    <p className="text-xs text-gold/70 leading-relaxed pl-[52px]"><span className="font-medium text-gold/90">How: </span>{s.how}</p>
                  </div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Go deeper on each strategy.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { label: 'Time blocking', href: '/time-blocking' },
                { label: 'Deep work schedule', href: '/deep-work-schedule' },
                { label: 'Focus time', href: '/focus-time' },
                { label: 'Weekly review', href: '/weekly-review' },
                { label: 'Calendar blocking', href: '/calendar-blocking' },
                { label: 'Productivity planner', href: '/productivity-planner' },
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
        title="Time management strategies built into the calendar."
        subtitle="Time blocking, analytics, voice capture, and focus protection. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Time blocking guide', href: '/time-blocking' }}
      />
    </>
  )
}
