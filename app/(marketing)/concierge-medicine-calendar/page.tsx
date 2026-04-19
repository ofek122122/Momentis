import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Concierge Medicine Practice Compliance Calendar | Momenties",
  description: "Momenties helps concierge medicine practices track state medical license CE renewals, DEA registration, DPC membership agreement annual reviews, annual malpractice insurance renewal, HIPAA annual compliance, annual FTC advertising compliance, and state concierge medicine regulatory compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Physician & NP License Renewal & Concierge Medicine Credential Calendar",
    description:
      "Concierge medicine and direct primary care (DPC) practices maintain state medical board or nursing board licenses with CE requirements that vary by state. Physician license CE: typically 20–50 CME hours biennial depending on state (California: 50 CME hours biennial including mandatory pain management CE, domestic violence CE, and implicit bias CE; Florida: 40 CME hours biennial; New York: 33 CME hours triennial). ABFM (American Board of Family Medicine) MOC: annual ABFM Knowledge Self-Assessment (KSA) and continuous certification (CC) requirements — annual ABFM enrollment fee and annual CC activity completion. ABIM (American Board of Internal Medicine) MOC: annual ABIM assessment activity and quality improvement activity. AAFP (American Academy of Family Physicians) membership annual renewal. ACP (American College of Physicians) membership annual renewal. Advanced cardiac life support (ACLS): AHA ACLS biennial renewal for physicians and NPs performing acute care procedures. BLS biennial renewal for all clinical staff. FACS (Fellow of the American College of Surgeons) annual dues for surgeons in concierge medicine. Anti-aging/functional medicine: A4M (American Academy of Anti-Aging Medicine) BHRT, peptide therapy, and functional medicine annual CE certification for practices offering these services. Executive health services: NAEM (National Association of Executive Medicine) annual membership for concierge practices serving corporate executives. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: RefreshCw,
    title: "FTC Advertising, DPC Membership Laws & Concierge Regulatory Calendar",
    description:
      "Annual FTC advertising compliance review: FTC endorsement guidelines annual review for concierge medicine testimonials and patient reviews on websites and social media (FTC revised guidelines 2023 — annual review required for all patient testimonial use in advertising). FTC telemedicine advertising compliance annual review (subscription medicine service advertising standards). DPC (Direct Primary Care) regulation: annual state DPC enabling legislation compliance review — 30+ states have passed DPC-specific laws exempting direct primary care from insurance regulation; annual review of your state&apos;s requirements (annual membership agreement template review, fee disclosure, service scope). Annual concierge membership agreement review: annual attorney review of membership agreement (terms of service, cancellation policy, scope of included services, fees for non-covered services — state consumer protection law compliance review). State insurance department compliance: annual non-insurance determination letter renewal (if required by your state — some states require annual confirmation from state insurance department that DPC/concierge membership is not insurance). Annual HIPAA Notice of Privacy Practices review and update (required — any material changes require distribution to all patients). Annual state advertising disclosure requirements review (state-specific concierge medicine advertising requirements — patient disclosure that concierge fees do not replace insurance). Annual patient membership renewal cycle management: most concierge practices have anniversary-based renewals — annual renewal notification system audit. CMS compliance: CMS opt-out recertification for Medicare-enrolled physicians opting out of Medicare (CMS opt-out affidavit biennial renewal — 2-year affidavit period). Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "DEA Controlled Substance, Malpractice Insurance & Financial Compliance Calendar",
    description:
      "Concierge medicine financial compliance calendar: annual malpractice/professional liability insurance renewal — concierge medicine requires specific professional liability coverage (concierge medicine creates closer physician-patient relationship — ensure policy covers in-home visits, after-hours calls, and direct access services), begin 90 days before expiration. Annual cyber liability insurance renewal (concierge medicine EHR, patient communication apps, direct text/call access create elevated PHI breach risk). Annual Directors &amp; Officers (D&amp;O) insurance review for multi-physician concierge practices. DEA registration 3-year renewal: DEA registration critical for concierge practices with in-home controlled substance prescribing, biennial controlled substance physical inventory within 2 days of DEA anniversary, monthly CS log reconciliation. PDMP: quarterly PDMP query compliance documentation audit before opioid prescribing. Annual laboratory compliance: CLIA Certificate of Waiver or CLIA Certificate of Compliance annual renewal (for concierge practices with in-office labs — point-of-care testing, phlebotomy, EKG); CLIA certificate renewal every 2 years. Annual pharmacy benefit review: prescription dispensing authority in concierge settings — annual state board of pharmacy review of in-office medication dispensing authority (some states require pharmacy license for in-office dispensing of medications to concierge patients). Annual staff credential audit: annual verification of medical assistant certification, phlebotomy certification, and BLS/ACLS current for all concierge support staff. Annual business entity annual report (LLC or corporation state filing). Momenties tracks all compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "HIPAA Security, Membership Quality & Concierge Practice Operations Calendar",
    description:
      "Concierge medicine HIPAA and quality compliance calendar: annual HIPAA Security Risk Assessment — concierge medicine creates unique PHI vulnerabilities (direct physician cell phone use, patient communication via iMessage/WhatsApp/text, after-hours electronic access from non-office devices); annual security risk assessment required. Annual Business Associate Agreement (BAA) audit: annual review of BAAs with EHR vendors, telehealth platforms, billing vendors, lab partners, and any app providing patient communication. Annual HIPAA training for all staff. Annual patient communication policy review: annual review of communication consent documentation for non-HIPAA-compliant channels (patient authorization for text/email/app communication — annual re-consent for ongoing communication method). Patient quality and satisfaction: annual patient satisfaction survey with Net Promoter Score benchmark (SEAP — Subscriber Experience and Access Panel annual review); annual panel size and access quality audit (average same-day or next-day appointment availability — concierge standard ≥95% same-day access). Annual membership attrition analysis (target ≤10% annual attrition — AAFP DPC benchmarks). Annual panel review: annual per-physician panel size review (DPC benchmark — 300–600 patients per physician; concierge benchmark — 300–600 patients), annual membership waitlist management. Annual financial benchmarking: annual revenue per member review (national concierge medicine benchmark — $1,800–$3,600 annual membership fee range), annual overhead ratio review. Annual lease or facility renewal for concierge practice location. Momenties tracks all operations compliance.",
  },
]

