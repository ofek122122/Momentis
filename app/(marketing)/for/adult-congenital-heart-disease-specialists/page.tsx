import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Adult Congenital Heart Disease Specialists — ABIM MOC CME renewal, ACHD credential management',
  description:
    'Adult congenital heart disease specialists manage ABIM internal medicine MOC and ABIM cardiovascular disease subspecialty MOC simultaneously with ACC ACHD Certificate of Added Qualification requirements, annual pulmonary arterial hypertension CE as macitentan and sotatercept PAH data update treatment algorithms, annual Fontan circulation CE as endothelin antagonist and SGLT2 inhibitor evidence evolves, state medical license biennial CME, and ACHD Alliance or ACHA membership. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/adult-congenital-heart-disease-specialists' },
  openGraph: {
    title: 'Momenties for Adult Congenital Heart Disease Specialists',
    description: 'ABIM MOC CME renewal, ACHD credential management.',
    url: '/for/adult-congenital-heart-disease-specialists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABIM cardiovascular disease MOC and ACC ACHD CAQ independently',
    desc: 'Adult congenital heart disease specialists hold ABIM internal medicine primary certification under continuous MOC and ABIM cardiovascular disease subspecialty under continuous MOC. The ACC ACHD Certificate of Added Qualification (CAQ) requires ACHD-specific content distinct from general cardiovascular disease MOC: single ventricle physiology and Fontan circulation, tetralogy of Fallot late outcomes (pulmonary regurgitation surveillance, RV remodeling), transposition of the great arteries (TGA — late outcomes after atrial switch/Mustard/Senning and arterial switch), Eisenmenger syndrome management, ACHD-specific arrhythmia management, and reproductive counseling in ACHD women of childbearing age.',
  },
  {
    icon: Clock,
    title: 'ACHD specialist multi-credential renewal calendar',
    desc: '"ABIM internal medicine MOC — continuous CME." "ABIM cardiovascular disease subspecialty MOC — continuous CME." "ACC ACHD CAQ — renewal requirements, ACHD-specific content." "State medical license — biennial CME." "Annual PAH CE — sotatercept STELLAR trial FDA approval 2024 for Group 1 PAH, triple oral therapy evidence update." "Annual Fontan CE — Fontan-associated liver disease surveillance, SGLT2 inhibitor empagliflozin in Fontan circulation (FUEL trial)." "Annual TOF CE — pulmonary valve replacement timing in asymptomatic severe PR, PERCEVAL surgical valve versus MRI-guided timing." "ACHD Alliance membership — annual." All ACHD credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual PAH CE and Fontan circulation update analytics',
    desc: 'ACHD specialists managing pulmonary arterial hypertension must maintain CE on the most rapidly expanding pharmacotherapy landscape in ACHD: sotatercept (Winrevair) received FDA approval March 2024 as the first activin receptor-based therapy for Group 1 PAH — the STELLAR trial showed 40% reduction in clinical worsening events versus placebo on background triple therapy. Annual PAH CE ensures current prescribing protocols and patient selection for sotatercept in ACHD-associated PAH (WHO Group 1). Fontan CE: the FUEL trial (empagliflozin in Fontan circulation — 2023) showed improved exercise capacity and reduced BNP; SGLT2 inhibitor mechanism in Fontan physiology requires CE before off-label prescribing in Fontan patients.',
  },
  {
    icon: Users,
    title: 'ACHD Alliance, ACC ACHD Section, and professional development',
    desc: '"ACHD Alliance Annual Scientific Meeting — march." "ACC Scientific Sessions — march (ACHD section)." "AHA Scientific Sessions — november." "ESC Grown-Up Congenital Heart Disease Working Group — august." "PAH CE — sotatercept STELLAR trial mechanism of action (activin signaling, SMAD pathway inhibition), patient selection for sotatercept in WHO Group 1 versus Group 2 PAH in ACHD, triple oral therapy optimization (ERA plus PDE5 inhibitor plus prostacyclin pathway agent), and sotatercept access and insurance prior authorization in ACHD center practice." "Fontan CE — Fontan-associated liver disease (FALD) cirrhosis surveillance — elastography versus biopsy timing, Fontan takedown versus heart transplant criteria, and protein-losing enteropathy treatment — sildenafil versus budesonide versus fenestration creation." "TOF CE — Ross procedure versus bioprosthetic pulmonary valve replacement in TOF — survival comparison, MRI-guided pulmonary valve replacement timing using RV volume threshold (>170mL/m2), and redo sternotomy risk stratification in prior TOF repair." "TGA CE — systemic RV failure in atrial switch patients — HF therapy evidence (sacubitril/valsartan in systemic RV), atrial switch arrhythmia ablation." All ACHD professional development on calendar.',
  },
]

