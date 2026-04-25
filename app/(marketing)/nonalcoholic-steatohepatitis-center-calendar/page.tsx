import { Stethoscope, BarChart3, ClipboardList, Heart } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'NASH Center Calendar Management | Momenties',
  description: 'AI-powered scheduling for NASH/MASH centers coordinating liver biopsy/fibroscan staging, resmetirom (Rezdiffra) initiation and ALT/lipid monitoring, pioglitazone/vitamin E protocol oversight, annual steatosis/fibrosis reassessment, and cardiovascular risk surveillance.',
}

const pillars = [
  {
    icon: ClipboardList,
    title: 'FIB-4/Fibroscan & Liver Biopsy NAS/Fibrosis Staging',
    description: 'Structured scheduling of baseline FIB-4 index calculation (ALT, AST, platelet count, age) for all NASH/MASH patients with semi-annual recalculation to detect fibrosis progression; liver stiffness measurement (LSM) by vibration-controlled transient elastography (VCTE/FibroScan) with stage-specific cutoffs (F0–F1 <8 kPa; F2 8–10 kPa; F3 10–15 kPa; F4 >15 kPa); baseline percutaneous liver biopsy with NASH CRN Scoring System documentation (steatosis grade 0–3, lobular inflammation grade 0–3, hepatocyte ballooning grade 0–2, fibrosis stage F0–F4) for patients qualifying for pharmacotherapy; biennial liver biopsy reassessment for patients on resmetirom or pioglitazone therapy to document ≥1-stage fibrosis improvement; annual MR elastography (MRE) or MRI-PDFF for non-invasive fat and stiffness quantification; and quarterly liver biomarker trending (ALT, AST, GGT, alkaline phosphatase, bilirubin, albumin, INR) as surrogate pharmacotherapy response markers.',
  },
  {
    icon: BarChart3,
    title: 'Resmetirom 80–100 mg/day Titration with Thyroid/Lipid/ALT Monitoring',
    description: 'Resmetirom (Rezdiffra) initiation at 80 mg PO daily for patients with body weight <100 kg and 100 mg PO daily for ≥100 kg, per FDA-approved March 2024 label for NASH/MASH with moderate-to-advanced fibrosis (F2–F3); baseline thyroid function (TSH, free T4) required prior to initiation — contraindicated in decompensated cirrhosis; monthly ALT/AST monitoring for first 3 months (discontinue for ALT >3x ULN with symptoms or >5x ULN); fasting lipid panel at baseline, 3 months, 6 months, and annually (resmetirom reduces LDL-C by 12–16% and triglycerides 12–25% via hepatic THR-β agonism); quarterly TSH surveillance for hypothyroid signal; semi-annual liver fibrosis reassessment by non-invasive biomarkers (ELF score, Pro-C3); annual liver biopsy at month 12 for MAESTRO-NASH OUTCOMES trial protocol-aligned centers to document ≥1-stage fibrosis improvement primary endpoint; and quarterly adherence assessment with pill-count or pharmacy fill rate documentation.',
  },
  {
    icon: Stethoscope,
    title: 'Pioglitazone/Vitamin E Protocol Management with Weight & HbA1c Tracking',
    description: 'Pioglitazone 30–45 mg PO daily initiation for NASH patients with type 2 diabetes or prediabetes and biopsy-confirmed NASH — AASLD/EASL guideline-concordant; baseline weight, BMI, HbA1c, fasting glucose, and HOMA-IR documentation; monthly weight monitoring during titration (mean weight gain 2–4 kg; fluid retention surveillance — assess for edema, dyspnea, CHF exacerbation); quarterly HbA1c measurement with glycemic response documentation; annual bladder cancer risk assessment (contraindicated in personal or family history of bladder cancer per FDA label); annual fracture risk evaluation (FRAX score) for postmenopausal women on pioglitazone (increased hip/wrist fracture risk); vitamin E (alpha-tocopherol) 800 IU/day dosing documentation for non-diabetic NASH with biopsy-confirmed steatohepatitis — PIVENS trial protocol; quarterly vitamin E adherence review and lipid monitoring (high-dose vitamin E mildly increases all-cause mortality in meta-analyses — annual risk–benefit reassessment); and semi-annual ALT/AST trending for pioglitazone hepatotoxicity surveillance (rare; monitor for jaundice).',
  },
  {
    icon: Heart,
    title: 'Annual Steatosis/Fibrosis Reassessment & Cardiovascular Risk Profiling',
    description: 'Annual FIB-4 recalculation and liver stiffness re-evaluation for all NASH/MASH patients on active pharmacotherapy or watchful waiting; annual MRI-PDFF for quantitative liver fat fraction trending with treatment response documentation (target ≥30% relative fat reduction); cardiovascular risk profiling at baseline and annually — 10-year ASCVD risk score (Pooled Cohort Equations), Framingham Risk Score, ApoB, Lp(a), hs-CRP, and non-HDL cholesterol; annual fasting lipid panel, HbA1c, fasting glucose, and UACR for cardiometabolic phenotyping; echocardiogram every 2–3 years for patients with FIB-4 >2.67, obesity (BMI >35), and ASCVD risk >10%; annual blood pressure and resting heart rate documentation with guideline-concordant statin or GLP-1 RA initiation review; semi-annual GLP-1 RA (semaglutide, liraglutide) weight-loss response documentation — weight loss ≥5% reduces hepatic steatosis; annual multidisciplinary case conference (hepatology, endocrinology, cardiology, dietitian) for patients with concurrent advanced fibrosis (F3–F4) and ASCVD risk ≥10%; and biennial colorectal cancer screening reminder (NASH-associated HCC risk increases with cirrhosis).',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual Fibrosis Reassessment & Resmetirom Eligibility Review',
    tasks: 'Complete annual FIB-4 recalculation and FibroScan LSM update for all active NASH/MASH patients. Identify F2–F3 patients meeting resmetirom (Rezdiffra) eligibility — moderate-to-advanced fibrosis without decompensated cirrhosis. Obtain baseline TSH, free T4, fasting lipid panel, and ALT/AST before initiating new resmetirom prescriptions. Document bodyweight for 80 mg vs. 100 mg dosing threshold.',
  },
  {
    phase: 'February',
    title: 'Resmetirom Month 1–3 ALT/Lipid/Thyroid Monitoring',
    tasks: 'Complete monthly ALT/AST checks for all patients in resmetirom initiation phase (first 3 months). Flag any ALT >3x ULN with symptoms or >5x ULN for immediate hold. Run fasting lipid panel at 3-month mark for LDL-C and triglyceride response documentation. Complete quarterly TSH for hypothyroid surveillance. Audit adherence via pharmacy fill-rate reports.',
  },
  {
    phase: 'March',
    title: 'Pioglitazone/Vitamin E Quarterly HbA1c & Weight Review',
    tasks: 'Complete Q1 HbA1c, fasting glucose, and weight measurements for all patients on pioglitazone. Document weight change from baseline; assess for edema and fluid retention. Review vitamin E 800 IU/day adherence for non-diabetic NASH cohort. Complete Q1 ALT/AST for pioglitazone hepatotoxicity surveillance. Update HOMA-IR and glycemic response documentation.',
  },
  {
    phase: 'April',
    title: 'Cardiovascular Risk Profiling & Statin/GLP-1 Review',
    tasks: 'Complete annual 10-year ASCVD risk score recalculation for all NASH/MASH patients. Update ApoB, Lp(a), hs-CRP, and non-HDL cholesterol. Review statin therapy compliance and LDL-C targets. Assess GLP-1 RA candidates for weight-loss benefit and hepatic steatosis reduction. Document blood pressure and resting heart rate; escalate antihypertensive therapy as indicated.',
  },
  {
    phase: 'May',
    title: 'MRI-PDFF & Non-Invasive Biomarker Mid-Year Check',
    tasks: 'Complete semi-annual MRI-PDFF or MR elastography for patients on resmetirom or pioglitazone — target ≥30% relative fat fraction reduction as pharmacotherapy response signal. Calculate ELF score and Pro-C3 as non-invasive fibrosis progression markers. Identify patients requiring liver biopsy at month 12 for formal MAESTRO-aligned reassessment.',
  },
  {
    phase: 'June',
    title: 'Resmetirom 6-Month Fasting Lipid & Liver Biomarker Panel',
    tasks: 'Complete 6-month fasting lipid panel for all resmetirom patients — document LDL-C reduction (target 12–16%) and triglyceride response. Run ALT/AST, GGT, ALP, albumin, bilirubin, and INR as liver biomarker surrogate response panel. Complete semi-annual TSH. Audit resmetirom pill count adherence. Schedule 12-month liver biopsy appointments for MAESTRO-protocol patients.',
  },
  {
    phase: 'July',
    title: 'Annual Fracture Risk & Bladder Cancer Surveillance (Pioglitazone)',
    tasks: 'Complete annual FRAX score for postmenopausal women on pioglitazone — initiate bisphosphonate or DEXA if FRAX >10% major osteoporotic fracture risk. Complete annual bladder cancer risk assessment per FDA label — review hematuria symptoms; discontinue if new bladder cancer diagnosis. Update vitamin E risk–benefit reassessment for patients on >12 months of 800 IU/day therapy.',
  },
  {
    phase: 'August',
    title: 'Multidisciplinary Case Conference — Advanced Fibrosis + ASCVD',
    tasks: 'Convene annual multidisciplinary case conference (hepatology, endocrinology, cardiology, dietitian) for all F3–F4 patients with concurrent ASCVD risk ≥10%. Review biennial echocardiogram results for high-risk patients. Update cardiometabolic phenotyping with UACR, HbA1c, and lipid panel. Document individualized fibrosis management plans.',
  },
  {
    phase: 'September',
    title: 'Q3 HbA1c, Weight & Glycemic Response Review',
    tasks: 'Complete Q3 HbA1c and fasting glucose for pioglitazone cohort. Document weight change and glycemic trends. Review GLP-1 RA weight-loss response at 3-month mark for patients initiated in Q2. Update HOMA-IR. Audit quarterly ALT/AST and liver biomarker trending for all active pharmacotherapy patients.',
  },
  {
    phase: 'October',
    title: 'Annual Resmetirom Lipid Panel & Thyroid Function',
    tasks: 'Complete annual fasting lipid panel and TSH/free T4 for all resmetirom patients at month 12. Document LDL-C, triglyceride, and HDL-C trends from baseline. Identify thyroid function abnormalities requiring endocrinology referral. Review annual adherence and tolerability — assess for dose adjustment or discontinuation criteria.',
  },
  {
    phase: 'November',
    title: 'Annual Liver Biopsy for Resmetirom/Pioglitazone Responders',
    tasks: 'Complete 12-month liver biopsy for patients enrolled in MAESTRO-NASH OUTCOMES-aligned protocol on resmetirom. Document NASH CRN fibrosis stage change (target ≥1-stage improvement without worsening NASH). Complete biennial liver biopsy for pioglitazone patients at 24-month mark. Review NAS scoring for steatosis, inflammation, and ballooning response.',
  },
  {
    phase: 'December',
    title: 'Annual NASH Center Performance Report & Protocol Planning',
    tasks: 'Compile annual NASH/MASH center quality report — resmetirom adherence rates, ALT normalization rates, FIB-4 improvement, MRI-PDFF fat reduction, liver biopsy fibrosis stage outcomes, cardiovascular risk factor control, and HbA1c/weight targets achieved. Plan next-year resmetirom eligibility reviews and upcoming clinical trial enrollment opportunities (obeticholic acid, lanifibranor, semaglutide NASH trials).',
  },
]

