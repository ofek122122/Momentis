import { Layers, Syringe, Sun, Microscope } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Cutaneous Lymphoma Center Compliance Calendar | Momenties',
  description:
    'Coordinate ISCL/EORTC staging annual review, mSWAT score monthly tracking, brentuximab vedotin and mogamulizumab cycle documentation, ECP photopheresis schedule compliance, CLIA flow cytometry reporting, skin biopsy protocol intervals, and T-cell clone monitoring on a single calendar built for cutaneous T-cell lymphoma centers.',
}

const pillars = [
  {
    icon: Layers,
    title: 'ISCL/EORTC MF/SS Staging & mSWAT Monitoring',
    description:
      'Anchor the program to the ISCL/EORTC TNMB classification for mycosis fungoides and Sézary syndrome and recompute mSWAT every month across patches, plaques, and tumors with body-region weighting. Track Stage IA-IVB migrations, log Sézary cell counts and CD4:CD8 ratio, and align reassessment with EORTC Cutaneous Lymphoma Task Force consensus criteria for response definitions across skin, blood, lymph node, and visceral compartments.',
  },
  {
    icon: Syringe,
    title: 'Brentuximab Vedotin/Mogamulizumab Cycle Management',
    description:
      'Sequence brentuximab vedotin every 21 days for CD30-positive MF and pcALCL per the ALCANZA protocol with peripheral neuropathy and neutropenia surveillance, then layer mogamulizumab 1 mg/kg weekly for the first four doses followed by every 14 days per the MAVORIC trial. Calendar infusion-reaction premedication, rash and drug-rash documentation, hepatitis B reactivation screening, and CMV monitoring across the cohort.',
  },
  {
    icon: Sun,
    title: 'ECP Photopheresis Schedule & Response Assessment',
    description:
      'Plan extracorporeal photopheresis on consecutive-day cycles every 2-4 weeks for erythrodermic CTCL and Sézary syndrome per US Cutaneous Lymphoma Consortium consensus. Track CD4+CD7- and CD4+CD26- Sézary burden, Global Response Score, and concurrent therapies (bexarotene, interferon alfa, low-dose methotrexate). Document apheresis access, 8-MOP dosing, and response milestones at 3, 6, and 12 months.',
  },
  {
    icon: Microscope,
    title: 'Flow Cytometry T-Cell Clone Surveillance',
    description:
      'Schedule CLIA-certified flow cytometry for blood involvement (B0/B1/B2 staging) with Sézary cell quantitation and TCR clonality assays. Capture TCR gene rearrangement by PCR or NGS for skin and blood, monitor CD4:CD8 ratio thresholds, and align with USCLC blood staging. Track clone clearance as a surrogate of complete response and integrate with mSWAT and lymph-node imaging timelines.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual ISCL/EORTC Restaging & Baseline mSWAT',
    tasks:
      'Reconfirm TNMB classification across the active MF/SS panel, capture baseline mSWAT, and reset Sézary blood staging (B0/B1/B2). Schedule annual contrast CT or PET/CT for nodal and visceral assessment, document CD30 expression by IHC, and reset response assessment intervals per EORTC Cutaneous Lymphoma Task Force criteria.',
  },
  {
    phase: 'February',
    title: 'Monthly mSWAT & CD30 IHC Review',
    tasks:
      'Run monthly mSWAT scoring for all active MF/SS patients, document CD30 IHC for brentuximab eligibility (≥10% threshold per ALCANZA), and reconcile photographic skin atlases. Trigger escalation review for Stage IB patients with progressive plaque burden.',
  },
  {
    phase: 'March',
    title: 'Brentuximab Vedotin Cycle Cadence & Neuropathy Audit',
    tasks:
      'Sequence brentuximab vedotin every 21 days, log infusion-related reactions, capture peripheral neuropathy grading (CTCAE), and adjust dosing for grade ≥2 neuropathy per ALCANZA. Audit hepatitis B and progressive multifocal leukoencephalopathy surveillance and document CBC nadirs.',
  },
  {
    phase: 'April',
    title: 'Mogamulizumab Induction & Drug-Rash Documentation',
    tasks:
      'Schedule weekly mogamulizumab for the first four doses then transition to every 14 days per MAVORIC. Document mogamulizumab-associated rash with skin biopsy where indicated, monitor for autoimmune complications, and capture infusion-reaction premedication regimens.',
  },
  {
    phase: 'May',
    title: 'ECP Photopheresis Cycle Optimization',
    tasks:
      'Audit consecutive-day ECP cycles every 2-4 weeks for erythrodermic CTCL, document apheresis venous access, log 8-MOP dosing and UVA exposure, and trend Sézary cell counts. Reconcile combination therapy with bexarotene, interferon alfa, or low-dose methotrexate.',
  },
  {
    phase: 'June',
    title: 'Q2 Flow Cytometry & TCR Clonality Reassessment',
    tasks:
      'Repeat CLIA flow cytometry with Sézary panel, recapture TCR rearrangement by PCR or high-throughput sequencing, and update B-stage assignment. Trend CD4+CD7- and CD4+CD26- subsets to confirm response or relapse and align with mSWAT trajectory.',
  },
  {
    phase: 'July',
    title: 'Mid-Year Response Assessment & Imaging',
    tasks:
      'Run a mid-year Global Response Score combining skin, blood, nodal, and visceral compartments. Schedule contrast CT or PET/CT for advanced-stage disease, capture lymph-node biopsies for indeterminate adenopathy, and finalize 6-month ECP response milestones.',
  },
  {
    phase: 'August',
    title: 'Skin Biopsy Protocol & Large-Cell Transformation Watch',
    tasks:
      'Schedule serial skin biopsies on plaques and tumors, document large-cell transformation (>25% large CD30+ cells), and reassess CD30 expression for brentuximab continuation. Capture folliculotropic and granulomatous slack-skin variants.',
  },
  {
    phase: 'September',
    title: 'Q3 mSWAT & Combination Therapy Audit',
    tasks:
      'Recompute mSWAT, audit combination therapy escalation (bexarotene, interferon alfa-2b, methotrexate, romidepsin, vorinostat), and reconcile total skin electron beam therapy candidacy for refractory Stage IIB disease. Document HDAC-inhibitor tolerability.',
  },
  {
    phase: 'October',
    title: 'Allogeneic SCT Referral Review for Advanced CTCL',
    tasks:
      'Audit allogeneic stem cell transplant referral for advanced-stage MF/SS per EBMT and CIBMTR guidance. Document HLA typing, donor identification, and pre-transplant disease control. Coordinate bridge therapy with mogamulizumab or ECP.',
  },
  {
    phase: 'November',
    title: 'USCLC/EORTC Annual Meeting CE & Protocol Refresh',
    tasks:
      'Capture CE from USCLC and EORTC Cutaneous Lymphoma Task Force sessions, refresh staff competency on mSWAT scoring and Global Response Scoring, and update institutional protocols against the latest ISCL/USCLC/EORTC consensus documents.',
  },
  {
    phase: 'December',
    title: 'Annual Outcomes Review & CLIA Reporting Lock',
    tasks:
      'Submit annual outcomes including ORR, complete response rate, time to next treatment, and 5-year overall survival by stage. Reconcile CLIA flow cytometry reporting, lock the upcoming year’s mSWAT and ECP cadences, and finalize ISCL restaging windows.',
  },
]

