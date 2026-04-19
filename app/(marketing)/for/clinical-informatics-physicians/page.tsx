import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Clinical Informatics Physicians — ABPM clinical informatics MOC CME renewal, health IT credential management',
  description:
    'Clinical informatics physicians manage ABPM clinical informatics subspecialty MOC with ABIM, ACP, or other primary board MOC on independent cycles, ONC health IT certification maintenance CE, annual EHR governance and interoperability CE, state medical license biennial CME, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full clinical informatics physician credential calendar.',
  alternates: { canonical: '/for/clinical-informatics-physicians' },
  openGraph: {
    title: 'Momenties for Clinical Informatics Physicians',
    description: 'ABPM clinical informatics MOC CME renewal, health IT credential management.',
    url: '/for/clinical-informatics-physicians',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for primary board MOC and ABPM clinical informatics subspecialty independently',
    desc: 'Clinical informatics physicians hold a primary board certification (ABIM internal medicine, ABP pediatrics, ABEM emergency medicine, ABS surgery, or other ABMS member board) under continuous MOC and ABPM clinical informatics subspecialty certification on a separate 10-year cycle — two credentials with different CME content requirements and different certifying organizations. ABPM clinical informatics requires informatics-specific content including clinical decision support, EHR implementation and governance, health data standards (HL7 FHIR, CCD, SNOMED CT), interoperability, and population health informatics. Primary board MOC runs on a continuous cycle with different clinical content requirements.',
  },
  {
    icon: Clock,
    title: 'Clinical informatics physician multi-credential renewal calendar',
    desc: '"Primary board MOC — continuous CME (ABIM IM, ABP pediatrics, ABEM EM, or other ABMS board)." "ABPM clinical informatics subspecialty — 10-year cycle, informatics content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual EHR governance and interoperability CE." "Annual health data privacy and security CE (HIPAA updates)." "AMIA membership — annual." "HIMSS membership — annual." All clinical informatics physician credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'ABPM 10-year examination countdown and ONC health IT certification CE analytics',
    desc: 'ABPM clinical informatics subspecialty certification requires examination every 10 years — a cycle long enough to disappear from active planning horizons and resurface as an urgent deadline. ONC health IT certification programs require documented CE for certified health IT professionals — including ONC Health IT Certification Program updates, Trusted Exchange Framework and Common Agreement (TEFCA) implementation updates, and 21st Century Cures Act information blocking rule changes. Annual CE for HIPAA Security Rule updates and NIST cybersecurity framework changes is a practice requirement for physicians in informatics leadership roles with access to EHR governance and patient data systems.',
  },
  {
    icon: Users,
    title: 'AMIA, HIMSS, and clinical informatics professional involvement',
    desc: '"AMIA Annual Symposium — november." "HIMSS Annual Conference — march." "AMIA Joint Summits on Translational Science — march." "Society for Imaging Informatics in Medicine Annual Meeting (if imaging informatics focus)." "Clinical decision support CE — CDS hooks implementation, alert fatigue reduction." "FHIR implementation CE — HL7 FHIR R4, SMART on FHIR application development." "Interoperability CE — TEFCA, CommonWell, Carequality." "Population health analytics CE — risk stratification, quality measure attribution." All clinical informatics professional development on calendar. AMIA and HIMSS conference CME tagged by primary board and ABPM applicability.',
  },
]

