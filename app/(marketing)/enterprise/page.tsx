import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Building2, Shield, Key, Users, Headphones, FileCheck, Check, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Enterprise — Calendro for your organization',
  description: 'SSO, audit logs, dedicated support, custom SLAs, and DPA. Calendro Enterprise is built for teams that take scheduling seriously.',
  alternates: { canonical: '/enterprise' },
  openGraph: {
    title: 'Calendro for Enterprise',
    description: 'SSO, SCIM, audit logs, dedicated support.',
    url: '/enterprise',
  },
}

const FEATURES = [
  {
    icon: Key,
    title: 'Single Sign-On',
    desc: 'SAML 2.0 and OIDC with Okta, Azure AD, Google Workspace, Ping, and any IdP that speaks the standards.',
  },
  {
    icon: Users,
    title: 'SCIM provisioning',
    desc: 'Automatic user creation, updates, and deprovisioning. Never chase an offboarding ticket again.',
  },
  {
    icon: Shield,
    title: 'Audit logs',
    desc: 'Every action — logins, permissions changes, data access — streamed to your SIEM via webhook or SFTP.',
  },
  {
    icon: FileCheck,
    title: 'DPA & custom terms',
    desc: 'Signed DPA within 48 hours. MSAs negotiable. Custom redlines reviewed by our in-house counsel.',
  },
  {
    icon: Building2,
    title: 'Dedicated infrastructure',
    desc: 'Optional single-tenant deployment. EU / US data residency. VPC peering on request.',
  },
  {
    icon: Headphones,
    title: 'Dedicated success manager',
    desc: 'A named human at Calendro. Monthly business reviews. A Slack connect channel that\'s actually staffed.',
  },
]

const BENEFITS = [
  'Unlimited users',
  'Unlimited calendar connections',
  'Unlimited AI parsing requests',
  'Custom retention policies',
  '99.99% uptime SLA with financial credits',
  'Priority support with 1-hour response SLA',
  '24/7 on-call for critical issues',
  'Quarterly security review meetings',
  'HIPAA BAA available',
  'SOC 2 Type II report (under NDA)',
  'Pen-test summary (under NDA)',
  'Private Slack Connect channel',
  'Early access to new features',
  'Custom onboarding & training',
]

export default function EnterprisePage() {
  return (
    <>
      <PageHero
        eyebrow="Calendro for Enterprise"
        title={
          <>
            Calendro, <em className="not-italic text-gold">tuned for your org</em>.
          </>
        }
        lede="The same quiet calendar you love — with the security, compliance, and support your IT team requires. Built for teams from 50 to 50,000."
        crumbs={[{ label: 'Enterprise' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            Request a demo
          </Link>
          <Link
            href="/security"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/30 transition-colors"
          >
            Security overview
          </Link>
        </div>
      </PageHero>

      {/* Social proof */}
      <section className="py-14 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70 mb-6">
            Trusted by forward-thinking teams
          </p>
          <div className="flex items-center justify-center gap-10 flex-wrap opacity-60">
            {['Meridian', 'Kindrid', 'North & Oak', 'Aperture', 'Tessera', 'Atelier'].map((n) => (
              <span key={n} className="font-display text-lg text-foreground/60 italic">
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              Enterprise capabilities
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Everything your IT team <br className="hidden md:block" />
              <em className="not-italic text-gold">actually asks for</em>.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 70}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center mb-5">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits list */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              What&apos;s included
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Every feature on every seat.
            </h2>
          </Reveal>
          <div className="rounded-2xl border border-border lux-card p-6 md:p-10">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {BENEFITS.map((b) => (
                <div key={b} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-gold mt-1 shrink-0" />
                  <span className="text-sm text-foreground/90">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display italic text-2xl md:text-3xl text-foreground leading-snug mb-6">
            &ldquo;We onboarded 400 employees in a weekend. Their IT team actually read our pen-test report and approved in 48 hours. I&apos;ve been in procurement for 12 years — this never happens.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/20 flex items-center justify-center text-xs font-mono text-gold">
              MW
            </div>
            <div className="text-left">
              <div className="text-sm text-foreground">Marcus Wolfe</div>
              <div className="text-xs text-muted-foreground font-mono">CTO · Kindrid Health · 1,200 seats</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & contact */}
      <section id="contact" className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border border-gold/30 bg-gradient-to-b from-gold/5 via-transparent to-transparent p-8 md:p-12">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
                  Custom pricing
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                  Let&apos;s talk about what you need.
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-lg">
                  Pricing starts at $15/seat/mo for teams of 50+. We offer volume discounts starting at 250 seats and multi-year agreements. Procurement-friendly.
                </p>
              </div>
              <Link
                href="mailto:sales@calendro.app"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors shrink-0"
              >
                Schedule a demo
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-gold/20 grid md:grid-cols-3 gap-6 text-center md:text-left">
              {[
                { label: 'Response time', value: '< 1 business day' },
                { label: 'Pilot period', value: '30 days, free' },
                { label: 'Implementation', value: '1-2 weeks' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                    {s.label}
                  </div>
                  <div className="font-display text-lg text-gold">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Bring Calendro to your whole company."
        subtitle="We'll handle the onboarding, the security review, and the training."
        primary={{ label: 'Contact sales', href: 'mailto:sales@calendro.app' }}
        secondary={{ label: 'Read about security', href: '/security' }}
      />
    </>
  )
}
