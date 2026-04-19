import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Mental Health Practice Calendar | Momenties",
  description: "Momenties helps mental health practices track therapist license renewals, CE requirements, buprenorphine waiver compliance, insurance credentialing, HIPAA documentation, and No Surprises Act obligations in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Therapist License Renewal, CE Compliance & Mental Health Credentialing Calendar",
    description:
      "Mental health practices without structured license renewal calendars generate state board violations — a lapsed therapy license prohibits practice and requires immediate cessation of patient care, making systematic tracking essential for every licensed clinician. Therapist license renewal calendar: LCSW (Licensed Clinical Social Worker) renewal (biennial in most states — 36-48 CE hours per cycle with social work-specific content), LMFT (Licensed Marriage and Family Therapist) renewal (biennial — 36 CE hours in most states), LPC/LPCC (Licensed Professional Counselor) renewal (biennial — 24-40 CE hours), licensed psychologist renewal (biennial — 24-40 CE hours), and LMHC (Licensed Mental Health Counselor) renewal (biennial — 36 CE hours). Mandatory CE content: ethics CE (3-6 hours per renewal cycle — required in all states), cultural competency CE (1-3 hours — increasing state requirements), suicide prevention CE (most states now require 1-3 hours per cycle — California SB 1116, New York, Washington), substance use disorder CE (required in several states — Colorado, Maryland), and telehealth CE (growing state requirement — HIPAA telehealth compliance plus state-specific telemental health requirements). Specialty certification renewals: EMDR Certification (EMDRIA, 3-year, 12 CE hours), BCBA (Board Certified Behavior Analyst, annual), CBT certification (NACBT, annual CE), and EAP specialist credential (annual). Momenties manages every license milestone.",
  },
  {
    icon: RefreshCw,
    title: "Buprenorphine/MAT Compliance, DEA Registration & Controlled Substance Calendar",
    description:
      "Mental health practices providing Medication-Assisted Treatment (MAT) without structured DEA and buprenorphine compliance calendars generate federal enforcement actions — prescribers treating opioid use disorder with buprenorphine must maintain DEA registration with appropriate Schedule III authority and DEA MATE Act training compliance. DEA registration calendar: DEA Form 224 renewal (3-year cycle — independent tracking required), DEA MATE Act 8-hour training compliance documentation (required for all DEA-registered practitioners prescribing buprenorphine for OUD — training completion must be documented in DEA file), and state controlled substance registration annual renewal (many states have separate CS registration from DEA — annual in most states). Buprenorphine compliance calendar: buprenorphine patient panel management (no patient limit under MATE Act — but monitoring and documentation still critical), urine drug screen documentation quarterly per patient (per SAMHSA guidelines), prescription drug monitoring program (PDMP) compliance (most states require PDMP query before each buprenorphine prescription), and naloxone co-prescribing documentation (SAMHSA and ASAM best practice — prescribe naloxone to all buprenorphine patients). Methadone OTP compliance: OTP (Opioid Treatment Program) annual DEA registration renewal, SAMHSA annual certification renewal, and state OTP licensing annual renewal. REMS monitoring: Spravato (esketamine) REMS annual provider recertification for practices administering intranasal esketamine for TRD, and clozapine REMS monthly absolute neutrophil count documentation for patients on clozapine. Momenties schedules every compliance deadline.",
  },
  {
    icon: TrendingUp,
    title: "HIPAA Compliance, No Surprises Act & Mental Health Practice Legal Calendar",
    description:
      "Mental health practices without structured HIPAA and legal compliance calendars accumulate silent liability exposure — OCR HIPAA audits focus on mental health practices at higher rates due to the sensitivity of psychotherapy notes (specially protected under 45 CFR 164.524), and No Surprises Act violations generate $10,000 per-violation penalties. HIPAA compliance calendar: annual HIPAA risk assessment (45 CFR 164.308 — required annually or after significant operational change), annual HIPAA training for all staff (including contractors with PHI access), annual Business Associate Agreement audit (review all BAAs with EHR vendors, billing services, supervision platforms), and privacy notice annual review (ensure current version is posted and distributed). No Surprises Act compliance calendar: Good Faith Estimate (GFE) for all uninsured and self-pay patients (required before scheduling — within 3 business days of scheduling), GFE update documentation for treatment plan changes, and annual NSA compliance audit for all payer types. Telehealth compliance calendar: annual telehealth platform BAA renewal (verify HIPAA-compliant platform), state telehealth parity law annual review (42 states have telehealth parity — billing compliance), and state cross-state teletherapy license review (if providing services to out-of-state patients — PSYPACT, counseling compact membership verification). Mandatory reporting: annual documentation review for mandatory reporting compliance training (child abuse, elder abuse — state-specific training), and Tarasoff/duty-to-warn annual protocol review. Momenties tracks all legal and compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Insurance Credentialing, Fee Schedule & Mental Health Practice Operations Calendar",
    description:
      "Mental health practices without structured insurance credentialing calendars lose in-network status without warning — insurance credentialing typically expires every 2-3 years with annual data verification requirements, and a lapsed credentialing causes claim denials retroactive to the expiration date. Insurance credentialing calendar: BCBS annual provider data verification (most BCBS plans require annual attestation of correct address, NPI, and licensing data), Aetna credentialing 3-year renewal with annual data verification, Cigna credentialing renewal, United Healthcare/Optum 3-year re-credentialing cycle, Medicare Part B revalidation (every 5 years — CMS-855I), Medicaid annual enrollment renewal (state-specific), and CAQH (Council for Affordable Quality Healthcare) profile quarterly update (required to maintain active credentialing with all major payers — quarterly attestation). Fee schedule calendar: annual fee schedule update (January 1 — update self-pay rates to reflect inflation and market rates), Medicare Physician Fee Schedule update implementation (January 1 — new RVU rates for CPT codes 90832-90839), insurance contract renegotiation opportunities (annual window per plan — most outpatient mental health plans allow annual fee requests), and superbill CPT code annual audit (DSM-5-TR diagnosis codes plus CPT procedure code accuracy review). Supervision compliance: clinical supervision documentation quarterly (for associate-level clinicians working toward licensure), and supervisor license renewal annual tracking. Momenties consolidates the full mental health practice calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Medicare Fee Schedule Implementation & CE Audit Season",
    description: "Implement new Medicare Physician Fee Schedule CPT code rates (January 1). Update self-pay fee schedule to current market rates. Renew therapist licenses with January/February expiration deadlines — verify CE completion. Run CAQH profile attestation (quarterly — Q1). Complete annual HIPAA risk assessment. Submit annual HIPAA staff training documentation. Complete any outstanding DEA registration renewals with Q1 expiration. Review buprenorphine patient PDMP compliance documentation for Q4.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Spring License Renewals & Insurance Credentialing Audit",
    description: "Complete CE for therapists with spring license renewal deadlines. Run annual Business Associate Agreement audit — verify current BAAs with all vendors. Run Q1 PDMP compliance audit for buprenorphine patients. Complete BCBS annual provider data verification (spring attestation cycle). Review No Surprises Act Good Faith Estimate compliance audit. Complete state CS registration annual renewal for spring anniversaries. Run Q1 CAQH attestation. Begin suicide prevention CE if annual requirement in practice state.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Mid-Year CE Push & Telehealth Compliance Review",
    description: "Run mid-year CE completion audit for all licensed clinicians. Complete annual telehealth platform HIPAA compliance review — verify BAA currency. Review state telehealth parity law compliance for all payers. Complete cultural competency CE if mid-year deadline. Run Q2 PDMP compliance audit for buprenorphine and controlled substance patients. Run Q2 CAQH attestation. Review and update privacy notice if any regulatory changes. Complete Spravato REMS documentation quarterly review if administering esketamine.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Summer CE Season & Credentialing Renewal Prep",
    description: "Complete summer CE programs for therapists with fall renewal deadlines. Begin Aetna/Cigna/United credentialing renewal if 3-year anniversary approaching (90-day advance process). Run Q3 CAQH attestation. Complete buprenorphine patient urine drug screen documentation quarterly audit. Review mandatory reporter training currency for all clinicians. Run mid-year billing audit — CPT code accuracy review, diagnosis code currency. Begin annual fee schedule renegotiation for payers with fall contract anniversaries.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Ethics CE Completion & Annual Supervision Audit",
    description: "Complete ethics CE for therapists with fall license renewal deadlines (most states require 3-6 hours ethics per renewal — concentrated in fall). Complete fall license renewals. Run clinical supervision documentation quarterly audit for associate-level clinicians. Run Q4 CAQH attestation. Complete suicide prevention CE for states with annual deadlines. Run annual No Surprises Act compliance audit. Review Medicare Part B revalidation schedule — begin 6-month advance for any 5-year anniversaries. Complete fall PDMP compliance audit.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Compliance Close & Annual Planning",
    description: "Complete CE for all therapists with December 31 annual or renewal-cycle deadlines. File annual HIPAA privacy notice update if needed. Run year-end DEA controlled substance log reconciliation. Complete Spravato REMS annual provider recertification. Complete clozapine REMS ANC annual documentation review. Lock next-year CE and license renewal calendar for all clinicians. Run annual staff salary and fee schedule review. Complete annual supervision documentation for associate clinicians completing licensure hours. Plan next-year training calendar and specialty certification pursuits.",
  },
]

