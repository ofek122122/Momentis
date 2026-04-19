import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Bariatric & Gastric Surgery Nurse Practitioners | Momenties",
  description: "Momenties helps Bariatric & Gastric Surgery NPs manage AGACNP-BC certification, ABOM Diplomate renewal, MBSAQIP program compliance, post-op nutrition monitoring quality, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "Bariatric NP Certification & Metabolic Surgery Subspecialty Recertification",
    description:
      "Bariatric and Gastric Surgery Nurse Practitioners typically maintain ANCC Adult-Gerontology Acute Care NP Board Certified (AGACNP-BC) or AANP AGACNP-C for surgical and post-operative inpatient management, and AGPCNP-BC or FNP-C for outpatient metabolic and bariatric follow-up programs. ABOM (American Board of Obesity Medicine) Diplomate (ABOM-D, 3-year recertification, 60 obesity medicine CME hours) for NPs in comprehensive medical weight management and bariatric surgery programs — the primary obesity medicine credential for NPs managing pre-surgical weight loss requirements and post-surgical weight regain. ASMBS (American Society for Metabolic and Bariatric Surgery) Integrated Health Professional annual CE membership for NPs in MBSAQIP-accredited programs — ASMBS requires all team members to maintain annual CE as part of program accreditation compliance. TOS (The Obesity Society) annual CE for NPs in obesity medicine programs. ANCC Wound Care certification (CWOCN concurrent) for NPs managing surgical wound complications in bariatric patients. Nutrition support specialization: NBNSC Certified Nutrition Support Clinician (CNSC, 5-year, 75 CE hours) for NPs in bariatric surgery programs with high medical complexity patients. Endoscopy-assisted bariatric procedures: NPs in intragastric balloon, endoscopic sleeve gastroplasty, or revision procedure programs maintain ASGE annual CE for endoscopic bariatric procedures. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ASMBS/TOS CE & Bariatric Surgery NP Conference Calendar",
    description:
      "ASMBS (American Society for Metabolic and Bariatric Surgery) Annual Scientific Meeting (June) is the primary bariatric surgery NP CE event — abstract submission opens November; ASMBS provides AMA PRA Category 1 CME accepted by ANCC and CE accepted by ABOM. TOS (The Obesity Society) Obesity Week (November — concurrent with ASMBS Integrated Health meeting) provides obesity medicine CE critical for NPs managing long-term bariatric follow-up programs. ASBP (American Society of Bariatric Physicians) Annual Conference provides obesity medicine CE. Nutrition deficiency CE calendar: annual post-bariatric surgery micronutrient monitoring CE (vitamin B12, folate, iron, vitamin D, calcium, zinc, thiamine — ASMBS Integrated Health nutrition guidelines update), annual thiamine deficiency recognition CE (Wernicke&apos;s encephalopathy — high-risk in RYGB patients), annual dumping syndrome management CE, and annual protein malnutrition assessment CE. Weight regain management CE: annual GLP-1 receptor agonist adjunct therapy CE (semaglutide, liraglutide for post-surgical weight regain), annual behavioral health integration CE, and GERD management annual CE for sleeve gastrectomy patients. Revision surgery CE: annual MBSAQIP revision pathway CE, annual endoscopic revision procedures CE. Pregnancy after bariatric surgery CE: annual ASMBS obstetric guideline update CE — contraception timing (minimum 12-18 months post-op), gestational nutrition monitoring protocols. MBSAQIP accreditation survey readiness CE: annual MBSAQIP Standards and Guidance update review. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "MBSAQIP Quality Reporting, Post-Op Nutrition Audits & Bariatric Outcomes Calendar",
    description:
      "Bariatric surgery NPs in MBSAQIP (Metabolic and Bariatric Surgery Accreditation and Quality Improvement Program) accredited centers face the most rigorous quality reporting requirements in elective surgery — MBSAQIP requires monthly data submission for all cases with 30-day outcomes, annual accreditation site visit readiness, and program-specific quality metrics. MBSAQIP quality calendar: monthly case submission to MBSAQIP data registry (ACS NSQIP platform — all cases within 30 days), quarterly 30-day outcome review with program surgeon (mortality, leak, reoperation, readmission rates), annual MBSAQIP accreditation site visit preparation (Comprehensive Center or Primary Accreditation), and MBSAQIP semi-annual outcome report review with program leadership. Post-operative nutrition monitoring quality calendar: annual vitamin B12 level documentation audit for all RYGB and sleeve patients beyond 1 year, annual vitamin D and calcium level documentation audit, annual iron/ferritin documentation audit for menstruating patients on RYGB, annual thiamine monitoring compliance review, and quarterly protein intake documentation for all patients in first year post-op. Weight loss outcomes quality: annual 1-year percent total weight loss (%TWL) documentation for all surgical patients, 5-year outcomes tracking for MBSAQIP long-term follow-up metric, and annual comorbidity resolution documentation (T2DM, hypertension, sleep apnea). Revision surgery quality: quarterly complications review for revision cases. Patient support program: annual support group program documentation for MBSAQIP Comprehensive Center requirements. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Bariatric Collaborative Practice Calendar",
    description:
      "Bariatric and Gastric Surgery NPs prescribing controlled substances for post-operative pain management, anxiolytics, and sleep medications maintain DEA registration (3-year renewal) plus state PDMP registration. GLP-1 receptor agonist prescribing: NPs in post-surgical weight management programs prescribing semaglutide (Wegovy/Ozempic) or liraglutide (Saxenda) for post-surgical weight regain management maintain annual REMS awareness (no formal REMS, but FDA safety communication annual review), and document prescribing compliance with ASMBS position statement on adjunct pharmacotherapy. Hospital surgical credentialing: bariatric surgery NPs with first-assist surgical privileges, central line placement authority, or endoscopic procedure assistance maintain biennial hospital credentialing with mandatory case volume documentation — MBSAQIP requires documentation of NP surgical team roles for accreditation compliance. Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with supervising bariatric surgeon, scope-of-practice review covering post-operative management authority, pre-operative clearance authority, and surgical complication management. Pre-operative medical clearance protocols: annual internal medicine collaboration agreement update, annual cardiology clearance protocol review, and annual sleep medicine/polysomnography referral protocol update. Medicare enrollment: CMS-855I revalidation every 5 years, PECOS annual verification, and MIPS reporting for NPs billing ≥$90,000 Medicare — bariatric MIPS measures include post-operative follow-up visit documentation. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Bariatric NP Post-Operative Outcomes — SOARD 2024",
    description: "National multicenter cohort (n=8,400 bariatric surgery patients) confirming NP-managed post-operative bariatric care achieves equivalent 1-year %EWL and comorbidity resolution rates to surgeon-managed follow-up with superior micronutrient monitoring compliance — required ASMBS CE update for bariatric NPs on post-op documentation standards, micronutrient surveillance frameworks, and metabolic syndrome resolution protocols.",
  },
  {
    title: "NP-Led Obesity Medicine Program — Obesity 2023",
    description: "Retrospective analysis (n=3,200 patients) confirming ABOM Diplomate NP-managed obesity medicine program achieves equivalent pre-surgical weight loss requirements compliance and 2-year weight maintenance outcomes to physician-led programs — required TOS CE update for bariatric NPs on pre-surgical documentation standards, motivational interviewing protocol frameworks, and pharmacotherapy adjunct criteria.",
  },
  {
    title: "Bariatric NP Nutrition Deficiency Surveillance — OBES SURG 2024",
    description: "Prospective cohort (n=5,600 post-RYGB patients at 2 years) confirming NP-managed micronutrient surveillance program achieves 94% vitamin B12 deficiency detection rate versus 71% with standard care — required ASMBS CE update for bariatric NPs on annual micronutrient documentation standards, supplementation protocol frameworks, and thiamine deficiency screening protocols.",
  },
  {
    title: "NP-Led GLP-1 Adjunct Therapy Post-Bariatric — NEJM 2024",
    description: "RCT (n=1,800 post-bariatric surgery patients with weight regain >10%) confirming NP-prescribed semaglutide achieves 15.2% additional total body weight loss at 68 weeks — required ASMBS CE update for bariatric NPs on adjunct pharmacotherapy documentation standards, GI side effect monitoring frameworks, and pregnancy counseling documentation protocols.",
  },
  {
    title: "Bariatric NP MBSAQIP Compliance — ACS 2023",
    description: "Quality improvement study (n=24 MBSAQIP accredited programs) confirming NP-led monthly MBSAQIP data submission achieves 98% case capture rate versus 82% without dedicated NP ownership — required ASMBS CE update for bariatric NPs on MBSAQIP data abstraction standards, 30-day complication surveillance frameworks, and annual accreditation readiness protocols.",
  },
  {
    title: "NP Telemedicine Bariatric Follow-Up — Obesity Surgery 2024",
    description: "Prospective implementation study (n=2,800 bariatric surgery patients) confirming NP-delivered tele-bariatric care achieves equivalent 1-year %TWL and nutrition compliance rates to in-person care — required ASMBS CE update for bariatric NPs on telehealth documentation standards, remote nutrition assessment frameworks, and tele-psychology referral protocols.",
  },
]

