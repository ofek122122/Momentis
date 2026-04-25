import type { Metadata } from "next";
import {
  Stethoscope,
  BarChart3,
  Shield,
  Heart,
  Calendar,
  Clock,
  Bell,
  ClipboardList,
  TrendingUp,
  Users2,
  CheckCircle,
  Target,
} from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/marketing/Reveal";
import { CTA } from "@/components/marketing/CTA";

export const metadata: Metadata = {
  title:
    "PNH Nurse Practitioners — Complement Inhibitor & Hemolysis Calendar | Momenties",
  description:
    "Scheduling built for paroxysmal nocturnal hemoglobinuria nurse practitioners — eculizumab and ravulizumab Q2/Q8-week infusion logistics, meningococcal vaccination compliance, PNH clone size monitoring, LDH breakthrough hemolysis tracking, anticoagulation INR follow-up, and high-risk PNH pregnancy coordination.",
};

const pillars = [
  {
    icon: Stethoscope,
    title: "Complement Inhibitor Infusion Coordination",
    description:
      "Schedule eculizumab (Soliris) Q2-week 900 mg IV maintenance and ravulizumab (Ultomiris) Q8-week weight-based 3,000–3,600 mg IV maintenance, plus the eculizumab 4-dose induction (600 mg weekly x 4) and ravulizumab loading dose. Track infusion suite slots, port access nursing, premedication windows, and post-infusion observation — including breakthrough hemolysis triage visits when patients call between scheduled doses with fatigue, dark urine, or back pain.",
  },
  {
    icon: BarChart3,
    title: "PNH Clone & Hemolysis Lab Monitoring",
    description:
      "Trend LDH, haptoglobin, reticulocyte count, total/indirect bilirubin, and free hemoglobin at every infusion to confirm intravascular hemolysis control (target LDH <1.5x ULN). Schedule high-sensitivity FLAER + GPI-anchor flow cytometry for PNH clone size monitoring (Type II vs. Type III RBC and granulocyte clone) every 6–12 months, plus baseline and serial CBC, ferritin, and iron studies for the iron-deficient hemolyzer who needs IV iron repletion alongside complement blockade.",
  },
  {
    icon: Shield,
    title: "Meningococcal Prophylaxis & Infection Monitoring",
    description:
      "Stay ahead of FDA REMS requirements: meningococcal MenACWY plus MenB vaccine series completed at least 2 weeks before complement inhibitor initiation, with MenACWY booster every 5 years and MenB booster per ACIP. Track penicillin V 500 mg PO BID (or alternative) antibiotic prophylaxis adherence for the entire treatment duration, fever-call protocols for any temperature >101°F, and patient ID-card carrying compliance — because a single missed Neisseria meningitidis episode is fatal in this population.",
  },
  {
    icon: Heart,
    title: "Thrombosis Risk & Anticoagulation Management",
    description:
      "PNH thrombosis is the leading cause of mortality — coordinate baseline D-dimer, lower-extremity Doppler at any leg symptom, hepatic vein patency imaging for Budd-Chiari surveillance, and intracerebral venous sinus MRV when neurologic symptoms appear. Schedule warfarin INR checks (target 2–3) or DOAC follow-up for patients with prior thrombotic events, monitor for anticoagulation interactions with complement inhibitors, and coordinate high-risk OB management for PNH pregnancy (postpartum thrombosis risk peaks at 6–12 weeks).",
  },
];

const timeline = [
  {
    month: "Month 1–2",
    title: "PNH Diagnosis Workup & Vaccination Lead-In",
    description:
      "Confirm diagnosis with high-sensitivity FLAER flow cytometry on RBCs and granulocytes; document baseline clone size, LDH, haptoglobin, reticulocyte count, ferritin, and CBC. Initiate meningococcal MenACWY plus MenB vaccine series and document the 2-week wait before any complement inhibitor dose. Counsel on penicillin V prophylaxis, ID card, and morning hemoglobinuria recognition. Coordinate aplastic anemia overlap workup if indicated.",
  },
  {
    month: "Month 3–4",
    title: "Complement Inhibitor Induction & First Response Check",
    description:
      "Schedule eculizumab 600 mg IV weekly x 4 induction or ravulizumab loading dose plus first Q8-week maintenance. Trend LDH at every infusion looking for the target >60% reduction by Week 4. Confirm meningococcal vaccine completion is documented in the chart and pharmacy file. Schedule hematology follow-up at Week 4 for full hemolysis panel review, transfusion-need reassessment, and quality-of-life check-in.",
  },
  {
    month: "Month 5–6",
    title: "Maintenance Stabilization & Breakthrough Hemolysis Triage",
    description:
      "Lock in Q2-week eculizumab or Q8-week ravulizumab cadence in the infusion suite. Build a breakthrough hemolysis call pathway: any fatigue, dark urine, abdominal pain, or new dyspnea triggers same-day LDH, CBC, and on-call hematology contact. Begin tracking transfusion independence streaks (>8 weeks transfusion-free) and iron studies — many patients shift from iron overload to iron deficiency once intravascular hemolysis is controlled.",
  },
  {
    month: "Month 7–8",
    title: "Thrombosis Surveillance & Anticoagulation Optimization",
    description:
      "Re-screen for prior or new thrombotic events: lower-extremity symptoms, abdominal pain (Budd-Chiari, mesenteric vein), and neurologic symptoms (cerebral venous sinus thrombosis). For patients on warfarin, anchor INR checks every 2–4 weeks at target 2–3; for DOAC patients, audit renal function and adherence. Coordinate with high-risk OB for any pregnant or pregnancy-planning PNH patient, with postpartum thrombosis prophylaxis extending 6–12 weeks.",
  },
  {
    month: "Month 9–10",
    title: "Clone Size & Aplastic Anemia Overlap Surveillance",
    description:
      "Schedule repeat high-sensitivity FLAER flow cytometry to compare clone size against baseline and prior measurements — rising granulocyte clone may signal evolving aplastic anemia overlap, while declining clone in the AA-PNH patient may reflect IST response. Order CBC with differential and reticulocyte every 4–8 weeks for AA-PNH overlap patients, and coordinate with the aplastic anemia program if cytopenias deepen.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review, Booster Vaccinations & PNH Foundation Engagement",
    description:
      "Complete the annual review: LDH trend, transfusion history, thrombotic event log, infection events, and quality-of-life score. Renew the meningococcal MenACWY booster at 5 years, MenB per ACIP guidance, plus annual influenza and updated COVID-19 boosters. Connect patients with PNH Foundation educational resources, peer-mentor programs, and clinical trial registries. Document plan to continue Q2/Q8-week complement blockade and lifetime infection prophylaxis.",
  },
];

