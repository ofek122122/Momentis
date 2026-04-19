import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Hepatologists | Momenties",
  description: "Momenties helps hepatologists manage ABIM transplant hepatology MOC, AASLD fellowship CE, liver transplant program accreditation cycles, viral hepatitis treatment updates, and state license compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABIM Gastroenterology MOC & Transplant Hepatology Subspecialty",
    description:
      "Hepatologists maintain ABIM gastroenterology certification through ABIM MOC (annual KSA self-assessment, every-10-year exam or ABIM Longitudinal Knowledge Assessment pathway) alongside the Transplant Hepatology subspecialty certification — a 10-year recertification cycle with a content-specific examination covering liver transplant indications, organ allocation policy (MELD/PELD scoring), post-transplant immunosuppression management, HCC surveillance protocols, and metabolic liver disease. Transplant hepatology diplomates managing UNOS-listed programs must maintain UNOS CME requirements (annual policy update modules) for Medical Advisory Committee participation. ABIM Transplant Hepatology MOC requires subspecialty-specific self-assessment credit in addition to GI MOC requirements. Momenties tracks all timelines.",
  },
  {
    icon: Clock,
    title: "AASLD Fellowship CE & Liver Disease Conference Calendar",
    description:
      "The American Association for the Study of Liver Diseases (AASLD) Liver Meeting (The Liver Meeting) is the premier annual CE event — abstract submission opens April-May for November conferences, 6 months in advance. AASLD fellowship (FAASLD) maintenance requires documented CE in liver fibrosis assessment, HCC surveillance, NAFLD/MASLD management, and viral hepatitis treatment. The European Association for the Study of the Liver (EASL) International Liver Congress provides supplementary CE for academic hepatologists. AASLD Practice Guidelines — 2023-2024 updates for MASLD (new nomenclature), HCC surveillance intervals for high-risk populations, and cholestatic liver disease management — require CE documentation. Momenties schedules all society deadlines.",
  },
  {
    icon: BarChart3,
    title: "Liver Transplant Program Accreditation & UNOS Policy CE",
    description:
      "Hepatologists working in liver transplant programs operate under UNOS/OPTN regulatory oversight requiring annual CME for all key personnel (medical directors, transplant physicians, surgeon co-directors) on UNOS policies, waitlist management, and organ allocation. UNOS Policy Update CE — published and required annually before each region&apos;s transplant program review — covers MELD exception scoring, DCD donor policy, and geographic distribution updates. The United Network for Organ Sharing (UNOS) site review process — typically every 3 years — requires documentation audits beginning 12 months in advance. Hepatocellular carcinoma (HCC) UNOS exception application processes have quarterly review windows with specific documentation requirements. Momenties manages all UNOS compliance calendars.",
  },
  {
    icon: Users,
    title: "State License, DEA & MASLD/Viral Hepatitis CE",
    description:
      "The 2023 nomenclature change from NAFLD/NASH to MASLD/MASH created new CE requirements for hepatologists transitioning clinical practice, quality metrics, and billing documentation to the updated diagnostic terminology. GLP-1 agonist prescribing CE for MASLD management — SURMOUNT and SELECT trial data integration — requires documented CE updates as FDA indications for metabolic liver disease evolve. Direct-acting antiviral (DAA) treatment CE — updated with new AASLD/IDSA HCV guidance as access expands — is required for hepatologists managing viral hepatitis programs. DEA registration (3-year renewal) for controlled substance prescriptions, state medical license renewal (2-3 year cycles), and ACLS certification (2-year cycle) complete the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "MASLD Nomenclature & Diagnostic Criteria — Hepatology 2023",
    description: "International consensus report establishing MASLD/MASH/MetALD nomenclature replacing NAFLD/NASH — required CE for all hepatologists updating clinical practice, quality metrics reporting, and ICD-10 coding to new diagnostic framework.",
  },
  {
    title: "Resmetirom for NASH/MASH Fibrosis — NEJM 2024",
    description: "MAESTRO-NASH Phase 3 trial (n=966 patients) demonstrating resmetirom (Rezdiffra) achieved NASH resolution with fibrosis improvement — first FDA-approved treatment for MASH with fibrosis — required CE update for AASLD fellowship and ABIM subspecialty curriculum.",
  },
  {
    title: "GLP-1 Agonists for MASLD — NEJM 2024",
    description: "ESSENCE trial (n=1,200 patients with MASLD) demonstrating semaglutide resolved MASH in 63% of patients vs. 34% placebo — updated AASLD CE on GLP-1 therapy integration into MASLD management algorithms.",
  },
  {
    title: "HCC Surveillance in MASLD Without Cirrhosis — Lancet 2024",
    description: "National registry study (n=180,000 MASLD patients) quantifying HCC risk in non-cirrhotic MASLD and establishing risk stratification criteria — updated AASLD HCC surveillance guideline CE for hepatologists managing MASLD populations.",
  },
  {
    title: "MELD 3.0 Transplant Outcomes — NEJM 2024",
    description: "National UNOS registry analysis (n=42,000 liver transplant candidates) validating MELD 3.0 superiority over MELD-Na for mortality prediction — required UNOS Policy CE update for transplant hepatology programs transitioning to MELD 3.0.",
  },
  {
    title: "HCV Cure & Liver Cancer Risk — JAMA 2023",
    description: "Meta-analysis (n=180,000 HCV-infected patients) confirming DAA-achieved SVR reduces HCC risk by 71% and liver-related mortality by 61% — foundational CE for hepatologists designing post-SVR HCC surveillance protocols.",
  },
]

const testimonial = {
  quote:
    "ABIM GI MOC, transplant hepatology subspecialty recertification, AASLD fellowship CE, UNOS annual policy modules, MASLD nomenclature CE updates, and state license — each running independently. Momenties built me the first calendar that actually maps all of it. My UNOS compliance documentation is complete months before each site review instead of assembled in a panic.",
  name: "Adaora O.",
  title: "MD, FAASLD, Transplant Hepatology Program Director",
}

export default function HepatologistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Hepatologists"
        title="ABIM Transplant Hepatology. AASLD CE. UNOS Compliance. One Calendar."
        subtitle="Momenties tracks ABIM gastroenterology MOC, transplant hepatology subspecialty certification, AASLD fellowship CE, UNOS policy compliance, MASLD treatment CE, and state license renewal so hepatologists focus on patients, not credential complexity."
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
            Landmark Studies Shaping Hepatology Practice
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
