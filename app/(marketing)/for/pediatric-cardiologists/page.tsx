import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatric Cardiologists — ABP MOC CME renewal, pediatric cardiology credential management',
  description:
    'Pediatric cardiologists manage ABP general pediatrics primary MOC and ABP pediatric cardiology subspecialty MOC (both continuous), annual congenital heart disease CE as transcatheter pulmonary valve replacement SAPIEN 3 pediatric data and Fontan circulation surveillance protocols evolve, annual fetal cardiology CE as fetal intervention techniques and maternal-fetal medicine collaboration protocols update, annual heart failure CE as sacubitril/valsartan pediatric HFrEF dosing data emerge, state medical license biennial CME, DEA 3-year renewal, and ACC/AHA/AEPC membership. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/pediatric-cardiologists' },
  openGraph: {
    title: 'Momenties for Pediatric Cardiologists',
    description: 'ABP MOC CME renewal, pediatric cardiology credential management.',
    url: '/for/pediatric-cardiologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP general pediatrics MOC and ABP pediatric cardiology MOC independently',
    desc: 'Pediatric cardiologists hold ABP general pediatrics primary certification under continuous MOC alongside ABP pediatric cardiology subspecialty certification under continuous MOC — two ABP continuous assessment tracks with different content requirements. ABP pediatric cardiology requires subspecialty content: congenital heart disease anatomy and physiology (all lesion categories — shunt, obstruction, transposition, single ventricle), fetal echocardiography and fetal cardiac intervention, pediatric electrophysiology (SVT management, channelopathies — LQTS, Brugada syndrome, CPVT), pediatric heart failure (dilated cardiomyopathy, post-viral cardiomyopathy, Fontan circulation failure), and preventive cardiology (familial hypercholesterolemia in children, Kawasaki disease cardiovascular sequelae).',
  },
  {
    icon: Clock,
    title: 'Pediatric cardiologist multi-credential renewal calendar',
    desc: '"ABP general pediatrics MOC — continuous CME assessment." "ABP pediatric cardiology MOC — continuous subspecialty CME assessment." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual CHD CE — SAPIEN 3 transcatheter pulmonary valve replacement pediatric registry data, Fontan surveillance protocol update (FUEL trial empagliflozin Fontan CE)." "Annual fetal cardiology CE — fetal aortic valvuloplasty technique update, fetal cardiac surgery collaboration framework." "Annual HF CE — sacubitril/valsartan PANORAMA-HF pediatric HFrEF trial data, milrinone outpatient bridge therapy in pediatric bridge-to-transplant." "AEPC membership — annual." All pediatric cardiology credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual CHD intervention CE and Fontan surveillance update analytics',
    desc: 'Pediatric cardiologists managing CHD interventions must maintain CE on evolving transcatheter techniques and surveillance protocols: SAPIEN 3 (Edwards) received FDA approval for transcatheter pulmonary valve replacement in conduit and native/native-like right ventricular outflow tract — CE on patient selection criteria (minimum conduit diameter, maximum conduit size, landing zone anatomy assessment by CT), procedural technique, and post-TPVR endocarditis surveillance is required before referring or performing procedures. Fontan circulation surveillance CE has become urgent: the FUEL trial (empagliflozin in Fontan circulation) 2023 data showing preserved exercise capacity and reduced hepatic stiffness at 14 weeks has prompted clinical implementation — CE on SGLT2 inhibitor mechanism in single ventricle physiology and monitoring requirements is required before prescribing.',
  },
  {
    icon: Users,
    title: 'ACC ACHD, AEPC, ISACHD, and pediatric cardiology professional development',
    desc: '"AEPC Association for European Paediatric and Congenital Cardiology Annual Meeting — may." "ISACHD International Society for Adult Congenital Heart Disease." "ACC Annual Scientific Session — march." "AHA Scientific Sessions — november." "CHD intervention CE — SAPIEN 3 TPVR pediatric registry outcomes CE (native RVOT versus conduit — landing zone sizing, CT protocol requirements, post-TPVR endocarditis prophylaxis update), Melody valve extended follow-up CE (valve-in-valve TPVR Melody 10-year freedom from reintervention), transcatheter ASD closure in pediatric patients — COAST trial Occlutech versus Amplatzer sizing and selection criteria, and hybrid approach for neonatal hypoplastic left heart syndrome — hybrid Norwood versus standard Norwood stage 1 institution experience CE." "Fontan CE — FUEL trial empagliflozin 14-week Fontan data CE (peak VO2 preservation, hepatic stiffness reduction — mechanism CE for SGLT2 inhibition in elevated central venous pressure physiology, patient selection: Fontan circulation with preserved systolic function), Fontan-associated liver disease (FALD) surveillance — ACR elastography versus liver biopsy — timing of biopsy CE (non-invasive FALD staging), and protein-losing enteropathy in Fontan — budesonide versus sildenafil CE for PLE management." "HF CE — sacubitril/valsartan PANORAMA-HF pediatric trial data CE (pediatric HFrEF below 18 years — weight-based dosing, titration schedule, NYHA improvement at 52 weeks), milrinone outpatient continuous infusion in pediatric bridge-to-transplant CE (OPTN listing criteria, IV access management, home infusion protocol), and ivabradine pediatric dilated cardiomyopathy HF CE (heart rate reduction benefit in tachycardia-mediated cardiomyopathy — age-specific dosing)." All pediatric cardiology professional development on calendar.',
  },
]

