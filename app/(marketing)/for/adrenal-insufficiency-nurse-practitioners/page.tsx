import type { Metadata } from "next"
import { Shield, Clock, BarChart3, UserCheck, BookOpen, Bell, Stethoscope, CheckCircle } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Adrenal Insufficiency Nurse Practitioners — Compliance Calendar | Momenties",
  description: "Automate ANCC endocrinology NP credentialing, hydrocortisone titration monitoring, sick-day rule education cycles, ACTH stimulation test scheduling, APS-2 comorbidity screening, and adrenal crisis prevention for adrenal insufficiency NPs.",
}

const pillars = [
  {
    icon: Shield,
    title: "Endocrinology NP Credentials & BC-ADM Certification",
    description: "ANCC Family Nurse Practitioner (FNP-BC) or Adult-Gerontology Primary Care NP (AGPCNP-BC) 5-year renewal — 1,000 clinical hours plus 75 CE credits, with at least 25 pharmacology CE credits for hydrocortisone, fludrocortisone, DHEA, and stress-dosing protocols; BC-ADM (Board Certified-Advanced Diabetes Management) credential renewal every 5 years for APS-2 co-management including type 1 diabetes and autoimmune thyroid disease; annual ENDO (Endocrine Society) Annual Meeting adrenal session CE and NCCN/Endocrine Society adrenal insufficiency guideline update CE; biennial collaborative practice agreement renewal with endocrinologist covering Solu-Cortef stress-dosing order sets, ACTH stimulation test protocols, and fludrocortisone mineralocorticoid replacement prescribing authority.",
  },
  {
    icon: Clock,
    title: "Hydrocortisone & Fludrocortisone Protocol Monitoring",
    description: "Quarterly hydrocortisone dose adequacy review using salivary cortisol day curves (0800h and 1600h), serum ACTH levels (target 10–52 pg/mL for primary AI on optimal replacement), patient-reported fatigue and energy scores, and weight trending; semi-annual fludrocortisone (Florinef) mineralocorticoid assessment — plasma renin activity (target upper half of normal reference range), serum sodium (135–145 mEq/L), potassium (3.5–5.0 mEq/L), and orthostatic blood pressure per Endocrine Society Clinical Practice Guideline; monthly symptom score documentation using AddiQoL-30 questionnaire with threshold-triggered dose adjustment protocols; and quarterly review of patients on supraphysiologic hydrocortisone equivalent doses (>30 mg/day) for Cushingoid features and metabolic complications (fasting glucose, HbA1c, lipid panel, DEXA referral).",
  },
  {
    icon: Bell,
    title: "Adrenal Crisis Prevention & Sick-Day Rule Education",
    description: "Annual structured sick-day rule and stress-dosing education for every primary and secondary adrenal insufficiency patient — documenting comprehension of the 'rule of doubles and triples' (double dose for fever >38°C or illness, triple dose for vomiting/diarrhea, IM injection for inability to take oral medication); annual Solu-Cortef 100 mg IM auto-injector or vial-and-syringe injection technique competence verification with return demonstration; annual medical alert identification confirmation (bracelet, wallet card, or digital ID); emergency department liaison documentation with local hospitals; and adrenal crisis risk stratification at each visit (recent hospitalizations, adherence issues, gastroparesis or malabsorption complicating oral dosing — triggers IM kit upgrade protocol).",
  },
  {
    icon: BarChart3,
    title: "APS Comorbidity Surveillance & Autoimmune Screening",
    description: "Annual APS-2 (Schmidt syndrome) comorbidity screening protocol documentation for all autoimmune Addison's disease patients: TSH and free T4 for autoimmune thyroid disease, fasting glucose and HbA1c for type 1 diabetes mellitus, anti-TTG IgA and total IgA for celiac disease, complete blood count for autoimmune gastritis/B12 deficiency, and anti-parietal cell antibodies every 3 years; APS-1 patients require 6-monthly calcium, albumin, PTH, and vitamin D for hypoparathyroidism monitoring, plus annual oral candidiasis assessment and AIRE mutation family cascade testing coordination; quarterly anti-21-hydroxylase antibody titer trending for newly diagnosed autoimmune Addison's disease to confirm etiology and assess for residual adrenal function trajectory; and quarterly TSH monitoring for patients on levothyroxine co-replacement (Hashimoto's thyroiditis + Addison's: hydrocortisone must be optimized before levothyroxine dosing is finalized to avoid precipitating adrenal crisis).",
  },
  {
    icon: UserCheck,
    title: "Secondary AI: Pituitary & Steroid-Withdrawal Monitoring",
    description: "Monthly ACTH stimulation test scheduling coordination for patients recovering from exogenous glucocorticoid-induced secondary adrenal insufficiency — serial low-dose ACTH stimulation tests (1 mcg cosyntropin) at 3-month intervals until HPA axis recovery documented (peak cortisol >18 mcg/dL); quarterly morning serum cortisol monitoring for pituitary-dependent secondary AI (target >15 mcg/dL off hydrocortisone for axis recovery); 6-monthly pituitary MRI scheduling reminders for patients with panhypopituitarism on multiple hormone replacements; annual insulin tolerance test (ITT) or glucagon stimulation test coordination for secondary AI patients where cosyntropin test result is equivocal; and quarterly documentation of steroid taper progress for patients weaning supraphysiologic doses (IBD, rheumatoid arthritis, asthma on chronic prednisone) with adrenal axis recovery milestones tracked per published taper protocols.",
  },
  {
    icon: BookOpen,
    title: "Patient Self-Management & DHEA Replacement Tracking",
    description: "Structured patient education milestone documentation: initial diagnosis comprehensive session (2–3 hours), 1-month telephone check-in, 3-month in-person reinforcement visit, and annual comprehensive review — all documented with competency assessment scores; semi-annual DHEA (dehydroepiandrosterone) replacement monitoring for eligible women with adrenal androgen deficiency — serum DHEAS target mid-normal range for age (300–500 mcg/dL), androgenic side effects assessment (acne, hirsutism, mood), and libido/well-being PGWB score; annual review of patient's sick-day rule action plan booklet currency and emergency contact/PCP notification protocol; and AddiQoL-30 quality-of-life questionnaire administration every 6 months with score trending to guide dose optimization conversations.",
  },
  {
    icon: Stethoscope,
    title: "Surgical Stress Dosing Coordination & Pre-Op Alerts",
    description: "Coordinate pre-procedural stress dosing documentation and multi-department notification for all adrenal insufficiency patients undergoing surgery or invasive procedures: minor procedures (hydrocortisone 25 mg IV at anesthetic induction), moderate procedures (hydrocortisone 50–75 mg IV day of procedure plus taper over 1–2 days to maintenance), and major surgery (hydrocortisone 100 mg IV bolus at induction then 200 mg/24h infusion or 50 mg q6h × 24h then taper); automated pre-op anesthesia team and surgical team notification flags with adrenal crisis risk alert embedded in pre-surgical checklist; and post-operative cortisol adequacy check reminders at 24h and 48h for major procedures, with adrenal crisis recognition protocol education for surgical nursing staff annually.",
  },
  {
    icon: CheckCircle,
    title: "Bone Density Surveillance & Metabolic Monitoring",
    description: "Annual DEXA bone densitometry scheduling for patients on glucocorticoid replacement >5 years, those with BMI <20, postmenopausal women, and men >50 years — T-score trending with bisphosphonate therapy initiation at T-score below −2.5 or vertebral fracture; annual fasting lipid panel and fasting glucose/HbA1c for metabolic complications of glucocorticoid over-replacement; annual 25-OH vitamin D level with supplementation titration to target 40–60 ng/mL; quarterly blood pressure monitoring for fludrocortisone-associated hypertension; and bi-annual body weight and waist circumference documentation with Cushingoid feature screening (buffalo hump, striae, moon facies) for patients on replacement doses at the higher end of the physiologic range.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Credentialing Audit & Panel Baseline",
    description: "Audit current FNP-BC or AGPCNP-BC certification expiration dates, CE credit accumulation status, and collaborative practice agreement currency for all adrenal-focused NPs. Complete baseline AddiQoL-30 survey for all active adrenal insufficiency patients. Document current hydrocortisone and fludrocortisone doses, emergency kit possession status, and medical alert identification status across the full panel.",
  },
  {
    month: "Month 3–4",
    title: "Sick-Day Rule Education Campaign",
    description: "Conduct structured sick-day rule and stress-dosing education for all patients diagnosed within the prior 12 months plus those overdue for annual review. Verify Solu-Cortef 100 mg IM injection technique by return demonstration. Document medical alert identification. Initiate APS-2 baseline comorbidity screening (TSH, HbA1c, anti-TTG IgA) for all autoimmune Addison's disease patients not yet screened.",
  },
  {
    month: "Month 5–6",
    title: "Fludrocortisone Renin Review & Bone Density Scheduling",
    description: "Complete semi-annual mineralocorticoid adequacy panels (plasma renin activity, electrolytes, orthostatic BP) for all primary AI patients. Review DEXA results from prior 12 months; schedule overdue bone densitometry. Adjust fludrocortisone per renin-guided protocol. Complete H1 AddiQoL-30 administration. Coordinate DHEA monitoring labs for eligible women on dehydroepiandrosterone replacement.",
  },
  {
    month: "Month 7–8",
    title: "Cortisol Profile & Dose Optimization Review",
    description: "Schedule cortisol day curves and salivary cortisol profiles for patients with persistent fatigue or suboptimal quality-of-life scores. Review serum ACTH levels for secondary AI patients. Reassess DHEA replacement doses using DHEAS levels and side effect profiles. Document dose changes for patients on supraphysiologic hydrocortisone equivalents and formalize taper plans.",
  },
  {
    month: "Month 9–10",
    title: "APS Comorbidity Annual Screening Cycle",
    description: "Complete annual APS-2 comorbidity screening: TSH, free T4, fasting glucose, HbA1c, anti-TPO antibodies, anti-TTG IgA, and CBC. For APS-1 patients, complete 6-monthly PTH, calcium, vitamin D panel, and oral candidiasis assessment. Document new diagnoses and generate referrals. Coordinate levothyroxine dose re-evaluation for patients with concurrent Hashimoto's thyroiditis following cortisol optimization.",
  },
  {
    month: "Month 11–12",
    title: "Annual Registry, CE Completion & Panel Quality Report",
    description: "Submit annual adrenal registry data. Confirm CE credit completion targets for all NPs approaching certification renewal cycles. Compile panel quality report: crisis rate, emergency kit training compliance, medical alert ID rate, DEXA completion, APS screening rates, and mean AddiQoL-30 change. Plan next-year ACTH stimulation test cycle for patients with evolving pituitary or adrenal pathology.",
  },
]

