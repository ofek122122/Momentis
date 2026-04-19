import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Funeral Home Compliance Calendar | Momenties",
  description: "Momenties helps funeral homes track FTC Funeral Rule GPL annual updates, state funeral director/embalmer CE renewals, OSHA formaldehyde monitoring, preneed trust reporting, crematory annual inspections, and NFDA membership in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Funeral Director, Embalmer & Crematory Operator License Renewal",
    description:
      "Funeral directors and embalmers maintain state-issued licenses with annual or biennial CE requirements that vary by state — typically 6–16 CE hours per year including mandatory ethics CE (1–3 hours) and FTC Funeral Rule CE (1–2 hours). States with annual renewal: California (15 CE hours annual), Texas (8 CE hours annual), Florida (8 CE hours annual, including 2 hours HIV/AIDS). States with biennial renewal: New York (15 CE hours biennial), Illinois (12 CE hours biennial). Funeral establishment license: annual state funeral board renewal for the physical location (separate from individual licensure). Crematory operator certification: CANA (Cremation Association of North America) Crematory Operator Certification (biennial renewal, 10 CE hours) for operators managing cremation retorts. Funeral service apprentice permit: annual state board renewal during apprenticeship period (typically 1–3 years). Preneed funeral planning license: separate state preneed seller/agent license (annual renewal in most states). ABFSE (American Board of Funeral Service Education) accreditation school CE requirements for new hires within first 2 years. NFDA (National Funeral Directors Association) membership annual renewal. CANA membership annual renewal for cremation-focused operations. Momenties tracks all staggered license renewals.",
  },
  {
    icon: RefreshCw,
    title: "FTC Funeral Rule, OSHA & State Regulatory Compliance Calendar",
    description:
      "FTC Funeral Rule (16 CFR Part 453) compliance calendar: annual general price list (GPL) review and update — GPL must be current, accurate, and provided to all inquiring consumers; annual review before January 1 each year to reflect current pricing. Annual casket price list review. Annual outer burial container price list review. Annual itemization audit: internal review of itemized statement compliance (GPL prices must match actual charges). FTC Funeral Rule staff training: annual training for all funeral home staff on GPL disclosure requirements, embalming authorization, and package pricing prohibition. OSHA formaldehyde standard (1910.1048): annual medical surveillance for embalmers with formaldehyde TWA ≥0.5 ppm — annual physician questionnaire and exam if action level exceeded. Quarterly formaldehyde air monitoring documentation review (annual industrial hygiene survey if TWA consistently near action level). Annual OSHA hazard communication training (GHS/SDS updates — embalming chemicals, disinfectants). Annual bloodborne pathogen exposure control plan review (OSHA 1910.1030). Annual infectious waste disposal permit renewal (state environmental agency — biohazard waste pickup manifests). Quarterly OSHA 300 log review and annual OSHA 300A posting (February 1–April 30). State health department body transport authorization: annual vehicle permit renewal for mortuary transport vehicles. Momenties schedules all compliance deadlines.",
  },
  {
    icon: TrendingUp,
    title: "Preneed Trust, Financial Reporting & Insurance Compliance Calendar",
    description:
      "Preneed funeral trust compliance calendar: annual preneed trust fund audit (required in most states — independent CPA audit of all preneed contract trust funds), annual preneed trust annual report submission to state funeral regulatory board (typically March 31 or April 30 deadline), quarterly preneed trust investment performance review (state-mandated asset allocation compliance — most states require ≥ 80–100% of preneed contract value in trust). Annual preneed insurance policy compliance review: preneed insurance contracts funded through life insurance must comply with state insurance department regulations — annual review of policy funding adequacy and beneficiary designations. Annual at-need accounts receivable audit (aged 90+ day balances — funeral home credit extension compliance). Annual General Liability/Professional Liability (E&O) insurance renewal — begin 90 days before expiration. Annual commercial auto insurance renewal for transport vehicles. Annual workers&apos; compensation audit (payroll audit for WC premium calculation). Annual business income/property insurance renewal. Annual crime/employee dishonesty bond renewal (required in some states for preneed sellers). Monthly credit card processing reconciliation (funeral home payment gateway annual PCI-DSS compliance). Annual funeral home ownership/change of ownership disclosure to state board. Momenties tracks all financial compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Crematory Inspection, Equipment Certification & Quality Calendar",
    description:
      "Crematory compliance calendar: annual crematory retort inspection by state funeral board or environmental agency (combustion chamber temperature calibration, emissions compliance documentation), annual crematory operating permit renewal (state environmental/air quality permit for particulate emissions — EPA NESHAP 40 CFR Part 63 Subpart FFFFFFFF for small crematoriums), annual crematory operator log review (cremation authorization documentation audit — 100% of cremations must have signed authorization). Crematory equipment maintenance: quarterly burner maintenance and cleaning by certified CANA/manufacturer technician, annual refractory inspection and documentation. Refrigeration equipment: annual walk-in refrigeration unit inspection and temperature log audit (body storage temperature compliance — state health code typically ≤38°F). Body identification protocol audit: annual review of body ID tracking documentation (toe tag, body bag label, cremation container label — zero-defect standard). Embalming room: quarterly chemical inventory audit (embalming fluid, cavity chemicals — OSHA-compliant SDS current), annual eyewash station inspection certification. Vehicle compliance: annual mortuary transport vehicle inspection (climate control certification, body transfer equipment). Annual death certificate processing accuracy audit (state vital records office — accuracy rate review). Annual funeral home consumer satisfaction survey review (NFDA national benchmarks). Momenties tracks all quality compliance cycles.",
  },
]

