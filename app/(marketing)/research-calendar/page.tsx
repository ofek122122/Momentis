import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Research Calendar — How to structure a research project so deadlines compound instead of colliding',
  description:
    'A research calendar places the literature review window before the research design phase, structures the data collection period with milestone checkpoints, places the analysis phase with buffer before the writing window, and schedules submission deadlines 4 weeks before the journal date — so research projects produce publications instead of abandoned drafts.',
  alternates: { canonical: '/research-calendar' },
  openGraph: {
    title: 'Research Calendar — Momenties',
    description: 'Structure research projects so deadlines compound instead of colliding.',
    url: '/research-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Literature review window placed before research design — not alongside it',
    desc: '"Literature review: weeks 1-4. Research design: weeks 5-8." Literature review placed as a discrete phase with an end date — not as a parallel activity during research design. Research designed without a completed literature review is designed without knowing the existing evidence landscape. Literature reviews that have no end date continue indefinitely because there is always another paper. A literature review phase with a scheduled end date forces a decision: what is the sufficient baseline of evidence to proceed to design?',
  },
  {
    icon: Clock,
    title: 'Data collection milestones placed at enrollment start, not at collection end',
    desc: '"Enrollment target: week 12. Data collection milestone 1: week 16. Data collection milestone 2: week 20. Collection complete: week 24." Data collection milestones placed at enrollment start — not discovered at collection end when enrollment has underperformed. Milestone 1 at week 16 surfaces enrollment pace early enough to adjust recruitment strategy. Milestone 2 at week 20 confirms that collection will complete on schedule. Data collection phases that produce no milestone until the end date are completed either on time or late, with no early warning.',
  },
  {
    icon: BarChart3,
    title: 'Analysis phase placed with 2-week buffer before the writing window opens',
    desc: '"Analysis complete: [collection end + 4 weeks]. Writing window opens: [analysis + 2 weeks]." Analysis placed 4 weeks after data collection ends — not immediately. 4 weeks gives time for data cleaning, preliminary analysis, and unexpected findings that require additional analysis runs. 2-week buffer between analysis complete and writing window opens allows the researcher to sit with the findings before writing. Writing windows that open the day after analysis produces first drafts that describe the analysis rather than the findings.',
  },
  {
    icon: Shield,
    title: 'Submission deadline placed 4 weeks before the journal date, not at it',
    desc: '"Internal submission target: [journal deadline - 4 weeks]. Journal submission: [journal deadline]." Internal submission target placed 4 weeks before the journal deadline. 4-week lead gives time for co-author review, statistical review, and IRB approval confirmation before submission. Manuscripts submitted at the journal deadline with no buffer arrive with unresolved co-author comments or missing supplementary materials. Internal deadline at minus-4 weeks converts the journal deadline from a finish line into a final review gate.',
  },
]

const RESEARCH_STEPS = [
  {
    step: 'Place the literature review phase as a discrete window with an end date',
    detail: '"Literature review: [start] to [start + 4 weeks]." Literature review placed as a phase with a defined end date. End date is not the date the literature is fully understood — it is the date the research question is sufficiently grounded to proceed to design. Literature review without an end date produces an indefinitely expanding list of papers. End date forces a decision about sufficiency. Outcome: research question refined to match the actual gap in the literature, not the original assumption of the gap.',
  },
  {
    step: 'Place the research design phase after literature review completion, not during',
    detail: '"Research design: [literature review end] to [end + 3 weeks]." Research design begins after literature review ends. Design phase: primary outcome measure selection, sample size calculation, data collection instrument design, and IRB submission preparation. Sample size calculation requires knowing the existing effect sizes from the literature — which is why design follows literature review. IRB submission placed at the end of the design phase with IRB review time budgeted into the project timeline before data collection begins.',
  },
  {
    step: 'Place IRB approval wait time as a dedicated project phase',
    detail: '"IRB submission: [design complete]. IRB approval expected: [submission + 6 weeks]. Data collection start: [approval + 1 week]." IRB approval wait time placed as a dedicated 6-week phase — not assumed as instant. IRB review timelines vary by institution and protocol complexity — expedited review typically 2-4 weeks, full board review 4-8 weeks. Data collection start placed 1 week after expected IRB approval — allowing time to finalize data collection instruments, train research staff, and confirm site readiness before enrollment opens.',
  },
  {
    step: 'Place data collection milestones at 25%, 50%, and 75% enrollment targets',
    detail: '"Milestone 1: 25% enrollment — [date]. Milestone 2: 50% enrollment — [date]. Milestone 3: 75% enrollment — [date]. Collection complete: [date]." Enrollment milestones placed at project start — not when enrollment begins to lag. 25% milestone confirms recruitment channels are producing at the projected rate. 50% milestone confirms that full enrollment is on track for the planned collection end date. 75% milestone confirms the final push is achievable. Projects that review enrollment only at the planned end date discover shortfalls too late to extend the timeline or augment recruitment.',
  },
  {
    step: 'Place the analysis phase as a dedicated window with cleaning buffer included',
    detail: '"Data collection complete: [date]. Data cleaning: [complete + 1 week]. Primary analysis: [cleaning + 2 weeks]. Secondary analysis: [primary + 1 week]. Analysis complete: [secondary + 1 week]." Analysis phases placed with explicit cleaning and secondary analysis time. Data cleaning is not analysis — it is a prerequisite that always takes longer than expected. Primary analysis placed after cleaning is confirmed complete. Secondary analysis placed after primary analysis results are reviewed — secondary analysis direction often depends on primary results. Analysis complete date is when the findings are ready to write, not when the first statistical test ran.',
  },
  {
    step: 'Place the writing and submission timeline working backward from the journal deadline',
    detail: '"First draft complete: [journal deadline - 8 weeks]. Co-author review: [draft + 2 weeks]. Revisions complete: [review + 1 week]. Statistical review: [revisions + 1 week]. Internal submission target: [journal deadline - 4 weeks]. Journal submission: [journal deadline]." Writing timeline placed backward from the journal deadline. 8-week writing window for a methods, results, discussion, and abstract. 2-week co-author review window. Revisions take 1 week if the co-author comments are addressed systematically. Statistical review at minus-5 weeks confirms that the statistics section matches the analysis output. Internal submission at minus-4 weeks leaves time for a final read and supplementary material assembly.',
  },
]

