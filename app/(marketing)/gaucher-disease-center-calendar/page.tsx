import type { Metadata } from "next"
import { Database, Stethoscope, BarChart3, UserCheck, Calendar, Clock, ClipboardList, Target, Award, Shield } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Gaucher Disease Center — ERT, SRT & Monitoring Calendar | Momenties",
  description: "Complete scheduling for Gaucher disease centers — imiglucerase/velaglucerase/taliglucerase Q2-week ERT infusions, eliglustat/miglustat SRT monitoring, lyso-Gb1 and chitotriosidase biomarker trending, MRI liver/spleen volumetrics, DEXA bone density, GBA mutation typing, and pediatric-to-adult transition.",
}

const pillars = [
  {
    icon: Database,
    title: "ERT Infusion Scheduling & Monitoring",
    description:
      "Every-2-week enzyme replacement therapy infusion calendar across imiglucerase (Cerezyme) 60 U/kg IV, velaglucerase alfa (VPRIV) 60 U/kg IV, and taliglucerase alfa (Elelyso) 60 U/kg IV — with infusion-reaction surveillance, pre-medication protocols (diphenhydramine, acetaminophen), home infusion coordination, port and PICC line care intervals, anti-drug antibody (IgG) screening at month 3 / 6 / 12 and annually, dose titration based on hemoglobin / platelet response and organ volume reduction, and Q3-month line-of-sight visit scheduling for the entire ERT cohort.",
  },
  {
    icon: Stethoscope,
    title: "SRT Management & Lab Monitoring",
    description:
      "Substrate reduction therapy program for eliglustat (Cerdelga) 84 mg PO BID (CYP2D6 extensive/intermediate metabolizers) and miglustat (Zavesca) 100 mg PO TID — with mandatory CYP2D6 pharmacogenomic genotyping prior to eliglustat initiation, baseline ECG with QTc surveillance, drug-drug interaction screening (CYP2D6 / CYP3A inhibitors), miglustat GI tolerance and peripheral neuropathy assessment Q3-month, baseline and Q6-month hemoglobin / platelets / ferritin / chitotriosidase / CCL18 / lyso-Gb1, and quarterly therapeutic switch review for ERT-to-SRT transitions in stable type 1 patients.",
  },
  {
    icon: BarChart3,
    title: "Disease Severity & Organ Assessment",
    description:
      "Comprehensive Gaucher disease severity score index (GauSSI / DS3) tracking with annual MRI liver and spleen volumetrics (multiples of normal), Q2-year DEXA bone mineral density (lumbar spine and femoral neck T- / Z-scores), baseline and Q6-month chitotriosidase and CCL18 biomarker trending, quarterly lyso-Gb1 (glucosylsphingosine) as the primary disease-activity biomarker, GBA mutation typing (N370S/N370S, N370S/L444P, L444P/L444P, c.84dupG, IVS2+1G>A), and annual avascular necrosis / bone crisis screening with MRI of bilateral hips and femora.",
  },
  {
    icon: UserCheck,
    title: "Pediatric-to-Adult Transition",
    description:
      "Structured pediatric-to-adult care transition for type 1 and type 3 (neuronopathic) Gaucher patients beginning at age 14 — with annual transition readiness assessments, growth velocity and pubertal staging through adolescence, type 3 neurologic surveillance (oculomotor apraxia, supranuclear gaze palsy, seizure threshold, neurocognitive testing), genetic counseling and reproductive planning, ERT/SRT therapy continuity across pediatric and adult specialty handoff, insurance reauthorization at age 18, and full transfer of care documentation by age 21.",
  },
]

