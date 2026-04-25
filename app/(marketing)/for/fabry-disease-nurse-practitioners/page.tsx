import type { Metadata } from "next";
import { Workflow, Heart, TrendingUp, Users2 } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/marketing/Reveal";
import { CTA } from "@/components/marketing/CTA";

export const metadata: Metadata = {
  title:
    "Fabry Disease NPs — Scheduling for a Complex X-Linked Lysosomal Storage Disorder | Momenties",
  description:
    "Purpose-built for NPs coordinating Fabry disease care — biweekly ERT infusions, infusion-reaction management, cardiac and renal surveillance, stroke prevention, pain and heat-intolerance counseling, and family cascade screening.",
};

const pillars = [
  {
    icon: Workflow,
    title: "ERT Coordination & Reaction Management",
    description:
      "Biweekly agalsidase alfa (0.2 mg/kg) and agalsidase beta (1.0 mg/kg) infusion scheduling with patient-specific pre-medication protocols (acetaminophen, diphenhydramine, methylprednisolone for reaction-prone patients); infusion-rate titration documentation; tryptase and anti-drug antibody (ADA) trend tracking; home-infusion eligibility transition at 6 months stable; rescue protocols for infusion-related reactions including IM epinephrine standing orders; and missed-dose recovery scheduling to avoid plasma enzyme troughs.",
  },
  {
    icon: Heart,
    title: "Cardiac Monitoring & Arrhythmia Surveillance",
    description:
      "Annual echocardiogram with global longitudinal strain for Fabry cardiomyopathy and progressive LVH; annual 24-hour Holter for short PR interval, AV block, and atrial arrhythmia; coordination of implantable loop recorder placement for unexplained syncope or cryptogenic stroke; cardiac MRI Q2-3 years with native T1 mapping; collaborative beta-blocker, ACEi/ARB, and antiarrhythmic titration with cardiology; and pacemaker/ICD evaluation pathway for advanced conduction disease.",
  },
  {
    icon: TrendingUp,
    title: "Renal Function & Proteinuria Tracking",
    description:
      "eGFR (CKD-EPI) and urine albumin-to-creatinine ratio Q3-6 months with clear escalation thresholds; ACEi/ARB titration scheduling for proteinuria >150 mg/day with potassium and creatinine safety labs at 1-2 weeks post-titration; renal ultrasound annually for parapelvic cysts; nephrology co-management for eGFR slope >3 mL/min/year; renal biopsy coordination for atypical presentations; and renal transplant evaluation referral at eGFR <30 mL/min/1.73m² with post-transplant ERT continuation planning.",
  },
  {
    icon: Users2,
    title: "Family Screening & Genetic Counseling",
    description:
      "Cascade GLA testing scheduling for first-degree relatives (mothers, sisters, daughters, sons of carriers); structured female heterozygote evaluation with X-inactivation considerations and individualized treatment-decision documentation; pediatric-to-adult transition milestones; reproductive counseling coordination (PGD, prenatal testing) for affected couples; newborn screening follow-up for state-program-positive infants; and patient/family enrollment in Fabry Registry and Fabry Outcome Survey for long-term natural history tracking.",
  },
];