const ACHD_WORKFLOW = [
  { time: 'Annual planning', action: 'ABIM internal medicine MOC CME pace (cardiovascular content weighted), ABIM cardiovascular disease subspecialty MOC pace (ACHD content weighted), ACC ACHD CAQ renewal requirements, state medical license biennial CME, annual PAH CE, annual Fontan circulation CE, annual tetralogy of Fallot CE, ACHD Alliance Annual Meeting, ACC Scientific Sessions, and ACHD Alliance membership all loaded in January. ABIM IM counter and cardiovascular disease counter tracked independently. ACC ACHD CAQ requirements tracked separately — ACHD-specific content distinct from general cardiovascular disease MOC.' },
  { time: 'CE completion', action: '"ACC-approved — ACC 2024 ACHD Guideline Focused Update: sotatercept patient selection in ACHD-associated PAH — WHO Group 1 only (systemic-to-pulmonary shunts with near-normal pulmonary arterial anatomy), 6MWT and NT-proBNP monitoring protocol at 3 months post-sotatercept initiation, triple therapy escalation decision — when to add sotatercept versus when to pursue lung transplant evaluation, and ACHD center volume requirements for sotatercept prescribing privileges in ACHD-PAH, 4 CME, AMA PRA Category 1, ABIM MOC applicable, ACC ACHD CAQ applicable." Both ABIM counters and CAQ requirements update.' },
  { time: 'PAH CE', action: '"Annual pulmonary arterial hypertension CE — sotatercept STELLAR 2-year extension data: clinical worsening event-free survival at 24 months in Group 1 PAH, sotatercept in repaired versus unrepaired CHD-PAH — subgroup analysis outcomes, hemoglobin concentration monitoring and erythrocytosis management during sotatercept therapy, and combination therapy sequencing — oral ERA plus PDE5 inhibitor plus inhaled prostacyclin agonist versus subcutaneous treprostinil as first triple therapy, 4 CME, ACC ACHD CAQ applicable, Q1." Annual PAH CE placed Q1 aligned with ACHD Alliance March meeting.' },
  { time: 'Fontan CE', action: '"Annual Fontan circulation CE — FUEL trial empagliflozin follow-up: 24-month exercise capacity and protein-losing enteropathy outcomes in Fontan patients on empagliflozin 10mg versus placebo, SGLT2 inhibitor mechanism in Fontan — reduced preload and improved single ventricle filling pressure hypotheses, FALD cirrhosis stage progression rate and liver transplant referral criteria in Fontan patients, and Fontan conversion — atriopulmonary conversion to extracardiac conduit outcomes with arrhythmia surgery in adults, 3 CME, ACC ACHD CAQ applicable, Q3." Annual Fontan CE placed Q3 aligned with ESC August and AHA November.' },
  { time: 'Renewal audit', action: 'Analytics: ABIM internal medicine MOC CME on pace? ABIM cardiovascular disease subspecialty MOC content satisfied — ACHD content weighted? ACC ACHD CAQ renewal requirements met? State medical license CME complete? Annual PAH CE documented? Annual Fontan circulation CE documented? Annual TOF and TGA CE documented? ACHD Alliance membership active? Complete ACHD specialist credential audit 90 days before earliest renewal.' },
]

export default function ForAdultCongenitalHeartDiseaseSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Adult Congenital Heart Disease Specialists"
        title={
          <>
            ABIM cardiovascular MOC and ACC ACHD CAQ maintained.
            <br />
            <em className="not-italic text-gold">PAH CE current. Fontan circulation protocols tracked.</em>
          </>
        }
        lede="Adult congenital heart disease specialists manage ABIM internal medicine continuous MOC, ABIM cardiovascular disease subspecialty continuous MOC, and ACC ACHD Certificate of Added Qualification requirements — all tracked separately. Annual PAH CE as sotatercept FDA approval and triple therapy sequencing update prescribing algorithms, annual Fontan circulation CE as SGLT2 inhibitor evidence and FALD surveillance protocols evolve, annual TOF and TGA CE, state medical license biennial CME, and professional development at ACHD Alliance and ACC. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Adult Congenital Heart Disease Specialists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How ACHD specialists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for adult congenital heart disease specialist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">ACHD specialist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABIM dual MOC cycles, ACC ACHD CAQ, and annual PAH, Fontan, and structural CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {ACHD_WORKFLOW.map((step, i) => (
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
                &ldquo;ABIM IM and ABIM cardiovascular disease both continuous with different content requirements, plus the ACC ACHD CAQ with its own ACHD-specific content. The PAH landscape changed dramatically with sotatercept in 2024 — I had to do CE on the STELLAR trial and the REMS-like prescribing requirements before I could add it to my practice. That was a clinical urgency that was not on any board renewal calendar. The Fontan work is where I need annual CE most: the FUEL trial empagliflozin data changed how I think about SGLT2 inhibitors in my Fontan patients, and the FALD surveillance protocol changes year over year as the elastography versus biopsy evidence evolves. TOF pulmonary valve replacement timing — the MRI volume threshold debate is ongoing and I need current evidence before I counsel patients. Three credential tracks, multiple annual CE categories, all on one calendar with 90-day alerts.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">P</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Priya V., MD</div>
                  <div className="text-xs text-muted-foreground">Adult congenital heart disease specialist and ACHD program director, academic cardiovascular center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All adult congenital heart disease specialist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABIM internal medicine MOC CME — continuous',
                'ABIM cardiovascular disease subspecialty MOC — continuous, ACHD content weighted',
                'ACC ACHD Certificate of Added Qualification — renewal requirements',
                'State medical license CME — biennial',
                'Annual PAH CE — sotatercept STELLAR data, triple therapy sequencing',
                'Annual Fontan CE — FALD surveillance, SGLT2 inhibitor FUEL trial evidence',
                'Annual TOF/TGA CE — pulmonary valve replacement timing, systemic RV HF',
                'ACHD Alliance and ACC conference CME planning by CAQ applicability',
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
        title="ABIM cardiovascular MOC and ACC ACHD CAQ maintained."
        subtitle="CME tracking for ABIM dual MOC and ACC ACHD CAQ, annual PAH CE including sotatercept, Fontan circulation CE, and adult congenital heart disease professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
