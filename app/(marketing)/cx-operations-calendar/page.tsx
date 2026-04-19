import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "CX Operations Calendar | Momenties",
  description: "Momenties helps VP CX and customer experience operations leaders track NPS measurement cycles, journey mapping review cadences, CX technology review calendars, agent training renewal, and CX program governance in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "NPS/CSAT Measurement Cycles, CX Metrics Governance & Survey Calendar",
    description:
      "Customer experience measurement programs without structured cadences produce data that arrives too late to drive decisions — organizations that measure NPS continuously (transactional NPS within 24 hours of interaction) respond to detractors 4x faster than those with quarterly relationship surveys. CX measurement calendar: transactional NPS survey (automated trigger within 24 hours of key interactions — purchase, support closure, onboarding milestone), relationship NPS survey (quarterly, using stratified sampling to avoid survey fatigue), CSAT survey (within 48 hours of support interaction), Customer Effort Score (post-resolution survey for high-effort interactions), and product NPS (monthly in-app, 3% sample). Close-the-loop calendar: detractor follow-up SLA (business day after detractor response), case resolution and feedback confirmation, and monthly detractor trend review. CX metrics board reporting: monthly CX scorecard distribution (NPS, CSAT, CES, resolution rate, first contact resolution), quarterly CX ROI analysis (revenue impact of NPS improvement, churn reduction value of CSAT improvement), and annual CX program effectiveness review. Momenties manages the full CX measurement calendar.",
  },
  {
    icon: RefreshCw,
    title: "Customer Journey Mapping Reviews, Persona Refresh & CX Design Calendar",
    description:
      "Customer journey maps without regular refresh cycles become strategic fiction — journey maps not updated for 18+ months misrepresent the actual customer experience and lead to misaligned CX investment decisions. Journey mapping calendar: annual full journey map refresh (all primary personas, all key touchpoints), semi-annual journey health check (quantitative validation of pain point severity with NPS/CSAT data overlay), and quarterly micro-journey review (individual interaction sequences — onboarding, renewal, support — updated with recent qualitative data). Persona refresh calendar: annual primary persona validation research (15-20 interviews per persona), quarterly behavioral data update (usage patterns, feature adoption, support contact frequency), and bi-annual competitive journey benchmarking (mystery shopping, competitor review analysis). CX design sprint calendar: quarterly CX design sprint (focused on top 2-3 pain points from journey mapping), monthly CX concept testing (qualitative evaluation of proposed improvements), and post-implementation CX impact measurement (T+30, T+60, T+90). Momenties schedules every journey and CX design milestone.",
  },
  {
    icon: TrendingUp,
    title: "Contact Center Operations Calendar, Agent Training & Quality Assurance Cadence",
    description:
      "Contact center quality programs without structured review cadences drift — QA programs evaluating fewer than 5% of interactions per agent per month miss the performance variance needed to drive systematic training interventions. Quality assurance calendar: weekly QA sampling (5-10 interactions per agent, evaluated against rubric), monthly QA calibration session (QA team alignment on scoring, preventing evaluator drift), quarterly agent performance review (combining QA scores, CSAT, productivity metrics), and annual QA program audit (rubric refresh, metric weight review). Agent training calendar: new hire training program (4-6 weeks, competency-based milestones), compliance training annual refresher (PCI DSS handling, HIPAA if applicable, TCPA compliance), product knowledge update (within 2 weeks of major product launch), and quarterly soft skills training (conflict resolution, empathy, de-escalation). Contact center capacity planning: monthly headcount forecast versus contact volume, quarterly hiring plan review, and annual workforce management model refresh. Technology training: CRM/ticketing system update training (within 4 weeks of major release), and annual technology effectiveness survey. Momenties tracks every operations and training cycle.",
  },
  {
    icon: BarChart3,
    title: "CX Technology Review, VOC Program Governance & CX Team Development",
    description:
      "CX technology stacks without regular review accumulate redundant tools — the average CX operations team uses 8-12 tools, with 30-40% overlap in functionality generating unnecessary cost and integration complexity. Annual CX technology review: survey platform assessment (Medallia, Qualtrics, Delighted — contract renewal 90-day advance), ticketing and CRM assessment (Zendesk, Intercom, Salesforce Service Cloud — annual license optimization review), knowledge base platform review (annual content freshness audit and platform ROI assessment), and AI/chatbot performance review (monthly intent recognition accuracy, quarterly bot escalation rate analysis). Voice of Customer program governance: monthly VOC committee meeting (cross-functional review of top themes from NPS comments, support tickets, reviews, social media), quarterly VOC synthesis report to product and engineering, and annual VOC program external audit. CX team development: quarterly CX certification renewal (CCXP through CXPA — 3-year, 30 CE hours), CX conference calendar (CXPA Insight Exchange, Customer Contact Week — abstract submission 4-6 months advance), and annual CX skills assessment. Momenties consolidates the full CX operations calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual CX Strategy & Measurement Framework Review",
    description: "Complete annual CX strategy review and set NPS/CSAT improvement targets. Audit journey maps for annual refresh cycle. Launch Q1 relationship NPS survey. Complete annual QA rubric refresh. Set annual CX OKRs and distribute to team.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Q1 CX Metrics Review & Journey Map Refresh",
    description: "Analyze Q1 NPS and CSAT trends. Launch H1 full journey map refresh. Run quarterly CX design sprint focused on Q1 top pain points. Complete Q1 agent performance reviews. Review CX technology contracts expiring in H2.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "H1 CX Review & VOC Synthesis",
    description: "Conduct H1 CX program performance review. Complete semi-annual journey health check (quantitative data overlay). Present H1 VOC synthesis report to product and engineering. Run semi-annual persona validation research. Review contact center capacity for H2 volume projections.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Q2 CX Metrics & CX Technology Review",
    description: "Analyze Q2 NPS and CSAT trends with board reporting. Launch annual CX technology stack audit. Run Q2 QA calibration and agent performance reviews. Complete competitive journey benchmarking. Begin CCXP certification renewal planning for fall deadlines.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Annual Planning & CX Conference Season",
    description: "Launch annual CX budget planning and headcount review. Attend CXPA Insight Exchange or Customer Contact Week. Complete Q3 CX metrics review. Run Q3 CX design sprint. Review annual compliance training completion rates for contact center.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End CX Audit & Next-Year Program Design",
    description: "Complete annual VOC external audit. Lock next-year CX program calendar and budget. Run Q4 relationship NPS survey. Complete agent annual compliance training refresher. Deliver annual CX ROI report to board.",
  },
]

