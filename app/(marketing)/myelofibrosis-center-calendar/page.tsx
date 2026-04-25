import type { Metadata } from "next"
import { BarChart3, ClipboardList, Stethoscope, UserCheck } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Myelofibrosis Center Scheduling & Compliance Calendar | Momenties",
  description:
    "Automate myelofibrosis JAK inhibitor (ruxolitinib/fedratinib/pacritinib/momelotinib) CBC monitoring, spleen response assessments, MF symptom burden scoring, Dynamic IPSS-Plus prognostic re-stratification, transplant evaluation timelines, and hematology registry reporting for MF treatment centers.",
}

const pillars = [
  {
    icon: ClipboardList,
    title: "JAK Inhibitor Protocol & CBC Monitoring",
    description:
      "Ruxolitinib (Jakafi) 5–20 mg BID dose-optimization with CBC and differential every 2–4 weeks during the first 3 months of therapy, then monthly thereafter — dose reduction triggers include platelet count <100,000/μL (reduce 5 mg BID) and <50,000/μL (hold); weekly CBC for the first 4 weeks of fedratinib (Inrebic) 400 mg/day with thiamine supplementation (encephalopathy risk) and monthly thereafter; pacritinib (Vonjo) 200 mg BID monitoring with weekly platelet count the first 4 weeks for thrombocytopenic MF (platelets <50,000/μL); momelotinib (Ojjaara) 200 mg/day with monthly hemoglobin trending — anemia response documented as transfusion independence (TI) rate at 24 weeks per MOMENTUM trial endpoint; quarterly total symptom score (TSS) via Myeloproliferative Neoplasm Symptom Assessment Form (MPN-SAF) v2.0 for spleen and constitutional symptom tracking; and semiannual bone marrow biopsy with MF grading (MF-0/1/2/3 per WHO 2022) and cytogenetic analysis for clonal evolution surveillance.",
  },
  {
    icon: Stethoscope,
    title: "Spleen Response & Imaging Surveillance",
    description:
      "Spleen volume measurement by MRI (gold standard) or CT at baseline, Week 12, and every 6 months thereafter — response threshold ≥35% spleen volume reduction (SVR35) per IWG-MRT 2013 criteria for JAK inhibitor response classification; monthly palpable spleen length assessment (cm below LCM) in clinic as interim surrogate between imaging intervals; ultrasound monitoring for patients unable to undergo MRI (claustrophobia, pacemaker); liver size and portal hypertension assessment by ultrasound annually — hepatosplenomegaly contributes to MF-associated cytopenias and portal hypertension requiring subspecialty co-management; spleen response documentation per NCCN MPN guidelines with IWG-MRT categories (CI: complete remission of palpable splenomegaly; PR: ≥50% reduction; minor response: <50%; stable; progressive disease); and quarterly symptom-spleen correlation analysis linking MPN-SAF TSS improvement (≥50% TSS50 response) to SVR35 imaging outcomes per COMFORT-I and COMFORT-II trial benchmarks.",
  },
  {
    icon: BarChart3,
    title: "DIPSS-Plus Prognostication & Transplant Evaluation",
    description:
      "Dynamic IPSS-Plus (DIPSS-Plus) re-stratification annually incorporating eight adverse factors (age >65, constitutional symptoms, Hgb <10 g/dL, WBC >25×10⁹/L, blasts ≥1%, transfusion dependence, platelets <100×10⁹/L, unfavorable karyotype — complex/monosomy 7/-7/i(17q)) to classify Low/Intermediate-1/Intermediate-2/High risk for allogeneic HSCT referral timing; MIPSS70+ v2.0 (Mutation-Enhanced IPSS) incorporating high-risk mutations (ASXL1, EZH2, IDH1/2, SRSF2, SF3B1, U2AF1-Q157, TP53, CBL) for molecular risk-adjusted prognostication; semi-annual next-generation sequencing panel (JAK2 V617F VAF quantification, CALR type 1/2, MPL, triple-negative driver mutation testing) for clonal trajectory monitoring; annual HCT-CI comorbidity scoring and CIBMTR risk assessment for transplant-eligible patients aged ≤70; quarterly bone marrow blast % surveillance — accelerated phase (blast 10–19%) or blast phase MF (≥20% blasts) triggers immediate transplant evaluation regardless of DIPSS category; and biannual multi-disciplinary tumor board presentation for Intermediate-2 and High-risk MF patients to align transplant timing, conditioning regimen selection, and donor search.",
  },
  {
    icon: UserCheck,
    title: "Anemia Management & Transfusion Protocols",
    description:
      "Monthly hemoglobin and reticulocyte trending for transfusion-dependent MF — transfusion dependence defined as ≥2 pRBC units per 8-week period, the key eligibility threshold for momelotinib (ACVR1/ALK2 inhibitor reducing hepcidin) and luspatercept (activin receptor ligand trap) trials; biweekly ESA (darbepoetin alfa 500 mcg q3wk or epoetin alfa 40,000 units weekly) response monitoring with hemoglobin target 10–11 g/dL — ESA response prediction by serum EPO <125 mU/mL and transfusion burden <2 units/month; monthly danazol 600 mg/day CBC and hepatic function panel for anemia/thrombocytopenia with LFT monitoring quarterly; quarterly ferritin and transferrin saturation for iron overload in transfusion-dependent patients — chelation initiation (deferasirox 14 mg/kg/day) when ferritin >1,000 ng/mL or cumulative ≥20 pRBC units; immune thrombocytopenia differentiation protocol — anti-platelet antibody testing and bone marrow biopsy for new thrombocytopenia; and annual vitamin B12, folate, and LDH review — elevated LDH reflects ineffective erythropoiesis and disease activity serving as a surrogate MF activity biomarker alongside constitutional symptom burden.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Baseline DIPSS-Plus, NGS Panel & JAK Inhibitor Initiation",
    description:
      "Complete DIPSS-Plus and MIPSS70+ v2.0 risk stratification at diagnosis and JAK inhibitor initiation. Obtain baseline MRI spleen volume, MPN-SAF TSS, HCT-CI score, and 35-gene NGS panel (JAK2 VAF, CALR type, MPL, ASXL1, EZH2, IDH1/2, SRSF2, TP53). Initiate ruxolitinib, fedratinib, pacritinib, or momelotinib per platelet threshold. Schedule biweekly CBC for first 6 weeks.",
  },
  {
    month: "Month 3–4",
    title: "Week-12 Spleen Response Assessment & Dose Optimization",
    description:
      "Complete Week-12 spleen volume measurement (MRI or CT) versus baseline — document SVR35 response per IWG-MRT 2013 criteria. Evaluate MPN-SAF TSS50 response. Optimize JAK inhibitor dose based on CBC profile. Complete first formal transfusion independence assessment for momelotinib-treated patients. Review thiamine levels for fedratinib patients. Adjust for dose-limiting cytopenias.",
  },
  {
    month: "Month 5–6",
    title: "6-Month DIPSS Re-stratification & Transplant Referral Screening",
    description:
      "Perform 6-month DIPSS-Plus re-stratification with repeat bone marrow biopsy and cytogenetics. Identify Intermediate-2 and High-risk patients for HSCT referral and HLA typing. Repeat NGS panel for ASXL1, EZH2, IDH1/2, SRSF2, TP53 clonal evolution monitoring. Complete semi-annual spleen MRI. Review CBC trends and dose modifications. Initiate CIBMTR pre-transplant baseline data entry.",
  },
  {
    month: "Month 7–8",
    title: "Anemia Protocol Audit & Transfusion Burden Documentation",
    description:
      "Complete cumulative transfusion burden audit — document pRBC units per 8-week periods for momelotinib and luspatercept eligibility thresholds. Initiate deferasirox chelation for ferritin >1,000 ng/mL or cumulative ≥20 pRBC units. Review ESA response (EPO <125 mU/mL, hemoglobin trends) and danazol hepatic function. Assess accelerated-phase transformation (blast %) and update transplant timeline if needed.",
  },
  {
    month: "Month 9–10",
    title: "MPN-SAF Symptom Re-assessment & Quality of Life Reporting",
    description:
      "Administer MPN-SAF v2.0 total symptom score for all active MF patients — document fatigue, night sweats, pruritus, bone pain, and abdominal discomfort. Calculate TSS50 responders versus non-responders since JAK inhibitor initiation. Review symptom-spleen volume correlation. Present non-responders and progressive patients at multi-disciplinary tumor board. Audit splenic irradiation documentation where applicable.",
  },
  {
    month: "Month 11–12",
    title: "Annual MIPSS70+ Review, CIBMTR Submission & Center Benchmarking",
    description:
      "Complete annual MIPSS70+ v2.0 molecular re-stratification with full 35-gene NGS. Submit annual CIBMTR TED and CRF forms for all HSCT recipients. Compile annual MF Center quality report — SVR35 response rates, TI rates, MPN-SAF TSS50 response, HSCT referral rates, and OS benchmarks. Plan next-year donor search timelines for Intermediate-2/High DIPSS patients. Prepare for ASH Annual Meeting MPN session reporting.",
  },
]

