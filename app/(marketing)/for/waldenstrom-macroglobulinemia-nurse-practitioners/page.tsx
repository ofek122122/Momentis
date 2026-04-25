import type { Metadata } from "next"
import { ClipboardList, UserCheck, Bell, Search } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Waldenström Macroglobulinemia NPs — Precision Scheduling for a Rare Disease | Momenties",
  description:
    "A scheduling platform designed for NPs managing Waldenström patients — from BTK inhibitor adherence calls and IgM labs to plasmapheresis coordination and late-line therapy transitions.",
}

const pillars = [
  {
    icon: ClipboardList,
    title: "Initial Workup & Staging",
    description:
      "Anchor every newly referred patient on a single NP-driven timeline: bone marrow biopsy with MYD88 L265P PCR and CXCR4 sequencing, baseline IgM quantification, serum viscosity, beta-2 microglobulin, and CT staging. Momenties prompts the NP to confirm IPSSWM risk score, document hyperviscosity symptoms, and prepare the treatment-vs-watch-and-wait conversation — so nothing falls between hematology, pathology, and the patient.",
  },
  {
    icon: UserCheck,
    title: "Treatment Monitoring & Adherence",
    description:
      "Run structured adherence and tolerability touchpoints for ibrutinib and zanubrutinib: weekly check-ins during month one, then monthly calls reviewing pill counts, atrial fibrillation symptoms, bruising or bleeding, and hypertension trends. For rituximab + bendamustine and DRC, Momenties cues the NP to verify cycle day labs, anti-emetic refills, and IgM trends — keeping reps of treatment intent intact across long regimens.",
  },
  {
    icon: Bell,
    title: "Symptom & Complication Management",
    description:
      "Triage the symptom set that defines WM: peripheral neuropathy from anti-MAG antibodies, cold agglutinin–driven acrocyanosis, fatigue from IgM-related anemia, and early hyperviscosity warnings (epistaxis, headache, blurred vision). Momenties routes red-flag symptoms to same-day apheresis or attending review, keeps neurology and ophthalmology consults from drifting, and logs every patient-reported outcome alongside the next visit.",
  },
  {
    icon: Search,
    title: "Disease Surveillance & Follow-up",
    description:
      "Hold the long view that rare-disease NPs are uniquely positioned to own: response-assessment marrow biopsies, IgM trend graphs, IWWM-6 response category at each milestone, and structured transition planning when relapse or intolerance pushes a patient toward BCL2 inhibitors, proteasome inhibitors, or clinical trials. Momenties keeps every surveillance visit on cadence and surfaces patients trending toward progression before they decompensate.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Patient Panel & Workup Templates",
    description:
      "Build the NP's WM panel in Momenties, configure new-patient workup templates (marrow biopsy, MYD88, CXCR4, IgM, viscosity), and align with hematology on shared review windows.",
  },
  {
    month: "Month 3–4",
    title: "BTK Inhibitor Adherence Cadence Launch",
    description:
      "Launch structured ibrutinib and zanubrutinib monitoring: week-1 tolerability call, monthly atrial fibrillation and bleeding screens, and quarterly hypertension reviews — all surfaced as NP tasks.",
  },
  {
    month: "Month 5–6",
    title: "IgM Trending & Hyperviscosity Triage",
    description:
      "Stand up IgM trend dashboards with NP review at each draw; deploy hyperviscosity symptom triage scripts and rapid escalation paths to apheresis when IgM rises sharply.",
  },
  {
    month: "Month 7–8",
    title: "Neuropathy & Cold Agglutinin Pathways",
    description:
      "Roll out neuropathy assessments (anti-MAG, EMG referrals) and cold agglutinin warming guidance with patient education, plus IVIG scheduling for severe IgM-related neuropathy.",
  },
  {
    month: "Month 9–10",
    title: "Response Assessment & Patient Education",
    description:
      "Coordinate IWWM-6 response milestones — IgM trends, marrow re-biopsies, hemoglobin recovery — and deliver structured patient education on what VGPR, PR, and stable disease mean for next steps.",
  },
  {
    month: "Month 11–12",
    title: "Late-Line Transitions & Annual NP Review",
    description:
      "Build transition workflows to BCL2 inhibitors, proteasome-based regimens, or clinical trials. Present annual NP-led outcomes — adherence, time-to-AE-resolution, missed visits — to program leadership.",
  },
]

const kpis = [
  {
    metric: "Adherence Call Completion",
    target: "≥ 95%",
    description:
      "On-time NP-led adherence calls for patients on ibrutinib or zanubrutinib at protocol-defined intervals.",
  },
  {
    metric: "AFib & Bleeding Screen Capture",
    target: "100% per visit",
    description:
      "Documented atrial fibrillation, bruising, and bleeding screen at every BTK inhibitor follow-up.",
  },
  {
    metric: "IgM Lab On-Schedule",
    target: "≥ 95%",
    description:
      "Serum IgM and viscosity drawn within ±3 days of the protocol-defined cycle or surveillance window.",
  },
  {
    metric: "Hyperviscosity Triage Time",
    target: "≤ 60 minutes",
    description:
      "From patient-reported red-flag symptom (blurred vision, epistaxis, headache) to NP triage decision.",
  },
  {
    metric: "Neuropathy Reassessment Cadence",
    target: "Every 3 months",
    description:
      "Structured peripheral neuropathy reassessment for patients with baseline anti-MAG positivity or symptoms.",
  },
  {
    metric: "Late-Line Transition Lead Time",
    target: "≥ 30 days pre-relapse",
    description:
      "Average days between NP-identified progression signal and start of next-line therapy or trial enrollment.",
  },
]

const testimonial = {
  quote:
    "I cover a panel of Waldenström patients spread across three counties. Momenties is the only thing that keeps every IgM trend, ibrutinib adherence call, and neuropathy reassessment in front of me at the right moment. Two patients caught early progression because the system flagged a rising IgM I would have spotted weeks later in a chart review.",
  name: "Marisol T., MSN, AOCNP",
  title: "Hematology Nurse Practitioner, Lymphoplasmacytic Lymphoma Clinic",
}

export default function WaldenstromMacroglobulinemiaNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Waldenström Macroglobulinemia NPs"
        title="A Scheduling Platform Built Around Rare-Disease Nursing Workflows"
        subtitle="Momenties keeps BTK inhibitor adherence, IgM trending, plasmapheresis activation, and late-line transitions on one timeline — so the NP role in WM care stays proactive, not reactive."
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
            Four Pillars of NP-Led WM Care
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
            Your 12-Month WM NP Operating Plan
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
            KPIs That Prove NP-Led WM Care Works
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
