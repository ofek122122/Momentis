import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Music Therapists — MT-BC renewal, CE tracking, and music therapy credential management',
  description:
    'Music therapists manage CBMT MT-BC renewal with 100 CMTE units per 5 years, state counseling or creative arts therapy license CE, Neurologic Music Therapy specialty certification, and professional development simultaneously. Momenties tracks CMTE by credential, surfaces renewal deadlines 90 days early, and manages the full music therapy credential calendar.',
  alternates: { canonical: '/for/music-therapists' },
  openGraph: {
    title: 'Momenties for Music Therapists',
    description: 'MT-BC renewal, CMTE tracking, and music therapy credential management.',
    url: '/for/music-therapists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CMTE tracking for MT-BC renewal',
    desc: 'CBMT MT-BC renewal requires 100 Continuing Music Therapy Education units per 5-year cycle with CBMT-approved CE. CMTE must be in areas relevant to music therapy practice: assessment, treatment planning, clinical improvisation, music theory for therapy, neurologic music therapy techniques, ethics, supervision. Tag every CMTE by content area. 5-year pace: 20 CMTE per year with content balance maintained.',
  },
  {
    icon: Clock,
    title: 'Music therapist multi-credential renewal calendar',
    desc: '"MT-BC — CBMT, 5-year renewal, september." "State LPC — biennial, if dual-licensed." "NMT (Neurologic Music Therapy) — 3-year." "NICU-MT specialty — renewal, if certified." "CBMT membership — annual." "Ethics CMTE — required category." All music therapy credentials with 90-day advance alerts. Institutional and private practice never interrupted by lapsed credentials.',
  },
  {
    icon: BarChart3,
    title: 'Dual credential CE analytics',
    desc: 'Many music therapists hold both MT-BC and a state counseling (LPC/LMHC) or creative arts therapy license — each with independent CE requirements and different approved providers. CBMT-approved CMTE may or may not satisfy state license CE requirements. Analytics tracks each credential independently. CE tagged to the applicable credentials at time of completion. No conflation.',
  },
  {
    icon: Users,
    title: 'AMTA and NMT professional involvement',
    desc: '"AMTA National Conference — november." "World Congress of Music Therapy — biennial." "NMT symposium — annual." "State music therapy association conference — spring." "Supervision group — monthly." "CBMT ethics workshop." All music therapy professional development on calendar. AMTA conference CMTE sessions tagged for CBMT and state license applicability in advance.',
  },
]

const MT_WORKFLOW = [
  { time: 'Annual planning', action: 'MT-BC 5-year renewal date, state license renewal deadlines, NMT recertification, AMTA National Conference, CBMT membership renewal, and mandatory ethics CMTE all loaded in January. CMTE pace: 20 CBMT-approved units per year satisfies the 5-year cycle with content area balance.' },
  { time: 'CMTE completion', action: '"CBMT-approved workshop — rhythmic auditory stimulation for neurologic rehabilitation, 6 CMTE, NMT techniques." Tagged by content area and applicable credential. MT-BC 5-year counter updates. NMT recertification CE also updates if NMT-approved. State LPC CE updates if applicable. Each credential tracked independently.' },
  { time: 'NMT specialty', action: '"Neurologic Music Therapy recertification — 3-year, october." NMT training and recertification CE tracked separately from general CBMT CMTE. NMT-approved CE may also qualify for CBMT CMTE. MT-BC counter and NMT counter updated independently when CE applies to both. Specialty recertification calendar separate from base credential cycle.' },
  { time: 'State license CE', action: '"State LPC renewal — biennial, 30 CE hours, ethics minimum." State CE requirements tracked separately from CBMT CMTE requirements. Some workshops qualify for both; others are credential-specific. Ethics CE subcategory tracked as mandatory minimum within state requirement. Each credential maintains independent tracking.' },
  { time: 'Renewal audit', action: 'Analytics: MT-BC CMTE units on pace? CMTE content area coverage adequate? Ethics CMTE satisfied? NMT recertification CE current? State license CE complete? CBMT membership active? Complete music therapy credential audit 90 days before MT-BC renewal window. Content area documentation prepared for CBMT renewal submission.' },
]

export default function ForMusicTherapistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Music Therapists"
        title={
          <>
            MT-BC maintained. NMT current.
            <br />
            <em className="not-italic text-gold">CMTE never scrambled.</em>
          </>
        }
        lede="Music therapists manage MT-BC renewal with 100 CMTE units over 5 years, Neurologic Music Therapy specialty recertification, state counseling or creative arts therapy license CE with independent requirements, and professional development simultaneously. Momenties tracks CMTE by content area, surfaces renewal deadlines 90 days early, and manages the full music therapy credential calendar in one view."
        crumbs={[{ label: 'For Music Therapists' }]}
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
            CMTE analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No client data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How music therapists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for MT-BC and music therapy credential management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Music therapy credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CMTE and credentials managed through the 5-year MT-BC cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {MT_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold MT-BC, NMT certification, and a state LPC — three different renewal cycles with different CE standards. NMT recertification CE sometimes counts for CBMT CMTE and sometimes doesn&apos;t. LPC CE almost never overlaps with CBMT requirements. I was using a single running total and discovering the complexity only at renewal time. Momenties lets me tag each CE to exactly the credentials it qualifies for at the moment I complete it.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">A</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Alicia M., MT-BC, NMT, LPC</div>
                  <div className="text-xs text-muted-foreground">Music therapist, pediatric hospital and private practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All music therapy credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CBMT CMTE by content area — MT-BC 5-year renewal',
                'NMT Neurologic Music Therapy — 3-year recertification',
                'State LPC or creative arts therapy license CE',
                'NICU-MT specialty certification renewal',
                'CBMT ethics CE — required category',
                'CBMT membership renewal — annual',
                'AMTA National Conference CMTE planning',
                'Supervision and mentorship hours documentation',
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
        title="MT-BC maintained. NMT current."
        subtitle="CMTE tracking by content area, multi-credential renewal calendar, and music therapy professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CMTE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