const PED_CARDIO_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP general pediatrics continuous MOC CME pace, ABP pediatric cardiology continuous MOC CME pace (tracked separately — different content emphasis), state medical license biennial CME, DEA 3-year renewal, annual CHD intervention CE, annual Fontan surveillance CE, annual pediatric HF CE, AEPC Annual Meeting, ACC Annual Scientific Session, AHA Scientific Sessions, and AEPC/ACC membership all loaded in January. ABP general pediatrics counter and ABP pediatric cardiology counter tracked independently.' },
  { time: 'CE completion', action: '"ACC-approved — ACC 2024 Pediatric Cardiology Update: transcatheter pulmonary valve replacement in native RVOT — patient selection criteria (CT minimum landing zone diameter 16 mm, maximum diameter 32 mm), post-TPVR endocarditis prophylaxis recommendation update (lifetime prophylaxis — clarification of infective endocarditis risk post-TPVR versus surgical valve), sacubitril/valsartan PANORAMA-HF trial data CE (weight-based initial dosing — children 10-50 kg: target dose 1.55 mg/kg combined sacubitril/valsartan equivalent twice daily, KCCQ-pediatric score improvement at 52 weeks), 4 CME, AMA PRA Category 1, ABP general pediatrics MOC applicable, ABP pediatric cardiology MOC applicable." Both counters update.' },
  { time: 'CHD CE', action: '"Annual CHD intervention CE — transcatheter pulmonary valve and Fontan update 2024: SAPIEN 3 native RVOT TPVR registry CE (freedom from reintervention at 3 years — native versus conduit comparison, stent fracture surveillance, pre-stenting technique for optimal landing zone preparation), Melody valve 10-year outcomes CE (valve-in-valve TPVR registry — freedom from reintervention 67% at 10 years, endocarditis incidence — prophylaxis protocol adherence monitoring), empagliflozin FUEL trial 2023 Fontan CE (empagliflozin 10 mg daily mechanism in elevated central venous pressure physiology — natriuretic effect, hepatic venous pressure gradient reduction, prescribing criteria before widespread adoption), and ASD device closure pediatric sizing — COAST trial Occlutech versus Amplatzer (defect size 10-38 mm — sizing ratio and sizing balloon CE), 3 CME, ABP pediatric cardiology MOC applicable, Q1." Annual CHD CE placed Q1 aligned with ACC March session.' },
  { time: 'HF CE', action: '"Annual pediatric heart failure CE — sacubitril/valsartan and advanced therapies: PANORAMA-HF trial CE — sacubitril/valsartan (Entresto) in pediatric HFrEF below 18 years (weight-based dosing initiation and titration protocol, eGFR monitoring, potassium monitoring CE, interaction with ACE inhibitor — 36-hour washout requirement before initiation), ivabradine pediatric tachycardia-mediated cardiomyopathy CE (heart rate reduction mechanism, age-appropriate dosing — children 6 months to 18 years weight-based maximum dose), ventricular assist device for pediatric bridge-to-transplant — Berlin Heart EXCOR versus axial flow devices (size and weight threshold CE), and cardiac resynchronization therapy in pediatric dilated cardiomyopathy — pacing-induced cardiomyopathy versus congenital bundle branch block CRT patient selection, 3 CME, ABP pediatric cardiology MOC applicable, Q3." Annual HF CE placed Q3 aligned with AHA November sessions.' },
  { time: 'Renewal audit', action: 'Analytics: ABP general pediatrics continuous MOC on pace? ABP pediatric cardiology continuous MOC on pace? (Separate counters — different content.) State medical license CME complete? DEA valid? Annual CHD intervention CE documented? Annual Fontan surveillance CE documented? Annual pediatric HF CE documented? AEPC/ACC membership active? Complete pediatric cardiologist credential audit 90 days before earliest renewal.' },
]

