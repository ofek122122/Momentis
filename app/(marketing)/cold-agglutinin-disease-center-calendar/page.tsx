import type { Metadata } from "next"
import {
  Droplet,
  Stethoscope,
  Shield,
  Search,
  Calendar,
  ClipboardList,
  Target,
  Bell,
  CheckCircle,
  TrendingUp,
} from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title:
    "Cold Agglutinin Disease Center — Complement Inhibitor & Anemia Management Calendar | Momenties",
  description:
    "Systematic scheduling for CAD centers — sutimlimab and iptacopan complement inhibitor therapy, cold-triggered hemolysis monitoring, transfusion management, IgM paraprotein surveillance, and treatment response assessment programs.",
}

const pillars = [
  {
    icon: Droplet,
    title: "Complement Inhibitor Therapy Scheduling",
    description:
      "Coordinate sutimlimab (Enjaymo) 6.5–7.5 g IV every 2 weeks (weight-based: 6.5 g for <75 kg, 7.5 g for ≥75 kg) with day-0 and day-7 induction, then strict Q2-week maintenance windows; sequence iptacopan 200 mg PO BID (factor B inhibitor, oral) with adherence calendars and meal-timing reminders; pre-treatment meningococcal MenACWY + MenB vaccination ≥2 weeks before sutimlimab initiation per FDA REMS, plus pneumococcal (PCV20 or PCV15→PPSV23) and Hib coverage; infusion-day workflow including pre-medication review, IV access, vital sign protocol, and 2-hour observation window for hypersensitivity; missed-dose escalation rules and bridging plans for travel or hospital admissions.",
  },
  {
    icon: Stethoscope,
    title: "Hemolysis & Anemia Monitoring",
    description:
      "Serial direct antiglobulin test (DAT) interpretation with the classic CAD pattern (C3d-positive, IgG-negative) and quantitative cold agglutinin titers ≥1:64 at 4°C; biweekly LDH, indirect bilirubin, haptoglobin, and absolute reticulocyte count trending to confirm complement-mediated extravascular hemolysis control; hemoglobin targets >10 g/dL with response thresholds (≥1.5 g/dL rise or normalization without transfusion per CARDINAL/CADENZA criteria); peripheral smear review for agglutination, spherocytes, and polychromasia; quarterly iron studies, ferritin, and B12/folate to exclude compounding deficiencies; FACIT-fatigue score documentation at every visit to capture quality-of-life response beyond hemoglobin alone.",
  },
  {
    icon: Shield,
    title: "Cold Avoidance & Transfusion Management",
    description:
      "Structured cold-trigger education at diagnosis and seasonal touchpoints — gloves, scarves, heated environments, avoidance of cold beverages and refrigerated foods, warm-water hand washing, and pre-warming of car interiors in winter; blood-bank protocols for warmed transfusions using in-line blood warmers (37°C) for all pRBC units, warmed IV fluids, and warmed contrast for imaging; pre-procedure planning for surgery, dental work, colonoscopy, and cardiac catheterization with anesthesia and OR ambient-temperature coordination (≥22°C room, forced-air warming, warmed irrigation); travel and air-conditioning counseling; emergency wallet card and MedicAlert documentation for first responders.",
  },
  {
    icon: Search,
    title: "Paraprotein & B-cell Surveillance",
    description:
      "Annual serum protein electrophoresis (SPEP), immunofixation, and serum free light chains to characterize the IgM kappa monoclonal gammopathy that drives most primary CAD; bone marrow biopsy with flow cytometry, IGH/MYD88 L265P, and CXCR4 testing at diagnosis and on clinical change to identify underlying low-grade lymphoproliferative disease (monoclonal B-cell lymphocytosis, lymphoplasmacytic lymphoma, marginal-zone NHL); CT chest/abdomen/pelvis for adenopathy or splenomegaly when clonal disease is suspected; coordination of clonal-directed therapy when indicated — rituximab + bendamustine (BR) per Berentsen 2017 protocol or rituximab monotherapy — with response reassessment at cycles 3 and 6; long-term clonal evolution monitoring and cold-AIHA differentiation from secondary CAS triggered by Mycoplasma, EBV, or lymphoma.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnosis Confirmation & Pre-Treatment Workup",
    description:
      "Confirm CAD with DAT (C3d+/IgG−), cold agglutinin titer ≥1:64 at 4°C, thermal amplitude testing, LDH, haptoglobin, reticulocyte count, and indirect bilirubin. Complete bone marrow biopsy with flow cytometry, IGH rearrangement, and MYD88 L265P. Order SPEP/IFE/serum free light chains to characterize IgM paraprotein. Rule out secondary CAS (Mycoplasma, EBV, CMV, HCV, lymphoma). Administer meningococcal MenACWY + MenB, pneumococcal, and Hib vaccinations ≥2 weeks before sutimlimab initiation. Document baseline FACIT-fatigue and hemoglobin trajectory.",
  },
  {
    month: "Month 3–4",
    title: "Sutimlimab Induction & Cold-Avoidance Onboarding",
    description:
      "Initiate sutimlimab 6.5–7.5 g IV on day 0 and day 7, then every 2 weeks; document infusion reactions and 2-hour post-infusion observation. Begin structured cold-avoidance counseling — gloves, scarves, warm beverages, pre-warmed environments, MedicAlert enrollment. Coordinate with blood bank to standardize 37°C in-line blood warmers for any transfusion. Track LDH, hemoglobin, reticulocyte count, and bilirubin at weeks 1, 3, 5, and 7 to confirm rapid hemolysis control (LDH typically normalizes within 1–3 weeks).",
  },
  {
    month: "Month 5–6",
    title: "Response Assessment & Transfusion Independence",
    description:
      "Apply CARDINAL/CADENZA composite response criteria — hemoglobin rise ≥1.5 g/dL or normalization, transfusion independence ≥6 weeks, and FACIT-fatigue improvement ≥5 points. Reassess DAT, cold agglutinin titer, haptoglobin, and bilirubin. Discuss iptacopan 200 mg PO BID as oral alternative for selected patients (avoidance of IV access, travel flexibility). Reinforce meningococcal symptom education and document REMS attestation. Plan winter-season escalation pathway for breakthrough hemolysis.",
  },
  {
    month: "Month 7–8",
    title: "Clonal Disease Reassessment & Procedural Planning",
    description:
      "Repeat SPEP, immunofixation, and free light chains; if the IgM paraprotein remains substantial or progressive, reassess for lymphoplasmacytic lymphoma or marginal-zone NHL with imaging and repeat marrow as needed. Evaluate candidacy for clonal-directed therapy (rituximab–bendamustine per Berentsen 2017, or rituximab monotherapy) for patients with active low-grade lymphoma driving CAD. Pre-plan any required procedures (dental, colonoscopy, surgery) with warmed-environment protocols, warmed IV fluids, and OR ambient temperature ≥22°C.",
  },
  {
    month: "Month 9–10",
    title: "Winter Surveillance & Breakthrough Hemolysis Pathway",
    description:
      "Tighten monitoring through cold-weather months — biweekly LDH, hemoglobin, and reticulocyte count; same-day evaluation for any acrocyanosis, dark urine, or sudden fatigue. Audit infusion-window adherence (Q2-week sutimlimab) and PO adherence for iptacopan patients (pill counts, pharmacy refill cadence). Reinforce travel guidance for winter holidays — heated transit, layered clothing, avoidance of cold beverages on flights. Update emergency action plan and ED handoff card.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review, Registry & Long-Term Surveillance",
    description:
      "Complete annual review — composite response status, transfusion burden, FACIT-fatigue trend, vaccination currency (MenACWY 5-year booster, annual influenza, COVID-19 boosters), and meningococcal symptom literacy reattestation. Repeat SPEP/IFE and consider surveillance imaging or marrow if clinical change. Submit data to relevant rare-disease registries and confirm patient enrollment in advocacy resources (NordCAN, Cold Agglutinin Disease Foundation). Plan year-2 schedule and reassess complement inhibitor selection (sutimlimab vs. iptacopan) based on response, lifestyle, and access.",
  },
]

