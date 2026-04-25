import type { Metadata } from "next"
import {
  Stethoscope,
  Database,
  Shield,
  Workflow,
  Calendar,
  ClipboardList,
  TrendingUp,
  Target,
  Award,
  Activity,
} from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title:
    "Paroxysmal Nocturnal Hemoglobinuria Center Calendar | Momenties",
  description:
    "End-to-end scheduling for PNH centers — eculizumab and ravulizumab complement inhibitor infusions, PNH clone size monitoring, hemolysis surveillance, thrombosis prevention, aplastic anemia overlap management, and HSCT evaluation.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Complement Inhibitor Infusion Scheduling",
    description:
      "Coordinate eculizumab (Soliris) 900 mg IV every 2 weeks after 4-week loading and ravulizumab (Ultomiris) weight-based maintenance every 8 weeks across the infusion center calendar. Track newer oral C3-level inhibitors (iptacopan, danicopan) for clinical trial enrollment and approved use, including dose timing, missed-dose rescue protocols, and breakthrough hemolysis triggers requiring rescue eculizumab. Pre-infusion meningococcal vaccination verification (MenACWY plus MenB) is enforced before the first dose, and chair-time, port access, and pharmacy mixing windows are reserved for every cycle so no infusion drifts off-schedule.",
  },
  {
    icon: Database,
    title: "PNH Clone & Hemolysis Monitoring",
    description:
      "Sequence high-sensitivity flow cytometry (FLAER-based) for PNH clone size on RBCs and granulocytes every 3 to 6 months alongside structured LDH, reticulocyte, haptoglobin, total/indirect bilirubin, and free hemoglobin trending. Patients with breakthrough hemolysis (LDH rising above 1.5x ULN) trigger automatic re-evaluation visits, pharmacokinetic sampling, and complement activity (CH50) testing so dose intensification or switch decisions are evidence-driven rather than reactive.",
  },
  {
    icon: Shield,
    title: "Thrombosis Prevention & Anticoagulation",
    description:
      "PNH thrombosis remains the leading cause of mortality, and large clones (>=50% granulocyte clone) drive the highest risk. The calendar layers anticoagulation review visits, INR draws for warfarin patients, DOAC adherence touchpoints, and annual venous/cerebral imaging surveillance for patients with a history of Budd-Chiari, cerebral venous sinus, or splanchnic thrombosis. Pregnancy and peri-operative windows generate dedicated bridging plans and high-risk OB co-management slots.",
  },
  {
    icon: Workflow,
    title: "Aplastic Anemia Overlap & HSCT Evaluation",
    description:
      "Many PNH patients carry concurrent aplastic anemia or evolve toward MDS. The center calendar enforces serial CBC surveillance, bone marrow biopsy with cytogenetics every 12 months for clonal evolution, and structured HSCT eligibility re-evaluation for younger patients with severe cytopenias or thrombosis despite complement inhibition. Donor search timelines, HLA typing, conditioning regimen planning, and post-transplant chimerism follow-up are sequenced with the rest of the program.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnosis Confirmation, Vaccination & Loading",
    description:
      "Confirm PNH by high-sensitivity flow cytometry (FLAER, CD55, CD59) on RBCs and granulocytes. Document clone size, classify classic PNH vs. PNH in the setting of bone marrow failure, and baseline LDH, reticulocytes, haptoglobin, D-dimer, ferritin, and renal function. Administer MenACWY and MenB vaccination at least 2 weeks before the first complement inhibitor dose (or start prophylactic antibiotics if urgent). Begin eculizumab loading (600 mg weekly x 4) or transition to ravulizumab per label.",
  },
  {
    month: "Month 3–4",
    title: "Maintenance Infusions & Hemolysis Trending",
    description:
      "Lock in q2-week eculizumab or q8-week ravulizumab maintenance schedule. Trend LDH, reticulocyte count, haptoglobin, indirect bilirubin, and free hemoglobin every visit. Educate the patient on morning hemoglobinuria, abdominal pain, dysphagia, and erectile dysfunction as breakthrough symptoms. Verify port patency or peripheral access reliability and confirm meningococcal symptom action plan.",
  },
  {
    month: "Month 5–6",
    title: "First Clone Size Recheck & Thrombosis Risk Review",
    description:
      "Repeat high-sensitivity PNH flow cytometry to confirm clone stability or expansion. Re-stratify thrombosis risk based on granulocyte clone size, prior thrombotic events, pregnancy plans, and surgical needs. For large clones with prior thrombosis, document anticoagulation plan (warfarin INR range or DOAC selection) and schedule INR or anti-Xa monitoring intervals.",
  },
  {
    month: "Month 7–8",
    title: "Breakthrough Hemolysis & Oral Inhibitor Review",
    description:
      "Audit any LDH spikes >1.5x ULN, suboptimal hemoglobin, or persistent transfusion need. Evaluate candidacy for oral factor B (iptacopan) or factor D (danicopan) inhibitors as add-on or monotherapy where approved or via clinical trial. Re-confirm meningococcal vaccination status, encapsulated organism prophylaxis, and patient-held wallet card / safety alert documentation.",
  },
  {
    month: "Month 9–10",
    title: "Aplastic Anemia Overlap & Marrow Surveillance",
    description:
      "Run CBC with differential and reticulocyte count for cytopenia surveillance. Schedule bone marrow biopsy with cytogenetics and morphologic review for any patient with worsening cytopenias, suspected MDS evolution, or every 12 months in patients with bone marrow failure overlap. Reassess HSCT eligibility for younger patients with refractory disease, life-threatening thrombosis, or transfusion dependence.",
  },
  {
    month: "Month 11–12",
    title: "Annual Comprehensive Review & Plan Renewal",
    description:
      "Complete the annual PNH program review — clone size trend, hemolysis control, transfusion burden, thrombosis events, vaccination boosters, renal function, quality-of-life scores (FACIT-Fatigue, EORTC QLQ-C30), and HSCT re-evaluation if appropriate. Refresh anticoagulation, complement inhibitor, and vaccination orders for the next 12-month block and lock the patient into the next year of infusion appointments.",
  },
]

