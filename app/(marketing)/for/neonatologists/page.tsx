import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Neonatologists — ABP MOC CME renewal, neonatology credential management',
  description:
    'Neonatologists manage ABP general pediatrics primary MOC and ABP neonatal-perinatal medicine subspecialty MOC (both continuous), annual respiratory CE as NICU non-invasive ventilation strategies and surfactant administration protocols evolve with MIST and LISA techniques, annual neuroprotection CE as therapeutic hypothermia protocols update and inositol neuroprotection data emerge, annual nutrition CE as human milk fortification and donor milk bank CE requirements update for extremely preterm infant growth, state medical license biennial CME, DEA 3-year renewal, and AAP/SPE membership. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/neonatologists' },
  openGraph: {
    title: 'Momenties for Neonatologists',
    description: 'ABP MOC CME renewal, neonatology credential management.',
    url: '/for/neonatologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP general pediatrics MOC and ABP neonatal-perinatal medicine MOC independently',
    desc: 'Neonatologists hold ABP general pediatrics primary certification under continuous MOC alongside ABP neonatal-perinatal medicine subspecialty certification under continuous MOC — two ABP continuous assessment tracks with different content requirements. ABP neonatal-perinatal medicine requires subspecialty content: respiratory distress syndrome and BPD (surfactant therapy, non-invasive ventilation, oxygen targeting), hypoxic-ischemic encephalopathy (therapeutic hypothermia, aEEG monitoring, neuroprotection), extremely preterm infant care (ELBW and VLBW — resuscitation at limits of viability, nutritional support, IVH prevention), neonatal sepsis and infection, and congenital anomaly management in the NICU.',
  },
  {
    icon: Clock,
    title: 'Neonatologist multi-credential renewal calendar',
    desc: '"ABP general pediatrics MOC — continuous CME assessment." "ABP neonatal-perinatal medicine MOC — continuous subspecialty CME assessment." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual respiratory CE — MIST (minimally invasive surfactant therapy) versus INSURE technique comparison, oxygen saturation targeting SpO2 91-95% versus 91-94% NPE study." "Annual neuroprotection CE — therapeutic hypothermia 72-hour protocol update, amplitude-integrated EEG aEEG interpretation in HIE." "Annual nutrition CE — donor human milk versus preterm formula RCT data, human milk-based fortifier clinical implementation CE." "AAP/SPE membership — annual." All neonatology credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual surfactant CE and therapeutic hypothermia protocol update analytics',
    desc: 'Neonatologists must maintain CE on evolving respiratory management and neuroprotection protocols: MIST (minimally invasive surfactant therapy) CE has become standard for level III and IV NICUs — the technique requires specific skill CE (laryngoscopy for catheter placement versus Magill forceps technique, surfactant dose 100-200 mg/kg poractant alfa, catheter tip position confirmation) distinct from standard intubation-surfactant administration. Therapeutic hypothermia protocol CE has evolved: the HELIX trial (hypothermia plus erythropoietin versus hypothermia alone in HIE) showed no benefit for erythropoietin addition — CE on HELIX findings and current evidence base for HIE neuroprotection adjuvants is required before counsel families on off-label erythropoietin use.',
  },
  {
    icon: Users,
    title: 'SPE, AAP, PAS, and neonatology professional development',
    desc: '"SPE Society for Pediatric Research — may (part of PAS)." "PAS Pediatric Academic Societies Annual Meeting — april/may." "ACOG Annual Clinical and Scientific Meeting — may." "Respiratory CE — MIST technique 2024 CE (minimally invasive surfactant therapy — thin catheter technique versus Magill forceps, poractant alfa versus calfactant dose comparison, positioning CE: MIST success rate in prone versus supine position), LISA (less invasive surfactant administration) technique versus MIST technique — difference in catheter gauge and provider training requirement, oxygen saturation targeting in ELBW (SpO2 91-95% BOOST-II data versus SpO2 85-89% — retinopathy of prematurity versus mortality-NEC tradeoff CE), and high-flow nasal cannula post-extubation in preterm infants — HIPSTER trial (high-flow versus CPAP as primary non-invasive support in less than 32 weeks gestation — extubation failure rate equivalence CE)." "Neuroprotection CE — HIE therapeutic hypothermia adjuvants: HELIX trial erythropoietin CE (erythropoietin 1000 units/kg versus placebo added to hypothermia — no difference in death or major neurodisability at 18 months, CE on current evidence base for Epo CE for off-label counseling), melatonin neuroprotection phase 2 pilot data CE, amplitude-integrated EEG aEEG background pattern classification CE (burst suppression versus continuous normal voltage — timing of aEEG normalization as HIE outcome predictor), and MRI timing in HIE — optimal day-of-life for MRI (day 7-10 versus day 4-5 for white matter injury characterization)." "Nutrition CE — human milk-based fortifier CE (Prolact+H2MF versus bovine-based fortifier — NEC risk reduction in ELBW meta-analysis CE, cost-effectiveness threshold), donor human milk bank CE (pasteurization effect on bioactive components — lactoferrin, immunoglobulin content post-Holder pasteurization versus HTST), and parenteral nutrition CE (early amino acid initiation 3 g/kg/day versus 2 g/kg/day in ELBW — protein accretion CE, lipid emulsion SMOF versus Intralipid 20% in preterm — oxidative stress CE)." All neonatology professional development on calendar.',
  },
]

