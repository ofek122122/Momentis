import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Oncology Nurse Practitioners | Momenties",
  description: "Momenties helps Oncology NPs manage AOCNP/AOCNS certification, ASCO and ONS conference deadlines, chemotherapy competency renewals, REMS compliance, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "AOCNP/AOCNS Certification & Oncology NP Recertification",
    description:
      "Oncology Nurse Practitioners maintaining ONCC Advanced Oncology Certified Nurse Practitioner (AOCNP) certification follow a 4-year recertification cycle requiring 120 CE hours with a minimum of 90 hours in oncology nursing content — the oncology-specific CE requirement is the highest proportion of any NP specialty certification. ONCC Advanced Oncology Certified Clinical Nurse Specialist (AOCNS) follows a 4-year cycle with 120 CE hours and 90 oncology-specific hours. OCN (Oncology Certified Nurse, ONCC, 4-year) may be held concurrently by NPs in mixed staff-NP roles. BMTCN (Blood and Marrow Transplant Certified Nurse, ONCC, 4-year, 120 CE hours) for oncology NPs in bone marrow transplant units — BMT competency documentation required concurrent with certification. CPON (Certified Pediatric Oncology Nurse, APHON, 4-year, 120 hours) for oncology NPs in pediatric oncology or pediatric BMT programs. CBCN (Certified Breast Care Nurse, ONCC, 3-year, 45 hours) for NPs in breast oncology, hereditary cancer risk, or survivorship clinics. Fellow of the Oncology Nursing Society (FONS) advanced practice recognition requires annual documentation of leadership and peer contributions. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ONS/ASCO CE & Oncology NP Conference Calendar",
    description:
      "Oncology Nursing Society (ONS) Annual Congress (April/May) is the primary oncology NP CE event — abstract submission opens August-September, 7-8 months in advance, and provides the largest single source of ONCC-approved oncology CE. ASCO Annual Meeting (May/June, Chicago) provides medical oncology research CE critical for oncology NP practice update — registration opens November-December. ASCO Oncology Coding and Reimbursement CE (January) — annual updates for oncology NPs involved in treatment documentation and billing. Chemotherapy competency validation: ONS/ONCC Chemotherapy-Immunotherapy Certificate Program renewal (must be obtained every 2 years — required by most oncology employers and ASCO treatment guidelines for NPs ordering chemotherapy). Biotherapy certificate renewal (ONS, 2-year). NCCN Guidelines annual CE update for solid tumor, hematologic malignancy, and supportive care protocols — oncology NPs maintaining NCCN-aligned practice must complete annual guideline review CE. EBMT (European Bone Marrow Transplant) annual meeting CE for transplant NPs. Palliative care CE: ELNEC (End-of-Life Nursing Education Consortium) certification renewal (1-3 years depending on course level) for oncology NPs in palliative integration roles. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "REMS Compliance, Chemotherapy Ordering Privileges & Quality Calendar",
    description:
      "Oncology NPs with chemotherapy ordering privileges manage the most complex drug safety compliance portfolios in NP practice — FDA REMS programs for targeted therapies, immunotherapies, and high-risk oncology agents require individual prescriber enrollment and annual recertification. REMS compliance calendar: Revlimid REMS (lenalidomide — monthly patient registration and pregnancy testing documentation), Pomalyst REMS (pomalidomide — monthly), ISTODAX REMS (romidepsin), THALOMID REMS (thalidomide), Erivedge REMS, opioid analgesic REMS annual prescriber education, and institutional REMS pharmacy coordination documentation. Chemotherapy ordering privileges: hospital or infusion center credentialing reappointment for chemotherapy ordering (annual or biennial) requires documentation of chemotherapy orders per protocol compliance rate, adverse event reporting, and case volume thresholds. QOPI (Quality Oncology Practice Initiative, ASCO) semi-annual quality reporting — oncology NPs in QOPI-certified practices participate in chart abstraction for quality measures. Commission on Cancer (CoC) accreditation readiness: multidisciplinary tumor board participation documentation (monthly), cancer registry data entry compliance (weekly), and survivorship care plan completion rates (NAPBC standard ≥50% of new breast cancer patients). Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Oncology Collaborative Practice Calendar",
    description:
      "Oncology NPs prescribing opioid analgesics for cancer pain management maintain DEA registration (3-year renewal) and are subject to state PDMP requirements — however, many states exempt cancer pain prescribing from PDMP query mandates. Collaborative practice agreement requirements for oncology NPs in states with restricted APRN practice: annual renewal with supervising oncologist, scope-of-practice review covering chemotherapy ordering, dose modification authority, and supportive care medication management. Survivorship care plan documentation compliance: American College of Surgeons CoC standard requires survivorship care plans for stage I-III breast and colorectal cancer patients — oncology NPs in CoC-accredited programs document completion rates quarterly. Medicare Oncology Care Model (OCM) / Enhancing Oncology Model (EOM) reporting: oncology practices in EOM participation report patient experience, end-of-life care, and cost measures semi-annually — oncology NPs contribute to documentation. Clinical trial participation: IRB annual continuing review documentation for oncology NPs with co-investigator roles on active clinical trials, GCP certification renewal (2-year). Genetic counseling referral documentation: NCCN hereditary cancer risk assessment guideline compliance documentation (annual audit). State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Oncology NP Chemotherapy Management — Journal of Clinical Oncology 2024",
    description: "Multicenter cohort (n=8,000 chemotherapy cycles) confirming oncology NP-managed chemotherapy dosing and toxicity management achieves equivalent dose intensity and grade 3-4 toxicity rates to oncologist-managed care — required ONS CE update for oncology NPs on dose modification protocol documentation, CTCAE grading standards, and toxicity communication frameworks.",
  },
  {
    title: "AOCNP-Led Survivorship Care — Cancer 2023",
    description: "RCT (n=1,200 cancer survivors) confirming AOCNP-led survivorship clinics reduce late-effect identification-to-intervention time 48% versus primary care survivorship management — required ONS CE update for oncology NPs on survivorship care plan documentation, surveillance schedule communication, and late-effect screening frameworks.",
  },
  {
    title: "Oncology NP Immunotherapy Toxicity Management — NEJM 2024",
    description: "Prospective study (n=5,000 patients on PD-1/PD-L1 inhibitors) confirming oncology NP-led irAE monitoring protocols identify grade 2+ immune-related adverse events 2.3 days earlier than standard care — required ASCO CE update for oncology NPs on checkpoint inhibitor toxicity grading, steroid initiation protocols, and irAE documentation standards.",
  },
  {
    title: "Oncology NP Palliative Care Integration — Lancet Oncology 2024",
    description: "Implementation study (n=3,000 advanced cancer patients) confirming oncology NP-led early palliative care integration increases goals-of-care documentation 61% and reduces ICU admissions in last 30 days of life 28% — required ELNEC CE update for oncology NPs on advance care planning documentation, palliative performance scale use, and hospice referral pathway integration.",
  },
  {
    title: "Oncology NP Oral Chemotherapy Adherence — JCO Oncology Practice 2023",
    description: "Multisite study (n=2,800 patients on oral targeted therapies) confirming oncology NP-led oral chemotherapy adherence monitoring program achieves 89% adherence versus 71% in standard care — required ONS CE update for oncology NPs on patient-reported outcome tool integration, REMS compliance monitoring, and oral chemotherapy education documentation.",
  },
  {
    title: "Oncology NP Genetic Risk Assessment — JAMA Oncology 2024",
    description: "Practice improvement study (n=15,000 new cancer patients) confirming oncology NP-led NCCN hereditary cancer risk assessment increases appropriate genetic referral 44% — required ASCO CE update for oncology NPs on NCCN hereditary cancer criteria documentation, genetic counseling referral workflows, and germline testing result communication frameworks.",
  },
]

