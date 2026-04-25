import type { Metadata } from "next"
import { UserCheck, Workflow, Heart, TrendingUp } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "IPF Nurse Practitioners — Scheduling for Progressive Fibrotic Lung Disease | Momenties",
  description:
    "Purpose-built for NPs coordinating IPF care — from antifibrotic dose management and GI side effect counseling to pulmonary function tracking, oxygen titration, transplant referrals, and palliative care integration.",
}

const pillars = [
  {
    icon: UserCheck,
    title: "Antifibrotic Adherence & Side Effect Management",
    description:
      "Calendar lanes built around the pirfenidone 4-week ramp (267 mg TID → 534 mg TID → 801 mg TID) and nintedanib 150 mg BID — with automated photosensitivity counseling reminders, SPF 50+ refills, GI tolerance check-ins, anti-emetic strategies, and structured nintedanib diarrhea management using loperamide stepwise dosing. Every dose hold, reduction, and rechallenge follows a documented decision tree so NPs spend visit time on patients, not protocol lookup.",
  },
  {
    icon: TrendingUp,
    title: "Pulmonary Function & Symptom Monitoring",
    description:
      "Spirometry every 3–6 months with FVC % predicted trending, DLCO every 6 months, and 6-minute walk test (6MWT) with continuous pulse oximetry pre-booked into the patient timeline. Monthly IPF-SGRQ or K-BILD patient-reported outcome questionnaires sent automatically with NP review tasks. PHQ-9 and GAD-7 depression and anxiety screening built into every other visit, with behavioral health referral templates ready to fire.",
  },
  {
    icon: Workflow,
    title: "Oxygen Titration & Pulmonary Rehab",
    description:
      "Resting, exertional, and nocturnal oximetry titration scheduled at every clinical inflection point. The calendar coordinates oxygen supplier deliveries, portable concentrator authorizations, travel oxygen letters, and home assessments. Pulmonary rehab referrals, attendance audits, and re-enrollment milestones are all tracked. NPs can see at a glance which IPF patients are due for re-titration or have fallen out of pulmonary rehab.",
  },
  {
    icon: Heart,
    title: "Transplant Referral & Palliative Care",
    description:
      "Automated triggers for lung transplant referral when FVC drops below 80% with progression, DLCO below 40%, or 6MWT desaturation occurs — with pre-built referral packet templates and follow-up cadence. In parallel, early palliative care referral is scheduled from diagnosis, not at end-of-life. Refractory dyspnea opioid titration plans, advance care planning visits, MOLST/POLST completion, and PFF Helpline patient referrals are all on the timeline.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnosis Onboarding & Antifibrotic Education",
    description:
      "NP-led IPF onboarding visit — confirm multidisciplinary diagnosis, baseline FVC, DLCO, 6MWT with oximetry, and resting/exertional SpO2. Patient and caregiver education on disease trajectory, antifibrotic options, and shared decision-making between pirfenidone and nintedanib. Initiate the chosen 4-week titration with detailed photosensitivity counseling (pirfenidone) or diarrhea management plan with loperamide (nintedanib). Vaccination audit (influenza, pneumococcal PCV20 or PCV15+PPSV23, COVID-19, RSV, Tdap).",
  },
  {
    month: "Month 3–4",
    title: "Tolerance Visit & First Function Check",
    description:
      "Month 3 LFT panel with hold criteria for ALT/AST >3x ULN, GI symptom review, weight check, and dose-titration confirmation. First post-initiation FVC and 6MWT to establish individual decline trajectory. NP-driven side-effect counseling refresh, especially photosensitivity heading into peak-sun months. Initial pulmonary rehab referral and home oxygen assessment for resting SpO2 ≤88% or exertional desaturation.",
  },
  {
    month: "Month 5–6",
    title: "6-Month Function & Quality-of-Life Review",
    description:
      "6-month FVC, DLCO, and 6MWT compared to baseline. Trigger accelerated review for >5% relative or >10% absolute FVC decline. IPF-SGRQ or K-BILD questionnaire administration and review. PHQ-9 and GAD-7 screening with referral as needed. Patient education on PFF Care Center Network resources and PFF Helpline for peer support. Reassess transplant candidacy if any function trigger crosses threshold.",
  },
  {
    month: "Month 7–8",
    title: "Oxygen Titration & Rehab Mid-Cycle",
    description:
      "Resting, exertional, and nocturnal pulse oximetry titration. Coordinate with home oxygen supplier on deliveries, portable concentrator setup, and travel oxygen letters. Mid-cycle pulmonary rehab attendance audit. Caregiver visit to review activity pacing, energy conservation, and dyspnea coping strategies. Reinforce smoking cessation if applicable and review GERD management given its role in IPF progression.",
  },
  {
    month: "Month 9–10",
    title: "Transplant & Palliative Decision Points",
    description:
      "Formal NP review of lung transplant referral criteria — FVC <80% with progression, DLCO <40%, 6MWT distance <250 m or desaturation <88%, or any acute exacerbation. Initiate referral packet (HLA, virology, financial, psychosocial) for eligible candidates. For ineligible patients, escalate palliative care touchpoints, opioid titration for refractory dyspnea, and goals-of-care conversations. Re-screen with PHQ-9 and refer to behavioral health when scores cross thresholds.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review & Care Plan Refresh",
    description:
      "Annual FVC, DLCO, 6MWT, ECHO if RVSP elevated, and HRCT when clinically indicated. NP-led care plan refresh — antifibrotic adherence, FVC slope, exacerbation count, hospitalization days, oxygen requirements, transplant status, and patient-reported dyspnea burden. Refresh advance directives and MOLST/POLST. Re-enroll patient in the IPF NP calendar for the next 12 months with cadence adjusted to disease trajectory.",
  },
]