const NICU_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP general pediatrics continuous MOC CME pace, ABP neonatal-perinatal medicine continuous MOC CME pace (tracked separately — different content emphasis), state medical license biennial CME, DEA 3-year renewal, annual respiratory CE, annual neuroprotection CE, annual nutrition CE, PAS Annual Meeting, ACOG Annual Meeting, and AAP/SPE membership all loaded in January. ABP general pediatrics counter and ABP neonatal-perinatal medicine counter tracked independently.' },
  { time: 'CE completion', action: '"SPE/PAS-approved — SPE 2024 Neonatology Update: therapeutic hypothermia adjuvants evidence review (HELIX trial erythropoietin versus placebo — no benefit for death or major neurodisability at 18 months, CE on counseling families on evidence base for off-label erythropoietin use in HIE after HELIX), MIST technique 2024 proficiency CE (laryngoscopy versus Magill forceps approach — institutional simulation training requirement CE), and oxygen saturation targeting update for ELBW — SpO2 91-95% versus 91-94% mortality versus ROP tradeoff analysis, 4 CME, AMA PRA Category 1, ABP general pediatrics MOC applicable, ABP neonatal-perinatal medicine MOC applicable." Both counters update.' },
  { time: 'Respiratory CE', action: '"Annual NICU respiratory CE — MIST and non-invasive ventilation update 2024: MIST technique proficiency CE (thin catheter placement under direct laryngoscopy — success rate CE by GA, poractant alfa 200 mg/kg dose CE versus calfactant 105 mg/kg — surfactant protein content comparison), LISA versus MIST technique differences CE (LISA soft 16Fr versus 18Fr catheter, MIST 16Fr rigid catheter — institutional training pathway CE), high-flow nasal cannula HIPSTER trial evidence CE (HFNC as primary non-invasive support in less than 32 weeks — extubation failure equivalence to CPAP, flow rate 8 L/min maximum in preterm CE), and BPD prevention CE — caffeine pharmacology update (high dose 20 mg/kg versus standard 10 mg/kg loading — apnea reduction and BPD prevention CE in ELBW), 3 CME, ABP neonatal-perinatal medicine MOC applicable, Q1." Annual respiratory CE placed Q1 aligned with PAS April/May meeting.' },
  { time: 'Neuroprotection CE', action: '"Annual HIE and neuroprotection CE — therapeutic hypothermia protocol 2024: HELIX trial CE (erythropoietin versus placebo in hypothermia — N=604, death or major neurodisability 49% versus 50% — CE implications for off-label Epo counseling), melatonin HIE CE (melatonin 10 mg/kg/day phase 2 pilot data — oxidative stress biomarker reduction, phase 3 MELO-trial design CE), aEEG background pattern CE in HIE (continuous normal voltage — good prognosis, burst suppression below 10 microV interburst interval — poor prognosis, timing of aEEG normalization within 24-48 hours as early outcome predictor), and neonatal EEG seizure threshold CE (electrographic seizure treatment threshold — phenobarbital versus levetiracetam NEOLEV2 trial CE for first-line anticonvulsant in neonatal seizures), 3 CME, ABP neonatal-perinatal medicine MOC applicable, Q3." Annual neuroprotection CE placed Q3 aligned with AAP October meeting.' },
  { time: 'Renewal audit', action: 'Analytics: ABP general pediatrics continuous MOC on pace? ABP neonatal-perinatal medicine continuous MOC on pace? (Separate counters — different content.) State medical license CME complete? DEA valid? Annual respiratory CE documented? Annual neuroprotection CE documented? Annual nutrition CE documented? AAP/SPE membership active? Complete neonatologist credential audit 90 days before earliest renewal.' },
]

