import type { Metadata } from "next"
import { Users, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Team Building Calendar | Momenties",
  description: "Build a systematic team building calendar — structured team rituals, psychological safety reviews, cross-functional collaboration programs, manager development cycles, and team health measurement cadences that improve retention, velocity, and belonging.",
}

const pillars = [
  {
    icon: Users,
    title: "Structured Team Rituals & Connection Cadence Calendar",
    description:
      "Team cohesion without intentional rituals decays in remote and hybrid environments — informal connection that happens naturally in offices requires deliberate scheduling when the team is distributed. Momenties schedules weekly team standups with rotating facilitators and social opening rituals (separate from sprint standups), monthly team lunches or virtual coffees (budget-allocated, not optional), quarterly team offsites or half-day connection events with structured relationship-building activities, and annual team retrospective celebrations that honor growth, departures, and team milestones. New team member onboarding rituals — structured introduction programs, 1:1 coffee roulette schedules, and buddy system assignments — are managed with 90-day milestone check-ins. High-performing teams schedule these rituals the same way they schedule sprint ceremonies: non-negotiable calendar blocks owned by the team lead.",
  },
  {
    icon: RefreshCw,
    title: "Psychological Safety Reviews & Team Health Survey Cadence",
    description:
      "Psychological safety is the strongest predictor of team performance — but it decays under deadline pressure, team changes, and manager behavior without proactive measurement and intervention. Momenties schedules quarterly team health surveys (anonymized psychological safety, belonging, autonomy, and workload sustainability scores), monthly 1:1 check-ins between managers and every direct report (structured around growth, blockers, and wellbeing — not just project status), and semi-annual team retrospectives focused on process and culture rather than product. Manager trust reviews — 360-degree feedback cycles for team leads — are scheduled annually with 90-day manager coaching follow-up. Team composition health reviews (span of control, team size, skill balance) are conducted semi-annually with the organizational design function.",
  },
  {
    icon: TrendingUp,
    title: "Cross-Functional Collaboration Programs & Team Learning Calendar",
    description:
      "Teams that only interact at project integration points miss the relationship capital that makes hard conversations easier. Momenties schedules quarterly cross-functional team mixers (engineering with product, CS with sales, finance with operations), monthly lunch-and-learn knowledge sharing sessions (alternating technical and non-technical topics nominated by team members), and annual cross-functional project rotation programs where high performers spend 2-4 weeks embedded in adjacent teams. Team learning calendars — book clubs, course completions, conference attendance, and certification programs — are planned quarterly with budget allocation and manager sponsorship. Internal conference and knowledge fair programs are calendared annually with submission deadlines 8 weeks in advance. Mentor matching programs are managed with semi-annual matching cycles and quarterly mentor check-in reminders.",
  },
  {
    icon: BarChart3,
    title: "Manager Development Cycles & Team Performance Measurement",
    description:
      "Manager quality is the single largest driver of team retention — and managers without structured development programs plateau within 18 months of promotion. Momenties schedules quarterly manager development workshops (difficult conversations, feedback delivery, delegation frameworks, and performance management), monthly peer manager cohort sessions (sharing challenges, reviewing team health metrics, coaching each other), and annual manager effectiveness reviews measuring team retention, survey scores, and direct report career growth against comparable managers. Team velocity tracking — cycle time trends, sprint completion rates, and unplanned work ratios — is reviewed weekly in engineering and monthly in other functions. Promotion and career development conversations are scheduled quarterly (not just at annual review season) with documented development plans. Quarterly team attrition analysis identifies early warning signals before high performers leave.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Team Audit & Ritual Architecture",
    description: "Audit current team connection rituals, psychological safety baseline, and survey cadence; establish weekly and monthly team ritual calendar; launch quarterly team health survey; implement structured new member onboarding ritual; define manager 1:1 cadence and agenda framework.",
  },
  {
    month: "Month 3",
    title: "Psychological Safety Program Launch & First Offsite",
    description: "Run first quarterly team health survey and present results to team; schedule first team offsite or half-day connection event; launch cross-functional mixer program; establish manager peer cohort; complete first 90-day check-in for recent hires.",
  },
  {
    month: "Month 4–5",
    title: "Learning Calendar & Manager Development Launch",
    description: "Launch quarterly learning calendar with conference budget allocation; run first manager development workshop; establish lunch-and-learn program with team nominations; run first cross-functional knowledge sharing session; implement team velocity tracking dashboard.",
  },
  {
    month: "Month 6",
    title: "Mid-Year Team Health Review & Manager Effectiveness Check",
    description: "Present mid-year team health trends (psychological safety, belonging, workload scores); run mid-year manager effectiveness check with direct report feedback; review team attrition data for early warning signals; assess cross-functional collaboration program impact.",
  },
  {
    month: "Month 7–9",
    title: "Mentor Matching Program & Cross-Functional Rotation",
    description: "Launch semi-annual mentor matching cycle; run first annual cross-functional rotation program for high performers; complete quarterly team retrospective with culture focus; review learning calendar completion rates and budget utilization; run manager 360-feedback cycle.",
  },
  {
    month: "Month 10–12",
    title: "Annual Review & Next-Year Team Building Plan",
    description: "Present annual team building ROI (retention improvement, psychological safety trend, manager effectiveness scores); run annual team retrospective celebration; plan next-year team ritual calendar and offsite schedule; finalize manager development curriculum; lock mentor matching cadence.",
  },
]

