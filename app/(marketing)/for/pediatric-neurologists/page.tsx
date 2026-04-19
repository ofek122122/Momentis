import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatric Neurologists — ABP MOC CME renewal, child neurology credential management',
  description:
    'Pediatric neurologists manage ABP general pediatrics primary MOC and ABP child neurology subspecialty MOC (both continuous), annual epilepsy CE as fenfluramine Fintepla FDA approval and cenobamate pediatric data update ASM selection in drug-resistant childhood epilepsy, annual neuromuscular CE as zolgensma gene therapy post-marketing and nusinersen pediatric monitoring CE evolve, annual neurodevelopmental CE as diagnostic criteria updates for ADHD late-onset presentation and autism diagnostic equity in females require annual documentation, state medical license biennial CME, DEA 3-year renewal, and CNS/AAN membership. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/pediatric-neurologists' },
  openGraph: {
    title: 'Momenties for Pediatric Neurologists',
    description: 'ABP MOC CME renewal, child neurology credential management.',
    url: '/for/pediatric-neurologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP general pediatrics MOC and ABP child neurology MOC independently',
    desc: 'Pediatric neurologists hold ABP general pediatrics primary certification under continuous MOC alongside ABP child neurology subspecialty certification under continuous MOC — two ABP continuous assessment tracks with different content requirements. ABP child neurology requires subspecialty content: epilepsy and seizure disorders (ASM pharmacology, EEG interpretation, ketogenic diet, epilepsy surgery evaluation), neuromuscular disorders (SMA, DMD, Charcot-Marie-Tooth, myopathies — muscle biopsy interpretation), headache and migraine in children (CGRP pathway, pediatric migraine prevention), neurodevelopmental disorders (ADHD, autism spectrum disorder, learning disabilities, intellectual disability — evaluation and management), and neonatal neurology.',
  },
  {
    icon: Clock,
    title: 'Pediatric neurologist multi-credential renewal calendar',
    desc: '"ABP general pediatrics MOC — continuous CME assessment." "ABP child neurology MOC — continuous subspecialty CME assessment." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual epilepsy CE — fenfluramine Fintepla Dravet and LGS data, cenobamate pediatric drug-resistant focal epilepsy CE." "Annual neuromuscular CE — onasemnogene abeparvovec post-marketing monitoring CE, risdiplam Evrysdi pediatric dosing CE." "Annual neurodevelopmental CE — ADHD late-onset DSM-5-TR CE, autism diagnostic equity in females and underrepresented populations." "CNS membership — annual." All child neurology credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual epilepsy ASM CE and SMA gene therapy update analytics',
    desc: 'Pediatric neurologists managing epilepsy must maintain CE on an expanding ASM landscape: fenfluramine (Fintepla) received FDA approval for Lennox-Gastaut syndrome in 2022 — CE on cardiac echocardiography monitoring requirement (echocardiogram at baseline and every 6 months for valvular disease and pulmonary arterial hypertension), REMS program requirements for prescriber and pharmacy certification, and drug-drug interaction CE (serotonin syndrome risk with MAO inhibitors, dose reduction with valproate) is required before prescribing. Onasemnogene abeparvovec (Zolgensma) post-marketing safety CE has become distinct from the original approval CE: the expanded post-marketing surveillance data on liver toxicity (aminotransferase elevation requiring prednisolone prophylaxis) and delayed adverse event timeline (up to 6 weeks post-infusion monitoring) requires annual update CE for centers managing post-Zolgensma SMA patients.',
  },
  {
    icon: Users,
    title: 'CNS, CNPN, AES, and child neurology professional development',
    desc: '"CNS Child Neurology Society Annual Meeting — october." "CNPN Child Neurology and Pediatric Neuroscience Annual Meeting." "AES American Epilepsy Society Annual Meeting — december." "AAN Annual Meeting — april." "Epilepsy CE — fenfluramine Fintepla LGS 2022 FDA approval CE (REMS prescriber certification CE, cardiac echo monitoring protocol — 6-month interval requirement, echocardiographic parameters for valvular disease and PAH surveillance), cenobamate pediatric drug-resistant focal epilepsy CE (pediatric pharmacokinetics — weight-based dosing, titration schedule CE, drug-drug interaction with valproate), CDKL5 deficiency disorder CE (ganaxolone Marvelus FDA 2022 approval — neurosteroid GABA-A modulator, CDKL5-specific trial data CE, plasma level monitoring requirement), and ketogenic diet CE in pediatric drug-resistant epilepsy (modified Atkins versus classic 4:1 ratio — GRADE data for each epilepsy syndrome, GI tolerability management CE)." "Neuromuscular CE — onasemnogene abeparvovec post-marketing safety update CE (aminotransferase elevation timeline CE — prednisolone protocol day 1 to day 30, acute liver injury surveillance beyond 6 weeks post-infusion), risdiplam Evrysdi CE — SMA type 1, 2, and 3 pediatric dosing by weight (0.15-0.25 mg/kg/day weight-based), retinal safety monitoring in neonates (retinal dystrophy preclinical signal — ophthalmology evaluation CE for infants under 2 months), duchenne muscular dystrophy CE (givinostat duvyzat FDA 2024 approval — histone deacetylase inhibitor CE, monthly liver enzyme monitoring, skin biopsy exon-skipping CE for casimersen, golodirsen, viltolarsen eligibility by exon deletion)." "Neurodevelopmental CE — ADHD DSM-5-TR late-onset criterion CE (several symptoms present before age 12 versus strict age-7 criterion — documentation CE for late-referred adolescents and adults), autism diagnostic equity CE (ADOS-2 calibrated severity score in females — female autism phenotype CE: masking, camouflaging behavior identification, later average diagnosis age in females versus males, underrepresentation in referral CE), and developmental delay evaluation CE (chromosomal microarray as first-line genetic test in unexplained DD/ID — yield CE versus karyotype, WES indication threshold CE)." All child neurology professional development on calendar.',
  },
]

