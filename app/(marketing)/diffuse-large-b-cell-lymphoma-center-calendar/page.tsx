import type { Metadata } from "next"
import { Zap, Search, Stethoscope, Workflow } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Diffuse Large B-Cell Lymphoma Center — Treatment & Surveillance Calendar | Momenties",
  description:
    "High-efficiency scheduling for DLBCL centers — R-CHOP cycle coordination, interim PET/CT assessment, CNS prophylaxis protocols, CAR-T cell therapy coordination, and post-remission surveillance programs.",
}

const pillars = [
  {
    icon: Zap,
    title: "R-CHOP & Intensified Regimen Scheduling",
    description:
      "Lock in the Q21-day R-CHOP cadence — rituximab on day 1, cyclophosphamide/doxorubicin/vincristine on day 1, prednisone days 1–5 — and overlay dose-adjusted EPOCH-R for double/triple-hit lymphoma with continuous infusion days 1–5 and intrathecal methotrexate. Momenties pre-stages chair time, day-8 CBCs, day-10 nadir labs, neulasta day +1, and tumor lysis prophylaxis through cycle 1, while flagging IPI/R-IPI risk stratification at diagnosis and tracking relative dose intensity across all six cycles to keep frontline cure rates intact.",
  },
  {
    icon: Search,
    title: "Interim & End-of-Treatment PET/CT",
    description:
      "Schedule interim PET/CT after cycle 2 or 3 and end-of-treatment PET/CT 6–8 weeks after cycle 6, with structured Deauville scoring (1–5) presented at multidisciplinary tumor board within 7 days of acquisition. Momenties auto-builds the staging workup — contrast CT neck/chest/abdomen/pelvis, bone marrow biopsy when indicated, hepatitis B/C serologies, echocardiogram, beta-2 microglobulin, LDH — and routes Deauville 4–5 results into the relapsed pathway the same day.",
  },
  {
    icon: Stethoscope,
    title: "CNS Prophylaxis & Assessment",
    description:
      "Identify CNS-IPI high-risk patients (score ≥4, testicular/breast/renal/adrenal involvement, double-hit) and pre-book intrathecal methotrexate on cycle days 1 or 8, or high-dose IV methotrexate 3.5 g/m² between cycles. Momenties chains lumbar puncture slots, CSF cytology and flow cytometry, MRI brain at baseline and on neurologic symptoms, and leucovorin rescue with methotrexate level monitoring at 24/48/72 hours so CNS prophylaxis never delays the systemic cycle calendar.",
  },
  {
    icon: Workflow,
    title: "CAR-T Therapy & Relapsed Disease Coordination",
    description:
      "Activate the relapsed/refractory pathway the moment progression is confirmed: polatuzumab vedotin + bendamustine/rituximab as a bridge, tafasitamab + lenalidomide for transplant-ineligible patients, and liso-cel or axi-cel CAR-T for second-line eligible patients. Momenties owns the full CAR-T arc — apheresis slot, manufacturing window, lymphodepletion fludarabine/cyclophosphamide, infusion day, CRS/ICANS monitoring beds — alongside autologous SCT consult, BEAM conditioning, and clinical trial screening for novel agents.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnosis, Staging & IPI Risk Stratification",
    description:
      "Confirm DLBCL with excisional biopsy, MYC/BCL2/BCL6 FISH for double/triple-hit, cell-of-origin (GCB vs ABC) by Hans algorithm; complete PET/CT, bone marrow biopsy, echocardiogram, hepatitis serologies, and IPI/R-IPI/CNS-IPI scoring within 14 days of referral.",
  },
  {
    month: "Month 3–4",
    title: "Frontline Cycles 1–3 with Interim PET",
    description:
      "Initiate R-CHOP or DA-EPOCH-R on Q21-day cycles; embed day-8 CBC, day-10 nadir labs, neulasta day +1, tumor lysis prophylaxis, and CNS-IPI high-risk intrathecal MTX; perform interim PET/CT after cycle 2 with Deauville scoring.",
  },
  {
    month: "Month 5–6",
    title: "Cycles 4–6 & End-of-Treatment Response",
    description:
      "Complete cycles 4–6 with cumulative anthracycline tracking and repeat echocardiogram if symptoms warrant; schedule end-of-treatment PET/CT 6–8 weeks after cycle 6; present Deauville-scored response at tumor board for consolidation decision.",
  },
  {
    month: "Month 7–8",
    title: "Relapsed Pathway Activation or Surveillance Setup",
    description:
      "For Deauville 4–5 or progressive disease, activate second-line: polatuzumab + BR bridging, CAR-T eligibility review, leukapheresis scheduling for liso-cel/axi-cel, and autologous SCT consult; for complete responders, build surveillance imaging calendar.",
  },
  {
    month: "Month 9–10",
    title: "CAR-T Infusion or Post-Transplant Recovery",
    description:
      "Manage lymphodepletion, CAR-T infusion day, inpatient CRS/ICANS monitoring with tocilizumab and steroid escalation pathways, day +28 response assessment, and transition to outpatient surveillance; or autologous SCT day +30/+100 visits with engraftment confirmation.",
  },
  {
    month: "Month 11–12",
    title: "Surveillance Imaging & Late-Effects Program",
    description:
      "Establish 3-, 6-, and 12-month CT surveillance, annual late-effects screening (cardiac, secondary malignancy, endocrine, hypogammaglobulinemia post-CAR-T), vaccination restart calendar, and re-stage immediately on any concerning symptom.",
  },
]

