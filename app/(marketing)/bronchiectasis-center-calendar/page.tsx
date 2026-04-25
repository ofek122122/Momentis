import type { Metadata } from "next"
import { Stethoscope, Database, Shield, ClipboardList } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Bronchiectasis Center Calendar Management | Momenties",
  description:
    "AI-powered scheduling for bronchiectasis centers coordinating sputum culture/sensitivity, airway-clearance device training, inhaled tobramycin/azithromycin macrolide prophylaxis cycles, high-resolution CT surveillance, and exacerbation hospitalization prevention protocols.",
}

const pillars = [
  {
    icon: Database,
    title: "Annual Sputum Microbiology & HRCT Surveillance",
    description:
      "Annual sputum microbiology with targeted culture for Pseudomonas aeruginosa, non-tuberculous mycobacteria (NTM — MAC, M. abscessus), Haemophilus influenzae, and Aspergillus; high-resolution CT (HRCT) chest surveillance annually or per exacerbation-frequency protocol to track bronchiectasis extent (Reiff score, BSI — Bronchiectasis Severity Index), new lobe involvement, and mucus plugging progression; NTM workup with three separate AFB smear/culture submissions before initiating ATS/IDSA-directed macrolide-based regimen; biennial PFTs (FEV1, FVC, FEV1/FVC) with 6-minute walk test for functional decline tracking; and annual serum immunoglobulins (IgG, IgA, IgM), CVID screen, and alpha-1 antitrypsin for underlying etiology documentation.",
  },
  {
    icon: Shield,
    title: "Inhaled Tobramycin On/Off Cycles & Adherence Monitoring",
    description:
      "Inhaled tobramycin (TOBI Podhaler 112 mg BID) 28-day on/28-day off cycle scheduling with monthly sputum P. aeruginosa quantitative culture and tobramycin MIC tracking to detect emerging resistance (MIC ≥16 μg/mL triggers switch to inhaled aztreonam lysinate or colistimethate sodium); inhaled colistimethate sodium (Colobreathe 1,662,500 IU BID) continuous-cycle compliance monitoring for chronic P. aeruginosa; biannual audiogram and renal panel for patients with prolonged inhaled aminoglycoside exposure; monthly patient-reported adherence documentation using nebulizer device logs or dry-powder inhaler dose counters; quarterly spirometry (FEV1 % predicted) to correlate cycle adherence with lung function stability; and semiannual antibiogram review to guide empirical IV therapy selection for exacerbation hospitalizations.",
  },
  {
    icon: ClipboardList,
    title: "Azithromycin 3×/Week Macrolide Prophylaxis with QTc/Hearing Monitoring",
    description:
      "Azithromycin 500 mg PO three times weekly (Monday/Wednesday/Friday) long-term macrolide prophylaxis initiation per BTS/ERS guidelines for ≥3 exacerbations/year or ≥2 hospitalizations; mandatory baseline ECG with QTc measurement (contraindicated if QTc >450 ms for males, >470 ms for females) and annual ECG monitoring per AHA guidance on macrolide-associated torsades de pointes; annual audiogram with pure-tone audiometry at 2, 4, 6, 8 kHz and speech discrimination testing for macrolide ototoxicity surveillance; monthly sputum NTM culture — azithromycin must not be initiated as monotherapy if NTM MAC present (drives resistance); quarterly liver function tests (ALT, AST) for hepatotoxicity monitoring; and semiannual macrolide resistance surveillance with azithromycin MIC testing on H. influenzae and P. aeruginosa isolates.",
  },
  {
    icon: Stethoscope,
    title: "Airway-Clearance Device Training & Physiotherapy",
    description:
      "High-frequency chest wall oscillation (HFCWO — The Vest/SmartVest) device training with quarterly competency re-assessment using standardized physiotherapy checklist; flutter valve (RC-Cornet) and acapella (green/blue vibratory PEP) oscillating positive expiratory pressure device self-use training with correct frequency (15 Hz), resistance setting, and breathing technique documentation; autogenic drainage (AD) and active cycle of breathing techniques (ACBT) two-session annual refresher with certified respiratory physiotherapist; daily airway clearance duration compliance monitoring (minimum 20 min BID recommended per BTS guidelines) using device data downloads or patient diary; annual physiotherapy reassessment with secretion viscosity scoring, 24-hour sputum volume measurement, and CASA-Q (Cough and Sputum Assessment Questionnaire) administration; and quarterly pulmonary rehabilitation enrolment audit for FEV1 <50% predicted patients.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Baseline Microbiology, HRCT, and Macrolide Eligibility",
    description:
      "Obtain baseline sputum microbiology (three separate cultures over 1–2 months) for P. aeruginosa, NTM, and fungal pathogens before any inhaled antibiotic or macrolide initiation. Order baseline HRCT chest (Reiff score and BSI calculation), spirometry, serum immunoglobulins, and alpha-1 antitrypsin. Perform baseline ECG for QTc measurement and audiology assessment before azithromycin prophylaxis consideration. Enroll in airway-clearance device training program and document initial physiotherapy assessment.",
  },
  {
    month: "Month 3–4",
    title: "Inhaled Antibiotic Cycle Launch and Macrolide Initiation",
    description:
      "Initiate inhaled tobramycin 28-day on/28-day off cycle if confirmed chronic P. aeruginosa (two separate positive cultures ≥3 months apart). Initiate azithromycin 500 mg PO 3×/week if ≥3 exacerbations in prior 12 months, NTM culture negative, QTc acceptable, and LFTs normal. Complete first HFCWO or oscillating PEP device competency check with respiratory physiotherapist. Document adherence via device logs and patient diary at 30 days.",
  },
  {
    month: "Month 5–6",
    title: "First On/Off Cycle Review and Sputum Response Assessment",
    description:
      "Complete first full 28-day on/28-day off tobramycin cycle review — quantitative P. aeruginosa sputum culture, tobramycin MIC, and FEV1 % predicted compared to baseline. Review azithromycin adherence, first post-initiation ECG (QTc recheck at 4–6 weeks), and sputum NTM culture to confirm MAC absence. Assess airway-clearance technique adherence using CASA-Q score. Audit inhaled colistimethate patients for continuous-cycle compliance.",
  },
  {
    month: "Month 7–8",
    title: "Exacerbation Prevention Protocol Review and Rescue Planning",
    description:
      "Review exacerbation frequency since program initiation — document BTS-defined exacerbations (increased sputum volume/purulence, worsening dyspnoea, systemic symptoms). Update antibiotic rescue prescription (amoxicillin-clavulanate or ciprofloxacin) for self-start action plan. Perform mid-year sputum antibiogram review to validate empirical IV regimen. Review hospitalization prevention protocol compliance and bronchiectasis specialist follow-up scheduling.",
  },
  {
    month: "Month 9–10",
    title: "Annual Audiology, ECG, and Macrolide Safety Review",
    description:
      "Complete annual audiology assessment (pure-tone audiometry 2–8 kHz) for all patients on azithromycin 3×/week and patients with prolonged inhaled tobramycin exposure. Perform annual ECG with QTc measurement for macrolide continuation decision. Review LFTs for azithromycin hepatotoxicity. Audit macrolide resistance data on H. influenzae and P. aeruginosa isolates from quarterly sputum cultures. Reassess azithromycin continuation vs. cessation based on tolerability and exacerbation rate.",
  },
  {
    month: "Month 11–12",
    title: "Annual HRCT, PFTs, Physiotherapy Re-Assessment, and Program Report",
    description:
      "Complete annual HRCT chest (Reiff score, new lobe involvement, mucus plugging) and full PFTs (FEV1, FVC, DLCO, 6MWT) for all patients. Perform annual physiotherapy re-assessment — 24-hour sputum volume, secretion clearance scoring, CASA-Q, and HFCWO/acapella device competency re-check. Compile annual bronchiectasis center program report: exacerbation rate, hospitalization prevention rate, inhaled antibiotic adherence, macrolide tolerability, and FEV1 trajectory. Submit BSI and Reiff score updates to registry.",
  },
]

