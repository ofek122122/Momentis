import type { Metadata } from "next"
import { Activity, ShieldCheck, Droplet, Stethoscope, Calendar, ClipboardList, Target, Award, BarChart3, Bell } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "CLL Center Calendar — Watch-and-Wait, Treatment & Surveillance | Momenties",
  description:
    "End-to-end scheduling for CLL centers — iwCLL active surveillance, BTK inhibitor (ibrutinib/acalabrutinib/zanubrutinib) AFib and bleeding monitoring, venetoclax + obinutuzumab ramp-up with TLS prophylaxis, FISH/IGHV/TP53 testing, MRD-guided discontinuation, and Richter transformation biopsy coordination.",
}

const pillars = [
  {
    icon: Activity,
    title: "Active Surveillance & Watch-and-Wait",
    description:
      "iwCLL 2018 criteria-driven monitoring for asymptomatic Rai 0–II / Binet A patients — quarterly CBC with differential and absolute lymphocyte count doubling time (LDT) tracking, lymph node and spleen examination, B-symptom screening (fever, night sweats, ≥10% weight loss), and fatigue assessment. Annual FISH cytogenetics for emerging del(17p)/del(11q) clones, IGHV mutational status confirmation, and TP53 sequencing prior to first treatment indication. Treatment trigger documentation: progressive marrow failure (Hgb <10 g/dL, platelets <100,000/μL), massive or progressive splenomegaly/lymphadenopathy, autoimmune cytopenias unresponsive to corticosteroids, LDT <6 months, or constitutional symptoms.",
  },
  {
    icon: ShieldCheck,
    title: "BTK Inhibitor Treatment Monitoring",
    description:
      "Ibrutinib 420 mg PO daily, acalabrutinib 100 mg PO BID, and zanubrutinib 160 mg PO BID continuous-therapy compliance with cardiology co-management. Baseline and serial ECG with monthly atrial fibrillation surveillance (3–10% incidence on ibrutinib, lower on acalabrutinib/zanubrutinib), CHA2DS2-VASc anticoagulation risk stratification, and BTK-inhibitor-compatible DOAC selection (apixaban preferred over warfarin). Bleeding risk assessment and 3–7 day perioperative hold, hypertension monitoring (≥130/80 mmHg threshold for intervention), grade ≥2 diarrhea and arthralgia management, and acalabrutinib-specific headache prophylaxis with caffeine and acetaminophen during the first 1–2 weeks.",
  },
  {
    icon: Droplet,
    title: "Venetoclax + Anti-CD20 Coordination",
    description:
      "Fixed-duration venetoclax + obinutuzumab (CLL14 regimen) and venetoclax + rituximab (MURANO regimen) compliance — strict 5-week ramp-up schedule (20 → 50 → 100 → 200 → 400 mg) with tumor lysis syndrome (TLS) risk stratification by tumor burden (lymph node ≥5 cm or ALC ≥25 × 10⁹/L = high risk requiring hospitalization for first dose). Pre-dose hydration, allopurinol or rasburicase prophylaxis, and core electrolyte panel (potassium, phosphorus, calcium, uric acid, creatinine) at 6, 8, 12, and 24 hours post-dose at each ramp-up step. Obinutuzumab Cycle 1 Day 1 split-dose infusion (100 mg / 900 mg) with mandatory infusion-reaction premedication (acetaminophen, antihistamine, glucocorticoid) and post-infusion observation.",
  },
  {
    icon: Stethoscope,
    title: "Richter Transformation & Relapsed Disease",
    description:
      "Richter transformation surveillance (~5% lifetime incidence) — new B-symptoms, rapidly enlarging or asymmetric lymphadenopathy, sudden LDH rise, or hypercalcemia trigger PET-CT and excisional biopsy of the most FDG-avid node within 7–10 days. Pathology coordination for diffuse large B-cell lymphoma vs. Hodgkin variant transformation, clonal relationship testing, and MYC/TP53 status. Relapsed/refractory pathway scheduling for double-refractory patients (post-BTKi and post-venetoclax) — pirtobrutinib non-covalent BTK inhibitor, lisocabtagene maraleucel CD19 CAR-T leukapheresis and bridging therapy, and allogeneic HSCT donor search. MRD assessment by 8-color flow cytometry or ClonoSEQ NGS at end of treatment to guide MRD-guided discontinuation versus continuation.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Baseline Workup & iwCLL Risk Stratification",
    description:
      "Confirm CLL diagnosis by peripheral blood flow cytometry (CD5+/CD19+/CD23+, kappa/lambda restriction, ALC ≥5,000/μL clonal B-cells). Complete FISH panel for del(13q), trisomy 12, del(11q), del(17p); IGHV somatic hypermutation status; and TP53 sequencing. Assign Rai (0–IV) and Binet (A–C) stage. Establish watch-and-wait baseline with CBC, comprehensive metabolic panel, LDH, β2-microglobulin, quantitative immunoglobulins, and direct antiglobulin test. Document treatment indication absence and schedule first 3-month surveillance visit.",
  },
  {
    month: "Month 3–4",
    title: "Surveillance Cadence & Vaccination Catch-Up",
    description:
      "Q3-month CBC and clinical exam for asymptomatic patients to establish ALC doubling time. Inactivated influenza, pneumococcal PCV20 (or PCV15 + PPSV23), recombinant zoster (Shingrix), and updated COVID-19 vaccination scheduled before any anti-CD20 therapy initiation (response is markedly blunted on rituximab/obinutuzumab and for ≥6 months after BTKi initiation). Quantitative IgG monitoring; initiate IVIG 400 mg/kg q3–4 weeks for IgG <400 mg/dL with recurrent sinopulmonary infections.",
  },
  {
    month: "Month 5–6",
    title: "Treatment Initiation Decision & Regimen Selection",
    description:
      "For patients meeting iwCLL treatment indication, regimen selection conference with hematology, pharmacy, and NP. Frontline options: continuous BTKi (acalabrutinib or zanubrutinib preferred over ibrutinib for cardiac safety) versus fixed-duration venetoclax + obinutuzumab (CLL14). del(17p)/TP53-mutated patients steered to BTKi or venetoclax-based therapy (chemoimmunotherapy contraindicated). Tumor lysis risk stratification, baseline echocardiogram, hepatitis B core antibody and HBV DNA screening for anti-CD20 exposure, and patient education visit completed.",
  },
  {
    month: "Month 7–8",
    title: "Active Treatment Toxicity Surveillance",
    description:
      "Weekly clinic visits during venetoclax 5-week ramp-up with TLS labs at each dose escalation. Monthly ECG and blood pressure for BTKi patients; rhythm-strip review for new palpitations or dyspnea. Cycle 1–6 obinutuzumab infusion days with reaction monitoring, neutropenia surveillance (G-CSF support per institutional protocol), and PJP/HSV prophylaxis (TMP-SMX and acyclovir) initiation per pathway.",
  },
  {
    month: "Month 9–10",
    title: "Mid-Treatment Response Assessment",
    description:
      "Cycle 6 (CLL14) or 6-month BTKi response evaluation — physical exam, CBC, CT of chest/abdomen/pelvis (per iwCLL response criteria), and bone marrow biopsy if MRD assessment is planned. Document CR/CRi/PR/PR-L per iwCLL 2018 criteria. MRD assessment at end of venetoclax + obinutuzumab fixed duration (Cycle 12) by flow cytometry or NGS to support MRD-undetectable discontinuation. Toxicity grading per CTCAE v5.0 and dose modification log review.",
  },
  {
    month: "Month 11–12",
    title: "End-of-Treatment Transition & Long-Term Follow-Up",
    description:
      "Fixed-duration venetoclax + obinutuzumab cessation at 12 months with MRD-undetectable status; transition to surveillance Q3-month for first 2 years post-treatment. Continuous BTKi patients enter chronic monitoring with annual echocardiogram, quarterly BP and ECG, and ongoing infection-prevention pathway. Annual second-primary malignancy screening (skin exam, age-appropriate cancer screening), Richter transformation symptom education, and family-history review for hereditary CLL counseling. Annual program quality review: response rates, MRD-undetectability rates, AFib incidence, and Richter transformation timeliness.",
  },
]