const kpis = [
  {
    metric: "Relative Dose Intensity",
    target: "≥ 85%",
    description:
      "Percentage of planned R-CHOP or DA-EPOCH-R dose delivered on schedule across all 6 cycles — directly correlated with progression-free survival in DLBCL.",
  },
  {
    metric: "Time to First Cycle",
    target: "≤ 14 days from diagnosis",
    description:
      "Days from confirmed pathology to cycle 1 day 1 — minimizing the window in which aggressive DLBCL can progress before therapy begins.",
  },
  {
    metric: "Interim PET Turnaround",
    target: "≤ 7 days",
    description:
      "Days from PET/CT acquisition to Deauville-scored read presented at tumor board — enabling rapid escalation for non-responders.",
  },
  {
    metric: "CNS Prophylaxis Adherence",
    target: "≥ 95% of CNS-IPI ≥4",
    description:
      "High-risk patients receiving complete intrathecal or high-dose IV methotrexate prophylaxis without delaying systemic cycles.",
  },
  {
    metric: "Apheresis-to-Infusion CAR-T Window",
    target: "≤ 35 days",
    description:
      "Days from leukapheresis to CAR-T infusion including manufacturing, lymphodepletion, and bridging therapy — a quality benchmark for CAR-T programs.",
  },
  {
    metric: "Surveillance Imaging Adherence",
    target: "≥ 95%",
    description:
      "Patients completing scheduled 3-, 6-, and 12-month CT surveillance on time — early detection of relapse remains the strongest lever for salvage outcomes.",
  },
]

const testimonial = {
  quote:
    "DLBCL gives us one shot at frontline cure and a narrow window for CAR-T salvage. Momenties holds the entire arc — IPI risk to interim PET to apheresis — in one calendar so we never lose a week. Our apheresis-to-infusion window dropped from 42 to 31 days and our relative dose intensity sits above 90% across the program.",
  name: "Dr. L. Chen",
  title: "Lymphoma Program Director, NCI-Designated Cancer Center",
}

export default function DiffuseLargeBCellLymphomaCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="DLBCL Center Calendar"
        title="Diffuse Large B-Cell Lymphoma Center — Treatment & Surveillance Calendar"
        subtitle="High-efficiency scheduling for DLBCL centers — R-CHOP cycle coordination, interim PET/CT assessment, CNS prophylaxis protocols, CAR-T cell therapy coordination, and post-remission surveillance programs."
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
            Four Systems Built for Aggressive B-Cell Lymphoma Care
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
            Your 12-Month DLBCL Treatment Roadmap
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
            KPIs That Define a High-Performing DLBCL Program
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
