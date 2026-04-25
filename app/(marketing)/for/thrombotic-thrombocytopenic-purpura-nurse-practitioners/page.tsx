import type { Metadata } from "next"
import { Zap, Bell, ClipboardList, Shield } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "TTP Nurse Practitioners | Momenties",
  description:
    "Built for NPs coordinating TTP care — from emergency plasma exchange coordination and caplacizumab monitoring to ADAMTS13 remission surveillance, rituximab scheduling, and relapse detection.",
}

const pillars = [
  {
    icon: Zap,
    title: "Plasma Exchange Coordination & Patient Support",
    description:
      "Coordinate emergent therapeutic plasma exchange (TPE) within hours of suspected TTP — secure central venous catheter placement, communicate with apheresis nursing for daily 1.5x plasma-volume exchange with FFP or solvent/detergent plasma replacement, and align infusion-day scheduling. Track daily exchange counts to clinical and laboratory remission (platelets >150,000 x2 consecutive days). Provide structured education on what plasma exchange is, why it must continue daily until remission, line-care expectations, and citrate-related symptom management. Coordinate hospital-to-outpatient transitions, plasma-exchange taper schedules, and post-discharge ADAMTS13 follow-up so the apheresis team, hematology, and the NP service all share one timeline.",
  },
  {
    icon: Bell,
    title: "Caplacizumab Self-Injection Training",
    description:
      "Schedule caplacizumab (Cablivi) administration — 11 mg IV bolus pre-first-plasma-exchange, then 11 mg SC daily during plasma exchange and for 30 days after the last exchange, with extension if ADAMTS13 activity remains <10%. Deliver progressive self-injection training with prefilled syringe technique demonstration, injection-site rotation logs, and post-injection observation guidance for outpatients transitioning to home dosing. Provide bleed-monitoring education — gum bleeding, epistaxis, menstrual changes, hematuria, GI bleeding — and a 24/7 call number. Coordinate prior authorization renewals and specialty-pharmacy delivery windows. Document missed-dose protocols and align home-injection cadence with weekly ADAMTS13 lab draws so dose-extension decisions are evidence-based.",
  },
  {
    icon: ClipboardList,
    title: "ADAMTS13 Remission Surveillance",
    description:
      "Order daily platelet count, LDH, hemoglobin, schistocyte review, and creatinine during the acute episode and trend toward platelet normalization. Schedule weekly ADAMTS13 activity and inhibitor levels during caplacizumab treatment to drive duration decisions (continue if ADAMTS13 <10%). Transition to every-3-month ADAMTS13 surveillance during clinical remission to detect ADAMTS13 relapse before clinical relapse. Educate patients on relapse-recognition red flags — new neurological symptoms (headache, confusion, focal deficits, seizures), low platelets, fatigue, dark urine — and provide a same-day call protocol. Align quarterly ADAMTS13 draws with hematology visits so results are available before each follow-up.",
  },
  {
    icon: Shield,
    title: "Rituximab & Immunosuppression Management",
    description:
      "Coordinate rituximab 375 mg/m^2 weekly x4 dosing for refractory TTP and ADAMTS13 relapse prevention. Schedule premedication (acetaminophen, antihistamine, corticosteroid), infusion-day vitals, and post-infusion observation. Run hepatitis B serology, JC virus risk assessment, and PJP prophylaxis decisions. Track corticosteroid taper, mycophenolate or cyclosporine exposure, and infection-prophylaxis windows. Manage pregnancy considerations — TTP relapse risk is elevated in pregnancy; coordinate pre-conception counseling, monthly ADAMTS13 during pregnancy, multidisciplinary maternal-fetal-medicine and hematology co-management, and post-partum surveillance. Connect families to the TTP Foundation, Answering TTP Foundation, and USTMA registry for peer support, advocacy, and clinical-trial resources.",
  },
]

