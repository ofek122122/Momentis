import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Pulmonary Hypertension Center Compliance Calendar | Momenties',
  description: 'Automate CHEST/AHA PH guideline annual review, ERA and PDE5 REMS annual training, RHC hemodynamic quarterly documentation, REVEAL risk score tracking, PHBI registry data, and accreditation deadlines for pulmonary hypertension programs.',
}

const pillars = [
  {
    icon: Target,
    title: 'PH Center Accreditation & Guideline Compliance',
    description: 'Annual AHA/ACC/ERS 2022 Pulmonary Hypertension Guidelines compliance review for all PAH therapeutic pathways (WHO Group 1–5 classification protocol), annual CHEST consensus statement update implementation, biennial Pulmonary Hypertension Association (PHA) Center of Comprehensive Care (CCC) accreditation renewal with program capability verification, annual ERN-LUNG (European Reference Network) international PH standards review for academic programs, annual IPAH/HPAH genetic counseling protocol update (BMPR2, ACVRL1, ENG, SMAD9 variants), and annual PH-ILD (PH associated with interstitial lung disease) clinical pathway update per ATS/ERS ILD-PH Task Force.',
  },
  {
    icon: RefreshCw,
    title: 'ERA, PDE5, and sGC REMS & Drug Safety',
    description: 'Annual ERA (endothelin receptor antagonist) REMS program training renewal — bosentan (TRACLEER REMS: monthly LFT, monthly pregnancy testing for REMS enrollment), macitentan, ambrisentan; annual PDE5 inhibitor annual CE update (sildenafil, tadalafil — drug interaction protocol: nitrate contraindication, alpha-blocker hypotension); annual sGC (soluble guanylate cyclase stimulator) REMS — riociguat (ADEMPAS REMS: monthly pregnancy test, PDE5 co-administration contraindication); annual prostacyclin analog annual competency — epoprostenol pump alarm management, IV line sterility protocol, treprostinil subcutaneous site rotation; and quarterly inhaled treprostinil/iloprost treatment protocol review (Optineb device annual cleaning compliance).',
  },
  {
    icon: TrendingUp,
    title: 'RHC Hemodynamics & REVEAL Risk Stratification',
    description: 'Quarterly right heart catheterization (RHC) hemodynamic documentation — mPAP ≥20 mmHg threshold, PVR ≥2 WU, PAWP ≤15 mmHg for pre-capillary PH diagnosis, annual RHC vasoreactivity testing documentation (iNO 20 ppm or IV epoprostenol — positive response: ≥10 mmHg decrease in mPAP to ≤40 mmHg with preserved/increased CO), quarterly 6-minute walk distance (6MWD) assessment documentation (risk stratification target ≥440 m low risk), quarterly BNP/NT-proBNP trending (low risk: BNP <50 ng/L, NT-proBNP <300 ng/L), quarterly REVEAL 2.0 risk score calculation and treatment escalation documentation, annual echocardiographic RV function assessment (TAPSE ≥2.0 cm, FAC ≥35% low-risk), and quarterly WHO functional class assessment (target FC I–II).',
  },
  {
    icon: BarChart3,
    title: 'PH Registry & Multidisciplinary Outcomes',
    description: 'Annual PHBI (Pulmonary Hypertension Breakthrough Initiative) registry data submission — incident PAH clinical phenotype, hemodynamics, genetics, biomarkers; annual REVEAL Registry outcome data submission for program benchmarking; quarterly combination therapy escalation documentation rate (AHA/ACC 2022 Guideline: initial combination ERA + PDE5 for WHO FC II–III at presentation), quarterly prostacyclin escalation documentation for inadequate responders (REVEAL score ≥8 intermediate-high), annual MDT pulmonary hypertension conference participation documentation (cardiology + pulmonology + rheumatology + pharmacy), annual pulmonary arterial hypertension (PAH) hospitalization rate tracking (target ≤20% annual hospitalization), and quarterly lung transplant referral rate documentation for REVEAL high-risk (score ≥11) refractory patients.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'AHA/ACC/ERS Guidelines Review',
    tasks: 'Complete annual AHA/ACC/ERS 2022 PH guideline compliance review. Update WHO Group classification pathways. Schedule Q1 RHC hemodynamic reviews.',
  },
  {
    phase: 'February',
    title: 'REMS Training Renewals',
    tasks: 'Complete ERA bosentan TRACLEER REMS annual renewal. Complete riociguat ADEMPAS REMS renewal. Verify REMS enrollment for all active ERA patients. Confirm monthly LFT and pregnancy testing protocols.',
  },
  {
    phase: 'March',
    title: 'Q1 Outcomes & 6MWD',
    tasks: 'Document Q1 RHC hemodynamics and REVEAL 2.0 risk scores. Complete Q1 6MWD assessments (target ≥440 m low-risk). Submit Q1 BNP/NT-proBNP trending. Document WHO FC assessments.',
  },
  {
    phase: 'April',
    title: 'PHBI Registry Submission',
    tasks: 'Submit annual PHBI registry data — incident PAH phenotypes, hemodynamics, genetics panel results. Review BMPR2/ACVRL1 genetic counseling protocol. Update ILD-PH pathway.',
  },
  {
    phase: 'May',
    title: 'MDT Conference Documentation',
    tasks: 'Document annual PH multidisciplinary conference participation (cardiology + pulmonology + rheumatology + pharmacy). Review combination therapy escalation rates. Schedule RV echo assessments.',
  },
  {
    phase: 'June',
    title: 'Q2 Hemodynamics & Prostacyclin Review',
    tasks: 'Complete Q2 RHC reviews and REVEAL 2.0 updates. Document inhaled treprostinil/iloprost Optineb device compliance. Review epoprostenol pump alarm competency. Identify REVEAL ≥8 escalation candidates.',
  },
  {
    phase: 'July',
    title: 'PHA CCC Accreditation Prep',
    tasks: 'Begin biennial PHA Center of Comprehensive Care accreditation renewal documentation. Review program capability criteria. Document specialty pharmacy partnerships for ERA/prostacyclin access.',
  },
  {
    phase: 'August',
    title: 'Q3 Risk Stratification',
    tasks: 'Complete Q3 REVEAL 2.0 risk score calculations. Document combination therapy initiation for new WHO FC II–III presentations. Track hospitalization rates (target ≤20% annual). Submit Q3 BNP trending.',
  },
  {
    phase: 'September',
    title: 'Lung Transplant Referral Review',
    tasks: 'Document quarterly lung transplant referral rates for REVEAL high-risk (score ≥11) refractory patients. Review UNOS listing criteria for PAH. Update vasoreactivity testing protocol for calcium channel blocker candidates.',
  },
  {
    phase: 'October',
    title: 'Annual PDE5/Prostacyclin CE',
    tasks: 'Complete annual PDE5 inhibitor drug interaction CE (nitrate contraindication, alpha-blocker protocols). Complete prostacyclin analog annual competency — epoprostenol IV line sterility, treprostinil subcutaneous rotation. Update subcutaneous site documentation.',
  },
  {
    phase: 'November',
    title: 'REVEAL Registry Annual Submission',
    tasks: 'Submit annual REVEAL Registry outcome data. Complete ERN-LUNG international PH standards review for academic programs. Review genetic counseling documentation for familial PAH probands.',
  },
  {
    phase: 'December',
    title: 'Q4 Close & Annual Report',
    tasks: 'Complete Q4 RHC hemodynamics, 6MWD, WHO FC documentation. Finalize annual PAH hospitalization rate report. Update IPAH/HPAH genetic protocol for next year. Prepare PHA CCC renewal submission.',
  },
]

