import type { Metadata } from "next"
import { Zap, Heart, Target, Shield } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title:
    "Acute Promyelocytic Leukemia Center — Induction, Consolidation & Surveillance Calendar | Momentis",
  description:
    "Precision scheduling for APL centers — ATRA + arsenic trioxide induction, differentiation syndrome monitoring, coagulopathy management, PCR-based MRD surveillance, and molecular remission programs.",
}

const pillars = [
  {
    icon: Zap,
    title: "Induction & Differentiation Syndrome Management",
    description:
      "Lock in the Tallman/Lo-Coco protocol from hour zero — ATRA 45 mg/m²/day in two divided doses started on the day of clinical suspicion (before molecular confirmation), arsenic trioxide 0.15 mg/kg/day infused over 1–2 hours after baseline ECG, and twice-daily clinic checks for differentiation syndrome (unexplained fever, dyspnea, weight gain >5 kg, pulmonary infiltrates, hypotension, pleural/pericardial effusion). Momentis pre-loads daily CBC during induction, dexamethasone 10 mg IV BID at the first sign of DS, and bone marrow assessment at Day 28–35 to confirm morphologic remission. ATRA dosing windows, ATO infusion timing, and DS escalation thresholds sit inside the patient card so the on-call team never has to reconstruct the protocol at 2 a.m.",
  },
  {
    icon: Heart,
    title: "Coagulopathy & DIC Monitoring",
    description:
      "APL kills early through hemorrhage, not leukemia. Momentis sequences fibrinogen, PT, PTT, D-dimer, and platelet count every 6–8 hours through the first 7–10 days of induction, with automatic transfusion triggers — fibrinogen <150 mg/dL → cryoprecipitate, platelets <30–50 × 10⁹/L → platelet transfusion, INR >1.5 → FFP. Daily neuro checks for intracranial hemorrhage, baseline and serial echocardiograms before ATO, and a structured QTc monitoring lane (baseline, pre-each ATO dose, and during electrolyte replacement) keep the program inside the narrow safety corridor where APL becomes a curable disease rather than an early-death tragedy.",
  },
  {
    icon: Target,
    title: "Consolidation & MRD Surveillance",
    description:
      "Sequence consolidation cycles — ATRA + ATO for low/intermediate risk, ATRA + anthracycline-based for high-risk — with PML-RARA RT-qPCR at the end of each consolidation cycle and a confirmatory bone marrow at the end of consolidation to document molecular complete remission. Momentis schedules CNS prophylaxis (intrathecal methotrexate ×4–6) for high-risk patients (WBC >10 × 10⁹/L at presentation), echocardiograms before each anthracycline cycle, and PCR sensitivity windows so a single missed sample never breaks the molecular surveillance chain.",
  },
  {
    icon: Shield,
    title: "Maintenance & Molecular Remission",
    description:
      "For high-risk patients on ATRA + chemotherapy backbones, drive a 1- to 2-year maintenance lane with intermittent ATRA, 6-MP, and methotrexate, paired with PML-RARA PCR every 3 months for the first 2 years and every 6 months in years 3–5. Momentis ties each PCR result to the next surveillance interval, queues confirmatory marrow on any PCR positivity, and builds an early-relapse pathway — ATO re-induction, autologous or allogeneic SCT — into the calendar before the result lands. Survivorship lanes track late cardiac effects, secondary MDS/AML risk, and annual fertility and endocrine review for cured patients.",
  },
]

const timeline = [
  {
    month: "Month 1-2",
    title: "Emergency Induction & Coagulopathy Stabilization",
    description:
      "Start ATRA 45 mg/m²/day on clinical suspicion before genetic confirmation. Confirm PML-RARA by FISH or RT-PCR within 24–48 hours. Begin arsenic trioxide 0.15 mg/kg/day after baseline ECG (QTc <460 ms) and electrolyte correction (K⁺ >4.0, Mg²⁺ >1.8). Run fibrinogen, PT/PTT, D-dimer, and platelets every 6–8 hours; transfuse cryoprecipitate, platelets, and FFP to thresholds. Twice-daily DS assessment with dexamethasone 10 mg IV BID at first sign. Daily CBC, daily ECG and electrolytes during ATO.",
  },
  {
    month: "Month 3-4",
    title: "Day 28–35 Marrow & Consolidation Cycle 1",
    description:
      "Bone marrow biopsy at Day 28–35 to confirm morphologic complete remission. Repeat baseline echocardiogram before consolidation. Begin Consolidation Cycle 1 — ATRA + ATO (low/intermediate risk) or ATRA + idarubicin (high risk). Schedule CNS prophylaxis with intrathecal methotrexate for high-risk WBC >10 × 10⁹/L. PML-RARA RT-qPCR at the end of cycle. Continue QTc monitoring before each ATO dose.",
  },
  {
    month: "Month 5-6",
    title: "Consolidation Cycles 2–3 & First Molecular Read",
    description:
      "Run consolidation cycles 2 and 3 with cycle-aligned echocardiograms, ophthalmology referrals for ATRA-related pseudotumor cerebri, and PML-RARA RT-qPCR at the end of each cycle. Confirm hematologic recovery (ANC >1.0, platelets >100) between cycles. Schedule end-of-consolidation bone marrow with quantitative PCR to document molecular complete remission.",
  },
  {
    month: "Month 7-8",
    title: "End-of-Consolidation Assessment",
    description:
      "Bone marrow biopsy with morphology, cytogenetics, and quantitative PML-RARA RT-qPCR to document molecular CR. For low/intermediate risk patients on ATRA + ATO, transition to surveillance. For high-risk patients, initiate maintenance with intermittent ATRA + 6-MP + methotrexate. Audit cumulative anthracycline dose and schedule survivorship cardiac and fertility consults.",
  },
  {
    month: "Month 9-10",
    title: "Maintenance Initiation & Q3-Month MRD",
    description:
      "Start 1–2 year maintenance for high-risk patients — ATRA 15 days every 3 months, 6-MP 50 mg/m²/day, methotrexate 15 mg/m² weekly. Monthly CBC, AST/ALT, and 6-MP/MTX dose adjustments. PML-RARA RT-qPCR every 3 months in the first 2 years. Schedule echocardiogram at 6 and 12 months post-anthracycline.",
  },
  {
    month: "Month 11-12",
    title: "Annual Review & Long-Term Surveillance Launch",
    description:
      "Anchor the annual review — CBC, peripheral smear, PML-RARA quantitative PCR, echocardiogram, fertility/endocrine review, and secondary malignancy screening. Confirm sustained molecular CR. Hand off to the long-term surveillance lane with PCR every 3 months in years 1–2 and every 6 months in years 3–5, plus the early-relapse pathway (ATO re-induction, autologous or allogeneic SCT) pre-loaded for any PCR positivity.",
  },
]

