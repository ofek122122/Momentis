import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, DollarSign, Zap, Globe, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Freelancers — Track client time without friction',
  description:
    'Freelancers need a calendar that\'s fast, flexible, and shows where their time actually goes. Momenties adds AI input, client-time analytics, and Apple Calendar sync.',
  alternates: { canonical: '/for/freelancers' },
  openGraph: {
    title: 'Momenties for Freelancers',
    description: 'Add clients, track time, protect focus. AI-powered.',
    url: '/for/freelancers',
    type: 'website',
  },
}

const PAINS = [
  {
    icon: Clock,
    problem: 'Logging client hours takes as long as the work',
    fix: 'Type "3 hours of client work for ACME" and it\'s a calendar block. Analytics shows total ACME hours this month automatically.',
  },
  {
    icon: DollarSign,
    problem: 'You forget to block time for "invisible" work',
    fix: 'Smart scheduling finds gaps in your week and suggests slots for admin, invoicing, and email time you never block but always do.',
  },
  {
    icon: Globe,
    problem: 'Clients live in different timezones — scheduling is chaos',
    fix: 'Scheduling links (Q3 2026) let clients book based on your real availability. No timezone math. No back-and-forth.',
  },
  {
    icon: Zap,
    problem: 'Copying events between Google and Apple Calendar',
    fix: 'Pro plan syncs both calendars bidirectionally. One event in either place, one source of truth.',
  },
]

const WORKFLOW = [
  { time: 'Morning', action: 'Read the Daily Brief. See what client commitments are today and what has buffer.' },
  { time: 'Before client call', action: 'Voice-add any prep tasks: "30 min prep for ACME call thursday". Done in 3 seconds.' },
  { time: 'After call', action: 'Snap a photo of your notes or whiteboard. Action items go straight to calendar.' },
  { time: 'End of week', action: 'Open analytics. Total hours per client. Compare against your estimate. Invoice accurately.' },
  { time: 'Monthly', action: 'See trend: are you underbilling? Are any clients taking 30% of your time for 15% of revenue?' },
]

export default function ForFreelancersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Freelancers"
        title={
          <>
            Your time is
            <br />
            <em className="not-italic text-gold">your inventory.</em>
          </>
        }
        lede="Freelancers who track time accurately invoice more accurately. Momenties makes every hour visible without making you spend time tracking. AI input, client analytics, and automatic sync."
        crumbs={[{ label: 'For Freelancers' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            See pricing
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever plan available · Pro from $12/month</p>
      </PageHero>

      {/* Pain points */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What we fix</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Four freelancer calendar problems.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {PAINS.map((item, i) => (
              <Reveal key={item.problem} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <item.icon className="h-4 w-4 text-gold" />
                  </div>
                  <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-2">Problem</p>
                  <p className="text-sm text-muted-foreground mb-3">{item.problem}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/90 leading-relaxed">{item.fix}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Typical week */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              What a Momenties freelance week looks like.
            </h2>
          </Reveal>
          <div className="space-y-3">
            {WORKFLOW.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-20 shrink-0 pt-0.5 uppercase tracking-wide">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;Analytics showed me I was billing for 80% of the time I was actually spending on a client. I raised my rate for them the next month. They didn&apos;t blink.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">James O.</div>
                  <div className="text-xs text-muted-foreground">Product designer, freelance 4 years</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Your clients are getting your best hours. Know which ones."
        subtitle="Analytics, AI input, and Apple sync — all in the Pro trial."
        primary={{ label: 'Start free trial', href: '/login' }}
        secondary={{ label: 'Compare plans', href: '/pricing' }}
      />
    </>
  )
}
