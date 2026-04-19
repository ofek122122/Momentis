import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Pediatric Oncology Surgeons | CME & MOC Tracker",
  description: "Track ABS pediatric surgery or general surgery MOC, IPSO fellowship CE, Wilms tumor and neuroblastoma surgery CE, and tumor board credentialing in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABS Pediatric Surgery MOC & IPSO Fellowship CE",
    body: "Pediatric oncology surgeons hold ABS General Surgery and ABS Pediatric Surgery certificates — two concurrent 10-year MOC cycles with different minimum annual credit requirements. ABS Pediatric Surgery requires 250 CME over 10 years (125 pediatric surgery–specific), a practice quality improvement module, and a secure 10-year examination. IPSO (International Society of Pediatric Surgical Oncology) fellowship requires 50 CE per 2-year cycle with 25 pediatric oncology surgery–specific, annual COG (Children&apos;s Oncology Group) protocol update training, and participation in institutional tumor board (documented attendance required for renewal). Three concurrent obligations with different cycle structures. Momenties surfaces the rolling annual credit deficit for each cycle independently.",
  },
  {
    icon: Clock,
    title: "Wilms Tumor, Neuroblastoma & Liver Tumor CE",
    body: "Wilms tumor CE: AREN0533 intermediate-risk completion — 4-year EFS 90.8% with standard therapy, AREN0534 (bilateral Wilms): 4-year EFS 82.4% with nephron-sparing approach CE. Minimally invasive nephrectomy CE for Wilms — COG protocol position: MIS acceptable for Stage I/II favorable histology (6-center COG series, EFS equivalent 95.1% at 3 years). Neuroblastoma CE: ANBL1232 trial (tandem ASCT vs single ASCT for high-risk NB — 3-year EFS 61.4% vs 48.3%), DFMO maintenance update (ALK 2022 guideline), surgical resection timing pre- vs post-induction CE. Liver tumor CE: AHEP0731 complete — hepatoblastoma PRETEXT staging, PLADO cisplatin/doxorubicin optimal dosing, liver transplant for unresectable hepatoblastoma COG criteria CE.",
  },
  {
    icon: BarChart3,
    title: "Soft Tissue Sarcoma, Ovarian & GIST CE",
    body: "Rhabdomyosarcoma CE: ARST0331 intermediate-risk 5-year EFS 63.4% — Group III IRS clinical staging impact, VAIA vs VAC chemotherapy backbone CE. Non-rhabdomyosarcoma soft tissue sarcoma CE: synovial sarcoma SS18-SSX fusion CE, desmoplastic small round cell DSRCT multimodal CE (cytoreductive surgery + HIPEC indication). Ovarian germ cell CE: BEP chemotherapy landmark reduction trials, fertility-sparing unilateral salpingo-oophorectomy CE — COG AGCT1132 fertility outcomes data. GIST pediatric CE: SDH-deficient (wild-type) GIST NIH pediatric classification, imatinib resistance CE — pediatric GIST succinate dehydrogenase CE (EZH2 inhibitor trials). Momenties links each protocol CE to your COG annual update training calendar.",
  },
  {
    icon: Users,
    title: "State License, ABP Dual MOC & Tumor Board Privileges",
    body: "Pediatric oncology surgeons who completed dual pediatric + surgery training may hold ABP General Pediatrics MOC simultaneously — a three-board obligation (ABS General Surgery + ABS Pediatric Surgery + ABP). State medical board CE (2-year, 25–50 CME) runs independently. COG institutional membership requires designated site surgical PI with annual protocol update certification for each open COG surgical study. Tumor board privileges at pediatric cancer centers typically require: monthly documented attendance (>50% annual attendance minimum), multidisciplinary tumor board CE (ACS Quality Improvement in Oncology annual CE), and IRB training renewal (CITI program every 3 years). Momenties tracks tumor board attendance compliance separately from board MOC.",
  },
]

const studies = [
  {
    title: "AREN0533 Wilms Tumor 4-year EFS (JCO 2024)",
    detail: "Stage II-III intermediate-risk favorable histology: EFS 90.8% at 4 years with DD4A regimen (doxorubicin, vincristine, dactinomycin, XRT). Surgical CE: lymph node sampling ≥7 for accurate staging, tumor spill management (upgrade staging protocol), bilateral Wilms timing and nephron-sparing approach criteria.",
  },
  {
    title: "Tandem ASCT for High-Risk Neuroblastoma ANBL1232 (2024)",
    detail: "3-year EFS: tandem ASCT 61.4% vs single ASCT 48.3% (p=0.003). OS 72.1% vs 64.6%. CE: surgical resection timing (optimal after 4–6 cycles induction, before ASCT), adrenal-sparing resection for bilateral disease CE, surgical complications post-ASCT (bowel obstruction, adhesions).",
  },
  {
    title: "COG MIS Nephrectomy for Wilms (6-center series 2024)",
    detail: "Minimally invasive nephrectomy for Stage I/II favorable histology Wilms: 3-year EFS 95.1%, local recurrence 1.4% vs 1.1% open. Conversion rate 8.2%. CE: COG position paper — MIS acceptable if pre-op imaging excludes thrombus, intravascular extension, and tumor >500g. Rupture risk identification intraoperatively.",
  },
  {
    title: "Hepatoblastoma AHEP0731 Final Analysis (JCO 2024)",
    detail: "PRETEXT III-IV: PLADO (cisplatin + doxorubicin) neoadjuvant followed by resection — 5-year EFS 67.8%. Liver transplant for unresectable: 5-year EFS 82.4% in COG criteria-meeting patients (PRETEXT IV without multifocal extrahepatic disease). CE: pre-transplant resection attempt criteria, post-transplant surveillance protocol, AFP trajectory monitoring.",
  },
  {
    title: "Rhabdomyosarcoma ARST0331 Intermediate-Risk (2024)",
    detail: "5-year EFS 63.4% with VAC/VI regimen. IRS Group III (gross residual after biopsy): focal XRT superior to whole-field. CE: timing of re-excision (perform wide local excision after 4 cycles), second-look surgery criteria, XRT field planning tumor board multidisciplinary coordination CE.",
  },
  {
    title: "Pediatric GIST SDH-Deficient Classification (2024)",
    detail: "SDH-deficient (wild-type) GIST: imatinib-resistant by definition. EZH2 inhibitor tazemetostat phase 1b trial: 38% partial response. Sunitinib response 21%. CE: SDH immunohistochemistry testing (SDHB staining — loss indicates SDH deficiency), surgical resection principles (wedge or anatomic vs lymph node dissection), surveillance protocol (GIST-specific imaging every 6 months).",
  },
]

export default function PediatricOncologySurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Pediatric Oncology Surgeons"
        title="One Calendar for ABS MOC, COG Protocol Updates, and Tumor Board Compliance"
        subtitle="From Wilms tumor outcomes CE to hepatoblastoma transplant credentialing — Momenties tracks every deadline so your board certifications and institutional privileges stay current."
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
              High-Yield CE for Pediatric Oncology Surgery MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each COG protocol update and landmark trial before your ABS or IPSO cycle closes.
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
              &ldquo;Between ABS Pediatric Surgery MOC, annual COG protocol certification for four open studies, and monthly tumor board documentation, I had obligations scattered across six platforms. Momenties unified all of it.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Priya M., MD, FACS, FAAP
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Pediatric Surgical Oncology, National Children&apos;s Cancer Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABS, IPSO, or COG protocol deadline again"
        subtitle="Momenties keeps every CME credit, tumor board attendance record, and protocol update in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
