import type { Metadata } from "next"
import { Stethoscope, ClipboardList, BarChart3, Shield, Bell, BookOpen, Calendar, CheckCircle } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Adrenal Insufficiency Center Scheduling & Compliance Calendar | Momenties",
  description: "Automate adrenal insufficiency center scheduling: cortisol day curves, hydrocortisone dose titration, sick-day rule education, adrenal crisis prevention protocols, ACTH stimulation test scheduling, and endocrinology registry reporting.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Cortisol Testing & ACTH Stimulation Scheduling",
    description: "Coordinate high-volume cortisol day curve appointments (0800h and 1600h serum cortisol), standard-dose ACTH stimulation tests (250 mcg cosyntropin IV/IM with 0, 30, 60-minute cortisol draws), and low-dose ACTH stimulation tests (1 mcg) for suspected secondary adrenal insufficiency. Automate pre-test patient preparation reminders, phlebotomy slot sequencing, and result follow-up windows to eliminate scheduling gaps and prevent missed diagnoses.",
  },
  {
    icon: ClipboardList,
    title: "Hydrocortisone Dose Titration & Monitoring Protocols",
    description: "Track individualized hydrocortisone replacement regimens (typically 15–25 mg/day in 2–3 divided doses) with quarterly clinic visits for dose adequacy review using salivary cortisol profiles, serum ACTH levels, and patient-reported symptom scores (fatigue, nausea, salt craving). Schedule fludrocortisone (Florinef) mineralocorticoid adequacy assessments — plasma renin activity, electrolytes, and supine/standing blood pressure — every 6 months per Endocrine Society guidelines.",
  },
  {
    icon: Shield,
    title: "Adrenal Crisis Prevention & Sick-Day Rule Compliance",
    description: "Automate annual sick-day rule and stress-dosing education sessions per patient, documenting receipt of medical alert identification recommendations and emergency hydrocortisone injection kit (Solu-Cortef 100 mg IM) training. Schedule mandatory annual review of the 'rule of doubles and triples' (double dose for fever >38°C, triple dose for vomiting/diarrhea, immediate IM injection for inability to take oral medication). Track emergency department liaison communications and crisis hospitalization follow-up appointments within 2 weeks post-discharge.",
  },
  {
    icon: BarChart3,
    title: "Registry Reporting & Outcome Benchmarking",
    description: "Manage quarterly European Registry on Adrenal Insufficiency (EURADRENAL) and North American Adrenal Registry data submissions — adrenal crisis rates per 100 patient-years, hydrocortisone equivalent dose distributions, quality-of-life (AddiQoL) score trends, and cardiovascular risk factor prevalence. Schedule annual DEXA scans for glucocorticoid-related bone density surveillance (osteopenia/osteoporosis screening), annual metabolic panels for dyslipidemia and glucose monitoring, and biennial autoimmune polyendocrine syndrome (APS-1, APS-2) associated condition screening.",
  },
  {
    icon: Bell,
    title: "Autoimmune & APS Comorbidity Surveillance",
    description: "Coordinate systematic APS-2 (Schmidt syndrome) comorbidity screening timelines: annual TSH and free T4 for autoimmune thyroid disease (Hashimoto's/Graves'), annual fasting glucose and HbA1c for type 1 diabetes mellitus, periodic anti-TTG IgA and total IgA for celiac disease, and anti-parietal cell antibodies for autoimmune gastritis. For APS-1 patients, schedule AIRE mutation family cascade testing, annual candidiasis assessment, and hypoparathyroidism calcium/PTH monitoring every 6 months.",
  },
  {
    icon: BookOpen,
    title: "Patient Education & Self-Management Scheduling",
    description: "Schedule structured patient education milestones: initial diagnosis education session (2–3 hours covering diagnosis, medications, sick-day rules, and crisis recognition), 1-month follow-up call, 3-month in-person reinforcement visit, and annual comprehensive education review. Automate outreach for medical alert bracelet verification at each annual visit, shared decision-making documentation for patients on DHEA replacement therapy (25–50 mg/day for adrenal androgen deficiency), and AddiQoL-30 quality-of-life survey administration every 6 months.",
  },
  {
    icon: Calendar,
    title: "Surgical & Procedural Stress Dosing Coordination",
    description: "Manage pre-procedural stress dosing coordination across surgical, gastroenterology, and radiology departments — minor procedures (hydrocortisone 25 mg IV at induction), moderate procedures (50–75 mg IV on day of procedure plus taper over 1–2 days), and major surgery (100 mg IV bolus then 200 mg/24h infusion or 50 mg q6h × 24h, then taper). Automate pre-op anesthesia notification flags for adrenal insufficiency and post-operative cortisol monitoring reminders at 24 and 48 hours.",
  },
  {
    icon: CheckCircle,
    title: "Quality Metrics & Endocrine Center Accreditation",
    description: "Track center-level quality indicators required for NCQA endocrinology recognition and Joint Commission disease-specific care certification: adrenal crisis hospitalization rate per 100 patient-years (target <6), percentage of patients with documented emergency injection kit training (target >95%), percentage with medical alert identification (target >90%), bone density screening compliance (target >80% of at-risk patients), and annual APS comorbidity screening completion rates. Generate quarterly quality dashboards for department leadership and payer value-based care reporting.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Baseline Assessment & Patient Panel Audit",
    description: "Complete a full panel audit — ACTH stimulation test documentation review for all active patients, verification of hydrocortisone and fludrocortisone prescription currency, and identification of patients missing emergency injection kit training. Establish baseline AddiQoL-30 quality-of-life scores. Enroll eligible patients in adrenal registry and schedule cortisol day curves for those with suboptimal symptom control.",
  },
  {
    month: "Month 3–4",
    title: "Stress-Dosing Education Campaign & Kit Verification",
    description: "Conduct structured sick-day rule and stress-dosing education for all patients diagnosed in the prior 12 months and those overdue for annual review. Verify emergency hydrocortisone injection kit (Solu-Cortef 100 mg) possession and injection technique competence at clinic visits. Document medical alert identification status. Initiate APS-2 comorbidity baseline screening (TSH, fasting glucose, HbA1c, anti-TTG IgA) for all autoimmune Addison's disease patients.",
  },
  {
    month: "Month 5–6",
    title: "Fludrocortisone Adequacy & Bone Density Review",
    description: "Complete semi-annual mineralocorticoid adequacy assessments — plasma renin activity, serum sodium/potassium, and orthostatic blood pressure for all primary adrenal insufficiency patients. Review DEXA scan results from prior 12 months and schedule bone densitometry for patients overdue (>2 years since last scan or initiating bisphosphonate therapy). Adjust fludrocortisone dosing per renin-guided protocol. Submit H1 registry data to EURADRENAL portal.",
  },
  {
    month: "Month 7–8",
    title: "Cortisol Profiling & Dose Optimization",
    description: "Schedule cortisol day curves and waking salivary cortisol profiles for patients with persistent fatigue, weight gain, or suboptimal quality-of-life scores. Review serum ACTH levels for secondary adrenal insufficiency patients to confirm pituitary-adrenal axis suppression trajectory. Complete quarterly hydrocortisone dose adequacy reviews using symptom scores and cortisol profiles. Initiate or reassess DHEA replacement (dehydroepiandrosterone 25–50 mg/day) for eligible women with low libido, fatigue, and low DHEAS.",
  },
  {
    month: "Month 9–10",
    title: "APS Comorbidity Surveillance & Autoimmune Screening",
    description: "Complete annual autoimmune comorbidity screening cycle: TSH, free T4, fasting glucose, HbA1c, anti-TPO antibodies, anti-21-hydroxylase antibodies (titer trending), and celiac serology (anti-TTG IgA, total IgA). For APS-1 patients, complete 6-month hypoparathyroidism panel (calcium, albumin, PTH, vitamin D) and oral candidiasis assessment. Document results and generate referral orders for newly identified autoimmune conditions requiring subspecialty co-management.",
  },
  {
    month: "Month 11–12",
    title: "Annual Registry Submission & Center Quality Report",
    description: "Compile annual adrenal insufficiency center quality report: adrenal crisis hospitalization rate, emergency kit training compliance, medical alert identification rate, bone density screening completion, APS comorbidity detection rate, and mean AddiQoL-30 score change from baseline. Submit annual registry data. Review all patients' hydrocortisone equivalent doses, identify those on supraphysiologic dosing for weaning counseling, and plan next-year ACTH stimulation test cycle for patients with evolving pituitary or adrenal pathology.",
  },
]

