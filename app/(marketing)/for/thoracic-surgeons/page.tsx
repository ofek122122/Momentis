import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Thoracic Surgeons — ABTS MOC, CME tracking, and thoracic surgery credential management',
  description:
    'Thoracic surgeons manage ABTS (American Board of Thoracic Surgery) MOC with continuous CME requirements in cardiothoracic content, state medical license biennial CME, DEA 3-year registration, robotic thoracic surgery credentialing, bronchoscopy credentialing, lung cancer screening program requirements, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full thoracic surgery credential calendar.',
  alternates: { canonical: '/for/thoracic-surgeons' },
  openGraph: {
    title: 'Momenties for Thoracic Surgeons',
    description: 'ABTS MOC, CME tracking, and thoracic surgery credential management.',
    url: '/for/thoracic-surgeons',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABTS MOC and cardiothoracic board requirements',
    desc: 'Thoracic surgeons certified by the American Board of Thoracic Surgery (ABTS) face continuous MOC with cardiothoracic surgery CME requirements. CME must be in ABTS-relevant content: thoracic oncology, minimally invasive thoracic surgery, cardiac surgery, or esophageal surgery. CME must meet ABTS CME attestation standards — not all ACS or STS credits qualify automatically. ABTS MOC counter tracked independently from state license CME.',
  },
  {
    icon: Clock,
    title: 'Thoracic surgeon multi-credential renewal calendar',
    desc: '"ABTS MOC — continuous, cardiothoracic CME." "State medical license — biennial CE." "DEA registration — 3-year." "Robotic thoracic surgery credentialing — institutional renewal." "Bronchoscopy credentialing — biennial peer review." "Lung cancer screening program — annual attestation." "STS membership — annual." All thoracic surgery credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Robotic surgery credentialing and procedural CE analytics',
    desc: 'Thoracic surgeons performing robotic-assisted thoracic surgery (RATS) require institutional credentialing with manufacturer training components for da Vinci or Ion systems. Robotic credentialing renewal cycles are set by institutional policy — typically annual peer review with proctored case minimums. Manufacturer software updates trigger refresher training requirements. Each robotic platform credentialing tracked independently on institutional renewal schedule.',
  },
  {
    icon: Users,
    title: 'STS, AATS, and thoracic surgery professional involvement',
    desc: '"STS Annual Meeting — january." "AATS Annual Meeting — may." "ESTS Annual Meeting — june." "Society of Robotic Surgery Annual Meeting." "Lung Cancer Screening Implementation training." "ESTS minimally invasive thoracic surgery education." All thoracic surgery professional development on calendar. STS Annual Meeting CME tagged by ABTS MOC applicability in advance.',
  },
]

const THOR_WORKFLOW = [
  { time: 'Annual planning', action: 'ABTS MOC continuous CME pace, state medical license biennial CE cycle, DEA 3-year renewal, robotic thoracic credentialing institutional renewal, bronchoscopy credentialing peer review cycle, lung cancer screening program annual attestation, STS Annual Meeting, and STS membership all loaded in January. ABTS and state CE paces tracked independently.' },
  { time: 'CME completion', action: '"STS/AATS-approved — minimally invasive esophagectomy: technique and outcomes in high-volume thoracic programs, 3 CME, ABTS applicable." Tagged by applicable board. ABTS counter updates. State license CE counter updates if state accepts the content. Cardiothoracic-specific procedural CME may satisfy ABTS attestation requirements; general surgery CME may not.' },
  { time: 'Robotic credentialing', action: '"Robotic thoracic surgery credentialing renewal — institutional peer review, Q1." "Intuitive Surgical da Vinci Xi RATS recredentialing — annual proctored case review." Robotic credentialing tracked on institutional renewal cycle separate from ABTS MOC. Case minimum documentation maintained for peer review. Credentialing lapse stops robotic thoracic procedure scheduling.' },
  { time: 'Lung screening', action: '"ACR lung cancer screening program — annual attestation, January." Lung cancer screening program participation requires annual ACR attestation of program qualifications. LDCT screening interpretation and clinical management CME tracked as a separate category for ACR lung-RADS compliance. Attestation lapse disqualifies facility from Medicare reimbursement for screening programs.' },
  { time: 'Renewal audit', action: 'Analytics: ABTS MOC CME on pace? State license CE complete? DEA registration valid? Robotic credentialing current? Bronchoscopy credentialing peer review done? Lung screening attestation submitted? STS membership active? Complete thoracic surgery credential audit 90 days before earliest renewal. ABTS attestation and institutional documentation maintained separately.' },
]

export default function ForThoracicSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Thoracic Surgeons"
        title={
          <>
            ABTS MOC and robotic credentialing maintained.
            <br />
            <em className="not-italic text-gold">Lung screening attestation and DEA never lapsed.</em>
          </>
        }
        lede="Thoracic surgeons manage ABTS board MOC with continuous cardiothoracic CME requirements, institutional robotic thoracic surgery credentialing on annual peer review cycles, bronchoscopy credentialing, ACR lung cancer screening program annual attestation, DEA 3-year registration, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full thoracic surgery credential calendar in one view."
        crumbs={[{ label: 'For Thoracic Surgeons' }]}
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
            CME analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How thoracic surgeons use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for thoracic surgery credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Thoracic surgery credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed across board, institutional, and regulatory cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {THOR_WORKFLOW.map((step, i) => (
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
                &ldquo;ABTS MOC is continuous, which sounds manageable until you realize the CME requirements are specific to cardiothoracic content — general surgery CME doesn&apos;t automatically count. My state license runs on a completely different biennial cycle. And the robotic thoracic credentialing is entirely institutional — my hospital sets the renewal date, not any board. I had three things expiring in the same 6-week window and didn&apos;t know until I checked. Momenties loaded all three with 90-day alerts. I&apos;ve never had that kind of visibility into my credential calendar before.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">P</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Patrick S., MD, FACS, FCCP</div>
                  <div className="text-xs text-muted-foreground">Thoracic surgeon, academic minimally invasive thoracic surgery program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All thoracic surgery credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABTS board MOC CME — continuous',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Robotic thoracic surgery credentialing — institutional annual',
                'Bronchoscopy credentialing — biennial peer review',
                'ACR lung cancer screening program attestation — annual',
                'STS membership and AATS involvement',
                'STS Annual Meeting CME planning by ABTS applicability',
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
        title="ABTS MOC and robotic credentialing maintained."
        subtitle="CME tracking by board, robotic surgery credentialing calendar, lung screening attestation, and thoracic surgery professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
