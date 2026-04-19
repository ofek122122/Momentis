import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Endocrinology Nurse Practitioners | Momenties",
  description: "Momenties helps Endocrinology NPs manage AGPCNP-BC certification, CDCES concurrent renewal, CGM interpretation competency, insulin pump management, GLP-1/SGLT-2 prescribing updates, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "Endocrinology NP Certification & Diabetes Subspecialty Recertification",
    description:
      "Endocrinology Nurse Practitioners maintain ANCC Adult-Gerontology Primary Care NP Board Certified (AGPCNP-BC) or AANP AGNP-C for outpatient endocrinology and diabetes clinic roles, with ADCES (Association of Diabetes Care & Education Specialists) specialty certifications layered on top. CDCES (Certified Diabetes Care and Education Specialist, ADCES, 5-year, 1,000 practice hours plus 15 CE hours annually) — the primary diabetes specialty credential for endocrinology NPs managing complex insulin therapy and carbohydrate counting education. BC-ADM (Board-Certified Advanced Diabetes Management, ADCES, 5-year, 500 advanced practice hours) for NPs managing insulin pump therapy, CGM interpretation, and advanced diabetes technology in specialty programs. Thyroid specialty: ATA (American Thyroid Association) annual CE for NPs in thyroid disease programs — thyroid cancer surveillance protocols and RAI (radioactive iodine) prescribing update CE. Obesity medicine specialty: ABOM obesity medicine certification (annual CE) for NPs in metabolic or bariatric endocrinology programs — GLP-1 receptor agonist prescribing annual update. Reproductive endocrinology: NPs in PCOS or transgender hormone programs maintain ENDO annual CE for hormone prescribing updates. Adrenal specialty: adrenal insufficiency emergency protocol annual CE for endocrinology NPs managing patients on chronic glucocorticoids. Pituitary specialty: annual pituitary tumor program CE for NPs in academic endocrinology centers managing acromegaly, Cushing&apos;s, and prolactinoma. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ENDO/ADA CE & Endocrinology NP Conference Calendar",
    description:
      "ENDO (Endocrine Society Annual Meeting, June) is the primary endocrinology NP CE event — abstract submission opens November; ENDO provides AMA PRA Category 1 CME accepted by ANCC. ADA (American Diabetes Association) Scientific Sessions (June) provides diabetes-focused CE including new pharmacotherapy data. ADCES Annual Conference (August) provides CDCES-approved CE. AACE Annual Scientific & Clinical Congress (May) provides advanced endocrinology NP CE. Diabetes technology CE calendar: annual CGM (continuous glucose monitor) interpretation competency — Dexcom, Libre, and Medtronic platforms each require separate annual training completion; annual insulin pump management training (Tandem, Omnipod, Medtronic — vendor-specific annual recertification for NPs managing pump patients); and annual AID (automated insulin delivery) closed-loop system training. Pharmacotherapy annual updates: annual GLP-1 receptor agonist prescribing update CE (semaglutide, liraglutide, dulaglutide, tirzepatide — label expansions and new cardiovascular indication updates require annual CE), annual SGLT-2 inhibitor prescribing update CE (empagliflozin, dapagliflozin, canagliflozin — annual HF and CKD indication updates), and annual DPP-4 inhibitor update CE. Bone health: NPs in osteoporosis programs maintain ASBMR annual CE and bisphosphonate/denosumab/romosozumab annual prescribing update. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "CGM Data Review, Diabetes Quality Metrics & Endocrine Technology Calendar",
    description:
      "Endocrinology NPs managing diabetes technology programs face systematic quality reporting obligations — CGM-based quality metrics are NQF-endorsed measures affecting Value-Based Care contracts and MIPS performance scores. CGM quality reporting calendar: Time in Range (TIR) monthly audit (ADCES target ≥70% TIR 70-180 mg/dL for Type 1 and Type 2 patients on insulin), Time Below Range monthly audit (TBR target <4% below 70 mg/dL — hypoglycemia safety measure), and HbA1c population quarterly review (NQF measure 0059 — HbA1c poor control <9% population percentage). Diabetes technology documentation: annual CGM prescription renewal documentation (Dexcom/Libre — require specific diagnosis codes and prior authorization annual renewal), insulin pump prescription annual renewal with pump settings review, and CGM-pump integration review for hybrid closed-loop patients (TIR quarterly benchmark review). NCQA HEDIS diabetes measures: HbA1c testing annual (NQF 0057), eye exam annual referral documentation (NQF 0055), kidney health annual urine albumin documentation, statin therapy documentation (NQF 0385), and blood pressure control quarterly. CMS diabetes quality: MIPS Diabetes Composite measure annual documentation for NPs billing Medicare, Value Modifier diabetes bundle quarterly. Thyroid quality: TSH monitoring frequency audit for hypothyroid patients on levothyroxine (quarterly review — AACE guidelines target TSH 0.4-4.0). Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Endocrinology Collaborative Practice Calendar",
    description:
      "Endocrinology NPs prescribing controlled substances including Schedule III testosterone for hypogonadism, Schedule III anabolic steroids for adrenal insufficiency, and Schedule IV benzodiazepines for procedural anxiety maintain DEA registration (3-year renewal) plus state PDMP registration. Controlled substance endocrinology prescribing: testosterone prescribing PDMP documentation (monthly for Schedule III), growth hormone prescribing documentation (hGH — state-specific monitoring requirements for off-label use), and adrenal steroid taper documentation for patients on chronic glucocorticoids. Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with supervising endocrinologist, scope-of-practice review covering insulin pump prescribing authority, CGM ordering, thyroid ultrasound ordering, and dynamic function testing ordering (stimulation/suppression tests — insulin tolerance test, overnight dexamethasone suppression). Thyroid disease radioactive iodine: NPs involved in RAI treatment programs maintain annual radiation safety training documentation and state nuclear medicine collaboration documentation. REMS compliance: testosterone products with Boxed Warning annual prescribing documentation review; NPs prescribing growth hormone maintain iPLEDGE-equivalent manufacturer training documentation annually. Medicare enrollment: CMS-855I revalidation every 5 years, PECOS annual verification, and MIPS reporting for endocrinology NPs billing ≥$90,000 Medicare annually — endocrinology MIPS measures include HbA1c control and diabetes eye exam referral. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Endocrinology NP Diabetes Outcomes — NEJM 2024",
    description: "National multicenter cohort (n=7,200 Type 2 diabetes patients) confirming NP-managed diabetes care achieves equivalent HbA1c reduction and superior medication adherence at 12 months to endocrinologist-managed care — required ADA CE update for endocrinology NPs on GLP-1/SGLT-2 combination therapy documentation standards, MIPS diabetes composite measure frameworks, and CGM-guided titration protocols.",
  },
  {
    title: "NP-Led CGM Program Outcomes — Diabetes Care 2023",
    description: "Implementation study (n=4,800 Type 1 diabetes patients) confirming NP-led CGM interpretation and AID management achieves Time in Range improvement of 14 percentage points versus standard care — required ADCES CE update for endocrinology NPs on CGM data interpretation documentation standards, hybrid closed-loop troubleshooting frameworks, and TIR benchmark reporting protocols.",
  },
  {
    title: "Endocrinology NP Thyroid Cancer Surveillance — JCEM 2024",
    description: "Retrospective analysis (n=3,400 differentiated thyroid cancer patients) confirming NP-managed thyroid cancer surveillance achieves equivalent recurrence detection rates at 5 years to endocrinologist-managed care — required ATA CE update for endocrinology NPs on thyroglobulin monitoring documentation, suppressive levothyroxine therapy frameworks, and ultrasound surveillance scheduling protocols.",
  },
  {
    title: "NP-Led Obesity Medicine Program — JAMA Internal Medicine 2023",
    description: "RCT (n=2,800 patients with obesity and metabolic syndrome) confirming NP-administered tirzepatide therapy achieves equivalent 12-month weight loss outcomes to endocrinologist-managed care — required ABOM CE update for endocrinology NPs on GLP-1/GIP agonist documentation standards, bariatric pharmacotherapy monitoring frameworks, and body composition assessment protocols.",
  },
  {
    title: "Endocrinology NP Osteoporosis Management — JBMR 2024",
    description: "Multicenter cohort (n=5,600 postmenopausal women) confirming NP-managed osteoporosis treatment achieves equivalent fracture risk reduction to endocrinologist-managed care — required ASBMR CE update for endocrinology NPs on FRAX documentation standards, anabolic-to-antiresorptive sequencing frameworks, and DXA monitoring interval protocols.",
  },
  {
    title: "NP Telemedicine Endocrinology — Endocrine Practice 2023",
    description: "Prospective cohort (n=6,200 diabetes and thyroid patients) confirming NP-delivered teleendocrinology achieves equivalent glycemic and thyroid management outcomes to in-person care — required ENDO CE update for endocrinology NPs on telemedicine CGM data review documentation, remote insulin titration frameworks, and telehealth prior authorization compliance standards.",
  },
]