const RESEARCH_FAILURES = [
  { failure: 'Literature review has no end date — expands until research design is forced to begin', consequence: 'Literature reviews without end dates continue indefinitely because there is always another relevant paper. The researcher adds a paper, follows its citations, adds those papers, and the review expands. The expansion is not irrational — every additional paper does add context. The problem is that each additional paper delays the research design phase. Research designed with 4 weeks of literature review and research designed with 12 weeks of literature review will be similar in quality. The 8-week difference is research design time that was spent reading. End date creates the sufficiency constraint that forces a transition from reading to designing.' },
  { failure: 'Data collection has no milestone checks — shortfalls discovered at collection end', consequence: 'Data collection phases that produce no review until the planned end date surface shortfalls only when it is too late to address them. A study planned for 120 participants with 6 months of enrollment that reviews enrollment at month 6 discovers shortfalls at month 6 — when the options are to accept an underpowered sample, extend the timeline significantly, or abandon the study. Milestones at 25%, 50%, and 75% enrollment surface the same shortfall at month 1.5 — when recruitment channels can be augmented, eligibility criteria can be reviewed with the IRB, or a timeline extension can be planned without derailing the submission target.' },
  { failure: 'Analysis begins immediately after data collection ends — no cleaning buffer', consequence: 'Data cleaning is not analysis — it is the prerequisite for valid analysis. Data collected over a 6-month enrollment period accumulates entry errors, missing data patterns, and protocol deviations that require systematic review before analysis begins. Analysis run on uncleaned data produces findings that require re-running after the cleaning issues are identified. Re-running analysis after a draft has been written requires revising the methods, results, and discussion. A 1-week data cleaning buffer placed before analysis begins prevents analysis from being run twice on the same dataset.' },
  { failure: 'Manuscript submitted at the journal deadline with no buffer for co-author review', consequence: 'Manuscripts submitted at the journal deadline without a preceding co-author review window arrive at the journal with unresolved questions from co-authors who received the draft the day before submission. Co-authors who receive a manuscript 2 weeks before the internal submission target have time to identify methodological concerns, confirm that the results section matches their understanding of the analysis, and verify that their contribution is accurately represented. Co-authors who receive a draft the day before the journal deadline either approve without reading or generate last-minute changes that cannot be fully incorporated.' },
]

export default function ResearchCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Research Calendar"
        title={
          <>
            Literature review complete before design begins.
            <br />
            <em className="not-italic text-gold">Submission 4 weeks before the journal deadline.</em>
          </>
        }
        lede="Most research projects stall not because the research question was wrong but because the project phases were never calendared — literature review expands without an end date, data collection shortfalls are discovered too late, and manuscripts are submitted at the deadline with no buffer for co-author review. A research calendar places the literature review as a discrete phase with an end date, milestones at 25%, 50%, and 75% enrollment, a data cleaning buffer before analysis begins, and an internal submission target 4 weeks before the journal date — so research projects produce publications instead of abandoned drafts."
        crumbs={[{ label: 'Research Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/doctors"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Momenties for physicians
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures research projects so each phase completes before the next begins.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a research calendar where each phase has an end date and submission is never a surprise.</h2>
          </Reveal>
          <div className="space-y-3">
            {RESEARCH_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four research project patterns that produce interesting questions and unpublished data.</h2>
          </Reveal>
          <div className="space-y-3">
            {RESEARCH_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Research analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for research project discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Literature review phase end date vs. research question finalization',
                'IRB submission date vs. expected approval and collection start',
                'Enrollment milestone completion at 25%, 50%, 75% targets',
                'Data cleaning phase completion before analysis window opens',
                'Analysis complete date vs. writing window start',
                'First draft completion 8+ weeks before journal deadline',
                'Co-author review completion 4+ weeks before submission',
                'Internal submission target vs. journal deadline lead time',
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
        title="Literature review complete before design begins."
        subtitle="Research phase calendar, enrollment milestone tracking, analysis buffer management, and submission deadline discipline. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for physicians', href: '/for/doctors' }}
      />
    </>
  )
}