const kpis = [
  {
    metric: "≥95%",
    target: "Hematologic Complete Remission After Induction",
    description:
      "Day 28–35 bone marrow morphologic CR rate after ATRA + ATO induction per Tallman/Lo-Coco protocol.",
  },
  {
    metric: "<5%",
    target: "Early Death From Coagulopathy",
    description:
      "First-30-day mortality from intracranial or pulmonary hemorrhage held below the modern APL benchmark.",
  },
  {
    metric: "100%",
    target: "ATRA Started Within 24 Hours of Suspicion",
    description:
      "Every patient with clinical or morphologic suspicion of APL has ATRA initiated before genetic confirmation.",
  },
  {
    metric: "100%",
    target: "Baseline ECG & QTc Before First ATO Dose",
    description:
      "All patients receive a baseline 12-lead ECG with QTc <460 ms and corrected electrolytes before arsenic trioxide is started.",
  },
  {
    metric: "≥90%",
    target: "Molecular CR at End of Consolidation",
    description:
      "PML-RARA RT-qPCR negativity confirmed by end-of-consolidation bone marrow across the program.",
  },
  {
    metric: "100%",
    target: "On-Schedule Surveillance PCR Compliance",
    description:
      "Quarterly PML-RARA PCR in years 1–2 and semi-annual PCR in years 3–5 completed within the protocol window.",
  },
]

const testimonial = {
  quote:
    "APL is the most curable acute leukemia we treat — but only if induction runs perfectly. The first two weeks demand simultaneous ATRA dosing, arsenic trioxide infusions with QTc and electrolyte monitoring, fibrinogen and platelet replacement every six hours, twice-daily differentiation syndrome assessments, and a Day 28 marrow that has to land on time. Momentis gave us one calendar where every dose, every lab, every echo, and every PCR is sequenced and visible. Our last 40 consecutive patients hit hematologic CR, none died early from coagulopathy, and our molecular CR rate at end of consolidation reached 96%.",
  name: "Dr. K. Huang",
  title: "APL Program Director, Leukemia Institute",
}

export default function AcutePromyelocyticLeukemiaCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="APL Center Calendar"
        title="Acute Promyelocytic Leukemia Center — Induction, Consolidation & Surveillance Calendar"
        subtitle="Precision scheduling for APL centers — ATRA + arsenic trioxide induction, differentiation syndrome monitoring, coagulopathy management, PCR-based MRD surveillance, and molecular remission programs."
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
            Four Pillars of APL Center Operations
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
                <p style={{ fontSize: "0.92rem", color: "#a0998e", lineHeight: 1.65 }}>
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
              The APL Care Year — Induction Through Molecular Remission
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "#a0998e",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Six two-month phases that take a newly diagnosed APL patient from emergency induction through end-of-consolidation molecular CR — and into long-term PCR surveillance.
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
                      color: "#a0998e",
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
              Six KPIs That Define APL Program Excellence
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
                    background: "#131318",
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
                      marginBottom: 6,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "#f0ece3",
                      fontWeight: 600,
                      marginBottom: 8,
                    }}
                  >
                    {kpi.target}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#a0998e", lineHeight: 1.55 }}>
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
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", color: "#c5a35c", marginBottom: 16, lineHeight: 1 }}>
              &ldquo;
            </div>
            <blockquote
              style={{
                fontSize: "clamp(1rem,2vw,1.2rem)",
                color: "#f0ece3",
                lineHeight: 1.7,
                fontStyle: "italic",
                marginBottom: 28,
                margin: 0,
                padding: 0,
                border: "none",
              }}
            >
              {testimonial.quote}
            </blockquote>
            <div style={{ marginTop: 28 }}>
              <div style={{ fontWeight: 700, color: "#c5a35c", fontSize: "0.95rem" }}>
                {testimonial.name}
              </div>
              <div style={{ color: "#a0998e", fontSize: "0.88rem", marginTop: 4 }}>
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
