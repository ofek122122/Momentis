import type { Metadata } from "next"
import { Award, BarChart3, ClipboardList, Stethoscope } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Myelofibrosis Nurse Practitioners — Compliance Calendar | Momenties",
  description:
    "Automate AOCNP and AGACNP-BC renewal CE, myelofibrosis JAK inhibitor (ruxolitinib/fedratinib/pacritinib/momelotinib) CBC monitoring, MPN-SAF symptom burden scoring, spleen volume response tracking, DIPSS-Plus and MIPSS70+ re-stratification, transplant evaluation timelines, and CIBMTR registry reporting for myelofibrosis nurse practitioners.",
}

const pillars = [
  {
    icon: Award,
    title: "Hematology-Oncology NP Credentials & AOCNP Renewal",
    description:
      "AOCNP (Advanced Oncology Certified Nurse Practitioner) 4-year/45 CE renewal with oncology and hematologic malignancy-specific CE allocation covering MPN management, JAK inhibitor pharmacology, and transplant co-management; AGACNP-BC (Adult-Gerontology Acute Care NP Board Certified) 5-year renewal with 1,000 clinical hours and 75 CE pharmacology credits for inpatient MF blast crisis and post-HSCT co-management; annual ASH Annual Meeting MPN (Myeloproliferative Neoplasm) session CE attendance — covering updated NCCN MF guidelines, IWG-MRT response criteria revisions, and emerging agents (navitoclax, navtemadlin, pelabresib combinations); biennial EHA (European Hematology Association) MPN/MF educational symposium CE for international guideline comparison; and biennial collaborative practice agreement renewal with hematologist for ruxolitinib (Jakafi), fedratinib (Inrebic), pacritinib (Vonjo), momelotinib (Ojjaara), danazol, and hydroxyurea prescribing privileges in the MF practice setting.",
  },
  {
    icon: ClipboardList,
    title: "JAK Inhibitor Initiation & CBC Dose-Adjustment Protocols",
    description:
      "Ruxolitinib 5–20 mg BID initiation CBC monitoring — CBC with differential biweekly for the first 12 weeks, then monthly; dose reduction algorithm: platelets 100–125×10⁹/L → reduce 5 mg BID; platelets 75–99×10⁹/L → reduce to 10 mg BID; platelets <50×10⁹/L → hold and resume at 5 mg BID after recovery; fedratinib 400 mg/day initiation with mandatory thiamine supplementation (100 mg TID) — baseline and monthly thiamine levels plus quarterly neurologic symptom screen for Wernicke-like encephalopathy (FDA black box warning); pacritinib 200 mg BID weekly platelet monitoring for thrombocytopenic MF (platelets <50,000/μL — the population excluded from ruxolitinib Phase III); momelotinib 200 mg/day monthly hemoglobin tracking — anemia response (TI ≥12 weeks and hemoglobin ≥8 g/dL) per MOMENTUM trial primary endpoint; and quarterly MPN-SAF v2.0 total symptom score (TSS) documentation for constitutional symptoms (fatigue, night sweats, pruritus, bone pain, abdominal discomfort, weight loss) with TSS50 response tracking.",
  },
  {
    icon: BarChart3,
    title: "DIPSS-Plus Prognostication & MIPSS70+ Molecular Risk",
    description:
      "Annual DIPSS-Plus (Dynamic IPSS-Plus) re-stratification incorporating eight adverse prognostic factors (age >65, constitutional symptoms, Hgb <10 g/dL, WBC >25×10⁹/L, circulating blasts ≥1%, transfusion dependence, platelets <100×10⁹/L, unfavorable cytogenetics) to assign Low/Intermediate-1/Intermediate-2/High risk categories and HSCT referral thresholds; annual MIPSS70+ v2.0 molecular risk stratification integrating high-risk mutations (ASXL1, EZH2, IDH1/2, SRSF2, SF3B1, U2AF1-Q157, TP53, CBL) from 35-gene NGS panel with JAK2 V617F allele burden quantification; semiannual bone marrow biopsy with WHO 2022 MF-grade reticulin/collagen fibrosis scoring (MF-0/1/2/3) and cytogenetic surveillance for complex karyotype, monosomy 7, and i(17q) — all unfavorable for DIPSS-Plus; blast % monitoring every 3–6 months — accelerated phase (10–19% blasts) or blast phase (≥20%) drives immediate HSCT evaluation irrespective of DIPSS risk category; and HCT-CI comorbidity index annual reassessment for transplant-eligible patients aged ≤70 to refine RIC conditioning versus full myeloablative regimen selection.",
  },
  {
    icon: Stethoscope,
    title: "Spleen Response, Anemia Management & CIBMTR Reporting",
    description:
      "Semiannual spleen MRI or CT volume measurement versus baseline — IWG-MRT 2013 SVR35 response documentation (≥35% spleen volume reduction at Week 24); monthly palpable spleen length tracking (cm below left costal margin) as interval surrogate between imaging studies; transfusion burden tracking per 8-week rolling window — transfusion-dependent status (≥2 pRBC units/8 weeks) is key eligibility threshold for momelotinib, luspatercept, and imetelstat clinical trials; monthly ESA (darbepoetin alfa q3wk or epoetin alfa weekly) hemoglobin response monitoring with target 10–11 g/dL and serum EPO response prediction (<125 mU/mL threshold); quarterly CIBMTR TED (Transplant Essential Data) and CRF (Comprehensive Report Form) submissions for all allogeneic HSCT recipients — 100-day, 6-month, 1-year, and annual intervals; donor search coordination documentation (NMDP/Be The Match) for Intermediate-2 and High DIPSS patients; and annual post-HSCT chimerism analysis (donor/recipient STR), CMV/EBV PCR surveillance through Day +100, and aGVHD/cGVHD grading per NIH consensus criteria with ruxolitinib steroid-refractory GVHD compliance tracking.",
  },
]

