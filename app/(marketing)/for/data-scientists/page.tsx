import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, BarChart3, Clock, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Data Scientists — Deep analysis time, experiment deadlines, and stakeholder reviews',
  description:
    'Data scientists need long uninterrupted blocks for analysis and modeling, clear experiment deadlines, and regular stakeholder syncs. Momenties protects deep analysis time, tracks project milestones, and shows where hours actually go across projects.',
  alternates: { canonical: '/for/data-scientists' },
  openGraph: {
    title: 'Momenties for Data Scientists',
    description: 'Deep analysis time, experiment deadlines, and project analytics for data scientists.',
    url: '/for/data-scientists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'Deep analysis blocks protected',
    desc: 'Exploratory analysis and model development require 3–4 hour uninterrupted sessions. Block deep work before standup, review calls, and Slack fill the calendar. "Analysis block — churn model, tuesday 9am-noon." Protected before the sprint starts.',
  },
  {
    icon: Clock,
    title: 'Experiment and milestone deadlines',
    desc: '"A/B test results review — revenue model, thursday." "Model v2 deadline — recommendation engine, sprint end friday." "Stakeholder presentation — Q2 analysis, march 15." Every experiment milestone on calendar before it becomes urgent.',
  },
  {
    icon: BarChart3,
    title: 'Time per project analytics',
    desc: 'Tag every analysis session, model training run review, and stakeholder meeting by project. Analytics shows hours invested. Which projects are consuming disproportionate time? Where is depth getting fragmented by meetings?',
  },
  {
    icon: Users,
    title: 'Stakeholder review scheduling',
    desc: '"Results walkthrough — marketing team, tuesday 2pm 45 mins." "Model review — product, thursday 11am." Stakeholder syncs added voice-first while the analysis is still running. Never let a ready result wait for a meeting.',
  },
]

const DS_WORKFLOW = [
  { time: 'Sprint start', action: 'Block all deep analysis sessions for the week before Monday standup adds noise. 3 blocks of 3 hours each. Calendar signals unavailability. Colleagues book around it.' },
  { time: 'Analysis', action: '"Deep work — feature engineering, tuesday 9am-noon." EDA runs, model iterations, documentation. Four uninterrupted hours produces more than a day of fragmented work.' },
  { time: 'Experiment review', action: '"A/B results review — pricing experiment, wednesday 2pm." Blocked immediately when the test window closes. Stakeholders notified. No results sitting in a notebook for three weeks.' },
  { time: 'Stakeholder sync', action: '"Results walkthrough — exec team, thursday 10am 30 mins." Deck prep block 45 mins before. Findings land while they\'re still relevant.' },
  { time: 'Sprint retro', action: 'Analytics: deep work hours vs. meeting hours this sprint. Which projects got most attention? Are the right experiments getting the most time?' },
]

export default function ForDataScientistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Data Scientists"
        title={
          <>
            Deep analysis protected.
            <br />
            <em className="not-italic text-gold">Experiments on schedule.</em>
          </>
        }
        lede="Data scientists need long uninterrupted blocks for modeling and analysis, clear deadlines for experiments and deliverables, and regular stakeholder syncs. Momenties blocks deep analysis time before meetings fill the sprint, tracks every experiment milestone, and shows where your hours actually go."
        crumbs={[{ label: 'For Data Scientists' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/deep-work"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Deep work guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No data shared with AI beyond scheduling</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How data scientists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for analytical work.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {USE_CASES.map((uc, i) => (
              <Reveal key={uc.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <uc.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{uc.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Sprint rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A data scientist&apos;s week with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {DS_WORKFLOW.map((step, i) => (
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
                &ldquo;I was shocked to see that out of 40 working hours per week, only 9 were actual deep analysis. The rest was meetings, reviews, Slack, and coordination. I blocked 3 mornings per week as hard analysis time and told my manager. Within a month I shipped 3x more than the prior quarter.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">P</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Priya K.</div>
                  <div className="text-xs text-muted-foreground">Senior data scientist, fintech</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What data scientists track</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Your analytical work in numbers.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Deep analysis hours per week',
                'Meeting load vs. analytical work ratio',
                'Time per project and per experiment',
                'Stakeholder sync frequency',
                'Deep work fragmentation (blocks interrupted)',
                'Deadline adherence for experiment milestones',
                'Sprint velocity in deep work hours',
                'Energy-aligned scheduling (AM depth, PM meetings)',
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
        title="Deep analysis protected. Experiments on schedule."
        subtitle="Analysis time blocking, experiment milestone tracking, and sprint analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Deep work guide', href: '/deep-work' }}
      />
    </>
  )
}