const kpis = [
  {
    metric: "Antifibrotic Continuation",
    target: ">85%",
    description: "Pirfenidone or nintedanib continuation at 12 months with proactive NP-driven side-effect management.",
  },
  {
    metric: "FVC Slope",
    target: "<10%/yr",
    description: "Annual FVC % predicted decline kept below the meaningful-progression threshold per ATS/ERS guidance.",
  },
  {
    metric: "Pulmonary Rehab Enrollment",
    target: ">80%",
    description: "Eligible IPF patients enrolled in a structured pulmonary rehabilitation program within 6 months of diagnosis.",
  },
  {
    metric: "PHQ-9 Screening",
    target: "100%",
    description: "Every IPF patient screened for depression at least every 6 months with referral pathway when indicated.",
  },
  {
    metric: "Transplant Referral Lag",
    target: "<30 days",
    description: "From first FVC <50% or DLCO <40% trigger to documented lung transplant center referral.",
  },
  {
    metric: "Palliative Touchpoint",
    target: ">90%",
    description: "Advanced IPF patients with documented palliative care visit and advance care planning on file.",
  },
]

const testimonial = {
  quote:
    "&ldquo;NPs are the connective tissue of an IPF program. We titrate pirfenidone and nintedanib, manage diarrhea and photosensitivity, run the FVC and 6-minute walk cadence, coordinate oxygen suppliers, and quietly hold the line on palliative care conversations. Momenties is the first calendar that actually understands that work. Antifibrotic ramps, LFT holds, transplant triggers, and palliative referrals all live in one place — so I can spend more of my visit time with the patient and less time chasing labs.&rdquo;",
  name: "Karen S., AGACNP-BC",
  title: "Pulmonary NP, IPF and Interstitial Lung Disease Program",
}

export default function IdiopathicPulmonaryFibrosisNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="IPF Nurse Practitioners"
        title="IPF Nurse Practitioners — Scheduling for Progressive Fibrotic Lung Disease"
        subtitle="Purpose-built for NPs coordinating IPF care — from antifibrotic dose management and GI side effect counseling to pulmonary function tracking, oxygen titration, transplant referrals, and palliative care integration."
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
            Four Pillars of an IPF NP Calendar
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
              The IPF NP Calendar — 12 Months at a Glance
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Antifibrotic titration, function checks, oxygen titration, transplant referral triggers, and palliative integration sequenced for the NP workflow.
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
              Six KPIs That Define IPF NP Excellence
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
              &ldquo;NPs are the connective tissue of an IPF program. We titrate pirfenidone and nintedanib, manage diarrhea and photosensitivity, run the FVC and 6-minute walk cadence, coordinate oxygen suppliers, and quietly hold the line on palliative care conversations. Momenties is the first calendar that actually understands that work. Antifibrotic ramps, LFT holds, transplant triggers, and palliative referrals all live in one place — so I can spend more of my visit time with the patient and less time chasing labs.&rdquo;
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
