import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Side Project Calendar — how to make progress on a side project when you have a full-time job',
  description:
    'A side project without a calendar structure moves only when motivation is high. This guide covers the protected weekly side project block, the 90-minute minimum viable session, how to handle the three phases of a side project on a calendar, and the monthly decision rule that prevents side projects from becoming permanent background guilt.',
  alternates: { canonical: '/side-project-calendar' },
  openGraph: {
    title: 'Side Project Calendar',
    description: 'Make progress on a side project when you have a full-time job.',
    url: '/side-project-calendar',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: 'A side project moves in protected blocks — not in found time',
    desc: 'Side projects that depend on found time — evenings when you happen to be energized, weekends when nothing else comes up — fail because found time is competed for by rest, social obligations, and recovery from the full-time job. A side project that moves forward requires a protected weekly block that is not negotiable. The block does not have to be large. A consistent 90-minute block every Saturday morning produces more progress over six months than irregular 4-hour sessions that happen when motivation peaks.',
  },
  {
    icon: Clock,
    title: 'The 90-minute minimum viable session — not shorter, not always longer',
    desc: 'Side project sessions shorter than 90 minutes rarely produce deep work. The first 20-30 minutes of any focused session is context reloading — remembering where you left off, reviewing decisions, re-entering the problem. Sessions under 90 minutes are mostly context reloading with a small amount of actual work. Sessions over 3 hours deplete energy reserves that belong to recovery from the full-time job. The 90-minute protected block is the minimum viable unit of side project work. Use it every week before deciding whether to extend.',
  },
  {
    icon: BarChart3,
    title: 'Three phases require different calendar structures: exploration, build, launch',
    desc: 'Exploration phase (weeks 1-4): 90 minutes per week, unstructured. No deliverables. Goal is to assess whether the problem is worth building for. Output: a written decision document at week 4 — build or abandon. Build phase: 90-180 minutes per week, structured deliverables. Weekly milestone on calendar. Monthly ship checkpoint. Launch phase: 180 minutes per week for 4 weeks, with a hard launch date placed on the calendar before the build phase ends. Moving between phases without updating the calendar structure produces confusion about whether the project is in exploration, build, or avoidance.',
  },
  {
    icon: Users,
    title: 'The monthly decision rule prevents permanent background guilt',
    desc: 'A side project that sits incomplete is not neutral — it accumulates psychological debt as permanent background guilt. The monthly decision rule: at the end of every month, decide: active (continuing with the current calendar structure), paused (explicitly paused until a specific date — this date is on the calendar), or abandoned (removed from the calendar). There is no default state. A project that is neither advancing nor explicitly paused is abandoned by inaction, which is the worst outcome — it produces guilt without producing a decision.',
  },
]

