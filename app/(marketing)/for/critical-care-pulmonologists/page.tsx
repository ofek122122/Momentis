import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Critical Care Pulmonologists — ABIM MOC CME renewal, pulmonary critical care credential management',
  description:
    'Critical care pulmonologists manage ABIM internal medicine primary MOC, ABIM pulmonary disease subspecialty MOC, and ABIM critical care medicine subspecialty MOC on three independent cycles, ACLS 2-year renewal, annual mechanical ventilation and ARDS CE, bronchoscopy procedural competency documentation, state medical license biennial CME, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full credential calendar.',
  alternates: { canonical: '/for/critical-care-pulmonologists' },
  openGraph: {
    title: 'Momenties for Critical Care Pulmonologists',
    description: 'ABIM MOC CME renewal, pulmonary critical care credential management.',
    url: '/for/critical-care-pulmonologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABIM IM MOC, pulmonary disease, and critical care medicine independently',
    desc: 'Critical care pulmonologists hold ABIM internal medicine primary certification under continuous MOC, ABIM pulmonary disease subspecialty certification on a second MOC cycle, and ABIM critical care medicine subspecialty certification on a third independent cycle — three ABIM credentials with different content requirements. ABIM critical care medicine requires ICU-specific content including mechanical ventilation, hemodynamic monitoring, sepsis and shock management, and multi-organ failure. ABIM pulmonary disease requires pulmonary-specific content including obstructive lung disease, interstitial lung disease, lung transplant, and advanced bronchoscopy. Each ABIM certification tracks CE independently.',
  },
  {
    icon: Clock,
    title: 'Critical care pulmonologist multi-credential renewal calendar',
    desc: '"ABIM internal medicine MOC — continuous CME." "ABIM pulmonary disease subspecialty MOC — pulmonary content." "ABIM critical care medicine subspecialty MOC — ICU content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "ACLS — 2-year renewal." "Annual mechanical ventilation and ARDS CE." "Annual bronchoscopy procedural competency documentation." "CHEST membership — annual." "SCCM membership — annual." All critical care pulmonologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual ARDS CE and bronchoscopy procedural competency documentation analytics',
    desc: 'Critical care pulmonologists directing ICUs must maintain CE on mechanical ventilation and ARDS management — the PALICC-2 criteria for pediatric ARDS, NHSN COVID-associated ARDS data, and Berlin definition updates create annual CE requirements for physicians managing ventilated patients. Annual CE on prone positioning protocols, HFOV decision criteria, and veno-venous ECMO patient selection is a practice requirement. Annual bronchoscopy procedural competency documentation: Joint Commission standards require documented procedural competency maintenance for physicians with bronchoscopy privileges — case volume documentation placed as an annual institutional credentialing requirement separate from ABIM MOC.',
  },
  {
    icon: Users,
    title: 'CHEST, SCCM, and pulmonary critical care professional involvement',
    desc: '"CHEST Annual Meeting — october." "SCCM Critical Care Congress — february." "ATS International Conference — may." "European Respiratory Society Annual Congress." "ARDS CE — PALICC-2 criteria, prone positioning evidence (PROSEVA trial 10-year follow-up), VV-ECMO in refractory ARDS." "Sepsis CE — SSC 2024 bundle hour-1 updates, vasopressor sequencing, thiamine in septic shock." "ILD CE — antifibrotic therapy in progressive pulmonary fibrosis beyond IPF, nintedanib in systemic sclerosis-ILD." "Bronchoscopy CE — robotic bronchoscopy navigation, EBUS-TBNA in mediastinal staging." All pulmonary critical care professional development on calendar. CHEST and SCCM conference CME tagged by ABIM IM, pulmonary, and critical care applicability.',
  },
]

