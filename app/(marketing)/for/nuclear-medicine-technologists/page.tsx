import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Nuclear Medicine Technologists — ARRT/NMTCB CE renewal, radiation safety compliance, and credential management',
  description:
    'Nuclear medicine technologists manage ARRT N(T) or NMTCB CNMT certification renewal (24 CE/2yr), state radiologic technology license CE, radiation safety and protection compliance training, NRC regulatory requirements, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full nuclear medicine technologist credential calendar.',
  alternates: { canonical: '/for/nuclear-medicine-technologists' },
  openGraph: {
    title: 'Momenties for Nuclear Medicine Technologists',
    description: 'ARRT/NMTCB CE renewal, radiation safety compliance, and credential management.',
    url: '/for/nuclear-medicine-technologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for ARRT N(T) and NMTCB CNMT certification',
    desc: 'ARRT N(T) nuclear medicine certification requires 24 CE per 2-year cycle in nuclear medicine content areas. NMTCB Certified Nuclear Medicine Technologist (CNMT) certification requires CE for renewal on an independent cycle. Some CE qualifies for both certifications; nuclear medicine-specific content confirmed by each body independently. Ethics CE required by ARRT as a separate category. Each certification counter tracked independently.',
  },
  {
    icon: Clock,
    title: 'Nuclear medicine tech multi-credential renewal calendar',
    desc: '"ARRT N(T) certification — 2-year, 24 CE." "NMTCB CNMT — renewal cycle CE, if applicable." "State radiologic technology license — biennial." "NRC radiation worker training — annual." "Radiation dosimetry badge review — quarterly." "ASRT membership — annual." "Radiation safety officer update — periodic." All nuclear medicine credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'NRC radiation safety and regulatory compliance analytics',
    desc: 'Nuclear medicine technologists face NRC (or Agreement State equivalent) annual radiation worker training requirements that are regulatory compliance obligations independent of ARRT renewal CE. Radiation dosimetry is reviewed quarterly and anomalies require documentation. Regulatory compliance CE tracked as a separate annual category from ARRT CE — mandatory compliance confirmed before NRC inspection readiness review.',
  },
  {
    icon: Users,
    title: 'SNMMI, ASRT, and nuclear medicine professional involvement',
    desc: '"SNMMI Annual Meeting — june." "ASRT Annual Conference — spring." "SNM Annual Meeting — regional." "State radiologic technology society conference." "PET/CT and SPECT/CT advances education." "Radiopharmacy and radionuclide therapy CE." All nuclear medicine professional development on calendar. Conference CE tagged by ARRT and NMTCB applicability in advance.',
  },
]

const NMT_WORKFLOW = [
  { time: 'Annual planning', action: 'ARRT N(T) 2-year CE pace (12 per year), NMTCB CNMT renewal cycle (if applicable), state license biennial CE cycle, annual NRC radiation worker training, quarterly dosimetry reviews, SNMMI Annual Meeting, and ASRT membership all loaded in January. CE pace: 12 CE per year toward ARRT 2-year cycle.' },
  { time: 'CE completion', action: '"ARRT-approved — PET/CT image quality: attenuation correction and artifact identification, 2 CE, nuclear medicine." Tagged by applicable certification. ARRT N(T) counter updates. If NMTCB also accepts the CE, NMTCB counter updates. State license counter updates if state accepts CE. Ethics CE tracked as separate required category.' },
  { time: 'Radiation safety', action: '"Annual NRC radiation worker training — institutional, 2 CE, regulatory compliance." NRC-required annual radiation safety training logged as mandatory regulatory compliance, separate from ARRT biennial CE. NRC training documentation maintained for inspection readiness. Annual training placed as a January recurring event on the calendar.' },
  { time: 'Dosimetry review', action: '"Quarterly dosimetry review — radiation badge reading, Q1/Q2/Q3/Q4." Quarterly dosimetry badge reviews placed as four standing events in January. Exposure readings within acceptable limits documented. Anomalous readings trigger investigation documentation. Quarterly dosimetry review log maintained for NRC inspection and RSO records.' },
  { time: 'Renewal audit', action: 'Analytics: ARRT N(T) CE on pace for 2-year cycle? NMTCB CE adequate? Ethics CE satisfied? State license CE complete? Annual NRC training documented? Quarterly dosimetry reviews logged? ASRT membership active? Complete nuclear medicine credential audit 90 days before earliest certification renewal.' },
]

export default function ForNuclearMedicineTechnologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Nuclear Medicine Technologists"
        title={
          <>
            ARRT and NMTCB certifications maintained.
            <br />
            <em className="not-italic text-gold">NRC compliance and dosimetry never missed.</em>
          </>
        }
        lede="Nuclear medicine technologists manage ARRT N(T) and NMTCB CNMT certification CE on independent renewal cycles, mandatory annual NRC radiation worker training, quarterly dosimetry badge reviews, state radiologic technology license CE, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full nuclear medicine technologist credential calendar in one view."
        crumbs={[{ label: 'For Nuclear Medicine Technologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How nuclear medicine technologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for nuclear medicine credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Nuclear medicine credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and regulatory requirements managed through every ARRT cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {NMT_WORKFLOW.map((step, i) => (
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
                &ldquo;Nuclear medicine technologists have more compliance tracking than most allied health professionals. I maintain ARRT N(T), NMTCB CNMT, a state license, annual NRC radiation worker training, and quarterly dosimetry badge reviews — and the NRC requirements are entirely separate from my ARRT renewal CE. The quarterly dosimetry reviews are the ones that most people track informally. Momenties put four quarterly review events on my calendar in January and I can show the RSO a documented review log at any time — not just when an inspection is announced.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">E</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Elaine S., N(T)(ARRT), CNMT</div>
                  <div className="text-xs text-muted-foreground">Nuclear medicine technologist, academic PET/CT imaging center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All nuclear medicine credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ARRT N(T) certification CE — 2-year, 24 CE',
                'NMTCB CNMT certification CE — renewal cycle',
                'ARRT ethics CE — required category',
                'State radiologic technology license — biennial',
                'Annual NRC radiation worker training',
                'Quarterly dosimetry badge review — Q1/Q2/Q3/Q4',
                'SNMMI and ASRT conference CE planning',
                'Radiation safety officer update training',
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
        title="ARRT and NMTCB certifications maintained."
        subtitle="CE tracking by certification, NRC compliance calendar, dosimetry review tracking, and nuclear medicine professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
