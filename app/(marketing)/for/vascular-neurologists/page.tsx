import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Vascular Neurologists — ABPN MOC CME renewal, vascular neurology credential management',
  description:
    'Vascular neurologists manage ABPN neurology primary MOC with stroke subspecialty content, ABPN vascular neurology subspecialty certification on a 10-year examination cycle, annual stroke systems of care CE for thrombectomy center certification maintenance, annual tPA and alteplase protocol CE as tenecteplase replaces alteplase, state medical license biennial CME, DEA 3-year renewal, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full credential calendar.',
  alternates: { canonical: '/for/vascular-neurologists' },
  openGraph: {
    title: 'Momenties for Vascular Neurologists',
    description: 'ABPN MOC CME renewal, vascular neurology credential management.',
    url: '/for/vascular-neurologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABPN neurology MOC and vascular neurology subspecialty independently',
    desc: 'Vascular neurologists hold ABPN neurology primary certification under continuous MOC and ABPN vascular neurology subspecialty certification on a 10-year examination cycle — two ABPN credentials with different content requirements. ABPN vascular neurology subspecialty requires stroke-specific content including ischemic stroke mechanisms (large vessel occlusion, cardioembolic, small vessel disease, cryptogenic), hemorrhagic stroke (ICH and SAH management), transient ischemic attack evaluation, cerebrovascular imaging (CT angiography, MR perfusion, DSA), endovascular stroke therapy (thrombectomy, angioplasty, carotid stenting), and stroke prevention (anticoagulation, antiplatelet therapy, risk factor management). ABPN neurology MOC runs on a continuous cycle with different content requirements.',
  },
  {
    icon: Clock,
    title: 'Vascular neurologist multi-credential renewal calendar',
    desc: '"ABPN neurology MOC — continuous CME." "ABPN vascular neurology subspecialty — 10-year examination cycle." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual stroke systems of care CE — comprehensive stroke center certification maintenance." "Annual thrombolysis protocol CE — tenecteplase versus alteplase in ischemic stroke." "Annual thrombectomy CE — DAWN/DEFUSE-3 extended window criteria, mechanical thrombectomy technique updates." "ASA/AHA Stroke Council membership — annual." All vascular neurologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual thrombolysis CE and thrombectomy extended window analytics',
    desc: 'Vascular neurologists directing stroke programs must maintain CE on thrombolysis — tenecteplase (TNK) is replacing alteplase as first-line thrombolytic in ischemic stroke following ATTEST-2, NOR-TEST 2, and TIMELESS trial data, requiring annual protocol CE as hospital formularies transition from tPA to TNK. Annual mechanical thrombectomy CE: DAWN and DEFUSE-3 extended window criteria have expanded thrombectomy eligibility to 24 hours post-onset using perfusion imaging — annual CE on select-d perfusion thresholds, collateral scoring (ASPECTS), and imaging triage protocols. Comprehensive stroke center (CSC) Joint Commission certification requires annual documented CE for stroke program medical directors.',
  },
  {
    icon: Users,
    title: 'ASA Stroke Council, ISC, and vascular neurology professional involvement',
    desc: '"International Stroke Conference (ISC) — february." "European Stroke Organisation Conference (ESOC) — may." "ASA Scientific Sessions — november." "American Neurological Association Annual Meeting — october." "Thrombolysis CE — tenecteplase TIMELESS trial final data, AI-based CT perfusion automated ASPECTS scoring, wake-up stroke tenecteplase eligibility." "Thrombectomy CE — medium vessel occlusion (MeVO) thrombectomy evidence, contact aspiration versus stent retriever first-line, distal access catheter selection." "Prevention CE — POINT trial extended follow-up, CHANCE-2 ticagrelor/clopidogrel versus DAPT in TIA/minor stroke by CYP2C19 genotype." "Imaging CE — CT perfusion vs. DWI-FLAIR mismatch in unknown-onset stroke." All vascular neurology professional development on calendar. ISC and ESOC conference CME tagged by ABPN primary and subspecialty applicability.',
  },
]

