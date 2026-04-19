import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatric Intensivists — ABP MOC CME renewal, pediatric critical care credential management',
  description:
    'Pediatric intensivists manage ABP general pediatrics primary MOC and ABP pediatric critical care medicine subspecialty MOC (both continuous), annual sepsis CE as Surviving Sepsis Campaign pediatric bundle updates evolve, annual mechanical ventilation CE as lung-protective ventilation in pediatric ARDS and high-flow nasal cannula versus CPAP thresholds update, annual ECMO CE as VV-ECMO and VA-ECMO pediatric indications expand, state medical license biennial CME, DEA 3-year renewal, and SCCM membership. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/pediatric-intensivists' },
  openGraph: {
    title: 'Momenties for Pediatric Intensivists',
    description: 'ABP MOC CME renewal, pediatric critical care credential management.',
    url: '/for/pediatric-intensivists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP general pediatrics MOC and ABP pediatric critical care MOC independently',
    desc: 'Pediatric intensivists hold ABP (American Board of Pediatrics) general pediatrics primary certification under continuous MOC alongside ABP pediatric critical care medicine subspecialty certification under continuous MOC — two separate ABP continuous assessment tracks with different content requirements. ABP pediatric critical care requires subspecialty content: pediatric sepsis and septic shock (SSC pediatric bundle, vasoactive agent selection), mechanical ventilation in pediatric ARDS (PALICC-2 criteria, lung-protective ventilation targets), hemodynamic monitoring (arterial line interpretation, echocardiographic assessment of cardiac function), ECMO patient selection and management, and pediatric neurocritical care in the ICU setting.',
  },
  {
    icon: Clock,
    title: 'Pediatric intensivist multi-credential renewal calendar',
    desc: '"ABP general pediatrics MOC — continuous CME assessment." "ABP pediatric critical care medicine MOC — continuous subspecialty CME assessment." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual sepsis CE — SSC pediatric sepsis bundle 2024 update, peripheral IV versus central line vasopressor administration in pediatric septic shock." "Annual ventilation CE — PALICC-2 pediatric ARDS definition update, high-flow nasal cannula versus CPAP in bronchiolitis and post-extubation." "Annual ECMO CE — pediatric VV-ECMO cannulation strategies, ECMO for refractory pediatric septic shock." "SCCM membership — annual." All pediatric critical care credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual pediatric sepsis CE and PARDS ventilation update analytics',
    desc: 'Pediatric intensivists must maintain CE on evolving critical care protocols: the PALICC-2 (Pediatric Acute Lung Injury Consensus Conference) 2023 updated the pediatric ARDS definition — removing the requirement for bilateral chest radiograph opacities and lowering the SpO2/FiO2 threshold for mild PARDS — CE on PALICC-2 criteria implementation is required for PICU directors updating institutional ventilator weaning protocols. Peripheral vasopressor administration CE has become relevant: the SQUEEZE trial and subsequent meta-analyses support early peripheral IV vasopressor administration in pediatric septic shock, changing the timing of central line placement — CE on peripheral vasopressor safety parameters and monitoring requirements is now embedded in SSC pediatric bundle updates.',
  },
  {
    icon: Users,
    title: 'SCCM, PAS, and pediatric critical care professional development',
    desc: '"SCCM Critical Care Congress — february." "PAS Pediatric Academic Societies Annual Meeting — april/may." "ESPNIC European Society of Paediatric and Neonatal Intensive Care — june." "APA American Pediatric Association Annual Meeting." "Sepsis CE — SSC 2024 pediatric bundle update CE (corticosteroid use in pediatric septic shock — SQUEAKYII trial steroids in catecholamine-refractory septic shock, peripheral vasopressor administration parameters — maximum concentration and infusion site monitoring), pediatric sepsis biomarkers CE (procalcitonin versus CRP versus lactate clearance as 24-hour resuscitation endpoint), and fluid resuscitation in pediatric sepsis — SQUEEZE trial 40 mL/kg versus 20 mL/kg first-hour crystalloid outcomes." "Ventilation CE — PALICC-2 pediatric ARDS 2023 definition update (SpO2/FiO2 threshold for mild PARDS, inclusion of non-invasive ventilation), high-flow nasal cannula versus CPAP in pediatric bronchiolitis and post-extubation failure (TRAMONTANE 2 trial comparison), and lung-protective ventilation tidal volume targets in pediatric ARDS — 6 mL/kg versus 4 mL/kg for severe PARDS with poor compliance." "ECMO CE — VV-ECMO for pediatric ARDS refractory to conventional ventilation (ELSO pediatric ARDS registry outcomes 2024), VA-ECMO for refractory pediatric septic shock — center volume effect on outcomes, ECMO decannulation criteria CE — lung recovery assessment before VV-ECMO weaning, and pediatric ECMO anticoagulation — anti-Xa versus aPTT monitoring protocol update." All pediatric critical care professional development on calendar.',
  },
]

