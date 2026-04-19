import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Account-Based Marketing Calendar | Momenties",
  description: "Plan your ABM calendar with account selection, multi-touch campaign sequencing, sales alignment rituals, and pipeline reviews. Run ABM as a revenue program, not a campaign.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Account Selection & ICP Tiering Calendar",
    body: "ABM calendar starts with account selection — running ABM against the wrong accounts wastes more budget than any tactical mistake. Account selection calendar: quarterly ICP review (ideal customer profile updated based on closed-won data — which accounts actually expanded?), firmographic scoring (company size, industry, tech stack match, funding recency — score 0-100), intent data layering (Bombora, G2, Demandbase — accounts showing active intent signals score higher), and sales-sourced prioritization (reps nominate accounts they believe are in-market — weight heavily). Tier structure: Tier 1 (50-100 named accounts — fully personalized ABM: custom content, executive outreach, direct mail, dedicated AE), Tier 2 (200-500 accounts — industry-personalized ABM: segment-specific content, SDR outreach at scale), Tier 3 (500-2,000 accounts — broad ABM: industry content, retargeting, programmatic). Quarterly tier review: accounts that show intent signals get promoted to Tier 1, accounts that go dark for 90 days get demoted to Tier 3 or retired.",
  },
  {
    icon: Clock,
    title: "Multi-Touch Campaign Sequencing Calendar",
    body: "ABM campaigns are not single sends — they are coordinated multi-channel sequences designed to create surround-sound awareness in the buying committee before outreach begins. 8-touch ABM sequence over 6 weeks (Tier 1 accounts): week 1 — LinkedIn ad impressions (decision-maker targeting by company + title), week 2 — personalized direct mail (physical letter to economic buyer), week 3 — SDR email sequence begins (personalized to account-specific pain point, not generic), week 4 — executive sponsor email from CEO or VP (high-signal, not SDR), week 5 — webinar invitation (topic matched to account-specific use case), week 6 — call cadence from AE (warm call, not cold — they&apos;ve seen multiple touches). Tier 2 sequence (4 touches over 4 weeks): LinkedIn ads → SDR email → case study relevant to industry → webinar invite. Campaign scheduling: build 4-week campaign calendar at start of each quarter, assign accounts to sequences, coordinate LinkedIn ad budget with paid social calendar, and sync SDR sequence launch with marketing automation.",
  },
  {
    icon: BarChart3,
    title: "Intent Signal Monitoring & Trigger Calendar",
    body: "Intent monitoring calendar: weekly intent signal review (30 minutes, every Monday) — which Tier 1-2 accounts showed above-baseline intent signals this week? Accounts spiking on your category keywords (Bombora) or reviewing competitors on G2 get immediately promoted to active outreach. Website visitor identification: weekly Clearbit/6sense review — which accounts are visiting your site but not converting? Trigger-based escalation calendar: account visits pricing page → SDR outreach within 24 hours, account opens email + visits website in same week → escalate to AE outreach, account downloads case study → personalized follow-up with relevant customer story. Quarterly account health review: buying committee mapping update (has the economic buyer changed? any new champion identified through LinkedIn?), technology stack change monitoring (if they remove a competitive tool — immediate outreach trigger), and funding round monitoring (Series B fundraise = expansion budget signal — escalate Tier 3 accounts to Tier 1 immediately post-announcement).",
  },
  {
    icon: Users,
    title: "Sales-Marketing Alignment Rituals & ABM Pipeline Reviews Calendar",
    body: "ABM fails most often at the sales-marketing handoff — not in the campaign execution. Weekly ABM standup (30 minutes, Tuesday): marketing shares intent signals and new active accounts, sales shares pipeline updates and account feedback (are the messages resonating?). Monthly ABM pipeline review (60 minutes): ABM-sourced pipeline by tier (is Tier 1 investment generating Tier 1 pipeline?), ABM-influenced pipeline (deals where ABM touches accelerated or expanded), average deal size ABM vs non-ABM (benchmark: ABM deals should be 30-50% larger), and sales cycle length (benchmark: ABM deals should close 20-30% faster). Quarterly ABM retrospective: full-funnel analysis by account tier (account to MQA — marketing qualified account — rate, MQA to opportunity rate, opportunity win rate), message performance analysis (which content and offers drove the highest meeting acceptance rate), and budget reallocation decision. Annual ABM program review: tier size optimization, ICP criteria update from 12-month win/loss data, and intent data vendor evaluation.",
  },
]

