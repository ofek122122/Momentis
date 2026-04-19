import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Product Launch Calendar | Momenties",
  description: "Plan your product launch calendar with pre-launch sequencing, launch day coordination, post-launch analysis, and community activation. Ship launches that generate momentum.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Pre-Launch Sequencing & Build-Up Calendar",
    body: "Great launches are built in the weeks before the announcement. Pre-launch sequencing calendar: T-minus 10 weeks — identify launch type (major, minor, feature, partnership), assign DRI (directly responsible individual), and create launch brief. T-minus 8 weeks — all copy and creative in production. T-minus 6 weeks — beta customer program activated (10–30 customers using the feature with feedback loop). T-minus 4 weeks — press embargo outreach (for major launches), all assets in review. T-minus 2 weeks — landing page live, email sequence scheduled, launch-day social queue ready, internal team briefed. T-minus 48 hours — launch checklist final check: are all flags, redirects, and tracking pixels live?",
  },
  {
    icon: Clock,
    title: "Launch Day & Week Coordination",
    body: "Launch day schedule: 7am ET — email send to full list (Monday or Tuesday optimal). 8am ET — press release distributed (wire + direct to embargoed journalists). 9am ET — social posts go live across all platforms simultaneously. 10am ET — Product Hunt page goes live if applicable (voting peaks 9am–12pm PT). 12pm ET — founder LinkedIn post or thread. 2pm ET — community post (Slack groups, Reddit, Discord, relevant online communities). 5pm ET — first-day metrics check: email open rate, social engagement, website traffic, signups. Launch week: daily monitoring, rapid content response to press coverage, same-day replies to all social mentions.",
  },
  {
    icon: BarChart3,
    title: "Post-Launch Analysis & Iteration Calendar",
    body: "Day 3 post-launch: first full metrics review — trial signups, paid conversions, NPS from launch users, press coverage volume. Day 7: launch retrospective with product and marketing team — what worked, what missed, what to iterate. Day 14: pipeline attribution report — which launch activities drove most qualified leads? Day 30: long-term impact review — are launch-cohort users activating and retaining at the expected rate? Month 2: apply learnings to next launch brief. Annual launch retrospective: rank all launches by impact-per-hour-invested — use to inform next year&apos;s launch strategy and resource allocation.",
  },
  {
    icon: Users,
    title: "Community & Partner Activation Calendar",
    body: "Launch amplification calendar: identify 10–20 community amplifiers (influential users, newsletter writers, podcast hosts, active community members) 4 weeks before launch — give them early access and a personal note. Partner co-promotion calendar: if launch includes an integration or partnership, coordinate simultaneous announcement with partner&apos;s social and email (brief partner team 3 weeks ahead). Product Hunt launch: if applicable, activate PH hunter network 1 week ahead (identify hunter, line up supporter asks from existing community). Developer community launches (if API/SDK): coordinate with dev rel for documentation, tutorial post, and community announcement same day. Retrospective: which amplifiers drove the most signups? Build relationship for next launch.",
  },
]

const timeline = [
  {
    phase: "T-10 to T-8 weeks",
    label: "Launch Brief & Asset Production",
    description:
      "Define launch tier and DRI, write launch brief, begin creative production (landing page, email, social assets, press materials), identify beta customers, brief partner team if applicable, and create launch checklist.",
  },
  {
    phase: "T-6 to T-4 weeks",
    label: "Beta, Press & Partner Prep",
    description:
      "Beta program live with 10–30 customers, collect testimonials and case data, send press embargo to top 5 journalists, brief partner marketing teams, begin community amplifier outreach, and finalize all copy for review.",
  },
  {
    phase: "T-2 to T-0",
    label: "Final Preparation & Launch',",
    description:
      "Landing page live, email scheduled, social queue ready, launch checklist completed, internal team briefed, tracking verified. Launch day: execute launch day schedule (email → press → social → community → PM monitoring).",
  },
  {
    phase: "T+1 to T+30",
    label: "Post-Launch Iteration',",
    description:
      "Day 3 metrics review, Day 7 retrospective, Day 14 pipeline attribution, Day 30 cohort analysis. Apply learnings to next launch brief. Build amplifier relationships for next cycle.",
  },
]

const metrics = [
  { label: "Launch day signups", benchmark: "Major launch: ≥2× baseline daily signup rate on launch day" },
  { label: "Email open rate", benchmark: "Launch emails: ≥30% open rate vs 20–25% baseline" },
  { label: "Press coverage volume", benchmark: "Track tier-1 placements per launch — set target in brief" },
  { label: "Launch cohort activation rate", benchmark: "Launch users should activate at ≥baseline activation rate" },
  { label: "Pipeline from launch (30-day)", benchmark: "Major launch should generate measurable MQL spike in launch week" },
  { label: "Community amplifier reach", benchmark: "Track signups attributed to each amplifier — build the list" },
]

export default function LaunchCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Launch Calendar"
        title="Ship Launches That Generate Momentum with a Structured Launch Calendar"
        subtitle="Pre-launch sequencing, day-of coordination, community activation, and post-launch analysis — all on one calendar that turns product updates into growth events."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of a Launch Calendar
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

      {/* Launch timeline */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              Launch Timeline Framework
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
              Launch Performance Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Track these six metrics for every major launch to measure momentum — not just activity.
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
              &ldquo;We shipped 22 launches in one year — 4 major, 18 minor. The only reason we could sustain that pace without chaos was the calendar. Every launch ran on the same template. Every DRI knew exactly what was due when.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Omar H.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Head of Product, Consumer SaaS (22 launches/year, 0 missed deadlines)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your next product launch in minutes"
        subtitle="Momenties keeps every pre-launch deadline, launch day task, and post-launch review in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
