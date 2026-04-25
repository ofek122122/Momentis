import { BookOpen, BarChart3, Heart, UserCheck } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'NASH Nurse Practitioner Scheduling Guide | Momenties',
  description: 'Scheduling infrastructure for NPs managing resmetirom adherence counseling, FIB-4/fibroscan trending, cardiovascular risk-factor optimization, and liver biopsy coordination in NASH/MASH clinics.',
}

const pillars = [
  {
    icon: BookOpen,
    title: 'Resmetirom Initiation Teaching & Thyroid/Lipid/ALT Monitoring',
    description: 'Structured resmetirom (Rezdiffra) initiation counseling protocol for NPs — patient education on FDA-approved March 2024 indication (NASH/MASH with moderate-to-advanced fibrosis F2–F3), 80 mg vs. 100 mg weight-based dosing, daily oral administration, and common adverse effects (diarrhea, nausea, pruritus in ~20% patients); baseline documentation checklist — TSH, free T4, fasting lipid panel, ALT/AST, body weight, and absence of decompensated cirrhosis; monthly ALT/AST monitoring for first 3 months with clear hold criteria (ALT >3x ULN with symptoms or >5x ULN regardless of symptoms) and dose discontinuation protocol; quarterly TSH surveillance for hypothyroid signal during ongoing therapy; 3-month and 6-month fasting lipid panel documentation for LDL-C reduction (12–16% expected) and triglyceride response (12–25% expected) as pharmacodynamic proof-of-concept; quarterly adherence counseling using motivational interviewing — pill count, pharmacy fill-rate review, and side-effect troubleshooting; annual lipid and thyroid panel at month 12; and collaborative practice agreement renewal with hepatologist for resmetirom co-management.',
  },
  {
    icon: BarChart3,
    title: 'FIB-4/Fibroscan Trending & Fibrosis-Progression Alerts',
    description: 'Semi-annual FIB-4 index recalculation (ALT, AST, platelet count, age) for all NASH/MASH patients — NP-driven trending with alert thresholds: FIB-4 <1.30 (low risk, reassure and recheck annually), 1.30–2.67 (indeterminate, order FibroScan), >2.67 (high risk, hepatology referral within 4 weeks); vibration-controlled transient elastography (FibroScan) scheduling coordination — annual for stable F0–F2 patients, semi-annual for F2–F3 on pharmacotherapy; liver stiffness measurement (LSM) trend documentation with alert protocol for ≥2 kPa increase triggering urgent hepatology review; semi-annual ELF score (Enhanced Liver Fibrosis panel) and Pro-C3 biomarker ordering for non-invasive fibrosis assessment in patients declining biopsy; annual MRI-PDFF fat fraction ordering for quantitative steatosis response on resmetirom (target ≥30% relative reduction); coordination of 12-month liver biopsy appointments for resmetirom MAESTRO-protocol patients (scheduling, pre-procedure labs, INR and platelet checks, post-procedure 4-hour monitoring); and quarterly liver chemistry panel (ALT, AST, GGT, ALP, albumin, bilirubin, INR) as surrogate response markers with NP-led result review and patient notification.',
  },
  {
    icon: Heart,
    title: 'Lifestyle-Modification Coaching (Diet/Exercise/Weight Targets)',
    description: 'Evidence-based lifestyle counseling framework for NASH NPs — AASLD/EASL guideline-concordant weight-loss targets: ≥3–5% body weight reduction for steatosis improvement, ≥7–10% for steatohepatitis and fibrosis regression; individualized Mediterranean diet counseling (reduce saturated fat, fructose, red meat; increase omega-3, olive oil, fiber) with 3-month dietary recall documentation; physical activity prescription — 150–300 min/week moderate aerobic exercise (ACSM guideline) with weekly step-count or wearable data documentation; quarterly weight, BMI, and waist circumference measurement with 5% weight-loss milestone tracking; monthly weigh-in and motivational interviewing for patients with BMI >35 or metabolic syndrome; GLP-1 RA (semaglutide 2.4 mg SC weekly, liraglutide 3 mg SC daily) initiation support and 3-month weight-loss response documentation (target ≥5% at 12 weeks); bariatric surgery referral coordination for BMI ≥40 or ≥35 with obesity-related comorbidities; alcohol cessation counseling — complete abstinence recommended for all NASH patients (AUDIT-C screening at every visit); and bi-annual dietitian co-consultation scheduling with structured report-back to NP for plan adjustment.',
  },
  {
    icon: UserCheck,
    title: 'Cardiovascular Risk-Factor & HbA1c/DEXA Coordination',
    description: 'Annual 10-year ASCVD risk score calculation (Pooled Cohort Equations) for all NASH/MASH patients — NP-led documentation with statin, ezetimibe, or PCSK9 inhibitor initiation per ACC/AHA guideline (LDL-C <70 mg/dL for ASCVD risk ≥10%); quarterly HbA1c and fasting glucose monitoring for all patients with type 2 diabetes or prediabetes on pioglitazone or GLP-1 RA — HOMA-IR trending and diabetes intensification referral criteria; annual ApoB, Lp(a), hs-CRP, and non-HDL cholesterol for residual cardiovascular risk profiling; annual blood pressure review with hypertension management per JNC 8 / ACC/AHA 2017 guidelines — ACE inhibitor or ARB preferred for NASH patients with concurrent CKD or albuminuria; UACR ordering annually for all patients with diabetes or hypertension (microalbuminuria as early renal and cardiovascular risk signal); DEXA scan coordination every 2 years for patients on pioglitazone (increased fracture risk in women) and for all NASH cirrhotics (osteoporosis prevalence ≥20%); echocardiogram scheduling every 2–3 years for patients with FIB-4 >2.67, BMI >35, or ASCVD risk >10%; and annual multidisciplinary case conference attendance with hepatology, endocrinology, cardiology, and dietitian for patients with F3–F4 fibrosis and concurrent metabolic syndrome.',
  },
]

