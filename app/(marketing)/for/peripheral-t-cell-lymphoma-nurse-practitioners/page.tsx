import type { Metadata } from "next"
import { Workflow, Shield, ClipboardList, Heart } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "PTCL Nurse Practitioners — Scheduling for Aggressive Lymphoma Management | Momenties",
  description:
    "A scheduling platform for NPs managing peripheral T-cell lymphoma patients through aggressive chemotherapy, response assessment, and transplant pathways — from CHOP cycles to brentuximab monitoring and post-transplant surveillance.",
}

const pillars = [
  {
    icon: Workflow,
    title: "Chemotherapy Cycle Management",
    description:
      "Own the rhythm of every 21-day CHOP, CHOEP, or BV-CHP cycle without losing a day. Momenties pre-builds day-1 chair time, day-8 mid-cycle CBC, day-10 nadir labs, and day +1 pegfilgrastim, and surfaces dose-modification triggers — ANC <1.0, platelets <75, AST/ALT >3× ULN — directly inside the patient's card so the NP can adjust pralatrexate weekly dosing or hold cycle 4 anthracycline before the orders even reach the pharmacist.",
  },
  {
    icon: Shield,
    title: "Toxicity Monitoring & Support",
    description:
      "Stay ahead of the toxicities that define PTCL care: brentuximab vedotin peripheral neuropathy graded with mEORTC at every visit, anthracycline cardiotoxicity tracked with cumulative dose and echo intervals, mucositis and nausea protocols, infection prophylaxis with acyclovir and Bactrim, hepatitis B reactivation surveillance, and tumor lysis labs through cycle 1. Momenties anchors each toxicity workflow to the cycle calendar so NPs can taper, escalate, or refer without paging the attending.",
  },
  {
    icon: ClipboardList,
    title: "Response Assessment Coordination",
    description:
      "Drive the interim and end-of-treatment PET/CT machine: pre-auth at week 5, scan slot at week 7, radiology read by week 8, and tumor board presentation by week 9. Momenties links every imaging task to the patient's Lugano/Deauville scoring history, queues bone marrow re-biopsy when indicated, and routes the result with a structured note to the transplant team so consolidation eligibility is decided in days, not weeks.",
  },
  {
    icon: Heart,
    title: "Survivorship & Late Effects",
    description:
      "Build long after the last cycle: post-transplant immunosuppression weaning visits, vaccine restart calendar at 6 and 12 months, annual cardiac surveillance for anthracycline-exposed patients, secondary malignancy screening, fertility follow-up, and structured 3-, 6-, and 12-month CT surveillance. Momenties hands off cleanly to the community oncologist with a shared surveillance plan and one-tap re-staging order set if a survivor calls with new B-symptoms.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "New-Patient Intake & Cycle 1 Education",
    description:
      "Complete chemo teach, port placement coordination, hepatitis B/HIV serologies, baseline echo, fertility consult, and Bactrim/acyclovir prophylaxis start; deliver written CHOP/BV-CHP cycle schedule and 24-hour fever hotline plan.",
  },
  {
    month: "Month 3–4",
    title: "Cycles 1–3 Active Management",
    description:
      "Run day-8 mid-cycle visits, day-10 nadir labs, G-CSF support, neuropathy grading at every brentuximab visit, antiemetic optimization, and interim PET/CT prep for cycle 2 or 3 with structured Deauville hand-off to attending.",
  },
  {
    month: "Month 5–6",
    title: "Cycles 4–6 & EOT Response",
    description:
      "Track cumulative anthracycline dose, repeat echo if cardiac symptoms, finalize end-of-treatment labs and PET/CT, and present at tumor board with NP-authored response summary including residual neuropathy and supportive-care needs.",
  },
  {
    month: "Month 7–8",
    title: "Transplant Hand-Off & Mobilization Support",
    description:
      "Coordinate transplant consult, pre-mobilization labs, G-CSF ± plerixafor teaching, central line care, and apheresis day attendance; provide bridge symptom management and continuity messaging to the inpatient transplant team.",
  },
  {
    month: "Month 9–10",
    title: "Post-Transplant Day +30 to +100",
    description:
      "Manage engraftment-phase visits, CMV/EBV PCR review, immunosuppression weaning visits, infection prophylaxis taper, GVHD assessment, and patient-reported outcome capture; restart vaccine calendar at month 6 milestone.",
  },
  {
    month: "Month 11–12",
    title: "Survivorship Plan & Surveillance Activation",
    description:
      "Author survivorship care plan, set 3-/6-/12-month CT surveillance cadence, schedule annual cardiac and secondary-malignancy screening, document late effects, and hand off shared calendar to community oncology partner.",
  },
]

