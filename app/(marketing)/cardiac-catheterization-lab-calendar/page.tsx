import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Cardiac Catheterization Lab Compliance Calendar | Momenties',
  description: 'Track ACC/AHA NCDR CathPCI registry submissions, radiation safety annual audits, SCAI competency requirements, STEMI door-to-balloon quality metrics, and interventional cardiologist ABIM MOC deadlines.',
}

const pillars = [
  {
    icon: Target,
    title: 'ACC NCDR CathPCI Registry & Quality Reporting',
    description: 'ACC/AHA NCDR CathPCI Registry quarterly data submission (≥90% case capture rate), monthly door-to-balloon time monitoring (CMS OP-3b ≤90 min, target ≤60 min), monthly STEMI primary PCI outcome tracking, annual CathPCI facility-level outcome report review, and annual AHA Mission: Lifeline accreditation annual conformance.',
  },
  {
    icon: RefreshCw,
    title: 'Radiation Safety & Annual Fluoroscopy Audits',
    description: 'Annual state radiological health fluoroscopy equipment inspection, annual radiation safety committee review of cath lab occupational dose reports (≤5 rem/year), annual fluoroscopy shielding adequacy survey by qualified medical physicist, monthly radiation dosimetry badge exchange, annual peak skin dose documentation review for complex cases, and annual lead apron integrity inspection.',
  },
  {
    icon: TrendingUp,
    title: 'ABIM MOC & Interventional Cardiology CE',
    description: 'ABIM MOC Annual Online Assessment deadline (December 31 — Cardiovascular Disease or Interventional Cardiology subspecialty), ABIM Self-Assessment Activity annual, ACC Annual Scientific Session CE, SCAI Annual Scientific Sessions CE, annual NCCV structural heart disease CE, annual FFR/iFR coronary physiology CE, and annual OCT/IVUS CE — all tracked for individual physician renewal.',
  },
  {
    icon: BarChart3,
    title: 'SCAI Competency & Staff Credentials',
    description: 'RCIS (Registered Cardiovascular Invasive Specialist) biennial 30-CE renewal, annual SCAI competency volume requirements (minimum 75 diagnostic procedures/year, 75 PCIs/year per SCAI standard), annual radiation therapy technologist RT biennial CE tracking, annual ACLS and PALS biennial recertification for all cath lab staff, annual malignant arrhythmia drill documentation, and annual cath lab equipment PM scheduling.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'ABIM MOC Completion & Annual Dosimetry',
    tasks: [
      'ABIM MOC Annual Online Assessment — confirm all interventional cardiologists and cardiovascular disease physicians completed December 31 deadline',
      'Annual radiation dosimetry report review — confirm all cath lab staff within 5 rem occupational annual limit (NRC 10 CFR 20)',
      'Annual radiation safety committee meeting — review occupational dose summary, peak skin dose cases, equipment survey results',
      'Annual lead apron and radiation protective equipment integrity inspection — fluoroscopy and physical inspection of all aprons',
      'Annual state fluoroscopy equipment registration renewal (most states: January–March deadline)',
      'Annual OIG/LEIE exclusion checks for all cath lab employees and contractors',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'CathPCI Registry Annual Review & STEMI Metrics',
    tasks: [
      'Annual ACC/AHA NCDR CathPCI facility-level outcome report review — compare D2B times, PCI success rates, and complications to national benchmarks',
      'Q1 door-to-balloon time audit — confirm ≥90% of primary STEMI PCIs achieving ≤90-minute D2B',
      'Q1 CathPCI data quality audit — confirm ≥90% case capture and complete data element submission',
      'AHA Mission: Lifeline annual accreditation conformance review — submit annual performance data',
      'Annual STEMI system protocol review — update EMS activation, ED bypass, cath lab activation protocols',
      'Annual radial vs. femoral access rate review — document site approach preferences per ACC/AHA access site guidance',
    ],
  },
  {
    period: 'May – Jun',
    title: 'SCAI Competency & Staff CE Audits',
    tasks: [
      'Annual SCAI physician competency volume audit — confirm all interventional cardiologists meeting 75 PCI/year minimum',
      'RCIS biennial CE audit for all registered cardiovascular invasive specialists — 30 CE hours per 2-year cycle',
      'Annual ACLS recertification tracking — confirm all cath lab nursing and tech staff current',
      'Annual PALS recertification tracking for all cath lab staff caring for pediatric patients',
      'SCAI Annual Scientific Sessions CE — document CE hours for all interventional cardiologists',
      'Annual contrast media reaction emergency protocol review — confirm crash cart stocked per ACR Manual on Contrast Media',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'NCDR Mid-Year Submission & Quality Review',
    tasks: [
      'Q2 CathPCI Registry data submission audit — confirm all Q2 cases submitted with complete data',
      'Annual ACC Annual Scientific Session CE documentation for all interventional cardiologists',
      'Annual FFR/iFR fractional flow reserve annual CE — update on FAME 3 trial evidence and appropriate use criteria',
      'Annual IVUS/OCT intracoronary imaging CE — confirm all imaging-guided PCI physicians current on guidance protocols',
      'Annual cath lab equipment preventive maintenance scheduling — X-ray generator, image intensifier, hemodynamic monitoring system',
      'Annual HIPAA training for all cath lab staff',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'Fluoroscopy Survey & ABIM MOC Prep',
    tasks: [
      'Annual fluoroscopy room shielding adequacy survey by qualified medical physicist',
      'ABIM MOC Annual Online Assessment — begin by October for December 31 deadline (Cardiovascular Disease and Interventional Cardiology)',
      'Annual complex case peak skin dose review — identify all cases with estimated peak skin dose ≥3 Gy and document follow-up',
      'Q3 CathPCI data submission and quality review',
      'Annual cath lab malignant arrhythmia drill — code blue simulation with defibrillation and pericardiocentesis setup',
      'Annual chest pain center accreditation annual conformance review (if ACC Chest Pain Center accredited)',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'MOC Deadlines & Year-End Quality Close',
    tasks: [
      'ABIM MOC Annual Online Assessment deadline: December 31 for all board-certified cardiologists',
      'Annual CathPCI year-end performance summary — compile D2B times, PCI outcomes, radiation dose, and complication rates',
      'Annual SCAI structural heart program annual review (if TAVR/MitraClip program) — confirm TMVR/TAVR team volume requirements met',
      'Annual contrast nephropathy prevention protocol review — update per current AHA/ACC CIN prevention guidelines',
      'Annual NCDR Chest Pain MI Registry annual data audit (if enrolled)',
      'Annual cath lab procedural log audit — confirm physician case volumes documented for credentialing renewal',
    ],
  },
]

const kpis = [
  { metric: '≤90 min', label: 'STEMI Door-to-Balloon Time', description: 'CMS OP-3b standard — ≤60 min target for AHA Mission: Lifeline Gold Plus designation' },
  { metric: '≥90%', label: 'CathPCI Case Capture Rate', description: 'ACC NCDR requirement — below 90% triggers data quality review and accreditation risk' },
  { metric: '100%', label: 'ABIM MOC Annual Completion by Dec 31', description: 'ABIM suspension ends hospital privileges and state medical license eligibility' },
  { metric: '≤5 rem', label: 'Annual Occupational Dose per Worker', description: 'NRC 10 CFR 20 limit — cath lab operators are highest-dose workers in most hospitals' },
  { metric: '≥75', label: 'PCI Procedures per Interventionalist per Year', description: 'SCAI minimum competency standard — below triggers proctored practice review' },
  { metric: '100%', label: 'Lead Apron Annual Integrity Inspection', description: 'NCRP 168 guidance — cracked or damaged aprons expose staff to unshielded scatter radiation' },
]

const testimonial = {
  quote: 'Cath lab compliance means managing ABIM MOC December deadlines, CathPCI quarterly registry submissions, monthly D2B time tracking, annual fluoroscopy safety surveys, radiation dosimetry reports, lead apron inspections, and RCIS CE cycles — all at the same time. Momenties was the first system that gave our cath lab director and quality team a single view of every deadline. Our Mission: Lifeline Gold Plus status has been uninterrupted for three years.',
  author: 'Director of Cardiovascular Services, RN, RCIS',
  role: 'Cardiac Catheterization Laboratory, STEMI Receiving Center',
}

export default function CardiacCatheterizationLabCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Cardiac Catheterization Labs"
        title="D2B Times. CathPCI Registry. ABIM MOC. Radiation Safety. One Calendar."
        subtitle="Cardiac catheterization labs carry one of the most deadline-intensive quality portfolios in hospital medicine — monthly STEMI door-to-balloon tracking, quarterly NCDR CathPCI registry submissions, annual radiation safety audits, ABIM MOC December deadlines, and SCAI physician volume requirements. Momenties maps every deadline so your program maintains Mission: Lifeline status year-round."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Cath Lab Compliance Coverage
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
              12-Month Cath Lab Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January dosimetry reports through December ABIM MOC deadlines &mdash; every registry and regulatory milestone mapped.
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
            The KPIs That Determine Mission: Lifeline Status
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
        headline="Ready to Maintain Mission: Lifeline Gold Plus Status?"
        subtext="Join cardiac catheterization labs using Momenties to automate every D2B tracking, ABIM MOC, and CathPCI registry deadline. Free to start."
      />
    </main>
  )
}