const kpis = [
  {
    metric: "97%",
    target: "Emergency Kit Training Documented",
    description: "Target percentage of primary adrenal insufficiency patients with annual Solu-Cortef IM injection technique competence verified on file.",
  },
  {
    metric: "<6",
    target: "Adrenal Crisis Hospitalizations (per 100 pt-years)",
    description: "Published benchmark for well-managed adrenal insufficiency programs; driven by sick-day rule adherence and stress-dosing education.",
  },
  {
    metric: "100%",
    target: "Annual APS-2 Comorbidity Screening",
    description: "Autoimmune Addison's disease patients with TSH, HbA1c, and celiac serology documented within the annual compliance window.",
  },
  {
    metric: ">80%",
    target: "DEXA Bone Density Surveillance On Schedule",
    description: "At-risk patients with current DEXA within 2 years; bisphosphonate initiation rate for T-score below −2.5.",
  },
  {
    metric: "+8 pts",
    target: "AddiQoL-30 Improvement at 12 Months",
    description: "Mean patient-reported quality-of-life improvement on the Addison's Disease Quality of Life Questionnaire following optimized replacement therapy.",
  },
  {
    metric: "100%",
    target: "Pre-Op Stress Dosing Alerts Sent",
    description: "Percentage of surgical cases in adrenal insufficiency patients with documented anesthesia and surgical team adrenal crisis alert communicated pre-operatively.",
  },
]