const timeline = [
  {
    phase: "Month 1",
    label: "Account Selection & Infrastructure",
    description:
      "Build initial Tier 1 account list (50-100 accounts) using CRM data + sales input + intent signals. Set up account-based advertising (LinkedIn Matched Audiences or Demandbase). Configure website visitor identification. Align with sales on weekly standup cadence. Define MQA criteria (what signals indicate an account is sales-ready?).",
  },
  {
    phase: "Month 2–3",
    label: "First ABM Campaign Execution",
    description:
      "Launch first 8-touch sequence for Tier 1 accounts. Build Tier 2 sequence for 200 accounts. Weekly intent review cadence established. First monthly ABM pipeline review. Measure early signals: LinkedIn ad engagement rates, email open rates, website visits from target accounts. Adjust messaging based on first 30 days of data.",
  },
  {
    phase: "Month 4–6",
    label: "Optimize & Scale",
    description:
      "Quarterly ICP review and account tier rebalancing. Scale winning sequences — if 8-touch Tier 1 sequence is producing meeting acceptance rates above benchmark, increase account volume. Retire underperforming message angles. First ABM-attributed pipeline appears in CRM. Identify top-performing content for ABM personalization.",
  },
  {
    phase: "Month 7–12",
    label: "Revenue Attribution & Systematize",
    description:
      "Full ABM attribution model running: sourced + influenced pipeline by tier. Measure deal size and cycle length difference for ABM vs non-ABM. Annual ABM program review. Evaluate expansion — executive gifting program, account-specific content, in-person event strategy for top Tier 1 accounts. ABM playbook from first 12 months drives year 2 investment decisions.",
  },
]

const metrics = [
  { label: "Tier 1 account to MQA rate", benchmark: "Target 15-25% of Tier 1 accounts become MQAs per quarter — below 10% signals ICP or message mismatch" },
  { label: "ABM deal size vs non-ABM", benchmark: "ABM-sourced deals should be 30-50% larger — if not, Tier 1 selection is not targeting high-ACV accounts" },
  { label: "ABM sales cycle length", benchmark: "ABM deals should close 20-30% faster than non-ABM — multi-touch pre-awareness reduces sales friction" },
  { label: "Meeting acceptance rate from sequences", benchmark: "Tier 1 8-touch sequence: ≥15% meeting acceptance rate. Below 8% requires message or account list revision" },
  { label: "ABM-influenced pipeline %", benchmark: "At scale: 25-40% of total pipeline should be ABM-influenced (not just sourced — any deal with ≥3 ABM touches)" },
  { label: "Intent-to-meeting conversion", benchmark: "Accounts showing intent signals that receive outreach within 48 hours: 3-5× higher meeting rate than cold outreach" },
]

export default function AccountBasedMarketingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Account-Based Marketing Calendar"
        title="Run ABM as a Revenue Program, Not a Campaign, with a Structured Calendar"
        subtitle="Account selection, multi-touch campaign sequencing, sales alignment rituals, and pipeline reviews — all on one calendar that makes ABM a predictable revenue channel."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of an Account-Based Marketing Calendar
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
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              12-Month ABM Calendar
            </h2>
          </Reveal>
          <div className="space-y-6">
            {timeline.map(({ phase, label, description }) => (
              <Reveal key={phase}>
                <div
                  className="rounded-xl p-8"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <span
                        className="inline-block rounded-lg px-3 py-1 text-xs font-semibold"
                        style={{ background: "rgba(197,163,92,0.15)", color: "#c5a35c" }}
                      >
                        {phase}
                      </span>
                    </div>
                    <div>
                      <h3 className="mb-2 font-display text-lg font-semibold" style={{ color: "#f0ece3" }}>
                        {label}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-4" style={{ color: "#f0ece3" }}>
              ABM Performance Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Track these six metrics monthly to identify whether your ABM program is generating pipeline at the deal quality and velocity that justifies the investment.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map(({ label, benchmark }) => (
              <Reveal key={label}>
                <div
                  className="rounded-xl p-6"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#c5a35c" }}>
                    {label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>
                    {benchmark}
                  </p>
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
              &ldquo;We ran ABM for 8 months without a calendar and it was chaos. Campaigns launched when content was ready, sales didn&apos;t know which accounts were in sequence, and we had no idea which touches were producing meetings. When we moved to a structured ABM calendar — weekly intent review, Tuesday standup, monthly pipeline review — our Tier 1 meeting acceptance rate went from 7% to 19% in one quarter. The calendar forced the sales-marketing alignment that ABM requires to actually work.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Priya D.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              VP Marketing, B2B Enterprise SaaS ($25M ARR, 38% of closed-won from ABM at 18 months)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your ABM calendar in minutes"
        subtitle="Momenties keeps every account sequence, intent signal review, sales alignment standup, and pipeline review in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
