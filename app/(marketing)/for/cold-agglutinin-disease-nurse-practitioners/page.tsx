import type { Metadata } from "next"
import { Bell, ClipboardList, Heart, Shield } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Cold Agglutinin Disease Nurse Practitioners | Momenties",
  description:
    "Purpose-built for NPs managing cold agglutinin disease — from sutimlimab infusion coordination and hemolysis lab monitoring to cold avoidance education and underlying lymphoproliferative surveillance.",
}

const pillars = [
  {
    icon: Bell,
    title: "Complement Inhibitor Infusion Coordination",
    description:
      "Schedule sutimlimab (Enjaymo) every 2-week IV infusions per FDA-approved CAD protocol — 6.5 g for patients <75 kg and 7.5 g for patients >=75 kg. Coordinate prior authorization renewals, specialty pharmacy delivery cadence, infusion-suite chair-time blocks, and pre-infusion vitals plus type-and-screen verification. Verify meningococcal MenACWY and MenB vaccination status at least 2 weeks before initiation per FDA REMS, and maintain quarterly booster surveillance. Educate patients on infusion-day expectations, post-infusion observation, and what to call about (fever, headache, neck stiffness suggesting meningococcal disease). Track sustained hemoglobin response and bilirubin normalization as classical complement pathway inhibition response indicators across the year.",
  },
  {
    icon: ClipboardList,
    title: "Hemolysis Monitoring & Transfusion Support",
    description:
      "Order and trend monthly direct antiglobulin test (DAT, C3d-positive pattern), LDH, haptoglobin, total/indirect bilirubin, reticulocyte count, and CBC for every CAD patient to confirm sutimlimab-mediated hemolysis control and detect breakthrough events. Coordinate with the blood bank for warmed transfusions through an in-line blood warmer when symptomatic anemia requires support, and pre-coordinate extended antigen-matched units to avoid alloimmunization. Schedule cold-agglutinin titer and thermal amplitude testing at baseline and on clinical change. Flag rising LDH or falling hemoglobin with structured nudges to providers and align phlebotomy windows with infusion days so labs are resulted before the next dose decision.",
  },
  {
    icon: Heart,
    title: "Cold Avoidance & Lifestyle Counseling",
    description:
      "Deliver structured cold-avoidance education at intake and reinforce quarterly — heated gloves and layered clothing, room-temperature beverages instead of iced drinks, avoiding cold-water hand-washing and refrigerator/freezer exposure, pre-warming car interiors in winter, and using warmed IV fluids when admitted. Coordinate dental and surgical pre-procedure planning so operating rooms and recovery bays are pre-warmed and IV fluids/blood products run through a warmer. Provide travel guidance for cold climates and air-conditioned environments. Document seasonal symptom diaries, acrocyanosis or Raynaud-like episodes, and trigger logs so providers can correlate exacerbations with environmental exposures.",
  },
  {
    icon: Shield,
    title: "Surveillance for Underlying Lymphoma",
    description:
      "Coordinate baseline and serial bone marrow biopsy with flow cytometry and immunoglobulin gene rearrangement studies to characterize the clonal B-cell lymphoproliferation that underlies primary CAD. Schedule annual serum protein electrophoresis, immunofixation, free light chains, and IgM monoclonal protein quantification, plus CT chest/abdomen/pelvis when clinically indicated for lymphadenopathy or splenomegaly. For patients on rituximab-bendamustine, coordinate infusion premedication, monthly CBC and CMP for cytopenia and hepatic toxicity monitoring, and infection prophylaxis (PJP, antiviral, antifungal). Connect families to NordCAN, the Cold Agglutinin Disease Foundation, and the Mayo Clinic CAD registry for peer support, advocacy, and clinical-trial resources.",
  },
]

