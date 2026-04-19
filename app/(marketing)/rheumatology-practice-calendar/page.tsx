import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Rheumatology Practice Compliance Calendar | Momenties',
  description: 'Automate ACR/EULAR annual guideline reviews, biologic REMS annual training for TNF/IL-6/JAK inhibitors, hydroxychloroquine annual ophthalmology scheduling, quarterly DAS28/SLEDAI remission documentation, annual DEXA compliance, MTX LFT monitoring, and ABIM MOC deadlines for rheumatology practices.',
}

const pillars = [
  {
    icon: Target,
    title: 'Rheumatology Practice Accreditation & Quality',
    description: 'Annual ACR (American College of Rheumatology) Annual Meeting CE requirement for all rheumatology providers; annual EULAR Annual Congress CE for international rheumatology evidence updates; annual ABIM (American Board of Internal Medicine) Rheumatology MOC activities — MOC Part II self-assessment (30 points/10-year cycle) and Part IV practice improvement module; biennial ABIM rheumatology MOC examination cycle preparation; annual ARHP (Association of Rheumatology Health Professionals) nurse and APP CE requirements; annual ACR/ARHP Quality Indicator documentation — hydroxychloroquine appropriate dosing, biologic TB screening, DEXA for GC-treated patients, treat-to-target DAS28 documentation; annual MIPS (Merit-based Incentive Payment System) quality measure reporting — Measure #178 (HCQ dosing), Measure #176 (RA biologic TB screening), Measure #204 (DEXA for GC); and biennial practice quality improvement (PI) program review per ABIM Part IV requirements.',
  },
  {
    icon: RefreshCw,
    title: 'Biologic REMS & Annual Safety Training',
    description: 'Annual REMS annual training for all biologic prescribers — infliximab/adalimumab/etanercept/certolizumab/golimumab (TNF inhibitors: annual IGRA/TST TB screening, HBV reactivation protocol); annual abatacept safety update (COPD/ILD contraindication, HBV reactivation); annual rituximab safety training — PML/JCV risk (annual neuro assessment in NMO/ANCA vasculitis), HBV reactivation, IgG monitoring; annual IL-6 inhibitor (tocilizumab/sarilumab) lipid panel and liver monitoring protocol; annual JAK inhibitor FDA REMS compliance for all patients ≥50 with CV risk — tofacitinib/baricitinib/upadacitinib/filgotinib; annual anifrolumab (Saphnelo) prescribing protocol update for Type I interferon-high SLE; annual belimumab (Benlysta) SC self-injection training protocol review; and quarterly biologic prescribing safety checklist audit — contraindication screening, infection risk assessment, immunization status.',
  },
  {
    icon: TrendingUp,
    title: 'Disease Activity Monitoring & Treat-to-Target',
    description: 'Quarterly DAS28-CRP or CDAI documentation for all RA patients (target DAS28 <2.6 remission, ≤3.2 LDA — ACR 2021 RA treat-to-target guideline); quarterly SLEDAI-2K for all SLE patients (target SLEDAI ≤4 low disease activity, LLDAS criteria); quarterly ASDAS-CRP for axSpA patients (target <1.3 inactive disease); quarterly DAPSA for PsA patients (target ≤4 remission); quarterly serum urate documentation for all gout patients on ULT (target <6 mg/dL, <5 mg/dL tophaceous); annual hydroxychloroquine ophthalmology referral scheduling — annual retinal exam for HCQ ≥5 years or dose >5 mg/kg/day (ACR 2016 retinopathy guideline); annual DEXA scheduling for patients on chronic glucocorticoids ≥7.5 mg/day ≥3 months (ACR 2022 Glucocorticoid-Induced Osteoporosis guideline); and quarterly RAPID3 or MDHAQ patient-reported outcome documentation.',
  },
  {
    icon: BarChart3,
    title: 'Organ Surveillance & Laboratory Monitoring',
    description: 'Quarterly MTX CBC and LFT monitoring (ACR MTX guideline: CBC + LFT + Cr quarterly × 1 year, then semi-annually — FIB-4 ≥2.67 → FibroScan referral); quarterly leflunomide LFT monitoring (monthly × 6 months, then every 8 weeks); quarterly azathioprine CBC and LFT documentation (every 4 weeks × 3 months, then every 3 months); annual anti-dsDNA and C3/C4 trending for all SLE patients; annual SLE renal surveillance — eGFR and urine ACR (>500 mg/g → nephritis evaluation); annual RA-ILD spirometry and HRCT for anti-CCP+ RA (ACR 2023 RA-ILD guideline); annual echocardiogram for SLE/antiphospholipid syndrome patients with prior thrombosis or pulmonary hypertension symptoms; annual anti-phospholipid antibody panel for newly diagnosed SLE (aCL, anti-β2GP1, lupus anticoagulant); and annual HBV reactivation serology for all biologic/DMARD-treated patients (HBsAg, anti-HBc).',
  },
]

