import type { Metadata } from "next"
import { Zap, Search, Stethoscope, Workflow } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Peripheral T-Cell Lymphoma Center — Treatment & Monitoring Calendar | Momenties",
  description:
    "Specialized scheduling for PTCL centers — CHOP-based regimen coordination, brentuximab vedotin scheduling, autologous stem cell transplant eligibility assessment, response PET/CT scheduling, and surveillance imaging programs.",
}

const pillars = [
  {
    icon: Zap,
    title: "Chemotherapy Regimen Coordination",
    description:
      "Orchestrate CHOP and CHOEP cycles on a strict 21-day cadence, layering in CD30-directed brentuximab vedotin (BV-CHP) for ALCL and other CD30-positive PTCL subtypes per the ECHELON-2 protocol. Momenties pre-stages day-1 infusion slots, day-8 labs, day-10 nadir CBCs, and day-14 G-CSF support, while flagging dose-limiting neutropenia, hepatic dose adjustments, and pralatrexate weekly dosing windows for PTCL-NOS so the center can keep relative dose intensity above 85% across all six cycles.",
  },
  {
    icon: Search,
    title: "Response Assessment & Imaging",
    description:
      "Schedule interim PET/CT after cycle 2 or 3 and end-of-treatment PET/CT 6–8 weeks after the final cycle, scoring per Lugano/Deauville criteria with bone marrow re-biopsy when indicated. Momenties auto-builds the staging workup for AITL versus PTCL-NOS — including EBER in situ hybridization, T-cell receptor clonality, flow cytometry, and contrast-enhanced neck/chest/abdomen/pelvis imaging — and tracks turnaround on radiology read, hematopathology sign-out, and tumor board presentation.",
  },
  {
    icon: Stethoscope,
    title: "Transplant Evaluation & Coordination",
    description:
      "Move first-remission PTCL patients toward consolidative autologous stem cell transplant without losing the 3-month window after end-of-treatment PET. Momenties chains together transplant referral, HLA typing, cardiac MUGA/echocardiogram, PFTs, MRD assessment, stem cell mobilization with G-CSF ± plerixafor, and conditioning bed booking — and coordinates BEAM admission with the inpatient transplant team while keeping the community oncologist looped into every milestone.",
  },
  {
    icon: Workflow,
    title: "Relapsed/Refractory Management",
    description:
      "Spin up the relapsed pathway the moment progression is confirmed: romidepsin or belinostat infusion blocks, pralatrexate weekly with leucovorin/B12 supplementation, brentuximab vedotin re-treatment for CD30+ disease, and clinical trial screening for novel agents. Momenties holds standing slots for second-opinion visits, allogeneic transplant consults, and CAR-T eligibility review, while building surveillance imaging programs at 3-, 6-, and 12-month intervals for patients in sustained remission.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnosis & Staging Workup",
    description:
      "Confirm PTCL subtype (PTCL-NOS, AITL, ALCL ALK+/ALK−) via excisional biopsy with full IHC and TCR rearrangement; complete PET/CT, bone marrow biopsy, echocardiogram, hepatitis/HIV serologies, and IPI scoring within 21 days of referral.",
  },
  {
    month: "Month 3–4",
    title: "Frontline Cycles 1–3",
    description:
      "Initiate CHOP, CHOEP, or BV-CHP for CD30+ disease on a 21-day cycle; embed day-8 CBC, day-10 nadir labs, neulasta day +1, antiemetic plans, and tumor lysis prophylaxis; perform interim PET/CT after cycle 2 or 3.",
  },
  {
    month: "Month 5–6",
    title: "Cycles 4–6 & End-of-Treatment Response",
    description:
      "Complete cycles 4–6 with cumulative anthracycline tracking, repeat echocardiogram if symptoms warrant, and schedule end-of-treatment PET/CT 6–8 weeks after cycle 6 with Deauville scoring at multidisciplinary tumor board.",
  },
  {
    month: "Month 7–8",
    title: "Transplant Eligibility & Mobilization",
    description:
      "For first-remission patients ≤70 with adequate organ function, complete autologous SCT workup, mobilize with G-CSF ± plerixafor, collect ≥2×10⁶ CD34+ cells/kg, and admit for BEAM conditioning and infusion.",
  },
  {
    month: "Month 9–10",
    title: "Post-Transplant Recovery & Surveillance Setup",
    description:
      "Manage day +30 and day +100 post-transplant visits, engraftment confirmation, vaccination restart schedule, infection prophylaxis taper, and hand-off back to the referring oncologist with shared surveillance calendar.",
  },
  {
    month: "Month 11–12",
    title: "Surveillance Imaging & Late-Effects Program",
    description:
      "Establish 3-, 6-, and 12-month CT surveillance, annual late-effects screening (cardiac, secondary malignancy, endocrine), and re-stage immediately on any concerning symptom; activate relapsed/refractory pathway if progression detected.",
  },
]

const kpis = [
  {
    metric: "Relative Dose Intensity",
    target: "≥ 85%",
    description:
      "Percentage of planned CHOP/CHOEP/BV-CHP dose delivered on schedule across all 6 cycles — directly correlated with progression-free survival in PTCL.",
  },
  {
    metric: "Time to First Cycle",
    target: "≤ 21 days from diagnosis",
    description:
      "Days from confirmed pathology to cycle 1 day 1 — minimizing the window in which aggressive PTCL can progress before therapy begins.",
  },
  {
    metric: "Interim PET Turnaround",
    target: "≤ 7 days",
    description:
      "Days from PET/CT acquisition to Deauville-scored read presented at tumor board — enabling rapid escalation for non-responders.",
  },
  {
    metric: "Transplant Referral Rate",
    target: "≥ 80% of eligible CR1 patients",
    description:
      "First-remission PTCL patients ≤70 with chemo-sensitive disease who reach autologous SCT consultation within the 3-month post-EOT window.",
  },
  {
    metric: "Surveillance Imaging Adherence",
    target: "≥ 95%",
    description:
      "Patients completing scheduled 3-, 6-, and 12-month CT surveillance on time — early detection of relapse remains the strongest lever for salvage outcomes.",
  },
  {
    metric: "Clinical Trial Enrollment",
    target: "≥ 30% of R/R cases",
    description:
      "Relapsed/refractory PTCL patients screened for novel-agent or CAR-T trials within 14 days of progression — a quality benchmark for academic PTCL programs.",
  },
]

const testimonial = {
  quote:
    "PTCL moves fast and so does our treatment plan. Momenties holds the entire arc — pathology to PET to transplant — in one calendar so we never lose a week between cycles or between remission and consolidation. Our relative dose intensity went from 78% to 91% in two quarters.",
  name: "Dr. Mariana V.",
  title: "Director, T-Cell Lymphoma Program, Academic Cancer Center",
}

export default function PeripheralTCellLymphomaCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Peripheral T-Cell Lymphoma Center Calendar"
        title="Peripheral T-Cell Lymphoma Center — Treatment & Monitoring Calendar"
        subtitle="Specialized scheduling for PTCL centers — CHOP-based regimen coordination, brentuximab vedotin scheduling, autologous stem cell transplant eligibility assessment, response PET/CT scheduling, and surveillance imaging programs."
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
            Four Systems Built for Aggressive T-Cell Lymphoma Care
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
            Your 12-Month PTCL Treatment Roadmap
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
            KPIs That Define a High-Performing PTCL Program
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
