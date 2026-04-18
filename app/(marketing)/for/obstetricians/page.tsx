import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for OB/GYNs — ABOG MOC, CME tracking, and obstetrics credential management',
  description:
    'Obstetricians and gynecologists manage ABOG Maintenance of Certification with cognitive expertise assessment and performance in practice requirements, state medical license renewals, DEA registration, NRP recertification, and obstetric privileges simultaneously. Momenties tracks CME by ABOG category, surfaces renewal deadlines 90 days early, and manages the full OB/GYN credential calendar.',
  alternates: { canonical: '/for/obstetricians' },
  openGraph: {
    title: 'Momenties for OB/GYNs',
    description: 'ABOG MOC, CME tracking, and obstetrics credential management.',
    url: '/for/obstetricians',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABOG MOC requirements',
    desc: 'ABOG MOC includes annual CME requirements with specific content in obstetrics, gynecology, and patient safety. The Cognitive Expertise (CE) assessment and Performance in Practice (PiP) modules are distinct MOC components tracked separately from CME hours. Tag every CME by ABOG category. CE assessment scheduling and PiP completion tracked alongside CME hour requirements.',
  },
  {
    icon: Clock,
    title: 'OB/GYN multi-credential renewal calendar',
    desc: '"ABOG MOC — annual requirements." "State medical license — october." "DEA registration — 3-year, july." "NRP recertification — 2-year, april." "Obstetric hemorrhage training — annual." "BLS — 2-year." "Surgical privileges — hospital annual." All OB/GYN credentials with 90-day advance alerts. Labor and delivery privileges never interrupted.',
  },
  {
    icon: BarChart3,
    title: 'ABOG Cognitive Expertise assessment planning',
    desc: 'ABOG CE assessments are scheduled through the ABOG portal and must be completed within designated windows. CE assessment blocks placed on calendar with preparation time: "ABOG CE assessment prep — 2-week block" followed by "ABOG CE assessment — scheduled date." Assessment completion timeline managed within ABOG\'s rolling window requirements.',
  },
  {
    icon: Users,
    title: 'ACOG and subspecialty society involvement',
    desc: '"ACOG Annual Clinical and Scientific Meeting — may." "SGO annual meeting — gynecologic oncology, march." "SMFM annual meeting — maternal-fetal medicine, february." "Regional perinatal conference." Major OB/GYN conferences on calendar with CME sessions tagged to ABOG categories immediately after each conference day.',
  },
]

const OBGYN_WORKFLOW = [
  { time: 'Annual planning', action: 'ABOG MOC annual CME requirement, CE assessment window, PiP module deadline, state medical license renewal, DEA expiration, NRP recertification, and ACOG Annual Meeting all loaded in January. 90-day alerts on every credential. CME plan structured to satisfy ABOG requirements from conference attendance and online modules.' },
  { time: 'CME completion', action: '"ACOG Annual Meeting — 22 CME hours, obstetrics and gynecology content." Tagged by ABOG category: obstetrics content, gynecology content, patient safety. Annual ABOG CME requirement updated. NRP renewal prep session placed on calendar 3 months before recertification date.' },
  { time: 'ABOG assessment', action: '"ABOG Cognitive Expertise assessment — window opens march 1." Prep block: "ABOG CE study — february 1-28." Assessment scheduled within the open window. Completion logged immediately. ABOG MOC portfolio updated. Annual assessment requirement confirmed complete.' },
  { time: 'NRP recertification', action: '"NRP recertification — 2-year, april 15." Neonatal resuscitation certification required at all facilities where OB/GYNs practice. 90-day alert fires in January. Course registered immediately. NRP expiration date updated after completion. L&D privileges dependent on current NRP maintained without gap.' },
  { time: 'MOC audit', action: 'Analytics: ABOG annual CME on track? CE assessment completed within window? PiP module done? State license CE complete? DEA current? NRP valid? Surgical privileges documentation ready? Complete OB/GYN credential audit before any renewal deadline.' },
]

export default function ForObstetriciansPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for OB/GYNs"
        title={
          <>
            ABOG MOC current.
            <br />
            <em className="not-italic text-gold">L&D privileges maintained.</em>
          </>
        }
        lede="Obstetricians and gynecologists manage ABOG Maintenance of Certification with CME requirements, Cognitive Expertise assessments, and Performance in Practice modules, state license renewals, DEA registration, NRP recertification, and obstetric privileges simultaneously. Momenties tracks CME by ABOG category, surfaces renewal deadlines 90 days early, and manages the full OB/GYN credential calendar in one view."
        crumbs={[{ label: 'For OB/GYNs' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How OB/GYNs use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for OB/GYN CME and credential management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">OB/GYN credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every annual cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {OBGYN_WORKFLOW.map((step, i) => (
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
                &ldquo;The ABOG CE assessment has a narrow completion window and I missed it by two days one year — I just wasn&apos;t tracking it actively. It caused delays in my MOC portfolio that took months to resolve with ABOG. Momenties changed how I manage this: the assessment window opens on my calendar 6 months before, with a prep block the month before, and the completion deadline at the end of the window. I&apos;ve completed it early every year since.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">E</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Elena M., MD, FACOG</div>
                  <div className="text-xs text-muted-foreground">OB/GYN, private practice and hospital attending</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All OB/GYN credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABOG MOC annual CME — by category',
                'ABOG Cognitive Expertise assessment window',
                'ABOG Performance in Practice module',
                'State medical license renewal deadline',
                'DEA registration — 3-year renewal',
                'NRP recertification — 2-year',
                'BLS recertification — 2-year',
                'Obstetric and surgical privileges renewal',
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
        title="ABOG MOC current. L&D privileges maintained."
        subtitle="CME tracking by ABOG category, assessment window management, and OB/GYN credential calendar. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
