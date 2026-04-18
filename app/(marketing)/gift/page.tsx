import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Gift, Clock, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gift Momenties Pro — Give the gift of time',
  description:
    'Give someone a Momenties Pro subscription. Available in 3-month, 6-month, and 12-month gift cards. Delivered instantly by email.',
  alternates: { canonical: '/gift' },
  openGraph: {
    title: 'Gift Momenties Pro',
    description: 'Give the gift of a quieter calendar.',
    url: '/gift',
    type: 'website',
  },
}

const GIFT_OPTIONS = [
  {
    months: 3,
    price: 36,
    pricePerMonth: 12,
    label: '3 months',
    note: 'Great for a try-it gift',
  },
  {
    months: 6,
    price: 60,
    pricePerMonth: 10,
    label: '6 months',
    popular: true,
    note: 'Most popular gift option',
  },
  {
    months: 12,
    price: 96,
    pricePerMonth: 8,
    label: '12 months',
    note: 'Best value — 2 months free',
  },
]

const WHAT_THEY_GET = [
  'Unlimited AI event parsing',
  'Apple Calendar 2-way sync',
  'Calendar analytics dashboard',
  'Premium themes (5 options)',
  'Smart time suggestions',
  'Shared calendars',
  'Custom event templates',
  'Focus mode with auto-DND',
  'Priority support',
]

const REVIEWS = [
  {
    quote: 'I gifted Momenties to my co-founder for her birthday. She uses it every day. Best $96 I\'ve spent.',
    name: 'James W.',
    role: 'CEO, Pebble',
    avatar: 'J',
  },
  {
    quote: 'My team sends this to each other as a "welcome to the team" gift. It\'s become a tradition.',
    name: 'Laleh F.',
    role: 'Engineering Manager',
    avatar: 'L',
  },
]

export default function GiftPage() {
  return (
    <>
      <PageHero
        eyebrow="Gift Momenties Pro"
        title={
          <>
            Give the gift of
            <br />
            <em className="not-italic text-gold">time back.</em>
          </>
        }
        lede="Momenties Pro delivers a calmer calendar to whoever receives it. Gift cards are delivered instantly by email and can be redeemed any time within 12 months."
        crumbs={[{ label: 'Gift' }]}
      />

      {/* Gift cards */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Choose a plan</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Pick a duration.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {GIFT_OPTIONS.map((opt, i) => (
              <Reveal key={opt.months} delay={i * 60}>
                <div className={`rounded-2xl border p-6 relative flex flex-col ${opt.popular ? 'border-gold/40 bg-gold/5' : 'border-border lux-card'}`}>
                  {opt.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold text-[#0c0c0f] text-[10px] font-mono uppercase tracking-wider font-bold">
                        <Star className="h-3 w-3" /> Most popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-4">
                    <Gift className="h-5 w-5 text-gold" />
                    <span className="text-sm font-medium text-foreground">{opt.label}</span>
                  </div>
                  <div className="mb-1">
                    <span className="font-display text-4xl font-bold text-foreground">${opt.price}</span>
                  </div>
                  <p className="text-xs font-mono text-muted-foreground mb-5">${opt.pricePerMonth}/month · {opt.note}</p>
                  <div className="mt-auto">
                    <Link
                      href="/login"
                      className={`w-full inline-flex items-center justify-center gap-2 h-10 rounded-full text-sm font-medium transition-all ${
                        opt.popular
                          ? 'bg-gold text-[#0c0c0f] hover:bg-gold/90 press'
                          : 'bg-white/5 text-foreground border border-border hover:bg-white/10'
                      }`}
                    >
                      Buy gift card <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="text-center text-xs text-muted-foreground mt-6">
              Gift cards are delivered instantly by email · Redeem any time within 12 months · 30-day refund if unused
            </p>
          </Reveal>
        </div>
      </section>

      {/* What they get */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Included</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Everything in Pro. All nine features.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-2">
            {WHAT_THEY_GET.map((item, i) => (
              <Reveal key={item} delay={i * 30}>
                <div className="flex items-center gap-3 rounded-xl border border-border/50 p-3.5">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                  <span className="text-sm text-foreground/90">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={WHAT_THEY_GET.length * 30 + 20}>
            <Link
              href="/pro"
              className="inline-flex items-center gap-1.5 mt-5 text-sm text-gold hover:text-gold/80 transition-colors"
            >
              See everything Pro includes <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How it works</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Three steps. Done in 60 seconds.
            </h2>
          </Reveal>
          <div className="space-y-4">
            {[
              { step: '01', title: 'Choose a plan and pay', desc: 'Select 3, 6, or 12 months. Pay securely via Stripe. Confirmation lands instantly.' },
              { step: '02', title: 'We send a gift email', desc: 'Enter their email (or yours, if you prefer to hand-deliver). The gift email includes a unique redemption code and a personal note if you add one.' },
              { step: '03', title: 'They redeem, we upgrade', desc: 'Recipient clicks the link, signs up or logs in, and their account upgrades instantly. No credit card required from them.' },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 60}>
                <div className="flex items-start gap-5 rounded-xl border border-border/50 p-5">
                  <div className="w-9 h-9 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center shrink-0">
                    <span className="font-mono text-xs text-gold/70">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-1">{s.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 60}>
                <div className="rounded-xl border border-border lux-card p-6 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[0, 1, 2, 3, 4].map((s) => <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />)}
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed flex-1 mb-4">&ldquo;{r.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-xs font-bold text-gold">{r.avatar}</div>
                    <div>
                      <div className="text-xs font-medium text-foreground">{r.name}</div>
                      <div className="text-[10px] text-muted-foreground">{r.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal className="mb-8">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Common questions.</h2>
          </Reveal>
          <div className="space-y-4">
            {[
              { q: 'Can I send the gift to myself?', a: 'Yes. Enter your own email and use the code when you\'re ready to upgrade.' },
              { q: 'When does the subscription start?', a: 'It starts the moment the recipient redeems the code, not when you purchase it.' },
              { q: 'What if they already have Pro?', a: 'The gift extends their current subscription rather than overlapping. They won\'t lose a day.' },
              { q: 'Can I get a refund?', a: 'Yes — if the code hasn\'t been redeemed, we offer a full refund within 30 days of purchase.' },
              { q: 'Do they need an account?', a: 'They\'ll be prompted to create one when they redeem. It takes about 90 seconds.' },
            ].map((faq, i) => (
              <Reveal key={faq.q} delay={i * 30}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-2">{faq.q}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="The best gift is time. Specifically, 18ms."
        subtitle="Give Momenties Pro — the AI calendar that gives it back."
        primary={{ label: 'Buy a gift card', href: '/login' }}
        secondary={{ label: 'See what Pro includes', href: '/pro' }}
      />
    </>
  )
}
