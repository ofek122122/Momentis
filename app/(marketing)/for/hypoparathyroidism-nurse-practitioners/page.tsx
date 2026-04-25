import { Shield, Clock, BarChart3, Users2, BookOpen, Heart } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Hypoparathyroidism Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate ANCC endocrinology NP renewal, hypoparathyroidism PTH/calcium/phosphorus monitoring CE, natpara (PTH 1-84) REMS prescriber compliance, calcitriol titration cycle tracking, 24-hour urine calcium deadlines, renal function surveillance, DEXA scheduling, and Endocrine Society guideline CE for hypoparathyroidism nurse practitioners.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Endocrinology NP Credentials & ANCC Certification',
    description: 'ANCC Family Nurse Practitioner (FNP-BC) or Adult-Gerontology Primary Care (AGPCNP-BC) 5-year renewal — 1,000 clinical practice hours plus 75 CE credits (25 pharmacology) required for endocrine subspecialty practice including hypoparathyroidism, calcium metabolism disorders, and metabolic bone disease management; AAENP (American Association of Endocrine Nurses and Practitioners) annual membership and endocrinology-specific CE allocation; annual Endocrine Society annual meeting hypoparathyroidism and calcium/phosphorus metabolism session CE (ENDO conference, typically June); biennial AACE (American Association of Clinical Endocrinologists) Clinical Congress endocrine NP CE; annual natpara REMS prescriber re-enrollment and osteosarcoma risk counseling documentation; collaborative practice agreement renewal with endocrinologist for calcitriol, calcium carbonate/citrate, natpara (PTH 1-84), thiazide diuretics, and magnesium supplementation prescribing authority; and biennial state NP prescriptive authority renewal for Schedule V and non-controlled endocrine medications.',
  },
  {
    icon: Clock,
    title: 'Natpara REMS Compliance & Titration Protocol',
    description: 'Natpara (PTH 1-84) REMS program NP obligations — prescriber enrollment renewal, patient enrollment and osteosarcoma risk counseling at every visit (documented in REMS registry), pharmacy outreach to confirm enrolled dispensing pharmacy; natpara 50–100 mcg SC once daily titration protocol NP responsibilities — weekly serum albumin-corrected calcium during dose adjustment periods (first 3 months), bi-weekly during stable maintenance; titration decision-making: increase natpara 25 mcg q2–4 weeks if albumin-corrected calcium <7.5 mg/dL on current dose; hold natpara and reduce if calcium >9 mg/dL; simultaneous calcitriol dose reduction 50% at natpara initiation per label to prevent additive hypercalcemia; monthly magnesium monitoring (Mg2+ target >0.8 mmol/L — hypomagnesemia blunts natpara efficacy); monthly LFT and 25-OH vitamin D trending; and annual DEXA bone density scan ordering with T-score and Z-score documentation for natpara osteosarcoma surveillance and BMD tracking.',
  },
  {
    icon: BarChart3,
    title: 'Calcium, Phosphorus & 24-Hour Urine Monitoring',
    description: 'Hypoparathyroidism NP-managed biochemical surveillance — albumin-corrected serum calcium (target 8–9 mg/dL on calcitriol; physiologically normal range avoided to minimize hypercalciuria): weekly during dose titration, monthly once stable; serum phosphorus (target 2.5–4.5 mg/dL): monthly during titration, quarterly stable; calcium-phosphorus product documentation (<55 mg²/dL² threshold for soft tissue calcification risk); ionized calcium every 6 months (or if albumin abnormal); 24-hour urine calcium (target <300 mg/day men, <250 mg/day women): quarterly in first year of therapy, then semi-annually once stable; urine calcium-to-creatinine ratio (spot urine) monthly as surrogate marker; thiazide diuretic initiation NP decision criteria: urine calcium >300 mg/day on adequate calcitriol + calcium supplementation + normal eGFR; monthly sodium, potassium, and magnesium if thiazide initiated; and quarterly Endocrine Society hypoparathyroidism monitoring checklist completion per 2022 guidelines.',
  },
  {
    icon: Users2,
    title: 'Renal Surveillance, Patient Education & Quality-of-Life Tracking',
    description: 'Hypoparathyroidism NP renal and long-term complication management — quarterly eGFR, serum creatinine, and BUN for CKD surveillance (calcitriol nephrotoxicity risk); annual renal ultrasound ordering, nephrocalcinosis grading documentation, and nephrology co-management initiation for eGFR <60 mL/min; annual ophthalmology referral for posterior subcapsular cataracts (calcitriol-associated, 5-year cumulative incidence ~25%); brain CT or MRI order every 2–3 years for basal ganglia calcification (Fahr syndrome) in symptomatic patients; annual APS-1 surveillance for autoimmune hypoparathyroidism patients (adrenal insufficiency, candidiasis, autoimmune hepatitis screening); annual 22q11.2 DiGeorge patient cardiac and developmental monitoring coordination; HPQ (Hypoparathyroidism Patient Questionnaire) administration at every visit for quality-of-life tracking; hypocalcemia emergency action plan renewal and Chvostek/Trousseau sign documentation; and IV calcium gluconate protocol education for acute hypocalcemic crisis management.',
  },
]

