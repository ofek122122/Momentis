import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Clinical Operations Calendar | Momenties",
  description: "Momenties helps clinical operations leaders track Joint Commission survey cycles, HEDIS quality measure deadlines, credentialing reappointment cycles, regulatory compliance audits, and clinical staff competency reviews in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Joint Commission Survey Cycles, CMS Certification & Accreditation Calendar",
    description:
      "Clinical operations without structured accreditation calendars leave organizations exposed to unannounced survey visits — Joint Commission surveys are unannounced for hospitals, meaning continuous survey-readiness is a year-round operational requirement, not a one-time preparation event. Joint Commission hospital accreditation: triennial unannounced survey (preparation cadence: monthly tracer rounds, quarterly mock surveys, annual systems tracer), Joint Commission disease-specific certification renewal (annual or biennial depending on program — Stroke, Heart Failure, Hip and Knee, Sepsis), and ORYX core measure quarterly data submission. CMS Conditions of Participation compliance: annual CoP self-assessment, medical record completion audit (quarterly), infection control annual review, and discharge planning process annual audit. Specialty accreditation calendar: AAAHC ambulatory care accreditation (triennial), ACHC home health accreditation (biennial), CARF rehabilitation accreditation (triennial), CAP laboratory accreditation (biennial), and AABB blood bank accreditation (biennial). CMS Five-Star Quality Rating: NHSN monthly data submission, CMS Nursing Home Compare quarterly data review, and annual Five-Star rating appeal window. Magnet Recognition Program: Magnet re-designation (4-year cycle), annual Magnet document maintenance, and nursing research utilization documentation. Momenties manages every accreditation milestone.",
  },
  {
    icon: RefreshCw,
    title: "Credentialing Reappointment Cycles, Privileging Reviews & Provider Roster Calendar",
    description:
      "Medical staff credentialing without structured reappointment calendars is a Joint Commission Sentinel Event Alert — expired credentials expose organizations to payer audits, liability, and Joint Commission findings. Credentialing reappointment calendar: medical staff reappointment (2-year cycle for physicians, 1-2 year cycle for APPs depending on bylaws), primary source verification renewal (360 days before expiration), department chief peer review recommendation (30 days before reappointment deadline), and credentials committee approval (60 days before expiration). Privileging review calendar: new privilege requests (8-12 week processing from complete application), focused professional practice evaluation (FPPE) completion documentation (90 days for new privileges, as defined per privilege-specific criteria), ongoing professional practice evaluation (OPPE) quarterly report generation, and peer review case assignment and completion. Provider roster management: payer enrollment roster quarterly verification, NPI registry monthly verification for all active providers, CAQH ProView quarterly attestation reminders for all credentialed providers, and Medicare/Medicaid enrollment revalidation cycle tracking (5-year per CMS). Locum tenens and travel provider credentialing expedited processing (10-14 day target). Momenties schedules every credentialing deadline.",
  },
  {
    icon: TrendingUp,
    title: "HEDIS Quality Measures, CAHPS Surveys & Value-Based Care Reporting Calendar",
    description:
      "Clinical quality reporting without structured calendars misses HEDIS supplemental data submission windows and CAHPS sampling deadlines — plans that submit supplemental data late lose credit for quality measures affecting star ratings and revenue. HEDIS reporting calendar: NCQA HEDIS technical specifications annual release (October/November for measurement year), supplemental data submission window (January-May for prior measurement year), HEDIS audit (June-August), and final HEDIS results (August-October). CAHPS survey calendar: CMS CAHPS for PQRS sampling window (January-June), CAHPS data submission (October), and CAHPS improvement action planning. CMS Star Ratings calendar: Medicare Advantage Part C and D Star Ratings preview period (July), final Star Ratings release (October), and CAHPs measure improvement planning for following year. Accountable Care Organization (ACO) quality reporting: MSSP quality measure submission annual (March 31), ACO quality report board presentation, and PCMH annual quality reporting. Hospital Value-Based Purchasing (HVBP) performance period review quarterly, annual domain weight changes review, and TPS (Total Performance Score) challenge period (30 days from notification). HCAHPS monthly response monitoring and annual improvement planning. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Clinical Staff Competency Reviews, Regulatory Training & Patient Safety Calendar",
    description:
      "Clinical competency without structured annual review cycles produces documentation gaps that become Joint Commission findings — organizations that maintain competency records below 95% completion rate receive condition-level findings that require immediate corrective action plans. Annual competency review calendar: nursing annual skills competency day (January-March for most systems), advanced life support competency verification (ACLS/BLS/PALS expiration tracking by individual provider), department-specific competency assessments (procedural, medication, equipment — annually or per change), and new employee 90-day orientation competency completion. Regulatory training calendar: HIPAA privacy and security annual training (100% completion documented), fire safety and emergency preparedness annual training, hazardous materials handling annual training (OSHA), National Patient Safety Goals (NPSG) annual staff education, and hand hygiene compliance audit quarterly. Patient safety calendar: FMEA (Failure Mode and Effects Analysis) annual completion for high-risk processes, CUSP (Comprehensive Unit-based Safety Program) quarterly team review, root cause analysis (RCA) documentation and corrective action completion (45-day timeline per Joint Commission), and near miss reporting system quarterly trend review. Infection control calendar: NHSN HAI data monthly submission, annual influenza vaccination campaign (September-November), and TB screening annual documentation for all clinical staff. Momenties consolidates all clinical operations compliance.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual Competency Season & Quality Measure Data Lock",
    description: "Launch annual clinical competency assessment cycle. Submit Q4 NHSN HAI data. Begin HEDIS supplemental data preparation for prior measurement year submission window. Complete Joint Commission quarterly tracer activities. Issue Q1 OPPE reports to department chiefs. Verify all medical staff reappointments due in H1 are in progress.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "HEDIS Submission Window & Reappointment Season",
    description: "Submit HEDIS supplemental data (window closes May 31). Complete MSSP quality measure annual submission (March 31). Complete H1 medical staff reappointments and credentials committee approvals. Launch spring mock Joint Commission tracer survey. Complete annual HIPAA training documentation. Submit Q1 CMS quality reporting.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "HEDIS Audit Season & Mid-Year Quality Review",
    description: "Participate in HEDIS audit (June-August window). Complete mid-year OPPE review cycle for all credentialed providers. Present mid-year quality dashboard to board quality committee. Review Joint Commission disease-specific certification renewal documentation. Submit H1 Joint Commission core measure data. Launch CAHPS improvement action planning.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "CMS Star Ratings Preview & FMEA Season",
    description: "Review Medicare Advantage CMS Star Ratings preview period (July). Launch annual FMEA for high-risk clinical processes. Submit HEDIS audit responses. Complete H1 RCA corrective action documentation reviews. Launch influenza vaccination campaign planning. Begin next-year HEDIS measure performance gap analysis.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "CMS Star Ratings Release & Accreditation Readiness",
    description: "Review final CMS Star Ratings (October). Launch influenza vaccination campaign (September-November). Complete annual systems tracer for Joint Commission readiness. Submit CAHPS data. Review NCQA HEDIS technical specifications for next measurement year (released October/November). Complete Q3 OPPE reports. Plan year-end competency assessment cycle.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Compliance Close & Annual Planning",
    description: "Complete annual regulatory training documentation (HIPAA, fire safety, OSHA). Lock next-year clinical quality improvement plan. Complete annual Magnet document maintenance. Submit December NHSN data. Complete year-end medical staff reappointment cycle review. Present annual quality report to board. Lock next-year credentialing and accreditation calendar.",
  },
]