const PED_NEURO_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP general pediatrics continuous MOC CME pace, ABP child neurology continuous MOC CME pace (tracked separately — different content emphasis), state medical license biennial CME, DEA 3-year renewal, annual epilepsy ASM CE, annual neuromuscular CE, annual neurodevelopmental CE, CNS Annual Meeting, AES Annual Meeting, AAN Annual Meeting, and CNS membership all loaded in January. ABP general pediatrics counter and ABP child neurology counter tracked independently.' },
  { time: 'CE completion', action: '"CNS-approved — CNS 2024 Child Neurology Update: fenfluramine Fintepla REMS prescriber certification CE (cardiac echocardiography monitoring protocol — baseline, 3 months, 6 months CE — valvular disease PAH surveillance parameters), cenobamate pediatric drug-resistant focal epilepsy CE (weight-based titration schedule CE — starting dose and escalation interval), and onasemnogene abeparvovec post-marketing liver safety update (prednisolone prophylaxis protocol revision — day 1 start CE, aminotransferase monitoring at day 14, 30, 60, 90 post-infusion), 4 CME, AMA PRA Category 1, ABP general pediatrics MOC applicable, ABP child neurology MOC applicable." Both counters update.' },
  { time: 'Epilepsy CE', action: '"Annual pediatric epilepsy ASM CE — fenfluramine and novel mechanisms 2024: fenfluramine Fintepla LGS 2022 FDA data CE (REMS program CE — prescriber certification, pharmacy certification, echocardiogram monitoring protocol including PAH surveillance, valproate interaction — 50% dose reduction CE), CDKL5 deficiency disorder ganaxolone CE (Marvelus FDA 2022 approval — neurosteroid GABA-A receptor modulator, CDKL5-specific versus general anti-seizure mechanism CE, plasma level monitoring for concentration-response CE), cenobamate drug-resistant focal epilepsy pediatric extrapolation CE (sodium channel and GABA-A PAM dual mechanism — titration CE, drug-drug interaction with other sodium channel blockers), and dravet syndrome gene therapy TANGO trial CE (antisense oligonucleotide ASO targeting SCN1A — phase 2 design CE), 3 CME, ABP child neurology MOC applicable, Q1." Annual epilepsy CE placed Q1 aligned with AES December meeting.' },
  { time: 'Neuromuscular CE', action: '"Annual neuromuscular CE — SMA and DMD 2024 update: onasemnogene abeparvovec post-marketing update CE (10-month post-infusion liver injury case series CE — risk factors: baseline liver enzyme elevation and high anti-AAV9 titer, extended monitoring protocol CE for late-presenting aminotransferase elevation), risdiplam pediatric monitoring CE (retinal dystrophy preclinical signal — ophthalmology evaluation protocol for infants under 2 months, weight-based dose calculation CE), givinostat duvyzat FDA 2024 DMD approval CE (histone deacetylase inhibitor mechanism — DMD regardless of mutation CE, monthly ALT monitoring protocol, 6-minute walk test as efficacy endpoint CE), and exon-skipping eligibility CE (casimersen exon 45, golodirsen exon 53, viltolarsen exon 53 — genetic report interpretation CE for eligible exon deletions), 3 CME, ABP child neurology MOC applicable, Q3." Annual neuromuscular CE placed Q3 aligned with CNS October meeting.' },
  { time: 'Renewal audit', action: 'Analytics: ABP general pediatrics continuous MOC on pace? ABP child neurology continuous MOC on pace? (Separate counters — different content.) State medical license CME complete? DEA valid? Annual epilepsy ASM CE documented? Annual neuromuscular CE documented? Annual neurodevelopmental CE documented? CNS membership active? Complete pediatric neurologist credential audit 90 days before earliest renewal.' },
]

