import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Health Information Managers — RHIA/RHIT renewal, CE tracking, and HIM credential management',
  description:
    'Health information managers manage AHIMA RHIA renewal (30 CE per 2 years), RHIT renewal (20 CE per 2 years), specialty certifications in coding and privacy (CCS, CHPS, CDIP), annual ICD and CPT update training, and professional development simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full HIM credential calendar.',
  alternates: { canonical: '/for/health-information-managers' },
  openGraph: {
    title: 'Momenties for Health Information Managers',
    description: 'RHIA/RHIT renewal, CE tracking, and HIM credential management.',
    url: '/for/health-information-managers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for RHIA and RHIT renewal',
    desc: 'AHIMA RHIA renewal requires 30 CE hours per 2-year cycle with AHIMA-approved CE. RHIT renewal requires 20 CE hours per 2-year cycle. Specialty certifications (CCS, CHPS, CDIP, CHDA) each add independent CE requirements on their own renewal cycles. Tag every CE by applicable AHIMA credential. Each credential\'s counter tracked independently — no hour miscounted across overlapping renewal windows.',
  },
  {
    icon: Clock,
    title: 'HIM multi-credential renewal calendar',
    desc: '"RHIA — AHIMA, 2-year renewal, march." "CCS coding specialty — 2-year." "CHPS privacy/security — 2-year." "CDIP clinical documentation improvement — 2-year." "Annual ICD update training — october." "Annual CPT update training — january." "AHIMA membership — annual." All HIM credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual code update and compliance training analytics',
    desc: 'ICD-10-CM/PCS codes update annually October 1. CPT codes update January 1. HIM professionals who supervise coding staff or hold CCS certification must complete annual update training before effective dates. Tag ICD and CPT annual update training as mandatory recurring CE. Analytics confirms both trainings completed before each effective date. Compliance gap prevention documented.',
  },
  {
    icon: Users,
    title: 'AHIMA and HIMSS professional involvement',
    desc: '"AHIMA Annual Conference — october." "HIMSS Annual Conference — march." "State HIM association conference — spring." "CDI Summit — fall." "AHIMA coding roundtable — quarterly." All HIM professional development on calendar. AHIMA Annual Conference CE sessions identified by specialty credential applicability before attendance.',
  },
]

const HIM_WORKFLOW = [
  { time: 'Annual planning', action: 'RHIA/RHIT renewal date, all specialty cert renewal dates (CCS, CHPS, CDIP), annual ICD update (October), annual CPT update (January), AHIMA Annual Conference, and AHIMA membership renewal all loaded in January. CE pace: 15 RHIA CE hours per year satisfies the 2-year cycle.' },
  { time: 'CE completion', action: '"AHIMA-approved webinar — clinical documentation integrity in value-based care, 2 CE hours, RHIA." Tagged by applicable AHIMA credential. RHIA counter updates. CCS counter updates if CE also qualifies for coding specialty. CDIP counter updates for clinical documentation CE. Each credential tracked independently.' },
  { time: 'Code updates', action: '"ICD-10-CM code update training — september, before October 1 effective date." "CPT annual update webinar — december, before January 1." Annual code update training documented as mandatory CE. CCS-required coding knowledge confirmed current. Compliance documentation ready for audit or accreditation review.' },
  { time: 'Privacy and security', action: '"CHPS renewal — 2-year, may." HIPAA privacy and security CE tracked separately for CHPS credential. Regulatory update CE tagged when new HIPAA guidance is released. Privacy and security training separate from clinical HIM CE — each tracked without conflation.' },
  { time: 'Renewal audit', action: 'Analytics: RHIA CE hours on pace? CCS CE satisfied? CHPS CE current? CDIP CE complete? Annual ICD update done? Annual CPT update done? AHIMA membership active? Complete HIM credential audit 90 days before earliest upcoming renewal window — RHIA, CCS, and CHPS may have different dates.' },
]

export default function ForHealthInformationManagersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Health Information Managers"
        title={
          <>
            RHIA and RHIT maintained.
            <br />
            <em className="not-italic text-gold">Annual updates never missed.</em>
          </>
        }
        lede="Health information managers manage RHIA renewal with 30 CE per 2 years, RHIT with 20 CE per 2 years, specialty certifications in coding, privacy, and clinical documentation, mandatory annual ICD and CPT update training, and professional development simultaneously. Momenties tracks CE by AHIMA credential, surfaces renewal deadlines 90 days early, and manages the full HIM credential calendar in one view."
        crumbs={[{ label: 'For Health Information Managers' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How health information managers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for RHIA and HIM credential management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">HIM credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every 2-year AHIMA cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {HIM_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold RHIA, CCS, and CHPS — three AHIMA credentials that don&apos;t all renew at the same time. Some CE I complete counts toward RHIA only. Some counts for CCS coding CE. Some HIPAA-specific CE counts for CHPS. I was using one spreadsheet column for all of them and discovering misallocations at renewal time. Momenties lets me tag each CE at completion. All three counters accurate, zero scrambling.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">V</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Valerie T., RHIA, CCS, CHPS</div>
                  <div className="text-xs text-muted-foreground">HIM director, regional health system</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All HIM credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'AHIMA CE by credential — RHIA/RHIT 2-year renewal',
                'CCS coding specialty CE — 2-year renewal',
                'CHPS privacy/security CE — 2-year renewal',
                'CDIP clinical documentation improvement renewal',
                'Annual ICD-10 code update training',
                'Annual CPT code update training',
                'AHIMA membership renewal — annual',
                'AHIMA and HIMSS conference CE planning',
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
        title="RHIA and RHIT maintained. Annual updates never missed."
        subtitle="CE tracking by AHIMA credential, code update deadline calendar, and HIM professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
