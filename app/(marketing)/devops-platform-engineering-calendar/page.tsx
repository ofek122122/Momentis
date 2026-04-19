import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "DevOps & Platform Engineering Calendar | Momenties",
  description: "Momenties helps VP Engineering and platform engineering leaders track infrastructure review cycles, security patch cadences, DR test schedules, cloud cost optimization reviews, and platform team OKR planning in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Infrastructure Review Cycles, Cloud Cost Optimization & Platform Health Calendar",
    description:
      "Platform engineering programs without structured infrastructure review cadences accumulate technical debt and cloud cost inefficiency — organizations that review cloud architecture quarterly achieve 20-30% lower cloud spend than those reviewing annually. Monthly infrastructure health review: cloud spend versus budget (AWS/GCP/Azure cost anomaly monitoring), service availability SLA compliance (uptime dashboard review), and database performance trend analysis (query latency, connection pool health, replication lag). Quarterly cloud optimization review: reserved instance and savings plan coverage analysis (purchase if >60% steady-state workload), orphaned resource audit (unattached EBS volumes, unused Elastic IPs, idle RDS instances), and architecture right-sizing review (over-provisioned instances identified by low CPU utilization). Annual cloud architecture review: evaluating current-state architecture against Well-Architected Framework pillars (operational excellence, security, reliability, performance efficiency, cost optimization), multi-region strategy assessment, and vendor lock-in risk review. Kubernetes cluster lifecycle: monthly cluster health review, quarterly node pool rightsizing, and annual cluster upgrade planning (typically 1-2 minor versions behind stable). Momenties manages every infrastructure review cycle.",
  },
  {
    icon: RefreshCw,
    title: "Security Patch Cadences, Vulnerability Management & Compliance Calendar",
    description:
      "Security patch management without structured cadences creates compounding vulnerability windows — organizations without automated patch pipelines average 102 days from CVE disclosure to production remediation, versus 14 days for organizations with automated patching. Monthly patch management cycle: critical CVE triage (CVSS ≥9.0 — patch within 24 hours), high CVE remediation (CVSS 7.0-8.9 — patch within 7 days), medium CVE window (CVSS 4.0-6.9 — patch within 30 days), and monthly patch compliance reporting. Dependency scanning calendar: weekly SAST/DAST scan with developer notification, quarterly dependency audit (identifying abandoned libraries, license compliance), and annual security architecture review. Compliance reporting calendar: SOC 2 Type II annual audit (evidence collection year-round, audit window typically Q3), ISO 27001 surveillance audit (annual), PCI DSS quarterly SAQ (for payment card data environments), and annual penetration test. Security training: annual security awareness training completion, quarterly threat modeling sessions with engineering leads, and semi-annual red team exercise. Certificate management: TLS certificate renewal tracking (90-day certificates require automated renewal — monthly audit for manual certificates). Momenties schedules every security compliance milestone.",
  },
  {
    icon: TrendingUp,
    title: "Disaster Recovery Test Schedules, Chaos Engineering & SRE Calendar",
    description:
      "Disaster recovery plans without scheduled testing become untrusted theater — organizations that test DR quarterly reduce actual recovery time by 60% versus those testing annually, because teams discover and fix recovery gaps before incidents. DR test calendar: quarterly DR tabletop exercise (reviewing runbooks, identifying gaps without production impact), semi-annual full DR failover test (complete failover to secondary region with recovery time measurement), and annual DR audit (reviewing RPO/RTO commitments against test results, updating business continuity plans). Chaos engineering calendar: monthly chaos experiment (controlled fault injection — CPU spike, network partition, service failure), quarterly game day (multi-hour simulated incident with full on-call rotation participation), and annual chaos engineering retrospective. SRE program calendar: weekly error budget review (per-service error budget consumption versus SLO targets), monthly SLO review (adjusting SLOs based on user-facing feedback and business impact), and quarterly SLI/SLO framework refresh. Post-incident review calendar: PIR within 48 hours of P1, PIR within 1 week of P2, quarterly aggregate incident trend analysis, and annual SRE program maturity assessment. Momenties tracks every reliability engineering cycle.",
  },
  {
    icon: BarChart3,
    title: "Platform Toolchain Reviews, DORA Metrics Governance & Engineering Productivity Calendar",
    description:
      "Platform engineering toolchains without structured review cadences accumulate unused tools and integration debt — platform teams at Series C+ stage average 18-25 developer tools, with 35% rarely used. Monthly DORA metrics review: deployment frequency, lead time for changes, change failure rate, and mean time to recovery — with team-level and service-level drill-down. Quarterly toolchain optimization: CI/CD pipeline performance review (average build time, cache hit rate, flaky test identification), developer experience survey (bi-annual — measuring tool satisfaction and productivity friction), and annual toolchain rationalization (eliminating redundant tools, consolidating contracts). Platform team OKR planning: quarterly OKR cycle with engineering leadership alignment, semi-annual platform roadmap review (presenting developer productivity improvements to CTO and engineering leads), and annual platform engineering strategy presentation. Cloud provider relationship management: quarterly cloud provider account review (checking for new managed services that could replace custom infrastructure), annual EDP/committed use contract negotiation review, and annual cloud provider SLA review. Developer productivity reporting: quarterly engineering efficiency metrics report (deployment frequency trend, P50/P95 build time, incident frequency). Momenties consolidates the full platform engineering calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual Platform Strategy & Cloud Architecture Review",
    description: "Complete annual cloud architecture Well-Architected Framework review. Set annual platform engineering OKRs. Launch annual DR audit and update RPO/RTO commitments. Review annual SOC 2 Type II audit scope and evidence collection plan. Complete Q4 DORA metrics retrospective.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Q1 DR Failover Test & Security Patch Audit",
    description: "Execute semi-annual full DR failover test. Complete Q1 cloud cost optimization review (RI/savings plan coverage analysis). Run Q1 quarterly chaos experiment. Launch semi-annual developer experience survey. Complete Q1 security patch compliance audit.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Annual Security Architecture Review & SOC 2 Prep",
    description: "Complete annual security architecture review. Begin SOC 2 Type II evidence collection intensive period (if Q3 audit window). Run semi-annual dependency audit (library abandonment, license compliance). Complete H1 DORA metrics analysis and platform roadmap review. Run quarterly game day simulation.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Q2 Cloud Optimization & Annual Penetration Test",
    description: "Complete Q2 cloud cost optimization review. Execute annual penetration test. Launch SOC 2 Type II audit if Q3 window. Complete Q3 DR tabletop exercise. Review Kubernetes cluster upgrade plan for Q4 execution.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Q3 Platform Review & EDP Negotiation",
    description: "Complete Q3 DORA metrics review and platform OKR check-in. Begin annual cloud provider EDP/committed use contract negotiation. Run semi-annual full DR failover test (second annual test). Complete annual chaos engineering retrospective. Launch Q4 platform roadmap planning.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Annual Toolchain Review & Next-Year Planning",
    description: "Complete annual platform toolchain rationalization review. Lock next-year platform engineering roadmap and cloud spend budget. Run Q4 chaos experiment. Complete annual SRE program maturity assessment. Deliver annual engineering productivity report to CTO and board.",
  },
]