const kpis = [
  {
    metric: "NPS ≥ 50 (Relationship Survey)",
    description: "Quarterly relationship NPS; below 40 signals systemic experience issues requiring journey-level intervention",
  },
  {
    metric: "CSAT ≥ 4.5/5 Post-Support",
    description: "Transactional CSAT within 48 hours of support interaction; below 4.2 triggers QA review and agent coaching",
  },
  {
    metric: "First Contact Resolution ≥ 75%",
    description: "Percentage of issues resolved without repeat contact; below 65% signals knowledge base, agent training, or process issue",
  },
  {
    metric: "Detractor Close-the-Loop Rate ≥ 85%",
    description: "Percentage of NPS detractors contacted within 1 business day; below 70% signals process or capacity gap",
  },
  {
    metric: "QA Score ≥ 90% of Interactions",
    description: "Percentage of evaluated interactions meeting quality standards; below 85% consistently signals training or process gap",
  },
  {
    metric: "Journey Map Refresh 100% Annual",
    description: "All primary customer journey maps refreshed with quantitative validation annually; stale maps over 18 months signal CX investment misalignment risk",
  },
]

const testimonial = {
  quote:
    "Quarterly relationship NPS surveys with close-the-loop SLA tracking for 12,000 customers, transactional CSAT with 48-hour follow-up workflows, monthly VOC committee with cross-functional stakeholders, semi-annual journey map refresh for 6 personas, quarterly CX design sprints, annual competitive benchmarking, weekly QA sampling for 85 agents with monthly calibration, quarterly agent performance reviews, annual compliance training for contact center, CX technology annual review across 9 platforms, CCXP renewal for the CX leadership team, and CXPA conference abstract submissions — all tracked in spreadsheets and Jira. Momenties organized everything. Our NPS went from 32 to 54 in 18 months.",
  name: "Ngozi X.",
  title: "VP Customer Experience Operations, Series D SaaS",
}

export default function CxOperationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="CX Operations Calendar"
        title="NPS Cycles. Journey Mapping. QA Cadences. One Calendar."
        subtitle="Momenties tracks transactional NPS and CSAT measurement cycles with close-the-loop SLAs, quarterly relationship survey windows, annual journey map refresh programs, CX design sprint cadences, weekly QA sampling schedules, monthly QA calibration, annual CX technology stack reviews, VOC monthly committee meetings, CCXP certification renewal, and CX conference abstract deadlines so CX leaders run systematic experience improvement programs without operational gaps."
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
            Four CX Operations Pillars Momenties Tracks
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
            12-Month CX Operations Calendar
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
            CX Operations KPIs Momenties Keeps on Track
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
