import { Activity, FlaskConical, ShieldCheck, ClipboardList } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Eosinophilic Disorders Center Compliance Calendar | Momenties',
  description:
    'Mepolizumab/benralizumab eosinophil count monitoring, EGPA/HES diagnostic criteria annual review, AEC quarterly benchmarks, biologic dose cycle management, tissue eosinophilia biopsy protocol intervals, bone marrow eosinophilia FIP1L1-PDGFRA testing annual.',
}

const pillars = [
  {
    icon: FlaskConical,
    title: 'HES/EGPA Diagnostic Criteria & AEC Monitoring',
    description:
      'Sequence absolute eosinophil count (AEC) testing on a monthly cadence with documented ≤150 cells/μL targets for biologic-treated patients. Track HES diagnostic confirmation against persistent AEC ≥1500 cells/μL thresholds, end-organ involvement workup, and EGPA classification using ACR 1990 plus the 2022 ACR/EULAR criteria.',
  },
  {
    icon: Activity,
    title: 'Mepolizumab/Benralizumab Biologic Cycle Management',
    description:
      'Coordinate mepolizumab 300 mg subcutaneous every 4 weeks for HES and EGPA, alongside benralizumab 30 mg every 4 weeks for the first three doses then every 8 weeks. Each infusion or injection cycle is logged with pre-dose AEC trending, OCS taper milestones, and adverse event surveillance.',
  },
  {
    icon: ShieldCheck,
    title: 'FIP1L1-PDGFRA Mutation Surveillance & Imatinib Monitoring',
    description:
      'Schedule annual FIP1L1-PDGFRA RT-PCR testing for all HES patients with bone marrow eosinophilia or myeloid features. For imatinib-treated patients, track quarterly molecular response, monthly CBC with differential, and cardiac monitoring with troponin and echocardiography baselines.',
  },
  {
    icon: ClipboardList,
    title: 'EGPA/BVAS Disease Activity & ACR/EULAR Compliance',
    description:
      'Run BVAS (Birmingham Vasculitis Activity Score) every quarter for EGPA patients with structured remission documentation. Annual ACR/EULAR criteria reaffirmation, ANCA testing, end-organ imaging including cardiac MRI and pulmonary HRCT, and prednisone dose journals are sequenced into the calendar.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual FIP1L1-PDGFRA Testing & Diagnostic Reaffirmation',
    tasks:
      'Order FIP1L1-PDGFRA RT-PCR for all active HES patients. Reconfirm HES vs EGPA classification under ACR/EULAR 2022. Establish baseline AEC, IgE, ANCA, troponin, NT-proBNP, and tryptase. Document end-organ involvement screening across cardiac, pulmonary, GI, and dermatologic systems.',
  },
  {
    phase: 'February',
    title: 'Mepolizumab Cycle Audit & AEC Trend Review',
    tasks:
      'Verify mepolizumab 300 mg q4wk dosing logs across all HES and EGPA cohorts. Run AEC trending with ≤150 cells/μL benchmark adherence. Document missed-dose recapture protocols and OCS prednisone taper milestones for steroid-dependent EGPA.',
  },
  {
    phase: 'March',
    title: 'Q1 BVAS Scoring & EGPA Remission Documentation',
    tasks:
      'Complete first-quarter BVAS assessments for every EGPA patient. Capture remission rate metrics, ANCA seroconversion data, and PR3/MPO titers. Reconcile imatinib molecular response curves for FIP1L1-PDGFRA-positive patients with BCR-ABL-style logarithmic tracking.',
  },
  {
    phase: 'April',
    title: 'Benralizumab Q8-Week Transition Audit',
    tasks:
      'Validate benralizumab transition from q4wk loading to q8wk maintenance after dose three. Confirm AEC near-zero suppression, eosinophil depletion documentation, and antidrug antibody surveillance. Schedule tissue eosinophilia biopsy intervals for EoE-overlap and HES patients.',
  },
  {
    phase: 'May',
    title: 'Cardiac Surveillance for HES End-Organ Involvement',
    tasks:
      'Run echocardiography, cardiac MRI when indicated, troponin, and NT-proBNP for HES patients with cardiac history. Document Loeffler endocarditis surveillance, mural thrombus screening, and anticoagulation reassessment. Update dermatology and GI biopsy logs.',
  },
  {
    phase: 'June',
    title: 'Q2 BVAS, AEC Quarterly Benchmarks & Mid-Year Review',
    tasks:
      'Complete second-quarter BVAS scoring and AEC quarterly benchmark report. Pull cohort-level OCS taper percentages, biologic response rates ≥50% AEC reduction, and remission persistence. Audit pharmacy adherence for mepolizumab and benralizumab.',
  },
  {
    phase: 'July',
    title: 'Pulmonary HRCT & Sinonasal EGPA Surveillance',
    tasks:
      'Order pulmonary HRCT for EGPA patients with respiratory symptoms or known pulmonary involvement. Coordinate ENT review for chronic rhinosinusitis with nasal polyposis. Track FeNO, spirometry, and asthma control test scores alongside biologic cycles.',
  },
  {
    phase: 'August',
    title: 'Imatinib Molecular Response & Cardiac Monitoring',
    tasks:
      'For FIP1L1-PDGFRA HES patients on imatinib, document quarterly molecular response, troponin, echocardiogram, and CBC with differential. Verify dose adherence at 100 mg or 400 mg per protocol. Capture any cardiac decompensation or cytopenia signals for dose adjustment.',
  },
  {
    phase: 'September',
    title: 'Q3 BVAS & Tissue Eosinophilia Biopsy Cadence',
    tasks:
      'Run third-quarter BVAS and document EGPA remission persistence. Reconcile tissue eosinophilia biopsy cadence for GI, dermatologic, and pulmonary involvement. Update bone marrow biopsy intervals for HES patients with myeloid features or unexplained AEC elevation.',
  },
  {
    phase: 'October',
    title: 'Annual ACR/EULAR Criteria & ANCA Reassessment',
    tasks:
      'Reaffirm ACR/EULAR 2022 EGPA criteria for every active patient. Run annual ANCA panel including PR3 and MPO. Document classification stability, end-organ imaging refresh, and biologic eligibility reassessment under FDA/EMA labeling.',
  },
  {
    phase: 'November',
    title: 'OCS Taper Audit & Steroid-Sparing Outcomes',
    tasks:
      'Complete OCS taper audit with ≥50% prednisone reduction benchmark. Document cushingoid burden, bone density screening, and adrenal insufficiency surveillance. Reconcile steroid-sparing impact of mepolizumab and benralizumab across HES and EGPA cohorts.',
  },
  {
    phase: 'December',
    title: 'Q4 BVAS, Annual Outcomes Report & Year-End Reaffirmation',
    tasks:
      'Run final BVAS round, year-end AEC ≤150 cells/μL adherence, biologic response, and remission persistence. Compile annual outcomes report for the Eosinophil Disorders Program. Stage next-year FIP1L1-PDGFRA, ACR/EULAR, and biologic cycle calendars.',
  },
]

