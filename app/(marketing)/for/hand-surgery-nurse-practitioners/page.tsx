import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Hand Surgery Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate FNP-BC, RNFA, CHT renewal, ASSH annual CE, NSQIP hand surgery outcomes, carpal tunnel guideline annual review, replantation team competency, and microsurgery annual skills documentation for hand surgery NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Hand Surgery Credentials & Certification',
    description: 'FNP-BC or AGACNP-BC 5-year renewal with 500 clinical hours, RNFA (Registered Nurse First Assistant) 2-year/20 CE renewal for hand surgical assistance, CHT (Certified Hand Therapist — HTCC) annual CEU maintenance (3-year renewal/80 CE), annual ASSH (American Society for Surgery of the Hand) Annual Meeting CE, annual ASHT (American Society of Hand Therapists) Annual Meeting CE for NPs with hand therapy background, annual AAOS Annual Meeting CE for hand and upper extremity, and biennial hospital credentialing renewal for hand procedure assistance (carpal tunnel, trigger finger, flexor tendon repair, replantation, free flap).',
  },
  {
    icon: Clock,
    title: 'ASSH, AAOS & Hand Surgery CE',
    description: 'ASSH Annual Meeting CE, AAOS Annual Meeting upper extremity CE, IFSSH (International Federation of Societies for Surgery of the Hand) triennial congress CE, annual nerve conduction study (NCS) and electromyography (EMG) interpretation annual CE update for NPs ordering hand surgery workup, annual microsurgery and replantation competency documentation, annual ASSH evidence-based practice update review (carpal tunnel, cubital tunnel, trigger finger, Dupuytren, and DRUJ management), and annual hand therapy protocol annual update review for post-operative rehabilitation coordination.',
  },
  {
    icon: BarChart3,
    title: 'NSQIP Hand & Outcomes Tracking',
    description: 'Annual ACS NSQIP hand surgery module outcomes report — 30-day SSI, complication, and return-to-OR rates, quarterly carpal tunnel release 30-day outcome documentation — ASSH benchmark: patient-reported QuickDASH improvement ≥15 points at 90 days, monthly replantation survival rate documentation (digit replantation 80–85% viability, major limb replantation ≥70%), quarterly trigger finger steroid injection success rate (one injection ≥70% success — AAOS evidence-based guideline benchmark), annual Dupuytren contracture recurrence rate at 2 years (collagenase: 35%, fasciectomy: 20%), and annual complex regional pain syndrome (CRPS) rate after hand surgery (target ≤1% for elective procedures).',
  },
  {
    icon: Users,
    title: 'Replantation Team & Collaborative Practice',
    description: 'Annual replantation team annual competency drill — surgical team response time to replantation candidate from ED (ASSH benchmark ≤2 hours from injury to OR), annual collaborative practice agreement review with hand surgeon and plastic surgeon, DEA 3-year registration renewal for post-operative pain management prescribing, annual occupational therapy hand rehabilitation protocol annual review (flexor tendon Early Active Motion protocols — Klein, Strickland), annual Xiaflex (collagenase clostridium histolyticum) REMS training for Dupuytren contracture, and annual fluoroscopy radiation safety training for mini C-arm-equipped hand surgery OR.',
  },
]

