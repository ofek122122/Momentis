import { Activity, Pill, HeartPulse, ClipboardCheck } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Pulmonary Hypertension Center Compliance Calendar | Momenties',
  description:
    'Coordinate WHO PH classification Group 1-5 annual review, REVEAL Lite 2 risk scoring quarterly tracking, ERA/PDE5/sGC treatment escalation monitoring, monthly 6MWT documentation, RHC hemodynamic surveillance, PVRI/mPAP/PCWP quarterly benchmarks, and CHEST/AHA/ESC guideline CE on a single calendar built for PAH programs.',
}

const pillars = [
  {
    icon: Activity,
    title: 'WHO PH Classification & REVEAL Lite 2 Risk Stratification',
    description:
      'Codify WHO PH Groups 1-5 at every annual review and recalculate REVEAL Lite 2 every three months across NYHA Functional Class, 6MWD, NT-proBNP, eGFR, systolic blood pressure, and heart rate. Stratify low-risk (≤6), intermediate (7-8), and high-risk (≥9) cohorts to drive treatment escalation triggers per the 2022 ESC/ERS PH Guidelines and the ATS Pulmonary Vascular Disease Workshop consensus, surfacing risk migration in time for triple-therapy review.',
  },
  {
    icon: Pill,
    title: 'ERA/PDE5i/Prostacyclin Combination Therapy Monitoring',
    description:
      'Track upfront combination therapy (ambrisentan plus tadalafil per AMBITION) and triple-therapy escalation including macitentan, tadalafil, riociguat, selexipag (GRIPHON), and parenteral treprostinil or epoprostenol. Calendar LFT surveillance for ERAs, hypotension checks for PDE5i and sGC, IV line-care intervals for prostacyclin, REMS attestations for ambrisentan and macitentan, and selexipag titration logs across the cohort.',
  },
  {
    icon: HeartPulse,
    title: 'RHC Hemodynamic Surveillance & PVR Targets',
    description:
      'Schedule baseline and serial right heart catheterizations to confirm mPAP greater than 20 mmHg, PCWP at or below 15 mmHg, and PVR greater than 2 WU per the 6th World Symposium definition. Trend cardiac index, RAP, mixed venous saturation, and PVRI to validate response and guide parenteral escalation. Coordinate vasoreactivity testing for IPAH candidates considering CCB therapy and sync data with serial echocardiography.',
  },
  {
    icon: ClipboardCheck,
    title: 'ATS/CHEST/ESC Annual Guideline Compliance',
    description:
      'Anchor the program to ATS/CHEST/ACCF guidelines, the 2022 ESC/ERS Guidelines for Pulmonary Hypertension, PHA Scientific Sessions, and PVRI updates. Track CE for pulmonologists, cardiologists, and PH-trained APPs; document accreditation cycles for PHA-recognized PH Care Centers; and renew quality benchmarks against the REVEAL and COMPERA registries to keep every protocol contemporaneous.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual WHO PH Reclassification & Baseline RHC Review',
    tasks:
      'Reconfirm WHO PH Group 1-5 classification for the active panel, audit prior-year RHC values (mPAP, PCWP, PVR, CI), reset REVEAL Lite 2 baselines, and schedule January 6MWT and NT-proBNP draws. Verify NYHA Functional Class reassignment and capture vasoreactivity status for IPAH and HPAH candidates.',
  },
  {
    phase: 'February',
    title: 'ERA REMS Renewal & LFT Surveillance Sweep',
    tasks:
      'Renew ambrisentan and macitentan REMS attestations, run monthly ALT and AST monitoring for bosentan-equivalent regimens, and document hemoglobin trends for ERA-related anemia. Confirm pregnancy testing intervals for patients of childbearing potential and update REMS prescriber re-enrollment.',
  },
  {
    phase: 'March',
    title: 'Q1 REVEAL Lite 2 Recalculation & 6MWT Trending',
    tasks:
      'Recalculate REVEAL Lite 2 across all Group 1 PAH patients, log 6MWT distance and Borg dyspnea index, and update NT-proBNP trajectory. Trigger escalation review for any patient migrating into intermediate-low or intermediate-high risk and queue triple-therapy consults.',
  },
  {
    phase: 'April',
    title: 'Echocardiographic Surveillance & RV Function Audit',
    tasks:
      'Schedule annual echocardiograms with TAPSE, RV S prime, RV strain, RVOT VTI, and tricuspid regurgitant jet velocity capture. Review RA area, pericardial effusion grading, and estimated RVSP. Sync findings with the latest RHC dataset to flag RV-PA uncoupling.',
  },
  {
    phase: 'May',
    title: 'PDE5i/sGC Switching Reviews & Riociguat Titration',
    tasks:
      'Audit sildenafil and tadalafil dosing, reconcile against riociguat candidacy per the RESPITE and REPLACE trial criteria, and document weekly riociguat titration from 1.0 mg TID to 2.5 mg TID. Capture systolic blood pressure logs and contraindications with nitrates or PDE5 inhibitors.',
  },
  {
    phase: 'June',
    title: 'Q2 REVEAL Lite 2 & Mid-Year Hemodynamic Catheterization',
    tasks:
      'Repeat REVEAL Lite 2 scoring, schedule mid-year RHC for high-risk patients, and benchmark mPAP, PCWP, PVR, and cardiac index against treatment goals. Begin parenteral prostacyclin transition planning (subcutaneous and intravenous treprostinil, epoprostenol) for non-responders to oral triple therapy.',
  },
  {
    phase: 'July',
    title: 'Treprostinil Titration & Prostacyclin Pump Maintenance',
    tasks:
      'Document subcutaneous and intravenous treprostinil titration schedules, weekly site rotation, pump cassette changes, and ng/kg/min escalation. Audit central line care for epoprostenol patients, document line infection surveillance, and verify backup pump availability.',
  },
  {
    phase: 'August',
    title: 'BNP/NT-proBNP Trending & Renal Function Reassessment',
    tasks:
      'Trend BNP and NT-proBNP across the cohort, reassess eGFR for selexipag dosing and ERA candidacy, and review uric acid as a prognostic marker. Update CKD staging for patients on triple therapy and adjust diuretic strategy for volume optimization.',
  },
  {
    phase: 'September',
    title: 'Q3 REVEAL Lite 2 & Selexipag Optimization',
    tasks:
      'Reconfirm REVEAL Lite 2 scoring, audit selexipag titration toward maximum tolerated dose per the GRIPHON protocol, and document headache, jaw pain, and diarrhea management. Schedule transplant-eligibility reviews for patients remaining intermediate-high or high risk.',
  },
  {
    phase: 'October',
    title: 'Lung Transplant Referral Audit & CTEPH Screening',
    tasks:
      'Audit referral status for high-risk PAH patients meeting ISHLT criteria, screen for CTEPH with V/Q scanning per ESC/ERS recommendations, and coordinate pulmonary endarterectomy or BPA evaluations. Update transplant listing labs and PRA panels for waitlisted candidates.',
  },
  {
    phase: 'November',
    title: 'CHEST Annual Meeting CE & Care Center Accreditation Prep',
    tasks:
      'Capture CE from CHEST and PHA Scientific Sessions, refresh PHA-Accredited PH Care Center documentation, and reconcile staff competency for PH-specific echocardiography and RHC. Update protocols against the latest ATS/CHEST guideline statements.',
  },
  {
    phase: 'December',
    title: 'Annual Outcomes Review & REVEAL/COMPERA Registry Submission',
    tasks:
      'Submit annual outcomes to REVEAL and COMPERA registries, finalize 6-year transplant-free survival audits, reconcile mortality and hospitalization metrics, and lock the upcoming year’s PH program calendar with retitled REVEAL Lite 2, RHC, and 6MWT cadences.',
  },
]

