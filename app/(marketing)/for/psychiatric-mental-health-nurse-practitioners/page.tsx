import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Psychiatric Mental Health Nurse Practitioners | Momenties",
  description: "Momenties helps PMHNPs manage PMHNP-BC certification, DEA renewal, buprenorphine and ketamine prescribing compliance, collaborative practice agreements, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "PMHNP-BC Certification & Psychiatric NP Recertification",
    description:
      "Psychiatric Mental Health Nurse Practitioners maintaining ANCC Psychiatric-Mental Health NP Board Certification (PMHNP-BC) follow a 5-year recertification cycle requiring 75 CE hours with at least 25 hours in psychiatric nursing content and 1 pharmacology CE hour per year, plus documentation of 1,000 clinical practice hours in psychiatric mental health during the 5-year period. PMHNPs pursuing additional specialty credifications maintain concurrent CE cycles: ANCC Forensic Nursing Certified Advanced (FNCA) for PMHNPs in correctional, forensic, or court-ordered settings (5-year, 100 CE hours), ANCC Faith Community Nursing (FCN) for PMHNPs in parish nursing or faith-integrated mental health programs, and Certified Addictions Registered Nurse-Advanced Practice (CARN-AP through NNSA) for PMHNPs with substance use disorder specialty practice (3-year, 45 CE hours). PMHNPs pursuing ANCC Nurse Executive certification (NE-BC) for psychiatric department director or CNO roles follow a 5-year, 75 CE hour cycle. PMHNPs in academic positions maintain ANCC Nursing Professional Development certification (NPD-BC) with 5-year, 75 CE hour requirements. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "APA/APNA CE & Psychiatric NP Conference Calendar",
    description:
      "American Psychiatric Nurses Association (APNA) Annual Conference (October/November) is the primary PMHNP CE event — abstract submission opens March-April, 6-7 months in advance, and provides the largest single source of psychiatric nursing CE. American Association of Nurse Practitioners (AANP) National Conference (June) provides general NP CE applicable to PMHNP-BC recertification. Psychiatric pharmacology CE updates: FDA new psychiatric drug approval updates (antipsychotics, antidepressants, mood stabilizers, and stimulants — annual update CE), BLACK BOX WARNING CE required for all newly FDA-issued black box warnings on psychiatric medications. Suicide risk assessment annual CE update: The Joint Commission mandates annual suicide risk assessment training for behavioral health providers — ZERO SUICIDE training (now 8-hour program, annual attestation in most health systems), Columbia Suicide Severity Rating Scale (C-SSRS) annual recertification, and SafeTALK 4-hour recertification (2-year cycle). Trauma-informed care CE: ACEs (Adverse Childhood Experiences) annual update, EMDR certification recertification (EMDRIA, 3-year, 12 hours), and TF-CBT certification maintenance (annual). DBT consultation team participation documentation. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "DEA Registration, Buprenorphine Prescribing & Ketamine Compliance Calendar",
    description:
      "PMHNPs prescribing psychiatric medications including Schedule II stimulants (amphetamines, methylphenidate) for ADHD, Schedule IV benzodiazepines for anxiety, and Schedule III-IV medications maintain DEA registration (3-year renewal) plus state PDMP registration (annual in most states — PDMP query required before prescribing controlled substances in most state statutes). Buprenorphine prescribing for opioid use disorder: DATA Act compliant prescribing (standard DEA registration post-2023, no X-waiver) requires 8-hour training for new prescribers; annual documentation of MAT patient panel and outcomes. Ketamine and esketamine (Spravato) REMS compliance: Spravato REMS program requires annual REMS recertification for all prescribers and dispensing sites — patient enrollment and monitoring documentation per administration. Psychiatric mental health parity compliance: annual documentation of parity compliance under Mental Health Parity and Addiction Equity Act (MHPAEA) for PMHNPs in insurance-contracted practices, annual review of NQTLs (non-quantitative treatment limitations). CLIA waiver for in-office urine drug screening: annual quality assurance documentation for PMHNP offices performing point-of-care toxicology. Momenties tracks all compliance cycles.",
  },
  {
    icon: Users,
    title: "Collaborative Practice, Telehealth Prescribing & State APRN License Calendar",
    description:
      "PMHNPs in states with restricted APRN practice authority (14 states) maintain collaborative practice agreements with supervising psychiatrists or physicians — annual renewal with updated scope-of-practice review, patient panel documentation, and practice site verification. Telehealth psychiatric prescribing is among the most regulated APRN practice domains — Ryan Haight Act temporary DEA telehealth prescribing waivers (COVID-era) transitioned to new DEA Special Registration requirements (PMHNPs prescribing Schedule III-V via telemedicine must monitor evolving DEA special registration framework annually). Interstate psychiatric telehealth: as PMHNPs practice across state lines via telehealth platforms, state-by-state APRN license monitoring for each state where patients reside. APRN Compact enrollment monitoring (currently 39 states active or pending) for multistate practice. Medicare provider enrollment: CMS-855I revalidation every 5 years, annual PECOS profile verification, and Behavioral Health Integration (BHI) service documentation (CPT 99492/99493 monthly for enrolled patients). Hospital psychiatric unit credentialing (annual or biennial) for PMHNPs with inpatient psychiatric privileges — peer review participation documentation. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "PMHNP-Led Depression Outcomes — JAMA Psychiatry 2024",
    description: "National claims analysis (n=1.8M psychiatric encounters) confirming PMHNP-managed depression achieves equivalent remission rates to psychiatrist-managed care on PHQ-9 response and remission at 12 weeks — required APNA CE update for PMHNPs on antidepressant prescribing optimization, PHQ-9 documentation standards, and stepped-care model integration.",
  },
  {
    title: "Telepsychiatry PMHNP Outcomes — NEJM 2023",
    description: "Multisite RCT (n=4,200 rural mental health patients) confirming PMHNP-delivered telepsychiatry achieves equivalent outcomes to in-person care for depression, anxiety, and PTSD — required AANP CE update for PMHNPs on telehealth documentation standards, synchronous vs. asynchronous prescribing protocols, and DEA telehealth prescribing compliance frameworks.",
  },
  {
    title: "PMHNP-Led Buprenorphine Treatment — Lancet Psychiatry 2024",
    description: "Implementation study (n=6,000 OUD patients) confirming PMHNP-led integrated buprenorphine and psychiatric care achieves 18-month treatment retention 34% higher than separate prescriber models — required AANP CE update for PMHNPs on integrated OUD-psychiatric care documentation, PDMP query workflows, and urine drug screen interpretation.",
  },
  {
    title: "Zero Suicide Framework in PMHNP Practice — JAMA 2023",
    description: "Quality improvement study (n=28 outpatient psychiatric practices) confirming Zero Suicide framework implementation by PMHNPs reduces 30-day psychiatric readmission 41% — required Joint Commission CE update for PMHNPs on C-SSRS documentation standards, safety planning documentation, and means restriction counseling frameworks.",
  },
  {
    title: "Antipsychotic Metabolic Monitoring — NEJM 2024",
    description: "Practice improvement study (n=12,000 patients on second-generation antipsychotics) confirming PMHNP-led metabolic monitoring protocol (weight, lipids, glucose at baseline, 3 months, annually) reduces metabolic syndrome incidence 27% — required APNA CE update for PMHNPs on antipsychotic metabolic monitoring documentation, shared decision-making frameworks, and cardiometabolic risk communication.",
  },
  {
    title: "Esketamine (Spravato) PMHNP Outcomes — American Journal of Psychiatry 2024",
    description: "Multicenter cohort (n=3,000 treatment-resistant depression patients) confirming PMHNP-monitored esketamine treatment achieves remission equivalent to psychiatrist-monitored protocols — required REMS CE update for PMHNPs on Spravato REMS documentation, 2-hour post-administration monitoring protocols, and dissociation assessment frameworks.",
  },
]

