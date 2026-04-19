import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Annual Review Calendar — how to structure your year-end review and planning process',
  description:
    'An annual review without a calendar structure becomes a vague reflection session. This guide covers when to start the review process, how to separate backward-looking review from forward-looking planning, how to structure the three-day deep work block, and how to set up the planning calendar so January 1 is execution day, not planning day.',
  alternates: { canonical: '/annual-review-calendar' },
  openGraph: {
    title: 'Annual Review Calendar',
    description: 'Structure your year-end review and annual planning process on a calendar.',
    url: '/annual-review-calendar',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: 'Separate review from planning — they require different cognitive modes',
    desc: 'Annual review (backward-looking) and annual planning (forward-looking) are distinct cognitive tasks that should not happen in the same session. Review requires honest appraisal of what happened without the distortion of wanting it to fit a plan. Planning requires creative thinking unconstrained by the past. Mixing them produces neither good retrospective analysis nor good plans — you start defending past decisions when you should be evaluating them. Schedule review as a standalone block ending with a written summary before planning begins.',
  },
  {
    icon: Clock,
    title: 'Start the review process in November, not December',
    desc: 'The last week of December is the worst time to conduct an annual review. You are exhausted, distracted by holidays, and too close to the year to have perspective. The review data-gathering phase — pulling metrics, rereading journal entries, reviewing project retrospectives, gathering feedback — should start in November so the December deep-work review session works with organized material, not raw data. November: gather. December first two weeks: analyze. December third week: plan. January 1: execute.',
  },
  {
    icon: BarChart3,
    title: 'Review categories, not just goals — most important things have no goals attached',
    desc: 'Goal-only annual reviews miss the most important parts of the year. Review eight categories regardless of whether you set explicit goals for them: work/career, finances, health/fitness, relationships, learning/growth, creativity/projects, mental health/wellbeing, and environment/systems. Some categories will have explicit targets. Many will not. The categories without goals often reveal the most — health that degraded because no goal tracked it, a relationship that strengthened without any deliberate effort. Review what happened in each category factually before evaluating.',
  },
  {
    icon: Users,
    title: 'The three-document output: retrospective, insights, commitments',
    desc: 'An annual review produces three documents, not one. Document 1: retrospective — factual account of what happened in each category, with data where available. No evaluation yet. Document 2: insights — patterns across the retrospective, what surprised you, what worked, what failed, and why. Document 3: commitments — specific changes for the coming year based on insights, with success criteria and quarterly checkpoints. The retrospective informs the insights. The insights inform the commitments. Writing all three in the same session corrupts all three.',
  },
]

