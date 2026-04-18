import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Vascular Surgeons — ABVS/ABMS MOC, CME tracking, and vascular surgery credential management',
  description:
    'Vascular surgeons manage ABVS (American Board of Vascular Surgery) MOC or ABMS Surgery subspecialty MOC, state medical license biennial CME, fluoroscopy operator licensing, DEA registration, endovascular device training certifications, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full vascular surgery credential calendar.',
  alternates: { canonical: '/for/vascular-surgeons' },
  openGraph: {
    title: 'Momenties for Vascular Surgeons',
    description: 'ABVS/ABMS MOC, CME tracking, and vascular surgery credential management.',
    url: '/for/vascular-surgeons',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABVS and vascular surgery MOC requirements',
    desc: 'Vascular surgeons board-certified by the American Board of Vascular Surgery (ABVS) or through ABMS Surgery with vascular subspecialty certification face independent MOC requirements. CME must be in vascular surgery content areas. Vascular-specific procedural CME may differ from general surgery CME eligibility. Tag every CME by applicable board. Each board\'s MOC counter tracked independently.',
  },
  {
    icon: Clock,
    title: 'Vascular surgeon multi-credential renewal calendar',
    desc: '"ABVS MOC — continuous, vascular surgery CME." "State medical license — biennial CME." "Fluoroscopy operator license — biennial, state-specific CE." "DEA registration — 3-year." "Annual radiation safety training — institutional." "SVS membership — annual." "Endovascular device training — manufacturer-specific." All vascular surgery credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Fluoroscopy, endovascular training, and procedural CE analytics',
    desc: 'Vascular surgeons performing endovascular procedures require state fluoroscopy operator licenses with biennial CE renewal. Annual radiation worker training required institutionally. Manufacturer-specific endovascular device training (EVAR, TEVAR, TCAR, carotid stenting systems) tracked independently as institutional credentialing requirements. Each device certification maintained on manufacturer-specific renewal schedules.',
  },
  {
    icon: Users,
    title: 'SVS, VEITH, and vascular surgery professional involvement',
    desc: '"SVS Annual Meeting — june." "VEITH Symposium — november." "VQI data registry education — quarterly." "VASCULAR Annual Meeting." "Endovascular simulation training." "Hybrid OR and imaging education." All vascular surgery professional development on calendar. SVS Annual Meeting CME tagged by ABVS applicability in advance. VQI registry education tracked as quality improvement CME.',
  },
]

const VAS_WORKFLOW = [
  { time: 'Annual planning', action: 'ABVS MOC continuous CME pace, state medical license biennial CE cycle, fluoroscopy license biennial renewal CE, DEA 3-year renewal, annual radiation safety training, SVS Annual Meeting, and SVS membership all loaded in January. Endovascular device training certifications loaded with individual manufacturer renewal dates.' },
  { time: 'CME completion', action: '"ABVS-approved — endovascular management of complex aortic pathology: fenestrated and branched EVAR outcomes, 3 CME, vascular surgery." Tagged by ABVS MOC track. ABVS counter updates. If ABMS Surgery also applies, Surgery counter updates. State license CE counter updates if state accepts vascular CME. Each tracked independently.' },
  { time: 'Fluoroscopy license', action: '"Fluoroscopy operator license renewal — biennial, state-specific, 8 CE." Fluoroscopy license tracked on biennial state cycle independent of ABVS MOC and state medical license. Fluoroscopy CE must be radiation safety and fluoroscopy technique content per state requirements. Vascular surgeons who lose fluoroscopy authorization cannot perform endovascular procedures.' },
  { time: 'Device training', action: '"Medtronic ENDURANT EVAR training certification — manufacturer annual renewal." "Gore EXCLUDER certification." Endovascular device certifications tracked per manufacturer on manufacturer-specific cycles. Device certification lapse affects institutional credentialing for that procedure. Each device certification placed on calendar with its individual renewal date.' },
  { time: 'Renewal audit', action: 'Analytics: ABVS MOC CME on pace? State license CE complete? Fluoroscopy license current? DEA registration valid? Annual radiation safety done? Endovascular device certifications current? SVS membership active? VQI registry participation documented? Complete vascular surgery credential audit 90 days before earliest renewal.' },
]

export default function ForVascularSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Vascular Surgeons"
        title={
          <>
            ABVS MOC and fluoroscopy license maintained.
            <br />
            <em className="not-italic text-gold">Device certifications and DEA never lapsed.</em>
          </>
        }
        lede="Vascular surgeons manage ABVS board MOC with continuous CME requirements, state fluoroscopy operator license with biennial renewal CE, manufacturer-specific endovascular device training certifications on independent renewal schedules, DEA 3-year registration, annual radiation safety training, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full vascular surgery credential calendar in one view."
        crumbs={[{ label: 'For Vascular Surgeons' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How vascular surgeons use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for vascular surgery credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Vascular surgery credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed across independent board, device, and regulatory cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {VAS_WORKFLOW.map((step, i) => (
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
                &ldquo;Vascular surgery has a credential problem that most specialties don&apos;t: device certifications. I maintain ABVS MOC, a state medical license, a fluoroscopy operator license, DEA registration, annual radiation training, and 4 individual device certifications — each from a different manufacturer on a different renewal schedule. The device certifications are the ones that lapse without warning because each company sends reminder emails to different addresses. Momenties put all of them on one calendar. I haven&apos;t had a device certification lapse since I started using it.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">O</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Oliver G., MD, FSVS, RPVI</div>
                  <div className="text-xs text-muted-foreground">Vascular surgeon, academic aortic and endovascular program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All vascular surgery credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABVS board MOC CME — continuous',
                'State medical license CME — biennial',
                'Fluoroscopy operator license — biennial CE',
                'DEA registration renewal — 3-year',
                'Annual radiation worker safety training',
                'Endovascular device certifications — per manufacturer',
                'SVS membership and VQI registry participation',
                'SVS Annual Meeting CME planning by board track',
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
        title="ABVS MOC and fluoroscopy license maintained."
        subtitle="CME tracking by board, device certification calendar, DEA renewal, and vascular surgery professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
