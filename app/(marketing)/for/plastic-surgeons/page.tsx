import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Plastic Surgeons — ABPS MOC, CME tracking, and plastic surgery credential management',
  description:
    'Plastic surgeons manage ABPS (American Board of Plastic Surgery) MOC with continuous CME requirements, state medical license biennial CME, DEA 3-year registration, filler and toxin product training certifications, office-based anesthesia permit CE, robotic microsurgery credentialing, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full plastic surgery credential calendar.',
  alternates: { canonical: '/for/plastic-surgeons' },
  openGraph: {
    title: 'Momenties for Plastic Surgeons',
    description: 'ABPS MOC, CME tracking, and plastic surgery credential management.',
    url: '/for/plastic-surgeons',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABPS MOC and plastic surgery board requirements',
    desc: 'Plastic surgeons certified by the American Board of Plastic Surgery (ABPS) face continuous MOC requirements with CME specific to plastic surgery content. ABPS MOC requires CME across plastic surgery domains: aesthetic surgery, reconstructive surgery, hand surgery, burns, and craniofacial surgery. Subspecialty certificate holders in hand surgery face additional MOC requirements from both ABPS and ABOS. ABPS and state license CE tracked independently.',
  },
  {
    icon: Clock,
    title: 'Plastic surgeon multi-credential renewal calendar',
    desc: '"ABPS MOC — continuous, plastic surgery CME." "State medical license — biennial CE." "DEA registration — 3-year." "Office-based anesthesia permit — biennial CE." "Botulinum toxin and filler product training — manufacturer annual." "ASPS membership — annual." "Implant training certifications — per manufacturer." All plastic surgery credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Injectable and implant product training analytics',
    desc: 'Plastic surgeons administering aesthetic injectables (Botox, Dysport, Xeomin, dermal fillers) work under manufacturer training certification requirements. New filler products and toxin formulations require training before use. Breast implant manufacturer training for textured implants and anatomic implants tracked per manufacturer. Implant companies send mandatory safety communications that require documented training completion. Each product certification tracked on independent renewal schedule.',
  },
  {
    icon: Users,
    title: 'ASPS, ASAPS, and plastic surgery professional involvement',
    desc: '"ASPS Plastic Surgery The Meeting — october." "ASAPS Annual Meeting — april." "ASRM Annual Meeting — november." "AAPS Annual Meeting." "Rhinoplasty Society annual." "Aesthetic surgery simulation training." "Breast implant safety education." All plastic surgery professional development on calendar. ASPS and ASAPS Annual Meeting CME tagged by ABPS MOC applicability in advance.',
  },
]

const PLASTIC_WORKFLOW = [
  { time: 'Annual planning', action: 'ABPS MOC continuous CME pace, state medical license biennial CE cycle, DEA 3-year renewal, office-based anesthesia permit biennial CE, manufacturer injectable product training renewals, implant certification renewals, ASPS Annual Meeting, and ASPS membership all loaded in January. ABPS and state CE tracked independently. Injectable and implant certifications tracked per manufacturer.' },
  { time: 'CME completion', action: '"ASPS-approved — secondary rhinoplasty: structural grafting techniques and revision strategies, 3 CME, ABPS applicable." Tagged by ABPS content domain. ABPS total counter updates. State license CE updates if state accepts plastic surgery CME. Product-specific training does not count toward ABPS MOC CME — tracked in a separate category.' },
  { time: 'Injectable training', action: '"Galderma Restylane product training — annual recertification." "Allergan Juvederm certification renewal." "Merz Xeomin and Radiesse training." Injectable product training certifications tracked per manufacturer on annual renewal cycles. New product formulations (Juvederm Volux, Restylane Kysse) require separate initial training. Manufacturer certification lapse limits which injectable products can be advertised as certified expertise.' },
  { time: 'Anesthesia permit', action: '"Office-based anesthesia permit CE — biennial, state anesthesia safety and sedation content." Office-based anesthesia permit tracked on biennial state cycle independent of ABPS MOC and state medical license. Anesthesia permit CE requires specific sedation and safety content — general plastic surgery CE doesn\'t qualify. Permit lapse stops in-office sedation and general anesthesia procedures.' },
  { time: 'Renewal audit', action: 'Analytics: ABPS MOC CME on pace? State license CE complete? DEA valid? Office-based anesthesia permit CE current? Injectable product certifications active for all products used? Implant training certifications current? ASPS membership active? Complete plastic surgery credential audit 90 days before earliest renewal. ABPS, anesthesia permit, and manufacturer documentation maintained separately.' },
]

export default function ForPlasticSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Plastic Surgeons"
        title={
          <>
            ABPS MOC and injectable certifications maintained.
            <br />
            <em className="not-italic text-gold">Anesthesia permit and implant credentials never lapsed.</em>
          </>
        }
        lede="Plastic surgeons manage ABPS board MOC with continuous plastic surgery CME requirements, manufacturer annual training certifications for injectable products and implant systems on independent renewal schedules, office-based anesthesia permit biennial CE with separate content requirements, DEA 3-year registration, state medical license biennial CE, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full plastic surgery credential calendar in one view."
        crumbs={[{ label: 'For Plastic Surgeons' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How plastic surgeons use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for plastic surgery credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Plastic surgery credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed across board, manufacturer, and anesthesia permit cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {PLASTIC_WORKFLOW.map((step, i) => (
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
                &ldquo;Injectable product certifications are the most undertracked credentials in aesthetic plastic surgery. I use fillers and toxins from three different companies — Allergan, Galderma, and Merz — and each has its own annual training requirement. They send reminder emails to whatever address I gave them years ago. My office-based anesthesia permit is on a completely separate biennial cycle with different CE content requirements from my state medical license. And ABPS MOC tracks differently from the product certifications because one is a board credential and the others are manufacturer certifications. Momenties is the first place I&apos;ve had all of them on one calendar.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">V</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Victoria L., MD, FACS, FAPS</div>
                  <div className="text-xs text-muted-foreground">Plastic surgeon, aesthetic and reconstructive, private practice with office-based OR</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All plastic surgery credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABPS board MOC CME — continuous',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Office-based anesthesia permit CE — biennial, separate requirements',
                'Botulinum toxin product certifications — annual per manufacturer',
                'Dermal filler certifications — annual per manufacturer',
                'Breast implant training certifications — per manufacturer',
                'ASPS and ASAPS Annual Meeting CME by ABPS applicability',
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
        title="ABPS MOC and injectable certifications maintained."
        subtitle="CME tracking by board, injectable product certification calendar, anesthesia permit CE, and plastic surgery professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
