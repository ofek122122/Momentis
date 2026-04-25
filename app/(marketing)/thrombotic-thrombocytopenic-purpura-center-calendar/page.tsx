import type { Metadata } from "next"
import { Droplet, Stethoscope, BarChart3, Shield } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title:
    "Thrombotic Thrombocytopenic Purpura Center Calendar — Acute Management & Remission Monitoring | Momenties",
  description:
    "Systematic scheduling for TTP centers — plasma exchange coordination, caplacizumab therapy monitoring, ADAMTS13 activity trending, immunosuppression for immune-mediated TTP, and relapse surveillance programs.",
}

const pillars = [
  {
    icon: Droplet,
    title: "Plasma Exchange & Acute Management",
    description:
      "Coordinate emergent therapeutic plasma exchange (TPE) at 1.5 plasma volumes daily until remission — apheresis suite scheduling, central venous catheter placement, and plasma replacement (FFP or solvent/detergent-treated plasma) inventory. Track daily platelet counts and LDH trending until platelet target >150K x 2 consecutive days for stopping criteria. Document PLASMIC score (≥6 high probability) at presentation to support empiric TPE initiation pre-ADAMTS13 confirmation, and chart adjunctive corticosteroids (methylprednisolone 1 g/day x 3 then 1 mg/kg/day) per acute iTTP protocol.",
  },
  {
    icon: Stethoscope,
    title: "Caplacizumab Therapy Monitoring",
    description:
      "Schedule caplacizumab 11 mg SC daily during the acute phase and through 30 days post-final TPE — first dose IV before TPE initiation, daily SC dosing thereafter with Hematology-guided taper based on ADAMTS13 recovery. Track bleeding adverse events (mucocutaneous bleeding most common), monitor von Willebrand factor antigen normalization, and structure weekly ADAMTS13 activity labs to determine continuation versus stop. Coordinate caplacizumab supply chain (specialty pharmacy), patient self-injection training, and dose-hold criteria for invasive procedures.",
  },
  {
    icon: BarChart3,
    title: "ADAMTS13 Surveillance & Relapse Prevention",
    description:
      "Track ADAMTS13 activity at presentation (diagnostic threshold <10%), weekly during caplacizumab and acute therapy, and Q3 months in remission for long-term relapse surveillance. Monitor anti-ADAMTS13 inhibitor antibody titer (Bethesda units) trends to identify ongoing autoimmune activity even after platelet normalization. Recognize ADAMTS13 activity <10–20% in remission as a major risk factor for clinical relapse and trigger preemptive rituximab consideration. Annual relapse risk reassessment with shared decision-making documentation.",
  },
  {
    icon: Shield,
    title: "Immunosuppression & Rituximab Coordination",
    description:
      "Schedule rituximab 375 mg/m² weekly x 4 doses for immune-mediated TTP (iTTP) — pre-medication (acetaminophen, diphenhydramine, methylprednisolone), HBV serology screening, and infusion reaction monitoring. Coordinate cyclosporine or mycophenolate mofetil for refractory or relapsing disease, with therapeutic drug monitoring and renal/hepatic surveillance. Document preemptive rituximab re-treatment for ADAMTS13 activity drop in remission, and track long-term immunosuppression infection prophylaxis (PJP, HBV, HSV) per institutional protocol.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Acute TTP Diagnosis & Plasma Exchange Initiation",
    description:
      "Establish diagnosis with PLASMIC score ≥6, confirmatory ADAMTS13 activity <10%, and inhibitor titer. Initiate daily 1.5-volume TPE within 4–8 hours of presentation. Start caplacizumab 11 mg with first TPE (IV pre-TPE then daily SC). Begin high-dose methylprednisolone for iTTP. Monitor daily CBC, LDH, creatinine, and troponin for end-organ involvement.",
  },
  {
    month: "Month 3–4",
    title: "Remission Induction & Rituximab Coordination",
    description:
      "Continue caplacizumab through 30 days post-final TPE with weekly ADAMTS13 monitoring. Initiate rituximab 375 mg/m² weekly x 4 for iTTP confirmed by inhibitor positivity. Track platelet recovery >150K x 2 days as TPE stop criterion. Coordinate central line removal, transition to outpatient infusion clinic, and TTP Foundation patient education referral.",
  },
  {
    month: "Month 5–6",
    title: "Caplacizumab Taper & ADAMTS13 Recovery Assessment",
    description:
      "Hematology-guided caplacizumab taper based on ADAMTS13 activity recovery (target ≥20%). Weekly to biweekly ADAMTS13 surveillance during taper. Reassess inhibitor titer trends and consider extended rituximab if ADAMTS13 fails to recover. Monitor for early clinical relapse signs (microangiopathic hemolysis, thrombocytopenia, neurologic symptoms).",
  },
  {
    month: "Month 7–8",
    title: "Long-Term Remission Surveillance Onset",
    description:
      "Begin Q3-month ADAMTS13 activity surveillance and inhibitor titer trending. Document remission status (clinical + ADAMTS13 ≥20%) versus partial remission. Establish relapse action plan with patient including symptom recognition (headache, neurologic changes, petechiae, fatigue) and 24/7 hematology contact pathway.",
  },
  {
    month: "Month 9–10",
    title: "Relapse Risk Stratification & Preemptive Therapy",
    description:
      "Reassess relapse risk based on ADAMTS13 trajectory — activity <10–20% in remission triggers preemptive rituximab discussion. Coordinate shared decision-making for re-treatment versus surveillance. Update immunosuppression infection prophylaxis status (HBV reactivation surveillance, vaccinations).",
  },
  {
    month: "Month 11–12",
    title: "Annual Comprehensive TTP Program Review",
    description:
      "Annual cardiovascular risk assessment (TTP survivors have elevated long-term cardiovascular and cognitive morbidity), neurocognitive screening, and quality-of-life assessment. Review pregnancy planning for women of childbearing age (TTP relapse risk in pregnancy and postpartum). Submit to TTP registry where applicable. Update ADAMTS13 Q3-month surveillance plan for year 2.",
  },
]

