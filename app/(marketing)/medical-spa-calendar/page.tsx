import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Medical Spa & Aesthetic Practice Calendar | Momenties",
  description: "Momenties helps medical spas manage physician/NP license oversight, botulinum toxin prescriber compliance, laser safety officer certification, FDA device registration, and seasonal campaign planning in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Medical Director Oversight, Prescriber License & Aesthetic Procedure Compliance",
    description:
      "Medical spas operate under state-specific medical supervision requirements — in all 50 states, injectable aesthetic procedures (botulinum toxin, dermal fillers, Kybella, Sculptra) constitute the practice of medicine and require licensed prescriber oversight. Medical director agreement: annual renewal of medical director agreement (physician medical director typically required in 38 states — annual scope-of-practice review covering botulinum toxin and filler protocols, laser procedure oversight, and prescriptive authority delegation). Prescriber license maintenance: NP or PA injectors maintain state-specific APRN or PA license renewal (2-year cycles) with CE requirements — aesthetic CE is not typically recognized by state nursing boards for license CE, requiring separate tracking. Botulinum toxin prescribing: AbbVie Allergan, Evolus, Merz, and Revance botulinum toxin annual prescriber account renewal with each manufacturer — online prescriber portals require annual verification of prescriber credentials and updated NPI/DEA information. Kybella (deoxycholic acid): annual prescriber account renewal with Allergan. Sculptra (poly-L-lactic acid): annual prescriber account renewal with Galderma. Radiesse, Belotero, Restylane, Juvederm: annual distributor agreement renewal with Merz and Allergan product lines. DEA registration: medical spa prescribers maintaining DEA registration for any Schedule medications used for sedation, pain, or off-label procedures complete 3-year renewal. State medical spa permit or aesthetic facility license: several states (Florida, Texas, California, New York) require separate med spa facility registration — annual or biennial renewal. Momenties tracks every license and agreement cycle.",
  },
  {
    icon: RefreshCw,
    title: "Laser Safety Officer, Device Certification & Aesthetic Procedure CE Calendar",
    description:
      "Medical spas with laser and energy-based devices face laser safety compliance requirements that are among the most overlooked compliance obligations in the aesthetic industry. Laser safety officer (LSO) certification: ANSI Z136.3 standard for healthcare facilities requires a designated LSO — LSO certification through ASLMS (American Society for Laser Medicine and Surgery), CLSO (Certified Laser Safety Officer) program, or institutional training with annual competency documentation. Laser device-specific training: manufacturers typically require annual in-service training for each device — Sciton, Halo, BBL, Syneron Candela, Cynosure, InMode, and Lumenis require annual device training documentation for warranty compliance. FDA device registration: medical spas with Class II medical devices (laser and IPL devices) register with FDA as medical device establishments — annual FDA Device Facility Registration renewal (October 1 – December 31 window). State radiation control board: laser facility permit required in many states (California, Texas, Florida — annual or biennial renewal). Aesthetic CE calendar: ASLMS Annual Conference (April-May) for laser and energy-based device CE, ASDS (American Society for Dermatologic Surgery) Annual Meeting (October) for injectable and device CE, American Academy of Aesthetic Medicine (AAAM) annual CE, and manufacturer-sponsored annual CE for injectable techniques. Radiofrequency and body contouring CE: annual certification update for NovaSure, TruSculpt, CoolSculpting, Emsculpt, Sofwave — most require annual operator training. Annual HIPAA compliance: medical spa HIPAA annual risk assessment and BAA audit. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "Seasonal Campaign, Treatment Package & Revenue Planning Calendar",
    description:
      "Medical spa revenue is highly seasonal — Allergan Aesthetics data shows December through February as the highest-volume months for botulinum toxin and filler procedures (holiday events, Valentine&apos;s Day preparation), and May through July for body contouring and laser skin treatment (summer preparation). Seasonal campaign calendar: Valentine&apos;s Day campaign (January 1 launch — 6 weeks before February 14 peak), Spring laser and skin resurfacing season (February-March launch for March-May treatment window — avoid summer UV exposure), Mother&apos;s Day package launch (April 1 — 6 weeks before second Sunday in May), Summer body contouring push (May-June launch for CoolSculpting, Emsculpt, Kybella), Fall skin rejuvenation season (September launch for 3-month resurfacing course timed to avoid summer sun), Holiday Beauty Rush (November 1 through December 31 — 40% of annual botulinum toxin and filler revenue window), and New Year New You campaign (January — highest new patient acquisition window). Allergan and Galderma rewards programs: annual Alle (formerly Brilliant Distinctions) program provider renewal, annual Aspire Galderma Rewards provider account renewal, and Evolus Jeuveau quarterly incentive program review. GLP-1 semaglutide aesthetic implications: annual CE on GLP-1 face and body contouring implications (emerging aesthetic demand category). Annual aesthetics trend report integration: RealSelf, ASPS, and ISAPS annual report review for treatment demand forecast. Momenties maps every campaign and revenue cycle.",
  },
  {
    icon: BarChart3,
    title: "Malpractice Insurance, OSHA Compliance & Medical Spa Financial Calendar",
    description:
      "Medical spas have unique professional liability insurance requirements — standard general liability policies exclude medical procedures, requiring a specialized medical professional liability (malpractice) policy for all injectable and device procedures. Medical spa insurance calendar: annual medical professional liability renewal (60-90 day advance — aesthetic procedures are high-risk for claims, especially filler complications, laser burns, and adverse reactions), annual product liability review (coverage for manufacturer-sourced product adverse events), and annual occurrence vs. claims-made policy tail coverage assessment. Consult and consent form annual review: annual informed consent update for all procedures — injectable consent, laser consent, and procedure-specific consents reviewed by legal counsel annually (FDA label updates, new safety data, and state-specific disclosure requirements). OSHA compliance: annual bloodborne pathogen training documentation, annual HazCom training for chemical peels and disinfectant handling, OSHA 300 log annual posting (February 1 for practices with 10+ employees), and annual sharps and biohazard waste disposal documentation. CoolSculpting ATC (Authorized Training Center) annual renewal for practices with CoolSculpting. Annual staff performance reviews and compensation adjustments. Annual retail product distribution agreement renewals (SkinBetter, Skinmedica, PCA Skin, EltaMD — annual account verification). Annual credit card processing agreement and PCI DSS (Payment Card Industry Data Security Standard) annual compliance review. Medical waste disposal annual contract renewal. Momenties consolidates all.",
  },
]

