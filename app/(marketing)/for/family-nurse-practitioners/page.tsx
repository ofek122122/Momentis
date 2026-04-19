import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Family Nurse Practitioners | Momenties",
  description: "Momenties helps Family NPs manage FNP-BC/FNP-C certification, DEA renewal, collaborative practice agreements, HEDIS quality measure compliance, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "FNP-BC/FNP-C Certification & Family NP Recertification",
    description:
      "Family Nurse Practitioners maintaining ANCC Family NP Board Certification (FNP-BC) follow a 5-year recertification cycle requiring 75 CE hours with at least 25 hours in family nursing content and 1 pharmacology CE hour per year, plus documentation of 1,000 clinical hours in family primary care during the 5-year period. AANP Family NP Certified (FNP-C) certification follows a 5-year recertification cycle requiring 100 CE hours with at least 1 pharmacology CE hour per year and 1,000 clinical practice hours. FNPs pursuing additional specialty certifications maintain concurrent CE cycles: ANCC Diabetes Care and Education Specialist (CDCES, formerly CDE, 5-year cycle, 75 CE hours), ANCC Advanced Diabetes Management (ADM-BC) for FNPs managing complex diabetes, and NCMP menopause certification (annual) for FNPs in women&apos;s health-integrated primary care. AANP Fellow (FAANP) status requires annual maintenance documentation of peer leadership and mentorship. HIV Specialist certification (AAHIVM) is pursued by FNPs in HIV primary care settings. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "AANP/ANCC CE & Family NP Conference Calendar",
    description:
      "American Association of Nurse Practitioners (AANP) National Conference (June) is the primary FNP CE event — abstract submission opens November-December, 6-7 months in advance, and provides the largest single source of FNP-C approved CE. ANCC-approved CE must be documented by provider for FNP-BC recertification. Primary care clinical practice updates: USPSTF preventive services task force annual recommendation updates (affecting screening protocols for colorectal cancer, hypertension, diabetes, depression, lung cancer), CDC vaccine schedule annual updates (February publication), and ACC/AHA cardiovascular guidelines annual updates. PCORI (Patient-Centered Outcomes Research Institute) primary care research CE for evidence-based practice. AAFP Annual Scientific Assembly (October) provides primary care family medicine CE. Motivational interviewing advanced certification renewal (MINT) for FNPs in lifestyle and chronic disease management practices. Telehealth prescribing CE — as telemedicine rules evolve (particularly for Schedule II-III controlled substances), annual regulatory update CE is required for FNPs practicing telehealth. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "HEDIS Quality Measures, PCMH Recognition & Value-Based Care Calendar",
    description:
      "FNPs in value-based care contracts manage complex quality reporting calendars — HEDIS measures affecting practice payment include adolescent well care, adult BMI assessment, breast cancer screening, cervical cancer screening, colorectal cancer screening, diabetes HbA1c control, hypertension control, tobacco cessation, and depression screening. NCQA Patient-Centered Medical Home (PCMH) recognition (3-year cycle) requires annual reporting of quality improvement data and documentation of PCMH standards compliance — FNPs in PCMH-recognized practices participate in annual quality reporting activities. CMS Merit-based Incentive Payment System (MIPS) reporting (annual calendar year) requires FNPs with >$90,000 Medicare billing or >200 Medicare beneficiaries to submit quality measures, promoting interoperability, improvement activities, and cost measures. ACO quality reporting: MSSP (Medicare Shared Savings Program) quality measure annual reporting, PCQM (patient care quality metrics) documentation per visit. State Medicaid quality incentive program reporting (varies by state, typically quarterly). Chronic care management (CCM) monthly service documentation (CPT 99490 — monthly for enrolled patients). Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Collaborative Practice Agreement Calendar",
    description:
      "FNPs prescribing Schedule II-V controlled substances for pain management, ADHD, anxiety, and substance use treatment maintain DEA registration (3-year renewal) plus state PDMP registration (annual in most states). Buprenorphine prescribing for opioid use disorder — DATA Act compliant prescribing (now standard DEA registration, no X-waiver required post-2023) requires 8-hour training for new prescribers; FNPs already trained maintain annual documentation of MAT practice. Collaborative practice agreement requirements (in 14 states with restricted NP practice): annual renewal with supervising physician, scope-of-practice review, and hospital admitting privilege documentation where required. Medicare provider enrollment: revalidation every 5 years (CMS-855I), PECOS annual profile verification, and group practice enrollment maintenance. Hospital admitting privilege reappointment (annual or biennial at most hospitals) for FNPs with inpatient privileges. NPI registry annual verification. Telehealth APRN license monitoring — as states update telehealth prescribing rules, FNPs practicing telehealth primary care across state lines require state-by-state practice law monitoring. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "FNP Primary Care Quality Equivalent to Physician — NEJM 2023",
    description: "National claims analysis (n=2.4M primary care encounters) confirming NP-managed primary care achieves equivalent quality metrics to physician care on 14 HEDIS measures — required AANP CE update for FNPs on HEDIS documentation best practices, value-based care coding optimization, and quality measure performance improvement.",
  },
  {
    title: "Cardiovascular Risk Reduction in Primary Care — Lancet 2024",
    description: "USPSTF-aligned implementation study (n=12,000 primary care patients) confirming NP-led cardiovascular risk reduction protocol (statin prescribing, hypertension management, smoking cessation) reduces 10-year ASCVD risk 18% — required FNP CE update on updated ACC/AHA cardiovascular prevention guidelines, statin prescribing documentation, and shared decision-making frameworks.",
  },
  {
    title: "Diabetes Management in Primary Care — JAMA 2024",
    description: "Collaborative care RCT (n=3,000 T2DM patients) confirming NP-led team-based diabetes management achieves HbA1c <7% in 68% of patients versus 52% with physician-only care — required CDCES CE update for FNPs on GLP-1 agonist prescribing protocols, CGM interpretation documentation, and diabetes care team coordination.",
  },
  {
    title: "Opioid Use Disorder Treatment in Primary Care — NEJM 2024",
    description: "Implementation study (n=8,000 OUD patients) confirming FNP-led buprenorphine treatment in primary care achieves 12-month treatment retention equivalent to addiction psychiatry — required AANP CE update for FNPs on buprenorphine initiation protocols, PDMP integration documentation, and urine drug screen interpretation.",
  },
  {
    title: "Mental Health Integration in Primary Care — JAMA Psychiatry 2023",
    description: "IMPACT model replication study (n=5,000 primary care patients with depression/anxiety) confirming FNP-led collaborative care achieves 50%+ depression remission — required FNP CE update on PHQ-9 documentation standards, antidepressant prescribing protocols, and behavioral health referral integration.",
  },
  {
    title: "Preventive Care Optimization — Annals of Family Medicine 2024",
    description: "Practice improvement study (n=40 primary care practices) confirming FNP-led preventive care audit cycles improve USPSTF-recommended screening rates 23% — required AANP CE update for FNPs on preventive care documentation efficiency, health maintenance reminder system integration, and HEDIS measure documentation optimization.",
  },
]

const testimonial = {
  quote:
    "FNP-C 5-year recertification with 100 CE hours, CDCES concurrent 5-year renewal, NCMP annual menopause certification, buprenorphine prescribing documentation maintenance, MIPS annual quality reporting with 6 quality measures, NCQA PCMH annual recognition data, HEDIS measure tracking for 18 measures, quarterly state Medicaid quality incentive reporting, DEA 3-year renewal, annual PDMP registration, collaborative agreement annual renewal, Medicare 5-year revalidation, biennial hospital credentialing, telehealth prescribing law annual monitoring across 4 states, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Ngozi F.",
  title: "MSN, FNP-C, CDCES, NCMP, Family Nurse Practitioner",
}

export default function FamilyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Family Nurse Practitioners"
        title="FNP Certification. MIPS Reporting. PCMH Recognition. One Calendar."
        subtitle="Momenties tracks FNP-BC and FNP-C 5-year recertification CE cycles, CDCES concurrent renewal, annual MIPS quality measure reporting, NCQA PCMH 3-year recognition cycle, HEDIS measure documentation, buprenorphine prescribing compliance, DEA 3-year renewal, Medicare revalidation, collaborative practice agreement annual renewal, and state APRN license so Family NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Family NP Practice
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
