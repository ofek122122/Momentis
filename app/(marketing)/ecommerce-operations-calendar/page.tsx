import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Ecommerce Operations Calendar | Momenties",
  description: "Momenties helps ecommerce operators track seasonal campaign cycles, platform fee changes, inventory planning windows, marketplace compliance deadlines, and sales tax filing obligations in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Seasonal Campaign Calendar, Promotional Planning & Inventory Management",
    description:
      "Ecommerce operations without structured seasonal calendars miss the 60-day advance preparation windows required for Q4 peak performance — Black Friday/Cyber Monday campaigns require 8-10 weeks of preparation for creative assets, inventory pre-positioning, email list segmentation, and paid media budget allocation, and brands that begin in September outperform September-launchers by 35% in Q4 revenue. Seasonal campaign calendar: Q4 Peak Season (BFCM preparation begins September 1 — inventory forecasting, creative briefing, email list warmup, paid media budget approval), holiday catalog preparation (October 1 deadline for print catalogs — 8-week production lead time), January clearance campaign (December 26 launch requires pre-built assets), Valentine&apos;s Day (February 14 — 6-week preparation), Mother&apos;s Day (May — 6-week preparation), Father&apos;s Day (June — 4-week preparation), Back to School (July-August — 8-week preparation for relevant categories), and Prime Day adjacent promotion (July — preparation begins June 1). Inventory management calendar: annual demand forecast review (Q4 of prior year), Q4 inventory pre-position (September 1 ship-to-warehouse deadline for FBA), supplier lead time annual review (January — renegotiate MOQs), seasonal reorder point recalculation (before each peak season), and post-season clearance plan (December 26 and February 1). Promotional calendar: monthly email campaign calendar (6-week advance production), SMS campaign calendar (7-day advance compliance window), and affiliate payout schedule (monthly — net-30 after conversion). Momenties manages every campaign deadline.",
  },
  {
    icon: RefreshCw,
    title: "Marketplace Compliance, Platform Fee Calendar & Seller Account Health",
    description:
      "Ecommerce sellers without structured platform compliance calendars face account suspensions that can generate $50,000-$500,000+ daily revenue losses — Amazon, Walmart, and Shopify all have specific policy update cycles, fee change windows, and compliance requirements that demand systematic calendar management. Amazon seller compliance calendar: FBA storage fee adjustment (annual — typically January, changes inventory holding cost calculations), annual referral fee schedule review (Amazon publishes fee changes October-November effective January 1), FBA fulfillment fee annual update (January 14 typically — reforecast landed cost and pricing), long-term storage fee (semi-annual assessment dates — February 15 and August 15, LTSF charged for inventory >365 days), stranded inventory monthly review (weekly target), and Vine enrollment and review compliance. Walmart Marketplace compliance: Walmart seller scorecard quarterly review (order defect rate, cancellation rate, late shipment rate — must maintain below thresholds or face suspension), annual Walmart seller agreement acceptance (new terms annual acknowledgment), and Walmart fulfillment fee annual review. Shopify and direct-to-consumer: Shopify subscription annual renewal review (plan vs. actual GMV), payment processor fee annual rate review, and Shopify Payments reserve review (seasonal — higher reserves during BFCM). International compliance: VAT registration annual renewal (UK, EU — if selling into those markets), EU GDPR consent management annual audit, and customs classification annual review for products with changing tariff rates. Momenties schedules every platform compliance deadline.",
  },
  {
    icon: TrendingUp,
    title: "Sales Tax Compliance, Product Registration & Ecommerce Legal Calendar",
    description:
      "Ecommerce operations without structured sales tax calendars accumulate economic nexus exposure — the Supreme Court&apos;s South Dakota v. Wayfair (2018) decision created economic nexus in 45 states, and most states have $100,000 revenue or 200-transaction nexus thresholds that trigger registration and filing obligations for growing ecommerce businesses. Sales tax calendar: annual economic nexus threshold review by state (all 45 states with sales tax — new nexus determinations as revenue grows), new state sales tax registration (upon nexus determination — 30-60 day registration window), monthly or quarterly sales tax filing deadlines (state-specific — most large states monthly, smaller states quarterly or annual), sales tax audit response calendar (typically 30-60 days to respond), and annual marketplace facilitator provision review (Amazon, Walmart, Etsy — all collect and remit in most states; seller still responsible for direct sales). Product compliance calendar: product listing audit (annual — review all ASINs for title compliance, restricted keywords, image compliance), FCC certification for electronic products (annual review — ensure no specification changes trigger recertification), FDA cosmetics/supplement annual label review (ingredient statement compliance with INCI nomenclature updates), and California Proposition 65 annual compliance review (new chemicals added annually — California-specific warning label requirements). Intellectual property: trademark annual maintenance (Section 8 Declaration due 5-6 years after registration), annual brand registry enrollment review, and MAP policy annual enforcement review. Momenties tracks all legal and compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Supplier Contracts, 3PL Operations & Ecommerce Technology Calendar",
    description:
      "Ecommerce operations without structured supplier and technology calendars accumulate silent operational risk — supplier contract renewal windows, warehouse rate adjustments, and platform API deprecation cycles all follow predictable calendars that reward advance preparation. Supplier contract calendar: annual purchase order terms negotiation (Q4 of prior year for next-year volume pricing), FOB vs. DDP annual shipping term review, supplier quality audit annual schedule, payment term annual review (Net 30/60/90 renegotiation), and raw material price lock windows (commodity-specific — typically Q1 for annual volume contracts). 3PL and fulfillment calendar: 3PL contract annual renewal (90-day advance negotiation — pick-pack rates, storage rates, and SLA review), Q4 surge capacity reservation (August 1 deadline for Q4 space commitments — major 3PLs close Q4 capacity by August-September), freight carrier annual rate negotiation (January for annual contract rates), and FBA IPI score quarterly monitoring (Inventory Performance Index — below 400 triggers storage restrictions). Technology and platform calendar: Shopify app subscription annual review (ROI audit for all installed apps — average Shopify store has 6-10 paid apps), ERP system annual maintenance contract renewal, annual API credential rotation (Shopify, Amazon SP-API, Klaviyo — security best practice), GA4 annual reporting structure review, and ad platform pixel audit (Meta, Google — annual verification of event tracking accuracy). Carrier and logistics: annual carrier scorecard review (OTP, damage rate — switch or renegotiate underperforming lanes), DIM weight calculation annual review (carriers update DIM factors — reforecast shipping costs), and returns processing annual workflow review. Momenties consolidates the full ecommerce operations calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Q4 Performance Review & Annual Pricing Reset",
    description: "Analyze Q4 performance — ROAS by channel, AOV by cohort, inventory sell-through rate. Implement Amazon FBA fee changes (effective January 14). Renegotiate supplier payment terms and volume pricing for the year. Register for sales tax in new nexus states triggered by Q4 revenue growth. File Q4 sales tax returns. Review FBA long-term storage fees (February 15 assessment). Begin Valentine&apos;s Day campaign preparation (6-week window). Submit annual Walmart seller agreement acceptance.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Spring Campaign Execution & Marketplace Audit",
    description: "Execute Mother&apos;s Day campaign preparation (May — begin March). Run annual product listing compliance audit (title, bullets, images, keywords). Complete annual trademark Section 8 maintenance filings if due. Review EU VAT registration and Q1 filing deadlines. Run annual brand registry enrollment review. Review Shopify app subscription ROI (quarterly). Begin Father&apos;s Day preparation (June — begin April). Run Q1 seller scorecard review (Walmart — defect rate, cancellation rate).",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Prime Day Prep & Mid-Year Operations Review",
    description: "Begin Prime Day adjacent promotion preparation (July — begin June 1). Reserve Q4 3PL surge capacity (August 1 deadline — begin June conversations). Run mid-year demand forecast for Q4 inventory pre-position. File Q2 sales tax returns. Run mid-year supplier quality audit (H1). Begin Back to School campaign preparation (July-August — begin May-June). Review marketplace fee trends — project Q4 landed cost with new fee schedules. Run API credential rotation (semi-annual security review).",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Back to School Execution & Q4 Pre-Position",
    description: "Execute Back to School campaign. Finalize Q4 3PL surge capacity agreements (August 1 deadline). Begin Q4 inventory purchase orders to suppliers (August — 8-10 week lead time to September warehouse arrival). Begin BFCM creative briefing (August — 10-week preparation window). Run FBA IPI score review and inventory rebalancing. Lock Q4 paid media budget allocation. Run annual California Prop 65 compliance review. Submit products for FBA inventory by September 1 target.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "BFCM Preparation Peak & Q4 Operations Lock",
    description: "Execute full BFCM preparation — email list segmentation, creative production, offer structure, paid media campaign builds (October launch). Run FBA long-term storage audit before August 15 charge (review and remove if needed). Begin holiday catalog production (October 1 print deadline). Review Amazon and Walmart Q4 seller account health. Lock BFCM promotion calendar. Run Q3 sales tax filings. Review and renew Shopify subscription plan (evaluate plan tier vs. Q4 GMV projections).",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "BFCM Execution & Year-End Planning",
    description: "Execute BFCM campaign (Black Friday, Cyber Monday, Cyber Week). Monitor seller account health daily during peak. Pre-build January clearance assets (December 26 launch). Begin supplier negotiation for next-year volume pricing (Q4). Review Amazon FBA fee changes announced for January (typically published November-December). Run annual ecommerce technology stack review. Plan next-year seasonal campaign calendar. Complete holiday return period preparation (returns peak January 2-14).",
  },
]

