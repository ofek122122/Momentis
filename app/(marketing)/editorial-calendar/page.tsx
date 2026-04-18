import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, Clock, BarChart3, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Editorial Calendar — How to plan and publish content consistently without burning out',
  description:
    'An editorial calendar transforms content production from reactive scrambling into a planned, sustainable publishing rhythm. Here\'s how to build an editorial calendar that protects writing time, manages publication deadlines, and keeps content output consistent across channels.',
  alternates: { canonical: '/editorial-calendar' },
  openGraph: {
    title: 'Editorial Calendar — Momenties',
    description: 'Plan and publish content consistently with an editorial calendar that protects writing time.',
    url: '/editorial-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Calendar,
    title: 'Publication dates as hard deadlines',
    desc: 'An editorial calendar is not a list of ideas — it\'s a schedule of publication commitments. "Newsletter — every tuesday 8am." "Blog post — first thursday of month." "Podcast episode — biweekly wednesday." Each publication date is a deadline with upstream writing and editing milestones placed on the calendar behind it. Publication becomes predictable.',
  },
  {
    icon: Clock,
    title: 'Writing blocks placed before content is assigned',
    desc: 'Content that doesn\'t have calendar time doesn\'t get written. For each publication, a writing block must precede the deadline: "Blog post draft — monday 9-11am" placed two days before "Blog post edits — wednesday 1-2pm" placed one day before publication. The production chain is on the calendar, not just the deadline.',
  },
  {
    icon: BarChart3,
    title: 'Content output analytics by channel',
    desc: 'Tag calendar events by content channel: blog, newsletter, social, podcast, video. Analytics shows output per channel per month. Which channels received writing time? Which were inconsistent? Content output data surfaces the gap between the editorial plan and what was actually produced.',
  },
  {
    icon: Zap,
    title: 'Idea capture without disrupting production',
    desc: 'New content ideas arrive during writing sessions, meetings, and research. Without a system, capturing ideas disrupts the current production block. A recurring "editorial planning — friday 30min" slot handles all idea capture, backlog grooming, and next-month scheduling in one focused session rather than scattered interruptions.',
  },
]

const EDITORIAL_STRUCTURE = [
  {
    element: 'Monthly planning session',
    detail: 'First Monday of each month, 60 minutes: select upcoming month\'s topics, assign publication dates, place writing and editing blocks on the calendar. Output: every planned piece for the month has writing time reserved before anyone else claims those slots.',
  },
  {
    element: 'Writing block per piece',
    detail: '"Draft: [title] — [day], 9-11am." One writing block per piece, placed 3-5 days before publication. Single-task focus: the draft exists as a goal. The block ends when the draft is complete, not when the timer stops.',
  },
  {
    element: 'Editing block per piece',
    detail: '"Edit: [title] — [day], 1-2pm." One editing block per piece, placed 1-2 days before publication. Editing and writing are separate cognitive modes — same-day drafting and editing produces weaker output than sleeping on a draft.',
  },
  {
    element: 'Publication block',
    detail: '"Publish: [title] — [publication date], 30min." The final production step: formatting, metadata, publishing, promotion. Treating publication as a calendar event prevents the "I\'ll publish it tomorrow" delay that kills publication consistency.',
  },
  {
    element: 'Weekly editorial review',
    detail: '"Editorial review — friday 30min." One weekly session: confirm next week\'s writing and editing blocks are on schedule, capture ideas into the backlog, check analytics on current week\'s output, adjust the following week\'s plan if anything shifted.',
  },
]

const CONTENT_TYPES = [
  { type: 'Newsletter', cadence: 'Weekly or biweekly. 3 days lead time: outline monday, draft tuesday, edit and send wednesday. Consistent cadence builds subscriber expectations that drive open rates.' },
  { type: 'Long-form blog', cadence: 'Monthly or biweekly. 5 days lead time: research block, writing block (2 hours), editing block, publish. Longer pieces need distributed production over multiple days.' },
  { type: 'Social content', cadence: 'Daily or 3x weekly. Batched production: one 90-minute session produces a week\'s worth of posts. Batch day scheduled on the calendar prevents daily reactive scrambling.' },
  { type: 'Podcast episode', cadence: 'Weekly or biweekly. Recording block, editing block (or editor turnaround), publish block. 7-10 days production lead time on a stable weekly schedule.' },
  { type: 'Video content', cadence: 'Weekly or monthly. Longest production lead time: scripting block, recording block, editing (days), publish. Monthly video on a fixed date is more sustainable than weekly.' },
  { type: 'Case study', cadence: 'Monthly or quarterly. Research, interview, writing (3 hours), editing, publish. Project-managed as a multi-week production rather than a single writing session.' },
]

export default function EditorialCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Editorial Calendar"
        title={
          <>
            Content planned.
            <br />
            <em className="not-italic text-gold">Published consistently.</em>
          </>
        }
        lede="Content creators who don't have an editorial calendar produce content reactively — scrambling for topics, missing publication dates, publishing in bursts followed by silence. An editorial calendar turns content production into a predictable, sustainable operation: topics selected in advance, writing time reserved before anyone else claims it, publication dates treated as real deadlines. Here's how to build an editorial calendar that actually gets used."
        crumbs={[{ label: 'Editorial Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/deep-work-schedule"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Deep work schedule
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties supports editorial calendar discipline.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Production structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Five calendar elements that make content production reliable.</h2>
          </Reveal>
          <div className="space-y-3">
            {EDITORIAL_STRUCTURE.map((item, i) => (
              <Reveal key={item.element} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-24 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{item.element}</span>
                  <p className="text-sm text-foreground/90">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">By content type</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Editorial calendar structure for different content formats.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {CONTENT_TYPES.map((item, i) => (
              <Reveal key={item.type} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-5 h-full">
                  <h3 className="text-xs font-mono text-gold/70 uppercase tracking-wide mb-2">{item.type}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.cadence}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Editorial analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for content production health.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Content pieces published per month by channel',
                'Writing block completion rate',
                'Average lead time from draft to publish',
                'Publication consistency score by channel',
                'Writing hours per week trend',
                'Editorial planning session completion',
                'Editing block vs. draft block ratio',
                'Monthly output vs. editorial plan target',
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
        title="Content planned. Published consistently."
        subtitle="Publication deadlines, writing and editing blocks, and content output analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Deep work schedule', href: '/deep-work-schedule' }}
      />
    </>
  )
}
