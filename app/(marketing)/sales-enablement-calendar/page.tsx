import type { Metadata } from "next"
import { BookOpen, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Sales Enablement Calendar | Momenties",
  description: "Build a systematic sales enablement calendar — onboarding ramp programs, content refresh cycles, skills assessment cadences, manager coaching rhythms, and enablement ROI measurement schedules that reduce ramp time and lift win rates.",
}

const pillars = [
  {
    icon: BookOpen,
    title: "Sales Onboarding Ramp Program & Time-to-First-Deal Calendar",
    description:
      "Sales rep ramp is the most expensive failure mode in go-to-market — and it&apos;s almost entirely a function of onboarding program quality and calendar discipline. Momenties schedules the complete ramp calendar: week 1-2 product and company foundations, week 3-4 ICP and buyer journey training, week 5-6 demo certification (required before first solo customer call), week 7-8 objection handling and competitive positioning, week 9-10 first deal coaching, and week 11-12 full quota ramp-up. 30/60/90-day milestone reviews with manager check-ins are automated. Enablement graduation certificates — required before accessing the full deal desk and pricing approval — prevent unready reps from damaging enterprise relationships.",
  },
  {
    icon: RefreshCw,
    title: "Enablement Content Refresh Cycles & Knowledge Currency Calendar",
    description:
      "Sales content becomes stale faster than enablement teams update it — competitive battlecards from 6 months ago lose deals today. Momenties schedules quarterly battlecard reviews (triggered by win/loss analysis, competitor pricing changes, or major product announcements), bi-monthly sales deck refresh cycles aligned to product launches and messaging updates, and annual full content library audits where outdated materials are archived and high-performing content is doubled down. Rep knowledge currency checks — triggered by product releases — ensure all reps are tested and certified on new product features before customer conversations begin. Field feedback loops (rep-reported content gaps) are collected weekly and reviewed monthly.",
  },
  {
    icon: TrendingUp,
    title: "Skills Assessment Cadence & Coaching Program Calendar",
    description:
      "Sales skills without a measurement and coaching cadence don&apos;t improve systematically. Momenties schedules quarterly skills assessments (call recording analysis, demo quality review, discovery qualification scoring) for all quota-carrying reps, bi-weekly manager coaching sessions with rep-specific improvement plans, and annual comprehensive sales skills certification cycles where reps are re-qualified on core competencies. Manager enablement calendar — ensuring managers are trained on coaching methodologies, new product features, and enablement tools before rep training launches — prevents the cascade failure of enabling reps with uninformed managers. High-performer knowledge capture programs are calendared semi-annually.",
  },
  {
    icon: BarChart3,
    title: "Enablement ROI Measurement & Win Rate Attribution Calendar",
    description:
      "Sales enablement programs without ROI measurement lose budget in every planning cycle. Momenties schedules monthly enablement performance dashboards (content utilization rates, training completion rates, time-to-first-deal by cohort), quarterly win rate attribution analysis (comparing win rates for reps with high enablement engagement vs. low), and annual enablement program ROI reviews presenting cost-per-rep-trained vs. revenue-per-rep improvement. Deal coaching effectiveness — comparing win rates on coached deals vs. uncoached — is measured quarterly. Enablement NPS from the sales team is collected after each major training program and reviewed before resource allocation decisions.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Enablement Audit & Ramp Program Architecture",
    description: "Audit current rep ramp time, time-to-first-deal, and win rate by cohort; identify content gaps; build structured 90-day onboarding program; establish skills assessment framework; map enablement content library.",
  },
  {
    month: "Month 3",
    title: "Onboarding Program Launch & Content Refresh Sprint",
    description: "Launch structured onboarding program for all new hires; run first quarterly battlecard refresh; establish demo certification requirement; launch enablement performance dashboard.",
  },
  {
    month: "Month 4–5",
    title: "Coaching Program Launch & Skills Baseline Assessment",
    description: "Launch bi-weekly manager coaching cadence; run first quarterly skills assessment for all quota-carrying reps; create rep-specific improvement plans; begin field feedback collection on content gaps.",
  },
  {
    month: "Month 6",
    title: "Mid-Year Enablement Review & Win Rate Analysis",
    description: "Run mid-year win rate attribution analysis; compare ramp time for Q1-Q2 hires vs. prior cohorts; review content utilization rates; adjust H2 enablement priorities based on data.",
  },
  {
    month: "Month 7–9",
    title: "Annual Certification Launch & Content Library Audit",
    description: "Launch annual sales skills certification cycle; run full content library audit; archive outdated materials; run second quarterly battlecard refresh; complete manager enablement training for H2 product releases.",
  },
  {
    month: "Month 10–12",
    title: "Annual Enablement Review & SKO Planning",
    description: "Present annual enablement ROI report (ramp improvement, win rate lift, content utilization); begin SKO content planning for Q1; finalize next-year enablement program budget; lock onboarding calendar for planned Q1 hires.",
  },
]

const kpis = [
  {
    metric: "Average Ramp Time",
    target: "≤ 90 days to full quota",
    description: "Average time from hire date to first full-quota month — above 120 days indicates onboarding program gaps; best-in-class enterprise SaaS teams ramp AEs in 60-90 days with structured programs.",
  },
  {
    metric: "Content Utilization Rate",
    target: "≥ 60% of assets used/quarter",
    description: "Percentage of enablement content assets accessed by at least one rep in the trailing quarter — below 40% utilization indicates content relevance or discovery problems, not quantity problems.",
  },
  {
    metric: "Demo Certification Rate",
    target: "100% certified before first call",
    description: "Percentage of new reps certified on demo before first solo customer call — any uncertified demos risk damaging enterprise relationships and are a leading cause of first-call conversion below 30%.",
  },
  {
    metric: "Win Rate for Enabled Reps",
    target: "≥ 10% above unenabled",
    description: "Difference in win rate between reps with high enablement engagement vs. low — below 5% differential suggests enablement content is not addressing actual deal-losing gaps.",
  },
  {
    metric: "Enablement NPS",
    target: "≥ 7.5 / 10 per program",
    description: "Sales rep satisfaction score after each training program — below 6.5 indicates program quality or relevance issues; reps who don&apos;t value enablement don&apos;t apply it in deals.",
  },
  {
    metric: "Battlecard Freshness",
    target: "100% updated within 90 days",
    description: "Percentage of active competitive battlecards updated within the trailing 90 days — stale battlecards cost deals; above 120 days without update renders competitive guidance unreliable.",
  },
]

const testimonial = {
  quote:
    "Reps were ramping in 6 months because onboarding was ad-hoc, battlecards were 9 months out of date, and coaching only happened when a deal slipped. Momenties gave us a structured enablement calendar. Average ramp dropped from 26 weeks to 10 weeks, win rate improved 14 points, and for the first time our enablement team had budget justification based on actual revenue impact.",
  name: "Sade A.",
  title: "VP Revenue Enablement, Series C B2B SaaS",
}

export default function SalesEnablementCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Sales Enablement Calendar"
        title="90-Day Ramp. Current Battlecards. 14-Point Win Rate Improvement."
        subtitle="A systematic sales enablement calendar with structured onboarding ramp programs, quarterly content refresh cycles, skills assessment cadences, bi-weekly coaching rhythms, and enablement ROI measurement schedules that reduce ramp time and lift win rates."
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
            Four Systems That Build Enablement Excellence
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
            Your 12-Month Sales Enablement Roadmap
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
            KPIs That Define Enablement Program Maturity
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
