import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Headache Neurologists | Momenties",
  description: "Momenties helps headache neurologists and headache medicine specialists manage ABPN MOC with UCNS headache diplomate, AHS fellowship CE, CGRP monoclonal antibody REMS, and Botox credentialing deadlines in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABPN Neurology MOC & UCNS Headache Diplomate",
    description:
      "Headache neurologists maintain ABPN neurology MOC (10-year exam cycle, 40 CME/year, self-assessment modules) and may hold the United Council for Neurologic Subspecialties (UCNS) Headache Medicine Diplomate — a 10-year renewable credential requiring 100 CME hours in headache medicine and passing the UCNS examination. Momenties tracks both timelines simultaneously: ABPN neurology MOC credit accumulation runs independently from UCNS headache diplomate renewal, each with distinct module requirements and deadlines.",
  },
  {
    icon: Clock,
    title: "AHS Fellowship & Headache Society CE",
    description:
      "The American Headache Society (AHS) annual scientific meeting and structured fellowship curriculum provide the primary CE pathway for headache medicine specialists. AHS offers the Headache Medicine Scholars Program, annual meeting CE, and online modules covering CGRP pathway therapeutics, neuromodulation, and pediatric migraine — each with documented completion requirements for UCNS diplomate renewal. Momenties schedules AHS annual meeting registration deadlines, abstract submission windows, and module completion milestones throughout the year.",
  },
  {
    icon: BarChart3,
    title: "CGRP Therapy CE, REMS & Emerging Treatment Credentialing",
    description:
      "The CGRP monoclonal antibody class (erenumab, fremanezumab, galcanezumab, eptinezumab) and CGRP receptor antagonists (rimegepant, ubrogepant, atogepant, zavegepant) require annual CE updates as guidelines evolve. OnabotulinumtoxinA (BOTOX) for chronic migraine requires documented injection training and hospital credentialing at 12-week intervals. Neuromodulation devices (Cefaly, gammaCore, SAVI DUAL) carry AHS/AAN recommended training CE. Momenties queues all procedural credentialing alongside pharmacotherapy CE updates.",
  },
  {
    icon: Users,
    title: "AAN Guideline CE, State License & DEA Renewal",
    description:
      "The AAN and AHS co-publish headache practice guidelines updated on rolling cycles — new migraine preventive guidelines (2023), cluster headache guidelines (2024), and post-traumatic headache management updates require documented CE review for hospital credentialing and state license renewal. State medical licenses (2–3 year cycles) and DEA registration (3 years) create ongoing compliance overhead. Momenties consolidates every deadline into a unified calendar with state-specific CME credit allocation and DEA renewal reminders.",
  },
]

const studies = [
  {
    title: "DELIVER Eptinezumab for Difficult-to-Treat Migraine — Lancet Neurology 2023",
    description: "Phase 3b RCT (n=480) in patients who failed 2–4 prior preventives showing eptinezumab 100mg IV achieved ≥50% responder rate in 61% vs. 39% placebo — established IV CGRP option for treatment-resistant chronic migraine.",
  },
  {
    title: "PROGRESS Atogepant for Episodic Migraine — NEJM 2023",
    description: "Phase 3 RCT (n=778) demonstrating atogepant 60mg QD reduced mean monthly migraine days by 4.2 vs. 2.5 placebo (p<0.001) — confirmed CGRP receptor antagonist efficacy for prevention and expanded class to episodic migraine.",
  },
  {
    title: "CGRP Monoclonal Antibody Class Effects — AAN Guideline Update 2023",
    description: "Updated AAN practice guideline establishing erenumab, fremanezumab, galcanezumab, and eptinezumab as first-line prevention options with evidence levels A-B across episodic and chronic migraine subtypes — required CE for all headache programs.",
  },
  {
    title: "PRISM Neuromodulation Cluster Headache — Cephalalgia 2024",
    description: "Multicenter cohort (n=240) evaluating non-invasive vagus nerve stimulation for cluster headache showing 47% attack frequency reduction — AHS/AAN 2024 cluster guideline update incorporated gammaCore as adjunct option.",
  },
  {
    title: "BOTOX PREEMPT Registry 10-Year Follow-Up — Headache 2024",
    description: "10-year real-world registry of 2,400 chronic migraine patients treated with onabotulinumtoxinA confirming sustained 7.8-day/month reduction in headache days with consistent safety profile — reinforces injection training credentialing CE.",
  },
  {
    title: "Post-Traumatic Headache AAN/AHS Joint Guideline 2024",
    description: "First joint AAN/AHS practice guideline for persistent post-traumatic headache covering acute management, CGRP therapy trials, vestibular therapy co-management, and return-to-activity protocols — required CE for sports neurology and headache fellowship programs.",
  },
]

const testimonial = {
  quote:
    "Managing ABPN neurology MOC alongside my UCNS headache diplomate renewal was a full-time administrative job. Momenties solved it completely — I have separate credit counters for each credential, AHS meeting registration reminders, and my Botox credentialing renewal scheduled automatically 90 days out. I finally have zero administrative anxiety about my credentials.",
  name: "Ngozi A.",
  title: "MD, FAHS, UCNS Headache Diplomate, Academic Headache Center",
}

export default function HeadacheNeurologistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Headache Neurologists"
        title="ABPN MOC. UCNS Diplomate. CGRP CE. Botox Credentialing. One Calendar."
        subtitle="Momenties tracks every ABPN neurology MOC cycle, UCNS headache diplomate renewal, CGRP therapy CE, and injection credentialing deadline so headache specialists focus on migraine management, not compliance."
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
            Landmark Studies Shaping Headache Medicine Practice
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