const studies = [
  {
    title: 'MAESTRO-NASH (Resmetirom Phase 3) — NEJM 2024',
    finding: 'Randomized, double-blind, placebo-controlled phase 3 trial of 966 patients with biopsy-confirmed NASH and fibrosis stage F2–F3 treated with resmetirom 80 mg or 100 mg PO daily. At 52 weeks, NASH resolution without worsening fibrosis occurred in 25.9% (80 mg) and 29.9% (100 mg) vs. 9.7% placebo (P<0.001); ≥1-stage fibrosis improvement without worsening NASH in 24.2% and 25.9% vs. 14.2% (P<0.001). LDL-C reduced 16.3% and triglycerides 22.7% at 52 weeks.',
    implication: 'NPs co-managing resmetirom therapy must document weight-based dosing (80 mg for <100 kg, 100 mg for ≥100 kg), monthly ALT/AST for first 3 months, quarterly TSH, 3-month and 6-month fasting lipid panels, adherence counseling, and 52-week liver biopsy outcomes per MAESTRO protocol. LDL-C reduction confirmation at 3 months validates pharmacodynamic response before committing to full-year therapy.',
  },
  {
    title: 'REGENERATE (Obeticholic Acid) & Fibrosis Staging Standards — Hepatology 2020',
    finding: 'Analysis of NASH fibrosis staging standards across REGENERATE (n=931) and CENTAUR (n=320) trials established that semi-annual FIB-4 recalculation and annual FibroScan combined with liver biopsy at 18 months maximized sensitivity for ≥1-stage fibrosis improvement detection (AUC 0.81 vs. biopsy alone 0.76). FIB-4 <1.30 had 90% NPV for advanced fibrosis and could safely defer biopsy.',
    implication: 'NPs must schedule semi-annual FIB-4 recalculation for all active patients, use FIB-4 1.30–2.67 as the trigger for FibroScan referral, and reserve liver biopsy for FIB-4 >2.67 or indeterminate non-invasive biomarkers. Annual FibroScan trending provides real-time non-invasive fibrosis surveillance between planned pharmacotherapy biopsies.',
  },
  {
    title: 'SEMA-NASH (Semaglutide 2.4 mg in NASH) — NEJM 2021',
    finding: 'Phase 2, double-blind, placebo-controlled trial of 320 NASH patients treated with semaglutide 0.1–0.4 mg SC weekly showed NASH resolution in 59% (0.4 mg) vs. 17% placebo (P<0.001); no fibrosis improvement over 72 weeks (43% semaglutide vs. 33% placebo, P=0.48). Body weight reduced 13.2% in 0.4 mg group. Phase 3 ESSENCE trial ongoing with 2.4 mg dosing.',
    implication: 'NPs managing NASH patients on semaglutide for concurrent obesity or type 2 diabetes should document 3-month weight-loss response (≥5% target at 12 weeks), quarterly HbA1c, and hepatic steatosis reassessment by MRI-PDFF at 6 months. Semaglutide resolves NASH histologically but fibrosis improvement requires addition of resmetirom or pioglitazone per current evidence.',
  },
  {
    title: 'PIVENS Trial (Vitamin E/Pioglitazone in NASH) — NEJM 2010',
    finding: 'Randomized, double-blind trial of 247 non-diabetic adults with biopsy-confirmed NASH treated with vitamin E 800 IU/day or pioglitazone 30 mg/day vs. placebo for 96 weeks. Vitamin E achieved the primary endpoint (NASH resolution) in 43% vs. 19% placebo (P=0.001); pioglitazone in 34% vs. 19% (P=0.04). Both reduced ALT, lobular inflammation, and steatosis; neither significantly improved fibrosis stage.',
    implication: 'NPs managing non-diabetic NASH patients on vitamin E 800 IU/day must document quarterly ALT response, annual risk–benefit reassessment after 12 months (high-dose vitamin E increases all-cause mortality by 4% per meta-analysis for >400 IU/day), and annual lipid monitoring. Pioglitazone NPs must track quarterly HbA1c, monthly weight, annual fracture risk (FRAX), and annual bladder cancer screening per FDA label.',
  },
  {
    title: 'ASCVD Risk in NAFLD/NASH — Meta-Analysis, J Hepatol 2021',
    finding: 'Systematic review and meta-analysis of 34 studies (n=45,000) demonstrated that NAFLD/NASH is independently associated with 64% increased risk of fatal/non-fatal cardiovascular events (OR 1.64, 95% CI 1.26–2.13), 96% increased risk of cardiovascular mortality (HR 1.96), and significant subclinical atherosclerosis even after adjusting for traditional cardiometabolic risk factors. NASH with advanced fibrosis (F3–F4) carried 3.2-fold increased cardiovascular mortality vs. no fibrosis.',
    implication: 'NPs must complete annual 10-year ASCVD risk scoring for all NASH/MASH patients, initiate high-intensity statins for ASCVD risk ≥10% (statins are hepatoprotective in NAFLD — no contraindication), and schedule cardiology co-management for F3–F4 patients with concurrent ASCVD risk ≥10%. Lifestyle modification counseling targeting ≥7% weight loss should explicitly include cardiovascular mortality reduction framing.',
  },
]