const kpis = [
  {
    metric: "<6",
    target: "Adrenal Crisis Rate (per 100 pt-years)",
    description: "Benchmark for well-managed adrenal insufficiency centers; drives sick-day rule and emergency kit compliance programs.",
  },
  {
    metric: ">95%",
    target: "Emergency Injection Kit Training Documented",
    description: "Percentage of primary AI patients with documented Solu-Cortef 100 mg IM injection technique competence on file.",
  },
  {
    metric: ">90%",
    target: "Medical Alert Identification Verified",
    description: "Proportion of adrenal insufficiency patients with documented medical alert bracelet, wallet card, or digital health ID at annual review.",
  },
  {
    metric: ">80%",
    target: "DEXA Bone Density Screening On Schedule",
    description: "At-risk patients (on glucocorticoid replacement >5 years or with additional fracture risk factors) with current bone density assessment.",
  },
  {
    metric: "100%",
    target: "Annual APS Comorbidity Screen Completed",
    description: "Autoimmune Addison's disease patients with documented annual thyroid, glucose/HbA1c, and celiac serologies within the compliance window.",
  },
  {
    metric: "+8 pts",
    target: "AddiQoL-30 Score Improvement at 12 Months",
    description: "Mean patient-reported quality-of-life improvement target on the Addison's Disease Quality of Life Questionnaire following optimized replacement therapy.",
  },
]

const testimonial = {
  quote: "Managing an adrenal insufficiency center means tracking cortisol day curves, quarterly dose reviews, bi-annual fludrocortisone renin panels, annual APS-2 comorbidity screens, DEXA surveillance, sick-day rule education cycles, registry submissions, and surgical stress-dosing coordination across every department — all while keeping crisis rates below six per hundred patient-years. Momenties gave us one calendar for all of it. Our emergency kit training compliance went from 71% to 97% in the first year.",
  name: "Dr. Sarah Kowalski",
  title: "Director, Adrenal Disorders Program — Academic Endocrinology Center",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Adrenal Insufficiency Center · Momenties"
        title="Every Cortisol Curve. Every Crisis Prevention Deadline. One Calendar."
        subtitle="Adrenal insufficiency centers manage one of endocrinology's highest-stakes compliance portfolios — ACTH stimulation test scheduling, quarterly hydrocortisone dose titration, bi-annual fludrocortisone renin-guided reviews, annual sick-day rule education, APS-2 comorbidity surveillance, bone density screening, surgical stress-dosing coordination, and adrenal registry reporting. Momenties automates every interval so your Addison's disease and secondary AI patients stay safe and your center benchmarks stay green."
      />

      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)" }}>
            Built for the Full Adrenal Insufficiency Center Compliance Lifecycle
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
