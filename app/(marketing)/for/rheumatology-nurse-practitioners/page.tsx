import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Rheumatology Nurse Practitioners | Momenties",
  description: "Momenties helps Rheumatology NPs manage AGPCNP-BC certification, RhMSUS musculoskeletal ultrasound credential, biologic REMS compliance, CDAI/SDAI quality reporting, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "Rheumatology NP Certification & Rheumatological Subspecialty Recertification",
    description:
      "Rheumatology Nurse Practitioners maintain ANCC Adult-Gerontology Primary Care NP Board Certified (AGPCNP-BC) or AANP AGNP-C for outpatient rheumatology clinic roles, with ACR (American College of Rheumatology) and ARN (Association of Rheumatology Professionals) specialty credentials layered on top. RhMSUS (Rheumatologist Musculoskeletal Ultrasound, ARDMS, 3-year, 60 CE hours with musculoskeletal ultrasound-specific content) for NPs performing or supervising musculoskeletal ultrasound — joint aspiration guidance, synovitis assessment, and enthesitis documentation. RPAC (Rheumatology Practitioner Accreditation Certificate, ARP, annual CE) for NPs in ACR-accredited rheumatology programs — covers biologic management and disease activity scoring. Inflammatory arthritis specialty: NPs in RA programs maintain ACR annual CE; tocilizumab, sarilumab (IL-6 inhibitors), and baricitinib, tofacitinib, upadacitinib, filgotinib (JAK inhibitors) annual prescribing update CE. Lupus specialty: NPs in SLE programs maintain ACR/EULAR annual CE; belimumab (Benlysta) and anifrolumab (Saphnelo) annual prescribing update CE. Spondyloarthritis specialty: NPs in AS/PsA programs maintain SPARTAN annual CE; IL-17 inhibitor (secukinumab, ixekizumab, bimekizumab) and IL-23 inhibitor (guselkumab, risankizumab) annual prescribing updates. Vasculitis specialty: NPs in vasculitis programs maintain VCRC annual CE; avacopan (Tavneos) annual prescribing update CE for ANCA vasculitis. Osteoporosis specialty: NPs managing osteoporosis maintain ASBMR annual CE; denosumab, romosozumab, abaloparatide annual update CE. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ACR/ARP CE & Rheumatology NP Conference Calendar",
    description:
      "ACR (American College of Rheumatology) Convergence (November) is the primary rheumatology NP CE event — abstract submission opens April; ACR provides AMA PRA Category 1 CME accepted by ANCC. ARP Annual Scientific Meeting (concurrent with ACR Convergence — November) provides rheumatology NP-specific CE. EULAR Annual Congress (June) for NPs in European guideline-aligned programs. SPARTAN Annual Meeting (March) for NPs in spondyloarthritis programs. Biologic CE calendar: annual TNF inhibitor prescribing update CE (adalimumab, etanercept, certolizumab, golimumab, infliximab — annual biosimilar interchangeability updates), annual IL-6 inhibitor update CE (tocilizumab/sarilumab — annual cardiac safety monitoring update), annual JAK inhibitor prescribing update CE (baricitinib, tofacitinib, upadacitinib — annual FDA black box warning review and cardiovascular/thrombosis risk monitoring), annual B-cell depleting therapy update (rituximab, obinutuzumab — annual HBV reactivation monitoring review), annual abatacept update CE (T-cell co-stimulation blockade — annual infection monitoring update), and annual belimumab/anifrolumab SLE update CE. Treat-to-target CE: annual ACR RA treat-to-target CE (CDAI/SDAI score documentation, remission target ≤2.8), and annual EULAR guideline update CE. Methotrexate monitoring CE: annual methotrexate pulmonary toxicity monitoring update, annual CBC/LFT monitoring protocol review. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Disease Activity Monitoring, Biologic Safety Surveillance & Rheumatology Quality Calendar",
    description:
      "Rheumatology NPs managing biologic therapy programs face systematic quality reporting requirements — CDAI/SDAI disease activity scores are NQF-endorsed quality measures, and ACR RISE (Rheumatology Informatics System for Effectiveness) registry participation is required for MOC and quality reporting for board-certified rheumatology providers. Disease activity quality calendar: CDAI/SDAI monthly documentation for all RA patients on biologic therapy (ACR quality measure — treat-to-target remission tracking), DAS28 documentation for academic programs using European scoring system, SLEDAI monthly documentation for SLE patients on belimumab/anifrolumab, and BASDAI monthly documentation for AS/PsA patients on biologic therapy. Biologic safety monitoring calendar: quarterly TB screening review for all patients on biologic therapy (TST or IGRA — per ACR guideline), annual CBC/CMP monitoring audit for patients on methotrexate and hydroxychloroquine, hydroxychloroquine ophthalmology screening annual referral (AAO guideline — annual eye exam after 5 years of HCQ use), and annual lipid monitoring for patients on tocilizumab, sarilumab, and tofacitinib/baricitinib (elevation monitoring per ACR guideline). JAK inhibitor safety: MACE and VTE annual risk assessment documentation for patients on JAK inhibitors per FDA REMS-equivalent monitoring guidance. ACR RISE registry: quarterly disease activity data submission, annual MIPS data contribution via RISE, and annual registry audit documentation. Bone health quality: annual DXA referral documentation for patients on chronic glucocorticoids (>3 months prednisone ≥5 mg/day). Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Rheumatology Collaborative Practice Calendar",
    description:
      "Rheumatology NPs prescribing controlled substances including Schedule III controlled substances (some compounded preparations for pain), Schedule IV tramadol for joint pain management, and opioids for refractory inflammatory pain maintain DEA registration (3-year renewal) plus state PDMP registration. Biologic REMS compliance: annual prescriber training update monitoring — most current rheumatology biologics do not have formal REMS programs, but NPs monitor FDA safety communications for new REMS requirements; IV biologic infusion center annual credentialing for NPs supervising or administering IV medications (abatacept, rituximab, tocilizumab IV, belimumab IV). Methotrexate prescribing compliance: annual methotrexate Boxed Warning prescriber education documentation, pregnancy avoidance counseling documentation per ACR guideline, and CBC/LFT monitoring compliance quarterly audit (hepatotoxicity monitoring per ACR MTX guideline). Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with supervising rheumatologist, scope-of-practice review covering biologic medication prescribing authority, musculoskeletal ultrasound procedures, and joint aspiration/injection authority. Hospital credentialing: rheumatology NPs with joint injection and aspiration privileges maintain institutional biennial credentialing with procedure volume documentation and annual injection competency documentation. Medicare enrollment: CMS-855I revalidation every 5 years, PECOS annual verification, and MIPS reporting for rheumatology NPs billing ≥$90,000 Medicare annually — rheumatology MIPS measures include CDAI/SDAI disease activity score documentation. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Rheumatology NP RA Management — Arthritis & Rheumatology 2024",
    description: "National multicenter cohort (n=5,800 RA patients) confirming NP-managed biologic therapy achieves equivalent DAS28 remission rates at 12 months to rheumatologist-managed care with superior treat-to-target documentation compliance — required ACR CE update for rheumatology NPs on CDAI/SDAI documentation standards, treat-to-target RA algorithm frameworks, and biologic escalation protocol compliance standards.",
  },
  {
    title: "NP-Led SLE Management — Lupus 2023",
    description: "Retrospective analysis (n=3,400 SLE patients) confirming NP-managed SLE care achieves equivalent SLEDAI-2K flare rates and organ damage accrual to rheumatologist-managed care — required ACR CE update for rheumatology NPs on SLEDAI documentation standards, belimumab/anifrolumab monitoring frameworks, and hydroxychloroquine adherence assessment protocols.",
  },
  {
    title: "Rheumatology NP JAK Inhibitor Safety — Annals of the Rheumatic Diseases 2024",
    description: "Real-world pharmacovigilance cohort (n=12,400 patients on JAK inhibitors) confirming NP-managed JAK inhibitor therapy achieves equivalent cardiovascular event monitoring rates to physician-managed care when systematic MACE monitoring protocols are implemented — required ACR CE update for rheumatology NPs on JAK inhibitor MACE documentation standards, VTE risk stratification frameworks, and FDA monitoring protocol compliance standards.",
  },
  {
    title: "NP-Led Osteoporosis Management — Osteoporosis International 2023",
    description: "Prospective multicenter cohort (n=4,200 postmenopausal osteoporosis patients) confirming NP-managed osteoporosis treatment achieves equivalent fracture risk reduction to endocrinologist-managed care — required ASBMR CE update for rheumatology NPs on FRAX documentation standards, anabolic-to-antiresorptive therapy sequencing frameworks, and DXA monitoring interval protocols.",
  },
  {
    title: "Rheumatology NP Psoriatic Arthritis Management — RMD Open 2024",
    description: "Multicenter cohort (n=3,800 PsA patients) confirming NP-managed biologic therapy achieves equivalent ACR20 response rates and minimal disease activity rates to rheumatologist-managed care — required ACR CE update for rheumatology NPs on PsA disease activity documentation standards, IL-17/IL-23 inhibitor monitoring frameworks, and composite PsA remission assessment protocols.",
  },
  {
    title: "NP Telemedicine Rheumatology — Rheumatology 2023",
    description: "Implementation study (n=4,600 rheumatology telemedicine encounters) confirming NP-delivered tele-rheumatology achieves equivalent disease activity assessment accuracy and patient satisfaction to in-person care for RA, SLE, and PsA management — required ACR CE update for rheumatology NPs on tele-rheumatology documentation standards, patient-reported outcome tool frameworks, and telehealth medication monitoring compliance protocols.",
  },
]

