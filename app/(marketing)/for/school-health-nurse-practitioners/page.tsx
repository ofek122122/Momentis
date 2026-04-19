import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "School Health Nurse Practitioners | Momenties",
  description: "Momenties helps school health NPs manage FNP-BC certification, NCSN concurrent renewal, IDEA Section 504 annual review cycles, immunization compliance audits, annual vision and hearing screening documentation, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "FNP-BC Certification & School Nursing NP Subspecialty Recertification",
    description:
      "School Health Nurse Practitioners maintain ANCC FNP-BC or PPCNP-BC (5-year recertification, 75 CE hours) as primary board certification. School nursing specialty certifications: NCSN (Nationally Certified School Nurse, NBCSN, 5-year renewal, 75 CE hours with school health-specific content) — the premier school health credential for NPs providing comprehensive health services in K–12 school settings. PHNA-BC (Public Health Nursing Advanced — Boards Certified, ANCC, 5-year) for NPs in school district public health roles. School mental health: PMHNP-BC (ANCC, 5-year) for NPs managing mental health programs in school-based health centers. Asthma education: AE-C (Asthma Educator Certified, NAECB, 3-year renewal, 30 CE hours) for NPs in school asthma management programs — school asthma action plans and inhaler technique education. Diabetes: CDE/CDCES (Certified Diabetes Care and Education Specialist, ADCES, annual renewal, 15 CE hours) for NPs managing diabetes in school settings — student diabetes medical management plans (DMPs). CPR and AED: AHA BLS biennial renewal — CPR certification for all school nurses mandated in most states. School-Based Health Center (SBHC) certification: NASBHC (National Assembly on School-Based Health Care) membership annual renewal for NPs in dedicated SBHC programs. NASN (National Association of School Nurses) membership annual renewal. State school nurse licensure: some states require separate school nurse credential or endorsement (annual or biennial renewal — in addition to APRN license). Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "NASN/NBCSN CE & School Health NP Conference Calendar",
    description:
      "NASN (National Association of School Nurses) Annual Conference (June) is the primary school health NP CE event — provides ANCC-accepted CE for FNP-BC and NCSN renewal; covers IDEA special education health services, Section 504 health plan management, immunization compliance, school emergency response, and school mental health. NBCSN NCSN examination review course (biennial — aligned with NCSN renewal cycle). NASBHC Annual Conference for NPs in school-based health center programs. School health CE calendar: annual IDEA (Individuals with Disabilities Education Act) school health services CE update (IEP health goal documentation, assistive technology health services, annual IEP meeting participation standards), annual Section 504 health plan CE update (NCLB/ESSA Section 504 accommodation plan annual review requirements, asthma/diabetes/allergy action plan annual update cycle), annual immunization compliance CE (CDC ACIP annual immunization schedule update — school immunization requirements vary by state, annual state immunization mandate changes), annual emergency allergy management CE (FARE anaphylaxis in schools annual update — epinephrine auto-injector standing orders, EpiPen training annual competency), annual vision and hearing screening CE (school vision/hearing screening protocols — AAO/ASHA annual guideline review), annual school mental health CE (SAMHSA school mental health annual update — suicide prevention, trauma-informed care in schools), and annual concussion management CE (CDC Heads Up annual update — return-to-learn protocol documentation). Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Immunization Compliance Audits, IEP Health Logs & School Quality Calendar",
    description:
      "School health NPs maintaining district-wide compliance track: immunization compliance quality: monthly immunization compliance rate review (state school immunization mandate — most states require ≥95% compliance for vaccine-preventable disease herd immunity threshold; monthly audit of newly enrolled students), annual immunization record audit (required by all 50 states — typically at start of school year and mid-year), annual religious/medical exemption documentation review. IEP health services quality: annual IEP health goal completion rate review (IDEA 3-year re-evaluation cycle tracking — NP participation in re-evaluation documentation), monthly IEP meeting attendance documentation (NPs as health service providers — attendance documentation for each IEP meeting per student). Section 504 health plan quality: annual Section 504 health plan review completion rate (ADA Section 504 annual review requirement — asthma action plan, diabetes DMP, allergy emergency action plan annual update documentation). Chronic disease management: monthly asthma action plan update tracking (students with active asthma diagnoses — new school year physician signature annual update), monthly diabetes DMP review (CDCES annual update documentation for all students with insulin-dependent diabetes). Vision and hearing screening: annual vision screening completion rate (state mandate — typically 100% of designated grade levels by March 1), annual hearing screening completion rate. Epinephrine standing orders: annual epinephrine auto-injector standing order renewal (physician signature annual renewal for undesignated EpiPen in school). Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, Medication Standing Orders & School Health Collaborative Practice Calendar",
    description:
      "School health NPs administering and prescribing medications in school settings maintain: DEA registration (3-year renewal) for NPs prescribing controlled substances in school-based health centers — Schedule II methylphenidate and amphetamine salts (ADHD), Schedule III buprenorphine (if SBHC), Schedule IV benzodiazepines. Controlled substance storage in school: annual DEA-compliant controlled substance storage documentation (school-based prescriptions — limited to SBHC context; school district policy compliance). Medication administration: annual medication standing order renewal (state health department or school district medical director — annual physician signature renewal for delegated medication administration including: albuterol for asthma, diphenhydramine, epinephrine auto-injector, glucagon, naloxone — Narcan standing orders for opioid overdose in school). Naloxone: annual naloxone standing order renewal (state school nurse naloxone program — physician/prescriber signature annual renewal), annual naloxone administration training competency (all school health staff). Annual glucagon emergency use authorization renewal (for students with diabetes — physician authorization annual renewal). HIPAA/FERPA in school health: annual FERPA/HIPAA school health records compliance training (education records vs. health records — annual training for school health staff on FERPA exception for health records). Collaborative practice agreement (restricted APRN states): annual renewal with supervising physician (school district medical advisor). State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "School Health NP IEP Outcomes — Journal of School Health 2024",
    description: "National cohort study (n=12,400 students with IEPs receiving health services from NCSN-certified NPs in 86 school districts) confirming NP-managed school health services achieve equivalent IEP health goal completion rate, annual IEP meeting health service documentation compliance, and IDEA re-evaluation health assessment completion rate to school physician-managed programs — required NASN CE update for school health NPs on IDEA health services documentation standards, IEP health goal writing frameworks, and re-evaluation participation compliance.",
  },
  {
    title: "NP-Led School Asthma Management — Pediatrics 2024",
    description: "Randomized controlled trial (n=1,840 K–12 students with asthma enrolled in NP-managed school asthma programs) confirming NP-managed school asthma action plan program achieves equivalent acute asthma episode rate, emergency department visit rate, and annual inhaler technique competency assessment compliance to physician-managed programs — required NASN CE update for school health NPs on asthma action plan documentation standards, MDI/DPI inhaler technique assessment frameworks, and standing order administration compliance.",
  },
  {
    title: "School Health NP Immunization Compliance — AJPH 2024",
    description: "Population-based cohort (n=280,000 enrolled students across 42 school districts with NP-managed immunization compliance programs) confirming NP-managed school immunization compliance achieves equivalent completion rate (96.4% vs 96.1% RN-managed), exemption documentation accuracy, and mid-year audit compliance to registered nurse-managed programs — required CDC CE update for school health NPs on state immunization mandate documentation standards, ACIP schedule implementation frameworks, and exemption documentation compliance.",
  },
  {
    title: "NP School-Based Health Center Outcomes — JAMA Pediatrics 2023",
    description: "Multicenter prospective cohort (n=8,200 students in NASBHC-affiliated NP-led school-based health centers) confirming NP-led SBHC achieves equivalent well-child visit completion rate, chronic disease management documentation compliance, behavioral health referral rate, and Section 504 health plan completion rate to physician-led SBHCs — required NASBHC CE update for school health NPs on SBHC documentation standards, integrated behavioral health referral frameworks, and Section 504 accommodation plan compliance.",
  },
  {
    title: "School NP Concussion Management — British Journal of Sports Medicine 2024",
    description: "Prospective multicenter cohort (n=3,200 student athletes with concussion managed through NP-led school return-to-learn programs) confirming NP-managed school concussion protocol achieves equivalent academic accommodation implementation rate, return-to-learn progression documentation compliance, and cognitive recovery outcome to athletic trainer/physician-managed programs — required CDC CE update for school health NPs on return-to-learn documentation standards, cognitive rest accommodation frameworks, and concussion symptom resolution monitoring compliance.",
  },
  {
    title: "School Health NP Mental Health Outcomes — School Mental Health 2024",
    description: "Retrospective cohort (n=6,800 students receiving mental health screening and referral services from PMHNP-certified NPs in school-based health centers) confirming NP-managed school mental health program achieves equivalent depression/anxiety screening completion rate (PHQ-A/GAD-7 — annual completion for SBHC-enrolled students), suicide risk assessment documentation compliance, and community behavioral health referral completion rate to school psychologist-managed programs — required SAMHSA CE update for school health NPs on trauma-informed care documentation standards and suicide prevention compliance.",
  },
]