export default function ForPediatricNeurologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatric Neurologists"
        title={
          <>
            ABP general pediatrics MOC and ABP child neurology MOC maintained.
            <br />
            <em className="not-italic text-gold">Fenfluramine REMS CE current. SMA gene therapy post-marketing tracked.</em>
          </>
        }
        lede="Pediatric neurologists manage two continuous ABP MOC tracks — general pediatrics and child neurology — with different content requirements tracked independently. Annual epilepsy CE as fenfluramine REMS cardiac monitoring and cenobamate pediatric data update ASM selection, annual neuromuscular CE as onasemnogene post-marketing liver safety updates and givinostat DMD approval require procedure-specific documentation, annual neurodevelopmental CE as ADHD late-onset criteria and autism diagnostic equity evolve, state medical license biennial CME, DEA 3-year registration, and professional development at CNS and AES. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Pediatric Neurologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatric neurologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric neurologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pediatric neurologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABP general pediatrics MOC, ABP child neurology MOC, and annual epilepsy, neuromuscular, and neurodevelopmental CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {PED_NEURO_WORKFLOW.map((step, i) => (
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
                &ldquo;Two continuous ABP MOC tracks — general pediatrics and child neurology — tracked separately because the neurology content requirements are completely different. The fenfluramine REMS CE was required before I could prescribe: the prescriber certification needs documented CE on the cardiac monitoring protocol, and the echocardiography timing — baseline, 3 months, 6 months — is a clinical obligation that has nothing to do with my board calendar. The onasemnogene post-marketing CE was urgent: we had patients in our SMA clinic who received gene therapy and the post-marketing liver safety data changed the monitoring timeline. I needed documented CE on the extended aminotransferase monitoring protocol before I could update our SMA post-infusion surveillance. The givinostat DMD CE was the same: FDA approval came and I needed CE on the mechanism, the ALT monitoring protocol, and the eligibility regardless of mutation type before my first prescription.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">W</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Wei L., MD, PhD</div>
                  <div className="text-xs text-muted-foreground">Pediatric neurologist and SMA program director, children&apos;s hospital neuromuscular center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatric neurologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC CME — continuous, separately tracked',
                'ABP child neurology MOC CME — continuous, subspecialty content weighted',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual epilepsy CE — fenfluramine REMS, cenobamate pediatric, CDKL5 ganaxolone',
                'Annual neuromuscular CE — Zolgensma post-marketing, risdiplam monitoring, givinostat DMD',
                'Annual neurodevelopmental CE — ADHD late-onset DSM-5-TR, autism diagnostic equity',
                'CNS and AES conference CME planning by ABP applicability',
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
        title="ABP general pediatrics MOC and ABP child neurology MOC maintained."
        subtitle="CME tracking for two continuous ABP MOC tracks, annual epilepsy ASM CE, SMA/DMD neuromuscular CE, neurodevelopmental CE, and child neurology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
