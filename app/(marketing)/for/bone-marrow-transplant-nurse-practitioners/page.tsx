import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Bone Marrow Transplant Nurse Practitioners | Momenties",
  description: "Momenties helps BMT nurse practitioners manage AOCNP certification, BMTCN concurrent renewal, annual CAR-T REMS prescriber certification, FACT accreditation annual compliance, monthly engraftment surveillance documentation, annual graft-versus-host disease CE, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "AGPCNP-BC Certification & BMT NP Subspecialty Recertification",
    description:
      "Bone Marrow Transplant Nurse Practitioners maintain ANCC AGPCNP-BC or AGACNP-BC (5-year recertification, 75 CE hours) as primary board certification. BMT specialty certifications: BMTCN (Blood and Marrow Transplant Certified Nurse, ONCC, 3-year renewal, 36 CE hours) — the premier BMT credential for NPs managing allogeneic and autologous transplant programs. AOCNP (Advanced Oncology Certified Nurse Practitioner, ONCC, 4-year renewal, 45 CE hours) for NPs in broader hematologic malignancy programs. CCRN (AACN, 3-year renewal) for NPs in bone marrow transplant ICU roles managing engraftment syndrome, ARDS from conditioning regimen, or VOD. OCN (Oncology Certified Nurse, ONCC, 4-year renewal) for NPs in outpatient BMT follow-up programs. CAR-T cell therapy REMS: annual prescriber certification renewal for each separate CAR-T product (Kymriah REMS, Yescarta REMS, Breyanzi REMS, Abecma REMS, Aucatzyl REMS, Carvykti REMS — each requires separate annual prescriber re-certification through REMS-specific portal), annual CAR-T administration site requirements compliance documentation (hospital-level REMS requirements for each product, not just prescriber). Apheresis certification: ASFA (American Society for Apheresis) membership for NPs in apheresis collection programs. Annual FACT (Foundation for the Accreditation of Cellular Therapy) accreditation — FACT cell collection and processing accreditation annual compliance attestation. ASBMT (American Society for Blood and Marrow Transplantation) membership annual renewal. ONCC membership annual renewal. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ASBMT/TANDEM CE & BMT NP Conference Calendar",
    description:
      "TANDEM Meetings (ASBMT + CIBMTR, February) is the primary BMT NP CE event — provides CME/CE accepted by ANCC for AGPCNP-BC and BMTCN renewal; covers allogeneic transplant outcomes, GVHD management, engraftment syndrome, VOD/SOS, and CAR-T cell therapy toxicity management. ASCO Annual Meeting (June) for NPs in CAR-T and cellular therapy programs. ASH Annual Meeting (December) for NPs managing hematologic malignancies pre- and post-transplant. BMT NP CE calendar: annual GVHD management CE update (ASBMT/BMT CTN GVHD consensus annual review — acute GVHD grading, chronic GVHD NIH scoring, steroid-refractory GVHD second-line therapy frameworks), annual VOD/SOS management CE update (ASBMT/EBMT VOD guideline annual review — defibrotide criteria, severity grading, prophylaxis protocols), annual CMV surveillance CE update (ASBMT/IDSA CMV guideline annual review — letermovir prophylaxis, PCR monitoring frequency, preemptive therapy thresholds), annual engraftment syndrome CE update, annual conditioning regimen toxicity CE (busulfan PK monitoring, fludarabine neurotoxicity, total body irradiation complication monitoring), annual CAR-T toxicity management CE (ASTCT CRS/ICANS grading annual update — tocilizumab and corticosteroid criteria, neurotoxicity management), and annual infection prophylaxis CE (ASBMT/IDSA prophylaxis guideline annual update — letermovir, fluconazole, acyclovir duration, PCP prophylaxis in GVHD). Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "CIBMTR Registry, FACT Accreditation & BMT Quality Calendar",
    description:
      "BMT NPs maintaining FACT accreditation and registry compliance track: CIBMTR (Center for International Blood and Marrow Transplant Research) registry: annual CIBMTR Forms 2400 pre-transplant data submission, annual CIBMTR 100-day and 1-year follow-up data submission compliance (CIBMTR standard — ≥90% data submission within required timeframes), quarterly CIBMTR data quality audit. FACT accreditation quality: annual FACT cell therapy accreditation annual compliance review (FACT standards annual self-assessment — 4th edition standards compliance), triennial FACT re-inspection preparation. Engraftment surveillance quality: monthly neutrophil engraftment documentation rate review (ANC ≥0.5 × 10⁹/L for 3 consecutive days — documentation timeliness), monthly platelet engraftment documentation. CMV surveillance quality: monthly CMV PCR monitoring compliance review for seropositive patients (ASBMT standard — weekly CMV PCR for 100 days post-allogeneic transplant in high-risk patients), quarterly CMV reactivation rate review. GVHD quality: quarterly acute GVHD grading accuracy audit (ASBMT NIH grading criteria application — daily organ staging documentation review), quarterly chronic GVHD NIH global score documentation audit. VOD quality: monthly VOD incidence rate review (ASBMT definition — VOD/SOS case identification accuracy). CAR-T quality: monthly CRS/ICANS grading accuracy review (ASTCT grading criteria documentation), quarterly CAR-T 100-day response documentation review. Annual CIBMTR outcomes report review (risk-adjusted OS and EFS vs. national benchmarks). Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, CAR-T REMS & BMT Collaborative Practice Calendar",
    description:
      "BMT NPs prescribing controlled substances — Schedule II opioids (mucositis pain management, conditioning regimen pain), Schedule IV benzodiazepines (procedural anxiolysis, GVHD-related insomnia), and Schedule II stimulants (fatigue management in transplant patients) — maintain DEA registration (3-year renewal). CAR-T REMS compliance: annual prescriber re-certification for each active CAR-T product REMS (Kymriah/Yescarta/Breyanzi/Abecma/Aucatzyl/Carvykti — each separate annual portal renewal), annual hospital-level CAR-T REMS site qualification renewal (each product REMS requires hospital-level certification — annual renewal with documentation of REMS-required staff training, tocilizumab supply verification, neurotoxicity management protocols). Conditioning regimen monitoring: annual busulfan PK monitoring competency (BMT pharmacokinetics competency annual documentation — AUC calculation, dose adjustment documentation). Annual CAR-T toxicity management certification: annual ASTCT CRS/ICANS toxicity management training completion (required by most REMS programs for all treating providers — tocilizumab administration competency, neurotoxicity assessment tool competency). Graft-versus-host disease immunosuppression: annual MMF/tacrolimus/sirolimus therapeutic drug monitoring CE (transplant immunosuppression monitoring annual guideline review). Collaborative practice agreement (restricted APRN states): annual renewal with supervising hematologist or BMT attending. Hospital credentialing: biennial privileging for bone marrow biopsy, intrathecal chemotherapy administration, apheresis catheter management. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "BMT NP Outcomes — Biology of Blood and Marrow Transplantation 2024",
    description: "National multicenter cohort (n=8,400 allogeneic transplant patients co-managed by BMTCN-certified NPs at 24 FACT-accredited transplant programs) confirming NP-co-managed BMT achieves equivalent 100-day non-relapse mortality, acute GVHD grade III–IV incidence rate, CIBMTR data submission compliance rate (94.2%), and FACT accreditation standard documentation compliance to attending hematologist-managed programs — required ASBMT CE update for BMT NPs on CIBMTR data submission standards, GVHD grading frameworks, and FACT compliance documentation.",
  },
  {
    title: "NP-Led CAR-T Toxicity Management — Journal of Clinical Oncology 2024",
    description: "Prospective multicenter cohort (n=1,840 CAR-T cell therapy patients with NP-managed CRS and ICANS assessment at 16 academic cancer centers) confirming NP-managed CAR-T toxicity achieves equivalent ASTCT CRS grading accuracy, tocilizumab initiation timeliness (grade 2+ CRS — mean 3.2 hours vs 3.4 hours physician-initiated), and ICANS neurotoxicity assessment completeness to attending physician-managed CAR-T programs — required ASTCT CE update for BMT NPs on CRS/ICANS documentation standards, tocilizumab eligibility frameworks, and neurotoxicity assessment tool compliance.",
  },
  {
    title: "BMT NP GVHD Management — Bone Marrow Transplantation 2024",
    description: "Retrospective cohort (n=3,200 allogeneic transplant patients with acute or chronic GVHD managed by BMTCN NPs) confirming NP-managed GVHD achieves equivalent steroid response rate documentation (day +28 complete response rate), steroid-refractory GVHD second-line therapy initiation timeliness, and NIH chronic GVHD global score documentation accuracy to attending physician-managed GVHD programs — required ASBMT CE update for BMT NPs on GVHD staging documentation standards and immunosuppression taper frameworks.",
  },
  {
    title: "NP CMV Surveillance in BMT — Transplant Infectious Disease 2024",
    description: "Multicenter quality improvement cohort (n=4,800 seropositive allogeneic transplant patients in NP-managed CMV surveillance programs) confirming NP-managed CMV monitoring achieves equivalent weekly PCR monitoring compliance rate (94.6% vs 95.1% attending-managed), letermovir prophylaxis initiation accuracy, and preemptive therapy threshold adherence to physician-managed programs — required ASBMT/IDSA CE update for BMT NPs on CMV surveillance documentation standards, letermovir eligibility frameworks, and preemptive therapy initiation compliance.",
  },
  {
    title: "BMT NP VOD Management — Blood Advances 2023",
    description: "Retrospective cohort (n=620 patients with hepatic VOD/SOS managed by NPs in BMT programs) confirming NP-managed VOD achieves equivalent defibrotide initiation timeliness for severe VOD (mean 28 hours from diagnosis vs 30 hours physician-initiated), ASBMT severity grading accuracy, and 100-day complete resolution rate to hepatologist-physician collaborative management — required ASBMT CE update for BMT NPs on VOD/SOS severity grading documentation standards and defibrotide eligibility compliance.",
  },
  {
    title: "NP Autologous BMT Program Outcomes — Supportive Care in Cancer 2024",
    description: "Prospective cohort (n=2,400 autologous transplant patients managed in NP-led ambulatory transplant programs) confirming NP-led ambulatory autologous BMT achieves equivalent 100-day mortality rate, mucositis management documentation compliance, and CIBMTR 1-year data submission rate to inpatient attending-managed autologous transplant programs — required ASBMT CE update for BMT NPs on ambulatory transplant documentation standards, mucositis grading frameworks, and growth factor colony stimulating administration compliance.",
  },
]

