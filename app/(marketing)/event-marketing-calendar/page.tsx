import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Event Marketing Calendar | Momenties",
  description: "Plan your event marketing calendar with promotion timelines, speaker management, on-site logistics, and post-event follow-up. Run events that fill pipelines, not just rooms.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Event Promotion Timeline & Registration Pipeline",
    body: "Promotion opens 8–10 weeks before in-person events, 4–6 weeks before virtual. Registration benchmark: 60% of target by 3 weeks out — if below, trigger additional email and paid promotion. Email promotion cadence: save-the-date 8 weeks, first announcement 6 weeks, speaker spotlight 4 weeks, agenda release 3 weeks, last-call 1 week, day-before reminder, day-of logistics. Registration-to-attendance conversion benchmark: 50–60% virtual, 70–80% in-person (when ticket is paid). Free virtual events: 30–40% average attendance rate — build to 1.5× registration target for room fill.",
  },
  {
    icon: Clock,
    title: "Speaker & Sponsor Management Calendar",
    body: "Speaker timeline: invite 12–16 weeks out (keynotes) or 8–10 weeks (breakout sessions), brief and topic confirm 6 weeks out, slide template and content guidelines 4 weeks, first slide draft review 2 weeks, final slides due 5 days, tech rehearsal 2–3 days before. Sponsor timeline: prospectus published 6 months ahead, tier-1 sponsor close target 12 weeks before, deliverable list confirmed 6 weeks, asset collection 4 weeks, logistics brief 2 weeks, on-site setup day. Sponsor post-event deliverable calendar: lead list within 7 days, recap report within 14 days.",
  },
  {
    icon: BarChart3,
    title: "On-Site & Day-Of Logistics Calendar",
    body: "T-minus timeline: 30 days — final attendee count to venue, catering headcount, A/V brief. 14 days — staff briefing, badge and print production. 7 days — shipping confirmation, tech run-through, run-of-show final draft. 48 hours — attendee reminder with logistics, Wi-Fi, and check-in instructions. Day-of: registration opens 60 minutes before first session; keynote sound check 90 minutes before; social media coverage live from doors-open. On-site team: dedicated registration lead, speaker wrangler, and social media operator — brief all three 48 hours ahead with run-of-show and escalation contacts.",
  },
  {
    icon: Users,
    title: "Post-Event Follow-Up & Pipeline Calendar",
    body: "Day-of (within 4 hours): thank-you email to all attendees with recording link and session resources. Day 1–2: hot-lead sales handoff (ICP attendees + booth interactions flagged in CRM with conversation notes). Day 3: session recording published and promoted to no-shows. Day 7: sponsor lead list delivered, NPS survey sent to attendees. Day 14: content repurposing sprint — clips from keynote, speaker quotes, attendee photos, session blog posts. Day 30: pipeline attribution review (event-sourced meetings booked, opportunities created, MQL volume). Day 45: retrospective with event team and sponsor account managers.",
  },
]

const timeline = [
  {
    phase: "T−12 to T−8 weeks",
    label: "Foundations",
    description:
      "Confirm venue or virtual platform, finalize budget, send keynote speaker invites, publish event page, open early-bird registration, begin sponsor outreach with prospectus, and launch save-the-date email to full list.",
  },
  {
    phase: "T−8 to T−4 weeks",
    label: "Promotion Sprint",
    description:
      "Execute weekly email promotions, paid social amplification, speaker spotlight content, partner co-promotions, and PR outreach. Monitor registration pace daily — adjust spend if below 60% target by T-minus 3 weeks.",
  },
  {
    phase: "T−4 to T−1 week",
    label: "Production Lock",
    description:
      "Final agenda confirmed, all slides submitted, sponsor assets collected, print production ordered, staff briefing completed, tech rehearsal run, attendee logistics email sent, and run-of-show finalized with all team leads.",
  },
  {
    phase: "T+0 to T+45 days",
    label: "Post-Event Revenue Capture",
    description:
      "Execute same-day thank-you, hot-lead handoff within 48 hours, recording and content distribution by day 7, pipeline attribution review at day 30, and full retrospective by day 45. Each post-event touchpoint should drive pipeline, not just sentiment.",
  },
]

const metrics = [
  { label: "Registration-to-attendance rate", benchmark: "50–60% virtual, 70–80% paid in-person" },
  { label: "Registration pace (T-minus 3 weeks)", benchmark: "≥60% of target to avoid last-minute spend escalation" },
  { label: "Hot-lead-to-meeting conversion", benchmark: "15–25% of hot leads booked to a sales meeting within 30 days" },
  { label: "Event-sourced pipeline", benchmark: "5–10× event cost in pipeline created within 45 days" },
  { label: "Attendee NPS", benchmark: "≥40 for industry conferences, ≥55 for curated customer events" },
  { label: "Recording view-to-registration ratio", benchmark: "≥30% of registrants watch the recording within 14 days" },
]

export default function EventMarketingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Event Marketing Calendar"
        title="Run Events That Fill Pipelines with a Structured Marketing Calendar"
        subtitle="Promotion timelines, speaker management, on-site logistics, and post-event follow-up — all scheduled so every event compounds into measurable revenue, not just attendance."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of an Event Marketing Calendar
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

      {/* T-minus timeline */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              Event Marketing Timeline
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
              Event Marketing Performance Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Track these six metrics for every event to measure pipeline impact, not just attendance.
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
              &ldquo;We ran 14 field events last year and generated $2.8M in event-attributed pipeline. The post-event follow-up calendar was the difference — most teams do the event and then go dark for two weeks. We were in the inbox at 4 hours.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Nia S.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Field Marketing Director, Enterprise SaaS (14 events/year, $2.8M pipeline)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your event marketing calendar in minutes"
        subtitle="Momenties keeps every promotion deadline, speaker briefing, and post-event follow-up in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