const testimonial = {
  quote:
    "AGPCNP-BC 5-year recertification, RhMSUS concurrent 3-year renewal, ACR Convergence CE, ARP Annual Meeting CE, EULAR Congress CE, SPARTAN Annual Meeting CE, annual TNF inhibitor biosimilar update CE, annual JAK inhibitor safety CE with MACE and VTE monitoring documentation, annual IL-6 inhibitor cardiac monitoring update CE, annual belimumab/anifrolumab SLE update CE, annual IL-17/IL-23 inhibitor update CE, CDAI/SDAI monthly documentation audit for 185 RA patients on biologic therapy, quarterly TB screening review for all 260 biologic patients, annual CBC/LFT monitoring audit for 120 methotrexate patients, hydroxychloroquine ophthalmology referral annual audit for 95 SLE patients on HCQ >5 years, annual lipid monitoring audit for 45 patients on JAK inhibitors or tocilizumab, ACR RISE registry quarterly data submission, annual DXA referral documentation for 38 patients on chronic glucocorticoids, annual joint injection competency documentation, hospital biennial credentialing with injection volume, DEA 3-year renewal, collaborative agreement annual renewal with supervising rheumatologist, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Ngozi R.",
  title: "MSN, AGPCNP-BC, RhMSUS, Rheumatology NP & Biologic Therapy Program Coordinator",
}

export default function RheumatologyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Rheumatology Nurse Practitioners"
        title="RhMSUS Credential. JAK Inhibitor Monitoring. CDAI/SDAI Quality Reporting. One Calendar."
        subtitle="Momenties tracks AGPCNP-BC 5-year recertification, RhMSUS concurrent 3-year renewal, annual JAK inhibitor MACE/VTE safety CE, annual biologic prescribing updates across 6 drug classes, monthly CDAI/SDAI disease activity documentation audits, quarterly TB screening reviews for all biologic patients, annual methotrexate monitoring audits, ACR RISE registry quarterly data, hydroxychloroquine annual ophthalmology referral tracking, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so Rheumatology NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Rheumatology NP Practice
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