export default function ForNeonatologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Neonatologists"
        title={
          <>
            ABP general pediatrics MOC and ABP neonatal-perinatal medicine MOC maintained.
            <br />
            <em className="not-italic text-gold">MIST surfactant technique CE current. HIE neuroprotection protocols tracked.</em>
          </>
        }
        lede="Neonatologists manage two continuous ABP MOC tracks — general pediatrics and neonatal-perinatal medicine — with different content requirements tracked independently. Annual respiratory CE as MIST and LISA surfactant techniques and non-invasive ventilation protocols require procedure-specific documentation, annual neuroprotection CE as HELIX trial adjuvant data and aEEG interpretation updates reshape HIE management, annual nutrition CE as donor human milk and human milk-based fortifier clinical implementation evolve, state medical license biennial CME, DEA 3-year registration, and professional development at SPE and PAS. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Neonatologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How neonatologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for neonatologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Neonatologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABP general pediatrics MOC, ABP neonatal-perinatal medicine MOC, and annual respiratory, neuroprotection, and nutrition CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {NICU_WORKFLOW.map((step, i) => (
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
                &ldquo;Two continuous ABP MOC tracks — general pediatrics and neonatal-perinatal medicine — tracked separately because the NICU-specific content is completely different. The MIST technique CE was clinically critical: when our NICU implemented MIST, I needed documented CE on the laryngoscopy technique, the surfactant dose, and the position protocol before I could supervise residents performing the procedure. That CE was required by our institutional credentialing for the new technique. The HELIX trial CE changed how I counsel families: I had been recommending erythropoietin as an HIE adjuvant and the HELIX data changed that — I needed the CE documented before I updated my family counseling script. The aEEG interpretation CE is different: it is a skill CE that I need documented for each new resident class I train. All on one calendar and all separate from my board maintenance.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">B</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Beatrice O., MD</div>
                  <div className="text-xs text-muted-foreground">Neonatologist and NICU medical director, level IV neonatal intensive care unit</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All neonatologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC CME — continuous, separately tracked',
                'ABP neonatal-perinatal medicine MOC CME — continuous, subspecialty content weighted',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual respiratory CE — MIST/LISA technique, HFNC HIPSTER trial, BPD prevention CE',
                'Annual neuroprotection CE — HELIX trial adjuvants, aEEG interpretation, seizure treatment',
                'Annual nutrition CE — human milk-based fortifier, donor milk pasteurization, PN CE',
                'SPE and PAS conference CME planning by ABP applicability',
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
        title="ABP general pediatrics MOC and ABP neonatal-perinatal medicine MOC maintained."
        subtitle="CME tracking for two continuous ABP MOC tracks, annual MIST respiratory CE, HIE neuroprotection CE, NICU nutrition CE, and neonatology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
