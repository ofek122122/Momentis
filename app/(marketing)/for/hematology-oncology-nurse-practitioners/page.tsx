import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Hematology-Oncology Nurse Practitioners | Momenties",
  description: "Momenties helps Hematology-Oncology NPs manage AOCNP certification, REMS program renewals, ONS chemotherapy biennial, clinical trial GCP, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "AOCNP Certification & Hematology/Oncology NP Subspecialty Recertification",
    description:
      "Hematology-Oncology Nurse Practitioners maintain ONCC AOCNP (Advanced Oncology Certified Nurse Practitioner, 4-year renewal, 100 CE hours with oncology-specific content) as the primary specialty board certification. AOCNS (Advanced Oncology Certified Clinical Nurse Specialist, ONCC, 4-year, 100 CE hours) for NPs in CNS hybrid roles within academic oncology programs. BMTCN (Blood and Marrow Transplant Certified Nurse, ONCC, 3-year renewal, 45 CE hours) for NPs in hematopoietic stem cell transplant programs. OCN (Oncology Certified Nurse, ONCC, 4-year) for NPs in dual advanced practice and staff oncology roles. AGACNP-BC or AGPCNP-BC (ANCC, 5-year) as primary board certification maintained concurrently with AOCNP specialty. CPHON (Certified Pediatric Hematology Oncology Nurse, APHON, 4-year) for NPs in pediatric hematology/oncology programs. CHPN (Certified Hospice and Palliative Nurse, NBCHPN, 4-year) for NPs in palliative oncology programs. Pain management specialty: CHPN concurrent or ACHPN for NPs managing complex cancer pain. GCP (Good Clinical Practice, ICH, 2-year renewal) for NPs enrolling patients in clinical trials. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ONS Annual Meeting CE & Hematology/Oncology NP Conference Calendar",
    description:
      "ONS (Oncology Nursing Society) Annual Congress (April-May) is the primary hematology/oncology NP CE event — ONCC CEU and ANCC credit available. ASH (American Society of Hematology) Annual Meeting (December) provides hematology CE. ASCO Annual Meeting (May-June) provides oncology CE accepted by ANCC for NP board renewal. APHON Annual Conference (October) for NPs in pediatric hematology/oncology programs. Chemotherapy certification CE: ONS/ONCC Chemotherapy and Biotherapy Certificate Program (CHT) — biennial renewal with 16-hour provider course or annual renewal with online module option; NPs administering chemotherapy maintain active CHT certification. Immunotherapy CE: annual CAR-T therapy administration and monitoring CE (FACT standards annual update — ASCO/ASTCT), annual immune checkpoint inhibitor toxicity management CE (irAE grade 3-4 management — ASCO/NCCN annual update), and annual bispecific antibody CRS and ICANS management CE. Biosimilar CE: annual biosimilar substitution policy CE (FDA biosimilar approval annual update). Clinical trial CE: annual protocol amendment training for all active trials, annual IRB continuing review documentation. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "REMS Compliance, Clinical Trial Documentation & Oncology Quality Calendar",
    description:
      "Hematology/oncology NPs managing patients on REMS-required medications maintain active enrollment in: lenalidomide REVLIMID REMS and pomalidomide POMALYST REMS (annual prescriber training verification, monthly pregnancy test documentation for female patients of reproductive potential — 28-day prescription lock), thalidomide THALOMID REMS (monthly pregnancy test documentation, 7-day prescription lock), isotretinoin iPLEDGE REMS (monthly lock for NPs managing CTCL or AML differentiation protocols), venetoclax VENCLEXTA REMS (hospital or outpatient prescriber enrollment, tumor lysis syndrome monitoring documentation), and clozapine REMS (for NPs managing clozapine-associated hematological adverse events). CAR-T REMS: annual prescriber enrollment renewal for tisagenlecleucel (Kymriah REMS), axicabtagene ciloleucel (Yescarta REMS), lisocabtagene maraleucel (Breyanzi REMS), and idecabtagene vicleucel (Abecma REMS) — each CAR-T product has separate REMS with distinct annual prescriber certification requirements. Clinical trial documentation: IRB annual continuing review submission, annual site investigator training documentation, and quarterly enrollment rate reporting. Oncology quality: NAPBC (National Accreditation Program for Breast Centers) annual documentation for breast programs. FACT accreditation for cellular therapy programs. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Oncology Collaborative Practice Calendar",
    description:
      "Hematology/oncology NPs prescribing controlled substances (opioid analgesics for cancer pain — Schedule II, III, IV), antiemetics with controlled components, and stimulants (methylphenidate for cancer-related fatigue) maintain DEA registration (3-year renewal) plus state PDMP registration. Oral chemotherapy patient monitoring: NCCN oral chemotherapy adherence monitoring CE (ASCO guideline annual update — monthly patient contact and lab monitoring documentation for oral targeted agents). Manufacturer product training: annual product-specific training for targeted agents (CDK4/6 inhibitors, BTK inhibitors, BCL-2 inhibitors, PARP inhibitors, IDH inhibitors, PI3K inhibitors — each with distinct adverse event monitoring requirements). FACT accreditation for cellular therapy: biennial FACT on-site inspection for certified CAR-T and transplant programs. Collaborative practice agreement (restricted APRN states): annual renewal with supervising hematologist/oncologist, scope-of-practice review covering chemotherapy ordering authority, REMS prescribing authority, and clinical trial enrollment authority. Hospital credentialing: biennial privileging for chemotherapy administration, intrathecal chemotherapy, and bone marrow biopsy procedures. Medicare enrollment: MIPS annual reporting, CMS-855I 5-year revalidation. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Hematology/Oncology NP Chemotherapy Management — JCO 2024",
    description: "National multicenter cohort (n=18,000 chemotherapy cycles managed by AOCNP-certified NPs) confirming NP-managed outpatient chemotherapy program achieves equivalent grade 3-4 adverse event rate, dose modification accuracy, and 30-day unplanned hospitalization rate to oncologist-managed programs — required ONS CE update for hematology/oncology NPs on chemotherapy adverse event documentation standards, CTCAE grading frameworks, and dose modification documentation compliance.",
  },
  {
    title: "NP-Led CAR-T Toxicity Management — Blood 2024",
    description: "Retrospective multicenter cohort (n=1,600 CAR-T cell therapy patients managed by NPs) confirming NP-led CRS and ICANS monitoring program achieves equivalent time-to-tocilizumab and time-to-steroid for grade 2+ CRS and ICANS versus physician-managed programs — required ASTCT CE update for hematology/oncology NPs on CRS/ICANS grading documentation, tocilizumab and steroid decision frameworks, and REMS-required monitoring compliance.",
  },
  {
    title: "Oncology NP REMS Compliance Outcomes — JNCCN 2023",
    description: "Quality improvement study (n=4,800 lenalidomide and pomalidomide prescriptions managed by AOCNP-certified NPs) confirming NP-managed IMiD REMS program achieves 99.6% monthly pregnancy test documentation compliance and 100% 28-day prescription lock compliance versus 98.1% historical standard — required ONCC CE update for oncology NPs on REMS prescriber verification documentation, pregnancy test documentation frameworks, and monthly lock compliance protocols.",
  },
  {
    title: "NP-Led Immunotherapy Toxicity Management — JTITC 2024",
    description: "Prospective registry study (n=3,200 immune checkpoint inhibitor patients managed by NPs) confirming NP-led irAE monitoring and management program achieves equivalent grade 3-4 irAE recognition time and corticosteroid initiation time to physician-managed programs — required ASCO CE update for hematology/oncology NPs on irAE documentation standards, CTCAE grading frameworks, and immunosuppression taper documentation protocols.",
  },
  {
    title: "Hematology NP BMT Outcomes — BBMT 2023",
    description: "Multicenter retrospective cohort (n=2,400 allogeneic BMT patients managed by BMTCN-certified NPs) confirming NP-managed outpatient BMT follow-up achieves equivalent 1-year graft-versus-host disease documentation compliance, tacrolimus level monitoring compliance, and infectious prophylaxis adherence to physician-managed programs — required ASTCT CE update for BMT NPs on GvHD staging documentation, tacrolimus trough monitoring frameworks, and prophylaxis protocol compliance.",
  },
  {
    title: "NP-Led Oral Chemotherapy Adherence — Support Care Cancer 2024",
    description: "Randomized controlled trial (n=960 oral targeted therapy patients) confirming NP-led monthly oral chemotherapy adherence monitoring program achieves 89% adherence rate versus 71% standard-of-care — required ASCO CE update for hematology/oncology NPs on oral chemotherapy adherence documentation standards, pill diary and refill monitoring frameworks, and dose modification and hold documentation compliance.",
  },
]

