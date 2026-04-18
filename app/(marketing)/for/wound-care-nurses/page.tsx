import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Wound Care Nurses — CWOCN/CWCN renewal, CE tracking, and wound care credential management',
  description:
    'Wound care nurses manage WOCNCB CWOCN or CWCN renewal with 75 CE per 5 years including wound-specific CE, state RN license CE, ostomy and continence specialty CE (if applicable), and professional development simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full wound care nursing credential calendar.',
  alternates: { canonical: '/for/wound-care-nurses' },
  openGraph: {
    title: 'Momenties for Wound Care Nurses',
    description: 'CWOCN/CWCN renewal, CE tracking, and wound care credential management.',
    url: '/for/wound-care-nurses',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CWOCN and CWCN renewal',
    desc: 'WOCNCB CWOCN renewal requires 75 CE per 5-year cycle with wound/ostomy/continence-specific CE. CWCN wound specialty requires CE in wound care content: wound assessment, wound management, wound healing physiology, prevention, advanced wound products, and evidence-based practice. Tag every CE by WOCNCB specialty content area. Wound-specific hours tracked alongside total CE count.',
  },
  {
    icon: Clock,
    title: 'Wound care nurse multi-credential renewal calendar',
    desc: '"CWOCN — WOCNCB, 5-year renewal, july." "CWCN wound only specialty — 5-year." "State RN license — biennial, varies." "WCC wound care certification — WCC Education, 2-year, if dual." "WOCNCB membership — annual." "BLS/ACLS — 2-year." All wound care credentials with 90-day advance alerts. Clinical practice and consulting never interrupted by expired credentials.',
  },
  {
    icon: BarChart3,
    title: 'Multi-specialty wound, ostomy, and continence analytics',
    desc: 'CWOCN nurses practice across wound, ostomy, and continence specialties — each requiring specialty CE within the 75-hour total. Nurses who track only total CE hours discover at renewal that CE is concentrated in one specialty area without adequate coverage of the others. Analytics tracks CE by WOCNCB specialty area independently. Coverage balance confirmed before renewal submission.',
  },
  {
    icon: Users,
    title: 'WOCN, AAWC, and wound care professional involvement',
    desc: '"WOCN Annual Conference — june." "AAWC Annual Symposium — march." "SAWC Spring wound symposium — may." "State WOC nurses association conference." "Advanced wound care product training — annual." All wound care professional development on calendar. Conference CE planned by WOCNCB specialty content area in advance for maximum 5-year renewal coverage.',
  },
]

const WCN_WORKFLOW = [
  { time: 'Annual planning', action: 'CWOCN 5-year renewal date, state RN license biennial renewal, BLS/ACLS recertification, WOCN Annual Conference, and WOCNCB membership renewal all loaded in January. CE pace: 15 WOCNCB CE per year satisfies the 5-year requirement. Wound/ostomy/continence specialty content balance reviewed annually.' },
  { time: 'CE completion', action: '"WOCNCB-approved CE — management of non-healing wounds with biofilm, 2 CE hours, wound management content area." Tagged by WOCNCB specialty content. CWOCN 5-year counter updates. State RN CE counter updates if RN CE-approved. WCC CE counter updates if WCC-approved. Content area distribution updates.' },
  { time: 'State RN license', action: '"State RN license renewal — biennial, march." State RN CE requirements tracked separately from WOCNCB requirements. State RN CE may or may not overlap with WOCNCB-approved CE. Both tracked independently. State license is a CWOCN eligibility prerequisite — state license lapse voids CWOCN eligibility.' },
  { time: 'Ostomy/continence CE', action: '"Ostomy care and management workshop — 4 CE hours, ostomy content area." "Continence care — 3 CE hours, continence content area." CWOCN nurses who practice wound-only may accumulate less ostomy and continence CE. Specialty content distribution tracked to prevent an imbalance that could cause renewal submission issues for the combined WOC credential.' },
  { time: 'Renewal audit', action: 'Analytics: CWOCN CE total on pace? Wound content CE adequate? Ostomy content CE adequate? Continence content CE adequate? State RN license CE complete? BLS current? WOCNCB membership active? Complete wound care credential audit 90 days before CWOCN renewal window. WOCNCB documentation prepared for submission.' },
]

export default function ForWoundCareNursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Wound Care Nurses"
        title={
          <>
            CWOCN maintained. State license current.
            <br />
            <em className="not-italic text-gold">Specialty CE balanced.</em>
          </>
        }
        lede="Wound care nurses manage CWOCN or CWCN renewal with 75 CE per 5 years across wound, ostomy, and continence specialty content areas, state RN license CE with independent requirements, BLS certifications, and professional development simultaneously. Momenties tracks CE by WOCNCB specialty area, surfaces renewal deadlines 90 days early, and manages the full wound care credential calendar in one view."
        crumbs={[{ label: 'For Wound Care Nurses' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How wound care nurses use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for CWOCN credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Wound care credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through the 5-year CWOCN cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {WCN_WORKFLOW.map((step, i) => (
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
                &ldquo;The CWOCN covers wound, ostomy, and continence — three specialty areas. My practice is primarily wound care, so I naturally accumulated wound CE. Going into my renewal year I had 62 CE hours total but only 8 hours of ostomy CE and 4 hours of continence CE. WOCNCB requires reasonable distribution across all three areas. I had to complete targeted ostomy and continence CE in 3 months. Now I track each specialty area live throughout the 5-year cycle.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">O</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Olivia C., BSN, CWOCN</div>
                  <div className="text-xs text-muted-foreground">Wound, ostomy, and continence nurse, hospital system</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All wound care credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'WOCNCB CE by specialty area — CWOCN 5-year renewal',
                'Wound care content CE tracking',
                'Ostomy care content CE tracking',
                'Continence care content CE tracking',
                'State RN license CE — biennial renewal',
                'BLS/ACLS certification — 2-year renewal',
                'WCC wound care certification (if dual) renewal',
                'WOCN and AAWC conference CE planning',
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
        title="CWOCN maintained. Specialty CE balanced."
        subtitle="CE tracking by WOC specialty area, state license renewal calendar, and wound care professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