const kpis = [
  { metric: '≥50%', label: 'mSWAT response (≥50% reduction sustained ≥4 weeks)' },
  { metric: '≥28%', label: 'Mogamulizumab ORR per MAVORIC' },
  { metric: '≥85%', label: '5-year overall survival, Stage IB MF' },
  { metric: '≥60%', label: 'ECP response rate in erythrodermic CTCL' },
  { metric: '≥18%', label: 'Complete response rate, advanced MF/SS' },
  { metric: '≥40%', label: 'Blood T-cell clone clearance at 12 months' },
]

const testimonial = {
  quote:
    'Our cutaneous lymphoma program juggles monthly mSWAT photography, brentuximab vedotin every 21 days, MAVORIC-style mogamulizumab induction and maintenance, and biweekly ECP cycles for erythrodermic patients — plus CLIA flow cytometry and TCR clonality every quarter. Momenties put every cycle, every biopsy, and every response milestone on one calendar. We hit a 31% mogamulizumab ORR last year and our ISCL restaging packets now ship from a single timeline.',
  author: 'Dr. Yusuf Pemberton, MD, PhD',
  role: 'Cutaneous Lymphoma Program Director, NCI-Designated Comprehensive Cancer Center',
}

export default function Page() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Cutaneous Lymphoma Center Calendar"
        title="Every mSWAT Score. Every Mogamulizumab Cycle. One Calendar."
        subtitle="Momenties gives cutaneous T-cell lymphoma centers a single compliance calendar for ISCL/EORTC MF/SS staging, brentuximab vedotin and mogamulizumab cycle management, ECP photopheresis scheduling, flow cytometry T-cell clone surveillance, and annual ISCL restaging — built around USCLC and EORTC Cutaneous Lymphoma Task Force consensus."
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
            Four Pillars of Cutaneous Lymphoma Compliance
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
              The Twelve-Month CTCL Compliance Timeline
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56 }}>
              Every mSWAT, every brentuximab cycle, every ECP run, and every flow panel sequenced across the year.
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
              Response & Survival Benchmarks
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
        headline="Ready to Achieve ≥28% ORR in Your Mogamulizumab Protocol?"
        subtext="Bring every mSWAT score, brentuximab cycle, mogamulizumab dose, ECP run, and CLIA flow panel onto one Momenties calendar built for ISCL- and EORTC-aligned cutaneous lymphoma centers."
      />
    </main>
  )
}