const CIPHY_WORKFLOW = [
  { time: 'Annual planning', action: 'Primary board MOC CME pace (clinical content), ABPM clinical informatics subspecialty CE pace (informatics content), state medical license biennial CME, DEA 3-year renewal, annual EHR governance CE, annual health data privacy CE, AMIA Annual Symposium, HIMSS Annual Conference, and AMIA and HIMSS memberships all loaded in January. Primary board counter, ABPM informatics counter, and state licensure CME tracked independently. ABPM 10-year examination countdown displayed in credential dashboard.' },
  { time: 'CE completion', action: '"AMIA-approved — HL7 FHIR R4 implementation in clinical decision support: CDS Hooks architecture, SMART on FHIR authorization flow, FHIR subscription resources for real-time alerting, and EHR sandbox testing protocols, 2 CME, AMA PRA Category 1, primary board MOC applicable, ABPM clinical informatics applicable — clinical decision support domain." Primary board counter updates. ABPM informatics counter updates. State licensure CME updates. Informatics content confirmed.' },
  { time: 'Privacy CE', action: '"Annual health data privacy and security CE — HIPAA Security Rule updates: 2024 proposed rule changes to technical safeguards, multi-factor authentication requirements for covered entities, and risk analysis methodology updates per HHS guidance, 2 CME, ABPM clinical informatics applicable — health information governance domain, Q1." Annual privacy CE placed as informatics practice requirement. HIPAA Security Rule proposed changes and HHS guidance updates require annual awareness for physicians in EHR governance and data access roles.' },
  { time: 'Interoperability CE', action: '"Annual interoperability CE — TEFCA and Qualified Health Information Networks: QHIN onboarding requirements, information blocking rule exceptions under 21st Century Cures Act, and patient access API compliance for healthcare organizations, 2 CME, ABPM clinical informatics applicable — interoperability domain, Q2." Annual interoperability CE placed for clinical informatics physicians managing EHR vendor relationships or serving as organizational informatics leadership. Information blocking rule enforcement and TEFCA participant requirements change annually.' },
  { time: 'Renewal audit', action: 'Analytics: Primary board MOC CME on pace and content-appropriate? ABPM clinical informatics CE current with informatics-specific content? State medical license CME complete? DEA valid? Annual EHR governance CE documented? Annual health data privacy CE documented? ABPM examination date tracked (10-year cycle)? AMIA and HIMSS memberships active? Complete clinical informatics physician credential audit 90 days before earliest renewal.' },
]

export default function ForClinicalInformaticsPhysiciansPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Clinical Informatics Physicians"
        title={
          <>
            Primary board MOC and ABPM informatics maintained.
            <br />
            <em className="not-italic text-gold">10-year ABPM cycle tracked. Annual health IT CE documented.</em>
          </>
        }
        lede="Clinical informatics physicians manage primary board continuous MOC (ABIM, ABP, ABEM, or other ABMS board) with clinical content requirements alongside ABPM clinical informatics subspecialty certification on a 10-year examination cycle, state medical license biennial CME, DEA 3-year registration, annual EHR governance and interoperability CE, annual HIPAA Security Rule updates, and professional development at AMIA and HIMSS simultaneously. Momenties tracks CME by clinical informatics credential, surfaces renewal deadlines 90 days early, and manages the full credential calendar in one view."
        crumbs={[{ label: 'For Clinical Informatics Physicians' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How clinical informatics physicians use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for clinical informatics physician credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Clinical informatics physician credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through primary board MOC, ABPM 10-year informatics cycle, and annual health IT regulatory CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {CIPHY_WORKFLOW.map((step, i) => (
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
                &ldquo;My primary board is ABIM internal medicine. My subspecialty certification is ABPM clinical informatics — that&apos;s a different certifying organization entirely, separate from ABIM, with its own MOC requirements and a 10-year examination cycle. None of the ABIM reminder systems know about my ABPM informatics certification. I also do annual CE on interoperability and information blocking because the regulations change every year and I&apos;m responsible for our organization&apos;s information blocking compliance — that CE doesn&apos;t come from a board requirement, it comes from my role. HIPAA Security Rule changes require annual awareness for anyone in EHR governance. State license biennial, DEA 3-year. Before Momenties, my ABPM certification and my practice-required regulatory CE lived in separate spreadsheets that I updated manually. The 10-year ABPM cycle is the one that catches people by surprise in informatics — you get certified, it feels modern and current, and then 7 years later someone asks when it expires.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">R</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Richard S., MD, FACMI</div>
                  <div className="text-xs text-muted-foreground">Chief medical information officer and clinical informatics physician, academic health system</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All clinical informatics physician credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Primary board MOC CME — continuous (ABIM, ABP, ABEM, or other ABMS board)',
                'ABPM clinical informatics subspecialty — 10-year examination cycle countdown',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual EHR governance and interoperability CE — TEFCA, FHIR, information blocking',
                'Annual health data privacy CE — HIPAA Security Rule updates',
                'AMIA membership renewal — annual',
                'AMIA and HIMSS conference CME planning by primary board and ABPM applicability',
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
        title="Primary board MOC and ABPM informatics maintained."
        subtitle="CME tracking with dual-board coordination, ABPM 10-year examination countdown, annual health IT regulatory CE, and informatics professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
