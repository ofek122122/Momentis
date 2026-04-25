import type { Metadata } from "next"
import { UserCheck, ClipboardList, Bell, Heart, Stethoscope, Activity, Shield, BookOpen, Calendar, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "MCL Nurse Practitioners — Scheduling for Intensive Lymphoma Management | Momenties",
  description:
    "Purpose-built for NPs coordinating MCL care across aggressive induction, autologous transplant, BTK maintenance, and long-term surveillance — managing a complex patient population with precision.",
}

const pillars = [
  {
    icon: ClipboardList,
    title: "Induction & High-Dose Cycle Management",
    description:
      "NP-led coordination of R-hyperCVAD Part A/B alternating cycles, R-CHOP/R-DHAP sequencing, intrathecal CNS prophylaxis scheduling, high-dose methotrexate hydration and leucovorin rescue timing, mid-cycle CBC nadirs, growth factor administration, antiemetic ladders, and patient-facing education on tumor lysis precautions, mucositis, and febrile neutropenia escalation pathways.",
  },
  {
    icon: Heart,
    title: "Transplant Coordination & Post-SCT Care",
    description:
      "Stem cell mobilization with G-CSF + plerixafor scheduling, apheresis day prep, BEAM admission orders, daily engraftment monitoring (ANC, platelets, reticulocyte trend), Day +30 / +100 checkpoints, fungal and viral prophylaxis stewardship, vaccination restart timeline post-transplant, and sexual health / fertility counseling timing for the substantial under-65 MCL cohort.",
  },
  {
    icon: Bell,
    title: "BTK Inhibitor Adherence & Monitoring",
    description:
      "Quarterly ibrutinib adherence calls with structured cardiac (afib, palpitations, hypertension), bleeding (bruising, hematuria, melena), and infection screens. Calendar enforces baseline ECG / echo, anticoagulation reconciliation, CYP3A4 drug-interaction checks, dose-hold algorithms around procedures, switch-pathway triggers (acalabrutinib or zanubrutinib), and monthly pill-count reconciliation tied to refill dates.",
  },
  {
    icon: UserCheck,
    title: "Long-Term Surveillance & Relapse Planning",
    description:
      "Rituximab maintenance Q8-week scheduling with infusion-reaction history flagging, surveillance CT every 6 months, MRD recheck at month 6 / 12 / 24, structured patient education on blastoid variant warning signs (rapid LAD, B-symptoms, GI bleeding), and protocolized pathway to CAR-T (brexucabtagene autoleucel) referral, venetoclax + ibrutinib salvage, or allogeneic transplant consult on confirmed relapse.",
  },
]

