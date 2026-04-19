import type { Metadata } from "next"
import { Heart, BarChart3, RefreshCw, TrendingUp } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Customer Success Operations Calendar | Momenties",
  description: "Build a CS operations calendar with health score review cadences, QBR scheduling, renewal pipeline management, CSM capacity planning, and monthly CSops performance reviews that drive NRR and reduce churn.",
}

const pillars = [
  {
    icon: Heart,
    title: "Health Score Architecture & At-Risk Account Reviews",
    body: "CS operations lives on accurate health scores — a health score that doesn&apos;t predict churn is decorative. Health score model: usage (40% weight — DAU/MAU, breadth of feature adoption, integration depth), support (20% — ticket volume, unresolved tickets, severity), relationship (20% — CSM sentiment, champion identified, sponsor engaged), business (20% — renewal date proximity, growth vs decline in seats/usage). Health score review cadence: weekly at-risk review (red accounts — automated alert when score drops ≥10 points), monthly health score audit (validate model accuracy — do red accounts churn at higher rate than model predicts?), quarterly model recalibration (reweight based on trailing 6-month churn data). Churn signal library: update monthly — new signals added as customers surface new churn patterns (competitor mention in call, champion departure, budget freeze email, support escalation by economic buyer). CSM assignment review: monthly CSM health score distribution — no CSM should carry >40% red/yellow accounts. Account segmentation review quarterly: Tier 1/2/3 criteria refreshed when ACV band shifts ≥15%. Momenties schedules weekly at-risk reviews, monthly model audits, and quarterly recalibration dates.",
  },
  {
    icon: BarChart3,
    title: "QBR Scheduling, EBR Programs & Executive Engagement Calendar",
    body: "Quarterly Business Reviews (QBR) are your single highest-leverage retention touchpoint — but only if scheduled and prepared correctly. QBR scheduling calendar: Tier 1 accounts (top 20% by ARR) — QBR every quarter; Tier 2 — semi-annual EBR; Tier 3 — annual review or self-serve. QBR preparation calendar: CSM prepares deck 5 business days before QBR (usage summary, ROI quantification, roadmap alignment, renewal conversation). Executive sponsor engagement: CRO/VP CS joins Tier 1 QBRs at 90-day pre-renewal — double attendance rate, +15-20 NPS lift. QBR completion rate as CSops metric: target ≥85% of scheduled QBRs held (not rescheduled or canceled). QBR outcome tracking: log decision, champion sentiment score (1-5), expansion opportunity identified (Y/N), renewal risk flag (Y/N) — within 24 hours post-QBR. EBR (Executive Business Review) differentiation: EBR involves customer C-suite — requires 6-week prep (custom ROI model, peer benchmark data, strategic roadmap). Executive engagement program: CSM maps customer org chart quarterly (identify new EBs, departing champions) — white space analysis for expansion. Momenties schedules QBR dates, prep deadlines, and executive engagement touchpoints for every tier.",
  },
  {
    icon: RefreshCw,
    title: "Renewal Pipeline Management & Expansion Revenue Calendar",
    body: "Renewal pipeline management is the core CSops process — churn and expansion are both planned, not reactive. 180-day renewal calendar: 180 days before renewal — CSM risk assessment (health score + CSM sentiment), 120 days — renewal conversation initiated (multi-year offer introduced), 90 days — executive sponsor engaged (Tier 1/2), 60 days — contract terms finalized, 30 days — countersigned. Renewal forecast: monthly renewal call (CS + Finance + CRO) — GRR and NRR forecast, at-risk ARR flagged by amount and confidence, renewal close date accuracy (slippage ≥14 days flagged). Expansion revenue calendar: expansion motion triggered at 70% plan utilization (usage-based), 80% seat capacity, or champion request. Expansion offer timing: 60-90 days before natural renewal maximizes close rate. Multi-year deal offer: present at QBR closest to renewal — multi-year offers convert 30-40% of single-year customers. Downsell prevention: offer downgrade to adjacent plan before cancellation — retains 20-30% of churn-intent accounts at lower ARR. Win-back campaign: 60/90/180 days post-churn trigger (see retention calendar). NRR decomposition: NRR = (beginning ARR + expansion − contraction − churn) / beginning ARR — review monthly. Momenties tracks every renewal date and expansion trigger.",
  },
  {
    icon: TrendingUp,
    title: "CSM Capacity Planning, Tooling & CSops Performance Reviews",
    body: "CSM capacity planning: benchmark ratio by segment — Enterprise: 1 CSM per 10-15 accounts (ARR-weighted), Mid-market: 1 per 25-40, SMB: 1 per 60-100 or tech-touch. Capacity review quarterly: flag CSMs carrying >120% of target account load — redistribution required before burnout-driven churn. Onboarding capacity: new customer onboarding takes 40-60 CSM hours in month 1 — model onboarding load vs steady-state load separately. Tooling review: quarterly CS tech stack audit (CSP platform — Gainsight/ChurnZero/Totango, health score accuracy, playbook utilization ≥70%, CTAs actioned within SLA). Playbook SLA compliance: CSM must action CTAs within 48 hours — track weekly, CSM KPI. Monthly CSops performance review: GRR/NRR vs target, QBR completion rate, at-risk account recovery rate, expansion-sourced MRR, CSM NPS (customers' rating of their CSM, target ≥8/10), time-to-first-value (onboarding speed), CSM activity volume (calls, emails, QBRs). Quarterly CSops retrospective: which playbooks drove best recovery rate, which CSM behaviors correlated with expansion, what onboarding steps reduced time-to-value. Benchmark: top-quartile CS operations achieve NRR ≥120%, GRR ≥90%, CSM NPS ≥8. Momenties generates monthly CSops scorecards and renewal pipeline reports.",
  },
]

