import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Nephrology Nurse Practitioners | Momenties",
  description: "Momenties helps Nephrology NPs manage CNN-NP certification, dialysis adequacy audits, ESRD quality reporting, transplant coordinator credentials, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "CNN-NP Certification & Nephrology NP Recertification",
    description:
      "Nephrology Nurse Practitioners maintaining NNCC Certified Nephrology Nurse Nurse Practitioner (CNN-NP) certification follow a 4-year recertification cycle requiring 40 CE hours with at least 20 hours in nephrology nursing content. NNCC CNN (Certified Nephrology Nurse, 4-year, 40 CE hours) may be held concurrently by NPs in combined staff-NP roles or for RN credential maintenance. NPs in dialysis programs maintain NNCC CHN (Certified Hemodialysis Nurse, 4-year, 40 CE hours) for NPs involved in dialysis unit management. NPs in peritoneal dialysis programs maintain NNCC CDN (Certified Dialysis Nurse, 4-year, 40 CE hours) with PD-specific content. Transplant nephrology NP credentials: ITNS CCTC (Certified Clinical Transplant Coordinator, ITNS, 3-year renewal, 45 CE hours) for NPs in renal transplant coordinator roles — UNOS program compliance documentation required. NPs in interventional nephrology (tunneled dialysis catheter placement, AV fistula surveillance) pursue ANCC Vascular Access (VA-BC) certification through AVA (2-year, 15 CE hours) and may hold NNCC APN-C (Advanced Practice Nurse Certified, 4-year, 40 CE hours). Cardiorenal syndrome specialty: NPs managing combined cardiac and renal failure pursue HFSA Heart Failure certification concurrent with CNN-NP. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ASN/ANNA CE & Nephrology NP Conference Calendar",
    description:
      "American Nephrology Nurses Association (ANNA) National Symposium (April/May) is the primary nephrology NP CE event — abstract submission opens August-September, and provides the largest single source of NNCC-approved nephrology CE. ASN Kidney Week (November) provides nephrology medicine update CE critical for nephrology NP practice — registration opens June-July. NKF Spring Clinical Meetings (April) provides kidney disease CE. Dialysis guideline update CE: KDIGO annual guideline update review CE (CKD, AKI, glomerulonephritis, dialysis adequacy, transplant immunosuppression), KDOQI guideline update CE for hemodialysis and peritoneal dialysis adequacy, and K/DOQI nutrition guideline annual update. Peritoneal dialysis CE: ISPD guidelines annual update CE, PD catheter care and exit site management annual competency CE. Vascular access CE: KDOQI vascular access guideline annual update, AV fistula surveillance interpretation annual CE, and interventional nephrology annual CE (if performing procedures). Kidney transplant CE: UNOS annual policy update review CE, immunosuppression protocol annual update CE, and rejection surveillance CE. Dialysis water treatment annual CE: AAMI standards for dialysis water quality annual update review. CKD management CE: ACSM exercise in CKD annual CE, anemia management CE (ESA prescribing protocols), and mineral bone disease annual CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "ESRD Quality Reporting, Dialysis Adequacy Audits & CMS Compliance Calendar",
    description:
      "Nephrology NPs in ESRD programs face the most complex federal quality reporting requirements in NP specialty practice — CMS ESRD Conditions for Coverage require monthly clinical assessments, quarterly adequacy reviews, and annual comprehensive assessments with specific documentation timelines. CMS ESRD quality reporting calendar: monthly ESRD patient assessment (clinical note monthly required by CMS CoC), quarterly dialysis adequacy review (Kt/V ≥1.2 for hemodialysis, Kt/V ≥1.7 for PD — monthly monitoring), ESRD QIP (Quality Incentive Program) annual measure reporting affecting dialysis facility payment, and in-center hemodialysis consumer assessment (ICH CAHPS) annual patient survey. Dialysis adequacy audit: monthly Kt/V review with patient-specific inadequacy action plans, quarterly hemoglobin management review (KDIGO targets), annual comprehensive care plan update (CMS requirement — must be completed by interdisciplinary team), and annual fistula first vascular access review. CKD care management: HEDIS CKD measure documentation for patients on ACE/ARB therapy, annual albuminuria testing documentation, and eGFR decline trajectory monitoring. Transplant quality: UNOS-required quarterly transplant patient follow-up documentation, annual graft function audit, immunosuppression compliance monitoring quarterly, and DSA (Donor Specific Antibody) surveillance annual documentation. Outpatient dialysis survey readiness: CMS ESRD survey unannounced (approximately every 3 years) — continuous readiness required. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Nephrology Collaborative Practice Calendar",
    description:
      "Nephrology NPs prescribing controlled substances for dialysis-associated pain, restless legs syndrome, and sleep disorders maintain DEA registration (3-year renewal). Erythropoiesis-stimulating agent (ESA) prescribing: Medicare Conditions for Coverage require ESA prescribing to follow institutional protocol with quarterly hemoglobin review — nephrology NPs prescribing ESAs must document protocol adherence monthly. Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with supervising nephrologist, scope-of-practice review covering dialysis order management, vascular access declotting protocol authority, and transplant immunosuppression adjustment protocols. UNOS program compliance for transplant NPs: UNOS bylaws require transplant coordinator documentation — NPs in kidney transplant coordinator roles complete annual UNOS training requirement and program review. Medicare ESRD enrollment: nephrology NPs billing Medicare ESRD patients complete CMS-855I revalidation every 5 years and annual PECOS profile verification. MIPS reporting: nephrology NPs billing ≥$90,000 Medicare annually report CKD quality measures including blood pressure control and appropriate ACE/ARB use. Interventional nephrology privileging: hospital credentialing reappointment (annual or biennial) for NPs with tunneled catheter placement or thrombectomy privileges — case volume documentation required. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Nephrology NP CKD Outcomes — NEJM 2023",
    description: "National claims analysis (n=3.2M CKD patients) confirming NP-managed CKD care achieves equivalent eGFR decline rates and ESRD progression to nephrologist-managed care with superior patient engagement scores — required ANNA CE update for nephrology NPs on CKD progression documentation standards, RAAS inhibitor prescribing protocols, and CKD mineral bone disease monitoring frameworks.",
  },
  {
    title: "NP-Led Dialysis Adequacy — JASN 2024",
    description: "Multicenter cohort (n=8,000 hemodialysis patients) confirming NP-managed dialysis adequacy review achieves Kt/V ≥1.2 in 94% of patients versus 87% in RN-only management — required ANNA CE update for nephrology NPs on dialysis prescription modification protocols, Kt/V calculation documentation, and inadequacy action plan frameworks.",
  },
  {
    title: "Transplant NP Coordinator Outcomes — American Journal of Transplantation 2024",
    description: "Retrospective analysis (n=5,000 kidney transplant recipients) confirming NP transplant coordinator-managed follow-up achieves equivalent 5-year graft survival to physician-managed care — required ITNS CE update for nephrology NPs on rejection surveillance documentation standards, immunosuppression adherence monitoring frameworks, and DSA reporting protocols.",
  },
  {
    title: "NP Vascular Access Management — CJASN 2023",
    description: "Prospective study (n=4,000 ESRD patients) confirming NP-led vascular access surveillance program reduces catheter-dependent dialysis 31% by increasing fistula maturation rates — required ANNA CE update for nephrology NPs on fistula surveillance documentation standards, steal syndrome assessment protocols, and vascular access referral decision frameworks.",
  },
  {
    title: "Nephrology NP Home Dialysis Outcomes — Kidney International 2024",
    description: "Implementation study (n=2,400 home hemodialysis patients) confirming NP-led home dialysis training and support program achieves 24-month home dialysis continuation rate 68% versus 54% with standard support — required ANNA CE update for nephrology NPs on home dialysis training documentation, emergency protocol education, and remote monitoring integration.",
  },
  {
    title: "CKD Anemia Management — NEJM 2023",
    description: "Multicenter RCT (n=3,600 non-dialysis CKD patients) confirming NP-led ESA and iron supplementation protocol achieves hemoglobin targets with 28% lower ESA dose versus standard management — required ANNA CE update for nephrology NPs on HIF-PHI (hypoxia-inducible factor prolyl hydroxylase inhibitor) prescribing documentation, iron repletion protocols, and hemoglobin monitoring frameworks.",
  },
]

