import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Movement Disorder Specialists — ABPN MOC CME renewal, movement disorder credential management',
  description:
    'Movement disorder specialists manage ABPN neurology primary MOC and UCNS movement disorders subspecialty certification on a 10-year cycle, annual deep brain stimulation CE as programming algorithms and MRI-conditional hardware protocols evolve, annual Parkinson disease CE as prasinezumab, lixisenatide, and LRRK2 inhibitor trials update neuroprotection evidence, annual levodopa-carbidopa intestinal gel CE, state medical license biennial CME, and MDS membership. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/movement-disorder-specialists' },
  openGraph: {
    title: 'Momenties for Movement Disorder Specialists',
    description: 'ABPN MOC CME renewal, movement disorder credential management.',
    url: '/for/movement-disorder-specialists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABPN neurology MOC and UCNS movement disorders subspecialty independently',
    desc: 'Movement disorder specialists hold ABPN neurology primary certification under continuous MOC and UCNS (United Council for Neurologic Subspecialties) movement disorders subspecialty certification on a 10-year examination cycle with a 24-month preparation window. UCNS movement disorders requires movement-specific content: Parkinson disease diagnosis and management (motor and non-motor features), atypical parkinsonism (MSA, PSP, CBS/CBD, DLB — diagnostic criteria and prognosis), hyperkinetic movement disorders (dystonia, tremor, chorea — including Huntington disease), functional movement disorders, and device-aided therapy (DBS, focused ultrasound, levodopa-carbidopa intestinal gel).',
  },
  {
    icon: Clock,
    title: 'Movement disorder specialist multi-credential renewal calendar',
    desc: '"ABPN neurology MOC — continuous CME." "UCNS movement disorders subspecialty — 10-year examination cycle, 24-month prep window." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual DBS CE — directional programming update, MRI-conditional DBS protocol, closed-loop DBS adaptive stimulation data." "Annual Parkinson CE — prasinezumab Phase 2b data, lixisenatide GLP-1 agonist PD neuroprotection, LRRK2 inhibitor BIIB122 Phase 3 enrollment." "Annual LCIG CE — levodopa-carbidopa intestinal gel device management, Produodopa subcutaneous levodopa-carbidopa pump." "MDS membership — annual." All movement disorder credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual DBS CE and Parkinson neuroprotection update analytics',
    desc: 'Movement disorder specialists managing DBS must maintain CE on rapidly evolving programming technology: directional DBS (Boston Scientific Vercise Genus, Medtronic SureScan, Abbott Infinity) steering capability has changed programming workflows requiring specific CE for each platform. MRI-conditional DBS protocols have been updated with specific SAR limits and coil compatibility requirements — institutional protocol updates require CE before performing MRI on DBS patients. Annual Parkinson neuroprotection CE: lixisenatide (GLP-1 agonist) Phase 2 neuroprotection trial in Parkinson disease (LILAS trial — 2024 data showing slower UPDRS progression at 1 year versus placebo) changed the clinical conversation about GLP-1 prescribing in PD patients with diabetes.',
  },
  {
    icon: Users,
    title: 'MDS, MDSC, and movement disorder professional development',
    desc: '"MDS International Congress — october (biennial)." "MDS Americas Regional Congress — biennial." "AAN Annual Meeting — april." "American Dystonia Society Annual Meeting — october." "DBS CE — closed-loop adaptive DBS (Medtronic BrainSense Stream 24/7 LFP biomarker feedback) Phase 2 efficacy data, directional programming workflow (StimPilot software) — steering current efficiency optimization, DBS for tremor-dominant PD versus essential tremor — programming parameter differences, and focused ultrasound thalamotomy versus DBS in essential tremor — 5-year outcomes and off-target effects comparison." "Parkinson CE — MPDNA LRRK2 inhibitor BIIB122 Phase 3 trial enrollment and mechanism, prasinezumab anti-alpha-synuclein SPARK trial Phase 2b data (slowing UPDRS in rapidly progressing early PD subgroup), lixisenatide LILAS trial 1-year MDS-UPDRS Part III data, and ambroxol GBA1 mutation PD Phase 2 GAULS trial." "Atypical parkinsonism CE — PSP MDS-PSP Society 2023 criteria update for Richardson syndrome versus PSP-Parkinsonism differentiation, MSA MSA Coalition natural history data, and CBD 4-repeat tauopathy biomarker CE (NfL, GFAP, pTau-217 utility)." All movement disorder professional development on calendar.',
  },
]

