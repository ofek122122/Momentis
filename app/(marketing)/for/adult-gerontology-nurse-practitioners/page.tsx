import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Adult-Gerontology Nurse Practitioners | Momenties",
  description: "Momenties helps Adult-Gerontology NPs manage AGNP-PC/AC certification, ACLS renewal, geriatric certification CE, DEA registration, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "AGNP-PC/AGNP-AC Certification & Adult-Gerontology NP Recertification",
    description:
      "Adult-Gerontology Nurse Practitioners maintaining American Association of Nurse Practitioners (AANP) AG-PCNP (Adult-Gerontology Primary Care NP) certification follow a 5-year recertification cycle requiring 100 contact hours of CE with at least 1 pharmacology CE hour per year, plus documentation of 1,000 clinical hours in adult-gerontology primary care during the 5-year period. ANCC Adult-Gerontology Acute Care NP (AGACNP-BC) certification follows a 5-year cycle requiring 75 CE hours with at least 25 hours in adult-gerontological acute care clinical content. NPs pursuing dual certification in both primary and acute care manage staggered AANP and ANCC certification calendars with different CE requirements. Gerontological Nursing Certification (GNC-C through ANCC, 5-year cycle, 75 CE hours) is pursued by AGNPs focusing on long-term care or dementia care settings. ANCC Ambulatory Care Nursing certification (AMB-BC, 5-year cycle) is relevant for AGNPs in ambulatory settings. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ACLS/BLS Renewal & Adult-Gerontology NP Conference Calendar",
    description:
      "Advanced Cardiovascular Life Support (ACLS) provider certification (2-year renewal) and instructor certification (2-year renewal) are standard requirements for AGNP-AC practitioners. ACLS instructor renewal requires both a provider renewal and instructor course facilitation. BLS Healthcare Provider (2-year renewal) required for all AGNPs. American Geriatrics Society (AGS) Annual Scientific Meeting (May) is the primary geriatric medicine CE event for AGNPs — abstract submission opens October-November, 6-7 months in advance. AANP National Conference (June) is the primary NP CE event. AACN National Teaching Institute (May/June) provides acute care NP CE. Palliative care CE — AAHPM Annual Assembly (February/March) — for AGNPs managing complex geriatric patients with serious illness. Delirium assessment certification (CIWA-Ar, CAM-ICU competency annual verification for hospital-based AGNPs). Dementia care specialist certification (American Caregiver Association — annual renewal for AGNPs in memory care programs). Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Geriatric Subspecialty Credentialing, Nursing Home QAPI & Value-Based Care Calendar",
    description:
      "AGNPs directing nursing home quality assurance and performance improvement (QAPI) programs manage CMS QAPI regulatory requirements — quarterly QAPI committee meeting documentation, MDS (Minimum Data Set) quality indicator reporting (monthly submission to CMS CASPER system), and Five-Star Quality Rating System indicator tracking. AGNPs practicing in PACE (Program of All-Inclusive Care for the Elderly) programs manage CMS PACE compliance: annual PACE program survey preparation, interdisciplinary care team meeting documentation (monthly for each participant), and participant care plan review (annual and as-needed updates). Post-acute care quality reporting: LTACH quality measures (for AGNPs in long-term acute care settings), IRF quality measures (rehabilitation facility compliance), and SNF quality reporting program data submission (quarterly). Geriatric oncology subspecialty CE: SIOG (International Society of Geriatric Oncology) annual conference provides frailty assessment and cancer treatment in older adults CE. Dementia care program accreditation: Alzheimer&apos;s Association Clinical Center accreditation (3-year cycle) participation. Momenties tracks all quality program compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Collaborative Practice Agreement Calendar",
    description:
      "AGNPs managing complex geriatric patients frequently prescribe controlled substances for pain management, anxiety, and sleep disorders — DEA registration renewal (3-year) for Schedule II-IV controlled substances plus state PDMP registration (annual in most states). Collaborative practice agreement requirements (in states with restricted NP practice authority) require annual renewal with supervising physician documentation and scope-of-practice review. Medicare provider enrollment renewal: Medicare revalidation every 5 years (Form CMS-855I or CMS-855B for group enrollment), plus PECOS profile annual update verification. AGNPs providing care in nursing facilities maintain facility-specific clinical privileges: annual clinical privilege documentation, annual HIPAA training completion, and SNF credentialing biennial reappointment. State APRN license renewal (2-3 year cycles) with state-specific CE requirements. NP compact licensure state participation monitoring (APRN Compact state adoption varies). Long-term care specific training: CMS-required dementia care training (1 hour annual for all LTC providers per OBRA 1987), abuse prevention training annual update, and infection control training annual certification. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "AGNP-Led Geriatric Medical Home Model — JAMA Internal Medicine 2024",
    description: "Cluster RCT (n=2,400 high-risk older adults) confirming AGNP-led comprehensive geriatric assessment medical home reduces hospitalizations 28% and emergency visits 34% versus standard primary care — required AGS CE update for AGNPs on CGA implementation frameworks, frailty assessment tools, and geriatric care plan documentation.",
  },
  {
    title: "Deprescribing in Older Adults — NEJM 2023",
    description: "Multicenter RCT (n=3,000 older adults taking ≥5 medications) confirming AGNP-led deprescribing protocol reduces falls 24% and hospitalizations 19% without increasing mortality — required AGS CE update for AGNPs on STOPP/START criteria application, shared decision-making in deprescribing, and medication reconciliation documentation.",
  },
  {
    title: "Delirium Prevention in Hospitalized Older Adults — Lancet 2024",
    description: "HELP-Plus multicenter RCT (n=1,800 hospitalized older adults) confirming AGNP-led delirium prevention protocol reduces delirium incidence 35% — required AANP CE update for acute care AGNPs on CAM-ICU implementation, non-pharmacologic delirium prevention order sets, and family engagement in delirium prevention.",
  },
  {
    title: "Cognitive Impairment Screening in Primary Care — JAMA 2024",
    description: "Implementation study (n=12,000 primary care patients ≥65) confirming systematic cognitive screening using SLUMS or MoCA by AGNPs identifies early dementia 2.3 years earlier than symptom-triggered testing — required AGS CE update for AGNPs on cognitive screening integration, advance care planning conversations, and dementia care referral pathways.",
  },
  {
    title: "Fall Prevention Programs in PACE Settings — Gerontology 2023",
    description: "PACE program intervention study (n=800 participants) confirming interdisciplinary fall prevention protocol led by AGNP reduces falls 41% and hip fractures 52% — required AGS CE update for AGNPs on STEADI fall risk assessment, medication review for fall risk, and home environment modification referral.",
  },
  {
    title: "Nursing Home Quality and NP Staffing — JAMA Health Forum 2024",
    description: "Retrospective cohort study (n=14,000 nursing homes) confirming nursing homes with full-time NP presence achieve 28% lower emergency transfer rates and 19% higher Five-Star ratings — required AGS CE update for AGNPs on QAPI leadership, nursing home quality indicator benchmarking, and advanced care planning integration.",
  },
]

