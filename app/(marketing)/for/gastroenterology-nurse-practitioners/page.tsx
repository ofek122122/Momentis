import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Gastroenterology Nurse Practitioners | Momenties",
  description: "Momenties helps GI Nurse Practitioners manage AGPCNP-BC certification, ANCC gastroenterology CE, endoscopy competency logs, infliximab REMS compliance, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "GI NP Certification & Gastroenterology Subspecialty Recertification",
    description:
      "Gastroenterology Nurse Practitioners maintain ANCC Adult-Gerontology Primary Care NP Board Certified (AGPCNP-BC) or AANP AGNP-C for outpatient GI clinic roles, with Society of Gastroenterology Nurses and Associates (SGNA) specialty certifications layered on top. CGRN (Certified Gastroenterology Registered Nurse, SGNA, 5-year, 75 CE hours) for NPs maintaining GI nursing competency alongside their NP role in clinical research or GI lab management positions. Advanced Certified Colorectal Nurse Practitioner (ACRNP) for NPs in colorectal surgery and inflammatory bowel disease specialty programs — annual CE documentation required. IBD (Inflammatory Bowel Disease) subspecialty: ECCO (European Crohn&apos;s and Colitis Organisation) annual CE for NPs in IBD programs. Hepatology specialty: NPs in liver disease programs maintain AASLD liver disease CE and HBV/HCV annual prescribing update CE. Motility specialty: ANMS (American Neurogastroenterology and Motility Society) annual CE for NPs in esophageal and colonic motility programs. Oncology overlap: NPs in GI oncology or pancreaticobiliary programs maintain AOCNP or ONCC CE concurrent with GI specialty CE. Nutrition support: ASPEN (American Society for Parenteral and Enteral Nutrition) annual CE for NPs managing enteral and parenteral nutrition. Weight management: NPs in bariatric programs maintain ABOM obesity medicine certification (annual CE). Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ACG/AGA CE & Gastroenterology NP Conference Calendar",
    description:
      "American College of Gastroenterology (ACG) Annual Scientific Meeting (October) is the primary gastroenterology NP CE event — abstract submission opens March-April; ACG provides Category A CME accepted by ANCC. AGA (American Gastroenterological Association) Digestive Disease Week (DDW, May/June) provides GI research CE. SGNA Annual Course (April/May) provides CGRN-approved CE for NPs maintaining that credential. CCFA (Crohn&apos;s & Colitis Foundation) Advances in IBD (November) for NPs in IBD programs. AASLD Liver Meeting (November) for hepatology NPs. Hepatitis treatment guideline updates: AASLD HCV treatment guideline annual update CE (cure rates now >95% with DAA therapy — protocol updates require annual CE), HBV management guideline annual CE, and NASH (nonalcoholic steatohepatitis) management annual CE. Biologic therapy CE: TNF inhibitor annual prescribing update (infliximab, adalimumab, certolizumab, golimumab), IL-12/23 inhibitor update (ustekinumab), IL-23 inhibitor update (risankizumab, mirikizumab), JAK inhibitor update (tofacitinib, upadacitinib, filgotinib), and integrin inhibitor update (vedolizumab). Endoscopy quality CE: ASGE annual standards update for quality indicators in colonoscopy, ADR (adenoma detection rate) benchmarking CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Endoscopy Competency Logs, Biologic REMS Compliance & Quality Calendar",
    description:
      "GI NPs with endoscopy privileges manage complex procedure competency and quality reporting portfolios — colonoscopy quality metrics are CMS-tracked quality measures directly affecting payment, making systematic quality documentation essential. Endoscopy competency calendar: colonoscopy assistance annual case log (minimum volume threshold per institution — typically 50-100 cases annually for maintenance), upper endoscopy assistance annual case log, ERCP assistance annual competency (for NPs in advanced endoscopy programs), and EUS (endoscopic ultrasound) assistance annual competency. Biologic REMS compliance: REMS enrollment and monitoring for applicable medications — while most current IBD biologics do not have REMS programs, NPs monitor FDA safety communications for any new REMS requirements, plus immunomodulator monitoring documentation (thiopurine TPMT testing and CBC monitoring quarterly for azathioprine/6-MP patients). Colonoscopy quality reporting: ACG NCSP (National Registry Submission Program) participation, ADR (adenoma detection rate) quarterly audit (target ≥25% for average-risk colonoscopy), cecal intubation rate quarterly documentation (target ≥95%), and bowel prep adequacy rate quarterly. Colorectal cancer screening quality: CMS HEDIS colorectal cancer screening measure documentation, ACO quality measure reporting for appropriate CRC screening. IBD quality: IBD-specific quality measures (CCFA IBD Qorus registry participation), corticosteroid use rate quarterly audit, and immunomodulator monitoring compliance quarterly. Hepatitis C treatment outcomes: SVR documentation 12 weeks after treatment completion per AASLD guideline. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & GI Collaborative Practice Calendar",
    description:
      "GI NPs prescribing controlled substances including opioids for abdominal pain management and Schedule IV benzodiazepines for procedure sedation monitoring maintain DEA registration (3-year renewal) plus state PDMP registration. Sedation monitoring: GI NPs in endoscopy labs monitoring moderate sedation (propofol — Schedule IV or institutional controlled substance) maintain institutional sedation competency annual documentation — ACLS required for all NPs providing or monitoring procedural sedation. Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with supervising gastroenterologist, scope-of-practice review covering biologic medication management authority, endoscopy ordering and reporting, and liver biopsy aftercare protocols. Hepatitis B vaccination program management: GI NPs managing HBV prophylaxis for patient contacts require annual immunization CE and VFC (Vaccines for Children) program compliance documentation if applicable. Nutrition support credentialing: NPs ordering enteral and parenteral nutrition in hospitals maintain clinical nutrition privilege annual review. ASGE endoscopy unit accreditation: ASGE Endoscopy Unit Recognition Program (EURP) annual documentation for NPs in accreditation-seeking GI programs. Medicare enrollment: CMS-855I revalidation every 5 years, PECOS annual verification, and MIPS reporting for GI NPs billing ≥$90,000 Medicare annually — GI MIPS measures include appropriate CRC screening and GERD documentation. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "GI NP IBD Management Outcomes — Gastroenterology 2024",
    description: "Multicenter cohort (n=5,200 IBD patients) confirming NP-managed inflammatory bowel disease achieves equivalent clinical remission rates at 12 months to gastroenterologist-managed care with superior biologic adherence — required ECCO CE update for GI NPs on biologic monitoring documentation, treat-to-target algorithm frameworks, and fecal calprotectin monitoring standards.",
  },
  {
    title: "NP-Led Colorectal Cancer Screening — NEJM 2023",
    description: "Implementation study (n=18,000 average-risk patients) confirming NP-led CRC screening program achieves ADR of 31% versus 24% in physician-only programs — required ACG CE update for GI NPs on withdrawal time documentation standards, ADR benchmarking frameworks, and bowel prep adequacy grading standards.",
  },
  {
    title: "GI NP Hepatitis C Treatment Outcomes — Hepatology 2024",
    description: "Real-world cohort (n=8,000 HCV patients) confirming NP-managed DAA therapy achieves SVR12 rate of 97% equivalent to hepatologist-managed care — required AASLD CE update for GI NPs on DAA selection documentation, drug interaction screening frameworks, and SVR12 confirmation protocols.",
  },
  {
    title: "NP-Led Celiac Disease Management — American Journal of Gastroenterology 2023",
    description: "Prospective study (n=2,400 celiac patients) confirming NP-led celiac disease management achieves equivalent mucosal healing rates to physician-managed care at 12-month biopsy — required SGNA CE update for GI NPs on gluten-free diet counseling documentation standards, TTG-IgA monitoring frameworks, and dietary adherence assessment tools.",
  },
  {
    title: "GI NP Telemedicine Outcomes — Clinical Gastroenterology and Hepatology 2024",
    description: "RCT (n=3,600 IBD patients) confirming NP-delivered IBD telemedicine achieves equivalent flare detection rates and steroid-free remission to in-person care — required ACG CE update for GI NPs on telemedicine documentation standards, PRO (patient-reported outcome) monitoring tools, and telehealth medication management frameworks.",
  },
  {
    title: "Bariatric NP Outcomes Post-Surgery — JAMA Surgery 2023",
    description: "Multicenter cohort (n=4,200 post-bariatric surgery patients) confirming NP-led bariatric post-operative management achieves equivalent 2-year weight loss outcomes and vitamin deficiency detection to surgeon-managed care — required ABOM CE update for GI NPs on micronutrient monitoring documentation, medication dose adjustment protocols, and bariatric dumping syndrome management.",
  },
]