export default function ForPediatricCardiologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatric Cardiologists"
        title={
          <>
            ABP general pediatrics MOC and ABP pediatric cardiology MOC maintained.
            <br />
            <em className="not-italic text-gold">TPVR intervention CE current. Fontan surveillance and pediatric HF tracked.</em>
          </>
        }
        lede="Pediatric cardiologists manage two continuous ABP MOC tracks — general pediatrics and pediatric cardiology — with different content requirements tracked independently. Annual CHD CE as SAPIEN 3 TPVR pediatric data and transcatheter technique protocols evolve, annual Fontan CE as empagliflozin FUEL trial data prompts clinical implementation, annual pediatric HF CE as sacubitril/valsartan PANORAMA-HF trial data emerge, state medical license biennial CME, DEA 3-year registration, and professional development at AEPC and ACC. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Pediatric Cardiologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatric cardiologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric cardiologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pediatric cardiologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABP general pediatrics MOC, ABP pediatric cardiology MOC, and annual CHD intervention, Fontan, and heart failure CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {PED_CARDIO_WORKFLOW.map((step, i) => (
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
                &ldquo;Two continuous ABP MOC tracks — general pediatrics and pediatric cardiology — tracked separately because the CHD content requirements are completely different from general pediatrics. The SAPIEN 3 native RVOT CE was clinically urgent: when our cath lab started evaluating native RVOT patients for TPVR, I needed documented CE on the CT sizing protocol, the pre-stenting technique, and the endocarditis surveillance schedule before I was part of the multidisciplinary selection meetings. The empagliflozin Fontan CE was the same: the FUEL trial data came out and families were asking about it immediately — I needed documented CE on the mechanism, the prescribing criteria, and the monitoring requirements before I could counsel them. The sacubitril/valsartan PANORAMA-HF CE changed my HF prescribing: I needed the weight-based dosing and titration protocol documented before I started initiating it in my dilated cardiomyopathy patients.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">C</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Carlos N., MD</div>
                  <div className="text-xs text-muted-foreground">Pediatric cardiologist and cardiac catheterization laboratory director, children&apos;s hospital</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatric cardiologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC CME — continuous, separately tracked',
                'ABP pediatric cardiology MOC CME — continuous, subspecialty content weighted',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual CHD CE — SAPIEN 3 TPVR native RVOT, Melody valve extended follow-up, ASD closure',
                'Annual Fontan CE — empagliflozin FUEL trial, FALD surveillance, PLE management',
                'Annual pediatric HF CE — sacubitril/valsartan PANORAMA-HF, ivabradine, VAD for bridge',
                'AEPC and ACC conference CME planning by ABP applicability',
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
        title="ABP general pediatrics MOC and ABP pediatric cardiology MOC maintained."
        subtitle="CME tracking for two continuous ABP MOC tracks, annual CHD intervention CE, Fontan CE, pediatric HF CE, and pediatric cardiology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