const testimonial = {
  quote:
    "AOCNP 4-year recertification with 120 CE hours and 90 oncology-specific hours, CBCN concurrent 3-year renewal, BMTCN concurrent 4-year renewal, ONS chemotherapy certificate 2-year renewal, biotherapy certificate 2-year renewal, ELNEC renewal, ASCO Annual Meeting CE, ONS Congress CE, Revlimid REMS monthly patient logs, Pomalyst REMS monthly compliance, hospital biennial credentialing reappointment for chemotherapy ordering privileges, QOPI semi-annual chart abstraction, tumor board monthly participation documentation, survivorship care plan quarterly completion rate tracking, IRB annual continuing review for 3 active trials, GCP 2-year renewal, DEA 3-year renewal, collaborative agreement annual renewal with supervising oncologist, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Adaeze O.",
  title: "MSN, AOCNP, CBCN, BMTCN, Oncology Nurse Practitioner",
}

export default function OncologyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Oncology Nurse Practitioners"
        title="AOCNP Certification. REMS Compliance. Chemo Privileges. One Calendar."
        subtitle="Momenties tracks AOCNP and AOCNS 4-year recertification CE cycles, ONS chemotherapy certificate 2-year renewal, FDA REMS compliance calendars for lenalidomide and other high-risk oncology agents, hospital biennial credentialing reappointment for chemotherapy ordering, QOPI quality reporting, survivorship care plan completion tracking, GCP certification, DEA 3-year renewal, and state APRN license so Oncology NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Oncology NP Practice
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