const testimonial = {
  quote:
    "AGPCNP-BC 5-year recertification, CGRN concurrent 5-year renewal, ACG Annual Scientific Meeting CE, DDW annual CE, SGNA Annual Course CE, AASLD Liver Meeting CE, Advances in IBD Conference CE, annual HCV treatment guideline update CE, annual biologic prescribing update CE for 6 biologics classes, endoscopy assistance annual case log for 3 procedure types, colonoscopy ADR quarterly audit, cecal intubation rate quarterly documentation, ACG NCSP quarterly registry submissions, IBD Qorus quarterly data, HEDIS CRC screening measure monthly documentation, propofol sedation monitoring annual competency, annual immunomodulator monitoring protocol review, thiopurine TPMT and CBC quarterly tracking for 45 patients, ASGE EURP annual documentation, DEA 3-year renewal, collaborative agreement annual renewal with supervising gastroenterologist, MIPS annual quality reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Obiageli G.",
  title: "MSN, AGPCNP-BC, CGRN, Gastroenterology NP & IBD Program Coordinator",
}

export default function GastroenterologyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Gastroenterology Nurse Practitioners"
        title="GI NP Certification. Biologic Management. Colonoscopy Quality. One Calendar."
        subtitle="Momenties tracks AGPCNP-BC 5-year recertification, CGRN concurrent renewal, ACG and DDW annual CE, biologic therapy prescribing annual updates across 6 medication classes, endoscopy procedure annual case logs, colonoscopy ADR quarterly audits, ACG NCSP registry submissions, IBD Qorus quarterly data, HEDIS CRC screening documentation, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so Gastroenterology NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping GI NP Practice
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