const timeline = [
  {
    month: "Month 1-2",
    title: "Intake, Diagnostic Workup & Vaccination",
    description:
      "Complete new-patient CAD intake with cold-trigger symptom history, transfusion history, and baseline functional status. Order DAT (C3d pattern), cold-agglutinin titer, thermal amplitude, LDH, haptoglobin, reticulocytes, CBC, CMP, IgM monoclonal protein quantification, and SPEP/immunofixation. Coordinate baseline bone marrow biopsy with flow and clonality studies. Begin meningococcal MenACWY and MenB vaccination at least 2 weeks before any planned sutimlimab start, and document hepatitis B/pneumococcal status. Begin patient education on classical complement pathway hemolysis and the difference between primary CAD and secondary cold-agglutinin syndrome.",
  },
  {
    month: "Month 3-4",
    title: "Sutimlimab Initiation & Cold-Avoidance Training",
    description:
      "Coordinate prior authorization and specialty-pharmacy delivery for sutimlimab (Enjaymo) and schedule the first weight-based IV infusion (6.5 g <75 kg, 7.5 g >=75 kg) on Day 0 and Day 7, then every 2 weeks. Run pre-infusion vitals, type-and-screen, and meningococcal vaccination verification. Deliver structured cold-avoidance education with heated gloves, layered clothing, warmed beverages, and pre-warmed car/room guidance. Begin monthly DAT, LDH, haptoglobin, bilirubin, reticulocyte, and CBC trending. Provide patients with a meningococcal infection wallet card and a 24/7 call number for fever/headache/neck stiffness.",
  },
  {
    month: "Month 5-6",
    title: "Hemolysis Response Tracking & Blood Bank Coordination",
    description:
      "Trend monthly hemoglobin response toward sustained increase >=1.5 g/dL above baseline and bilirubin normalization as the CARDINAL/CADENZA response signal. Coordinate blood-bank protocols for warmed transfusions through an in-line blood warmer when symptomatic anemia persists, and pre-arrange extended antigen-matched units. Reinforce cold-avoidance behaviors heading into colder months. Run a mid-year medication-reconciliation visit, document infection symptoms or breakthrough hemolysis, and align future infusion days with phlebotomy so labs are resulted before each dosing decision.",
  },
  {
    month: "Month 7-8",
    title: "Mid-Year Lymphoproliferative Surveillance",
    description:
      "Repeat IgM monoclonal protein quantification, SPEP, immunofixation, and free light chains. Order CT chest/abdomen/pelvis if there is new lymphadenopathy, splenomegaly, B-symptoms, or rising IgM. Re-stage the underlying lymphoproliferative clone with bone marrow biopsy when clinically indicated. Run patient-reported symptom-diary review and quality-of-life touchpoints. Update dental and surgical pre-procedure plans for the colder season, including OR pre-warming, warmed IV fluids, and warmed blood-product checklists. Reinforce travel and cold-exposure planning.",
  },
  {
    month: "Month 9-10",
    title: "Rituximab-Bendamustine & Refractory Pathways",
    description:
      "For patients with progressive disease, rising IgM, or sutimlimab non-response, coordinate rituximab-bendamustine cycles per current expert consensus. Schedule premedication (acetaminophen, antihistamine, corticosteroid), infusion-day vitals, and post-infusion observation. Initiate PJP, antiviral, and antifungal prophylaxis. Run monthly CBC and CMP for cytopenia and hepatic-toxicity monitoring, and document infusion-related reactions and tumor-lysis labs. Reinforce education on infection warning signs requiring same-day call (fever, neutropenic symptoms, herpes zoster). Update referrals to hematology-oncology and infectious disease as needed.",
  },
  {
    month: "Month 11-12",
    title: "Annual Reassessment & Care Plan Renewal",
    description:
      "Coordinate annual comprehensive reassessment — DAT, cold-agglutinin titer, thermal amplitude, LDH, haptoglobin, reticulocytes, hemoglobin trajectory, IgM quantification, SPEP/immunofixation, and bone marrow biopsy when indicated. Renew sutimlimab prior authorization and confirm meningococcal booster compliance. Document sustained classical-complement-pathway hemolysis control and updated cold-trigger symptom diaries. Submit annual NordCAN and Cold Agglutinin Disease Foundation registry updates if applicable. Sit down with the patient to refresh next-year care plan, education priorities, transfusion-warming standing orders, and self-management goals.",
  },
]

