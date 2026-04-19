import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Endoscopy Center Compliance Calendar | Momenties',
  description: 'Track AAAHC/TJC accreditation, ASGE high-level disinfection annual audits, CMS ASCQR quality reporting, GIE registry submissions, and endoscopist ADR rate monitoring.',
}

const pillars = [
  {
    icon: Target,
    title: 'AAAHC/TJC Accreditation & CMS CoPs',
    description: 'AAAHC 3-year accreditation annual conformance reviews, TJC ASC accreditation annual conformance, CMS Ambulatory Surgical Center Conditions for Coverage (42 CFR Part 416) mock survey prep, annual ASCQR data submission (August 15 deadline), and annual governing body meeting documentation.',
  },
  {
    icon: RefreshCw,
    title: 'High-Level Disinfection & Scope Reprocessing',
    description: 'Annual ASGE/SGNA scope reprocessing competency documentation for all reprocessing staff, annual HLD chemical test strip lot verification, monthly endoscope culture surveillance (per ASGE 2018 guidance for ERCP scopes), annual reprocessing SOP review against current FDA/CDC/AAMI/ASGE guidelines, and biennial borescope inspection for all flexible endoscopes.',
  },
  {
    icon: TrendingUp,
    title: 'Endoscopist Quality Metrics & GIE Registry',
    description: 'GIE (GI Quality Improvement Consortium) annual data submission, monthly adenoma detection rate (ADR) tracking per endoscopist (target ≥25% male, ≥15% female), monthly cecal intubation rate tracking (≥90% colonoscopy), monthly withdrawal time documentation (≥6 minutes), quarterly upper GI completion rate reviews, and annual colonoscopy quality report per ASGE/ACG standards.',
  },
  {
    icon: BarChart3,
    title: 'Staff Credentials & DEA Compliance',
    description: 'Registered nurse biennial state license renewal, CGRN (Certified Gastroenterology Registered Nurse) biennial 60-CE renewal, CRNA biennial renewal and annual hospital privileging, DEA 3-year Schedule II–V registration renewal, biennial CS physical inventory, monthly CS log reconciliation for propofol and sedation agents, and annual procedural sedation competency documentation.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'License Renewals & Annual Scope Audit',
    tasks: [
      'Annual ASGE/SGNA scope reprocessing competency documentation for all reprocessing technicians — document using skills checklist',
      'Annual HLD chemical test strip lot verification — confirm test strips for glutaraldehyde/OPA/peracetic acid current and in-date',
      'Annual DEA registration renewal audit — 3-year cycle, renewal window opens 60 days before expiration',
      'Biennial CS physical inventory audit — schedule within 2 days of DEA anniversary for all Schedule II–V',
      'Annual OIG/LEIE and SAM.gov exclusion checks for all employees and contractors',
      'Annual HIPAA training for all staff',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'AAAHC/TJC Annual Conformance',
    tasks: [
      'AAAHC or TJC accreditation annual conformance review — internal tracer methodology self-assessment',
      'Annual CMS ASC Conditions for Coverage mock survey — use CMS State Operations Manual survey checklist',
      'Q1 ADR rate review per endoscopist — confirm all colonoscopists meeting ≥25%/≥15% benchmarks',
      'Q1 cecal intubation rate review — confirm ≥90% for all colonoscopists',
      'Q1 GIE data submission audit — confirm all cases submitted for prior quarter',
      'Annual sedation policy and procedure review — confirm alignment with ASGE and ASA sedation guidelines',
    ],
  },
  {
    period: 'May – Jun',
    title: 'Scope Culture Surveillance & Staff Credentials',
    tasks: [
      'Annual endoscope culture surveillance for all ERCP duodenoscopes (FDA recommendation — monthly for high-risk scopes, annual comprehensive audit)',
      'Annual borescope inspection for all flexible endoscopes — document any channel damage requiring repair or retirement',
      'Annual ASGE quality indicator review — update ADR, cecal intubation, withdrawal time benchmarks per current ASGE practice standards',
      'CGRN biennial CE audit for all certified GI nurses — 60 CE hours per 2-year cycle',
      'Annual propofol and sedation agent controlled substance log reconciliation — all administrations vs. anesthesia provider documentation',
      'Annual HIPAA Security Risk Assessment for scheduling and procedure documentation systems',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'ASCQR Data Submission & Mid-Year Quality Review',
    tasks: [
      'CMS ASCQR annual data submission deadline: August 15 — confirm all required quality measures submitted for prior year',
      'Annual GIE quality report per endoscopist — distribute individual ADR and CIR reports to all gastroenterologists',
      'Q2 withdrawal time documentation compliance audit — confirm ≥6 minutes documented for ≥90% of screening colonoscopies',
      'Annual patient satisfaction survey data review',
      'Annual anesthesia CRNA annual hospital privileging renewal — coordinate with anesthesia group',
      'Annual governing body meeting #1 — review QAPI annual plan, quality metrics, Five-Star rating implications',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'Accreditation Renewal Prep & Drug Storage',
    tasks: [
      'AAAHC 3-year accreditation renewal prep (if in renewal cycle) — begin 6 months before expiration',
      'Annual emergency drug cart inspection — confirm epinephrine, atropine, flumazenil, naloxone, succinylcholine in-date',
      'Annual anesthesia machine PM (preventive maintenance) for all OR/procedure room anesthesia units',
      'Annual propofol waste disposal audit — confirm all propofol waste documented and disposed per DEA regulations',
      'Q3 ADR rate review and peer review discussions for any endoscopists below benchmark',
      'Annual fire safety inspection and emergency evacuation drill documentation',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'Year-End Quality Report & CS Reconciliation',
    tasks: [
      'Annual year-end colonoscopy quality report — compile ADR, CIR, withdrawal time, and perforation rate by endoscopist',
      'Annual CS year-end reconciliation — confirm all propofol and sedation agent records complete',
      'Annual AAAHC/TJC compliance self-assessment year-end close',
      'Annual HLD solution change documentation review — confirm all chemical high-level disinfectant records complete',
      'Annual reprocessing SOP review and update against current FDA guidance on endoscope reprocessing',
      'Annual infection control surveillance year-end report — document any post-procedure infections and investigation outcomes',
    ],
  },
]

const kpis = [
  { metric: '≥25%', label: 'Adenoma Detection Rate (Male Patients)', description: 'ASGE/ACG benchmark — below average triggers peer review and performance improvement' },
  { metric: '≥90%', label: 'Cecal Intubation Rate', description: 'ASGE quality indicator — below 90% requires proctored procedure review' },
  { metric: '≥6 min', label: 'Colonoscopy Withdrawal Time', description: 'ASGE standard — direct correlation with ADR and polyp detection' },
  { metric: '100%', label: 'HLD Reprocessing Competency Documentation', description: 'AAAHC/TJC requirement — gaps trigger immediate jeopardy citations' },
  { metric: 'Aug 15', label: 'ASCQR Annual Submission Deadline', description: 'Missed submission = 2% CMS payment reduction for affected ASC quarter' },
  { metric: '100%', label: 'Monthly CS Log Reconciliation', description: 'State board and DEA requirement — any discrepancy requires investigation and Form 106' },
]

const testimonial = {
  quote: 'Running a high-volume endoscopy center means managing AAAHC accreditation, ASCQR annual reporting, GIE registry submissions, monthly ADR tracking per physician, annual scope reprocessing competencies, and DEA CS log reconciliations simultaneously. Momenties consolidates all of it into one compliance calendar. Our last AAAHC survey had zero findings.',
  author: 'Administrator, BSN, CASC',
  role: 'Freestanding Endoscopy Center, 12,000 Procedures/Year',
}

export default function EndoscopyCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Endoscopy Centers"
        title="ADR Rates. Scope Reprocessing. ASCQR. One Calendar."
        subtitle="Endoscopy centers carry a unique compliance portfolio — AAAHC accreditation, monthly adenoma detection rate monitoring per physician, ASGE high-level disinfection annual audits, CMS ASCQR data submission deadlines, GIE registry reporting, and DEA controlled substance log reconciliation. Momenties maps every deadline so your center stays survey-ready and quality-focused year-round."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Endoscopy Center Compliance Coverage
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
              12-Month Endoscopy Center Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January scope reprocessing audits through December year-end CS reconciliation &mdash; every major milestone mapped.
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
            The KPIs AAAHC and Gastroenterologists Measure By
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
        headline="Ready for Zero AAAHC Findings?"
        subtext="Join endoscopy centers using Momenties to automate every ADR audit, scope reprocessing deadline, and ASCQR submission. Free to start."
      />
    </main>
  )
}
