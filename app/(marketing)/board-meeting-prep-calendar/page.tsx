import type { Metadata } from "next"
import { FileText, Users, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Board Meeting Prep Calendar | Momenties",
  description: "Build a systematic board meeting preparation calendar — narrative development cadence, data package production workflow, pre-board read preparation, and board relationship management that turns quarterly board meetings from fire drills into strategic conversations.",
}

const pillars = [
  {
    icon: FileText,
    title: "Narrative Development & Board Package Production",
    description:
      "World-class board packages begin 6 weeks before the meeting — not 6 days. Momenties reverse-engineers every board meeting into a production calendar: cross-functional data requests 5 weeks prior, first deck draft 4 weeks prior, CFO and legal review 3 weeks prior, CEO narrative polish 2 weeks prior, and final package delivery 5 business days before the meeting. The result: boards that arrive prepared, directors that ask strategic questions instead of operational ones, and CEOs who present from confidence rather than caffeine.",
  },
  {
    icon: Users,
    title: "Pre-Board Director 1:1s & Committee Prep Calendar",
    description:
      "Board meetings should not be the first time directors hear about major strategic decisions, difficult metrics, or emerging risks. Pre-board 1:1s with each director 7-10 days before the meeting — tailored to their expertise and areas of concern — convert board meetings from interrogations into collaborative conversations. Momenties schedules director 1:1 windows, prompts CEO prep notes specific to each director&apos;s background, and tracks audit/compensation/nominating committee prep sessions with committee chairs.",
  },
  {
    icon: TrendingUp,
    title: "Audit Committee & Compensation Committee Cadence",
    description:
      "Public and late-stage private companies require structured audit committee reviews of financial statements, internal controls, and risk management — typically 3-4 weeks before full board presentation. Compensation committees review executive compensation, equity plan administration, and performance metrics on annual and quarterly cycles. Momenties maps committee meeting calendars to the full board schedule, surfaces comp review deliverables tied to fiscal year-end, and tracks audit committee pre-read delivery against SEC or covenant timelines.",
  },
  {
    icon: BarChart3,
    title: "Board Relationship Management & Director Engagement",
    description:
      "Board effectiveness is built between meetings, not during them. Director relationship management — monthly CEO update emails, ad-hoc calls during strategic inflection points, annual board effectiveness surveys — requires a structured calendar to execute without reactive improvisation. Momenties schedules monthly board update drafts, tracks director response patterns, prompts CEO thank-you notes after board contributions, and queues annual board self-evaluation surveys — treating board relationship management as the strategic function it is.",
  },
]

const timeline = [
  {
    month: "Weeks 1–2 (T-6)",
    title: "Strategic Narrative & Cross-Functional Data Requests",
    description: "Align CEO/CFO on board meeting strategic narrative; send data requests to all functional leaders; review prior board feedback and open action items; schedule committee prep sessions.",
  },
  {
    month: "Week 3 (T-4)",
    title: "First Deck Draft & CFO Review",
    description: "Complete first full board deck draft incorporating all functional inputs; run CFO review of financial slides and forward-looking statements; complete audit committee pre-read package.",
  },
  {
    month: "Week 4 (T-3)",
    title: "Legal Review & Compensation Committee Prep",
    description: "Route board package through legal review; complete compensation committee materials; run executive team dry-run of full board presentation; incorporate feedback into second draft.",
  },
  {
    month: "Week 5 (T-2)",
    title: "Pre-Board Director 1:1s",
    description: "Execute pre-board 1:1 calls with each board director; brief investors on major agenda items; resolve any sensitive topics before the room; finalize CEO talking points per director.",
  },
  {
    month: "Week 6 (T-1)",
    title: "Final Package Delivery & Final Prep",
    description: "Deliver final board package 5 business days before meeting; confirm all director travel and logistics; prepare backup materials; run final CEO rehearsal with timer and Q&A practice.",
  },
  {
    month: "Post-Meeting",
    title: "Action Item Tracking & Follow-Up",
    description: "Document all board action items with owners and deadlines; distribute meeting minutes within 5 business days; send CEO thank-you notes to directors; schedule post-board leadership debrief.",
  },
]

const kpis = [
  {
    metric: "Package Delivery Lead Time",
    target: "≥ 5 business days",
    description: "Business days between final board package delivery and meeting date — below 3 days signals process breakdown and director dissatisfaction; top governance programs deliver 7+ days ahead.",
  },
  {
    metric: "Director 1:1 Completion Rate",
    target: "100% before meeting",
    description: "Percentage of board directors receiving a pre-meeting 1:1 or written briefing — each uncovered director is a risk of surprise questions or negative reactions in the room.",
  },
  {
    metric: "Meeting Run-Time Adherence",
    target: "Within 15 min of plan",
    description: "Variance between planned and actual board meeting duration — persistent overruns signal preparation quality issues, unclear decision frameworks, or board dynamic challenges.",
  },
  {
    metric: "Action Item Close Rate",
    target: "≥ 90% by next meeting",
    description: "Percentage of prior meeting board action items closed before the subsequent meeting — persistent gaps erode board credibility and strategic trust.",
  },
  {
    metric: "Board NPS",
    target: "≥ 8.0 / 10 (annual)",
    description: "Annual board effectiveness survey score on meeting quality, information quality, and governance — tracking trend is more important than absolute number.",
  },
  {
    metric: "Strategic Discussion %",
    target: "≥ 60% of meeting time",
    description: "Percentage of board meeting agenda devoted to strategic discussion vs. operational reporting — elite boards spend 60-70% on strategy; below 40% signals over-reporting culture.",
  },
]

const testimonial = {
  quote:
    "Our board meetings used to feel like quarterly reporting sessions. Deck was done 48 hours before the meeting, no pre-reads, directors asking operational questions we should have answered weeks earlier. Momenties changed the entire cadence. Six-week production timeline, director 1:1s built in, strategic discussion went from 30% to 65% of meeting time. Our lead investor called it the best-run board she&apos;s seen at our stage.",
  name: "Seun A.",
  title: "CEO & Co-Founder, Series B SaaS",
}

export default function BoardMeetingPrepCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Board Meeting Prep Calendar"
        title="Six-Week Production. Director 1:1s. Strategic Conversation."
        subtitle="A structured board meeting preparation calendar that starts 6 weeks before the meeting — with package production workflows, director 1:1 scheduling, and committee prep that turns board meetings from fire drills into governance excellence."
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
            Four Systems That Make Board Meetings Strategic
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

      {/* 6-Week Timeline */}
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
            The 6-Week Board Meeting Production Calendar
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
            KPIs That Define Board Governance Excellence
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
