import type { Metadata } from "next"
import { Stethoscope, Workflow, Heart, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Waldenström Macroglobulinemia Center — Scheduling & Coordination Calendar | Momenties",
  description:
    "Specialized scheduling for Waldenström macroglobulinemia centers — BTK inhibitor monitoring, immunoglobulin M tracking, plasmapheresis coordination, hyperviscosity management, and rituximab-based regimen cycles.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "IgM & Hyperviscosity Monitoring",
    description:
      "Coordinate the lab-and-clinic rhythm that defines WM care: serial IgM quantification, serum viscosity measurements, and cryoglobulin/cold agglutinin panels timed against symptom flares. Momenties links each lab draw to the next infusion or imaging visit, flags rapidly rising IgM trends for hyperviscosity risk review, and routes urgent plasmapheresis triggers to the on-call hematologist within minutes — preventing retinal hemorrhage, neurological events, and avoidable ICU transfers.",
  },
  {
    icon: Workflow,
    title: "BTK Inhibitor & Chemoimmunotherapy Scheduling",
    description:
      "Build durable cadences for ibrutinib and zanubrutinib monitoring alongside rituximab + bendamustine (BR) and dexamethasone–rituximab–cyclophosphamide (DRC) cycles. Momenties sequences cycle day 1 infusions, mid-cycle CBCs, atrial fibrillation screening EKGs, and bleeding-risk reviews — while reserving infusion chairs and pharmacy mix windows so single-agent BTK and combination regimens never collide on the floor.",
  },
  {
    icon: Heart,
    title: "Plasmapheresis & Supportive Care",
    description:
      "Standing apheresis slots, IVIG infusions, RBC transfusions, and cold agglutinin warming protocols all live on one shared timeline. Momenties coordinates the apheresis nurse, hematology fellow, and infusion suite when symptomatic hyperviscosity demands same-day plasma exchange, and pre-blocks recurring sessions for patients with persistent IgM-driven peripheral neuropathy or anti-MAG antibody syndromes.",
  },
  {
    icon: BarChart3,
    title: "Response Assessment & Surveillance",
    description:
      "Map the IWWM-6 response framework — VGPR, PR, MR, SD — onto an automated cadence of bone marrow biopsies, MYD88 L265P and CXCR4 testing, and CT or PET imaging at defined intervals. Momenties keeps surveillance visits, repeat marrow assessments, and second-opinion tumor board reviews aligned across hematology, pathology, and radiology so disease progression is never caught late.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Center Onboarding & Diagnostic Pathway Mapping",
    description:
      "Map intake from referral through bone marrow biopsy, MYD88 L265P PCR, CXCR4 sequencing, and baseline IgM/viscosity. Configure infusion suite blocks, apheresis slots, and BTK inhibitor counseling rooms in Momenties.",
  },
  {
    month: "Month 3–4",
    title: "BTK Inhibitor & Rituximab Cadence Launch",
    description:
      "Launch ibrutinib and zanubrutinib initiation visits with paired EKG, lipid, and bleeding risk reviews. Stand up rituximab + bendamustine cycle templates and DRC schedules with anti-emetic and growth-factor pre-orders.",
  },
  {
    month: "Month 5–6",
    title: "Hyperviscosity & Plasmapheresis Protocols",
    description:
      "Deploy hyperviscosity rapid-response pathway: same-day viscosity, ophthalmology fundoscopy, and apheresis activation. Pre-block weekly plasma exchange chairs for IgM > 4,000 mg/dL or symptomatic patients.",
  },
  {
    month: "Month 7–8",
    title: "Cold Agglutinin & Neuropathy Coordination",
    description:
      "Layer in cold agglutinin warming protocols, anti-MAG neuropathy assessments with neurology, and IVIG infusions. Sync rheumatology and neurology consults to single-day visits where possible.",
  },
  {
    month: "Month 9–10",
    title: "Response Assessment & Tumor Board Integration",
    description:
      "Automate IWWM-6 response milestones at cycles 3 and 6 — IgM trends, hemoglobin, marrow biopsy intervals — and route ambiguous responders to monthly WM-specific tumor board for consensus.",
  },
  {
    month: "Month 11–12",
    title: "Surveillance, Late-Line Planning & Annual Review",
    description:
      "Establish maintenance surveillance cadence, late-line transitions to BCL2 inhibitors or clinical trials, and present annual outcomes — time-to-best-response, hyperviscosity incidents, ER visits — to center leadership.",
  },
]

const kpis = [
  {
    metric: "Time to BTK Initiation",
    target: "≤ 21 days from diagnosis",
    description:
      "Days from confirmed WM diagnosis (MYD88 L265P + marrow infiltration) to first dose of ibrutinib or zanubrutinib.",
  },
  {
    metric: "Hyperviscosity Response Time",
    target: "≤ 6 hours to plasmapheresis",
    description:
      "From symptomatic hyperviscosity recognition (epistaxis, blurred vision, neuro change) to start of plasma exchange.",
  },
  {
    metric: "IgM Surveillance Compliance",
    target: "≥ 95%",
    description:
      "On-time serum IgM and viscosity labs at each protocol-defined interval during induction and maintenance.",
  },
  {
    metric: "Bone Marrow Biopsy On-Schedule",
    target: "≥ 90%",
    description:
      "Response-assessment marrow biopsies completed within ±14 days of the IWWM-6 protocol target window.",
  },
  {
    metric: "BTK Inhibitor AE Capture",
    target: "100% structured review",
    description:
      "Every visit screens for atrial fibrillation, bleeding, hypertension, and arthralgia with documented action.",
  },
  {
    metric: "Cycle Delay Rate (BR / DRC)",
    target: "≤ 8%",
    description:
      "Percentage of rituximab + bendamustine or DRC cycles delayed > 7 days from planned date for any reason.",
  },
]

const testimonial = {
  quote:
    "Waldenström is rare enough that even our hematologists used to rebuild the workup from memory. With Momenties, every IgM trend, marrow biopsy interval, and BTK side-effect review is on one timeline. We caught two hyperviscosity decompensations within hours instead of after an ER visit — that is the kind of orchestration this disease demands.",
  name: "Dr. Helena R.",
  title: "Director, Lymphoplasmacytic Lymphoma Program, Academic Cancer Center",
}

export default function WaldenstromMacroglobulinemiaCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Waldenström Macroglobulinemia Center Calendar"
        title="Precision Scheduling for a Rare, IgM-Driven Lymphoma"
        subtitle="A coordination calendar built for WM centers — BTK inhibitor monitoring, IgM and viscosity surveillance, plasmapheresis activation, and rituximab-based regimens kept in sync across hematology, apheresis, and pathology."
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
            Four Coordination Pillars for WM Centers
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
            Your 12-Month WM Center Roadmap
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
            KPIs That Define a High-Functioning WM Center
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
