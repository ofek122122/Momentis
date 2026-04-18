import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, BarChart3, Shield, Clock, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Financial Planners — CFP CE tracking, client reviews, and compliance deadlines',
  description:
    'Financial planners manage CFP CE requirements, client review cycles, regulatory deadlines, and prospecting. Momenties tracks CE by knowledge domain, keeps compliance deadlines visible, and shows time per client.',
  alternates: { canonical: '/for/financial-planners' },
  openGraph: {
    title: 'Momenties for Financial Planners',
    description: 'CFP CE tracking, client review management, and compliance calendar for financial planners.',
    url: '/for/financial-planners',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CFP CE by knowledge domain',
    desc: 'Tag every CE event by CFP knowledge domain: financial planning, investment, income tax, estate planning, insurance, retirement, education. Analytics shows hours per domain against your 30-hour biennial requirement.',
  },
  {
    icon: Users,
    title: 'Annual review cycle management',
    desc: 'Every client\'s annual review on calendar 60 days in advance. "Annual review - Thompson family, march." "Mid-year check - Chen household, july." Reviews happen before clients need to ask.',
  },
  {
    icon: Clock,
    title: 'CFP and regulatory renewal deadlines',
    desc: '"CFP renewal november 30." "State RIA registration renewal." "Form ADV annual update." "E&O renewal september." All compliance deadlines on calendar. Visible before they become urgent.',
  },
  {
    icon: BarChart3,
    title: 'Time per client vs. AUM analytics',
    desc: 'Tag every client meeting and call. Analytics shows hours per client per quarter. Compare to AUM. Ensure your highest-value relationships get the attention the relationship warrants.',
  },
]

const PLANNER_WORKFLOW = [
  { time: 'January', action: 'Annual planning: set all client review dates for the year, audit CFP CE hours per domain, add FPA National conference and events to calendar.' },
  { time: 'Client review', action: '"Annual review Nguyen family, tuesday march 11, 90 mins." Voice-added from the client database. Prep block 30 mins before auto-added from template.' },
  { time: 'CE event', action: '"Estate planning CE webinar, thursday april 3, 3 hours, estate planning domain." Tagged and added. CFP CE counter updates immediately.' },
  { time: 'Biennial check', action: 'Analytics: 18/30 CFP CE hours, income tax domain complete, ethics needs 2 hours. 14 months remaining — on pace.' },
  { time: 'Compliance', action: 'CFP renewal visible in Daily Brief for 60 days prior. Form ADV annual update blocked. E&O renewal reminder on calendar 90 days out.' },
]

export default function ForFinancialPlannersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Financial Planners"
        title={
          <>
            Client reviews proactive.
            <br />
            <em className="not-italic text-gold">CFP maintained.</em>
          </>
        }
        lede="Financial planners manage CFP CE requirements across knowledge domains, client review cycles, regulatory compliance, and business development simultaneously. Momenties tracks CFP CE by domain, surfaces compliance deadlines early, and shows time per client against AUM."
        crumbs={[{ label: 'For Financial Planners' }]}
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

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How financial planners use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for CFP practice management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Practice calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CFP and client management through the year.</h2>
          </Reveal>
          <div className="space-y-3">
            {PLANNER_WORKFLOW.map((step, i) => (
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
                &ldquo;I finally know which clients are getting the right level of attention. The analytics showed me that 3 of my top 10 clients were getting half the meeting time of smaller accounts. That was a wake-up call. I restructured, and the relationship quality reflected it.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">W</div>
                <div>
                  <div className="text-sm font-medium text-foreground">William A., CFP®</div>
                  <div className="text-xs text-muted-foreground">Independent financial planner, 78 clients</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="CFP CE tracked. Clients reviewed. Compliance managed."
        subtitle="CE knowledge domain analytics, client review scheduling, and compliance calendar. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Client analytics', href: '/features/analytics' }}
      />
    </>
  )
}
