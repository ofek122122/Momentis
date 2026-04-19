import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Cardiac Electrophysiologists — ABIM MOC CME renewal, electrophysiology credential management',
  description:
    'Cardiac electrophysiologists manage ABIM internal medicine MOC and ABIM cardiovascular disease subspecialty MOC simultaneously with HRS IBHRE certification (CEPS and CCDS) on 6-year cycles, annual ablation CE as pulsed-field ablation and catheter technology evolves, annual device programming CE as CRT-D algorithms and subcutaneous ICD selection criteria update, state medical license biennial CME, and radiation safety requirements. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full credential calendar.',
  alternates: { canonical: '/for/cardiac-electrophysiologists' },
  openGraph: {
    title: 'Momenties for Cardiac Electrophysiologists',
    description: 'ABIM MOC CME renewal, electrophysiology credential management.',
    url: '/for/cardiac-electrophysiologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABIM cardiovascular disease MOC and HRS IBHRE independently',
    desc: 'Cardiac electrophysiologists hold ABIM internal medicine primary certification under continuous MOC and ABIM cardiovascular disease subspecialty under continuous MOC — two ABIM credentials with overlapping but distinct content requirements. Separately, HRS IBHRE offers two designations on independent 6-year cycles: CEPS (Certified Electrophysiology Specialist) for invasive EP practitioners and CCDS (Certified Cardiac Device Specialist) for device management. IBHRE requires specific EP content hours separate from ABIM MOC — cardiac electrophysiology, arrhythmia mechanisms, catheter ablation techniques, implantable device therapy, antiarrhythmic pharmacology, and sudden cardiac death risk stratification.',
  },
  {
    icon: Clock,
    title: 'Cardiac electrophysiologist multi-credential renewal calendar',
    desc: '"ABIM internal medicine MOC — continuous CME." "ABIM cardiovascular disease subspecialty MOC — continuous CME." "HRS IBHRE CEPS — 6-year recertification, EP-specific content." "HRS IBHRE CCDS — 6-year recertification, device-specific content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual ablation CE — pulsed-field ablation (PFA), cryo versus RF outcomes, left atrial appendage occlusion." "Annual device CE — CRT-D resynchronization optimization, S-ICD selection, leadless pacemaker (Micra AV) programming." "HRS membership — annual." All electrophysiology credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual ablation technology CE and device programming update analytics',
    desc: 'Cardiac electrophysiologists performing catheter ablation must maintain CE on a rapidly evolving technology landscape: pulsed-field ablation (PFA) received FDA approval for paroxysmal atrial fibrillation (Farapulse — ADVENT trial 2023) and is displacing thermal ablation in many centers. PFA requires distinct workflow, sheath management, and real-time monitoring CE before clinical adoption. Annual device CE: DANISH trial (ICD vs. no ICD in non-ischemic CMP) long-term data, subcutaneous ICD PRAETORIAN trial 10-year outcomes, and CRT non-responder optimization (VV timing, quadripolar LV lead placement) requires annual CE to keep device programming current.',
  },
  {
    icon: Users,
    title: 'HRS, ACC electrophysiology section, and EP professional development',
    desc: '"HRS Annual Scientific Sessions — may." "ACC Scientific Sessions — march." "EHRA Europace — june." "AHA Scientific Sessions — november." "Ablation CE — Farapulse PFA ADVENT 2-year outcomes, FIRE AND ICE cryoablation versus RF long-term recurrence, left atrial appendage closure CHAMPION-AF trial (Watchman FLX versus warfarin), and convergent hybrid ablation for longstanding persistent AF." "Device CE — ATLAS EV-ICD trial (extravascular ICD, SICD alternative), BUDAPEST CRT upgrade trial outcomes, physiologic pacing (conduction system pacing — His-bundle and LBBP) versus biventricular CRT in LBBB HFrEF." "Leadless CE — Micra AV long-term data, Aveir DR dual-chamber leadless pacing feasibility." All EP professional development on calendar.',
  },
]

