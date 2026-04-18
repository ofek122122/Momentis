import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Target, Clock, BarChart3, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'OKR Planning Calendar — How to connect objectives and key results to your calendar',
  description:
    'OKRs that aren\'t on the calendar don\'t get worked on. Here\'s how to translate objectives and key results into calendar blocks, check-ins, and measurable time allocations that make OKR progress visible and consistent through the quarter.',
  alternates: { canonical: '/okr-planning-calendar' },
  openGraph: {
    title: 'OKR Planning Calendar — Momenties',
    description: 'Connect OKRs to your calendar so objectives get worked on instead of just tracked.',
    url: '/okr-planning-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Target,
    title: 'Key results translated to calendar blocks',
    desc: 'An OKR without calendar time is a wish. For each key result, ask: what work must happen weekly to move this metric? That work becomes a recurring calendar block. "Write 2 blog posts per week" becomes two 2-hour writing blocks on the calendar. The key result is measured. The work that drives it is scheduled.',
  },
  {
    icon: Clock,
    title: 'OKR check-in as a fixed recurring event',
    desc: 'Weekly OKR check-in — 15 minutes — as a fixed recurring calendar event. Not a meeting with others, a solo review: update key result progress, identify blockers, adjust the next week\'s focus blocks if needed. The check-in is the mechanism that keeps OKRs alive through the quarter.',
  },
  {
    icon: BarChart3,
    title: 'Time allocation analytics per objective',
    desc: 'Tag calendar blocks by objective. Analytics shows hours per objective per week. Is the time allocation matching the objective\'s stated priority? An objective rated "most important" that receives 2 hours per week while a lesser priority receives 8 is misaligned. Data surfaces the misalignment before the quarter ends.',
  },
  {
    icon: Calendar,
    title: 'Quarterly OKR planning ritual',
    desc: 'One 2-hour block at the start of each quarter: define objectives, set key result metrics, and translate every key result into recurring calendar blocks immediately. OKRs defined without the calendar translation step will not be worked on. The quarterly planning ritual is the calendar design session for the next 12 weeks.',
  },
]

const OKR_CALENDAR_STEPS = [
  {
    step: 'Define the objective clearly',
    detail: 'An objective is a qualitative direction: "establish thought leadership in enterprise security." Not a metric, not a task. One sentence that defines what success looks like qualitatively. The key results measure it.',
  },
  {
    step: 'Set 3 measurable key results',
    detail: 'Key results are numeric: "publish 8 long-form articles," "reach 500 newsletter subscribers," "speak at 2 industry conferences." Each key result must be binary or numeric — you either achieved the number or you didn\'t.',
  },
  {
    step: 'Identify the weekly work each key result requires',
    detail: '"8 articles" requires 2 articles per month requires 2 writing sessions per week. "2 conferences" requires 2 conference applications submitted by March. Translate each key result into a weekly recurring action that compounds toward the goal.',
  },
  {
    step: 'Schedule recurring blocks for each weekly action',
    detail: '"Writing session — monday 9-11am." "Writing session — thursday 9-11am." "Conference research — friday 30min." Recurring blocks placed on the calendar immediately. These blocks are not negotiable — they are the weekly work that produces the key result.',
  },
  {
    step: 'Add weekly 15-minute OKR check-in',
    detail: '"OKR check-in — friday 4pm, 15 minutes." One recurring event. Update key result metrics, review focus block completion, identify blockers. The check-in is the accountability mechanism that prevents OKRs from going stale mid-quarter.',
  },
  {
    step: 'Review at quarter end and set next quarter',
    detail: 'At quarter close: review actual vs. target for each key result, assess time allocation alignment, identify which objectives received calendar time and which didn\'t. Set next quarter\'s OKRs and immediately repeat the calendar translation process.',
  },
]

const OKR_ANTI_PATTERNS = [
  { pattern: 'OKRs defined but not calendared', result: 'Work never starts. Objectives compete with daily reactive tasks and lose. No calendar time means no progress.' },
  { pattern: 'Too many objectives (more than 3)', result: 'Calendar time is diluted across too many priorities. Each objective receives insufficient focused blocks to build momentum.' },
  { pattern: 'Key results that aren\'t numeric', result: '"Improve team communication" cannot be measured at quarter end. Non-numeric key results produce no accountability and no useful analytics.' },
  { pattern: 'No weekly check-in ritual', result: 'OKRs are reviewed at quarter end — too late to course-correct. Weekly check-ins catch trajectory problems in week 3, not week 12.' },
  { pattern: 'Check-in without calendar adjustment', result: 'A check-in that identifies "behind on key result 2" but doesn\'t adjust next week\'s focus blocks is a diagnosis without treatment.' },
]

export default function OkrPlanningCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="OKR Planning Calendar"
        title={
          <>
            OKRs on the calendar.
            <br />
            <em className="not-italic text-gold">Progress that compounds.</em>
          </>
        }
        lede="OKRs set without a calendar translation become intentions. The objective is defined, the key results are written, and then nothing changes on the calendar — so nothing changes in practice. The fix is simple: translate every key result into recurring calendar blocks the same day you define the OKR. Here's how to build an OKR calendar that produces consistent weekly progress instead of quarterly regret."
        crumbs={[{ label: 'OKR Planning Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/goal-setting-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Goal setting calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties connects OKRs to the calendar.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Six-step process</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to translate OKRs into a working calendar.</h2>
          </Reveal>
          <div className="space-y-3">
            {OKR_CALENDAR_STEPS.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Anti-patterns</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Five OKR calendar patterns that produce no progress.</h2>
          </Reveal>
          <div className="space-y-3">
            {OKR_ANTI_PATTERNS.map((item, i) => (
              <Reveal key={item.pattern} delay={i * 40}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <h3 className="text-sm font-medium text-foreground mb-1">{item.pattern}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.result}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">OKR analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for OKR calendar performance.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Hours per objective per week',
                'Focus block completion rate by objective',
                'Time allocation vs. stated objective priority',
                'Weekly check-in completion streak',
                'Objective-tagged time trend by quarter',
                'Key result work blocks scheduled vs. skipped',
                'Deep work hours toward quarterly goals',
                'OKR calendar coverage across all objectives',
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
        title="OKRs on the calendar. Progress that compounds."
        subtitle="Key result focus blocks, weekly check-in ritual, and OKR time allocation analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Goal setting calendar', href: '/goal-setting-calendar' }}
      />
    </>
  )
}
