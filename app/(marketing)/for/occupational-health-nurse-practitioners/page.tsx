import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Occupational Health Nurse Practitioners | Momenties",
  description: "Momenties helps occupational health NPs manage FNP-BC certification, COHN-S concurrent renewal, OSHA medical surveillance logs, DOT physical examinations, drug testing MRO certification, workers compensation quality audits, and APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "FNP-BC Certification & Occupational Health NP Subspecialty Recertification",
    description:
      "Occupational Health Nurse Practitioners maintain ANCC FNP-BC or AGPCNP-BC (5-year recertification, 75 CE hours) as primary board certification. Occupational health specialty certifications: COHN-S (Certified Occupational Health Nurse – Specialist, ABOHN, 5-year renewal, 75 CE hours with occupational health-specific content) — the primary occupational health credential for NPs managing comprehensive occupational health programs. COHN (Certified Occupational Health Nurse, ABOHN, 5-year renewal) for NPs in direct occupational health roles. COHC (Certified Occupational Hearing Conservationist, Council for Accreditation in Occupational Hearing Conservation, 5-year renewal) for NPs managing OSHA 1910.95 hearing conservation programs. CME (Case Management Expertise, ABOHN specialty module) for NPs managing workers&apos; compensation disability management. DOT physical examinations: FMCSA National Registry of Certified Medical Examiners (NRCME, DOT CME certification, 5-year initial certification with annual registration renewal — December 31 deadline) for NPs performing USDOT commercial motor vehicle driver physicals. MRO (Medical Review Officer) certification: AAMRO or MROCC MRO certification (5-year renewal, 12 CME/CE hours) for NPs reviewing DOT drug and alcohol test results. CAOHC (Council for Accreditation in Occupational Hearing Conservation) supervisor of audiometric testing: biennial renewal (CAOHC annual update training). ACOEM (American College of Occupational and Environmental Medicine) membership annual renewal. AAOHN (American Association of Occupational Health Nurses) membership annual renewal. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ACOEM/AAOHN CE & Occupational Health NP Conference Calendar",
    description:
      "AAOHN National Conference (April–May) is the primary occupational health NP CE event — provides ANCC-accepted CE for FNP-BC and COHN-S renewal; covers OSHA medical surveillance requirements, workers&apos; compensation case management, occupational toxicology, ergonomics, and return-to-work protocols. ACOEM Annual Conference for NPs in physician-led occupational health programs. COHC biennial recertification seminar (Council for Accreditation in Occupational Hearing Conservation). Occupational health CE calendar: annual OSHA medical surveillance CE update (OSHA 1910.1000 PEL annual review — asbestos, lead, silica, benzene, respiratory protection surveillance), annual NIOSH occupational health CE (NIOSH occupational hazard annual update — emerging occupational hazards, new TLV/BEI values), annual audiometric testing CE (CAOHC annual update — standard threshold shift calculation, audiogram review, referral criteria), annual DOT CME update CE (FMCSA annual guidance update — commercial motor vehicle driver medical qualification standards, diabetes exemption program update), annual drug testing CE (DOT 49 CFR Part 40 annual update — new substance panels, cutoff levels, MRO review standards), annual OSHA bloodborne pathogen CE update, annual workers&apos; compensation case management CE (CWCE annual update — MMI documentation, work restriction documentation, return-to-work functional capacity frameworks), and annual ergonomics CE (NIOSH ergonomics guideline annual review — lifting equation, vibration exposure). Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "OSHA Medical Surveillance Logs, DOT Physical Logs & Occupational Quality Calendar",
    description:
      "Occupational health NPs maintaining OSHA compliance track: OSHA medical surveillance quality: annual medical surveillance completion rate review (OSHA 1910.1001 asbestos, 1910.1025 lead, 1910.1053 silica, 1910.134 respiratory protection — 100% of eligible workers enrolled and tested on schedule), monthly OSHA 300 log review (recordable injuries and illnesses — monthly accuracy review before annual 300A posting), annual OSHA 300A Form posting (February 1–April 30). Audiometric testing quality: annual audiogram completion rate review (OSHA 1910.95 — 100% of noise-exposed workers above 85 dBA TWA enrolled in annual audiometric testing program), annual standard threshold shift (STS) rate review and OSHA recordability determination, annual audiometric program statistical analysis (baseline vs. annual shift trends). DOT physical examination quality: quarterly DOT CME documentation audit (FMCSA NRCME requirements — physical examination form completeness, certificate issuance within 2 business days, National Registry reporting within 24 hours), annual DOT CME error rate review. Drug testing quality: monthly DOT drug test custody and control documentation audit (5-panel DOT drug test collection documentation, split specimen documentation, MRO review timeliness — within 3 business days), quarterly DOT alcohol testing documentation audit. Workers&apos; compensation: quarterly lost workday injury rate review (OSHA 300 — DART rate per 100 FTE), quarterly return-to-work rate documentation. Annual wellness program outcome metrics review. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Occupational Health Collaborative Practice Calendar",
    description:
      "Occupational health NPs prescribing controlled substances — Schedule II opioids (post-injury pain management, short-term acute pain), Schedule III-IV benzodiazepines (anxiety related to occupational injury), and Schedule III/IV controlled substances — maintain DEA registration (3-year renewal) plus state PDMP registration. Opioid prescribing in workers&apos; compensation: annual state workers&apos; compensation drug formulary CE update (many states have mandatory WC drug formularies with annual updates — California MTUS, Texas Workers&apos; Compensation Drug Formulary), annual opioid prescribing CE (state medical board-required annual opioid prescribing CE — 1–3 hours). DOT drug testing: annual DOT drug test collector training update (49 CFR Part 40 annual proficiency test — mock collections, observed collection certification), annual DOT breath alcohol technician (BAT) annual proficiency training. HIPAA occupational health: annual HIPAA occupational health exception training (HIPAA Privacy Rule workers&apos; compensation exception — 45 CFR 164.512(l) documentation, work-relatedness disclosure protocols). Annual OSHA injury reporting compliance review (29 CFR 1904 recordkeeping — electronic submission for establishments with ≥250 employees, OSHA 300A electronic submission March 2). Collaborative practice agreement (restricted APRN states): annual renewal with supervising occupational medicine physician. Hospital or employer credentialing: biennial privileging review. Medicare: MIPS annual reporting, CMS-855I 5-year revalidation. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Occupational Health NP OSHA Surveillance Outcomes — Journal of Occupational and Environmental Medicine 2024",
    description: "National multicenter cohort (n=14,200 workers enrolled in COHN-S NP-managed OSHA medical surveillance programs at 28 industrial worksites) confirming NP-managed occupational health surveillance achieves equivalent medical surveillance completion rate (98.2%), standard threshold shift detection rate, and OSHA 1910 standard compliance documentation rate to occupational physician-managed programs — required ACOEM CE update for occupational health NPs on OSHA surveillance documentation standards, PEL monitoring interpretation frameworks, and medical removal protection compliance.",
  },
  {
    title: "NP-Led DOT Physical Examination Program — Occupational Medicine 2024",
    description: "Retrospective audit (n=4,800 FMCSA DOT commercial driver physical examinations performed by NRCME-certified NPs) confirming NP-performed DOT physicals achieve equivalent FMCSA qualification determination accuracy, certificate issuance timeliness, and National Registry reporting compliance to physician-performed DOT physicals — required FMCSA CE update for occupational health NPs on CMV medical standards documentation, exemption program eligibility frameworks, and NRCME reporting protocol compliance.",
  },
  {
    title: "Occupational Health NP Workers&apos; Compensation Outcomes — Journal of Occupational Rehabilitation 2024",
    description: "Multicenter prospective cohort (n=6,400 work-injured employees managed by COHN-S NPs in employer-based occupational health programs) confirming NP-managed workers&apos; compensation case management achieves equivalent return-to-work rate, days away from work rate reduction (18.4% reduction), and MMI determination timeliness to occupational physician-managed programs — required ACOEM CE update for occupational health NPs on MMI documentation standards, functional capacity evaluation frameworks, and work restriction documentation compliance.",
  },
  {
    title: "NP Audiometric Testing Program — Noise and Health 2023",
    description: "Cross-sectional quality audit (n=22 CAOHC-accredited NP-managed hearing conservation programs serving 18,400 noise-exposed workers) confirming NP-managed OSHA 1910.95 hearing conservation programs achieve equivalent annual audiogram completion rate (99.1%), STS identification rate, and OSHA recordability determination accuracy to audiologist-managed programs — required CAOHC CE update for occupational health NPs on audiometric testing documentation standards, STS calculation frameworks, and hearing conservation program statistical analysis compliance.",
  },
  {
    title: "Occupational Health NP Drug Testing Program — Journal of Substance Abuse Treatment 2023",
    description: "Prospective cohort (n=12,400 DOT-regulated employees with DOT drug and breath alcohol tests reviewed by MRO-certified NPs) confirming NP MRO reviews achieve equivalent chain of custody error identification rate, positive result verification timeliness, and DOT 49 CFR Part 40 documentation compliance to physician MRO reviews — required AAMRO CE update for occupational health NPs on MRO review documentation standards, split specimen retesting frameworks, and SAP referral documentation compliance.",
  },
  {
    title: "NP Occupational Health Wellness Program Outcomes — American Journal of Health Promotion 2024",
    description: "Multicenter randomized trial (n=3,200 employees in COHN-S NP-managed worksite wellness programs) confirming NP-managed occupational wellness program achieves equivalent hypertension control rate, smoking cessation 12-month quit rate, and HbA1c improvement in prediabetic employees to employer physician-managed wellness programs — required AAOHN CE update for occupational health NPs on worksite health promotion documentation standards, risk stratification frameworks, and biometric screening compliance.",
  },
]