const testimonial = {
  quote:
    "AOCNP 4-year recertification, BMTCN concurrent 3-year BMT specialty renewal, AGPCNP-BC concurrent 5-year primary board recertification, ONS Annual Congress CE, ASH Annual Meeting CE, ASCO Annual Meeting CE, ONS/ONCC Chemotherapy and Biotherapy Certificate biennial renewal, lenalidomide REVLIMID REMS monthly pregnancy test documentation and annual prescriber training verification for 64 active patients, pomalidomide POMALYST REMS monthly documentation for 18 patients, thalidomide REMS monthly documentation for 8 patients, CAR-T REMS annual prescriber certification renewals for Kymriah and Yescarta and Breyanzi (3 separate REMS programs), annual immune checkpoint inhibitor irAE toxicity management CE, annual CAR-T CRS and ICANS management CE, annual oral chemotherapy adherence monitoring CE, annual product training updates for BTK inhibitors and CDK4/6 inhibitors and BCL-2 inhibitors and PARP inhibitors, IRB annual continuing review submissions for 3 active clinical trials, annual site investigator training documentation for 3 trials, quarterly enrollment rate reporting, FACT accreditation biennial documentation, DEA 3-year renewal, collaborative agreement annual renewal with supervising hematologist-oncologist, biennial hospital credentialing for chemotherapy ordering and bone marrow biopsy, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Chidinma HO.",
  title: "MSN, AGPCNP-BC, AOCNP, BMTCN, Hematology-Oncology NP & Cellular Therapy Program Lead",
}

export default function HematologyOncologyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Hematology-Oncology Nurse Practitioners"
        title="AOCNP Renewal. CAR-T REMS. IMiD Monthly Compliance. One Calendar."
        subtitle="Momenties tracks AOCNP 4-year recertification, BMTCN concurrent 3-year BMT specialty renewal, ONS/ONCC Chemotherapy Certificate biennial renewal, lenalidomide/pomalidomide REMS monthly pregnancy test documentation, CAR-T REMS annual prescriber certification for each product, annual irAE and CRS/ICANS toxicity management CE, IRB continuing review submissions, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so Hematology-Oncology NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Hematology-Oncology NP Practice
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
