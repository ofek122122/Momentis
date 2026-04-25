import type { Metadata } from "next"
import { Stethoscope, TrendingUp, Zap, Heart } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "IPF Center Calendar — Antifibrotic Therapy & Transplant Scheduling | Momenties",
  description:
    "Comprehensive scheduling for idiopathic pulmonary fibrosis centers — pirfenidone and nintedanib antifibrotic monitoring, FVC decline tracking, acute exacerbation management, oxygen titration, and lung transplant evaluation programs.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Antifibrotic Therapy Monitoring",
    description:
      "Coordinated visit cadence for pirfenidone (Esbriet) target dose 2403 mg/day with 4-week titration and structured GI tolerance plus photosensitivity counseling, and nintedanib (Ofev) 150 mg BID with diarrhea management and LFT surveillance. Calendar tracks month 1, 3, 6 LFT panels (ALT/AST >3x ULN hold criteria), drug-drug interaction reviews (CYP1A2 for pirfenidone, P-gp for nintedanib), and 4-week ramp education touchpoints so every IPF patient hits steady-state on the recommended schedule.",
  },
  {
    icon: TrendingUp,
    title: "Pulmonary Function Decline Surveillance",
    description:
      "Auto-sequenced FVC % predicted spirometry every 3–6 months with explicit flagging for >10% absolute decline (clinically meaningful progression per ATS/ERS/JRS/ALAT). DLCO every 6 months, 6-minute walk test (6MWT) with continuous oximetry, and annual GAP score (Gender, Age, Physiology) recalculation. HRCT scheduling for new symptoms or accelerated decline. Every PFT lab visit, walk test corridor booking, and HRCT reading is linked back to the IPF dashboard.",
  },
  {
    icon: Zap,
    title: "Acute Exacerbation Management",
    description:
      "Rapid-response calendar lanes for suspected acute exacerbation of IPF (AE-IPF) — new or worsening dyspnea within 30 days, new bilateral GGO/consolidation on HRCT, exclusion of cardiac/infectious/PE etiology. Pre-built workflows for high-dose corticosteroid initiation, ICU coordination, infectious work-up (BAL, viral PCR, fungal markers), and antifibrotic continuation decisions. Post-exacerbation 30/90-day follow-ups are pre-scheduled at the time of discharge.",
  },
  {
    icon: Heart,
    title: "Transplant Evaluation & Palliative Integration",
    description:
      "Single vs. bilateral lung transplant evaluation tracks with FVC <50% predicted or DLCO <40% as referral triggers, plus 6MWT desaturation and pulmonary hypertension evaluation. Calendar coordinates transplant center visits, financial clearance, immunizations, and pre-listing rehab. In parallel, early palliative care integration is scheduled from diagnosis — dyspnea management, opioid titration for refractory dyspnea, advance care planning, and supplemental oxygen titration with home-O2 supplier coordination.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnosis Confirmation & Antifibrotic Initiation",
    description:
      "Confirm IPF diagnosis with multidisciplinary discussion (pulmonology, thoracic radiology, pathology) using HRCT UIP pattern criteria. Baseline FVC, DLCO, 6MWT with oximetry, GAP score, ECHO for pulmonary hypertension screening, and resting/exertional SpO2. Initiate pirfenidone with 4-week titration (267 mg TID week 1 → 534 mg TID week 2 → 801 mg TID week 3+) or nintedanib 150 mg BID. Patient education sessions on photosensitivity (SPF 50+, sun avoidance), GI tolerance strategies, and diarrhea management with loperamide.",
  },
  {
    month: "Month 3–4",
    title: "Tolerance Review & First Function Check",
    description:
      "Month 3 LFT panel for both antifibrotics with ALT/AST >3x ULN hold protocol, GI symptom and weight check, and dose-modification decision tree (dose hold, reduce, or rechallenge). First post-initiation FVC and 6MWT to establish individual decline trajectory. Reinforce photosensitivity counseling for pirfenidone patients entering peak-sun months. Begin pulmonary rehab referral and home oxygen assessment for resting SpO2 ≤88% or exertional desaturation.",
  },
  {
    month: "Month 5–6",
    title: "6-Month Pulmonary Function & GAP Recalculation",
    description:
      "6-month FVC % predicted, DLCO, and 6MWT with comparison to baseline. Flag >5% relative or >10% absolute FVC decline for accelerated review. Recalculate GAP score and reassess transplant candidacy if FVC <50% or DLCO <40%. Repeat HRCT only if unexplained decline or new symptoms. Confirm influenza, pneumococcal (PCV20 or PCV15+PPSV23), and COVID-19 vaccination status. Schedule annual ECHO if baseline showed elevated RVSP.",
  },
  {
    month: "Month 7–8",
    title: "Oxygen Titration & Pulmonary Rehab Mid-Cycle",
    description:
      "Re-titrate supplemental oxygen with rest, exertion, and nocturnal oximetry. Coordinate oxygen supplier delivery, portable concentrator authorization, and travel oxygen letters. Mid-cycle pulmonary rehab attendance audit and IPF-specific patient-reported outcome (K-BILD or SGRQ-I) collection. Screen for depression with PHQ-9 and anxiety with GAD-7; refer to behavioral health when scores cross thresholds.",
  },
  {
    month: "Month 9–10",
    title: "Transplant Evaluation Trigger Review",
    description:
      "Formal review of transplant referral criteria — FVC <80% predicted with progression, DLCO <40%, 6MWT distance <250 m or desaturation <88%, or any acute exacerbation. Initiate lung transplant center referral packet (HLA, virology, financial, psychosocial) for eligible candidates. For ineligible patients, escalate palliative care touchpoints, opioid titration for refractory dyspnea, and goals-of-care conversations.",
  },
  {
    month: "Month 11–12",
    title: "Annual Comprehensive Review & Care Plan Refresh",
    description:
      "Annual FVC, DLCO, 6MWT, ECHO, HRCT (if clinically indicated), and GAP score trend. Recompile the IPF dashboard — antifibrotic adherence, FVC slope, exacerbation count, hospitalization days, oxygen requirement progression, transplant status, and patient-reported dyspnea burden. Refresh advance directives, MOLST/POLST forms, and home health orders. Re-enroll patient in the IPF care calendar for the following 12 months with updated cadence.",
  },
]

