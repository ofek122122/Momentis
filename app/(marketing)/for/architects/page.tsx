import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Building, BarChart3, Clock, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Architects — Project milestone scheduling, client meetings, and billable time',
  description:
    'Architects manage multi-year project timelines, client reviews, consultant coordination, and site visits. Momenties makes every milestone instant, tracks billable hours by project, and keeps complex schedules visible.',
  alternates: { canonical: '/for/architects' },
  openGraph: {
    title: 'Momenties for Architects',
    description: 'Project milestone scheduling and billable time tracking.',
    url: '/for/architects',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Building,
    title: 'Project milestone scheduling',
    desc: '"Schematic design review Phase 1 tuesday 2pm, 2 hours." "DD submission deadline march 15." "Client review session biweekly thursdays." All milestones captured the moment they\'re set.',
  },
  {
    icon: BarChart3,
    title: 'Billable hours by project',
    desc: 'Tag every meeting and work session by project code. Analytics shows billable hours per project per month. Accurate time data for fee proposals and scope conversations.',
  },
  {
    icon: Users,
    title: 'Consultant coordination',
    desc: 'Team availability overlay shows structural, MEP, and landscape consultants\' schedules. Find the shared coordination meeting window without a chain of emails.',
  },
  {
    icon: Clock,
    title: 'Site visit and inspection scheduling',
    desc: '"Site visit Riverside project friday 9am, 2 hours, travel 45 mins each way." All three blocks created in one input. Tagged to project. Travel time accounted for.',
  },
]

const ARCHITECT_WORKFLOW = [
  { time: 'Project kickoff', action: 'Create milestone template: SD review, DD review, CD submission, permit submission, construction start. Apply to project schedule.' },
  { time: 'Client meeting', action: '"Client review session Phase 2 thursday 10am, 90 mins, bring SD drawings." On calendar, tagged, notes included.' },
  { time: 'Coordination call', action: '"MEP coordination call tuesday 3pm with Thornton Tomasetti." Team overlay confirmed availability for all 4 consultants.' },
  { time: 'Site visit', action: '"Site visit Riverside friday 9am, drive 45 mins, visit 2 hours." Travel and visit blocks created together.' },
  { time: 'Fee tracking', action: 'Analytics: Riverside 28h, Downtown Office 14h, residential work 8h. Actual hours vs. fee allocation. Negotiate Phase 3 pricing.' },
]

export default function ForArchitectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Architects"
        title={
          <>
            Project milestones tracked.
            <br />
            <em className="not-italic text-gold">Billable hours visible.</em>
          </>
        }
        lede="Architecture projects span years and involve dozens of consultants, client reviews, and regulatory submissions. Momenties keeps every milestone visible, tracks billable hours per project, and finds coordination windows across large teams."
        crumbs={[{ label: 'For Architects' }]}
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
            Project analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Team plan from $9/person/month</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How architects use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for architecture practices.</h2>
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

      {/* Workflow */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Project workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Architecture project management.</h2>
          </Reveal>
          <div className="space-y-3">
            {ARCHITECT_WORKFLOW.map((step, i) => (
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

      {/* Testimonial */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I finally understand which projects are profitable and which are fee-busters. It's all in the analytics. The Riverside project was taking 40% of partner time for 25% of revenue. That changed our next fee proposal completely.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">E</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Eleanor F.</div>
                  <div className="text-xs text-muted-foreground">Associate principal, architecture firm</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Every milestone tracked. Every hour accounted for."
        subtitle="Project analytics, team scheduling, and milestone templates. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See analytics', href: '/features/analytics' }}
      />
    </>
  )
}
