import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "SEO Content Calendar | Momenties",
  description: "Plan your SEO content calendar with keyword clusters, publishing cadence, and search-intent alignment. Rank faster with a structured organic content schedule.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Keyword Cluster Architecture",
    body: "Organize content into pillar pages and supporting clusters rather than isolated articles. Map each cluster to a primary keyword (1,000–10,000 monthly searches) with 4–8 supporting long-tails (100–1,000 searches). Publish the pillar page first, then supporting posts in a 4-week sprint. Internal-link every supporting post back to the pillar and crosslink within the cluster on publication day — search engines discover the cluster topology immediately.",
  },
  {
    icon: Clock,
    title: "Publishing Cadence & Content Mix",
    body: "Benchmark: publish 2–4 SEO articles per week at early stage, scaling to 5–8 as the team grows. Mix: 50% informational (top-of-funnel awareness), 30% commercial investigation (comparison, best-of, alternatives), 20% transactional (landing pages, pricing, feature pages). Refresh existing content quarterly — articles ranking on page 2–3 (positions 11–30) yield the fastest ranking lifts with the fewest new words written.",
  },
  {
    icon: BarChart3,
    title: "On-Page & Technical Calendar",
    body: "Reserve one day per month for technical SEO audits: crawl errors, Core Web Vitals regressions, internal link orphans, and broken outbound links. Schedule a quarterly schema markup review (FAQ, HowTo, Article, BreadcrumbList). Each new article ships with title tag (55–60 chars), meta description (145–155 chars), H1 matching primary keyword, and at minimum one LSI-enriched H2. Images: descriptive alt text, WebP, and lazy load on publish day.",
  },
  {
    icon: Users,
    title: "Link Acquisition & Digital PR Calendar",
    body: "Plan two link acquisition campaigns per quarter: one digital PR pitch (data study, original survey, or shareable tool) and one relationship-based outreach (resource page additions, broken-link reclamation, co-marketing content swaps). Track domain-authority velocity — 5 new referring domains per month sustains growth for most mid-stage sites. Log outreach status in the calendar: pitched, placed, published, live. Quarterly backlink audit removes toxic links before disavow file submission.",
  },
]

const timeline = [
  {
    phase: "Week 1–2",
    label: "Keyword Research Sprint",
    description:
      "Pull competitor keyword gaps (Ahrefs/Semrush), cluster 100–200 keywords into 6–10 topic pillars, assign search-intent tags (informational / commercial / transactional), and build the 12-week editorial calendar from the prioritized opportunity list.",
  },
  {
    phase: "Week 3–4",
    label: "Pillar Pages Live",
    description:
      "Publish one pillar page per cluster (2,000–4,000 words, comprehensive coverage). Submit to Google Search Console for indexing. Begin internal-link strategy mapping — every existing relevant article should link to each new pillar.",
  },
  {
    phase: "Month 2",
    label: "Supporting Content Sprint",
    description:
      "Publish 4–8 supporting cluster articles per pillar, each targeting a long-tail variant with 500–1,500 words. Crosslink within the cluster. Track rank movement weekly — most supporting articles enter the index within 2–4 weeks.",
  },
  {
    phase: "Month 3",
    label: "Refresh & Expand",
    description:
      "Identify articles that moved to positions 11–30 since month 1. Expand word count by 300–600 words, improve header structure, add FAQ schema, and re-submit. Begin second link acquisition campaign. Measure organic traffic MoM.",
  },
]

const metrics = [
  { label: "Indexed pages", benchmark: "All new articles indexed within 14 days" },
  { label: "Position tracking", benchmark: "Primary keyword within top 20 by week 8" },
  { label: "Organic click-through rate", benchmark: "≥3% average CTR from Search Console" },
  { label: "Referring domain velocity", benchmark: "5+ new unique referring domains / month" },
  { label: "Top-of-funnel organic sessions", benchmark: "10–20% MoM growth in months 2–6" },
  { label: "Keyword cannibalization", benchmark: "Zero duplicate-intent URLs competing" },
]

export default function SeoCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="SEO Content Calendar"
        title="Rank Consistently with a Structured Organic Calendar"
        subtitle="Keyword clusters, publishing cadence, technical audits, and link acquisition — all scheduled so organic growth compounds month over month."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of a Compounding SEO Calendar
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

      {/* 90-day launch timeline */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              90-Day SEO Calendar Launch Plan
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
              SEO Performance Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Track these six metrics monthly to confirm your calendar is compounding correctly.
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
              &ldquo;We went from 3,000 to 38,000 monthly organic sessions in nine months. The cluster model was the unlock — every pillar we shipped became a link magnet.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Marcus D.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Head of SEO, B2B SaaS (Series A, $12M ARR)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your SEO content calendar in minutes"
        subtitle="Momenties keeps every keyword, cluster, and publish date in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
