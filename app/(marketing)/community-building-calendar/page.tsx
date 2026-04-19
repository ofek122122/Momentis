import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Community Building Calendar | Momenties",
  description: "Plan your community building calendar with member activation rhythms, moderation cadences, event programming, and health metric reviews. Build a community that retains and expands.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Member Activation & Onboarding Rhythm",
    body: "New member activation within 48 hours determines long-term retention: schedule a welcome message (personal or automated), a pinned orientation post, and a first-win prompt (ask them to introduce themselves or answer a starter question). Day 7 check-in: has the member posted or responded at least once? Members who reach 3 interactions in their first 7 days have 4× higher 90-day retention. Monthly new-member cohort report: track activation rate (target >60%), first-post rate (target >40%), and 30-day retention rate. Adjust onboarding flow quarterly based on cohort data.",
  },
  {
    icon: Clock,
    title: "Content Programming & Event Cadence",
    body: "Weekly content rhythm: 2–3 discussion prompts (Monday and Wednesday), 1 resource share (Thursday), 1 member spotlight or win celebration (Friday). Monthly community events: 1 live AMA or office hours, 1 themed discussion week, 1 curated best-of digest. Quarterly: community survey, retrospective with leadership team, next-quarter programming plan. Annual: community year-in-review published publicly, milestone celebration event. Pre-schedule all recurring touchpoints 12 weeks ahead so moderators maintain consistency through holidays and team transitions.",
  },
  {
    icon: BarChart3,
    title: "Moderation & Safety Cadences",
    body: "Daily moderation: one moderator on-call rotation, post-approval queue reviewed within 4 hours, escalation protocol for rule violations (warn → 24h mute → permanent ban). Weekly moderation sync: 30-minute async review of flagged content, policy edge cases, and tone drift. Monthly community health audit: toxicity rate (target <2% of posts), spam rate, member complaint volume, moderator burnout check (rotate if handling >20 escalations/week). Semi-annual community guidelines review: update for platform changes, community evolution, and legal requirements. Annual moderator training on bias, trauma-informed moderation, and crisis response.",
  },
  {
    icon: Users,
    title: "Growth, Churn & Expansion Calendar",
    body: "Monthly growth review: new member acquisition (organic referral vs paid vs cross-promotion), activation funnel conversion, 30/60/90-day retention cohort curves. Churn intervention: members with 30-day inactivity get a re-engagement prompt (win rate 12–18%). Expansion programming: identify top 10 contributors monthly for a super-member or ambassador program — recognition, early access, or co-creation opportunities. Quarterly partnership calendar: guest speakers from adjacent communities, cross-community events, co-published resources. Annual community offsite or conference if size warrants (>500 active members is a common threshold).",
  },
]

const timeline = [
  {
    phase: "Month 1–2",
    label: "Foundation & Seed Members",
    description:
      "Establish community platform and guidelines, seed with 25–50 founding members (existing advocates, beta users, engaged social followers), run daily prompts personally, document the emerging community culture before writing formal norms, and publish founding member recognition.",
  },
  {
    phase: "Month 3–4",
    label: "Activation Systems & First Events",
    description:
      "Automate welcome sequence and onboarding prompts, host first live event (AMA or workshop), publish community newsletter issue #1, onboard first volunteer moderator, and hit first milestone celebration (100 members or 100 posts — whichever comes first).",
  },
  {
    phase: "Month 5–6",
    label: "Programming Consistency",
    description:
      "Lock in weekly content rhythm, run first member spotlight series, publish first community survey and results, establish monthly moderator sync, and measure 30-day retention rate for the first time against a baseline cohort.",
  },
  {
    phase: "Month 7–12",
    label: "Scale & Culture Preservation",
    description:
      "Grow to 500+ active members while maintaining <4-hour moderation response. Launch ambassador program. Run quarterly retrospectives. Begin tracking community-attributed business outcomes (referrals, product feedback loops, support deflection rate). Publish annual community report.",
  },
]

const metrics = [
  { label: "7-day activation rate", benchmark: "≥60% of new members post or respond in first 7 days" },
  { label: "30-day member retention", benchmark: "≥55% of new members active in month 2" },
  { label: "Weekly active member ratio", benchmark: "≥20% of total members active each week" },
  { label: "Moderation response time", benchmark: "≤4 hours for flagged content on business days" },
  { label: "Organic referral rate", benchmark: "≥30% of new members referred by existing members" },
  { label: "Toxicity rate", benchmark: "<2% of posts flagged for violations" },
]

export default function CommunityBuildingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Community Building Calendar"
        title="Build a Thriving Community with Consistent Rhythms and Structured Programming"
        subtitle="Member activation, moderation cadences, event programming, and retention reviews — all scheduled so your community compounds in quality as it grows in size."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of a Community Building Calendar
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

      {/* 12-month timeline */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              12-Month Community Launch Calendar
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
              Community Health Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Track these six metrics monthly to confirm your community is healthy and growing.
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
              &ldquo;We grew from 400 to 8,200 members in 18 months. The biggest unlock wasn&apos;t the growth tactics — it was the consistency. Same weekly rhythm, every single week, without missing. Momenties is why we never missed.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Tara N.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Community Director, B2B SaaS platform (8,200 active members)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your community programming in minutes"
        subtitle="Momenties keeps every activation prompt, moderation cadence, and event in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
