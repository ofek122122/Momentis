import type { Metadata } from "next"
import { Database, Shield, Stethoscope, BookOpen } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Bronchiectasis Nurse Practitioner Scheduling Guide | Momenties",
  description:
    "Scheduling infrastructure for NPs managing sputum culture trending, inhaled antibiotic adherence counseling, airway-clearance device training, and exacerbation action-plan education in bronchiectasis clinics.",
}

const pillars = [
  {
    icon: Database,
    title: "Sputum Microbiology Trending & Inhaled Antibiotic Cycle Adherence",
    description:
      "Quarterly sputum culture scheduling for P. aeruginosa quantitative cultures and tobramycin MIC tracking during 28-day on/28-day off TOBI Podhaler cycles; flagging MIC ≥16 μg/mL as a resistance signal requiring attending pulmonologist review for regimen switch to inhaled aztreonam lysinate or colistimethate; inhaled colistimethate sodium continuous-cycle adherence counseling using dry-powder inhaler dose counter data or nebulizer time logs; patient-reported adherence documentation at each visit with motivational interviewing for missed-dose patterns; quarterly spirometry (FEV1 % predicted) correlation with on-cycle adherence to reinforce clinical benefit messaging; and monthly sputum NTM surveillance culture coordination to detect MAC emergence before azithromycin monotherapy inadvertently drives resistance.",
  },
  {
    icon: Shield,
    title: "Azithromycin QTc/Audiology Monitoring & Macrolide Resistance Counseling",
    description:
      "Annual ECG scheduling with QTc measurement for all bronchiectasis patients on azithromycin 500 mg 3×/week macrolide prophylaxis — flagging QTc >450 ms (males) or >470 ms (females) for prompt cardiology liaison and macrolide cessation per AHA guidance; annual pure-tone audiometry (2, 4, 6, 8 kHz) and speech discrimination testing for macrolide ototoxicity surveillance, with side-by-side comparison to prior-year audiogram for threshold shift detection; quarterly LFT (ALT, AST) monitoring for azithromycin hepatotoxicity and patient counseling on early symptom recognition (jaundice, RUQ pain, fatigue); macrolide resistance education at each visit emphasizing NTM culture negativity as a prerequisite for continued prophylaxis — documented NTM-positive results trigger macrolide hold and multidisciplinary NTM treatment discussion; and biannual sputum macrolide MIC documentation for H. influenzae and P. aeruginosa isolates to detect emerging resistance.",
  },
  {
    icon: Stethoscope,
    title: "Airway-Clearance Device (HFCWO/Acapella) Self-Use Competency & Physiotherapy Referral",
    description:
      "Annual HFCWO (The Vest/SmartVest) device competency re-assessment using standardized physiotherapy checklist — correct vest size, frequency setting (10–15 Hz), pressure setting, and session duration (minimum 20 min BID per BTS guidelines); oscillating PEP device (acapella green/blue, flutter valve RC-Cornet) technique review with breathing pattern correction — three-second inhalation, 4–5-second exhalation with vibration, three huffs, rest — documented per session observation; autogenic drainage (AD) and active cycle of breathing techniques (ACBT) refresher referral coordination with certified respiratory physiotherapist for patients with suboptimal secretion clearance (24-hour sputum volume <15 mL or CASA-Q score deterioration); daily airway-clearance diary review at each NP visit with device download data integration; and quarterly pulmonary rehabilitation referral for FEV1 <50% predicted patients with exercise intolerance or functional decline on 6MWT.",
  },
  {
    icon: BookOpen,
    title: "Exacerbation Action Plan Education & Antibiotic Rescue Prescription",
    description:
      "Annual exacerbation action plan education and written documentation for every bronchiectasis patient — BTS-defined exacerbation recognition criteria (increased sputum volume/purulence, worsening dyspnoea, fatigue/malaise, haemoptysis, increased cough, fever >38°C); self-start antibiotic rescue prescription management — amoxicillin-clavulanate 625 mg PO TID × 14 days for non-P. aeruginosa patients; ciprofloxacin 750 mg PO BID × 14 days for confirmed P. aeruginosa — with indications for early GP contact vs. ED presentation; hospitalization threshold counseling for patients with BSI score ≥9 (severe) and frequent admissions; inhospital IV antibiotic regimen review with patient so expectations are set before admission; NTM exacerbation differentiation counseling (often insidious, no classic purulence) with MAC treatment initiation criteria per ATS/IDSA; and quarterly exacerbation frequency documentation (count, antibiotic courses, hospitalization days) as NP-maintained registry datapoint.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Baseline Assessment and Education Program Enrollment",
    description:
      "Complete NP-led baseline assessment: sputum microbiology history review, current airway-clearance device and technique, exacerbation frequency in prior 12 months, inhaled antibiotic adherence history, and macrolide eligibility (NTM culture, QTc, audiology). Enroll patient in structured airway-clearance device education. Issue written exacerbation action plan and self-start antibiotic rescue prescription. Document BSI score and baseline FEV1.",
  },
  {
    month: "Month 3–4",
    title: "Inhaled Antibiotic Adherence Counseling and First Cycle Review",
    description:
      "Review first 28-day tobramycin on/off cycle completion — device log download, patient-reported adherence, sputum P. aeruginosa quantitative culture, and MIC result. Counsel on missed-dose management and resistance risk. If macrolide initiated, confirm QTc recheck at 4–6 weeks, review LFTs, and reinforce 3×/week dosing schedule. Perform first oscillating PEP device competency observation and document technique corrections.",
  },
  {
    month: "Month 5–6",
    title: "Sputum NTM Surveillance and Macrolide Safety Review",
    description:
      "Coordinate quarterly sputum NTM culture result review with attending pulmonologist — flag new MAC isolates for macrolide hold discussion. Review azithromycin adherence calendar and counsel on consistent 3×/week dosing. Check LFTs (ALT/AST) for hepatotoxicity. Assess CASA-Q score for airway-clearance effectiveness and refer to physiotherapist if score deteriorates. Document exacerbation count since program start.",
  },
  {
    month: "Month 7–8",
    title: "Exacerbation Action Plan Reinforcement and Rescue Antibiotic Review",
    description:
      "Review exacerbation action plan at mid-year visit — confirm rescue antibiotic prescription currency and appropriateness based on most recent sputum antibiogram. Update self-start antibiotic if empirical regimen is now misaligned with resistance data. Reinforce hospitalization threshold criteria for BSI ≥9 patients. Audit antibiotic courses used to date and document exacerbation frequency vs. prior year baseline.",
  },
  {
    month: "Month 9–10",
    title: "Annual Audiology and ECG Coordination",
    description:
      "Coordinate and track completion of annual pure-tone audiometry (2–8 kHz) for all patients on azithromycin and prolonged inhaled tobramycin. Compare to prior-year audiogram and flag threshold shifts for ENT referral. Coordinate annual ECG with QTc measurement — document result and assess macrolide continuation safety. Review quarterly LFT trend and counsel on hepatotoxicity symptom recognition.",
  },
  {
    month: "Month 11–12",
    title: "Annual Program Review, Device Re-Assessment, and Referral Audit",
    description:
      "Complete annual airway-clearance device competency re-assessment — HFCWO technique, oscillating PEP breathing pattern, ACBT steps, and daily session duration compliance. Coordinate annual spirometry and HRCT surveillance with pulmonologist. Compile NP-maintained annual exacerbation registry data (count, hospitalization days, antibiotic courses). Refer eligible FEV1 <50% patients to pulmonary rehabilitation for next year. Update written exacerbation action plan with refreshed antibiogram-guided rescue antibiotic.",
  },
]