const CALENDAR_RHYTHM = [
  { time: 'Week 0', action: 'Before starting: place the protected 90-minute block on the calendar permanently. Saturday 9-10:30 AM, or whichever time slot has the lowest conflict probability. This block is booked before week 1 begins. Decide the phase: is this an exploration (4-week evaluation) or a continuation of an existing project? Set the phase explicitly in the calendar event title. "Side project — exploration phase." The phase label prevents confusion about what success looks like in a given session.' },
  { time: 'Exploration', action: 'Weeks 1-4: 90-minute session per week, no deliverables. Goal: determine if the problem is worth solving. Week 1: understand the problem. Week 2: look at what exists. Week 3: sketch the simplest possible solution. Week 4: write the decision document — build or abandon — in 500 words or fewer. Decision document placed as a calendar event on the last day of week 4. No exploration phase extends beyond 4 weeks without a written decision. If you can\'t decide at week 4, the answer is no.' },
  { time: 'Build phase', action: 'Place a monthly ship checkpoint before the build phase starts — not when you are already behind. Ship checkpoint: what will be demonstrably different from last month? The monthly ship checkpoint is a calendar event, not a mental note. Weekly milestone placed at the start of each week based on the monthly checkpoint target. Missing two consecutive weekly milestones triggers a scope review — the monthly checkpoint is too ambitious. Reduce the monthly target, not the weekly cadence.' },
  { time: 'Launch prep', action: 'Four weeks before launch: place the hard launch date on the calendar before the pre-launch work begins. The launch date is not moved after it is set. Launch prep blocks: week 1 final feature freeze, week 2 QA and bug fix, week 3 launch assets (copy, screenshots, landing page), week 4 distribution plan and announcement draft. Launch without a hard date produces indefinite "almost ready" status — the most common cause of side project abandonment after the build is substantially complete.' },
  { time: 'Monthly review', action: 'Last day of every month: 15-minute side project review. Three questions: (1) Did the project move forward this month? (2) What is the decision — active, paused, or abandoned? (3) If active, what is the month\'s goal? If paused, what is the resume date? The resume date is placed on the calendar immediately. If the project is abandoned, remove all side project calendar blocks and close the project explicitly. An explicit abandonment is not failure — it is a decision that frees the calendar for something worth building.' },
  { time: 'When life disrupts', action: 'When the full-time job demands temporarily displace the side project block: do not delete the block. Move it to a different day in the same week if possible. If the entire week is lost, the block runs the following week with no make-up for the missed week. The rule is weekly cadence maintenance, not weekly hour count. A project that runs 48 out of 52 weeks is a project that ships. A project that tries to make up missed weeks produces overload that causes longer abandonment.' },
  { time: 'Shipping', action: 'The first ship is not the finished product. The first ship is the minimum viable version that can be used by someone other than you. Place the first ship date before the build phase begins. The build phase ends when the first ship date arrives — not when the product is perfect. Post-ship: two-week feedback collection period, then a decision: iterate (extend the build phase), pivot (return to exploration phase with new information), or sunset (planned wind-down over 4 weeks). Each of these is a calendar event, not a mental state.' },
]

export default function SideProjectCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Side Project Calendar"
        title={
          <>
            90-minute blocks. Hard launch date. Monthly decision rule.
            <br />
            <em className="not-italic text-gold">Side projects move in protected time — not found time.</em>
          </>
        }
        lede="A side project that depends on found time moves only when motivation is high. A side project with a protected weekly block, a defined phase structure, a hard launch date placed before the build ends, and a monthly decision rule — active, paused, or abandoned — moves forward regardless of motivation. The calendar provides the structure that willpower cannot. Momenties builds the side project calendar structure so the work happens consistently."
        crumbs={[{ label: 'Side Project Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/product-launch-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Launch planning
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card required</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Side project calendar principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four design principles for a side project calendar that produces consistent forward movement.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <p.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Side project calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Phase-by-phase calendar structure from exploration through ship, with the monthly decision rule running throughout.</h2>
          </Reveal>
          <div className="space-y-3">
            {CALENDAR_RHYTHM.map((step, i) => (
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

      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I had three side projects in various states of incompleteness for two years. None of them moved because they all depended on found time and none of them had a structure that forced a decision. The monthly decision rule was the most important change. Explicitly deciding that project B was paused until the new year — and putting the resume date on the calendar — made it stop being background guilt and start being a future commitment. It didn&apos;t abandon the project. It just took it off the active worry list. The 90-minute protected block for project A produced the first ship in 14 weeks of consistent weekly sessions. Consistent over inspired.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">P</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Patrick H.</div>
                  <div className="text-xs text-muted-foreground">Senior engineer, shipped two side projects in the last 18 months</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the side project calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every element of the side project calendar structure from week 0 through ship.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Protected 90-minute weekly block — placed before week 1 begins, not negotiable',
                'Phase label on every session — exploration, build, or launch prep',
                'Week 4 exploration decision document — build or abandon, 500 words or fewer',
                'Monthly ship checkpoint — specific deliverable, placed before build phase starts',
                'Hard launch date — placed before build phase ends, not moved after set',
                'Monthly decision event — active, paused (with resume date), or abandoned',
                'Post-ship 2-week feedback period — iterate, pivot, or sunset decision follows',
                'Weekly milestone at start of each week based on monthly checkpoint',
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
        title="Side projects move in protected time — not found time."
        subtitle="90-minute weekly block, phase structure, hard launch date before the build ends, and monthly active/paused/abandoned decision rule. Consistent over inspired. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Product launch calendar', href: '/product-launch-calendar' }}
      />
    </>
  )
}
