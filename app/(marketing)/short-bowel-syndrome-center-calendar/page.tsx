import type { Metadata } from "next"
import { Stethoscope, Workflow, Shield, UserCheck } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Short Bowel Syndrome Center Calendar | Momenties",
  description:
    "End-to-end scheduling for SBS centers — parenteral nutrition management, teduglutide therapy monitoring, intestinal rehabilitation programs, central line care, liver surveillance, and intestinal transplant evaluation.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Parenteral Nutrition Management & Weaning",
    description:
      "Coordinate weekly PN caloric, fluid, and electrolyte adjustments based on stoma output trends, urine output, and weight stability. Schedule weekly metabolic labs (CMP, magnesium, phosphorus, LFTs, fat-soluble vitamins A/D/E/K, B12, zinc, copper, selenium, manganese) with interpretation visits, structured PN-cycling trials, and quarterly DEXA scans. Track citrulline as an objective biomarker of intestinal absorptive mass and adaptation, sequence enteral autonomy milestones, and align home infusion pharmacy refills with central line dressing change visits.",
  },
  {
    icon: Workflow,
    title: "Teduglutide Therapy Coordination",
    description:
      "Sequence Q7-day subcutaneous teduglutide (GLP-2 analog) self-injection training, response assessments at 6 and 12 months (PN volume reduction ≥20%, days off PN per week, enteral autonomy rate), and structured surveillance for known class effects. Schedule baseline and biennial colonoscopy with polyp surveillance for the duration of therapy, abdominal imaging for fluid retention and pancreatic enzyme elevation review, and stoma output reassessments to capture trophic response in the residual bowel.",
  },
  {
    icon: Shield,
    title: "Central Line & Infection Surveillance",
    description:
      "Operationalize CLABSI prevention bundles across the home PN cohort — scheduled dressing change visits, ethanol or taurolidine lock instillation cadence, blood culture protocols for fevers, and rapid-access pathways for suspected line infections. Track catheter dwell time, exchange rationale, thrombosis screening, and home PN agency liaison touchpoints so every line is auditable and every febrile event has a defined response window.",
  },
  {
    icon: UserCheck,
    title: "Intestinal Transplant Evaluation",
    description:
      "Stage IFALD (intestinal failure-associated liver disease) surveillance with quarterly LFTs, fibrosis assessment, hepatology co-visits, and imaging — escalating to transplant listing criteria when PN dependence persists with progressive cholestasis, recurrent CLABSIs, loss of central venous access, or thrombotic complications. Coordinate intestinal lengthening (STEP, Bianchi) candidacy review and align multidisciplinary GI, surgery, hepatology, and transplant team conferences against listing timelines.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Baseline Workup & PN Stabilization",
    description:
      "Establish anatomic baseline (remaining small bowel length, ileocecal valve status, colon-in-continuity), document stoma output trends, and stabilize PN macronutrients, fluid, and electrolytes. Initiate weekly metabolic labs, baseline citrulline, baseline LFTs, fat-soluble vitamin panel, B12, zinc, magnesium, and bone densitometry. Confirm central line type, dwell, and home infusion pharmacy.",
  },
  {
    month: "Month 3–4",
    title: "Adaptation & Enteral Optimization",
    description:
      "Maximize enteral nutrition, antimotility agents, antisecretory therapy, and oral rehydration strategy. Audit stoma output against the 500 mL/day threshold for PN adjustment, repeat citrulline, and document trajectory of intestinal adaptation. Coordinate dietitian-led oral diet progression and review micronutrient repletion (vitamin D, B12, zinc, magnesium).",
  },
  {
    month: "Month 5–6",
    title: "Teduglutide Initiation & Training",
    description:
      "Confirm candidacy, complete baseline colonoscopy with polypectomy as indicated, and schedule self-injection teaching for Q7-day subcutaneous teduglutide. Sequence early follow-up visits to monitor abdominal pain, fluid retention, pancreatic enzyme elevation, and gallbladder findings. Reset weekly metabolic labs to capture early absorptive response.",
  },
  {
    month: "Month 7–8",
    title: "PN Weaning & CLABSI Prevention Audit",
    description:
      "Begin protocolized PN volume reduction in responders, audit CLABSI bundle adherence (dressing change cadence, lock therapy, blood culture protocols), and review home PN agency performance. Re-image and reassess IFALD markers. Confirm stoma output remains within targets as enteral autonomy advances.",
  },
  {
    month: "Month 9–10",
    title: "6-Month Teduglutide Response Assessment",
    description:
      "Formally assess teduglutide response — PN volume reduction, days off PN per week, weight, citrulline, micronutrient trajectory, and quality-of-life metrics. Continue scheduled colonoscopy/polyp surveillance cadence. Re-evaluate central venous access strategy and document any thrombotic or infectious events.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review & Transplant Readiness",
    description:
      "Complete annual IFALD staging, hepatology co-visit, DEXA, and full nutritional reassessment. For non-responders or patients with progressive IFALD, recurrent CLABSI, or loss of access, convene the multidisciplinary intestinal transplant evaluation conference and align with surgical lengthening (STEP/Bianchi) review where appropriate. Set the next 12-month surveillance plan.",
  },
]

