import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Neonatal Intensive Care Unit (NICU) Compliance Calendar | Momenties',
  description: 'Track NRP biennial recertification, S.T.A.B.L.E. annual skills, CLABSI NHSN monthly reporting, NICU QIIA quality benchmarks, Vermont Oxford Network quarterly data, and neonatal transport team annual competency deadlines.',
}

const pillars = [
  {
    icon: Target,
    title: 'NRP, S.T.A.B.L.E. & Neonatal Credentials',
    description: 'NRP (Neonatal Resuscitation Program) biennial recertification for all NICU nurses, neonatologists, and advanced practice providers, S.T.A.B.L.E. Program annual skills maintenance for transport and stabilization, annual neonatal transport team competency assessment, CCRN-Neonatal 3-year renewal for NICU RNs, C-NPT (Certified Neonatal Pediatric Transport) biennial renewal, RNC-NIC (Registered Nurse Certified Neonatal Intensive Care) 3-year renewal, and NCPAP/high-flow nasal cannula annual competency documentation.',
  },
  {
    icon: RefreshCw,
    title: 'Vermont Oxford Network & Quality Benchmarks',
    description: 'Vermont Oxford Network (VON) quarterly data submission for all VLBW (≤1500g) infants — annual VON Annual Quality Congress participation, quarterly VON NICU quality benchmarking report review (IVH rate, NEC rate, nosocomial infection rate, ROP rate vs. VON national median), annual VON iNICQ (internet-based NICU Quality Improvement Collaborative) participation documentation, annual NICU QIIA (Quality Improvement in NICUs of America) process measure audit, and annual CPQCC (California Perinatal Quality Care Collaborative) report for California NICUs.',
  },
  {
    icon: TrendingUp,
    title: 'CLABSI, NEC & NHSN Infection Surveillance',
    description: 'Monthly NHSN CLABSI rate reporting for all NICU central lines — target ≤1.0 per 1,000 central line days (NHSN 25th percentile for Level III NICUs), monthly NEC rate documentation (target ≤5% for VLBW infants, VON median 4%), weekly NICU hand hygiene compliance audit (CDC target ≥90%), monthly blood culture contamination rate (target ≤3%), annual empiric antibiotic use audit for VLBW infants (days of therapy per 1,000 patient days vs. VON median), and quarterly MRSA surveillance culture protocol compliance audit.',
  },
  {
    icon: BarChart3,
    title: 'RSV Prophylaxis & Developmental Care',
    description: 'Annual RSV prophylaxis (palivizumab) protocol update per AAP Red Book annual revision (eligibility criteria revised annually), annual neonatal pain assessment tool competency documentation (NIPS/CRIES/PIPP-R annual staff training), annual human milk and breastfeeding support quality audit (exclusive human milk rate at NICU discharge — target ≥70%), annual developmental care program documentation (NIDCAP annual assessment if certified center), annual retinopathy of prematurity (ROP) screening protocol review per AAP/AAO/AAPOS current criteria, and annual hearing screening EHDI program compliance audit (≥95% screen completion before NICU discharge).',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'NRP Skills Audit & Annual Policy Update',
    tasks: [
      'Annual NRP provider status audit for all NICU nurses, NPs, and neonatologists — identify all staff due for biennial NRP recertification within the next 12 months',
      'Annual AAP Red Book RSV prophylaxis (palivizumab) eligibility criteria update review — update NICU RSV prophylaxis standing orders per current season guidelines',
      'Annual NICU policy and procedure review — update all affected policies per VON quality improvement recommendations from prior year annual report',
      'Annual OIG/LEIE exclusion checks for all NICU staff',
      'Annual HIPAA training for all NICU nurses and providers',
      'Annual hearing screening EHDI compliance audit — confirm ≥95% of NICU discharges have completed auditory brainstem response (ABR) screening',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'VON Q1 Data Submission & CLABSI Audit',
    tasks: [
      'Vermont Oxford Network Q1 data submission — all VLBW (≤1500g) admissions January–March submitted with complete outcome data',
      'Q1 NHSN CLABSI rate audit — review all central line-associated bloodstream infections Q1 vs. NHSN 25th percentile target (≤1.0/1,000 central line days)',
      'Annual retinopathy of prematurity (ROP) screening protocol review per current AAP/AAO/AAPOS criteria — confirm all eligible VLBW and preterm infants screened per protocol',
      'Annual empiric antibiotic use audit Q1 — days of therapy per 1,000 patient days for VLBW infants vs. VON national median',
      'Annual S.T.A.B.L.E. skills maintenance session for all transport team and NICU admission nurses',
      'Q1 NEC rate documentation — confirm NEC rate for VLBW infants benchmarking against VON national median (≤5% target)',
    ],
  },
  {
    period: 'May – Jun',
    title: 'Human Milk Quality Audit & Developmental Care',
    tasks: [
      'Annual human milk and breastfeeding support quality audit — exclusive human milk rate at NICU discharge (target ≥70%) and donor human milk utilization documentation',
      'Annual developmental care program documentation — NIDCAP annual center certification renewal (if NIDCAP-certified), or developmental care competency annual training',
      'Annual neonatal pain assessment tool competency documentation — NIPS/CRIES/PIPP-R annual skills validation for all NICU nurses',
      'Annual NICU transport team annual competency assessment — all C-NPT certified transport nurses and RTs complete annual scenario-based skills assessment',
      'Annual VON iNICQ collaborative participation documentation — confirm enrollment and active participation for current collaborative cycle',
      'Q2 NHSN CLABSI review — trend analysis of central line days vs. CLABSI events, central line bundle compliance audit',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'NICU Quality Metrics Review & RNC-NIC Audit',
    tasks: [
      'Vermont Oxford Network Q2 data submission — all VLBW admissions April–June submitted',
      'Annual RNC-NIC and CCRN-Neonatal certification status audit — identify all NICU RNs due for 3-year renewal and on-track for required CE hours',
      'Annual NICU quality dashboard mid-year review — IVH Grade III/IV rate, NEC rate, nosocomial infection rate, CLD rate, and ROP rate vs. VON national benchmarks',
      'Annual blood culture contamination rate review — NICU blood culture volume and contamination rate (target ≤3%) vs. national median',
      'Annual NCPAP and high-flow nasal cannula competency documentation — all NICU RNs and RTs complete annual skills validation for noninvasive respiratory support devices',
      'Q2 hand hygiene compliance audit — confirm ≥90% compliance rate (CDC) across all NICU pod entries and care episodes',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'VON Annual Congress & Accreditation Prep',
    tasks: [
      'Annual Vermont Oxford Network Annual Quality Congress participation — document all NICU team members attending and CE hours earned',
      'Annual TJC accreditation NICU self-assessment — prepare for potential unannounced survey with focus on high-alert medication (morphine, gentamicin, caffeine citrate) documentation',
      'Annual neonatal transport vehicle inspection and equipment inventory — confirm all transport isolettes, ventilators, and monitoring equipment are in-date and serviced',
      'Q3 NHSN CLABSI report — complete 9-month trend analysis, identify any sustained CLABSI events for root cause analysis',
      'Vermont Oxford Network Q3 data submission — all VLBW admissions July–September submitted',
      'Annual MRSA surveillance culture protocol compliance audit — confirm all admission and discharge MRSA screening cultures completed per NICU policy',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'Year-End VON Data & NRP Renewal Cycle',
    tasks: [
      'Vermont Oxford Network Q4 data submission — all VLBW admissions October–December submitted (VON annual dataset complete for prior calendar year)',
      'Annual VON annual benchmarking report review — compile full-year NICU quality metrics vs. VON national medians for QI committee presentation',
      'Annual NRP recertification completion verification — confirm all NICU staff required for biennial renewal have completed NRP by year-end',
      'Annual NICU staff satisfaction and retention survey — document results for Magnet designation (if applicable) and NICU quality program',
      'Annual RSV palivizumab supply and eligibility preparation for upcoming RSV season (October–March peak) — confirm standing orders updated for current season',
      'Annual NICU quality improvement annual report — compile IVH, NEC, CLABSI, human milk, and ROP metrics for NICU leadership and board quality committee',
    ],
  },
]

const kpis = [
  { metric: '≤1.0', label: 'CLABSI Rate/1,000 Central Line Days', description: 'NHSN 25th percentile for Level III NICUs — above target triggers mandatory central line bundle root cause analysis' },
  { metric: '≤5%', label: 'NEC Rate for VLBW Infants', description: 'VON national median benchmark — NEC rates above median trigger VON quality improvement collaborative consultation' },
  { metric: '100%', label: 'NRP Biennial Recertification', description: 'AAP requirement for all neonatal providers — expired NRP certification is a TJC competency citation at survey' },
  { metric: '≥95%', label: 'EHDI Hearing Screen Completion', description: 'JCIH and HRSA EHDI program requirement — below 95% screen rate triggers state EHDI program compliance review' },
  { metric: '≥70%', label: 'Exclusive Human Milk at Discharge', description: 'VON quality benchmark — human milk rate drives NEC risk reduction and long-term neurodevelopmental outcomes' },
  { metric: '≤3%', label: 'Blood Culture Contamination Rate', description: 'NHSN quality standard — above 3% contamination triggers unnecessary antibiotic exposure and prolonged hospital stays for NICU neonates' },
]

const testimonial = {
  quote: 'NICU compliance runs on NRP biennial recertification cycles, quarterly VON data submissions, monthly NHSN CLABSI reporting, annual S.T.A.B.L.E. skills validation, NEC rate quarterly benchmarking, ROP screening protocol compliance, EHDI hearing screen completion rates, and palivizumab protocol annual updates — all simultaneously. Momenties mapped every deadline. Our NICU achieved CLABSI zero for 18 consecutive months and ranked in VON top quartile for NEC rate reduction.',
  author: 'NICU Medical Director, MD, NCC',
  role: 'Level IV Neonatal Intensive Care Unit, Academic Children\'s Hospital',
}

export default function NeonatalIntensiveCareCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Neonatal Intensive Care"
        title="NRP. VON Data. CLABSI. NEC. One Calendar."
        subtitle="NICU compliance is built on continuous cycles — NRP biennial recertification, quarterly Vermont Oxford Network data submissions, monthly NHSN CLABSI reporting, annual S.T.A.B.L.E. skills validation, NEC rate benchmarking, ROP screening compliance, EHDI hearing screen targets, and palivizumab annual protocol updates. Momenties maps every deadline so your NICU stays in the top VON quartile and TJC-ready year-round."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Neonatal Intensive Care Compliance Coverage
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
              12-Month Neonatal Intensive Care Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January NRP audit through December VON annual data submission &mdash; every AAP, VON, NHSN, and TJC milestone mapped.
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
            The KPIs VON, TJC, and NHSN Measure Your NICU By
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
        headline="Ready to Achieve CLABSI Zero in Your NICU?"
        subtext="Join neonatal intensive care teams using Momenties to automate every VON, NHSN, NRP, and AAP deadline. Free to start."
      />
    </main>
  )
}
