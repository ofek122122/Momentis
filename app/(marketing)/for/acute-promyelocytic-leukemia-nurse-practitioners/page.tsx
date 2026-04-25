import type { Metadata } from "next"
import { Bell, Stethoscope, ClipboardList, Heart } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title:
    "APL Nurse Practitioners — Scheduling for a Highly Curable but Urgent Leukemia | Momentis",
  description:
    "Built for NPs managing acute promyelocytic leukemia — from same-day differentiation syndrome assessments and daily coagulopathy labs to PCR surveillance and long-term molecular remission monitoring.",
}

const pillars = [
  {
    icon: Bell,
    title: "Emergency Induction & Urgent Lab Management",
    description:
      "APL is the leukemia diagnosis where hours matter. Momentis pre-builds the same-day triage card the moment APL is suspected — STAT peripheral smear review, ATRA 45 mg/m²/day started before molecular confirmation, fibrinogen/PT/PTT/D-dimer/platelets every 6–8 hours, and structured cryoprecipitate, FFP, and platelet transfusion thresholds inside the patient's record. NPs see the next-due lab, the open transfusion order, and the time since the last fibrinogen result on a single screen so the clotting curve never gets ahead of the team.",
  },
  {
    icon: Stethoscope,
    title: "Differentiation Syndrome Assessment",
    description:
      "Twice-daily DS rounds become a structured workflow rather than a memory test. Momentis embeds the ATRA-APL differentiation score (fever, dyspnea, weight gain >5 kg, pulmonary infiltrates, pleural/pericardial effusion, hypotension, renal failure) inside each patient visit and auto-cues dexamethasone 10 mg IV BID at the first sign. NPs document score trends, escalate ATRA holds when severe, and coordinate echocardiography, chest imaging, and ICU transfer triggers from the same view — without leaving the patient's chart.",
  },
  {
    icon: ClipboardList,
    title: "Consolidation Cycle Coordination",
    description:
      "Consolidation is where the curable case is won or lost. Momentis schedules the QTc check before each ATO dose, the electrolyte replacement window (K⁺ >4.0, Mg²⁺ >1.8) before infusion, the cycle-aligned echocardiogram for high-risk anthracycline patients, and the ophthalmology referral for ATRA-related pseudotumor cerebri. PML-RARA RT-qPCR at the end of each consolidation cycle is queued with the lab couriered specimen window so a single missed sample never breaks the molecular surveillance chain.",
  },
  {
    icon: Heart,
    title: "Long-Term MRD & Survivorship",
    description:
      "After molecular CR, the NP becomes the longitudinal voice of the program. Momentis builds a 5-year surveillance lane — PML-RARA quantitative PCR every 3 months in years 1–2 and every 6 months in years 3–5 — with structured PCR result communication, next-step counseling, and an early-relapse pathway pre-loaded for any positivity (ATO re-induction, autologous or allogeneic SCT). Survivorship lanes track late cardiac effects from anthracyclines, secondary MDS/AML risk, fertility preservation conversations, pregnancy-safe regimens for fertile patients, and annual endocrine review.",
  },
]

const timeline = [
  {
    month: "Month 1-2",
    title: "Same-Day Triage & Induction Stabilization",
    description:
      "Run same-day APL suspicion triage — peripheral smear, ATRA 45 mg/m²/day before genetic confirmation, baseline ECG with QTc, electrolyte correction before ATO, and a coagulopathy lane with fibrinogen, PT, PTT, D-dimer, and platelets every 6–8 hours. Twice-daily DS assessment with structured ATRA-APL scoring. Coordinate echocardiogram, ophthalmology baseline, and intracranial hemorrhage neuro checks. Document fertility preservation conversation before any anthracycline cycle.",
  },
  {
    month: "Month 3-4",
    title: "Day 28 Marrow & Consolidation Cycle 1",
    description:
      "Schedule the Day 28–35 marrow with morphology, cytogenetics, and PML-RARA PCR. Begin consolidation cycle 1 with QTc check before each ATO dose, electrolyte replacement protocol, and ophthalmology re-evaluation if pseudotumor cerebri symptoms. For high-risk patients, coordinate intrathecal methotrexate ×4–6 for CNS prophylaxis. Communicate molecular results to the patient with structured next-step counseling.",
  },
  {
    month: "Month 5-6",
    title: "Cycles 2–3 & ATO Toxicity Management",
    description:
      "Run consolidation cycles 2 and 3 with cycle-aligned echocardiograms, weekly CBC for cytopenia recovery, monthly hepatic function panels, and ATO-specific monitoring (peripheral neuropathy assessment, headache and visual changes, dermatologic reactions). Pre-build the QTc check, K⁺/Mg²⁺ replacement window, and PCR draw before every infusion day so no patient starts ATO without the safety check complete.",
  },
  {
    month: "Month 7-8",
    title: "End-of-Consolidation PCR & Maintenance Decision",
    description:
      "Coordinate the end-of-consolidation marrow with quantitative PML-RARA PCR. Communicate molecular CR results with structured patient education on what surveillance looks like for the next 5 years. For high-risk patients, initiate maintenance with intermittent ATRA + 6-MP + methotrexate; teach 6-MP/MTX self-administration, dose-adjustment triggers, and weekly CBC/LFT cadence.",
  },
  {
    month: "Month 9-10",
    title: "Quarterly PCR Surveillance & Survivorship Visit",
    description:
      "Anchor the first quarterly PML-RARA quantitative PCR in surveillance, tied to a structured survivorship visit — late-effect cardiac review, fertility follow-up, pregnancy planning for fertile patients with explicit guidance on pregnancy-safe regimens if relapse occurs, secondary malignancy screening, and an annual flu/pneumococcal/COVID vaccine review. Coordinate echocardiogram at 6 and 12 months post-anthracycline.",
  },
  {
    month: "Month 11-12",
    title: "Year-1 Molecular Review & Long-Term Plan",
    description:
      "Anchor the 12-month review — CBC, peripheral smear, PML-RARA quantitative PCR, echocardiogram, fertility/endocrine review, and secondary malignancy screening. Confirm sustained molecular CR. Hand off to year 2 with PCR every 3 months continuing, then transition into year 3–5 PCR every 6 months. Pre-load the early-relapse pathway (ATO re-induction, autologous or allogeneic SCT, ATRA-based salvage) so any PCR positivity activates the team within 48 hours.",
  },
]