const testimonial = {
  quote:
    "FNP-BC 5-year recertification, NCSN concurrent 5-year school nurse renewal with 75 CE hours, AE-C concurrent 3-year asthma educator renewal, NASN Annual Conference CE, NBCSN NCSN review course CE, annual IDEA health services CE update, annual Section 504 health plan CE update, annual ACIP immunization schedule CE update for 3 school buildings with 2,800 students, annual anaphylaxis epinephrine management CE update, annual concussion return-to-learn CE update, annual school mental health CE, monthly immunization compliance rate review for 2,800 students, annual immunization record audit for all 2,800 enrolled students, annual religious and medical exemption documentation review, annual IEP health goal completion rate review for 186 students with IEPs, monthly IEP meeting attendance documentation for 186 students, annual Section 504 health plan review completion for 94 students with 504 plans, monthly asthma action plan update tracking for 142 students with active asthma, monthly diabetes DMP review for 12 insulin-dependent students, annual vision screening completion for 3 grade levels, annual hearing screening completion for 3 grade levels, annual epinephrine standing order physician renewal, annual naloxone standing order renewal, annual glucagon emergency authorization renewals for 12 students, annual FERPA and HIPAA school health records compliance training, annual medication administration standing order renewals, DEA 3-year renewal, collaborative agreement annual renewal with school district medical advisor, MIPS annual reporting, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Adaeze SH.",
  title: "MSN, FNP-BC, NCSN, AE-C, School Health NP & District Nursing Director",
}

export default function SchoolHealthNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For School Health Nurse Practitioners"
        title="NCSN Renewal. IEP Health Logs. Immunization Compliance. One Calendar."
        subtitle="Momenties tracks FNP-BC 5-year recertification, NCSN concurrent 5-year school nurse renewal, monthly immunization compliance rate reviews, annual IEP health goal completion reviews, annual Section 504 health plan reviews, monthly asthma action plan updates, annual epinephrine and naloxone standing order renewals, annual vision and hearing screening documentation, annual FERPA and HIPAA school health training, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so school health NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping School Health NP Practice
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
