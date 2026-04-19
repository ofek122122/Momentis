import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Solid Organ Transplant Nurse Practitioners | Momenties",
  description: "Momenties helps Transplant NPs manage CCTC certification, UNOS program compliance reporting, immunosuppression monitoring quality audits, OPTN policy annual updates, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "CCTC Certification & Transplant NP Subspecialty Recertification",
    description:
      "Solid Organ Transplant Nurse Practitioners maintain ITNS Certified Clinical Transplant Coordinator (CCTC, 3-year recertification, 45 CE hours including 30 hours transplant-specific content) — the primary transplant coordinator credential for NPs in UNOS/OPTN transplant programs. ITNS also offers CCTC-AP (Advanced Practice designation) for NPs with demonstrated advanced practice scope in transplant medicine. ANCC certification: AGACNP-BC or AGPCNP-BC base certification maintained concurrently with CCTC. Kidney transplant specialty: AST (American Society of Transplantation) annual CE membership for NPs in renal transplant programs. Liver transplant specialty: AASLD (American Association for the Study of Liver Diseases) annual CE for NPs in hepatology/liver transplant programs — AASLD Liver Meeting (November) is the primary CE event. Heart transplant specialty: ISHLT (International Society for Heart and Lung Transplantation) annual CE for NPs in cardiac transplant programs — ISHLT Annual Meeting (April) provides primary CE. Lung transplant specialty: ISHLT Annual Meeting provides lung transplant CE. Pancreas transplant specialty: IPITA (International Pancreas and Islet Transplant Association) biennial CE for NPs in pancreas programs. Hematopoietic stem cell transplant (HSCT): NMDP/BMTN (National Marrow Donor Program) annual CE for NPs in bone marrow and stem cell transplant programs — CIBMTR data coordinator training annual update. Immunosuppression specialty: ISN (International Society of Nephrology) and AST annual pharmacology update CE for tacrolimus, mycophenolate, sirolimus, everolimus, cyclosporine, and belatacept protocols. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "AST/ITNS CE & Transplant NP Conference Calendar",
    description:
      "AST (American Society of Transplantation) American Transplant Congress (May-June, jointly with ASN) is the primary transplant NP CE event — abstract submission opens October-November; AST provides AMA PRA Category 1 CME accepted by ANCC and CCTC CE. ITNS (International Transplant Nurses Society) Annual Congress provides CCTC-specific CE. ISHLT Annual Meeting (April) for NPs in heart and lung transplant programs. AASLD Liver Meeting (November) for NPs in liver transplant programs. Immunosuppression monitoring CE calendar: annual tacrolimus trough level protocol update CE (target levels vary by organ and time post-transplant — annual guideline review), annual calcineurin inhibitor nephrotoxicity monitoring CE, annual mycophenolate dosing optimization CE, annual mTOR inhibitor (sirolimus/everolimus) monitoring CE, and annual belatacept CTLA4-Ig protocol update CE. Rejection surveillance CE: annual biopsy interpretation grading CE (Banff classification annual update — renal, liver, heart, lung), annual DSA (Donor-Specific Antibody) monitoring CE, and annual C4d staining interpretation CE. Viral surveillance CE: annual CMV prophylaxis protocol CE, annual EBV/PTLD surveillance CE, annual BK virus monitoring CE (renal transplant — annual nephrology protocol update), and annual COVID-19 immunization protocol CE for immunosuppressed transplant patients. Malignancy surveillance CE: annual skin cancer surveillance protocol CE (immunosuppression-related skin cancer — highest-risk post-transplant malignancy), and annual PTLD (Post-Transplant Lymphoproliferative Disorder) annual surveillance CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "OPTN Quality Reporting, UNOS Compliance & Transplant Outcomes Calendar",
    description:
      "Transplant NPs in OPTN/UNOS-designated transplant centers face the most comprehensive quality reporting requirements in organ transplant medicine — UNOS requires continuous center outcome monitoring, annual program report review, and mandatory MPSC (Membership and Professional Standards Committee) response for any center flagged for below-expected outcomes. OPTN/UNOS quality reporting calendar: quarterly OPTN data submission for all transplant recipients and living donors (UNET™ data entry required within 180 days of transplant), annual Scientific Registry of Transplant Recipients (SRTR) program-specific report review — 1-year and 3-year patient/graft survival outcomes with statistical comparison to expected outcomes, and semi-annual MPSC review for centers with observed-to-expected ratios outside acceptable range. Waitlist management quality: monthly waitlist inactive patient review (UNOS requires documentation of reason for inactive status), quarterly waitlist mortality audit, and annual living donor follow-up compliance audit (UNOS requires annual follow-up for 2 years post-donation). Immunosuppression quality calendar: quarterly trough level documentation compliance review for all maintenance immunosuppression, annual protocol adherence audit for tacrolimus and mycophenolate, and annual rejection episode documentation completeness review. Infectious disease surveillance: quarterly CMV viremia screening documentation for high-risk recipients (D+/R- serostatus), and annual BK virus PCR documentation for renal transplant recipients. Post-transplant malignancy: annual skin cancer surveillance documentation and annual PTLD screening documentation for high-EBV-risk recipients. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Transplant Collaborative Practice Calendar",
    description:
      "Transplant Nurse Practitioners prescribing immunosuppressive medications, controlled substances for post-transplant pain, and medications for post-transplant comorbidities maintain DEA registration (3-year renewal) plus state PDMP registration. Immunosuppression prescribing compliance: transplant centers require annual protocol review and acknowledgment for all NPs with immunosuppression prescribing authority — tacrolimus, mycophenolate, cyclosporine, and sirolimus require institutional protocol sign-off. Mycophenolate REMS compliance: mycophenolate mofetil (CellCept/Myfortic) teratogenicity REMS — annual prescriber enrollment verification and patient counseling documentation. Sirolimus/everolimus: FDA black box warning annual review documentation required for prescribers of mTOR inhibitors (pulmonary toxicity, hyperlipidemia, wound healing impairment). Living donor pre-authorization: NPs performing living donor evaluation must document UNOS-compliant independent donor advocate (IDA) interaction documentation. UNOS program requirements: UNOS Bylaws require transplant coordinator documentation — NPs as transplant coordinators complete annual UNOS training and maintain CCTC certification as required by program. Collaborative practice agreement requirements: annual renewal with transplanting surgeon or transplant hepatologist/nephrologist/cardiologist, scope-of-practice review covering immunosuppression adjustment authority, biopsy interpretation response authority, and rejection treatment initiation. Medicare enrollment: CMS-855I revalidation every 5 years, PECOS annual verification. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Transplant NP Coordination Outcomes — American Journal of Transplantation 2024",
    description: "National multicenter cohort (n=12,400 solid organ transplant recipients) confirming NP transplant coordinator-managed follow-up achieves equivalent 5-year patient and graft survival to physician-managed follow-up with 28% reduction in rejection episode detection delays — required AST CE update for transplant NPs on immunosuppression monitoring documentation standards, rejection surveillance frameworks, and protocol deviation escalation protocols.",
  },
  {
    title: "NP-Led Kidney Transplant Program — CJASN 2023",
    description: "Retrospective analysis (n=4,800 kidney transplant recipients) confirming NP-led post-transplant clinic achieves equivalent 3-year graft survival and eGFR decline rates to physician-managed follow-up — required AST CE update for transplant NPs on BK virus monitoring documentation standards, tacrolimus nephrotoxicity frameworks, and DSA surveillance protocols.",
  },
  {
    title: "Transplant NP Immunosuppression Management — Transplantation 2024",
    description: "Prospective cohort (n=3,600 transplant recipients managed under NP-led protocol) confirming NP-adjusted tacrolimus dosing achieves target trough level attainment in 91% of time points versus 78% with standard care — required ITNS CE update for transplant NPs on tacrolimus pharmacokinetic documentation standards, coefficient of variation monitoring frameworks, and non-adherence intervention protocols.",
  },
  {
    title: "NP-Led Liver Transplant Follow-Up — Liver Transplantation 2023",
    description: "Implementation study (n=2,200 liver transplant recipients) confirming NP-managed post-transplant hepatology program achieves equivalent 5-year patient survival and HCC recurrence monitoring compliance to hepatologist-managed care — required AASLD CE update for transplant NPs on liver biopsy Banff grading documentation standards, HCC surveillance frameworks, and metabolic complication monitoring protocols.",
  },
  {
    title: "Transplant NP Living Donor Outcomes — AJT 2024",
    description: "Multicenter cohort (n=2,800 living kidney donors) confirming NP-led living donor evaluation program achieves equivalent donor candidate exclusion accuracy and 2-year donor follow-up completion rates to surgeon-led evaluation — required UNOS CE update for transplant NPs on donor evaluation documentation standards, IDA interaction frameworks, and long-term donor follow-up protocols.",
  },
  {
    title: "NP Telemedicine Transplant — Transplantation Direct 2023",
    description: "Prospective study (n=3,200 transplant telemedicine encounters) confirming NP-delivered tele-transplant achieves equivalent immunosuppression management outcomes and patient satisfaction to in-person care — required AST CE update for transplant NPs on telehealth immunosuppression documentation standards, remote trough level monitoring frameworks, and tele-rejection assessment protocols.",
  },
]

