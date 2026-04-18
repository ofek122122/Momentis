import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Perfusionists — CCP renewal, CE tracking, and perfusion credential management',
  description:
    'Perfusionists manage AmSECT CCP renewal with continuing education requirements, state perfusionist license CE, clinical case log documentation, annual hands-on skills verification, and professional development simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full perfusion credential calendar.',
  alternates: { canonical: '/for/perfusionists' },
  openGraph: {
    title: 'Momenties for Perfusionists',
    description: 'CCP renewal, CE tracking, and perfusion credential management.',
    url: '/for/perfusionists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CCP renewal',
    desc: 'AmSECT CCP (Certified Clinical Perfusionist) renewal requires continuing education with AmSECT-approved CE. CE must be in clinical perfusion content areas: cardiopulmonary bypass, ECMO, circulatory support, autotransfusion, coagulation management, and quality improvement. Tag every CE by perfusion content domain. Domain coverage tracked alongside total CE hours throughout the renewal cycle.',
  },
  {
    icon: Clock,
    title: 'Perfusionist multi-credential renewal calendar',
    desc: '"CCP — AmSECT, renewal cycle, annual." "State perfusionist license — varies by state." "ABCP board recertification — 5-year." "ECMO specialist certification — renewal, if certified." "BLS/ACLS — 2-year." "AmSECT membership — annual." All perfusion credentials with 90-day advance alerts. Surgical team credentialing never interrupted by expired perfusionist certification.',
  },
  {
    icon: BarChart3,
    title: 'Clinical case log and skills verification analytics',
    desc: 'Perfusionists must maintain minimum clinical case volumes and demonstrate ongoing clinical competency. Minimum case requirements tracked annually — not just at renewal time. ECMO case logs tracked separately from standard bypass cases. Skills verification sessions documented as calendar events. Analytics confirms case volume is on pace before the renewal audit.',
  },
  {
    icon: Users,
    title: 'AmSECT and ABCP professional involvement',
    desc: '"AmSECT Annual Conference — may." "AmSECT regional symposium — fall." "ABCP review course — every 5 years before board recertification." "ECMO specialist training update." "Quality and outcomes improvement workshop." All perfusion professional development on calendar. AmSECT Annual Conference CE planned by domain in advance for maximum renewal credit.',
  },
]

const PERF_WORKFLOW = [
  { time: 'Annual planning', action: 'CCP renewal cycle dates, state license renewal deadline, ABCP 5-year recertification window, BLS/ACLS recertification, AmSECT Annual Conference, and AmSECT membership renewal all loaded in January. CE pace and case volume pace calculated against annual requirements.' },
  { time: 'CE completion', action: '"AmSECT-approved webinar — ECMO management in adult cardiac failure, 2 CE hours, ECMO/circulatory support domain." Tagged by perfusion content domain. CCP CE counter updates. Domain coverage distribution updates. ABCP recertification CE also updates if applicable to 5-year board cycle.' },
  { time: 'Case volume', action: '"Monthly case log review — last friday, 15 minutes." Clinical case volume tallied monthly. Standard bypass, ECMO, and autotransfusion cases tracked in separate categories. Running annual case totals visible. Case volume shortfall identified with time to schedule additional cases or rotations — not discovered at renewal.' },
  { time: 'ABCP recertification', action: '"ABCP board recertification — 5-year, prepare 18 months before expiration." ABCP recertification requires passing a board exam. Preparation period placed on calendar 18 months before exam date. Review course registration deadline tracked. Board exam preparation blocks placed when study period begins.' },
  { time: 'Renewal audit', action: 'Analytics: CCP CE hours on pace? Perfusion content domain coverage adequate? Clinical case volume current? ECMO cases logged? ABCP recertification status? BLS/ACLS valid? State license CE complete? AmSECT membership active? Complete perfusion credential audit 90 days before CCP renewal window.' },
]

export default function ForPerfusionistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Perfusionists"
        title={
          <>
            CCP maintained. Case volume current.
            <br />
            <em className="not-italic text-gold">Credentials never lapsed.</em>
          </>
        }
        lede="Perfusionists manage CCP renewal with CE in perfusion content domains, ABCP 5-year board recertification, clinical case volume documentation, state license CE, and professional development simultaneously. Momenties tracks CE by domain and case volume pace, surfaces renewal deadlines 90 days early, and manages the full perfusion credential calendar in one view."
        crumbs={[{ label: 'For Perfusionists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How perfusionists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for CCP credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Perfusion credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and case volume managed through every renewal cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {PERF_WORKFLOW.map((step, i) => (
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
                &ldquo;Perfusion has both CE requirements and case volume requirements. I was tracking them in separate places — CE in a spreadsheet, case logs in a departmental system, ABCP board prep in my head. The first time I used Momenties I put my ABCP recertification date in and worked backwards — I needed to register for the review course within 6 weeks. I had no idea. The calendar visibility on multi-year credential cycles is what makes it worth it.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">G</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Greg H., CCP</div>
                  <div className="text-xs text-muted-foreground">Perfusionist, cardiovascular surgery program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All perfusion credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CCP CE by domain — AmSECT renewal cycle',
                'ABCP board recertification — 5-year',
                'Clinical case volume — annual minimum',
                'ECMO case log — separate tracking',
                'BLS/ACLS certification — 2-year',
                'State perfusionist license CE',
                'AmSECT membership renewal — annual',
                'AmSECT and ABCP conference CE planning',
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
        title="CCP maintained. Case volume current."
        subtitle="CE tracking by domain, case volume monitoring, and perfusion credential renewal calendar. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