const timeline = [
  {
    month: "Month 1-2",
    title: "Diagnosis Workup & Induction Cycle One",
    description:
      "Confirm pathology, schedule baseline PET-CT, bone marrow biopsy, GI endoscopy for occult MCL, MUGA / echo for anthracycline clearance, fertility consult, port placement, and start cycle 1 of R-hyperCVAD or R-CHOP with intrathecal methotrexate / cytarabine. NP completes detailed patient teaching, reviews tumor lysis labs daily, and books cycle 2 admission.",
  },
  {
    month: "Month 3-4",
    title: "Mid-Induction Restaging & Mobilization",
    description:
      "Interim PET-CT after cycles 3 and 4, baseline MRD, NP coordinates apheresis catheter placement, G-CSF + plerixafor mobilization schedule, CD34+ collection target ≥5×10⁶/kg, and prepares fit patients under 65 for autologous SCT admission. Reinforces neutropenic precautions and monitors for accumulating peripheral neuropathy.",
  },
  {
    month: "Month 5-6",
    title: "Transplant Admission & Engraftment",
    description:
      "BEAM conditioning support, Day 0 reinfusion attendance, daily engraftment monitoring (ANC >500 by Day +12, platelets >20K by Day +20), mucositis grading, TPN decisions, anti-infective stewardship, Day +30 PET-CT, Day +100 MRD assessment, and structured discharge education on home neutropenia surveillance and return-to-work pacing.",
  },
  {
    month: "Month 7-8",
    title: "Maintenance Initiation & BTKi Baseline",
    description:
      "Initiate rituximab Q8-week maintenance, complete BTKi baseline workup (ECG, BP log, anticoagulation reconciliation, drug-interaction check), patient education on bleeding and atrial fibrillation symptoms, and start ibrutinib / acalabrutinib / zanubrutinib. NP schedules first 30-day adherence and tolerability call.",
  },
  {
    month: "Month 9-10",
    title: "First Maintenance Surveillance Block",
    description:
      "First post-maintenance restaging CT, MRD recheck, NP-led BTKi tolerability review (afib screening, hypertension trend, bruising, infections), CBC / CMP, dose-hold protocols for grade 1-2 toxicities, refill audits, and reinforced patient education on blastoid variant warning signs prompting unscheduled clinic contact.",
  },
  {
    month: "Month 11-12",
    title: "Year-One Reassessment & Relapse Pathway",
    description:
      "12-month surveillance PET-CT, formal MRD endpoint, MIPI re-stratification, NP coordinates multidisciplinary review for any high-risk features, prepares CAR-T pre-screening packet for any reconverters, and finalizes year-two surveillance cadence including patient-reported outcomes, vaccination catch-up, and survivorship handoff documentation.",
  },
]

const kpis = [
  {
    metric: "Adherence Touchpoints",
    target: "Quarterly + 30d",
    description: "NP-led ibrutinib / acalabrutinib / zanubrutinib adherence calls completed at 30 days post-start, then quarterly with structured cardiac and bleeding screens.",
  },
  {
    metric: "Engraftment Documentation",
    target: "100% by Day +30",
    description: "All post-autologous-SCT patients have ANC, platelet, and reticulocyte trends documented with no gaps from Day 0 through Day +30.",
  },
  {
    metric: "Rituximab On-Time Rate",
    target: "≥95%",
    description: "Q8-week rituximab maintenance infusions delivered within ±7 days of scheduled date during the two-year maintenance window.",
  },
  {
    metric: "Surveillance CT Compliance",
    target: "≥95%",
    description: "Q6-month surveillance imaging during years one and two completed on schedule with NP follow-up call within 5 business days of result.",
  },
  {
    metric: "Cardiac AE Detection",
    target: "<7 days",
    description: "Median time from BTKi-related afib or hypertension symptom report to NP triage, ECG, and provider notification.",
  },
  {
    metric: "Patient Education Completion",
    target: "100%",
    description: "Documented teach-back on blastoid variant warning signs, neutropenic precautions, and BTKi bleeding precautions before each phase transition.",
  },
]

const testimonial = {
  quote:
    "MCL patients move fast through induction, transplant, and maintenance — and the BTKi conversation lasts the rest of their lives. Momenties lets me run a real adherence cadence instead of chasing pill counts at the last minute, and the cardiac screen reminders caught two cases of new atrial fibrillation early. My patients feel the difference because nothing about their care looks improvised.",
  name: "Monica D., AGPCNP-BC",
  title: "Lymphoma NP, Academic Transplant Center",
}

export default function MantleCellLymphomaNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Mantle Cell Lymphoma Nurse Practitioners"
        title="MCL Nurse Practitioners — Scheduling for Intensive Lymphoma Management"
        subtitle="Purpose-built for NPs coordinating MCL care across aggressive induction, autologous transplant, BTK maintenance, and long-term surveillance — managing a complex patient population with precision."
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
            Four Pillars of the MCL NP Workflow
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
              The MCL NP Year — Twelve Months in Practice
            </h2>
            <p style={{ textAlign: "center", color: "#a0998e", marginBottom: 56, fontSize: "0.97rem" }}>
              From cycle one through year-one MRD endpoint — the NP-side rhythm of induction, transplant support, and maintenance.
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
              The KPIs That Define MCL NP Excellence
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
