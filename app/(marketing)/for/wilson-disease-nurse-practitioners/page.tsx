import type { Metadata } from "next"
import { Stethoscope, BarChart3, Heart, BookOpen, Calendar, Clock, Target, Users2, Award, ClipboardList } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Wilson Disease Nurse Practitioners — Scheduling for Lifelong Copper Metabolism Care | Momenties",
  description: "Built for NPs managing Wilson disease — chelation adherence and toxicity monitoring, urine copper trending, neuropsychiatric assessment, low-copper diet education, ophthalmology coordination, zinc adherence counseling, pregnancy management, and long-term maintenance optimization.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Chelation Adherence & Toxicity Monitoring",
    description:
      "Automate D-penicillamine and trientine adherence visits, weekly CBC and urinalysis during the first 8 weeks of induction, and monthly thereafter to catch neutropenia, thrombocytopenia, and proteinuria early. Coordinate ANA and anti-dsDNA screening for penicillamine-induced lupus-like syndrome, vitamin B6 supplementation tracking, and structured assessments for paradoxical neurological worsening during the first 3–6 months. Manage trientine switch protocols when penicillamine is intolerated and document strict separation from food and other medications.",
  },
  {
    icon: BarChart3,
    title: "Urine Copper & Biomarker Trending",
    description:
      "Schedule Q6-month 24-hour urine copper collections with structured patient education at each interval — acid-washed container handling, full 24-hour capture, and avoidance of copper-rich foods and supplements during collection. Trend ceruloplasmin, total serum copper, calculated free (non-ceruloplasmin) copper, ALT/AST, INR, and albumin against treatment phase targets. Build NP-led result-review visits to interpret de-coppering trajectory, distinguish non-adherence from over-chelation, and tee up provider-level dose adjustments.",
  },
  {
    icon: Heart,
    title: "Neurological & Psychiatric Assessment",
    description:
      "Coordinate annual UWDRS Part II/III scoring, gait and dysarthria screening, and tremor severity grading at every NP visit. Activate referral pathways to psychiatry for Wilson neuropsychiatric features — personality changes, executive dysfunction, depression, mood lability, and Wilsonian psychosis. Build PHQ-9, GAD-7, and MoCA cadences into the longitudinal calendar. Coordinate slit-lamp ophthalmology for Kayser-Fleischer ring follow-up annually and brain MRI scheduling for neurological-onset patients.",
  },
  {
    icon: BookOpen,
    title: "Diet Counseling & Patient Education",
    description:
      "Run structured low-copper diet counseling visits — strict avoidance of shellfish, organ meat (liver), chocolate, nuts, mushrooms, and dried fruit during the first year, with relaxation guidance once stable de-coppering is achieved. Educate on copper plumbing and well-water testing, multivitamin label review for copper content, and zinc administration timing (1 hour before or 2–3 hours after meals, separated from chelators). Build pregnancy-specific counseling, contraception planning, and medication cost assistance program enrollment into the standing visit cadence.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Onboarding & NP Workflow Mapping",
    description:
      "Map the NP-led Wilson disease visit workflow inside the metabolic hepatology clinic — chelation adherence, urine copper interpretation, neuropsychiatric screening, and dietary counseling. Integrate Momenties with the EHR for CBC, urinalysis, ALT/AST, INR, ceruloplasmin, total serum copper, and 24-hour urine copper ordering. Build NP visit templates for induction, transition-to-maintenance, zinc-only maintenance, and pregnancy management.",
  },
  {
    month: "Month 3–4",
    title: "Adherence & Toxicity Surveillance Cadence",
    description:
      "Activate weekly CBC and urinalysis during induction Weeks 1–8, then monthly through Month 6, then quarterly. Build automated reminders for vitamin B6 supplementation, ANA/anti-dsDNA screening, and quarterly creatinine and 24-hour urine protein. Roll out NP-led adherence interviews with structured pill-count, refill-history, and missed-dose pattern tracking integrated into every chelation maintenance visit.",
  },
  {
    month: "Month 5–6",
    title: "Urine Copper & Result-Review Visits",
    description:
      "Stand up Q6-month 24-hour urine copper scheduling with patient education calls 1 week before each collection — collection technique, dietary avoidance, and lab drop-off logistics. Launch NP-led result-review visits within 2 weeks of each collection to interpret 24-hour copper, calculated free copper, and LFT trends against treatment-phase targets, document adherence, and queue provider dose adjustments.",
  },
  {
    month: "Month 7–8",
    title: "Neuropsychiatric & Ophthalmology Programs",
    description:
      "Embed annual UWDRS scoring, PHQ-9, GAD-7, and MoCA into recurring NP visits. Build psychiatry referral pathways for Wilsonian psychosis, depression, and personality change with linked tele-psychiatry options. Activate annual slit-lamp ophthalmology scheduling for Kayser-Fleischer ring tracking and coordinate baseline plus annual brain MRI for neurological-onset patients with NP-led pre-visit prep.",
  },
  {
    month: "Month 9–10",
    title: "Diet, Zinc Adherence & Pregnancy Pathways",
    description:
      "Roll out structured low-copper diet counseling at induction, Month 6, and annually thereafter, with NP review of food and water copper sources. Build zinc adherence counseling — strict food separation, dosing intervals, and quarterly serum zinc plus 24-hour urine copper for adherence verification. Activate pre-conception, pregnancy, and postpartum visit cadences with trientine and zinc dosing review and lactation guidance.",
  },
  {
    month: "Month 11–12",
    title: "Cost Assistance & Outcome Reporting",
    description:
      "Embed medication cost assistance program enrollment workflows — manufacturer programs for trientine and penicillamine, foundation grants, and copay assistance — into NP visits at therapy initiation and annually. Generate NP outcome dashboards: adherence rate, 24-hour urine copper target attainment, KF regression, UWDRS stability, and patient-reported outcome trends. Iterate on protocols and feed data into the broader Wilson disease center quality program.",
  },
]