const kpis = [
  {
    metric: "Time to TPE Initiation",
    target: "<8 hours",
    description: "From TTP suspicion (PLASMIC ≥6) to first plasma exchange.",
  },
  {
    metric: "Caplacizumab Compliance",
    target: ">95%",
    description: "Daily 11 mg SC adherence through 30 days post-final TPE.",
  },
  {
    metric: "ADAMTS13 Q3-Month Surveillance",
    target: "100%",
    description: "Remission patients with on-time ADAMTS13 activity testing.",
  },
  {
    metric: "Platelet Target for TPE Stop",
    target: ">150K x 2 days",
    description: "Documented sustained platelet recovery before stopping TPE.",
  },
  {
    metric: "Rituximab Completion (iTTP)",
    target: ">90%",
    description: "Inhibitor-positive patients completing 4-dose rituximab course.",
  },
  {
    metric: "30-Day Relapse Rate",
    target: "<5%",
    description: "Clinical relapse within 30 days of TPE/caplacizumab discontinuation.",
  },
]

const testimonial = {
  quote:
    "TTP demands the rare combination of immediate apheresis logistics, tight ADAMTS13 lab cadence, and long-tail relapse surveillance. Momenties is the first calendar that handles all three without dropping a beat — every TPE session, every caplacizumab dose, every ADAMTS13 draw, and every Q3-month remission check is on the rails.",
  name: "Dr. A. Cuker",
  title: "TTP Program Director, Comprehensive Coagulation Center",
}

export default function ThromboticThrombocytopenicPurpuraCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="TTP Center Calendar"
        title="Thrombotic Thrombocytopenic Purpura Center — Acute Management & Remission Monitoring Calendar"
        subtitle="Systematic scheduling for TTP centers — plasma exchange coordination, caplacizumab therapy monitoring, ADAMTS13 activity trending, immunosuppression for immune-mediated TTP, and relapse surveillance programs."
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
            The Four Pillars of TTP Center Scheduling
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
              The TTP Center Calendar — From Acute Episode Through Year-One Surveillance
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Plasma exchange, caplacizumab, ADAMTS13 trending, rituximab, and remission surveillance — sequenced across 12 months.
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
              The KPIs That Define TTP Program Excellence
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
                  key={kpi.metric}
                  style={{
                    background: "#0a0a0d",
                    border: "1px solid rgba(197,163,92,0.2)",
                    borderRadius: 14,
                    padding: "28px 22px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "rgba(240,236,227,0.65)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 8,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(1.3rem,2.4vw,1.7rem)",
                      fontWeight: 700,
                      color: "#c5a35c",
                      fontFamily: "Playfair Display, serif",
                      marginBottom: 10,
                    }}
                  >
                    {kpi.target}
                  </div>
                  <div
                    style={{
                      fontSize: "0.86rem",
                      color: "rgba(240,236,227,0.65)",
                      lineHeight: 1.5,
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
        <section style={{ background: "#0a0a0d", padding: "72px 24px" }}>
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              background: "#131318",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 18,
              padding: "48px 40px",
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
          </div>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
