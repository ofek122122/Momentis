import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for CT Technologists — ARRT CT specialty CE, ASRT renewal, and computed tomography credential management',
  description:
    'CT Technologists manage ARRT R(CT) or CT specialty certification renewal with 24 CE per 2 years, ASRT state license CE, radiation protection CE requirements, contrast media and patient safety CE, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full CT technologist credential calendar.',
  alternates: { canonical: '/for/radiologic-technologists-ct' },
  openGraph: {
    title: 'Momenties for CT Technologists',
    description: 'ARRT CT specialty CE, ASRT renewal, and computed tomography credential management.',
    url: '/for/radiologic-technologists-ct',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for ARRT CT specialty and state license renewal',
    desc: 'ARRT CT specialty certification requires 24 CE per 2-year cycle in computed tomography content areas. State radiologic technology license CE requirements may run on independent biennial cycles. CT CE must be in applicable content areas; general CE may not satisfy CT specialty requirements. Ethics CE required separately by ARRT. Tag every CE by credential. ARRT CT and state license counters tracked independently.',
  },
  {
    icon: Clock,
    title: 'CT tech multi-credential renewal calendar',
    desc: '"ARRT CT specialty certification — 2-year, 24 CE." "ARRT R(T) primary certification — 2-year, 24 CE if held." "State radiologic technology license — biennial, varies." "Fluoroscopy permit renewal — state specific." "ASRT membership — annual." "Radiation safety CE — institutional, annual." "Contrast media CE — periodic." All CT credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Radiation safety and contrast CE analytics',
    desc: 'CT technologists face annual radiation safety and protection education requirements from institutional and regulatory sources independent of ARRT renewal CE. Contrast media administration and adverse reaction management CE tracked separately as a patient safety requirement. Radiation safety CE logged as a mandatory annual compliance category, not optional CE. Each category confirmed independently from ARRT totals.',
  },
  {
    icon: Users,
    title: 'ASRT, AHRA, and CT professional involvement',
    desc: '"ASRT Annual Conference — spring." "AHRA Annual Meeting — summer." "ACR Annual Meeting — fall." "State radiologic technology society conference." "CT dose optimization and image quality workshop." "AI in CT interpretation education." All CT professional development on calendar. Conference CE tagged by ARRT applicability in advance for maximum renewal credit.',
  },
]

const CT_WORKFLOW = [
  { time: 'Annual planning', action: 'ARRT CT specialty certification 2-year CE pace (12 per year), primary certification CE cycle (if applicable), state license biennial CE cycle, annual radiation safety CE, contrast administration CE, and ASRT Annual Conference all loaded in January. CE pace: 12 CE per year toward ARRT CT 2-year cycle.' },
  { time: 'CE completion', action: '"ARRT-approved — CT dose optimization: iterative reconstruction and patient size considerations, 2 CE, CT specialty." Tagged by applicable certification. ARRT CT counter updates. If primary certification (R(T)) also accepts the content, primary counter also updates. State license counter updates if state accepts CE. Ethics CE tracked as separate required category.' },
  { time: 'Radiation safety', action: '"Annual radiation safety training — institutional, 1 CE, radiation protection." Radiation safety CE logged as mandatory annual compliance requirement, separate from ARRT biennial CE. Institutional radiation safety program requires annual documentation. Annual training placed as a January recurring event on the calendar every year without exception.' },
  { time: 'Contrast CE', action: '"Contrast media administration and adverse reactions — 1.5 CE, patient safety." Contrast CE tracked as a patient safety category requirement. CT techs who administer IV contrast must maintain competency documentation per ACR and institutional policy. Contrast CE logged independently from ARRT general CE. Annual or biennial contrast competency review placed on calendar.' },
  { time: 'Renewal audit', action: 'Analytics: ARRT CT specialty CE on pace for 2-year cycle? Primary certification CE complete? Ethics CE satisfied? State license CE complete? Annual radiation safety documented? Contrast CE current? Fluoroscopy permit valid? ASRT membership active? Complete CT credential audit 90 days before earliest ARRT certification renewal.' },
]

export default function ForRadiologicTechnologistsCTPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for CT Technologists"
        title={
          <>
            ARRT CT certification maintained.
            <br />
            <em className="not-italic text-gold">Radiation safety and contrast CE never missed.</em>
          </>
        }
        lede="CT Technologists manage ARRT CT specialty certification with 24 CE per 2-year cycle, state radiologic technology license CE on an independent biennial cycle, mandatory annual radiation safety education, contrast media competency requirements, and professional development simultaneously. Momenties tracks CE by CT credential, surfaces renewal deadlines 90 days early, and manages the full CT technologist credential calendar in one view."
        crumbs={[{ label: 'For CT Technologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How CT technologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for CT credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">CT credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every 2-year ARRT cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {CT_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold ARRT CT specialty certification, ARRT R(T) primary, and a state license — all on 2-year cycles, but they don&apos;t align because I got them at different times. Then there&apos;s annual radiation safety training from the hospital that has nothing to do with ARRT. The ethics CE required by ARRT is a separate counter from my general CE total. Before Momenties I was tracking all of this with a combination of email reminders and a calendar I had to maintain manually. Now everything is in one place and the ethics counter is separate from the CE counter.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Jason R., R(T)(CT)</div>
                  <div className="text-xs text-muted-foreground">CT technologist, academic radiology department</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All CT technologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ARRT CT specialty certification CE — 2-year, 24 CE',
                'ARRT R(T) primary certification CE — 2-year',
                'ARRT ethics CE — required category',
                'State radiologic technology license — biennial',
                'Annual radiation safety CE — institutional',
                'Contrast media competency CE',
                'Fluoroscopy permit renewal (where applicable)',
                'ASRT membership and conference CE planning',
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
        title="ARRT CT certification maintained."
        subtitle="CE tracking by credential, ethics and radiation safety counters, and CT professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