const timeline = [
  {
    phase: "Jan–Feb",
    title: "ABFM/ABIM MOC & Post-Year-End Reviews",
    items: [
      "Complete annual ABFM Knowledge Self-Assessment or ABIM CC activity (January deadline for many modules)",
      "Annual patient satisfaction survey and NPS benchmark review (prior year data)",
      "Annual membership attrition analysis for prior year",
      "Annual HIPAA Notice of Privacy Practices review and update",
      "Annual business entity annual report filing (LLC/corporation)",
    ],
  },
  {
    phase: "Mar–Apr",
    title: "DPC Membership Agreement & Regulatory Compliance",
    items: [
      "Annual concierge membership agreement attorney review and update",
      "Annual state DPC enabling legislation compliance review",
      "Annual non-insurance determination letter renewal (if required by state)",
      "Annual FTC advertising compliance review — website testimonials and patient reviews",
      "DEA biennial controlled substance physical inventory (if anniversary falls in this period)",
    ],
  },
  {
    phase: "May–Jun",
    title: "Malpractice Insurance & HIPAA Security Assessment",
    items: [
      "Annual malpractice professional liability insurance renewal — 90-day advance review",
      "Annual cyber liability insurance renewal",
      "Annual HIPAA Security Risk Assessment",
      "Annual BAA audit for all PHI-handling vendors",
      "Annual HIPAA training for all staff",
    ],
  },
  {
    phase: "Jul–Aug",
    title: "Panel Quality Review & Membership Management",
    items: [
      "Annual per-physician panel size review vs. DPC/concierge benchmarks",
      "Annual membership waitlist management audit",
      "Annual patient communication policy review and re-consent documentation",
      "Annual laboratory CLIA certificate review and renewal prep",
      "Annual pharmacy dispensing authority compliance review",
    ],
  },
  {
    phase: "Sep–Oct",
    title: "CE Completion & CMS Opt-Out Renewal",
    items: [
      "Complete state biennial CME for physicians with fall expiration dates",
      "CMS Medicare opt-out affidavit biennial renewal (if applicable — 2-year cycle)",
      "AAFP and ACP membership annual renewal",
      "Annual patient membership renewal cycle audit (anniversary-based renewals)",
      "Annual staff credential audit (MA certification, phlebotomy, BLS/ACLS)",
    ],
  },
  {
    phase: "Nov–Dec",
    title: "Year-End License Renewals & Financial Benchmarking",
    items: [
      "Submit state medical board license renewals (December 31 expiration states)",
      "Annual revenue per member and overhead ratio benchmarking review",
      "Annual subscription pricing review and membership fee adjustment notification",
      "ABFM annual enrollment fee payment and CC activity verification",
      "Monthly CS log reconciliation (December — year-end controlled substance reconciliation)",
    ],
  },
]