const schedule = [
  {
    frequency: 'Every 5 Years',
    item: 'FNP-BC / AGNP-C Certification Renewal',
    details: 'Family or Adult-Gerontology Nurse Practitioner Board Certified renewal — 100 CE credits including 25 pharmacology CE. AANP or ANCC pathway for hepatology and gastroenterology NP subspecialty practice.',
  },
  {
    frequency: 'Annual',
    item: 'AASLD/EASL Liver Meeting NASH CE',
    details: 'American Association for the Study of Liver Diseases (AASLD) The Liver Meeting CE — NASH pharmacotherapy updates, FIB-4/FibroScan practice guidelines, resmetirom MAESTRO data. Required for hepatology NP practice currency.',
  },
  {
    frequency: 'Monthly',
    item: 'Resmetirom ALT/AST & Adherence Review (Months 1–3)',
    details: 'Monthly ALT/AST check for all new resmetirom starts. Hold criteria: ALT >3x ULN with symptoms or >5x ULN. Monthly adherence counseling — pharmacy fill-rate review and side-effect troubleshooting (diarrhea, nausea, pruritus).',
  },
  {
    frequency: 'Quarterly',
    item: 'FIB-4 Recalculation & Fibrosis Alert Review',
    details: 'Semi-annual (minimum quarterly for high-risk) FIB-4 index recalculation. Alert protocol: FIB-4 >2.67 triggers hepatology referral; FIB-4 1.30–2.67 triggers FibroScan scheduling; <1.30 reassures and defers biopsy.',
  },
  {
    frequency: 'Quarterly',
    item: 'HbA1c, Fasting Glucose & Weight (Pioglitazone/GLP-1)',
    details: 'Quarterly HbA1c and fasting glucose for all patients on pioglitazone or GLP-1 RA. Monthly weight check during pioglitazone titration for fluid retention and weight gain. HOMA-IR trending and diabetes intensification referral criteria documentation.',
  },
  {
    frequency: 'Quarterly',
    item: 'Resmetirom TSH Surveillance',
    details: 'Quarterly TSH monitoring for all resmetirom patients — hypothyroid signal surveillance per FDA label. Abnormal TSH triggers endocrinology referral and resmetirom tolerability review (thyromimetic mechanism).',
  },
  {
    frequency: 'Semi-Annual',
    item: 'FibroScan & ELF Score / Pro-C3',
    details: 'Semi-annual FibroScan LSM for patients on active pharmacotherapy. Alert for ≥2 kPa increase from baseline. ELF score and Pro-C3 non-invasive fibrosis biomarkers semi-annually for biopsy-declining patients. Annual MRI-PDFF for quantitative fat fraction response.',
  },
  {
    frequency: 'Annual',
    item: 'ASCVD Risk Score & Statin Review',
    details: '10-year ASCVD risk calculation annually. Initiate high-intensity statin for ASCVD risk ≥10% (atorvastatin 40–80 mg or rosuvastatin 20–40 mg). ApoB, Lp(a), hs-CRP, non-HDL cholesterol annual trending. Blood pressure and UACR review.',
  },
  {
    frequency: 'Annual',
    item: 'Resmetirom Fasting Lipid & Thyroid Panel at Month 12',
    details: 'Annual fasting lipid panel (LDL-C reduction target 12–16%, triglycerides 12–25%) and TSH/free T4. Document pharmacodynamic response as adherence and efficacy confirmation before scheduling 12-month liver biopsy.',
  },
  {
    frequency: 'Annual/Biennial',
    item: 'Liver Biopsy & DEXA Coordination',
    details: '12-month liver biopsy for resmetirom MAESTRO-protocol patients; biennial for pioglitazone responders. DEXA every 2 years for pioglitazone women and NASH cirrhotics. Pre-procedure INR/platelet checks and post-biopsy 4-hour monitoring coordination.',
  },
]