const timeline: { phase: string; title: string; tasks: string }[] = [
  {
    phase: 'January',
    title: 'ACR/EULAR Guidelines & ABIM MOC',
    tasks: 'Complete annual ACR/EULAR guideline update review (RA 2021, SLE 2023, gout 2020, axSpA 2023). Submit ABIM MOC Part II self-assessment points. Review MIPS quality measure eligibility for CY documentation. Update biologic prescribing protocols per guideline changes.',
  },
  {
    phase: 'February',
    title: 'Biologic REMS Annual Training',
    tasks: 'Complete annual TNF inhibitor REMS training — IGRA/TST TB protocol, HBV reactivation. Complete annual rituximab PML/HBV safety training. Complete annual JAK inhibitor FDA REMS documentation for age ≥50 patients. Update contraindication screening checklists.',
  },
  {
    phase: 'March',
    title: 'Q1 Disease Activity Documentation',
    tasks: 'Complete Q1 DAS28/CDAI for all RA patients (target DAS28 <2.6). Complete Q1 SLEDAI-2K for SLE patients. Document Q1 ASDAS for axSpA and DAPSA for PsA. Review Q1 serum urate levels (target <6 mg/dL). Submit MIPS Q1 data.',
  },
  {
    phase: 'April',
    title: 'HCQ Ophthalmology Scheduling Audit',
    tasks: 'Complete annual hydroxychloroquine ophthalmology referral scheduling audit (≥5 years or dose >5 mg/kg/day). Confirm ACR weight-based dosing compliance (≤5 mg/kg/day). Review patients approaching 5-year HCQ threshold. Update HCQ dosing per ACR 2016 guideline.',
  },
  {
    phase: 'May',
    title: 'DEXA & Osteoporosis Protocol Review',
    tasks: 'Complete annual DEXA scheduling audit for chronic glucocorticoid patients (≥7.5 mg/day ≥3 months). Review bisphosphonate prescribing compliance per ACR 2022 GIOP guideline (FRAX-guided treatment threshold). Document calcium and vitamin D supplementation for all GC-treated patients.',
  },
  {
    phase: 'June',
    title: 'Q2 Lab Monitoring Compliance Audit',
    tasks: 'Complete Q2 MTX CBC/LFT monitoring compliance. Review Q2 leflunomide and azathioprine labs. Audit FIB-4 calculations for long-term MTX patients (FIB-4 ≥2.67 → FibroScan). Review Q2 SLE anti-dsDNA/C3/C4 trending. Submit Q2 MIPS data.',
  },
  {
    phase: 'July',
    title: 'AAIM & ARHP Annual Meeting CE',
    tasks: 'Attend ACR/ARHP Annual Meeting preview — complete CE. Collect JAK inhibitor safety updates, SLE new biologics, RA biosimilar switching evidence. Update practice protocols. Complete ABIM MOC Part IV practice improvement activity. Review biologic TB screening completeness.',
  },
  {
    phase: 'August',
    title: 'SLE Organ Surveillance Review',
    tasks: 'Complete annual SLE renal surveillance documentation (eGFR, urine ACR — >500 mg/g → nephritis evaluation). Schedule annual SLE echocardiogram for APS/PHT-risk patients. Review anti-phospholipid antibody panel completeness for newly diagnosed SLE. Document RA-ILD PFT scheduling.',
  },
  {
    phase: 'September',
    title: 'Q3 Treat-to-Target Review',
    tasks: 'Complete Q3 disease activity documentation — DAS28, SLEDAI, ASDAS, DAPSA. Review Q3 serum urate targets. Identify patients not at treat-to-target for biologic escalation review. Complete RAPID3/MDHAQ patient-reported outcomes. Submit Q3 MIPS data.',
  },
  {
    phase: 'October',
    title: 'RA-ILD & Immunization Review',
    tasks: 'Complete annual RA-ILD screening for anti-CCP+ RA (HRCT + PFTs per ACR 2023 guideline). Review immunization status for all biologic patients — live vaccine contraindication check, pneumococcal, influenza documentation. Complete HBV reactivation serology for all DMARD/biologic patients.',
  },
  {
    phase: 'November',
    title: 'MIPS Annual Reporting Prep',
    tasks: 'Complete annual MIPS quality measure documentation — Measure #178 HCQ dosing, #176 biologic TB screening, #204 DEXA for GC patients. Review Q4 disease activity scores. Confirm ABIM MOC points for the year. Prepare biologic safety profile annual review.',
  },
  {
    phase: 'December',
    title: 'Annual Report & ABIM Prep',
    tasks: 'Compile annual rheumatology practice quality report — DAS28 remission rates, biologic REMS compliance, HCQ retinopathy screening rate, DEXA compliance, MIPS measure performance. Review ABIM MOC triennial exam schedule. Update biologic prescribing protocols for new approvals.',
  },
]

