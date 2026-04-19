import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Restaurant Business Calendar | Momenties",
  description: "Momenties helps restaurants manage health department permit renewals, food handler certification cycles, liquor license renewals, seasonal menu launches, and health inspection preparation in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Health Permits, Liquor License & Food Safety Compliance Calendar",
    description:
      "Restaurants operate under the most densely layered licensing regime of any small business — federal, state, and local requirements overlap with staggered renewal cycles creating year-round compliance obligations. Health department food establishment permit: annual renewal typically tied to fiscal year or calendar year depending on jurisdiction — most municipalities require renewal 30-60 days before expiration, with operating without a valid permit constituting immediate closure risk. Food handler and food manager certifications: ANSI-accredited Food Protection Manager Certification (ServSafe, NEHA, Prometric — 5-year cycle) required in all 50 states for at least one certified manager per establishment; many states require food handler cards for all employees (2-3 year cycle, typically 4-hour online course). Full-service restaurants with bar programs maintain state liquor license annual renewal (ABC application typically 30-90 days before expiration), city/county alcohol permit annual renewal, and temporary event permit applications for catering or off-site events. Live music or entertainment permit: annual renewal where required by city ordinance. Certificate of Occupancy: changes to seating capacity or layout require building department amendment. Fire safety permit: annual fire extinguisher inspection, annual hood suppression system inspection, and biennial fire sprinkler inspection in most jurisdictions. ADA compliance annual review: accessible seating and restroom documentation. OSHA: annual heat illness prevention plan update for kitchen staff. Momenties tracks every permit cycle.",
  },
  {
    icon: RefreshCw,
    title: "Seasonal Menu, Vendor Contract & Inventory Planning Calendar",
    description:
      "Restaurant revenue is deeply seasonal — the National Restaurant Association reports that December accounts for 9.1% of annual full-service restaurant revenue while January-February represent the two lowest months, creating predictable planning windows that require 8-12 weeks of lead time. Seasonal menu development calendar: spring menu launch (March/April — 8-week development cycle starting January for ingredient sourcing, staff training, POS updates, and marketing photography), summer menu (May/June — seasonal produce sourcing, patio/outdoor seating prep), fall menu (September/October — harvest and comfort food transition, holiday season preparation begins October 1), winter/holiday menu (November/December — prix fixe development, holiday party package pricing, New Year&apos;s Eve special event planning). Valentine&apos;s Day and Mother&apos;s Day are the two highest-volume days for full-service restaurants — event menus require 6-week preparation. Vendor contract renewal calendar: primary food distributor contract annual renegotiation (typically July-September for following year pricing), linen service and uniform contract annual renewal, POS software and subscription annual renewal, online ordering platform contract, and delivery platform (DoorDash/Uber Eats/Grubhub) commission renegotiation cycle. Equipment maintenance contracts: commercial refrigeration annual service, exhaust hood quarterly cleaning (fire safety requirement — 4 times per year minimum), grease trap quarterly pumping (health code requirement in most jurisdictions), and dishwasher annual descaling and calibration. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "Health Inspection Preparation, Staff Training & Operational Compliance Calendar",
    description:
      "Health inspections are unannounced in 45 states — FDA Food Code (2022 edition) requires local health departments to inspect high-risk food establishments 1-4 times per year depending on jurisdiction risk tier. Critical violations (bare-hand contact, temperature abuse, pest evidence, cross-contamination) result in immediate closure risk, making continuous inspection readiness the most important operational compliance priority. Health inspection readiness calendar: daily temperature log review, weekly food storage audit (FIFO rotation, labeling compliance, date marking), monthly equipment calibration check (thermometer accuracy ±2°F, refrigeration units ≤41°F, hot holding ≥135°F), quarterly pest control service with documentation, and quarterly walk-through using FDA Form 3-A Food Establishment Inspection Report as self-assessment checklist. Staff food safety training calendar: annual ServSafe Manager recertification (every 5 years, but annual competency refresher recommended), annual allergen awareness training documentation (FDA Food Allergen Labeling — major 9 allergens), annual choking/first aid/AED certification for front-of-house staff (some jurisdictions require CPR certification), annual alcohol service training (TIPS, ServSafe Alcohol — many states require annual renewal), and new hire onboarding food safety and allergen training documentation. Kitchen equipment maintenance: quarterly hood cleaning documentation (required by NFPA 96), biannual fire suppression system inspection, annual commercial kitchen equipment service, and annual walk-in cooler and freezer temperature alarm testing. Momenties tracks all compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Financial Compliance, Payroll & Restaurant Tax Calendar",
    description:
      "Restaurants face unique payroll complexity — tipped employee minimum wage requirements, FICA tip credit calculations, and tip pooling compliance under the Fair Labor Standards Act (FLSA) create ongoing payroll compliance obligations that differ by state. Tip compliance calendar: IRS Form 8027 (Employer&apos;s Annual Information Return of Tip Income, large food establishments gross receipts >$1M) due February 28 (paper) / March 31 (e-file) — requires annual tip allocation calculations and Form W-2 Box 8 documentation for all tipped employees. State sales tax calendar: monthly or quarterly sales tax filing depending on state and revenue threshold, with most restaurant states requiring monthly filing for sales over $1,000/month (due 20th of following month). State alcohol excise tax: monthly filing with state ABC for off-premises alcohol sales. FICA tip credit: Form 8846 Credit for Employer Social Security and Medicare Taxes Paid on Certain Employee Tips filed annually with business tax return — requires quarterly payroll documentation of tips claimed by employees below federal minimum wage threshold. Year-end payroll: W-2 distribution January 31, 1099-NEC for independent contractors (delivery, music, maintenance) January 31, and ACA Form 1095-C for applicable large employers (50+ FTE) March 31. Business tax return: Schedule C (sole proprietor), Form 1120-S (S-Corp), or Form 1065 (partnership) per structure. Business personal property tax: annual BPP return for restaurant equipment in states with tangible personal property tax. Momenties consolidates all.",
  },
]

