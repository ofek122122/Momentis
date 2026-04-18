import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Marriage and Family Therapists — LMFT renewal, CE tracking, and MFT credential management',
  description:
    'Marriage and family therapists manage state LMFT license renewal (typically 24–36 CE per 2 years with mandatory ethics hours), AAMFT clinical fellow advancement, trauma specialty certifications, supervision hour documentation, and professional development simultaneously. Momenties tracks CE by license and mandatory category, surfaces renewal deadlines 90 days early, and manages the full MFT credential calendar.',
  alternates: { canonical: '/for/marriage-family-therapists' },
  openGraph: {
    title: 'Momenties for Marriage and Family Therapists',
    description: 'LMFT renewal, CE tracking, and MFT credential management.',
    url: '/for/marriage-family-therapists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for LMFT renewal with ethics requirements',
    desc: 'State LMFT renewal CE requirements vary: most states require 24–36 CE hours per 2-year cycle with mandatory ethics CE (typically 3–6 hours). Some states also require CE in suicide prevention, domestic violence, or child abuse identification. Tag every CE by mandatory category: ethics, domestic violence, child abuse, suicide prevention. Each mandatory minimum tracked independently from total CE hours.',
  },
  {
    icon: Clock,
    title: 'MFT multi-credential renewal calendar',
    desc: '"LMFT — state board, 2-year renewal, july." "AAMFT Approved Supervisor credential — renewal." "Gottman Method certification — levels renewal." "EFT (Emotionally Focused Therapy) certification — 3-year." "CPR — 2-year, some settings require." "AAMFT membership — annual." All MFT credentials with 90-day advance alerts. Clinical practice never interrupted by expired licensure.',
  },
  {
    icon: BarChart3,
    title: 'Specialty method CE and dual license analytics',
    desc: 'MFTs who practice using certified methods (Gottman, EFT, EMDR) must maintain method-specific continuing education for certification renewal. Method CE may or may not count toward state license CE. Some MFTs also hold LPCC or LCSW licenses with independent CE requirements. Analytics tracks each credential independently. CE tagged to applicable credentials at completion.',
  },
  {
    icon: Users,
    title: 'AAMFT, CAMFT, and specialty method involvement',
    desc: '"AAMFT Annual Conference — october." "State MFT association conference — spring." "Gottman training intensives — annual." "EFT externship and core skills training." "AAMFT Approved Supervisor training." All MFT professional development on calendar. Conference CE tagged by applicable license and method certification category in advance.',
  },
]

const MFT_WORKFLOW = [
  { time: 'Annual planning', action: 'State LMFT renewal date, any specialty method certification renewals (Gottman, EFT), AAMFT Approved Supervisor credential renewal, AAMFT Annual Conference, and AAMFT membership renewal all loaded in January. CE pace: half biennial total per year with mandatory categories front-loaded.' },
  { time: 'CE completion', action: '"AAMFT-approved CE — working with high-conflict couples in divorce, 3 CE hours, ethics adjacent." Tagged by applicable license and mandatory category. LMFT CE counter updates. Ethics subcategory updates if ethics CE. Gottman certification CE counter updates if Gottman-approved. Each credential tracked independently.' },
  { time: 'Ethics CE', action: '"Ethics in online therapy — 3 CE hours, ethics category, state-approved." Ethics CE tagged with ethics flag at completion. Running ethics total visible separately from overall CE count. Renewal submission rejected if ethics minimum not met regardless of total CE hours — analytics prevents this surprise.' },
  { time: 'Specialty method CE', action: '"Gottman Level 3 training — continuing education credit." "EFT advanced skills workshop — method CE." Specialty method CE tracked against each method certification\'s independent renewal requirement. Method CE may also qualify for state license CE if state-approved. Each tracked independently without conflation.' },
  { time: 'Renewal audit', action: 'Analytics: LMFT CE hours on pace? Ethics CE minimum satisfied? Domestic violence CE current (if required)? Suicide prevention training done (if required)? Specialty method CE satisfied? AAMFT membership active? Complete MFT credential audit 90 days before LMFT renewal window.' },
]

export default function ForMarriageFamilyTherapistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Marriage and Family Therapists"
        title={
          <>
            LMFT maintained. Ethics CE current.
            <br />
            <em className="not-italic text-gold">Method certs never lapsed.</em>
          </>
        }
        lede="Marriage and family therapists manage state LMFT renewal with mandatory ethics CE, domestic violence, and suicide prevention hours, specialty method certifications (Gottman, EFT) with independent renewal cycles, supervision documentation, and professional development simultaneously. Momenties tracks CE by mandatory category, surfaces renewal deadlines 90 days early, and manages the full MFT credential calendar in one view."
        crumbs={[{ label: 'For Marriage and Family Therapists' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · No client data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How marriage and family therapists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for LMFT credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">MFT credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every renewal cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {MFT_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold LMFT, Gottman Level 3 Certification, and EFT certification — all three have CE requirements with different approved providers and different renewal schedules. Some CE counts for all three; most is specific to one. I was surprised to discover that my Gottman Level 3 renewal had lapsed by 4 months because I lost track of when it was due. Momenties now shows all three renewal dates on the same calendar view with advance alerts. No more surprises.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">H</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Heather J., LMFT, Gottman Level 3</div>
                  <div className="text-xs text-muted-foreground">Marriage and family therapist, couples specialty practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All MFT credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'State LMFT CE with mandatory categories — 2-year',
                'Ethics CE minimum — mandatory tracking',
                'Domestic violence CE — state required',
                'Gottman Method certification CE renewal',
                'EFT certification continuing education',
                'AAMFT Approved Supervisor credential renewal',
                'EMDR specialty certification renewal',
                'AAMFT conference and state chapter CE',
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
        title="LMFT maintained. Method certs current."
        subtitle="CE tracking with mandatory subcategory monitoring, specialty method certification calendar, and MFT professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