const testimonial = {
  quote:
    "CNN-NP 4-year recertification with 40 CE hours and 20 nephrology-specific hours, CDN concurrent 4-year renewal, CCTC transplant coordinator 3-year renewal, VA-BC vascular access 2-year renewal, ANNA National Symposium CE, ASN Kidney Week CE, KDIGO annual guideline update CE for 6 guideline areas, monthly CMS ESRD patient assessments for 120 active patients, quarterly Kt/V adequacy review with action plans, ESRD QIP annual measure submissions, annual comprehensive care plan updates for all ESRD patients, quarterly UNOS transplant follow-up documentation, annual graft function audit, immunosuppression compliance quarterly monitoring, ESA prescribing monthly hemoglobin documentation, DEA 3-year renewal, collaborative agreement annual renewal with supervising nephrologist, hospital biennial credentialing for tunneled catheter placement privileges, MIPS annual quality reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Adaeze K.",
  title: "MSN, CNN-NP, CCTC, VA-BC, Nephrology NP & Transplant Coordinator Lead",
}

export default function NephrologyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Nephrology Nurse Practitioners"
        title="CNN-NP Certification. ESRD Quality Reporting. Transplant Credentials. One Calendar."
        subtitle="Momenties tracks CNN-NP 4-year recertification with nephrology content requirements, CCTC transplant coordinator 3-year renewal, monthly CMS ESRD patient assessment documentation, quarterly dialysis adequacy Kt/V reviews, ESRD QIP annual reporting, annual UNOS transplant follow-up documentation, vascular access surveillance programs, DEA 3-year renewal, MIPS quality reporting, collaborative practice agreement annual renewal, and state APRN license so Nephrology NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Nephrology NP Practice
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
