import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Leaf, Users, Globe, Heart, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Impact — What Momenties stands for beyond software',
  description:
    'How we think about environmental responsibility, team equity, and the social value of software that respects people\'s time.',
  alternates: { canonical: '/impact' },
  openGraph: {
    title: 'Momenties Impact',
    description: 'Environmental, social, and what we actually believe.',
    url: '/impact',
    type: 'website',
  },
}

const COMMITMENTS = [
  {
    icon: Leaf,
    title: 'Carbon-neutral infrastructure',
    body: 'Our hosting runs on Vercel (100% renewable energy) and Supabase (AWS eu-west-1, powered by renewable sources per AWS\'s 2025 sustainability report). We don\'t offset; we\'ve chosen infrastructure that doesn\'t need to.',
    stat: '0 kg',
    statLabel: 'Net carbon from infrastructure',
  },
  {
    icon: Users,
    title: 'Equitable team',
    body: 'Same base salary for equivalent roles, regardless of background. No salary negotiation — we publish ranges internally and externally. We offer equity to every full-time employee from day one, using the same strike price formula.',
    stat: '14',
    statLabel: 'Full-time people, across 7 countries',
  },
  {
    icon: Globe,
    title: 'Free for students, globally',
    body: 'Any student anywhere in the world gets Momenties Pro free with a valid university email. No country restrictions, no application process. We believe good scheduling tools should be available to students in Nairobi as much as students in Cambridge.',
    stat: '4,200+',
    statLabel: 'Active student accounts (free)',
  },
  {
    icon: Heart,
    title: 'Calm software as social good',
    body: 'We believe software designed to respect attention is, quietly, a social good. Anxious interfaces, notification abuse, and infinite scroll are not neutral — they have real costs to people\'s wellbeing. We make a different choice.',
    stat: '∞',
    statLabel: 'Hours of attention we don\'t steal',
  },
]

const PLEDGES = [
  'We will never sell user data. This is constitutional, not policy — changing it would require dissolving the company.',
  'We will maintain a free tier that\'s genuinely useful, not a lead-capture funnel.',
  'We will never introduce dark patterns: no confusing cancel flows, no pre-checked upgrade boxes, no forced continuity.',
  'We will publish our carbon footprint annually, even if the number embarrasses us.',
  'We will pay our team equitably and publish our compensation philosophy publicly.',
  'We will not grow headcount beyond what we need to serve our users well. Staying small is a choice we\'re proud of.',
]

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title={
          <>
            What we stand for
            <br />
            <em className="not-italic text-gold">beyond the software.</em>
          </>
        }
        lede="We make a calendar. But the choices we make about infrastructure, team equity, pricing, and product design have real consequences. Here's how we think about them."
        crumbs={[{ label: 'Impact' }]}
      />

      {/* Commitments */}
      <section className="py-24 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMMITMENTS.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 60}>
                <div className="rounded-2xl border border-border lux-card p-7 h-full">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/10 flex items-center justify-center shrink-0">
                      <c.icon className="h-5 w-5 text-gold" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground pt-1">{c.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.body}</p>
                  <div className="pt-4 border-t border-border/50">
                    <div className="font-display text-2xl font-bold text-gold">{c.stat}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 mt-1">{c.statLabel}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our pledges */}
      <section className="py-24 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Our pledges</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
              Six things we commit to publicly.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-lg leading-relaxed">
              These aren&apos;t marketing claims. They&apos;re decisions we&apos;ve made and written down so that we can be held to them.
            </p>
          </Reveal>

          <div className="space-y-4">
            {PLEDGES.map((p, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-5">
                  <div className="font-mono text-[11px] text-gold/40 w-6 shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</div>
                  <p className="text-sm text-foreground/90 leading-relaxed">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Small team, big choices */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">Small on purpose</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-5">
              14 people. Profitable. No urgency to grow.
            </h2>
            <div className="space-y-5 text-[15px] leading-[1.78] text-foreground/85 font-light">
              <p>
                We are 14 people. This is not a staging post on the way to 140 people — it&apos;s a deliberate choice. A small team makes different software. It moves carefully. It has opinions. It doesn&apos;t ship features to fill a roadmap or grow headcount to hit a hiring milestone.
              </p>
              <p>
                We are profitable on a cash-flow basis as of Q1 2026. We didn&apos;t announce this loudly because we don&apos;t think profitability is something you need to be loud about. It&apos;s just responsible. It means we can make decisions on a 10-year time horizon instead of a quarterly one.
              </p>
              <p>
                We mention this on our impact page because we think the size and financial health of the company behind your software is a real consideration. Small, profitable, and not in a hurry is a very different situation from &ldquo;growing fast and burning to stay alive.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Links */}
      <section className="py-12 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap gap-5">
              {[
                { label: 'Open metrics', href: '/open' },
                { label: 'About the team', href: '/about' },
                { label: 'Manifesto', href: '/manifesto' },
                { label: 'Careers', href: '/careers' },
                { label: 'Privacy policy', href: '/privacy' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors"
                >
                  {l.label} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Software that respects you."
        subtitle="Your calendar, your data, your time."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'About us', href: '/about' }}
      />
    </>
  )
}