export default function NASHNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="NP Resource — NASH/MASH"
        title="NASH Nurse Practitioner Scheduling Guide"
        subtitle="Scheduling infrastructure for NPs managing resmetirom adherence counseling, FIB-4/fibroscan trending, cardiovascular risk-factor optimization, and liver biopsy coordination in NASH/MASH clinics."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full NASH/MASH NP Practice
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
              The Evidence Base Driving NASH/MASH NP Compliance
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
              NASH/MASH NP Certification & Monitoring Schedule
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

      {/* Testimonial */}
      <Reveal>
        <section style={{ background: '#0e0e12', padding: '72px 24px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', color: '#c5a35c', marginBottom: 16, lineHeight: 1 }}>&ldquo;</div>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.2rem)', color: '#f0ece3', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 28 }}>
              Managing NASH patients means monthly resmetirom ALT checks, quarterly FIB-4 recalculations, semi-annual FibroScans, annual liver biopsies, HbA1c and weight tracking on pioglitazone, GLP-1 adherence counseling, lifestyle coaching, and annual cardiovascular risk profiling — all running in parallel across a full panel. Momenties keeps every deadline visible and on time so no monitoring window is missed.
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>Angela T., FNP-BC</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>Hepatology NP</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Streamline Resmetirom Monitoring and Fibrosis Tracking for Your NASH Patients?"
        subtext="Momenties consolidates FNP-BC renewals, monthly resmetirom ALT checks, quarterly FIB-4 and TSH surveillance, semi-annual FibroScans, annual ASCVD risk profiling, and liver biopsy coordination into one accountable calendar — so every NASH/MASH patient monitoring window is on time, every cycle."
      />
    </main>
  )
}
