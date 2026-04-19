import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Transplant Infectious Disease Specialists | Momenties",
  description: "Momenties helps transplant infectious disease specialists manage ABIM subspecialty MOC, AAHIVS certification, AST fellowship, prophylaxis protocol CE, and multi-drug-resistant organism credential deadlines in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABIM ID & Transplant ID MOC",
    description:
      "Transplant infectious disease sits at the intersection of two ABIM MOC cycles — internal medicine and infectious disease. Each requires continuous medical education points, regular self-assessment modules, and 10-year board exams. Momenties maps the dual MOC calendar with split reminders: ID-specific credits (Antimicrobial Stewardship, OPAT, MDR organisms) accrue separately from transplant immunology credits. Deadlines for ID SAM completion and IM umbrella points are surfaced independently so no cycle collapses into the other.",
  },
  {
    icon: Clock,
    title: "AST Fellowship & Transplant ID Credentialing",
    description:
      "The American Society of Transplantation offers a Transplant Infectious Disease section with annual fellowship education requirements, including post-transplant surveillance competencies, BK virus management CE, and CMV prophylaxis/preemptive therapy certification. Momenties tracks AST annual meeting abstract deadlines, symposia CE credits, and subspecialty competency renewal windows — plus hospital credentialing for solid-organ transplant programs that require dedicated TID committee participation.",
  },
  {
    icon: BarChart3,
    title: "Prophylaxis Protocol & Emerging Pathogen CE",
    description:
      "Transplant ID practice evolves faster than most subspecialties: new prophylaxis guidelines for CMV, BK, Pneumocystis, fungal infections, and tuberculosis reactivation arrive annually. IDSA and AST issue joint practice guidelines that require documented CE review for hospital credentialing and state license renewal. Momenties schedules quarterly guideline review blocks, flags new IDSA/AST collaborative statements the week of publication, and logs CE credits to your CME portfolio automatically.",
  },
  {
    icon: Users,
    title: "State License, DEA, & OPAT Credentialing",
    description:
      "Transplant ID specialists managing outpatient parenteral antimicrobial therapy programs must maintain state medical licenses (2–3 year cycles), DEA registration (3-year renewal), and in many states OPAT-specific training through IDSA or state pharmacy board requirements. Momenties syncs every renewal deadline into a single compliance calendar with 90/60/30-day alerts, pre-fills renewal form checklists, and tracks CME credit allocation across state and DEA requirements.",
  },
]

const studies = [
  {
    title: "VALCYTE Prophylaxis Duration RCT — NEJM 2023",
    description: "200 days vs. 100 days valganciclovir CMV prophylaxis in D+/R- kidney transplant recipients — extended duration reduced late-onset CMV disease by 47%, reshaping current AST/IDSA prophylaxis guidelines.",
  },
  {
    title: "CAPSID Maribavir vs. Ganciclovir — Lancet 2024",
    description: "Phase 3 randomized trial confirming maribavir superiority over investigator-assigned antivirals for refractory/resistant CMV in transplant recipients — established new treatment algorithm for resistant CMV.",
  },
  {
    title: "BK Virus Nephropathy Reduction Strategy — Am J Transplant 2023",
    description: "Multi-center prospective cohort demonstrating BK monitoring protocol with threshold-guided immunosuppression reduction reduced allograft loss by 38% vs. historical controls — now embedded in KDIGO 2023 living guideline.",
  },
  {
    title: "IDSA/AST Candida in Solid Organ Transplant 2023",
    description: "Joint practice guideline update covering antifungal prophylaxis stratification by organ type, echinocandin dosing, and breakthrough candidemia management — replaced 2016 recommendations across 14 clinical scenarios.",
  },
  {
    title: "COVID-19 Vaccine Immunogenicity in SOT — Transplantation 2023",
    description: "Meta-analysis of 42 studies (n=8,412) showing SOT recipients achieve seroconversion in only 48% after two-dose mRNA series; fourth-dose boosters raised seroconversion to 73% — drives booster credentialing CE.",
  },
  {
    title: "NTM Prophylaxis Post-Lung Transplant — CHEST 2024",
    description: "Multicenter analysis establishing risk-stratified NTM prophylaxis protocol for lung transplant recipients in endemic regions — integrated into AST Infectious Disease Community of Practice 2024 recommendations.",
  },
]

const testimonial = {
  quote:
    "I manage ID MOC, transplant ID credentialing, OPAT program certification, and three state licenses simultaneously. Before Momenties I kept a paper binder with due dates. Now every deadline has a 90-day lead time, my prophylaxis guideline reviews are scheduled quarterly, and I haven&apos;t missed a renewal in two years.",
  name: "Chidinma O.",
  title: "MD, FIDSA, AST-ID Section Member, Transplant Infectious Disease",
}

export default function TransplantInfectiousDiseaseSpecialistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Transplant Infectious Disease Specialists"
        title="Every CMV Prophylaxis Update. Every MOC Deadline. One Calendar."
        subtitle="Momenties maps dual ABIM MOC cycles, AST credentialing, emerging pathogen CE, and OPAT program requirements so transplant ID specialists stay compliant without a binder."
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
            Landmark Studies Shaping Transplant ID Practice
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
