import type { Metadata } from "next"
import { ClipboardList, Stethoscope, Shield, UserCheck } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "SBS Nurse Practitioners — Scheduling for Complex Intestinal Failure Management | Momenties",
  description:
    "Purpose-built for NPs coordinating short bowel syndrome care — from PN adjustments and teduglutide response tracking to central line care education, metabolic monitoring, and transplant referral coordination.",
}

const pillars = [
  {
    icon: ClipboardList,
    title: "PN Management & Lab Monitoring",
    description:
      "Drive weekly metabolic labs interpretation (CMP, magnesium, phosphorus, LFTs, fat-soluble vitamins A/D/E/K, B12, zinc, copper, selenium, manganese) and translate trends into PN formula adjustments — caloric, fluid, and electrolyte composition. Track citrulline as an objective intestinal adaptation biomarker, schedule structured PN-cycling trials, and document vitamin D, B12, zinc, and magnesium repletion against home infusion pharmacy refill cadence.",
  },
  {
    icon: Stethoscope,
    title: "Teduglutide Injection Training & Monitoring",
    description:
      "Own teduglutide self-injection technique teaching, site rotation education, and adherence checks for the Q7-day subcutaneous schedule. Sequence early symptom surveillance for abdominal pain, fluid retention, pancreatic enzyme elevation, and gallbladder findings, schedule polyp surveillance colonoscopy every 2 years on therapy, and coordinate 6- and 12-month response checkpoints (PN volume reduction, days off PN per week, enteral autonomy).",
  },
  {
    icon: Shield,
    title: "Central Line & CLABSI Prevention",
    description:
      "Standardize central line dressing change protocols, ethanol/taurolidine lock cadence, and patient/family infection education across the home PN cohort. Audit CLABSI bundle adherence, run blood culture protocols for fevers, and serve as the home PN agency liaison so dwell times, exchanges, and thrombosis screenings are documented and every febrile event has a defined response window.",
  },
  {
    icon: UserCheck,
    title: "Enteral Autonomy & Transplant Planning",
    description:
      "Monitor stoma output against the 500 mL/day threshold for PN adjustment, advance enteral diet progression with the dietitian, and document PN-weaning milestones. Coordinate the GI, hepatology, surgery, and transplant team — staging IFALD, surfacing transplant referral triggers (loss of access, recurrent CLABSI, progressive cholestasis), and aligning intestinal lengthening (STEP/Bianchi) review with multidisciplinary conferences.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Intake, Baseline Labs & Home PN Setup",
    description:
      "Complete the SBS NP intake — anatomic baseline, stoma output diary, central line type and dwell, home PN agency, and current micronutrient status. Establish weekly metabolic lab cadence, baseline citrulline, baseline LFTs, fat-soluble vitamin panel, B12, zinc, magnesium, and DEXA. Initiate central line dressing change schedule and CLABSI education for patient and family.",
  },
  {
    month: "Month 3–4",
    title: "Adaptation, Repletion & Output Control",
    description:
      "Translate weekly labs into PN formula adjustments and micronutrient repletion (vitamin D/B12/zinc/magnesium). Reinforce antimotility and antisecretory therapy, monitor stoma output against the 500 mL/day threshold, and coordinate dietitian-led oral diet advancement. Audit dressing change adherence and review home PN agency performance.",
  },
  {
    month: "Month 5–6",
    title: "Teduglutide Initiation & Self-Injection Teaching",
    description:
      "Confirm candidacy, complete baseline colonoscopy with polypectomy as needed, and lead Q7-day subcutaneous teduglutide self-injection training with site rotation and adherence planning. Schedule early symptom surveillance visits for abdominal pain, fluid retention, pancreatic enzymes, and gallbladder findings.",
  },
  {
    month: "Month 7–8",
    title: "PN Weaning Protocol & Bundle Audit",
    description:
      "Lead protocolized PN volume reduction in responders, document days off PN per week, and audit CLABSI bundle adherence — dressing change cadence, lock therapy, blood culture pathways. Reassess micronutrient panel, stoma output trend, and coordinate hepatology co-visit if LFTs trend upward.",
  },
  {
    month: "Month 9–10",
    title: "6-Month Response & Polyp Surveillance Sync",
    description:
      "Complete 6-month teduglutide response assessment — PN volume reduction, days off PN, weight, citrulline, micronutrient trajectory. Sync the every-2-year colonoscopy/polyp surveillance cadence and document findings. Re-evaluate central venous access strategy and capture any thrombotic or infectious events.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review & Transplant Referral Coordination",
    description:
      "Complete annual IFALD staging with hepatology, full nutritional reassessment, and DEXA. For non-responders, recurrent CLABSI, loss of access, or progressive cholestasis, coordinate transplant referral and align intestinal lengthening (STEP/Bianchi) candidacy review with the multidisciplinary conference. Set the next 12-month NP-led surveillance plan.",
  },
]

const kpis = [
  {
    metric: "Weekly Metabolic Labs",
    target: "100% on time",
    description:
      "NP-driven cadence for CMP, magnesium, phosphorus, LFTs, fat-soluble vitamins, B12, zinc, copper, selenium, and manganese with documented PN adjustments.",
  },
  {
    metric: "Teduglutide Adherence",
    target: "≥90% Q7-day doses",
    description:
      "Self-injection adherence captured through follow-up visits, with site rotation and missed-dose recovery documented at every encounter.",
  },
  {
    metric: "Polyp Surveillance",
    target: "Colonoscopy q2 years",
    description:
      "Every patient on teduglutide has a scheduled colonoscopy every 2 years, with polypectomy and pathology results filed in the NP visit note.",
  },
  {
    metric: "Stoma Output",
    target: "<500 mL / day",
    description:
      "Operational threshold above which the NP triggers PN fluid/electrolyte reassessment and antisecretory therapy escalation.",
  },
  {
    metric: "CLABSI Bundle",
    target: "100% adherence",
    description:
      "NP-led audit of dressing change cadence, lock therapy, blood culture pathways, and home PN agency liaison touchpoints across the cohort.",
  },
  {
    metric: "Transplant Referrals",
    target: "Tracked & timely",
    description:
      "Documented triggers (loss of access, recurrent CLABSI, progressive IFALD) routed to the multidisciplinary intestinal transplant evaluation conference.",
  },
]

const testimonial = {
  quote:
    "As the NP coordinating intestinal failure care, I'm the one closing the loop on weekly labs, teduglutide injections, dressing changes, polyp surveillance, and transplant referrals. Momenties gave me one calendar that holds the whole patient — citrulline trends, stoma output thresholds, CLABSI audits, and hepatology co-visits — so nothing falls through the cracks between cycles.",
  name: "Maria C., AGACNP-BC",
  title: "Intestinal Failure NP, Comprehensive GI Center",
}

export default function ShortBowelSyndromeNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Short Bowel Syndrome Nurse Practitioners"
        title="SBS Nurse Practitioners — Scheduling for Complex Intestinal Failure Management"
        subtitle="Purpose-built for NPs coordinating short bowel syndrome care — from PN adjustments and teduglutide response tracking to central line care education, metabolic monitoring, and transplant referral coordination."
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
            Built for the Full SBS Nurse Practitioner Practice
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
              The 12-Month NP Intestinal Failure Roadmap
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              From baseline intake to teduglutide response and transplant coordination — month by month.
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
              The 6 KPIs That Define SBS NP Excellence
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