const kpis = [
  {
    metric: "Exacerbation Count",
    target: "≤1/year",
    description: "NP-documented exacerbation frequency for patients on macrolide prophylaxis and inhaled antibiotics",
  },
  {
    metric: "Antibiotic Adherence",
    target: "≥80%",
    description: "Inhaled tobramycin/colistimethate on-cycle completion rate per device log review at NP visits",
  },
  {
    metric: "QTc Monitoring",
    target: "100%",
    description: "Proportion of azithromycin patients with annual ECG tracking documented by NP",
  },
  {
    metric: "Annual Audiology",
    target: "100%",
    description: "Proportion of macrolide/inhaled aminoglycoside patients with annual audiogram completed",
  },
  {
    metric: "Device Competency",
    target: "Annual",
    description: "HFCWO and oscillating PEP re-assessment frequency per BTS airway-clearance guidelines",
  },
  {
    metric: "Action Plan Currency",
    target: "100%",
    description: "Patients with written exacerbation action plan and current rescue antibiotic prescription",
  },
]

const testimonial = {
  quote:
    "Bronchiectasis NP practice is built on consistency — quarterly sputum cultures, monthly macrolide safety labs, annual audiograms and ECGs, and making sure every patient can actually use their airway-clearance device correctly. Momenties maps every interval onto a calendar and flags what is overdue before the patient walks in. Our inhaled antibiotic adherence rates went up, our exacerbation hospitalization rate came down, and our audit documentation became effortless.",
  name: "Sharon W., AGPCNP-BC",
  title: "Pulmonary NP",
}