const kpis = [
  {
    metric: "BFCM Revenue Growth ≥ 20% YoY",
    description: "Year-over-year Black Friday/Cyber Monday revenue growth; below 15% signals underprepared campaign strategy, inventory gaps, or inadequate paid media budget for the 10-week preparation window",
  },
  {
    metric: "Amazon Account Health Score ≥ 200",
    description: "Amazon seller account health score (200 = excellent); below 150 risks account action — order defect rate must stay below 1%, late shipment below 4%, cancellation rate below 2.5%",
  },
  {
    metric: "Inventory Sell-Through Rate ≥ 85%",
    description: "Percentage of purchased inventory sold within planned sales window; below 70% indicates demand forecasting errors or promotional gaps that increase storage costs and working capital waste",
  },
  {
    metric: "Sales Tax Filing Compliance 100%",
    description: "Zero late or missed sales tax filings across all nexus states; a single missed filing generates penalties (typically 10-25% of tax due) and potential nexus audit triggers",
  },
  {
    metric: "Email List Revenue Per Subscriber ≥ $2/month",
    description: "Monthly email revenue divided by active list size; below $1.50/subscriber signals segmentation gaps, deliverability issues, or offer strategy problems requiring campaign calendar restructuring",
  },
  {
    metric: "Return Rate ≤ 12%",
    description: "Product return rate across all channels; above 15% signals product quality, sizing, or photography accuracy issues — peak post-holiday returns (January 2-14) require specific reverse logistics capacity planning",
  },
]

