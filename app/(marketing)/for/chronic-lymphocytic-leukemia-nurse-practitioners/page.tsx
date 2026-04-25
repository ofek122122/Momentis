import type { Metadata } from "next"
import { Stethoscope, ShieldCheck, ClipboardList, Bell, Calendar, Clock, BarChart3, Target, Award, UserCheck } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "CLL Nurse Practitioners — Watch-and-Wait Through Treatment Calendar | Momenties",
  description:
    "Built for NPs managing CLL patients across active surveillance, BTK inhibitor adherence, venetoclax ramp-up, IVIG for hypogammaglobulinemia, PCP and zoster prophylaxis, COVID-19 vaccination timing, and Richter transformation workups.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Active Surveillance Visit Management",
    description:
      "Q3-month watch-and-wait visit scheduling for asymptomatic Rai 0–II / Binet A patients — CBC with differential and absolute lymphocyte count tracking for ALC doubling time (LDT <6 months is a treatment trigger), focused exam for new lymphadenopathy or splenomegaly, B-symptom and fatigue screening, and structured patient education about iwCLL treatment indications. Annual FISH for evolving del(17p)/del(11q), TP53 sequencing prior to first treatment, IGHV mutation status confirmation, and quantitative IgG/IgA/IgM panels. NP-driven visit templates capture LDT calculation, treatment-trigger decision logic, and patient-reported symptom burden in a single encounter.",
  },
  {
    icon: ShieldCheck,
    title: "BTK Inhibitor Adherence & Toxicity",
    description:
      "Ibrutinib 420 mg PO daily, acalabrutinib 100 mg PO BID, and zanubrutinib 160 mg PO BID adherence coaching with structured toxicity surveillance. Monthly atrial fibrillation symptom screen (palpitations, dyspnea, exercise intolerance) with low-threshold ECG, BP monitoring with intervention threshold ≥130/80 mmHg, bleeding-risk education and 3–7 day perioperative hold protocols, and acalabrutinib-specific headache management with caffeine + acetaminophen during the first 1–2 weeks. Grade ≥2 diarrhea, arthralgia, and rash management; dose-modification documentation per FDA label; and proton-pump-inhibitor avoidance counseling for acalabrutinib (use famotidine or antacids spaced 2 hours apart).",
  },
  {
    icon: ClipboardList,
    title: "Venetoclax Ramp-Up Coordination",
    description:
      "5-week venetoclax dose escalation (20 → 50 → 100 → 200 → 400 mg) coordination with TLS-risk stratification (lymph node ≥5 cm or ALC ≥25 × 10⁹/L = high risk requiring inpatient first dose). Pre-dose hydration scheduling, allopurinol 300 mg PO daily initiation 72 hours pre-ramp (rasburicase for high-risk), and weekly chemistry panels with potassium, phosphorus, calcium, uric acid, and creatinine drawn at 6, 8, 12, and 24 hours post-dose at every escalation. NP coordinates obinutuzumab Cycle 1 Day 1 split-dose infusion (100 mg / 900 mg) with premedication and infusion-reaction protocols, and Day 8 / Day 15 / Day 22 outpatient continuation.",
  },
  {
    icon: Bell,
    title: "Infection Prevention & Monitoring",
    description:
      "Quantitative IgG monitoring with IVIG 400 mg/kg q3–4 weeks initiated for IgG <400 mg/dL plus recurrent sinopulmonary infections. PCP prophylaxis with TMP-SMX SS daily or DS three times weekly during BTKi or venetoclax therapy; herpes zoster prophylaxis with acyclovir 400 mg PO BID. Recombinant zoster (Shingrix) two-dose series, pneumococcal PCV20 (or PCV15 + PPSV23), inactivated influenza, and updated COVID-19 vaccination scheduled before anti-CD20 exposure (response is markedly blunted on rituximab/obinutuzumab and for ≥6 months after BTKi initiation). Live vaccines avoided. Annual second-primary malignancy screening (skin exam, age-appropriate cancer screening) and Richter transformation symptom education.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnosis Confirmation & Patient Onboarding",
    description:
      "Confirm CLL by peripheral blood flow cytometry (CD5+/CD19+/CD23+, light-chain restriction, ALC ≥5,000/μL clonal B-cells). Order baseline FISH panel, IGHV mutation status, TP53 sequencing, β2-microglobulin, LDH, comprehensive metabolic panel, quantitative immunoglobulins, and direct antiglobulin test. Stage by Rai (0–IV) and Binet (A–C). Run NP-led patient onboarding visit covering watch-and-wait rationale, treatment-trigger education, infection-prevention pathway, and self-monitoring red flags. Document baseline LDT, exam findings, and a 3-month surveillance visit on the calendar.",
  },
  {
    month: "Month 3–4",
    title: "Surveillance Cadence & Vaccination Catch-Up",
    description:
      "Q3-month CBC and clinical exam to establish ALC doubling time. NP-led vaccination catch-up — inactivated influenza, pneumococcal PCV20 or PCV15 + PPSV23, recombinant zoster (Shingrix) two-dose series, and updated COVID-19 vaccination — completed before any anti-CD20 therapy or BTKi initiation. Review quantitative IgG and assess IVIG candidacy. Document a structured patient self-monitoring plan for B-symptoms, new adenopathy, and infection red flags.",
  },
  {
    month: "Month 5–6",
    title: "Treatment-Trigger Reassessment",
    description:
      "Reassess iwCLL treatment indications at 6 months — progressive marrow failure (Hgb <10 g/dL, platelets <100,000/μL), bulky or symptomatic adenopathy/splenomegaly, autoimmune cytopenia unresponsive to steroids, LDT <6 months, or constitutional symptoms. For triggered patients, NP coordinates regimen-selection conference (continuous BTKi vs. fixed-duration venetoclax + obinutuzumab) with attention to del(17p)/TP53 status, cardiac comorbidities, and patient preference. Hepatitis B core antibody and HBV DNA screening completed prior to anti-CD20 exposure.",
  },
  {
    month: "Month 7–8",
    title: "Active Treatment Onboarding & Toxicity Surveillance",
    description:
      "BTKi initiation visits — patient education on adherence, AFib symptoms, bleeding precautions, and drug–drug interactions (strong CYP3A inhibitors/inducers). Venetoclax ramp-up: weekly clinic visits with TLS labs at 6, 8, 12, and 24 hours after each dose escalation; high-risk patients hospitalized for first dose. Cycle 1 obinutuzumab split-dose Day 1 with reaction monitoring and Day 2 / Day 8 / Day 15 continuation. Initiate PCP and HSV prophylaxis per institutional pathway.",
  },
  {
    month: "Month 9–10",
    title: "Mid-Treatment Response & Toxicity Review",
    description:
      "Cycle 6 (CLL14) or 6-month BTKi response review — exam, CBC, CT chest/abdomen/pelvis, and bone marrow biopsy if MRD assessment is planned. NP documents iwCLL 2018 response category (CR/CRi/PR/PR-L), CTCAE v5.0 toxicity grading, dose-modification log, and adherence review. AFib screen, BP review, and cardiology referral for any rhythm change. Update IVIG schedule for ongoing hypogammaglobulinemia.",
  },
  {
    month: "Month 11–12",
    title: "End-of-Treatment Transition & Long-Term Follow-Up",
    description:
      "Fixed-duration venetoclax + obinutuzumab cessation at Month 12 with MRD assessment (flow cytometry or NGS) — MRD-undetectable patients transition to Q3-month surveillance for 2 years. Continuous BTKi patients move to chronic monitoring with annual echocardiogram, quarterly BP and ECG, and ongoing infection-prevention pathway. Annual second-primary malignancy screening, Richter transformation symptom re-education, and structured discussion of clinical trial options for relapsed/refractory disease (pirtobrutinib, CD19 CAR-T, allogeneic HSCT).",
  },
]