const kpis = [
  {
    metric: "Voluntary Attrition Rate",
    target: "≤ 10% annual for high performers",
    description: "Percentage of team members voluntarily leaving in the trailing 12 months — above 15% indicates team health, manager quality, or career growth problems; high-performer attrition above 5% requires immediate root cause analysis.",
  },
  {
    metric: "Psychological Safety Score",
    target: "≥ 4.0 / 5.0",
    description: "Team average on psychological safety survey items (speak up, take risks, challenge ideas without fear) — below 3.5 predicts innovation slowdown and voice suppression; scores below 3.0 indicate active team dysfunction requiring manager intervention.",
  },
  {
    metric: "Manager 1:1 Completion Rate",
    target: "≥ 90% on schedule",
    description: "Percentage of scheduled manager 1:1s completed within the planned week — below 75% completion rate signals manager bandwidth problems or deprioritization of people investment; missed 1:1s are the leading early indicator of team trust erosion.",
  },
  {
    metric: "New Hire Belonging Score",
    target: "≥ 4.0 / 5.0 at 90 days",
    description: "New team member belonging and connection score at 90-day check-in — below 3.5 at 90 days predicts 40% higher 12-month attrition; onboarding ritual quality is the highest-leverage intervention for new hire retention.",
  },
  {
    metric: "Cross-Functional Collaboration Score",
    target: "≥ 3.8 / 5.0",
    description: "Quarterly survey rating of cross-team collaboration quality — below 3.5 indicates relationship capital deficits that cause escalation-heavy delivery and avoidance of difficult coordination; cross-functional mixers improve this score 0.3-0.5 points within one quarter.",
  },
  {
    metric: "Team Ritual Completion Rate",
    target: "≥ 85% of rituals on schedule",
    description: "Percentage of planned team rituals (standups, offsites, lunches, retrospectives) completed as scheduled — below 70% indicates competing priorities are eroding team investment; rituals canceled consistently signal that team health is deprioritized.",
  },
]

const testimonial = {
  quote:
    "We had great intentions — team offsites were planned when someone had energy, 1:1s got skipped during crunch, cross-functional relationships only happened at escalations, and we measured team health by whether anyone quit. Momenties gave our team building a real calendar. Attrition dropped from 22% to 8%, psychological safety scores went from 3.1 to 4.4, and onboarding NPS for new hires improved from 6.2 to 8.7.",
  name: "Adaora O.",
  title: "VP Engineering, Series C Product-Led SaaS",
}

export default function TeamBuildingCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Team Building Calendar"
        title="8% Attrition. Psychological Safety 4.4. Onboarding NPS 8.7."
        subtitle="A systematic team building calendar with weekly connection rituals, quarterly psychological safety surveys, monthly manager 1:1 cadences, cross-functional collaboration programs, mentor matching cycles, and team health measurement rhythms that improve retention, belonging, and delivery velocity."
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
            Four Systems That Build Team Excellence
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
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Your 12-Month Team Building Roadmap
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {timeline.map((t, i) => (
              <div
                key={i}
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
                <span style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.9rem", paddingTop: 2 }}>
                  {t.month}
                </span>
                <div>
                  <p style={{ color: "#f0ece3", fontWeight: 600, marginBottom: 6 }}>{t.title}</p>
                  <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    {t.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
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
            KPIs That Define Team Building Program Maturity
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
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
                <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1.1rem", marginBottom: 4 }}>
                  {k.target}
                </p>
                <p style={{ color: "#f0ece3", fontWeight: 600, marginBottom: 8 }}>{k.metric}</p>
                <p style={{ color: "rgba(240,236,227,0.6)", fontSize: "0.88rem", lineHeight: 1.6 }}>
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
