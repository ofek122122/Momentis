import type { Metadata } from 'next'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { ContactForm } from '@/components/marketing/ContactForm'
import { FAQPageJsonLd } from '@/components/marketing/StructuredData'
import { Mail, MapPin, Clock, MessageSquare, Shield, Briefcase, ChevronDown, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact — Get in touch',
  description: 'Reach out about support, sales, press, or say hello. We answer every email, usually within a few hours.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Calendro',
    description: 'We answer every email. Usually within a few hours.',
    url: '/contact',
  },
}

const CHANNELS = [
  { icon: MessageSquare, label: 'Support', value: 'help@calendro.app', desc: 'Questions, bugs, anything fussy.' },
  { icon: Briefcase, label: 'Sales', value: 'sales@calendro.app', desc: 'Team plans, Enterprise, volume licensing.' },
  { icon: Shield, label: 'Security', value: 'security@calendro.app', desc: 'Responsible disclosure & vulnerability reports.' },
  { icon: Mail, label: 'Press', value: 'press@calendro.app', desc: 'Media requests, interviews, quotes.' },
]

const FAQS = [
  {
    q: 'How quickly will I hear back?',
    a: 'Support questions: within 4 hours on weekdays, 24 hours on weekends. Sales: within 1 business day. Press: within 24 hours. Every email is answered by a human.',
  },
  {
    q: 'Do you offer live chat or phone support?',
    a: 'For Pro and Team users, yes — chat is inside the app. We offer scheduled video calls for Enterprise customers. Phone is intentionally the last thing we add; email is simply more humane.',
  },
  {
    q: 'I think I found a bug. What now?',
    a: 'Email help@calendro.app with a screenshot, your browser, and the exact text of what you typed. You\'ll get a personal reply from an engineer, not a ticket robot.',
  },
  {
    q: 'I want to suggest a feature — will you read it?',
    a: 'Yes. We read every suggestion. We also decline most of them, politely. That\'s how you keep calm software calm.',
  },
  {
    q: 'Can I speak with your security team?',
    a: 'Yes. security@calendro.app reaches our CTO and a senior engineer. We publish a responsible-disclosure policy at /security and have a small bounty program for serious findings.',
  },
  {
    q: 'Do you have an office I can visit?',
    a: 'We work remotely. Our legal address is a small studio in Brooklyn, but we don\'t accept drop-ins. If you want to meet, coffee in NY, London, or Tel Aviv can usually be arranged.',
  },
]

export default function ContactPage() {
  return (
    <>
      <FAQPageJsonLd items={FAQS} />
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us something.<br />
            <em className="not-italic text-gold">We&apos;ll write back.</em>
          </>
        }
        lede="We promise to read it. We promise the reply is human. And we promise your email will never be shared or sold — not to partners, not to anyone."
        crumbs={[{ label: 'Contact' }]}
      />

      {/* Channels */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CHANNELS.map((c, i) => (
              <Reveal key={c.label} delay={i * 80}>
                <a
                  href={`mailto:${c.value}`}
                  className="block rounded-xl border border-border lux-card p-6 h-full group"
                >
                  <c.icon className="h-5 w-5 text-gold mb-4" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    {c.label}
                  </p>
                  <div className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                    {c.value}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{c.desc}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-12">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">
              Write us directly.
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-lg">
              Short or long, angry or grateful, specific or half-formed — it all lands in the same inbox. We read it every morning with coffee.
            </p>
            <ContactForm />
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-2xl border border-border lux-card p-6 space-y-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-3">
                  Response time
                </p>
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-gold mt-0.5" />
                  <div className="text-sm text-foreground/90 leading-relaxed">
                    <span className="text-gold font-medium">&lt;4h</span> weekdays ·{' '}
                    <span className="text-gold font-medium">&lt;24h</span> weekends.<br />
                    <span className="text-xs text-muted-foreground">Every email answered by a human.</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-3">Address</p>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-gold mt-0.5" />
                  <div className="text-sm text-foreground/90 leading-relaxed">
                    68 Berry St, Studio 4<br />
                    Brooklyn, NY 11211<br />
                    <span className="text-xs text-muted-foreground">No drop-ins, please.</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-3">Phone</p>
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-gold mt-0.5" />
                  <div className="text-sm text-foreground/90 leading-relaxed">
                    +1 (347) 555-0186<br />
                    <span className="text-xs text-muted-foreground">Enterprise only.</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border/60 p-4 bg-white/[0.02]">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Looking for something self-serve? Try the{' '}
                  <a href="/help" className="text-gold hover:underline">Help Center</a>. Most answers are there within a click.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-0 border-b border-border">
        <div className="relative h-72 md:h-96 overflow-hidden bg-[#0a0a0d]">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(197,163,92,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(197,163,92,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-70"
            style={{
              background:
                'radial-gradient(30% 40% at 50% 50%, rgba(197,163,92,0.12) 0%, transparent 60%)',
            }}
          />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/20 border border-gold/30 mb-3 gold-pulse">
                <MapPin className="h-5 w-5 text-gold" />
              </div>
              <p className="font-display text-lg text-foreground">Brooklyn, New York</p>
              <p className="text-xs font-mono text-muted-foreground mt-1">40.7172° N · 73.9577° W</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              Common questions
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Before you write.
            </h2>
          </Reveal>
          <div className="space-y-2">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <details className="group rounded-xl border border-border lux-card overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none">
                    <span className="text-sm font-medium text-foreground">{f.q}</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180 shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {f.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
