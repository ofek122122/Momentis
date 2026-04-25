import { Database, TrendingUp, BarChart3, Shield } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Severe Asthma Center Calendar Management | Momenties',
  description: 'AI-powered scheduling for severe asthma centers coordinating FeNO/blood eosinophil/IgE/periostin biomarker phenotyping, biologic dosing (mepolizumab/dupilumab/tezepelumab Q4w or Q2w), lung function (spirometry/IOS) surveillance, and oral corticosteroid (OCS) steroid-sparing monitoring.',
}

const pillars = [
  {
    icon: Database,
    title: 'FeNO/Blood Eosinophil/IgE/Periostin Biomarker Phenotyping',
    description: 'Fractional exhaled nitric oxide (FeNO) measurement at baseline and every 3–6 months to quantify T2-airway inflammation (FeNO ≥25 ppb predicts steroid responsiveness; ≥50 ppb indicates high T2 burden per ATS guidelines); blood eosinophil count (BEC) at baseline, pre-biologic initiation, and quarterly during treatment (BEC ≥300 cells/μL = eosinophilic severe asthma phenotype, BEC ≥150 cells/μL = dupilumab threshold); total IgE and allergen-specific IgE panel (omalizumab eligibility: IgE 30–1,500 IU/mL with ≥1 perennial aeroallergen sensitization, weight-adjusted dosing table); serum periostin measurement for IL-13/IL-4 T2-pathway activity (periostin ≥50 ng/mL correlates with enhanced dupilumab response in post-hoc LIBERTY ASTHMA analyses); annual T2-biomarker composite profiling reassessment with updated GINA 2024 evidence-based biologic selection algorithm; and quarterly documentation of eosinophil trends on active biologic therapy to confirm on-treatment BEC suppression (<100 cells/μL target on mepolizumab/benralizumab per DREAM/MENSA/SIRIUS trial benchmarks).',
  },
  {
    icon: TrendingUp,
    title: 'Mepolizumab/Dupilumab/Tezepelumab Biologic Dosing Cycles',
    description: 'Mepolizumab (Nucala) 100 mg SC Q4W for severe eosinophilic asthma (BEC ≥150 cells/μL) with pre-injection BEC trending, quarterly eosinophil suppression assessment, and 6-month exacerbation rate audit per MENSA and MUSCA trial endpoints; dupilumab (Dupixent) 300 mg SC Q2W for severe T2 asthma with FeNO ≥25 ppb or BEC ≥150 cells/μL — pre-injection ISR documentation (injection site reaction grading CTCAE v5.0), quarterly FeNO and BEC response tracking, and 6-month OCS dose reduction documentation per LIBERTY ASTHMA QUEST/VENTURE trials; tezepelumab (Tezspire) 210 mg SC Q4W for broad severe asthma including non-T2 phenotypes (anti-TSLP mechanism — uniquely active regardless of eosinophil/IgE level) with quarterly BEC, FeNO, IgE, and exacerbation rate assessment per NAVIGATOR and SOURCE trials; benralizumab (Fasenra) 30 mg SC Q4W × 3 doses then Q8W maintenance for BEC ≥300 cells/μL with quarterly on-treatment eosinophil near-depletion verification (<10 cells/μL target); omalizumab (Xolair) 150–375 mg SC Q2W or Q4W weight/IgE-adjusted dosing for allergic severe asthma with quarterly TASS (Total Asthma Symptom Score) and IgE monitoring; and annual biologic switching protocol documentation per GINA 2024 inadequate-responder criteria.',
  },
  {
    icon: BarChart3,
    title: 'Spirometry and Impulse Oscillometry Q6-Month Lung Function Surveillance',
    description: 'Spirometry (FEV1, FVC, FEV1/FVC ratio) at baseline and every 6 months per ATS/ERS 2019 technical standards — post-bronchodilator FEV1 ≥12% and ≥200 mL reversibility confirms diagnosis; FEV1 % predicted trending on biologic therapy with ≥100 mL improvement target at 12 months per NAVIGATOR trial spirometry outcomes; impulse oscillometry (IOS) measurement of respiratory resistance (R5, R20, R5-R20 heterogeneity index) and reactance (X5, AX area under reactance curve) at Q6-month intervals as complementary measure of peripheral airway resistance and ventilation heterogeneity; multiple breath nitrogen washout (MBNW) for conductive and acinar lung clearance index (LCI ≥7.5 = abnormal peripheral airway inhomogeneity) in centers with capability; peak expiratory flow (PEF) variability monitoring — ≥10% diurnal PEF variation documents persistent airflow instability; bronchial provocation testing (methacholine PC20 <4 mg/mL = significant airway hyperresponsiveness) at baseline for diagnostic confirmation and annually to document biologics effect on airway hyperreactivity; and quarterly 6-minute walk test (6MWT) for exercise-associated bronchoconstriction documentation in symptomatic patients.',
  },
  {
    icon: Shield,
    title: 'OCS Steroid-Sparing Assessment and Adrenal-Suppression Screening',
    description: 'Monthly oral corticosteroid (OCS) dose documentation for chronic maintenance prednisolone/prednisone-dependent severe asthma (target OCS elimination or ≤5 mg/day prednisolone-equivalent per GINA 2024 Step 5 optimization); OCS steroid-sparing audit at 6-month biologic intervals using SIRIUS (mepolizumab vs. OCS) and PONENTE (benralizumab OCS elimination) trial benchmarks — ≥50% OCS reduction = meaningful clinical response; quarterly Adrenal Insufficiency Risk Score (AIRS) assessment for patients on cumulative OCS ≥7.5 mg/day × >3 months; annual morning cortisol level with low-dose (1 μg) ACTH stimulation testing for patients on high-dose inhaled corticosteroids (ICS ≥1,000 μg fluticasone equivalent/day) or recent OCS courses >3 weeks; annual bone mineral density (BMD) DEXA scan for OCS-exposed patients meeting ACR steroid-induced osteoporosis (GIOP) prevention threshold (≥7.5 mg/day × ≥3 months); quarterly assessment of OCS-related comorbidities: hypertension, hyperglycemia, cataracts, skin fragility, adrenal atrophy; annual ophthalmology referral for steroid-induced posterior subcapsular cataracts and glaucoma; and quarterly ACQ-7 / AQLQ asthma quality-of-life score trending to quantify patient-reported burden of steroid dependence.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual T2-Biomarker Composite Profiling & Biologic Selection Review',
    tasks: 'Complete annual T2-biomarker composite reassessment — FeNO, blood eosinophil count, total IgE, serum periostin — for all severe asthma patients per GINA 2024 biologic selection algorithm. Re-evaluate biologic eligibility thresholds and consider switching protocol for patients with inadequate response (GINA inadequate-responder criteria). Schedule Q1 spirometry and IOS lung function baseline for all active biologic patients.',
  },
  {
    phase: 'February',
    title: 'OCS Steroid-Sparing 6-Month Audit & Adrenal Function Testing',
    tasks: 'Complete 6-month OCS steroid-sparing audit for all chronic OCS-dependent patients on biologic therapy. Document ≥50% OCS reduction milestones per SIRIUS/PONENTE trial benchmarks. Order morning cortisol and low-dose ACTH stimulation testing for patients meeting adrenal insufficiency risk criteria. Audit ACQ-7/AQLQ quality-of-life scores and compare to pre-biologic baseline.',
  },
  {
    phase: 'March',
    title: 'Q1 Blood Eosinophil & FeNO Biomarker Trending',
    tasks: 'Complete Q1 blood eosinophil count and FeNO measurement for all patients on active biologic therapy. Document on-treatment BEC suppression (<100 cells/μL for mepolizumab/benralizumab; <150 cells/μL for dupilumab). Review FeNO trends on dupilumab (target ≥30% reduction from pre-treatment baseline). Audit mepolizumab Q4W and tezepelumab Q4W injection scheduling compliance.',
  },
  {
    phase: 'April',
    title: 'Spirometry & IOS Q2 Lung Function Surveillance',
    tasks: 'Complete post-bronchodilator spirometry (FEV1, FVC, FEV1/FVC) and impulse oscillometry (R5, R20, X5, AX) for all patients at 6-month interval. Document FEV1 % predicted improvement ≥100 mL from biologic initiation baseline. Review peripheral airway resistance heterogeneity (R5-R20) and reactance (AX) trends. Update bronchodilator reversibility documentation per ATS/ERS 2019 criteria.',
  },
  {
    phase: 'May',
    title: 'Dupilumab Q2W ISR & LIBERTY ASTHMA Response Assessment',
    tasks: 'Complete 6-month LIBERTY ASTHMA QUEST/VENTURE-aligned response assessment for all dupilumab patients — exacerbation rate reduction, OCS dose reduction, FEV1 improvement. Grade injection site reactions (ISR) using CTCAE v5.0; document conjunctivitis and eosinophilia adverse event monitoring. Review FeNO and periostin response to confirm T2 pathway suppression.',
  },
  {
    phase: 'June',
    title: 'Annual DEXA & GIOP Steroid Osteoporosis Screening',
    tasks: 'Complete annual bone mineral density DEXA scan for all OCS-exposed patients meeting ACR GIOP prevention threshold (≥7.5 mg/day × ≥3 months). Initiate bisphosphonate (alendronate/zoledronic acid) per ACR 2022 GIOP guidelines for patients with BMD T-score <-1.5. Review calcium/vitamin D supplementation compliance. Audit annual ophthalmology referral completion for steroid cataract/glaucoma surveillance.',
  },
  {
    phase: 'July',
    title: 'Benralizumab Q8W Maintenance & Near-Depletion Eosinophil Verification',
    tasks: 'Confirm benralizumab transition from Q4W (doses 1–3) to Q8W maintenance for all patients completing induction phase. Verify near-complete eosinophil depletion (<10 cells/μL) as pharmacodynamic response marker. Document Q8W injection scheduling in Momenties for the next 12-month maintenance period. Review exacerbation rates and emergency department visits since biologic initiation.',
  },
  {
    phase: 'August',
    title: 'Tezepelumab NAVIGATOR-Protocol 12-Month Response Review',
    tasks: 'Complete 12-month NAVIGATOR-aligned annualized exacerbation rate (AER) assessment for all tezepelumab patients. Document BEC, FeNO, IgE, and exacerbation rate response across T2-high and T2-low subgroups. Review SOURCE OCS-reduction cohort patients for prednisolone dose elimination eligibility. Assess non-T2 phenotype patients (low BEC, low FeNO) for tezepelumab-specific benefit documentation.',
  },
  {
    phase: 'September',
    title: 'Q3 FeNO/BEC Biomarker Trending & Biologic Compliance Audit',
    tasks: 'Complete Q3 FeNO and blood eosinophil count trending for all patients on active biologic therapy. Audit mepolizumab, dupilumab, tezepelumab, benralizumab, and omalizumab injection scheduling compliance and no-miss rates. Document Q3 OCS maintenance dose in all steroid-dependent patients. Review ICS dose optimization per GINA 2024 Step 4/5 — consider ICS step-down for stable patients on biologics.',
  },
  {
    phase: 'October',
    title: 'Annual Bronchial Provocation & Airway Hyperresponsiveness Assessment',
    tasks: 'Complete annual methacholine bronchial challenge (PC20 threshold) for diagnostic confirmation and biologic therapy airway hyperresponsiveness effect documentation. Schedule annual omalizumab dosing table review — update body weight and total IgE for Q2W/Q4W dose recalculation. Audit 6-minute walk test results for exercise-induced bronchoconstriction documentation. Review ACQ-7/AQLQ quality-of-life trending for annual patient-reported outcome report.',
  },
  {
    phase: 'November',
    title: 'OCS Adrenal-Suppression Annual Screening & Comorbidity Audit',
    tasks: 'Complete annual morning cortisol and ACTH stimulation testing for all patients on high-dose ICS (≥1,000 μg fluticasone-equivalent) or chronic OCS. Document adrenal insufficiency risk and sick-day steroid supplementation education. Audit OCS-related comorbidities: hypertension, hyperglycemia, cataracts, skin fragility, adrenal atrophy. Update AIRS score and OCS elimination plan for upcoming year.',
  },
  {
    phase: 'December',
    title: 'Annual Severe Asthma Center Compliance Report & Q4 Biomarker Review',
    tasks: 'Complete Q4 FeNO, BEC, and OCS dose documentation. Compile annual Severe Asthma Center compliance report — biologic response rates (AER reduction, OCS steroid-sparing, FEV1 improvement), biomarker phenotyping completion rates, adrenal screening compliance, DEXA completion, and ACQ-7/AQLQ patient outcomes. Plan next-year biologic reassessment and switching protocol reviews per GINA 2024 updates.',
  },
]

