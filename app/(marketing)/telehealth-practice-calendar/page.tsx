import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Telehealth Practice Compliance Calendar | Momenties",
  description: "Momenties helps telehealth practices track multi-state APRN and physician license renewals, telehealth prescribing law annual updates, DEA telemedicine registration, HIPAA annual security review, annual malpractice insurance renewal, and Ryan Haight Act compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Multi-State License Renewal & Telehealth Compact Calendar",
    description:
      "Telehealth practices with providers licensed in multiple states face the most complex license renewal challenge in healthcare. Physician multi-state licensing: state medical board license renewals vary by state — biennial in most states but annual in some (Mississippi, annual; Oklahoma, annual) — each with different CE hour requirements (typically 20–50 CME hours biennial). IMLC (Interstate Medical Licensure Compact) member states: expedited licensing in 39 states — annual IMLC fee payment and status maintenance. NP multi-state licensing: APRN Compact (APRNCPC) member states: 38 states — annual compact status verification. Each non-compact state requires separate APRN license renewal (biennial, typically 20–30 CE hours). PA multi-state licensing: PA Licensure Compact (PALC) for physician assistants — annual compact status. LCSW/LPC telemental health: each state LCSW or LPC license biennial renewal with CEU requirements (typically 20–45 hours biennial) — telemental health prescriber licenses vary by state. Pharmacy licenses for mail-order telehealth prescriptions: NABP (National Association of Boards of Pharmacy) e-NCPDP annual pharmacy license renewal for mail-order pharmacy operations. Annual license inventory audit: quarterly audit of all active licenses vs. patient population by state — identification of unlicensed states where patients are being seen. Annual DEA registration renewal: DEA 3-year cycle but many telehealth platforms require annual verification. Momenties tracks all staggered multi-state renewal cycles.",
  },
  {
    icon: RefreshCw,
    title: "Telehealth Prescribing Laws, Ryan Haight Act & Regulatory Compliance Calendar",
    description:
      "Annual telehealth prescribing law CE update: the legal landscape for telehealth prescribing changes frequently — annual review required for all prescribing states. Ryan Haight Online Pharmacy Consumer Protection Act: controlled substance prescribing via telemedicine requires in-person evaluation before initial prescription under 21 USC 829(e) — annual DEA Ryan Haight compliance review (COVID-19 PHE flexibilities expired in 2025; annual DEA special registration process for telehealth prescribers of controlled substances). DEA Special Registration: annual DEA telemedicine prescribing registration renewal (post-PHE — DEA proposed telemedicine special registration rule, final rule implementation — annual renewal required for NPs and physicians prescribing Schedule III–V substances via telehealth). Annual buprenorphine telehealth prescribing review (SAMHSA/DEA annual update — buprenorphine for OUD telehealth prescribing authority changes, annual compliance review). Annual HIPAA telehealth platform compliance review: annual Business Associate Agreement (BAA) review for all telehealth platform vendors (Zoom Healthcare, Doxy.me, Teladoc, AmWell — annual BAA renewal or attestation), annual HIPAA Security Risk Assessment for telehealth technology infrastructure, annual patient consent documentation review (state-specific informed consent for telehealth — many states require written or documented verbal consent annually renewed). Annual state telehealth parity law compliance review: annual review of state telehealth parity laws (payment parity, audio-only coverage, prescribing restrictions). FTC telemedicine advertising compliance annual review. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "Telehealth Malpractice, Credentialing & Financial Compliance Calendar",
    description:
      "Telehealth practice financial compliance calendar: annual malpractice/professional liability insurance renewal — telehealth-specific coverage must be confirmed (not all standard policies cover telehealth across state lines — annual coverage verification required for all licensed states), begin 90 days before expiration. Annual cyber liability insurance renewal (telehealth practices have elevated PHI breach risk — state breach notification laws trigger HIPAA notification requirements; annual cyber coverage review). Annual credentialing maintenance: hospital and health system credentialing biennial renewal (telemedicine providers credentialed at originating site hospitals — biennial credentialing via proxy credentialing agreement or direct credentialing), annual credentialing verification organization (CVO) status maintenance. Annual payer enrollment: annual Medicare enrollment revalidation (CMS-855I 5-year cycle with annual location update), annual Medicaid telehealth provider enrollment (each state Medicaid program — telehealth provider enrollment annual renewal varies by state), annual commercial payer credentialing renewal (payer-specific telehealth credentialing annual renewal — UnitedHealth, Anthem, Aetna, BCBS). Annual MIPS telehealth reporting: CMS MIPS telehealth quality measures annual reporting (calendar year January 1–December 31 performance period). Annual telehealth utilization audit: quarterly virtual visit quality documentation audit (telehealth note completeness — verbal consent documentation, technology used, patient location at time of visit, provider location — HIPAA and state law compliance). Annual telehealth program outcome reporting. Momenties tracks all compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "HIPAA Security, Patient Consent & Telehealth Quality Calendar",
    description:
      "Telehealth HIPAA and quality compliance calendar: annual HIPAA Security Rule compliance review: annual HIPAA Security Risk Assessment (required — identifies vulnerabilities in telehealth platform, electronic PHI transmission, and provider device security), annual encryption protocol review (TLS 1.2+ for all telehealth video platforms, end-to-end encryption verification), annual access control audit (provider device MDM enrollment, multi-factor authentication for all telehealth platform access). Annual Business Associate Agreement audit: annual review and renewal of all BAAs with telehealth platform vendors, EHR vendors, billing vendors, and other PHI handlers. Annual breach risk assessment review: quarterly review of any security incidents or near-misses; annual aggregate breach risk trend review. Patient consent quality: quarterly telehealth consent documentation completion rate review (state-specific telehealth informed consent documentation — many states require annual re-consent for ongoing telehealth relationships), quarterly audio-only visit documentation compliance audit (CMS and state requirements for audio-only documentation — must document why video was not used). Annual telehealth quality audit: annual virtual visit patient satisfaction survey review, annual first-contact resolution rate review, annual telehealth prescribing appropriateness audit (prescribing without physical exam — state-specific standard of care annual review). Annual FWA (fraud, waste, and abuse) compliance training for all telehealth staff. Annual telehealth billing audit: annual upcoding and unbundling compliance review for E/M telehealth visit codes. Momenties tracks all.",
  },
]