const kpis = [
  {
    metric: "LDH <1.5x ULN",
    target: "≥85% of visits",
    description:
      "Sustained intravascular hemolysis control on complement inhibitor therapy at every Q2-week eculizumab or Q8-week ravulizumab maintenance visit.",
  },
  {
    metric: "Meningococcal Vaccine Compliance",
    target: "100%",
    description:
      "FDA REMS-required MenACWY plus MenB completion documented at least 2 weeks before any complement inhibitor dose, with 5-year MenACWY boosters never missed.",
  },
  {
    metric: "Penicillin V Adherence",
    target: "≥95%",
    description:
      "Daily antibiotic prophylaxis adherence verified by pharmacy refill tracking and patient self-report at every infusion visit for the duration of complement blockade.",
  },
  {
    metric: "Transfusion Independence",
    target: "≥70% at 6 months",
    description:
      "Patients with eculizumab or ravulizumab achieving ≥8 consecutive weeks transfusion-free as a marker of effective hemolysis control and erythropoiesis recovery.",
  },
  {
    metric: "Breakthrough Hemolysis Triage",
    target: "Same-day evaluation 100%",
    description:
      "Every patient call for fatigue, dark urine, abdominal pain, or new dyspnea reaches an NP within one business day for same-day LDH, CBC, and hematologist escalation.",
  },
  {
    metric: "Thrombotic Event Rate",
    target: "<1 per 100 patient-years",
    description:
      "Annual incidence of new venous or arterial thrombotic events on complement inhibition, with anticoagulation INR or DOAC adherence audited every clinic visit.",
  },
];

const testimonial = {
  quote:
    "PNH is unforgiving — a missed meningococcal booster, a delayed Q8-week ravulizumab infusion, or an unanswered breakthrough hemolysis call can be catastrophic. Momenties pulled every Q2-week eculizumab dose, every penicillin V refill, every clone-size flow cytometry, and every INR check into one calendar I actually trust. My patients feel the difference, and so does our hematology team.",
  name: "Christine O., AGPCNP-BC",
  title: "Hematology NP, Complement Blood Disorder Program",
};

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="PNH Nurse Practitioners"
        title="PNH Nurse Practitioners — Scheduling for a Rare Complement-Driven Blood Disorder"
        subtitle="Designed for NPs coordinating PNH care — from eculizumab and ravulizumab infusion logistics and meningococcal vaccination to PNH clone monitoring, hemolysis trending, and thrombosis risk management."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem,3vw,2.2rem)",
              fontFamily: "Playfair Display, serif",
              marginBottom: 48,
              color: "#f0ece3",
            }}
          >
            The Four Pillars of PNH NP Scheduling
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 24,
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

      {/* Timeline */}
      <Reveal>
        <section style={{ background: "#0a0a0d", padding: "80px 24px" }}>
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
              Year One: A Twelve-Month PNH NP Calendar
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {timeline.map((row) => (
                <div
                  key={row.month}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr",
                    gap: 20,
                    background: "#131318",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 12,
                    padding: "20px 24px",
                    alignItems: "start",
                  }}
                >
                  <div
                    style={{
                      color: "#c5a35c",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {row.month}
                  </div>
                  <div>
                    <div
                      style={{
                        color: "#f0ece3",
                        fontWeight: 600,
                        fontSize: "0.98rem",
                        marginBottom: 6,
                      }}
                    >
                      {row.title}
                    </div>
                    <div
                      style={{
                        color: "rgba(240,236,227,0.65)",
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                      }}
                    >
                      {row.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
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
            PNH NP Quality Metrics That Matter
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
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
                <div
                  style={{
                    color: "#c5a35c",
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "0.78rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 10,
                  }}
                >
                  {k.metric}
                </div>
                <div
                  style={{
                    color: "#f0ece3",
                    fontSize: "1.4rem",
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 700,
                    marginBottom: 10,
                  }}
                >
                  {k.target}
                </div>
                <div
                  style={{
                    color: "rgba(240,236,227,0.65)",
                    fontSize: "0.88rem",
                    lineHeight: 1.6,
                  }}
                >
                  {k.description}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ padding: "40px 24px 0" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div
              style={{
                background: "#131318",
                border: "1px solid rgba(197,163,92,0.25)",
                borderRadius: 16,
                padding: "36px 40px",
              }}
            >
              <p
                style={{
                  color: "#f0ece3",
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.15rem",
                  lineHeight: 1.65,
                  fontStyle: "italic",
                  marginBottom: 22,
                }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div
                style={{
                  color: "#c5a35c",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                }}
              >
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
  );
}