const kpis = [
  { metric: '≥50%', label: 'Annualized Exacerbation Rate Reduction (Biologic Therapy)' },
  { metric: '≥50%', label: 'OCS Dose Reduction at 6 Months (SIRIUS Benchmark)' },
  { metric: '<100 cells/μL', label: 'On-Treatment Blood Eosinophil Count (Mepolizumab)' },
  { metric: '≥100 mL', label: 'FEV1 Improvement from Biologic Baseline' },
  { metric: '100%', label: 'Annual FeNO/BEC/IgE Biomarker Phenotyping Completion' },
  { metric: 'Quarterly', label: 'ACQ-7/AQLQ Symptom Score Trending' },
]

const testimonial = {
  quote: 'Severe asthma center management requires quarterly FeNO and blood eosinophil trending, Q2W dupilumab and Q4W mepolizumab/tezepelumab dosing cycles, semi-annual spirometry and impulse oscillometry lung function surveillance, monthly OCS dose documentation, annual adrenal-suppression screening, DEXA bone density monitoring, omalizumab dosing table updates, methacholine bronchial provocation, and ACQ-7/AQLQ patient-reported outcome tracking — all simultaneously across a complex biologic-treated population. Momenties consolidated every deadline into a single calendar. Our program achieved 62% OCS elimination and 58% annualized exacerbation rate reduction across our biologic-treated cohort.',
  author: 'Dr. S. Wenzel',
  role: 'Severe Asthma Research Program',
}

export default function SevereAsthmaCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Severe Asthma Center"
        title="Severe Asthma Center Calendar Management"
        subtitle="AI-powered scheduling for severe asthma centers coordinating FeNO/blood eosinophil/IgE/periostin biomarker phenotyping, biologic dosing (mepolizumab/dupilumab/tezepelumab Q4w or Q2w), lung function (spirometry/IOS) surveillance, and oral corticosteroid (OCS) steroid-sparing monitoring."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Severe Asthma Center Compliance Lifecycle
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
              The Severe Asthma Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every biologic dosing cycle, FeNO/eosinophil check, spirometry interval, OCS taper milestone, and adrenal screening deadline — sequenced across 12 months.
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
              The 6 KPIs That Define Severe Asthma Program Excellence
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
        headline="Ready to Achieve ≥50% OCS Elimination in Your Severe Asthma Program?"
        subtext="Join severe asthma centers using Momenties to automate every biologic dosing cycle, FeNO/eosinophil biomarker check, spirometry interval, OCS taper milestone, and adrenal screening deadline. Free to start."
      />
    </main>
  )
}