const timeline = [
  {
    phase: "Jan – Feb",
    title: "Tax Filings & Slow Season Planning",
    tasks: [
      "W-2 and 1099-NEC distribution by January 31",
      "IRS Form 8027 tip income return (large establishments)",
      "Valentine&apos;s Day special event menu and reservations system prep",
      "Annual staff food safety recertification audit",
      "Q4 financial review and budget variance analysis",
      "Spring menu development kickoff (8-week lead time)",
    ],
  },
  {
    phase: "Mar – Apr",
    title: "Spring Launch & Permit Renewals",
    tasks: [
      "Spring menu launch with staff training and POS update",
      "Health department food establishment permit renewal",
      "Annual fire extinguisher inspection documentation",
      "Mother&apos;s Day event menu and reservation capacity planning",
      "Primary food distributor contract renegotiation window",
      "State sales tax filing (monthly or quarterly)",
    ],
  },
  {
    phase: "May – Jun",
    title: "Summer Prep & Outdoor Season",
    tasks: [
      "Patio/outdoor seating permit or seasonal extension",
      "Summer menu launch",
      "Liquor license renewal application (if July-December expiration)",
      "Grease trap quarterly pumping and documentation",
      "Hood exhaust quarterly cleaning (NFPA 96 compliance)",
      "Annual alcohol service (TIPS) training renewal",
    ],
  },
  {
    phase: "Jul – Aug",
    title: "Vendor Renegotiation & Fall Prep",
    tasks: [
      "Primary food distributor annual contract renegotiation",
      "Fall menu development cycle begins",
      "POS software and delivery platform contract reviews",
      "Annual commercial kitchen equipment service",
      "Staff performance reviews and compensation adjustments",
      "Holiday season event package pricing development",
    ],
  },
  {
    phase: "Sep – Oct",
    title: "Fall Launch & Holiday Planning",
    tasks: [
      "Fall menu launch with staff training",
      "Holiday party package marketing launch (8-week runway)",
      "New Year&apos;s Eve special event planning begins",
      "Annual allergen awareness training documentation",
      "Hood exhaust Q3 quarterly cleaning documentation",
      "Catering/off-premises event permit renewal if seasonal",
    ],
  },
  {
    phase: "Nov – Dec",
    title: "Peak Season & Year-End Compliance",
    tasks: [
      "Holiday peak season — all training and permits current",
      "New Year&apos;s Eve event execution",
      "Year-end inventory count for tax purposes",
      "Equipment maintenance contracts renewal review",
      "December quarterly grease trap pumping",
      "January tax prep: gather tip income records and FICA tip credit data",
    ],
  },
]