const timeline = [
  {
    month: "Month 1-2",
    title: "Acute Diagnosis, Plasma Exchange & Caplacizumab Start",
    description:
      "Coordinate emergent admission with hematology and apheresis, secure central-line placement, and initiate daily 1.5x plasma-volume TPE within hours of PLASMIC score >=6. Order baseline ADAMTS13 activity, inhibitor titer, complement panel (to rule out aHUS), schistocyte review, troponin, and creatinine. Initiate caplacizumab 11 mg IV pre-first-exchange and 11 mg SC daily, plus high-dose corticosteroid. Begin daily platelet, LDH, hemoglobin, and creatinine trending. Begin patient education on iTTP pathophysiology, plasma exchange, central-line care, and bleed monitoring on caplacizumab.",
  },
  {
    month: "Month 3-4",
    title: "Plasma Exchange Taper & Self-Injection Training",
    description:
      "Coordinate plasma-exchange taper as platelets normalize x2 consecutive days. Continue daily SC caplacizumab and begin progressive self-injection training with prefilled-syringe technique demonstration and rotation logs. Schedule weekly ADAMTS13 activity and inhibitor for caplacizumab duration decisions (continue while ADAMTS13 <10%). Provide a 24/7 call number for bleeding and relapse symptoms. Initiate or extend rituximab 375 mg/m^2 weekly x4 if ADAMTS13 is severely deficient or this is a relapse episode. Coordinate hospital-to-clinic discharge with first outpatient follow-up within 7 days.",
  },
  {
    month: "Month 5-6",
    title: "Caplacizumab Discontinuation & Early Remission",
    description:
      "Discontinue caplacizumab 30 days after the last plasma exchange if ADAMTS13 activity has recovered to >=20%; extend daily dosing if ADAMTS13 remains <10%. Transition to every-3-month ADAMTS13 surveillance for established clinical and laboratory remission. Reinforce relapse-recognition education — new neurological symptoms, low platelets, fatigue, dark urine — and confirm same-day call protocol. Run a mid-period medication-reconciliation visit, document any bleeding events, and align quarterly ADAMTS13 draws with hematology follow-up so results are available before each visit.",
  },
  {
    month: "Month 7-8",
    title: "Mid-Year Relapse Surveillance & Pregnancy Counseling",
    description:
      "Run quarterly ADAMTS13 activity and inhibitor surveillance to detect ADAMTS13 relapse before clinical relapse, and escalate to pre-emptive rituximab when ADAMTS13 falls <20% even in clinical remission. Provide structured pre-conception counseling for women of reproductive age — elevated TTP relapse risk in pregnancy and post-partum, monthly ADAMTS13 during pregnancy, and multidisciplinary MFM-hematology co-management. Update neurological symptom diary review and quality-of-life touchpoints. Reinforce education on warning signs requiring same-day call (headache, confusion, focal deficits, low platelets, dark urine).",
  },
  {
    month: "Month 9-10",
    title: "Pre-Emptive Rituximab & Refractory Pathways",
    description:
      "For ADAMTS13 relapse (activity <20%) without clinical relapse, coordinate pre-emptive rituximab 375 mg/m^2 weekly x4 with premedication, infusion-day vitals, hepatitis B serology, and post-infusion observation. Initiate or continue PJP and antiviral prophylaxis. Run monthly CBC and CMP for cytopenia and hepatic-toxicity monitoring during rituximab. For refractory TTP, coordinate consideration of N-acetylcysteine, cyclosporine, mycophenolate, or splenectomy with the hematology team. Reinforce education on infection warning signs requiring same-day call (fever, neutropenic symptoms, herpes zoster).",
  },
  {
    month: "Month 11-12",
    title: "Annual Reassessment & Care Plan Renewal",
    description:
      "Coordinate annual comprehensive reassessment — ADAMTS13 activity and inhibitor, CBC, LDH, creatinine, neurological exam, and quality-of-life inventory. Document sustained ADAMTS13 remission status (>=50% activity, undetectable inhibitor) and update relapse-prevention plans. Renew rituximab prior authorization windows for pre-emptive dosing if needed. Submit annual TTP Foundation, Answering TTP Foundation, and USTMA registry updates if applicable. Sit down with the patient to refresh next-year care plan, education priorities, pregnancy planning, central-line standing orders, and self-management goals.",
  },
]

const kpis = [
  {
    metric: "Daily",
    target: "Platelet Count",
    description: "Daily platelet, LDH, hemoglobin, and creatinine trending during the acute episode",
  },
  {
    metric: "Weekly",
    target: "ADAMTS13 During Caplacizumab",
    description: "Weekly ADAMTS13 activity and inhibitor to drive caplacizumab duration decisions",
  },
  {
    metric: "Q3 Months",
    target: "ADAMTS13 in Remission",
    description: "Quarterly ADAMTS13 surveillance to detect ADAMTS13 relapse before clinical relapse",
  },
  {
    metric: "100%",
    target: "Caplacizumab Self-Injection",
    description: "Patients trained on prefilled-syringe technique and bleed-monitoring red flags",
  },
  {
    metric: "100%",
    target: "Pre-Emptive Rituximab",
    description: "ADAMTS13 relapse triggers rituximab 375 mg/m^2 weekly x4 before clinical relapse",
  },
  {
    metric: "100%",
    target: "TTP Foundation Connect",
    description: "Patients linked to TTP Foundation and USTMA registry support and clinical trials",
  },
]

const testimonial = {
  quote:
    "TTP is one of the few conditions where every hour matters and where remission can quietly slip into relapse before symptoms appear. Momenties keeps every plasma-exchange day, daily platelet count, weekly ADAMTS13, caplacizumab self-injection, and pre-emptive rituximab cycle on a single timeline. I stopped chasing labs and reschedules and started actually teaching my patients how to recognize relapse, plan a pregnancy, and live confidently between episodes. Our ADAMTS13 surveillance compliance is finally consistent, and our hematology and apheresis teams trust that follow-up shows up on time.",
  name: "Patricia N., AGACNP-BC",
  title: "Hematology NP, TTP and Thrombotic Microangiopathy Program",
}

export default function ThromboticThrombocytopenicPurpuraNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="TTP Nurse Practitioners"
        title="TTP Nurse Practitioners — Scheduling for a Life-Threatening Thrombotic Microangiopathy"
        subtitle="Built for NPs coordinating TTP care — from emergency plasma exchange coordination and caplacizumab monitoring to ADAMTS13 remission surveillance, rituximab scheduling, and relapse detection."
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
            Built Around the TTP NP Workflow
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
              The TTP NP Year — Month by Month
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Every plasma-exchange day, daily platelet count, weekly ADAMTS13, caplacizumab self-injection, rituximab cycle, and quarterly remission surveillance — sequenced across 12 months.
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
              The 6 KPIs That Define TTP NP Excellence
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
