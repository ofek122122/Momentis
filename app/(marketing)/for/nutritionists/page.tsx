import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, BarChart3, Clock, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Nutritionists and Dietitians — Client session scheduling and caseload analytics',
  description:
    'Nutritionists and dietitians manage recurring client sessions, follow-up appointments, meal plan reviews, and group programs. Momenties makes every session instant and tracks client hours without a separate tool.',
  alternates: { canonical: '/for/nutritionists' },
  openGraph: {
    title: 'Momenties for Nutritionists',
    description: 'Client session scheduling and caseload analytics.',
    url: '/for/nutritionists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Users,
    title: 'Client session templates',
    desc: 'Initial consultation (90 min), follow-ups (30 min), meal plan review (45 min). Set the template once. Apply to any new client. All sessions created in 30 seconds.',
  },
  {
    icon: BarChart3,
    title: 'Caseload and revenue tracking',
    desc: 'Tag every session by client. Analytics shows hours per client per month. See total session count, which clients are most time-intensive, and monthly revenue estimate.',
  },
  {
    icon: Clock,
    title: 'Group program scheduling',
    desc: '"8-week nutrition program, tuesdays 7pm, starting next tuesday." All 8 sessions created instantly. Recurring group cohort scheduled before the intro call ends.',
  },
  {
    icon: Shield,
    title: 'Admin and study time protection',
    desc: 'Continuing education, meal plan prep, research time — all blocked and protected. Focus mode keeps client admin time from being consumed by reactive tasks.',
  },
]

const WORKFLOW = [
  { time: 'New client', action: 'Apply template: 90-min intake, then biweekly 30-min follow-ups for 12 weeks. All 7 sessions created in 30 seconds.' },
  { time: 'Group cohort', action: '"8-week gut health program, wednesdays 6pm, starting next week." 8 sessions scheduled in one input.' },
  { time: 'Follow-up note', action: '"Check in call Alex tuesday 11am 20 mins." Voice-added between client sessions. On calendar before the next session starts.' },
  { time: 'Month end', action: 'Analytics: 35 client hours, 2 group sessions, 6 continuing education hours. Billing and CPD tracking in one tool.' },
]

export default function ForNutritionistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Nutritionists"
        title={
          <>
            Client schedule managed.
            <br />
            <em className="not-italic text-gold">Caseload visible.</em>
          </>
        }
        lede="Nutritionists and dietitians run a practice on recurring client relationships. Momenties templates every client's session series, tracks hours for billing, and shows caseload capacity before you take on more than you can sustainably deliver."
        crumbs={[{ label: 'For Nutritionists' }]}
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
            Client analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Pro from $12/month</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How nutritionists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for nutrition practices.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A nutrition practice with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {WORKFLOW.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-24 shrink-0 pt-0.5 uppercase tracking-wide">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Run your practice from your calendar."
        subtitle="Templates, caseload analytics, and group program scheduling. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See analytics', href: '/features/analytics' }}
      />
    </>
  )
}
