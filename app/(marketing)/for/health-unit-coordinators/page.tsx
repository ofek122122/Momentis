import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Health Unit Coordinators — NAHUC CHUC CE renewal, credential tracking, and unit coordinator management',
  description:
    'Health Unit Coordinators manage NAHUC CHUC certification renewal with CE requirements, annual mandatory hospital compliance training, BLS 2-year renewal, institutional competency assessments, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full health unit coordinator credential calendar.',
  alternates: { canonical: '/for/health-unit-coordinators' },
  openGraph: {
    title: 'Momenties for Health Unit Coordinators',
    description: 'NAHUC CHUC CE renewal, credential tracking, and unit coordinator management.',
    url: '/for/health-unit-coordinators',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CHUC certification renewal',
    desc: 'NAHUC Certified Health Unit Coordinator (CHUC) certification requires continuing education for renewal. CE must be in applicable health unit coordinating content areas: medical terminology, transcription practices, communication, and patient care coordination. CE logged by CHUC applicability. Hospital mandatory compliance training may or may not qualify for CHUC CE — logged separately to avoid conflation.',
  },
  {
    icon: Clock,
    title: 'HUC multi-credential renewal calendar',
    desc: '"CHUC — NAHUC, renewal cycle CE." "BLS — 2-year." "Annual hospital compliance training — institutional, annually." "Annual competency assessment — unit-specific." "Mandatory safety and infection control training — annual." "HIPAA refresher — annual." "NAHUC membership — annual." All health unit coordinator credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Hospital mandatory compliance CE analytics',
    desc: 'Health unit coordinators in hospital settings face annual mandatory compliance training requirements from The Joint Commission and institutional policy: fire safety, patient safety, infection control, HIPAA, and workplace violence prevention. Mandatory compliance CE tracked as a separate annual category from CHUC certification CE. Each mandatory training confirmed complete before annual compliance attestation.',
  },
  {
    icon: Users,
    title: 'NAHUC and health unit coordinating professional involvement',
    desc: '"NAHUC Annual Educational Conference." "State health unit coordinating society conference." "Hospital patient care coordination education." "EHR system updates and training — periodic." "Medical terminology updates." All health unit coordinating professional development on calendar. NAHUC Annual Conference CE tagged by CHUC applicability in advance.',
  },
]

const HUC_WORKFLOW = [
  { time: 'Annual planning', action: 'CHUC renewal CE cycle, annual hospital mandatory compliance training, annual competency assessment, BLS 2-year cycle, NAHUC Annual Conference, and NAHUC membership all loaded in January. CE pace calculated per CHUC renewal cycle. Mandatory annual compliance training placed as recurring events each January.' },
  { time: 'CE completion', action: '"NAHUC-approved — EHR transcription skills and accuracy in health unit coordinating, 2 CE, CHUC applicable." Tagged as CHUC-applicable CE. CHUC counter updates. Hospital compliance training logged separately — compliance training may not qualify for CHUC CE depending on content. Each tracked independently.' },
  { time: 'Mandatory training', action: '"Annual compliance attestation training — fire safety, infection control, HIPAA, patient safety, 4 hours." Hospital mandatory training documented as institutional compliance requirement, separate from CHUC certification CE. Compliance attestation due by December 31 annually. Placed as a recurring Q4 event with reminders beginning in October.' },
  { time: 'BLS renewal', action: '"BLS renewal — 2-year, april." BLS tracked on 2-year cycle independent of CHUC certification cycle and annual compliance training. BLS expiration is a hospital credentialing requirement. Expiration places HUC at risk of suspension pending renewal. BLS reminder placed 90 days before certification expiration.' },
  { time: 'Renewal audit', action: 'Analytics: CHUC CE current? Annual hospital compliance training complete? BLS valid? Annual competency assessment documented? HIPAA refresher complete? NAHUC membership active? Complete health unit coordinator credential audit 90 days before CHUC renewal. Institutional compliance documentation maintained separately from NAHUC certification records.' },
]

export default function ForHealthUnitCoordinatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Health Unit Coordinators"
        title={
          <>
            CHUC certification maintained.
            <br />
            <em className="not-italic text-gold">Annual compliance and BLS never missed.</em>
          </>
        }
        lede="Health Unit Coordinators manage NAHUC CHUC certification renewal CE, annual hospital mandatory compliance training requirements (fire safety, HIPAA, infection control, patient safety), BLS 2-year renewal, unit-specific competency assessments, and professional development simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full health unit coordinator credential calendar in one view."
        crumbs={[{ label: 'For Health Unit Coordinators' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How health unit coordinators use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for HUC credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">HUC credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every CHUC renewal cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {HUC_WORKFLOW.map((step, i) => (
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
                &ldquo;Health unit coordinating has more credential tracking than most people realize. I have CHUC certification, BLS, and six different hospital annual mandatory training modules that all need to be completed by year-end. The hospital compliance modules are the ones that get people — they don&apos;t count toward CHUC CE but the department manager still pulls the compliance report in December. Momenties lets me track the CHUC CE separately from the hospital compliance list. I can show both are current without mixing them up.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">V</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Vanessa C., CHUC</div>
                  <div className="text-xs text-muted-foreground">Health unit coordinator, acute care medical-surgical unit</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All health unit coordinator credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'NAHUC CHUC certification CE — renewal cycle',
                'BLS certification — 2-year renewal',
                'Annual hospital compliance training — 6 modules',
                'Annual unit-specific competency assessment',
                'HIPAA refresher training — annual',
                'Infection control and patient safety CE — annual',
                'NAHUC membership renewal — annual',
                'EHR system update training — as required',
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
        title="CHUC certification maintained."
        subtitle="CE tracking by credential, annual compliance training calendar, and health unit coordinating professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
