import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BarChart3, Users, Zap, Focus, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Product Managers — Own your calendar, own your roadmap',
  description:
    'PMs live between stakeholders, engineers, and deadlines. Momenties gives you AI-fast event input, calendar analytics to audit your meeting load, and focus mode to protect actual product thinking time.',
  alternates: { canonical: '/for/product-managers' },
  openGraph: {
    title: 'Momenties for Product Managers',
    description: 'Fast input. Real analytics. Protected thinking time.',
    url: '/for/product-managers',
    type: 'website',
  },
}

const PAINS = [
  {
    icon: Zap,
    problem: 'Capturing decisions, action items, and deadlines mid-discussion',
    fix: 'Voice-add mid-meeting without leaving the call: "follow-up with design by friday EOD" — added in 3 seconds. No tab switching, no app switching.',
  },
  {
    icon: BarChart3,
    problem: 'Not knowing how much time you actually spend in stakeholder syncs vs. product work',
    fix: 'Analytics breaks down your calendar by category. Most PMs who look discover they\'re in 40–60% meetings. Seeing it once usually changes behavior.',
  },
  {
    icon: Focus,
    problem: 'Product thinking time gets sacrificed first when sprint crunch hits',
    fix: 'Focus mode blocks your thinking time and warns anyone who tries to book over it. The time holds because the barrier is real, not just a title.',
  },
  {
    icon: Users,
    problem: 'Coordinating across eng, design, data, and leadership without a shared view',
    fix: 'Team calendar overlays (Pro/Team) show real free/busy across your stakeholder group. Schedule the right person at the right time.',
  },
]

const WORKFLOW = [
  { time: 'Monday 8am', action: 'Daily Brief. See the week\'s shape: how many stakeholder syncs, where thinking time is, what has scheduling conflicts.' },
  { time: 'Sprint planning', action: 'Voice-add action items in real time. "Book 3:1 with eng lead tuesday." Done before the call ends.' },
  { time: 'After customer interview', action: 'Snap photo of notes. Observations, follow-up tasks, and booked callbacks all parsed from the photo.' },
  { time: 'Roadmap review', action: 'Type "roadmap review with all stakeholders Q2" — Momenties suggests available slots across the team.' },
  { time: 'Friday', action: 'Check analytics. What was the meeting-to-thinking ratio this week? Is it trending the right direction?' },
]

const TESTIMONIAL = {
  quote: 'I finally quantified what I already felt: 67% of my week was in syncs. Once I saw the number, I cut the three lowest-value recurring meetings in one afternoon. Analytics made it undeniable.',
  name: 'Amara Osei',
  role: 'Senior Product Manager, enterprise SaaS',
  avatar: 'A',
}

export default function ForProductManagersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Product Managers"
        title={
          <>
            Own your calendar.
            <br />
            <em className="not-italic text-gold">Own your roadmap.</em>
          </>
        }
        lede="PMs sit at the intersection of everything — stakeholders, engineers, customers, deadlines. Your calendar either enables that or drowns you in it. Momenties makes it the former."
        crumbs={[{ label: 'For PMs' }]}
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
            Calendar analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free plan forever · Pro from $12/month</p>
      </PageHero>

      {/* Pain points */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What we fix</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four PM calendar problems.</h2>
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

      {/* Weekly workflow */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              A PM week with Momenties.
            </h2>
          </Reveal>
          <div className="space-y-3">
            {WORKFLOW.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-28 shrink-0 pt-0.5 uppercase tracking-wide">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics spotlight */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Why analytics matters for PMs</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              You can&apos;t improve what you can&apos;t measure.
            </h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                Most PMs know they have too many meetings. Very few can tell you the exact percentage of their week spent in meetings vs. deep work — and even fewer track whether that ratio is improving or getting worse over time.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Momenties' analytics tab gives you a real number. This week: 58% meetings, 42% unstructured. Last month's trend: it was 51% in January and has crept up. Most users who look at this number immediately identify which recurring meetings to cut.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                The "time by person" view is particularly useful for PMs: it shows exactly how much time you're spending with each stakeholder, which surfaces both over-investment (the sync you didn't realize was eating 3 hours a week) and under-investment (the key engineer you haven't had a 1:1 with in six weeks).
              </p>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <Link href="/features/analytics" className="inline-flex items-center gap-1.5 mt-6 text-sm text-gold hover:text-gold/80 transition-colors">
              Explore calendar analytics <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">&ldquo;{TESTIMONIAL.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">{TESTIMONIAL.avatar}</div>
                <div>
                  <div className="text-sm font-medium text-foreground">{TESTIMONIAL.name}</div>
                  <div className="text-xs text-muted-foreground">{TESTIMONIAL.role}</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Your roadmap deserves calendar time. Protect it."
        subtitle="Analytics, focus mode, and AI input — all in the Pro trial."
        primary={{ label: 'Start free trial', href: '/login' }}
        secondary={{ label: 'See Pro features', href: '/pro' }}
      />
    </>
  )
}
