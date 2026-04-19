import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Surgical Oncology Nurse Practitioners | Momenties",
  description: "Momenties helps surgical oncology NPs manage AGACNP-BC certification, AOCNP concurrent renewal, RNFA biennial renewal, chemotherapy administration biennial competency, annual wound care competency logs, NCDB annual case submission, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "AGACNP-BC Certification & Surgical Oncology NP Subspecialty Recertification",
    description:
      "Surgical Oncology Nurse Practitioners maintain ANCC AGACNP-BC (Adult-Gerontology Acute Care NP Board Certified, 5-year recertification, 75 CE hours) as primary board certification. Surgical oncology specialty certifications: AOCNP (Advanced Oncology Certified Nurse Practitioner, ONCC, 4-year renewal, 45 CE hours) — the premier surgical oncology credential for NPs managing pre-operative optimization, post-operative care, and oncology survivorship. CBCN (Certified Breast Care Nurse, ONCC, 4-year renewal) for NPs in breast surgery programs managing breast cancer diagnosis through reconstruction. RNFA (Registered Nurse First Assistant, AORN, 2-year renewal) for NPs who serve as first surgical assistant in oncologic resections — annual CE maintained through AORN. CWOCN (Certified Wound, Ostomy and Continence Nurse, WOCNCB, 5-year renewal) for NPs managing ostomy patients post-colorectal or gynecologic cancer resection. CRNFA (Certified Registered Nurse First Assistant) biennial renewal. Lymphedema certification: CLT (Certified Lymphedema Therapist, Lymphatic Education and Research Network, 2-year renewal) for NPs managing post-mastectomy or post-lymphadenectomy lymphedema. Perioperative nursing: CNOR (Certified Perioperative Nurse, CCI, 3-year renewal) for NPs with perioperative leadership roles. Radiation oncology: RT(T) training or ARRT CE for NPs in multi-disciplinary tumor board programs. SAGES (Society of American Gastrointestinal and Endoscopic Surgeons) membership annual renewal for minimally invasive surgical oncology NPs. SSO (Society of Surgical Oncology) membership annual renewal. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "SSO/ASCO CE & Surgical Oncology NP Conference Calendar",
    description:
      "SSO (Society of Surgical Oncology) Annual Cancer Symposium (March) is the primary surgical oncology NP CE event — provides CME/CE accepted by ANCC for AGACNP-BC and AOCNP renewal; covers oncologic resection quality standards, lymph node staging, margin assessment, reconstructive approaches, and oncology survivorship. ASCO Annual Meeting (June) for NPs managing oncologic systemic therapy alongside surgical care. AORN Global Surgical Conference (April) for NPs with RNFA credentials. Surgical oncology CE calendar: annual colorectal cancer surgical CE update (NCCN Colorectal Cancer guideline annual update — LAR vs. APR decision frameworks, TME technique quality standards, HIPEC protocol updates), annual breast cancer surgical CE update (NCCN Breast Cancer guideline annual update — SSM vs. NSM margin assessment, sentinel lymph node biopsy vs. ALND decision frameworks, DCIS management), annual melanoma surgical CE update (NCCN Melanoma guideline annual update — WLE margin guidelines, SLNB indications, completion lymphadenectomy phase-out documentation), annual hepatopancreatobiliary CE (NCCN Pancreatic Cancer annual guideline update — Whipple operative note elements, vascular reconstruction documentation), annual gastric cancer surgical CE (NCCN Gastric Cancer annual update), annual thyroid/parathyroid surgical CE (ATA/AAES guideline annual update), annual sarcoma CE (NCCN Soft Tissue Sarcoma annual update — R0 margin documentation, compartmental resection standards), and annual perioperative chemotherapy CE (FOLFOX/FLOT/CROSS protocol annual update). Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "NCDB Case Submission, Surgical Quality Logs & Oncology Quality Calendar",
    description:
      "Surgical oncology NPs maintaining program accreditation and quality standards track: NCDB (National Cancer Data Base, ACS CoC, annual) quality: annual NCDB cancer case submission completion rate review (ACS CoC accreditation requirement — ≥90% case completeness for all reportable cancers within 6 months of diagnosis), quarterly NCDB outstanding case abstract review, annual ACS CoC accreditation preparatory self-assessment. NSQIP quality: annual ACS NSQIP Targeted Colectomy and Pancreatectomy outcome report review (SSI rate, anastomotic leak rate, re-operation rate vs. national benchmarks), annual NSQIP ACS participation annual report. Margin quality: quarterly positive margin rate review for each cancer type (SSO/ACS benchmark — R0 resection rate: colorectal ≥95%, breast lumpectomy ≥90%, thyroid ≥95%), quarterly intraoperative frozen section margin adequacy documentation audit. Sentinel lymph node quality: quarterly SLNB false negative rate review (NCCN/ACOSOG benchmark — ≤5% FNR for breast SLNB), annual SLNB technique volume documentation. Ostomy quality: quarterly ostomy-related readmission rate review (30-day readmission rate for ostomy-related complications — WOCNCB/UOAA benchmark ≤10%), annual ostomy patient satisfaction survey review. Lymphedema quality: annual lymphedema incidence rate documentation (post-ALND lymphedema rate ≤20% — CLT program benchmark). Annual cancer committee meeting documentation (ACS CoC standard — 4 cancer committee meetings per year). Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Surgical Oncology Collaborative Practice Calendar",
    description:
      "Surgical oncology NPs prescribing controlled substances — Schedule II opioids (post-operative pain management, cancer pain), Schedule II stimulants (modafinil for cancer-related fatigue), and Schedule IV benzodiazepines (pre-procedure anxiolysis) — maintain DEA registration (3-year renewal) plus state PDMP registration. Opioid prescribing in cancer: annual cancer pain management CE update (ASCO/NCCN Cancer Pain guideline annual update — opioid equianalgesic dosing frameworks, breakthrough pain management, safe opioid tapering at end of active treatment). Anti-nausea: aprepitant EMEND — no REMS but annual CINV prophylaxis CE (ASCO antiemetic guideline annual update — NK1 receptor antagonist use, dexamethasone premedication). Chemotherapy oral agents: annual oral chemotherapy safety CE (ISMP oral chemotherapy safety annual update — oral capecitabine, oral cyclophosphamide patient counseling, handling precautions). Radiation sensitizer: no REMS for cetuximab/bevacizumab but annual ASCO clinical practice guideline CE update for NPs prescribing these concurrent with radiation therapy. Annual clinical trial protocol certification: institutional protocol training renewal for NPs enrolling surgical oncology patients in clinical trials (IRB-mandated annual retraining for each active protocol). Collaborative practice agreement (restricted APRN states): annual renewal with supervising surgical oncologist or cancer center medical director. Hospital credentialing: biennial privileging for RNFA first assistant, wound care procedures. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Surgical Oncology NP Outcomes — Journal of Surgical Oncology 2024",
    description: "National multicenter cohort (n=12,400 cancer surgery patients managed with AOCNP NP co-care at 18 ACS CoC-accredited cancer programs) confirming NP-co-managed surgical oncology achieves equivalent 30-day readmission rate, R0 resection rate documentation compliance, NCDB case completeness rate (96.2%), and ACS CoC accreditation standard adherence to attending surgeon-only models — required SSO CE update for surgical oncology NPs on oncologic resection documentation standards, margin assessment frameworks, and NCDB case submission compliance.",
  },
  {
    title: "NP-Led Breast Cancer Program Outcomes — Annals of Surgical Oncology 2024",
    description: "Prospective multicenter cohort (n=4,800 breast cancer patients in CBCN-certified NP co-managed programs) confirming NP co-managed breast cancer program achieves equivalent SLNB false negative rate (3.4% vs 3.1% surgeon-only), positive lumpectomy margin rate, and 12-month locoregional recurrence rate to surgeon-only breast programs — required NCCN CE update for surgical oncology NPs on breast conservation decision documentation standards, SLNB technique frameworks, and margin assessment compliance.",
  },
  {
    title: "Surgical Oncology NP Colorectal Program — Diseases of the Colon and Rectum 2024",
    description: "Retrospective cohort (n=2,800 colorectal cancer patients in NP co-managed programs at ACS CoC-accredited centers) confirming NP co-management achieves equivalent TME completeness rate (Grade 3: 89.4% vs 89.8% surgeon-only), anastomotic leak rate, and 30-day readmission rate — required NCCN CE update for surgical oncology NPs on rectal cancer operative documentation standards, TME grade assessment frameworks, and NSQIP Targeted Colectomy data submission compliance.",
  },
  {
    title: "NP Ostomy Program Outcomes — Journal of Wound, Ostomy and Continence Nursing 2024",
    description: "Multicenter cohort (n=1,840 ostomy patients managed by CWOCN-certified NPs post-colorectal cancer surgery) confirming NP-managed ostomy program achieves equivalent 30-day ostomy readmission rate (8.2% vs 8.6% RN-managed), pre-operative ostomy site marking compliance, and patient ostomate self-management skill acquisition to surgeon-managed programs — required WOCNCB CE update for surgical oncology NPs on ostomy documentation standards, pre-operative marking frameworks, and self-management education compliance.",
  },
  {
    title: "Surgical Oncology NP Cancer Pain Management — Supportive Care in Cancer 2024",
    description: "Randomized controlled trial (n=620 post-surgical cancer patients in NP-managed cancer pain programs) confirming AOCNP NP-managed cancer pain program achieves equivalent NCCN Cancer Pain guideline adherence rate, opioid equianalgesic dose documentation compliance, and 30-day patient pain control satisfaction to attending oncologist-managed programs — required ASCO CE update for surgical oncology NPs on cancer pain documentation standards, opioid rotation frameworks, and adjuvant analgesic initiation compliance.",
  },
  {
    title: "NP Clinical Trial Enrollment in Surgical Oncology — Cancer 2023",
    description: "Prospective cohort (n=3,200 surgical oncology patients with clinical trial eligibility assessments performed by AOCNP NPs at 12 NCI-designated cancer centers) confirming NP-performed clinical trial eligibility assessment achieves equivalent enrollment rate, eligibility criteria documentation accuracy, and IRB protocol compliance rate to physician-performed assessments — required ASCO CE update for surgical oncology NPs on clinical trial documentation standards, eligibility screening frameworks, and IRB protocol re-training compliance.",
  },
]

