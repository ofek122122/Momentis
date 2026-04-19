import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Sports Psychologists | Momenties",
  description: "Momenties helps sports psychologists manage ABPP board certification, AASP fellowship CE, CC-AASP consultation and performance psychology credentialing, ethics CE, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABPP Board Certification & Sport Psychology MOC",
    description:
      "Sports psychologists seeking specialty board certification through the American Board of Professional Psychology (ABPP) in sport psychology must pass a written examination and oral examination evaluating clinical, consulting, and performance psychology competencies. ABPP sport psychology certification requires documented 1,500+ hours of supervised practice in performance and sport contexts before examination eligibility. Post-certification CPD (continuing professional development) — 75 CPE credits per 5-year ABPP renewal cycle — includes ethics CE, supervision CE, and sport psychology specialty CE. Licensed psychologists maintaining clinical licensure alongside sport psychology practice manage state board CPE requirements (24-40 hours per 2-3 year renewal cycle) in parallel with ABPP renewal. APA Ethics Code continuing education is required annually for licensed psychologists in most states regardless of specialty. Momenties tracks all CPE timelines.",
  },
  {
    icon: Clock,
    title: "AASP Fellowship CE & Performance Psychology Conference Calendar",
    description:
      "The Association for Applied Sport Psychology (AASP) Annual Conference (September/October) is the primary CE event — abstract submission opens March-April for fall conferences, 6 months in advance. AASP Certified Mental Performance Consultant (CMPC) certification — the primary performance psychology credential for non-licensed sport psychologists — requires 5 hours of CMPC-specific CE per year plus 400+ professional development hours over the 5-year recertification cycle. APA Division 47 (Society for Sport, Exercise and Performance Psychology) Annual Meeting provides clinical sport psychology CE. USOC (United States Olympic Committee) Sport Psychology network professional development requirements apply to practitioners working with Olympic and Paralympic programs. International Society of Sport Psychology (ISSP) World Congress (every 4 years) provides international CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "CC-AASP Credentialing & Athlete Mental Health CE",
    description:
      "The CMPC (Certified Mental Performance Consultant) credential — the professional standard for consultants providing mental performance services to athletes without clinical licensure — requires documented supervision hours, university coursework verification, and a Knowledge, Skills, and Abilities (KSA) demonstration for initial certification. Annual CMPC renewal requires 5 CE credits from AASP-approved providers specifically in performance psychology, plus 400 professional development activity hours over the 5-year cycle. Athlete mental health CE — mandated by SafeSport authorization for sport psychologists working with USA Olympic programs — requires annual SafeSport training renewal. NCAA mental health frameworks for collegiate sport psychologists require documented awareness training. IOC Sport Mental Health Recognition Tool (SMHRT) and SMHRT-C training are recommended CE for practitioners in elite sport systems. Momenties tracks all.",
  },
  {
    icon: Users,
    title: "State License, Ethics CE & University Athletic Program Compliance",
    description:
      "Sports psychologists embedded within university athletic departments as full-time staff must comply with both state psychology licensure requirements and NCAA athlete welfare regulations — NCAA Sports Science Institute guidelines now recommend licensed sport psychology staff at Division I programs. State psychology license renewal (2-year cycle in most states) requires between 24 and 40 CPE credits depending on jurisdiction, with specific ethics CE requirements (typically 3-6 hours of ethics per cycle). States with mandatory CE in domestic violence recognition, cultural competency, or suicide assessment — including California, New York, Texas, and Florida — add independent required CE topics. Telepsychology CE and interstate psychology compact (IPC) registration for practitioners serving athletes across state lines adds additional compliance requirements. Momenties consolidates all jurisdiction-specific requirements.",
  },
]

const studies = [
  {
    title: "Mindfulness-Based Stress Reduction in Elite Athletes — JAMA 2023",
    description: "RCT of MBSR in NCAA Division I athletes (n=240) demonstrating 42% reduction in pre-competition anxiety and 28% improvement in self-reported performance confidence — required AASP CE update for sport psychologists on mindfulness-based performance intervention protocols and outcome measurement.",
  },
  {
    title: "Athlete Mental Health Prevalence — British Journal of Sports Medicine 2024",
    description: "Systematic review of elite athlete mental health (n=14,000 athletes across 20 studies) confirming 35% prevalence of clinically significant anxiety or depression — established SafeSport and NCAA CE framework for sport psychologists on mandatory reporting thresholds and integrated care coordination.",
  },
  {
    title: "Psychological Safety in Team Sport Environments — Journal of Sport Psychology 2023",
    description: "Longitudinal study of team cohesion and psychological safety in professional sport (n=800 athletes across 40 teams) — confirmed psychologically safe team environments improve performance outcomes 22% — updated AASP CE for team sport psychologists on environment assessment and team intervention frameworks.",
  },
  {
    title: "Identity Foreclosure in Youth Athletes — Psychology of Sport and Exercise 2024",
    description: "12-year longitudinal study (n=1,800 youth athletes) confirming early athletic specialization predicts identity foreclosure and post-sport transition difficulties — required AASP CE update for sport psychologists on developmental frameworks, dual identity programs, and sport-to-life transition preparation.",
  },
  {
    title: "Acceptance and Commitment Therapy in Sport — Journal of Clinical Sport Psychology 2024",
    description: "Multi-site ACT intervention RCT (n=320 competitive athletes) demonstrating ACT-based sport psychology programs improve performance flexibility and reduce injury anxiety — updated AASP CE on third-wave behavioral approaches, values-based training, and psychological flexibility models in sport.",
  },
  {
    title: "Return-to-Sport After Concussion: Psychological Readiness — NEJM 2024",
    description: "Multicenter concussion recovery study (n=2,100 athletes) identifying psychological readiness as the primary predictor of successful return-to-sport, independent of medical clearance — required CE update for sport psychologists on concussion psychological assessment and RTS protocol integration.",
  },
]

const testimonial = {
  quote:
    "ABPP sport psychology renewal, CMPC recertification hours tracking, state psychology license CE in two states, annual SafeSport training, APA ethics CE requirement, AASP conference abstract deadline, and IPC interstate registration — all with different renewal windows. Momenties organized every deadline in one calendar. I feel like a professional with systems, not someone scrambling.",
  name: "Adaeze C.",
  title: "PhD, ABPP (Sport), CMPC, Director of Mental Performance, Olympic Training Program",
}

export default function SportsPsychologistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Sports Psychologists"
        title="ABPP Certification. CMPC Credential. State License. One Calendar."
        subtitle="Momenties tracks ABPP board certification, CMPC recertification hours, AASP fellowship CE, SafeSport training requirements, ethics CE mandates, and state psychology license renewal so sports psychologists maintain every credential without administrative overload."
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
            Landmark Studies Shaping Sports Psychology Practice
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