const kpis = [
  {
    metric: "≥75%",
    target: "MRD-Undetectable at EoT",
    description: "Venetoclax + obinutuzumab fixed-duration patients achieving undetectable MRD (<10⁻⁴) at end of treatment by flow or NGS.",
  },
  {
    metric: "<5%",
    target: "Grade 3+ AFib on BTKi",
    description: "Cumulative incidence of grade 3+ atrial fibrillation on continuous BTK inhibitor therapy at 24 months.",
  },
  {
    metric: "100%",
    target: "TLS Lab Compliance",
    description: "Pre- and post-dose TLS chemistry panel completion at every venetoclax ramp-up dose escalation.",
  },
  {
    metric: "≥95%",
    target: "FISH/IGHV/TP53 Pre-Treatment",
    description: "Pre-treatment cytogenetic and molecular workup completion before frontline therapy initiation.",
  },
  {
    metric: "≤10 days",
    target: "Richter Biopsy Turnaround",
    description: "Time from suspected Richter transformation to excisional biopsy and pathology result.",
  },
  {
    metric: "≥90%",
    target: "Vaccination Pre-Therapy",
    description: "Pneumococcal, Shingrix, influenza, and COVID-19 vaccination completion before anti-CD20 or BTKi initiation.",
  },
]

const testimonial = {
  quote:
    "CLL is unique because the same program co-manages a watch-and-wait patient seen quarterly, an ibrutinib patient with new atrial fibrillation, a venetoclax patient mid-ramp-up requiring 6/8/12/24-hour TLS labs, and a Richter transformation workup that has to move within ten days. Momenties consolidated every iwCLL surveillance visit, BTKi cardiac check, venetoclax dose-escalation lab, FISH/IGHV/TP53 result, and MRD endpoint into one calendar. Our MRD-undetectable rate at end of fixed-duration therapy reached 78% and our Richter biopsy turnaround dropped under nine days.",
  name: "Dr. T. Watanabe",
  title: "CLL Program Director, Hematology Institute",
}

export default function ChronicLymphocyticLeukemiaCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Chronic Lymphocytic Leukemia Center Calendar"
        title="CLL Center — Watch-and-Wait, Treatment & Surveillance Calendar"
        subtitle="End-to-end scheduling for CLL centers — active surveillance programs, BTK inhibitor and venetoclax-based treatment coordination, FISH/IGHV testing, MRD assessment, and Richter transformation workup protocols."
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
            Built for the Full CLL Center Care Continuum
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
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 10, color: "#f0ece3" }}>
                  {title}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "#a0998e", lineHeight: 1.65 }}>{description}</p>
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
              The CLL Center Calendar — Twelve Months, End to End
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "#a0998e",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              From iwCLL baseline workup through MRD-guided discontinuation — every surveillance visit, ramp-up lab, and transformation milestone sequenced across the year.
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
                    <div style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.97rem", lineHeight: 1.4 }}>
                      {item.title}
                    </div>
                  </div>
                  <p style={{ color: "#a0998e", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
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
              The Six KPIs That Define CLL Program Excellence
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
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
                    textAlign: "center",
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
                  <div style={{ fontSize: "0.92rem", color: "#f0ece3", fontWeight: 600, marginBottom: 8 }}>
                    {kpi.target}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#a0998e", lineHeight: 1.5 }}>
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
            <div style={{ fontSize: "2.5rem", color: "#c5a35c", marginBottom: 16, lineHeight: 1 }}>&ldquo;</div>
            <blockquote
              style={{
                fontSize: "clamp(1rem,2vw,1.2rem)",
                color: "#f0ece3",
                lineHeight: 1.7,
                fontStyle: "italic",
                marginBottom: 28,
                margin: "0 0 28px",
                padding: 0,
                border: "none",
              }}
            >
              {testimonial.quote}
            </blockquote>
            <div style={{ fontWeight: 700, color: "#c5a35c", fontSize: "0.95rem" }}>{testimonial.name}</div>
            <div style={{ color: "#a0998e", fontSize: "0.88rem", marginTop: 4 }}>{testimonial.title}</div>
          </div>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