const kpis = [
  {
    metric: "Chelation Adherence Rate",
    target: ">85% MPR",
    description:
      "NP-tracked medication possession ratio for D-penicillamine, trientine, or zinc maintenance therapy across the active Wilson cohort, calculated quarterly from refill history with structured adherence interviews and missed-dose root-cause documentation.",
  },
  {
    metric: "24-Hour Urine Copper Attainment",
    target: ">90% on therapy",
    description:
      "Proportion of NP-managed patients whose Q6-month 24-hour urine copper falls within phase-specific target ranges (200–500 mcg/day on chelation, <75 mcg/day on zinc maintenance) — a direct measure of NP-led adherence and education effectiveness.",
  },
  {
    metric: "Toxicity Detection Lead Time",
    target: "<2 weeks",
    description:
      "Median time from biochemical signal (neutropenia, proteinuria, transaminase rise, ANA positivity) to NP-led intervention visit and provider notification — a quality benchmark for proactive penicillamine and trientine toxicity surveillance.",
  },
  {
    metric: "Diet Counseling Coverage",
    target: ">95% annually",
    description:
      "Proportion of established Wilson patients receiving documented NP-led low-copper diet counseling at least annually, with structured food, water, and supplement copper-source review and post-visit teach-back validation.",
  },
  {
    metric: "Neuropsychiatric Screening",
    target: ">90% annually",
    description:
      "Proportion of Wilson patients completing NP-administered PHQ-9, GAD-7, MoCA, and UWDRS scoring annually, with documented psychiatry referrals for positive screens and longitudinal trend tracking across the maintenance population.",
  },
  {
    metric: "Pregnancy Management Coverage",
    target: "100% pre-conception visits",
    description:
      "Proportion of Wilson patients of reproductive age receiving documented NP-led pre-conception counseling — chelation regimen adjustment (trientine or zinc preferred), folate supplementation, copper status optimization, and high-risk obstetrics coordination.",
  },
]

const testimonial = {
  quote:
    "Wilson disease is a lifelong NP partnership. Patients need adherence support every month, urine copper education twice a year, low-copper diet reinforcement at every visit, slit-lamp every year, neuropsychiatric screening on a strict cadence, and zinc dosing taught and re-taught around food. Momenties holds all of it. My adherence rate moved past 85 percent, our urine copper target attainment crossed 90 percent, and not a single patient missed a pre-conception visit last year.",
  name: "Susan W., FNP-C",
  title: "Metabolic Hepatology NP, Liver Disease Center",
}

export default function WilsonDiseaseNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh", color: "#f0ece3", fontFamily: "DM Sans, sans-serif" }}>
      <PageHero
        eyebrow="Wilson Disease Nurse Practitioners"
        title="Wilson Disease NPs — Scheduling for a Lifelong Copper Metabolism Disorder"
        subtitle="Designed for NPs managing Wilson disease patients — from chelation therapy adherence and urine copper monitoring to neuropsychiatric follow-ups, liver surveillance, and long-term maintenance optimization."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontFamily: "Playfair Display, serif", marginBottom: 48, color: "#f0ece3" }}>
            Built for the Full Wilson Disease NP Practice
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

      {/* Timeline */}
      <Reveal>
        <section style={{ background: "#0a0a0d", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontFamily: "Playfair Display, serif", marginBottom: 48, color: "#f0ece3" }}>
              12-Month NP Implementation Roadmap
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map(({ month, title, description }) => (
                <div key={month} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 24, background: "#131318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "24px 28px", alignItems: "start" }}>
                  <div style={{ color: "#c5a35c", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{month}</div>
                  <div>
                    <div style={{ color: "#f0ece3", fontWeight: 600, fontSize: "1rem", marginBottom: 8 }}>{title}</div>
                    <div style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.65 }}>{description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontFamily: "Playfair Display, serif", marginBottom: 48, color: "#f0ece3" }}>
            Wilson Disease NP Quality KPIs
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
            {kpis.map(({ metric, target, description }) => (
              <div key={metric} style={{ background: "#0a0a0d", border: "1px solid rgba(197,163,92,0.2)", borderRadius: 16, padding: 28 }}>
                <div style={{ color: "#c5a35c", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>{metric}</div>
                <div style={{ color: "#f0ece3", fontFamily: "Playfair Display, serif", fontSize: "1.4rem", marginBottom: 12 }}>{target}</div>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.88rem", lineHeight: 1.6 }}>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <blockquote style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: "44px 48px", margin: 0 }}>
              <div style={{ fontSize: "2.4rem", color: "#c5a35c", lineHeight: 1, marginBottom: 12 }}>&ldquo;</div>
              <p style={{ color: "#f0ece3", fontSize: "1.05rem", lineHeight: 1.75, fontStyle: "italic", marginBottom: 24 }}>
                {testimonial.quote}
              </p>
              <footer>
                <div style={{ color: "#c5a35c", fontWeight: 700, fontSize: "0.95rem" }}>{testimonial.name}</div>
                <div style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.88rem", marginTop: 4 }}>{testimonial.title}</div>
              </footer>
            </blockquote>
          </div>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
