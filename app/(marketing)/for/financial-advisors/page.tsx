import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, BarChart3, Shield, Clock, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Financial Advisors — Client review scheduling and AUM time analytics',
  description:
    'Financial advisors manage dozens of client review meetings, regulatory deadlines, and prospecting calls. Momenties makes every appointment instant, tracks time per client, and surfaces which relationships are getting the right attention.',
  alternates: { canonical: '/for/financial-advisors' },
  openGraph: {
    title: 'Momenties for Financial Advisors',
    description: 'Client reviews scheduled. Time per client tracked.',
    url: '/for/financial-advisors',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Users,
    title: 'Annual review scheduling at scale',
    desc: 'Apply the annual review template to every client: Q1 review, mid-year check, Q4 planning. Batch-create all review meetings for your full client roster in minutes, not hours.',
  },
  {
    icon: BarChart3,
    title: 'Time per client vs. AUM',
    desc: 'Tag all meetings by client. Analytics shows hours per client per quarter. Compare to AUM allocation. Ensure your highest-value relationships get proportionate attention.',
  },
  {
    icon: Shield,
    title: 'Regulatory deadline tracking',
    desc: '"FINRA continuing education deadline march 31." "Annual compliance review Q4." Regulatory obligations on calendar the moment they\'re identified. Nothing slips.',
  },
  {
    icon: Clock,
    title: 'Prospecting and referral scheduling',
    desc: '"Prospecting call Robert Thompson tuesday 2pm 30 mins." "Referral follow-up, Nguyen intro, thursday." All tracked separately from client time for business development analytics.',
  },
]

const FA_WORKFLOW = [
  { time: 'Q1 planning', action: 'Apply annual review template to all 80 clients. Q1, Q3, and year-end meetings created for the full roster.' },
  { time: 'Client call', action: '"Portfolio review Harrison thursday 10am 60 mins." Voice-added before closing the email. Tagged to client.' },
  { time: 'Compliance', action: '"CE credit deadline june 30." "Annual ADV update march 31." Both on calendar. Both visible in Daily Brief as dates approach.' },
  { time: 'Monthly review', action: 'Analytics: highest-AUM clients getting appropriate attention? Relationship imbalance visible before it becomes a problem.' },
  { time: 'Prospecting', action: 'Prospecting hours tracked separately from client service. Business development vs. relationship management visible in analytics.' },
]

export default function ForFinancialAdvisorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Financial Advisors"
        title={
          <>
            Every review scheduled.
            <br />
            <em className="not-italic text-gold">Every client served.</em>
          </>
        }
        lede="Financial advisors manage dozens of client relationships with simultaneous review cycles, regulatory obligations, and business development activity. Momenties brings structure to all three — and analytics to show where your time actually goes."
        crumbs={[{ label: 'For Financial Advisors' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · GDPR-compliant · No client data shared with AI</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How financial advisors use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for advisory practices.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Practice workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Advisory practice with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {FA_WORKFLOW.map((step, i) => (
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
                &ldquo;The analytics showed me I was spending 6 hours a month on my smallest client. That's time that should go to my top-tier relationships. The data made a difficult conversation with myself much easier.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">C</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Claire B.</div>
                  <div className="text-xs text-muted-foreground">Independent financial advisor, 62 clients</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Serve every client. Know which ones need more."
        subtitle="Client time analytics, review templates, and compliance deadline tracking. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See analytics', href: '/features/analytics' }}
      />
    </>
  )
}