const timeline = [
  {
    month: "Month 1-2",
    title: "Onboarding, GBA Genotyping & ERT Initiation",
    description:
      "Confirm Gaucher diagnosis with leukocyte beta-glucocerebrosidase enzyme assay (<15% of normal) and GBA gene sequencing for mutation typing (N370S, L444P, c.84dupG, IVS2+1G>A, RecNciI). Establish baseline hemoglobin, platelets, ferritin, chitotriosidase, CCL18, lyso-Gb1, MRI liver/spleen volumes, DEXA bone density, and GauSSI severity score. Initiate imiglucerase / velaglucerase / taliglucerase 60 U/kg IV every 2 weeks with first 3 infusions in a monitored center; document anti-drug antibody baseline.",
  },
  {
    month: "Month 3-4",
    title: "Early ERT Response & Infusion Reaction Audit",
    description:
      "Q3-month CBC and biomarker panel (chitotriosidase, CCL18, lyso-Gb1) to track early hematologic response. Audit infusion-reaction events and pre-medication protocols (diphenhydramine, acetaminophen). Confirm home infusion candidacy for stable patients with no anaphylaxis history. Schedule first anti-drug antibody (IgG) screen. Initiate CYP2D6 pharmacogenomic genotyping for SRT eligibility evaluation.",
  },
  {
    month: "Month 5-6",
    title: "6-Month Hematologic & Biomarker Reassessment",
    description:
      "Q6-month hemoglobin, platelet, ferritin, chitotriosidase, CCL18, and lyso-Gb1 reassessment to confirm therapeutic response trajectory (target hemoglobin normalization within 12-24 months; platelet doubling within 12 months for moderate splenomegaly). Document anti-drug antibody month-6 screen. Schedule mid-year MRI for any patient with baseline hepatomegaly >3 MN or splenomegaly >15 MN. Assess SRT switch candidacy for stable type 1 adult patients.",
  },
  {
    month: "Month 7-8",
    title: "Bone Health & Avascular Necrosis Screening",
    description:
      "Annual bilateral hip and femoral MRI to screen for avascular necrosis, bone infarcts, and Erlenmeyer flask deformity. DEXA bone mineral density Q2-year (lumbar spine and femoral neck T-/Z-scores). Coordinate orthopedic consultation for any patient with bone crisis history or radiographic AVN. Initiate bisphosphonate therapy for patients with osteoporosis (T-score < -2.5).",
  },
  {
    month: "Month 9-10",
    title: "Annual Organ Volumetrics & GauSSI Re-Scoring",
    description:
      "Annual MRI liver and spleen volumetrics (multiples of normal) to confirm sustained organ-volume reduction (target liver <1.25 MN, spleen <2-8 MN). Re-score Gaucher disease severity index (GauSSI / DS3). Type 3 neuronopathic patients undergo full neurologic exam, oculomotor saccade assessment, EEG if seizure history, and neurocognitive testing.",
  },
  {
    month: "Month 11-12",
    title: "Annual Review, Pregnancy Planning & Transition Audit",
    description:
      "Comprehensive annual review of ERT / SRT response, biomarker trajectories, organ volumes, bone health, and quality of life. Reproductive counseling and pregnancy planning for women of childbearing age (ERT preferred over SRT during pregnancy and lactation). Carrier testing referrals for at-risk family members. Pediatric-to-adult transition milestone audit for adolescents aged 14-21. Plan next-year infusion calendar, biomarker schedule, and imaging cadence.",
  },
]

const kpis = [
  {
    metric: "100%",
    target: "On-Time Q2-Week ERT Infusions",
    description: "Imiglucerase / velaglucerase / taliglucerase scheduled and administered within ±3 days of due date.",
  },
  {
    metric: "≥95%",
    target: "Hemoglobin Normalization at 24 Months",
    description: "Treatment-naive type 1 patients reaching hemoglobin >11 g/dL (women) or >12 g/dL (men) on ERT.",
  },
  {
    metric: "≥80%",
    target: "Lyso-Gb1 Reduction at 12 Months",
    description: "Plasma lyso-Gb1 (glucosylsphingosine) drop versus baseline as the primary disease-activity biomarker.",
  },
  {
    metric: "100%",
    target: "CYP2D6 Genotyping Before Eliglustat",
    description: "Pharmacogenomic CYP2D6 phenotype documented prior to every eliglustat (Cerdelga) initiation.",
  },
  {
    metric: "Q6-Month",
    target: "Biomarker & CBC Surveillance",
    description: "Hemoglobin, platelets, ferritin, chitotriosidase, CCL18, lyso-Gb1 trended every 6 months.",
  },
  {
    metric: "100%",
    target: "Pediatric-to-Adult Transition by Age 21",
    description: "All adolescent patients fully transferred to adult specialty care with documented handoff.",
  },
]

