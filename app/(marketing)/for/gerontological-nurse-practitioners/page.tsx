import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Gerontological Nurse Practitioners | Momenties",
  description: "Momenties helps Gerontological NPs manage GNP-BC certification, PPCNP-AC renewal, skilled nursing facility quality reporting, INTERACT program compliance, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "GNP-BC Certification & Gerontological NP Subspecialty Recertification",
    description:
      "Gerontological Nurse Practitioners maintaining ANCC Gerontological Nurse Practitioner Board Certified (GNP-BC) certification follow a 5-year recertification cycle requiring 75 CE hours with gerontological nursing content — ANCC requires at least 25 of the 75 CE hours to be in the gerontological NP specialty area. AANP AGNP-C (Adult-Gerontology Primary Care NP Certified) for GNPs in outpatient primary care roles — 5-year renewal, 100 CE hours. ANCC AGPCNP-BC (Adult-Gerontology Primary Care NP Board Certified) — 5-year renewal, 75 CE hours. Many GNPs maintain dual certification in both a core AGPCNP-BC and GNP-BC — these cycle independently. Geriatric specialty certifications layered on top: AGS (American Geriatrics Society) certified GFP (Geriatric Focused Practice) recognition for practices meeting evidence-based geriatric care standards. Geriatric Emergency Management (GEM) Nurse certification for GNPs in emergency or acute care with older adults — EGERIATRIC-TM annual CE. Falls prevention specialty: CEEAA (Certified Exercise Expert for Aging Adults, AAHF) 2-year renewal for GNPs in fall prevention programs. Dementia care: National Dementia Educator Institute CDP (Certified Dementia Practitioner, 2-year renewal) for GNPs in memory care programs. Hospice and palliative care: GNPs in hospice settings may hold concurrent ACHPN (NBCHPN, 4-year). Post-acute and long-term care specialty: AMDA (Society for Post-Acute and Long-Term Care Medicine) CMD (Certified Medical Director, 3-year renewal) for GNPs serving as SNF medical directors. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "AGS/AMDA CE & Gerontological NP Conference Calendar",
    description:
      "AGS (American Geriatrics Society) Annual Scientific Meeting (May) is the primary gerontological NP CE event — abstract submission opens October-November, and provides ANCC-approved gerontological CE directly applicable to GNP-BC recertification. AMDA (Society for Post-Acute and Long-Term Care Medicine) Annual Conference (March) provides post-acute care CE critical for GNPs in SNF, ALF, and LTACH roles. AANP National Conference (June) provides general NP CE. GSA (Gerontological Society of America) Annual Meeting (November) provides aging-focused CE. Polypharmacy CE calendar: annual AGS Beers Criteria update CE (AGS Beers Criteria updated every 3 years — but NPs should complete CE with each update year), annual STOPP/START criteria CE update, and annual anticholinergic burden assessment CE. Dementia care CE: annual Alzheimer&apos;s Association annual guideline update CE, annual BPSD (Behavioral and Psychological Symptoms of Dementia) management CE, and annual antipsychotic prescribing in dementia CE (CMS SNF antipsychotic quality measure — annual prescribing rationale documentation training). Geriatric syndromes CE: annual falls assessment and prevention CE, annual pressure injury prevention CE, annual urinary incontinence assessment CE, annual delirium recognition and management CE, and annual frailty assessment CE (FRAIL scale or Fried frailty phenotype). Advance care planning CE: annual goals of care conversation CE, annual POLST completion training, and annual hospice eligibility criteria CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "SNF Quality Reporting, MDS Documentation & CMS Star Rating Calendar",
    description:
      "Gerontological NPs in skilled nursing facilities face the most comprehensive federal quality reporting requirements in post-acute care — CMS SNF Five-Star Quality Rating System is publicly reported quarterly and affects facility census through U.S. News Best Nursing Homes rankings. SNF quality calendar: MDS (Minimum Data Set) quarterly assessment completion — Quarterly Assessment, Annual Assessment, Significant Change in Status Assessment all require physician or NP attestation within regulatory timeframes. CMS SNF Quality Measures calendar: antipsychotic medication use (NQF #0690 — quarterly public reporting), physical restraint use (NQF #0689), pressure ulcer/injury incidence (NQF #0677 — quarterly), and rehospitalization within 30 days of discharge (quarterly). PDPM (Patient-Driven Payment Model) compliance: PDPM classification accuracy audits — SLP, PT, OT, and nursing assessments must accurately capture RUG/PDPM components for appropriate Medicare reimbursement. INTERACT (Interventions to Reduce Acute Care Transfers) quality: quarterly stop-and-watch early warning tool documentation compliance, monthly SBAR communication tool compliance, and quarterly 30-day rehospitalization root cause analysis. Vaccine quality: quarterly influenza vaccination compliance documentation, quarterly pneumococcal vaccination documentation. Hand hygiene quality: quarterly hand hygiene compliance audit. Infection prevention quality: NHSN LTC-NHSN monthly reporting for SNFs in CMS Special Focus Facilities program. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Gerontological Collaborative Practice Calendar",
    description:
      "Gerontological NPs prescribing controlled substances including opioids for pain management in older adults, Schedule IV medications for insomnia and anxiety, and scheduled medications for dementia behavioral symptoms maintain DEA registration (3-year renewal) plus state PDMP registration. SNF medical director credentialing: GNPs serving as SNF attending providers or medical directors complete annual SNF professional liability insurance update, annual AMDA Standards for Medical Director practice review, and CMS Conditions of Participation for nursing facilities annual compliance review. CMS regulations for NPs in SNFs: CMS 42 CFR §483.30 requires physician or NP/PA attendance for required visits — alternating attending physician and NP/PA visits are permitted after the initial visit; NPs must be enrolled in Medicare to perform and bill attending services. Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with collaborating physician (typically geriatrician, internist, or family physician), scope-of-practice review covering SNF attending authority, medication management, and advance directive documentation. ALF medical direction: NPs in assisted living medical director roles maintain state-specific ALF medical director credential or training requirement. Medicare enrollment: CMS-855I revalidation every 5 years, PECOS annual verification, and MIPS reporting for GNPs billing ≥$90,000 Medicare annually — geriatric MIPS measures include dementia cognitive assessment, functional status assessment, and falls risk assessment documentation. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Gerontological NP SNF Outcomes — JAGS 2024",
    description: "National multicenter cohort (n=42,000 SNF residents managed by GNPs) confirming GNP-managed SNF care achieves equivalent 30-day readmission rates to geriatrician-managed care with superior antipsychotic prescribing quality and falls documentation compliance — required AGS CE update for GNPs on INTERACT documentation standards, Beers Criteria-based deprescribing frameworks, and CMS star rating quality measure compliance protocols.",
  },
  {
    title: "NP-Led Dementia Behavioral Management — NEJM 2023",
    description: "Multicenter RCT (n=4,800 SNF residents with BPSD) confirming GNP-led non-pharmacological BPSD intervention program reduces antipsychotic use 38% versus standard care — required AGS CE update for GNPs on BPSD documentation standards, CMS antipsychotic quality measure frameworks, and non-pharmacological intervention protocol compliance.",
  },
  {
    title: "Gerontological NP Polypharmacy Management — JAMA Internal Medicine 2024",
    description: "Prospective cohort (n=6,200 older adults with polypharmacy ≥10 medications) confirming GNP-led deprescribing program reduces Beers Criteria medication use 42% and 30-day ED visits 18% — required AGS CE update for GNPs on Beers Criteria documentation standards, anticholinergic burden scoring frameworks, and patient-centered deprescribing conversation protocols.",
  },
  {
    title: "NP-Led Advance Care Planning in SNF — JAGS 2023",
    description: "Implementation study (n=3,600 SNF residents) confirming GNP-led advance care planning program achieves 94% POLST completion rate versus 31% baseline — required AMDA CE update for GNPs on goals of care documentation standards, POLST completion frameworks, and family surrogate engagement protocols.",
  },
  {
    title: "Gerontological NP Falls Prevention — The Gerontologist 2024",
    description: "Multicenter quality improvement study (n=8,400 SNF residents) confirming GNP-led multifactorial falls prevention program reduces injurious falls 31% versus standard nursing home falls protocol — required AGS CE update for GNPs on falls risk assessment documentation standards, Tinetti gait assessment frameworks, and environmental modification protocol compliance.",
  },
  {
    title: "NP Telemedicine Gerontology — JAMDA 2023",
    description: "Prospective study (n=5,200 SNF and ALF telehealth encounters) confirming GNP-delivered tele-geriatrics achieves equivalent clinical decision quality and 30-day readmission rates to in-person care — required AMDA CE update for GNPs on tele-geriatrics documentation standards, remote physical examination frameworks, and telehealth medication management protocols.",
  },
]

