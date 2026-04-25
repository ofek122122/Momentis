import type { Metadata } from "next"
import { Stethoscope, ClipboardList, Target, Search } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Hairy Cell Leukemia Center — Treatment & Long-Term Monitoring Calendar | Momentis",
  description:
    "Comprehensive scheduling for HCL centers — cladribine and pentostatin treatment cycles, minimal residual disease assessment, BRAF V600E-targeted therapy coordination, and decades-long surveillance programs.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Purine Analog Treatment Scheduling",
    description:
      "Coordinate cladribine 0.1 mg/kg/day as a 7-day continuous IV infusion or alternative weekly bolus schedules with admission planning, central-line placement, infusion-pump checks, and post-cycle CBC nadir tracking. Sequence pentostatin 4 mg/m² every-2-week cycles for 8–12 doses with hydration protocols, renal dosing review, and AE clinic visits at the expected count nadir. Pre-treatment workup — splenomegaly imaging, BRAF V600E mutation testing, IGHV4-34 status, peripheral flow cytometry (CD11c, CD25, CD103, CD123) — is locked into the calendar before Day 1 so no patient starts therapy with missing baseline data.",
  },
  {
    icon: Target,
    title: "MRD Assessment & Response Evaluation",
    description:
      "Drive a single source of truth for response milestones — bone marrow biopsy at 4–6 months post-treatment with morphology, immunohistochemistry (CD20, DBA.44, Annexin A1, TRAP), and high-sensitivity flow cytometry for minimal residual disease. Schedule confirmatory MRD-by-flow at 12 months and recurring MRD assessments at 2-, 3-, and 5-year intervals. Tie complete response, complete response with MRD negativity, partial response, and stable disease classifications directly to the next imaging, lab, and surveillance interval so the program speaks one response language across hematopathology, the infusion suite, and the clinic.",
  },
  {
    icon: ClipboardList,
    title: "BRAF-Targeted Therapy Management",
    description:
      "Operate vemurafenib 960 mg BID (and dabrafenib + trametinib alternates) for BRAF V600E-positive relapsed/refractory HCL with structured dermatology referrals every 8 weeks for cuSCC and keratoacanthoma surveillance, ECG/QTc tracking, monthly LFTs, and ophthalmology visits for uveitis screening. Coordinate moxetumomab pasudotox (Lumoxiti) 40 mcg/kg IV on Days 1, 3, 5 of each 28-day cycle with capillary leak syndrome and hemolytic uremic syndrome monitoring, daily weights, and pre-/post-infusion albumin and creatinine labs. Anchor every targeted therapy to its REMS, monitoring window, and dose-modification trigger.",
  },
  {
    icon: Search,
    title: "Long-Term Relapse Surveillance",
    description:
      "Hairy cell leukemia is curable for many — but relapse can occur 10–20 years after first remission. Build a decades-long surveillance lane with annual CBC + differential, peripheral smear review, physical exam for splenomegaly and adenopathy, and biennial bone marrow biopsy for symptomatic patients. Track second-malignancy risk (skin cancers, lymphoid neoplasms) with annual dermatology and primary-care touchpoints. Re-stage at any unexplained cytopenia and queue salvage planning — pentostatin re-treatment, cladribine + rituximab, vemurafenib, or moxetumomab — before the patient leaves the room.",
  },
]