const EP_WORKFLOW = [
  { time: 'Annual planning', action: 'ABIM internal medicine MOC CME pace (cardiovascular content weighted), ABIM cardiovascular disease subspecialty MOC pace, HRS IBHRE CEPS recertification cycle (6-year — recertification window calculated), HRS IBHRE CCDS recertification cycle (independent 6-year track), state medical license biennial CME, DEA 3-year renewal, annual ablation technology CE, annual device CE, HRS Annual Scientific Sessions, and HRS membership all loaded in January. ABIM IM counter and ABIM cardiovascular disease counter tracked independently. IBHRE CEPS and CCDS recertification deadlines tracked separately.' },
  { time: 'CE completion', action: '"HRS-approved — HRS/EHRA/ECAS/APHRS/SOLAECE 2023 Catheter Ablation Consensus Statement: pulsed-field ablation procedural technique and safety considerations (esophageal thermal injury profile versus RF, phrenic nerve monitoring, coronary spasm risk), clinical trial endpoints for AF ablation durability assessment, and composite success endpoint definitions for paroxysmal versus persistent AF ablation outcomes, 4 CME, AMA PRA Category 1, ABIM MOC applicable, IBHRE CEPS applicable." ABIM and IBHRE counters update.' },
  { time: 'Ablation CE', action: '"Annual catheter ablation CE — pulsed-field ablation clinical integration: ADVENT trial 12-month single-procedure success rate versus thermal ablation, Farapulse procedural workflow (60F transseptal access, CARDINAL catheter mapping integration), real-time PFA lesion assessment without contact force requirements, esophageal fistula risk profile compared with high-power short-duration RF, and patient selection for PFA versus cryo in paroxysmal AF, 3 CME, IBHRE CEPS applicable, Q1." Annual ablation CE placed Q1 aligned with HRS May meeting preparation.' },
  { time: 'Device CE', action: '"Annual device CE — conduction system pacing update: LBBP (left bundle branch pacing) versus His-bundle pacing — threshold stability and sensing at 12 months (LBBP-RESYNC trial), conduction system pacing versus BIV CRT in LBBB HFrEF (BUDAPEST upgrade trial outcomes), SICD versus TV-ICD in primary prevention — PRAETORIAN 5-year data, and Micra AV leadless AVVS algorithm performance in AF patients requiring rate-responsive pacing, 3 CME, IBHRE CCDS applicable, Q3." Annual device CE placed Q3 aligned with EHRA and AHA sessions.' },
  { time: 'Renewal audit', action: 'Analytics: ABIM internal medicine MOC CME on pace? ABIM cardiovascular disease subspecialty MOC content satisfied? HRS IBHRE CEPS recertification window — EP content hours accumulated? HRS IBHRE CCDS recertification window — device content hours accumulated? State medical license CME complete? DEA valid? Annual ablation CE documented? Annual device CE documented? HRS membership active? Complete cardiac electrophysiologist credential audit 90 days before earliest renewal.' },
]

export default function ForCardiacElectrophysiologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Cardiac Electrophysiologists"
        title={
          <>
            ABIM cardiovascular MOC and IBHRE certification maintained.
            <br />
            <em className="not-italic text-gold">Ablation technology CE current. Device programming tracked.</em>
          </>
        }
        lede="Cardiac electrophysiologists manage ABIM internal medicine continuous MOC, ABIM cardiovascular disease subspecialty continuous MOC, and HRS IBHRE CEPS and CCDS certifications on independent 6-year recertification cycles — all tracked separately. Annual ablation CE as pulsed-field ablation displaces thermal techniques, annual device CE as conduction system pacing and leadless devices change programming protocols, state medical license biennial CME, DEA 3-year registration, and professional development at HRS and ACC. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Cardiac Electrophysiologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How cardiac electrophysiologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for cardiac electrophysiologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Cardiac electrophysiologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABIM dual MOC cycles, IBHRE CEPS and CCDS 6-year recertification, and annual ablation and device CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {EP_WORKFLOW.map((step, i) => (
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
                &ldquo;ABIM IM and ABIM cardiovascular disease MOC both continuous — tracked separately because the content requirements differ. The HRS IBHRE certifications are different again: CEPS on a 6-year cycle for the ablation work and CCDS for the device side. When pulsed-field ablation came through FDA approval in 2023, I needed specific CE on the Farapulse procedural workflow before I could perform it — that CE had nothing to do with my board renewal calendar. The conduction system pacing CE — LBBP versus His-bundle pacing — was similar: new technique requiring procedure-specific training documented before I could bill. Having all four credentials on one calendar with 90-day alerts is the first time I have not worried about missing a renewal while being busy in the lab.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">D</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Daniel R., MD</div>
                  <div className="text-xs text-muted-foreground">Cardiac electrophysiologist and EP lab director, academic cardiovascular program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All cardiac electrophysiologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABIM internal medicine MOC CME — continuous',
                'ABIM cardiovascular disease subspecialty MOC — continuous, separate counter',
                'HRS IBHRE CEPS — 6-year recertification, EP-specific content hours',
                'HRS IBHRE CCDS — 6-year recertification, device-specific content hours',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual ablation CE — PFA, cryo, RF, left atrial appendage occlusion',
                'Annual device CE — conduction system pacing, S-ICD, leadless pacemakers',
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
        title="ABIM cardiovascular MOC and IBHRE certification maintained."
        subtitle="CME tracking for ABIM dual MOC and IBHRE CEPS/CCDS 6-year recertification, annual ablation technology CE, device programming CE, and EP professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
