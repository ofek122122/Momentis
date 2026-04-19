import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Clinical Neurophysiologists — ABPN/ABIM MOC CME renewal, clinical neurophysiology credential management',
  description:
    'Clinical neurophysiologists manage ABPN neurology or ABIM internal medicine primary MOC and ABPN clinical neurophysiology subspecialty certification on a 10-year cycle, annual EEG CE as high-density EEG and machine learning seizure detection update interpretation standards, annual EMG/nerve conduction CE as ultrasound-guided electrodiagnosis and neuromuscular junction transmission testing protocols evolve, annual intraoperative neuromonitoring CE as MEP and SSEP alert criteria update, state medical license biennial CME, DEA 3-year renewal, and ACNS membership. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/clinical-neurophysiologists' },
  openGraph: {
    title: 'Momenties for Clinical Neurophysiologists',
    description: 'ABPN/ABIM MOC CME renewal, clinical neurophysiology credential management.',
    url: '/for/clinical-neurophysiologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for primary board MOC and ABPN clinical neurophysiology subspecialty independently',
    desc: 'Clinical neurophysiologists hold ABPN neurology or ABIM internal medicine primary board certification under continuous MOC alongside ABPN clinical neurophysiology subspecialty certification on a 10-year examination cycle with a 24-month preparation window. ABPN clinical neurophysiology requires modality-specific content: electroencephalography (EEG) including interictal and ictal pattern recognition, electromyography and nerve conduction studies (EMG/NCS) including neuromuscular junction testing, evoked potentials (SSEP, VEP, BAEP, MEP), long-term EEG monitoring including ambulatory EEG, and intraoperative neurophysiological monitoring (IONM) methodology and alert criteria.',
  },
  {
    icon: Clock,
    title: 'Clinical neurophysiologist multi-credential renewal calendar',
    desc: '"Primary board MOC (ABPN/ABIM) — continuous CME." "ABPN clinical neurophysiology subspecialty — 10-year examination cycle, 24-month prep window." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual EEG CE — ACNS 2021 standardized critical care EEG terminology update, machine learning automated seizure detection clinical validation." "Annual EMG/NCS CE — ultrasound-guided electrodiagnosis (UGNE) technique, AAEM consensus on distal symmetric polyneuropathy workup update." "Annual IONM CE — MEP alert criteria ACNS 2023 update, D-wave monitoring technique." "ACNS membership — annual." All clinical neurophysiology credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual EEG interpretation CE and IONM protocol update analytics',
    desc: 'Clinical neurophysiologists must maintain CE on evolving interpretation standards and monitoring protocols: the ACNS 2021 Critical Care EEG Terminology (CCET) standardized the classification of ictal-interictal continuum patterns — CE on the updated CCET is required for clinical neurophysiologists supervising critical care EEG services and signing out continuous EEG reports. Machine learning seizure detection CE has become relevant as FDA-cleared automated seizure detection algorithms (Persyst 14, Natus NeuroWorks) are deployed in clinical cEEG services — CE on algorithm limitations, false positive rate management, and human verification workflow requirements is now required for supervisors implementing automated detection.',
  },
  {
    icon: Users,
    title: 'ACNS, AANEM, and clinical neurophysiology professional development',
    desc: '"ACNS American Clinical Neurophysiology Society Annual Meeting — february." "AANEM American Association of Neuromuscular and Electrodiagnostic Medicine Annual Meeting — october." "AAN Annual Meeting — april." "EEG CE — ACNS standardized critical care EEG terminology CCET 2021 update (ictal-interictal continuum classification, brief potentially ictal rhythmic discharges BIRDs definition and clinical significance), machine learning seizure detection clinical deployment CE (Persyst 14 algorithm sensitivity/specificity in cEEG, human-in-the-loop verification protocol), pediatric EEG interpretation update (neonatal EEG background classification — Hellstrom-Westas scoring versus ACNS neonatal criteria), and high-density EEG source localization CE (hdEEG pre-surgical epilepsy workup: 256-channel versus 128-channel spatial resolution)." "EMG/NCS CE — ultrasound-guided nerve conduction (UGNE) technique CE (ulnar nerve at elbow sonography combined with NCS — localization accuracy versus standard segmental studies), AAEM update on distal symmetric polyneuropathy electrodiagnostic evaluation (skin biopsy intraepidermal nerve fiber density versus nerve conduction in small fiber neuropathy), and neuromuscular junction transmission testing CE (single-fiber EMG jitter threshold update for myasthenia gravis — low-jitter cutoff recalibration versus SFEMG fiber density as independent predictor)." "IONM CE — ACNS 2023 MEP alert criteria update (amplitude decrement threshold — 50% versus 80% in cortical versus subcortical surgeries), D-wave monitoring technique CE (direct epidural recording technique in intramedullary spinal cord tumor resection), and somatosensory evoked potential baseline variability CE (SSEP amplitude drift correction in long spine cases — technique CE for IONM professionals)." All clinical neurophysiology professional development on calendar.',
  },
]

