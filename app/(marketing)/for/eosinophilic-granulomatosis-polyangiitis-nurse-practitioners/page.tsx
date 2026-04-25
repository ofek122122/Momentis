import type { Metadata } from "next"
import { Zap, BarChart3, Sliders, BookOpen } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "EGPA Nurse Practitioners — Eosinophilic Vasculitis Scheduling | Momenties",
  description:
    "Designed for NPs managing EGPA patients — mepolizumab injection coordination, eosinophil monitoring, ANCA trend communication, steroid taper management, cardiac surveillance, and multidisciplinary vasculitis care in one accountable calendar.",
}

const pillars = [
  {
    icon: Zap,
    title: "Mepolizumab Coordination & Scheduling",
    description:
      "EGPA NPs anchor every mepolizumab 300 mg SC Q4-week cycle — coordinating prior authorization, injection-room slots, lot tracking, anaphylaxis precautions, and patient self-administration teaching where appropriate. The calendar pre-stages each dose against the patient's BVAS rescore, ANCA window, and prednisone taper milestone so the IL-5 antagonist never drifts off cadence and steroid-sparing benefit is fully captured.",
  },
  {
    icon: BarChart3,
    title: "Eosinophil & Organ Monitoring",
    description:
      "NPs track eosinophil count trajectory, MPO and PR3-ANCA trends, IgE, tryptase, and inflammatory markers between visits. The calendar surfaces rebound patterns and ANCA seroconversion early, opens cardiology, nephrology, pulmonology, and ENT co-management slots when organ involvement emerges, and ties each lab cycle to the next mepolizumab dose so review, communication with the vasculitis attending, and patient outreach happen in one structured workflow.",
  },
  {
    icon: Sliders,
    title: "Steroid Management & Adrenal Monitoring",
    description:
      "Glucocorticoid management is the daily reality of EGPA NP practice. The calendar models personalized prednisone tapers, books adrenal stimulation testing as physiologic dosing approaches, schedules bone density and ophthalmology surveillance, and prompts patient teaching on adrenal insufficiency, sick-day rules, and steroid stress dosing. Every taper step is paired with the eosinophil and BVAS context that justifies it.",
  },
  {
    icon: BookOpen,
    title: "Relapse Recognition & Patient Education",
    description:
      "EGPA relapse can present as eosinophil rebound, new neuropathy, sinus flare, asthma deterioration, or cardiac symptoms. The calendar enforces structured patient teaching on relapse warning signs, asthma control review, EUVAS and rare-disease registry referrals, and rapid escalation to multidisciplinary vasculitis review — so the NP-led education and surveillance loop catches relapse before organ-threatening disease emerges.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Onboarding, Baseline Teaching & First Injection",
    description:
      "Complete intake, review tissue and ANCA results, document baseline eosinophils, BVAS, and FFS, deliver structured EGPA disease education, coordinate the first mepolizumab 300 mg SC injection, set anaphylaxis observation expectations, and align the patient on prednisone taper goals and lab cadence.",
  },
  {
    month: "Month 3–4",
    title: "Cycle Stabilization & ANCA Window",
    description:
      "Confirm mepolizumab Q4-week rhythm, draw first follow-up eosinophil count and ANCA, monitor for injection-site reactions, reinforce asthma controller adherence, and coordinate cardiology or nephrology referrals if early organ signals emerged at induction.",
  },
  {
    month: "Month 5–6",
    title: "Remission Assessment & Steroid Acceleration",
    description:
      "Repeat BVAS, eosinophils, and ANCA. With remission documented, accelerate prednisone taper toward physiologic dosing, schedule adrenal stimulation testing, deliver adrenal insufficiency education, and confirm maintenance immunosuppression (azathioprine or MMF) is dosed and tolerated for cyclophosphamide induction graduates.",
  },
  {
    month: "Month 7–8",
    title: "Organ Surveillance & Symptom Review",
    description:
      "Coordinate repeat HRCT and PFTs, urinalysis, ENT sinus endoscopy, neuropathy reassessment, and ophthalmology screening. Review asthma control test, sinus symptom diary, and neuropathy questionnaires with the patient, escalating any new findings to the vasculitis attending the same week.",
  },
  {
    month: "Month 9–10",
    title: "Relapse Vigilance & Education Refresh",
    description:
      "Quarterly ANCA and eosinophils, asthma and sinus review, cardiac symptom screen, and refreshed patient teaching on relapse warning signs. Any rebound or seroconversion immediately opens an urgent multidisciplinary review slot and a same-week NP touchpoint with the patient.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review, Registry Referral & Year-Two Plan",
    description:
      "Lead the annual review workflow — repeat full labs, BVAS, VDI, cardiac MRI for prior endocarditis, mepolizumab continuation decision support, EUVAS registry data preparation, and a co-built year-two plan covering biologic continuation, taper targets, and surveillance cadence.",
  },
]