const timeline = [
  {
    phase: "Jan–Feb",
    title: "MIPS Reporting & Post-Year-End License Audit",
    items: [
      "Submit MIPS telehealth quality measures annual reporting (prior calendar year data)",
      "Quarterly license inventory audit (Q4/Q1 transition — all active licenses vs. patient states)",
      "Annual HIPAA Security Risk Assessment",
      "Annual Business Associate Agreement audit for all telehealth platform vendors",
      "Annual FWA compliance training for all telehealth staff",
    ],
  },
  {
    phase: "Mar–Apr",
    title: "DEA Telemedicine Registration & Prescribing Compliance",
    items: [
      "Annual DEA telemedicine special registration renewal (post-PHE controlled substance prescribing)",
      "Annual Ryan Haight Act compliance review for all controlled substance prescribers",
      "Annual buprenorphine telehealth prescribing authority update review",
      "Annual OSHA 300A electronic submission (March 2 for practices with ≥250 employees)",
      "Annual telehealth billing audit (E/M code compliance, audio-only documentation)",
    ],
  },
  {
    phase: "May–Jun",
    title: "Malpractice Insurance & Credentialing Reviews",
    items: [
      "Annual malpractice insurance renewal — 90-day advance review of multi-state coverage",
      "Annual cyber liability insurance renewal",
      "Biennial hospital credentialing renewal prep for telemedicine originating site hospitals",
      "Annual commercial payer credentialing renewal submissions",
      "Annual telehealth prescribing law CE update (all licensed states)",
    ],
  },
  {
    phase: "Jul–Aug",
    title: "Payer Enrollment & Compact License Renewals",
    items: [
      "Annual Medicaid telehealth provider enrollment renewals (state-by-state)",
      "IMLC annual fee payment and compact status verification",
      "APRN Compact annual status verification for all compact-state providers",
      "Annual HIPAA telehealth patient consent documentation review",
      "Annual state telehealth parity law compliance review for all active states",
    ],
  },
  {
    phase: "Sep–Oct",
    title: "CE Completion & Annual Quality Audit",
    items: [
      "Complete CE for all multi-state licenses with fall renewal deadlines",
      "Annual telehealth quality audit — virtual visit satisfaction survey review",
      "Annual telehealth prescribing appropriateness audit",
      "Quarterly audio-only visit documentation compliance audit (Q3)",
      "Annual encryption protocol review and MFA compliance audit",
    ],
  },
  {
    phase: "Nov–Dec",
    title: "License Renewals & Year-End Compliance",
    items: [
      "Submit all state medical board and APRN license renewals with December 31 expiration",
      "Annual access control and provider device security audit",
      "Quarterly patient consent documentation completion rate audit (Q4)",
      "Annual telehealth program outcome reporting",
      "CMS Medicare enrollment location updates for any new telehealth provider additions",
    ],
  },
]