const kpis = [
  { label: "Permits Tracked Per Location", value: "8–12", note: "Health, liquor, fire, entertainment, etc." },
  { label: "Health Inspection Readiness", value: "365 days", note: "Unannounced in 45 states" },
  { label: "Annual Seasonal Launches", value: "4 menus", note: "Each with 8-week lead time" },
  { label: "Hood Cleaning Compliance", value: "Quarterly", note: "NFPA 96 — closure risk if missed" },
  { label: "Peak Revenue Days Prepared", value: "12 weeks out", note: "Valentine&apos;s, Mother&apos;s Day, NYE" },
  { label: "Tip Compliance Filings", value: "Zero late", note: "Form 8027 + monthly payroll" },
]

const testimonial = {
  quote:
    "Annual health department permit renewal, annual liquor license renewal with ABC 60-day advance application, state food manager ServSafe 5-year cycle tracked for 6 certified managers, food handler card renewals for 34 employees across 2-3 year cycles, annual fire extinguisher inspection, biannual hood suppression inspection, quarterly hood cleaning documentation (4 times per year NFPA 96), quarterly grease trap pumping documentation, monthly sales tax filing, monthly ABC alcohol excise tax, Form 8027 tip income return February 28, W-2 distribution January 31, 1099-NEC for 8 contractors January 31, spring and fall menu development 8-week prep cycles, Valentine&apos;s Day and Mother&apos;s Day event planning 6-week lead times, holiday party package launch October 1, New Year&apos;s Eve event planning, primary distributor annual contract renegotiation August, annual allergen awareness training documentation, annual TIPS alcohol service renewal, POS annual subscription renewal, delivery platform commission review cycle, and annual kitchen equipment service — across 2 locations simultaneously. Momenties mapped every deadline.",
  name: "Kwame R.",
  title: "Owner-Operator, 2-Location Full-Service Restaurant Group",
}

export default function RestaurantCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Restaurant Owners & Operators"
        title="Health Permits. Liquor License. Seasonal Menus. One Calendar."
        subtitle="Momenties tracks annual health department permit renewal, liquor license ABC application 60 days in advance, food manager ServSafe certification cycles, quarterly NFPA 96 hood cleaning documentation, quarterly grease trap pumping, monthly sales tax filings, Form 8027 tip income annual return, Valentine&apos;s Day and Mother&apos;s Day 6-week event prep, holiday party launch October 1, seasonal menu development 8-week cycles, and vendor contract renegotiation windows so restaurants stay compliant and capture every revenue peak."
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
            Four Calendar Pillars Momenties Manages for You
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
            Your Restaurant Compliance Year, Month by Month
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {timeline.map((t) => (
              <div
                key={t.phase}
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 24,
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  alignItems: "start",
                }}
              >
                <div>
                  <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1rem" }}>{t.phase}</p>
                  <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.95rem", marginTop: 4 }}>{t.title}</p>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                  {t.tasks.map((task) => (
                    <li key={task} style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.55, paddingLeft: 16, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#c5a35c" }}>›</span>
                      {task}
                    </li>
                  ))}
                </ul>
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
            What Momenties Tracks for Restaurants
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {kpis.map((k) => (
              <div
                key={k.label}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#c5a35c", fontSize: "1.8rem", fontWeight: 700, marginBottom: 6 }}>{k.value}</p>
                <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.9rem", marginBottom: 4 }}>{k.label}</p>
                <p style={{ color: "rgba(240,236,227,0.5)", fontSize: "0.82rem" }}>{k.note}</p>
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