const studies = [
  {
    title: 'REPLACE Trial (Natpara Phase III, PTH 1-84) — JCEM 2013',
    finding: 'Phase III randomized trial of 134 patients with chronic hypoparathyroidism showed natpara (PTH 1-84) achieved the primary endpoint (≥50% reduction in oral calcitriol and calcium with maintained albumin-corrected calcium ≥7.5 mg/dL) in 53% of patients vs. 2% placebo (P<0.001). Urinary calcium excretion decreased by 40% vs. placebo, and BMD increased significantly at lumbar spine and femoral neck over 24 weeks.',
    implication: 'NPs initiating natpara must reduce calcitriol dose by 50% at start of therapy per REPLACE protocol, document weekly serum calcium for first 8 weeks, target albumin-corrected calcium 8–9 mg/dL (not normal range), and monitor 24-hour urine calcium quarterly — renal protection is a co-primary goal. REMS program counseling must be completed at the initiation visit and documented at every subsequent encounter.',
  },
  {
    title: 'PARADIGHM Trial (Palopegteriparatide Phase III) — NEJM 2023',
    finding: 'Phase III trial of 84 patients with chronic hypoparathyroidism showed TransCon PTH (palopegteriparatide) 18 mcg SC once-daily achieved the composite endpoint (albumin-corrected calcium within normal range without calcitriol or calcium supplementation) in 79% of patients at Week 26 vs. 5% placebo (P<0.0001). All patients achieved normal PTH replacement; urinary calcium remained within normal limits in >90% of responders.',
    implication: 'Hypoparathyroidism NPs must stay current with emerging PTH replacement therapies. Palopegteriparatide (YORVIPATH, FDA-approved 2024) offers once-daily SC dosing without REMS but still requires weekly serum calcium during titration, calcitriol/calcium tapering protocol, and 24-hour urine calcium surveillance. PARADIGHM results now inform updated AACE and Endocrine Society treatment algorithm CE.',
  },
  {
    title: 'Post-Surgical Hypoparathyroidism Natural History — JCEM 2019 (PARAT Study)',
    finding: 'Retrospective cohort of 1,091 post-thyroidectomy hypoparathyroidism patients followed for median 6.2 years showed 75% persistent (>12 months) hypoparathyroidism, 37% nephrocalcinosis incidence, 24% renal stones, 18% renal insufficiency, and >2-fold increased risk of CKD vs. controls. Calcium-phosphorus product >40 mg²/dL² correlated strongly with nephrocalcinosis progression.',
    implication: 'NPs managing post-surgical hypoparathyroidism must initiate annual renal ultrasound protocols from Year 1, document calcium-phosphorus product at every visit (target <40 mg²/dL²), and refer to nephrology for eGFR <60 or nephrocalcinosis Grade II–III. PARAT data supports aggressive thiazide diuretic initiation (urine Ca >250 mg/day in women) and quarterly monitoring to delay CKD progression.',
  },
  {
    title: 'Quality of Life in Hypoparathyroidism — JCEM 2018 (HPQ Validation)',
    finding: 'HPQ (Hypoparathyroidism Patient Questionnaire) validation in 374 patients showed significant quality-of-life impairment — cognitive dysfunction in 68%, fatigue in 79%, paresthesias in 71%, and emotional distress in 57% — independent of biochemical calcium levels, suggesting CNS effects beyond hypocalcemia alone. Natpara therapy improved HPQ scores by 15–20 points vs. conventional calcitriol therapy.',
    implication: 'NPs must administer the HPQ at every scheduled visit and document scores longitudinally. Poor HPQ scores despite normal calcium (8–9 mg/dL) may indicate natpara candidacy or require neuropsychiatric co-management. Baseline and post-natpara initiation HPQ comparison at 6 months and 12 months documents treatment response beyond biochemical parameters — critical for REMS registry quality metrics.',
  },
  {
    title: 'Basal Ganglia Calcification in Hypoparathyroidism — EJE 2020',
    finding: 'Cross-sectional study of 185 chronic hypoparathyroidism patients showed basal ganglia calcification (BGC) prevalence of 44% on brain CT, with disease duration >10 years (OR 3.2), mean serum phosphorus >4.5 mg/dL (OR 2.7), and calcium-phosphorus product >55 mg²/dL² (OR 4.1) as independent predictors. BGC correlated with cognitive test performance (MMSE reduction 2.1 points) and depressive symptom burden.',
    implication: 'NPs must maintain serum phosphorus <4.5 mg/dL and calcium-phosphorus product <55 mg²/dL² as primary quality metrics to reduce Fahr syndrome risk. Brain CT or MRI every 2–3 years in patients with disease duration >5 years is now recommended in updated guidelines. Annual MMSE or MoCA cognitive screening for patients with documented BGC; refer to neurology for symptomatic BGC with functional impairment.',
  },
]