const kpis = [
  { metric: '≤150', label: 'AEC cells/μL on biologic therapy' },
  { metric: '≥70%', label: 'EGPA remission rate' },
  { metric: '≥50%', label: 'AEC reduction biologic response' },
  { metric: '0', label: 'BVAS score in remission' },
  { metric: '≥50%', label: 'OCS prednisone taper' },
  { metric: 'MMR', label: 'Imatinib molecular response' },
]

const testimonial = {
  quote:
    'Momenties consolidated our HES, EGPA, and EoE compliance into one calendar. Mepolizumab and benralizumab cycles, FIP1L1-PDGFRA annual testing, and BVAS scoring all sequence themselves now. AEC ≤150 cells/μL adherence climbed across the cohort and our EGPA remission rate cleared 70% for the first time.',
  author: 'Dr. Helena Marsh',
  role: 'Eosinophil Disorders Program Director',
}

export default function Page() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Eosinophilic Disorders Center Calendar"
        title="Every AEC Target. Every Biologic Cycle. Every EGPA Review."
        subtitle="Managing HES/EGPA/EoE compliance including mepolizumab/benralizumab cycles, AEC ≤150 cells/μL targets, FIP1L1-PDGFRA annual testing, EGPA/BVAS scoring, and ACR/EULAR criteria annual review."
      />

      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: 'clamp(1.6rem,3vw,2.2rem)',
              fontFamily: 'Playfair Display,serif',
              marginBottom: 48,
              color: '#f0ece3',
            }}
          >
            Built for the Full Eosinophilic Disorders Compliance Lifecycle
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: 28,
            }}
          >
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                style={{
                  background: '#131318',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <Icon size={28} color="#c5a35c" style={{ marginBottom: 14 }} />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: 10, color: '#f0ece3' }}>
                  {title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#a0998e', lineHeight: 1.65 }}>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ background: '#0a0a0d', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2
              style={{
                textAlign: 'center',
                fontSize: 'clamp(1.6rem,3vw,2.2rem)',
                fontFamily: 'Playfair Display,serif',
                marginBottom: 12,
                color: '#f0ece3',
              }}
            >
              The Eosinophilic Disorders Compliance Calendar — Month by Month
            </h2>
            <p
              style={{
                textAlign: 'center',
                color: '#a0998e',
                marginBottom: 56,
                fontSize: '0.97rem',
              }}
            >
              Every deadline sequenced across 12 months.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {timeline.map((item) => (
                <div
                  key={item.phase}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '180px 1fr',
                    gap: 24,
                    background: '#131318',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 14,
                    padding: '24px 28px',
                    alignItems: 'start',
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: '#c5a35c',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: 4,
                      }}
                    >
                      {item.phase}
                    </div>
                    <div
                      style={{
                        color: '#f0ece3',
                        fontWeight: 600,
                        fontSize: '0.97rem',
                        lineHeight: 1.4,
                      }}
                    >
                      {item.title}
                    </div>
                  </div>
                  <p style={{ color: '#a0998e', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                    {item.tasks}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2
              style={{
                textAlign: 'center',
                fontSize: 'clamp(1.6rem,3vw,2.2rem)',
                fontFamily: 'Playfair Display,serif',
                marginBottom: 48,
                color: '#f0ece3',
              }}
            >
              The 6 KPIs That Define Eosinophilic Disorders Excellence
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
                gap: 20,
              }}
            >
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  style={{
                    background: '#131318',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 14,
                    padding: '28px 20px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: 'clamp(1.4rem,2.5vw,1.9rem)',
                      fontWeight: 700,
                      color: '#c5a35c',
                      fontFamily: 'Playfair Display,serif',
                      marginBottom: 8,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#a0998e', lineHeight: 1.4 }}>
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ background: '#0e0e12', padding: '72px 24px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', color: '#c5a35c', marginBottom: 16 }}>&ldquo;</div>
            <p
              style={{
                fontSize: 'clamp(1rem,2vw,1.2rem)',
                color: '#f0ece3',
                lineHeight: 1.7,
                fontStyle: 'italic',
                marginBottom: 28,
              }}
            >
              {testimonial.quote}
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>
              {testimonial.author}
            </div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>
              {testimonial.role}
            </div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Achieve AEC ≤150 cells/μL Across Your Eosinophilic Disorders Program?"
        subtext="Sequence mepolizumab cycles, benralizumab transitions, FIP1L1-PDGFRA testing, and quarterly BVAS scoring into one compliance calendar."
      />
    </main>
  )
}