const kpis = [
  {
    metric: "Q2 Weeks",
    target: "Sutimlimab On-Time",
    description: "Every-2-week weight-based IV infusion adherence with REMS vaccination verification",
  },
  {
    metric: "Monthly",
    target: "DAT + LDH + Haptoglobin",
    description: "Hemolysis trending with bilirubin and reticulocyte count to confirm complement control",
  },
  {
    metric: ">=1.5 g/dL",
    target: "Hemoglobin Response",
    description: "Sustained hemoglobin increase above baseline as CARDINAL/CADENZA response signal",
  },
  {
    metric: "100%",
    target: "Meningococcal Vaccination",
    description: "MenACWY and MenB completed at least 2 weeks pre-sutimlimab per FDA REMS",
  },
  {
    metric: "100%",
    target: "Warmed Transfusion Orders",
    description: "Blood bank coordination for in-line blood warmers and extended antigen matching",
  },
  {
    metric: "Annual",
    target: "Lymphoma Surveillance",
    description: "IgM, SPEP, bone marrow biopsy when indicated to monitor the underlying clone",
  },
]

const testimonial = {
  quote:
    "Cold agglutinin disease patients live between hematology, the blood bank, and primary care — and the NP is usually the one stitching it all together. Momenties keeps every Q2-week sutimlimab infusion, monthly DAT and LDH draw, meningococcal booster, and warmed-transfusion standing order on a single timeline. I stopped chasing labs and reschedules and started actually teaching my patients how to live with cold avoidance. Our hemoglobin response rates climbed, breakthrough hemolysis dropped, and our blood bank finally trusts that warmed transfusions and antigen-matched units show up on time.",
  name: "Marta L., AGPCNP-BC",
  title: "Hematology NP, Complement-Mediated Blood Disorder Clinic",
}

export default function ColdAgglutininDiseaseNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Cold Agglutinin Disease Nurse Practitioners"
        title="Cold Agglutinin Disease NPs — Scheduling for Complement-Mediated Hemolysis"
        subtitle="Purpose-built for NPs managing cold agglutinin disease — from sutimlimab infusion coordination and hemolysis lab monitoring to cold avoidance education and underlying lymphoproliferative surveillance."
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
            Built Around the Cold Agglutinin Disease NP Workflow
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
                marginBottom: 12,
                color: "#f0ece3",
              }}
            >
              The Cold Agglutinin Disease NP Year — Month by Month
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Every Q2-week sutimlimab infusion, monthly hemolysis panel, blood-bank warming order, and lymphoproliferative surveillance touchpoint — sequenced across 12 months.
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
                    borderRadius: 12,
                    padding: "20px 24px",
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
                      color: "rgba(240,236,227,0.65)",
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
              The 6 KPIs That Define Cold Agglutinin Disease NP Excellence
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                gap: 20,
              }}
            >
              {kpis.map((kpi) => (
                <div
                  key={kpi.target}
                  style={{
                    background: "#0a0a0d",
                    border: "1px solid rgba(197,163,92,0.2)",
                    borderRadius: 12,
                    padding: 24,
                    textAlign: "center",
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
                      fontSize: "0.9rem",
                      color: "#f0ece3",
                      fontWeight: 600,
                      marginBottom: 8,
                    }}
                  >
                    {kpi.target}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "rgba(240,236,227,0.65)",
                      lineHeight: 1.45,
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
        <section style={{ padding: "0 24px 40px" }}>
          <blockquote
            style={{
              maxWidth: 720,
              margin: "0 auto",
              background: "#131318",
              border: "1px solid rgba(197,163,92,0.25)",
              borderRadius: 16,
              padding: "36px 40px",
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
                fontSize: "clamp(1rem,2vw,1.2rem)",
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
          </blockquote>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