const schedule = [
  {
    frequency: 'Every 5 Years',
    item: 'ANCC FNP-BC or AGPCNP-BC Renewal',
    details: 'American Nurses Credentialing Center NP renewal — 1,000 clinical practice hours + 75 CE credits (25 pharmacology CE required); includes endocrinology and calcium metabolism CE allocation for hypoparathyroidism subspecialty practice.',
  },
  {
    frequency: 'Annual',
    item: 'Natpara REMS Prescriber Re-Enrollment',
    details: 'Natpara (PTH 1-84) REMS program annual prescriber re-enrollment and osteosarcoma risk counseling documentation update. Must be completed before next patient REMS attestation cycle. Confirm enrolled dispensing pharmacy status for all active natpara patients.',
  },
  {
    frequency: 'Annual',
    item: 'Endocrine Society Annual Meeting (ENDO) CE',
    details: 'Required attendance for hypoparathyroidism, calcium/phosphorus metabolism, and PTH replacement CE. Updated AACE/Endocrine Society 2022 hypoparathyroidism management guideline CE; 15–20 CE credits available per conference.',
  },
  {
    frequency: 'Weekly (Titration)',
    item: 'Natpara/Palopegteriparatide Serum Calcium Check',
    details: 'Albumin-corrected serum calcium weekly during natpara or palopegteriparatide dose titration (first 8–12 weeks). Target 8–9 mg/dL. Dose-reduce or hold if calcium >9 mg/dL; increase by 25 mcg q2–4 weeks if <7.5 mg/dL with symptoms.',
  },
  {
    frequency: 'Monthly',
    item: 'Serum Calcium, Phosphorus & Magnesium Panel',
    details: 'Albumin-corrected calcium, inorganic phosphorus, serum magnesium, and 25-OH vitamin D monthly during active calcitriol or natpara titration; quarterly once stable. Document calcium-phosphorus product (<55 mg²/dL² target) at each interval.',
  },
  {
    frequency: 'Quarterly',
    item: '24-Hour Urine Calcium Collection',
    details: 'Quarterly 24-hour urine calcium for all patients on calcitriol — target <300 mg/day (men) or <250 mg/day (women). Initiate thiazide diuretic for persistent hypercalciuria. Semi-annually once stable on optimized therapy. Document compliance and results in monitoring log.',
  },
  {
    frequency: 'Annual',
    item: 'DEXA Bone Density Scan',
    details: 'Annual DEXA at lumbar spine, hip, and distal radius for all chronic hypoparathyroidism patients — T-score and Z-score trending, vertebral fracture assessment (VFA), FRAX fracture risk. Compare prior year for natpara BMD response. Refer to metabolic bone specialist if T-score < −2.5.',
  },
  {
    frequency: 'Annual',
    item: 'Renal Ultrasound & Nephrology Review',
    details: 'Annual renal ultrasound for nephrocalcinosis (Grade I–III) and nephrolithiasis detection in all calcitriol patients ≥1 year. Initiate nephrology co-management for eGFR <60 mL/min or nephrocalcinosis Grade II–III. Document calcium-phosphorus product trend.',
  },
  {
    frequency: 'Annual',
    item: 'Ophthalmology Referral (Posterior Subcapsular Cataracts)',
    details: 'Annual slit-lamp ophthalmology referral for all patients on calcitriol ≥1 year — posterior subcapsular cataract surveillance (25% cumulative incidence at 5 years). Document lens clarity grading (LOCS III). Referral to ophthalmologist for surgical planning if visual acuity affected.',
  },
  {
    frequency: 'Every Visit',
    item: 'HPQ Quality-of-Life Assessment & Chvostek/Trousseau',
    details: 'Hypoparathyroidism Patient Questionnaire (HPQ) at every scheduled visit for cognitive, fatigue, paresthesia, and emotional domain scoring. Document Chvostek (facial nerve tap) and Trousseau (carpal spasm with BP cuff) sign status. Review hypocalcemia emergency action plan annually.',
  },
]