const kpis = [
  { metric: '<25 mmHg', label: 'Target mPAP at follow-up RHC' },
  { metric: '<3 WU', label: 'Pulmonary vascular resistance goal' },
  { metric: '≥380 m', label: '6-minute walk distance threshold' },
  { metric: '<300 pg/mL', label: 'NT-proBNP low-risk benchmark' },
  { metric: '≤6', label: 'REVEAL Lite 2 low-risk score' },
  { metric: '≥85%', label: '6-year transplant-free survival' },
]

const testimonial = {
  quote:
    'Before Momenties our REVEAL Lite 2 cadence drifted, riociguat titration windows slipped, and parenteral prostacyclin pump audits lived in three different binders. Now every RHC, every 6MWT, every ERA LFT, and every treprostinil titration step is on one calendar. We migrated 38% of our intermediate-risk patients to low-risk REVEAL Lite 2 within twelve months, and our PHA Care Center re-accreditation packet was fully sourced from the timeline.',
  author: 'Dr. Marguerite Halloran, MD, FCCP',
  role: 'PH Program Director, Academic Pulmonary Vascular Center',
}

export default function Page() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Pulmonary Hypertension Center Calendar"
        title="Every RHC. Every REVEAL Score. Every ERA Dose."
        subtitle="Momenties gives Group 1 PAH programs a single compliance calendar for REVEAL Lite 2 risk stratification, ERA/PDE5i/sGC combination therapy monitoring, monthly 6MWT documentation, quarterly RHC hemodynamics, and PVRI/mPAP benchmarks — built around the 2022 ESC/ERS PH Guidelines and ATS/CHEST PAH workflows."
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
            Four Pillars of PAH Program Compliance
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
              The Twelve-Month PH Compliance Timeline
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56 }}>
              Every REVEAL Lite 2 quarter, every RHC, every prostacyclin titration aligned to the calendar.
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
                    <div style={{ color: '#f0ece3', fontWeight: 600, fontSize: '0.97rem', lineHeight: 1.4 }}>
                      {item.title}
                    </div>
                  </div>
                  <p style={{ color: '#a0998e', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{item.tasks}</p>
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
              Hemodynamic & Risk Benchmarks
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
                  <div style={{ fontSize: '0.85rem', color: '#a0998e', lineHeight: 1.4 }}>{kpi.label}</div>
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
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>{testimonial.author}</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>{testimonial.role}</div>
          </div>
        </section>
      </Reveal>
      <CTA
        headline="Ready to Achieve Low-Risk REVEAL Lite 2 ≤6 in Your PAH Program?"
        subtext="Bring every WHO PH classification, REVEAL Lite 2 quarter, RHC, 6MWT, ERA LFT, and prostacyclin titration onto one Momenties calendar built for PHA-Accredited PH Care Centers."
      />
    </main>
  )
}