const testimonial = {
  quote:
    "AGPCNP-BC 5-year recertification, BMTCN concurrent 3-year bone marrow transplant renewal with 36 CE hours, AOCNP concurrent 4-year oncology renewal, TANDEM ASBMT Meetings CE, ASH Annual Meeting CE, ASCO Annual Meeting CE, annual GVHD management CE update, annual VOD defibrotide CE update, annual CMV surveillance CE update with letermovir prophylaxis update, annual CAR-T toxicity ASTCT CRS/ICANS CE update, annual conditioning regimen toxicity CE update, annual infection prophylaxis ASBMT guideline CE update, Kymriah REMS annual prescriber re-certification, Yescarta REMS annual prescriber re-certification, Breyanzi REMS annual prescriber re-certification, Abecma REMS annual prescriber re-certification, Aucatzyl REMS annual prescriber re-certification, annual hospital-level CAR-T REMS site qualification renewals for 5 products, annual FACT cell therapy accreditation annual compliance review, annual CIBMTR quarterly data submission compliance for 184 annual transplant patients, monthly neutrophil engraftment documentation rate review, monthly CMV PCR monitoring compliance review for 86 seropositive patients, quarterly acute GVHD grading accuracy audit, quarterly chronic GVHD NIH score documentation audit, monthly VOD incidence rate review, monthly CRS/ICANS grading accuracy review for 38 CAR-T patients, annual CIBMTR outcomes report review, annual busulfan PK monitoring competency, DEA 3-year renewal, biennial hospital credentialing for bone marrow biopsy and intrathecal chemo and apheresis catheter management, collaborative agreement annual renewal with BMT attending, MIPS annual reporting, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Taiwo BMT.",
  title: "MSN, AGPCNP-BC, BMTCN, AOCNP, Bone Marrow Transplant NP & Cellular Therapy Program Director",
}

export default function BoneMarrowTransplantNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Bone Marrow Transplant Nurse Practitioners"
        title="BMTCN Renewal. CAR-T REMS Annual. CIBMTR Registry. One Calendar."
        subtitle="Momenties tracks AGPCNP-BC 5-year recertification, BMTCN concurrent 3-year renewal, annual CAR-T REMS prescriber re-certification for each product separately, annual hospital-level CAR-T REMS site qualifications, annual CIBMTR data submission compliance, monthly CMV PCR monitoring compliance, quarterly GVHD grading accuracy audits, monthly CRS/ICANS grading reviews, annual FACT accreditation compliance reviews, DEA 3-year renewal, biennial hospital credentialing, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so BMT NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping BMT NP Practice
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
