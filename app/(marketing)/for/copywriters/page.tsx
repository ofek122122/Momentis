import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, BarChart3, Zap, Shield, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Copywriters — Deadline tracking, deep writing time, and client project analytics',
  description:
    'Copywriters juggle multiple client deadlines, revision rounds, calls, and deep writing sessions simultaneously. Momenties blocks writing time, tracks deadlines per project, and shows time per client so you know what you\'re actually earning.',
  alternates: { canonical: '/for/copywriters' },
  openGraph: {
    title: 'Momenties for Copywriters',
    description: 'Deadline tracking, writing blocks, and client time analytics for copywriters.',
    url: '/for/copywriters',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'Writing blocks that actually hold',
    desc: 'Deep writing requires uninterrupted time. Block 2-3 hour writing sessions before client calls book the day. "Writing block - homepage copy, tuesday 9-11am." The block is on the calendar before the brief arrives.',
  },
  {
    icon: Clock,
    title: 'Deadline tracking per project',
    desc: '"First draft due - Acme campaign, thursday." "Revisions due - Notion landing page, friday 5pm." "Final copy delivery - TechCo email series, monday." Every deadline visible. Nothing slips through.',
  },
  {
    icon: BarChart3,
    title: 'Time per client reveals true rate',
    desc: 'Tag every writing block, call, and revision round by client. Analytics shows hours per project. Compare to invoice. That "quick" landing page that turned into 12 hours? Now you see it — and price the next one right.',
  },
  {
    icon: Zap,
    title: 'Voice capture from anywhere',
    desc: '"Add revision call with Marcus, wednesday 2pm 30 mins." Voice-added while reviewing the brief. On calendar before the reply is sent. Never schedule from email again.',
  },
]

const COPYWRITER_WORKFLOW = [
  { time: 'Project kick-off', action: '"Discovery call - Brand X, tuesday 10am 60 mins." Brief review block added. First draft deadline added 7 days out. Revision round placeholder added 5 days after that.' },
  { time: 'Writing days', action: '9am-noon blocked as deep writing. No calls, no Slack. Calendar signals unavailability. The client knows — and respects it — because it\'s on the shared calendar.' },
  { time: 'Revision round', action: '"Revision notes call - Brand X, thursday 3pm 45 mins." "Revision delivery - Brand X, friday noon." Both on calendar from the moment the draft ships.' },
  { time: 'Final delivery', action: '"Final copy delivery - Brand X, monday 9am." Block the hour before for final review. Delivery lands before the client opens their laptop.' },
  { time: 'Monthly review', action: 'Analytics: hours per client, hours per project type, writing time vs. call time. Which clients are most efficient? Which projects are eating margin?' },
]

export default function ForCopywritersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Copywriters"
        title={
          <>
            Deadlines met.
            <br />
            <em className="not-italic text-gold">Writing time protected.</em>
          </>
        }
        lede="Copywriters balance multiple client projects, revision rounds, strategy calls, and deep writing sessions — all simultaneously. Momenties blocks distraction-free writing time, tracks every deadline per project, and shows where your hours actually go so you can price and manage work accurately."
        crumbs={[{ label: 'For Copywriters' }]}
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
            Client analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No client data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How copywriters use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for freelance copy.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Copywriter project rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From brief to delivery with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {COPYWRITER_WORKFLOW.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-28 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.time}</span>
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
                &ldquo;I was billing flat project rates and wondering why I was always exhausted. Analytics showed me I was spending 40% of project time on revision calls I wasn&apos;t billing. I restructured my contracts with clearer revision limits and a call fee. Revenue went up 30% without taking more work.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">C</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Claire M.</div>
                  <div className="text-xs text-muted-foreground">Freelance copywriter, B2B SaaS, 8+ years</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What copywriters track</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Your copy business in analytics.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Hours per client per month',
                'Writing time vs. call time ratio',
                'Revision rounds per project',
                'Time per content type (email, landing page, ads)',
                'Deadline adherence trend',
                'Busiest days and energy windows',
                'Active projects and pipeline',
                'Effective hourly rate by client',
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
        title="Deadlines tracked. Writing time protected. Rates justified."
        subtitle="Project deadline management, writing block scheduling, and client time analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Client analytics', href: '/features/analytics' }}
      />
    </>
  )
}