const CNP_WORKFLOW = [
  { time: 'Annual planning', action: 'Primary board MOC CME pace (clinical neurophysiology content weighted), ABPN clinical neurophysiology subspecialty CE pace (10-year cycle — 24-month prep window alert calculated), state medical license biennial CME, DEA 3-year renewal, annual EEG CE, annual EMG/NCS CE, annual IONM CE, ACNS Annual Meeting, AANEM Annual Meeting, AAN Annual Meeting, and ACNS membership all loaded in January. Primary board counter and ABPN clinical neurophysiology counter tracked independently.' },
  { time: 'CE completion', action: '"ACNS-approved — ACNS 2024 Critical Care EEG update: ictal-interictal continuum management protocol (treatment threshold for highly ictal BIRD patterns in acute brain injury — clinical trial evidence for aggressive versus conservative management), automated seizure detection clinical deployment CE (machine learning algorithm validation against expert EEG reader — sensitivity-specificity tradeoff in ICU cEEG service), and pediatric critical care EEG terminology update (neonatal ictal pattern classification — electrographic seizure versus sharp waves in preterm brain), 4 CME, AMA PRA Category 1, primary board MOC applicable, ABPN clinical neurophysiology applicable." Both counters update.' },
  { time: 'EEG CE', action: '"Annual EEG CE — machine learning and high-density EEG update 2024: Persyst 14 automated seizure detection clinical validation in prospective multicenter cEEG study (sensitivity 87% versus expert review, false positive rate 0.8/hour requiring human verification), 256-channel hdEEG source localization versus 64-channel in pre-surgical epilepsy (concordance with intracranial EEG — clinical utility CE for epilepsy monitoring unit programs), sleep EEG staging update — AASM 2023 rule update for arousals in N2 sleep (K-complex scoring CE), and neonatal EEG burst-suppression ratio CE (amplitude-integrated EEG aEEG versus standard EEG for continuous neonatal monitoring in newborn ICU), 3 CME, ABPN clinical neurophysiology applicable, Q1." Annual EEG CE placed Q1 aligned with ACNS February meeting.' },
  { time: 'EMG CE', action: '"Annual EMG/NCS CE — ultrasound-guided electrodiagnosis 2024: UGNE ulnar nerve at elbow sonography combined with segmental NCS — localization accuracy in ulnar neuropathy (cross-sectional area cutoff at 10 mm2 with 85% sensitivity), AAEM polyneuropathy workup update (skin biopsy IENFD for small fiber neuropathy CE — indication when NCS normal and clinical suspicion remains), SFEMG jitter threshold recalibration CE (voluntary versus stimulated SFEMG jitter cutoffs in myasthenia gravis — age-adjusted reference ranges), and repetitive nerve stimulation decrement threshold CE (3 Hz RNS 10% decrement versus 15% — false positive rate in Lambert-Eaton versus myasthenia gravis differentiation), 3 CME, ABPN clinical neurophysiology applicable, Q3." Annual EMG CE placed Q3 aligned with AANEM October meeting.' },
  { time: 'Renewal audit', action: 'Analytics: Primary board MOC CME on pace? ABPN clinical neurophysiology subspecialty content satisfied? (24-month prep window calculated for 10-year exam?) State medical license CME complete? DEA valid? Annual EEG CE documented? Annual EMG/NCS CE documented? Annual IONM CE documented? ACNS membership active? Complete clinical neurophysiology credential audit 90 days before earliest renewal.' },
]

export default function ForClinicalNeurophysiologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Clinical Neurophysiologists"
        title={
          <>
            Primary board MOC and ABPN clinical neurophysiology subspecialty maintained.
            <br />
            <em className="not-italic text-gold">EEG interpretation CE current. IONM alert criteria tracked.</em>
          </>
        }
        lede="Clinical neurophysiologists manage primary board MOC (ABPN or ABIM) and ABPN clinical neurophysiology subspecialty certification on a 10-year examination cycle with 24-month preparation window alerts. Annual EEG CE as ACNS critical care terminology updates and machine learning seizure detection deploys in clinical cEEG services, annual EMG/NCS CE as ultrasound-guided electrodiagnosis and SFEMG threshold recalibrations update practice standards, annual IONM CE as MEP alert criteria evolve, state medical license biennial CME, DEA 3-year registration, and professional development at ACNS and AANEM. Momenties tracks CME by credential and manages the full calendar."
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through primary board MOC, ABPN 10-year subspecialty examination, and annual EEG, EMG/NCS, and IONM CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {CNP_WORKFLOW.map((step, i) => (
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
                &ldquo;Primary board continuous MOC and ABPN clinical neurophysiology on a 10-year cycle — tracked separately because the modality-specific content requirements are different from general neurology CME. The ACNS critical care EEG terminology CE was clinically urgent: when our hospital deployed Persyst automated seizure detection in the cEEG service, I needed documented CE on the algorithm validation, false positive rate, and human verification protocol before I could supervise the service. The SFEMG jitter threshold recalibration CE changed how I interpret borderline myasthenia cases — I needed current evidence before I could justify my interpretation on a new patient. The EMG ultrasound CE is where I spend the most time now because the technique changes my actual procedural workflow at the bedside. All on one calendar.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">L</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Leila N., MD, PhD</div>
                  <div className="text-xs text-muted-foreground">Clinical neurophysiologist and epilepsy monitoring unit director, academic neurology department</div>
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
                'Primary board MOC CME (ABPN/ABIM) — continuous, clinical neurophysiology content weighted',
                'ABPN clinical neurophysiology subspecialty — 10-year cycle, 24-month preparation window alert',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual EEG CE — ACNS CCET update, machine learning detection deployment, hdEEG',
                'Annual EMG/NCS CE — ultrasound-guided electrodiagnosis, SFEMG threshold, polyneuropathy',
                'Annual IONM CE — MEP alert criteria ACNS update, D-wave monitoring, SSEP variability',
                'ACNS and AANEM conference CME planning by ABPN and primary board applicability',
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
        title="Primary board MOC and ABPN clinical neurophysiology subspecialty maintained."
        subtitle="CME tracking for primary board MOC and ABPN 10-year exam prep window, annual EEG CE, EMG/NCS CE, IONM CE, and clinical neurophysiology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