export default function HypoparathyroidismNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Hypoparathyroidism Nurse Practitioners"
        title="Every Certification. Every Calcium Panel. Every REMS Deadline."
        subtitle="Hypoparathyroidism NPs co-manage one of endocrinology's most monitoring-intensive conditions — ANCC credential renewals, weekly calcium checks during natpara titration, quarterly 24-hour urine calcium collections, annual renal ultrasounds, DEXA bone density scheduling, natpara REMS compliance, ophthalmology referrals, and HPQ quality-of-life tracking. Momenties consolidates every certification renewal, monitoring interval, and REMS attestation into one calendar so nothing slips through the cracks."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Hypoparathyroidism NP Practice
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

      {/* Evidence Base */}
      <Reveal>
        <section style={{ background: '#0a0a0d', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
              The Evidence Base Driving Hypoparathyroidism NP Compliance
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {studies.map((s) => (
                <div key={s.title} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '28px 32px' }}>
                  <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.9rem', marginBottom: 12 }}>{s.title}</div>
                  <p style={{ color: '#f0ece3', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: 10 }}><strong>Finding:</strong> {s.finding}</p>
                  <p style={{ color: '#a0998e', fontSize: '0.92rem', lineHeight: 1.65 }}><strong>NP Implication:</strong> {s.implication}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* CE Schedule */}
      <Reveal>
        <section style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
              Hypoparathyroidism NP Certification & Monitoring Schedule
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {schedule.map((item) => (
                <div key={item.item} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 20, background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '20px 24px', alignItems: 'start' }}>
                  <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{item.frequency}</div>
                  <div>
                    <div style={{ color: '#f0ece3', fontWeight: 600, fontSize: '0.95rem', marginBottom: 4 }}>{item.item}</div>
                    <div style={{ color: '#a0998e', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.details}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Achieve ≥85% Calcium Target Achievement in Hypoparathyroidism?"
        subtext="Momenties consolidates ANCC credential renewals, weekly natpara titration calcium checks, quarterly 24-hour urine calcium deadlines, annual DEXA and renal ultrasound scheduling, natpara REMS attestations, and HPQ quality-of-life tracking into one accountable calendar — so every monitoring interval and compliance milestone is on time, every cycle."
      />
    </main>
  )
}
