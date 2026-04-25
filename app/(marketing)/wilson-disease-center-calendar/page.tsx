import type { Metadata } from "next"
import { Stethoscope, Database, Heart, ClipboardList, Calendar, Clock, BarChart3, Target, Users2, Award } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Wilson Disease Center Calendar — Chelation, Copper Surveillance & Liver Transplant Coordination | Momenties",
  description: "End-to-end scheduling for Wilson disease centers — D-penicillamine and trientine chelation monitoring, zinc maintenance, 24-hour urine copper trending, ceruloplasmin, hepatic copper quantification, Kayser-Fleischer ring follow-up, MRI brain basal ganglia surveillance, UWDRS scoring, and living donor liver transplant evaluation.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Chelation Therapy Monitoring",
    description:
      "Schedule D-penicillamine dose titration visits with structured side effect surveillance — lupus-like syndrome screening (ANA, anti-dsDNA), nephrotoxicity monitoring (urinalysis, 24-hour urine protein, serum creatinine), bone marrow suppression checks (CBC with differential), and paradoxical neurological worsening assessment during induction. Coordinate trientine (Syprine, Cuprior) as alternative for penicillamine-intolerant patients with parallel CBC and urinalysis cadence. Track zinc acetate (Galzin) and zinc gluconate maintenance therapy with strict 1-hour pre/post-meal administration timing and quarterly serum zinc levels.",
  },
  {
    icon: Database,
    title: "Copper & Liver Biomarker Surveillance",
    description:
      "Automate every Q6-month 24-hour urine copper collection (target <100 mcg/day on chelation, <75 mcg/day on zinc maintenance), serum ceruloplasmin trending, non-ceruloplasmin (free) copper calculation (target <15 mcg/dL), and quarterly LFTs (ALT, AST, GGT, alkaline phosphatase, bilirubin, INR, albumin). Coordinate liver biopsy hepatic copper quantification at diagnosis (>250 mcg/g dry weight = diagnostic) and on-treatment re-biopsy when biochemical response is unclear. Track FibroScan and MRE elastography for non-invasive fibrosis surveillance.",
  },
  {
    icon: Heart,
    title: "Neuropsychiatric Assessment",
    description:
      "Coordinate annual UWDRS (Unified Wilson's Disease Rating Scale) Part II and Part III scoring for dysarthria, dystonia, tremor, parkinsonism, and ataxia trending. Schedule MRI brain with T2 and SWI sequences for basal ganglia, thalamus, and brainstem involvement (face of the giant panda sign, bright claustrum sign). Track slit-lamp ophthalmology for Kayser-Fleischer ring regression as a copper de-coppering biomarker. Coordinate neuropsychiatric evaluation for personality changes, executive dysfunction, depression, and Wilsonian psychosis with linked psychiatry referrals.",
  },
  {
    icon: ClipboardList,
    title: "Liver Transplant Evaluation & Long-Term Care",
    description:
      "Manage urgent liver transplant evaluation pathways for fulminant Wilsonian hepatitis (Coombs-negative hemolytic anemia + acute liver failure + Wilson index >11) including living donor work-up acceleration. Schedule decompensated cirrhosis MELD-Na trending, HCC surveillance ultrasound + AFP Q6 months, EGD variceal screening, and pre-transplant cardiac and pulmonary clearance. Coordinate post-transplant immunosuppression handoff, ongoing zinc maintenance discussion, and lifetime hepatology follow-up integrated with genetic counseling for ATP7B family screening.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Center Workflow & EHR Integration",
    description:
      "Map the existing Wilson disease center workflow — new patient intake, ATP7B genetic confirmation, Leipzig score documentation, induction chelation initiation, and ongoing surveillance cadences. Integrate Momenties with Epic/Cerner ordering for 24-hour urine copper, ceruloplasmin, ALT/AST, INR, CBC, and urinalysis. Build templated visit types for D-penicillamine induction, trientine switch, zinc maintenance, neurological re-staging, and post-transplant follow-up.",
  },
  {
    month: "Month 3–4",
    title: "Chelation & Copper Surveillance Cadence",
    description:
      "Activate automated Q6-month 24-hour urine copper, monthly induction CBC/urinalysis (Weeks 1–8 of penicillamine), and quarterly free copper calculation reminders. Configure side effect screening protocols (ANA, anti-dsDNA, proteinuria, neutrophil count) tied to penicillamine and trientine cycles. Launch zinc maintenance counseling visits with strict 1-hour food separation tracking and quarterly serum zinc and 24-hour urine copper for adherence verification.",
  },
  {
    month: "Month 5–6",
    title: "Neurological & Imaging Programs",
    description:
      "Roll out annual UWDRS Part II/III scoring visits, slit-lamp Kayser-Fleischer ring follow-up cadence, and MRI brain surveillance scheduling for neurological-onset Wilson patients. Coordinate baseline and Year 1 MRI for basal ganglia signal change tracking. Activate neuropsychiatric screening (PHQ-9, MoCA) at induction Month 6 and annually thereafter, with embedded psychiatry referral templates for Wilsonian personality and mood disorders.",
  },
  {
    month: "Month 7–8",
    title: "Liver Surveillance & Transplant Pathway",
    description:
      "Stand up cirrhosis surveillance bundles — Q6-month abdominal ultrasound + AFP, biennial EGD variceal screening, MELD-Na trending, and FibroScan annual scheduling. Build the fulminant Wilsonian hepatitis rapid-evaluation pathway — Wilson index calculator, urgent transplant referral, living donor work-up, and ICU coordination. Activate pre-transplant clearance scheduling (cardiac, pulmonary, dental, infectious disease, psychosocial).",
  },
  {
    month: "Month 9–10",
    title: "Family Screening & Genetic Counseling",
    description:
      "Embed ATP7B family screening workflows for first-degree relatives — ceruloplasmin, 24-hour urine copper, slit-lamp KF examination, and targeted ATP7B sequencing scheduling. Coordinate genetic counseling pre-test and post-test sessions and presymptomatic patient longitudinal follow-up calendars. Launch pediatric-to-adult transition clinics for adolescent Wilson patients moving from pediatric hepatology with structured handoff visits.",
  },
  {
    month: "Month 11–12",
    title: "Outcome Reporting & Center Quality",
    description:
      "Generate quarterly center quality dashboards — proportion of patients achieving 24-hour urine copper target on therapy, KF ring regression rate, UWDRS stabilization or improvement at 12 months, transplant-free survival in non-fulminant patients, and 1-year graft and patient survival in transplanted patients. Submit data to the EUROWILSON registry and prepare AASLD Wilson disease center benchmarking reports. Iterate on protocols based on outcome variance.",
  },
]