const timeline = [
  {
    month: "Month 1-2",
    title: "Diagnosis Confirmation & Treatment Planning",
    description:
      "Confirm diagnosis with peripheral flow cytometry (CD11c, CD25, CD103, CD123), bone marrow biopsy with reticulin staining, BRAF V600E testing, and IGHV mutational status. Stage with CT abdomen/pelvis for splenomegaly. Hold infectious workup (HBV, HCV, HIV, TB, CMV) and TTE/PFTs as indicated. Lock in a multidisciplinary review and patient education visit before Day 1 of cladribine.",
  },
  {
    month: "Month 3-4",
    title: "Cladribine Cycle & Profound Immunosuppression",
    description:
      "Run the 7-day continuous cladribine infusion with daily CBC, electrolytes, and creatinine. Initiate PCP, fungal, HSV/VZV, and CMV prophylaxis on Day 1. Schedule the absolute neutrophil count and CD4 nadir clinic check at Weeks 2–4. Track febrile neutropenia, transfusion needs, and growth-factor decisions in the calendar so the on-call team can see the trajectory at a glance.",
  },
  {
    month: "Month 5-6",
    title: "Initial Response Assessment",
    description:
      "Perform the 4–6 month post-treatment bone marrow biopsy with morphology, IHC, and high-sensitivity flow MRD. Document complete response, CR with MRD negativity, partial response, or non-response per consensus criteria. Tie the response category directly to the next surveillance interval and queue BRAF-targeted therapy review for any non-responder.",
  },
  {
    month: "Month 7-8",
    title: "Immune Reconstitution & Prophylaxis Wind-Down",
    description:
      "Track CD4 recovery (target >200 cells/µL) before discontinuing PCP prophylaxis. Audit antifungal and antiviral courses, vaccinate per immunocompromised host guidelines (no live vaccines until immune reconstitution), and update the survivorship plan. Coordinate dental and ophthalmology baselines for long-term care.",
  },
  {
    month: "Month 9-10",
    title: "BRAF-Targeted & Salvage Pathway Activation",
    description:
      "For relapsed or refractory disease, activate the vemurafenib or vemurafenib + rituximab pathway with REMS, dermatology, and ECG/QTc tracking. Schedule moxetumomab pasudotox cycles with capillary leak syndrome surveillance for eligible patients. Confirm BRAF V600E status, prior purine analog exposure, and renal function before each salvage decision.",
  },
  {
    month: "Month 11-12",
    title: "Annual Review & Long-Term Surveillance Launch",
    description:
      "Anchor the annual review — CBC, peripheral smear, exam for splenomegaly and adenopathy, dermatology screening, and second-malignancy review. Confirm 12-month MRD-by-flow status. Hand off to the long-term surveillance lane with the next-due date for biennial bone marrow biopsy (if indicated), annual CBC, and decades-long relapse monitoring built into the calendar.",
  },
]

const kpis = [
  {
    metric: "≥85%",
    target: "Complete Response After First-Line Cladribine",
    description:
      "Program-level CR rate at the 4–6 month post-treatment bone marrow assessment per consensus response criteria.",
  },
  {
    metric: "≥60%",
    target: "MRD-Negative Complete Response",
    description:
      "Share of CR patients achieving MRD negativity by high-sensitivity flow cytometry at 6 and 12 months.",
  },
  {
    metric: "100%",
    target: "BRAF V600E Testing at Diagnosis",
    description:
      "Every newly diagnosed patient has BRAF V600E mutational status documented before therapy selection.",
  },
  {
    metric: "<5%",
    target: "Treatment-Related Febrile Neutropenia Admission",
    description:
      "Cladribine cycle admissions for febrile neutropenia kept low through prophylaxis adherence and nadir tracking.",
  },
  {
    metric: "100%",
    target: "Annual CBC + Exam Surveillance Completion",
    description:
      "All HCL survivors receive annual CBC, peripheral smear review, and clinical exam — for life.",
  },
  {
    metric: "≥95%",
    target: "On-Time Bone Marrow at 4–6 Months",
    description:
      "Post-treatment bone marrow biopsies completed within the response-assessment window.",
  },
]

const testimonial = {
  quote:
    "Hairy cell leukemia looks like a 'simple' cure on paper — one cycle of cladribine and most patients achieve durable remission. But the operational reality is decades of surveillance, BRAF testing, MRD-by-flow at multiple time points, salvage planning for relapse 10–20 years later, and immunosuppression management during the cladribine nadir. Momentis gave our HCL program a single calendar where every cycle, biopsy window, MRD checkpoint, and long-term review is sequenced and visible. We achieved 87% MRD-negative CR and zero missed 4–6 month bone marrow biopsies in our last cohort.",
  name: "Dr. M. Reinholt",
  title: "Director, Hairy Cell Leukemia Program",
}

export default function HairyCellLeukemiaCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Hairy Cell Leukemia Center Calendar"
        title="Hairy Cell Leukemia Center — Treatment & Long-Term Monitoring Calendar"
        subtitle="Comprehensive scheduling for HCL centers — cladribine and pentostatin treatment cycles, minimal residual disease assessment, BRAF V600E-targeted therapy coordination, and decades-long surveillance programs."
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
            Four Pillars of HCL Center Operations
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
              The HCL Care Year — Diagnosis Through Long-Term Surveillance
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "#a0998e",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Six two-month phases that take a newly diagnosed HCL patient from confirmation through year-one surveillance — and into a decades-long monitoring program.
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
              Six KPIs That Define HCL Program Excellence
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