const kpis = [
  {
    metric: "≥35%",
    target: "SVR35 Spleen Volume Reduction",
    description:
      "IWG-MRT 2013 benchmark for JAK inhibitor spleen response at Week 24; COMFORT-I/II trials reported 42% SVR35 with ruxolitinib versus 0–1% control.",
  },
  {
    metric: "≥50%",
    target: "MPN-SAF TSS50 Response",
    description:
      "Total symptom score improvement ≥50% from baseline at 24 weeks; primary endpoint of COMFORT-II and key secondary endpoint of MOMENTUM (momelotinib) trial.",
  },
  {
    metric: "≥30%",
    target: "Transfusion Independence Rate",
    description:
      "Proportion of transfusion-dependent patients achieving TI ≥12 weeks on momelotinib; 30% TI rate at Week 24 per SIMPLIFY-1 and MOMENTUM trial data.",
  },
  {
    metric: "100%",
    target: "CIBMTR Quarterly Submission On-Time",
    description:
      "Quarterly TED and CRF form submission for all allogeneic HSCT recipients at 100-day, 6-month, 1-year, and annual post-transplant intervals per CIBMTR requirements.",
  },
  {
    metric: "≥50%",
    target: "5-Year OS Post Allogeneic HSCT",
    description:
      "Median 5-year overall survival benchmark for Intermediate-2/High DIPSS MF patients undergoing reduced-intensity conditioning allogeneic HSCT aged <70 years.",
  },
  {
    metric: "Semiannual",
    target: "Bone Marrow Biopsy Interval",
    description:
      "WHO 2022 MF grading (MF-0 through MF-3) and cytogenetic surveillance every 6 months for high-risk MF, annually for low/intermediate-1 risk patients on stable therapy.",
  },
]

