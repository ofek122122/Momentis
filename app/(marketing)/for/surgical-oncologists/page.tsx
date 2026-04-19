import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Surgical Oncologists | CME & MOC Tracker",
  description: "Track ABS general surgery MOC, SSO fellowship CE, melanoma and sarcoma surgery CE, sentinel lymph node CE, and multidisciplinary tumor board credentialing in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABS General Surgery MOC & SSO Fellowship CE",
    body: "Surgical oncologists hold ABS General Surgery certificates with a 10-year MOC cycle: 250 CME (125 general surgery–specific), a Practice Quality Improvement module, and a secure 10-year examination. SSO (Society of Surgical Oncology) fellowship in Surgical Oncology requires 50 CE per 2-year cycle (25 surgical oncology–specific), annual SSO meeting participation or equivalent CE documentation, and NCDB (National Cancer Data Base) or institutional oncology database outcomes reporting. AHPBA, ASCRS, or SGO subspecialty fellowships add their own 2-year CE cycles. Tumor board participation is documented separately for hospital credentialing. Momenties surfaces the rolling annual credit deficit for each cycle on one dashboard.",
  },
  {
    icon: Clock,
    title: "Melanoma, Skin Cancer & Sentinel Lymph Node CE",
    body: "Melanoma CE: MSLT-II final analysis — complete lymph node dissection (CLND) vs sentinel node observation (no OS benefit for CLND, SLNB-positive melanoma observation standard); stage-specific adjuvant therapy CE (pembrolizumab KEYNOTE-716 stage IIB/IIC, nivolumab CheckMate-76K — integration into surgical follow-up calendar). Merkel cell CE: avelumab FDA 2017 adjuvant — 3-year DFS CE update. Sentinel lymph node CE: 2024 NCCN update — SLNB criteria for melanoma thickness and ulceration, SLNB for head and neck melanoma (negative predictive value 96.1% for SLNB-negative). Skin-sparing mastectomy CE: oncoplastic CE for skin cancer reconstruction, Mohs micrographic surgery collaboration protocol. HIPEC CE for peritoneal sarcomatosis: peritoneal carcinomatosis from appendiceal and CRC — PRODIGE-7 negative for CRC vs positive for appendiceal indication.",
  },
  {
    icon: BarChart3,
    title: "Soft Tissue Sarcoma, Breast & Hepatic Oncology CE",
    body: "Sarcoma CE: ACOSOG Z9001 (high-risk GIST adjuvant imatinib 3 years — new 5-year analysis CE), radiation CE for retroperitoneal sarcoma (STRASS RCT — preoperative RT no DFS benefit for liposarcoma, leiomyosarcoma), retroperitoneal sarcoma multivisceral resection CE (STRASS-2 organ involvement strategy). Breast surgical CE: ACOSOG Z0011 10-year (positive SLNB, no ALND — OS equivalent in T1-2 N1 with 1-2 positive nodes), SOUND trial (axillary US negative → no SLNB in selected T1 cN0 CE). Hepatic metastasectomy CE: EPOC trial oxaliplatin + hepatic resection colorectal mets 5-year, simultaneous vs staged resection of synchronous hepatic CRC mets CE.",
  },
  {
    icon: Users,
    title: "State License, Tumor Board & Oncology Credentialing",
    body: "State medical board CE (2-year, 25–50 CME) runs independently from ABS MOC. NCDB data submission: ACS-CoC accredited programs require annual Commission on Cancer (CoC) standards compliance CE including tumor registry CE and multidisciplinary tumor board participation (minimum 75% of required cancer conferences annually). Tumor board privileges: most NCI-designated cancer centers require documented tumor board attendance (>50% annual attendance) and multidisciplinary oncology CE (ASCO MOGA modules, NCCN guideline attestation). AHNS sarcoma or melanoma subspecialty credentialing if held: 10 proctored cases before independent neck dissection or modified radical lymph node dissection for melanoma at some centers. Momenties tracks CoC compliance, tumor board attendance, and NCCN guideline CE together with ABS and SSO cycles.",
  },
]

