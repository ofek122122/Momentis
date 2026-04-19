import type { Metadata } from "next"
import { Target, Users, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Sales Kickoff Calendar | Momenties",
  description: "Plan and execute a world-class sales kickoff — SKO content planning cadence, manager pre-work programs, reinforcement training schedule, and post-SKO pipeline activation calendar that converts kickoff energy into Q1 pipeline.",
}

const pillars = [
  {
    icon: Target,
    title: "SKO Content Planning & Production Calendar",
    description:
      "A great SKO requires 90 days of preparation: keynote narrative development, breakout session design, product demo scripting, competitive update packages, and leadership alignment on messaging. Momenties builds a reverse-engineered SKO production calendar from the event date — surfacing content review deadlines, speaker prep sessions, logistics confirmations, and dry-run schedules — so SKO planning never compresses into a 2-week panic sprint that produces mediocre sessions reps forget by February.",
  },
  {
    icon: Users,
    title: "Manager Pre-Work & Rep Preparation Program",
    description:
      "SKO ROI is determined before reps walk through the door. A structured pre-work program — ICP certification, product knowledge assessments, pipeline pre-call plan submissions, and competitive scenario reviews — ensures SKO sessions build on foundation knowledge rather than re-teach basics. Momenties schedules manager pre-work checkpoints, rep preparation module deadlines, and pre-SKO 1:1 templates so every rep arrives at kickoff prepared to absorb strategy, not learn fundamentals.",
  },
  {
    icon: TrendingUp,
    title: "Post-SKO Reinforcement & Coaching Calendar",
    description:
      "Forgetting curve research confirms reps lose 70% of training content within one week without reinforcement. A 90-day post-SKO reinforcement calendar — weekly micro-learning modules, bi-weekly manager coaching sessions, deal review rubrics tied to SKO messaging, and 30/60/90 certification checkpoints — converts kickoff inspiration into durable behavior change. Momenties schedules every reinforcement touchpoint and alerts managers when reps fall behind on certification milestones.",
  },
  {
    icon: BarChart3,
    title: "Q1 Pipeline Activation & SKO ROI Measurement",
    description:
      "Pipeline created in the 90 days post-SKO is the primary ROI metric for kickoff investment. Momenties schedules aggressive Q1 pipeline blitzes in the weeks following SKO, tracks pipeline creation velocity vs. prior-year Q1, and attributes opportunities to specific SKO training tracks. Quarterly SKO ROI reviews compare Q1 ramp metrics, win rate on SKO-trained plays, and manager coaching completion rates — giving sales leadership data to optimize the next SKO investment.",
  },
]

const timeline = [
  {
    month: "Month 1 (T-90)",
    title: "SKO Theme & Content Architecture",
    description: "Align leadership on SKO theme, define 3-5 core learning objectives, assign content owners, lock logistics (venue, dates, budget), and build master production calendar in Momenties.",
  },
  {
    month: "Month 2 (T-60)",
    title: "Content Production & Speaker Prep",
    description: "Complete keynote narrative drafts, finalize breakout session agendas, run first speaker dry-runs, deliver pre-work curriculum to managers, and complete competitive update packages for sales.",
  },
  {
    month: "Month 3 (T-30)",
    title: "Rep Pre-Work Launch & Final Logistics",
    description: "Launch rep pre-work program with certification deadlines, complete technology and AV checks, run final keynote dry-runs, brief managers on coaching facilitation guides, and confirm all vendor contracts.",
  },
  {
    month: "SKO Week",
    title: "Execution & Real-Time Adjustments",
    description: "Execute SKO with session-by-session feedback loops; capture session NPS; run all-hands and breakouts on schedule; end with territory planning workshops and Q1 pipeline commitment sessions.",
  },
  {
    month: "Month 1 Post-SKO",
    title: "Reinforcement Activation & Pipeline Blitz",
    description: "Launch weekly micro-learning modules tied to SKO themes; schedule manager coaching 1:1s; initiate Q1 pipeline blitz with Momenties task queues for outbound and territory activation.",
  },
  {
    month: "Q1 End",
    title: "SKO ROI Review & Next SKO Planning",
    description: "Present Q1 pipeline vs. target, certification completion rates, win rate on SKO-trained plays, and manager coaching cadence — use data to plan next SKO theme and optimization priorities.",
  },
]

const kpis = [
  {
    metric: "Pre-Work Completion Rate",
    target: "≥ 90% by SKO day",
    description: "Percentage of reps who complete all pre-work certification modules before SKO — proxy for manager accountability and rep readiness to absorb strategy-level content.",
  },
  {
    metric: "Session NPS",
    target: "≥ 8.0 / 10",
    description: "Real-time session satisfaction score — identifies content quality issues during SKO so leadership can adjust breakout sessions before the following day.",
  },
  {
    metric: "Post-SKO Certification",
    target: "100% by Day 30",
    description: "Percentage of reps completing 30-day post-SKO certification checkpoint covering messaging, product knowledge, and competitive scenarios — required for territory enablement unlock.",
  },
  {
    metric: "Q1 Pipeline Creation",
    target: "120% of Q1 target",
    description: "Pipeline created in the 90 days post-SKO vs. the same period prior year — primary financial ROI metric for SKO investment, tracked weekly through Q1.",
  },
  {
    metric: "Manager Coaching Completion",
    target: "≥ 85% weekly",
    description: "Percentage of managers completing scheduled post-SKO coaching 1:1s — leading indicator of reinforcement program sustainability and rep behavioral change.",
  },
  {
    metric: "Win Rate on SKO Plays",
    target: "Lift ≥ 8% vs. Q4",
    description: "Win rate on deals where reps used SKO-trained messaging, personas, or competitive plays — the outcome metric that proves SKO content quality drove revenue, not just smiles.",
  },
]

const testimonial = {
  quote:
    "We used to plan SKO in 6 weeks and wonder why reps forgot everything by February. With Momenties, planning started in October, pre-work launched 30 days out, and reinforcement modules ran every week for 90 days post-event. Q1 pipeline was 134% of target — our best Q1 in four years. The calendar change is what made the difference.",
  name: "Sade O.",
  title: "VP Revenue Enablement, Enterprise SaaS",
}

export default function SalesKickoffCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Sales Kickoff Calendar"
        title="90-Day SKO Planning. 90-Day Reinforcement. One Calendar."
        subtitle="A systematic sales kickoff calendar that starts 90 days before the event and runs 90 days after — converting kickoff energy into Q1 pipeline through structured prep, execution, and reinforcement programs."
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
            Four Systems That Make SKO ROI Measurable
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
            Your SKO Planning & Activation Roadmap
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {timeline.map((t, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
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
            KPIs That Prove SKO Drives Pipeline
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
