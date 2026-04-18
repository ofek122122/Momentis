import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Diagnostic Medical Sonographers — ARDMS renewal, CME tracking, and sonography credential management',
  description:
    'Diagnostic medical sonographers manage ARDMS credential renewal with 30 CME per 3 years, ARRT sonography certification CE, specialty credentials in echocardiography (RDCS), vascular (RVT), and breast (RDMS-BR), and professional development simultaneously. Momenties tracks CME by specialty credential, surfaces renewal deadlines 90 days early, and manages the full sonography credential calendar.',
  alternates: { canonical: '/for/diagnostic-medical-sonographers' },
  openGraph: {
    title: 'Momenties for Diagnostic Medical Sonographers',
    description: 'ARDMS renewal, CME tracking, and sonography credential management.',
    url: '/for/diagnostic-medical-sonographers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ARDMS and ARRT sonography renewal',
    desc: 'ARDMS credential renewal requires 30 CME per 3-year cycle with ARDMS-approved CE. Each ARDMS specialty (RDMS, RDCS, RVT, RVS) renews independently on its own 3-year cycle. ARRT sonography certification (RT(S)) also requires 24 CE per 2 years. Tag every CME by applicable specialty credential. Multiple credential cycles tracked independently — no CME miscounted across specialties.',
  },
  {
    icon: Clock,
    title: 'Sonographer multi-specialty renewal calendar',
    desc: '"RDMS abdominal — ARDMS, 3-year renewal, october." "RDCS echocardiography — ARDMS, 3-year." "RVT vascular — ARDMS, 3-year." "RT(S) — ARRT, 2-year, if dual." "SDMS membership — annual." "CME safety topic — ARDMS required." All sonography credentials with 90-day advance alerts. Different specialty credentials may have different renewal months.',
  },
  {
    icon: BarChart3,
    title: 'Multi-specialty CE analytics',
    desc: 'Sonographers who hold RDMS, RDCS, and RVT credentials face three independent 3-year CE cycles. Each specialty requires CME relevant to that specialty domain. Abdominal CE may not satisfy echocardiography CE requirements. Analytics shows each specialty credential\'s CE progress independently. CME tagged at completion to applicable specialties — no umbrella counting.',
  },
  {
    icon: Users,
    title: 'SDMS, ASE, and specialty society involvement',
    desc: '"SDMS Annual Conference — november." "ASE Annual Scientific Sessions — echocardiography, june." "SVU Annual Meeting — vascular, october." "ARDMS registry review course." All sonography professional development on calendar. Conference CME planned by ARDMS specialty in advance for maximum credit coverage across held credentials.',
  },
]

const SONO_WORKFLOW = [
  { time: 'Annual planning', action: 'All ARDMS specialty credential renewal dates (RDMS, RDCS, RVT), ARRT renewal date if applicable, SDMS Annual Conference, and SDMS membership renewal all loaded in January. CME pace calculated per specialty: 10 CME per year per ARDMS credential satisfies the 3-year cycle.' },
  { time: 'CME completion', action: '"ARDMS-approved webinar — advanced abdominal sonography techniques, 3 CME, RDMS." Tagged by applicable ARDMS specialty credential. RDMS counter updates. If the CME also qualifies for echocardiography or vascular content, RDCS or RVT counter updates separately. Each specialty tracked independently.' },
  { time: 'Specialty CE', action: '"ASE echo conference — 8 CME, RDCS echocardiography." Echocardiography CME tagged to RDCS credential specifically. May or may not count toward RDMS abdominal renewal depending on ARDMS content rules. Each specialty\'s approved CME verified at time of tagging. No cross-specialty assumptions made.' },
  { time: 'ARRT dual credential', action: '"RT(S) — ARRT sonography certification renewal, 2-year, june." ARRT requires 24 CE per 2-year cycle. ARRT CE requirements and ARDMS CME requirements are independent. Some CE counts for both; some is credential-specific. ARRT and ARDMS counters tracked independently without conflation.' },
  { time: 'Renewal audit', action: 'Analytics: RDMS CME on pace? RDCS CME current? RVT CME satisfied? RT(S) ARRT CE complete (if applicable)? SDMS membership active? CME safety topic requirement satisfied? Complete sonography credential audit 90 days before earliest specialty credential renewal. ARDMS documentation prepared for all specialty renewals.' },
]

export default function ForDiagnosticMedicalSonographersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Diagnostic Medical Sonographers"
        title={
          <>
            ARDMS credentials maintained.
            <br />
            <em className="not-italic text-gold">Specialty CME never scrambled.</em>
          </>
        }
        lede="Diagnostic medical sonographers manage ARDMS specialty credential renewals (RDMS, RDCS, RVT) each on independent 3-year CME cycles, ARRT sonography certification with a separate 2-year cycle, specialty society involvement, and professional development simultaneously. Momenties tracks CME by ARDMS specialty, surfaces renewal deadlines 90 days early, and manages the full sonography credential calendar in one view."
        crumbs={[{ label: 'For Diagnostic Medical Sonographers' }]}
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
            CME analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How sonographers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for ARDMS credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Sonography credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed across independent specialty renewal cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {SONO_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold RDMS, RDCS, and RVT — three ARDMS credentials with three different renewal windows and three separate CME clocks. An ASE echo conference session counts for RDCS but not necessarily for RDMS or RVT. A vascular symposium counts for RVT. I was tracking all three CME totals in one spreadsheet total. Momenties taught me that my RVT credential was 8 CME behind because I had been attending too many echo events. Fixed in time.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Jordan K., RDMS, RDCS, RVT</div>
                  <div className="text-xs text-muted-foreground">Diagnostic medical sonographer, cardiovascular imaging center</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Credentials tracked</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All sonography credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ARDMS CME by specialty — RDMS/RDCS/RVT 3-year renewal',
                'ARRT RT(S) CE — 2-year renewal (if dual)',
                'RDMS breast specialty — 3-year renewal',
                'RDCS echocardiography — 3-year renewal',
                'RVT/RVS vascular — 3-year renewal',
                'CME safety topic — ARDMS required category',
                'SDMS membership renewal — annual',
                'SDMS, ASE, SVU conference CME planning',
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
        title="ARDMS credentials maintained."
        subtitle="CME tracking by specialty credential, multi-cycle renewal calendar, and sonography professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
