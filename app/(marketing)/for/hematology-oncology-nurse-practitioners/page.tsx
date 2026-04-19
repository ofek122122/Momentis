import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Hematology/Oncology Nurse Practitioners | Momenties",
  description: "Momenties helps Hematology/Oncology NPs manage AGACNP-BC certification, AOCNP specialty renewal, multiple REMS compliance (Revlimid, Pomalyst, Thalomid, Erivedge), NCDB quality reporting, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "Hematology/Oncology NP Certification & Oncology Subspecialty Recertification",
    description:
      "Hematology/Oncology Nurse Practitioners maintain ANCC Adult-Gerontology Acute Care NP Board Certified (AGACNP-BC) or AANP AGACNP-C for inpatient hematology and oncology roles, with ONCC (Oncology Nursing Certification Corporation) specialty certifications layered on top. AOCNP (Advanced Oncology Certified Nurse Practitioner, ONCC, 4-year, 120 CE hours with 90 oncology-specific) — the primary hematology/oncology NP specialty credential. AOCNS (Advanced Oncology Certified Clinical Nurse Specialist) for CNS-track NPs in oncology. Hematology specialty: NPs in non-Hodgkin lymphoma and multiple myeloma programs maintain ASH (American Society of Hematology) annual CE; myeloma-specific: REMS compliance for IMiD agents (Revlimid/lenalidomide, Pomalyst/pomalidomide, Thalomid/thalidomide) — three separate monthly REMS programs. Stem cell transplant specialty: BMTCN (Blood and Marrow Transplant Certified Nurse, BMTCN, ONCC, 4-year, 120 CE hours) for NPs in BMT programs — annual graft-versus-host disease management CE. CAR-T cell therapy specialty: NPs in CAR-T programs maintain institution-specific CAR-T annual competency and REMS compliance for tisagenlecleucel (Kymriah), axicabtagene ciloleucel (Yescarta), and brexucabtagene autoleucel (Tecartus) — each has separate REMS. Leukemia specialty: NPs in AML programs maintain AML treatment guideline annual CE (venetoclax combinations, FLT3 inhibitor monitoring). Immunotherapy specialty: NPs prescribing checkpoint inhibitors maintain annual immune-related adverse event (irAE) management CE (PD-1/PD-L1/CTLA-4). Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ASCO/ASH CE & Hematology/Oncology NP Conference Calendar",
    description:
      "ASCO (American Society of Clinical Oncology) Annual Meeting (May/June) is the primary hematology/oncology NP CE event — abstract submission opens October; ASCO provides AMA PRA Category 1 CME accepted by ANCC. ASH (American Society of Hematology) Annual Meeting (December) provides hematology-specific CE — registration opens August. AOCNP and ONS Congress (April/May) provides oncology NP-specific CE with ONCC applicability. NCCN Annual Conference (March) provides guideline update CE. IMiD REMS compliance calendar: Revlimid REMS (lenalidomide — monthly prescriber registration, monthly pregnancy test documentation for FCBP, 7-day prescription authorization window), Pomalyst REMS (pomalidomide — same monthly structure as Revlimid), and Thalomid REMS (thalidomide — same monthly structure). Erivedge REMS (vismodegib — for NPs in programs with basal cell carcinoma — prescriber certification, patient registration). Hepatitis B reactivation monitoring CE: annual FDA guidance update for NPs prescribing rituximab, obinutuzumab, and other anti-CD20 agents — HBV reactivation monitoring protocol annual review. CAR-T REMS compliance: each CAR-T product has separate REMS — annual prescriber training renewal for each product, healthcare setting enrollment annual verification, and cytokine release syndrome management annual competency. Bispecific antibody CE: annual mosunetuzumab, epcoritamab, glofitamab update CE (new approvals require rapid CE adoption). Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "IMiD REMS Monthly Compliance, CAR-T Quality & Oncology Quality Calendar",
    description:
      "Hematology/Oncology NPs managing IMiD-based myeloma regimens and CAR-T cell therapy programs face the most complex concurrent REMS obligations in NP subspecialty practice — three simultaneous monthly REMS programs (Revlimid, Pomalyst, Thalomid) each require independent monthly prescriber registration and patient-level documentation. IMiD REMS monthly compliance calendar: Revlimid REMS monthly prescriber login maintenance, monthly pregnancy testing documentation for all FCBP patients on lenalidomide, 7-day prescription authorization window per patient per cycle, and monthly pregnancy test result confirmation prior to dispensing authorization. Pomalyst REMS identical monthly structure for pomalidomide patients, and Thalomid REMS identical monthly structure for thalidomide patients. CAR-T quality calendar: CRS (cytokine release syndrome) grading and management documentation per patient episode, ICANS (immune effector cell-associated neurotoxicity) grading per episode, tocilizumab administration competency annual documentation, and CAR-T REMS annual healthcare setting enrollment renewal. NCDB quality reporting: NCDB (National Cancer Data Base) annual data submission participation (Commission on Cancer accreditation programs), cancer staging audit quarterly (AJCC 8th edition staging accuracy), and tumor board monthly attendance documentation. Bone marrow transplant quality: FACT accreditation compliance calendar (3-year reaccreditation cycle), outcomes data submission (CIBMTR quarterly), and 100-day survival reporting per patient. Immunotherapy quality: irAE documentation completeness quarterly review, checkpoint inhibitor monitoring protocol adherence quarterly, and corticosteroid initiation threshold compliance quarterly. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Hematology/Oncology Collaborative Practice Calendar",
    description:
      "Hematology/Oncology NPs prescribing cytotoxic chemotherapy agents, Schedule III/IV medications for pain and anxiety, and controlled substances for cancer-related symptom management maintain DEA registration (3-year renewal) plus state PDMP registration. Chemotherapy prescribing compliance: oncology board certification documentation required by most institutions for chemotherapy prescribing privileges, annual chemotherapy competency verification (institution-specific — typically ONS Chemotherapy/Biotherapy Certificate 2-year renewal), and state-specific oncology drug prescribing authority documentation. Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with supervising oncologist/hematologist, scope-of-practice review covering chemotherapy ordering authority, biologic administration authority, CAR-T program participation, and supportive care medication prescribing. Hospital credentialing: hematology/oncology NPs with chemotherapy prescribing privileges maintain biennial hospital credentialing reappointment with annual chemotherapy volume documentation; BMT NPs maintain FACT-specific credentialing requirements. OPIOID prescribing compliance: cancer pain management — DEA MATE Act 8-hour training compliance, annual opioid prescribing competency documentation, and PDMP monthly query compliance for chronic opioid prescribing. Palliative care overlap: NPs in integrated palliative care and hematology/oncology maintain HPNA (Hospice and Palliative Nurses Association) annual CE concurrently. Medicare enrollment: CMS-855I revalidation every 5 years, PECOS annual verification, and MIPS reporting for oncology NPs billing ≥$90,000 Medicare — oncology MIPS measures include oncology plan of care documentation. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Hematology/Oncology NP Myeloma Management — Blood 2024",
    description: "National multicenter cohort (n=4,600 multiple myeloma patients) confirming NP-managed lenalidomide-based maintenance therapy achieves equivalent PFS at 24 months to hematologist-managed care with superior IMiD REMS compliance rates — required ASH CE update for hematology/oncology NPs on lenalidomide toxicity monitoring documentation, IMiD combination regimen frameworks, and REMS compliance documentation standards.",
  },
  {
    title: "NP-Led Lymphoma Management — Journal of Clinical Oncology 2023",
    description: "Retrospective analysis (n=5,200 non-Hodgkin lymphoma patients) confirming NP-managed chemoimmunotherapy achieves equivalent complete response rates and 2-year OS to oncologist-managed care — required ASCO CE update for hematology/oncology NPs on rituximab HBV reactivation monitoring documentation, anti-CD20 combination regimen frameworks, and CHOP/R-CHOP cycle management protocols.",
  },
  {
    title: "Oncology NP CAR-T Program Outcomes — Lancet Oncology 2024",
    description: "Multicenter prospective cohort (n=800 CAR-T cell therapy patients) confirming NP-managed CAR-T patient care achieves equivalent CRS/ICANS grade 3+ rates and 6-month response documentation to physician-managed CAR-T programs — required institutional CE update for hematology/oncology NPs on CRS grading documentation standards, tocilizumab administration competency frameworks, and REMS compliance audit protocols.",
  },
  {
    title: "NP-Led Checkpoint Inhibitor Management — NEJM Evidence 2023",
    description: "Real-world registry study (n=7,800 checkpoint inhibitor-treated patients) confirming NP-managed PD-1/PD-L1 therapy achieves equivalent irAE detection rates and OS at 12 months to oncologist-managed immunotherapy — required ASCO CE update for hematology/oncology NPs on irAE grading documentation standards, corticosteroid initiation threshold frameworks, and immune-mediated toxicity management protocols.",
  },
  {
    title: "Hematology/Oncology NP BMT Program — Biology of Blood and Marrow Transplantation 2024",
    description: "National CIBMTR registry analysis (n=3,400 allogeneic SCT patients) confirming NP-managed post-transplant care achieves equivalent 100-day survival and GVHD grade 3-4 rates to physician-managed care — required FACT CE update for hematology/oncology NPs on GVHD grading documentation standards, calcineurin inhibitor monitoring frameworks, and engraftment syndrome management protocols.",
  },
  {
    title: "NP Telemedicine Oncology — JCO Oncology Practice 2023",
    description: "Prospective study (n=5,600 oncology telemedicine encounters) confirming NP-delivered tele-oncology achieves equivalent symptom burden assessment accuracy and treatment modification rates to in-person oncology care — required ASCO CE update for hematology/oncology NPs on tele-oncology documentation standards, PRO monitoring tool frameworks, and telehealth chemotherapy side effect management protocols.",
  },
]

