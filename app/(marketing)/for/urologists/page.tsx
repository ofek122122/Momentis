import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Urologists — ABU MOC, CME tracking, and urology credential management',
  description:
    'Urologists manage ABU (American Board of Urology) MOC with continuous CME requirements, state medical license biennial CME, DEA 3-year registration, robotic urologic surgery credentialing, radiation safety training for fluoroscopy procedures, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full urology credential calendar.',
  alternates: { canonical: '/for/urologists' },
  openGraph: {
    title: 'Momenties for Urologists',
    description: 'ABU MOC, CME tracking, and urology credential management.',
    url: '/for/urologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABU MOC and urology board requirements',
    desc: 'Urologists certified by the American Board of Urology (ABU) face continuous MOC requirements with CME specific to urology content. ABU MOC Part II requires Self-Assessment CME (SACME) in urology content areas including oncology, endourology, reconstructive urology, and voiding dysfunction. Subspecialty certificate holders (pediatric urology, female pelvic medicine) may have additional MOC requirements. ABU primary and subspecialty counters tracked independently.',
  },
  {
    icon: Clock,
    title: 'Urologist multi-credential renewal calendar',
    desc: '"ABU MOC — continuous, urology CME." "State medical license — biennial CE." "DEA registration — 3-year." "Robotic urologic surgery credentialing — institutional annual." "Fluoroscopy safety training — annual institutional." "Testosterone therapy prescribing CE — state-specific." "AUA membership — annual." All urology credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Robotic surgery credentialing and radiation safety analytics',
    desc: 'Urologists using robotic-assisted surgery (da Vinci) require institutional credentialing with Intuitive Surgical training components — typically annual case minimum review and peer assessment. Urologists performing fluoroscopy-guided procedures (ureteroscopy, nephrostomy tube placement) may require institutional annual radiation safety training. Each robotic platform tracked on institutional renewal schedule independent of ABU MOC.',
  },
  {
    icon: Users,
    title: 'AUA, SUO, and urology professional involvement',
    desc: '"AUA Annual Meeting — may." "SUO Annual Meeting — december." "SUNA Annual Meeting." "Endourological Society World Congress." "LUGPA Annual Meeting." "Robotic urology simulation courses." "Testosterone therapy CE updates." All urology professional development on calendar. AUA Annual Meeting CME tagged by ABU MOC SACME applicability in advance.',
  },
]

const URO_WORKFLOW = [
  { time: 'Annual planning', action: 'ABU MOC continuous CME pace (with SACME requirements), state medical license biennial CE cycle, DEA 3-year renewal, robotic urologic credentialing institutional renewal, annual fluoroscopy radiation safety training, AUA Annual Meeting, and AUA membership all loaded in January. ABU primary, subspecialty, and state CE paces tracked independently.' },
  { time: 'CME completion', action: '"AUA-approved — robotic-assisted radical prostatectomy: nerve sparing outcomes and continence recovery, 3 CME, ABU SACME applicable." Tagged by applicable board. ABU SACME counter updates toward annual SACME minimum. ABU total counter updates. If subspecialty certificate applies, subspecialty counter updates. State license CE updates if state accepts urology CME.' },
  { time: 'Robotic credentialing', action: '"Robotic urologic surgery credentialing renewal — institutional peer review, da Vinci, Q1." Robotic credentialing tracked on institutional renewal cycle independent of ABU MOC. Annual case minimum review, peer assessment, and new platform training components tracked per hospital credentialing policy. Multiple hospital credentialing dates tracked independently on calendar.' },
  { time: 'Radiation safety', action: '"Annual radiation safety training — fluoroscopy use in endourologic procedures, Q1." Annual radiation safety training placed as institutional requirement for urologists using fluoroscopy in endoscopy suite or operating room. Training documentation required for institutional credentialing. Fluoroscopy use without current annual training creates institutional compliance exposure.' },
  { time: 'Renewal audit', action: 'Analytics: ABU MOC CME on pace? SACME minimum met? State license CE complete? DEA valid? Robotic credentialing current? Annual radiation safety done? Testosterone CE current? AUA membership active? Complete urology credential audit 90 days before earliest renewal. ABU attestation and institutional credentialing maintained separately.' },
]

export default function ForUrologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Urologists"
        title={
          <>
            ABU MOC and robotic credentialing maintained.
            <br />
            <em className="not-italic text-gold">SACME requirements and DEA never lapsed.</em>
          </>
        }
        lede="Urologists manage ABU board MOC with continuous CME and Self-Assessment CME (SACME) requirements, institutional robotic urologic surgery credentialing on annual peer review cycles, annual fluoroscopy radiation safety training, DEA 3-year registration, state medical license biennial CE, and professional development simultaneously. Momenties tracks CME by board credential with SACME tracking, surfaces renewal deadlines 90 days early, and manages the full urology credential calendar in one view."
        crumbs={[{ label: 'For Urologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How urologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for urology credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Urology credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed across board, institutional, and SACME cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {URO_WORKFLOW.map((step, i) => (
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
                &ldquo;ABU MOC has a SACME component — Self-Assessment CME — that counts differently from regular CME toward the annual requirements. I was tracking total CME and not distinguishing SACME from other CME, so at the end of the year I had plenty of total hours but was short on the SACME-specific component. My hospital also has two different robotic credentialing dates because I have privileges at two facilities and they stagger their peer review cycles. Momenties tracks SACME separately from total CME and both hospital credentialing dates with independent alerts. That distinction alone is worth it.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">K</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Kevin M., MD, FACS</div>
                  <div className="text-xs text-muted-foreground">Urologist, robotic urologic surgery and oncology, dual-hospital practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All urology credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABU board MOC CME — continuous with SACME tracking',
                'ABU subspecialty certificates — independent MOC',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Robotic urologic surgery credentialing — institutional annual',
                'Annual fluoroscopy radiation safety training',
                'AUA membership renewal — annual',
                'AUA Annual Meeting CME planning by ABU SACME applicability',
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
        title="ABU MOC and robotic credentialing maintained."
        subtitle="CME tracking with SACME component, robotic credentialing calendar, and urology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
