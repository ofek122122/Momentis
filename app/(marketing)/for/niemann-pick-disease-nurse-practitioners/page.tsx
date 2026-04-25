import type { Metadata } from "next";
import {
  Stethoscope,
  Bell,
  ClipboardList,
  Users2,
} from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/marketing/Reveal";
import { CTA } from "@/components/marketing/CTA";

export const metadata: Metadata = {
  title:
    "Niemann-Pick Disease NPs — Scheduling for Rare Lipid Storage Disorders | Momenties",
  description:
    "Purpose-built scheduling for nurse practitioners managing Niemann-Pick disease patients — miglustat GI side effect coordination, olipudase alfa infusion logistics, NPC neurological symptom tracking, dysphagia and ataxia therapy referrals, palliative care integration, and family advocacy support.",
};

const pillars = [
  {
    icon: Stethoscope,
    title: "Miglustat Coordination & Side Effect Management",
    description:
      "Own the day-to-day miglustat workflow — dose titration check-ins, structured GI side effect tracking (diarrhea, flatulence, weight loss), low-carbohydrate diet counseling, lactase supplementation timing, dose-with-meals education, weight and growth monitoring for pediatric NPC, adherence calls, and refill timing with specialty pharmacy. Every tolerance call, dietitian visit, and dose adjustment lives on one shared NP timeline so nothing is lost between visits.",
  },
  {
    icon: Bell,
    title: "ASMD Infusion & Enzyme Monitoring",
    description:
      "Run the olipudase alfa infusion lane — Q2-week scheduling, pre-medication orders (antihistamines, antipyretics, corticosteroids per protocol), vital sign and acute phase reaction observation windows, sphingomyelin and lyso-sphingomyelin biomarker draws, lipid panel and platelet trending, abdominal MRI volumetrics for liver and spleen, DLCO and 6-minute walk test coordination, and clear documentation of any held doses, infusion reactions, or escalation events for the multidisciplinary team.",
  },
  {
    icon: ClipboardList,
    title: "Neurological Symptom Tracking",
    description:
      "Build a structured NPC neuro lane — VSGP saccade observations, gelastic cataplexy episode logs, ataxia and dysarthria changes, swallowing safety screens between formal VFSS studies, seizure tracking, and behavioral or psychiatric changes in adult-onset NPC. Coordinate speech therapy for dysphagia, occupational therapy for cognitive decline and ADLs, and physiotherapy for cerebellar ataxia, with standing recurring slots so families do not chase referrals every few weeks.",
  },
  {
    icon: Users2,
    title: "Patient & Family Support",
    description:
      "Anchor the family experience — disease trajectory and prognosis education for NPC families, sibling testing and genetic counseling referrals, school and IEP letter cycles, advance care planning conversations for advanced NPC, palliative care integration, hospice transition planning when appropriate, and warm hand-offs to NPC and ASMD advocacy organizations (NNPDF, ISMRD, INPDA) and the International Niemann-Pick Disease Registry. Every touchpoint with the family is on one calendar with one NP.",
  },
];

const timeline = [
  {
    month: "Month 1–2",
    title: "Intake, Education & Therapy Onboarding",
    description:
      "Conduct the new-patient NP intake — review diagnostic confirmation (oxysterols, acid sphingomyelinase activity, NPC1/NPC2 or SMPD1 genetics), confirm NPC vs. ASMD subtype, document baseline symptoms, and lead the family education visit on disease trajectory. Initiate prior authorization for miglustat or olipudase alfa, coordinate specialty pharmacy and infusion center setup, and schedule structured GI counseling and low-carbohydrate diet teaching for NPC patients starting miglustat.",
  },
  {
    month: "Month 3–4",
    title: "Side Effect & Infusion Tolerance Window",
    description:
      "Run weekly-to-biweekly tolerance check-ins during miglustat titration — diarrhea frequency, weight, dietary adherence, lactase supplementation, dose-with-meals technique. For ASMD patients in olipudase alfa dose-escalation, attend infusions to track acute phase reactions, vital trends, and pre-medication response. Open early referrals to dietitian, GI, and behavioral health where needed and document all side effect events in a single timeline that the metabolic team can review.",
  },
  {
    month: "Month 5–6",
    title: "Therapy Referrals & Symptom Management",
    description:
      "Lock in standing speech therapy for dysphagia, OT for cognitive decline and ADL support, and PT for cerebellar ataxia and gait. Coordinate the first VFSS for NPC patients with swallowing concerns, update aspiration precautions and feeding plans, and schedule audiology and ophthalmology if indicated. For ASMD families, prep for the first liver/spleen volumetric MRI and pulmonary function repeat, and reinforce home fatigue and infusion-day planning education.",
  },
  {
    month: "Month 7–8",
    title: "Mid-Year Family Conference & Care Plan Update",
    description:
      "Lead the mid-year family conference — review symptom trajectory, miglustat or olipudase alfa adherence, side effect burden, therapy progress, school accommodations, and any new neurological or pulmonary changes. Update the family-facing care plan, refresh emergency action plans, confirm vaccination status (including pneumococcal and influenza for ASMD type B), and re-screen psychosocial needs for caregivers and siblings.",
  },
  {
    month: "Month 9–10",
    title: "Palliative Integration & Advocacy Connection",
    description:
      "For advanced NPC patients, coordinate palliative care consultation, advance care planning conversations, and symptom-focused goals (pain, secretions, dystonia, seizures, dysphagia). Connect families to NPC and ASMD advocacy organizations (NNPDF, ISMRD, INPDA), peer support groups, and clinical trial navigators. For pediatric patients approaching adolescence, begin pediatric-to-adult transition planning with the metabolic adult clinic.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review, Registry & Reauthorization",
    description:
      "Prepare materials for the annual multidisciplinary care conference — adherence summary, side effect log, hospitalization and infusion event log, therapy notes, and family-reported outcomes. Submit annual data to the International Niemann-Pick Disease Registry. Lead therapy reauthorization paperwork for miglustat or olipudase alfa, refresh the next 12-month NP visit and infusion calendar, and re-screen for clinical trial eligibility for both NPC and ASMD patients.",
  },
];

