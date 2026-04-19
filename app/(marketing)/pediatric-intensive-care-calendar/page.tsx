import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Pediatric Intensive Care Unit (PICU) Compliance Calendar | Momenties',
  description: 'Track PALS biennial recertification, NRP biennial renewal, CCRN-Pediatric 3-year renewal, NHSN CLABSI monthly reporting, Virtual PICU Systems quarterly benchmarking, PICU quality metrics, and annual family-centered care documentation deadlines.',
}

const pillars = [
  {
    icon: Target,
    title: 'PALS, NRP & PICU Credentials',
    description: 'PALS (Pediatric Advanced Life Support) biennial recertification for all PICU nurses, physicians, and APPs, NRP (Neonatal Resuscitation Program) biennial renewal for PICUs admitting neonates, CCRN-Pediatric 3-year renewal for PICU RNs, CPNP-AC (Certified Pediatric Nurse Practitioner Acute Care) 5-year renewal, annual SCCM (Society of Critical Care Medicine) annual conference CE, annual PEMCO (Pediatric Emergency Medicine and Critical Care) annual CE, annual PICU-specific procedure competency — arterial line insertion, central line insertion, intubation, and chest tube annual skills documentation for all PICU advanced practice providers.',
  },
  {
    icon: RefreshCw,
    title: 'Virtual PICU Systems & Quality Benchmarking',
    description: 'Virtual PICU Systems (VPS) annual data submission — all PICU admissions submitted for national benchmarking, quarterly VPS PICU quality benchmarking report review (mortality, CLABSI, VAP, and ICU LOS vs. national VPS median), annual PAEDIATRIC OUTCOMES Research Consortium (PORC) quality initiative participation, annual PICU PI annual performance improvement report, annual Children\'s Hospital Association (CHA) quality collaborative participation documentation (if Children\'s Hospital), and annual NACHRI quality benchmarking review (National Association of Children\'s Hospitals and Related Institutions).',
  },
  {
    icon: TrendingUp,
    title: 'CLABSI, VAP & NHSN Infection Surveillance',
    description: 'Monthly NHSN CLABSI rate reporting for all PICU central lines — target ≤1.0 per 1,000 central line days (NHSN 25th percentile PICU), monthly VAP rate for mechanically ventilated PICU patients (target ≤1.0 per 1,000 ventilator days), weekly PICU hand hygiene compliance audit (CDC target ≥90%), monthly blood culture contamination rate (target ≤3%), quarterly central line insertion and maintenance bundle compliance audit (CLABSI prevention bundle ≥95%), and quarterly VAP prevention bundle compliance audit (HOB elevation, oral care, circuit changes ≥95%).',
  },
  {
    icon: BarChart3,
    title: 'Family-Centered Care & Delirium Screening',
    description: 'Annual family-centered rounds documentation quality audit — confirmed parent/guardian participation rate ≥90% for daily PICU rounds, annual PICU delirium screening protocol competency — CAM-ICU or pCAM-ICU annual staff training (PICU delirium prevalence 20–30%), annual PICU pain and agitation management protocol update per current SCCM PAD/PADIS guidelines, annual PICU post-ICU syndrome (PICS-p) follow-up clinic referral rate documentation, annual medical device-related pressure injury (MDRPI) protocol compliance audit, and annual PICU occupational therapy and physical therapy early mobilization program outcomes report.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'PALS Recertification Audit & Annual Policy Update',
    tasks: [
      'Annual PALS provider status audit for all PICU nurses, physicians, and APPs — identify all staff due for biennial PALS recertification within next 12 months',
      'Annual NRP certification status audit for PICUs admitting neonates — confirm all providers current',
      'Annual PICU policy and procedure annual review — update per VPS quality improvement recommendations and SCCM PADIS guideline updates',
      'Annual OIG/LEIE exclusion checks for all PICU clinical staff',
      'Annual HIPAA training for all PICU nurses and providers',
      'Annual family-centered care education session for all new PICU nurses — including family presence during resuscitation policy and family communication training',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'VPS Q1 Data Submission & CLABSI Audit',
    tasks: [
      'VPS PICU Q1 data submission — all PICU admissions January–March submitted with complete severity score, diagnosis, procedures, and outcome data',
      'Q1 NHSN CLABSI rate audit — review all PICU CLABSI events Q1 vs. NHSN 25th percentile target (≤1.0/1,000 central line days)',
      'Q1 VAP rate audit — PICU VAP rate vs. NHSN ventilator days benchmark (target ≤1.0/1,000 ventilator days)',
      'Annual pCAM-ICU delirium screening tool competency documentation for all PICU nurses and APPs',
      'Annual PICU procedure competency assessment — arterial line insertion, central venous line insertion, and endotracheal intubation annual skills validation for all PICU APPs',
      'Q1 central line insertion and maintenance bundle compliance audit — confirm ≥95% compliance with all CLABSI prevention bundle elements',
    ],
  },
  {
    period: 'May – Jun',
    title: 'Family-Centered Rounds Audit & CPNP-AC Review',
    tasks: [
      'Annual family-centered rounds documentation quality audit — confirm ≥90% parent/guardian participation rate in daily PICU rounds for all eligible admissions',
      'Annual CPNP-AC and CCRN-Pediatric certification status audit — identify all PICU NPs and RNs due for 5-year and 3-year renewal and on-track for required CE',
      'VPS Q2 data submission — all PICU admissions April–June submitted',
      'Annual PICU early mobilization outcomes report — compile occupational therapy and physical therapy early mobilization initiation rate and functional outcomes at PICU discharge',
      'Annual PICU post-ICU syndrome (PICS-p) follow-up clinic referral rate audit — confirm all eligible PICU survivors referred for neurodevelopmental and functional follow-up',
      'Q2 hand hygiene compliance audit — confirm ≥90% PICU hand hygiene compliance across all entry/care episodes',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'VPS Quality Benchmarking & PICU Quality Review',
    tasks: [
      'Annual VPS PICU quality benchmarking mid-year report review — PICU mortality, CLABSI, VAP, and ICU LOS vs. VPS national median benchmarks',
      'Annual PICU quality dashboard mid-year review — present risk-adjusted mortality, CLABSI, VAP, and medication error rates to PICU medical director and quality committee',
      'VPS Q3 data submission — all PICU admissions July–September submitted',
      'Annual PICU blood culture contamination rate review — confirm ≤3% target met across all PICU admission cultures',
      'Annual PICU medication safety annual review — focused audit of high-alert medications (insulin, heparin, concentrated electrolytes, neuromuscular blocking agents) in PICU',
      'Annual PICU transport team annual competency assessment — PALS refresher, transport ventilator, and transport monitoring equipment annual skills review',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'TJC Accreditation Prep & Emergency Drills',
    tasks: [
      'Annual TJC accreditation PICU self-assessment — prepare for potential unannounced survey with focus on PICU high-alert medication (morphine, fentanyl, midazolam, vecuronium) documentation and storage compliance',
      'Annual PICU mass casualty pediatric preparedness drill — document all PICU team members participating in annual disaster response simulation',
      'Annual Children\'s Hospital Association quality collaborative annual outcomes report — compile all PICU quality metrics for CHA benchmarking submission',
      'Q4 NHSN CLABSI 9-month trend analysis — complete YTD review, identify any sustained CLABSI events for root cause analysis',
      'Annual PICU noise and sleep disruption quality audit — ambient light and noise level compliance with family-centered care standards',
      'Annual PICU tracheostomy care competency documentation — all PICU nurses complete annual tracheostomy suctioning, emergency decannulation response, and PMV placement skills review',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'Year-End VPS Data & Annual Quality Report',
    tasks: [
      'VPS Q4 data submission — all PICU admissions October–December submitted (annual VPS dataset complete)',
      'Annual PICU quality improvement annual report — compile CLABSI, VAP, mortality, LOS, family-centered rounds, and delirium screening rates for PICU leadership and board quality committee',
      'Annual PALS recertification completion verification — confirm all PICU staff required for biennial renewal have completed PALS by year-end',
      'Annual PICU staff satisfaction and retention review — Magnet designation documentation (if applicable) and PICU nursing satisfaction survey',
      'Annual PICU delirium screening program effectiveness report — compile full-year pCAM-ICU positive screen rate, delirium duration, and intervention response data',
      'Annual PICU family advisory council annual meeting documentation — family engagement in PICU quality improvement and policy development',
    ],
  },
]

const kpis = [
  { metric: '≤1.0', label: 'CLABSI Rate/1,000 Central Line Days', description: 'NHSN 25th percentile for PICUs — above target triggers mandatory central line bundle root cause analysis and NHSN reporting' },
  { metric: '≤1.0', label: 'VAP Rate/1,000 Ventilator Days', description: 'NHSN PICU benchmark — VAP rates above target trigger ventilator bundle compliance audit and infection control review' },
  { metric: '100%', label: 'PALS Biennial Recertification', description: 'SCCM and TJC requirement for all PICU providers — expired PALS is a TJC competency citation at accreditation survey' },
  { metric: '≥90%', label: 'Family-Centered Rounds Participation', description: 'Children\'s Hospital Association quality standard — family participation below 90% triggers family engagement protocol review' },
  { metric: '≥95%', label: 'CLABSI Prevention Bundle Compliance', description: 'PICU CLABSI prevention standard — bundle compliance below 95% predicts CLABSI rate increase and triggers root cause analysis' },
  { metric: '≤3%', label: 'Blood Culture Contamination Rate', description: 'NHSN quality standard — above 3% contamination in PICU triggers unnecessary antibiotic exposure and prolonged ICU stays for critically ill children' },
]

const testimonial = {
  quote: 'PICU compliance runs on PALS biennial recertification cycles, quarterly VPS data submissions, monthly NHSN CLABSI and VAP reporting, annual family-centered rounds audits, pCAM-ICU delirium screening competency, CPNP-AC renewal tracking, CLABSI bundle compliance monitoring, and annual Children\'s Hospital Association quality reporting — all simultaneously. Momenties mapped every deadline. Our PICU achieved CLABSI zero for 24 consecutive months and top-quartile VPS risk-adjusted mortality.',
  author: 'PICU Medical Director, MD, FAAP, FCCM',
  role: 'Pediatric Intensive Care Unit, Children\'s Hospital Academic Medical Center',
}

export default function PediatricIntensiveCareCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Pediatric Intensive Care"
        title="PALS. VPS Benchmarks. CLABSI. Family-Centered Care. One Calendar."
        subtitle="PICU compliance is built on continuous cycles — PALS biennial recertification, quarterly VPS data submissions, monthly NHSN CLABSI and VAP reporting, annual family-centered rounds audits, delirium screening competency, CPNP-AC renewal tracking, and CLABSI bundle monitoring. Momenties maps every SCCM, NHSN, VPS, and TJC milestone so your PICU stays in the top quartile and achieves CLABSI zero year after year."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Pediatric Intensive Care Compliance Coverage
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 28 }}>
            {pillars.map(({ icon: Icon, title, description }) => (
              <div key={title} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 28 }}>
                <Icon size={28} color="#c5a35c" style={{ marginBottom: 14 }} />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: 10, color: '#f0ece3' }}>{title}</h3>
                <p style={{ fontSize: '0.92rem', color: '#a0998e', lineHeight: 1.65 }}>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Timeline */}
      <Reveal>
        <section style={{ background: '#0a0a0d', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 12, color: '#f0ece3' }}>
              12-Month Pediatric Intensive Care Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January PALS audit through December VPS year-end submission &mdash; every SCCM, NHSN, VPS, and TJC PICU milestone mapped.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {phases.map((phase) => (
                <div key={phase.period} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 24, background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '24px 28px', alignItems: 'start' }}>
                  <div>
                    <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.95rem', marginBottom: 4 }}>{phase.period}</div>
                    <div style={{ color: '#f0ece3', fontWeight: 600, fontSize: '1rem', lineHeight: 1.35 }}>{phase.title}</div>
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {phase.tasks.map((task) => (
                      <li key={task} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.9rem', color: '#a0998e', lineHeight: 1.55 }}>
                        <span style={{ color: '#c5a35c', marginTop: 3, flexShrink: 0 }}>▸</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            The KPIs VPS, NHSN, and TJC Measure Your PICU By
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {kpis.map(({ metric, label, description }) => (
              <div key={label} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '28px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#c5a35c', fontFamily: 'Playfair Display, serif', marginBottom: 8 }}>{metric}</div>
                <div style={{ fontWeight: 600, fontSize: '0.97rem', color: '#f0ece3', marginBottom: 8 }}>{label}</div>
                <div style={{ fontSize: '0.85rem', color: '#a0998e', lineHeight: 1.55 }}>{description}</div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ background: '#0e0e12', padding: '72px 24px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', color: '#c5a35c', marginBottom: 16, lineHeight: 1 }}>&ldquo;</div>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.2rem)', color: '#f0ece3', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 28 }}>
              {testimonial.quote}
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>{testimonial.author}</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>{testimonial.role}</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Achieve CLABSI Zero in Your PICU?"
        subtext="Join pediatric intensive care teams using Momenties to automate every VPS, NHSN, PALS, and SCCM deadline. Free to start."
      />
    </main>
  )
}
