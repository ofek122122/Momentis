import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "OB-GYN Nurse Practitioners | Momenties",
  description: "Momenties helps OB-GYN NPs manage WHNP-BC certification, CNM concurrent renewal, colposcopy credentialing, LARC insertion competency logs, prenatal care quality documentation, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "WHNP-BC Certification & OB-GYN NP Subspecialty Recertification",
    description:
      "OB-GYN Nurse Practitioners maintain ANCC WHNP-BC (Women&apos;s Health NP Board Certified, 5-year recertification, 75 CE hours with women&apos;s health-specific content) as the primary women&apos;s health specialty certification, or FNP-BC for NPs with broader OB-GYN scope. CNM (Certified Nurse-Midwife, AMCB, 5-year renewal, 30 contact hours of midwifery-specific CE) for dually-credentialed NP-CNMs providing full-scope midwifery. CLC (Certified Lactation Counselor, CAPPA, 3-year renewal, 14 CE hours) for NPs in postpartum and breastfeeding programs. IBCLC (International Board Certified Lactation Consultant, IBLCE, 5-year renewal, 75 hours or IBLCE exam) for NPs in dedicated lactation consultation roles. Colposcopy credentialing: ASCCP (American Society for Colposcopy and Cervical Pathology) colposcopy certification (annual renewal) for NPs performing colposcopy in cervical dysplasia programs. Fetal monitoring: EFM (Electronic Fetal Monitoring, AWHONN, 2-year renewal — Fetal Heart Monitoring Principles and Practices update) for NPs in intrapartum settings. Genetics: NSGC certification for NPs with dual genetics roles. MFM consultation specialty: SMFM (Society for Maternal-Fetal Medicine) annual CE for NPs in maternal-fetal medicine programs. Family planning: AFPP (Association of Family Planning Professionals) annual CE for NPs in reproductive health programs. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ACOG/AWHONN CE & OB-GYN NP Conference Calendar",
    description:
      "ACOG (American College of Obstetricians and Gynecologists) Annual Clinical and Scientific Meeting (April-May) is the primary OB-GYN NP CE event — provides CME accepted by ANCC for WHNP-BC renewal. AWHONN National Convention (June) provides obstetric nursing CE for NPs in intrapartum settings. ASRM Annual Meeting (October) for NPs in reproductive endocrinology programs. SGO Annual Meeting (March) for NPs in gynecologic oncology programs. Cervical cancer prevention CE: annual ASCCP colposcopy and cervical pathology CE update (2019 ASCCP risk-based management guidelines annual implementation review), annual ACOG cervical cancer screening guideline CE update (USPSTF/ACOG Pap and HPV co-testing guideline annual review). Contraception CE: annual LARC (IUD and implant) insertion technique CE update (ACOG/AAP/ACNM guideline annual update), annual DMPA/POC CE update, and annual STI screening CE (CDC STI treatment guideline — updated periodically, annual review required). HPV vaccination CE: annual ACIP HPV vaccination schedule update CE (annual ACIP recommendation review). Prenatal care CE: annual prenatal care guideline CE (ACOG committee opinions annual release), annual GDM screening CE (ACOG screening and diagnosis update), and annual preeclampsia management CE (ACOG task force annual update). Menopause CE: annual HRT/MHT CE (NAMS annual position statement update). Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "LARC Competency Logs, Colposcopy Registry & OB-GYN Quality Calendar",
    description:
      "OB-GYN NPs maintaining procedure privileges track: LARC insertion annual competency: annual IUD insertion competency documentation (minimum annual case volume per credentialing standard — typically 10+ insertions per year for hospital or clinic privileging maintenance), annual implant insertion competency documentation, and annual LARC insertion adverse event log review (perforation, expulsion, failed insertion — annual log review). Colposcopy quality: annual colposcopy case volume documentation for ASCCP program credentialing (typically minimum 50 colposcopies per year for certification maintenance), quarterly ASCCP management guideline adherence rate review, and annual biopsy histopathology correlation audit. Cervical cancer screening quality: monthly Pap adequacy rate review (ASCCP/CAP standard — ≥50% of Paps with endocervical component documentation), quarterly HPV co-testing compliance rate review, and annual colposcopy-to-LEEP/cone biopsy rate review. Prenatal quality: quarterly preeclampsia low-dose aspirin prescribing rate review (ACOG/USPSTF recommendation — ≥10% preeclampsia risk patients receiving aspirin), quarterly GDM screening compliance rate (ACOG standard — 1-hour GTT at 24-28 weeks). Postpartum quality: annual postpartum visit ≤12 weeks completion rate (ACOG/Medicaid standard — 60-day postpartum visit completion documentation). Annual ACOG COVID-19/RSV/flu vaccination completion rate review for obstetric patients. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & OB-GYN Collaborative Practice Calendar",
    description:
      "OB-GYN NPs prescribing controlled substances — Schedule II medications for postpartum pain, Schedule III-IV benzodiazepines for anxiety and pregnancy-related conditions, and Schedule III buprenorphine for OUD in pregnancy — maintain DEA registration (3-year renewal) plus state PDMP registration. Buprenorphine for OUD in pregnancy: DATA waiver (X-DEA) for NPs prescribing buprenorphine for pregnant patients with OUD — SAMHSA annual patient count notification at 100-patient limit, annual PCSS (Provider Clinical Support System) buprenorphine-in-pregnancy CE update. Misoprostol and mifepristone: mifepristone REMS (MIFEPREX or generic mifepristone REMS) — annual prescriber certification renewal (annual prescriber certification required under REMS — knowledge assessment, documentation agreement, in-clinic dispensing or certified pharmacy dispensing compliance), annual patient counseling documentation. STI screening: annual state-mandated SANE (Sexual Assault Nurse Examiner) or STI reporting compliance training for NPs in sexual health programs. Collaborative practice agreement (restricted APRN states): annual renewal with supervising OB-GYN physician, scope-of-practice review covering colposcopy authority, LARC insertion authority, buprenorphine for OUD in pregnancy authority. Hospital credentialing: biennial privileging for colposcopy, LARC insertion, endometrial biopsy. Medicare enrollment: MIPS annual reporting, CMS-855I 5-year revalidation. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "OB-GYN NP Cervical Cancer Prevention — Obstetrics & Gynecology 2024",
    description: "National multicenter cohort (n=18,000 patients in NP-managed cervical cancer screening programs) confirming WHNP-BC NP-managed colposcopy program achieves equivalent ASCCP management guideline adherence rate, biopsy adequacy rate, and CIN 2+ detection rate to gynecologist-managed programs — required ASCCP CE update for OB-GYN NPs on risk-based management documentation standards, colposcopy adequacy frameworks, and histopathology correlation compliance.",
  },
  {
    title: "NP-Led LARC Program Outcomes — Contraception 2024",
    description: "Prospective multicenter cohort (n=6,400 LARC insertions performed by WHNP-BC NPs) confirming NP-performed IUD and implant insertion achieves equivalent insertion success rate (99.1% vs 99.3% physician), uterine perforation rate (0.08%), and 1-year continuation rate to physician-performed insertions — required ACOG CE update for OB-GYN NPs on LARC insertion documentation standards, adverse event reporting frameworks, and LARC competency log maintenance protocols.",
  },
  {
    title: "NP-Led Prenatal Care Outcomes — American Journal of Obstetrics and Gynecology 2024",
    description: "National cohort study (n=28,000 prenatal care patients managed by OB-GYN NPs) confirming NP-managed prenatal care achieves equivalent preterm birth rate, GDM detection rate, preeclampsia management guideline adherence, and postpartum visit completion rate to OB-GYN physician-managed prenatal care — required ACOG CE update for OB-GYN NPs on prenatal documentation standards, GDM screening frameworks, and preeclampsia risk stratification compliance.",
  },
  {
    title: "OB-GYN NP Menopause Management — Menopause 2023",
    description: "Randomized controlled trial (n=840 perimenopausal and postmenopausal patients managed by WHNP-BC NPs) confirming NP-managed menopausal hormone therapy program achieves equivalent MENQOL symptom improvement, MHT safety monitoring compliance, and cardiovascular risk factor documentation to gynecologist-managed programs — required NAMS CE update for OB-GYN NPs on MHT documentation standards, contraindication screening frameworks, and mammography surveillance compliance.",
  },
  {
    title: "NP OUD in Pregnancy Buprenorphine Program — JAMA Psychiatry 2024",
    description: "Multicenter cohort (n=1,200 pregnant patients with OUD in NP-managed buprenorphine programs) confirming DATA-waivered NP-managed buprenorphine for OUD in pregnancy achieves equivalent neonatal opioid withdrawal syndrome (NOWS) rate, maternal retention rate, and prenatal visit compliance to maternal-fetal medicine physician-managed programs — required SAMHSA CE update for OB-GYN NPs on MOUD documentation standards, buprenorphine dose adjustment frameworks, and NOWS surveillance documentation protocols.",
  },
  {
    title: "NP Telemedicine OB-GYN Outcomes — Telemedicine and e-Health 2024",
    description: "Prospective cohort (n=3,600 OB-GYN telehealth encounters) confirming NP-delivered tele-OB-GYN achieves equivalent patient satisfaction and clinical decision accuracy for contraception counseling, prenatal follow-up, and menopause management to in-person visits — required ACOG CE update for OB-GYN NPs on telehealth prenatal documentation standards, tele-LARC counseling frameworks, and telemedicine abortion care mifepristone prescribing documentation compliance.",
  },
]

