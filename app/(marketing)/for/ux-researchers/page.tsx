import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, BarChart3, Clock, Shield, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for UX Researchers — Interview scheduling, synthesis blocks, and project analytics',
  description:
    'UX researchers coordinate participant interviews, analysis and synthesis sessions, stakeholder readouts, and research sprint deadlines. Momenties schedules research sessions, protects synthesis time, and shows time per project so research gets the investment it needs.',
  alternates: { canonical: '/for/ux-researchers' },
  openGraph: {
    title: 'Momenties for UX Researchers',
    description: 'Interview scheduling, synthesis time protection, and research analytics for UX researchers.',
    url: '/for/ux-researchers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Users,
    title: 'Research session scheduling',
    desc: '"User interview — P1, tuesday 10am 60 mins." "Usability test — mobile flow, wednesday 2pm." "Diary study check-in — P4, thursday 3pm." Every research session on calendar with participant and topic. Nothing gets mixed up.',
  },
  {
    icon: Shield,
    title: 'Synthesis blocks protected',
    desc: 'Analysis and synthesis require uninterrupted focus. Block synthesis sessions before stakeholder reviews fill the sprint. "Synthesis — checkout interviews, thursday 9-11am." Deep work before the deck is due.',
  },
  {
    icon: Clock,
    title: 'Research sprint deadlines',
    desc: '"Research readout — product team, sprint end friday." "Recommendations doc due — monday 9am." "Concept validation deadline — Q2 planning, april 15." Every research deliverable on calendar before the sprint begins.',
  },
  {
    icon: BarChart3,
    title: 'Time per project analytics',
    desc: 'Tag every interview, synthesis session, and stakeholder meeting by project. Analytics shows research hours per initiative. Is research getting 10% of the product team\'s calendar time — or 1%? Now you can show it.',
  },
]

const RESEARCH_WORKFLOW = [
  { time: 'Research kick-off', action: '"Research kick-off — checkout flow study, monday 11am." Research plan doc block added. Screener deadline added. Recruiting window blocked. All milestones visible from day one.' },
  { time: 'Recruiting window', action: 'All participant confirmation calls added as 15-min blocks. Interview slots templated across the week. Calendar visible to scheduling coordinator.' },
  { time: 'Field work', action: '"User interview — P3 checkout study, tuesday 1pm 60 mins, note-taking setup block 12:45." Prep block auto-added. Observer slots visible. Interview is ready.' },
  { time: 'Synthesis', action: '"Synthesis session — checkout interviews, thursday 9-11am." "Affinity mapping — friday 9am." Deep work protected before readout. Findings emerge before the deck pressure hits.' },
  { time: 'Readout', action: '"Research readout — product team, friday 2pm 45 mins." Deck prep block 60 mins before. Stakeholders get findings, not just summaries. Research lands with weight.' },
]

export default function ForUXResearchersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for UX Researchers"
        title={
          <>
            Research scheduled.
            <br />
            <em className="not-italic text-gold">Synthesis protected.</em>
          </>
        }
        lede="UX researchers coordinate participant interviews, synthesis sessions, stakeholder readouts, and sprint deadlines simultaneously. Momenties schedules research sessions, protects deep synthesis time before readout pressure hits, and shows how much calendar time research actually gets."
        crumbs={[{ label: 'For UX Researchers' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/analytics"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Research analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No participant data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How UX researchers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for research operations.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Research sprint rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Kick-off to readout with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {RESEARCH_WORKFLOW.map((step, i) => (
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
                &ldquo;The hardest part of being a solo researcher on a product team isn&apos;t the research — it&apos;s getting the calendar space to do it. Analytics showed me that I was spending 70% of my time in non-research meetings. I showed that to my manager. I got two protected mornings per week. Output tripled.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">S</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Sofia R.</div>
                  <div className="text-xs text-muted-foreground">UX researcher, embedded product team</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What researchers track</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Research operations analytics in Momenties.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Interviews completed per sprint',
                'Synthesis hours per study',
                'Research time vs. meeting time',
                'Time per project and initiative',
                'Participant session no-show rate',
                'Readout preparation time',
                'Research velocity (studies per quarter)',
                'Deep work hours protected per week',
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
        title="Research scheduled. Synthesis protected. Time accounted."
        subtitle="Interview scheduling, synthesis block protection, and research analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Research analytics', href: '/features/analytics' }}
      />
    </>
  )
}
