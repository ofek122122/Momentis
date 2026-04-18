import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { NewsletterForm } from '@/components/marketing/NewsletterForm'
import {
  Users, Calendar, Link2, Bell, Shield, Zap,
  CheckCircle2, ArrowUpRight, Star,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Teams — Shared calendars that actually work',
  description:
    'Shared calendars, meeting scheduling, availability overlays, and smart suggestions for teams of 2–50. No IT setup. No admin overhead.',
  alternates: { canonical: '/teams' },
  openGraph: {
    title: 'Momenties for Teams',
    description: 'Shared calendars and AI scheduling for small teams.',
    url: '/teams',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momenties for Teams',
    description: 'Scheduling that works for the whole team, not just you.',
  },
}

const FEATURES = [
  {
    icon: Calendar,
    title: 'Shared team calendars',
    desc: 'One calendar everyone can see. Color-coded by person. Overlay any combination. See who\'s heads-down, who\'s in meetings, who\'s free.',
  },
  {
    icon: Users,
    title: 'Availability finder',
    desc: 'Type "schedule a 30-minute sync with the product team this week." We find the first slot where everyone is free — in one step.',
  },
  {
    icon: Link2,
    title: 'Booking links',
    desc: 'Each team member gets a /book link. No Calendly account needed. Respondents book into real calendar slots — no double-booking.',
  },
  {
    icon: Zap,
    title: 'Instant meeting rooms',
    desc: 'Say "quick call with Iris" — we generate a Zoom link and add it to both calendars, no copy-paste required.',
  },
  {
    icon: Bell,
    title: 'Team-wide reminders',
    desc: 'Send one reminder to all attendees at once. Travel-time aware. Escalates to Slack DMs if no acknowledgement.',
  },
  {
    icon: Shield,
    title: 'Private events, always',
    desc: 'Personal events show as "busy" to teammates — not the title, not the notes. You decide what they can see.',
  },
]

const PLANS = [
  {
    name: 'Pro',
    price: '12',
    period: 'per seat / month',
    desc: 'Best for individuals and small freelance teams.',
    cta: 'Start free trial',
    href: '/pricing',
    features: [
      'Unlimited calendars',
      'Google + Apple Calendar sync',
      'Voice and photo add',
      'AI parsing (full)',
      'Booking link',
      '1 shared team calendar',
    ],
    highlight: false,
  },
  {
    name: 'Team',
    price: '19',
    period: 'per seat / month',
    desc: 'Everything in Pro, built for coordination.',
    cta: 'Start free trial',
    href: '/pricing',
    features: [
      'Everything in Pro',
      'Unlimited shared calendars',
      'Availability finder',
      'Team reminders',
      'Meeting room auto-add',
      'Admin seat management',
      'Priority support',
    ],
    highlight: true,
    badge: 'Most popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'annual contract',
    desc: 'For orgs with compliance and SSO requirements.',
    cta: 'Talk to sales',
    href: '/enterprise',
    features: [
      'Everything in Team',
      'SSO / SAML 2.0',
      'Custom data retention',
      'Audit logs',
      'SLA guarantee',
      'Dedicated CSM',
    ],
    highlight: false,
  },
]

const TESTIMONIALS = [
  {
    quote: 'We replaced Calendly, Doodle, and a shared Google Calendar with Momenties. Four tools → one.',
    author: 'Marcus Webb',
    role: 'CTO, Laika Studio',
    avatar: 'M',
  },
  {
    quote: 'The availability finder alone saved our chief of staff an hour a day. It\'s absurd how hard this was before.',
    author: 'Priya Mehta',
    role: 'Head of Operations, Seedcamp portfolio co.',
    avatar: 'P',
  },
  {
    quote: 'Our 6-person engineering team uses it. Every stand-up, sprint review, and 1:1 is in there. It just works.',
    author: 'Lena Wölk',
    role: 'Engineering Manager, Finanzguru',
    avatar: 'L',
  },
]

const TEAM_SIZES = [
  { size: '2–5', use: 'Founders & early-stage startups', detail: 'Shared calendar for co-founders, investors calls, advisor meetings.' },
  { size: '6–15', use: 'Small product teams', detail: 'Sprint ceremonies, 1:1s, design reviews — with availability built in.' },
  { size: '16–50', use: 'Growing companies', detail: 'Department calendars, cross-team syncs, company-wide events.' },
  { size: '50+', use: 'See Enterprise', detail: 'SSO, SAML, audit logs, dedicated support.', link: '/enterprise' },
]