const testimonial = {
  quote:
    "Managing an MF program means tracking ruxolitinib CBC checks every 2–4 weeks, quarterly MPN-SAF symptom scores, semiannual spleen MRI volumes, annual MIPSS70+ molecular re-stratification, rolling CIBMTR transplant registry submissions, and continuous donor search coordination for Intermediate-2 and High DIPSS patients — all simultaneously across a busy clinic. Momenties structured every deadline into one calendar. Our center hit 44% SVR35 spleen response and 100% on-time CIBMTR quarterly submission compliance within one year.",
  name: "Dr. Sarah Holloway",
  title: "Director of MPN Program, Academic Hematology Center",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Myelofibrosis Center · Momenties"
        title="Every JAK Inhibitor CBC. Every Spleen MRI. One Calendar."
        subtitle="Myelofibrosis treatment centers manage one of hematology's most protocol-dense patient populations — biweekly JAK inhibitor CBC dose adjustments, quarterly MPN-SAF symptom assessments, semiannual spleen MRI response measurements, annual MIPSS70+ molecular re-stratification, rolling CIBMTR transplant registry submissions, and continuous HSCT donor search coordination for high-risk DIPSS patients. Momenties automates every deadline so your MF center achieves top-tier spleen response rates, transfusion independence, and transplant outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)", textAlign: "center" }}>
            Built for the Full Myelofibrosis Center Compliance Lifecycle
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

      {/* 12-Month Timeline */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 12, fontFamily: "var(--font-display)", textAlign: "center" }}>
            12-Month Myelofibrosis Center Implementation Roadmap
          </h2>
          <p style={{ color: "rgba(240,236,227,0.5)", fontSize: 14, textAlign: "center", marginBottom: 40 }}>
            Every JAK inhibitor dose adjustment, spleen volume measurement, molecular prognostication, and CIBMTR registry submission — sequenced across 12 months.
          </p>
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

      {/* KPIs */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)", textAlign: "center" }}>
            Performance Benchmarks for MF Center Excellence
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

      {/* Testimonial */}
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