const kpis = [
  {
    metric: "FVC Decline",
    target: "<10%/yr",
    description: "Annual FVC % predicted decline kept below the meaningful-progression threshold per ATS/ERS guidance.",
  },
  {
    metric: "Antifibrotic Adherence",
    target: ">85%",
    description: "Pirfenidone and nintedanib continuation rate at 12 months with proactive GI and LFT management.",
  },
  {
    metric: "AE-IPF 30-Day Follow-Up",
    target: "100%",
    description: "Every acute exacerbation hospitalization receives a scheduled 30-day post-discharge clinic visit.",
  },
  {
    metric: "Transplant Referral Lag",
    target: "<30 days",
    description: "From first FVC <50% or DLCO <40% trigger to documented transplant center referral.",
  },
  {
    metric: "Pulmonary Rehab Enrollment",
    target: ">80%",
    description: "Eligible IPF patients enrolled in a structured pulmonary rehabilitation program within 6 months of diagnosis.",
  },
  {
    metric: "Palliative Integration",
    target: ">90%",
    description: "Advanced IPF patients with documented palliative care touchpoint and advance care planning on file.",
  },
]

const testimonial = {
  quote:
    "&ldquo;Idiopathic pulmonary fibrosis is a calendar disease. Antifibrotic titration, LFT checks, FVC every three to six months, 6-minute walk tests, HRCTs, transplant windows, and palliative touchpoints all have to land on time — and patients deteriorate when they do not. Momenties gave our IPF center one canonical timeline per patient. Decline is detected earlier, transplant referrals leave on day one of eligibility, and palliative care is no longer an afterthought.&rdquo;",
  name: "Dr. G. Raghu",
  title: "IPF Program Director, Pulmonary Fibrosis Foundation Center",
}

export default function IdiopathicPulmonaryFibrosisCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Idiopathic Pulmonary Fibrosis Center Calendar"
        title="IPF Center — Antifibrotic Therapy, Monitoring & Transplant Calendar"
        subtitle="Comprehensive scheduling for IPF centers — pirfenidone and nintedanib antifibrotic monitoring, FVC decline tracking, acute exacerbation management, oxygen titration, and lung transplant evaluation programs."
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
            Four Pillars of an IPF Center Calendar
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
                <p style={{ fontSize: "0.92rem", color: "rgba(240,236,227,0.65)", lineHeight: 1.65 }}>
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
              The IPF Center Calendar — 12 Months at a Glance
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Antifibrotic titration, FVC surveillance, oxygen titration, transplant triggers, and palliative integration sequenced across the year.
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
              Six KPIs That Define IPF Program Excellence
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
                    borderRadius: 12,
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.78rem",
                      fontFamily: "JetBrains Mono, monospace",
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
                      fontSize: "clamp(1.4rem,2.5vw,1.8rem)",
                      fontWeight: 700,
                      color: "#c5a35c",
                      fontFamily: "Playfair Display, serif",
                      marginBottom: 10,
                    }}
                  >
                    {kpi.target}
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "rgba(240,236,227,0.65)", lineHeight: 1.55 }}>
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
        <section style={{ padding: "40px 24px 0" }}>
          <div
            style={{
              maxWidth: 820,
              margin: "0 auto",
              background: "#131318",
              border: "1px solid rgba(197,163,92,0.25)",
              borderRadius: 16,
              padding: "36px 40px",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1rem,2vw,1.18rem)",
                color: "#f0ece3",
                lineHeight: 1.7,
                fontStyle: "italic",
                marginBottom: 24,
              }}
            >
              &ldquo;Idiopathic pulmonary fibrosis is a calendar disease. Antifibrotic titration, LFT checks, FVC every three to six months, 6-minute walk tests, HRCTs, transplant windows, and palliative touchpoints all have to land on time — and patients deteriorate when they do not. Momenties gave our IPF center one canonical timeline per patient. Decline is detected earlier, transplant referrals leave on day one of eligibility, and palliative care is no longer an afterthought.&rdquo;
            </p>
            <div style={{ fontWeight: 700, color: "#c5a35c", fontSize: "0.95rem" }}>{testimonial.name}</div>
            <div style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.88rem", marginTop: 4 }}>
              {testimonial.title}
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