const timeline = [
  {
    phase: "Jan–Feb",
    title: "GPL Update & OSHA Annual Compliance",
    items: [
      "Update general price list (GPL) effective January 1 — print and distribute",
      "Post OSHA 300A Summary (February 1–April 30)",
      "Annual FTC Funeral Rule staff training completion",
      "Annual preneed trust investment performance review (Q4 prior year)",
      "Renew NFDA and CANA memberships",
    ],
  },
  {
    phase: "Mar–Apr",
    title: "Preneed Trust Audit & License Renewal Season",
    items: [
      "Submit annual preneed trust fund audit to state funeral board (March 31–April 30 deadline)",
      "File annual preneed trust annual report with state",
      "Annual at-need accounts receivable audit (90+ day balances)",
      "Renew preneed funeral planning licenses",
      "Annual embalming room chemical inventory audit",
    ],
  },
  {
    phase: "May–Jun",
    title: "Formaldehyde Monitoring & Equipment Inspections",
    items: [
      "Annual industrial hygiene formaldehyde air monitoring survey",
      "Annual OSHA bloodborne pathogen exposure control plan review",
      "Annual crematory retort inspection and retort log audit",
      "Quarterly burner maintenance (Q2 crematory technician service)",
      "Annual refrigeration unit inspection and temperature log audit",
    ],
  },
  {
    phase: "Jul–Aug",
    title: "Mid-Year Financial & Insurance Renewals",
    items: [
      "Mid-year preneed trust investment performance review (Q2)",
      "Annual General Liability/Professional Liability insurance renewal — 90-day advance",
      "Annual commercial auto insurance renewal for transport fleet",
      "Annual crime/employee dishonesty bond renewal",
      "Annual body identification protocol audit",
    ],
  },
  {
    phase: "Sep–Oct",
    title: "CE Completion & License Prep",
    items: [
      "Complete annual funeral director/embalmer CE (state-specific hours)",
      "Complete annual ethics CE (1–3 hours, state requirement)",
      "Annual workers&apos; compensation payroll audit",
      "Annual crematory operating permit renewal (EPA NESHAP compliance)",
      "Annual death certificate processing accuracy audit",
    ],
  },
  {
    phase: "Nov–Dec",
    title: "Year-End License Renewals & Annual Review",
    items: [
      "Submit state funeral establishment license renewal",
      "Submit funeral director/embalmer individual license renewals",
      "Annual crematory operator certification renewal (CANA — if biennial)",
      "Annual consumer satisfaction survey review (NFDA benchmarks)",
      "Quarterly OSHA 300 log review (Q4 — prepare for February 300A posting)",
    ],
  },
]

