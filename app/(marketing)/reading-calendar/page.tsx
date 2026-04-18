import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BookOpen, Clock, BarChart3, Target, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Reading Calendar — How to schedule reading time and actually finish books',
  description:
    'Most people fail to finish books not because they lack interest but because reading time is never scheduled — it exists in the gaps between other commitments. A reading calendar schedules daily reading sessions as fixed appointments, sets realistic finish dates, and tracks reading pace against goals.',
  alternates: { canonical: '/reading-calendar' },
  openGraph: {
    title: 'Reading Calendar — Momenties',
    description: 'Schedule reading sessions, track pace, and finish your reading list.',
    url: '/reading-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: BookOpen,
    title: 'Reading sessions as fixed calendar appointments',
    desc: 'Reading "when there is time" produces zero books finished. Time never appears — it fills with other work. "Reading — 6:45am, 30 minutes, every weekday" placed as a non-negotiable recurring event on the calendar. The session is an appointment with yourself. It does not move for low-priority interruptions. Thirty minutes daily produces roughly 15 books per year at average reading pace.',
  },
  {
    icon: Clock,
    title: 'Finish date calculated from reading pace',
    desc: '"Book: [title] — 320 pages, 30 min/day at 25 pages/hour → 2.5 hours → finish in 5 weeks." Finish dates calculated from actual reading pace, not aspirational pace. When a book takes longer than expected, the next book\'s start date adjusts automatically. No reading queue that never advances because estimates were unrealistic from the start.',
  },
  {
    icon: BarChart3,
    title: 'Reading goal analytics',
    desc: 'Readers who set annual book goals without calendar analytics rarely know their current pace until December reveals the gap. Analytics shows: books completed this year, current reading pace in pages per week, projected books completed at current pace, and whether the pace supports the annual goal. Course correction happens in February, not in December.',
  },
  {
    icon: Target,
    title: 'Reading list planned and sequenced',
    desc: '"Q1: management and strategy." "Q2: technical depth." "Q3: history and biography." "Q4: fiction." Thematic reading sequencing ensures professional reading is balanced with personal interest. Books relevant to current projects front-loaded in the queue. Conference and professional CE reading placed before relevant events.',
  },
]

const READING_STEPS = [
  {
    step: 'Set the daily reading session as a recurring calendar event',
    detail: '"Reading — 6:45am, 30 minutes, Mon-Fri." Non-negotiable. Place it for the time of day when attention is highest and interruption risk is lowest. Morning reading is more likely to be protected than evening reading, which competes with family time and fatigue. Duration: 25–45 minutes. Less than 25 minutes is difficult to get traction; more than 45 minutes is hard to sustain daily.',
  },
  {
    step: 'Calculate the finish date for the current book',
    detail: 'Pages remaining ÷ pages per 30-minute session = sessions remaining. Sessions remaining ÷ sessions per week = weeks to finish. "Currently reading: [title], 180 pages remaining, 15 pages per session, 5 sessions/week → 12 sessions → 2.4 weeks → finish by [date]." Place the projected finish date on the calendar as a milestone.',
  },
  {
    step: 'Queue the next 3 books in order',
    detail: '"Next: [book 1] → then: [book 2] → then: [book 3]." Queueing eliminates the "what do I read next" decision cost. Each book in the queue has an estimated start date based on the current book\'s finish date. Decision fatigue about what to read next is eliminated months in advance.',
  },
  {
    step: 'Place thematic reading blocks by quarter',
    detail: '"Q1 reading theme: [topic area]." Annual reading plan allocates quarters to categories: professional development, technical skills, biography, fiction. Prevents the reading list from becoming 100% work-related or 100% escapist. Quarterly themes placed as calendar periods in January.',
  },
  {
    step: 'Set a mid-month reading pace check',
    detail: '"Reading pace check — 15th of each month, 5 minutes." Count pages read since last check-in. Divide by days. Compare to target pace. If behind, identify why: sessions missed, pace slower than estimated, life events. Adjust finish dates and queue accordingly. The pace check converts intention into measurement.',
  },
  {
    step: 'Conduct an annual reading review',
    detail: '"Annual reading review — december, 30 minutes." Books completed, topics covered, which books had the most impact. Identify gaps: what categories were under-read? What professional topics were neglected? Next year\'s reading queue seeded from this review. Annual reading becomes intentional professional development, not random selection.',
  },
]

const READING_FAILURES = [
  { failure: 'No fixed reading time, reading "when there is time"', consequence: 'There is never time. Every committed hour is scheduled by something else. Reading remains aspirational — a goal repeated in January and abandoned by March.' },
  { failure: 'Reading session placed at end of day', consequence: 'Evening reading time is the first casualty of a hard day. Work runs long, family demands arrive, and the reading session is consistently pushed out. Morning reading is far more reliable than evening reading for high-commitment individuals.' },
  { failure: 'Book too ambitious for current capacity', consequence: 'A 600-page technical book scheduled at 20 minutes per day takes 60 sessions to finish. At 5 sessions per week, that\'s 3 months. The queue stalls. Motivation decays. The book is abandoned. Match book length and density to current pace and available sessions per week.' },
  { failure: 'Reading list exists, reading calendar does not', consequence: 'A list of books is not a reading schedule. Without calendar placement, the reading list is decoration. Books remain on the list for years without progress.' },
]

export default function ReadingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Reading Calendar"
        title={
          <>
            Reading sessions scheduled.
            <br />
            <em className="not-italic text-gold">Books actually finished.</em>
          </>
        }
        lede="Most reading lists fail not because the books aren't worth reading but because reading time is never scheduled — it lives in the gaps between other commitments that never open. A reading calendar schedules daily reading as fixed appointments, calculates finish dates from actual pace, and tracks annual reading progress against goals so course correction happens in February, not December."
        crumbs={[{ label: 'Reading Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/habit-stacking-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Habit stacking calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties supports consistent reading habits.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Six steps</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a reading calendar that produces finished books.</h2>
          </Reveal>
          <div className="space-y-3">
            {READING_STEPS.map((item, i) => (
              <Reveal key={item.step} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-6 shrink-0 pt-0.5 text-center">{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">{item.step}</p>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Common failures</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four reading calendar patterns that produce unfinished books.</h2>
          </Reveal>
          <div className="space-y-3">
            {READING_FAILURES.map((item, i) => (
              <Reveal key={item.failure} delay={i * 40}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <h3 className="text-sm font-medium text-foreground mb-1">{item.failure}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.consequence}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Reading analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for reading goal completion.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Books completed year-to-date vs. annual goal',
                'Current reading pace in pages per week',
                'Projected finish date for current book',
                'Reading session completion rate',
                'Reading category distribution by quarter',
                'Average days per book — tracked vs. estimated',
                'Reading queue depth and projected completion dates',
                'Annual reading review preparation',
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
        title="Reading sessions scheduled. Books actually finished."
        subtitle="Daily reading time protected, finish dates calculated from pace, and annual reading progress tracked. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Habit stacking calendar', href: '/habit-stacking-calendar' }}
      />
    </>
  )
}
