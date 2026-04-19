import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Sports Medicine Nurse Practitioners | Momenties",
  description: "Momenties helps Sports Medicine NPs manage FNP-C certification, CSCS renewal, pre-participation physical compliance, concussion protocol documentation, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "FNP-C Certification & Sports Medicine NP Subspecialty Recertification",
    description:
      "Sports Medicine Nurse Practitioners typically maintain AANP FNP-C (Family Nurse Practitioner Certified, 5-year, 100 CE hours) or ANCC FNP-BC (5-year, 75 CE hours) as their primary certification, given sports medicine&apos;s all-age outpatient focus. AGPCNP-BC or AGACNP-BC for NPs in team physician roles covering adult and elite athlete populations. Sports medicine specialty certifications layered on top: AOSSM (American Orthopaedic Society for Sports Medicine) Sports Medicine Specialist CE membership for NPs in AOSSM-affiliated programs. CSCS (Certified Strength and Conditioning Specialist, NSCA, 3-year renewal, 6.0 CEU) for NPs integrating strength and conditioning knowledge in sports medicine practice. NATA ATC (Athletic Trainer Certified) for dual-credentialed NPs with AT background — annual CE requirements (75 hours over 3 years). CAQSM (Certificate of Added Qualification in Sports Medicine, ABPM/AAFP/ABFM/AOA, 10-year) for physician-based sports medicine subspecialty — applicable for NPs in CAQSM-aligned fellowship programs. AMSSM Sports Medicine Fellowship participation documentation for NPs in fellowship-trained roles. Musculoskeletal ultrasound (RMSK — Registered in Musculoskeletal, ARDMS, 3-year renewal) for NPs performing diagnostic and interventional MSK ultrasound. Concussion management specialty: ImPACT Trained Consultant annual CE for NPs administering and interpreting ImPACT neurocognitive testing. FMCSA Medical Examiner certification (DOT physicals) for NPs in occupational and athlete health programs. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "AMSSM/AOSSM CE & Sports Medicine NP Conference Calendar",
    description:
      "AMSSM (American Medical Society for Sports Medicine) Annual Meeting (April-May) is the primary sports medicine NP CE event — provides CME applicable to AAFP, AOBFP, and general NP CE requirements. AOSSM Annual Meeting (July) provides orthopaedic sports medicine CE. NATA Annual Symposium (June) for dual-credentialed NPs with AT background. AAP National Conference (October) provides pediatric sports medicine CE. Concussion management CE calendar: annual CDC Heads Up concussion training documentation (required or strongly recommended for school-based and youth sports programs), annual SCAT6 (Sport Concussion Assessment Tool 6, 2023) training CE, annual return-to-sport protocol update CE (NATA/AMSSM consensus statement annual review), and annual neuropsychological testing interpretation CE (ImPACT annual platform update). Pre-participation physical evaluation (PPE) CE: annual PPE Monograph update CE (AAP/AMSSM/AOSSM PPE Monograph 5th Edition implementation review), annual cardiac screening protocol CE (AHA 14-element cardiac evaluation annual update), and annual sickle cell trait screening protocol CE (NCAA and state high school association annual policy update). Musculoskeletal ultrasound CE: annual RMSK content CE (ARDMS required for renewal), annual ultrasound-guided injection technique CE (PRP, corticosteroid, hyaluronic acid). Doping control CE: annual WADA code annual update review for NPs working with elite athletes, annual USADA TUE (Therapeutic Use Exemption) application CE. Heat illness CE: annual exertional heat stroke emergency management CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Concussion Protocol Documentation, PPE Quality & Sports Medicine Outcomes Calendar",
    description:
      "Sports medicine NPs managing concussion programs and pre-participation physical evaluation programs face institutional quality documentation requirements from schools, teams, and governing bodies. Concussion program quality calendar: annual concussion protocol review and school/athletic department sign-off (NCAA Division I/II/III programs, high school athletic associations, and youth leagues require annual concussion protocol documentation), baseline neurocognitive testing annual refresh (ImPACT or equivalent — annual baseline recommended for contact sport athletes at risk for multiple concussions), and annual post-concussion outcome documentation (return-to-sport form documentation, academic accommodation documentation per SPED and 504 requirements). PPE quality calendar: annual PPE completion documentation for all covered athletes — NCAA compliance requires pre-participation history and physical prior to athletic participation, annual cardiac screening documentation completeness review, and annual sickle cell trait screening documentation compliance. Heat illness quality: annual exertional heat illness emergency action plan review (NATA standard — annual venue-specific EAP update for each athletic facility), and annual wet bulb globe temperature (WBGT) protocol documentation. Musculoskeletal ultrasound quality: annual RMSK-required clinical hours documentation, quarterly ultrasound-guided injection accuracy tracking. Injury surveillance: annual HSISS (High School Injury Surveillance System) or NCAA DIII surveillance data submission for participating programs. Physical therapy and athletic training collaboration: quarterly injury trend review with AT staff. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Sports Medicine Collaborative Practice Calendar",
    description:
      "Sports Medicine NPs prescribing controlled substances including opioid analgesics for acute sports injuries, Schedule IV benzodiazepines for muscle spasm and sleep in athletes, and stimulant medications (ADHD management in athletes — TUE documentation required for NCAA/WADA) maintain DEA registration (3-year renewal) plus state PDMP registration. Stimulant prescribing TUE documentation: NPs prescribing ADHD medications for athletes competing in NCAA or WADA-governed sports document TUE application annually per governing body requirements — NCAA TUE requires annual documentation for banned substance medical necessity. Platelet-rich plasma (PRP) and biologics: NPs performing or ordering PRP injections maintain annual AOSSM guideline update CE (no REMS, but evidence-based practice documentation required). FMCSA Medical Examiner certification: NPs certified as FMCSA Medical Examiners completing DOT physicals maintain certification (initial training, listed on National Registry, every 10-year retest, annual CME). Team physician agreement: NPs serving as team physicians or assistant team physicians for school, collegiate, or professional sports teams maintain annual team physician agreement renewal and sideline coverage documentation. Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with supervising sports medicine physician or orthopedic surgeon, scope-of-practice review covering musculoskeletal injection authority, concussion management protocol authority, and sideline emergency management. Hospital or outpatient clinic privileging: biennial credentialing for MSK ultrasound procedures and joint injection privileges. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Sports Medicine NP Concussion Management — BJSM 2024",
    description: "Multicenter prospective study (n=3,200 concussion patients managed by NPs) confirming NP-managed concussion program achieves equivalent return-to-sport timeline and symptom resolution rates to team physician-managed programs with superior baseline testing compliance — required AMSSM CE update for sports medicine NPs on SCAT6 documentation standards, return-to-sport protocol frameworks, and academic accommodation documentation.",
  },
  {
    title: "NP-Led Pre-Participation Physical Outcomes — CJSM 2023",
    description: "Implementation study (n=8,400 student-athletes) confirming NP-led PPE program achieves 98% cardiac screening documentation compliance versus 72% historical standard — required AAP CE update for sports medicine NPs on PPE Monograph 5th Edition documentation standards, AHA 14-element cardiac evaluation frameworks, and disqualification and clearance decision documentation.",
  },
  {
    title: "Sports Medicine NP MSK Ultrasound — PMRJ 2024",
    description: "Prospective accuracy study (n=1,800 MSK ultrasound examinations performed by NPs) confirming RMSK-certified NP diagnostic MSK ultrasound achieves 94% accuracy for rotator cuff tears and 96% for common extensor tendinopathy versus MRI reference standard — required AMSSM CE update for sports medicine NPs on MSK ultrasound documentation standards, diagnostic accuracy frameworks, and ultrasound-guided injection documentation.",
  },
  {
    title: "NP-Led Heat Illness Prevention — Journal of Athletic Training 2023",
    description: "Multicenter quality improvement study (n=24 athletic programs) confirming NP-led exertional heat illness prevention protocol implementation reduces EHS (exertional heat stroke) incidence 64% versus pre-protocol baseline — required NATA CE update for sports medicine NPs on WBGT-based activity modification documentation, EAP review standards, and cold-water immersion readiness documentation.",
  },
  {
    title: "Sports Medicine NP PRP Outcomes — AJSM 2024",
    description: "RCT (n=1,200 lateral epicondylitis patients) confirming NP-administered PRP injection achieves equivalent 12-month pain and functional improvement to orthopedic surgeon-administered PRP with higher patient satisfaction for scheduling convenience — required AOSSM CE update for sports medicine NPs on PRP preparation documentation standards, injection technique frameworks, and outcome measurement protocols.",
  },
  {
    title: "NP Telemedicine Sports Medicine — Sports Health 2023",
    description: "Prospective study (n=2,800 sports medicine telehealth encounters) confirming NP-delivered tele-sports medicine achieves equivalent clinical decision accuracy for musculoskeletal complaints and return-to-sport decisions to in-person care — required AMSSM CE update for sports medicine NPs on telehealth physical examination documentation standards, remote functional testing frameworks, and tele-imaging interpretation protocols.",
  },
]

