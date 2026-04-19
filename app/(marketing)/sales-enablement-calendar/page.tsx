import type { Metadata } from "next"
import { BookOpen, RefreshCw, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Sales Enablement Calendar | Momenties",
  description: "Build a sales enablement calendar with content creation schedules, rep training cadences, battlecard refresh cycles, and monthly enablement reviews that reduce ramp time and increase win rates.",
}

const pillars = [
  {
    icon: BookOpen,
    title: "Enablement Content Creation & Refresh Schedule",
    body: "Sales content has a half-life of 6-12 months — without a refresh calendar, reps default to outdated decks and lose deals. Core content calendar: one-pager and pitch deck updated quarterly (align with product release cycles), case studies added monthly (minimum 1 new win per month documented within 30 days of close), competitive battlecard refresh triggered by any competitor pricing change or product launch within 72 hours. Content types by sales stage: awareness (blog series, thought leadership — marketing owns), consideration (ROI calculator, comparison guides — enablement owns), decision (customer stories, security questionnaire templates, contract FAQs — sales ops owns). Content governance: every asset has an owner, a review date, and a status (current / needs review / outdated). Assets past review date are auto-flagged in the enablement portal. Rep contribution program: top reps submit one content idea per quarter — reps who created content have 23% higher quota attainment. Momenties schedules every asset refresh and owner review date automatically.",
  },
  {
    icon: Users,
    title: "Rep Training & Onboarding Cadence",
    body: "New rep ramp target: first deal closed within 90 days, full quota capacity at month 4. Ramp calendar: Week 1 — product immersion (demo certification by day 5), Week 2 — ICP and persona deep-dive (shadow 3 discovery calls), Week 3 — objection handling roleplay (pass certification before first live call), Week 4 — first solo discovery call with manager review. Recurring training calendar: monthly skills workshop (1 hour — rotate topics: discovery, demo, objection handling, negotiation, champion building), quarterly sales methodology reinforcement (MEDDIC/SPICED/Command of the Message — whichever framework you run), biannual product update training (after every major release — mandatory cert within 2 weeks). Coaching cadence: weekly 30-min 1:1 per rep (deal review + skill focus), bi-weekly team call review (top win + top loss each cycle), monthly pipeline review with enablement (content gaps surfaced from lost deals). Certification tracks: product demo, competitive positioning, security/compliance Q&A, pricing/negotiation. Momenties schedules every certification deadline and coaching session.",
  },
  {
    icon: RefreshCw,
    title: "Battlecard & Competitive Intelligence Cycle",
    body: "Competitive intelligence is perishable — a stale battlecard is worse than no battlecard (false confidence). Update triggers: competitor product release (update within 72 hours), competitor pricing change (update same day), win/loss data showing new objection pattern (update within 1 week), rep flag via Slack/CRM (review within 48 hours). Battlecard structure: one page max, five sections — competitor summary (2 sentences), how they position against you, your three strongest differentiators, their three strongest objections + your responses, when to walk away (deals you rarely win vs. them). Quarterly competitive review: analyze win/loss data by competitor, identify which competitors appear in deals most often, retire cards for competitors appearing in <5% of deals, add new cards for emerging threats. Win/loss interview program: 2 interviews per month (1 win, 1 loss) — patterns from 12 interviews identify the highest-leverage enablement gaps. Competitive newsletter: monthly 5-bullet summary for all reps (new intel, updated cards, coaching tips). Momenties tracks each battlecard owner and refresh deadline.",
  },
  {
    icon: BarChart3,
    title: "Enablement Metrics & Program Reviews",
    body: "Monthly enablement review metrics: content usage rate (% of reps using new assets within 30 days of publish — target ≥70%), ramp time to first deal (track by cohort — target improvement 10% YoY), win rate trend (by segment, by rep tenure, by competitive match-up), average deal size trend (influenced by enablement content usage vs not — Salesforce opportunity field), certification completion rate (target ≥90% within deadline window), time spent searching for content (Highspot/Seismic search analytics — target <3 minutes per search). Quarterly enablement retrospective: review the 3 highest-impact assets (by influenced pipeline), 3 lowest-usage assets (candidates for retirement), top 3 objections from lost deals (content gaps to fill), and rep NPS for enablement program (target ≥7/10). Attribution: tag every deal with which enablement assets were used — calculate influenced ARR per asset over trailing 90 days. Enablement ROI calculation: (influenced pipeline × win rate × ACV) / enablement team + tool cost — industry benchmark: 8-15× ROI within 12 months. Momenties generates monthly enablement scorecards automatically from your log.",
  },
]