export default function BronchiectasisNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", color: "#f0ece3", fontFamily: "DM Sans, sans-serif" }}>
      <PageHero
        eyebrow="NP Resource — Bronchiectasis"
        title="Bronchiectasis Nurse Practitioner Scheduling Guide"
        subtitle="Scheduling infrastructure for NPs managing sputum culture trending, inhaled antibiotic adherence counseling, airway-clearance device training, and exacerbation action-plan education in bronchiectasis clinics."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem,3vw,2.2rem)",
              fontFamily: "Playfair Display,serif",
              marginBottom: 48,
              color: "#f0ece3",
            }}
          >
            Built for the Full Bronchiectasis NP Practice
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
                fontFamily: "Playfair Display,serif",
                marginBottom: 12,
                color: "#f0ece3",
              }}
            >
              12-Month Bronchiectasis NP Scheduling Timeline
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "#a0998e",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Every sputum culture interval, antibiotic adherence review, macrolide safety check, device competency
              re-assessment, and exacerbation action plan update — sequenced across 12 months.
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
                fontFamily: "Playfair Display,serif",
                marginBottom: 48,
                color: "#f0ece3",
              }}
            >
              The 6 KPIs That Define Bronchiectasis NP Excellence
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
                gap: 20,
              }}
            >
              {kpis.map((kpi) => (
                <div
                  key={kpi.metric}
                  style={{
                    background: "#0a0a0d",
                    border: "1px solid rgba(197,163,92,0.2)",
                    borderRadius: 12,
                    padding: 24,
                    textAlign: "center",
                  }}
                >
                  <p style={{ color: "#c5a35c", fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{kpi.metric}</p>
                  <p
                    style={{
                      color: "#f0ece3",
                      fontSize: "clamp(1.2rem,2.5vw,1.6rem)",
                      fontWeight: 700,
                      marginBottom: 4,
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    {kpi.target}
                  </p>
                  <p style={{ color: "rgba(240,236,227,0.65)", fontSize: 13 }}>{kpi.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ background: "#0e0e12", padding: "72px 24px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", color: "#c5a35c", marginBottom: 16, lineHeight: 1 }}>&ldquo;</div>
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
            <div style={{ fontWeight: 700, color: "#c5a35c", fontSize: "0.95rem" }}>{testimonial.name}</div>
            <div style={{ color: "#a0998e", fontSize: "0.88rem", marginTop: 4 }}>{testimonial.title}</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Streamline Your Bronchiectasis NP Practice?"
        subtext="Momenties consolidates sputum culture trending, inhaled antibiotic cycle adherence, azithromycin QTc and audiology monitoring, airway-clearance device competency re-assessments, and exacerbation action plan updates into one accountable calendar — so every interval is hit, every safety check is documented, and every patient is protected."
      />
    </main>
  )
}