const kpis = [
  {
    metric: "Mepolizumab",
    target: "≥95% on-time",
    description: "NP-coordinated Q4-week injection adherence across the EGPA panel.",
  },
  {
    metric: "ANCA Cadence",
    target: "Q3–6 months",
    description: "MPO/PR3-ANCA surveillance completion driven by NP scheduling.",
  },
  {
    metric: "Eosinophils",
    target: "<1,000 cells/μL",
    description: "On-therapy suppression maintained between NP-led visits.",
  },
  {
    metric: "Steroid Taper",
    target: "≤7.5 mg by month 12",
    description: "Prednisone reduction milestone reached for the maintenance cohort.",
  },
  {
    metric: "Adrenal Testing",
    target: "100% at taper",
    description: "ACTH stimulation testing completed before physiologic dosing.",
  },
  {
    metric: "Education",
    target: "100% relapse review",
    description: "Structured relapse-recognition teaching documented every quarter.",
  },
]

const testimonial = {
  quote:
    "EGPA patients live between rheumatology, pulmonology, cardiology, and ENT — and the NP holds it all together. Momenties lets me run mepolizumab cycles, eosinophil and ANCA windows, steroid tapers, adrenal testing, and relapse education from a single calendar I can actually trust. Nothing slips, and patients feel the difference.",
  name: "Sarah K., AGPCNP-BC",
  title: "Vasculitis NP, Eosinophil Disease Program",
}

export default function EGPANursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="EGPA Nurse Practitioners"
        title="EGPA Nurse Practitioners — Scheduling for a Rare Eosinophilic Vasculitis"
        subtitle="Designed for NPs managing EGPA patients — from mepolizumab injection coordination and eosinophil monitoring to steroid taper management, cardiac surveillance, and multidisciplinary vasculitis care."
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
            Four Pillars of EGPA NP Scheduling
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
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
              The 12-Month EGPA NP Cadence
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 48,
                fontSize: "0.97rem",
              }}
            >
              Mepolizumab cycles, ANCA windows, steroid tapers, adrenal testing, and structured patient education — all sequenced for the NP-led EGPA workflow.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {timeline.map((item) => (
                <div
                  key={item.month}
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
                    {item.month}
                  </div>
                  <div>
                    <div
                      style={{
                        color: "#f0ece3",
                        fontWeight: 600,
                        fontSize: "0.97rem",
                        marginBottom: 6,
                      }}
                    >
                      {item.title}
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
              EGPA NP KPIs the Calendar Drives
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
                      color: "#c5a35c",
                      fontFamily: "Playfair Display, serif",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      marginBottom: 4,
                    }}
                  >
                    {kpi.target}
                  </div>
                  <div
                    style={{
                      color: "#f0ece3",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      marginBottom: 8,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <p
                    style={{
                      color: "rgba(240,236,227,0.65)",
                      fontSize: "0.85rem",
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {kpi.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ padding: "40px 24px 0" }}>
          <div style={{ maxWidth: 880, margin: "0 auto" }}>
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
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  margin: 0,
                  marginBottom: 20,
                }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div style={{ color: "#c5a35c", fontWeight: 700, fontSize: "0.95rem" }}>
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
