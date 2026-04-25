import type { Metadata } from "next";
import { Stethoscope, TrendingUp, Workflow, BarChart3 } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/marketing/Reveal";
import { CTA } from "@/components/marketing/CTA";

export const metadata: Metadata = {
  title:
    "ITP Center Calendar — Platelet Count & Treatment Escalation | Momenties",
  description:
    "Systematic scheduling for immune thrombocytopenia centers — corticosteroid and IVIG acute management, eltrombopag and romiplostim TPO-RA monitoring, rituximab and splenectomy second-line coordination, ITP-BAT bleeding scoring, and chronic ITP long-term platelet surveillance.",
};

const pillars = [
  {
    icon: Stethoscope,
    title: "First-Line Therapy & Acute Management",
    description:
      "Coordinate newly diagnosed ITP induction: prednisone 1 mg/kg/day with 4–6 week taper or high-dose dexamethasone 40 mg PO daily x 4 days (1–3 cycles). For severe thrombocytopenia or active bleeding, schedule IVIG 1 g/kg over 1–2 days for rapid platelet rise (response within 24–72 hours). Build platelet count checks every 2–3 days during the first week, weekly through Week 4, and bleeding score (ITP-BAT) at every visit. Anti-D immunoglobulin pathway available for Rh-positive non-splenectomized patients.",
  },
  {
    icon: TrendingUp,
    title: "TPO-RA Therapy Monitoring",
    description:
      "Manage thrombopoietin receptor agonist regimens with treatment-specific cadences: eltrombopag (Promacta) oral daily with monthly LFTs, weekly CBC during titration, and food/calcium separation counseling; romiplostim (Nplate) subcutaneous weekly with dose adjustments based on platelet response; avapritinib not used here — instead avatrombopag (Doptelet) for hepatic-impairment patients without LFT or food restrictions. Track thrombosis surveillance (TPO-RAs carry thrombotic risk), peripheral smear for myelofibrosis monitoring at 6–12 months, and dose taper plans for sustained responders.",
  },
  {
    icon: Workflow,
    title: "Second-Line Treatment Coordination",
    description:
      "Schedule rituximab 375 mg/m² IV weekly x 4 with hepatitis B screen and PJP prophylaxis discussion; coordinate splenectomy referrals with mandatory pre-op pneumococcal (PCV13/PCV15 + PPSV23), meningococcal (MenACWY + MenB), and Haemophilus influenzae type b vaccinations at least 2 weeks prior. For refractory ITP, schedule fostamatinib (Tavalisse) 100 mg PO BID escalating to 150 mg PO BID at Week 4 with monthly BP, LFT, and CBC monitoring. Maintain a clear escalation ladder: first-line → TPO-RA or rituximab → splenectomy → fostamatinib or combination.",
  },
  {
    icon: BarChart3,
    title: "Chronic ITP Surveillance",
    description:
      "Build long-term cadence for chronic ITP (>12 months from diagnosis): platelet count every 1–4 weeks based on stability and treatment phase, ITP-BAT bleeding score at each visit, peripheral smear annually to rule out MDS or pseudo-thrombocytopenia, and direct antiglobulin test if Evans syndrome suspected. Coordinate annual flu and updated COVID-19 vaccines, post-splenectomy lifetime pneumococcal boosters, and emergency action plans for severe bleeding episodes — including platelet transfusion protocols and IVIG rescue dosing.",
  },
];

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnosis Confirmation & First-Line Induction",
    description:
      "Confirm ITP by exclusion: CBC, peripheral smear (rule out clumping/MDS), reticulocyte, hepatitis B/C, HIV, Helicobacter pylori, ANA, immunoglobulin levels, direct Coombs. Initiate prednisone 1 mg/kg/day or dexamethasone 40 mg x 4 days. Add IVIG 1 g/kg for platelets <20,000 or active bleeding. Schedule platelet count every 2–3 days week one, weekly through Week 4. Document ITP-BAT bleeding score at every encounter.",
  },
  {
    month: "Month 3–4",
    title: "Steroid Taper & Treatment Response Assessment",
    description:
      "Map the prednisone taper carefully: aim for off steroids by Week 6–8. Define response per ASH 2019 guidelines — complete response (platelets ≥100,000) vs. response (≥30,000 and doubled from baseline). For non-responders or steroid-dependent patients (relapse on taper), begin TPO-RA discussion. Schedule eltrombopag 50 mg PO daily (25 mg in East Asian patients) with weekly CBC during titration to platelet target 50,000–200,000.",
  },
  {
    month: "Month 5–6",
    title: "TPO-RA Optimization & Second-Line Planning",
    description:
      "Stabilize TPO-RA dosing: eltrombopag titrated weekly until platelet 50,000–200,000 (max 75 mg, 50 mg East Asian), then monthly CBC and LFT; romiplostim weekly SC injections with dose adjustments at clinic; avatrombopag for hepatic-impairment patients. For non-responders, schedule rituximab 375 mg/m² weekly x 4 IV — confirm hepatitis B serology, vaccine catch-up, and PJP prophylaxis discussion before Cycle 1.",
  },
  {
    month: "Month 7–8",
    title: "Splenectomy Workup & Pre-Op Vaccination Series",
    description:
      "For patients heading toward splenectomy, schedule pre-op pneumococcal (PCV13 or PCV15 followed by PPSV23 8 weeks later), meningococcal MenACWY plus MenB, and Hib vaccines at least 2 weeks before surgery. Coordinate general surgery consultation, laparoscopic vs. open approach decision, perioperative platelet transfusion plan, and post-splenectomy thrombosis prophylaxis. Document accessory spleen scintigraphy if relapse suspected post-splenectomy.",
  },
  {
    month: "Month 9–10",
    title: "Refractory ITP Escalation & Fostamatinib Initiation",
    description:
      "For refractory disease after splenectomy or non-splenectomy candidates, initiate fostamatinib (Tavalisse) 100 mg PO BID, escalating to 150 mg PO BID at Week 4 if platelets remain <50,000. Schedule monthly BP checks (hypertension common), monthly LFT and CBC, and review for diarrhea, neutropenia, and hepatotoxicity. Combination therapy (TPO-RA + rituximab, or sequential agents) may be considered with hematology lead.",
  },
  {
    month: "Month 11–12",
    title: "Chronic ITP Surveillance & Annual Review",
    description:
      "Lock in chronic ITP follow-up: platelet count every 1–4 weeks based on stability, ITP-BAT bleeding score at every visit, annual peripheral smear, annual reticulocyte, and direct Coombs. Confirm post-splenectomy 5-year pneumococcal boosters and meningococcal series compliance. Update annual flu and COVID-19 vaccines. Reassess response duration, taper TPO-RA when sustained platelet >100,000 for 6 months. Document patient-reported outcomes and quality of life.",
  },
];