const kpis = [
  {
    metric: "≥1.5 g/dL",
    target: "Hemoglobin Rise on Sutimlimab",
    description:
      "Composite response per CARDINAL/CADENZA — sustained hemoglobin increase ≥1.5 g/dL from baseline or normalization without transfusion within 26 weeks.",
  },
  {
    metric: "100%",
    target: "Pre-Sutimlimab Meningococcal Vaccination",
    description:
      "MenACWY + MenB administered ≥2 weeks before first sutimlimab dose per FDA REMS, with 5-year booster tracking and quarterly symptom-education attestation.",
  },
  {
    metric: "<1.5× ULN",
    target: "LDH Control on Complement Inhibition",
    description:
      "Sustained LDH below 1.5× upper limit of normal as the principal biomarker of complement-mediated hemolysis suppression on sutimlimab or iptacopan.",
  },
  {
    metric: "100%",
    target: "Warmed-Transfusion Compliance",
    description:
      "Every pRBC unit administered through an in-line blood warmer at 37°C, with warmed IV fluids and ambient OR temperature ≥22°C for all procedures.",
  },
  {
    metric: "Q2 Weeks",
    target: "Sutimlimab Infusion-Window Adherence",
    description:
      "On-time biweekly sutimlimab administration with no more than 3-day deviation from the scheduled infusion window across the calendar year.",
  },
  {
    metric: "Annual",
    target: "IgM Paraprotein & Clonal Surveillance",
    description:
      "Annual SPEP, immunofixation, and free light chains, with marrow and imaging on clinical change to detect underlying lymphoplasmacytic or marginal-zone lymphoma.",
  },
]