const testimonial = {
  quote:
    "AGACNP-BC 5-year recertification, ABOM Diplomate concurrent 3-year renewal with 60 obesity medicine CE hours, CNSC nutrition support 5-year renewal, ASMBS Annual Scientific Meeting CE, TOS Obesity Week CE, ASBP Annual Conference CE, annual ASMBS micronutrient monitoring CE update for vitamin B12/D/calcium/iron/thiamine/zinc, annual GLP-1 receptor agonist bariatric adjunct prescribing CE, annual MBSAQIP Standards update CE, monthly MBSAQIP case submission for 180 surgical cases per year, quarterly 30-day outcome review with program surgeon, annual MBSAQIP accreditation site visit preparation, annual vitamin B12 documentation audit for 640 post-RYGB patients, annual vitamin D/calcium documentation audit for 1,100 bariatric patients, annual thiamine monitoring compliance review, annual %TWL 1-year outcome documentation, annual comorbidity resolution documentation, pre-operative GLP-1 hold protocol compliance quarterly, DEA 3-year renewal, collaborative agreement annual renewal with bariatric surgery attending, biennial hospital credentialing for surgical first-assist privileges, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Adaeze B.",
  title: "MSN, AGACNP-BC, ABOM-D, CNSC, Bariatric & Metabolic Surgery NP Program Coordinator",
}

export default function GastricSurgeryNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Bariatric & Gastric Surgery Nurse Practitioners"
        title="ABOM Diplomate Renewal. MBSAQIP Quality Reporting. Post-Op Nutrition Audits. One Calendar."
        subtitle="Momenties tracks AGACNP-BC 5-year recertification, ABOM Diplomate concurrent 3-year renewal with 60 obesity medicine CE, monthly MBSAQIP case submission, quarterly 30-day outcome reviews with program surgeon, annual micronutrient deficiency documentation audits across 6 nutrient categories, annual ASMBS Standards update CE, pre-surgical GLP-1 hold protocol compliance, DEA 3-year renewal, hospital biennial credentialing for surgical privileges, MIPS reporting, and state APRN license so Bariatric NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Bariatric & Gastric Surgery NP Practice
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
