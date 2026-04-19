import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Hospital Medicine Program Compliance Calendar | Momenties',
  description: 'Track ABIM MOC annual completion, SHM/ABIM Focused Practice in Hospital Medicine certification, ACLS biennial renewal, CMS HIQRP quality reporting, and hospital medicine NP/PA credentialing cycles.',
}

const pillars = [
  {
    icon: Target,
    title: 'ABIM MOC & Focused Practice Certification',
    description: 'ABIM MOC Annual Online Assessment deadline (December 31 for all board-certified hospitalists), ABIM Focused Practice in Hospital Medicine (FPHM) annual online activity, ABIM Self-Assessment Activity annual, SHM (Society of Hospital Medicine) annual membership CE, annual ACGME Clinical Learning Environment Review (CLER) participation documentation, and annual ACP Internal Medicine Meeting CE.',
  },
  {
    icon: RefreshCw,
    title: 'ACLS/PALS Recertifications & Procedures',
    description: 'ACLS biennial recertification for all hospitalists, PALS biennial recertification for hospitalists managing pediatric patients, annual procedural competency documentation (central line, thoracentesis, paracentesis, arthrocentesis), annual bedside ultrasound CE (ABIM/SHM point-of-care ultrasound), and annual rapid sequence intubation competency verification.',
  },
  {
    icon: TrendingUp,
    title: 'CMS HIQRP & VBP Quality Metrics',
    description: 'CMS Hospital Inpatient Quality Reporting Program (HIQRP) annual data submission audit, monthly SEP-1 (sepsis bundle) compliance monitoring (target ≥90%), monthly VTE prophylaxis compliance (PC-01 ≥95%), monthly CLABSI prevention bundle documentation, monthly CAUTI prevention bundle documentation, and annual Hospital Value-Based Purchasing (VBP) score preview.',
  },
  {
    icon: BarChart3,
    title: 'NP/PA Hospitalist Credentials & Privileging',
    description: 'AGACNP-BC or FNP-BC 5-year renewal for hospitalist NPs, ACNP-BC renewal, PA-C 2-year/100 CME renewal, biennial hospital privileging renewal for all NP/PA hospitalists, annual collaborative practice agreement review, DEA 3-year registration renewal, annual HOSPITAL competency score documentation, and annual Society of Hospital Medicine Annual Conference CE.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'ABIM MOC Completion Audit & Annual Planning',
    tasks: [
      'Confirm all board-certified hospitalists completed ABIM MOC Annual Online Assessment by December 31 deadline',
      'Annual ABIM Focused Practice in Hospital Medicine annual online activity completion audit',
      'Annual hospital medicine quality metric baseline review — VBP score, SEP-1 compliance, CLABSI rate, CAUTI rate',
      'Annual NP/PA hospitalist license renewal audit — identify all NP/PA/RN licenses expiring in current year',
      'Annual OIG/LEIE exclusion checks for all hospitalist physicians, NPs, and PAs',
      'Annual HIPAA training for all hospital medicine staff and APPs',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'Procedural Competency & ACLS Tracking',
    tasks: [
      'Annual procedural competency documentation — central line insertion, thoracentesis, paracentesis case volumes for all privileged providers',
      'ACLS biennial renewal audit — identify all hospitalists and APPs with ACLS expiring in current year',
      'Annual POCUS (point-of-care ultrasound) CE documentation — confirm all hospitalists credentialed for bedside US have met annual image review',
      'Q1 SEP-1 sepsis bundle compliance review — confirm ≥90% 3-hour bundle completion rate',
      'Q1 VTE prophylaxis compliance audit (CMS PC-01) — confirm ≥95% appropriate VTE prophylaxis ordered',
      'Annual medication reconciliation accuracy audit — random sample of 10% of discharge medication lists for accuracy',
    ],
  },
  {
    period: 'May – Jun',
    title: 'SHM Annual Conference & APP Credentialing',
    tasks: [
      'SHM Annual Meeting — document CE hours for all hospitalists toward ABIM MOC and FPHM requirements',
      'Biennial NP/PA hospital privileging renewal (every 2 years — identify all APPs due for renewal this year)',
      'Annual collaborative practice agreement review for all NP/PA hospitalists',
      'Q2 CLABSI prevention bundle compliance audit — confirm central line care bundle documented ≥95% of line-days',
      'Q2 CAUTI prevention bundle compliance audit — confirm urinary catheter indication reassessment ≥95% compliance',
      'Annual hospital medicine service handoff quality audit — I-PASS or SBAR documentation compliance',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'CMS HIQRP Mid-Year & VBP Preview',
    tasks: [
      'Annual HIQRP mid-year data quality audit — confirm all required quality measure data submitted to CMS for prior half-year',
      'Annual Hospital VBP score mid-year preview — identify improvement opportunities in Clinical Outcomes, Safety, and Patient Experience domains',
      'Annual HOSPITAL (Hospitalized patients Safety score) review — track 30-day readmission rates by primary diagnosis',
      'Annual early warning system (NEWS2 or MEWS) protocol compliance audit',
      'Annual delirium screening documentation compliance audit — CAM-ICU or 4AT completion for all at-risk patients',
      'Annual antibiotic stewardship program review and hospitalist prescribing pattern audit',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'ABIM MOC Prep & Year-End Quality',
    tasks: [
      'ABIM MOC Annual Online Assessment — hospitalists should begin by October for December 31 deadline',
      'Annual ACP Internal Medicine Meeting CE documentation for internist hospitalists',
      'Annual palliative care and serious illness conversation CE for all hospital medicine providers',
      'Q3 SEP-1, PC-01, CLABSI, and CAUTI quarterly compliance review',
      'Annual 30-day readmission rate analysis by primary diagnosis and discharge disposition',
      'Annual AHRQ Hospital Survey on Patient Safety Culture — distribute and analyze results',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'MOC Deadlines & Year-End Metrics Close',
    tasks: [
      'ABIM MOC Annual Online Assessment deadline: December 31 for all board-certified hospitalists and internists',
      'ABIM FPHM annual online activity deadline: December 31',
      'Annual hospital medicine quality metrics year-end report — compile VBP, SEP-1, CLABSI, CAUTI, readmission rates',
      'Annual hospitalist provider satisfaction survey and workforce retention analysis',
      'Annual hospital medicine program performance review — volume, ALOS, CMI, readmission, patient experience',
      'DEA registration renewal audit for all prescribing hospitalists and APPs with renewals in next 6 months',
    ],
  },
]

const kpis = [
  { metric: '100%', label: 'ABIM MOC Annual Completion by Dec 31', description: 'ABIM suspension ends hospital privileges and state medical license eligibility' },
  { metric: '≥90%', label: 'SEP-1 3-Hour Bundle Compliance', description: 'CMS HIQRP measure — below threshold reduces Hospital VBP score significantly' },
  { metric: '≤1.0', label: 'CLABSI Rate per 1,000 Line Days', description: 'NHSN national benchmark — any CLABSI triggers mandatory root cause analysis' },
  { metric: '≥95%', label: 'VTE Prophylaxis Compliance Rate', description: 'CMS PC-01 measure — publicly reported on Hospital Compare and affects VBP' },
  { metric: '≤15%', label: '30-Day All-Cause Readmission Rate', description: 'CMS HRRP (Hospital Readmissions Reduction Program) financial penalty threshold' },
  { metric: '100%', label: 'Biennial APP Privileging Renewal', description: 'Lapsed hospital privileges = immediate suspension from clinical practice' },
]

const testimonial = {
  quote: 'Managing hospital medicine compliance means tracking ABIM MOC December deadlines for 24 hospitalists, biennial NP/PA privileging renewals, monthly SEP-1 and CLABSI metrics, annual HIQRP submissions, and ACLS recertification cycles — all simultaneously. Momenties gave our department the system to stay ahead of every deadline. Our VBP score improved by 12 points in the first year we used it.',
  author: 'Division Chief, Hospital Medicine, MD, FACP',
  role: 'Academic Hospitalist Program, 280-Bed Regional Medical Center',
}

export default function HospitalMedicineCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Hospital Medicine Programs"
        title="ABIM MOC. SEP-1. VBP. APP Credentialing. One Calendar."
        subtitle="Hospital medicine programs carry a compliance portfolio that spans individual physician MOC cycles, APP biennial credentialing, monthly CMS quality metric monitoring, annual HIQRP data submissions, and ACLS recertification tracking — all running simultaneously across every member of your team. Momenties maps every deadline so your program stays compliant and quality-focused year-round."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Hospital Medicine Compliance Coverage
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
              12-Month Hospital Medicine Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January MOC audit through December ABIM deadline &mdash; every credentialing and quality milestone on one timeline.
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
            The KPIs That Determine Your Hospital VBP Score
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
        headline="Ready to Improve Your Hospital VBP Score?"
        subtext="Join hospital medicine programs using Momenties to automate every ABIM MOC, SEP-1 tracking, and APP credentialing deadline. Free to start."
      />
    </main>
  )
}
