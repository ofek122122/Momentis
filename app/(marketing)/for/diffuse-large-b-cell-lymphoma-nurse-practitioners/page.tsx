import type { Metadata } from "next"
import { Workflow, Search, Stethoscope, Heart } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "DLBCL Nurse Practitioners — Scheduling for Aggressive Lymphoma Care | Momenties",
  description:
    "Designed for NPs coordinating DLBCL treatment — from R-CHOP cycle management and rituximab reactions to CAR-T apheresis coordination and post-remission surveillance scheduling.",
}

const pillars = [
  {
    icon: Workflow,
    title: "Chemotherapy Cycle & Toxicity Management",
    description:
      "Own the rhythm of every 21-day R-CHOP and DA-EPOCH-R cycle without losing a day. Momenties pre-builds day-1 chair time, day-8 mid-cycle assessment visits, day-10 nadir labs, day +1 pegfilgrastim, and rituximab infusion-reaction protocols (premedication, slow titration, tocilizumab for severe IRR), and surfaces dose-modification triggers — ANC <1.0, platelets <75, AST/ALT >3× ULN — directly inside the patient's card so the NP can adjust anthracycline or hold cycle 4 vincristine before the orders even reach pharmacy. Cardiac monitoring with cumulative anthracycline dose and neutropenic fever pathway are baked into every cycle.",
  },
  {
    icon: Search,
    title: "Imaging Coordination & Response Tracking",
    description:
      "Drive the interim and end-of-treatment PET/CT machine: pre-auth at week 5, scan slot at week 7, radiology read by week 8, and tumor board presentation by week 9. Momenties links every imaging task to the patient's Lugano/Deauville scoring history, queues bone marrow re-biopsy when indicated, and routes Deauville 4–5 results into the relapsed pathway with structured notes for the transplant and CAR-T teams so consolidation decisions are made in days, not weeks.",
  },
  {
    icon: Stethoscope,
    title: "CAR-T Cell Therapy Coordination",
    description:
      "Run the full CAR-T arc end-to-end: leukapheresis day coordination, central line care, manufacturing-window bridging therapy with polatuzumab + BR or rituximab + gemcitabine to prevent progression, lymphodepletion with fludarabine/cyclophosphamide on days −5 to −3, infusion day, and inpatient CRS/ICANS monitoring with ASTCT grading at every shift. Momenties anchors tocilizumab and steroid escalation pathways, neuro checks every 8 hours, and day +28/+90 response PET/CT to the calendar so the NP never loses the thread between outpatient and inpatient teams.",
  },
  {
    icon: Heart,
    title: "Survivorship & Relapse Surveillance",
    description:
      "Build long after the last cycle: post-CAR-T hypogammaglobulinemia IVIG replacement, vaccine restart calendar at 6 and 12 months, annual cardiac surveillance for anthracycline-exposed patients, secondary malignancy screening, fertility follow-up, and structured 3-, 6-, and 12-month CT surveillance. Momenties hands off cleanly to the community oncologist with a shared surveillance plan and one-tap re-staging order set if a survivor calls with new B-symptoms or rising LDH.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "New-Patient Intake & Cycle 1 Education",
    description:
      "Complete chemo teach, port placement coordination, hepatitis B/HIV serologies with antiviral prophylaxis when indicated, baseline echocardiogram, fertility consult, and Bactrim/acyclovir prophylaxis start; deliver written R-CHOP cycle schedule and 24-hour fever hotline plan with neutropenic fever escalation thresholds.",
  },
  {
    month: "Month 3–4",
    title: "Cycles 1–3 Active Management",
    description:
      "Run day-8 mid-cycle visits, day-10 nadir labs, G-CSF support, rituximab infusion-reaction monitoring at each cycle, antiemetic optimization, CNS-IPI high-risk intrathecal MTX scheduling, and interim PET/CT prep for cycle 2 with structured Deauville hand-off to attending.",
  },
  {
    month: "Month 5–6",
    title: "Cycles 4–6 & EOT Response",
    description:
      "Track cumulative anthracycline dose and repeat echo if cardiac symptoms, finalize end-of-treatment labs and PET/CT, and present at tumor board with NP-authored response summary including residual neuropathy, cardiac function, and supportive-care needs.",
  },
  {
    month: "Month 7–8",
    title: "CAR-T Coordination or Surveillance Setup",
    description:
      "For Deauville 4–5: coordinate leukapheresis, central line, bridging therapy during manufacturing, lymphodepletion teaching, and CRS/ICANS family education. For complete responders: build surveillance imaging calendar and survivorship plan with patient-facing milestones.",
  },
  {
    month: "Month 9–10",
    title: "Post-CAR-T or Post-Cycle 6 Recovery",
    description:
      "Manage post-CAR-T day +28 and +90 visits with response PET/CT, cytopenia surveillance, IVIG replacement for IgG <400, and infection prophylaxis taper; or standard post-frontline recovery with vaccine restart calendar at 6-month milestone.",
  },
  {
    month: "Month 11–12",
    title: "Survivorship Plan & Surveillance Activation",
    description:
      "Author survivorship care plan, set 3-/6-/12-month CT surveillance cadence, schedule annual cardiac and secondary-malignancy screening, document late effects, and hand off shared calendar to community oncology partner with relapse-warning escalation pathway.",
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
    metric: "Rituximab Infusion-Reaction Documentation",
    target: "100%",
    description:
      "Premedication, vital sign trends, and reaction grading documented at every rituximab infusion — required for evidence-based titration and future cycle planning.",
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
      "Days from end-of-treatment PET/CT acquisition to multidisciplinary tumor board decision on consolidation or relapse pathway.",
  },
  {
    metric: "CAR-T Bridging Therapy Coverage",
    target: "≥ 90%",
    description:
      "CAR-T patients with documented bridging plan covering the full apheresis-to-infusion window — essential to prevent progression during manufacturing.",
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
    "DLBCL is six cycles of relentless coordination, and CAR-T adds an entirely new layer. Momenties gives me one calendar that understands a 21-day cycle, a rituximab reaction protocol, and a CAR-T bridging window. My day-8 visit adherence is 97%, and I haven't missed a CRS escalation window since we rolled it out.",
  name: "Amanda R., ANP-BC",
  title: "Lymphoma NP, Academic Medical Center",
}

export default function DiffuseLargeBCellLymphomaNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="DLBCL Nurse Practitioners"
        title="DLBCL Nurse Practitioners — Scheduling for Aggressive Lymphoma Care"
        subtitle="Designed for NPs coordinating DLBCL treatment — from R-CHOP cycle management and rituximab reactions to CAR-T apheresis coordination and post-remission surveillance scheduling."
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
            Four Workflows Designed Around the DLBCL Nurse Practitioner
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
            A 12-Month DLBCL NP Practice Roadmap
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
            KPIs the DLBCL NP Owns
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
