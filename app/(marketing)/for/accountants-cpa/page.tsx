import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for CPAs — CPE credits, license renewals, and tax season management',
  description:
    'CPAs manage CPE requirements across NASBA fields of study, state CPA license renewals, client deadline calendars, and tax season capacity simultaneously. Momenties tracks CPE by field of study, surfaces renewal deadlines early, and shows time per client during the busiest months.',
  alternates: { canonical: '/for/accountants-cpa' },
  openGraph: {
    title: 'Momenties for CPAs',
    description: 'CPE tracking, license renewals, and tax season management for CPAs.',
    url: '/for/accountants-cpa',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CPE by NASBA field of study',
    desc: 'Tag every CPE event by NASBA field of study: accounting, auditing, tax, advisory services, regulatory ethics, communications. Analytics shows hours per field against your state\'s specific CPE requirements and ethics mandates.',
  },
  {
    icon: Clock,
    title: 'CPA license and renewal deadlines',
    desc: '"CPA license renewal — state board, december 31." "Ethics CPE — state specific requirement, must complete by november." "AICPA membership renewal — april." All CPA credential deadlines on calendar. 90-day advance visibility.',
  },
  {
    icon: BarChart3,
    title: 'Tax season client time analytics',
    desc: 'Tag every client meeting, file preparation block, and review session. Analytics shows hours per client during busy season. Which clients are consuming the most time relative to fee? Data for staff allocation and pricing.',
  },
  {
    icon: Users,
    title: 'Tax and filing deadline calendar',
    desc: '"Individual returns — april 15." "Extension deadline — october 15." "Q1 estimated taxes — april 15." "Corporate returns — march 15." All IRS and state filing deadlines on the professional calendar. Visible well in advance.',
  },
]

const CPA_WORKFLOW = [
  { time: 'Year planning', action: 'All CPE requirements calculated per state. License renewal dates on calendar. Tax season capacity blocks placed January–April. Key filing deadlines for the year added.' },
  { time: 'Tax season', action: '"Client review — Thompson family return, tuesday 2pm." "File preparation block — Chen business, wednesday 9-11am." All client work tagged. Hours per client tracked automatically through busy season.' },
  { time: 'CPE events', action: '"AICPA tax conference — november 4-6." "Ethics webinar — state requirement, october 15, 4 hours, ethics field." Tagged and added. State-specific ethics requirement tracked separately.' },
  { time: 'CPE audit', action: 'Analytics: CPE hours per NASBA field of study. Ethics requirement met? Total hours vs. state requirement. Renewal in 3 months — time to register for fall CPE events.' },
  { time: 'Renewal prep', action: 'Daily Brief surfaces CPA license renewal 90 days out. CPE documentation consolidated by field of study. License renewal submitted before expiration — not in December panic mode.' },
]

export default function ForAccountantsCPAPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for CPAs"
        title={
          <>
            Tax season managed.
            <br />
            <em className="not-italic text-gold">CPA license current.</em>
          </>
        }
        lede="CPAs manage CPE requirements across NASBA fields of study, state license renewals, client deadline pipelines, and tax season capacity simultaneously. Momenties tracks CPE by field of study, surfaces renewal deadlines 90 days early, and shows time per client during the months when every hour counts."
        crumbs={[{ label: 'For CPAs' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · No client data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How CPAs use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for CPA practice management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">CPA calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Tax season to license renewal with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {CPA_WORKFLOW.map((step, i) => (
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
                &ldquo;Every year I was scrambling for CPE in November and December because I hadn&apos;t tracked it through the year. Momenties changed that completely — I tag every webinar, conference, and course at the time I complete it. By July I know where I stand on every NASBA category and I can plan fall CPE proactively instead of reactively.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">B</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Barbara S., CPA</div>
                  <div className="text-xs text-muted-foreground">Tax and advisory practice, small business focus</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">NASBA fields of study</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">CPE tracking for all NASBA fields of study.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Accounting — financial and tax',
                'Auditing — internal and external',
                'Regulatory ethics — state-specific requirement',
                'Business management and organization',
                'Communications and marketing',
                'Finance — financial planning and management',
                'Information technology',
                'Personal development',
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
        title="Tax season managed. CPE current. License never lapsed."
        subtitle="NASBA field-of-study CPE tracking, license renewal deadlines, and client time analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Client analytics', href: '/features/analytics' }}
      />
    </>
  )
}
