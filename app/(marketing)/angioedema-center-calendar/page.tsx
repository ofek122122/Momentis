import type { Metadata } from "next"
import { Shield, Zap, BarChart3, ClipboardList } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Hereditary Angioedema Center — Prophylaxis, On-Demand Treatment & Attack Calendar | Momentis",
  description: "Systematic scheduling for HAE centers covering C1 inhibitor and lanadelumab prophylaxis, on-demand therapy training, attack monitoring, C4/C1-INH surveillance, trigger identification, and quality of life optimization programs.",
}

const pillars = [
  {
    icon: Shield,
    title: "Long-Term Prophylaxis Scheduling",
    description: "Sequence lanadelumab 300 mg SC every 2 weeks (with optional Q4-week step-down once well-controlled), C1-INH concentrate (plasma-derived or recombinant) every 3–4 days, and berotralstat 150 mg PO daily fills; track injection sites, infusion access, and home-therapy training renewals; and reconcile prior authorization, copay support, and specialty pharmacy delivery windows so no prophylactic dose lapses.",
  },
  {
    icon: Zap,
    title: "On-Demand Therapy Training & Readiness",
    description: "Coordinate icatibant, ecallantide, and on-demand C1-INH concentrate training visits with documented self-administration competency check-offs; schedule emergency action plan reviews and refresher injections every 6–12 months; and verify that two doses of on-demand therapy plus a current emergency protocol card travel with the patient at all times, with annual replacement reminders for expiring vials.",
  },
  {
    icon: BarChart3,
    title: "Attack Monitoring & Trigger Analysis",
    description: "Maintain a structured HAE attack diary (location, severity, prodrome, response time, treatment used) and review trends at every visit; layer trigger analysis for stress, infections, dental procedures, hormonal shifts, and trauma; flag estrogen-containing contraceptives and ACE inhibitors as contraindicated; and trigger short-term prophylaxis scheduling around dental work, surgery, and pregnancy delivery planning.",
  },
  {
    icon: ClipboardList,
    title: "Laboratory Surveillance & Dose Optimization",
    description: "Cycle C4 levels (typically low during attacks, may normalize between), C1-INH antigenic and functional levels, and C1q (low in acquired angioedema) at diagnosis and on a defined surveillance cadence; track SERPING1 mutation testing and family pedigree; and feed lab and attack-frequency data back into prophylaxis dose optimization, with reminders for step-up, step-down, and switch-of-therapy decision points.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnostic Confirmation & Baseline Workup",
    description: "Order C4, C1-INH antigenic and functional assays, C1q (to differentiate acquired angioedema), and SERPING1 mutation testing where indicated; document family pedigree; classify HAE type I, type II, or HAE with normal C1-INH; and book a structured education visit covering bradykinin pathway, attack recognition, and triggers.",
  },
  {
    month: "Month 3–4",
    title: "On-Demand Therapy Training & Action Plan",
    description: "Train every patient on icatibant, ecallantide, or on-demand C1-INH concentrate self-administration; document competency; issue an emergency protocol card; ensure two on-demand doses always travel with the patient; and book the first attack-diary review at the next visit.",
  },
  {
    month: "Month 5–6",
    title: "Long-Term Prophylaxis Decision",
    description: "Review attack frequency, severity, and disease-impact scores to decide on long-term prophylaxis; initiate lanadelumab 300 mg SC Q2 weeks, C1-INH concentrate Q3–4 days, or berotralstat 150 mg daily; coordinate specialty-pharmacy onboarding, prior authorization, and home-therapy nurse visits.",
  },
  {
    month: "Month 7–8",
    title: "Trigger Mitigation & Lifestyle Counseling",
    description: "Run dedicated trigger-analysis visits — counsel on estrogen avoidance, ACEi contraindication, dental and surgical short-term prophylaxis (C1-INH 1 hour pre-procedure), pregnancy planning, and stress and infection management; align primary-care and OB-GYN teams via shared care notes.",
  },
  {
    month: "Month 9–10",
    title: "Surveillance Labs & Dose Optimization",
    description: "Repeat C4 and C1-INH levels per surveillance cadence; reassess attack diary trends; consider lanadelumab Q4-week step-down in well-controlled patients; document any breakthrough attacks; and recalibrate on-demand therapy supply and training freshness.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review & QOL Optimization",
    description: "Score HAE-specific quality of life and disease activity measures, refresh the emergency protocol card, audit on-demand vial expiration dates, renew home-therapy training certifications, run cascade family screening for first-degree relatives, and finalize a written annual care plan shared with the patient and PCP.",
  },
]

