import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowUpRight, Quote } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customers — Stories from people who use Calendro',
  description: 'Long-form case studies from designers, doctors, parents, and founders — all using Calendro to run quieter days.',
  alternates: { canonical: '/customers' },
  openGraph: {
    title: 'Calendro Customer Stories',
    description: 'Real stories from people who run their days with Calendro.',
    url: '/customers',
  },
}

const CASES = [
  {
    company: 'Kindrid Health',
    industry: 'Healthtech · 1,200 employees',
    person: 'Marcus Wolfe, CTO',
    initials: 'MW',
    tagline: 'Replaced three scheduling tools in one weekend.',
    quote:
      'We onboarded 400 employees in a weekend. Their IT team actually read our pen-test report and approved in 48 hours. I\'ve been in procurement for 12 years — this never happens.',
    metrics: [
      { value: '48h', label: 'Security review' },
      { value: '3', label: 'Tools replaced' },
      { value: '27%', label: 'Fewer meetings' },
    ],
    body:
      'Kindrid was running Google Calendar, Calendly, and a homegrown scheduling tool. After a pilot with 50 of their engineering team, they rolled Calendro out company-wide. Within three months, their total meeting load dropped 27% — thanks in part to Calendro\'s meeting cost indicator, which showed teams the aggregate hourly cost of each recurring meeting.',
  },
  {
    company: 'Lanternwork',
    industry: 'Design studio · 14 people',
    person: 'Yuki Tanaka, Founder',
    initials: 'YT',
    tagline: 'The first calendar that feels like our studio.',
    quote:
      'The voice input is my favorite feature. I dump my week out loud on my walk home and by the time I\'m at my door my schedule is set. My co-founder uses it the same way. We just... don\'t schedule anymore. We talk, and it happens.',
    metrics: [
      { value: '11 min', label: 'Saved per day' },
      { value: '14/14', label: 'Active users' },
      { value: '5', label: 'Sync sources' },
    ],
    body:
      'A 14-person design studio in Kyoto switched from Google Calendar alone to Calendro plus Google. Their biggest win: voice input. In a studio where a lot of work is done on the move — site visits, client walkthroughs — the ability to speak a week\'s worth of events and have them land on the calendar transformed how they plan.',
  },
  {
    company: 'Meridian VC',
    industry: 'Venture capital · 40 people',
    person: 'Daniel Reyes, Partner',
    initials: 'DR',
    tagline: 'Board meetings that actually happen on time.',
    quote:
      'I snap a photo of my kids\' school calendar and every conference, every recital, every half-day lands on my phone. It feels like cheating. My personal calendar hasn\'t been this tidy in eight years.',
    metrics: [
      { value: '~40', label: 'Events / week' },
      { value: '2 min', label: 'Per photo parsed' },
      { value: '0', label: 'Missed PTA meetings' },
    ],
    body:
      'Daniel is a partner at Meridian VC and the father of three school-age kids. His calendar is an all-day tetris game of board meetings, portfolio reviews, and recitals. Before Calendro, his executive assistant manually entered events from printed school schedules. After Calendro, he snaps a photo and Gemini Vision does the work — about 40 events a week, entered in seconds.',
  },
]

export default function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer stories"
        title={
          <>
            Real people, <em className="not-italic text-gold">quieter days</em>.
          </>
        }
        lede="We asked three Calendro users — an enterprise CTO, a studio founder, and a VC partner — to tell us how their week actually changed. Here's what they said."
        crumbs={[{ label: 'Customers' }]}
      />

      {/* Stats strip */}
      <section className="py-14 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: '4.9', l: 'Avg rating / 5' },
            { v: '96%', l: 'Would recommend' },
            { v: '11 min', l: 'Saved per day' },
            { v: '27%', l: 'Fewer meetings (avg)' },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl md:text-4xl font-bold shimmer-text">{s.v}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section className="border-b border-border">
        {CASES.map((c, i) => (
          <div
            key={c.company}
            className={`py-20 px-5 md:px-8 border-b border-border last:border-b-0 ${i % 2 === 1 ? 'bg-white/[0.015]' : ''}`}
          >
            <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-start">
              <Reveal>
                <div className="sticky top-24">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70 mb-3">
                    Case study · 0{i + 1}
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">
                    {c.company}
                  </h2>
                  <p className="text-xs font-mono text-muted-foreground mb-6">{c.industry}</p>
                  <p className="text-lg text-gold italic">{c.tagline}</p>
                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="rounded-lg border border-border bg-white/[0.02] px-3 py-3 text-center">
                        <div className="font-display text-xl font-bold text-foreground">{m.value}</div>
                        <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="rounded-2xl border border-border lux-card p-7 md:p-10">
                  <Quote className="h-6 w-6 text-gold/60 mb-5" />
                  <blockquote className="font-display italic text-xl md:text-2xl text-foreground leading-snug">
                    &ldquo;{c.quote}&rdquo;
                  </blockquote>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/20 flex items-center justify-center text-xs font-mono text-gold">
                      {c.initials}
                    </div>
                    <div>
                      <div className="text-sm text-foreground font-medium">{c.person}</div>
                      <div className="text-xs font-mono text-muted-foreground">{c.company}</div>
                    </div>
                  </div>
                  <div className="hairline my-8" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                  <div className="mt-6">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors"
                    >
                      Read the full story <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </section>

      {/* Logos */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70 text-center mb-8">
            And many more — small teams, big teams, and just people
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 opacity-60">
            {['Stratify', 'Aperture', 'Tessera', 'North & Oak', 'Helix Labs', 'Orbit', 'Caldera', 'Parallel', 'Mariner', 'Atelier', 'Greyline', 'Aurora'].map((n) => (
              <span key={n} className="font-display italic text-base text-center text-foreground/60">
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Your story next?"
        subtitle="We're always looking for thoughtful case studies. If Calendro has changed how your week runs, we'd love to hear."
        primary={{ label: 'Share your story', href: '/contact' }}
        secondary={{ label: 'Start using Calendro', href: '/login' }}
      />
    </>
  )
}
