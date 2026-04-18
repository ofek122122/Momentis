import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Target, Clock, BarChart3, Layers, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Skills Development Calendar — How to schedule skill-building sessions that produce real capability',
  description:
    'Skills development without a calendar produces intermittent practice that never accumulates into capability. A skills development calendar schedules deliberate practice sessions at the frequency required for skill acquisition, tracks progress toward specific competency milestones, and prevents practice gaps that reset progress.',
  alternates: { canonical: '/skills-development-calendar' },
  openGraph: {
    title: 'Skills Development Calendar — Momenties',
    description: 'Schedule deliberate practice sessions that compound into real skill.',
    url: '/skills-development-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Target,
    title: 'Practice frequency matched to skill acquisition research',
    desc: 'Skill acquisition requires practice frequency, not just total hours. "One 3-hour session per week" produces less skill acquisition than "three 1-hour sessions per week" for the same total time. Distributed practice with spaced repetition is what converts practice into durable capability. A skills calendar places practice sessions at the frequency the skill requires — not the frequency that is merely convenient.',
  },
  {
    icon: Clock,
    title: 'Deliberate practice blocks separated from passive consumption',
    desc: '"Deliberate practice — [skill], tuesday 6am, 45 minutes." Not watching videos about the skill — actively practicing the skill with full concentration. Passive consumption (reading, watching) and active practice (doing, producing) require different calendar blocks. Practice blocks are more cognitively expensive than learning blocks and should be placed at peak cognitive hours.',
  },
  {
    icon: BarChart3,
    title: 'Competency milestone tracking across the skill ladder',
    desc: 'Skill development without milestones is invisible — practitioners accumulate hours without knowing where they are on the competency ladder. "Milestone: [specific capability demonstration] by [date]." Milestones make progress observable and create a feedback loop. When a milestone is missed, the practice plan is adjusted. When a milestone is hit ahead of schedule, the target is raised.',
  },
  {
    icon: Layers,
    title: 'Skills portfolio balanced across professional needs',
    desc: '"Core skill deepening — 3 hours/week." "Adjacent skill development — 2 hours/week." "Emerging skill exploration — 1 hour/week." Skills portfolio balance prevents over-investment in skills already at competency and under-investment in skills needed for the next career step. Calendar analytics shows where practice hours are going — core depth vs. breadth vs. exploration.',
  },
]

const SKILLS_STEPS = [
  {
    step: 'Define the target skill and competency level',
    detail: '"Skill: Python data analysis. Target: able to build complete data pipelines from raw data to visualization without reference. Timeline: 6 months." Skill outcomes stated as behavioral competencies, not time targets. "Complete 40 hours of practice" is a time target. "Build a complete end-to-end analysis without reference" is a competency target. Competency targets are what drive actual capability.',
  },
  {
    step: 'Establish the minimum practice frequency for the skill',
    detail: '"Python: 4 sessions per week minimum. Language learning: daily or near-daily. Instrument: 5 days per week minimum." Minimum frequency is determined by the forgetting curve for that skill type. Motor skills and language degrade faster than analytical skills. Identify the minimum frequency below which practice sessions stop accumulating — and schedule above that minimum.',
  },
  {
    step: 'Place recurring practice sessions at peak cognitive hours',
    detail: '"Deliberate practice — 6:00am, 45 minutes, Mon/Tue/Thu/Fri." Placed as recurring events at the time of day when concentration is highest. Practice at peak cognitive hours produces more learning per session than practice at low-energy times. The session length should be sustainable daily — 45 minutes of focused practice beats 2 hours of distracted practice.',
  },
  {
    step: 'Set monthly competency checkpoints',
    detail: '"Month 1 checkpoint: [specific skill demonstration] — date." Checkpoints placed at the start of the skill development calendar. At each checkpoint: can I demonstrate the target capability at this stage? If yes, advance. If no, diagnose: not enough practice frequency, wrong type of practice, insufficient feedback loop. The checkpoint converts practice into measured progress.',
  },
  {
    step: 'Schedule deliberate difficulty increases',
    detail: '"Week 3: introduce [harder constraint]." "Month 2: practice without scaffold." "Month 3: real-world application." Deliberate difficulty increases placed on the calendar before the skill becomes too comfortable. Skills plateau when practice becomes easy. The calendar enforces difficulty escalation that challenges practitioners to stay in the productive discomfort zone.',
  },
  {
    step: 'Conduct a quarterly skills portfolio review',
    detail: '"Quarterly skills review — 45 minutes, march 31." Which skills are at target competency? Which are progressing as expected? Which are stalled? Which are atrophying from neglect? Quarterly review is where the skills portfolio is rebalanced. Skills at competency receive maintenance-level practice; developing skills receive full-intensity practice.',
  },
]

const SKILLS_FAILURES = [
  { failure: 'Practice sessions scheduled at low-energy times', consequence: 'End-of-day practice competes with fatigue. Sessions are shortened or skipped consistently. The same practice total produces less skill acquisition because concentration is degraded. High-skill development requires peak cognitive hours.' },
  { failure: 'No minimum practice frequency maintained', consequence: 'Two sessions in week 1, one in week 2, zero in week 3. The forgetting curve resets progress below the minimum accumulation threshold. Skills that require daily or near-daily practice do not accumulate when practiced twice per week.' },
  { failure: 'Passive consumption counted as practice', consequence: 'Watching 10 hours of tutorials produces a confident feeling of learning without producing capability. Tutorial consumption is preparation for practice, not practice itself. Skills require the discomfort of attempting the skill independently.' },
  { failure: 'No competency checkpoints — only time tracking', consequence: 'Forty hours of practice over 3 months with no competency checkpoints. At the end: unclear whether capability was acquired or time was accumulated. Without checkpoints, it is impossible to know whether the practice design is working.' },
]

export default function SkillsDevelopmentCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Skills Development Calendar"
        title={
          <>
            Practice scheduled. Capability built.
            <br />
            <em className="not-italic text-gold">Progress visible at every milestone.</em>
          </>
        }
        lede="Skills development without a calendar produces intermittent practice that never accumulates into capability. A skills development calendar schedules deliberate practice at the frequency required for the skill, places competency checkpoints before plateaus set in, and enforces difficulty escalation — so practice hours compound into real capability rather than accumulated time with no measurable outcome."
        crumbs={[{ label: 'Skills Development Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/personal-development-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Personal development calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures skill acquisition practice.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a skills development calendar that produces capability.</h2>
          </Reveal>
          <div className="space-y-3">
            {SKILLS_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four skills calendar patterns that produce accumulated hours without capability.</h2>
          </Reveal>
          <div className="space-y-3">
            {SKILLS_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Skills analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for skill acquisition effectiveness.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Practice sessions per week by skill',
                'Practice frequency vs. minimum required frequency',
                'Competency milestone completion rate and timing',
                'Practice session completion rate at scheduled times',
                'Skills portfolio hour distribution by category',
                'Difficulty escalation schedule adherence',
                'Practice vs. passive consumption ratio',
                'Quarterly skills portfolio review completion',
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
        title="Practice scheduled. Capability built."
        subtitle="Deliberate practice calendar, competency milestone tracking, and skills portfolio analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Personal development calendar', href: '/personal-development-calendar' }}
      />
    </>
  )
}