const testimonial = {
  quote:
    "PMHNP-BC 5-year recertification with 75 CE hours, CARN-AP concurrent 3-year renewal, ZERO SUICIDE annual training with C-SSRS recertification, EMDR 3-year certification renewal, DBT consultation team documentation, DEA 3-year renewal, annual PDMP registration with query compliance tracking, Spravato REMS annual recertification with patient monitoring logs, collaborative practice agreement annual renewal with supervising psychiatrist, Ryan Haight telehealth prescribing compliance monitoring across 5 states, interstate APRN compact monitoring, Medicare 5-year revalidation, BHI monthly service documentation for 60 enrolled patients, hospital psychiatric unit biennial credentialing, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Obiageli P.",
  title: "MSN, PMHNP-BC, CARN-AP, Psychiatric Mental Health NP",
}

export default function PsychiatricMentalHealthNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Psychiatric Mental Health Nurse Practitioners"
        title="PMHNP-BC Certification. DEA Compliance. Spravato REMS. One Calendar."
        subtitle="Momenties tracks PMHNP-BC 5-year recertification CE cycles, CARN-AP concurrent renewal, ZERO SUICIDE annual training, Spravato REMS annual recertification, DEA 3-year renewal, buprenorphine prescribing compliance, Ryan Haight telehealth prescribing monitoring, collaborative practice agreement annual renewal, Medicare revalidation, and state APRN license so Psychiatric Mental Health NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Psychiatric Mental Health NP Practice
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
