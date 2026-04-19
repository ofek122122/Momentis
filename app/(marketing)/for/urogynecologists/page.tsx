import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Urogynecologists — ABOG MOC CME renewal, urogynecology credential management',
  description:
    'Urogynecologists manage ABOG general obstetrics and gynecology primary MOC with urogynecology subspecialty content, ABOG female pelvic medicine and reconstructive surgery subspecialty certification on a 6-year examination cycle, FPMRS-specific procedural credentialing CE, annual pelvic floor ultrasound documentation, state medical license biennial CME, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full urogynecologist credential calendar.',
  alternates: { canonical: '/for/urogynecologists' },
  openGraph: {
    title: 'Momenties for Urogynecologists',
    description: 'ABOG MOC CME renewal, urogynecology credential management.',
    url: '/for/urogynecologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABOG OB/GYN MOC and FPMRS subspecialty independently',
    desc: 'Urogynecologists hold ABOG general obstetrics and gynecology primary certification under continuous MOC and ABOG female pelvic medicine and reconstructive surgery (FPMRS) subspecialty certification on a 6-year examination cycle — two ABOG credentials with different content requirements. ABOG FPMRS subspecialty requires subspecialty-specific content including stress urinary incontinence treatment (midurethral slings, Burch procedure), pelvic organ prolapse repair (anterior/posterior colporrhaphy, apical suspension procedures), overactive bladder management, anorectal disorders, and reconstructive pelvic surgery outcomes. ABOG primary MOC requires broader OB/GYN content.',
  },
  {
    icon: Clock,
    title: 'Urogynecologist multi-credential renewal calendar',
    desc: '"ABOG OB/GYN MOC — continuous CME." "ABOG FPMRS subspecialty — 6-year examination cycle, FPMRS content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual pelvic floor ultrasound accreditation documentation (if IUGA-accredited)." "Annual sacral neuromodulation and PTNS procedural competency (if applicable)." "AUGS membership — annual." "IUGA membership — annual." All urogynecologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'ABOG 6-year FPMRS examination countdown and pelvic floor procedure CE analytics',
    desc: 'ABOG FPMRS subspecialty examination every 6 years — the cycle disappears from active planning between years 2 and 4 and resurfaces as an urgent deadline. Preparation requires 12-18 months across urogynecology content domains. Pelvic floor ultrasound CE: IUGA pelvic floor ultrasound accreditation requires documented CE in pelvic floor ultrasound technique and interpretation — a separate accreditation from ABOG MOC that affects hospital imaging privileges. Sacral neuromodulation device-specific CE: Medtronic Interstim certification for physicians implanting InterStim sacral neuromodulation systems requires device-specific procedural training renewal, separate from ABOG board credentials.',
  },
  {
    icon: Users,
    title: 'AUGS, IUGA, and urogynecology professional involvement',
    desc: '"AUGS PFD Week — october." "IUGA Annual Meeting." "IUSTI Annual Meeting." "SGS Scientific Meeting (Society of Gynecologic Surgeons)." "Stress urinary incontinence CE — midurethral sling outcomes in obese patients, pubovaginal sling versus retropubic sling." "Pelvic organ prolapse CE — PROPEL trial mesh versus native tissue repair outcomes, apical fixation technique comparison." "Overactive bladder CE — vibegron and mirabegron efficacy comparison, onabotulinumtoxinA dosing and retreatment intervals." "Fistula repair CE — vesicovaginal fistula surgical approach, radiation-induced fistula management." All urogynecology professional development on calendar. AUGS and SGS conference CME tagged by ABOG primary and FPMRS subspecialty applicability.',
  },
]

