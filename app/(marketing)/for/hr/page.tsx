import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, BarChart3, Calendar, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for HR — Interview scheduling, onboarding, and people analytics',
  description:
    'HR teams coordinate hundreds of interviews, onboarding sessions, and people meetings. Momenties adds AI scheduling speed, recurring onboarding templates, and time analytics across the hiring pipeline.',
  alternates: { canonical: '/for/hr' },
  openGraph: {
    title: 'Momenties for HR',
    description: 'Interview scheduling and people analytics at speed.',
    url: '/for/hr',
    type: 'website',
  },
}

const PAINS = [
  {
    icon: Calendar,
    problem: 'Interview scheduling takes 30+ minutes per candidate',
    fix: 'Template your interview loops — create a set of 4–5 interview slots and apply the template to any candidate. AI parses "phone screen with Alex 2pm tuesday" in 2 seconds.',
  },
  {
    icon: Users,
    problem: 'Onboarding is 40 meetings across 2 weeks, set up manually each hire',
    fix: 'Create an onboarding template once. Apply it to any start date. All 40 sessions created in 30 seconds, personalized with the hire\'s name.',
  },
  {
    icon: BarChart3,
    problem: 'No visibility into time spent per hiring pipeline',
    fix: 'Analytics shows hours by tag (e.g., "Backend Eng", "Design"). See if one role is consuming disproportionate interviewer time.',
  },
  {
    icon: Zap,
    problem: 'Coordinating multi-panel interviews across 5 interviewers',
    fix: 'Team calendar overlays show all interviewers\' free/busy. Find a shared window instantly. Scheduling links (Q3) let candidates self-book.',
  },
]

const HR_WORKFLOW = [
  { time: 'New role opens', action: 'Apply interview loop template. 5 stages, repeated for each candidate. Setup once, reused forever.' },
  { time: 'Candidate confirmed', action: 'Voice: "Phone screen Sarah Johnson tuesday 2pm." Added, tagged, linked to the hiring pipeline.' },
  { time: 'Multi-panel scheduling', action: 'Team availability overlay finds shared window across 5 interviewers in seconds.' },
  { time: 'New hire Day 1', action: 'Apply onboarding template. 40 meetings created across first two weeks. Personalized, sent, done.' },
  { time: 'Monthly review', action: 'Analytics: time per open role. Are you spending 40% of recruiting time on one role? Recalibrate.' },
]

export default function ForHRPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for HR"
        title={
          <>
            Interview scheduling
            <br />
            <em className="not-italic text-gold">at a tenth of the effort.</em>
          </>
        }
        lede="HR teams lose hours every week to interview coordination, onboarding setup, and meeting logistics. Momenties templates and AI input compress that work to minutes."
        crumbs={[{ label: 'For HR' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/teams"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Team plan
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free plan · Team plan from $9/person/mo</p>
      </PageHero>

      {/* Pain points */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What we solve</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four HR calendar problems.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {PAINS.map((item, i) => (
              <Reveal key={item.problem} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <item.icon className="h-4 w-4 text-gold" />
                  </div>
                  <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-2">Problem</p>
                  <p className="text-sm text-muted-foreground mb-3">{item.problem}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/90 leading-relaxed">{item.fix}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HR workflow */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">HR workflow with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {HR_WORKFLOW.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-28 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Hire faster. Onboard better. Spend less time on calendar logistics."
        subtitle="Templates, AI input, and team scheduling. Try Pro."
        primary={{ label: 'Start free trial', href: '/login' }}
        secondary={{ label: 'Team plan', href: '/teams' }}
      />
    </>
  )
}