const MOVEMENT_WORKFLOW = [
  { time: 'Annual planning', action: 'ABPN neurology MOC CME pace (movement disorder content weighted), UCNS movement disorders subspecialty CE pace (10-year cycle — 24-month prep window alert calculated), state medical license biennial CME, DEA 3-year renewal, annual DBS CE, annual Parkinson disease CE, annual levodopa pump CE, MDS International Congress or Americas Regional Congress, AAN Annual Meeting, and MDS membership all loaded in January. ABPN counter and UCNS movement disorders counter tracked independently.' },
  { time: 'CE completion', action: '"MDS-approved — MDS 2024 Parkinson Disease Clinical Diagnostic Criteria update: MDS-UPDRS Part III threshold for research-grade versus clinical diagnosis in prodromal PD (REM sleep behavior disorder, hyposmia, constipation combination — prodromal PD probability model), DAT SPECT imaging criteria for uncertain PD diagnosis, and lewy body pathology staging — Braak staging versus clinical syndrome correlation for patient and caregiver counseling, 4 CME, AMA PRA Category 1, ABPN MOC applicable, UCNS movement disorders applicable." Both ABPN and UCNS counters update.' },
  { time: 'DBS CE', action: '"Annual deep brain stimulation CE — adaptive DBS (aDBS) clinical implementation: Medtronic BrainSense continuous LFP recording — beta band power suppression as stimulation feedback biomarker, clinical trial data for aDBS versus conventional DBS (ADAPT-PD trial 3-month outcomes — on-time without dyskinesia improvement), directional DBS steering for minimizing stimulation-induced side effects (dysarthria at internal capsule, paresthesia), and MRI-conditional DBS protocol update — 1.5T versus 3T coil SAR limits by manufacturer and model, 3 CME, UCNS movement disorders applicable, Q1." Annual DBS CE placed Q1 aligned with AAN April meeting.' },
  { time: 'PD CE', action: '"Annual Parkinson disease neuroprotection CE — GLP-1 agonist in PD: LILAS trial lixisenatide 1-year data (MDS-UPDRS Part III mean difference versus placebo — 3.1 points favoring lixisenatide, implications for semaglutide prescription in PD-plus-diabetes), LRRK2 inhibitor BIIB122 mechanism — LRRK2 kinase inhibition and lysosomal pathway rescue, GBA1 PD — ambroxol Phase 2 GAULS trial cerebrospinal fluid GCase activity increase, and genetic testing in PD — LRRK2, GBA1, SNCA clinical genetic counseling framework, 3 CME, UCNS movement disorders applicable, Q3." Annual PD CE placed Q3 aligned with MDS October Congress.' },
  { time: 'Renewal audit', action: 'Analytics: ABPN neurology MOC CME on pace? UCNS movement disorders subspecialty content satisfied? (24-month prep window calculated for 10-year exam?) State medical license CME complete? DEA valid? Annual DBS CE documented? Annual Parkinson neuroprotection CE documented? Annual LCIG pump CE documented? MDS membership active? Complete movement disorder specialist credential audit 90 days before earliest renewal.' },
]

export default function ForMovementDisorderSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Movement Disorder Specialists"
        title={
          <>
            ABPN neurology MOC and UCNS movement disorders subspecialty maintained.
            <br />
            <em className="not-italic text-gold">DBS programming CE current. Parkinson neuroprotection tracked.</em>
          </>
        }
        lede="Movement disorder specialists manage ABPN neurology continuous MOC and UCNS movement disorders subspecialty certification on a 10-year examination cycle with 24-month preparation window alerts. Annual DBS CE as adaptive stimulation algorithms and MRI-conditional protocols evolve, annual Parkinson disease CE as lixisenatide and LRRK2 inhibitor neuroprotection data emerge, annual levodopa pump CE, state medical license biennial CME, DEA 3-year registration, and professional development at MDS and AAN. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Movement Disorder Specialists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How movement disorder specialists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for movement disorder specialist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Movement disorder specialist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABPN MOC, UCNS 10-year subspecialty examination, and annual DBS, Parkinson neuroprotection, and device CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {MOVEMENT_WORKFLOW.map((step, i) => (
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
                &ldquo;ABPN neurology continuous MOC and UCNS movement disorders on a 10-year cycle — the 24-month prep window calculation is something I track independently because it is easy to let it creep up. The DBS CE is where the clinical urgency hits most often: when Medtronic released the BrainSense adaptive DBS firmware, I needed CE on the new programming workflow before I updated any patient programs. That CE had nothing to do with my board calendar. The MRI-conditional DBS protocol is an institutional safety document, and CE is required before I can approve an MRI order for a DBS patient under the updated guidelines. The lixisenatide neuroprotection data changed how I counsel PD patients who already take GLP-1 agonists for diabetes — I needed current CE on the LILAS trial before that conversation. All of it on one calendar now.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">K</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Kwame A., MD</div>
                  <div className="text-xs text-muted-foreground">Movement disorder specialist and DBS program director, academic neurology department</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All movement disorder specialist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABPN neurology MOC CME — continuous, movement disorder content weighted',
                'UCNS movement disorders subspecialty — 10-year cycle, 24-month preparation window alert',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual DBS CE — adaptive stimulation, directional programming, MRI protocol',
                'Annual Parkinson CE — GLP-1 neuroprotection, LRRK2 inhibitor, GBA1 trials',
                'Annual LCIG/pump CE — levodopa intestinal gel and subcutaneous pump management',
                'MDS and AAN conference CME planning by UCNS and ABPN applicability',
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
        title="ABPN neurology MOC and UCNS movement disorders subspecialty maintained."
        subtitle="CME tracking for ABPN MOC and UCNS 10-year exam prep window, annual DBS programming CE, Parkinson neuroprotection CE, and movement disorder professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
