import { Target, Stethoscope, BarChart3, ClipboardList } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Thyroid Cancer Center Compliance Calendar | Momenties',
  description: 'Automate ATA guideline annual reviews, RAI treatment scheduling, TSH suppression monitoring, thyroglobulin surveillance, neck ultrasound scheduling, post-thyroidectomy calcium protocols, NCDB thyroid case completeness, and thyroid cancer MDT quality metrics for differentiated thyroid cancer programs.',
}

const pillars = [
  {
    icon: Target,
    title: 'Thyroid Cancer Program Accreditation & ATA Quality',
    description: 'Annual American Thyroid Association (ATA) guideline update implementation review — ATA 2015 differentiated thyroid cancer (DTC) management guidelines (low, intermediate, high risk stratification); annual NCDB (National Cancer Data Base) thyroid case completeness audit ≥90% — papillary, follicular, Hürthle cell, medullary, anaplastic subtypes; annual NCCN Thyroid Carcinoma guideline update review; biennial Commission on Cancer (CoC) thyroid cancer program accreditation standards review; annual American Head and Neck Society (AHNS) thyroid surgery outcome benchmarks — complication rates, recurrent laryngeal nerve injury documentation; annual Endocrine Society clinical practice guideline annual CE review for post-thyroidectomy management; annual AAES (American Association of Endocrine Surgeons) quality benchmarks — thyroidectomy complication rates, permanent hypoparathyroidism rates; and quarterly thyroid cancer tumor board MDT documentation rate.',
  },
  {
    icon: Stethoscope,
    title: 'RAI Therapy, TSH Suppression & Post-Thyroidectomy Protocols',
    description: 'Annual RAI (radioactive iodine — I-131) dosimetry and radiation safety officer training; annual NRC (Nuclear Regulatory Commission) license compliance review for RAI treatment facility; annual post-RAI isolation protocol review — NRC 10 CFR 35.75 patient release criteria (exposure rate <7 mrem/hr at 1 meter); quarterly TSH suppression monitoring — ATA high-risk: TSH <0.1 mIU/L, intermediate risk: 0.1–0.5 mIU/L, low risk: 0.5–2.0 mIU/L (per ATA 2015 risk-adapted protocol); post-thyroidectomy hypocalcemia protocol — serum calcium every 6 hours × 24 hours, corrected calcium <8.0 mg/dL → IV calcium gluconate; quarterly intact PTH (iPTH) monitoring for post-thyroidectomy hypoparathyroidism (iPTH <10 pg/mL = permanent hypoparathyroidism); annual recombinant TSH (rhTSH/Thyrogen) protocol review for RAI stimulation — Thyrogen 0.9 mg IM × 2 days, I-131 on Day 3; and annual low-iodine diet patient education protocol review (2 weeks pre-RAI).',
  },
  {
    icon: BarChart3,
    title: 'Thyroglobulin Surveillance, Imaging & Biomarker Compliance',
    description: 'Quarterly stimulated thyroglobulin (Tg) monitoring for ATA high-risk DTC (first 2 years) — Tg >2 ng/mL post-rhTSH = biochemical incomplete response; quarterly anti-thyroglobulin antibody (TgAb) monitoring — TgAb rise >20% = suspicious for structural disease in ablated patients; annual neck ultrasound for all DTC patients — ATA recommendation: 6–12 months post-RAI, then annually × 5 years; annual whole-body scan (WBS) — diagnostic I-123 or post-therapy I-131 WBS for ATA intermediate/high-risk patients at 6–12 months post-ablation; annual 18F-FDG PET/CT for RAI-refractory DTC — loss of RAI uptake in known metastases → FDG-avid disease; quarterly RECIST 1.1 response assessment for lenvatinib/sorafenib systemic therapy patients; quarterly calcitonin monitoring for medullary thyroid cancer (MTC) — calcitonin doubling time <6 months = high risk; and annual CEA (carcinoembryonic antigen) monitoring for MTC surveillance (CEA doubling time predicts prognosis).',
  },
  {
    icon: ClipboardList,
    title: 'Thyroid Cancer Registry, Surgery Outcomes & MDT Quality',
    description: 'Annual NCDB thyroid case completeness ≥90% — papillary microcarcinoma through anaplastic subtype; annual ATA-QI (Quality Initiative) registry data submission — risk stratification, RAI use, recurrence rates, treatment response classification; quarterly DTC treatment response documentation — ATA 2015 response categories: excellent (Tg <1 ng/mL + negative imaging), biochemical incomplete (Tg ≥1 ng/mL + negative imaging), structural incomplete (persistent/new structural disease), indeterminate; annual thyroidectomy complication rate documentation — permanent hypoparathyroidism (target <2%), recurrent laryngeal nerve injury (target <1%), hematoma (<1%); annual AHNS thyroid quality benchmarks — completion thyroidectomy within 6 months, RAI ablation within 6 months of thyroidectomy for intermediate/high risk; annual RET mutation testing compliance for all MTC cases — RET codon 634 (MEN2A), RET codon 918 (MEN2B), prophylactic thyroidectomy timing for hereditary MTC; annual palliative care integration rate for anaplastic thyroid cancer (ATC) and Stage IVB/IVC DTC; and quarterly molecular testing documentation — BRAF V600E (papillary TC), RAS mutation (follicular/poorly differentiated TC), NTRK fusion (all subtypes).',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'ATA Guidelines & NCDB Annual Review',
    tasks: 'Complete annual ATA 2015 differentiated thyroid cancer guideline update review. Submit Q4 NCDB thyroid case data. Review NCCN Thyroid Carcinoma guideline updates. Update risk stratification protocols for low/intermediate/high-risk DTC. Schedule Q1 TSH suppression labs for all post-thyroidectomy patients.',
  },
  {
    phase: 'February',
    title: 'RAI Program Annual Safety Review',
    tasks: 'Complete annual RAI radiation safety officer training. Review NRC 10 CFR 35.75 patient release criteria compliance. Complete annual post-RAI isolation protocol review. Review rhTSH (Thyrogen) stimulation protocol. Complete annual low-iodine diet patient education protocol update.',
  },
  {
    phase: 'March',
    title: 'Q1 Thyroglobulin & TSH Monitoring',
    tasks: 'Complete Q1 stimulated thyroglobulin (Tg) monitoring for ATA high-risk DTC patients (first 2 years). Document Q1 anti-TgAb trending. Review Q1 TSH suppression targets — high-risk TSH <0.1, intermediate 0.1–0.5, low-risk 0.5–2.0 mIU/L. Submit Q1 NCDB case data. Document Q1 MTC calcitonin monitoring.',
  },
  {
    phase: 'April',
    title: 'Post-Thyroidectomy Hypoparathyroidism Review',
    tasks: 'Complete annual post-thyroidectomy hypoparathyroidism protocol review. Document iPTH monitoring compliance (iPTH <10 pg/mL = permanent hypoparathyroidism). Review calcium supplementation protocols. Schedule annual neck ultrasound for all DTC patients (6–12 months post-RAI cohort). Review RET mutation testing compliance for MTC.',
  },
  {
    phase: 'May',
    title: 'RAI Eligibility & Post-Therapy Imaging',
    tasks: 'Complete Q2 RAI eligibility documentation for intermediate/high-risk DTC patients. Review diagnostic I-123 WBS scheduling for post-ablation cohort. Document 18F-FDG PET/CT scheduling for RAI-refractory DTC (loss of RAI uptake). Complete Q2 MTC calcitonin and CEA monitoring. Review BRAF V600E / RAS molecular testing documentation.',
  },
  {
    phase: 'June',
    title: 'Q2 Treatment Response & MDT Review',
    tasks: 'Complete Q2 ATA treatment response classification documentation — excellent, biochemical incomplete, structural incomplete, indeterminate. Submit Q2 NCDB case data. Review Q2 MDT tumor board documentation rate. Document Q2 RECIST 1.1 for lenvatinib/sorafenib patients. Audit neck ultrasound scheduling compliance.',
  },
  {
    phase: 'July',
    title: 'ATA Annual Meeting & CE Requirements',
    tasks: 'Attend ATA Annual Meeting — complete CE requirements. Collect updated RAI dosimetry protocols, lenvatinib/sorafenib sequencing evidence, NTRK inhibitor updates for fusion-positive TC. Update thyroid cancer center protocols. Complete annual NCI thyroid cancer registry data submission. Review MEN2 prophylactic thyroidectomy timing guidelines.',
  },
  {
    phase: 'August',
    title: 'Hereditary Thyroid Cancer Surveillance Review',
    tasks: 'Complete annual RET mutation carrier surveillance protocol compliance — prophylactic thyroidectomy timing (MEN2A: age 5, MEN2B: age 6 months), annual calcitonin, annual calcium/PTH for MEN2A. Review annual FNMTC (familial non-medullary TC) surveillance. Document cascade genetic testing for RET carriers. Review annual parathyroid surveillance for MEN2A.',
  },
  {
    phase: 'September',
    title: 'Q3 Imaging & Surgery Outcomes Review',
    tasks: 'Complete Q3 neck ultrasound scheduling audit. Review annual thyroidectomy complication rate documentation — permanent hypoparathyroidism (target <2%), RLN injury (target <1%). Document liver-directed therapy outcomes for hepatic metastatic DTC. Complete Q3 NCDB case submissions. Review palliative care integration rate for ATC.',
  },
  {
    phase: 'October',
    title: 'Lenvatinib/Sorafenib & Systemic Therapy Review',
    tasks: 'Complete annual lenvatinib (Lenvima) VEGFR monitoring protocol review — hypertension (BP target <140/90 mmHg), proteinuria (UPC ratio ≥3.5 → hold), fistula risk. Complete annual sorafenib cardiac monitoring protocol. Document NTRK inhibitor (larotrectinib/entrectinib) eligibility for NTRK fusion-positive TC. Review cabozantinib protocol for progressive MTC.',
  },
  {
    phase: 'November',
    title: 'CoC Accreditation & Annual Quality Review',
    tasks: 'Complete biennial CoC thyroid cancer program accreditation standards review. Submit NCDB Q3 thyroid case data. Review annual AHNS quality benchmarks — completion thyroidectomy timing, RAI ablation within 6 months. Document annual ATA-QI registry data submission. Review permanent hypoparathyroidism and RLN injury rates.',
  },
  {
    phase: 'December',
    title: 'Annual Report & Registry Final Audit',
    tasks: 'Compile annual thyroid cancer program quality report — RAI compliance, TSH suppression rates, Tg surveillance adherence, MDT documentation rate, surgical complication rates, NCDB completeness. Submit Q4 ATA-QI/NCDB data. Update ATA risk-adapted treatment algorithms for next year. Review molecular testing documentation completeness.',
  },
]