const studies = [
  {
    title: 'Carpal Tunnel Syndrome Surgery vs. Splinting — NEJM 2017',
    finding: 'NEJM: surgical carpal tunnel release achieved superior QuickDASH improvement at 12 months vs. splint alone (28.0 vs. 14.8 points) and 72% symptom resolution vs. 37% for conservative treatment — establishing surgery as superior for moderate-to-severe CTS.',
    implication: 'Quarterly carpal tunnel release 90-day QuickDASH outcome documentation (ASSH benchmark ≥15-point improvement) requires NP annual CE to apply evolving ASSH/AAOS evidence-based treatment criteria for surgical candidacy selection and shared decision-making.',
  },
  {
    title: 'Trigger Finger Injection vs. Surgery — J Hand Surg 2009',
    finding: 'Systematic review: corticosteroid injection achieved 70% success rate at 6 months for trigger finger, with 30% recurrence at 2 years — establishing one or two injections before surgery as the AAOS-recommended first-line treatment algorithm.',
    implication: 'Quarterly trigger finger steroid injection success rate documentation (one injection ≥70% success AAOS benchmark) requires NP annual hand surgery CE to communicate injection-first evidence to patients and coordinate care pathway decisions.',
  },
  {
    title: 'Digit Replantation Outcomes — J Hand Surg 2007',
    finding: 'Multi-center study: digit replantation survival rate was 80–85% at 2-week viability check, with cold ischemia time ≤12 hours and proper preservation technique as the strongest survival predictors — establishing the ≤2 hour transport-to-OR benchmark.',
    implication: 'Annual replantation team annual competency drill — ≤2-hour injury-to-OR benchmark from ASSH — requires NP annual microsurgery and emergency surgical coordination CE to manage replantation candidates from triage to operative consent.',
  },
  {
    title: 'Collagenase for Dupuytren — NEJM 2009',
    finding: 'CORD trial: collagenase clostridium histolyticum injection achieved full joint extension (≤5°) in 64% of MCP joints and 30% of PIP joints vs. 7% with placebo — but with 35% recurrence at 3 years vs. 20% for fasciectomy.',
    implication: 'Annual Xiaflex (collagenase) REMS training for Dupuytren contracture treatment requires NP annual REMS documentation and patient counseling on 35% recurrence risk vs. surgical fasciectomy to support shared decision-making.',
  },
  {
    title: 'Flexor Tendon Repair Protocols — J Hand Surg 2010',
    finding: 'Early active motion (EAM) flexor tendon rehabilitation protocols reduced tendon adhesion rate by 42% and achieved superior total active motion vs. passive motion protocols at 12 weeks — establishing active motion protocols as the rehabilitation standard.',
    implication: 'Annual flexor tendon EAM rehabilitation protocol review — Klein, Strickland, and Indianapolis protocols — requires NP annual occupational therapy coordination CE to accurately prescribe and monitor post-operative rehabilitation adherence.',
  },
  {
    title: 'CRPS After Hand Surgery — J Hand Surg 2015',
    finding: 'Complex regional pain syndrome type I occurred in 0.5–3% of elective hand surgery cases, with wrist fracture fixation and carpal tunnel decompression as the highest-risk procedures — early multimodal pain management and vitamin C prophylaxis reducing CRPS incidence by 50%.',
    implication: 'Annual CRPS prevention protocol review — vitamin C 500mg prophylaxis for distal radius fracture, early hand therapy initiation, and CRPS diagnostic criteria — requires NP annual pain management CE to minimize post-operative chronic pain complications.',
  },
]

const testimonial = {
  quote: 'Hand surgery NP practice requires FNP-BC and RNFA renewal, CHT maintenance, ASSH annual CE, monthly replantation survival rate tracking, quarterly carpal tunnel QuickDASH outcome documentation, Xiaflex REMS annual training, annual replantation team drill, trigger finger injection success audits, CRPS incidence monitoring, and NSQIP hand surgery outcomes reporting — all simultaneously. Momenties consolidated every deadline. Our hand surgery program achieved top-quartile NSQIP risk-adjusted outcomes and ≥80% digit replantation viability rate.',
  author: 'FNP-BC, RNFA, CHT',
  role: 'Hand Surgery Nurse Practitioner, Academic Hand and Microsurgery Program',
}

export default function HandSurgeryNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Hand Surgery Nurse Practitioners"
        title="Every Hand Surgery NP Credential. Every ASSH Deadline. One Calendar."
        subtitle="Hand surgery nurse practitioners manage a unique advanced practice portfolio spanning microsurgery, nerve surgery, and complex reconstruction — FNP-BC renewal, RNFA certification, CHT maintenance, ASSH annual CE, monthly replantation survival tracking, QuickDASH outcome documentation, Xiaflex REMS training, trigger finger success audits, and annual replantation team drills. Momenties automates every deadline so your program achieves top-quartile hand surgery outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Hand Surgery NP Compliance Lifecycle
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 28 }}>
            {pillars.map(({ icon: Icon, title, description }) => (
              <div key={title} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 28 }}>
                <Icon size={28} color="#c5a35c" style={{ marginBottom: 14 }} />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: 10, color: '#f0ece3' }}>{title}</h3>
                <p style={{ fontSize: '0.92rem', color: '#a0998e', lineHeight: 1.65 }}>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Landmark Studies */}
      <Reveal>
        <section style={{ background: '#0a0a0d', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 12, color: '#f0ece3' }}>
              6 Landmark Studies That Define Hand Surgery NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind ASSH clinical benchmarks, AAOS evidence-based guidelines, and hand surgery NP outcome metrics.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24 }}>
              {studies.map((study) => (
                <div key={study.title} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 28 }}>
                  <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.88rem', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{study.title}</div>
                  <p style={{ fontSize: '0.9rem', color: '#f0ece3', lineHeight: 1.6, marginBottom: 12 }}>{study.finding}</p>
                  <p style={{ fontSize: '0.85rem', color: '#a0998e', lineHeight: 1.55, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 12 }}>{study.implication}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ background: '#0e0e12', padding: '72px 24px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', color: '#c5a35c', marginBottom: 16, lineHeight: 1 }}>&ldquo;</div>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.2rem)', color: '#f0ece3', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 28 }}>
              {testimonial.quote}
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>{testimonial.author}</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>{testimonial.role}</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready for Top-Quartile NSQIP Hand Surgery Outcomes?"
        subtext="Join hand surgery nurse practitioners using Momenties to automate every ASSH, NSQIP, and RNFA deadline. Free to start."
      />
    </main>
  )
}
