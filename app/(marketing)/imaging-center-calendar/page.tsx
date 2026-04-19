import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Imaging Center Compliance Calendar | Momenties',
  description: 'Track ACR accreditation, FDA MQSA annual inspections, state radiology licenses, and radiologist CME deadlines. Momenties keeps your imaging center audit-ready year-round.',
}

const pillars = [
  {
    icon: Target,
    title: 'ACR & FDA Accreditation Cycles',
    description: 'Stay ahead of ACR mammography, CT, MRI, ultrasound, and nuclear medicine 3-year accreditation renewal milestones, FDA MQSA annual inspections, and ACR Dose Index Registry quarterly data submissions.',
  },
  {
    icon: RefreshCw,
    title: 'State Licensure & Equipment Certifications',
    description: 'Automate state radiological health annual permit renewals, annual x-ray equipment inspection by state health department physicists, annual fluoroscopy shielding surveys, and biennial mammography equipment certifications.',
  },
  {
    icon: TrendingUp,
    title: 'Radiologist & Technologist Credentials',
    description: 'Track ABR MOC annual online module completion, ARRT biennial 24-CE renewal, NMTCB annual CE, annual radiation dosimetry report review, annual medical physicist QMP certification review, and ACR Practice Parameter annual self-assessment.',
  },
  {
    icon: BarChart3,
    title: 'Radiation Safety & Quality Programs',
    description: 'Manage annual radiation safety committee meetings, monthly dosimetry badge exchange, annual QC equipment testing per ACR technical standards, annual peer review minimum volume requirements, and quarterly dose optimization benchmarking.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'Dosimetry Reports & Annual Equipment QC',
    tasks: [
      'Annual radiation dosimetry badge report review for all radiation workers — compare to 5 rem occupational limit',
      'Annual x-ray equipment state permit renewal submissions (most states: January 31 or March 1 deadline)',
      'Annual ACR CT accreditation phantom testing — document all tube kVp, CTDI, and spatial resolution results',
      'Annual ACR MRI accreditation phantom testing — SNR, ghosting, slice thickness, slice position accuracy',
      'Annual ACR mammography accreditation phantom testing and clinical image quality review',
      'Annual medical physicist QMP equipment performance evaluation reports due (ACR requirement)',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'FDA MQSA & Peer Review',
    tasks: [
      'Annual FDA MQSA inspection preparation — all mammography units must pass annual inspection by FDA-certified inspector',
      'Verify MQSA facility certificate current (annual renewal fee to FDA) — no mammography without valid certificate',
      'Annual ACR Dose Index Registry (DIR) quarterly Q4 data submission audit — confirm ≥90% case submission rate',
      'Q1 radiologist peer review case completion — confirm all radiologists meet minimum quarterly peer review volume',
      'Annual ABR MOC online module completion deadline check for all radiologists (December 31 — verify prior year completion)',
      'Annual radiation safety committee meeting #1 — review occupational dose reports, equipment survey results, incident log',
    ],
  },
  {
    period: 'May – Jun',
    title: 'State Surveys & Technologist CE',
    tasks: [
      'Annual state radiological health annual survey by state health department physicist (most states: spring cycle)',
      'Annual fluoroscopy room shielding adequacy survey by qualified medical physicist',
      'Annual nuclear medicine facility state radioactive materials license renewal (NRC Agreement State — annual or biennial by state)',
      'ARRT biennial CE audit — confirm all registered technologists on track for 24 CE hours by their biennial renewal date',
      'Annual NMTCB nuclear medicine CE audit — 24 CE hours per biennial cycle',
      'Annual ARDMS sonographer CE audit — 30 CME credits per 3-year cycle',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'Accreditation Renewal Prep & Contrast Safety',
    tasks: [
      'ACR 3-year accreditation renewal prep (CT/MRI/US/NM) — ACR sends renewal notice 6 months before expiration',
      'Annual contrast media reaction treatment protocol review — ensure all crash carts stocked per ACR Manual on Contrast Media',
      'Annual gadolinium-based contrast agent (GBCA) patient notification policy review (ACR guidance on NSF risk)',
      'Annual iodinated contrast nephropathy prevention protocol review and eGFR threshold policy update',
      'Annual HIPAA Security Risk Assessment for PACS/RIS systems',
      'Annual HIPAA training for all imaging center staff',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'DIR Data Quality & Dose Benchmarking',
    tasks: [
      'Q3 ACR Dose Index Registry data submission audit — confirm ≥90% case capture and ≤10% outlier dose events',
      'Annual dose optimization report — benchmark against ACR DIR national percentiles (target ≤75th percentile for CT DLP)',
      'Annual mammography interpreting physician qualifications review (MQSA 21 CFR 900.12 — 90 mammography studies/24 months)',
      'Annual mammography radiological technologist qualifications review (40 mammograms/24 months)',
      'Annual radiation safety committee meeting #2 — review H1 incident log, DIR benchmark data, upcoming license renewals',
      'Annual ACR Practice Parameter review meeting — document review of applicable ACR Practice Parameters for all modalities offered',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'MOC Deadlines & Year-End License Renewals',
    tasks: [
      'ABR MOC annual online module completion deadline: December 31 for all radiologists',
      'ACR annual membership renewal (required for continued ACR accreditation eligibility)',
      'Annual NRC radioactive materials license amendment review — verify all authorized users and authorized medical physicists current',
      'Annual lead aprons and shielding integrity inspection — all protective garments fluoroscopy inspection',
      'Annual mammography unit ACR phantom image and clinical image quality review (Q4)',
      'Annual radiation incident and near-miss log year-end review — document ALARA program effectiveness',
    ],
  },
]

const kpis = [
  { metric: '100%', label: 'MQSA Annual Inspection Pass Rate', description: 'One failed inspection = immediate mammography shutdown' },
  { metric: '≥90%', label: 'ACR DIR Case Submission Rate', description: 'Below 90% triggers ACR accreditation review' },
  { metric: '≤75th', label: 'CT Dose Percentile vs. DIR National', description: 'ACR benchmark for dose optimization program credit' },
  { metric: '100%', label: 'Radiologist MOC Completion by Dec 31', description: 'ABR suspension ends hospital privileges' },
  { metric: '100%', label: 'ARRT Biennial CE On-Time Renewal', description: 'Lapsed ARRT = state license non-renewal in most states' },
  { metric: '≤5 rem', label: 'Annual Occupational Dose per Worker', description: 'NRC 10 CFR 20 annual limit — document every worker' },
]

const testimonial = {
  quote: 'We run five modalities across two locations. Keeping MQSA, ACR accreditation, state permits, dosimetry reports, and radiologist MOC deadlines organized used to take a full-time compliance coordinator. Momenties cut that overhead by 60% and we haven&apos;t missed a single renewal in two years.',
  author: 'Director of Radiology Operations',
  role: 'Multi-Site Outpatient Imaging Center, Mid-Atlantic',
}

export default function ImagingCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Imaging Centers"
        title="MQSA. ACR. State Permits. MOC. One Calendar."
        subtitle="Imaging centers carry one of the most technically demanding compliance portfolios in outpatient medicine — FDA MQSA annual inspections, ACR accreditation renewals across five modalities, radiologist MOC deadlines, state x-ray permits, and NRC radioactive materials licenses. Momenties maps every deadline to the month it&apos;s due so your team stays audit-ready year-round."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Imaging Center Compliance Coverage
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
              12-Month Imaging Center Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January dosimetry reports through December MOC deadlines &mdash; every major milestone on one timeline.
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
            The KPIs Regulators and Accreditors Measure You By
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
              We run five modalities across two locations. Keeping MQSA, ACR accreditation, state permits, dosimetry reports, and radiologist MOC deadlines organized used to take a full-time compliance coordinator. Momenties cut that overhead by 60% and we haven&apos;t missed a single renewal in two years.
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>{testimonial.author}</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>{testimonial.role}</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Stay Audit-Ready Year-Round?"
        subtext="Join imaging centers using Momenties to track every MQSA inspection, ACR renewal, and radiologist MOC deadline automatically. Free to start."
      />
    </main>
  )
}
