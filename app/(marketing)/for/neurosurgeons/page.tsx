import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Neurosurgeons — ABNS MOC, CME tracking, and neurosurgery credential management',
  description:
    'Neurosurgeons manage ABNS (American Board of Neurological Surgery) 10-year recertification and continuous CME requirements, state medical license biennial CME, DEA 3-year registration, robotic and navigation-guided surgery credentialing, radiation safety for intraoperative fluoroscopy, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full neurosurgery credential calendar.',
  alternates: { canonical: '/for/neurosurgeons' },
  openGraph: {
    title: 'Momenties for Neurosurgeons',
    description: 'ABNS MOC, CME tracking, and neurosurgery credential management.',
    url: '/for/neurosurgeons',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABNS recertification and neurosurgery MOC requirements',
    desc: 'Neurosurgeons certified by the American Board of Neurological Surgery (ABNS) face 10-year recertification cycles with continuous CME requirements in neurosurgery content. ABNS Continuous Certification requires CME in neurological surgery content areas: brain and spine oncology, cerebrovascular, skull base, spine surgery, functional neurosurgery, and peripheral nerve. CME must be neurosurgery-specific — general surgical CME does not satisfy ABNS requirements. State medical license CE tracked independently.',
  },
  {
    icon: Clock,
    title: 'Neurosurgeon multi-credential renewal calendar',
    desc: '"ABNS Continuous Certification — 10-year cycle, continuous CME." "State medical license — biennial CE." "DEA registration — 3-year." "Robotic and navigation-guided surgery credentialing — institutional annual." "Intraoperative radiation safety training — annual institutional." "AANS/CNS membership — annual." "Neuromonitoring credentialing — institutional." All neurosurgery credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Robotic, navigation, and radiation safety credentialing analytics',
    desc: 'Neurosurgeons using robotic spine systems (Mazor, ROSA Spine, ExcelsiusGPS) require institutional credentialing with manufacturer training. Navigation-guided cranial surgery platforms have independent credentialing requirements. Intraoperative fluoroscopy use requires annual radiation safety training documentation. Each surgical platform tracked on institutional renewal schedule independent of ABNS recertification.',
  },
  {
    icon: Users,
    title: 'AANS, CNS, and neurosurgery professional involvement',
    desc: '"AANS Annual Scientific Meeting — april." "CNS Annual Meeting — october." "SPINE Annual Meeting — october." "SNIS Annual Meeting — july." "American Academy of Pain Medicine annual." "Skull base surgery symposium." "Neurocritical Care Society Annual Meeting." All neurosurgery professional development on calendar. AANS and CNS Annual Meeting CME tagged by ABNS applicability in advance.',
  },
]

const NS_WORKFLOW = [
  { time: 'Annual planning', action: 'ABNS Continuous Certification CME 10-year pace, state medical license biennial CE cycle, DEA 3-year renewal, robotic spine credentialing institutional renewal, navigation-guided cranial credentialing renewal, annual intraoperative radiation safety training, AANS Annual Meeting, and AANS membership all loaded in January. ABNS and state CE paces tracked independently.' },
  { time: 'CME completion', action: '"AANS-approved — awake craniotomy for glioma in eloquent cortex: intraoperative mapping and language preservation, 4 CME, ABNS applicable." Tagged by applicable credential. ABNS counter updates (cumulative toward 10-year recertification). State license CE counter updates if state accepts neurosurgery CME. Neurosurgery subspecialty CE (spine, cerebrovascular, functional) logged to ABNS content domains separately.' },
  { time: 'Robotic credentialing', action: '"Mazor X Stealth robotic spine credentialing renewal — institutional peer review, Q1." "Medtronic StealthStation navigation cranial credentialing renewal — Q2." Robotic spine and navigation systems tracked on independent institutional renewal cycles. Multiple platforms at multiple hospitals each tracked independently. Credentialing lapse for a specific system stops use of that system in the OR.' },
  { time: 'Radiation safety', action: '"Annual intraoperative radiation safety training — O-arm and fluoroscopy use in spine surgery, Q1." Annual radiation safety training placed as institutional requirement for neurosurgeons using intraoperative imaging. Spine surgery using intraoperative CT (O-arm) and fluoroscopy requires documented annual radiation safety training. Training documentation required for institutional credentialing renewal.' },
  { time: 'Renewal audit', action: 'Analytics: ABNS CME on pace for 10-year cycle? State license CE complete? DEA valid? Robotic credentialing current for each platform? Navigation credentialing current? Annual radiation safety done? AANS membership active? Complete neurosurgery credential audit 90 days before earliest renewal. ABNS and institutional credentialing documentation maintained separately.' },
]

export default function ForNeurosurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Neurosurgeons"
        title={
          <>
            ABNS certification and robotic credentialing maintained.
            <br />
            <em className="not-italic text-gold">Navigation credentialing and DEA never lapsed.</em>
          </>
        }
        lede="Neurosurgeons manage ABNS 10-year recertification with continuous neurosurgery CME requirements, institutional credentialing for robotic spine and navigation-guided cranial platforms on independent annual review cycles, annual intraoperative radiation safety training, DEA 3-year registration, state medical license biennial CE, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full neurosurgery credential calendar in one view."
        crumbs={[{ label: 'For Neurosurgeons' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How neurosurgeons use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for neurosurgery credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Neurosurgery credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed across board, institutional, and platform-specific cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {NS_WORKFLOW.map((step, i) => (
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
                &ldquo;I operate at two hospitals with different credentialing calendars and I use three different navigation and robotic platforms. ABNS Continuous Certification has its own 10-year trajectory with neurosurgery-specific CME requirements. My state license is biennial. The institutional credentialing dates are set by the hospital credentialing committees and I get a paper letter with a renewal date — it doesn&apos;t sync with anything. At any given time I have 8 to 10 credentials on different cycles. Momenties is the first system where I loaded all of them once and they just stayed current.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">T</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Thomas B., MD, FAANS, FACS</div>
                  <div className="text-xs text-muted-foreground">Neurosurgeon, spine and cerebrovascular, dual-hospital academic practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All neurosurgery credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABNS 10-year Continuous Certification CME',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Robotic spine surgery credentialing — institutional annual',
                'Navigation-guided cranial surgery credentialing — institutional',
                'Annual intraoperative radiation safety training',
                'AANS and CNS membership renewal — annual',
                'AANS/CNS Annual Meeting CME planning by ABNS applicability',
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
        title="ABNS certification and robotic credentialing maintained."
        subtitle="CME tracking by board, navigation and robotic platform credentialing calendar, and neurosurgery professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
