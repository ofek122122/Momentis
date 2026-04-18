import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Art Therapists — ATR-BC renewal, CE tracking, and art therapy credential management',
  description:
    'Art therapists manage ATR-BC renewal with ATCB-approved CE (100 hours per 5 years), state counseling or MFT license CE, expressive arts therapy specialty credentials, and professional development simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full art therapy credential calendar.',
  alternates: { canonical: '/for/art-therapists' },
  openGraph: {
    title: 'Momenties for Art Therapists',
    description: 'ATR-BC renewal, CE tracking, and art therapy credential management.',
    url: '/for/art-therapists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for ATR-BC renewal',
    desc: 'ATCB ATR-BC renewal requires 100 CE hours per 5-year cycle with ATCB-approved CE in art therapy content areas. CE must be in areas relevant to professional art therapy practice: art therapy theory, clinical application, ethics, supervision, cultural competency. Tag every CE activity by ATCB content area and applicable credential. 5-year pace tracking prevents end-of-cycle scrambling.',
  },
  {
    icon: Clock,
    title: 'Art therapist multi-credential renewal calendar',
    desc: '"ATR-BC — ATCB, 5-year renewal, august." "State LPC — biennial, if licensed." "State MFT — biennial, if dual-licensed." "Ethics CE — mandatory category." "CPR — 2-year." "ATCB membership — annual." All art therapy credentials with 90-day advance alerts. Private practice and institutional employment never interrupted by expired registration.',
  },
  {
    icon: BarChart3,
    title: 'Dual license CE analytics',
    desc: 'Many art therapists hold both ATR-BC registration and a state counseling (LPC) or marriage and family therapy (MFT) license — each with independent CE requirements and different approved CE providers. ATCB-approved CE may or may not satisfy state license CE requirements. Analytics tracks each credential\'s CE counter independently. No hours mistakenly applied to the wrong credential.',
  },
  {
    icon: Users,
    title: 'AATA and expressive arts community involvement',
    desc: '"AATA Annual Conference — november." "State art therapy association conference — spring." "Expressive arts therapy intensive — summer." "Supervision group — monthly." "ATCB ethics workshop — annual." All art therapy professional development on calendar. AATA conference CE sessions tagged for ATCB and state license applicability in advance.',
  },
]

const AT_WORKFLOW = [
  { time: 'Annual planning', action: 'ATR-BC 5-year renewal date, state license renewal deadlines, mandatory ethics CE requirement, AATA Annual Conference, and ATCB membership renewal all loaded in January. CE pace: 20 ATCB CE hours per year satisfies the 5-year requirement with margin for content balance.' },
  { time: 'CE completion', action: '"ATCB-approved workshop — trauma-informed art therapy with adolescents, 6 CE hours, clinical application." Tagged by ATCB content area and applicable credential. ATR-BC counter updates. State LPC counter also updates if the CE satisfies state requirements. Content area balance tracked over the 5-year cycle.' },
  { time: 'State license CE', action: '"State LPC renewal — biennial, 30 CE hours, ethics minimum 3 hours." State CE requirements tracked separately from ATCB CE. Some workshops qualify for both; some are credential-specific. Each credential tracked independently without conflation. Ethics subcategory tracked as mandatory minimum within state requirement.' },
  { time: 'Supervision hours', action: '"Peer supervision group — first monday monthly." "Individual supervision — as needed for complex cases." Supervision hours toward ATR registration (pre-board) or toward clinical supervision credential documented separately. Supervision calendar integrates with CE and professional development commitments.' },
  { time: 'Renewal audit', action: 'Analytics: ATR-BC CE hours on pace? ATCB content area coverage adequate? State license CE hours complete? Ethics CE minimum satisfied? ATCB membership active? CPR current? Complete art therapy credential audit 90 days before ATR-BC renewal window opens for the 5-year cycle.' },
]

export default function ForArtTherapistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Art Therapists"
        title={
          <>
            ATR-BC maintained. State license current.
            <br />
            <em className="not-italic text-gold">CE never scrambled.</em>
          </>
        }
        lede="Art therapists manage ATR-BC renewal with 100 CE hours over 5 years in ATCB-approved content areas, state counseling or MFT license CE with independent requirements, mandatory ethics CE, and professional development simultaneously. Momenties tracks CE by ATCB content area, surfaces renewal deadlines 90 days early, and manages the full art therapy credential calendar in one view."
        crumbs={[{ label: 'For Art Therapists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How art therapists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for ATR-BC and art therapy credential management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Art therapy credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through the 5-year ATR-BC cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {AT_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold ATR-BC and a state LPC — the ATR-BC is a 5-year cycle and my LPC renews every 2 years. The problem was that some of my CE counted for both, some only for ATCB, and some only for the state board. I was tracking them together in a spreadsheet and losing count. Momenties lets me tag each CE to the credentials it actually qualifies for. The 5-year ATR-BC cycle no longer sneaks up on me.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">R</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Rachel K., ATR-BC, LPC</div>
                  <div className="text-xs text-muted-foreground">Art therapist, community mental health center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All art therapy credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ATCB CE by content area — ATR-BC 5-year renewal',
                'State LPC or LMFT CE — biennial renewal',
                'Mandatory ethics CE minimum tracking',
                'ATCB membership renewal — annual',
                'Expressive arts therapy specialty credentials',
                'Supervision and mentorship hours documentation',
                'AATA Annual Conference CE planning',
                'CPR/first aid recertification',
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
        title="ATR-BC maintained. State license current."
        subtitle="CE tracking by ATCB content area, dual credential renewal calendar, and art therapy professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
