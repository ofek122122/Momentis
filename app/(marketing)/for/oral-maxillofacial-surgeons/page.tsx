import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Oral and Maxillofacial Surgeons — ABOMS MOC CE renewal, OMS credential management',
  description:
    'Oral and maxillofacial surgeons manage ABOMS board certification MOC CE renewal, state dental and medical license CE (dual licensure for MD/DDS OMS), DEA 3-year renewal, ACLS 2-year renewal, hospital surgical credentialing with procedure volume review, AAOMS membership, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full OMS credential calendar.',
  alternates: { canonical: '/for/oral-maxillofacial-surgeons' },
  openGraph: {
    title: 'Momenties for Oral and Maxillofacial Surgeons',
    description: 'ABOMS MOC CE renewal, oral and maxillofacial surgeon credential management.',
    url: '/for/oral-maxillofacial-surgeons',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for ABOMS MOC and dual state licensure on independent cycles',
    desc: 'Oral and maxillofacial surgeons with MD/DDS degrees maintain state dental licensure and state medical licensure — two independent biennial CE requirements with different state board-approved provider standards. ABOMS (American Board of Oral and Maxillofacial Surgery) board certification MOC requires CE with OMS-specific content including dentoalveolar surgery, trauma, pathology, reconstructive surgery, and anesthesia. DDS-only OMS practitioners maintain dental licensure CE on a biennial cycle. DEA registration 3-year cycle critical for OMS anesthesia practices.',
  },
  {
    icon: Clock,
    title: 'OMS multi-credential renewal calendar',
    desc: '"ABOMS MOC — CE renewal, OMS content domains." "State dental license — biennial CE." "State medical license (if MD/DDS) — biennial CME, independent cycle." "DEA registration — 3-year renewal." "ACLS — 2-year renewal (OMS anesthesia credentialing)." "Hospital surgical credentialing — annual procedure volume review." "AAOMS membership — annual." All OMS credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Dual licensure CE provider requirements and hospital credentialing analytics',
    desc: 'MD/DDS oral and maxillofacial surgeons face a unique dual licensure challenge — state dental board CE requirements and state medical board CME requirements have different approved provider standards. ADA CERP-approved CE satisfies dental board requirements; AMA PRA Category 1 CME satisfies medical board requirements. The same OMS educational event may be approved by one board but not the other. Hospital surgical credentialing reviews OMS procedure volumes annually — orthognathic surgery, facial fracture repair, head and neck pathology excision — separate from ABOMS certification.',
  },
  {
    icon: Users,
    title: 'AAOMS, ADA, and OMS professional involvement',
    desc: '"AAOMS Annual Meeting — october." "AAOMS Dental Implant Conference." "ADA Annual Meeting." "OMS Foundation Annual Program." "Temporomandibular joint surgery CE." "Orthognathic surgery and virtual surgical planning CE." "Head and neck pathology and reconstruction CE." "Anesthesia for OMS — sedation and general anesthesia in the office setting CE." All OMS professional development on calendar. AAOMS conference CE tagged by ABOMS MOC, state dental, and state medical license applicability.',
  },
]

