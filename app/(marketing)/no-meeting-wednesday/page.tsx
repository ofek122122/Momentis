import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, BarChart3, Users, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'No Meeting Wednesday — The case for one protected day of deep work per week',
  description:
    'No Meeting Wednesday (or any day) is a commitment to protecting one full day per week for deep work. Here\'s how to implement it, communicate it to colleagues, measure its impact, and defend it when the calendar pressure inevitably pushes back.',
  alternates: { canonical: '/no-meeting-wednesday' },
  openGraph: {
    title: 'No Meeting Wednesday — Momenties',
    description: 'Protect one deep work day per week and measure the difference it makes.',
    url: '/no-meeting-wednesday',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Shield,
    title: 'One full day blocked as meeting-free',
    desc: 'Wednesday (or whichever day) blocked as an all-day deep work event: "No Meeting Wednesday — deep work." Every meeting request for that day declined by default. The blocked day is visible to everyone who tries to schedule. The calendar signal communicates the boundary.',
  },
  {
    icon: BarChart3,
    title: 'Analytics measure the day\'s actual output',
    desc: 'Tag events on No Meeting Wednesday by work type: writing, analysis, design, coding, strategy. Analytics shows deep work hours on the protected day vs. regular meeting days. The output difference becomes visible. The case for protecting the day builds itself.',
  },
  {
    icon: Users,
    title: 'Team-level implementation',
    desc: 'No Meeting Wednesday works best when the whole team commits together. The calendar signal is visible to everyone. Requests on Wednesday generate automatic responses. The team\'s collective deep work output — and the downstream product quality — reflects the protected day.',
  },
  {
    icon: Clock,
    title: 'Buffer days on either side reinforce the block',
    desc: 'Tuesday afternoons reserved for preparation for Wednesday deep work: clear the desk, set priorities, confirm the deep work agenda. Thursday mornings used for follow-up from Wednesday\'s output. The day doesn\'t stand alone — it\'s embedded in a weekly system.',
  },
]

const IMPLEMENTATION_STEPS = [
  { step: '1', title: 'Choose the day and commit to it', detail: 'Wednesday is ideal — it creates a midweek break in meeting pressure. But any day works. The important thing is consistency. One protected day every week, not occasionally when the calendar happens to be free.' },
  { step: '2', title: 'Block it before anything else', detail: '"No Meeting Wednesday — deep work, all day." Recurrent, weekly. The block is visible to anyone trying to schedule. It must be added before the meeting calendar is shared — protection requires first-mover advantage on the day.' },
  { step: '3', title: 'Communicate it to your team and manager', detail: '"I protect Wednesdays for deep work — meetings on other days." Say it once, proactively. The calendar signal reinforces it continuously. Most colleagues respect an explicit, consistent, communicated boundary.' },
  { step: '4', title: 'Plan the deep work agenda on Tuesday', detail: 'The night before, decide exactly what Wednesday\'s deep work will produce: the document to be drafted, the analysis to be completed, the code to be written. Arriving at the protected day without an agenda wastes the protection.' },
  { step: '5', title: 'Measure and defend with data', detail: 'Track deep work output on Wednesday vs. regular meeting days. The data shows the difference. When someone pushes back on the protected day, the output data is the strongest argument for keeping it.' },
]

const COMMON_OBJECTIONS = [
  { objection: '"I can\'t control my calendar that much"', response: 'The calendar is negotiated, not dictated. One protected day is a reasonable ask — most people who try this find that colleagues accommodate it when it\'s communicated consistently.' },
  { objection: '"Emergencies happen on Wednesdays too"', response: 'True emergencies can always override the protection. The goal isn\'t to be unreachable — it\'s to prevent routine meetings from claiming the only unscheduled day in the week.' },
  { objection: '"My team needs me available"', response: 'A day of deep work makes you more available to your team on the other four days. Output produced on Wednesday reduces the meeting load caused by unclear work on Tuesday.' },
  { objection: '"My manager won\'t allow it"', response: 'Propose a 4-week experiment with output data. It\'s easier to defend a protected day when you can show what was produced during it.' },
]

export default function NoMeetingWednesdayPage() {
  return (
    <>
      <PageHero
        eyebrow="No Meeting Wednesday"
        title={
          <>
            One day protected.
            <br />
            <em className="not-italic text-gold">One day of real work.</em>
          </>
        }
        lede="Most knowledge workers don't have a single full day per week for deep, uninterrupted work. Every day has meetings. The solution is protecting one — before the meeting calendar claims it. No Meeting Wednesday is a commitment to one full day per week of actual output, not coordination overhead."
        crumbs={[{ label: 'No Meeting Wednesday' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/meeting-free-day"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Meeting-free day guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties supports No Meeting Wednesday.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Implementation guide</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to implement No Meeting Wednesday that actually holds.</h2>
          </Reveal>
          <div className="space-y-3">
            {IMPLEMENTATION_STEPS.map((item, i) => (
              <Reveal key={item.step} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-5">
                  <span className="font-mono text-lg font-bold text-gold/40 w-8 shrink-0 leading-tight">{item.step}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1.5">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Common objections</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Responses to the pushback you&apos;ll get.</h2>
          </Reveal>
          <div className="space-y-3">
            {COMMON_OBJECTIONS.map((item, i) => (
              <Reveal key={item.objection} delay={i * 50}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <p className="text-xs font-mono text-amber-400/70 uppercase tracking-wide mb-2">Objection</p>
                  <p className="text-sm font-medium text-foreground mb-3">{item.objection}</p>
                  <p className="text-xs font-mono text-emerald-400/70 uppercase tracking-wide mb-2">Response</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.response}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Protected day analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties measures for No Meeting Wednesday.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Deep work hours on Wednesday vs. other days',
                'Meeting-free rate — Wednesdays defended',
                'Output quality by day of week comparison',
                'Focus session length on protected vs. non-protected days',
                'Team adoption rate if implemented team-wide',
                'Wednesday productivity trend over 12 weeks',
                'Meeting load shift — did meetings move to other days?',
                'Net deep work increase from protection',
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
        title="One day protected. Deep work delivered. Output increased."
        subtitle="Protected day scheduling, deep work analytics, and meeting load management. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Meeting-free day guide', href: '/meeting-free-day' }}
      />
    </>
  )
}