const CCPULM_WORKFLOW = [
  { time: 'Annual planning', action: 'ABIM IM MOC CME pace (pulmonary/critical care content weighted), ABIM pulmonary subspecialty CE pace, ABIM critical care subspecialty CE pace, state medical license biennial CME, DEA 3-year renewal, ACLS 2-year cycle, annual ARDS and mechanical ventilation CE, annual bronchoscopy competency documentation, CHEST Annual Meeting, SCCM Critical Care Congress, ATS International Conference, and CHEST and SCCM memberships all loaded in January. All three ABIM counters tracked independently.' },
  { time: 'CE completion', action: '"SCCM-approved — vasopressor management in distributive shock: norepinephrine versus vasopressin as first-line agent in septic shock, angiotensin II in refractory vasodilatory shock, evidence for early vasopressin addition and catecholamine-sparing, and methylene blue in vasoplegic syndrome post-cardiac surgery, 2 CME, AMA PRA Category 1, ABIM MOC applicable, ABIM pulmonary applicable, ABIM critical care applicable — shock domain." All three ABIM counters update. Triple applicability logged.' },
  { time: 'Vent/ARDS CE', action: '"Annual ARDS and mechanical ventilation CE — lung-protective ventilation: ARDS Berlin definition 2023 update, prone positioning protocol for moderate-severe ARDS (>12 hours per session, prone team training), high-flow nasal oxygen versus NIV as pre-intubation bridge, and VV-ECMO referral criteria in refractory ARDS, 3 CME, ABIM pulmonary and critical care applicable, Q1." Annual ARDS CE placed Q1. Berlin definition update and ARDS epidemiology from NHSN published annually — CE placed before spring ICU census surge.' },
  { time: 'Bronchoscopy CE', action: '"Annual bronchoscopy procedural competency — institutional privileges review: flexible bronchoscopy case volume (50+ annually for competency), EBUS-TBNA (25+ for active privileges), BAL technique and cell count interpretation, airway foreign body extraction, and endobronchial tumor management with argon plasma coagulation, 2 CE, Q1." Annual bronchoscopy competency placed Q1 before institutional credentialing review cycle. Volume thresholds documented annually — separate from ABIM board CE.' },
  { time: 'Renewal audit', action: 'Analytics: ABIM IM MOC CME on pace? ABIM pulmonary subspecialty content satisfied? ABIM critical care subspecialty content satisfied? State medical license CME complete? DEA valid? ACLS current? Annual ARDS/ventilator CE documented? Bronchoscopy case volumes documented? CHEST and SCCM memberships active? All three ABIM counters reviewed independently. Complete credential audit 90 days before earliest renewal.' },
]

export default function ForCriticalCarePulmonologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Critical Care Pulmonologists"
        title={
          <>
            Three ABIM certifications tracked independently.
            <br />
            <em className="not-italic text-gold">ARDS CE current. Bronchoscopy competency documented.</em>
          </>
        }
        lede="Critical care pulmonologists manage ABIM internal medicine continuous MOC, ABIM pulmonary disease subspecialty MOC, and ABIM critical care medicine subspecialty MOC — three independent ABIM certifications with different content requirements. Plus state medical license biennial CME, DEA 3-year registration, ACLS 2-year renewal, annual mechanical ventilation and ARDS CE as Berlin criteria and prone positioning protocols evolve, annual bronchoscopy case volume documentation for institutional privileges, and professional development at CHEST, SCCM, and ATS simultaneously. Momenties manages the full credential calendar."
        crumbs={[{ label: 'For Critical Care Pulmonologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How critical care pulmonologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for critical care pulmonologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Critical care pulmonologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through three ABIM MOC cycles, annual ARDS and ventilation CE, and bronchoscopy procedural competency documentation.</h2>
          </Reveal>
          <div className="space-y-3">
            {CCPULM_WORKFLOW.map((step, i) => (
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
                &ldquo;Three ABIM certifications — internal medicine, pulmonary disease, and critical care medicine. ABIM tracks all three separately. A session on mechanical ventilation at CHEST counts for my pulmonary MOC, my critical care MOC, and technically my IM MOC — but I have to make the determination and log each counter. A session on interstitial lung disease counts for pulmonary but probably not critical care. ACLS 2-year renewal. State license biennial. DEA 3-year. My institution requires annual bronchoscopy case volume documentation for my procedural privileges — that has a Joint Commission audit cycle. ARDS management guidelines evolve every year and I do CE specifically on prone positioning and ECMO selection criteria regardless of board timing because I&apos;m the one in the ICU making those decisions at 2 AM. Before Momenties I had three ABIM portals open and a spreadsheet for everything else.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">D</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Daniel H., MD</div>
                  <div className="text-xs text-muted-foreground">Critical care pulmonologist and medical ICU director, academic pulmonary and critical care division</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All critical care pulmonologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABIM internal medicine MOC CME — continuous, pulmonary/critical care content weighted',
                'ABIM pulmonary disease subspecialty MOC — ILD, obstructive lung, bronchoscopy domains',
                'ABIM critical care medicine subspecialty MOC — ventilation, sepsis, shock, ARDS domains',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'ACLS certification — 2-year renewal',
                'Annual bronchoscopy procedural competency — Joint Commission case volume documentation',
                'CHEST, SCCM, and ATS conference CME planning by ABIM IM, pulmonary, and critical care applicability',
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
        title="Three ABIM certifications tracked independently."
        subtitle="CME tracking for ABIM IM, pulmonary, and critical care MOC, annual ARDS CE, bronchoscopy competency documentation, and pulmonary critical care professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
