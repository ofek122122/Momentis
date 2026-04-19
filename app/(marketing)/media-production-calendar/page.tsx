import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Media Production Calendar | Momenties",
  description: "Momenties helps media producers and production companies track pre-production scheduling, post-production delivery windows, distribution release calendars, and talent management cycles in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Pre-Production Scheduling, Script Development & Budget Lock Calendar",
    description:
      "Pre-production without structured calendars collapses into compressing shoot windows — productions that complete pre-production checklists 100% before principal photography begin 30% under the industry average delay rate. Development calendar: script coverage and notes (week 1-2 per draft), table read scheduling (final draft, 6-8 weeks before shoot), production design kickoff (8 weeks before shoot), and storyboard and shot list review (4 weeks before shoot). Casting calendar: casting director engagement (12 weeks before shoot), initial auditions (10 weeks), callback rounds (8 weeks), offer and contract execution (6 weeks), and wardrobe fittings (3 weeks). Location scouting: location scout phase (10-8 weeks before shoot), permit applications (6-4 weeks — film permit processing times vary by jurisdiction from 5 to 30 business days), location agreements and insurance certificates (3 weeks). Budget calendar: production budget lock (8 weeks before shoot), above-the-line deal memos (6 weeks), below-the-line crew contracts (4 weeks), and completion bond approval (6 weeks for major productions). Momenties manages every pre-production milestone.",
  },
  {
    icon: RefreshCw,
    title: "Principal Photography, Post-Production Delivery & Picture Lock Calendar",
    description:
      "Post-production without locked delivery schedules generates cascading budget overruns — productions that miss offline edit completion dates experience average 22-day delivery delays that compound across visual effects, color, and audio finishing pipelines. Principal photography calendar: daily call sheet distribution (18:00 the prior day), production report submission (within 2 hours of wrap), weekly producer report (Mondays), and daily cost report against budget (end of each shooting day). Post-production calendar: offline editor assembly cut (2-4 weeks post-wrap for features, 3-5 days for episodic), director&apos;s cut (4-6 weeks post-wrap), producer&apos;s cut (6-8 weeks), picture lock (8-12 weeks post-wrap for features — triggers all downstream deliverables). VFX pipeline: VFX vendor kickoff (pre-production), plate deliveries (within 1 week of relevant shooting days), VFX reviews (weekly during post), and final VFX delivery (4 weeks before DCP creation). Sound: music spotting session (at picture lock), original score delivery (3 weeks before mix), dialogue edit and ADR (2 weeks before mix), and final mix (1-2 weeks before DCP). Color grade: DI session (2 weeks before delivery). Momenties tracks every post milestone.",
  },
  {
    icon: TrendingUp,
    title: "Distribution Windows, Platform Delivery & Release Campaign Calendar",
    description:
      "Distribution without structured calendars misses platform submission windows and theatrical booking cycles — streaming platforms require technical deliveries 6-8 weeks before premiere dates, and theatrical distributors require DCPs 4-6 weeks before wide release. Theatrical distribution calendar: DCP creation and quality control (6 weeks before release), theatrical trailer delivery to exhibitors (8 weeks before release), MPAA rating submission (8-10 weeks before release), and press screeners for critic embargo (4-6 weeks before release). Streaming platform delivery: technical specifications compliance review (12 weeks before premiere), media asset delivery — ProRes/MXF master, closed captions, subtitles, M&E stems (8 weeks before premiere), metadata and artwork delivery (6 weeks), and platform QC approval (4 weeks). International distribution: BBFC, FSK, CNC, and other territorial classification submissions (12-16 weeks for international releases), international DCP and localization delivery (8 weeks). Home video and VOD: home video master delivery (12 weeks post-theatrical), SVOD window opens (typically 90 days post-theatrical for studio releases). Marketing materials: key art approval (16 weeks before release), trailer delivery to marketing (12 weeks), EPK production (8 weeks), and social asset delivery (4 weeks). Momenties consolidates the full distribution calendar.",
  },
  {
    icon: BarChart3,
    title: "Talent Contracts, Union Compliance & Production Company Development Calendar",
    description:
      "Production companies without structured development calendars lose first-look deal windows and miss guild filing deadlines — SAG-AFTRA, DGA, WGA, and IATSE agreements carry specific payroll, residual, and reporting obligations with fixed due dates. Union and guild calendar: SAG-AFTRA production start notice (3 business days after first day of principal photography), weekly payroll processing per SAG-AFTRA (Thursday payroll for prior week), DGA deal memo within 24 hours of director engagement, WGA script registration before principal photography begins, and IATSE Local union steward notification (production start, minimum 5 days advance). Residual calendar: streaming residual reporting (within 90 days of platform availability), foreign residual filings (quarterly through AGMA/AFM/SAG-AFTRA), home video residuals (semi-annual), and television residual supplemental markets (annual). Development calendar: option renewal calendar (track 12-18 month option periods for underlying rights), first-look deal deliverables (per deal terms, typically 2 scripts or 1 project per contract year), and pitch market calendar (Sundance January, Tribeca April/May, SXSW March, TIFF September — submission windows 3-6 months advance). Festival submissions: Sundance (August deadline), TIFF (April), Cannes (January), Tribeca (January), and SXSW (October). Momenties schedules every production company obligation.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Awards Season Close-Out & Spring Development Planning",
    description: "Complete awards season campaign for current releases (Q4/Q1 theatrical). Submit projects to Sundance labs and emerging film funds. Lock development slate for spring production. Complete SAG-AFTRA and DGA residual reporting for Q4 releases. Review option renewal calendar for underlying rights expiring in H1.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Spring Production Kickoff & Festival Circuit Submissions",
    description: "Launch principal photography for spring production slate. Submit completed films to Tribeca, SXSW, and Hot Docs (documentary). Complete Q1 streaming platform deliveries for Q2 premieres. Issue DGA deal memos and WGA registrations for new productions. Review WGA minimums and guild rates updated for current contract cycle.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Cannes Market & Summer Post-Production",
    description: "Attend Cannes Marché du Film (May) — package projects for international co-production and sales. Advance spring productions through offline edit and director&apos;s cut. Lock picture on Q3 streaming deliveries. Submit TIFF features (April deadline). Complete H1 talent residual filings. Review first-look deal deliverables for H1 obligations.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Summer Release Execution & Fall Production Prep",
    description: "Execute summer theatrical releases with DCP delivery (6 weeks advance) and press screening embargo management. Finalize VFX and sound mix for fall streaming premieres. Begin pre-production for fall production slate — location permits, casting, and budget lock. Submit projects to TIFF (August deadline). Complete SAG-AFTRA weekly payroll compliance review.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "TIFF & Fall Festival Circuit & Q4 Streaming Delivery",
    description: "Execute TIFF releases and acquire international distribution partners at Toronto market. Complete Q4 streaming platform technical deliveries (8 weeks before premiere). Launch fall production principal photography. Submit projects to Sundance (October deadline). Begin awards campaign strategy for Q4 theatrical releases. Review option renewals expiring Q4.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Awards Season Launch & Annual Slate Planning",
    description: "Execute Q4 theatrical releases and awards screener distribution. Launch Sundance submission final round (November). Complete annual residual filings. Lock next-year production and development slate. Renew first-look deals and producer agreements. Complete annual guild compliance review — SAG-AFTRA, DGA, WGA, and IATSE audit. Begin next-year festival submission calendar planning.",
  },
]