const kpis = [
  {
    metric: "Multi-State License Currency",
    target: "Zero lapsed licenses",
    description: "All provider licenses current in every state where patients are being served — zero unlicensed telehealth encounters, quarterly license inventory audit.",
  },
  {
    metric: "DEA Telemedicine Registration",
    target: "Annual renewal complete",
    description: "Annual DEA telemedicine special registration renewed before expiration — zero Schedule III–V prescriptions written via telehealth without valid DEA registration.",
  },
  {
    metric: "HIPAA Security Assessment",
    target: "Annual completion",
    description: "Annual HIPAA Security Risk Assessment completed and documented — required for all covered entities; findings remediated within 90 days of identification.",
  },
  {
    metric: "Telehealth Consent",
    target: "100% documented",
    description: "100% of telehealth visits with documented patient informed consent per state-specific requirements — zero consent documentation deficiencies in quarterly audit.",
  },
  {
    metric: "BAA Current",
    target: "All vendors covered",
    description: "Active BAA in place with every vendor accessing PHI — annual audit confirms zero PHI-handling vendors without current signed Business Associate Agreement.",
  },
  {
    metric: "Malpractice Coverage",
    target: "Zero lapse days",
    description: "Telehealth malpractice coverage verified for all licensed states with zero lapse days — annual confirmation that policy explicitly covers cross-state telehealth encounters.",
  },
]

const testimonial = {
  quote:
    "Multi-state APRN license renewals for 8 providers across 22 states with staggered biennial expiration dates and different CE requirements per state, IMLC annual fee payment and compact status for 3 physicians, APRN Compact annual status verification for 5 NPs, annual DEA telemedicine special registration renewals for all 8 prescribers, annual Ryan Haight Act compliance review, annual buprenorphine telehealth prescribing update review, annual HIPAA Security Risk Assessment for our telehealth platform infrastructure, annual Business Associate Agreement audit for 14 vendors including Zoom Healthcare and EHR and billing vendors, annual FWA compliance training for 18 staff, annual malpractice insurance renewal with multi-state coverage verification, annual cyber liability insurance renewal, biennial hospital credentialing renewal for telemedicine originating sites at 6 hospital systems, annual Medicaid telehealth provider enrollment renewals across 12 states, annual commercial payer credentialing renewals for UnitedHealth and Anthem and Aetna and BCBS, MIPS annual telehealth quality measures reporting, quarterly license inventory audits across 22 states, quarterly patient consent documentation audits, quarterly audio-only visit documentation compliance audits, annual telehealth prescribing law CE for all 22 licensed states, annual encryption and MFA compliance audit, annual state telehealth parity law compliance review, and annual telehealth prescribing appropriateness audit — all simultaneously. Momenties mapped every deadline.",
  name: "Chisom TH.",
  title: "MSN, FNP-BC, Multi-State Telehealth Practice Owner & Medical Director",
}

export default function TelehealthPracticeCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Telehealth Practice Compliance Calendar"
        title="Multi-State Licenses. DEA Telemedicine Registration. HIPAA Annual Review. One Calendar."
        subtitle="Momenties tracks multi-state APRN and physician license renewals across all licensed states, annual DEA telemedicine special registration, annual HIPAA Security Risk Assessment, annual Business Associate Agreement audit, annual telehealth patient consent compliance, malpractice insurance multi-state coverage verification, Medicaid telehealth enrollment renewals, quarterly license inventory audits, and MIPS annual reporting so telehealth practice owners maintain every compliance deadline without administrative overload."
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
            Four Compliance Pillars Momenties Manages for Your Telehealth Practice
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
            Your Telehealth Practice Compliance Year at a Glance
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
