import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendar templates — Set up your week in under 2 minutes',
  description:
    'Momenties calendar templates let you scaffold recurring weekly structures in seconds. 1:1 templates, sprint ceremony templates, and custom weekly patterns — created once, applied forever.',
  alternates: { canonical: '/calendar-templates' },
  openGraph: {
    title: 'Calendar templates',
    description: 'Set up your week in under 2 minutes.',
    url: '/calendar-templates',
    type: 'website',
  },
}

const TEMPLATE_TYPES = [
  {
    name: 'Engineering manager week',
    events: ['Daily standup: 9am weekdays, 15 min', '1:1s: rotating team members, 30 min', 'Engineering review: Thursday 3pm, 60 min', 'Focus block: Tue + Thu morning, 2h'],
    time: '45 seconds',
  },
  {
    name: 'Founder week',
    events: ['Daily Brief review: 8am weekdays, 10 min', 'Investor calls: Tuesday afternoon block', 'Customer interviews: Wed 10am–12pm', 'Deep work: Mon + Fri morning, 3h'],
    time: '30 seconds',
  },
  {
    name: 'Freelancer week',
    events: ['Client work blocks: Mon + Wed + Thu, morning', 'Admin + invoicing: Friday 2–4pm', 'Business dev: Tuesday afternoon', 'Buffer: Friday afternoon (unblocked)'],
    time: '35 seconds',
  },
  {
    name: 'Student semester',
    events: ['Lectures: from timetable PDF', 'Weekly review: Sunday 6pm, 30 min', 'Study blocks: daily 7–9pm', 'Assignment due dates: from course outline'],
    time: '2 minutes (with photo snap)',
  },
]

const TEMPLATE_FEATURES = [
  'Create templates from any set of existing events — select events, save as template',
  'Apply a template to any future week with one action',
  'Templates carry event type (meeting, focus, task), duration, and recurrence pattern',
  'Share templates with your team (Pro/Team plan)',
  'Natural language template creation: "create a template with standup at 9am and 1:1 on Tuesday and Thursday"',
]

export default function CalendarTemplatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar templates"
        title={
          <>
            Your ideal week.
            <br />
            <em className="not-italic text-gold">Applied in seconds.</em>
          </>
        }
        lede="You know what your ideal week looks like. Templates let you describe it once — AI parses all the events — and apply it any time your week needs a reset."
        crumbs={[{ label: 'Templates' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Browse templates <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Start free
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Templates library on Pro</p>
      </PageHero>

      {/* Template examples */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Template examples</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Ready-to-apply weekly structures.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {TEMPLATE_TYPES.map((tmpl, i) => (
              <Reveal key={tmpl.name} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-foreground">{tmpl.name}</h3>
                    <span className="text-[9px] font-mono text-gold/60 bg-gold/5 border border-gold/10 rounded-full px-2 py-0.5">Setup: {tmpl.time}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {tmpl.events.map((ev) => (
                      <li key={ev} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 text-gold/60 shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">{ev}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Template features */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How templates work</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Everything templates can do.</h2>
          </Reveal>
          <div className="space-y-2">
            {TEMPLATE_FEATURES.map((f, i) => (
              <Reveal key={f} delay={i * 35}>
                <div className="flex items-start gap-3 rounded-xl border border-border/40 p-3.5">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/85">{f}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Essay */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-4">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              The week you meant to have vs. the week you got.
            </h2>
          </Reveal>
          <div className="space-y-4 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                Most people have a clear mental model of what their ideal week looks like: focused mornings, some collaborative time in the afternoon, protected time for learning or strategic thinking. The calendar they end up with is often the opposite: scattered mornings full of ad-hoc requests, focus time that never materializes.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Templates flip the default. Instead of building your week reactively — filling open slots as requests arrive — you install a structure first. Meeting requests fill in around the structure rather than instead of it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="Build your ideal week once. Apply it any time."
        subtitle="Templates, AI input, and focus mode. Free trial."
        primary={{ label: 'Browse templates', href: '/templates' }}
        secondary={{ label: 'Start free', href: '/login' }}
      />
    </>
  )
}