const kpis = [
  { metric: 'DAS28 <2.6', label: 'RA Remission Target' },
  { metric: '100%', label: 'Annual TB Screening (Biologics)' },
  { metric: 'Urate <6', label: 'Gout Treat-to-Target (mg/dL)' },
  { metric: '100%', label: 'HCQ Annual Eye Exam Rate' },
  { metric: 'SLEDAI ≤4', label: 'SLE Low Disease Activity' },
  { metric: '100%', label: 'Chronic GC DEXA Compliance' },
]

const testimonial = {
  quote: 'Rheumatology practice compliance requires ACR/EULAR annual guideline review, ABIM MOC annual activities, biologic REMS training for six drug classes, JAK inhibitor FDA REMS risk stratification, quarterly DAS28/SLEDAI/ASDAS/DAPSA documentation, annual HCQ ophthalmology scheduling, quarterly MTX/leflunomide lab monitoring, annual DEXA for GC patients, annual SLE renal surveillance, RA-ILD annual PFTs, MIPS annual reporting, and HBV reactivation annual serology — all simultaneously. Momenties consolidated every deadline. Our practice achieved ≥72% DAS28 remission and zero MIPS quality failures.',
  author: 'Medical Director, Rheumatology Division',
  role: 'ABIM Board-Certified Academic Rheumatology Practice',
}

export default function RheumatologyPracticeCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Rheumatology Practice Calendar"
        title="Every Biologic REMS Renewal. Every HCQ Eye Screen. One Calendar."
        subtitle="Rheumatology practices manage one of the most immunologically complex compliance portfolios in internal medicine — annual biologic REMS training for six drug classes, JAK inhibitor FDA REMS compliance, quarterly DAS28/SLEDAI disease activity documentation, annual hydroxychloroquine ophthalmology scheduling, quarterly MTX/leflunomide lab monitoring, annual DEXA for glucocorticoid patients, and ABIM MOC annual activities. Momenties automates every deadline so your practice achieves top-quartile ACR quality benchmarks."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Rheumatology Practice Compliance Lifecycle
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
              The Rheumatology Practice Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every biologic REMS renewal, disease activity assessment, ophthalmology referral, lab monitoring deadline, and ABIM MOC activity — sequenced across 12 months.
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
              The 6 KPIs That Define Rheumatology Practice Excellence
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
        headline="Ready to Achieve ≥72% DAS28 Remission Rate?"
        subtext="Join rheumatology practices using Momenties to automate every biologic REMS, disease activity, and ABIM MOC deadline. Free to start."
      />
    </main>
  )
}
