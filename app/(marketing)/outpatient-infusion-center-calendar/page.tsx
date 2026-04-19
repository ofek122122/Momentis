import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Outpatient Infusion Center Compliance Calendar | Momenties',
  description: 'Track ACHC/URAC infusion accreditation, IVIG REMS pharmacy renewals, nurse CRNI biennial CE, CMS OPPS billing compliance, and biologic REMS annual re-certifications.',
}

const pillars = [
  {
    icon: Target,
    title: 'ACHC/URAC Accreditation & State Licensure',
    description: 'ACHC Infusion Therapy Accreditation 3-year cycle annual conformance reviews, URAC Specialty Pharmacy accreditation annual reporting, state infusion pharmacy license biennial renewal, state outpatient infusion facility license annual renewal, annual CLIA Certificate of Waiver biennial renewal for any on-site testing, and annual mock survey self-assessment.',
  },
  {
    icon: RefreshCw,
    title: 'Biologic & IVIG REMS Annual Re-Certifications',
    description: 'Annual REMS re-certification tracking for all high-risk biologics administered: natalizumab TOUCH REMS, clozapine REMS (if infusion NP), alemtuzumab LEMTRADA REMS, olaratumab REMS, and annual IVIG safety monitoring protocol review. Each REMS runs on an independent annual renewal cycle — Momenties tracks them all together.',
  },
  {
    icon: TrendingUp,
    title: 'CRNI Credential & Nursing CE',
    description: 'CRNI (Certified Registered Nurse Infusion) biennial 40-CE renewal via INCC, INS (Infusion Nurses Society) annual membership CE, annual PICC line insertion competency case volume documentation, annual central line-associated bloodstream infection (CLABSI) prevention CE, annual OSHA bloodborne pathogen training, and annual vesicant extravasation management competency.',
  },
  {
    icon: BarChart3,
    title: 'CMS OPPS Billing & Quality Reporting',
    description: 'Annual CMS OPPS rate update review (effective January 1), quarterly drug administration revenue code accuracy audit, monthly CLABSI rate tracking (CDC NHSN — target zero), quarterly prior authorization expiration tracking for all high-cost biologics, monthly infusion reaction documentation completeness audit, and annual patient satisfaction survey review.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'CMS OPPS Update & License Renewals',
    tasks: [
      'Annual CMS OPPS rate update effective January 1 — update all fee schedules in billing system for new drug administration codes',
      'Annual OIG/LEIE and SAM.gov exclusion checks for all employees and contractors',
      'Annual HIPAA training for all staff',
      'Annual HIPAA Security Risk Assessment for infusion management and EHR systems',
      'State infusion facility license annual renewal (most states: January–March deadline)',
      'Annual IVIG safety monitoring protocol review — update per PPTA Guidance for IVIG Infusion Reactions',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'ACHC Annual Conformance & REMS Audit',
    tasks: [
      'ACHC or URAC accreditation annual conformance review — internal audit against all applicable infusion standards',
      'Annual REMS compliance audit for all biologic products in formulary — confirm all nurse infusionists currently certified',
      'TOUCH REMS annual natalizumab prescriber and infusion site re-certification',
      'LEMTRADA REMS annual infusion site qualification renewal for alemtuzumab',
      'Q1 CLABSI rate review — benchmark against NHSN national mean (target ≤1.0/1,000 catheter days)',
      'Q1 prior authorization expiration tracking audit — flag all PAs expiring in next 90 days',
    ],
  },
  {
    period: 'May – Jun',
    title: 'Nursing Credential CE Audits',
    tasks: [
      'CRNI biennial CE audit for all certified registered nurse infusionists — 40 CE hours per 2-year cycle',
      'INS Annual Conference — document CE hours for all infusion nurses toward CRNI renewal',
      'Annual PICC line insertion competency documentation — confirm all PICC-certified nurses have met minimum annual case volume',
      'Annual vesicant extravasation management competency — documentation review for all nurses administering vesicants',
      'Annual central venous catheter care bundle compliance audit (hand hygiene, CHG dressing, scrub the hub)',
      'Annual hazardous drug handling compliance audit (USP 800 — if preparing or administering hazardous drugs)',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'USP 797/800 Compliance & Mid-Year Quality',
    tasks: [
      'Annual USP 797 sterile compounding compliance review (if any on-site IV admixture preparation)',
      'Annual USP 800 hazardous drug handling compliance review for all chemotherapy or biologic administration',
      'Q2 infusion reaction rate review — document all Grade 1–4 infusion reactions per product and clinical management',
      'Annual OSHA bloodborne pathogen exposure control plan annual review and update',
      'Annual sharps injury log review — implement engineering control updates as indicated',
      'Annual high-cost drug prior authorization denial analysis — identify payer-specific patterns for appeal',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'Biologic Contract Renewals & REMS Updates',
    tasks: [
      'Annual biologic manufacturer contract renewals — confirm all group purchasing organization (GPO) pricing current',
      'Annual drug formulary review — assess new biosimilars, REMS changes, and cost-effectiveness for top 10 agents',
      'Annual patient assistance program enrollment audit for all qualifying uninsured/underinsured patients',
      'Q3 CLABSI rate review and annual NHSN data submission',
      'Annual CLIA Certificate of Waiver renewal (every 2 years — track individual expiration date)',
      'Annual emergency drug kit inspection — confirm epinephrine, diphenhydramine, corticosteroids in-date and accessible',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'Year-End Billing Audit & QI Review',
    tasks: [
      'Annual revenue code accuracy audit — sample all drug administration codes billed to confirm CMS OPPS compliance',
      'Annual patient satisfaction survey data review',
      'Annual CMS OPPS proposed rule review for following year — identify any changes to drug payment rates',
      'Annual state pharmacy license renewal submission (most states biennial — track individual expiration)',
      'Annual nurse infusionist staff satisfaction and retention review',
      'ACHC/URAC accreditation annual self-assessment year-end close for next survey cycle',
    ],
  },
]

const kpis = [
  { metric: '0', label: 'CLABSI Rate Target per 1,000 Catheter Days', description: 'CDC NHSN gold standard — any CLABSI triggers mandatory root cause analysis' },
  { metric: '100%', label: 'Biologic REMS Annual Certification Compliance', description: 'Single lapsed REMS certification = mandatory product withdrawal from formulary' },
  { metric: '≤1%', label: 'Severe Infusion Reaction Rate (Grade 3–4)', description: 'INS benchmark — above 1% requires protocol review and additional pre-medication protocols' },
  { metric: '100%', label: 'Prior Authorization Currency at Time of Infusion', description: 'Expired PA = denied claim — typically 6-figure exposure for high-cost biologics' },
  { metric: '≥90%', label: 'CRNI Certification Rate Among Infusion Nurses', description: 'ACHC accreditation standard for infusion nursing staff qualifications' },
  { metric: '0', label: 'Unreported Vesicant Extravasation Events', description: 'All Grade 2+ extravasations require ACHC incident reporting within 24 hours' },
]

const testimonial = {
  quote: 'We administer 18 different biologics, each with different REMS renewal timelines, prior authorization expiration cycles, and infusion reaction monitoring requirements. Before Momenties, our compliance coordinator had a three-ring binder for each drug. Now everything is in one calendar with automated REMS renewal alerts. Zero REMS lapses in two years.',
  author: 'Director of Nursing, BSN, CRNI',
  role: 'Outpatient Infusion Center, Regional Health System',
}

export default function OutpatientInfusionCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Outpatient Infusion Centers"
        title="Every REMS Renewal. Every CRNI Cycle. Every CLABSI Audit. One Calendar."
        subtitle="Outpatient infusion centers operate one of the most REMS-intensive formularies in outpatient medicine — each biologic carries an independent annual re-certification requirement, on top of CRNI biennial CE, ACHC accreditation cycles, CMS OPPS annual updates, and CLABSI rate surveillance. Momenties maps every deadline across every product you administer."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Infusion Center Compliance Coverage
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
              12-Month Infusion Center Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January CMS OPPS updates through December billing audit &mdash; every REMS and regulatory milestone on one timeline.
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
            The KPIs That Define Infusion Center Quality
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
        headline="Ready to Achieve Zero REMS Lapses?"
        subtext="Join outpatient infusion centers using Momenties to automate every REMS renewal, CRNI deadline, and CLABSI audit. Free to start."
      />
    </main>
  )
}