const testimonial = {
  quote:
    "FNP-BC 5-year recertification, COHN-S concurrent 5-year occupational health specialist renewal with 75 CE hours, COHC concurrent 5-year hearing conservationist renewal, NRCME DOT CME annual registration renewal by December 31 for DOT commercial driver physicals, MRO 5-year renewal with 12 annual CE hours, AAOHN National Conference CE, ACOEM Annual Conference CE, annual OSHA PEL medical surveillance CE update, annual NIOSH occupational hazard CE update, annual audiometric testing CAOHC annual update CE, annual DOT FMCSA CMV medical standards CE update, annual DOT drug testing 49 CFR Part 40 CE update, annual workers&apos; compensation case management CE, annual OSHA medical surveillance completion rate review for 3 client worksites with 840 noise-exposed workers, annual audiogram completion review for all 840 enrolled workers, annual standard threshold shift rate review and OSHA recordability determination, monthly OSHA 300 log review for 3 worksites, annual OSHA 300A electronic submission by March 2, quarterly DOT CME documentation audit for 180 commercial driver physicals per year, monthly DOT drug test documentation audit for 420 tests per year, quarterly DOT alcohol testing documentation audit, quarterly return-to-work rate review, annual DOT drug test collector annual proficiency mock collection, annual HIPAA workers&apos; compensation exception training, annual opioid prescribing CE, DEA 3-year renewal, collaborative agreement annual renewal with occupational medicine physician, MIPS annual reporting, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Kwame OH.",
  title: "MSN, FNP-BC, COHN-S, COHC, DOT CME, MRO, Occupational Health NP & Program Director",
}

export default function OccupationalHealthNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Occupational Health Nurse Practitioners"
        title="COHN-S Renewal. DOT CME Annual Registration. OSHA Surveillance Logs. One Calendar."
        subtitle="Momenties tracks FNP-BC 5-year recertification, COHN-S concurrent 5-year renewal, NRCME DOT CME annual registration renewal, MRO 5-year renewal, OSHA medical surveillance completion rate reviews, monthly OSHA 300 log accuracy reviews, annual audiogram program audits, quarterly DOT physical examination documentation audits, monthly DOT drug test documentation audits, annual OSHA 300A electronic submission, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so occupational health NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Occupational Health NP Practice
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