const kpis = [
  {
    metric: "Deployment Frequency ≥ 1/Day (Elite)",
    description: "DORA elite benchmark for deployment frequency; below weekly signals CI/CD pipeline or release process bottleneck",
  },
  {
    metric: "Change Failure Rate ≤ 5%",
    description: "Percentage of deployments causing degraded service requiring hotfix or rollback; above 15% signals testing or review process gap",
  },
  {
    metric: "MTTR ≤ 1 Hour (P1)",
    description: "Mean time to recover from P1 incidents; above 4 hours consistently signals runbook quality, on-call rotation, or tooling gap",
  },
  {
    metric: "Cloud Cost Variance ≤ ±8% Monthly",
    description: "Cloud spend versus budget; above +15% triggers optimization review; RI/savings plan coverage below 60% signals purchasing opportunity",
  },
  {
    metric: "Critical CVE Patch Time ≤ 24 Hours",
    description: "Time from CVSS ≥9.0 CVE disclosure to production patch deployment; above 72 hours for critical CVEs signals patching process gap",
  },
  {
    metric: "DR Recovery Time ≤ RTO Target",
    description: "Measured recovery time in semi-annual DR test versus committed RTO; gap above 20% triggers runbook update and infrastructure remediation",
  },
]

const testimonial = {
  quote:
    "Monthly cloud cost anomaly reviews across three cloud providers, quarterly RI/savings plan coverage analysis, monthly DORA metrics review for 14 services, weekly error budget tracking for 8 SLOs, semi-annual full DR failover tests, quarterly chaos engineering game days, annual penetration test coordination, SOC 2 Type II continuous evidence collection, annual ISO 27001 surveillance audit, weekly critical CVE triage with 24-hour SLA, quarterly toolchain optimization across 22 developer tools, annual cloud provider EDP negotiation, and bi-annual developer experience surveys — all tracked in Jira and spreadsheets. Momenties organized everything. Our deployment frequency went from twice-weekly to three times daily.",
  name: "Emeka E.",
  title: "VP Platform Engineering & SRE, Series D FinTech",
}

export default function DevopsPlatformEngineeringCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="DevOps & Platform Engineering Calendar"
        title="DR Testing. Security Patches. Cloud Optimization. One Calendar."
        subtitle="Momenties tracks semi-annual DR failover test schedules, monthly security patch cadences with CVE severity SLAs, quarterly cloud cost optimization reviews, monthly DORA metrics governance, SOC 2 Type II evidence collection windows, annual penetration test scheduling, quarterly chaos engineering game days, platform toolchain annual rationalization, and cloud provider contract negotiation windows so platform engineering leaders maintain reliable, secure, cost-efficient infrastructure."
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
            Four Platform Engineering Pillars Momenties Tracks
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

      {/* 12-Month Timeline */}
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
            12-Month Platform Engineering Calendar
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {timeline.map((t) => (
              <div
                key={t.phase}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 20,
                  alignItems: "start",
                }}
              >
                <div>
                  <p style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.85rem", marginBottom: 4 }}>
                    {t.phase}
                  </p>
                  <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.95rem" }}>{t.title}</p>
                </div>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
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
            Platform Engineering KPIs Momenties Keeps on Track
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {kpis.map((k) => (
              <div
                key={k.metric}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.95rem", marginBottom: 8 }}>
                  {k.metric}
                </p>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                  {k.description}
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
