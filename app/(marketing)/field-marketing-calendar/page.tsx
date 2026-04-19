import type { Metadata } from "next"
import { MapPin, Calendar, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Field Marketing Calendar | Momenties",
  description: "Build a systematic field marketing calendar — regional event planning, trade show execution, sales territory alignment, and event ROI attribution that ties field spend to closed revenue.",
}

const pillars = [
  {
    icon: MapPin,
    title: "Regional Event Planning & Trade Show Calendar",
    description:
      "Map every trade show, regional conference, user group, and hosted dinner onto a geographic opportunity calendar — with 120-day lead times for venue booking, 90-day windows for sponsorship confirmation, and 60-day pre-event sales enablement sprints. Momenties surfaces upcoming industry calendars, prompts booth design and collateral reviews, and syncs regional event schedules with territory sales rep availability so field marketing and sales are always co-coordinated.",
  },
  {
    icon: Calendar,
    title: "Sales Territory Alignment & Pre-Event ABM",
    description:
      "Field marketing ROI lives in the pre-event account-based outreach that converts booth traffic into pipeline. Momenties schedules territory alignment meetings 8 weeks before each event, triggers account list building and personalized pre-event campaigns 6 weeks out, and queues follow-up task reminders for sales reps the morning after each event — closing the gap between field activity and CRM pipeline creation that kills most field marketing programs.",
  },
  {
    icon: TrendingUp,
    title: "Hosted Executive Events & Customer Dinners",
    description:
      "Executive roundtables and customer dinners generate the highest quality pipeline per dollar of field spend — but require 10-week planning cycles, invitation sequencing, venue contracting, and post-event follow-up management. Momenties manages the full hosted event calendar: invitee list finalization 8 weeks out, catering/AV confirmation 4 weeks out, RSVPs closed 2 weeks out, and day-of briefing decks generated from CRM data — turning hosted events from a heroic one-off into a repeatable program.",
  },
  {
    icon: BarChart3,
    title: "Field Marketing Attribution & ROI Reviews",
    description:
      "Quarterly field marketing reviews that tie event attendance to pipeline created, pipeline influenced, and closed-won ARR. Momenties aggregates booth leads, hosted event attendees, and pre-event ABM touches into a multi-touch attribution dashboard — enabling field marketers to prove spend efficiency, retire low-performing events from the calendar, and double down on the regional segments and event types generating the highest LTV pipeline.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Field Calendar Audit & Territory Mapping",
    description: "Audit prior year event spend and ROI, map regional field budget to territory revenue opportunity, build 12-month event calendar with ownership and lead times assigned.",
  },
  {
    month: "Month 3–4",
    title: "Trade Show & Conference Planning Launch",
    description: "Confirm Q2 and Q3 trade show sponsorships, complete booth design reviews, finalize speaking submission deadlines, and establish pre-event ABM playbooks per event.",
  },
  {
    month: "Month 5–6",
    title: "Hosted Event Program Build",
    description: "Design executive roundtable format and invitation strategy, secure venue calendar for H2, build invitee list criteria and CRM-based targeting workflow, and test follow-up automation.",
  },
  {
    month: "Month 7–8",
    title: "Peak Event Season Execution",
    description: "Execute H2 trade shows and hosted dinners; enforce pre-event ABM and post-event follow-up SLAs with Momenties task queues; capture leads and pipeline attribution in real time.",
  },
  {
    month: "Month 9–10",
    title: "Mid-Year Attribution Review & Calendar Optimization",
    description: "Run field marketing attribution analysis; retire low-ROI events from H2 calendar; reallocate budget to highest-pipeline events; present findings to sales and marketing leadership.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review & Next-Year Planning",
    description: "Finalize annual field marketing ROI report, lock next-year event calendar, negotiate early trade show sponsorships, and allocate regional budget based on LTV territory analysis.",
  },
]

const kpis = [
  {
    metric: "Pipeline per Event Dollar",
    target: "≥ 5× spend",
    description: "Total pipeline generated or influenced per dollar of field marketing spend — primary efficiency metric for justifying and growing field budget.",
  },
  {
    metric: "Post-Event Follow-Up Rate",
    target: "100% within 48h",
    description: "Percentage of booth leads and hosted event attendees receiving personalized follow-up within 48 hours — the single biggest driver of event-to-opportunity conversion.",
  },
  {
    metric: "Event-to-Opportunity Rate",
    target: "≥ 15%",
    description: "Percentage of qualified event contacts that convert to an open pipeline opportunity within 30 days — benchmark separates high-performing field programs from attendance vanity metrics.",
  },
  {
    metric: "Hosted Event Attendance Rate",
    target: "≥ 70% of invitees",
    description: "Acceptance rate for executive roundtables and customer dinners — below 50% signals invitee list quality or invitation sequencing issues.",
  },
  {
    metric: "Field-Sourced ARR",
    target: "Track & grow YoY",
    description: "Closed-won ARR where a field event was the first-touch or last-touch in the deal timeline — the board-level metric that justifies field marketing headcount.",
  },
  {
    metric: "Cost per Pipeline Dollar",
    target: "≤ $0.20",
    description: "Total field marketing cost divided by total pipeline generated — benchmark for enterprise field teams; top quartile programs run $0.10–0.15.",
  },
]

const testimonial = {
  quote:
    "Field marketing was a black box before Momenties. We had events on three spreadsheets, no pre-event ABM coordination with sales, and post-event follow-up that happened two weeks late if it happened at all. Now every event has a 120-day plan, sales reps get day-after task queues, and we attributed $2.8M in pipeline to field in the first year.",
  name: "Fatima A.",
  title: "Senior Director of Field Marketing, Enterprise B2B SaaS",
}

export default function FieldMarketingCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Field Marketing Calendar"
        title="Turn Every Trade Show into a Pipeline Machine"
        subtitle="A structured field marketing calendar with 120-day event planning, pre-event ABM playbooks, post-event follow-up SLAs, and attribution that proves field ROI to your board."
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
            Four Systems That Make Field Marketing Repeatable
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
            Your 12-Month Field Marketing Roadmap
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
            KPIs That Prove Field Marketing ROI
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