const CALENDAR_RHYTHM = [
  { time: 'Oct 15', action: 'Annual review prep begins. Set calendar block for November data gathering week. Pull previous year\'s commitments document. Identify which metrics need to be tracked through end of year and where the data lives (health app, finance app, project management tool, journal, email). Create data collection checklist for each review category. Don\'t start reviewing — just set up the process.' },
  { time: 'Nov 1–7', action: 'Data gathering week. Pull all year-to-date data: work output (projects completed, metrics hit, feedback received), financial summary (income, savings rate, major expenses), health data (workout frequency, sleep average, health events), relationship inventory (who did you spend time with, who did you lose touch with), learning log (books read, courses completed, skills developed), project list (completed, abandoned, still running). Compile into a single document. No analysis yet.' },
  { time: 'Dec 1–7', action: 'Retrospective writing week. Three-hour deep work block (minimum). Write factual retrospective for each category using the compiled data. Past tense, descriptive, not evaluative. "I worked out 3x/week January through April, then 1x/week May through September, then 3x/week October through December." Not "I did okay on health." The factual account reveals the patterns. Retrospective is complete when each category has at least 200 words of factual description.' },
  { time: 'Dec 8–14', action: 'Insights session. Two-hour deep work block. Read the retrospective as if written by someone else. Identify: What surprised you? What patterns repeat from prior years? What worked and why? What failed and what was the root cause? What did you say you would do that you didn\'t? What happened that you didn\'t plan for that mattered most? Write insights as hypotheses: "I think my fitness degraded in May because I dropped the morning routine when travel increased." Insights documented, not solved yet.' },
  { time: 'Dec 15–21', action: 'Planning session. Three-hour deep work block. Using insights document: set three-to-five commitments for the coming year, one per priority insight. Each commitment: what changes, how you\'ll know it\'s working (leading indicator), quarterly checkpoints. Plan the calendar — annual priorities mapped to quarters, quarterly themes defined, January first 90 days fully structured. Planning is complete when January is fully calendared and the first quarterly checkpoint is in the calendar.' },
  { time: 'Jan 1', action: 'Execution day, not planning day. The review and planning process is complete. January 1 is the start of the first quarterly execution block. No planning sessions in January. The quarterly checkpoint (not review, just a check: on track or off track?) is scheduled for the end of Q1. The annual review calendar for the following year — data gathering prep — goes on October 15.' },
  { time: 'Quarterly', action: 'End-of-quarter checkpoint: 30 minutes. Three questions only: (1) Which commitments are on track? (2) Which are off track and why? (3) What adjustments to Q2/Q3/Q4 does the off-track status require? This is not a mini-annual-review — it is a course correction. Keep it short. Update the planning document. The quarterly checkpoint is in the calendar before the year starts.' },
]

export default function AnnualReviewCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Annual Review Calendar"
        title={
          <>
            Review backward. Plan forward.
            <br />
            <em className="not-italic text-gold">Three documents. One structured process. January 1 is execution day.</em>
          </>
        }
        lede="An annual review without calendar structure becomes a vague reflection session in the last week of December when you are too tired and too close to the year to think clearly. The review process starts in October with data gathering prep, runs through a November data collection week, and produces three distinct documents — retrospective, insights, commitments — in structured December deep-work sessions. By January 1 the plan is done and the year begins. Momenties structures the entire process."
        crumbs={[{ label: 'Annual Review Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/annual-planning-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Annual planning
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card required</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Annual review principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four design principles for an annual review that produces useful insights and actionable plans.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Annual review calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">The complete annual review timeline from October data prep through January execution start.</h2>
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
                &ldquo;My annual review used to happen on December 30th with a glass of wine and a blank notebook. I would think about the year for a couple of hours, feel vaguely good or bad about things, write down some intentions for next year, and forget about it by January 10th. When I started treating the annual review like a project with a timeline — data gathering in November, retrospective in the first week of December, insights in the second week, planning in the third week — the quality of insights went from surface-level to actually useful. The factual retrospective was the unlock: writing what actually happened before evaluating it revealed patterns I had been rationalizing for years. The insights session produced two commitments that changed the trajectory of my year in ways that the vague December 30th resolutions never did.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">A</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Abigail T.</div>
                  <div className="text-xs text-muted-foreground">Product director, 5 years of structured annual reviews</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the annual review calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every event in the annual review process, from October prep to Q1 checkpoint.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'October 15 — annual review prep: data collection checklist and prior commitments pull',
                'November 1–7 — data gathering week: all category data compiled before analysis begins',
                'December 1–7 — retrospective session: factual account of each category, no evaluation',
                'December 8–14 — insights session: pattern identification and root-cause hypotheses',
                'December 15–21 — planning session: commitments, success criteria, quarterly checkpoints',
                'January 1 — execution day: plan complete, quarterly checkpoint dates in calendar',
                'End of Q1/Q2/Q3 — 30-minute checkpoints: on track, off track, adjustments required',
                'October 15 (next year) — annual review prep scheduled before current year ends',
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
        title="Review backward. Plan forward. Execute from January 1."
        subtitle="Structured annual review calendar with data gathering prep, retrospective sessions, insight analysis, and planning deep-work blocks. January 1 is execution day. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Annual planning', href: '/annual-planning-calendar' }}
      />
    </>
  )
}