const kpis = [
  {
    metric: "Survey Readiness Score ≥ 90%",
    description: "Monthly tracer survey compliance score; below 80% on any domain signals accreditation risk requiring immediate corrective action before unannounced survey",
  },
  {
    metric: "Credentialing On-Time Rate ≥ 98%",
    description: "Percentage of reappointments completed before expiration; expired credentials trigger payer audits and Joint Commission citations",
  },
  {
    metric: "HEDIS Supplemental Data Submission 100%",
    description: "Percentage of eligible measures with supplemental data submitted before deadline; missed submission loses quality credit affecting star ratings and VBC contracts",
  },
  {
    metric: "Annual Competency Completion ≥ 95%",
    description: "Clinical staff completing annual competency assessments by deadline; below 95% generates Joint Commission condition-level findings",
  },
  {
    metric: "OPPE Completion Rate ≥ 98%",
    description: "Percentage of quarterly OPPE reports completed and delivered to providers; incomplete OPPE documentation is the leading medical staff Joint Commission finding",
  },
  {
    metric: "RCA Corrective Action Completion ≥ 90%",
    description: "Percentage of RCA corrective actions completed within 45-day Joint Commission timeline; overdue actions escalate to repeat events and regulatory sanction risk",
  },
]

const testimonial = {
  quote:
    "Monthly Joint Commission tracer rounds, quarterly mock surveys, quarterly OPPE reports for 340 credentialed providers, biennial reappointment cycle management for 280 physicians and 120 APPs, CAQH quarterly attestation reminders for all providers, HEDIS supplemental data across 22 measures with May deadline, HEDIS audit June-August, MSSP quality submission March 31, CMS Star Ratings preview in July and release in October, monthly NHSN HAI submissions, annual HIPAA training documentation for 600 clinical staff, annual competency assessments, TB screening annual tracking, influenza vaccination campaign, RCA 45-day corrective action deadlines, Magnet documentation maintenance, disease-specific certification renewals for 4 programs, and CAHPS data submission — all in spreadsheets. Momenties organized everything. We achieved survey-ready status for the first time year-round.",
  name: "Ngozi C.",
  title: "VP Clinical Operations & Chief Quality Officer",
}

export default function ClinicalOperationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Clinical Operations Calendar"
        title="Joint Commission Readiness. HEDIS Reporting. Credentialing. One Calendar."
        subtitle="Momenties tracks Joint Commission unannounced survey readiness with monthly tracer cycles, medical staff biennial reappointment timelines with OPPE quarterly reporting, HEDIS supplemental data submission windows, CAHPS survey sampling, CMS Star Ratings review cycles, annual clinical competency assessment documentation, NHSN monthly data submissions, and RCA corrective action deadlines so clinical operations leaders maintain continuous survey readiness."
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
            Four Clinical Operations Pillars Momenties Tracks
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
            12-Month Clinical Operations Calendar
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
            Clinical Operations KPIs Momenties Keeps on Track
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
