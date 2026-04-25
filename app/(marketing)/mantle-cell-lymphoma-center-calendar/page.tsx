import type { Metadata } from "next"
import { Activity, ClipboardList, Stethoscope, Target, Calendar, Clock, Shield, Award, BarChart3, Database } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Mantle Cell Lymphoma Center Calendar | Induction, Transplant & Maintenance | Momenties",
  description:
    "Systematic scheduling for MCL centers — R-CHOP/R-hyperCVAD induction, autologous SCT coordination, BTK inhibitor maintenance, MRD surveillance, MIPI/Ki-67 risk stratification, and brexucabtagene autoleucel CAR-T workflows.",
}

const pillars = [
  {
    icon: Activity,
    title: "Induction Chemotherapy Coordination",
    description:
      "Sequencing R-CHOP alternating with R-DHAP, R-hyperCVAD Part A/B cycles, and high-dose methotrexate / cytarabine cycles for fit patients under 65. Calendar coordinates 21-day cycle pacing, CNS prophylaxis intrathecal scheduling, growth factor support timing, mid-cycle CBC nadirs, restaging PET-CT after cycles 3 and 6, MIPI-recalculation gates, and SOX11 / Ki-67 documentation prior to consolidation decisions.",
  },
  {
    icon: ClipboardList,
    title: "Autologous SCT & Consolidation",
    description:
      "End-to-end autologous stem cell transplant workflow — apheresis windows, mobilization with G-CSF plus plerixafor, BEAM conditioning admission day, Day 0 reinfusion, engraftment monitoring, Day +30 / +100 restaging, and transition to rituximab maintenance. Includes second-opinion windows, donor backup planning for high-risk blastoid/pleomorphic variants, and FACT-JACIE documentation deadlines tied to each transplant cohort.",
  },
  {
    icon: Shield,
    title: "BTK Inhibitor Maintenance Management",
    description:
      "Maintenance scheduling across rituximab Q8-week infusions plus BTK inhibitor regimens — ibrutinib, acalabrutinib, or zanubrutinib — with mandatory cardiac (afib, hypertension), bleeding, and infection screens. Calendar enforces baseline ECG, quarterly BP review, anticoagulation conflict checks, dose-hold protocols around procedures, and switch-pathway triggers when toxicity exceeds Grade 2 thresholds.",
  },
  {
    icon: Target,
    title: "MRD Surveillance & Relapse Detection",
    description:
      "Minimal residual disease cadence by flow cytometry or ASO-PCR at month 6, 12, 24, and annually thereafter; surveillance CT every 6 months and PET-CT only on suspicion; clinical exam Q3 months for first 2 years. Triggers immediate workflow into venetoclax + ibrutinib salvage, brexucabtagene autoleucel CAR-T eligibility, or allogeneic SCT consult when MRD reconverts or imaging demonstrates progression.",
  },
]

const timeline = [
  {
    month: "Month 1-2",
    title: "Diagnosis, MIPI Staging & Induction Launch",
    description:
      "Confirm cyclin D1+ / SOX11+ pathology, complete MIPI scoring (age, ECOG, LDH, WBC), document Ki-67 proliferation index, blastoid/pleomorphic variant assessment, baseline PET-CT, bone marrow biopsy, GI endoscopy for occult MCL, and initiate R-CHOP alternating R-DHAP or R-hyperCVAD cycle 1 with intrathecal CNS prophylaxis.",
  },
  {
    month: "Month 3-4",
    title: "Mid-Induction Restaging & Apheresis Planning",
    description:
      "Interim PET-CT after cycles 3 and 4, MRD baseline by flow / ASO-PCR, apheresis catheter placement, stem cell mobilization with G-CSF plus plerixafor, CD34+ collection target ≥5×10⁶/kg, and transplant suite scheduling for fit patients under 65 with intermediate-to-high MIPI.",
  },
  {
    month: "Month 5-6",
    title: "Consolidation: Autologous SCT or Final Induction",
    description:
      "BEAM conditioning admission, Day 0 stem cell reinfusion, engraftment milestones (ANC >500 by Day +12, platelets >20K by Day +20), Day +30 PET-CT, Day +100 MRD assessment, FACT-JACIE documentation, and transplant ineligible patients complete final R-CHOP / R-bendamustine cycle with restaging.",
  },
  {
    month: "Month 7-8",
    title: "Maintenance Initiation & BTKi Baseline Workup",
    description:
      "Initiate rituximab Q8-week maintenance, baseline ECG and echo for BTKi candidates, document anticoagulation regimens, screen drug-drug interactions (CYP3A4), patient education on bleeding/atrial fibrillation/diarrhea, and start ibrutinib / acalabrutinib / zanubrutinib per institutional preference and comorbidity profile.",
  },
  {
    month: "Month 9-10",
    title: "First Maintenance Surveillance Block",
    description:
      "First post-maintenance restaging CT, MRD recheck, BTKi tolerability review (afib screening, hypertension, bruising, infections), clinical exam, CBC / CMP, and management of grade 1-2 toxicities with dose-hold protocols. Adjust rituximab schedule for any infusion reactions documented during prior cycles.",
  },
  {
    month: "Month 11-12",
    title: "Year-One Reassessment & MRD Endpoint",
    description:
      "12-month surveillance PET-CT, formal MRD endpoint by flow / ASO-PCR, MIPI re-stratification, multidisciplinary tumor board review for high-risk cases (TP53 mutated, blastoid variant, Ki-67 >30%), CAR-T pre-screening for any reconverters, and patient-reported outcome assessment to plan year-two surveillance cadence.",
  },
]

