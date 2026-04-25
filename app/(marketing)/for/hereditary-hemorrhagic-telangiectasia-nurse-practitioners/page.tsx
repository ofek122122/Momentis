import type { Metadata } from "next"
import { Stethoscope, Heart, Bell, Users2 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "HHT Nurse Practitioners — Scheduling for a Rare Vascular Malformation Disorder | Momentis",
  description: "Scheduling system for HHT nurse practitioners managing pulmonary AVM surveillance, iron infusion logistics, epistaxis management, bevacizumab coordination, and family cascade testing for hereditary hemorrhagic telangiectasia patients.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "AVM Surveillance Coordination",
    description: "Schedule bubble (contrast) echocardiogram and chest CT for pulmonary AVM screening at diagnosis and every 5 years; coordinate interventional radiology consultation for embolotherapy of feeding arteries ≥3 mm; track cerebral MRI for intracranial AVM in pediatric and adult HHT patients; document hepatic AVM surveillance via Doppler ultrasound and high-output cardiac failure screening; and align contrast allergy review, sedation pre-ops, and post-embolization recanalization follow-up at 6–12 months.",
  },
  {
    icon: Heart,
    title: "Epistaxis Management & Iron Repletion",
    description: "Track epistaxis diary entries and NOSE score / Epistaxis Severity Score (ESS) trending across visits; schedule IV iron infusions (ferric carboxymaltose 750 mg or iron sucrose 200 mg) with pre-infusion phosphate, ferritin, and transferrin saturation labs; coordinate ENT consults for KTP laser, sclerotherapy, or septodermoplasty in refractory bleeders; and book transfusion appointments and counsel on humidification, nasal moisturization (saline gels, estrogen ointment), and avoidance of NSAIDs and anticoagulant interactions.",
  },
  {
    icon: Bell,
    title: "Bevacizumab Coordination & Monitoring",
    description: "Sequence bevacizumab IV infusion appointments with premedication windows, infusion-reaction monitoring, and BP checks (hold for grade 3 hypertension); coordinate baseline urinalysis, proteinuria UPCR, wound-healing review, and dental clearance before initiation; schedule serial ESS, hemoglobin, and transfusion-burden reassessments at 3, 6, and 12 months; and trigger reminders for nasal-spray bevacizumab cycles and submucosal injection follow-ups in centers offering off-label topical regimens.",
  },
  {
    icon: Users2,
    title: "Family Screening & Genetic Counseling",
    description: "Order cascade testing kits for first-degree relatives once an ENG, ACVRL1, or SMAD4 pathogenic variant is identified; book genetic counseling visits before and after disclosure; track pediatric screening milestones (childhood pulse oximetry, contrast echo at age 8–10, repeat post-puberty); and route HHT Foundation patient resources, support-group sign-ups, and Curaçao criteria reassessment at each annual review.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Intake, Curaçao Scoring & Genetic Workup",
    description: "Confirm Curaçao criteria (epistaxis, telangiectasia, visceral AVM, family history) at intake, order ENG/ACVRL1/SMAD4 sequencing through the genetics lab, baseline CBC, ferritin, iron studies, and hepatic panel, and orient the patient and family to the HHT Foundation resource library and local support group calendar.",
  },
  {
    month: "Month 3–4",
    title: "Pulmonary & Cerebral AVM Screening",
    description: "Schedule contrast (bubble) transthoracic echocardiogram, low-dose chest CT for any positive shunt grade, and one-time brain MRI for cerebral AVM screening; book interventional radiology consultation for any feeding artery ≥3 mm; coordinate antibiotic prophylaxis counseling for dental procedures in patients with untreated pulmonary AVMs.",
  },
  {
    month: "Month 5–6",
    title: "Epistaxis Plan & Iron Optimization",
    description: "Initiate the epistaxis diary and NOSE / ESS scoring at each visit, prescribe humidification and nasal moisturizer regimen, schedule ENT review for refractory bleeders, and book the first IV iron infusion (ferric carboxymaltose or iron sucrose) for transferrin saturation <20% or ferritin <50 ng/mL with ongoing blood loss.",
  },
  {
    month: "Month 7–8",
    title: "Bevacizumab Initiation & Activity Counseling",
    description: "Stage bevacizumab eligibility review (transfusion-dependent epistaxis or high-output cardiac failure), pre-treatment urinalysis, BP log, dental clearance, and infusion-suite booking; counsel on activity restrictions (avoid contact sports and scuba diving with untreated pulmonary AVMs) and hydration plan for hepatic AVM patients.",
  },
  {
    month: "Month 9–10",
    title: "Cascade Testing & Family Outreach",
    description: "Send cascade testing kits to first-degree relatives, schedule genetic counseling visits before and after disclosure, coordinate pediatric screening for at-risk children (pulse oximetry, contrast echo at 8–10 years), and document HHT Foundation patient education touchpoints and support-group attendance.",
  },
  {
    month: "Month 11–12",
    title: "Annual Reassessment & QOL Review",
    description: "Repeat ESS / NOSEbleed QOL questionnaires, review hemoglobin trend and transfusion burden, restage Curaçao criteria, plan next 5-year pulmonary AVM imaging interval, refresh embolization recanalization follow-ups at 6–12 months, and finalize a written annual care summary for the patient and PCP.",
  },
]

