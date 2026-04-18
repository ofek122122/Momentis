import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, Shield, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Loan Officers — NMLS license renewals, CE credits, and pipeline management',
  description:
    'Loan officers manage NMLS state license renewals across multiple states, continuing education requirements, rate lock deadlines, loan closing timelines, and referral partner relationships simultaneously. Momenties tracks CE credits, surfaces license renewal deadlines early, and shows time per referral source.',
  alternates: { canonical: '/for/loan-officers' },
  openGraph: {
    title: 'Momenties for Loan Officers',
    description: 'NMLS license renewals, CE credits, and loan pipeline management for loan officers.',
    url: '/for/loan-officers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'NMLS license and CE tracking',
    desc: 'Tag every CE course by NMLS credit type: federal law, ethics, non-traditional mortgage lending, and electives. Track hours per category toward your state\'s annual requirement. "License renewal — state A, december 31." "License renewal — state B, october 31." All NMLS deadlines with 90-day alerts.',
  },
  {
    icon: Clock,
    title: 'Rate lock and closing deadline calendar',
    desc: '"Rate lock expiration — Johnson purchase, november 15." "Closing deadline — Chen refinance, december 8." "Clear to close — Williams, october 29." Every loan in the pipeline has its critical dates on the calendar. No rate lock allowed to expire from calendar blindness.',
  },
  {
    icon: BarChart3,
    title: 'Time per referral source analytics',
    desc: 'Tag every realtor lunch, broker meeting, and referral partner call by source. Analytics shows hours invested per referral partner. Which realtor relationships are generating volume relative to time invested? Data to focus relationship-building where it pays.',
  },
  {
    icon: Users,
    title: 'Referral partner relationship calendar',
    desc: '"Coffee with Sarah at Premier Realty — tuesday 9am." "Monthly lunch — top 5 realtors." "New realtor introduction — thursday 11am." All referral partner touchpoints scheduled and tracked. Relationships built systematically, not just when you remember to call.',
  },
]

const LO_WORKFLOW = [
  { time: 'Annual planning', action: 'All NMLS license renewal dates, CE requirements per state, and annual industry events on calendar at year start. Partnership review scheduled — which realtor relationships to deepen this year. Capacity planning for busy season.' },
  { time: 'CE credits', action: '"NMLS-approved course — federal law update, wednesday 7pm, 3 hours, federal law category." Tagged and added. CE credit counter updates by category. No scrambling in November to find 8 hours of CE before the December renewal deadline.' },
  { time: 'Pipeline management', action: '"Rate lock — Thompson purchase, lock date november 1, expires december 1." "Appraisal ordered — Rodriguez, due october 25." Every pipeline milestone on calendar. Critical dates visible before they become crises.' },
  { time: 'Referral relationship', action: '"Monthly check-in — top realtors, first monday of month." "New listing presentation support — Johnson, thursday 10am." Relationships managed systematically. The calendar ensures no top referral partner goes uncalled for 60 days.' },
  { time: 'License renewal', action: 'Daily Brief surfaces NMLS renewal 90 days out. CE documentation by category reviewed. License renewal submitted before the December rush — not competing with every other LO for course availability in the final weeks.' },
]

export default function ForLoanOfficersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Loan Officers"
        title={
          <>
            NMLS license current.
            <br />
            <em className="not-italic text-gold">Pipeline never missed.</em>
          </>
        }
        lede="Loan officers manage NMLS license renewals across multiple states, continuing education requirements, rate lock and closing deadlines, and referral partner relationships simultaneously. Momenties tracks CE credits by NMLS category, surfaces license renewal deadlines 90 days early, and shows time per referral source."
        crumbs={[{ label: 'For Loan Officers' }]}
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
            Pipeline analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No client data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How loan officers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for loan officer practice management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Loan officer calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">License renewals, pipeline, and relationships with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {LO_WORKFLOW.map((step, i) => (
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
                &ldquo;I&apos;m licensed in four states and every year I was hunting for CE courses in November to make all four December deadlines. Momenties fixed that — I track CE credits by category all year, I can see the gap in July, and I get it done in October when there&apos;s still course availability. The December scramble is over.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">K</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Kevin T.</div>
                  <div className="text-xs text-muted-foreground">Senior loan officer, 4-state licensure</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What Momenties tracks</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Complete loan officer practice management.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'NMLS CE credits by category — all states',
                'NMLS license renewal deadlines per state',
                'Rate lock expiration dates per loan',
                'Closing deadlines and clear-to-close dates',
                'Referral partner relationship cadence',
                'Industry conferences and networking events',
                'Time per referral source analytics',
                'Pipeline milestone calendar per loan',
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
        title="NMLS current. Pipeline managed. Referrals growing."
        subtitle="NMLS CE tracking, license renewal management, and referral partner analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Pipeline analytics', href: '/features/analytics' }}
      />
    </>
  )
}