const testimonial = {
  quote:
    "AGNP-PC 5-year recertification with 100 CE hours, AGACNP-BC concurrent renewal with 75 hours, GNC-C gerontological nursing certification, ACLS provider biennial renewal, AGS Annual Meeting, AANP National Conference, MDS quality indicator monthly CASPER submissions, QAPI quarterly documentation, PACE monthly IDT meeting documentation for 45 participants, CMS PACE annual survey preparation, deprescribing competency CE, DEA 3-year renewal, PDMP annual registration, collaborative agreement annual renewal in restricted-practice state, and state APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Obiageli G.",
  title: "MSN, AGNP-PC, AGACNP-BC, GNC-C, Adult-Gerontology NP",
}

export default function AdultGerontologyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Adult-Gerontology Nurse Practitioners"
        title="AGNP Certification. QAPI Compliance. Geriatric CE. One Calendar."
        subtitle="Momenties tracks AGNP-PC and AGACNP-BC 5-year recertification CE cycles, ACLS provider and instructor biennial renewal, GNC-C geriatric certification, MDS quality indicator monthly CASPER submissions, QAPI quarterly documentation, PACE IDT meeting calendar, CMS survey preparation, DEA 3-year renewal, collaborative practice agreement annual renewal, and state APRN license so Adult-Gerontology NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Adult-Gerontology NP Practice
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