const kpis = [
  {
    metric: "GPL Annual Update",
    target: "100% by January 1",
    description: "General price list updated, printed, and distributed before January 1 each year — FTC Funeral Rule zero-defect standard.",
  },
  {
    metric: "Preneed Trust Audit",
    target: "Filed by March 31",
    description: "Annual independent CPA preneed trust audit completed and submitted to state funeral board by March 31 (or April 30 per state).",
  },
  {
    metric: "Cremation Authorization",
    target: "100% documentation",
    description: "Every cremation completed with signed written authorization on file — zero-defect standard for state funeral board audits.",
  },
  {
    metric: "Embalmer CE Completion",
    target: "100% by renewal date",
    description: "All licensed embalmers and funeral directors complete state-required CE hours before license renewal deadline — zero late renewals.",
  },
  {
    metric: "Body Temp Compliance",
    target: "100% ≤ 38°F",
    description: "Walk-in refrigeration storage temperature maintained at or below 38°F — 100% of daily temperature logs within state health code standard.",
  },
  {
    metric: "OSHA 300A Posting",
    target: "February 1–April 30",
    description: "OSHA 300A Annual Summary posted in visible workplace location every year February 1 through April 30 without exception.",
  },
]

const testimonial = {
  quote:
    "Annual GPL update across three locations by January 1, annual preneed trust CPA audit submitted to the state board by March 31, quarterly preneed trust investment performance reviews, annual FTC Funeral Rule staff training for 14 staff members, annual OSHA bloodborne pathogen exposure control plan review, annual formaldehyde air monitoring survey with industrial hygienist, OSHA 300A annual posting, NFDA membership annual renewal, CANA membership annual renewal, annual crematory retort inspection by state environmental agency, annual crematory operating permit renewal, quarterly Q2 and Q4 burner maintenance by CANA technician, annual refrigeration unit inspection and temperature log audit, 100% cremation authorization documentation audit for 620 cremations, annual body identification protocol audit, annual funeral director CE for 6 licensed directors across 3 states, annual embalmer CE for 4 licensed embalmers, preneed funeral planning license annual renewals, annual General Liability and Professional Liability insurance renewal, annual commercial auto insurance renewal for fleet of 5 transport vehicles, annual crime bond renewal, annual workers&apos; compensation payroll audit, annual death certificate processing accuracy audit, and annual consumer satisfaction survey review — all simultaneously. Momenties mapped every deadline.",
  name: "Kwame FH.",
  title: "Licensed Funeral Director, CFSP, Multi-Location Funeral Home Owner",
}

export default function FuneralHomeCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Funeral Home Compliance Calendar"
        title="GPL Updates. Preneed Trust Audits. Crematory Inspections. One Calendar."
        subtitle="Momenties tracks FTC Funeral Rule annual GPL updates, state funeral director and embalmer CE renewals, annual preneed trust CPA audit deadlines, OSHA formaldehyde monitoring, crematory retort annual inspections, crematory operating permit renewals, annual OSHA 300A posting, and NFDA and CANA membership renewals so funeral home owners maintain every compliance deadline without administrative overload."
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
            Four Compliance Pillars Momenties Manages for Your Funeral Home
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
            Your Funeral Home Compliance Year at a Glance
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
                  gap: 24,
                }}
              >
                <div>
                  <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1rem" }}>{t.phase}</p>
                  <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.92rem", marginTop: 4 }}>{t.title}</p>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {t.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        color: "rgba(240,236,227,0.65)",
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        paddingLeft: 16,
                        position: "relative",
                        marginBottom: 4,
                      }}
                    >
                      <span style={{ position: "absolute", left: 0, color: "#c5a35c" }}>·</span>
                      {item}
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
            Six KPIs Momenties Keeps on Track
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {kpis.map((k) => (
              <div
                key={k.metric}
                style={{
                  background: "#0e0e12",
                  border: "1px solid rgba(197,163,92,0.15)",
                  borderRadius: 12,
                  padding: "20px 24px",
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1.05rem", marginBottom: 4 }}>
                  {k.metric}
                </p>
                <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.88rem", marginBottom: 8 }}>
                  Target: {k.target}
                </p>
                <p style={{ color: "rgba(240,236,227,0.6)", fontSize: "0.87rem", lineHeight: 1.6 }}>
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
