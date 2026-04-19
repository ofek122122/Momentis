import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Perinatal Psychiatrists | Momenties",
  description: "Momenties helps perinatal psychiatrists manage ABPN MOC, MGH Center for Women's Mental Health fellowship CE, REMS for lithium/valproate in pregnancy, and APA perinatal guidelines CE in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABPN Psychiatry MOC & Perinatal CE Requirements",
    description:
      "Perinatal psychiatrists maintain ABPN general psychiatry MOC with a 10-year exam cycle, 30 CME credits/year (AMA PRA Category 1), and self-assessment modules. Subspecialty perinatal practice requires documented CE in reproductive pharmacology, teratogenicity risk counseling, and postpartum psychosis management — all credentialed separately from general psychiatry MOC. Momenties maps both the ABPN umbrella timeline and perinatal-specific CE requirements, surfacing each deadline window with 90-day alerts and credit-count dashboards.",
  },
  {
    icon: Clock,
    title: "MGH/NCMHP Fellowship & Perinatal Society Credentialing",
    description:
      "The Marcé Society, Postpartum Support International (PSI), and the MGH Center for Women&apos;s Mental Health offer structured perinatal fellowship curricula and advanced CE programs with annual renewal cycles. PSI&apos;s Perinatal Mental Health Certificate requires 12 months of logged CE and case supervision documentation. Momenties tracks PSI certificate renewal, MGH perinatal pharmacology modules, and Marcé Society annual meeting CE — plus hospital credentialing for multidisciplinary perinatal psychiatry programs.",
  },
  {
    icon: BarChart3,
    title: "Perinatal REMS, Prescribing Guideline CE & Registry Requirements",
    description:
      "Perinatal psychiatrists managing medication in pregnancy must maintain current CE on FDA REMS programs (brexanolone/ZULRESSO, zuranolone/ZURZUVAE), valproate REMS (STEPS program annual retraining), and lithium pregnancy monitoring guidelines. The National Pregnancy Registry for Psychiatric Medications encourages clinician enrollment CE. APA and ACOG release joint practice guidelines requiring documented review for credentialing. Momenties schedules quarterly REMS compliance reviews and flags new joint guideline publications.",
  },
  {
    icon: Users,
    title: "State License, DEA & Telepsychiatry Credentialing",
    description:
      "Perinatal psychiatrists serving multiple states via telepsychiatry must maintain multi-state medical licenses (2–3 year cycles), DEA registrations per state (3-year), and telemedicine compact (IMLCC) documentation. Lactation-informed psychiatric practice may require additional hospital credentialing documentation in labor & delivery units. Momenties consolidates every license and credential into a single compliance dashboard with state-specific CE credit allocations automatically tracked against each renewal.",
  },
]

const studies = [
  {
    title: "ZURZUVAE Zuranolone RCT in Postpartum Depression — NEJM 2023",
    description: "Phase 3 trial of zuranolone 50mg (14-day course) demonstrating significant HAMD-17 reduction vs. placebo at day 15 (p<0.001) — first oral neuroactive steroid for PPD, reshaping acute treatment protocols and REMS credentialing CE.",
  },
  {
    title: "PRGLAC Task Force Report on Perinatal Mental Health — SAMHSA 2024",
    description: "Federal interagency task force 2024 update identifying screening gaps, treatment access barriers, and CE requirements for perinatal mental health credentialing across 25 state Medicaid programs.",
  },
  {
    title: "NTP Valproate Prenatal Exposure Report — NEJM 2024",
    description: "Updated systematic review confirming valproate-exposed offspring have 6.8× increased neurodevelopmental disorder risk — drove FDA label strengthening and STEPS REMS retraining requirement for all prescribers.",
  },
  {
    title: "Lithium Safety in Pregnancy — Lancet 2023",
    description: "Danish nationwide cohort (n=1,412) demonstrating lithium continuation in pregnancy reduced postpartum psychosis recurrence by 66% vs. discontinuation — challenged historical cardiac malformation risk and informed updated APA/ACOG guidance.",
  },
  {
    title: "Peripartum Cardiomyopathy & Antipsychotic Risk — Am J Psychiatry 2024",
    description: "Pharmacovigilance study of FDA FAERS database identifying QTc prolongation risk stratification for atypical antipsychotics in peripartum cardiac monitoring protocols — integrated into MGH perinatal CE modules.",
  },
  {
    title: "EPDS Universal Screening Effectiveness — JAMA Psych 2024",
    description: "Meta-analysis of 38 RCTs (n=24,000) confirming universal Edinburgh Postnatal Depression Scale screening at OB visits improves PPD diagnosis rates by 68% — reinforces PSI/ACOG joint screening CE requirements.",
  },
]

const testimonial = {
  quote:
    "Perinatal psychiatry sits at the intersection of reproductive medicine, pharmacology, and mental health — each domain has its own CE track and the guideline updates are relentless. Momenties gives me one calendar for all of it. I renewed my REMS certifications, completed my PSI certificate, and didn&apos;t miss a single MOC module last year.",
  name: "Amara N.",
  title: "MD, FAPA, MGH Perinatal Psychiatry Fellow Alumna",
}

export default function PerinatalPsychiatristsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Perinatal Psychiatrists"
        title="ABPN MOC. REMS Renewals. PSI Certification. One Calendar."
        subtitle="Momenties maps ABPN psychiatry MOC, FDA REMS compliance, perinatal fellowship CE, and multi-state license renewals so perinatal psychiatrists focus on patients, not credential deadlines."
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
            Four Credential Pillars Momenties Manages for You
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

      {/* Landmark Studies */}
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
            Landmark Studies Shaping Perinatal Psychiatric Practice
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {studies.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 600, marginBottom: 6, fontSize: "0.95rem" }}>
                  {s.title}
                </p>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                  {s.description}
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