const kpis = [
  {
    metric: "Exacerbation Rate",
    target: "≤1/year",
    description: "Target for patients on macrolide prophylaxis and inhaled antibiotics per BTS guidelines",
  },
  {
    metric: "Inhaled Antibiotic Adherence",
    target: "≥80%",
    description: "TOBI/colistimethate on-cycle completion rate documented by device log review",
  },
  {
    metric: "Macrolide QTc Safety",
    target: "100%",
    description: "Proportion of azithromycin patients with annual ECG monitoring documented",
  },
  {
    metric: "Sputum Culture Frequency",
    target: "Quarterly",
    description: "P. aeruginosa quantitative cultures with MIC tracking during inhaled antibiotic cycles",
  },
  {
    metric: "Hospitalization Prevention",
    target: "≥70% reduction",
    description: "Reduction in bronchiectasis exacerbation hospitalizations vs. pre-program baseline",
  },
  {
    metric: "Airway Clearance Compliance",
    target: "≥85%",
    description: "Proportion of patients with documented ≥20 min BID airway-clearance technique adherence",
  },
]

const testimonial = {
  quote:
    "Managing a bronchiectasis center means tracking quarterly P. aeruginosa sputum cultures and MICs, 28-day inhaled tobramycin on/off cycles, azithromycin 3×/week QTc and audiology monitoring, annual HRCT surveillance, and individualized airway-clearance device training schedules across a large, heterogeneous patient panel. Momenties brought every protocol interval and safety check into one calendar. Our exacerbation-related hospitalization rate dropped by 72% in the first year.",
  name: "Dr. M. Loebinger",
  title: "Bronchiectasis Research Program",
}

export default function BronchiectasisCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", color: "#f0ece3", fontFamily: "DM Sans, sans-serif" }}>
      <PageHero
        eyebrow="Bronchiectasis Treatment Center"
        title="Bronchiectasis Center Calendar Management"
        subtitle="AI-powered scheduling for bronchiectasis centers coordinating sputum culture/sensitivity, airway-clearance device training, inhaled tobramycin/azithromycin macrolide prophylaxis cycles, high-resolution CT surveillance, and exacerbation hospitalization prevention protocols."
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
            Built for the Full Bronchiectasis Center Compliance Lifecycle
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
              12-Month Bronchiectasis Center Implementation Timeline
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "#a0998e",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Every inhaled antibiotic cycle, sputum culture interval, macrolide safety check, HRCT surveillance
              window, and airway-clearance reassessment — sequenced across 12 months.
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
                fontFamily: "Playfair Display, serif",
                marginBottom: 48,
                color: "#f0ece3",
              }}
            >
              The 6 KPIs That Define Bronchiectasis Program Excellence
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
        headline="Ready to Reduce Bronchiectasis Exacerbation Hospitalizations by 70%?"
        subtext="Join bronchiectasis centers using Momenties to automate every inhaled antibiotic cycle, sputum culture interval, macrolide safety check, HRCT surveillance window, and airway-clearance reassessment. Free to start."
      />
    </main>
  )
}