const timeline = [
  { phase: "Month 1–2", label: "Audit & Foundation", description: "Audit existing content library (current vs. outdated), map ramp milestones, deploy certification tracks, assign owners to every asset, launch win/loss interview program." },
  { phase: "Month 3–4", label: "Battlecard Sprint", description: "Build or refresh battlecards for top 5 competitors. Launch competitive newsletter. Add win rate by competitor to monthly review dashboard." },
  { phase: "Month 5–6", label: "Training Cadence Lock-In", description: "Full training calendar live (monthly workshops, quarterly methodology, bi-annual product updates). Coaching cadence running for all reps. First cohort through full ramp measured." },
  { phase: "Month 7–8", label: "Content Attribution", description: "Tag deals with enablement assets used. Identify top 3 influenced assets by pipeline. Retire lowest-usage content. Launch rep contribution program." },
  { phase: "Month 9–10", label: "Competitive Intelligence System", description: "Automated competitor monitoring live (G2, review sites, press). Update triggers defined and tested. 12-month win/loss archive analyzed for patterns." },
  { phase: "Month 11–12", label: "Compounding & Scale", description: "Annual enablement retrospective. Calculate YoY ramp improvement and win rate lift. Rebuild content roadmap for next year. Benchmark program ROI vs. industry." },
]

const metrics = [
  { label: "Content usage rate (within 30 days of publish)", benchmark: "Target ≥70% of reps using new assets" },
  { label: "Ramp time to first closed deal", benchmark: "Target ≤90 days (improve 10% YoY)" },
  { label: "Win rate — enablement-assisted vs not", benchmark: "Expect 15-25% higher win rate with tracked asset use" },
  { label: "Certification completion rate", benchmark: "Target ≥90% by deadline" },
  { label: "Win/loss interviews completed", benchmark: "≥2 per month (1 win, 1 loss)" },
  { label: "Enablement NPS (rep score)", benchmark: "Target ≥7/10 quarterly" },
]

export default function SalesEnablementCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Sales Enablement Calendar"
        title="A Sales Enablement Calendar That Cuts Ramp Time and Lifts Win Rates"
        subtitle="From battlecard refresh schedules to monthly coaching cadences — Momenties keeps every training deadline, content review, and competitive intel update on one calendar so your reps are always armed to win."
        cta="Start free — no credit card"
        ctaHref="/sign-up"
      />

      {/* Four pillars */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              Every Enablement System, One Calendar
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
              12-Month Sales Enablement Roadmap
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              A structured progression from content audit to a fully compounding enablement program.
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
              Sales Enablement KPIs Worth Tracking
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
              &ldquo;Before Momenties, our battlecards were six months stale, ramp certifications slipped by weeks, and nobody could tell you the last time a case study was reviewed. Now every rep knows exactly what&apos;s current, every asset has a review date on the calendar, and our average ramp dropped from 5.2 months to 3.8 months in one year.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Dara K.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              VP Sales Enablement, Enterprise SaaS — 80-rep sales org
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your enablement calendar and start reducing ramp time this quarter"
        subtitle="Momenties keeps every battlecard refresh, certification deadline, and coaching cadence on one calendar so your reps always have what they need to win."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