const kpis = [
  { metric: '≥90%', label: 'NCDB Thyroid Case Completeness' },
  { metric: '<2%', label: 'Permanent Hypoparathyroidism Rate' },
  { metric: '<1%', label: 'Recurrent Laryngeal Nerve Injury Rate' },
  { metric: '100%', label: 'ATA Risk Stratification Documentation' },
  { metric: 'Annual', label: 'Neck Ultrasound Compliance (ATA)' },
  { metric: '100%', label: 'RET Testing Compliance — All MTC' },
]

const testimonial = {
  quote: 'Thyroid cancer center compliance requires ATA guideline annual reviews, RAI radiation safety training, NRC license compliance, quarterly TSH suppression monitoring, quarterly thyroglobulin and anti-TgAb trending, annual neck ultrasound scheduling, post-thyroidectomy hypoparathyroidism protocols, NCDB case completeness audits, RET mutation surveillance for MTC, lenvatinib/sorafenib toxicity monitoring, and annual AHNS quality benchmarks — all simultaneously. Momenties consolidated every deadline. Our center achieved ≥90% NCDB completeness and permanent hypoparathyroidism rates well below the 2% benchmark.',
  author: 'Medical Director, Thyroid Cancer Program',
  role: 'ATA-Member Center, Academic Endocrine Surgery Program',
}

