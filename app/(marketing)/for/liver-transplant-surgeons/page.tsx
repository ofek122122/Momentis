import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Liver Transplant Surgeons | CME & MOC Tracker",
  description: "Track ABTS hepatic surgery MOC, ASTS liver transplant fellowship CE, UNOS/OPTN annual training, SRTR outcomes reporting deadlines, and multi-organ procurement credentialing in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABTS Hepatic Surgery MOC & ASTS Liver Transplant Fellowship CE",
    body: "Liver transplant surgeons hold ABS General Surgery primary certification and ABTS (American Board of Thoracic Surgery) or ABS subspecialty credentials, typically with a 10-year MOC cycle: 250 CME (125 surgery-specific), Practice Quality Improvement module, and secure 10-year examination. ASTS (American Society of Transplant Surgeons) Liver Transplant Fellowship requires 50 CE per 2-year cycle (25 transplant surgery-specific), annual ASTS Transplant Fellowship Forum participation, and SRTR (Scientific Registry of Transplant Recipients) program outcomes reporting. UNOS/OPTN mandates annual training renewal for all transplant key personnel — a federally regulated CE requirement with a December 31 deadline. ILTS (International Liver Transplantation Society) fellowship CE adds a separate 2-year CE cycle for international active members. Momenties surfaces the rolling annual credit deficit and UNOS deadline separately on one dashboard.",
  },
  {
    icon: Clock,
    title: "Living Donor, Hepatocellular Carcinoma & Machine Perfusion CE",
    body: "Living donor liver transplant CE: A2ALL consortium 10-year long-term donor outcomes (right lobe donation — donor mortality 0.17%, biliary complications 18%), adult-to-adult LDLT — dual-graft techniques, segment 2-3 pediatric LDLT CE. HCC within Milan criteria CE: UNOS T2 criteria (single ≤5cm or 2-3 lesions ≤3cm) — downstaging protocols for HCC beyond Milan (UCSF, UNOS DS criteria 2022), AFP response CE for downstaging qualification (2022 OPTN policy update). Machine perfusion CE: normothermic machine perfusion (NMP) VITTAL trial — viability criteria (lactate <2.5 mmol/L, bile production) CE, hypothermic oxygenated perfusion (HOPE) PILOT trial — extended-criteria donor CE, DCD (donation after circulatory death) liver DHOPE-COR trial — 1-year graft survival improvement CE. MELD allocation CE: MELD-Na score implementation, MELD 3.0 sex-equity update 2022 OPTN policy.",
  },
  {
    icon: BarChart3,
    title: "Immunosuppression, Rejection & Hepatitis CE",
    body: "Immunosuppression CE: TRANSFORM trial — everolimus + reduced tacrolimus 3-year (CNI sparing — GFR preservation CE), BENEFIT trial long-term belatacept versus cyclosporine (ESRD reduction CE for calcineurin inhibitor minimization strategy). Acute rejection CE: DSA (donor-specific antibody) monitoring protocols — solid phase single antigen bead assay frequency CE, Banff 2022 liver rejection histopathology classification update CE (revised T-cell mediated rejection scoring). Hepatitis B prophylaxis CE: HBIG-free protocol CE (2024 AST consensus — entecavir + tenofovir AF without HBIG in HBcAb+ donor), hepatitis C DAA treatment CE for HCV-positive donor to HCV-negative recipient — 12-week DAA treatment protocol, informed consent CE for 2022 OPTN HCV policy update. Primary non-function and EAD (early allograft dysfunction) CE: Lifeport hypothermic perfusion 2-hour pre-implant assessment — AST/ALT prediction CE for discard avoidance.",
  },
  {
    icon: Users,
    title: "UNOS/OPTN Annual Training, SRTR Reporting & Multi-Organ Credentialing",
    body: "UNOS/OPTN annual key personnel training: federally mandated — December 31 deadline for all transplant surgeons at UNOS-approved programs. Non-completion suspends operating approval for the transplant center. Covers organ allocation policy updates, DCD protocol CE, expanded criteria donor acceptance CE. SRTR annual outcomes data submission: due February — program-specific report (PSR) data, risk-adjusted 1-year patient and graft survival CE, waitlist mortality benchmarking. Multi-organ procurement CE: annual NATCO (North American Transplant Coordinators Organization) procurement CE — DCD procurement technique, multi-organ recovery sequence, back-table assessment CE. MELD exception credentialing: HCC downstaging program approval — UNOS regional review board CE for institutional HCC protocol approval. Momenties tracks UNOS annual deadline, SRTR submission window, and ASTS cycle together.",
  },
]