const kpis = [
  {
    metric: "Day-8 Visit Adherence",
    target: "≥ 95%",
    description:
      "Patients seen by NP at day-8 mid-cycle visit during cycles 1–6 — the single most reliable lever for catching dose-limiting toxicity before nadir.",
  },
  {
    metric: "Neuropathy Grading Capture",
    target: "100% of BV visits",
    description:
      "mEORTC or CTCAE neuropathy grade documented at every brentuximab vedotin infusion — required for evidence-based dose modification.",
  },
  {
    metric: "Febrile Neutropenia Hospitalization Rate",
    target: "≤ 10%",
    description:
      "Cycle 1–6 patients admitted for febrile neutropenia — proxy for prophylaxis adherence, G-CSF timing, and patient education quality.",
  },
  {
    metric: "EOT PET to Tumor Board",
    target: "≤ 14 days",
    description:
      "Days from end-of-treatment PET/CT acquisition to multidisciplinary tumor board decision on consolidation pathway.",
  },
  {
    metric: "Transplant Referral Completion",
    target: "≥ 90% of eligible CR1",
    description:
      "First-remission eligible patients who complete a transplant consult within the 3-month post-EOT window — a core NP coordination KPI.",
  },
  {
    metric: "Survivorship Plan Delivery",
    target: "100% by month 12",
    description:
      "Patients receiving an NP-authored, written survivorship and surveillance plan within 12 months of starting therapy.",
  },
]

const testimonial = {
  quote:
    "I used to live in spreadsheets — cycle days, nadir labs, neuropathy grades, transplant deadlines. Momenties gives me one calendar that actually understands a 21-day cycle and a brentuximab patient. My day-8 visit adherence is 98%, and I haven't missed a transplant referral window all year.",
  name: "Reagan M., MSN, AOCNP",
  title: "Lymphoma Nurse Practitioner, Comprehensive Cancer Center",
}

export default function PeripheralTCellLymphomaNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Peripheral T-Cell Lymphoma Nurse Practitioners"
        title="PTCL Nurse Practitioners — Scheduling for Aggressive Lymphoma Management"
        subtitle="A scheduling platform for NPs managing peripheral T-cell lymphoma patients through aggressive chemotherapy, response assessment, and transplant pathways — from CHOP cycles to brentuximab monitoring and post-transplant surveillance."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Four Workflows Designed Around the PTCL Nurse Practitioner
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.title}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <p.icon size={28} color="#c5a35c" style={{ marginBottom: 16 }} />
                <h3 style={{ color: "#f0ece3", fontSize: "1.05rem", fontWeight: 600, marginBottom: 12 }}>
                  {p.title}
                </h3>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.92rem", lineHeight: 1.65 }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* 12-Month Timeline */}
      <Reveal>
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            A 12-Month PTCL NP Practice Roadmap
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {timeline.map((t, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  gap: 24,
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  alignItems: "start",
                }}
              >
                <span style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.9rem", paddingTop: 2 }}>
                  {t.month}
                </span>
                <div>
                  <p style={{ color: "#f0ece3", fontWeight: 600, marginBottom: 6 }}>{t.title}</p>
                  <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    {t.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            KPIs the PTCL NP Owns
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {kpis.map((k) => (
              <div
                key={k.metric}
                style={{
                  background: "#0a0a0d",
                  border: "1px solid rgba(197,163,92,0.2)",
                  borderRadius: 12,
                  padding: 24,
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1.1rem", marginBottom: 4 }}>
                  {k.target}
                </p>
                <p style={{ color: "#f0ece3", fontWeight: 600, marginBottom: 8 }}>{k.metric}</p>
                <p style={{ color: "rgba(240,236,227,0.6)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                  {k.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 0" }}>
          <blockquote
            style={{
              background: "#131318",
              border: "1px solid rgba(197,163,92,0.25)",
              borderRadius: 16,
              padding: "36px 40px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "rgba(240,236,227,0.85)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                fontStyle: "italic",
                marginBottom: 24,
              }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p style={{ color: "#c5a35c", fontWeight: 600 }}>{testimonial.name}</p>
            <p style={{ color: "rgba(240,236,227,0.5)", fontSize: "0.88rem" }}>{testimonial.title}</p>
          </blockquote>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