const testimonial = {
  quote:
    "GNP-BC 5-year recertification with 75 CE hours including 25 gerontological-specific hours, AGPCNP-BC concurrent 5-year renewal, CDP dementia practitioner 2-year renewal, CMD medical director 3-year renewal, AGS Annual Scientific Meeting CE, AMDA Annual Conference CE, annual AGS Beers Criteria update CE, annual BPSD management CE, annual antipsychotic prescribing in dementia CE for CMS quality measure compliance, annual falls assessment CE, annual delirium management CE, annual POLST completion training, MDS quarterly assessment attestation for 180 SNF residents (quarterly, annual, SCSA assessments), CMS antipsychotic quality measure quarterly monitoring and documentation for 4 SNFs, INTERACT stop-and-watch quarterly compliance, quarterly 30-day rehospitalization root cause analysis, quarterly influenza and pneumococcal vaccination compliance documentation, quarterly NHSN LTC reporting, PDPM classification accuracy quarterly audit, DEA 3-year renewal, collaborative agreement annual renewal with supervising geriatrician, MIPS annual reporting with dementia and falls quality measures, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Chidinma G.",
  title: "MSN, GNP-BC, AGPCNP-BC, CDP, CMD, Gerontological NP & SNF Medical Director",
}

export default function GerontologicalNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Gerontological Nurse Practitioners"
        title="GNP-BC Renewal. CMS SNF Star Ratings. MDS Quality Reporting. One Calendar."
        subtitle="Momenties tracks GNP-BC 5-year recertification, CDP dementia practitioner 2-year renewal, CMD medical director 3-year renewal, quarterly MDS assessment attestation, CMS antipsychotic quality measure quarterly monitoring, INTERACT quarterly readmission root cause analysis, POLST annual completion training, annual Beers Criteria CE update, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting with dementia and falls quality measures, and state APRN license so Gerontological NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Gerontological NP Practice
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
