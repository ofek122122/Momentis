import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Ophthalmologists — ABO MOC, CME tracking, and ophthalmology credential management',
  description:
    'Ophthalmologists manage ABO (American Board of Ophthalmology) MOC with continuous CME requirements, state medical license biennial CME, DEA 3-year registration, laser and surgical procedure credentialing, LASIK and refractive surgery CE, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full ophthalmology credential calendar.',
  alternates: { canonical: '/for/ophthalmologists' },
  openGraph: {
    title: 'Momenties for Ophthalmologists',
    description: 'ABO MOC, CME tracking, and ophthalmology credential management.',
    url: '/for/ophthalmologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABO MOC and ophthalmology board requirements',
    desc: 'Ophthalmologists certified by the American Board of Ophthalmology (ABO) face continuous MOC requirements with CME specific to ophthalmology content. ABO Maintenance of Certification requires CME in ophthalmology content domains: cataract and anterior segment, retina and vitreous, glaucoma, cornea, neuro-ophthalmology, and refractive surgery. Subspecialty focus areas tracked to ensure balanced coverage across ABO content domains.',
  },
  {
    icon: Clock,
    title: 'Ophthalmologist multi-credential renewal calendar',
    desc: '"ABO MOC — continuous, ophthalmology CME." "State medical license — biennial CE." "DEA registration — 3-year." "LASIK/refractive surgery CE — laser equipment training renewal." "Intravitreal injection credentialing — institutional annual." "AAO membership — annual." "Laser safety officer training — institutional." All ophthalmology credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Laser procedure and equipment training credentialing analytics',
    desc: 'Ophthalmologists performing LASIK, PRK, or other laser refractive procedures require laser equipment manufacturer training certification — typically annual or per major software update. Intravitreal injection credentialing for anti-VEGF therapy tracked on institutional policy. Ophthalmic laser safety officer certification required for ambulatory surgery center compliance. Each tracked independently on separate renewal schedules.',
  },
  {
    icon: Users,
    title: 'AAO, ASCRS, and ophthalmology professional involvement',
    desc: '"AAO Annual Meeting — october." "ASCRS Annual Meeting — april." "ARVO Annual Meeting — may." "ASOA annual meeting." "AAO Subspecialty Day sessions." "Retina Society Annual Meeting." "Cornea Society annual education." All ophthalmology professional development on calendar. AAO Annual Meeting CME tagged by ABO MOC applicability and subspecialty domain coverage in advance.',
  },
]

const OPHTHO_WORKFLOW = [
  { time: 'Annual planning', action: 'ABO MOC continuous CME pace with subspecialty domain balance, state medical license biennial CE cycle, DEA 3-year renewal, laser equipment training renewal, intravitreal injection credentialing institutional renewal, laser safety officer certification, AAO Annual Meeting, and AAO membership all loaded in January. ABO domain distribution and state CE paces tracked independently.' },
  { time: 'CME completion', action: '"AAO-approved — microinvasive glaucoma surgery (MIGS): patient selection, device comparison, and long-term outcomes, 3 CME, ABO applicable — glaucoma domain." Tagged by applicable board and ABO content domain. ABO total counter and glaucoma domain counter both update. State license CE updates if state accepts ophthalmology CME. Domain distribution reviewed to identify underweighted areas.' },
  { time: 'Laser training', action: '"LASIK laser recertification — Alcon WaveLight FS200 and EX500 systems, annual CE." Laser refractive surgery equipment training tracked per manufacturer and per platform on annual renewal cycle. Major software upgrades to laser platforms may require additional recertification before use. Equipment training lapse means the specific laser system cannot be used clinically until recertification is complete.' },
  { time: 'Injection credentialing', action: '"Intravitreal injection credentialing renewal — institutional annual peer review, Q1." Intravitreal injection credentialing for anti-VEGF therapy tracked on institutional annual peer review cycle. Injection case minimum documented for institutional credentialing. New biosimilar anti-VEGF product introductions may require additional training before use. Credentialing tracked independently per institution.' },
  { time: 'Renewal audit', action: 'Analytics: ABO MOC CME on pace? Subspecialty domain distribution adequate? State license CE complete? DEA valid? Laser equipment training current for all platforms? Intravitreal injection credentialing current? Laser safety officer certification valid? AAO membership active? Complete ophthalmology credential audit 90 days before earliest renewal.' },
]

export default function ForOphthalmologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Ophthalmologists"
        title={
          <>
            ABO MOC and laser credentialing maintained.
            <br />
            <em className="not-italic text-gold">Equipment certifications and DEA never lapsed.</em>
          </>
        }
        lede="Ophthalmologists manage ABO board MOC with continuous ophthalmology CME requirements across subspecialty content domains, annual laser refractive surgery equipment manufacturer training certifications, institutional intravitreal injection credentialing on annual peer review cycles, ophthalmic laser safety officer certification, DEA 3-year registration, and professional development simultaneously. Momenties tracks CME by board credential with domain distribution analytics, surfaces renewal deadlines 90 days early, and manages the full ophthalmology credential calendar in one view."
        crumbs={[{ label: 'For Ophthalmologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How ophthalmologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for ophthalmology credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Ophthalmology credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed across board, equipment, and institutional cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {OPHTHO_WORKFLOW.map((step, i) => (
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
                &ldquo;Laser platform training is entirely separate from ABO MOC — it&apos;s manufacturer certification, not medical board CME. I have two LASIK platforms at my ASC and each one has its own annual recertification. When Alcon pushed a major software update, there was an additional recertification required before I could use the updated platform clinically. Without a calendar system that tracks manufacturer certifications separately from board CME, I would have found out when the technician told me I wasn&apos;t certified for the new software. Now I get a 90-day alert for every platform independently.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">S</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Sandra H., MD, FACS, AAO</div>
                  <div className="text-xs text-muted-foreground">Ophthalmologist, cataract and refractive surgery, ambulatory surgery center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All ophthalmology credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABO board MOC CME — continuous with domain tracking',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Laser refractive surgery equipment certification — annual per platform',
                'Intravitreal injection credentialing — institutional annual',
                'Ophthalmic laser safety officer certification',
                'AAO membership renewal — annual',
                'AAO and ASCRS Annual Meeting CME by ABO domain',
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
        title="ABO MOC and laser credentialing maintained."
        subtitle="CME tracking with domain distribution, laser equipment certification calendar, injection credentialing, and ophthalmology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
