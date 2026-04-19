import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Radiation Oncology Center Compliance Calendar | Momenties',
  description: 'Track ACR/ASTRO accreditation, NRC radioactive materials license, TJC annual conformance, linac QA schedules, and radiation oncologist ABR MOC deadlines.',
}

const pillars = [
  {
    icon: Target,
    title: 'ACR/ASTRO Accreditation & NRC Licensing',
    description: 'ACR Radiation Oncology Practice Accreditation 3-year cycle annual conformance, ASTRO APEx accreditation 3-year cycle annual review, NRC/Agreement State radioactive materials license annual renewal (brachytherapy sources), annual NRC Form 3 posting verification, and annual NRC training and experience records for all authorized users.',
  },
  {
    icon: RefreshCw,
    title: 'Linac QA & Dosimetry Calibration',
    description: 'Annual TG-51 absolute dose calibration by qualified medical physicist, monthly linac output constancy checks (±2%), weekly mechanical and radiation field coincidence checks (TG-142), annual TLD/OSLD independent dosimetry audit, annual CT-sim imaging QA, annual MRI-sim (if applicable) QA, and annual stereotactic radiosurgery geometric accuracy verification (Winston-Lutz test).',
  },
  {
    icon: TrendingUp,
    title: 'Radiation Oncologist ABR MOC & CME',
    description: 'ABR MOC Annual Online Assessment completion deadline (December 31), annual ABR Self-Assessment Module, ASTRO Annual Meeting CE, AAPM Annual Meeting CE for medical physicists, ARRT biennial 24-CE for radiation therapists, annual ACR Practice Parameter review meeting, and annual radiation oncology NP/PA CE tracking.',
  },
  {
    icon: BarChart3,
    title: 'ROIS Registry & Safety Event Reporting',
    description: 'ASTRO ROIS (RO-ILS) annual incident learning system data contribution, annual NRC medical event reporting audit (10 CFR 35.3045), annual TJC Sentinel Event review (if TJC-accredited), quarterly IMRT dosimetric plan audit, monthly chart rounds documentation completeness, and annual peer review case volume requirements per physician.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'ABR MOC Completion & Annual Calibrations',
    tasks: [
      'ABR MOC Annual Online Assessment — confirm all radiation oncologists completed December 31 deadline',
      'Annual TG-51 absolute dose calibration by QMP — document all linac output measurements within ±1% of stated dose',
      'Annual NRC Form 3 (Notice to Employees) posting verification for all locations using radioactive materials',
      'Annual NRC training and experience record review — confirm all authorized users and authorized medical physicists current',
      'Annual radioactive materials inventory — document all brachytherapy sources (HDR Ir-192, LDR seeds) against NRC license',
      'Annual independent dosimetry audit using mailed TLD/OSLD — compare to institution&apos;s output measurement (±2% tolerance)',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'ACR/ASTRO Accreditation Annual Review',
    tasks: [
      'ACR or ASTRO APEx accreditation annual conformance review — internal audit against all applicable standards',
      'Annual peer review minimum case volume audit — confirm all radiation oncologists meeting annual peer review requirements',
      'Annual ACR Practice Parameter review meeting — document review of applicable ACR Practice Parameters for all treatment modalities',
      'Annual TJC accreditation annual conformance review (if TJC-accredited radiation oncology department)',
      'Q1 RO-ILS incident learning system data submission audit — confirm quarterly report submitted',
      'Annual CT-sim imaging QA — HU accuracy, geometric accuracy, couch position accuracy, image uniformity',
    ],
  },
  {
    period: 'May – Jun',
    title: 'Radiation Therapist CE & Safety Training',
    tasks: [
      'ARRT biennial CE audit for all registered radiation therapists — 24 CE hours per 2-year cycle, due on birthdate',
      'Annual radiation safety training for all radiation workers (§19.12 training)',
      'Annual emergency response drill for radioactive source incident (NRC requirement for licensed facilities)',
      'Annual HDR brachytherapy emergency response training — source stuck/misapplication drill',
      'Annual linac emergency procedure training (radiation door interlock, manual beam-off, patient emergency)',
      'Annual informed consent documentation audit for stereotactic procedures (SRS/SBRT/SABR)',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'Medical Physicist QMP Annual Audits',
    tasks: [
      'AAPM Annual Meeting — document CE hours for all medical physicists toward ABR MP MOC requirements',
      'Annual Winston-Lutz geometric accuracy test for all SRS/SBRT-capable linacs — document ≤1mm total error',
      'Annual MR-Linac QA (if applicable) — magnetic field homogeneity, radiation-MR isocenter coincidence',
      'Annual brachytherapy source inventory reconciliation — all sources accounted for per NRC license',
      'Annual HIPAA training for all radiation oncology department staff',
      'Annual HIPAA Security Risk Assessment for treatment planning systems and oncology information systems',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'ABR MOC Prep & Chart Rounds Audit',
    tasks: [
      'ABR MOC Annual Online Assessment launch — radiation oncologists should begin by October for December 31 deadline',
      'ABR MP MOC annual continuing education requirements for medical physicists',
      'Annual ASTRO safety white paper update review — confirm all physics and clinical protocols current with ASTRO guidance',
      'Q3 RO-ILS incident learning system quarterly submission',
      'Annual chart rounds documentation completeness audit — confirm all cases have weekly chart rounds documentation',
      'Annual peer review case log audit — identify any physicians behind on minimum annual peer review volume',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'MOC Deadlines & Year-End License Renewals',
    tasks: [
      'ABR MOC Annual Online Assessment deadline: December 31 for all radiation oncologists',
      'NRC radioactive materials license annual renewal submission — most Agreement States: 30–60 days before expiration',
      'Annual ACR membership renewal (required for continued ACR accreditation eligibility)',
      'Annual ASTRO membership renewal for program accreditation maintenance',
      'Annual dosimetry badge program audit — confirm all radiation workers enrolled, badges returned on schedule',
      'Annual NRC medical event log year-end review (10 CFR 35.3045 — report any medical events to NRC within 24 hours)',
    ],
  },
]

const kpis = [
  { metric: '±1%', label: 'Annual TG-51 Linac Output Accuracy', description: 'AAPM TG-142 tolerance — failure triggers immediate treatment suspension' },
  { metric: '100%', label: 'ABR MOC Annual Completion Rate', description: 'ABR suspension ends hospital privileges and state medical license eligibility' },
  { metric: '100%', label: 'NRC License Currency', description: 'Expired radioactive materials license = unlicensed use — federal criminal exposure' },
  { metric: '≤1 mm', label: 'SRS/SBRT Winston-Lutz Total Error', description: 'AAPM TG-142 SRS tolerance — exceeding triggers immediate SRS program suspension' },
  { metric: '100%', label: 'ARRT Biennial CE Renewal', description: 'Lapsed ARRT = state RT license non-renewal in most states' },
  { metric: '0', label: 'Unreported NRC Medical Events', description: 'Failure to report within 24 hours = NRC enforcement action and significant fine' },
]

const testimonial = {
  quote: 'Radiation oncology compliance spans NRC radioactive materials licenses, ACR accreditation, ABR MOC deadlines, weekly and monthly linac QA, annual TG-51 calibrations, and RO-ILS reporting — all on different cycles. Momenties is the only tool that gave our physics and clinical teams a single compliance calendar. Our ACR survey last year was clean across every category.',
  author: 'Chief Medical Physicist, PhD, DABR',
  role: 'Radiation Oncology Center, Community Cancer Program',
}

export default function RadiationOncologyCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Radiation Oncology Centers"
        title="NRC. ACR. ABR MOC. TG-51. One Calendar."
        subtitle="Radiation oncology centers operate at the intersection of nuclear regulatory law, physics quality assurance, physician MOC requirements, and accreditation standards — with tolerances measured in millimeters and deadlines with criminal liability. Momenties maps every NRC, ACR, ABR, and AAPM deadline to the month it&apos;s due so your team never misses a critical compliance window."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Radiation Oncology Compliance Coverage
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
              12-Month Radiation Oncology Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January TG-51 calibrations through December ABR MOC deadlines &mdash; every physics and regulatory milestone mapped.
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
            The KPIs That Determine Your Program&apos;s Regulatory Standing
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
        headline="Ready for a Clean ACR Survey Every Time?"
        subtext="Join radiation oncology centers using Momenties to automate every NRC, ABR MOC, and linac QA deadline. Free to start."
      />
    </main>
  )
}