const OMS_WORKFLOW = [
  { time: 'Annual planning', action: 'ABOMS MOC CE pace (OMS content), state dental license biennial CE, state medical license biennial CME (if MD/DDS, independent cycle and different approved providers), DEA 3-year renewal, ACLS 2-year cycle, annual hospital surgical credentialing, AAOMS Annual Meeting, and AAOMS membership all loaded in January. ABOMS CE counter, state dental CE counter, state medical CME counter, and DEA expiration tracked independently.' },
  { time: 'CE completion', action: '"AAOMS-approved — virtual surgical planning in orthognathic surgery: 3D cephalometric analysis, surgical simulation software, and intraoperative navigation accuracy, 2 CE, ADA CERP and AMA PRA Category 1, ABOMS applicable — reconstructive surgery domain." ABOMS counter updates. State dental license CE updates. State medical CME updates (if MD/DDS and event carries AMA PRA Credit). Dual approval status confirmed at logging.' },
  { time: 'OMS anesthesia', action: '"ACLS renewal — 2-year cycle." "Annual OMS office anesthesia permit CE — state dental board anesthesia permit renewal requirements, Q1." ACLS renewal placed for hospital credentialing. In addition, many states require specific office anesthesia permit renewal CE for OMS practitioners administering general anesthesia in the office setting — state dental board requirement separate from ACLS and separate from hospital credentialing. State-specific OMS anesthesia permit CE tracked as a regulatory requirement.' },
  { time: 'Hospital credentialing', action: '"Annual hospital surgical credentialing — orthognathic surgery volume, facial fracture repair outcomes, head and neck tumor resection case log, Q2." Annual hospital credentialing for OMS surgical privileges placed as an institutional requirement. OMS practitioners with hospital admitting privileges and operating room access undergo annual procedure volume review separate from ABOMS certification. Privileges for specific procedures (free flap reconstruction, mandibular condyle replacement) may require minimum annual volume documentation.' },
  { time: 'Renewal audit', action: 'Analytics: ABOMS MOC CE on pace? State dental license CE complete? State medical CME adequate (if MD/DDS)? ACLS current? DEA valid? Office anesthesia permit CE current (if applicable)? Hospital credentialing documented? AAOMS membership active? Complete OMS credential audit 90 days before earliest renewal. ABOMS, state dental board, state medical board, DEA, and institutional documentation maintained separately.' },
]

export default function ForOralMaxillofacialSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Oral and Maxillofacial Surgeons"
        title={
          <>
            ABOMS MOC and dual state licensure maintained.
            <br />
            <em className="not-italic text-gold">DEA and ACLS current. Hospital credentialing documented.</em>
          </>
        }
        lede="Oral and maxillofacial surgeons manage ABOMS board certification MOC CE with OMS-specific content, dual state dental and medical licensure biennial CE on independent cycles with different approved provider requirements for MD/DDS practitioners, DEA 3-year registration critical for OMS anesthesia practices, ACLS 2-year renewal for hospital credentialing, annual hospital surgical privileges review with procedure volume documentation, state office anesthesia permit CE where required, and professional development at AAOMS simultaneously. Momenties tracks CE by OMS credential, surfaces renewal deadlines 90 days early, and manages the full OMS credential calendar in one view."
        crumbs={[{ label: 'For Oral and Maxillofacial Surgeons' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/analytics"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            CE analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How oral and maxillofacial surgeons use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for OMS credential and CE management.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {USE_CASES.map((uc, i) => (
              <Reveal key={uc.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <uc.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{uc.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">OMS credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every ABOMS MOC cycle, dual licensure renewal, and annual hospital credentialing review.</h2>
          </Reveal>
          <div className="space-y-3">
            {OMS_WORKFLOW.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-24 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I have an MD and a DDS which means I maintain a state dental license and a state medical license — two separate boards, two separate biennial CE requirements, two separate approved provider standards. The same continuing education event may be ADA CERP approved but not carry AMA PRA Category 1 credit, which means it satisfies my dental board but not my medical board. ABOMS MOC is a third CE system. My DEA renewal is every 3 years and I run an office anesthesia practice so a lapse would shut down my practice. ACLS is hospital required. The hospital does annual credentialing for my OR privileges. At any given time I have at least four credential clocks running simultaneously. Momenties was the first tool that tracked all of them as distinct items.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">James O., MD, DDS, FACS</div>
                  <div className="text-xs text-muted-foreground">Oral and maxillofacial surgeon, academic hospital and private practice</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Credentials tracked</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All OMS credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABOMS MOC CE — OMS content domains, independent tracking',
                'State dental license CE — biennial, ADA CERP-approved providers',
                'State medical license CME — biennial, AMA PRA Category 1 (if MD/DDS)',
                'DEA registration renewal — 3-year (OMS anesthesia practice)',
                'ACLS certification — 2-year renewal (hospital credentialing)',
                'State office anesthesia permit CE — state dental board requirement (if applicable)',
                'Annual hospital surgical credentialing — procedure volume and outcomes review',
                'AAOMS conference CE planning by ABOMS, dental, and medical board applicability',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                  <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="ABOMS MOC and dual state licensure maintained."
        subtitle="CE tracking for dual licensure with different approved provider requirements, DEA renewal, hospital credentialing, and OMS professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