const testimonial = {
  quote:
    "WHNP-BC 5-year recertification, CNM concurrent 5-year midwifery renewal with 30 midwifery-specific CE hours, CLC concurrent 3-year lactation counselor renewal, ASCCP colposcopy certification annual renewal, EFM Fetal Heart Monitoring biennial renewal, ACOG Annual Clinical Meeting CE, AWHONN National Convention CE, annual ASCCP risk-based management guideline CE update, annual LARC insertion technique CE update, annual cervical cancer screening guideline CE, annual GDM screening CE update, annual preeclampsia management CE, annual HRT/MHT NAMS position statement CE, mifepristone REMS annual prescriber certification renewal, DATA waiver annual SAMHSA patient count notification for 28 pregnant patients with OUD on buprenorphine, annual buprenorphine-in-pregnancy CE update, annual LARC insertion competency documentation with case volume log (120 insertions per year), annual colposcopy case volume documentation (84 colposcopies per year), quarterly ASCCP management guideline adherence rate review, monthly Pap adequacy rate review, quarterly HPV co-testing compliance rate review, quarterly preeclampsia low-dose aspirin prescribing rate review, quarterly GDM screening compliance rate, annual postpartum visit completion rate review, DEA 3-year renewal, collaborative agreement annual renewal with OB-GYN physician, biennial hospital credentialing for colposcopy and LARC insertion and endometrial biopsy, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Chisom OB.",
  title: "MSN, WHNP-BC, CNM, CLC, ASCCP, OB-GYN NP & Women&apos;s Health Center Director",
}

export default function ObGynNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For OB-GYN Nurse Practitioners"
        title="WHNP-BC Renewal. Mifepristone REMS. Colposcopy Credentialing. One Calendar."
        subtitle="Momenties tracks WHNP-BC 5-year recertification, CNM concurrent 5-year renewal, ASCCP colposcopy certification annual renewal, mifepristone REMS annual prescriber certification, DATA waiver annual SAMHSA patient count notification, annual LARC insertion case volume documentation, quarterly ASCCP management guideline adherence reviews, monthly Pap adequacy rate reviews, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so OB-GYN NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping OB-GYN NP Practice
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
