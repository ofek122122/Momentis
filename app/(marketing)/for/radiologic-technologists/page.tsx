import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Radiologic Technologists — ARRT CE tracking, RT credential renewals, and imaging certifications',
  description:
    'Radiologic technologists manage 24 CE credits per 2-year ARRT renewal cycle with mandatory medical imaging CE, state radiologic technology license renewals, ARRT specialty certifications in CT, MRI, mammography, or fluoroscopy, and radiation safety training simultaneously. Momenties tracks CE by ARRT category, surfaces renewal deadlines 90 days early, and manages the full RT credential calendar.',
  alternates: { canonical: '/for/radiologic-technologists' },
  openGraph: {
    title: 'Momenties for Radiologic Technologists',
    description: 'ARRT CE tracking, RT credential renewals, and imaging specialty certification management.',
    url: '/for/radiologic-technologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for ARRT biennial renewal',
    desc: 'ARRT requires 24 CE credits per 2-year renewal with specific medical imaging content requirements. All CE must be from ASRT-approved providers or meet ARRT CE criteria. Tag every CE activity by ARRT content category: patient care, safety, image production, radiologic science. Running total with content category breakdown visible throughout the biennial cycle.',
  },
  {
    icon: Clock,
    title: 'RT multi-credential renewal calendar',
    desc: '"ARRT radiography — biennial, october." "State RT license — renewal, varies." "CT specialty certification — ARRT, biennial." "Mammography certification — MQSA annual." "Fluoroscopy permit — state, annual or biennial." "CPR — 2-year." All radiologic credentials with 90-day advance alerts. No MQSA-required mammography certification lapse at any facility.',
  },
  {
    icon: BarChart3,
    title: 'Specialty certification CE analytics',
    desc: 'Radiologic technologists often hold ARRT primary certification alongside specialty certifications in CT, MRI, mammography, or sonography. Some specialty CE can apply to multiple ARRT credentials; other CE is specialty-specific. Analytics shows each credential\'s CE progress independently. Dual-certification RTs manage both renewal requirements without confusion.',
  },
  {
    icon: Users,
    title: 'ASRT and modality society involvement',
    desc: '"ASRT Annual Symposium — june." "RSNA Annual Meeting — november." "Mammography symposium — annual." "State RT society meeting." All radiologic technology professional development on calendar. RSNA Annual Meeting CE planned in advance for ARRT renewal credit across primary and specialty certifications.',
  },
]

const RT_WORKFLOW = [
  { time: 'Annual planning', action: 'ARRT biennial renewal date, state RT license deadline, MQSA mammography certification renewal, CT specialty cert expiration, fluoroscopy permit renewal, and CPR recertification all loaded in January. 90-day alerts on every credential. CE pace calculated: 12 ARRT credits per year satisfies the 2-year cycle.' },
  { time: 'CE completion', action: '"ASRT-approved online module — radiation protection updates, tuesday 7pm, 1.5 CE credits, safety." Tagged by ARRT content category. Primary certification CE counter and CT specialty CE counter both updated where applicable. No ARRT category gap at biennial renewal audit.' },
  { time: 'MQSA mammography', action: '"Mammography certification renewal — MQSA annual, september 15." MQSA requires separate annual mammography continuing education in addition to ARRT biennial CE. Mammography CE hours tracked separately. MQSA annual renewal and ARRT biennial renewal managed on independent timelines without confusion.' },
  { time: 'Specialty certs', action: '"CT specialty certification renewal — ARRT, biennial, march." CT-specific CE tagged separately. Fluoroscopy permit renewal documentation prepared. Each specialty certification maintains its own CE requirement independent of primary ARRT radiography renewal.' },
  { time: 'Renewal audit', action: 'Analytics: ARRT CE credits by content category. 24-credit biennial requirement met? State RT license CE complete? MQSA mammography CE current? CT specialty CE on track? Fluoroscopy permit valid? CPR current? Complete RT credential audit before any renewal window opens.' },
]

export default function ForRadiologicTechnologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Radiologic Technologists"
        title={
          <>
            ARRT certified. Specialty certs current.
            <br />
            <em className="not-italic text-gold">CE never scrambled.</em>
          </>
        }
        lede="Radiologic technologists manage 24 CE credits per 2-year ARRT renewal cycle with content category requirements, state RT license renewals, MQSA mammography annual certification, CT and MRI specialty certifications, and radiation safety training simultaneously. Momenties tracks CE by ARRT content category, surfaces renewal deadlines 90 days early, and manages the full RT credential calendar in one view."
        crumbs={[{ label: 'For Radiologic Technologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How radiologic technologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for RT credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">RT credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every biennial cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {RT_WORKFLOW.map((step, i) => (
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
                &ldquo;I do radiography and mammography. The ARRT biennial renewal and MQSA mammography annual renewal run on completely different calendars and MQSA has zero tolerance for lapses. I was managing MQSA in one place and ARRT in another. Momenties put both on the same calendar with separate 90-day alerts. I can see both certification statuses in one view and I&apos;ve never had a MQSA compliance issue since.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">B</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Brittany H., RT(R)(M)</div>
                  <div className="text-xs text-muted-foreground">Radiologic technologist, outpatient imaging center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All RT credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CE by ARRT category — biennial renewal',
                'State radiologic technology license',
                'MQSA mammography certification — annual',
                'CT specialty certification — ARRT biennial',
                'MRI specialty certification renewal',
                'Fluoroscopy permit — state renewal',
                'CPR/BLS recertification — 2-year',
                'RSNA and ASRT annual conference CE',
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
        title="ARRT certified. Specialty certs current."
        subtitle="CE tracking by ARRT category, MQSA and specialty renewal calendar, and RT professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