const timeline = [
  {
    month: "Month 1–2",
    title: "Intake, Pre-Medication Plan & Infusion Onboarding",
    description:
      "Complete diagnostic intake with α-galactosidase A activity (males), GLA mutation report, baseline lyso-Gb3, and prior infusion history. Build patient-specific pre-medication plan (acetaminophen, diphenhydramine, methylprednisolone if reaction history). Schedule first three biweekly agalsidase infusions in monitored unit. Document venous access plan (port vs. peripheral). Initiate patient education on infusion expectations and reaction warning signs.",
  },
  {
    month: "Month 3–4",
    title: "Reaction Management & Home-Infusion Readiness",
    description:
      "Audit infusion-reaction logs and titrate pre-medication accordingly. Document successful infusion-rate escalation. Confirm anti-drug antibody (ADA) baseline. Assess home-infusion candidacy (no significant reactions × 6 stable infusions, caregiver support, home suitability). Coordinate home-infusion vendor referral and nursing handoff. Begin pain inventory (Brief Pain Inventory) and document carbamazepine or gabapentin trial if indicated.",
  },
  {
    month: "Month 5–6",
    title: "Cardiac & Renal Baseline Surveillance",
    description:
      "Complete first 6-month lyso-Gb3 to confirm biochemical response. Coordinate baseline echocardiogram with strain, ECG, and 24-hour Holter. Document eGFR slope and urine ACR. Initiate or titrate ACEi/ARB if proteinuria >150 mg/day with safety lab follow-up at 1-2 weeks. Counsel on heat intolerance and anhidrosis ahead of summer; review sweating, exercise tolerance, and hydration plan.",
  },
  {
    month: "Month 7–8",
    title: "Stroke Prevention & Antiplatelet Decision",
    description:
      "Coordinate brain MRI for white-matter lesion burden and silent infarcts. Review need for antiplatelet (aspirin) or anticoagulation in patients with prior TIA, atrial fibrillation, or significant white-matter disease. Document shared decision-making with patient. Assess implantable loop recorder need for cryptogenic events. Reinforce stroke warning-sign education and emergency-action plan.",
  },
  {
    month: "Month 9–10",
    title: "Family Cascade Screening & Carrier Coordination",
    description:
      "Drive family-screening completion: identify untested first-degree relatives, schedule genetic counseling visits, and coordinate GLA testing. For known female heterozygotes, complete or update lyso-Gb3, echocardiogram, eGFR, and treatment-decision documentation. Coordinate any newborn screening follow-up. Discuss reproductive options with affected adults.",
  },
  {
    month: "Month 11–12",
    title: "Annual Comprehensive NP Review & Care Plan Update",
    description:
      "Complete annual NP visit with full systems review (cardiac, renal, neurologic, pain, GI, audiology, ophthalmology with cornea verticillata documentation). Confirm 95%+ ERT adherence. Update care plan, prior authorizations, and home-infusion orders for the next year. Submit Fabry Registry / FOS data. Hold multidisciplinary case conference and document next-year surveillance schedule and family-screening progress.",
  },
];

const kpis = [
  {
    metric: "≥95%",
    target: "Biweekly Infusion Adherence",
    description:
      "Percentage of scheduled agalsidase infusions completed on time per patient panel — the strongest predictor of long-term cardiac and renal stability.",
  },
  {
    metric: "<5%",
    target: "Severe Infusion Reactions",
    description:
      "Rate of grade ≥3 infusion-related reactions across the panel, tracked alongside pre-medication protocols and rate-titration documentation.",
  },
  {
    metric: "Q3–6 mo",
    target: "eGFR + Proteinuria Cadence",
    description:
      "Renal labs every 3–6 months with documented ACEi/ARB titration and safety follow-up for proteinuria >150 mg/day.",
  },
  {
    metric: "Annual",
    target: "Echo + Holter Completion",
    description:
      "Yearly cardiac surveillance for LVH, strain abnormality, and conduction disease with cardiology co-management.",
  },
  {
    metric: "100%",
    target: "Cascade Screening Offered",
    description:
      "All identified first-degree relatives offered genetic counseling and GLA testing within 6 months of proband diagnosis.",
  },
  {
    metric: "Q6 mo",
    target: "Lyso-Gb3 + ADA Trend",
    description:
      "Biochemical response and anti-drug antibody surveillance every 6 months to detect waning efficacy and guide therapy switches.",
  },
];

const testimonial = {
  quote:
    "Fabry NP work is layered: a single clinic afternoon can include a biweekly agalsidase infusion with a patient-specific pre-medication protocol, an ACEi titration call for new proteinuria, a Holter result review for AV block, a stroke-prevention conversation about antiplatelet therapy, and a sister of a proband asking about cascade testing. Momenties keeps every one of those threads visible — infusion cadence, reaction logs, lab cadences, and family-screening status — so nothing slips between visits.",
  name: "Patricia O., AGPCNP-BC",
  title: "Lysosomal Storage Disorder NP, Metabolic Center",
};

export default function FabryDiseaseNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Fabry Disease Nurse Practitioners"
        title="Fabry Disease NPs — Scheduling for a Complex X-Linked Lysosomal Storage Disorder"
        subtitle="Purpose-built for NPs coordinating Fabry disease care — from biweekly ERT infusions and infusion-reaction management to cardiac monitoring, stroke prevention, and family cascade screening."
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
            Four Pillars of Fabry NP Practice
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
              The Fabry NP 12-Month Cadence
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              From intake and infusion onboarding through annual comprehensive NP review — every infusion, surveillance lab, stroke-prevention decision, and family-screening conversation in sequence.
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
              Six KPIs for Fabry NP Panel Excellence
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
                    background: "#0a0a0d",
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
                      marginBottom: 8,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <div
                    style={{
                      fontSize: "0.92rem",
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
        <section style={{ padding: "20px 24px 0" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <blockquote
              style={{
                background: "#131318",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "40px 36px",
                margin: 0,
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
                  marginBottom: 24,
                }}
              >
                {testimonial.quote}
              </p>
              <div
                style={{
                  fontWeight: 700,
                  color: "#c5a35c",
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
            </blockquote>
          </div>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  );
}
