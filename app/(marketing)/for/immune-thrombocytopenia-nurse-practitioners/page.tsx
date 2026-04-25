import type { Metadata } from "next"
import { Bell, ClipboardList, Heart, Stethoscope } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "ITP Nurse Practitioners | Momenties",
  description:
    "Purpose-built for NPs coordinating ITP care — from acute IVIG coordination and corticosteroid taper management to TPO-RA adherence monitoring, rituximab scheduling, and chronic platelet surveillance.",
}

const pillars = [
  {
    icon: Bell,
    title: "Acute Episode & IVIG Coordination",
    description:
      "Coordinate emergent IVIG infusions (1 g/kg x 1-2 days) for acute ITP with platelets <30,000/microliter or active bleeding. Schedule infusion suite chair time with infusion rate titration protocols (start 0.5 mg/kg/min, advance to 4 mg/kg/min as tolerated) and structured reaction monitoring vital sign cadence (q15 min x 4, then q30 min). Pre-medicate with acetaminophen and diphenhydramine for headache and chills. Coordinate methylprednisolone bridge and arrange same-day platelet count for 24- and 72-hour response check. Maintain hospital admission triggers for wet purpura, intracranial bleed signs, or platelets <10,000 with bleeding. Run dexamethasone pulse cycle coordination (40 mg PO x 4 days every 14-28 days x 4 cycles) with glucose, blood pressure, and mood-symptom check-ins between pulses.",
  },
  {
    icon: ClipboardList,
    title: "TPO-RA Adherence & Lab Monitoring",
    description:
      "For eltrombopag (Promacta) patients, manage weekly CBC during dose titration then biweekly once stable, and schedule monthly LFTs given hepatotoxicity risk with structured ALT/AST/bilirubin trend review and dose-hold criteria. Educate patients on the strict 4-hour dietary separation from dairy products, calcium-fortified foods, antacids, and polyvalent cation supplements (iron, calcium, magnesium, zinc, selenium, aluminum) to preserve oral absorption. For romiplostim (Nplate) patients, coordinate weekly subcutaneous injection visits and run progressive injection technique training so caregivers can transition to home administration when appropriate. Track avatrombopag dietary timing-with-food requirements separately. Reconcile dose changes against rolling 7-day platelet trends and document refractory criteria for second-line escalation.",
  },
  {
    icon: Heart,
    title: "Second-Line Therapy Coordination",
    description:
      "Coordinate rituximab 375 mg/m^2 IV weekly x 4 doses with hepatitis B reactivation screening (HBsAg, anti-HBc) and pre-medication protocols, plus 6-month and 12-month response durability checks. Schedule fostamatinib (Tavalisse) initiation visits with monthly liver function and blood pressure monitoring. Run platelet count communication and dose adjustment calls so providers receive same-day trended data and can authorize TPO-RA up-titrations or down-titrations between visits. Manage splenectomy pre-operative vaccine checklist (pneumococcal PCV13/PPSV23, meningococcal ACWY and B, Haemophilus influenzae type b) with structured 14-day pre-op timing, post-splenectomy fever education, and lifelong infection-precaution counseling. Track caplacizumab and emerging BTK inhibitor trial referrals when indicated.",
  },
  {
    icon: Stethoscope,
    title: "Bleeding Risk Assessment & Education",
    description:
      "Run a structured bleeding score (WHO bleeding scale and ITP-BAT) at every visit with documented mucocutaneous, gastrointestinal, genitourinary, and central nervous system findings. Provide activity restriction counseling calibrated by platelet level (contact sports avoidance under 50,000; helmet, fall-prevention and NSAID/aspirin avoidance under 30,000; bed rest and admission consideration under 10,000 with bleeding). Coordinate dental, surgical, and obstetric peri-procedural platelet targets and bridging plans. Teach safe-medication review to remove aspirin, NSAIDs, and non-essential antiplatelets. Connect patients to platelet disorder support groups including the Platelet Disorder Support Association (PDSA) for peer mentorship, advocacy, and clinical trial awareness.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnosis Confirmation & Acute Stabilization",
    description:
      "Complete ITP intake with bleeding history, medication review for drug-induced thrombocytopenia, and exclusion workup (peripheral smear, HIV/HCV/H. pylori screening, ANA, immunoglobulins, direct antiglobulin test). Coordinate emergent IVIG infusion logistics for severe thrombocytopenia or bleeding and start corticosteroid first-line therapy. Begin patient education on ITP pathophysiology, bleeding precautions, and what to expect during steroid pulse cycles. Connect family to PDSA peer mentorship and document baseline ITP-BAT bleeding score.",
  },
  {
    month: "Month 3–4",
    title: "Steroid Taper & TPO-RA Decision Point",
    description:
      "Run weekly to biweekly platelet counts during dexamethasone pulse cycles or prednisone taper. Coordinate TPO-RA initiation for steroid-refractory or steroid-dependent patients, with eltrombopag dosing education emphasizing the 4-hour dairy and polyvalent cation separation rule. Schedule first-month weekly CBC and baseline LFT panel. For romiplostim candidates, begin weekly injection visits and start subcutaneous self-injection training. Reinforce activity restriction counseling and run structured bleeding score at each visit.",
  },
  {
    month: "Month 5–6",
    title: "Response Tracking & Persistent ITP Reclassification",
    description:
      "Trend platelet counts toward target greater than 30,000/microliter without bleeding (or greater than 50,000 for procedurally active patients). Document persistent ITP reclassification at the 3-month mark per IWG criteria. Run monthly LFTs for eltrombopag with structured ALT/AST/bilirubin review. Coordinate tapering of TPO-RA dose for sustained responders or escalation pathways for refractory patients. Repeat patient education on missed-dose protocols, dental procedure platelet targets, and travel readiness with infusion site mapping.",
  },
  {
    month: "Month 7–8",
    title: "Mid-Year Second-Line Pathway Review",
    description:
      "Coordinate rituximab x 4 weekly induction for refractory ITP with hepatitis B reactivation screening and pre-medication protocols. Schedule fostamatinib initiation with monthly LFT and blood pressure monitoring for select patients. Run pre-splenectomy vaccine checklist (PCV13/PPSV23, MenACWY/MenB, Hib) at least 14 days pre-op with structured documentation, and book surgical consultation for chronic refractory ITP candidates. Update bleeding score and review activity restriction counseling tier based on current platelet level.",
  },
  {
    month: "Month 9–10",
    title: "Chronic ITP Surveillance & Quality of Life",
    description:
      "Reclassify chronic ITP at the 12-month mark and run a structured quality-of-life assessment (ITP-PAQ). Coordinate dental cleanings, vaccinations, and elective procedures with peri-procedural platelet targets and bridging plans. Reinforce safe-medication review for NSAIDs, aspirin, and supplements. Run quarterly H. pylori re-testing for endemic-region patients and review pregnancy planning, contraception, and obstetric coordination for women of reproductive age. Document caregiver injection technique audit for home romiplostim families.",
  },
  {
    month: "Month 11–12",
    title: "Annual Reassessment & Care Plan Renewal",
    description:
      "Run annual comprehensive reassessment — bleeding score, ITP-PAQ quality of life, TPO-RA dose optimization, LFT trend review, and adherence audit. Renew TPO-RA prior authorizations and confirm specialty pharmacy continuity. Submit PDSA registry updates if applicable and refresh splenectomy vaccine titers per Infectious Diseases Society of America (IDSA) post-splenectomy guidance for splenectomized patients. Sit down with patient to update next-year care plan, education priorities, emergency action plan, and self-management goals.",
  },
]