export default function ThyroidCancerCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Thyroid Cancer Center Calendar"
        title="Every RAI Safety Deadline. Every TSH Suppression Audit. One Calendar."
        subtitle="Thyroid cancer programs manage one of the most protocol-intensive compliance portfolios in endocrine oncology — RAI radiation safety annual training, NRC license compliance, quarterly TSH suppression monitoring, quarterly thyroglobulin and anti-TgAb trending, annual neck ultrasound scheduling, post-thyroidectomy hypoparathyroidism protocols, ATA risk-stratified surveillance, RET mutation-based MTC hereditary programs, and NCDB case completeness. Momenties automates every deadline so your center achieves top-quartile differentiated thyroid cancer outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Thyroid Cancer Center Compliance Lifecycle
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
              The Thyroid Cancer Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every RAI safety deadline, TSH suppression audit, thyroglobulin surveillance review, hereditary MTC protocol, and ATA accreditation milestone — sequenced across 12 months.
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
              The 6 KPIs That Define Thyroid Cancer Center Excellence
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
        headline="Ready to Achieve Top-Quartile Thyroid Cancer Program Quality?"
        subtext="Join thyroid cancer programs using Momenties to automate every RAI safety, TSH surveillance, and ATA compliance deadline. Free to start."
      />
    </main>
  )
}
