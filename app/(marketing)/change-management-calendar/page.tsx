import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Change Management Calendar | Momenties",
  description: "Momenties helps change managers and transformation leads track stakeholder engagement cycles, resistance monitoring, communication cadences, adoption measurement, and change reinforcement in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Stakeholder Engagement & Sponsorship Alignment Cycles",
    description:
      "Change management success hinges on sustained sponsor visibility and active coalition building — Prosci ADKAR research shows sponsor commitment is the top predictor of change success. Sponsor check-ins (weekly during peak change periods, bi-weekly during stabilization), change agent network activation (monthly touchpoints), and resistant stakeholder 1:1s require structured cadencing to prevent coalition drift. Change Impact Assessment (CIA) updates should occur at project phase gates — discovery, design, build, test, and go-live — capturing scope changes that shift stakeholder impact profiles. Steering committee change readiness presentations require 4-6 weeks of pre-work: survey collection, focus group facilitation, and impact scoring. Momenties tracks every engagement touchpoint.",
  },
  {
    icon: RefreshCw,
    title: "Communication Campaign Cadence & Channel Governance",
    description:
      "Change communication follows the 7x7 rule — stakeholders need to hear messages 7 times through 7 different channels before adoption begins. Communication plan calendar requires sequencing: awareness communications (3-6 months before go-live), desire-building town halls and manager briefing decks (2-3 months prior), knowledge-transfer job aids and training invitations (6-8 weeks prior), and post-go-live reinforcement communications (days 1, 7, 30, 60, 90). Manager cascade timing — providing people leaders with talk tracks and FAQ updates before all-hands communications — requires 48-72 hours lead time. Quarterly communication effectiveness audits (message retention surveys, channel preference data, two-way feedback loops) calibrate the plan. Momenties schedules every send and feedback cycle.",
  },
  {
    icon: TrendingUp,
    title: "Training Readiness, Adoption Milestones & Go-Live Preparation",
    description:
      "Training readiness assessments (4-6 weeks pre-go-live) — skill gap analysis, learning pathway design, and training registration campaigns — require coordination with L&D, IT environment provisioning, and business champions. Training completion tracking and at-risk learner outreach (targeting <80% completion cohorts) must occur 2 weeks before go-live to allow remediation. Adoption milestone reviews — Day 1 adoption rate, Day 30 proficiency assessment, and Day 90 sustained use confirmation — require pre-built survey instruments and defined measurement baselines. Hypercare period support (first 30-90 days post-go-live) with daily stand-ups, issue escalation SLAs, and super-user activation requires a structured wind-down schedule. Momenties manages every readiness checkpoint.",
  },
  {
    icon: BarChart3,
    title: "Change Reinforcement, Benefits Realization & Lessons Learned",
    description:
      "Change reinforcement planning — recognizing early adopters, celebrating adoption milestones, and addressing performance dips — follows a 90-day post-go-live reinforcement calendar. Benefits realization tracking connects change adoption metrics to business outcomes: if process adoption targets are met but benefits are not materializing, root cause analysis and plan adjustment cycles are triggered. Quarterly OCM retrospectives capture lessons across the change portfolio, updating organizational change capability playbooks. Change fatigue monitoring — recurring pulse surveys measuring change load perception across teams — informs sequencing decisions for the next transformation wave. Annual change portfolio review aligns OCM resource capacity with the incoming project pipeline. Momenties consolidates the full lifecycle.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Change Portfolio Assessment & OCM Capacity Planning",
    description: "Inventory active and planned changes across the organization. Run change saturation assessment — identify teams experiencing high change load. Align OCM staffing and budget to the portfolio. Establish change management standards and ADKAR measurement baselines.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Stakeholder Mapping & Sponsor Mobilization",
    description: "Complete stakeholder impact assessments for all active initiatives. Identify and activate sponsors, change champions, and resistance leaders. Launch change agent network. Deliver sponsor effectiveness coaching and active sponsorship roadmap sessions.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Communication Launch & Awareness Campaigns",
    description: "Launch awareness communications across all channels. Deliver town halls and manager briefing sessions. Run communication effectiveness surveys. Begin resistance identification and targeted engagement. Refine messaging based on feedback loop data.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Training Readiness & Knowledge Transfer",
    description: "Complete training needs assessments and finalize learning pathways. Launch training registration campaigns. Track completion and provide at-risk learner coaching. Finalize job aids, reference guides, and quick-start resources. Certify super-users and change champions.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Go-Live Activation & Hypercare Support",
    description: "Execute go-live communications and day-1 adoption campaigns. Stand up hypercare support model — daily stand-ups, escalation paths, super-user activation. Track adoption metrics weekly. Conduct 30-day adoption reviews and plan reinforcement interventions.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Adoption Confirmation & Benefits Realization Review",
    description: "Complete 90-day adoption assessments. Conduct benefits realization reviews — connect adoption data to business outcome tracking. Run annual OCM retrospectives. Document lessons learned and update organizational change playbooks. Plan OCM capacity for next year.",
  },
]