export default function TeamsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Teams"
        title={
          <>
            Scheduling that works for
            <br />
            <em className="not-italic text-gold">the whole team.</em>
          </>
        }
        lede="Shared calendars, availability overlays, booking links, and AI-powered meeting scheduling — for teams of 2 to 50. No IT setup, no admin overhead, no Calendly."
        crumbs={[{ label: 'Teams' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press"
          >
            Start free trial
          </Link>
          <Link
            href="/enterprise"
            className="inline-flex items-center gap-1.5 h-10 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Enterprise <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </PageHero>

      {/* Features */}
      <section className="py-24 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Team features</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Built for how teams actually schedule.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 50}>
                <div className="rounded-xl border border-border lux-card p-5 h-full">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1.5">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Availability demo mockup */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">Availability finder</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
                Find a slot for the whole team — in one sentence.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                No more reply-all threads. No more Doodle polls. Type who you need and when, and get back a single suggested time that works for everyone.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Works across time zones automatically',
                  'Respects focus blocks and working hours',
                  'Suggests travel-time buffers when needed',
                  'One-click to confirm and send invites',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/85">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={80}>
              {/* Mockup */}
              <div className="rounded-2xl border border-border overflow-hidden shadow-xl shadow-black/30">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[#0f0f14]">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground ml-1">Availability finder</span>
                </div>
                <div className="bg-[#080810] p-5">
                  {/* Input */}
                  <div className="rounded-xl border border-gold/20 bg-gold/5 px-4 py-3 mb-5">
                    <p className="font-mono text-xs text-foreground/80">
                      &ldquo;30-min sprint review with Iris, Marcus, and Priya this week&rdquo;
                    </p>
                  </div>
                  {/* Team calendars */}
                  <div className="space-y-2 mb-5">
                    {[
                      { name: 'You', free: ['09–11', '14–16', '17–18'], color: 'bg-gold/20 border-gold/20' },
                      { name: 'Iris', free: ['10–12', '15–17'], color: 'bg-violet-500/20 border-violet-500/20' },
                      { name: 'Marcus', free: ['09–10', '14–17'], color: 'bg-sky-500/20 border-sky-500/20' },
                      { name: 'Priya', free: ['10–13', '16–18'], color: 'bg-emerald-500/20 border-emerald-500/20' },
                    ].map((p) => (
                      <div key={p.name} className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-muted-foreground w-14 text-right">{p.name}</span>
                        <div className="flex-1 h-6 rounded-md border bg-white/[0.02] overflow-hidden relative flex">
                          {p.free.map((slot) => {
                            const [start] = slot.split('–').map(Number)
                            const width = 12
                            const left = ((start - 8) / 12) * 100
                            return (
                              <div
                                key={slot}
                                className={`absolute top-0 h-full rounded-sm border ${p.color}`}
                                style={{ left: `${left}%`, width: `${width}%` }}
                              />
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Suggestion */}
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-4 py-3 flex items-center justify-between gap-4">
                    <div>
                      <div className="font-mono text-[10px] text-emerald-400/80 mb-0.5">Best slot found</div>
                      <div className="text-sm font-medium text-foreground">Thursday · 10:00 – 10:30</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">Everyone free · No conflicts</div>
                    </div>
                    <button className="shrink-0 h-8 px-4 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team size guide */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Who it&apos;s for</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Right-sized for your team.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TEAM_SIZES.map((t, i) => (
              <Reveal key={t.size} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xl font-bold text-gold">{t.size}</span>
                    <span className="text-sm font-medium text-foreground">{t.use}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.detail}</p>
                  {t.link && (
                    <Link
                      href={t.link}
                      className="inline-flex items-center gap-1 mt-3 text-xs text-gold hover:text-gold/80 transition-colors"
                    >
                      Learn more <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">From teams</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              What teams say.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={i * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed flex-1 mb-5">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-xs font-bold text-gold">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-foreground">{t.author}</div>
                      <div className="text-[10px] text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-24 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pricing</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Simple team pricing.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 60}>
                <div className={`rounded-2xl border p-6 h-full flex flex-col ${plan.highlight ? 'border-gold/30 bg-gold/5' : 'border-border lux-card'}`}>
                  {plan.badge && (
                    <div className="mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-gold/20 text-gold border border-gold/30">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mt-3 mb-1">
                    {plan.price === 'Custom' ? (
                      <span className="font-display text-3xl font-bold text-foreground">Custom</span>
                    ) : (
                      <>
                        <span className="font-display text-4xl font-bold text-foreground">${plan.price}</span>
                        <span className="text-xs text-muted-foreground">{plan.period}</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-5">{plan.desc}</p>
                  <ul className="space-y-2 mb-7 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/85">
                        <CheckCircle2 className={`h-4 w-4 shrink-0 ${plan.highlight ? 'text-gold' : 'text-muted-foreground'}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.href}
                    className={`inline-flex items-center justify-center h-10 rounded-full text-sm font-medium transition-colors ${
                      plan.highlight
                        ? 'bg-gold text-[#0c0c0f] hover:bg-gold/90'
                        : 'border border-border hover:border-gold/30 text-foreground'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Your whole team, in one calendar."
        subtitle="14-day free trial. No credit card. Cancel any time."
        primary={{ label: 'Start team trial', href: '/pricing' }}
        secondary={{ label: 'See Enterprise', href: '/enterprise' }}
      />
    </>
  )
}
