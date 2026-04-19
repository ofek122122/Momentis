import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Clinical Documentation Specialists — CDIP/CCDS CE renewal, CDI specialist credential management',
  description:
    'Clinical documentation improvement specialists manage ACDIS CCDS or AHIMA CDIP certification CE renewal on independent cycles, state coding or HIM licensure CE, annual CDI program competency, ICD-10-CM/PCS annual update training, mandatory compliance CE, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full CDI specialist credential calendar.',
  alternates: { canonical: '/for/clinical-documentation-specialists' },
  openGraph: {
    title: 'Momenties for Clinical Documentation Specialists',
    description: 'CDIP/CCDS CE renewal, CDI specialist credential management.',
    url: '/for/clinical-documentation-specialists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CCDS, CDIP, and state HIM licensure renewal',
    desc: 'ACDIS Certified Clinical Documentation Specialist (CCDS) and AHIMA Certified Documentation Improvement Practitioner (CDIP) are independent certifications from different organizations with different renewal requirements and CE cycles. CDI specialists holding both face independent CE tracking across two certifying bodies. State HIM or coding licensure (where applicable) runs on an independent biennial cycle with AHIMA or AAPC CE credit requirements. CCDS counter, CDIP counter, and state licensure tracked independently.',
  },
  {
    icon: Clock,
    title: 'CDI specialist multi-credential renewal calendar',
    desc: '"CCDS — ACDIS, CE per renewal cycle." "CDIP — AHIMA, 20 CE/2 years (if applicable)." "State HIM or CCS licensure CE — biennial." "ICD-10-CM/PCS annual update training — October." "Annual CDI program competency assessment." "OIG compliance training — annual." "ACDIS membership — annual." All CDI specialist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'ICD-10 annual update and compliance training analytics',
    desc: 'ICD-10-CM/PCS annual updates take effect each October 1 — CDI specialists responsible for query accuracy must document annual update training before the effective date. OIG annual compliance training required for CDI staff in most hospital compliance programs, separate from CCDS or CDIP CE. Annual CDI program competency covering query writing, physician engagement, and denial management tracked as institutional requirement. Each tracked independently with October effective date alerts.',
  },
  {
    icon: Users,
    title: 'ACDIS, AHIMA, and CDI professional involvement',
    desc: '"ACDIS Annual Conference — spring." "AHIMA Annual Convention — fall." "ACDIS CDI Week — September." "AHIMA Regional Meetings — quarterly CE." "ICD-10-CM/PCS coding updates CE — October." "Outpatient CDI expansion CE." "Ambulatory CDI and physician query CE." "HCC risk adjustment and value-based care CDI CE." All CDI professional development on calendar. ACDIS and AHIMA conference CE tagged by CCDS and CDIP applicability.',
  },
]

const CDI_WORKFLOW = [
  { time: 'Annual planning', action: 'CCDS renewal CE cycle, CDIP renewal CE cycle (if applicable), state HIM/coding licensure biennial CE, OIG compliance training date, ICD-10 October update training, annual CDI program competency, ACDIS Annual Conference, and ACDIS membership all loaded in January. CCDS and CDIP CE counters tracked independently — CE that qualifies for one may not qualify for both.' },
  { time: 'CE completion', action: '"ACDIS-approved — sepsis documentation: SEP-1 core measure, clinical indicators for systemic infection, and physician query strategies for documentation specificity, 2 CE, CCDS applicable." Tagged by applicable certification. If CDIP also applies, CDIP counter updates. OIG compliance CE tagged separately — compliance CE is institutional, not certification CE.' },
  { time: 'ICD-10 update', action: '"ICD-10-CM/PCS annual update training — October 1 effective date, September completion target." ICD-10 annual update training placed as an institutional requirement with September completion date — before October 1 effective date. CDI specialists responsible for query accuracy must be trained on code changes before they take effect. October update training placed independently from CCDS/CDIP CE, tagged as a hard deadline.' },
  { time: 'Compliance training', action: '"OIG compliance training — annual, Q1." Annual OIG compliance training placed as an institutional requirement under hospital compliance program. CDI specialists participate in query integrity, upcoding avoidance, and documentation accuracy training independent of CCDS or CDIP CE documentation. Compliance training placed separately — institutional completion tracked differently from certification CE submission.' },
  { time: 'Renewal audit', action: 'Analytics: CCDS CE adequate for renewal? CDIP CE adequate (if applicable)? State licensure CE complete? ICD-10 annual update training done before October 1? OIG compliance training current? Annual CDI competency assessment complete? ACDIS membership active? Complete CDI credential audit 90 days before earliest certification renewal. ACDIS, AHIMA, and state documentation maintained separately.' },
]

export default function ForClinicalDocumentationSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Clinical Documentation Specialists"
        title={
          <>
            CCDS and CDIP certifications maintained.
            <br />
            <em className="not-italic text-gold">ICD-10 updates and compliance training never missed.</em>
          </>
        }
        lede="Clinical documentation improvement specialists manage ACDIS CCDS and AHIMA CDIP certification CE renewal on independent cycles from separate certifying bodies, state HIM or coding licensure on an independent biennial cycle, ICD-10-CM/PCS annual update training with a hard October 1 effective date, annual OIG compliance training, annual CDI program competency, and professional development simultaneously. Momenties tracks CE by CDI credential, surfaces renewal deadlines 90 days early, and manages the full clinical documentation specialist credential calendar in one view."
        crumbs={[{ label: 'For Clinical Documentation Specialists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How clinical documentation specialists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for CDI specialist credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">CDI specialist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every CCDS/CDIP cycle, ICD-10 update, and compliance requirement.</h2>
          </Reveal>
          <div className="space-y-3">
            {CDI_WORKFLOW.map((step, i) => (
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
                &ldquo;I have both CCDS from ACDIS and CDIP from AHIMA because when I moved jobs, the new facility required CDIP. They have different renewal cycles and I track them in different portals. My state doesn&apos;t require HIM licensure but I maintain CCS anyway, which is a third cycle. Then there&apos;s the ICD-10 annual update — that&apos;s a hard October 1 deadline that has nothing to do with any of my certifications but it directly affects my work. And OIG compliance training that the hospital tracks separately. I had five different things in five different places. Momenties consolidated them. The October alert for ICD-10 updates is the one I use every single year.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">L</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Lorraine C., RN, CCDS, CDIP</div>
                  <div className="text-xs text-muted-foreground">Clinical documentation specialist, large health system CDI program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All CDI specialist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ACDIS CCDS certification CE — renewal cycle',
                'AHIMA CDIP certification CE — 20 hours/2 years',
                'State HIM or CCS licensure CE — biennial',
                'ICD-10-CM/PCS annual update training — October 1 deadline',
                'Annual OIG compliance training — institutional',
                'Annual CDI program competency assessment',
                'ACDIS membership renewal — annual',
                'ACDIS and AHIMA conference CE planning by CCDS/CDIP applicability',
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
        title="CCDS and CDIP certifications maintained."
        subtitle="CE tracking by certification, ICD-10 October update alerts, compliance training calendar, and CDI professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