const kpis = [
  {
    metric: "Sponsor Effectiveness Score ≥ 80%",
    description: "Sponsor activity index (visibility, advocacy, coalition actions) assessed quarterly",
  },
  {
    metric: "Day-30 Adoption Rate ≥ 70%",
    description: "Active system use or process compliance measured 30 days post go-live",
  },
  {
    metric: "Training Completion ≥ 95% Pre-Go-Live",
    description: "All role-required training completed with passing assessments before activation",
  },
  {
    metric: "Communication Reach ≥ 90% Per Wave",
    description: "Message exposure confirmed via open rates, attendance, and awareness survey recall",
  },
  {
    metric: "Change Resistance Index ≤ 15%",
    description: "Percentage of stakeholders in active resistance, monitored via pulse surveys",
  },
  {
    metric: "Benefits Realization Variance ≤ 10%",
    description: "Actual vs. projected business outcomes at 6-month post-go-live review",
  },
]

const testimonial = {
  quote:
    "We were running six concurrent transformations — ERP migration, operating model redesign, two product platform sunsets, workforce restructuring, and a culture program — each with its own sponsor calendar, communication wave, training window, and adoption milestone. Momenties gave us one view. We hit 84% Day-30 adoption on our ERP go-live, the highest in company history.",
  name: "Taiwo A.",
  title: "VP, Enterprise Change Management & Organizational Effectiveness",
}

export default function ChangeManagementCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Change Management Calendar"
        title="Stakeholder Engagement. Communication Waves. Adoption Milestones. One Calendar."
        subtitle="Momenties tracks change management communication cadences, sponsor activation touchpoints, training readiness checkpoints, adoption measurement cycles, and benefits realization reviews so transformation leaders drive change without letting a single engagement window slip."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Four Change Management Pillars Momenties Tracks
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.title}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <p.icon size={28} color="#c5a35c" style={{ marginBottom: 16 }} />
                <h3 style={{ color: "#f0ece3", fontSize: "1.05rem", fontWeight: 600, marginBottom: 12 }}>
                  {p.title}
                </h3>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.92rem", lineHeight: 1.65 }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* 12-Month Timeline */}
      <Reveal>
        <section style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            12-Month Change Management Calendar
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {timeline.map((t) => (
              <div
                key={t.phase}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 20,
                  alignItems: "start",
                }}
              >
                <div>
                  <p style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.85rem", marginBottom: 4 }}>
                    {t.phase}
                  </p>
                  <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.95rem" }}>{t.title}</p>
                </div>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Change Management KPIs Momenties Keeps on Track
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {kpis.map((k) => (
              <div
                key={k.metric}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.95rem", marginBottom: 8 }}>
                  {k.metric}
                </p>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                  {k.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 0" }}>
          <blockquote
            style={{
              background: "#131318",
              border: "1px solid rgba(197,163,92,0.25)",
              borderRadius: 16,
              padding: "36px 40px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "rgba(240,236,227,0.85)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                fontStyle: "italic",
                marginBottom: 24,
              }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p style={{ color: "#c5a35c", fontWeight: 600 }}>{testimonial.name}</p>
            <p style={{ color: "rgba(240,236,227,0.5)", fontSize: "0.88rem" }}>{testimonial.title}</p>
          </blockquote>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