const kpis = [
  {
    metric: "Miglustat Adherence",
    target: ">=90% MPR",
    description:
      "Medication possession ratio for NPC patients on miglustat, tracked through specialty pharmacy refills and structured NP adherence calls with documented GI side effect mitigation.",
  },
  {
    metric: "Olipudase Alfa On-Time Rate",
    target: ">=95% Q2-week",
    description:
      "On-time olipudase alfa infusion rate across dose-escalation and maintenance phases for ASMD type B and A/B patients, with documented reasons for any delays.",
  },
  {
    metric: "Therapy Referral Lead Time",
    target: "<=14 days",
    description:
      "Time from NP-identified need to first scheduled visit with speech, OT, or PT for NPC patients, with standing recurring slots once therapy is established.",
  },
  {
    metric: "VFSS Coverage",
    target: "100% of dysphagia-flagged",
    description:
      "Percentage of NPC patients with NP-flagged swallowing concerns who receive a videofluoroscopic swallow study within the planned interval, with updated aspiration precautions.",
  },
  {
    metric: "Palliative Integration",
    target: "100% advanced NPC",
    description:
      "Documented palliative care consultation and advance care planning conversation for every advanced NPC patient, with goals-of-care notes shared across the team.",
  },
  {
    metric: "Advocacy Connection Rate",
    target: "100% of new families",
    description:
      "Every new NPC and ASMD family receives a documented warm hand-off to NNPDF, ISMRD, or INPDA and is offered enrollment in the International Niemann-Pick Disease Registry.",
  },
];

const testimonial = {
  quote:
    "NPs are the backbone of Niemann-Pick care. We sit with families through miglustat GI side effects, time olipudase alfa infusions, watch for VSGP and gelastic cataplexy, push speech and OT and PT referrals, and walk families into palliative care when the time comes. Momenties finally gives us a calendar that respects how we actually work — every tolerance call, every infusion, every VFSS, every advocacy hand-off in one place. I do not lose patients in the gaps anymore.",
  name: "Marie L., CPNP-PC",
  title: "Metabolic NP, Lysosomal Storage Disorder Clinic",
};

export default function NiemannPickDiseaseNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Niemann-Pick Disease Nurse Practitioners"
        title="Niemann-Pick Disease NPs — Scheduling for Rare Lipid Storage Disorders"
        subtitle="Purpose-built for NPs managing Niemann-Pick disease patients — from miglustat GI side effect management and NPC neurological monitoring to ASMD infusion coordination and family support services."
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
            Built for the Niemann-Pick NP Workflow
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
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "#131318",
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
                marginBottom: 12,
                color: "#f0ece3",
              }}
            >
              The 12-Month Niemann-Pick NP Calendar
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Onboarding, side effect coordination, infusion logistics, therapy referrals, palliative integration, and registry submission — sequenced across one year.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map((item) => (
                <div
                  key={item.month}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr",
                    gap: 24,
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "#131318",
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
              The 6 KPIs That Define Niemann-Pick NP Excellence
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
                    border: "1px solid rgba(197,163,92,0.2)",
                    background: "#0a0a0d",
                    borderRadius: 14,
                    padding: "28px 22px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "#c5a35c",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 8,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(1.2rem,2vw,1.5rem)",
                      fontWeight: 700,
                      color: "#f0ece3",
                      fontFamily: "Playfair Display, serif",
                      marginBottom: 10,
                      lineHeight: 1.2,
                    }}
                  >
                    {kpi.target}
                  </div>
                  <div
                    style={{
                      fontSize: "0.86rem",
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
            <blockquote
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                background: "#131318",
                borderRadius: 16,
                padding: "40px 36px",
                margin: 0,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  color: "#c5a35c",
                  marginBottom: 12,
                  lineHeight: 1,
                }}
              >
                &ldquo;
              </div>
              <p
                style={{
                  fontSize: "clamp(1rem,2vw,1.18rem)",
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
