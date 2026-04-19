import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Forensic Psychiatrists — ABPN MOC CME renewal, forensic psychiatry credential management',
  description:
    'Forensic psychiatrists manage ABPN general psychiatry primary MOC and ABPN forensic psychiatry subspecialty certification on a 10-year examination cycle, annual competency restoration CE as state statutory standards evolve, annual violence risk assessment CE as structured professional judgment instruments update, state medical license biennial CME, DEA 3-year renewal, and professional development at AAPL simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full credential calendar.',
  alternates: { canonical: '/for/forensic-psychiatrists' },
  openGraph: {
    title: 'Momenties for Forensic Psychiatrists',
    description: 'ABPN MOC CME renewal, forensic psychiatry credential management.',
    url: '/for/forensic-psychiatrists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABPN psychiatry MOC and forensic psychiatry subspecialty independently',
    desc: 'Forensic psychiatrists hold ABPN general psychiatry primary certification under continuous MOC and ABPN forensic psychiatry subspecialty certification on a 10-year examination cycle with a 24-month preparation window. ABPN forensic psychiatry subspecialty requires forensic-specific content including criminal competencies (competency to stand trial, competency restoration), criminal responsibility (insanity defense, diminished capacity), civil forensic evaluation (guardianship, testamentary capacity, personal injury, disability), violence risk assessment, sex offender evaluation, correctional psychiatry, and ethics in forensic practice. ABPN general psychiatry MOC runs on a continuous cycle with different clinical content requirements.',
  },
  {
    icon: Clock,
    title: 'Forensic psychiatrist multi-credential renewal calendar',
    desc: '"ABPN general psychiatry MOC — continuous CME." "ABPN forensic psychiatry subspecialty — 10-year examination cycle, 24-month prep window." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual competency restoration CE — state statutory standard updates, Miranda rights capacity assessment." "Annual violence risk assessment CE — HCR-20 version 3 updates, VRAG-R, START, and SVR-20 structured professional judgment." "AAPL membership — annual." "Annual correctional CE — APA Position Statement on Correctional Psychiatry update." All forensic credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual competency assessment CE and violence risk instrument update analytics',
    desc: 'Forensic psychiatrists performing competency evaluations must maintain CE as state statutory standards evolve: Dusky v. United States competency framework interpretation has been shaped by state-by-state case law creating jurisdiction-specific requirements. Annual competency CE ensures current practice on MacCAT-CA instrument scoring updates, Sell v. United States involuntary medication standards, and Jackson v. Indiana restoration timelines now under active state legislative reform in multiple jurisdictions. Annual violence risk CE: HCR-20 Version 3 structured professional judgment framework updated dynamic risk factors and protective factors — SPJ practice requires annual CE as courts increasingly scrutinize actuarial versus SPJ methodology.',
  },
  {
    icon: Users,
    title: 'AAPL, APAF, and forensic psychiatry professional development',
    desc: '"AAPL Annual Meeting — october." "APA Annual Meeting — may." "IAFMHS International Association of Forensic Mental Health Services — june." "AAPL Ethics Guidelines for the Practice of Forensic Psychiatry — annual review requirement." "Competency CE — Dusky standard jurisdictional variations, MacCAT-CA reliability in intellectual disability and psychosis, CAST-MR competency assessment specific to intellectual disability, and videoconference competency evaluation validity post-COVID." "Violence risk CE — VRAG-R 10-year outcome data, PCL-R scoring reliability across evaluator training levels, dynamic risk factor weighting in HCR-20v3 professional override documentation, and violence risk assessment in juvenile transfer to adult court." "Sex offender CE — Static-99R coding updates, RRASOR actuarial instrument validation, and SVR-20 SPJ for sexual violence risk." All forensic professional development on calendar.',
  },
]

