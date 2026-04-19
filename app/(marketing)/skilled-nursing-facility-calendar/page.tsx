import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Skilled Nursing Facility Compliance Calendar | Momenties',
  description: 'Track CMS SNF Conditions of Participation, MDS RAI deadlines, PBJ staffing reporting, PDPM audits, and annual QAPI plan requirements. Built for SNF administrators.',
}

const pillars = [
  {
    icon: Target,
    title: 'CMS CoPs & Survey Readiness',
    description: 'CMS SNF Conditions of Participation (42 CFR Part 483) annual mock survey, annual QAPI plan development and evaluation (§483.75), annual governing body meeting documentation, monthly OIG/LEIE and SAM.gov exclusion checks, annual F-Tag self-assessment against current CMS State Operations Manual guidance, and quarterly Five-Star Quality Rating preview analysis.',
  },
  {
    icon: RefreshCw,
    title: 'MDS RAI Deadlines & PDPM Accuracy',
    description: 'MDS 3.0 RAI Manual annual update review (CMS releases updates October 1 each year), monthly MDS submission timeliness audit (≥90% on-time submission to iQIES), quarterly PDPM case-mix group accuracy audit, annual PDPM compliance training for MDS coordinators, quarterly RUG vs. PDPM transition documentation review, and quarterly SNF PPS claim accuracy audits.',
  },
  {
    icon: TrendingUp,
    title: 'PBJ Staffing Reporting & Five-Star',
    description: 'CMS Payroll-Based Journal (PBJ) quarterly staffing data submission deadlines (Q1: May 15, Q2: August 14, Q3: November 14, Q4: February 14), monthly staffing level preview (target ≥3.5 hours RNPPD + 0.55 RN hours), annual wage index adjustment verification, and annual CNA staffing ratio compliance audit per state requirement.',
  },
  {
    icon: BarChart3,
    title: 'Staff Credentials & Infection Control',
    description: 'CNA annual 12-hour in-service requirement documentation, DON RN license biennial renewal, MDS coordinator AANAC CMAC annual CE, annual TB screening for all direct care staff, annual influenza vaccination campaign, monthly C. diff and MRSA NHSN infection reporting, annual QAPI performance improvement project (PIP) documentation, and annual antibiotic stewardship program review.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'PBJ Submission & Annual Planning',
    tasks: [
      'CMS PBJ Q4 staffing data submission deadline: February 14 (data from October–December)',
      'Annual QAPI plan development and governing body approval for new program year',
      'Annual F-Tag self-assessment across all CMS Conditions of Participation',
      'Annual OIG/LEIE and SAM.gov exclusion checks for all employees and contractors',
      'Annual TB screening for all direct care staff — document results in personnel files',
      'Annual CNA 12-hour in-service completion audit for prior calendar year',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'MDS RAI Accuracy & PDPM Audit',
    tasks: [
      'Q1 MDS submission timeliness audit — confirm ≥90% of assessments submitted within required ARD windows',
      'Q1 PDPM case-mix group accuracy audit — random sample of 10% of assessments for Section GG and cognitive performance accuracy',
      'Annual AANAC CMC or CMAC CE audit for all MDS coordinators — 20 CE hours biennial cycle',
      'Q1 Five-Star Quality Rating preview — analyze updated ratings and identify improvement priorities',
      'Annual antibiotic stewardship program annual review and update (CMS F-Tag F881)',
      'Annual infection control program annual review and update (CMS F-Tag F880)',
    ],
  },
  {
    period: 'May – Jun',
    title: 'PBJ Submission & Staff Training',
    tasks: [
      'CMS PBJ Q1 staffing data submission deadline: May 15 (data from January–March)',
      'Annual mock CMS survey — use CMS State Operations Manual survey protocol for all care areas',
      'Annual HIPAA training for all staff',
      'Annual HIPAA Security Risk Assessment',
      'Annual governing body meeting #1 — review QAPI annual plan, financial performance, Five-Star rating',
      'Annual fire safety inspection and emergency evacuation plan review (quarterly fire drills throughout year)',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'MDS Update Training & NHSN Reporting',
    tasks: [
      'CMS MDS 3.0 RAI Manual update preview — CMS publishes updates effective October 1, training begins now',
      'Annual MDS 3.0 RAI Manual update training for all MDS coordinators and clinical staff',
      'Q2 NHSN Long-Term Care Component data quality audit — C. diff incidence, MRSA bacteremia, influenza vaccination',
      'Q2 Five-Star staffing preview — confirm PBJ submission data matches payroll records',
      'Annual background check re-verification for all direct care staff (state-specific timing)',
      'Annual restraint and seclusion policy review and training (CMS F-Tag F605)',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'MDS Update Effective & PBJ Submission',
    tasks: [
      'CMS MDS 3.0 RAI Manual October 1 update effective — confirm all MDS software updated',
      'Annual influenza vaccination campaign — document all direct care staff vaccination or signed declination',
      'CMS PBJ Q2 staffing data submission deadline: August 14 (data from April–June) — *confirm Q3 deadline November 14 preparation*',
      'CMS PBJ Q3 staffing data submission deadline: November 14 (data from July–September) — begin preparation',
      'Annual resident rights training for all staff (CMS F-Tag F550–F585)',
      'Annual dementia care training for all direct care staff (CMS F-Tag F741)',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'PBJ Q3 Submission & Year-End Close',
    tasks: [
      'CMS PBJ Q3 staffing data submission deadline: November 14 (data from July–September)',
      'Annual QAPI year-end evaluation — document outcomes of all PIPs, identify new annual targets',
      'Annual governing body meeting #2 — review QAPI annual report, survey results, Five-Star trend analysis',
      'Annual CNA in-service hours audit — confirm all CNAs have 12 annual hours with required topic areas',
      'Annual antibiotic usage report compilation for antibiotic stewardship committee review',
      'Annual care planning policy review — confirm MDS-driven care plan process meets §483.21 requirements',
    ],
  },
]

const kpis = [
  { metric: '≥90%', label: 'MDS On-Time Submission Rate', description: 'CMS iQIES requirement — below 90% triggers Five-Star staffing domain penalty' },
  { metric: '4+ Stars', label: 'CMS Five-Star Overall Rating', description: 'Minimum for most managed care preferred provider and VBP contract eligibility' },
  { metric: '≥3.5', label: 'Total Nursing Hours Per Resident Day', description: 'CMS staffing minimum (3.48 NHPPD + 0.55 RN) — below triggers survey inspection priority' },
  { metric: '100%', label: 'PBJ Quarterly Submission Compliance', description: 'Missed PBJ submission = Five-Star staffing domain 1-star rating for entire quarter' },
  { metric: '100%', label: 'OIG/LEIE Monthly Check Completion', description: 'Medicare exclusion — single violation = program exclusion for entire facility' },
  { metric: '0', label: 'Immediate Jeopardy Citations per Year', description: 'Single IJ citation triggers mandatory CMP and potential termination from Medicare' },
]

const testimonial = {
  quote: 'SNF compliance is uniquely layered — PBJ quarterly deadlines, MDS RAI annual updates, monthly NHSN infection reporting, Five-Star staffing calculations, quarterly PDPM audits, and annual QAPI plans all running simultaneously. Momenties gave our administrator and DON a single view of every deadline. We went from reactive to proactive and our Five-Star rating went from 3 to 4 stars in 18 months.',
  author: 'Administrator, NHA',
  role: '120-Bed Medicare/Medicaid Certified Skilled Nursing Facility',
}

export default function SkilledNursingFacilityCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Skilled Nursing Facilities"
        title="PBJ. MDS. Five-Star. QAPI. One Calendar."
        subtitle="Skilled nursing facilities face the most complex post-acute care compliance framework in healthcare — quarterly PBJ staffing submissions, monthly MDS RAI assessments, PDPM case-mix accuracy, CMS Five-Star quality ratings, NHSN infection surveillance, and annual survey readiness. Momenties maps every deadline so your team stays survey-ready year-round."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End SNF Compliance Coverage
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
              12-Month SNF Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From February PBJ submission through November Q3 PBJ deadline &mdash; every CMS regulatory milestone on one timeline.
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
            The KPIs That Drive Your Five-Star Rating
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
        headline="Ready to Improve Your Five-Star Rating?"
        subtext="Join skilled nursing facilities using Momenties to automate every PBJ submission, MDS deadline, and QAPI requirement. Free to start."
      />
    </main>
  )
}