const kpis = [
  {
    metric: "Therapist License Renewal On-Time 100%",
    description: "Zero lapsed therapy licenses for all clinicians; a lapsed license requires immediate cessation of patient care, claim denial for all sessions during lapse, and state board disciplinary action",
  },
  {
    metric: "CAQH Profile Current 100%",
    description: "CAQH quarterly attestation completed for all clinicians; an outdated CAQH profile causes credentialing termination with all major insurers — retroactive claim denials from termination date",
  },
  {
    metric: "No Surprises Act GFE Compliance 100%",
    description: "Good Faith Estimates issued to all uninsured and self-pay patients before scheduling; NSA violations generate $10,000 per-violation fines per HHS audit finding",
  },
  {
    metric: "PDMP Compliance Rate 100%",
    description: "PDMP query documented before each buprenorphine and controlled substance prescription; non-compliance with state PDMP requirements generates state board disciplinary action for prescribers",
  },
  {
    metric: "CE Completion Rate 100%",
    description: "All therapists completing required CE hours before license renewal deadline; CE non-completion at renewal triggers automatic license suspension in most states",
  },
  {
    metric: "Insurance Credentialing Current 100%",
    description: "Active credentialing status with all contracted payers; lapsed credentialing causes claim denials retroactive to expiration — typically 60-180 days of denied claims before reinstatement",
  },
]