const kpis = [
  {
    metric: "PN Volume Reduction",
    target: "≥20% by Month 6",
    description:
      "Threshold response to teduglutide measured by sustained reduction in weekly parenteral nutrition volume from baseline.",
  },
  {
    metric: "Enteral Autonomy Rate",
    target: "Track per cohort",
    description:
      "Percentage of patients achieving freedom from PN, with days-off-PN-per-week as the interim outcome on teduglutide therapy.",
  },
  {
    metric: "CLABSI Rate",
    target: "<1 / 1000 line days",
    description:
      "Central line-associated bloodstream infection rate across the home PN cohort, audited against bundle adherence.",
  },
  {
    metric: "Stoma Output",
    target: "<500 mL / day",
    description:
      "Operational threshold above which PN fluid and electrolyte formulas are reassessed and antisecretory therapy escalated.",
  },
  {
    metric: "Polyp Surveillance",
    target: "Colonoscopy q2 years",
    description:
      "Scheduled colonoscopy cadence for patients on teduglutide, with polypectomy and pathology review documented each cycle.",
  },
  {
    metric: "IFALD Surveillance",
    target: "Quarterly LFTs",
    description:
      "Quarterly liver function panels with hepatology co-visits and imaging as indicated to detect intestinal failure-associated liver disease early.",
  },
]

const testimonial = {
  quote:
    "Short bowel syndrome care lives in the spaces between weekly labs, monthly teduglutide responses, quarterly LFTs, and annual transplant evaluations. Momenties stitched every interval into one calendar — citrulline trends, polyp surveillance, dressing change visits, and CLABSI audits — so the whole multidisciplinary team finally moves in lockstep.",
  name: "Dr. D. Kelly",
  title: "Intestinal Rehabilitation Program Director",
}

export default function ShortBowelSyndromeCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Short Bowel Syndrome Center Calendar"
        title="Short Bowel Syndrome Center — Parenteral Nutrition & Intestinal Rehab Calendar"
        subtitle="End-to-end scheduling for SBS centers — parenteral nutrition management, teduglutide therapy monitoring, intestinal rehabilitation programs, central line care, liver surveillance, and intestinal transplant evaluation."
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
            Built for the Full Intestinal Rehabilitation Lifecycle
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
              The 12-Month Intestinal Rehab Roadmap
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              From PN stabilization to teduglutide response and transplant readiness — sequenced month by month.
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
              The 6 KPIs That Define SBS Center Excellence
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
                    padding: "28px 24px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "rgba(240,236,227,0.65)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 10,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(1.2rem,2.2vw,1.6rem)",
                      fontWeight: 700,
                      color: "#c5a35c",
                      fontFamily: "Playfair Display, serif",
                      marginBottom: 12,
                      lineHeight: 1.2,
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
          <blockquote
            style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}
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
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