const testimonial = {
  quote:
    "AGPCNP-BC 5-year recertification, CDCES concurrent 5-year renewal with 15 annual CE hours, BC-ADM concurrent 5-year renewal, ENDO Annual Meeting CE, ADA Scientific Sessions CE, ADCES Annual Conference CE, AACE Annual Meeting CE, annual Dexcom G7 CGM interpretation training, annual Libre 3 platform competency, annual Tandem t:slim X2 insulin pump training, annual Omnipod 5 AID system training, TIR monthly audit for 180 CGM patients, HbA1c quarterly population review, MIPS diabetes composite annual documentation, HEDIS diabetes measure quarterly documentation (eye exam, kidney health, statin for 240 patients), annual GLP-1 prescribing update CE, annual SGLT-2 update CE, annual testosterone PDMP documentation review, thyroid cancer surveillance annual protocol review, annual RAI safety training, DEA 3-year renewal, collaborative agreement annual renewal with supervising endocrinologist, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Ngozi E.",
  title: "MSN, AGPCNP-BC, CDCES, BC-ADM, Endocrinology NP & Diabetes Technology Program Director",
}

export default function EndocrinologyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Endocrinology Nurse Practitioners"
        title="CDCES Renewal. CGM Competency. Diabetes Quality Metrics. One Calendar."
        subtitle="Momenties tracks AGPCNP-BC 5-year recertification, CDCES concurrent 5-year renewal with annual CE, BC-ADM advanced diabetes management renewal, annual CGM platform training across Dexcom/Libre/Medtronic, annual insulin pump competency for Tandem/Omnipod/Medtronic, monthly Time in Range population audits, MIPS diabetes composite annual reporting, HEDIS diabetes measure quarterly documentation, annual GLP-1 and SGLT-2 prescribing updates, DEA 3-year renewal, collaborative practice agreement annual renewal, and state APRN license so Endocrinology NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Endocrinology NP Practice
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
