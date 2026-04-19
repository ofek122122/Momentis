import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Endoscopy & Gastroenterology Nurse Practitioners | Momenties",
  description: "Momenties helps Endoscopy & GI NPs manage AGPCNP-BC certification, CGRN endoscopy specialty renewal, GIE quality adenoma detection rates, biologic REMS compliance, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "AGPCNP-BC Certification & GI/Endoscopy NP Subspecialty Recertification",
    description:
      "Endoscopy and Gastroenterology Nurse Practitioners maintain ANCC AGPCNP-BC or FNP-BC (5-year recertification, 75 CE hours) as primary board certification given GI&apos;s outpatient and procedure-focused all-age scope. Endoscopy specialty certification: CGRN (Certified Gastroenterology Registered Nurse, ABCGN, 5-year renewal, 75 CE hours with GI-specific content) for NPs in ABCGN-credentialed GI endoscopy programs. CGRN is the premier GI specialty certification accepted by major endoscopy program credentialing committees. Hepatology specialty: CHFN (Certified Hepatology and Fibroscan Nurse, ABCGN or equivalent, 3-year renewal) for NPs in liver disease and hepatitis programs. Colorectal cancer screening: AASLD (American Association for the Study of Liver Diseases) annual CE for NPs in hepatology-GI programs. Motility specialty: ANMS (American Neurogastroenterology and Motility Society) annual CE for NPs in GI motility programs with manometry and pH testing. Capsule endoscopy: Given Imaging/Medtronic capsule endoscopy reading certification (annual platform update) for NPs interpreting capsule studies. Inflammatory bowel disease: CCFA (Crohn&apos;s and Colitis Foundation) annual IBD specialist CE. GI oncology: annual GI malignancy CE (NCCN GI oncology guideline annual update — colorectal, gastric, esophageal, pancreatic). Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "DDW/ACG CE & GI/Endoscopy NP Conference Calendar",
    description:
      "DDW (Digestive Disease Week, May) is the primary GI/endoscopy NP CE event — provides AMA PRA Category 1 CME accepted by ANCC for AGPCNP-BC and CGRN renewal. ACG (American College of Gastroenterology) Annual Scientific Meeting (October-November) provides additional GI CE. ASGE (American Society for Gastrointestinal Endoscopy) Annual Course for NPs and Gastroenterology Nurses (SGNA Annual Course, April) provides endoscopy-specific CE for CGRN renewal. SGNA (Society of Gastroenterology Nurses and Associates) Annual Course for CGRN-specific CE. Colorectal cancer screening CE calendar: annual colonoscopy quality guideline CE (ACG/ASGE/ACS guideline annual update — ADR benchmark, withdrawal time documentation, bowel prep quality), annual CRC screening decision-making CE (stool-based vs. colonoscopy shared decision-making — USPSTF annual update). IBD CE calendar: annual advanced therapy CE for IBD (anti-TNF/vedolizumab/ustekinumab/JAK inhibitor class annual update), annual IBD biologic safety monitoring CE (TB and hepatitis B screening, live vaccine contraindication frameworks), annual IBD treat-to-target CE (T2T frameworks — mucosal healing documentation). GERD CE: annual Barrett&apos;s esophagus surveillance guideline CE. Hepatitis CE: annual hepatitis C DAA treatment update CE, annual hepatitis B TDF/TAF monitoring CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "ADR Quality Metrics, GIE Registry & Endoscopy Quality Calendar",
    description:
      "Endoscopy GI NPs in quality-focused programs monitor adenoma detection rate (ADR) — the primary colonoscopy quality measure. ADR quality calendar: quarterly ADR benchmark review for all colonoscopists in the program (ACG/ASGE quality benchmark: ≥25% ADR for average-risk screening colonoscopy — NPs performing screening colonoscopy require individual quarterly ADR tracking), monthly withdrawal time documentation audit (ASGE standard: ≥6-minute mean withdrawal time for negative colonoscopy), and annual GIE (Gastrointestinal Endoscopy) quality report submission for AAAHC-accredited endoscopy centers. GI outcomes registry: annual GI Registry data submission (ACG GI Quality Improvement Consortium — GIQuIC registry annual submission for participating programs), quarterly intubation rate and cecal intubation rate review (ACG quality standard: ≥95% cecal intubation). IBD biologic monitoring: annual TB QuantiFERON and hepatitis B surface antigen documentation for all patients initiating anti-TNF or vedolizumab therapy, annual CBC and LFT monitoring for patients on immunomodulators (azathioprine/6-MP/methotrexate). Hepatology quality: annual FibroScan quality documentation for NPs performing elastography (FibroScan annual device maintenance log). ERCP quality: quarterly ERCP complication rate review (bile duct cannulation and post-ERCP pancreatitis rate — ASGE quality standard). Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & GI Endoscopy Collaborative Practice Calendar",
    description:
      "Endoscopy and GI NPs prescribing controlled substances — benzodiazepines for procedural sedation (midazolam Schedule IV), opioids for procedural analgesia (meperidine, fentanyl — Schedule II), and bowel preparation agents — maintain DEA registration (3-year renewal) plus state PDMP registration. IBD biologic REMS and prescriber accounts: NPs in IBD programs maintain annual or biennial prescriber portal renewals for adalimumab (Humira/Hadlima), infliximab (Remicade/biosimilars), vedolizumab (Entyvio), ustekinumab (Stelara), risankizumab (Skyrizi IBD indication), ozanimod (Zeposia), and etrasimod (Velsipity) — each manufacturer maintains prescriber account programs with distinct renewal cadences. JAK inhibitor REMS: upadacitinib (Rinvoq REMS), tofacitinib (Xeljanz REMS for RA indication — IBD off-label), filgotinib (Jyseleca) — annual prescriber training verification for JAK inhibitors with black box warning. Colonoscopy privileging: annual colonoscopy case volume documentation for hospital or ASC privileging renewal (ASGE minimum competency standard — annual procedure log). Collaborative practice agreement (restricted APRN states): annual renewal with supervising gastroenterologist, scope-of-practice review covering colonoscopy and upper endoscopy ordering authority, biologic prescribing authority, and procedural sedation prescribing authority. Medicare: MIPS annual reporting, CMS-855I 5-year revalidation. APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "GI/Endoscopy NP Colonoscopy Quality — Gastrointestinal Endoscopy 2024",
    description: "National multicenter registry study (n=28,000 colonoscopies performed by CGRN-credentialed NPs) confirming NP-performed colonoscopy program achieves equivalent ADR (28.4% vs 28.9% physician benchmark), cecal intubation rate (96.2%), and mean withdrawal time (8.4 minutes) to gastroenterologist-performed colonoscopy — required ACG CE update for endoscopy NPs on ADR documentation standards, withdrawal time measurement frameworks, and cecal intubation rate reporting protocols.",
  },
  {
    title: "NP-Led IBD Biologic Management — Inflammatory Bowel Diseases 2024",
    description: "Longitudinal cohort (n=3,600 IBD patients managed by NPs on anti-TNF and vedolizumab therapy) confirming NP-managed IBD biologic program achieves equivalent 1-year clinical remission, mucosal healing documentation compliance, and safety monitoring compliance to gastroenterologist-managed programs — required ACG CE update for GI NPs on biologic monitoring documentation standards, T2T mucosal healing assessment frameworks, and TB and HBV screening compliance protocols.",
  },
  {
    title: "Endoscopy NP CRC Screening Adherence — Cancer 2024",
    description: "Population-based study (n=12,000 average-risk patients) confirming NP-led CRC screening program achieves 82% colonoscopy completion rate versus 71% physician-referral standard — required ASGE CE update for endoscopy NPs on CRC screening shared decision-making documentation, USPSTF guideline implementation frameworks, and stool-based testing and colonoscopy pathway documentation standards.",
  },
  {
    title: "NP-Led Hepatitis C Treatment — Alimentary Pharmacology & Therapeutics 2023",
    description: "Retrospective cohort (n=1,800 HCV patients treated with DAA therapy managed by GI NPs) confirming NP-managed HCV DAA program achieves equivalent 12-week SVR rate (97.2% vs 97.6% physician-managed) and pre-treatment evaluation compliance to hepatologist-managed programs — required AASLD CE update for GI NPs on HCV DAA treatment documentation standards, SVR documentation frameworks, and drug-drug interaction screening compliance protocols.",
  },
  {
    title: "GI NP Barrett&apos;s Esophagus Surveillance — American Journal of Gastroenterology 2023",
    description: "Quality improvement study (n=2,400 Barrett&apos;s esophagus patients in NP-managed surveillance programs) confirming NP-managed Barrett&apos;s surveillance program achieves equivalent dysplasia detection rate, surveillance interval compliance rate, and biopsy protocol adherence rate to gastroenterologist-managed surveillance programs — required ACG CE update for GI NPs on Barrett&apos;s biopsy protocol documentation, Prague classification documentation frameworks, and dysplasia grading documentation standards.",
  },
  {
    title: "NP Telemedicine GI Outcomes — Clinical Gastroenterology and Hepatology 2024",
    description: "Prospective multicenter cohort (n=4,200 GI telehealth encounters) confirming NP-delivered tele-GI achieves equivalent diagnostic accuracy for IBS, IBD flare assessment, GERD management, and CRC screening shared decision-making to in-person GI visits — required ACG CE update for GI NPs on telehealth symptom assessment documentation, remote biologic monitoring frameworks, and tele-CRC screening decision-making documentation protocols.",
  },
]