const kpis = [
  {
    metric: "Weekly",
    target: "CBC During TPO-RA Titration",
    description: "Eltrombopag and romiplostim weekly platelet trending during dose titration phase",
  },
  {
    metric: "Monthly",
    target: "Eltrombopag LFTs",
    description: "ALT/AST/bilirubin monitoring with structured hepatotoxicity hold criteria",
  },
  {
    metric: "100%",
    target: "Pre-Splenectomy Vaccines",
    description: "PCV13/PPSV23, MenACWY/MenB, and Hib at least 14 days pre-op compliance",
  },
  {
    metric: "Every Visit",
    target: "ITP-BAT Bleeding Score",
    description: "Structured WHO and ITP-BAT bleeding assessment documented at each encounter",
  },
  {
    metric: ">=90%",
    target: "Romiplostim Self-Injection",
    description: "Caregivers and patients transitioned to home subcutaneous administration",
  },
  {
    metric: "100%",
    target: "PDSA Connection",
    description: "Patients connected to Platelet Disorder Support Association resources",
  },
]

const testimonial = {
  quote:
    "ITP patients live with a moving target — platelet counts shift week to week, IVIG and steroid pulses overlap with TPO-RA titrations, and one missed eltrombopag-dairy separation can torpedo a whole month of work. Momenties keeps every weekly CBC, dexamethasone pulse cycle, romiplostim injection, rituximab dose, splenectomy vaccine, and bleeding score on a single timeline. I stopped chasing labs and reschedules and started actually teaching my patients about safe living with ITP. Our breakthrough bleeding rates dropped, and our hematologists finally trust that lab data is on their desk before clinic.",
  name: "Amanda R., AGPCNP-BC",
  title: "Hematology NP, Platelet Disorder Program",
}

export default function ImmuneThrombocytopeniaNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="ITP Nurse Practitioners"
        title="ITP Nurse Practitioners — Scheduling for Immune Thrombocytopenia Management"
        subtitle="Purpose-built for NPs coordinating ITP care — from acute IVIG coordination and corticosteroid taper management to TPO-RA adherence monitoring, rituximab scheduling, and chronic platelet surveillance."
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
            Built Around the ITP NP Workflow
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
              The ITP NP Year — Month by Month
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Every IVIG infusion, dexamethasone pulse, TPO-RA titration, rituximab dose, splenectomy vaccine, and bleeding score touchpoint — sequenced across 12 months.
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
              The 6 KPIs That Define ITP NP Excellence
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