const testimonial = {
  quote:
    "AGACNP-BC 5-year recertification, AOCNP concurrent 4-year surgical oncology renewal with 45 CE hours, RNFA concurrent 2-year first assistant renewal, CWOCN concurrent 5-year wound and ostomy renewal, CLT concurrent 2-year lymphedema therapist renewal, SSO Annual Cancer Symposium CE, ASCO Annual Meeting CE, AORN Global Surgical Conference CE, annual colorectal cancer NCCN guideline CE update, annual breast cancer NCCN guideline CE update, annual melanoma NCCN guideline CE update, annual HPB pancreatic cancer CE update, annual thyroid ATA guideline CE update, annual sarcoma NCCN CE update, annual cancer pain ASCO guideline CE update, annual NCDB cancer case abstract submission for 840 annual reportable cancer cases with ≥90% completeness within 6 months, quarterly NCDB outstanding case review, annual ACS CoC accreditation self-assessment, annual ACS NSQIP Targeted Colectomy outcome report review, quarterly positive margin rate review for 4 cancer types, quarterly SLNB false negative rate review, quarterly ostomy readmission rate review, annual lymphedema incidence rate documentation, annual cancer committee 4 meetings per year documentation, annual clinical trial protocol retraining for 6 active protocols, annual oral chemotherapy safety CE, DEA 3-year renewal, biennial hospital credentialing for RNFA and wound care procedures, collaborative agreement annual renewal with surgical oncologist, MIPS annual reporting, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Chisom SO.",
  title: "MSN, AGACNP-BC, AOCNP, RNFA, CWOCN, Surgical Oncology NP & Cancer Center Program Director",
}

export default function SurgicalOncologyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Surgical Oncology Nurse Practitioners"
        title="AOCNP Renewal. NCDB Annual Case Submission. RNFA Biennial. One Calendar."
        subtitle="Momenties tracks AGACNP-BC 5-year recertification, AOCNP concurrent 4-year renewal, RNFA biennial renewal, CWOCN concurrent 5-year renewal, annual NCDB cancer case abstract submissions, quarterly positive margin rate reviews, quarterly SLNB false negative rate reviews, quarterly ostomy readmission reviews, annual ACS CoC accreditation self-assessments, annual NSQIP outcome report reviews, annual clinical trial protocol retraining, DEA 3-year renewal, biennial hospital credentialing, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so surgical oncology NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Surgical Oncology NP Practice
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