const kpis = [
  {
    metric: "24-Hour Urine Copper Target",
    target: ">90% on therapy",
    description:
      "Proportion of established Wilson patients on chelation maintenance whose 24-hour urine copper falls within target range (200–500 mcg/day on penicillamine/trientine, <75 mcg/day on zinc) at Q6-month surveillance, indicating adequate de-coppering without over-chelation.",
  },
  {
    metric: "Free (Non-Ceruloplasmin) Copper",
    target: "<15 mcg/dL maintenance",
    description:
      "Calculated free copper (total serum copper minus ceruloplasmin-bound copper) maintained below 15 mcg/dL on chelation and below 25 mcg/dL on zinc — a key biomarker of effective copper homeostasis tracked quarterly across the maintenance population.",
  },
  {
    metric: "KF Ring Regression Rate",
    target: ">70% at 24 months",
    description:
      "Slit-lamp documented Kayser-Fleischer ring regression or resolution at 24 months of effective de-coppering therapy in patients with baseline KF rings — a clinical biomarker of systemic copper offload paralleling neurological improvement.",
  },
  {
    metric: "UWDRS Stabilization",
    target: ">80% at 12 months",
    description:
      "Proportion of neurological-onset Wilson patients with UWDRS Part III score stable or improved at 12 months versus baseline, reflecting effective copper chelation without paradoxical worsening from over-rapid mobilization.",
  },
  {
    metric: "Fulminant-to-Transplant Time",
    target: "<7 days",
    description:
      "Median time from diagnosis of fulminant Wilsonian hepatitis (Wilson index >11) to liver transplant listing and donor identification — a center capacity benchmark reflecting urgent evaluation, living donor work-up, and OPTN listing efficiency.",
  },
  {
    metric: "Family Screening Completion",
    target: ">85% of first-degree relatives",
    description:
      "Proportion of identified first-degree relatives of probands completing ceruloplasmin, 24-hour urine copper, slit-lamp examination, and ATP7B sequencing within 12 months of proband diagnosis — a center quality metric for presymptomatic Wilson identification.",
  },
]