const studies = [
  {
    title: "VITTAL Trial Normothermic Machine Perfusion (Lancet 2024)",
    detail: "NMP versus static cold storage for liver transplantation: peak ALT 379 vs 952 IU/L (p<0.001 — ischemia-reperfusion injury reduction). EAD rate 14% NMP vs 31% SCS. Biliary complication 8% vs 18% at 1 year (p=0.01). CE: NMP viability criteria — lactate <2.5 mmol/L at 4 hours, bile color assessment, arterial flow ≥150 mL/min — accept/reject algorithm for marginal grafts, DCD liver NMP optimization.",
  },
  {
    title: "DHOPE-COR DCD Liver HOPE Trial 2-year (NEJM 2024)",
    detail: "HOPE (hypothermic oxygenated perfusion) versus SCS for DCD livers: 2-year graft survival 86.4% HOPE vs 76.3% SCS (p=0.01). Non-anastomotic biliary strictures 6.4% vs 18.4% (p=0.001). CE: HOPE machine perfusion setup — perfusion temperature 8-12°C, oxygen delivery via portal and arterial cannulation, minimum 2-hour HOPE before implantation, extended HOPE up to 24 hours for high-risk DCD.",
  },
  {
    title: "MELD 3.0 Sex-Equity Update OPTN Policy (2022, 2024 follow-up data)",
    detail: "MELD 3.0 replaces MELD-Na for organ allocation: adds 1.33 points for female sex, revises creatinine and sodium weighting. 2024 OPTN outcomes: female waitlist mortality reduction 20% in first year of MELD 3.0 implementation. CE: MELD 3.0 formula CE — practical calculation differences from MELD-Na, exception scoring under MELD 3.0 for HCC, HPS, PPH, HCC downstaging policy interaction with MELD 3.0.",
  },
  {
    title: "HCV-Positive Donor to Negative Recipient — DAA Protocol (2024 OPTN Policy CE)",
    detail: "OPTN 2022 policy update: DAA treatment for NAT-positive HCV donor to HCV-negative recipient — standard practice with informed consent. 2024 real-world data: 12-week pangenotypic DAA (glecaprevir/pibrentasvir or sofosbuvir/velpatasvir) — SVR12 rate 99.1%. CE: informed consent documentation requirements, monitoring protocol (HCV RNA at 4 weeks post-transplant), insurance coverage CE for DAA therapy authorization.",
  },
  {
    title: "TRANSFORM Trial Everolimus CNI Minimization 3-year (AJT 2024)",
    detail: "Everolimus + reduced tacrolimus versus standard tacrolimus: 3-year eGFR 66.2 vs 56.4 mL/min/1.73m² (p<0.001 — 10-point GFR preservation). Acute rejection equivalent. CE: patient selection for CNI sparing (baseline eGFR, proteinuria, DGF risk), everolimus initiation timing post-transplant (week 4-6), target everolimus trough (3-8 ng/mL) with tacrolimus minimization (target <5 ng/mL).",
  },
  {
    title: "A2ALL Consortium LDLT 10-year Donor Outcomes (HPB 2024)",
    detail: "Right lobe LDLT 10-year donor follow-up: donor mortality 0.17% (1 in 600). Biliary complications 18% at 10 years (22% require ERCP or biliary reconstruction). Quality of life equivalent to matched controls at 10 years. CE: informed consent update — 10-year rather than perioperative risk framing, volumetric assessment by CT volumetry (minimum FLR 30% for right lobe donation), laparoscopic-assisted right lobe donor CE for minimally invasive programs.",
  },
]

export default function LiverTransplantSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Liver Transplant Surgeons"
        title="One Calendar for ABTS MOC, ASTS Fellowship CE, and UNOS Annual Training"
        subtitle="From MELD 3.0 allocation policy CE to SRTR outcomes reporting deadlines — Momenties tracks every federal, board, and fellowship obligation so your transplant program stays compliant."
        cta="Start free — HIPAA-aware"
        ctaHref="/sign-up"
      />

      {/* Four pillars */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              Every Credentialing Obligation, One Calendar
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {pillars.map(({ icon: Icon, title, body }) => (
              <Reveal key={title}>
                <div
                  className="rounded-xl p-8 h-full"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="mb-4 inline-flex items-center justify-center rounded-lg p-3"
                    style={{ background: "rgba(197,163,92,0.12)" }}
                  >
                    <Icon size={22} style={{ color: "#c5a35c" }} />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-semibold" style={{ color: "#f0ece3" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key CE */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-4" style={{ color: "#f0ece3" }}>
              High-Yield CE for Liver Transplant Surgery MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and OPTN policy update before your ABTS, ASTS, or UNOS compliance cycle closes.
            </p>
          </Reveal>
          <div className="space-y-4">
            {studies.map(({ title, detail }) => (
              <Reveal key={title}>
                <div
                  className="rounded-xl p-6"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <h3 className="mb-2 font-semibold text-base" style={{ color: "#c5a35c" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>
                    {detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <blockquote
              className="mb-6 font-display text-2xl font-medium leading-snug"
              style={{ color: "#f0ece3" }}
            >
              &ldquo;Between ABTS MOC, ASTS fellowship CE, the UNOS December deadline, and our SRTR February submission — plus the machine perfusion CE that became required after we added NMP to our program — I was managing five separate compliance calendars. Momenties consolidated all of them. The UNOS deadline alert alone made it worth it.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Andrei V., MD, FACS, FAST
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Liver Transplant Surgery, UNOS-Approved Academic Transplant Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss a UNOS annual training, SRTR reporting, or ASTS CE deadline again"
        subtitle="Momenties keeps every CME credit, federal compliance deadline, and transplant fellowship requirement in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
