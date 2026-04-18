import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Cybersecurity Professionals — CPE credits, cert renewals, and lab time protection',
  description:
    'Cybersecurity professionals manage CPE credit requirements across multiple certifications (CISSP, CEH, Security+, CISM), lab research time, incident response readiness, and continuing education deadlines. Momenties tracks CPE by certification, protects research time, and surfaces renewal deadlines early.',
  alternates: { canonical: '/for/cybersecurity-professionals' },
  openGraph: {
    title: 'Momenties for Cybersecurity Professionals',
    description: 'CPE tracking, cert renewals, and research time protection for security professionals.',
    url: '/for/cybersecurity-professionals',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CPE credits by certification',
    desc: 'Tag every CPE activity by certification: CISSP, CEH, CISM, CISA, Security+, OSCP. Analytics shows CPE hours per cert against requirement. "CISSP: 87/120 CPE — on pace for renewal." No end-of-cycle scramble.',
  },
  {
    icon: Clock,
    title: 'Cert renewal deadlines visible early',
    desc: '"CISSP renewal — november 30." "CEH renewal — august 15." "Security+ renewal — march 1." All certification renewal deadlines on calendar 90 days before they\'re urgent. No lapses, no last-minute test cramming.',
  },
  {
    icon: BarChart3,
    title: 'Lab and research time protected',
    desc: 'Security research requires long uninterrupted blocks. Tag lab sessions, CTF participation, and research deep dives. Analytics shows actual research time per week. Protect what produces expertise.',
  },
  {
    icon: Users,
    title: 'Conference and training scheduling',
    desc: '"DEF CON — las vegas, august 8-11." "Black Hat briefings, august 6-7." "SANS SEC504 webcast, thursdays 7pm." All training events and conferences on calendar. CPE tagged at the event level.',
  },
]

const SECURITY_WORKFLOW = [
  { time: 'Annual planning', action: 'Audit all cert renewals for the year. Block conference travel (DEF CON, Black Hat, RSA). Add CPE deadlines for each certification. Calculate CPE needed per month to stay on pace.' },
  { time: 'Weekly CPE', action: '"ISC2 webinar, wednesday 12pm 1 hour, CISSP CPE." Tagged and added. CPE counter updates. Lunch-and-learns, dark reading, webinars — all count if tagged correctly.' },
  { time: 'Lab sessions', action: '"Malware analysis lab — tuesday 7-9pm." "CTF session — hackthebox, friday evening." Research time blocked and protected. Not "I\'ll get to it." On the calendar, done.' },
  { time: 'Training courses', action: '"SANS SEC401 — week of july 14." Full week blocked. Out-of-office set. CPE for the course pre-tagged. Nothing gets scheduled into training week.' },
  { time: 'Renewal prep', action: '90 days before renewal: Daily Brief surfaces it. CPE audit: what\'s needed, what\'s done, what categories are short. Time to close gaps — not panic.' },
]

export default function ForCybersecurityProfessionalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Cybersecurity Professionals"
        title={
          <>
            Certs current.
            <br />
            <em className="not-italic text-gold">Research time protected.</em>
          </>
        }
        lede="Cybersecurity professionals manage CPE requirements across multiple certifications, lab research time, conference schedules, and renewal deadlines simultaneously. Momenties tracks CPE by certification, surfaces renewal deadlines 90 days early, and protects the research time that keeps skills sharp."
        crumbs={[{ label: 'For Cybersecurity Professionals' }]}
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
            CPE analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · GDPR-compliant · No sensitive data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How security professionals use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for security career management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Security professional calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Certs maintained and skills sharpened through the year.</h2>
          </Reveal>
          <div className="space-y-3">
            {SECURITY_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold CISSP, CISM, and CEH simultaneously. Tracking CPE for three different certs with different categories and renewal cycles in my head was unsustainable. Momenties lets me tag each CPE event to the cert it applies to. I can see at a glance where each one stands — and I&apos;ve never missed a renewal in two years.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">R</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Ryan O., CISSP, CISM, CEH</div>
                  <div className="text-xs text-muted-foreground">Senior security architect, enterprise</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Certifications supported</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">CPE tracking works across all major security certifications.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CISSP — 120 CPE per 3-year cycle',
                'CISM — 120 CPE per 3-year cycle',
                'CISA — 120 CPE per 3-year cycle',
                'CEH — 120 CPE per 3-year cycle',
                'Security+ — 50 CPE per 3-year cycle',
                'OSCP — active lab time and re-certification',
                'GCIH / GCIA / GREM — GIAC CPE requirements',
                'Custom certifications — any CPE tracking',
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
        title="CPE tracked. Certs current. Research time protected."
        subtitle="Multi-certification CPE analytics, renewal deadline tracking, and lab time scheduling. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CPE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