const testimonial = {
  quote:
    "BFCM 10-week preparation starting September 1, Black Friday campaign launch October, Q4 inventory pre-position August 1 order deadline, September 1 FBA ship-to-warehouse deadline, January 14 Amazon FBA fee implementation with pricing reforecast, February 15 and August 15 FBA long-term storage assessments, monthly FBA IPI score review, 8 seasonal campaign windows with 6-week advance creative production, monthly email calendar with 6-week production, sales tax filing in 12 nexus states on monthly/quarterly cycles, annual economic nexus review for 45 states, EU VAT quarterly filings for UK and Germany, annual trademark Section 8 maintenance for 3 brands, annual Prop 65 compliance review, Q4 3PL surge capacity reservation August 1 deadline, 3PL contract annual renewal 90-day advance, annual supplier pricing negotiation, Shopify annual plan review, Amazon referral fee change November review, and Walmart seller scorecard quarterly — all in spreadsheets. Momenties organized everything. We hit our first $10M Q4.",
  name: "Kwame E.",
  title: "Founder & CEO, 8-Figure DTC Brand",
}

export default function EcommerceOperationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Ecommerce Operations Calendar"
        title="BFCM Preparation. Sales Tax Compliance. Platform Fee Changes. One Calendar."
        subtitle="Momenties tracks BFCM 10-week preparation windows with inventory pre-position deadlines, Amazon FBA fee implementation cycles, FBA long-term storage assessment dates, Q4 3PL surge capacity reservation windows, seasonal campaign production lead times, sales tax filing deadlines across nexus states, EU VAT quarterly obligations, annual marketplace compliance reviews, supplier contract renewal windows, and trademark maintenance deadlines so ecommerce operators never miss a revenue-critical campaign window or compliance deadline."
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
            Four Ecommerce Operations Pillars Momenties Tracks
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
        <section style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            12-Month Ecommerce Operations Calendar
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {timeline.map((t) => (
              <div
                key={t.phase}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 20,
                  alignItems: "start",
                }}
              >
                <div>
                  <p style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.85rem", marginBottom: 4 }}>
                    {t.phase}
                  </p>
                  <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.95rem" }}>{t.title}</p>
                </div>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Ecommerce Operations KPIs Momenties Keeps on Track
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {kpis.map((k) => (
              <div
                key={k.metric}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.95rem", marginBottom: 8 }}>
                  {k.metric}
                </p>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.88rem", lineHeight: 1.6 }}>
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