const VASNEUROL_WORKFLOW = [
  { time: 'Annual planning', action: 'ABPN neurology MOC CME pace (stroke content weighted), ABPN vascular neurology subspecialty CE pace (10-year cycle), state medical license biennial CME, DEA 3-year renewal, annual thrombolysis protocol CE, annual thrombectomy criteria CE, annual stroke systems CE for CSC certification, ISC, ESOC, ASA Scientific Sessions, and ASA/AHA Stroke Council membership all loaded in January. ABPN neurology counter and vascular neurology subspecialty counter tracked independently.' },
  { time: 'CE completion', action: '"AHA-approved — tenecteplase versus alteplase in ischemic stroke: TIMELESS trial final outcomes (tenecteplase 0.25 mg/kg versus 0.9 mg/kg alteplase in LVO prior to thrombectomy), ATTEST-2 non-LVO tenecteplase efficacy and hemorrhagic transformation rates, hospital formulary transition protocol for TNK implementation, and door-to-needle time impact of single-bolus TNK versus alteplase infusion, 2 CME, AMA PRA Category 1, ABPN MOC applicable, ABPN vascular neurology applicable — thrombolysis domain." ABPN neurology counter updates. Vascular neurology subspecialty counter updates.' },
  { time: 'Thrombectomy CE', action: '"Annual mechanical thrombectomy CE — extended window and MeVO evidence: DAWN/DEFUSE-3 perfusion mismatch imaging criteria for 6-24 hour LVO thrombectomy, SELECT-2 late window benefit by ASPECTS score, distal medium vessel occlusion thrombectomy outcome data (M2/M3, P2/P3, BA perforators), and automated perfusion software (RAPID, Viz.ai) clinical integration in triage decision-making, 3 CME, ABPN vascular neurology applicable, Q1." Annual thrombectomy CE placed Q1. ISC typically presents major thrombectomy trial updates in February — CE timed to incorporate final data presented at ISC.' },
  { time: 'Stroke systems CE', action: '"Annual stroke systems of care CE — comprehensive stroke center certification: Joint Commission CSC standards 2025 update, stroke center performance metrics (door-to-needle time benchmarks, door-to-puncture targets), telestroke coverage requirements for primary stroke center agreements, and drip-and-ship versus mothership transfer protocols for LVO patients at non-thrombectomy-capable centers, 2 CME, ABPN vascular neurology applicable, Q2." Annual stroke systems CE placed Q2. Joint Commission CSC certification requires annual medical director CE on stroke systems metrics — documented separately from ABPN MOC.' },
  { time: 'Renewal audit', action: 'Analytics: ABPN neurology MOC CME on pace? ABPN vascular neurology subspecialty content satisfied? (10-year cycle — 24-month prep window calculated?) State medical license CME complete? DEA valid? Annual thrombolysis protocol CE documented? Annual thrombectomy CE documented? Annual stroke systems CE documented? ASA/AHA Stroke Council membership active? Complete vascular neurologist credential audit 90 days before earliest renewal.' },
]

export default function ForVascularNeurologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Vascular Neurologists"
        title={
          <>
            ABPN neurology MOC and vascular neurology subspecialty maintained.
            <br />
            <em className="not-italic text-gold">Tenecteplase protocol CE current. Thrombectomy criteria tracked.</em>
          </>
        }
        lede="Vascular neurologists manage ABPN neurology continuous MOC with stroke subspecialty content, ABPN vascular neurology subspecialty certification on a 10-year examination cycle with 24-month preparation window alerts, state medical license biennial CME, DEA 3-year registration, annual thrombolysis protocol CE as tenecteplase replaces alteplase across hospital formularies, annual mechanical thrombectomy CE on extended window criteria and medium vessel occlusion evidence, annual stroke systems CE for CSC certification, and professional development at ISC, ESOC, and ASA. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Vascular Neurologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How vascular neurologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for vascular neurologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Vascular neurologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABPN MOC cycles, vascular neurology subspecialty 10-year examination, and annual thrombolysis, thrombectomy, and stroke systems CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {VASNEUROL_WORKFLOW.map((step, i) => (
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
                &ldquo;ABPN tracks my general neurology and my vascular neurology subspecialty on different cycles. The tenecteplase transition is the most significant change in acute stroke practice in a decade — our hospital switched formularies last year and I had CE requirements from the stroke program and from the pharmacy committee before I could supervise TNK administration. That CE had nothing to do with my board renewal date — it had to do with the formulary transition date. Extended window thrombectomy criteria keep moving: SELECT-2 changed how I think about late-window patients with large infarct cores. ISC presents major trial data every February and I need CE before I update our institutional protocols — the protocol can&apos;t wait for my next MOC cycle. Stroke is the one field where what you knew three years ago at your last board renewal can actively hurt a patient today.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">N</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Natalie P., MD</div>
                  <div className="text-xs text-muted-foreground">Vascular neurologist and comprehensive stroke center medical director, academic neurology department</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All vascular neurologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABPN neurology MOC CME — continuous, stroke and cerebrovascular content weighted',
                'ABPN vascular neurology subspecialty — 10-year cycle, 24-month preparation window alert',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual thrombolysis protocol CE — tenecteplase vs. alteplase transition, TNK dosing',
                'Annual mechanical thrombectomy CE — extended window, MeVO, perfusion imaging criteria',
                'Annual stroke systems CE — CSC certification, door-to-needle and door-to-puncture metrics',
                'ISC, ESOC, and ASA conference CME planning by ABPN neurology and vascular neurology applicability',
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
        title="ABPN neurology MOC and vascular neurology subspecialty maintained."
        subtitle="CME tracking for ABPN dual certification, annual thrombolysis protocol CE, thrombectomy extended window CE, stroke systems certification CE, and vascular neurology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