const testimonial = {
  quote:
    "Running a Gaucher disease center means juggling Q2-week ERT infusion logistics, eliglustat CYP2D6 genotyping, lyso-Gb1 quarterly tracking, annual MRI organ volumetrics, DEXA bone density, GauSSI severity re-scoring, type 3 neurologic surveillance, and pediatric-to-adult transition for dozens of patients on lifelong therapy. Momenties consolidated every infusion, biomarker, and imaging deadline into a single calendar — and our 24-month hemoglobin normalization rate climbed past 95% with zero missed infusions.",
  name: "Dr. E. Bembi",
  title: "Gaucher Disease Center Director",
}

export default function GaucherDiseaseCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh", color: "#f0ece3", fontFamily: "DM Sans, sans-serif" }}>
      <PageHero
        eyebrow="Gaucher Disease Center Calendar"
        title="Gaucher Disease Center — ERT, SRT & Monitoring Calendar"
        subtitle="Complete scheduling for Gaucher disease centers — enzyme replacement therapy infusion cycles, substrate reduction therapy monitoring, disease severity assessment, bone crisis management, and transition from pediatric to adult care."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontFamily: "Playfair Display, serif", marginBottom: 48, color: "#f0ece3" }}>
            Built for the Full Gaucher Disease Care Continuum
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 28 }}>
            {pillars.map(({ icon: Icon, title, description }) => (
              <div key={title} style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 28 }}>
                <Icon size={28} color="#c5a35c" style={{ marginBottom: 14 }} />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 10, color: "#f0ece3" }}>{title}</h3>
                <p style={{ fontSize: "0.92rem", color: "#a0998e", lineHeight: 1.65 }}>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* 12-Month Timeline */}
      <Reveal>
        <section style={{ background: "#0a0a0d", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontFamily: "Playfair Display, serif", marginBottom: 12, color: "#f0ece3" }}>
              The Gaucher Disease Center Calendar — Every Two Months
            </h2>
            <p style={{ textAlign: "center", color: "#a0998e", marginBottom: 56, fontSize: "0.97rem" }}>
              Every ERT infusion cycle, biomarker draw, imaging study, and severity re-score — sequenced across 12 months.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map((item) => (
                <div key={item.month} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 24, background: "#131318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "24px 28px", alignItems: "start" }}>
                  <div>
                    <div style={{ color: "#c5a35c", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{item.month}</div>
                    <div style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.97rem", lineHeight: 1.4 }}>{item.title}</div>
                  </div>
                  <p style={{ color: "#a0998e", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontFamily: "Playfair Display, serif", marginBottom: 48, color: "#f0ece3" }}>
              The 6 KPIs That Define Gaucher Disease Center Excellence
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
              {kpis.map((kpi) => (
                <div key={kpi.target} style={{ background: "#131318", border: "1px solid rgba(197,163,92,0.2)", borderRadius: 14, padding: "28px 22px", textAlign: "center" }}>
                  <div style={{ fontSize: "clamp(1.4rem,2.5vw,1.9rem)", fontWeight: 700, color: "#c5a35c", fontFamily: "Playfair Display, serif", marginBottom: 8 }}>{kpi.metric}</div>
                  <div style={{ fontSize: "0.95rem", color: "#f0ece3", fontWeight: 600, marginBottom: 8 }}>{kpi.target}</div>
                  <div style={{ fontSize: "0.85rem", color: "#a0998e", lineHeight: 1.55 }}>{kpi.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ background: "#0e0e12", padding: "72px 24px" }}>
          <blockquote style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", color: "#c5a35c", marginBottom: 16, lineHeight: 1 }}>&ldquo;</div>
            <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: "#f0ece3", lineHeight: 1.7, fontStyle: "italic", marginBottom: 28 }}>
              {testimonial.quote}
            </p>
            <footer>
              <div style={{ fontWeight: 700, color: "#c5a35c", fontSize: "0.95rem" }}>{testimonial.name}</div>
              <div style={{ color: "#a0998e", fontSize: "0.88rem", marginTop: 4 }}>{testimonial.title}</div>
            </footer>
          </blockquote>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