const timeline = [
  {
    phase: "Jan – Feb",
    title: "New Year Campaign & License Renewals",
    tasks: [
      "New Year New You campaign launch (January 1)",
      "Valentine&apos;s Day campaign launch (6 weeks before February 14)",
      "Annual FDA device facility registration renewal (October-December window)",
      "Annual HIPAA risk assessment",
      "Annual HIPAA staff training documentation",
      "Annual PCI DSS compliance review",
    ],
  },
  {
    phase: "Mar – Apr",
    title: "Spring Launch & Credentialing",
    tasks: [
      "Spring laser and skin resurfacing campaign launch",
      "APRN/PA prescriber license renewal filings (state-specific)",
      "Annual professional liability insurance renewal (60-day advance)",
      "Medical director agreement annual renewal",
      "Botulinum toxin prescriber account renewals with all manufacturers",
      "Allergan Alle and Galderma Aspire provider account annual renewal",
    ],
  },
  {
    phase: "May – Jun",
    title: "Summer Body Prep",
    tasks: [
      "Mother&apos;s Day package campaign",
      "Summer body contouring campaign launch (CoolSculpting, Emsculpt)",
      "ASLMS Annual Conference CE for laser and device operators",
      "Annual laser device manufacturer in-service training",
      "Annual LSO competency documentation",
      "Annual radiofrequency and body contouring device operator CE",
    ],
  },
  {
    phase: "Jul – Aug",
    title: "Post-Summer Prep",
    tasks: [
      "Fall skin rejuvenation campaign development",
      "Annual staff performance reviews and compensation adjustments",
      "Annual informed consent form legal review and update",
      "Annual retail product distribution agreement renewals",
      "Annual medical waste disposal contract renewal",
      "State radiation control board laser facility permit renewal (state-specific)",
    ],
  },
  {
    phase: "Sep – Oct",
    title: "Fall Launch & ASDS Conference",
    tasks: [
      "Fall skin rejuvenation campaign launch",
      "ASDS Annual Meeting — injectable and device CE",
      "Holiday Beauty Rush preparation (launch November 1)",
      "Annual bloodborne pathogen OSHA training documentation",
      "Annual HazCom training for chemical peels and disinfectants",
      "CoolSculpting ATC annual renewal",
    ],
  },
  {
    phase: "Nov – Dec",
    title: "Holiday Peak Season",
    tasks: [
      "Holiday Beauty Rush peak — November 1 through December 31",
      "DEA registration 3-year renewal (if due this year)",
      "OSHA 300 log preparation for February 1 posting",
      "Annual aesthetics trend report review (ASPS, RealSelf annual)",
      "Year-end inventory review for product distribution agreements",
      "Annual sharps and biohazard waste documentation",
    ],
  },
]