const timeline = [
  { phase: "Month 1–2", label: "Health Score Baseline", description: "Instrument health score model (usage + support + relationship + business), identify first at-risk accounts, establish weekly red account review, map QBR schedule for all Tier 1 accounts." },
  { phase: "Month 3–4", label: "QBR Machine", description: "First QBR cycle complete (all Tier 1 accounts). QBR prep template live. Outcome tracking live in CRM. Executive engagement initiated for top 20% by ARR." },
  { phase: "Month 5–6", label: "Renewal Pipeline", description: "180-day renewal calendar live for all accounts. Monthly renewal forecast call with CS + Finance + CRO. First multi-year offers presented at QBR. Expansion motion at 70% utilization live." },
  { phase: "Month 7–8", label: "Expansion Revenue", description: "Expansion playbook running. Seat/usage expansion triggers in CRM. First CSM capacity review complete. Playbook SLA compliance tracked weekly." },
  { phase: "Month 9–10", label: "Health Score Recalibration", description: "6-month model accuracy audit: does health score predict churn? Reweight model. Refresh churn signal library. Review tooling ROI. CSM NPS survey completed." },
  { phase: "Month 11–12", label: "Annual Review & Reset", description: "Annual CSops audit: NRR/GRR trend, QBR completion rate YoY, at-risk recovery rate, expansion close rate. Reset CSM capacity ratios. Benchmark vs industry top quartile." },
]

const metrics = [
  { label: "Net Revenue Retention (NRR)", benchmark: "Target ≥120% (world-class CS benchmark)" },
  { label: "Gross Revenue Retention (GRR)", benchmark: "Target ≥90% (top quartile enterprise SaaS)" },
  { label: "QBR completion rate", benchmark: "Target ≥85% of scheduled QBRs held (not rescheduled)" },
  { label: "At-risk account recovery rate", benchmark: "Target ≥25% of red accounts recovered per quarter" },
  { label: "CSM NPS (customer rating of CSM)", benchmark: "Target ≥8/10 average" },
  { label: "Renewal forecast accuracy", benchmark: "Target ±5% of actual GRR per quarter" },
]

export default function CustomerSuccessOperationsCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="CS Operations Calendar"
        title="A Customer Success Operations Calendar That Drives NRR Every Month"
        subtitle="From weekly at-risk reviews to 180-day renewal pipelines — Momenties keeps every QBR, health score audit, expansion trigger, and renewal deadline on one calendar so CS operations compounds."
        cta="Start free — no credit card"
        ctaHref="/sign-up"
      />

      {/* Four pillars */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              Every CS Operations System, One Calendar
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {pillars.map(({ icon: Icon, title, body }) => (
              <Reveal key={title}>
                <div
                  className="rounded-xl p-8 h-full"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="mb-4 inline-flex items-center justify-center rounded-lg p-3"
                    style={{ background: "rgba(197,163,92,0.12)" }}
                  >
                    <Icon size={22} style={{ color: "#c5a35c" }} />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-semibold" style={{ color: "#f0ece3" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12-month plan */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-4" style={{ color: "#f0ece3" }}>
              12-Month CSops Roadmap
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              A structured progression from health score baseline to fully compounding NRR operations.
            </p>
          </Reveal>
          <div className="space-y-4">
            {timeline.map(({ phase, label, description }) => (
              <Reveal key={phase}>
                <div
                  className="rounded-xl p-6 flex gap-6"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="shrink-0 w-28">
                    <p className="text-xs font-semibold" style={{ color: "#c5a35c" }}>{phase}</p>
                    <p className="text-sm font-medium mt-0.5" style={{ color: "#f0ece3" }}>{label}</p>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-12" style={{ color: "#f0ece3" }}>
              CSops KPIs Worth Tracking
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map(({ label, benchmark }) => (
              <Reveal key={label}>
                <div
                  className="rounded-xl p-5"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <p className="text-sm font-semibold mb-1" style={{ color: "#f0ece3" }}>{label}</p>
                  <p className="text-xs" style={{ color: "#8b8b8b" }}>{benchmark}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <blockquote
              className="mb-6 font-display text-2xl font-medium leading-snug"
              style={{ color: "#f0ece3" }}
            >
              &ldquo;Our NRR was 97% — we thought that was fine. Then we scheduled every renewal 180 days out, every QBR 6 weeks in advance, and every expansion trigger in Momenties. CSMs stopped firefighting and started planning. Eighteen months later NRR is 118%. Same team, same product. The calendar was the operating system we were missing.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Amara N.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              VP Customer Success, Mid-Market SaaS — $28M ARR, 180-customer portfolio
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your CS operations calendar and start driving NRR systematically this quarter"
        subtitle="Momenties keeps every health score review, QBR prep deadline, renewal pipeline date, and expansion trigger on one calendar so customer success operations compounds."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
