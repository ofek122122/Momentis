import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Oral Surgeons — ABOMS MOC, OMS CME tracking, and oral surgery credential management',
  description:
    'Oral and maxillofacial surgeons manage ABOMS (American Board of Oral and Maxillofacial Surgery) recertification and OMSCME requirements, state dental license CE, DEA 3-year registration, ACLS/ATLS renewal, anesthesia permit CE, hospital credentialing, and professional development simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full oral surgery credential calendar.',
  alternates: { canonical: '/for/oral-surgeons' },
  openGraph: {
    title: 'Momenties for Oral Surgeons',
    description: 'ABOMS MOC, OMS CME tracking, and oral surgery credential management.',
    url: '/for/oral-surgeons',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABOMS recertification and OMS CE requirements',
    desc: 'Oral and maxillofacial surgeons certified by the American Board of Oral and Maxillofacial Surgery (ABOMS) face 10-year recertification cycles with continuous OMSCME requirements. ABOMS recertification requires CME in OMS content domains. State dental board CE requirements run on independent cycles — typically biennial — with separate content requirements. ABOMS and state dental CE tracked independently.',
  },
  {
    icon: Clock,
    title: 'Oral surgeon multi-credential renewal calendar',
    desc: '"ABOMS — 10-year recertification, continuous OMSCME." "State dental license — biennial CE." "DEA registration — 3-year." "ACLS — 2-year renewal." "ATLS — 4-year renewal." "State anesthesia permit — biennial CE." "Hospital credentialing — institutional annual." "AAOMS membership — annual." All oral surgery credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Anesthesia permit and hospital credentialing analytics',
    desc: 'Oral surgeons administering general anesthesia or deep sedation in an office setting require state anesthesia permit renewal with CE documentation. Anesthesia permit CE is separate from state dental license CE — different content requirements, different tracking. Hospital credentialing for oral surgeons with hospital privileges runs on institutional annual peer review cycles independent of ABOMS. Each tracked separately on calendar.',
  },
  {
    icon: Users,
    title: 'AAOMS, OMS Foundation, and oral surgery professional involvement',
    desc: '"AAOMS Annual Meeting — september." "AAOMS Residents and Fellows Symposium." "ADA Annual Meeting OMS sessions." "OMS Foundation research education." "Implant surgery CE courses." "TMJ and facial trauma update courses." "Head and neck oncology CME." All oral surgery professional development on calendar. AAOMS Annual Meeting CE tagged by ABOMS and state dental applicability.',
  },
]

const OMS_WORKFLOW = [
  { time: 'Annual planning', action: 'ABOMS continuous OMSCME pace (10-year cycle), state dental license biennial CE cycle, DEA 3-year renewal, ACLS 2-year cycle, ATLS 4-year cycle, state anesthesia permit biennial CE, hospital credentialing institutional renewal, AAOMS Annual Meeting, and AAOMS membership all loaded in January. ABOMS, state dental, and anesthesia permit CE paces tracked independently.' },
  { time: 'CE completion', action: '"AAOMS-approved — full-arch implant rehabilitation: guided surgery, immediate load protocols, 4 CE, ABOMS applicable." Tagged by applicable credential. ABOMS counter updates. State dental CE counter updates if state accepts oral surgery implant CE. Anesthesia permit CE counter updates only if content meets state anesthesia CE requirements — implant CE typically does not.' },
  { time: 'Anesthesia permit', action: '"State anesthesia permit CE renewal — biennial, 20 CE anesthesia and sedation content." Anesthesia permit CE tracked separately from state dental license CE and ABOMS CME. State anesthesia permit CE must be specifically in anesthesia and sedation content — clinical OMS CE doesn\'t qualify. Permit lapse stops in-office general anesthesia and deep sedation cases.' },
  { time: 'ACLS/ATLS', action: '"ACLS renewal — AHA, 2-year cycle, October." "ATLS renewal — ACS, 4-year cycle." ACLS placed on 2-year cycle independent of ABOMS and state dental license cycles. ATLS placed on 4-year cycle independent of all other credentials. Hospital credentialing for trauma OMS cases typically requires current ATLS. Both placed on independent renewal calendars with 90-day advance alerts.' },
  { time: 'Renewal audit', action: 'Analytics: ABOMS OMSCME on 10-year pace? State dental CE complete? DEA valid? ACLS current? ATLS current? Anesthesia permit CE adequate? Hospital credentialing peer review done? AAOMS membership active? Complete oral surgery credential audit 90 days before earliest renewal. ABOMS, state dental, anesthesia permit, and hospital credentialing documentation maintained separately.' },
]

export default function ForOralSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Oral Surgeons"
        title={
          <>
            ABOMS certification and anesthesia permit maintained.
            <br />
            <em className="not-italic text-gold">ACLS, ATLS, and DEA never lapsed.</em>
          </>
        }
        lede="Oral and maxillofacial surgeons manage ABOMS 10-year recertification with continuous OMSCME requirements, state dental license biennial CE, state anesthesia permit biennial CE with separate content requirements, DEA 3-year registration, ACLS 2-year and ATLS 4-year renewals on independent cycles, hospital credentialing annual peer review, and professional development simultaneously. Momenties tracks CE by oral surgery credential, surfaces renewal deadlines 90 days early, and manages the full oral surgery credential calendar in one view."
        crumbs={[{ label: 'For Oral Surgeons' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How oral surgeons use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for oral surgery credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Oral surgery credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed across board, state, and anesthesia permit cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {OMS_WORKFLOW.map((step, i) => (
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
                &ldquo;The anesthesia permit is the one that catches OMS surgeons off guard. It&apos;s a separate license from my dental license, with separate CE requirements that have to be specifically anesthesia and sedation content. I was counting my general OMS CME toward the anesthesia permit and discovering at renewal that it didn&apos;t qualify. Then ATLS is a 4-year cycle — different from ACLS&apos;s 2-year — and my state dental board runs biennial. Five different cycles and only one of them is on the same schedule as anything else. Momenties tracks all five with independent counters and alerts.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">D</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Derek L., DDS, MD, FACS</div>
                  <div className="text-xs text-muted-foreground">Oral and maxillofacial surgeon, private practice with hospital privileges</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All oral surgery credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABOMS 10-year recertification OMSCME',
                'State dental license CE — biennial',
                'State anesthesia permit CE — biennial, separate requirements',
                'DEA registration renewal — 3-year',
                'ACLS certification — 2-year renewal',
                'ATLS certification — 4-year renewal',
                'Hospital credentialing — institutional annual peer review',
                'AAOMS membership and conference CE planning',
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
        title="ABOMS certification and anesthesia permit maintained."
        subtitle="CME tracking by credential, anesthesia permit CE calendar, ACLS and ATLS renewal, and oral surgery professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