const testimonial = {
  quote: "Adrenal insufficiency NP practice means tracking quarterly cortisol profiles, semi-annual renin-guided fludrocortisone reviews, annual sick-day rule education cycles, APS-2 comorbidity screens, DEXA surveillance, DHEA monitoring, surgical stress-dosing alerts across every department, and FNP-BC renewal CE — all while keeping crisis hospitalization rates under six per hundred patient-years. Momenties consolidated every one of these intervals into a single calendar. Our emergency kit training compliance went from 68% to 96% within the first year.",
  name: "Dr. Maria Chen, NP",
  title: "Lead Adrenal Insufficiency Nurse Practitioner — Endocrinology Center of Excellence",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Adrenal Insufficiency Nurse Practitioners · Momenties"
        title="Every Certification. Every Cortisol Curve. Every Crisis Prevention Deadline."
        subtitle="Adrenal insufficiency NPs manage FNP-BC and BC-ADM credentialing cycles, quarterly hydrocortisone dose reviews, semi-annual fludrocortisone renin panels, annual sick-day rule education, APS-2 comorbidity surveillance, bone density screening, DHEA replacement monitoring, and surgical stress-dosing coordination — all while keeping adrenal crisis rates below six per hundred patient-years. Momenties consolidates every interval into one accountable calendar so nothing slips through the cracks."
      />

      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)" }}>
            Built for the Full Adrenal Insufficiency NP Practice
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {pillars.map((p) => (
              <div key={p.title} style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 28 }}>
                <p.icon size={28} color="#c5a35c" style={{ marginBottom: 16 }} />
                <h3 style={{ color: "#f0ece3", fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: 14, lineHeight: 1.6 }}>{p.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)" }}>
            12-Month Implementation Roadmap
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {timeline.map((t) => (
              <div key={t.month} style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: 24 }}>
                <span style={{ color: "#c5a35c", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>{t.month}</span>
                <h3 style={{ color: "#f0ece3", fontSize: 15, fontWeight: 600, margin: "8px 0 6px" }}>{t.title}</h3>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: 13, lineHeight: 1.6 }}>{t.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)" }}>
            Performance Benchmarks
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {kpis.map((k) => (
              <div key={k.target} style={{ background: "#131318", border: "1px solid rgba(197,163,92,0.2)", borderRadius: 12, padding: 24 }}>
                <div style={{ fontSize: 32, fontWeight: 700, color: "#c5a35c", marginBottom: 4 }}>{k.metric}</div>
                <div style={{ color: "#f0ece3", fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{k.target}</div>
                <div style={{ color: "rgba(240,236,227,0.65)", fontSize: 13, lineHeight: 1.5 }}>{k.description}</div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ maxWidth: 800, margin: "0 auto", padding: "80px 24px 0" }}>
          <blockquote style={{ background: "#131318", border: "1px solid rgba(197,163,92,0.25)", borderRadius: 16, padding: "40px 48px", textAlign: "center" }}>
            <p style={{ color: "#f0ece3", fontSize: 18, lineHeight: 1.7, fontStyle: "italic", marginBottom: 24 }}>"{testimonial.quote}"</p>
            <footer>
              <div style={{ color: "#c5a35c", fontWeight: 600, fontSize: 15 }}>{testimonial.name}</div>
              <div style={{ color: "rgba(240,236,227,0.5)", fontSize: 13, marginTop: 4 }}>{testimonial.title}</div>
            </footer>
          </blockquote>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}><CTA /></div>
    </main>
  )
}
