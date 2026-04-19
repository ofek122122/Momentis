import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Lifecycle Email Calendar | Momenties",
  description: "Plan your lifecycle email calendar with trigger-based sequences, nurture cadences, broadcast planning, and deliverability reviews. Build an email program that compounds across the full customer lifecycle.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Trigger-Based Sequence Architecture Calendar",
    body: "Lifecycle email calendar is built on triggered sequences — not broadcast campaigns alone. Trigger architecture planning calendar: map every significant user action and lifecycle event, then assign an email response to each. Key triggers: sign-up → welcome sequence (5-email, days 1/3/7/14/30), first product action → activation congratulations, inactivity at 7 days → reminder sequence, onboarding checklist incomplete at day 14 → rescue sequence, upgrade trigger (usage at 80% of limit), renewal 90 days out → renewal sequence (5 emails over 60 days), cancellation initiated → save sequence (3 emails over 48 hours). Sequence review calendar: quarterly sequence audit (are trigger emails sending at expected volume? delivery delays? any sequences triggered incorrectly?), monthly trigger performance review (which sequences have above-benchmark open and click rates?), and annual sequence redesign (full lifecycle review — have customer behaviors changed since sequences were last updated?). Triggered emails consistently outperform broadcast emails by 3-8× on open rate — they are the foundation of the lifecycle email calendar.",
  },
  {
    icon: Clock,
    title: "Nurture & Broadcast Campaign Calendar",
    body: "Nurture calendar: MQL-to-SQL nurture sequence (prospects who downloaded content but did not request a demo — 6-email sequence over 4 weeks: email 1 content follow-up, email 2 use case story, email 3 competitor comparison, email 4 social proof, email 5 trial offer, email 6 direct sales outreach). Trial-to-paid nurture: 14-day trial sequence (day 1 onboarding, day 3 quick-win, day 7 feature highlight, day 10 urgency, day 13 save offer, day 14 expiry). Broadcast calendar: plan all promotional emails at the start of each quarter — product launches, major feature announcements, seasonal campaigns. Rule: no more than 2 promotional emails per month to the full list (subscriber fatigue threshold for B2B — higher for B2C). Broadcast scheduling: Tuesday-Thursday 10am-2pm recipient time zone for B2B (highest open rates). Broadcast preview: always send to 10% of list 2 hours early, monitor open rate, correct any issues before full send. Monthly broadcast audit: plan next month&apos;s sends before the month starts — never scramble for content on send day.",
  },
  {
    icon: BarChart3,
    title: "Segmentation & Personalization Calendar",
    body: "Segmentation calendar: monthly list hygiene (remove 90-day unengaged subscribers from broadcast list to active engaged segment — reduces spam rates, improves deliverability), quarterly segmentation review (are segments still accurately defined? ICP changes, product changes, new cohorts?). Personalization calendar: merge field audit (quarterly — verify all dynamic fields are populating correctly — broken personalization is worse than no personalization), behavioral personalization review (are triggered emails sending correct content based on user actions?), and industry/persona personalization (quarterly content refresh — are the case studies and customer stories in nurture emails current?). A/B testing calendar: one subject line test per month (20% of list — 2 variants, 1-hour test window, send winner to 80%), one CTA test per quarter (button text, placement, color), one sequence test per 6 months (different email ordering within a nurture sequence — statistically significant results require 30-day minimum).",
  },
  {
    icon: Users,
    title: "Deliverability Monitoring & List Health Calendar",
    body: "Weekly deliverability review (15 minutes): open rate versus 4-week rolling average (>5% drop triggers investigation), spam complaint rate (<0.08% — above triggers immediate list hygiene), bounce rate (<2% hard, <5% soft), and inbox placement test for key domain providers (Gmail, Outlook, Yahoo — monthly deliverability seed test). Monthly list health audit: remove hard bounces immediately, suppress soft bounce threshold (3+ soft bounces), remove unengaged subscribers (90-day no-open from broadcast — move to re-engagement sequence before suppression), and verify unsubscribe link function. Quarterly sender reputation audit: check SPF/DKIM/DMARC records still correctly configured, review sending domain reputation (Google Postmaster Tools, Microsoft SNDS), and verify no IP warming needed after volume increase. Annual email program audit: deliverability improvement over prior year, list growth rate versus unsubscribe rate, revenue attributed to email by sequence type, platform evaluation (are you on the right ESP for your list size and use case?).",
  },
]