const testimonial = {
  quote:
    "Cold agglutinin disease lives in the overlap of hematology, transfusion medicine, immunology, and lymphoma care. Our patients need biweekly sutimlimab on a strict window, warmed transfusions, meningococcal REMS attestation, IgM paraprotein surveillance, and seasonal cold-avoidance reinforcement — and most of them only see us a few times a year. Momenties consolidated every infusion window, lab interval, vaccination booster, and annual SPEP into a single calendar. We moved from reactive winter admissions to a structured year-round program with sustained LDH control and reliable transfusion independence.",
  name: "Dr. S. Berentsen",
  title: "Cold Agglutinin Disease Program Director",
}

export default function ColdAgglutininDiseaseCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Cold Agglutinin Disease Center Calendar"
        title="Cold Agglutinin Disease Center — Complement Inhibitor & Anemia Management Calendar"
        subtitle="Systematic scheduling for CAD centers — sutimlimab and iptacopan complement inhibitor therapy, cold-triggered hemolysis monitoring, transfusion management, IgM paraprotein surveillance, and treatment response assessment programs."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem,3vw,2.2rem)",
              fontFamily: "Playfair Display, serif",
              marginBottom: 16,
              color: "#f0ece3",
            }}
          >
            Built for the Full Cold Agglutinin Disease Care Pathway
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "rgba(240,236,227,0.65)",
              maxWidth: 760,
              margin: "0 auto 48px",
              fontSize: "0.97rem",
              lineHeight: 1.65,
            }}
          >
            Four operational pillars — complement inhibitor logistics, hemolysis monitoring, cold-avoidance and transfusion safety, and clonal-disease surveillance — all sequenced into one program calendar.
          </p>
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
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "rgba(240,236,227,0.65)",
                    lineHeight: 1.65,
                  }}
                >
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
                marginBottom: 16,
                color: "#f0ece3",
              }}
            >
              The Year-One CAD Program — Sequenced Across 12 Months
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
                maxWidth: 760,
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 1.65,
              }}
            >
              Diagnostic confirmation, sutimlimab induction, response assessment, clonal-disease reassessment, winter surveillance, and annual review — every milestone with a defined window.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map((item) => {
                const phaseIcons = [Calendar, Droplet, Target, Search, Bell, ClipboardList]
                const PhaseIcon = phaseIcons[timeline.indexOf(item)] ?? Calendar
                return (
                  <div
                    key={item.month}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "200px 1fr",
                      gap: 24,
                      background: "#131318",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: 14,
                      padding: "24px 28px",
                      alignItems: "start",
                    }}
                  >
                    <div>
                      <PhaseIcon size={20} color="#c5a35c" style={{ marginBottom: 8 }} />
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
                        color: "rgba(240,236,227,0.65)",
                        fontSize: "0.92rem",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                )
              })}
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
                marginBottom: 16,
                color: "#f0ece3",
              }}
            >
              The 6 KPIs That Define a Cold Agglutinin Disease Program
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 48,
                fontSize: "0.97rem",
                maxWidth: 760,
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 1.65,
              }}
            >
              Outcome targets that translate complement inhibitor science into measurable, auditable program performance.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                gap: 20,
              }}
            >
              {kpis.map((kpi) => (
                <div
                  key={kpi.target}
                  style={{
                    background: "#0a0a0d",
                    border: "1px solid rgba(197,163,92,0.2)",
                    borderRadius: 14,
                    padding: "28px 24px",
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
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(240,236,227,0.65)",
                      lineHeight: 1.55,
                    }}
                  >
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
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div
              style={{
                background: "#131318",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "40px 36px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  color: "#c5a35c",
                  marginBottom: 16,
                  lineHeight: 1,
                }}
              >
                &ldquo;
              </div>
              <p
                style={{
                  fontSize: "clamp(1rem,2vw,1.15rem)",
                  color: "#f0ece3",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginBottom: 28,
                }}
              >
                {testimonial.quote}
              </p>
              <div style={{ fontWeight: 700, color: "#c5a35c", fontSize: "0.95rem" }}>
                {testimonial.name}
              </div>
              <div
                style={{
                  color: "rgba(240,236,227,0.65)",
                  fontSize: "0.88rem",
                  marginTop: 4,
                }}
              >
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