const kpis = [
  {
    metric: "100%",
    target: "On-Demand Therapy On Person",
    description: "Every active HAE patient carries two doses of on-demand therapy and a current emergency protocol card, verified at each visit.",
  },
  {
    metric: "≥80%",
    target: "Attack-Rate Reduction on Prophylaxis",
    description: "Patients on lanadelumab, C1-INH prophylaxis, or berotralstat achieve at least 80% reduction in monthly attack rate vs. pre-treatment baseline.",
  },
  {
    metric: "≤24 hrs",
    target: "Time-to-Treat New Attack",
    description: "From prodrome or first symptom to documented on-demand dose administration within 24 hours, ideally within 1 hour for laryngeal involvement.",
  },
  {
    metric: "0",
    target: "Estrogen / ACEi Exposures",
    description: "Zero active prescriptions for estrogen-containing contraceptives or ACE inhibitors across the HAE patient panel after intake reconciliation.",
  },
  {
    metric: "100%",
    target: "Pre-Procedure Short-Term Prophylaxis",
    description: "C1-INH short-term prophylaxis scheduled and administered before every dental, surgical, or invasive procedure in HAE patients.",
  },
  {
    metric: "Annual",
    target: "Cascade Family Screening Offered",
    description: "First-degree relatives offered C1-INH testing and SERPING1 cascade screening within 12 months of an index diagnosis.",
  },
]

const testimonial = {
  quote:
    "HAE care is uniquely calendar-driven — Q2-week lanadelumab, Q3–4 day C1-INH infusions, on-demand training renewals, attack diaries, surveillance labs, and short-term prophylaxis around every dental visit. Momentis is the first system that lets us see the entire panel in a single timeline. We cut breakthrough attacks dramatically just by getting our prophylaxis intervals right.",
  name: "Dr. M. Cicardi",
  title: "HAE Center Director, Angioedema Center of Excellence",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Angioedema Center Calendar"
        title="Hereditary Angioedema Center — Prophylaxis, On-Demand Treatment & Attack Calendar"
        subtitle="Systematic scheduling for HAE centers — C1 inhibitor concentrate and lanadelumab prophylaxis scheduling, on-demand therapy training, attack frequency monitoring, C4/C1-INH level surveillance, trigger identification, and quality of life optimization programs."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontFamily: "Playfair Display, serif", marginBottom: 48, color: "#f0ece3" }}>
            Built for the Full HAE Center Compliance Lifecycle
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 28 }}>
            {pillars.map(({ icon: Icon, title, description }) => (
              <div key={title} style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 28 }}>
                <Icon size={28} color="#c5a35c" style={{ marginBottom: 14 }} />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 10, color: "#f0ece3" }}>{title}</h3>
                <p style={{ fontSize: "0.92rem", color: "rgba(240,236,227,0.65)", lineHeight: 1.65 }}>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* 12-Month Timeline */}
      <Reveal>
        <section style={{ background: "#0a0a0d", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontFamily: "Playfair Display, serif", marginBottom: 12, color: "#f0ece3" }}>
              The HAE Center Calendar — Month by Month
            </h2>
            <p style={{ textAlign: "center", color: "rgba(240,236,227,0.65)", marginBottom: 56, fontSize: "0.97rem" }}>
              Every prophylaxis interval, on-demand training renewal, surveillance lab, and trigger-mitigation visit — sequenced across the first year.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map((item) => (
                <div key={item.month} style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 24, background: "#131318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "20px 24px", alignItems: "start" }}>
                  <div style={{ color: "#c5a35c", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.month}</div>
                  <div>
                    <div style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.97rem", marginBottom: 6 }}>{item.title}</div>
                    <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontFamily: "Playfair Display, serif", marginBottom: 48, color: "#f0ece3" }}>
              The 6 KPIs That Define HAE Center Excellence
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
              {kpis.map((kpi) => (
                <div key={kpi.target} style={{ background: "#0a0a0d", border: "1px solid rgba(197,163,92,0.2)", borderRadius: 12, padding: 24 }}>
                  <div style={{ fontSize: "clamp(1.4rem,2.5vw,1.9rem)", fontWeight: 700, color: "#c5a35c", fontFamily: "Playfair Display, serif", marginBottom: 8 }}>{kpi.metric}</div>
                  <div style={{ fontSize: "0.95rem", color: "#f0ece3", fontWeight: 600, marginBottom: 6 }}>{kpi.target}</div>
                  <div style={{ fontSize: "0.86rem", color: "rgba(240,236,227,0.65)", lineHeight: 1.55 }}>{kpi.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ padding: "40px 24px 0" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <div style={{ background: "#131318", border: "1px solid rgba(197,163,92,0.25)", borderRadius: 16, padding: "36px 40px" }}>
              <div style={{ fontSize: "2.5rem", color: "#c5a35c", marginBottom: 12, lineHeight: 1 }}>&ldquo;</div>
              <p style={{ fontSize: "clamp(1rem,2vw,1.15rem)", color: "#f0ece3", lineHeight: 1.7, fontStyle: "italic", marginBottom: 24 }}>
                {testimonial.quote}
              </p>
              <div style={{ fontWeight: 700, color: "#c5a35c", fontSize: "0.95rem" }}>{testimonial.name}</div>
              <div style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.88rem", marginTop: 4 }}>{testimonial.title}</div>
            </div>
          </div>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