const kpis = [
  {
    metric: "≥95%",
    target: "BTKi Adherence Documentation",
    description: "Monthly NP-confirmed BTK inhibitor adherence and missed-dose log review for continuous-therapy patients.",
  },
  {
    metric: "100%",
    target: "TLS Lab Compliance at Ramp-Up",
    description: "Pre- and post-dose chemistry panels completed at every venetoclax dose-escalation step.",
  },
  {
    metric: "≥90%",
    target: "Pre-Therapy Vaccination",
    description: "Pneumococcal, Shingrix, influenza, and COVID-19 vaccination completed before anti-CD20 or BTKi initiation.",
  },
  {
    metric: "<5%",
    target: "Grade 3+ AFib on BTKi",
    description: "Cumulative incidence of clinically significant atrial fibrillation under NP cardiac-surveillance pathway at 24 months.",
  },
  {
    metric: "≥80%",
    target: "IVIG for IgG <400 mg/dL",
    description: "Hypogammaglobulinemic patients with recurrent infections initiated on IVIG within 30 days of qualifying labs.",
  },
  {
    metric: "≤10 days",
    target: "Richter Workup Turnaround",
    description: "Time from suspected Richter transformation to PET-CT and excisional biopsy result under NP-led pathway.",
  },
]

const testimonial = {
  quote:
    "CLL nurse practitioners hold the entire continuity layer — a watch-and-wait patient at month three, an ibrutinib patient with new palpitations at month seven, and a venetoclax ramp-up patient who needs labs at exactly six, eight, twelve, and twenty-four hours. Before Momenties, that meant three different spreadsheets and a stack of paper reminders. Now every iwCLL surveillance visit, BTKi cardiac check, venetoclax TLS lab, IVIG infusion, vaccination deadline, and Richter red-flag follow-up is on one calendar. My adherence documentation hit 96%, and our team finally has a real picture of what each CLL patient needs this week.",
  name: "Rachel T., AGPCNP-BC",
  title: "CLL Specialist NP, Comprehensive Cancer Center",
}

export default function ChronicLymphocyticLeukemiaNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="CLL Nurse Practitioners"
        title="CLL Nurse Practitioners — Scheduling for Watch-and-Wait Through Treatment"
        subtitle="Built for NPs managing CLL patients across the full disease course — from active surveillance visits and BTK inhibitor check-ins to venetoclax ramp-up coordination and transformation workups."
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
            Built for the Full CLL NP Practice
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
              The CLL NP Calendar — Twelve Months, End to End
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "#a0998e",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              From diagnosis confirmation through MRD-guided discontinuation — every NP-led visit, ramp-up lab, and prophylaxis interval mapped to the year.
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
              The Six KPIs That Define CLL NP Excellence
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