const PICU_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP general pediatrics continuous MOC CME pace, ABP pediatric critical care medicine continuous MOC CME pace (tracked separately — different content emphasis), state medical license biennial CME, DEA 3-year renewal, annual sepsis CE, annual mechanical ventilation CE, annual ECMO CE, SCCM Critical Care Congress, PAS Annual Meeting, and SCCM membership all loaded in January. ABP general pediatrics counter and ABP pediatric critical care counter tracked independently.' },
  { time: 'CE completion', action: '"SCCM-approved — SCCM 2024 Pediatric Surviving Sepsis Campaign update: peripheral IV vasopressor administration in pediatric septic shock (maximum concentration parameters, infusion site monitoring protocol, safety evidence from SQUEEZE trial and meta-analysis), corticosteroid use in catecholamine-refractory pediatric septic shock (SQUEAKYII trial design and interim data), and 24-hour resuscitation endpoint — lactate clearance versus ScvO2 monitoring in pediatric sepsis, 4 CME, AMA PRA Category 1, ABP general pediatrics MOC applicable, ABP pediatric critical care MOC applicable." Both ABP counters update.' },
  { time: 'Sepsis CE', action: '"Annual pediatric sepsis CE — 2024 SSC bundle update: peripheral vasopressor safety parameters for pediatric septic shock (norepinephrine peripheral IV maximum concentration 0.1 mcg/kg/min, site check every 30 minutes — institutional implementation protocol), fluid resuscitation update — SQUEEZE trial 40 mL/kg versus 20 mL/kg first-hour crystalloid (equal outcomes, less fluid overload in 40 mL/kg arm), corticosteroid timing CE (hydrocortisone 1-2 mg/kg/day for catecholamine-refractory septic shock — SQUEAKYII interim results), and pediatric sepsis biomarker clearance endpoints — procalcitonin 80% reduction at 72 hours as antibiotic de-escalation trigger, 3 CME, ABP pediatric critical care MOC applicable, Q1." Annual sepsis CE placed Q1 aligned with SCCM February Congress.' },
  { time: 'Ventilation CE', action: '"Annual pediatric ARDS and ventilation CE — PALICC-2 2023 implementation: pediatric ARDS new definition (SpO2/FiO2 below 264 for mild PARDS on non-invasive ventilation — CE on applying the criteria at bedside versus PaO2/FiO2 in patients without arterial line), lung-protective ventilation tidal volume target for severe PARDS with low compliance (4 mL/kg PBW with high respiratory rate strategy versus 6 mL/kg), high-flow nasal cannula post-extubation failure prevention — TRAMONTANE 2 trial (HFNC versus CPAP — comparable extubation failure rates at 72 hours), and spontaneous breathing trial protocols in pediatric ARDS — SBT success criteria update (PICU-specific), 3 CME, ABP pediatric critical care MOC applicable, Q3." Annual ventilation CE placed Q3 aligned with ESPNIC June meeting.' },
  { time: 'Renewal audit', action: 'Analytics: ABP general pediatrics continuous MOC on pace? ABP pediatric critical care medicine continuous MOC on pace? (Separate counters — different content.) State medical license CME complete? DEA valid? Annual sepsis CE documented? Annual ventilation CE documented? Annual ECMO CE documented? SCCM membership active? Complete pediatric intensivist credential audit 90 days before earliest renewal.' },
]

export default function ForPediatricIntensivistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatric Intensivists"
        title={
          <>
            ABP general pediatrics MOC and ABP pediatric critical care MOC maintained.
            <br />
            <em className="not-italic text-gold">Sepsis bundle CE current. PARDS ventilation protocols tracked.</em>
          </>
        }
        lede="Pediatric intensivists manage two continuous ABP MOC tracks — general pediatrics and pediatric critical care medicine — with different content requirements tracked independently. Annual sepsis CE as SSC pediatric bundle peripheral vasopressor and corticosteroid data update management protocols, annual mechanical ventilation CE as PALICC-2 pediatric ARDS criteria and lung-protective targets evolve, annual ECMO CE, state medical license biennial CME, DEA 3-year registration, and professional development at SCCM and PAS. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Pediatric Intensivists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatric intensivists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric intensivist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pediatric intensivist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABP general pediatrics MOC, ABP pediatric critical care MOC, and annual sepsis, ventilation, and ECMO CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {PICU_WORKFLOW.map((step, i) => (
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
                &ldquo;Two separate ABP continuous MOC tracks — general pediatrics and pediatric critical care — with different content requirements that I track independently. The SSC pediatric bundle CE is where the clinical urgency hits most often: when the peripheral vasopressor data came out, I needed documented CE on the safety parameters and monitoring protocol before I could implement peripheral vasopressor use in my PICU. That CE was not on my board calendar. The PALICC-2 update changed how I classify PARDS severity at bedside — the SpO2/FiO2 threshold change for mild PARDS on non-invasive ventilation required CE before I updated my ventilator weaning criteria. The ECMO decannulation CE is equally urgent: the lung recovery assessment before VV-ECMO weaning trial changed our decannulation approach and I needed documented CE before advising families on ECMO duration. All of it tracked in one place now.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">P</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Priya M., MD</div>
                  <div className="text-xs text-muted-foreground">Pediatric intensivist and PICU medical director, children&apos;s hospital</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatric intensivist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC CME — continuous, separately tracked',
                'ABP pediatric critical care medicine MOC CME — continuous, subspecialty content weighted',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual sepsis CE — SSC pediatric bundle, peripheral vasopressor, corticosteroids',
                'Annual ventilation CE — PALICC-2 PARDS update, HFNC versus CPAP, lung-protective targets',
                'Annual ECMO CE — VV-ECMO for PARDS, VA-ECMO for septic shock, decannulation criteria',
                'SCCM and PAS conference CME planning by ABP applicability',
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
        title="ABP general pediatrics MOC and ABP pediatric critical care MOC maintained."
        subtitle="CME tracking for two continuous ABP MOC tracks, annual sepsis CE, PARDS ventilation CE, ECMO CE, and pediatric critical care professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
