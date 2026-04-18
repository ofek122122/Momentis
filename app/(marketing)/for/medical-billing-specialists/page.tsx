import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Medical Billing Specialists — CMRS/CPB CE renewal, annual payer update compliance, and billing credential management',
  description:
    'Medical billing specialists manage AMBA CMRS or AAPC CPB certification renewal, annual Medicare and Medicaid update compliance training, ICD and CPT code update training, payer-specific policy change education, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full medical billing credential calendar.',
  alternates: { canonical: '/for/medical-billing-specialists' },
  openGraph: {
    title: 'Momenties for Medical Billing Specialists',
    description: 'CMRS/CPB CE renewal, annual payer update compliance, and billing credential management.',
    url: '/for/medical-billing-specialists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CMRS, CPB, and billing certification renewal',
    desc: 'AMBA Certified Medical Reimbursement Specialist (CMRS) requires CE for renewal on a defined cycle. AAPC Certified Professional Biller (CPB) requires CE per 2-year cycle. Both certifications require billing-specific CE content. Medicare and Medicaid billing CE may satisfy both; general coding CE may not. Tag every CE by applicable certification. CMRS and CPB counters tracked independently.',
  },
  {
    icon: Clock,
    title: 'Billing specialist multi-certification renewal calendar',
    desc: '"CMRS — AMBA, renewal cycle, annual CE." "CPB — AAPC, 2-year renewal." "Annual Medicare update — January." "Annual Medicaid update — state-specific." "Annual ICD update — October." "Annual CPT update — January." "AAPC chapter CE — annual requirement." "AMBA membership — annual." All billing credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual payer update compliance analytics',
    desc: 'Medicare billing policies update annually in January, October, and periodically with rule changes. Medicaid updates vary by state. CPT codes update January 1. ICD-10 codes update October 1. Medical billing specialists who submit claims without completing annual update training carry compliance and audit risk. Annual update CE tagged as mandatory compliance training at completion — every year without exception.',
  },
  {
    icon: Users,
    title: 'AAPC, AMBA, and billing professional involvement',
    desc: '"AAPC National Conference — may." "AMBA Annual Meeting." "Local AAPC chapter meetings — monthly CE opportunities." "Medicare billing webinars — quarterly." "Specialty billing society conference (HBMA, MGMA)." All medical billing professional development on calendar. Chapter meeting CE logged. Annual conference CE tagged by applicable billing certification in advance.',
  },
]

const BILLING_WORKFLOW = [
  { time: 'Annual planning', action: 'All certification renewal dates (CMRS, CPB), annual Medicare update (January), annual CPT update (January), annual ICD update (October), state Medicaid update schedule, AAPC National Conference, AAPC chapter CE requirement, and membership renewals all loaded in January. CE pace calculated per certification cycle.' },
  { time: 'CE completion', action: '"AAPC-approved — Medicare billing compliance 2025: modifier usage and documentation requirements, 2 CE, CPB applicable." Tagged by applicable certification. CPB counter updates. If CMRS also accepts the CE, CMRS counter updates. AAPC chapter CE counter updates if chapter meeting CE. Each certification tracked independently.' },
  { time: 'Medicare update', action: '"Medicare annual update — January, physician fee schedule and billing changes, 2 CE, mandatory compliance." Medicare update CE tagged as mandatory annual compliance training at completion. Update training confirmed complete before January 1 billing changes take effect. CMS quarterly updates also tracked when issued — not just the annual update.' },
  { time: 'Code updates', action: '"ICD-10-CM annual update — September webinar, 2 CE, billing compliance." "CPT annual update — December, 2 CE." Annual code updates tagged as mandatory compliance CE, separate from general billing CE. Both ICD and CPT updates confirmed complete before October 1 and January 1 effective dates. Compliance audit trail maintained for each year.' },
  { time: 'Renewal audit', action: 'Analytics: CMRS CE current? CPB CE on pace? Medicare annual update done? Medicaid update done? ICD update done? CPT update done? AAPC chapter CE requirement met? AAPC membership active? AMBA membership active? Complete billing credential audit 90 days before earliest certification renewal. Separate documentation per AMBA and AAPC.' },
]

export default function ForMedicalBillingSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Medical Billing Specialists"
        title={
          <>
            CMRS and CPB certifications maintained.
            <br />
            <em className="not-italic text-gold">Annual payer updates never missed.</em>
          </>
        }
        lede="Medical billing specialists manage AMBA CMRS and AAPC CPB certification renewal on independent cycles, mandatory annual Medicare and Medicaid update compliance training, annual ICD-10 and CPT code update CE, AAPC chapter CE requirements, and professional development simultaneously. Momenties tracks CE by billing certification, surfaces renewal deadlines 90 days early, and manages the full medical billing credential calendar in one view."
        crumbs={[{ label: 'For Medical Billing Specialists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How medical billing specialists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for billing certification and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Billing credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and compliance training managed through every billing certification cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {BILLING_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold CMRS and CPB — two billing certifications with different renewal cycles. Both require annual Medicare and code update training that I have to complete before specific dates in January and October. The payer update deadlines are the ones that create real risk — submitting claims under old billing rules after an update date creates denials and compliance problems. Momenties put the Medicare update, the CPT update, and the ICD update on the calendar as three separate mandatory events, and my two certification CE counters independently. I never conflate them anymore.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">G</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Gloria S., CMRS, CPB</div>
                  <div className="text-xs text-muted-foreground">Medical billing specialist and compliance auditor</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All billing credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'AAPC CPB certification CE — 2-year renewal',
                'AMBA CMRS certification CE — annual renewal',
                'Annual Medicare billing update — January',
                'Annual CPT update training — January',
                'Annual ICD-10 update training — October',
                'State Medicaid billing update — state-specific',
                'AAPC chapter CE requirement — annual',
                'AAPC and AMBA membership renewal',
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
        title="CMRS and CPB certifications maintained."
        subtitle="CE tracking by billing certification, annual payer update deadline calendar, and billing professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
