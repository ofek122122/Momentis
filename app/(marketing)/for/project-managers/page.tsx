import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BarChart3, Users, Clock, Zap, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Project Managers — Sprint scheduling, stakeholder coordination, and project time analytics',
  description:
    'Project managers coordinate dozens of meetings across teams, vendors, and stakeholders. Momenties templates sprint ceremonies, shows team availability for scheduling, and tracks time by project with analytics.',
  alternates: { canonical: '/for/project-managers' },
  openGraph: {
    title: 'Momenties for Project Managers',
    description: 'Sprint scheduling and project time analytics at speed.',
    url: '/for/project-managers',
    type: 'website',
  },
}

const PAIN_POINTS = [
  {
    icon: Clock,
    problem: 'Setting up a new sprint takes 30 minutes of meeting creation',
    fix: 'Sprint ceremony template: standup, planning, review, retro. Apply to any two-week window. All meetings created in 30 seconds. Tag by project.',
  },
  {
    icon: Users,
    problem: 'Finding meeting times across 8+ stakeholders requires back-and-forth',
    fix: 'Team availability overlay shows all stakeholders\' free/busy simultaneously. Find the first shared window without a single calendar-hunting email.',
  },
  {
    icon: BarChart3,
    problem: 'No visibility into how much time is spent per project vs. overhead',
    fix: 'Tag all meetings by project. Analytics shows hours per project per week. See if Project A is taking 3× more meeting time than Project B — without building a spreadsheet.',
  },
  {
    icon: Zap,
    problem: 'Scheduling vendor calls, demos, and ad-hoc reviews on the fly',
    fix: '"Vendor demo Acme platform tuesday 2pm 60 mins." Voice-added during a Slack call. On calendar before the conversation ends.',
  },
]

const PM_WORKFLOW = [
  { time: 'Sprint start', action: 'Apply sprint template. All 8 ceremonies for the 2-week sprint created instantly. All tagged to the project.' },
  { time: 'Stakeholder review', action: 'Overlay shows all 6 stakeholders\' availability. Find shared 90-minute window for sprint review without a single scheduling email.' },
  { time: 'Mid-sprint', action: '"Risk review with security team thursday 3pm." Voice-added mid-Slack discussion. Done.' },
  { time: 'Project dashboard', action: 'Analytics: Project A 18h/week, Project B 6h/week, internal overhead 8h. Useful for resourcing conversations.' },
  { time: 'Portfolio view', action: 'All projects visible in tagged calendar view. Time allocation across portfolio visible without a separate tool.' },
]

export default function ForProjectManagersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Project Managers"
        title={
          <>
            Sprint scheduling.
            <br />
            <em className="not-italic text-gold">Project time tracked.</em>
          </>
        }
        lede="Project managers run on ceremonies, stakeholder calls, and visibility into time allocation. Momenties templates sprint ceremonies for one-click setup, shows team availability for instant scheduling, and tracks project hours without a separate tool."
        crumbs={[{ label: 'For Project Managers' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/calendar-templates"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Sprint templates
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Team plan from $9/person/month</p>
      </PageHero>

      {/* Pain points */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What we solve</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four PM calendar problems.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {PAIN_POINTS.map((item, i) => (
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

      {/* PM workflow */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">PM workflow with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {PM_WORKFLOW.map((step, i) => (
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

      {/* Testimonial */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;The sprint template is the single thing that saves me the most time. I used to spend an hour setting up every sprint. Now it's 30 seconds. I've done it 14 sprints in a row without thinking about it.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">K</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Kai O.</div>
                  <div className="text-xs text-muted-foreground">Senior PM, B2B SaaS company</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Sprint setup in 30 seconds. Project time in one view."
        subtitle="Templates, team scheduling, and project analytics. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See templates', href: '/calendar-templates' }}
      />
    </>
  )
}