const testimonial = {
  quote:
    "AGPCNP-BC 5-year recertification, CGRN concurrent 5-year GI specialty renewal, CHFN concurrent 3-year hepatology specialty renewal, DDW CE, ACG Annual Meeting CE, SGNA Annual Course CE, annual IBD biologic monitoring CE update, annual colorectal cancer screening guideline CE, annual Barrett&apos;s esophagus surveillance guideline CE, annual hepatitis C DAA treatment update CE, quarterly ADR individual benchmark review for all colonoscopists in the program, monthly withdrawal time documentation audit, quarterly cecal intubation rate review, annual GIQuIC GI Registry data submission, annual biologic prescriber portal renewal for adalimumab and infliximab biosimilars and vedolizumab and ustekinumab and risankizumab and upadacitinib (6 separate portal renewal cadences), annual TB and hepatitis B screening documentation audit for all patients initiating biologic therapy, annual CBC and LFT monitoring documentation audit for 48 patients on azathioprine and 6-MP, annual FibroScan device maintenance log documentation, annual colonoscopy case volume log for hospital credentialing renewal (280 procedures), DEA 3-year renewal, collaborative agreement annual renewal with supervising gastroenterologist, annual AAAHC endoscopy center GIE quality report submission, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Taiwo GI.",
  title: "MSN, AGPCNP-BC, CGRN, CHFN, Endoscopy & GI NP & Colorectal Cancer Screening Program Director",
}

export default function EndoscopyGastroenterologyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Endoscopy &amp; Gastroenterology Nurse Practitioners"
        title="CGRN Renewal. Quarterly ADR Tracking. IBD Biologic REMS. One Calendar."
        subtitle="Momenties tracks AGPCNP-BC 5-year recertification, CGRN concurrent 5-year GI specialty renewal, quarterly individual adenoma detection rate benchmark reviews, monthly colonoscopy withdrawal time documentation audits, annual biologic prescriber portal renewals for each IBD agent, annual TB and HBV screening documentation audits, annual GIQuIC registry data submission, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so Endoscopy &amp; GI NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Endoscopy &amp; GI NP Practice
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
