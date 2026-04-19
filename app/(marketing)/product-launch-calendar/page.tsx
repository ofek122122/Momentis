import type { Metadata } from "next"
import { Rocket, Users, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Product Launch Calendar | Momenties",
  description: "Build a systematic product launch calendar — go-to-market readiness reviews, beta program management cycles, launch day war room coordination, and post-launch performance monitoring cadences that turn product releases into revenue.",
}

const pillars = [
  {
    icon: Rocket,
    title: "GTM Readiness Reviews & Launch Sequencing Calendar",
    description:
      "Product launches fail at the handoff between product and go-to-market — not because the product isn&apos;t ready, but because GTM isn&apos;t. Momenties schedules the complete launch readiness calendar: 8-week pre-launch GTM readiness reviews (sales enablement complete, positioning finalized, pricing approved, legal reviewed), 4-week pre-launch integration tests (landing page live, CRM updated, pricing page updated, analyst briefings sent), and final launch week war room coordination with hour-by-hour deployment schedules. Every launch milestone has an owner, a deadline, and an escalation path before the day arrives.",
  },
  {
    icon: Users,
    title: "Beta Program Management & Customer Advisory Cadence",
    description:
      "Beta programs produce the case studies, testimonials, and product feedback that make launch day credible — but only if they&apos;re managed with a structured calendar. Momenties schedules beta cohort kickoffs 10-12 weeks before launch, weekly check-in cadences with beta participants, feedback synthesis sessions at weeks 4, 8, and final, and reference customer confirmation 3 weeks before launch. Customer Advisory Board (CAB) briefings — where design partners preview the roadmap and validate positioning — are scheduled quarterly with launch preview sessions 6 weeks before major releases. Analyst and press briefings are calendared under NDA with embargo lift coordinated to launch day.",
  },
  {
    icon: TrendingUp,
    title: "Sales Enablement Completion & Channel Partner Launch Prep",
    description:
      "Product launches stall when sales teams aren&apos;t ready to sell. Momenties schedules the full sales enablement calendar: competitive battlecard updates 6 weeks before launch, first-call deck revision 4 weeks out, demo environment update 3 weeks out, sales training and certification by 2 weeks out, and quota and comp plan communication 1 week before launch. Channel partner enablement — reseller portal updates, partner training, deal registration launch — follows a parallel calendar with partner-specific go-live dates. SDR outreach sequences for launch day are loaded and reviewed 2 weeks in advance.",
  },
  {
    icon: BarChart3,
    title: "Launch Day War Room & Post-Launch Performance Monitoring",
    description:
      "Launch day without a war room calendar becomes chaos. Momenties schedules the launch day operational calendar: deployment monitoring windows, PR wire timing, social media amplification schedule, executive announcement timing, customer communication deployment, and support escalation monitoring. Post-launch monitoring cadence — daily metrics review for 2 weeks, weekly for 4 weeks, then monthly — ensures launch performance data informs the next release cycle. Win/loss analysis, NPS surveys to new buyers, and 30/60/90-day adoption reviews are all scheduled automatically after each launch.",
  },
]

const timeline = [
  {
    month: "Week 1–4",
    title: "Launch Readiness Assessment & GTM Team Alignment",
    description: "Define launch scope and tier (major/minor/patch); assign GTM owners; establish launch readiness scorecard; kick off beta program; schedule analyst and press briefings under NDA.",
  },
  {
    month: "Week 5–8",
    title: "Beta Program Midpoint & Sales Enablement Kickoff",
    description: "Complete beta program midpoint review; synthesize feedback into product and positioning adjustments; update competitive battlecards; start sales training content development; finalize pricing and packaging.",
  },
  {
    month: "Week 9–10",
    title: "Sales Training, Demo Environment & Reference Confirmation",
    description: "Complete sales certification on new product; update demo environment; confirm 3+ reference customers; finalize landing page and pricing page; complete legal and compliance review.",
  },
  {
    month: "Week 11",
    title: "Final GTM Readiness Review & Go/No-Go Decision",
    description: "Run final GTM readiness review across all tracks (product, marketing, sales, CS, legal); execute go/no-go decision with executive sign-off; finalize launch day war room schedule.",
  },
  {
    month: "Week 12",
    title: "Launch Day Execution & Monitoring",
    description: "Deploy product release; execute PR and social amplification; activate sales outreach sequences; monitor support queue; run hourly launch metrics reviews through end of day.",
  },
  {
    month: "Week 13–16",
    title: "Post-Launch Monitoring & Iteration Planning",
    description: "Daily metrics reviews for 2 weeks; collect NPS from new buyers; run win/loss analysis on first post-launch opportunities; synthesize findings into iteration backlog for next release cycle.",
  },
]

const kpis = [
  {
    metric: "GTM Readiness Score",
    target: "≥ 90% at launch go/no-go",
    description: "Percentage of GTM readiness checklist items complete at go/no-go review — below 85% warrants launch delay; below 75% on launch day predicts first-week support escalations.",
  },
  {
    metric: "Launch Day Pipeline Generated",
    target: "≥ 3× launch investment",
    description: "New pipeline sourced within 5 business days of launch — elite product-led growth companies generate 3-5× launch cost in first-week pipeline; below 1× signals positioning or targeting failure.",
  },
  {
    metric: "Beta NPS",
    target: "≥ 8.0 from beta cohort",
    description: "Net Promoter Score from beta program participants — below 7.0 indicates the product is not yet ready for general availability; below 6.0 warrants launch delay.",
  },
  {
    metric: "Sales Certification Rate",
    target: "100% by launch day",
    description: "Percentage of quota-carrying reps certified to demo and pitch new product by launch day — any miss means reps are selling unprepared, which is the leading cause of first-call conversion drop.",
  },
  {
    metric: "30-Day Activation Rate",
    target: "≥ 60% of new buyers",
    description: "Percentage of new customers activating core product features within 30 days of purchase — below 40% creates early churn risk and signals onboarding or product-market fit issues.",
  },
  {
    metric: "Post-Launch Win Rate",
    target: "≥ Launch - 1 quarter rate",
    description: "Competitive win rate in the quarter following launch vs. prior quarter — launches should lift win rate by 5-10%; a declining post-launch win rate means competitive positioning did not land.",
  },
]

const testimonial = {
  quote:
    "We were shipping product on time but launching chaotically — sales training finished after launch, reference customers confirmed the morning of, analyst briefings missed embargo windows. Momenties built us a proper launch calendar. Our last two releases had 100% GTM readiness scores at go/no-go and first-week pipeline doubled versus the prior year.",
  name: "Taiwo F.",
  title: "VP Product Marketing, Series C PLG SaaS",
}

export default function ProductLaunchCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Product Launch Calendar"
        title="100% GTM Readiness. First-Week Pipeline. Zero Launch Day Surprises."
        subtitle="A systematic product launch calendar with 8-week GTM readiness reviews, beta program management cycles, sales enablement completion checkpoints, and post-launch monitoring cadences that turn product releases into revenue."
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
            Four Systems That Build Launch Excellence
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

      {/* 12-Week Timeline */}
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
            Your 12-Week Product Launch Roadmap
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
            KPIs That Define Product Launch Excellence
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