const kpis = [
  {
    metric: "On-Time Picture Lock 100%",
    description: "Zero picture lock delays; one week of picture lock slip cascades into 3-4 weeks of downstream VFX, audio, and delivery delays",
  },
  {
    metric: "Platform Technical Acceptance Rate ≥ 95%",
    description: "Percentage of platform deliveries accepted without QC rejection; rejections trigger re-delivery cycles that can push premiere dates",
  },
  {
    metric: "Production Budget Variance ≤ 8%",
    description: "Final cost versus locked production budget; above 10% triggers completion bond review and investor reporting obligations",
  },
  {
    metric: "Festival Submission Hit Rate ≥ 30%",
    description: "Percentage of submitted projects selected for target festivals; below 20% signals positioning, timing, or project-market fit issues in development slate",
  },
  {
    metric: "Guild Payroll Compliance 100%",
    description: "Zero late or non-compliant payroll filings with SAG-AFTRA, DGA, WGA, and IATSE; violations trigger penalties and potential production holds",
  },
  {
    metric: "Residual Filing On-Time Rate 100%",
    description: "Percentage of residual reports filed by guild deadline; late residual filings trigger penalties and audit exposure across all active distribution agreements",
  },
]

const testimonial = {
  quote:
    "Pre-production checklists across 4 simultaneous productions, daily call sheet distribution, weekly production reports, DGA deal memo 24-hour requirement, SAG-AFTRA weekly payroll Thursday cycle, WGA script registrations, VFX plate delivery tracking for 380 individual shots, picture lock triggers for color and mix, DCP delivery 6 weeks out for theatrical, platform technical deliveries 8 weeks before premiere for Netflix and Amazon simultaneously, TIFF and Sundance submission deadlines, option renewal calendar for 23 underlying rights, first-look deal quarterly deliverable reviews, semi-annual residual filings, and awards screener distribution — all in spreadsheets. Momenties organized every deadline. We hit picture lock on time for the first time in three productions.",
  name: "Emeka P.",
  title: "Executive Producer & Head of Production, Independent Studio",
}

export default function MediaProductionCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Media Production Calendar"
        title="Pre-Production. Picture Lock. Platform Delivery. One Calendar."
        subtitle="Momenties tracks pre-production milestone checklists with permit and casting deadlines, principal photography daily reporting obligations, post-production picture lock triggers with downstream VFX and audio milestones, theatrical DCP delivery windows, streaming platform technical deliveries 8 weeks before premiere, SAG-AFTRA and DGA payroll compliance cycles, festival submission deadlines, and option renewal calendars so media producers never miss a production or distribution deadline."
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
            Four Media Production Pillars Momenties Tracks
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
            12-Month Media Production Calendar
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
            Media Production KPIs Momenties Keeps on Track
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