const kpis = [
  { metric: '≥440 m', label: '6MWD Low-Risk Target' },
  { metric: 'BNP <50 ng/L', label: 'Low-Risk BNP Threshold' },
  { metric: '≤20%', label: 'Annual PAH Hospitalization Rate' },
  { metric: 'REVEAL <6', label: 'Low-Risk REVEAL 2.0 Score' },
  { metric: '100%', label: 'ERA/PDE5/sGC REMS Compliance' },
  { metric: 'WHO FC I–II', label: 'Treatment Response Target' },
]

const testimonial = {
  quote: 'Pulmonary hypertension program management requires AHA/ACC/ERS guideline annual review, ERA TRACLEER REMS and riociguat ADEMPAS REMS renewals, monthly LFT and pregnancy test protocols, quarterly RHC hemodynamic documentation, quarterly 6MWD and REVEAL 2.0 risk stratification, PHBI registry annual submission, prostacyclin pump competency, and lung transplant referral tracking — all simultaneously. Momenties consolidated every deadline. Our program achieved ≥85% WHO FC I–II at 12 months and zero REMS compliance gaps.',
  author: 'Medical Director, Pulmonary Hypertension Program',
  role: 'PHA Center of Comprehensive Care, Academic Medical Center',
}

export default function PulmonaryHypertensionCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Pulmonary Hypertension Center Calendar"
        title="Every PH Guideline. Every ERA REMS Deadline. One Calendar."
        subtitle="Pulmonary hypertension programs manage one of the most pharmacologically complex compliance portfolios in cardiovascular medicine — ERA TRACLEER and riociguat ADEMPAS REMS renewals, quarterly RHC hemodynamic documentation, REVEAL 2.0 risk stratification, 6MWD assessments, PHBI registry submission, prostacyclin pump competency, and AHA/ACC/ERS guideline annual review. Momenties automates every deadline so your program achieves top-quartile PAH outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full PH Center Compliance Lifecycle
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

      {/* 12-Month Timeline */}
      <Reveal>
        <section style={{ background: '#0a0a0d', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 12, color: '#f0ece3' }}>
              The PH Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every REMS renewal, hemodynamic assessment, registry submission, and accreditation milestone — sequenced across 12 months.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {timeline.map((item) => (
                <div key={item.phase} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 24, background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '24px 28px', alignItems: 'start' }}>
                  <div>
                    <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{item.phase}</div>
                    <div style={{ color: '#f0ece3', fontWeight: 600, fontSize: '0.97rem', lineHeight: 1.4 }}>{item.title}</div>
                  </div>
                  <p style={{ color: '#a0998e', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{item.tasks}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
              The 6 KPIs That Define PH Program Excellence
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 20 }}>
              {kpis.map((kpi) => (
                <div key={kpi.label} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '28px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.4rem,2.5vw,1.9rem)', fontWeight: 700, color: '#c5a35c', fontFamily: 'Playfair Display, serif', marginBottom: 8 }}>{kpi.metric}</div>
                  <div style={{ fontSize: '0.85rem', color: '#a0998e', lineHeight: 1.4 }}>{kpi.label}</div>
                </div>
              ))}
            </div>
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
        headline="Ready to Achieve ≥85% WHO FC I–II at 12 Months?"
        subtext="Join pulmonary hypertension programs using Momenties to automate every REMS, REVEAL, and AHA/ACC guideline deadline. Free to start."
      />
    </main>
  )
}
