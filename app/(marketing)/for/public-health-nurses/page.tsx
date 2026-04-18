import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Public Health Nurses — PHN renewal, CE tracking, and public health nursing credential management',
  description:
    'Public health nurses manage state RN license renewal (30 CE per 2 years), CPH (Certified in Public Health) renewal with 50 CE per 2 years, APHA leadership certifications, infection control credentials, and professional development simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full public health nursing credential calendar.',
  alternates: { canonical: '/for/public-health-nurses' },
  openGraph: {
    title: 'Momenties for Public Health Nurses',
    description: 'PHN renewal, CE tracking, and public health nursing credential management.',
    url: '/for/public-health-nurses',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for RN and CPH credential renewal',
    desc: 'State RN license renewal requires 30 CE per 2 years (varies by state) with nursing-approved CE. NBPHE CPH (Certified in Public Health) renewal requires 50 CE per 2 years with public health content CE. ANCC PHN-BC specialty renewal requires CE in community and public health nursing. Tag every CE by applicable credential. RN, CPH, and PHN-BC counters tracked independently.',
  },
  {
    icon: Clock,
    title: 'Public health nurse multi-credential renewal calendar',
    desc: '"State RN license — biennial, may." "CPH — NBPHE, 2-year renewal, october." "PHN-BC — ANCC, 5-year renewal." "CIC infection control — 5-year, if certified." "COHN occupational health — renewal, if applicable." "APHA membership — annual." All public health nursing credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Multi-credential CE analytics',
    desc: 'Public health nurses holding RN, CPH, and PHN-BC credentials face three independent CE requirements. Some CE qualifies for both RN and CPH renewal; some is credential-specific. PHN-BC specialty CE from ANCC may or may not satisfy state RN CE requirements. Analytics tracks each credential\'s CE progress independently. No CE miscounted across credentials with different renewal cycles.',
  },
  {
    icon: Users,
    title: 'APHA, ANA, and public health professional involvement',
    desc: '"APHA Annual Meeting — november." "State public health nursing conference — fall." "CDC Public Health Grand Rounds — monthly." "Epidemiology continuing education — annual." "Immunization program training — annual." All public health nursing professional development on calendar. APHA Annual Meeting CE tagged by applicable credential in advance for maximum renewal coverage.',
  },
]

const PHN_WORKFLOW = [
  { time: 'Annual planning', action: 'State RN license biennial renewal, CPH 2-year renewal date, PHN-BC 5-year renewal window, APHA Annual Meeting, and APHA membership renewal all loaded in January. CE pace per credential: 15 RN CE per year, 25 CPH CE per year satisfies both 2-year cycles independently.' },
  { time: 'CE completion', action: '"NBPHE-approved CE — health equity and social determinants of health program design, 3 CE hours, CPH." Tagged by credential. CPH counter updates. If also RN-CE approved, RN counter updates. PHN-BC counter updates if ANCC-approved community health content. Each credential tracked independently.' },
  { time: 'Infection control', action: '"CIC recertification — 5-year, october." Infection control certification tracked on its own 5-year cycle independent of RN and CPH 2-year cycles. CIC renewal CE and exam requirements tracked separately. Public health emergencies and outbreak response CE tagged for CIC CE relevance when applicable.' },
  { time: 'Public health programming', action: '"Immunization registry training — annual, september." "Epidemiology methods update — annual." "Emergency preparedness exercise — annual." Program-specific training documented for professional development record. CE-eligible training tagged for applicable credentials. Non-CE training documented separately for competency records.' },
  { time: 'Renewal audit', action: 'Analytics: RN CE hours on pace? CPH CE hours current? PHN-BC CE satisfied for 5-year cycle? CIC CE complete (if applicable)? APHA membership active? Complete public health nursing credential audit 90 days before earliest renewal. Separate documentation prepared for state nursing board, NBPHE, and ANCC submissions.' },
]

export default function ForPublicHealthNursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Public Health Nurses"
        title={
          <>
            RN and CPH maintained.
            <br />
            <em className="not-italic text-gold">Community practice never lapsed.</em>
          </>
        }
        lede="Public health nurses manage state RN license CE, NBPHE CPH renewal with 50 CE per 2 years, ANCC PHN-BC specialty CE on a 5-year cycle, infection control certification, and professional development simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full public health nursing credential calendar in one view."
        crumbs={[{ label: 'For Public Health Nurses' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How public health nurses use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for PHN credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Public health nursing credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every renewal cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {PHN_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold RN, CPH, and PHN-BC — three credentials on three different renewal cycles. The CPH renews every 2 years and requires public health-specific CE. My state RN license also renews every 2 years but not on the same schedule as CPH. The PHN-BC is a 5-year ANCC cycle. I need 30 RN CE, 50 CPH CE, and PHN-BC CE from different approved providers. Momenties is the only way I could manage this without a spreadsheet and three separate reminder systems.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">Y</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Yolanda B., RN, CPH, PHN-BC</div>
                  <div className="text-xs text-muted-foreground">Public health nurse, county health department</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All public health nursing credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'State RN license CE — biennial renewal',
                'CPH CE — NBPHE 2-year renewal',
                'PHN-BC specialty CE — ANCC 5-year renewal',
                'CIC infection control certification — 5-year',
                'COHN occupational health renewal (if applicable)',
                'Immunization program training — annual',
                'Emergency preparedness CE documentation',
                'APHA Annual Meeting CE planning',
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
        title="RN and CPH maintained."
        subtitle="CE tracking by credential, multi-cycle renewal calendar, and public health nursing professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
