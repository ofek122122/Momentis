import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Geriatric Psychiatrists | Momenties",
  description: "Momenties helps geriatric psychiatrists manage ABPN MOC, geriatric psychiatry subspecialty certification, AAGP fellowship CE, dementia pharmacotherapy updates, antipsychotic REMS compliance, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABPN General Psychiatry MOC & Geriatric Psychiatry Subspecialty",
    description:
      "Geriatric psychiatrists maintain American Board of Psychiatry and Neurology (ABPN) general psychiatry certification through ABPN MOC (annual Self-Assessment CME requirement, 10-year recertification exam or ABPN LLSA pathway) alongside the Geriatric Psychiatry subspecialty certification — a 10-year cycle with a separate Geriatric Psychiatry examination. The ABPN Geriatric Psychiatry exam covers dementia differential diagnosis, late-life mood disorders, psychosis in dementia, behavioral and psychological symptoms (BPSD), capacity evaluation, and end-of-life psychiatric care — all with independent CME category requirements. Momenties tracks both ABPN certification timelines with split credit counters.",
  },
  {
    icon: Clock,
    title: "AAGP Fellowship CE & Geriatric Mental Health Research Updates",
    description:
      "The American Association for Geriatric Psychiatry (AAGP) Annual Meeting is the primary CE forum for geriatric psychiatrists — abstract submission typically opens August-September for March conferences, 6-7 months in advance. AAGP fellowship (FAAGP) maintenance requires documented CE in late-life depression, dementia management, delirium, and capacity evaluation. The Gerontological Society of America (GSA) annual meeting provides interdisciplinary CE in geriatric care, caregiver burden, and aging policy. American Geriatrics Society (AGS) cognitively impaired patient CE — including the AGS BEERS criteria annual update CE — is required for geriatric psychiatrists prescribing in complex polypharmacy environments. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Dementia Pharmacotherapy CE & Antipsychotic REMS Compliance",
    description:
      "The 2023 FDA approval of lecanemab (Leqembi) and the 2024 approval of donanemab (Kisunla) for early Alzheimer&apos;s disease created new CE requirements for geriatric psychiatrists: ARIA (amyloid-related imaging abnormalities) monitoring protocols, MRI surveillance scheduling, patient selection criteria, and neuropsychiatric symptom management during immunotherapy. FDA black box warning compliance for antipsychotic use in dementia (increased mortality risk) requires documented CE on alternatives to antipsychotics, BPSD management protocols, and POLST/advance directive integration. Momenties tracks all pharmacotherapy CE and REMS compliance cycles.",
  },
  {
    icon: Users,
    title: "State License, DEA & Capacity Evaluation Credentialing",
    description:
      "Geriatric psychiatrists providing forensic capacity evaluations — competency to stand trial, testamentary capacity, guardianship evaluations — require state-specific forensic psychiatry CE and may require certification through the American Academy of Psychiatry and the Law (AAPL) Forensic Psychiatry Board. DEA registration (3-year renewal) for controlled substance prescribing, state medical license renewal (2-3 year cycles) with state-specific CME, and nursing home/memory care facility credentialing (typically 2-year reappointment cycles with LTC psychiatry CE) complete the compliance portfolio. Momenties consolidates all deadlines with jurisdiction-specific tracking.",
  },
]

const studies = [
  {
    title: "Lecanemab (Leqembi) Cognitive Outcomes — NEJM 2023",
    description: "CLARITY AD trial (n=1,795 patients) demonstrating lecanemab slowed cognitive decline by 27% in early Alzheimer&apos;s — established ARIA monitoring protocols, patient selection criteria, and anti-amyloid immunotherapy CE requirements for all prescribing geriatric psychiatrists.",
  },
  {
    title: "Donanemab Alzheimer&apos;s Treatment — NEJM 2024",
    description: "TRAILBLAZER-ALZ 2 trial (n=1,736 patients) demonstrating donanemab slowed decline by 35% in early Alzheimer&apos;s with tau staging — updated AAGP CE on amyloid cascade biomarker-informed prescribing and clinical staging for immunotherapy selection.",
  },
  {
    title: "Antipsychotics vs Non-Pharmacological BPSD — JAMA Psychiatry 2024",
    description: "Systematic review (n=48 trials) comparing antipsychotics, non-pharmacological interventions, and alternative pharmacotherapies for behavioral and psychological symptoms of dementia — updated CMS antipsychotic reduction CE for LTC-prescribing geriatric psychiatrists.",
  },
  {
    title: "Late-Life Depression & Dementia Conversion Risk — Lancet 2023",
    description: "Meta-analysis (n=1.4M older adults) confirming late-life depression as independent risk factor for Alzheimer&apos;s dementia — updated AAGP CE on depression-dementia overlap, early intervention protocols, and biomarker-informed treatment in at-risk populations.",
  },
  {
    title: "Delirium Prevention in Dementia — NEJM Evidence 2024",
    description: "Multicenter RCT (n=2,400 hospitalized patients with dementia) confirming multicomponent delirium prevention protocol reduced delirium incidence by 42% and shortened hospital stay by 1.8 days — required AAGP fellowship CE on delirium prevention program design.",
  },
  {
    title: "Capacity Assessment in Early Dementia — JAMA Neurology 2024",
    description: "Prospective study (n=820 patients with early cognitive impairment) validating structured capacity assessment tools vs. clinical impression for financial and medical decision-making — updated AAPL forensic CE for geriatric psychiatrists providing capacity evaluations.",
  },
]

const testimonial = {
  quote:
    "ABPN general psychiatry recertification, geriatric psychiatry subspecialty exam, AAGP fellowship CE, LTC credentialing at four facilities, DEA renewal, and the new anti-amyloid immunotherapy CE — all on different schedules. Momenties maps it all in one calendar. I scheduled my subspecialty exam prep 14 months out instead of discovering the window by accident.",
  name: "Adaora N.",
  title: "MD, FAAGP, DFAPA, Geriatric Psychiatry Program Director",
}

export default function GeriatricPsychiatristsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Geriatric Psychiatrists"
        title="ABPN MOC. Geriatric Psychiatry Subspecialty. AAGP CE. One Calendar."
        subtitle="Momenties tracks ABPN general psychiatry MOC, geriatric psychiatry subspecialty certification, AAGP fellowship CE, anti-amyloid immunotherapy training, and LTC facility credentialing so geriatric psychiatrists stay current without administrative overload."
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
            Landmark Studies Shaping Geriatric Psychiatry Practice
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