const studies = [
  {
    title: "COMFORT-I (Ruxolitinib in MF) — NEJM 2012",
    finding:
      "Phase III randomized trial of 309 MF patients (PMF, post-PV MF, post-ET MF) with ruxolitinib versus placebo showed SVR35 at Week 24 in 41.9% versus 0.7% placebo (P<0.001), TSS50 response in 45.9% versus 5.3%, and improved 5-year overall survival (HR 0.67, P=0.003). Spleen response was durable in 57% of responders at 3 years.",
    implication:
      "MF NPs must document baseline and Week-12/24 spleen volume by MRI per COMFORT-I protocol, administer MPN-SAF v2.0 TSS at every visit, and calculate SVR35 response at Week 24. Ruxolitinib abrupt discontinuation causes rapid spleen rebound and cytokine storm — NPs must taper doses when discontinuing and document gradual dose reductions in the medical record.",
  },
  {
    title: "MOMENTUM (Momelotinib vs. Danazol) — NEJM 2023",
    finding:
      "Phase III trial of 195 transfusion-dependent MF patients previously on JAK inhibitors showed momelotinib 200 mg/day achieved TSS50 response in 24.6% versus 9.2% danazol (P=0.0095), SVR35 in 23.1% versus 3.1% (P<0.001), and transfusion independence ≥12 weeks in 30.0% versus 20.0% (P=0.0064), establishing TI as an independently clinically meaningful endpoint.",
    implication:
      "NPs switching transfusion-dependent MF patients from ruxolitinib to momelotinib must document cumulative prior transfusion burden (pRBC units per 8-week period), baseline hemoglobin, and ACVR1/hepcidin pathway biomarkers where available. Monthly hemoglobin tracking with TI documentation at 24 weeks is required to assess the three co-primary MOMENTUM endpoints (TSS50, SVR35, TI rate) in clinical reporting.",
  },
  {
    title: "PACIFICA (Pacritinib in Thrombocytopenic MF) — NEJM Evidence 2023",
    finding:
      "Phase III trial of 163 MF patients with platelets <50,000/μL — a population with no approved JAK inhibitor option pre-pacritinib — showed SVR35 at Week 24 in 22.3% versus 3.1% BAT (P=0.0003) and TSS50 response in 24.6% versus 7.7%, with manageable GI toxicity profile. Pacritinib had no dose-limiting thrombocytopenia at 200 mg BID.",
    implication:
      "NPs managing severely thrombocytopenic MF (platelets <50,000/μL) must obtain baseline and weekly platelet counts for the first 4 weeks of pacritinib, document cardiovascular risk assessment (QTc prolongation monitoring — ECG at baseline, Week 4, and after dose changes), and report any Grade ≥3 hemorrhagic events. Platelet transfusion threshold protocol (<10,000/μL prophylactic) should be co-documented with pacritinib dosing.",
  },
  {
    title: "JAKARTA-2 (Fedratinib After Ruxolitinib) — Lancet Haematol 2017",
    finding:
      "Phase II single-arm trial of 97 MF patients relapsed or refractory to ruxolitinib showed fedratinib 400 mg/day achieved SVR35 in 55% at Week 24 and TSS50 in 36%, with median spleen volume reduction of 37%. FDA approved fedratinib for intermediate/high-risk MF regardless of prior ruxolitinib exposure, including relapsed/refractory settings.",
    implication:
      "NPs transitioning patients from ruxolitinib failure to fedratinib must document ruxolitinib resistance/intolerance criteria (SVR35 non-response at Week 24 or dose-limiting cytopenia), initiate thiamine 100 mg TID before fedratinib Day 1, and obtain baseline thiamine level. Monthly neurologic symptom assessment for encephalopathy (Wernicke's triad: confusion, ataxia, ophthalmoplegia) is an FDA REMS-equivalent clinical requirement — any neurologic symptoms mandate immediate fedratinib hold and IV thiamine.",
  },
  {
    title: "IMETELSTAT in Relapsed/Refractory MF (IMbark) — J Clin Oncol 2021",
    finding:
      "Phase II trial of 107 relapsed/refractory MF patients treated with imetelstat 9.4 mg/kg IV q3wk showed 2-year OS of 28 months (high-dose arm) versus 20 months (low-dose), TSS50 in 32%, and bone marrow fibrosis improvement in 42% — the first agent to demonstrate MF fibrosis regression. imetelstat received FDA Breakthrough Therapy designation.",
    implication:
      "MF NPs managing post-JAK inhibitor patients should monitor every-3-week CBC for imetelstat cytopenias (Grade 3/4 thrombocytopenia in 37%, neutropenia in 23%), document liver function tests (ALT/AST monthly — hepatotoxicity risk), track MF grade by bone marrow biopsy at 6-month intervals for fibrosis regression, and report any Grade ≥3 adverse events to the treating hematologist and institutional registry within 24 hours per clinical trial protocol or compassionate use documentation requirements.",
  },
]

