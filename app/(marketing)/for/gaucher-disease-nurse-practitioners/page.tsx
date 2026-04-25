import type { Metadata } from "next"
import { Database, BarChart3, Heart, BookOpen, Calendar, Clock, Stethoscope, UserCheck, Shield, ClipboardList } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Gaucher Disease NPs — Scheduling for a Lifelong Lysosomal Storage Disorder | Momenties",
  description: "Purpose-built for nurse practitioners managing Gaucher disease — ERT infusion coordination, lyso-Gb1 quarterly trending, MRI organ volumetrics, bone crisis management, eliglustat CYP2D6 pharmacogenomic counseling, pregnancy management, and carrier-testing referrals.",
}

const pillars = [
  {
    icon: Database,
    title: "ERT Infusion Coordination",
    description:
      "Own the every-2-week ERT infusion calendar across imiglucerase (Cerezyme) 60 U/kg IV, velaglucerase alfa (VPRIV) 60 U/kg IV, and taliglucerase alfa (Elelyso) 60 U/kg IV — including diphenhydramine and acetaminophen pre-medication for patients with prior infusion reactions, port-a-cath and PICC line care, home-infusion candidacy reviews, anti-drug antibody (IgG) screening at month 3 / 6 / 12 and annually, and proactive rescheduling when biomarker trends or hemoglobin response signal a need for dose titration.",
  },
  {
    icon: BarChart3,
    title: "Biomarker & Organ Monitoring",
    description:
      "Drive the Q3-month lyso-Gb1 (glucosylsphingosine) trend as the primary disease-activity biomarker, with paired Q6-month chitotriosidase, CCL18, hemoglobin, platelets, and ferritin. Schedule annual MRI liver and spleen volumetrics (multiples of normal), Q2-year DEXA bone mineral density, GauSSI / DS3 disease severity re-scoring, and coordinate hematology and metabolic-disease specialist visits around incoming biomarker results so therapy decisions are never waiting on missing labs.",
  },
  {
    icon: Heart,
    title: "Bone Health & Crisis Management",
    description:
      "Manage skeletal manifestations — Erlenmeyer flask deformity, avascular necrosis of the femoral head, vertebral collapse, and acute bone crises — by coordinating bilateral hip and femoral MRI annually, orthopedic consultation for radiographic AVN, bisphosphonate therapy for osteoporosis (T-score < -2.5), pain-management plans for bone crisis episodes, and physical-therapy referrals after surgical interventions such as hip arthroplasty or core decompression.",
  },
  {
    icon: BookOpen,
    title: "Patient Education & Adherence",
    description:
      "Lead patient and family education on lifelong therapy — eliglustat (Cerdelga) CYP2D6 pharmacogenomic counseling and drug-drug interaction screening, miglustat (Zavesca) GI tolerance and peripheral neuropathy education, pregnancy and lactation planning (ERT preferred over SRT), carrier-testing referrals for siblings and children, type 3 neuronopathic family counseling, autosomal recessive inheritance explanation, and Gaucher Community Alliance / National Gaucher Foundation patient-resource navigation.",
  },
]