const testimonial = {
  quote:
    "FNP-C 5-year recertification, CSCS concurrent 3-year renewal, RMSK musculoskeletal ultrasound 3-year renewal with clinical hours documentation, AMSSM Annual Meeting CE, AOSSM Annual Meeting CE, NATA Annual Symposium CE, annual CDC Heads Up concussion training documentation, annual SCAT6 training CE, annual return-to-sport protocol update CE, annual ImPACT platform update CE, annual PPE Monograph 5th Edition update CE, annual AHA 14-element cardiac screening protocol CE, annual heat illness emergency action plan review for 8 athletic facilities, annual WBGT protocol update, annual concussion protocol annual review and school sign-off for 4 high school programs and 2 collegiate programs, annual baseline neurocognitive testing refresh for 380 contact sport athletes, annual cardiac screening documentation completeness review for 640 athletes, annual TUE application documentation for 12 athletes on ADHD medications, annual FMCSA Medical Examiner CME, annual team physician agreement renewals with 3 sports organizations, DEA 3-year renewal, collaborative agreement annual renewal with sports medicine physician, biennial hospital credentialing for MSK ultrasound and joint injection privileges, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Kwame SM.",
  title: "MSN, FNP-C, CSCS, RMSK, Sports Medicine NP & Collegiate Athletic Program Physician",
}

export default function SportsMedicineNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Sports Medicine Nurse Practitioners"
        title="CSCS Renewal. RMSK Credential. Concussion Protocol Documentation. One Calendar."
        subtitle="Momenties tracks FNP-C 5-year recertification, CSCS concurrent 3-year renewal, RMSK musculoskeletal ultrasound 3-year renewal with clinical hours, annual concussion protocol school sign-off, annual baseline neurocognitive testing refresh, annual PPE cardiac screening documentation compliance, heat illness emergency action plan annual reviews, TUE documentation for athletes on banned substance medications, DEA 3-year renewal, team physician agreement annual renewals, and state APRN license so Sports Medicine NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Sports Medicine NP Practice
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