const studies = [
  {
    title: "MSLT-II Final Analysis 10-year (NEJM 2024)",
    detail: "SLNB-positive melanoma: CLND vs observation. Melanoma-specific survival: equivalent 86.4% vs 86.8% at 10 years. Regional recurrence: 18% CLND vs 27% observation (p=0.001 — more regional recurrence with observation, but no OS benefit). CE: informed consent for CLND vs observation, surveillance protocol for observation arm (6-month US), stage-specific adjuvant therapy trigger criteria.",
  },
  {
    title: "KEYNOTE-716 Pembrolizumab Stage IIB/IIC (JCO 2024)",
    detail: "Adjuvant pembrolizumab vs placebo in resected stage IIB/IIC melanoma: 3-year DMFS 84.4% vs 74.7% (p=0.0006). DFS improvement maintained. CE: staging update post-KEYNOTE-716 (stage IIB/IIC now treated adjuvantly like stage III), patient counseling on immune-related AEs, multidisciplinary handoff to medical oncology timing post-resection.",
  },
  {
    title: "ACOSOG Z0011 10-year ALND Update (JAMA Surg 2024)",
    detail: "T1-2 N1 breast cancer (1-2 positive SLNB): ALND vs observation. 10-year OS equivalent 86.3% vs 83.6%. Regional recurrence 1.5% vs 0.5% (p=0.02 — more regional recurrence without ALND, but no impact on survival). CE: Z0011 criteria — applicability requires whole-breast IMRT, no neoadjuvant, sentinel node not matted; updated patient selection algorithm for 3+ positive nodes.",
  },
  {
    title: "STRASS-2 Retroperitoneal Sarcoma (Lancet Oncol 2024)",
    detail: "Preoperative RT for well-differentiated/dedifferentiated retroperitoneal liposarcoma: no ABDR improvement in STRASS. STRASS-2: adding RT to aggressive surgery — ongoing, interim suggests tumor histology determines RT benefit (leiomyosarcoma may benefit, liposarcoma no). CE: multivisceral resection of retroperitoneal sarcoma — when to include adjacent organ CE, intraperitoneal hyperthermic perfusion for peritoneal sarcomatosis.",
  },
  {
    title: "SOUND Trial — No SLNB in T1 cN0 Breast Cancer (NEJM 2023, follow-up 2024)",
    detail: "Axillary US negative + T1 cN0 breast cancer: no SLNB vs SLNB. 5-year IDFS 95.7% no-SLNB vs 97.1% SLNB (non-inferior). Regional recurrence equivalent. CE: SOUND eligibility — cT1 (≤2cm), US-negative axilla, no palpable nodes, any receptor subtype — surgeon discretion in ER+ HER2− population. Pre-operative axillary US quality standards.",
  },
  {
    title: "EPOC Trial Oxaliplatin + Hepatic Resection CRC Mets 5-year (2024)",
    detail: "Perioperative FOLFOX vs surgery alone for resectable CRC hepatic mets: 5-year OS 51.2% FOLFOX vs 49.5% surgery (not significant). PFS: FOLFOX 39.8% vs 29.5% (p=0.04). CE: perioperative chemotherapy toxicity reducing resectability (hepatic sinusoidal injury 20–30% FOLFOX), patient selection algorithm — low-risk mets (1-2 small, synchronous, good KRAS status) may not benefit from chemotherapy.",
  },
]

export default function SurgicalOncologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Surgical Oncologists"
        title="One Calendar for ABS MOC, SSO Fellowship CE, and Tumor Board Compliance"
        subtitle="From melanoma staging CE to NCDB reporting deadlines — Momenties tracks every obligation so your board certifications and cancer center privileges stay current."
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
              High-Yield CE for Surgical Oncology MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and NCCN guideline update before your ABS or SSO cycle closes.
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
              &ldquo;Between ABS MOC, SSO fellowship, NCDB submission, and CoC tumor board attendance requirements, my credentialing calendar was more complex than my OR schedule. Momenties made it manageable — I just check one dashboard.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Chiara M., MD, FACS, SSO
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Surgical Oncology, NCI-Designated Comprehensive Cancer Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABS, SSO, or CoC compliance deadline again"
        subtitle="Momenties keeps every CME credit, tumor board record, and registry submission in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