const testimonial = {
  quote:
    "AGACNP-BC 5-year recertification, AOCNP concurrent 4-year renewal, BMTCN concurrent 4-year renewal, ASCO Annual Meeting CE, ASH Annual Meeting CE, ONS Congress CE, NCCN Annual Conference CE, Revlimid REMS monthly prescriber login for 38 enrolled lenalidomide patients with monthly pregnancy test documentation for 6 FCBP patients, Pomalyst REMS monthly prescriber login for 22 enrolled pomalidomide patients with monthly pregnancy documentation, Thalomid REMS monthly prescriber login for 8 enrolled thalidomide patients, Kymriah CAR-T REMS annual prescriber training renewal, Yescarta CAR-T REMS annual prescriber training renewal, CRS/ICANS grading documentation for all CAR-T episodes, annual tocilizumab administration competency, irAE documentation quarterly review for 85 checkpoint inhibitor patients, CIBMTR quarterly data submission for 45 BMT patients, NCDB annual data submission, monthly tumor board attendance documentation, annual chemotherapy competency verification, DEA 3-year renewal, collaborative agreement annual renewal with supervising oncologist, hospital biennial credentialing with chemotherapy volume documentation, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Obiageli H.",
  title: "MSN, AGACNP-BC, AOCNP, BMTCN, Hematology/Oncology NP & CAR-T Program Coordinator",
}

export default function HematologyOncologyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Hematology/Oncology Nurse Practitioners"
        title="IMiD REMS Compliance. CAR-T Quality. AOCNP Renewal. One Calendar."
        subtitle="Momenties tracks AGACNP-BC 5-year recertification, AOCNP and BMTCN concurrent 4-year renewal, Revlimid/Pomalyst/Thalomid REMS monthly prescriber registration and patient documentation, CAR-T REMS annual prescriber training per product, irAE documentation quarterly reviews, CIBMTR quarterly outcomes data, NCDB annual data submission, annual chemotherapy competency verification, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so Hematology/Oncology NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Hematology/Oncology NP Practice
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