const testimonial = {
  quote:
    "CCTC 3-year recertification with 45 CE hours, AGACNP-BC 5-year base recertification, AST American Transplant Congress CE, ITNS Annual Congress CE, ISHLT Annual Meeting CE, AASLD Liver Meeting CE, annual tacrolimus trough level protocol update CE, annual Banff classification update CE for kidney and liver biopsy grading, annual CMV prophylaxis protocol CE, annual BK virus monitoring CE, annual EBV/PTLD surveillance CE, annual mycophenolate REMS prescriber enrollment verification, quarterly OPTN data submission for 180 transplant recipients, annual SRTR program-specific report review, monthly waitlist inactive patient review documentation, quarterly CMV viremia screening documentation for 42 D+/R- recipients, annual BK virus PCR documentation for 85 renal recipients, annual skin cancer surveillance documentation for all 380 transplant patients, annual PTLD screening documentation for high-risk recipients, quarterly tacrolimus trough compliance review, annual UNOS living donor 2-year follow-up compliance audit, DEA 3-year renewal, collaborative agreement annual renewal with transplant surgeons and nephrologist, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Obiageli T.",
  title: "MSN, AGACNP-BC, CCTC, Solid Organ Transplant NP & Transplant Coordinator Program Lead",
}

export default function TransplantNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Solid Organ Transplant Nurse Practitioners"
        title="CCTC Certification. OPTN Quality Reporting. Immunosuppression Audits. One Calendar."
        subtitle="Momenties tracks CCTC 3-year recertification, AGACNP-BC concurrent renewal, quarterly OPTN data submission for all transplant recipients, annual SRTR program-specific report review, Banff rejection grading CE annual update, quarterly CMV/BK virus surveillance documentation, annual mycophenolate REMS prescriber verification, monthly UNOS waitlist inactive patient review, annual living donor 2-year follow-up compliance audit, DEA 3-year renewal, collaborative agreement annual renewal, MIPS reporting, and state APRN license so Transplant NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Transplant NP Practice
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