const kpis = [
  {
    metric: "Time to Induction",
    target: "≤14 days",
    description: "Days from biopsy-confirmed MCL diagnosis to first cycle of R-CHOP/R-DHAP or R-hyperCVAD initiation.",
  },
  {
    metric: "MRD Negativity",
    target: "≥70% Day +100",
    description: "Proportion of post-autologous-SCT patients achieving undetectable MRD by flow or ASO-PCR at Day +100.",
  },
  {
    metric: "BTKi Adherence",
    target: "≥90%",
    description: "Maintenance adherence to ibrutinib, acalabrutinib, or zanubrutinib confirmed via pill counts, refill audits, and quarterly NP touchpoints.",
  },
  {
    metric: "Cardiac AE Detection",
    target: "<7 days",
    description: "Median time from BTKi-related afib or hypertension onset to documented intervention or specialist referral.",
  },
  {
    metric: "Surveillance CT Compliance",
    target: "≥95%",
    description: "On-time completion of Q6-month surveillance imaging during first two years post-consolidation.",
  },
  {
    metric: "CAR-T Referral Window",
    target: "≤21 days",
    description: "Days from documented relapse or MRD reconversion to brexucabtagene autoleucel eligibility consult.",
  },
]

const testimonial = {
  quote:
    "MCL programs live or die on cycle precision — a missed apheresis window or a delayed BTKi cardiac screen can cascade into months of lost ground. Momenties gave our center a single shared timeline across induction, transplant suite, and maintenance clinic. Our Day +100 MRD-negativity rate climbed and we caught two cases of subclinical atrial fibrillation early enough to switch BTKi before progression.",
  name: "Dr. R. Hoffman",
  title: "MCL Program Director, Lymphoma Center of Excellence",
}

export default function MantleCellLymphomaCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Mantle Cell Lymphoma Center Calendar"
        title="Mantle Cell Lymphoma Center — Induction, Transplant & Maintenance Calendar"
        subtitle="Systematic scheduling for MCL centers — R-CHOP/R-hyperCVAD induction, autologous SCT coordination, BTK inhibitor maintenance, MRD surveillance, and Ki-67-based risk stratification programs."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem,3vw,2.2rem)",
              fontFamily: "Playfair Display, serif",
              marginBottom: 48,
              color: "#f0ece3",
            }}
          >
            Four Pillars of MCL Center Operations
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: 28,
                }}
              >
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
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(1.6rem,3vw,2.2rem)",
                fontFamily: "Playfair Display, serif",
                marginBottom: 12,
                color: "#f0ece3",
              }}
            >
              The MCL Center Calendar — Twelve Months at a Glance
            </h2>
            <p style={{ textAlign: "center", color: "#a0998e", marginBottom: 56, fontSize: "0.97rem" }}>
              Diagnosis to year-one MRD endpoint — every induction cycle, transplant milestone, and maintenance gate sequenced.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map((item) => (
                <div
                  key={item.month}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr",
                    gap: 24,
                    background: "#131318",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14,
                    padding: "24px 28px",
                    alignItems: "start",
                  }}
                >
                  <div
                    style={{
                      color: "#c5a35c",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {item.month}
                  </div>
                  <div>
                    <div style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.97rem", marginBottom: 6 }}>{item.title}</div>
                    <p style={{ color: "#a0998e", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{item.description}</p>
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
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(1.6rem,3vw,2.2rem)",
                fontFamily: "Playfair Display, serif",
                marginBottom: 48,
                color: "#f0ece3",
              }}
            >
              The KPIs That Define MCL Program Excellence
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {kpis.map((kpi) => (
                <div
                  key={kpi.metric}
                  style={{
                    background: "#131318",
                    border: "1px solid rgba(197,163,92,0.2)",
                    borderRadius: 14,
                    padding: "24px 22px",
                  }}
                >
                  <div style={{ color: "#c5a35c", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                    {kpi.metric}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(1.4rem,2.5vw,1.8rem)",
                      fontWeight: 700,
                      color: "#f0ece3",
                      fontFamily: "Playfair Display, serif",
                      marginBottom: 10,
                    }}
                  >
                    {kpi.target}
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "#a0998e", lineHeight: 1.55 }}>{kpi.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ background: "#0e0e12", padding: "72px 24px" }}>
          <blockquote
            style={{
              maxWidth: 720,
              margin: "0 auto",
              textAlign: "center",
              border: 0,
              padding: 0,
            }}
          >
            <div style={{ fontSize: "2.5rem", color: "#c5a35c", marginBottom: 16, lineHeight: 1 }}>&ldquo;</div>
            <p
              style={{
                fontSize: "clamp(1rem,2vw,1.2rem)",
                color: "#f0ece3",
                lineHeight: 1.7,
                fontStyle: "italic",
                marginBottom: 28,
              }}
            >
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
