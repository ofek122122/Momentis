import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Transplant Coordinators — CCTC/CPTC CE renewal, transplant credential management',
  description:
    'Transplant coordinators manage NATCO CCTC or CPTC certification renewal CE, state RN or CRNP license CE, UNOS policy compliance education, ACLS/BLS renewal, annual institutional transplant program competency, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full transplant coordinator credential calendar.',
  alternates: { canonical: '/for/transplant-coordinators' },
  openGraph: {
    title: 'Momenties for Transplant Coordinators',
    description: 'CCTC/CPTC CE renewal, transplant credential management.',
    url: '/for/transplant-coordinators',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CCTC, CPTC, and transplant certifications',
    desc: 'NATCO Certified Clinical Transplant Coordinator (CCTC) and Certified Procurement Transplant Coordinator (CPTC) certifications require CE per renewal cycle in transplant-specific content domains. CCTC CE must cover clinical transplant coordination content. CPTC CE must cover organ procurement and donation content. The two certifications serve different roles — coordinators holding both face independent CE requirements. CE tracked separately per certification.',
  },
  {
    icon: Clock,
    title: 'Transplant coordinator multi-credential renewal calendar',
    desc: '"CCTC — NATCO, renewal cycle CE." "CPTC — NATCO, renewal cycle CE (if applicable)." "State RN license — biennial CE." "ACLS — 2-year renewal." "BLS — 2-year renewal." "UNOS policy compliance training — annual." "Annual transplant program competency — institutional." "NATCO membership — annual." All transplant coordinator credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'UNOS compliance and institutional competency CE analytics',
    desc: 'Transplant coordinators at UNOS-approved transplant programs face annual UNOS policy training requirements and institutional competency documentation for UNOS program compliance. UNOS compliance training documented separately from NATCO CE — different standards, different documentation. Annual institutional transplant program competency assessment required for UNOS audit readiness. Each tracked independently on calendar.',
  },
  {
    icon: Users,
    title: 'NATCO, UNOS, and transplant coordination professional involvement',
    desc: '"NATCO Annual Meeting — fall." "UNOS Transplant Management Forum." "ASTS Annual Meeting transplant coordination sessions." "AOPO annual organ procurement education." "NATCO regional chapter CE events." "Organ Procurement Organization (OPO) annual education." All transplant coordination professional development on calendar. NATCO Annual Meeting CE tagged by CCTC and CPTC applicability.',
  },
]

const TX_WORKFLOW = [
  { time: 'Annual planning', action: 'CCTC renewal CE cycle, CPTC cycle (if applicable), state RN biennial CE, ACLS 2-year cycle, BLS 2-year cycle, UNOS annual compliance training, annual institutional competency assessment, NATCO Annual Meeting, and NATCO membership all loaded in January. CCTC, CPTC, and state CE paces tracked independently.' },
  { time: 'CE completion', action: '"NATCO-approved — multi-organ allocation: UNOS policy changes and clinical impact on transplant coordinators, 3 CE, CCTC applicable." Tagged by applicable certification. CCTC counter updates. If CPTC also applies, CPTC counter updates. State RN CE counter updates if content meets state board requirements. Each tracked independently.' },
  { time: 'UNOS training', action: '"UNOS annual policy compliance training — organ allocation updates, 2 CE." UNOS compliance training logged as a mandatory annual category separate from NATCO CE totals. UNOS transplant program compliance requires documented annual training for all transplant program staff — coordinators, physicians, administrators. Compliance documentation maintained separately from NATCO renewal records.' },
  { time: 'ACLS renewal', action: '"ACLS renewal — AHA, 2-year cycle." ACLS placed on 2-year renewal cycle independent of CCTC and state RN license cycles. Many transplant programs require ACLS for clinical transplant coordinators managing post-transplant patients in hospital settings. ACLS lapse affects clinical coordinator role assignment at some institutions.' },
  { time: 'Renewal audit', action: 'Analytics: CCTC CE on pace? CPTC CE adequate? State RN CE complete? ACLS current? BLS current? UNOS compliance training documented? Annual institutional competency done? NATCO membership active? Complete transplant coordinator credential audit 90 days before earliest certification renewal. NATCO and UNOS documentation maintained separately.' },
]

export default function ForTransplantCoordinatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Transplant Coordinators"
        title={
          <>
            CCTC and CPTC certifications maintained.
            <br />
            <em className="not-italic text-gold">UNOS compliance training and ACLS never lapsed.</em>
          </>
        }
        lede="Transplant coordinators manage NATCO CCTC and CPTC certification CE renewal on independent cycles, annual UNOS policy compliance training with separate documentation requirements, ACLS and BLS 2-year renewals, state RN license biennial CE, annual institutional transplant program competency assessments, and professional development simultaneously. Momenties tracks CE by transplant credential, surfaces renewal deadlines 90 days early, and manages the full transplant coordinator credential calendar in one view."
        crumbs={[{ label: 'For Transplant Coordinators' }]}
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
            CE analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How transplant coordinators use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for transplant coordination credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Transplant coordinator credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every NATCO certification and UNOS compliance cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {TX_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold CCTC for my clinical role and CPTC because I&apos;ve covered procurement. NATCO has different CE requirements for each, and my program also has UNOS compliance training that our QA team tracks separately from my personal credentials. The UNOS training is easy to lose track of because it comes from the hospital QA system, not my certification board. When UNOS audited our program I had the training logged in two different places. Momenties consolidated all of it — CCTC, CPTC, UNOS compliance, ACLS — into one view with independent counters.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">R</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Renata K., RN, CCTC, CPTC</div>
                  <div className="text-xs text-muted-foreground">Transplant coordinator, multi-organ transplant program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All transplant coordinator credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'NATCO CCTC certification CE — renewal cycle',
                'NATCO CPTC certification CE — renewal cycle',
                'State RN license CE — biennial renewal',
                'ACLS certification — 2-year renewal',
                'BLS certification — 2-year renewal',
                'UNOS annual policy compliance training',
                'Annual institutional transplant program competency',
                'NATCO membership and conference CE planning',
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
        title="CCTC and CPTC certifications maintained."
        subtitle="CE tracking by certification, UNOS compliance calendar, ACLS renewal, and transplant coordination professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