const kpis = [
  {
    metric: "Same-Day Access Rate",
    target: "≥ 95% same-day or next-day",
    description: "95% or more of member requests fulfilled with same-day or next-day appointment — the core value proposition of concierge medicine, monitored quarterly.",
  },
  {
    metric: "Annual Member Attrition",
    target: "≤ 10% annual attrition",
    description: "Annual membership attrition at or below 10% — AAFP DPC benchmark for sustainable concierge practice; tracked annually with root cause analysis for each departure.",
  },
  {
    metric: "ABFM/ABIM MOC Current",
    target: "Zero lapsed certification",
    description: "All physicians current with ABFM or ABIM maintenance of certification requirements — zero lapsed board certification which would trigger hospital credentialing issues.",
  },
  {
    metric: "DEA CS Inventory",
    target: "100% within 2 days",
    description: "Biennial DEA controlled substance inventory completed within 2 days of DEA registration anniversary — DEA 21 CFR 1304.11 zero-defect compliance.",
  },
  {
    metric: "HIPAA Security Assessment",
    target: "Annual completion",
    description: "Annual HIPAA Security Risk Assessment completed addressing concierge-specific risks (provider cell phones, patient direct messaging, after-hours access) with remediation plan.",
  },
  {
    metric: "Membership Agreement Current",
    target: "Annual attorney review",
    description: "Membership agreement reviewed by healthcare attorney annually — zero membership disputes arising from outdated terms, and state insurance department compliance maintained.",
  },
]

const testimonial = {
  quote:
    "ABFM annual Knowledge Self-Assessment and CC activity for 3 physicians, state medical board biennial CME renewals for 3 physicians with staggered expiration dates including mandatory implicit bias and pain management CE, AAFP and ACP membership annual renewals, ACLS biennial renewals for all 3 physicians, annual malpractice insurance renewal with concierge medicine in-home visit coverage verification, annual cyber liability insurance renewal, annual HIPAA Security Risk Assessment addressing our direct physician cell phone and iMessage use with patients, annual BAA audit for EHR and telehealth platform and lab vendors, annual HIPAA training for 8 staff members, annual concierge membership agreement attorney review and update for 340 member families, annual state DPC enabling legislation compliance review, annual FTC advertising compliance review for website and social media patient testimonials, annual patient communication re-consent documentation for non-HIPAA-compliant channels, CMS Medicare opt-out affidavit biennial renewal for all 3 physicians, CLIA Certificate of Waiver biennial renewal, annual pharmacy dispensing authority compliance review, DEA 3-year renewal, biennial DEA controlled substance inventory, monthly CS log reconciliation, annual panel size review for 3 physicians with combined 940 member patients, annual patient satisfaction survey with NPS benchmark review, annual membership attrition analysis, annual revenue per member and overhead ratio benchmarking, annual subscription pricing review, annual staff credential audit, annual business entity annual report filing, and ABFM annual enrollment fee payment — all simultaneously. Momenties mapped every deadline.",
  name: "Emeka CM.",
  title: "MD, FAAFP, Multi-Physician Concierge Medicine Practice Owner",
}

export default function ConciergeMediacineCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Concierge Medicine Practice Compliance Calendar"
        title="ABFM MOC Annual. DPC Membership Laws. HIPAA Security Review. One Calendar."
        subtitle="Momenties tracks ABFM and ABIM annual maintenance of certification requirements, state medical board license CE renewals, annual concierge membership agreement attorney review, annual state DPC enabling law compliance, annual FTC advertising compliance, annual HIPAA Security Risk Assessment, CMS Medicare opt-out biennial renewal, DEA 3-year renewal, annual malpractice insurance renewal with concierge coverage verification, annual patient attrition analysis, and annual same-day access rate review so concierge medicine practice owners maintain every compliance deadline without administrative overload."
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
            Four Compliance Pillars Momenties Manages for Your Concierge Practice
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
            Your Concierge Medicine Practice Compliance Year at a Glance
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