const testimonial = {
  quote:
    "Therapist license renewals for 8 clinicians (3 LCSWs, 2 LMFTs, 2 LPCs, 1 psychologist) across 2 states on biennial cycles with different state-specific CE requirements and mandatory ethics/suicide prevention hours, DEA renewal and DEA MATE Act training documentation for 2 buprenorphine prescribers, state CS annual registration for both prescribers, PDMP compliance documentation for 45 buprenorphine patients on quarterly review, urine drug screen quarterly audit, buprenorphine patient naloxone co-prescription audit, Spravato REMS annual provider recertification for esketamine administration, annual HIPAA risk assessment, annual BAA audit for 6 vendors, CAQH quarterly attestation for all 8 clinicians, No Surprises Act GFE compliance audit, annual BCBS provider data verification, Aetna 3-year re-credentialing for 3 clinicians, Medicare revalidation for 2 clinicians, annual telehealth platform BAA review, state telehealth parity law compliance review, annual mandatory reporter training documentation, clinical supervision quarterly documentation for 2 associates, and annual ethics CE tracking — all in spreadsheets. Momenties organized everything.",
  name: "Chidinma M.",
  title: "Clinical Director, Group Mental Health Practice",
}

export default function MentalHealthPracticeCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Mental Health Practice Calendar"
        title="License Renewals. PDMP Compliance. Insurance Credentialing. One Calendar."
        subtitle="Momenties tracks therapist license renewals with ethics and suicide prevention CE requirements, DEA MATE Act buprenorphine compliance documentation, quarterly PDMP audit for controlled substance patients, Spravato REMS annual recertification, quarterly CAQH attestation for all clinicians, No Surprises Act Good Faith Estimate compliance, annual HIPAA risk assessment, Business Associate Agreement audit, insurance credentialing renewal cycles, and Medicare revalidation schedules so mental health practices never miss a license renewal or regulatory filing."
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
            Four Mental Health Practice Pillars Momenties Tracks
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
            12-Month Mental Health Practice Calendar
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
            Mental Health Practice KPIs Momenties Keeps on Track
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