const schedule = [
  {
    frequency: "Every 4 Years",
    item: "AOCNP Certification Renewal (ONCC)",
    details:
      "Advanced Oncology Certified Nurse Practitioner — 45 CE credits required, including hematologic malignancy and MPN-specific CE. Submit via ONCC OCT tracker. Include ASH MPN session CE and MPN Advocacy Foundation educational credits.",
  },
  {
    frequency: "Every 5 Years",
    item: "AGACNP-BC Renewal (ANCC)",
    details:
      "Adult-Gerontology Acute Care NP renewal — 1,000 clinical practice hours plus 75 CE credits (25 pharmacology) for inpatient MF blast crisis co-management, HSCT co-management, and steroid-refractory GVHD ruxolitinib management.",
  },
  {
    frequency: "Every 2 Weeks",
    item: "Ruxolitinib CBC With Differential",
    details:
      "CBC with differential and platelet count for JAK inhibitor dose optimization during the first 12 weeks of ruxolitinib therapy. Trigger dose reduction at platelets <100,000/μL per FDA label algorithm. Document dose changes in the medical record same-day.",
  },
  {
    frequency: "Monthly",
    item: "Fedratinib Thiamine Level & Neurologic Screen",
    details:
      "Serum thiamine level monthly plus neurologic symptom assessment (confusion, ataxia, ocular disturbance) for encephalopathy surveillance; thiamine 100 mg TID supplementation compliance verification; ALT/AST and GI toxicity (diarrhea, nausea, vomiting) grading per CTCAE v5.0.",
  },
  {
    frequency: "Monthly",
    item: "Momelotinib Hemoglobin & Transfusion Independence",
    details:
      "Hemoglobin and pRBC transfusion count per 8-week rolling window — transfusion independence (TI ≥12 weeks) documentation per MOMENTUM trial primary endpoint. Hepcidin biomarker trending where available. ACVR1 pathway response correlation.",
  },
  {
    frequency: "Quarterly",
    item: "MPN-SAF v2.0 Total Symptom Score",
    details:
      "Myeloproliferative Neoplasm Symptom Assessment Form version 2.0 — seven domains (fatigue, concentration, early satiety, inactivity, night sweats, pruritus, bone pain, abdominal discomfort, weight loss) with TSS50 response documentation since JAK inhibitor initiation. Standard of care at all MPN center visits per NCCN guidelines.",
  },
  {
    frequency: "Quarterly",
    item: "CIBMTR TED/CRF Data Submission",
    details:
      "Center for International Blood and Marrow Transplant Research — Transplant Essential Data and Comprehensive Report Form submissions at Day 100, 6 months, 1 year, and annually post-allogeneic HSCT for all MF transplant recipients. Drives national MF transplant outcome reporting.",
  },
  {
    frequency: "Semiannual",
    item: "Spleen Volume MRI & IWG-MRT Response Assessment",
    details:
      "MRI spleen volume at 6-month intervals versus baseline for SVR35 (≥35% reduction) response classification per IWG-MRT 2013 criteria. Monthly palpable spleen measurement (cm below LCM) as interval surrogate. Progressive splenomegaly triggers tumor board review and treatment switch consideration.",
  },
  {
    frequency: "Semiannual",
    item: "Bone Marrow Biopsy With WHO 2022 MF Grading",
    details:
      "Bone marrow biopsy with reticulin/collagen fibrosis scoring (MF-0/1/2/3), cytogenetics, FISH for unfavorable karyotype, and NGS panel for molecular clonal evolution. Blast % surveillance for accelerated-phase (10–19%) or blast-phase (≥20%) transformation — triggers immediate HSCT evaluation.",
  },
  {
    frequency: "Annual",
    item: "DIPSS-Plus & MIPSS70+ v2.0 Re-Stratification",
    details:
      "Annual DIPSS-Plus risk recalculation with updated CBC, blast %, transfusion status, and cytogenetics; plus MIPSS70+ v2.0 molecular update integrating full 35-gene NGS (ASXL1, EZH2, IDH1/2, SRSF2, TP53, U2AF1) for HSCT timing refinement in eligible patients aged ≤70.",
  },
]

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Myelofibrosis Nurse Practitioners · Momenties"
        title="Every Certification. Every JAK Inhibitor CBC. Every CIBMTR Deadline."
        subtitle="Myelofibrosis NPs co-manage one of hematology's most complex protocol portfolios — biweekly ruxolitinib CBC dose adjustments, monthly momelotinib hemoglobin and transfusion independence tracking, quarterly MPN-SAF symptom scoring, semiannual spleen MRI response measurements, annual MIPSS70+ molecular re-stratification, AOCNP and AGACNP-BC certification renewals, and rolling CIBMTR transplant registry submissions. Momenties consolidates every deadline into one calendar so nothing slips."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)", textAlign: "center" }}>
            Built for the Full Myelofibrosis NP Practice
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

      {/* Evidence Base */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)", textAlign: "center" }}>
            The Evidence Base Driving Myelofibrosis NP Compliance
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {studies.map((s) => (
              <div key={s.title} style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "28px 32px" }}>
                <div style={{ color: "#c5a35c", fontWeight: 700, fontSize: 14, marginBottom: 12 }}>{s.title}</div>
                <p style={{ color: "#f0ece3", fontSize: 14, lineHeight: 1.65, marginBottom: 10 }}>
                  <strong>Finding:</strong> {s.finding}
                </p>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: 14, lineHeight: 1.65 }}>
                  <strong>NP Implication:</strong> {s.implication}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* CE & Monitoring Schedule */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)", textAlign: "center" }}>
            Myelofibrosis NP Certification & Monitoring Schedule
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {schedule.map((item) => (
              <div
                key={item.item}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  gap: 20,
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  alignItems: "start",
                }}
              >
                <div style={{ color: "#c5a35c", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.frequency}</div>
                <div>
                  <div style={{ color: "#f0ece3", fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{item.item}</div>
                  <div style={{ color: "rgba(240,236,227,0.65)", fontSize: 13, lineHeight: 1.6 }}>{item.details}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}><CTA /></div>
    </main>
  )
}