const kpis = [
  {
    metric: "LDH Control",
    target: "<1.5x ULN",
    description:
      "Share of patients on complement inhibition with LDH maintained under 1.5x the upper limit of normal at last visit, the canonical biomarker of intravascular hemolysis control.",
  },
  {
    metric: "On-Time Infusion Rate",
    target: ">=98%",
    description:
      "Percentage of eculizumab q2-week and ravulizumab q8-week maintenance infusions delivered within the protocol window, including pre-infusion vaccination and meningococcal symptom screen.",
  },
  {
    metric: "Meningococcal Vaccination",
    target: "100%",
    description:
      "Share of complement-inhibitor patients with documented MenACWY plus MenB vaccination prior to the first dose and a documented penicillin V or equivalent prophylaxis plan when indicated.",
  },
  {
    metric: "Clone Monitoring Cadence",
    target: "Every 3–6 mo",
    description:
      "Percentage of active PNH patients with a high-sensitivity flow cytometry clone size measurement on schedule and reviewed within 14 days of result availability.",
  },
  {
    metric: "Thrombosis Event Rate",
    target: "<1/100 patient-yrs",
    description:
      "Annualized incidence of new venous, cerebral venous, or splanchnic thrombotic events on therapy, benchmarked against the pre-eculizumab natural history of PNH.",
  },
  {
    metric: "HSCT Evaluation",
    target: "100% eligible",
    description:
      "Share of younger patients with refractory disease, life-threatening thrombosis, or progressive bone marrow failure who have completed a documented HSCT eligibility evaluation in the last 12 months.",
  },
]

const testimonial = {
  quote:
    "PNH care lives or dies on infusion timing, vaccination, hemolysis trending, thrombosis vigilance, and bone marrow surveillance — all on different cadences. Momenties is the first calendar that holds every one of those threads at once. Our LDH control is sharper, breakthrough hemolysis is caught earlier, and not a single ravulizumab dose has drifted out of window since we adopted it.",
  name: "Dr. R. Brodsky",
  title: "PNH Center Director, Blood Disease Program",
}

export default function ParoxysmalNocturnalHemoglobinuriaCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="PNH Center Calendar"
        title="Paroxysmal Nocturnal Hemoglobinuria Center — Complement Inhibitor & Surveillance Calendar"
        subtitle="End-to-end scheduling for PNH centers — eculizumab and ravulizumab complement inhibitor infusions, PNH clone size monitoring, hemolysis surveillance, thrombosis prevention, aplastic anemia overlap management, and HSCT evaluation."
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
            Built for the Full PNH Center Operating Model
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
              The 12-Month PNH Care Calendar
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Every infusion, vaccination, clone-size flow cytometry, hemolysis lab, and HSCT
              evaluation milestone — sequenced from diagnosis through annual review.
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
              The 6 KPIs That Define a High-Performing PNH Center
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
                      marginBottom: 8,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(1.4rem,2.5vw,1.9rem)",
                      fontWeight: 700,
                      color: "#c5a35c",
                      fontFamily: "Playfair Display, serif",
                      marginBottom: 12,
                    }}
                  >
                    {kpi.target}
                  </div>
                  <div
                    style={{
                      fontSize: "0.88rem",
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
          </div>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