const testimonial = {
  quote:
    "Wilson disease management is a 12-month-a-year, decade-on-decade calendar problem. We track 24-hour urine copper every six months, free copper every quarter, LFTs and CBCs monthly during induction, slit-lamp every year, MRI brain on neurological patients, and an ATP7B family screen for every new proband. Momenties consolidated it all. Our 24-hour urine copper target attainment moved past 90 percent and our family screening completion crossed 85 percent for the first time.",
  name: "Dr. C. Ala",
  title: "Wilson Disease Center Director, Hepatology Institute",
}

export default function WilsonDiseaseCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh", color: "#f0ece3", fontFamily: "DM Sans, sans-serif" }}>
      <PageHero
        eyebrow="Wilson Disease Center Calendar"
        title="Wilson Disease Center — Chelation, Monitoring & Liver Surveillance Calendar"
        subtitle="End-to-end scheduling for Wilson disease centers — D-penicillamine and trientine chelation monitoring, zinc maintenance therapy, 24-hour urine copper tracking, liver function and transplant evaluation, and neuropsychiatric assessment programs."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontFamily: "Playfair Display, serif", marginBottom: 48, color: "#f0ece3" }}>
            Built for the Full Wilson Disease Center Lifecycle
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 28 }}>
            {pillars.map(({ icon: Icon, title, description }) => (
              <div key={title} style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 28 }}>
                <Icon size={28} color="#c5a35c" style={{ marginBottom: 14 }} />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 10, color: "#f0ece3" }}>{title}</h3>
                <p style={{ fontSize: "0.92rem", color: "rgba(240,236,227,0.65)", lineHeight: 1.65 }}>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Timeline */}
      <Reveal>
        <section style={{ background: "#0a0a0d", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontFamily: "Playfair Display, serif", marginBottom: 48, color: "#f0ece3" }}>
              12-Month Implementation Roadmap
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map(({ month, title, description }) => (
                <div key={month} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 24, background: "#131318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "24px 28px", alignItems: "start" }}>
                  <div style={{ color: "#c5a35c", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{month}</div>
                  <div>
                    <div style={{ color: "#f0ece3", fontWeight: 600, fontSize: "1rem", marginBottom: 8 }}>{title}</div>
                    <div style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.65 }}>{description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontFamily: "Playfair Display, serif", marginBottom: 48, color: "#f0ece3" }}>
            Wilson Disease Center Quality KPIs
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
            {kpis.map(({ metric, target, description }) => (
              <div key={metric} style={{ background: "#0a0a0d", border: "1px solid rgba(197,163,92,0.2)", borderRadius: 16, padding: 28 }}>
                <div style={{ color: "#c5a35c", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>{metric}</div>
                <div style={{ color: "#f0ece3", fontFamily: "Playfair Display, serif", fontSize: "1.4rem", marginBottom: 12 }}>{target}</div>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.88rem", lineHeight: 1.6 }}>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <blockquote style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: "44px 48px", margin: 0 }}>
              <div style={{ fontSize: "2.4rem", color: "#c5a35c", lineHeight: 1, marginBottom: 12 }}>&ldquo;</div>
              <p style={{ color: "#f0ece3", fontSize: "1.05rem", lineHeight: 1.75, fontStyle: "italic", marginBottom: 24 }}>
                {testimonial.quote}
              </p>
              <footer>
                <div style={{ color: "#c5a35c", fontWeight: 700, fontSize: "0.95rem" }}>{testimonial.name}</div>
                <div style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.88rem", marginTop: 4 }}>{testimonial.title}</div>
              </footer>
            </blockquote>
          </div>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