const timeline = [
  {
    phase: "Month 1",
    label: "Sequence Architecture & Infrastructure",
    description:
      "Map full lifecycle email trigger architecture. Audit existing sequences for gaps and outdated content. Set up deliverability monitoring (Google Postmaster Tools, DMARC reports). Verify SPF/DKIM/DMARC authentication. Build welcome sequence if not exists. Set baseline metrics for all existing sequences.",
  },
  {
    phase: "Month 2–3",
    label: "Nurture Sequence Build",
    description:
      "Build MQL nurture sequence (6 emails). Build trial-to-paid nurture (7 emails). Launch monthly A/B testing cadence for subject lines. First monthly list health audit — remove hard bounces, set up 90-day unengaged suppression. Plan first 3 months of broadcast calendar. Measure activation and conversion rate from new sequences.",
  },
  {
    phase: "Month 4–6",
    label: "Segmentation & Personalization",
    description:
      "Quarterly segmentation review and rebuild. Launch first behavioral personalization (if sending product-based content — match to user&apos;s actual features in use). Set up monthly merge field audit. First quarterly sequence performance review. Evaluate ESP capabilities against current needs — document gaps. Expansion sequence live for usage-based triggers.",
  },
  {
    phase: "Month 7–12",
    label: "Attribution & Full-Funnel Optimization",
    description:
      "Revenue attribution model for lifecycle email: measure trial conversion rate before/after new nurture sequence, churn reduction from re-engagement sequence, expansion revenue from usage-trigger email. Annual email program audit. Platform migration if needed. Year-2 lifecycle email strategy based on 12-month performance data.",
  },
]

const metrics = [
  { label: "Welcome sequence open rate", benchmark: "Email 1 (day 1): ≥50% open rate. Email 5 (day 30): ≥25% open rate. Below benchmark suggests welcome content is generic" },
  { label: "Trial conversion from nurture", benchmark: "Trial-to-paid conversion with lifecycle nurture should be ≥5% above non-nurtured cohort — measure difference, not absolute" },
  { label: "Spam complaint rate", benchmark: "Keep below 0.08% per send. Above 0.1% triggers deliverability throttling; above 0.3% triggers domain blacklist risk" },
  { label: "Re-engagement sequence recovery", benchmark: "90-day unengaged re-engagement: ≥20% of re-engaged subscribers should become active within 30 days of sequence" },
  { label: "Email-attributed revenue", benchmark: "Track in CRM: email-touched deals should show ≥15% higher close rate than deals with no email touches" },
  { label: "List growth rate vs unsubscribe rate", benchmark: "Healthy list: growth rate >3× unsubscribe rate. If unsubscribe rate exceeds 0.5% of list size per month, content or frequency problem" },
]

export default function LifecycleEmailCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Lifecycle Email Calendar"
        title="Build an Email Program That Compounds Across the Full Customer Lifecycle"
        subtitle="Trigger-based sequences, nurture cadences, broadcast planning, and deliverability reviews — all on one calendar that turns email into a compounding revenue channel."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of a Lifecycle Email Calendar
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
              12-Month Lifecycle Email Calendar
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
              Lifecycle Email Performance Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Track these six metrics monthly to identify deliverability issues, sequence performance problems, and revenue attribution opportunities.
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
              &ldquo;We had a welcome sequence and a monthly newsletter — that was our entire lifecycle email program for two years. When we built the full trigger architecture — activation, inactivity, usage-limit, renewal, save — and put it on a calendar with quarterly review cadences, our trial-to-paid conversion rate went from 11% to 19% in four months. The trial-to-paid nurture sequence alone paid for a year of our ESP cost in the first week it ran.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Tomás B.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Head of Growth, B2B SaaS (trial-to-paid from 11% to 19% in 4 months)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your lifecycle email calendar in minutes"
        subtitle="Momenties keeps every trigger sequence, nurture campaign, broadcast deadline, and deliverability review in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