const timeline = [
  {
    month: "Month 1-2",
    title: "Patient Onboarding & ERT Initiation",
    description:
      "Lead the new-patient intake — confirm Gaucher diagnosis with leukocyte beta-glucocerebrosidase enzyme assay and GBA gene sequencing (N370S, L444P, c.84dupG, IVS2+1G>A). Establish baseline hemoglobin, platelets, ferritin, chitotriosidase, CCL18, lyso-Gb1, MRI liver/spleen volumes, and DEXA bone density. Coordinate first 3 ERT infusions in monitored center, with diphenhydramine pre-medication for any patient flagged for infusion-reaction risk.",
  },
  {
    month: "Month 3-4",
    title: "Q3 Biomarker Draw & Adherence Check-In",
    description:
      "Run the Q3-month lyso-Gb1, chitotriosidase, and CCL18 panel. Document any infusion-reaction events and adjust pre-medication protocols. Confirm home-infusion candidacy for patients with no anaphylaxis history. Order CYP2D6 pharmacogenomic genotyping for patients being evaluated for SRT switch. Schedule first anti-drug antibody screen.",
  },
  {
    month: "Month 5-6",
    title: "6-Month Hematologic Reassessment",
    description:
      "Q6-month CBC and full biomarker panel. Track hemoglobin and platelet trajectory toward therapeutic goals (hemoglobin normalization within 12-24 months, platelet doubling within 12 months for moderate splenomegaly). Counsel patients on expected response timeline and reinforce adherence. Coordinate hematology specialist visit around incoming results.",
  },
  {
    month: "Month 7-8",
    title: "Bone Health Audit & Orthopedic Coordination",
    description:
      "Review bone-pain history, schedule annual bilateral hip and femoral MRI to screen for AVN and bone infarcts. Coordinate orthopedic consultation for any patient with prior bone crisis or radiographic AVN. Initiate or renew bisphosphonate therapy for osteoporosis. Schedule physical therapy follow-up for post-surgical patients.",
  },
  {
    month: "Month 9-10",
    title: "Annual Imaging & Pregnancy Planning",
    description:
      "Annual MRI liver and spleen volumetrics, Q2-year DEXA. For women of childbearing age, deliver pre-conception counseling — ERT preferred over SRT during pregnancy and lactation, contraception review for patients on eliglustat or miglustat, carrier-testing referrals for partners. For type 3 patients, schedule full neurologic exam and neurocognitive testing.",
  },
  {
    month: "Month 11-12",
    title: "Annual Review, Carrier Testing & Care Plan Renewal",
    description:
      "Lead the comprehensive annual review — ERT/SRT response, lyso-Gb1 trajectory, organ volumes, bone health, quality of life. Update GauSSI / DS3 severity score. Carrier-testing referrals for at-risk siblings and adult children. Insurance reauthorization. Plan next-year infusion calendar, biomarker schedule, and imaging cadence. For adolescents, advance pediatric-to-adult transition milestones.",
  },
]

const kpis = [
  {
    metric: "100%",
    target: "ERT Infusions On Schedule",
    description: "Every-2-week imiglucerase / velaglucerase / taliglucerase administered within ±3 days of due date.",
  },
  {
    metric: "Q3-Month",
    target: "Lyso-Gb1 Trend Tracking",
    description: "Quarterly plasma lyso-Gb1 documented as the primary disease-activity biomarker.",
  },
  {
    metric: "100%",
    target: "CYP2D6 Genotyping Before Eliglustat",
    description: "Pharmacogenomic phenotype confirmed before every eliglustat (Cerdelga) prescription.",
  },
  {
    metric: "Annual",
    target: "MRI Organ Volumetrics",
    description: "Liver and spleen multiples-of-normal documented annually for every active patient.",
  },
  {
    metric: "≥95%",
    target: "Hemoglobin Normalization at 24 Months",
    description: "Treatment-naive type 1 patients reaching therapeutic hemoglobin targets on ERT.",
  },
  {
    metric: "100%",
    target: "Pregnancy & Carrier-Test Counseling",
    description: "Every patient of reproductive age receives documented counseling and partner-testing referrals.",
  },
]

const testimonial = {
  quote:
    "Gaucher disease is lifelong, multisystem, and biomarker-driven — every patient needs a Q2-week ERT infusion, Q3-month lyso-Gb1, annual MRI, DEXA every two years, CYP2D6 genotyping before eliglustat, and pregnancy-planning conversations layered on top. Momenties consolidated infusion days, biomarker draws, MRI, hematology and orthopedic visits, and adherence check-ins into a single calendar. I haven't missed an infusion or a lyso-Gb1 draw since.",
  name: "Lena M., AGPCNP-BC",
  title: "Metabolic Disease NP, Lysosomal Storage Disorder Clinic",
}

export default function GaucherDiseaseNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh", color: "#f0ece3", fontFamily: "DM Sans, sans-serif" }}>
      <PageHero
        eyebrow="Gaucher Disease Nurse Practitioners"
        title="Gaucher Disease NPs — Scheduling for a Lifelong Lysosomal Storage Disorder"
        subtitle="Purpose-built for NPs managing Gaucher disease patients — from ERT infusion coordination and biomarker trending to bone crisis management and lifelong treatment optimization."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontFamily: "Playfair Display, serif", marginBottom: 48, color: "#f0ece3" }}>
            Built for the Full Gaucher Disease NP Practice
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
              The Gaucher Disease NP Calendar — Every Two Months
            </h2>
            <p style={{ textAlign: "center", color: "#a0998e", marginBottom: 56, fontSize: "0.97rem" }}>
              Every ERT infusion, biomarker draw, imaging study, and patient-education touchpoint — sequenced across 12 months.
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
              The 6 KPIs That Define Gaucher Disease NP Excellence
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