const UROGYN_WORKFLOW = [
  { time: 'Annual planning', action: 'ABOG OB/GYN MOC CME pace (FPMRS content weighted), ABOG FPMRS subspecialty CE pace with 6-year examination countdown, state medical license biennial CME, DEA 3-year renewal, annual pelvic floor ultrasound CE, device-specific procedural CE renewals, AUGS PFD Week, SGS Scientific Meeting, and AUGS and IUGA memberships all loaded in January. ABOG primary counter, FPMRS subspecialty counter, and state licensure CME tracked independently. 6-year examination countdown displayed with 18-month alert.' },
  { time: 'CE completion', action: '"AUGS-approved — apical suspension for pelvic organ prolapse: sacrocolpopexy versus sacrospinous ligament fixation — 7-year OPTIMAL trial follow-up, reoperation rates by compartment, mesh complications in sacrocolpopexy versus anatomic outcomes in native tissue repair, 2 CME, AMA PRA Category 1, ABOG MOC applicable, ABOG FPMRS applicable — pelvic organ prolapse domain." ABOG primary counter updates. FPMRS subspecialty counter updates. State licensure CME updates.' },
  { time: 'Device CE', action: '"Medtronic InterStim sacral neuromodulation device training renewal — InterStim Micro implant technique update: tined lead placement with fluoroscopic guidance, subcutaneous pocket placement for MicroSure MRI-conditional device, post-implant programming protocol for treatment-refractory OAB and fecal incontinence, Q1." Annual device CE placed for urogynecologists with active InterStim implanting privileges. Medtronic sacral neuromodulation certification renewal is required for physicians maintaining implanting privileges — renewal cadence varies by program but annual CE is standard practice for active implanters.' },
  { time: 'Ultrasound CE', action: '"Annual pelvic floor ultrasound CE — IUGA pelvic floor ultrasound accreditation standard: 4D ultrasound of the levator ani in prolapse grading, hiatal area measurement and reproducibility, and bladder neck mobility assessment in stress urinary incontinence, 2 CME, ABOG FPMRS applicable — diagnostics domain, Q2." Annual pelvic floor ultrasound CE placed for urogynecologists directing IUGA-accredited pelvic floor ultrasound programs. IUGA accreditation requires annual CE documentation from the supervising physician to maintain active accreditation status.' },
  { time: 'Renewal audit', action: 'Analytics: ABOG OB/GYN MOC CME on pace? ABOG FPMRS subspecialty content satisfied? State medical license CME complete? DEA valid? Device-specific procedural CE current? Annual pelvic floor ultrasound CE documented? ABOG 6-year examination date tracked? AUGS membership active? Complete urogynecologist credential audit 90 days before earliest renewal.' },
]

export default function ForUrogynecologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Urogynecologists"
        title={
          <>
            ABOG OB/GYN MOC and FPMRS subspecialty maintained.
            <br />
            <em className="not-italic text-gold">6-year examination tracked. Device and ultrasound CE documented.</em>
          </>
        }
        lede="Urogynecologists manage ABOG general OB/GYN continuous MOC with FPMRS subspecialty content, ABOG female pelvic medicine and reconstructive surgery subspecialty certification on a 6-year examination cycle, state medical license biennial CME, DEA 3-year registration, device-specific procedural CE for sacral neuromodulation implanting privileges, annual pelvic floor ultrasound accreditation CE, and professional development at AUGS and IUGA simultaneously. Momenties tracks CME by urogynecologist credential, surfaces renewal deadlines 90 days early, and manages the full credential calendar."
        crumbs={[{ label: 'For Urogynecologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How urogynecologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for urogynecologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Urogynecologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABOG OB/GYN MOC, FPMRS 6-year examination cycle, and annual device and ultrasound accreditation CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {UROGYN_WORKFLOW.map((step, i) => (
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
                &ldquo;ABOG tracks my OB/GYN primary MOC and my FPMRS subspecialty on a 6-year written examination cycle. The FPMRS examination is the one where the cycle is long enough that year 1 after certification feels nothing like year 5 — I know urogynecologists who have let the preparation window slip by 18 months and ended up studying under emergency conditions. My hospital requires current InterStim implanting certification for sacral neuromodulation privileges — that&apos;s a Medtronic device certification that has nothing to do with ABOG. I run an IUGA-accredited pelvic floor ultrasound program which has its own annual CE documentation requirement. State license biennial. DEA 3-year. The device CE is the one that surprises people — you assume surgical privileges are covered by the board credentials, but device companies have their own certification requirements for implanting physicians.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">S</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Susan W., MD</div>
                  <div className="text-xs text-muted-foreground">Urogynecologist and pelvic floor program director, academic female pelvic medicine center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All urogynecologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABOG OB/GYN MOC CME — continuous, FPMRS content weighted',
                'ABOG FPMRS subspecialty — 6-year examination cycle countdown with 18-month alert',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Device-specific procedural CE — InterStim sacral neuromodulation certification',
                'Annual pelvic floor ultrasound CE — IUGA accreditation requirement',
                'AUGS membership renewal — annual',
                'AUGS and SGS conference CME planning by ABOG primary and FPMRS applicability',
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
        title="ABOG OB/GYN MOC and FPMRS subspecialty maintained."
        subtitle="CME tracking for dual ABOG certification, 6-year FPMRS examination countdown, device-specific procedural CE, IUGA ultrasound accreditation, and urogynecology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
