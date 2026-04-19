import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Clinical Neurophysiologists — ABPN MOC CME renewal, clinical neurophysiology credential management',
  description:
    'Clinical neurophysiologists manage ABPN neurology primary MOC and ABPN clinical neurophysiology subspecialty certification on a 10-year examination cycle, annual cEEG monitoring CE for neuro-ICU programs, annual intraoperative neurophysiological monitoring CE, ACNS accreditation requirements, state medical license biennial CME, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full credential calendar.',
  alternates: { canonical: '/for/clinical-neurophysiologists' },
  openGraph: {
    title: 'Momenties for Clinical Neurophysiologists',
    description: 'ABPN MOC CME renewal, clinical neurophysiology credential management.',
    url: '/for/clinical-neurophysiologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABPN neurology MOC and clinical neurophysiology subspecialty independently',
    desc: 'Clinical neurophysiologists hold ABPN neurology primary certification under continuous MOC and ABPN clinical neurophysiology subspecialty certification on a 10-year examination cycle — two ABPN credentials with different content requirements and a 24-month preparation window for the subspecialty examination. ABPN clinical neurophysiology subspecialty requires neurophysiology-specific content including electroencephalography (EEG) interpretation in epilepsy and critical illness, nerve conduction studies (NCS) and electromyography (EMG), evoked potentials (VEP, BAER, SSEP), intraoperative neurophysiological monitoring (IONM), and continuous EEG (cEEG) monitoring in neuro-ICU settings.',
  },
  {
    icon: Clock,
    title: 'Clinical neurophysiologist multi-credential renewal calendar',
    desc: '"ABPN neurology MOC — continuous CME." "ABPN clinical neurophysiology subspecialty — 10-year examination cycle, 24-month prep window." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual cEEG monitoring CE — ACNS Standardized Critical Care EEG Terminology updates." "Annual IONM CE — neuromonitoring technique updates, position statement compliance." "ACNS membership — annual." "AANEM membership — annual (for NCS/EMG)." All clinical neurophysiologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual cEEG monitoring CE and IONM technique update analytics',
    desc: 'Clinical neurophysiologists directing cEEG monitoring programs must maintain CE on ACNS Standardized Critical Care EEG Terminology — the 2021 update introduced the Critical Care EEG Terminology (CCEMRC) framework with specific criteria for periodic discharges, rhythmic patterns, and electrographic seizures in ICU patients. Annual cEEG CE ensures current interpretation of ictal-interictal continuum patterns and lateralized periodic discharges (LPDs, formerly PLEDs) as management implications evolve. Annual IONM CE: ACNS/ASNM position statement on intraoperative neurophysiological monitoring requires annual CE on multimodality monitoring (SSEP, MEP, free-run EMG, D-wave recording) for spinal cord surgery, cerebrovascular surgery, and posterior fossa procedures.',
  },
  {
    icon: Users,
    title: 'ACNS, AANEM, and clinical neurophysiology professional involvement',
    desc: '"ACNS Annual Meeting — february." "AANEM Annual Meeting — october." "AES Annual Meeting — december." "EAN European Academy of Neurology." "cEEG CE — ACNS 2024 Standardized Critical Care EEG Terminology update, seizure detection algorithm validation in ICU patients (Persyst P16 versus CNN models), non-convulsive status epilepticus treatment protocol updates in critically ill patients." "EMG/NCS CE — AANEM practice guidelines for electrodiagnosis in polyneuropathy, radiculopathy localization in cervical versus lumbosacral disease, EDX in neuromuscular junction disorders." "IONM CE — ACNS/ASNM position statement updates, MEP monitoring in prone positioning, high-risk spinal cord surgery alert criteria." All clinical neurophysiology professional development on calendar.',
  },
]

