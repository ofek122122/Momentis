import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for IT Managers — Certification renewals, maintenance windows, and IT operations calendar',
  description:
    'IT managers manage ITIL, PMP, or vendor certification renewals, system maintenance windows, vendor contract expirations, license renewal deadlines, and project delivery timelines simultaneously. Momenties tracks CPD credits, surfaces renewal deadlines early, and manages the IT operations calendar.',
  alternates: { canonical: '/for/it-managers' },
  openGraph: {
    title: 'Momenties for IT Managers',
    description: 'Certification renewals, maintenance windows, and IT operations calendar management.',
    url: '/for/it-managers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'Certification and license renewal tracking',
    desc: 'Tag every professional development activity toward ITIL, PMP, CISSP, cloud vendor certifications, or other IT credentials. "AWS Solutions Architect renewal — december 15." "CISSP CPE — 120 credits per 3-year cycle." "PMP PDUs — 60 per 3-year cycle." All certification cycles tracked on one calendar.',
  },
  {
    icon: Clock,
    title: 'Maintenance window and license calendar',
    desc: '"Quarterly patch window — first sunday monthly, 2-4am." "Software license renewal — Microsoft EA, june 30." "Hardware end-of-support — server cluster A, september." "SSL certificate expiration — october 15." Every operational deadline on calendar with advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Project and initiative time analytics',
    desc: 'Tag every meeting and working session by initiative: infrastructure, security, projects, operations, vendor management. Analytics shows time per initiative. Where is IT management time actually going? Data for resource allocation and capacity planning conversations.',
  },
  {
    icon: Users,
    title: 'Vendor review and team meeting calendar',
    desc: '"Quarterly business review — Microsoft, cisco, cloud providers." "Monthly team sync — first tuesday." "Security review — bi-weekly." "Change advisory board — weekly thursday." Recurring IT operational meetings templated. Consistent cadence without manual scheduling.',
  },
]

const IT_WORKFLOW = [
  { time: 'Annual planning', action: 'All software license renewals, hardware end-of-support dates, SSL certificate expirations, vendor contract renewals, and certification deadlines loaded at year start. IT operations calendar visible before the first incident arrives.' },
  { time: 'Maintenance windows', action: '"Quarterly patch window — january 5, 2-4am." Added recurring. Change advisory board review scheduled the week before. Rollback plan review block added. Maintenance is a project, not an emergency.' },
  { time: 'License management', action: '"Microsoft EA renewal — june 30." 90-day alert added. True-up analysis block added 10 weeks prior. Budget approval scheduled 8 weeks prior. Negotiation and renewal completed before the expiration, not during a contract extension panic.' },
  { time: 'CPD / PDU credits', action: '"CompTIA CertMaster course — thursday 7pm, 2 hours, ITIL CPD." Tagged and added. Certification cycle counter updates. No scramble to find 120 CISSP CPE credits in the final year of the 3-year cycle.' },
  { time: 'Cert audit', action: 'Analytics: certification progress per credential. Which certifications are expiring in the next 12 months? CPE/PDU credits on track per cycle? Time to plan professional development activities to close certification gaps.' },
]

export default function ForITManagersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for IT Managers"
        title={
          <>
            No expired licenses.
            <br />
            <em className="not-italic text-gold">Every cert renewed on time.</em>
          </>
        }
        lede="IT managers manage software license renewals, hardware end-of-support dates, SSL certificate expirations, vendor contracts, certification renewal cycles, and maintenance windows simultaneously. Momenties tracks CPE and PDU credits, surfaces every renewal deadline 90 days early, and manages the IT operations calendar in one view."
        crumbs={[{ label: 'For IT Managers' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · No system data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How IT managers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for IT operations management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">IT operations calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Planned operations, not reactive firefighting.</h2>
          </Reveal>
          <div className="space-y-3">
            {IT_WORKFLOW.map((step, i) => (
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
                &ldquo;An SSL certificate expired on a production system last year because it wasn&apos;t in anyone&apos;s calendar. That outage cost us three hours. After that, I put every certificate expiration, license renewal, and hardware end-of-support date into Momenties. I now get 90-day alerts on everything. We&apos;ve had zero unplanned renewals since.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">G</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Greg M.</div>
                  <div className="text-xs text-muted-foreground">IT Manager, mid-size technology company</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every IT operations deadline on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Software license renewal dates',
                'SSL/TLS certificate expirations',
                'Hardware end-of-support dates',
                'Vendor contract renewal dates',
                'Certification CPE/PDU by cycle',
                'Quarterly maintenance windows',
                'Change advisory board schedule',
                'Cloud and vendor quarterly reviews',
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
        title="No expired licenses. No missed renewals. Operations planned."
        subtitle="IT license tracking, certification management, and operations calendar. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Operations analytics', href: '/features/analytics' }}
      />
    </>
  )
}