const kpis = [
  {
    metric: "<2 hr",
    target: "Time From Suspicion to ATRA Start",
    description:
      "ATRA initiated within two hours of clinical or morphologic suspicion of APL — before molecular confirmation.",
  },
  {
    metric: "100%",
    target: "Q6–8 Hour Coagulopathy Lab Compliance",
    description:
      "Fibrinogen, PT/PTT, D-dimer, and platelets drawn on the protocol cadence through the first 7–10 days of induction.",
  },
  {
    metric: "100%",
    target: "Pre-Dose ATO QTc & Electrolyte Check",
    description:
      "Every arsenic trioxide dose preceded by QTc <460 ms, K⁺ >4.0, and Mg²⁺ >1.8 documented in the chart.",
  },
  {
    metric: "100%",
    target: "Fertility Preservation Conversation Documented",
    description:
      "Every fertile patient receives a structured fertility preservation discussion before any anthracycline cycle.",
  },
  {
    metric: "≥95%",
    target: "On-Schedule Quarterly PCR Compliance",
    description:
      "Quarterly PML-RARA quantitative PCR completed within the protocol window for years 1–2 of surveillance.",
  },
  {
    metric: "<48 hr",
    target: "PCR Result Communication to Patient",
    description:
      "Every quantitative PCR result communicated to the patient with structured next-step counseling within 48 hours.",
  },
]

const testimonial = {
  quote:
    "APL is the leukemia where the NP role decides whether the patient lives or dies in the first two weeks. Same-day triage, ATRA before confirmation, fibrinogen every six hours, twice-daily differentiation syndrome scoring, QTc and electrolytes before every arsenic dose, fertility conversations before anthracyclines, and PCR results delivered with real counseling — none of that fits in a paper protocol. Momentis gave me a calendar where every dose, every lab, every echocardiogram, and every PCR sits on the patient card with the next-due time visible. Across our last 30 inductions we hit zero early deaths, 100% fertility preservation conversations, and 96% molecular CR at end of consolidation.",
  name: "Diane S., AGPCNP-BC",
  title: "Leukemia NP, Comprehensive Cancer Center",
}

export default function AcutePromyelocyticLeukemiaNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="APL Nurse Practitioners"
        title="APL Nurse Practitioners — Scheduling for a Highly Curable but Urgent Leukemia"
        subtitle="Built for NPs managing acute promyelocytic leukemia — from same-day differentiation syndrome assessments and daily coagulopathy labs to PCR surveillance and long-term molecular remission monitoring."
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
            Four Pillars of APL Nurse Practitioner Practice
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 28,
            }}
          >
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
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    marginBottom: 10,
                    color: "#f0ece3",
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "#a0998e", lineHeight: 1.65 }}>
                  {description}
                </p>
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
              The APL NP Care Year — Triage Through Year-One Surveillance
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "#a0998e",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Six two-month phases that take a newly diagnosed APL patient from same-day triage through the first year of molecular surveillance — and into a 5-year PCR-driven survivorship plan.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map((item) => (
                <div
                  key={item.month}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr",
                    gap: 24,
                    background: "#131318",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14,
                    padding: "24px 28px",
                    alignItems: "start",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "#c5a35c",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginBottom: 4,
                      }}
                    >
                      {item.month}
                    </div>
                    <div
                      style={{
                        color: "#f0ece3",
                        fontWeight: 600,
                        fontSize: "0.97rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.title}
                    </div>
                  </div>
                  <p
                    style={{
                      color: "#a0998e",
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
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
              Six KPIs That Define APL NP Practice Excellence
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                gap: 20,
              }}
            >
              {kpis.map((kpi) => (
                <div
                  key={kpi.target}
                  style={{
                    background: "#131318",
                    border: "1px solid rgba(197,163,92,0.2)",
                    borderRadius: 14,
                    padding: "28px 22px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(1.4rem,2.5vw,1.9rem)",
                      fontWeight: 700,
                      color: "#c5a35c",
                      fontFamily: "Playfair Display, serif",
                      marginBottom: 6,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "#f0ece3",
                      fontWeight: 600,
                      marginBottom: 8,
                    }}
                  >
                    {kpi.target}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#a0998e", lineHeight: 1.55 }}>
                    {kpi.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ background: "#0e0e12", padding: "72px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", color: "#c5a35c", marginBottom: 16, lineHeight: 1 }}>
              &ldquo;
            </div>
            <blockquote
              style={{
                fontSize: "clamp(1rem,2vw,1.2rem)",
                color: "#f0ece3",
                lineHeight: 1.7,
                fontStyle: "italic",
                marginBottom: 28,
                margin: 0,
                padding: 0,
                border: "none",
              }}
            >
              {testimonial.quote}
            </blockquote>
            <div style={{ marginTop: 28 }}>
              <div style={{ fontWeight: 700, color: "#c5a35c", fontSize: "0.95rem" }}>
                {testimonial.name}
              </div>
              <div style={{ color: "#a0998e", fontSize: "0.88rem", marginTop: 4 }}>
                {testimonial.title}
              </div>
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