const kpis = [
  {
    metric: "100%",
    target: "Curaçao Criteria Documented",
    description: "Curaçao criteria scored and recorded at intake and each annual reassessment for every active HHT patient.",
  },
  {
    metric: "≤90 days",
    target: "Pulmonary AVM Screening Lead Time",
    description: "Bubble echocardiogram and follow-up chest CT (when indicated) completed within 90 days of new diagnosis.",
  },
  {
    metric: "≥80%",
    target: "Iron Repletion Response",
    description: "Transferrin saturation ≥20% and ferritin ≥100 ng/mL achieved after the planned IV iron course in transfusion-burdened bleeders.",
  },
  {
    metric: "≥50%",
    target: "ESS Reduction on Bevacizumab",
    description: "Epistaxis Severity Score reduced by at least half at the 6-month bevacizumab reassessment in eligible patients.",
  },
  {
    metric: "100%",
    target: "First-Degree Cascade Outreach",
    description: "Cascade testing offered and tracked for every first-degree relative once a pathogenic ENG/ACVRL1/SMAD4 variant is confirmed.",
  },
  {
    metric: "Every 5 yrs",
    target: "Re-screening Cadence Honored",
    description: "Pulmonary AVM and cerebral AVM re-imaging intervals scheduled on time per international HHT guidelines.",
  },
]

const testimonial = {
  quote:
    "HHT is a multi-organ disease that lives or dies on coordination. Between bubble echos, IR embolotherapy, IV iron clinic, bevacizumab infusions, cascade testing, and pediatric screening visits, my schedule used to live in three different EHRs. Momentis put every recurring HHT task in one place — and my patients finally feel like someone is holding the whole picture.",
  name: "Lisa T., FNP-BC",
  title: "HHT NP, Rare Vascular Disease Center",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="HHT Nurse Practitioners"
        title="HHT Nurse Practitioners — Scheduling for a Rare Vascular Malformation Disorder"
        subtitle="Designed for NPs managing HHT patients — from pulmonary AVM surveillance coordination and iron infusion scheduling to epistaxis management counseling, bevacizumab coordination, and family cascade testing."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontFamily: "Playfair Display, serif", marginBottom: 48, color: "#f0ece3" }}>
            Built for the Full HHT Nurse Practitioner Workflow
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

      {/* 12-Month Timeline */}
      <Reveal>
        <section style={{ background: "#0a0a0d", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontFamily: "Playfair Display, serif", marginBottom: 12, color: "#f0ece3" }}>
              The HHT Nurse Practitioner Calendar — Month by Month
            </h2>
            <p style={{ textAlign: "center", color: "rgba(240,236,227,0.65)", marginBottom: 56, fontSize: "0.97rem" }}>
              Every AVM screening, iron infusion, bevacizumab cycle, and cascade outreach milestone — sequenced across the first year.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map((item) => (
                <div key={item.month} style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 24, background: "#131318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "20px 24px", alignItems: "start" }}>
                  <div style={{ color: "#c5a35c", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.month}</div>
                  <div>
                    <div style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.97rem", marginBottom: 6 }}>{item.title}</div>
                    <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{item.description}</p>
                  </div>
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
              The 6 KPIs That Define an HHT NP Practice
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
              {kpis.map((kpi) => (
                <div key={kpi.target} style={{ background: "#0a0a0d", border: "1px solid rgba(197,163,92,0.2)", borderRadius: 12, padding: 24 }}>
                  <div style={{ fontSize: "clamp(1.4rem,2.5vw,1.9rem)", fontWeight: 700, color: "#c5a35c", fontFamily: "Playfair Display, serif", marginBottom: 8 }}>{kpi.metric}</div>
                  <div style={{ fontSize: "0.95rem", color: "#f0ece3", fontWeight: 600, marginBottom: 6 }}>{kpi.target}</div>
                  <div style={{ fontSize: "0.86rem", color: "rgba(240,236,227,0.65)", lineHeight: 1.55 }}>{kpi.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ padding: "40px 24px 0" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <div style={{ background: "#131318", border: "1px solid rgba(197,163,92,0.25)", borderRadius: 16, padding: "36px 40px" }}>
              <div style={{ fontSize: "2.5rem", color: "#c5a35c", marginBottom: 12, lineHeight: 1 }}>&ldquo;</div>
              <p style={{ fontSize: "clamp(1rem,2vw,1.15rem)", color: "#f0ece3", lineHeight: 1.7, fontStyle: "italic", marginBottom: 24 }}>
                {testimonial.quote}
              </p>
              <div style={{ fontWeight: 700, color: "#c5a35c", fontSize: "0.95rem" }}>{testimonial.name}</div>
              <div style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.88rem", marginTop: 4 }}>{testimonial.title}</div>
            </div>
          </div>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
