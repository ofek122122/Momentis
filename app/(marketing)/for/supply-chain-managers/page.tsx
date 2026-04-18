import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BarChart3, Shield, Clock, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Supply Chain Managers — APICS certification, compliance deadlines, and operational calendar',
  description:
    'Supply chain managers manage APICS CSCP or CPIM recertification requirements, vendor contract renewals, audit schedules, regulatory compliance deadlines, and cross-functional project timelines simultaneously. Momenties tracks PDUs toward certification and surfaces all operational deadlines early.',
  alternates: { canonical: '/for/supply-chain-managers' },
  openGraph: {
    title: 'Momenties for Supply Chain Managers',
    description: 'APICS certification, compliance deadlines, and operational calendar for supply chain.',
    url: '/for/supply-chain-managers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'APICS certification and PDU tracking',
    desc: 'Tag every professional development activity toward APICS CSCP, CPIM, or CLTD recertification. Track 75 PDUs per 5-year cycle for CSCP. Different certification tracks managed separately. ISM certifications (CPSM, CPSD) tracked on their own cycles.',
  },
  {
    icon: Clock,
    title: 'Vendor contract and compliance calendar',
    desc: '"Vendor contract renewal — logistics partner, june 30." "ISO 9001 audit — Q3, september." "Customs compliance review — annual, october." "Import license renewal — december 15." Every supply chain compliance deadline with 90-day advance alerts. No renewal discovered too late.',
  },
  {
    icon: BarChart3,
    title: 'Cross-functional project timeline analytics',
    desc: 'Tag every meeting and working session by project or initiative. Analytics shows hours per project. Which cross-functional efforts are consuming the most supply chain management time? Data for resource allocation conversations and project prioritization with leadership.',
  },
  {
    icon: Users,
    title: 'Vendor review and audit calendar',
    desc: '"Quarterly business review — top 3 suppliers." "Annual vendor assessment — october-november." "New supplier qualification — by project." "Internal process audit — Q2." Vendor relationship and compliance activities templated and recurring on the operational calendar.',
  },
]

const SC_WORKFLOW = [
  { time: 'Annual planning', action: 'All vendor contract renewals, regulatory compliance deadlines, audit schedules, and APICS certification milestones on calendar at year start. Cross-functional project timelines added as they\'re confirmed. The supply chain compliance year visible before the first crisis arrives.' },
  { time: 'Vendor management', action: '"Quarterly business review — logistics partner, tuesday 9am." Pre-work block added week before: pull metrics, prepare agenda, review scorecard. Post-meeting action item follow-up block added. Every QBR is prepared, not improvised.' },
  { time: 'Compliance cycle', action: '"ISO 9001 internal audit — Q3, september 15-17." Preparation blocks added: document review 6 weeks prior, team prep meeting 3 weeks prior, pre-audit walkthrough 1 week prior. Audit readiness is a project, not a day-of scramble.' },
  { time: 'PDU credits', action: '"APICS webinar — supply chain resilience, thursday 12pm, 1.5 hours, CSCP PDU." Tagged and added. 5-year cycle counter updates. Certification track matched. No scramble to find 75 PDUs in the final year of the cycle.' },
  { time: 'PDU audit', action: 'Analytics: APICS PDU progress by certification track. 5-year cycle on track? Which categories need more credits? Time to register for APICS annual conference or approved courses to close the PDU gap.' },
]

export default function ForSupplyChainManagersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Supply Chain Managers"
        title={
          <>
            Compliance current.
            <br />
            <em className="not-italic text-gold">APICS certification on track.</em>
          </>
        }
        lede="Supply chain managers manage APICS recertification PDUs, vendor contract renewals, regulatory compliance deadlines, audit schedules, and cross-functional project timelines simultaneously. Momenties tracks PDUs by certification track, surfaces compliance deadlines 90 days early, and manages the operational calendar in one view."
        crumbs={[{ label: 'For Supply Chain Managers' }]}
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
            Operations analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No supplier data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How supply chain managers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for supply chain management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Supply chain calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Annual planning to certification with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {SC_WORKFLOW.map((step, i) => (
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
                &ldquo;I manage 40+ vendor relationships and each one has different contract renewal dates, review schedules, and compliance requirements. Add ISO audits, import license renewals, and APICS recertification — the operational calendar was a full-time job to maintain in a spreadsheet. Momenties consolidates everything and the 90-day alerts have eliminated every last-minute renewal scramble.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">P</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Patrick O., CSCP</div>
                  <div className="text-xs text-muted-foreground">Director of supply chain, manufacturing company</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What Momenties tracks</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every supply chain deadline on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'APICS PDUs by certification — 5-year cycle',
                'CSCP / CPIM / CLTD recertification deadlines',
                'Vendor contract renewal dates',
                'ISO and regulatory audit schedules',
                'Import/export license renewals',
                'Quarterly supplier business reviews',
                'Cross-functional project milestones',
                'APICS chapter and national events',
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
        title="Compliance current. Vendors managed. Certification on track."
        subtitle="APICS PDU tracking, vendor contract management, and supply chain analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Operations analytics', href: '/features/analytics' }}
      />
    </>
  )
}