const kpis = [
  { label: "Peak Revenue Window", value: "Nov–Feb", note: "40% of annual injectable revenue" },
  { label: "FDA Device Registration Renewal", value: "Oct 1 – Dec 31", note: "Annual window for Class II devices" },
  { label: "Informed Consent Annual Review", value: "Every year", note: "Legal update + FDA label changes" },
  { label: "Prescriber Manufacturer Accounts", value: "4–6 portals", note: "Allergan, Galderma, Merz, Evolus, Revance" },
  { label: "LSO Competency Documentation", value: "Annual", note: "ANSI Z136.3 standard" },
  { label: "Seasonal Campaigns", value: "6 per year", note: "Each with 4–8 week lead time" },
]

const testimonial = {
  quote:
    "Medical director agreement annual renewal with updated scope, NP prescriber license renewal in 2 states, botulinum toxin prescriber account annual renewal with Allergan, Merz, Evolus, and Revance, Kybella and Sculptra prescriber account renewals, Alle and Aspire provider portal annual renewal, Evolus quarterly incentive program review, annual FDA device facility registration renewal for 6 Class II devices, state radiation facility permit annual renewal, LSO annual competency documentation for 3 laser operators, annual laser device in-service training for Halo, BBL, and CoolSculpting, CoolSculpting ATC annual renewal, annual informed consent legal review for 12 procedure consent forms, annual professional liability renewal 60 days advance, annual HIPAA risk assessment, annual HIPAA staff training for 14 staff, annual bloodborne pathogen training, annual HazCom training, Valentine&apos;s Day campaign January 1 launch, spring resurfacing campaign February launch, Mother&apos;s Day April 1 launch, summer body contouring May launch, fall rejuvenation September launch, Holiday Beauty Rush November 1 launch, DEA 3-year renewal, and annual retail product agreement renewals for 5 skincare lines — simultaneously. Momenties mapped every deadline.",
  name: "Ngozi MS.",
  title: "NP, Medical Director & Owner, Aesthetic Medicine & Medical Spa Group",
}

export default function MedicalSpaCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Medical Spas & Aesthetic Practices"
        title="Prescriber Compliance. Laser Safety. Seasonal Campaigns. One Calendar."
        subtitle="Momenties tracks annual medical director agreement renewal, botulinum toxin prescriber account renewals across all manufacturers, annual FDA device facility registration window, LSO competency documentation, laser device annual in-service training, informed consent annual legal review, professional liability 60-day renewal advance, seasonal campaign launch sequences for all 6 annual revenue peaks, Allergan and Galderma rewards program annual renewals, and state APRN/PA license cycles so medical spas stay compliant and capture every revenue window."
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
            Your Medical Spa Compliance Year, Month by Month
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
            What Momenties Tracks for Medical Spas
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