const FORENSIC_WORKFLOW = [
  { time: 'Annual planning', action: 'ABPN general psychiatry MOC CME pace (forensic content weighted), ABPN forensic psychiatry subspecialty CE pace (10-year cycle — 24-month prep window alert calculated from examination date), state medical license biennial CME, DEA 3-year renewal, annual competency assessment CE, annual violence risk assessment CE, AAPL Annual Meeting, and AAPL membership all loaded in January. ABPN psychiatry counter and forensic psychiatry subspecialty counter tracked independently.' },
  { time: 'CE completion', action: '"AAPL-approved — AAPL 2023 Ethics Guidelines update: dual agency conflicts in correctional evaluations, confidentiality limits when evaluating for court versus treating, scope of forensic opinion formation when evaluating outside area of expertise, and disclosure obligations in civil commitment evaluations, 3 CME, AMA PRA Category 1, ABPN MOC applicable, ABPN forensic psychiatry applicable — ethics domain." Both ABPN counters update.' },
  { time: 'Competency CE', action: '"Annual competency assessment CE — Jackson v. Indiana restoration reform: state-by-state maximum restoration period legislative changes (2021-2024), hospital versus community restoration efficacy data, competency screening instruments (CAST, GCST) validity compared with full MacCAT-CA in high-volume court settings, and Sell hearing documentation requirements for involuntary outpatient medication orders in restoration, 3 CME, ABPN forensic psychiatry applicable, Q1." Annual competency CE placed Q1 aligned with AAPL October meeting preparation.' },
  { time: 'Risk CE', action: '"Annual violence risk assessment CE — HCR-20 Version 3 structured professional judgment: C-scale dynamic item updating frequency in inpatient versus community settings, protective factor integration using SAPROF in risk formulation, professional override documentation standards when overriding actuarial estimate, and violence risk assessment testimony standards for Daubert admissibility — methodology disclosure requirements for SPJ versus actuarial instruments, 3 CME, ABPN forensic psychiatry applicable, Q3." Annual risk CE placed Q3 aligned with IAFMHS June meeting data.' },
  { time: 'Renewal audit', action: 'Analytics: ABPN general psychiatry MOC CME on pace? ABPN forensic psychiatry subspecialty content satisfied? (24-month prep window calculated for 10-year exam?) State medical license CME complete? DEA valid? Annual competency restoration CE documented? Annual violence risk assessment CE documented? AAPL membership active? AAPL Ethics Guidelines review documented? Complete forensic psychiatrist credential audit 90 days before earliest renewal.' },
]

export default function ForForensicPsychiatristsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Forensic Psychiatrists"
        title={
          <>
            ABPN psychiatry MOC and forensic subspecialty maintained.
            <br />
            <em className="not-italic text-gold">Competency CE current. Violence risk instruments tracked.</em>
          </>
        }
        lede="Forensic psychiatrists manage ABPN general psychiatry continuous MOC and ABPN forensic psychiatry subspecialty certification on a 10-year examination cycle with 24-month preparation window alerts, state medical license biennial CME, DEA 3-year registration, annual competency assessment CE as state statutory standards and restoration reform evolve, annual violence risk CE as HCR-20v3 structured professional judgment methodology is scrutinized in Daubert hearings, and professional development at AAPL. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Forensic Psychiatrists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How forensic psychiatrists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for forensic psychiatrist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Forensic psychiatrist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABPN MOC cycles, forensic psychiatry 10-year subspecialty examination, and annual competency and violence risk CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {FORENSIC_WORKFLOW.map((step, i) => (
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
                &ldquo;ABPN general psychiatry continuous MOC and ABPN forensic psychiatry subspecialty on a 10-year exam cycle — tracked separately. The forensic work requires CE that has nothing to do with my clinical board renewal: competency restoration reform has changed the statutory landscape in my state three times in five years, and I need current CE before I testify. The violence risk CE matters for Daubert — opposing counsel asks about my CE hours and instrument training directly in depositions, so I need dated CE documentation. The 10-year subspecialty examination cycle requires a 24-month prep window calculation that I track independently from my annual clinical CME. AAPL ethics review is annual and separately documented. All of it on one calendar now.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">S</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Simone A., MD</div>
                  <div className="text-xs text-muted-foreground">Forensic psychiatrist and court clinic director, state forensic evaluation program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All forensic psychiatrist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABPN general psychiatry MOC CME — continuous, forensic content weighted',
                'ABPN forensic psychiatry subspecialty — 10-year cycle, 24-month preparation window alert',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual competency assessment CE — Jackson restoration reform, MacCAT-CA updates',
                'Annual violence risk CE — HCR-20v3, Daubert methodology documentation',
                'AAPL membership renewal — annual',
                'AAPL Ethics Guidelines annual review — documented for practice compliance',
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
        title="ABPN psychiatry MOC and forensic subspecialty maintained."
        subtitle="CME tracking for ABPN dual certification with 10-year exam prep window, annual competency restoration CE, violence risk assessment instrument CE, and forensic professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