const CLINNEURO_WORKFLOW = [
  { time: 'Annual planning', action: 'ABPN neurology MOC CME pace (neurophysiology content weighted), ABPN clinical neurophysiology subspecialty CE pace (10-year cycle — 24-month prep window alert calculated from examination date), state medical license biennial CME, DEA 3-year renewal, annual cEEG monitoring CE, annual IONM CE, ACNS Annual Meeting, AANEM Annual Meeting, and ACNS membership all loaded in January. ABPN neurology counter and clinical neurophysiology subspecialty counter tracked independently.' },
  { time: 'CE completion', action: '"ACNS-approved — ACNS 2024 Standardized Critical Care EEG Terminology: ictal-interictal continuum (IIC) classification framework, lateralized periodic discharges (LPDs) with and without superimposed riding rhythm, stimulus-induced rhythmic periodic or ictal discharges (SIRPIDs) management in post-cardiac arrest monitoring, and seizure detection algorithm performance benchmarks against gold-standard human reviewer, 3 CME, AMA PRA Category 1, ABPN MOC applicable, ABPN clinical neurophysiology applicable — cEEG domain." Both ABPN counters update.' },
  { time: 'cEEG CE', action: '"Annual cEEG monitoring CE — ICU seizure management: non-convulsive status epilepticus (NCSE) treatment escalation protocol in post-cardiac arrest encephalopathy, continuous EEG monitoring duration guidelines for cardiac arrest survivors (72 hours), benzodiazepine dose and timing in NCSE versus prophylactic use in ICU seizures, and quantitative EEG trending (compressed spectral array, amplitude-integrated EEG) for seizure detection in high-acuity ICU patients, 2 CME, ABPN clinical neurophysiology applicable, Q1." Annual cEEG CE placed Q1 aligned with ACNS February annual meeting.' },
  { time: 'IONM CE', action: '"Annual intraoperative neurophysiological monitoring CE — spinal cord surgery monitoring: ACNS/ASNM position statement 2024 update for high-risk spinal cord surgery, transcranial electrical MEP alert criteria (>50% amplitude decrease versus >10% latency increase), SSEP combined with MEP and free-run EMG multimodality monitoring in anterior and posterior spinal procedures, and D-wave recording indications for intramedullary tumor resection, 3 CME, ABPN clinical neurophysiology applicable, Q3." Annual IONM CE placed Q3 aligned with AANEM October meeting.' },
  { time: 'Renewal audit', action: 'Analytics: ABPN neurology MOC CME on pace? ABPN clinical neurophysiology subspecialty content satisfied? (24-month prep window calculated?) State medical license CME complete? DEA valid? Annual cEEG monitoring CE documented? Annual IONM CE documented? ACNS and AANEM memberships active? Complete clinical neurophysiologist credential audit 90 days before earliest renewal.' },
]

export default function ForClinicalNeurophysiologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Clinical Neurophysiologists"
        title={
          <>
            ABPN neurology MOC and clinical neurophysiology subspecialty maintained.
            <br />
            <em className="not-italic text-gold">cEEG monitoring CE current. IONM technique knowledge tracked.</em>
          </>
        }
        lede="Clinical neurophysiologists manage ABPN neurology continuous MOC with neurophysiology subspecialty content, ABPN clinical neurophysiology subspecialty certification on a 10-year examination cycle with 24-month preparation window alerts, state medical license biennial CME, DEA 3-year registration, annual continuous EEG monitoring CE as ACNS Critical Care EEG Terminology evolves, annual intraoperative neurophysiological monitoring CE on ACNS/ASNM position statement updates, and professional development at ACNS and AANEM. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Clinical Neurophysiologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How clinical neurophysiologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for clinical neurophysiologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Clinical neurophysiologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABPN MOC cycles, clinical neurophysiology 10-year subspecialty examination, and annual cEEG and IONM CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {CLINNEURO_WORKFLOW.map((step, i) => (
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
                &ldquo;ABPN neurology continuous MOC and ABPN clinical neurophysiology subspecialty on a 10-year examination cycle — both tracked separately. The cEEG work in our neuro-ICU is where the terminology matters most: ACNS updated the Critical Care EEG Terminology and the clinical implications for LPDs changed meaningfully. I needed CE on the new framework before I could supervise fellows interpreting ICU EEGs under the new criteria. The IONM work has its own CE track — ACNS/ASNM position statements are binding for program accreditation and I need annual CE before I update our monitoring protocols. The 10-year subspecialty cycle means I have to think about my preparation window 24 months before the exam, not 6 months before. State license biennial. DEA 3-year. All of it on one calendar now.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">Y</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Yolanda F., MD, PhD</div>
                  <div className="text-xs text-muted-foreground">Clinical neurophysiologist and neuro-ICU EEG program director, academic neurology department</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All clinical neurophysiologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABPN neurology MOC CME — continuous, neurophysiology content weighted',
                'ABPN clinical neurophysiology subspecialty — 10-year cycle, 24-month preparation window alert',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual cEEG monitoring CE — ACNS Critical Care EEG Terminology updates',
                'Annual IONM CE — ACNS/ASNM position statement compliance, multimodality monitoring',
                'ACNS membership renewal — annual',
                'ACNS and AANEM conference CME planning by ABPN neurology and neurophysiology applicability',
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
        title="ABPN neurology MOC and clinical neurophysiology subspecialty maintained."
        subtitle="CME tracking for ABPN dual certification with 10-year exam prep window, annual cEEG monitoring CE, IONM position statement CE, and clinical neurophysiology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