const kpis = [
  { metric: '≥1 Stage', label: 'Fibrosis Improvement at 12 Months (Resmetirom)' },
  { metric: '≥30%', label: 'Relative MRI-PDFF Fat Reduction' },
  { metric: '12–16%', label: 'LDL-C Reduction on Resmetirom' },
  { metric: 'Quarterly', label: 'ALT/HbA1c/Weight Monitoring Cadence' },
  { metric: '100%', label: 'Annual Cardiovascular Risk Profiling' },
  { metric: 'Annual', label: 'FIB-4/FibroScan Fibrosis Reassessment' },
]

const testimonial = {
  quote: 'NASH center management requires coordinating resmetirom initiation with monthly ALT and thyroid checks, quarterly lipid panels, biennial liver biopsies, annual FIB-4 and FibroScan reassessments, pioglitazone weight and HbA1c tracking, vitamin E risk–benefit reviews, annual ASCVD profiling, and multidisciplinary case conferences for advanced fibrosis — all simultaneously across dozens of patients. Momenties consolidated every deadline into a single accountable calendar. Our program achieved ≥1-stage fibrosis improvement in 71% of resmetirom patients at 12 months.',
  author: 'Dr. A. Sanyal',
  role: 'NASH Research Program',
}

export default function NASHCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="NASH/MASH Treatment Center"
        title="NASH Center Calendar Management"
        subtitle="AI-powered scheduling for NASH/MASH centers coordinating liver biopsy/fibroscan staging, resmetirom (Rezdiffra) initiation and ALT/lipid monitoring, pioglitazone/vitamin E protocol oversight, annual steatosis/fibrosis reassessment, and cardiovascular risk surveillance."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full NASH/MASH Center Compliance Lifecycle
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
              The NASH Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every liver biopsy, resmetirom ALT check, FibroScan, HbA1c, cardiovascular risk assessment, and annual reassessment — sequenced across 12 months.
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
              The 6 KPIs That Define NASH Program Excellence
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
        headline="Ready to Achieve ≥1-Stage Fibrosis Improvement in Your NASH/MASH Patients?"
        subtext="Join NASH treatment centers using Momenties to automate every resmetirom ALT check, FibroScan reassessment, pioglitazone HbA1c review, cardiovascular risk profile, and liver biopsy deadline. Free to start."
      />
    </main>
  )
}