const kpis = [
  {
    metric: "Platelet Response by Week 4",
    target: "≥70%",
    description:
      "Patients achieving platelet count ≥30,000 and doubled from baseline by Week 4 of first-line corticosteroid therapy per ASH 2019 ITP guideline definitions.",
  },
  {
    metric: "ITP-BAT Bleeding Score",
    target: "Documented 100% of visits",
    description:
      "Every clinic encounter captures the ITP Bleeding Assessment Tool (skin, mucosa, organ domains) so escalation decisions are anchored to bleeding phenotype, not platelet count alone.",
  },
  {
    metric: "TPO-RA Sustained Response",
    target: "≥60% at 6 months",
    description:
      "Eltrombopag, romiplostim, or avatrombopag patients maintaining platelet count ≥50,000 without rescue therapy at 6 months — a benchmark for chronic ITP program effectiveness.",
  },
  {
    metric: "Pre-Splenectomy Vaccine Compliance",
    target: "100%",
    description:
      "Pneumococcal (PCV plus PPSV23), meningococcal (MenACWY plus MenB), and Hib vaccines documented at least 2 weeks before splenectomy in every surgical candidate.",
  },
  {
    metric: "Rituximab Hep B Screening",
    target: "100%",
    description:
      "HBsAg and anti-HBc screened before every rituximab Cycle 1 to prevent fatal hepatitis B reactivation per FDA boxed warning, with antiviral prophylaxis arranged when indicated.",
  },
  {
    metric: "Fostamatinib BP Monitoring",
    target: "Monthly during first 6 months",
    description:
      "Hypertension surveillance for refractory ITP patients on fostamatinib, with LFT and CBC checks paired in the same visit window for treatment-related toxicity capture.",
  },
];

const testimonial = {
  quote:
    "Running an ITP center means juggling steroid tapers, weekly romiplostim doses, monthly eltrombopag LFTs, rituximab infusions with hepatitis B screens, and splenectomy vaccine series — all while platelet counts can swing 80,000 in a week. Momenties keeps every escalation step, every ITP-BAT score, and every pre-op vaccine on the same calendar. Our patients spend less time in the ER and our team finally trusts the system.",
  name: "Dr. J. Bussel",
  title: "ITP Center Director, Platelet Disorder Research Program",
};

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Immune Thrombocytopenia Center Calendar"
        title="ITP Center — Platelet Count Management & Treatment Escalation Calendar"
        subtitle="Systematic scheduling for ITP centers — IVIG and corticosteroid acute management, thrombopoietin receptor agonist monitoring, rituximab and splenectomy coordination, platelet count trending, and chronic ITP long-term surveillance programs."
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
            The Four Pillars of ITP Center Scheduling
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
              Year One: A Twelve-Month ITP Center Calendar
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
            ITP Center Quality Metrics That Matter
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
