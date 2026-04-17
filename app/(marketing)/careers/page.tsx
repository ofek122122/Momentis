import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { JOBS } from '@/lib/jobs'
import { ArrowUpRight, Coffee, Globe, Heart, Sparkles, BookOpen, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers — Help us build a quieter calendar',
  description: 'We\'re hiring thoughtful engineers, designers, and support humans. Fully remote. Generous PTO. Calm culture.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers at Calendro',
    description: 'Help us build a quieter calendar.',
    url: '/careers',
  },
}

const VALUES = [
  { icon: Heart, title: 'No hero mode', desc: 'We work 40 hours a week, usually fewer. We ship slowly because it\'s sustainable. No late-night Slack.' },
  { icon: Globe, title: 'Fully remote', desc: 'Seven time zones across four continents. We overlap two hours a day and trust the rest.' },
  { icon: Coffee, title: 'Async first', desc: 'Long-form writing beats meetings. Docs are first-class artifacts. We believe in the 4-hour block.' },
  { icon: BookOpen, title: 'Learning is work', desc: 'Two hours of every week is explicitly "read, tinker, wander." $2,000/yr learning budget.' },
  { icon: Home, title: 'Care for the whole person', desc: '12 weeks parental leave. $500/mo wellness. Quarterly therapy stipend. No performative hustle.' },
  { icon: Sparkles, title: 'Craft matters', desc: 'Design and engineering peer at the same bar. We\'d rather delay a month than ship something mediocre.' },
]

const ROLES = JOBS.map((j) => ({
  slug: j.slug,
  title: j.title,
  team: j.team,
  type: j.type,
  location: j.location,
  salary: j.salary,
  summary: j.summary,
  tags: j.tags.slice(0, 4),
}))

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build a <em className="not-italic text-gold">quieter</em> calendar with us.
          </>
        }
        lede="We're a small, distributed team of people who believe software should lower your heart rate, not raise it. If that sounds like your kind of work, read on."
        crumbs={[{ label: 'Careers' }]}
      >
        <Link
          href="#openings"
          className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
        >
          See open roles
        </Link>
      </PageHero>

      {/* Culture */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto space-y-6 text-[15px] leading-[1.75] text-foreground/85 font-light">
          <Reveal>
            <p className="font-display text-2xl md:text-3xl italic text-foreground leading-snug">
              &ldquo;We&apos;d rather ship nothing this month than ship something we don&apos;t believe in.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Calendro is a 14-person company. We intend to stay small — maybe 30 people at the outside,
              unless something surprises us. Small means craft. Small means context. Small means you
              know everyone&apos;s spouse&apos;s dog by name within your first quarter.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p>
              We&apos;re profitable. We&apos;re growing quietly. We answered your interview email this morning because we mean it. If you join, you&apos;ll own real surface area from week two.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values / perks */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              How we work
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              The culture, in six points.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 70}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center mb-5">
                    <v.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{v.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              Currently hiring
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Four roles, open now.
            </h2>
          </Reveal>
          <div className="space-y-3">
            {ROLES.map((r, i) => (
              <Reveal key={r.title} delay={i * 70}>
                <Link
                  href={`/careers/${r.slug}`}
                  className="block group rounded-2xl border border-border lux-card p-6 hover:border-gold/25 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 px-2 py-0.5 rounded-full border border-gold/20 bg-gold/5">
                          {r.team}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                          {r.type}
                        </span>
                        <span className="text-muted-foreground/40">·</span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                          {r.location}
                        </span>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground group-hover:text-gold transition-colors">
                        {r.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{r.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {r.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-mono text-muted-foreground px-2 py-0.5 rounded-full border border-border"
                          >
                            {t}
                          </span>
                        ))}
                        <span className="text-[11px] font-mono text-gold ml-auto">{r.salary}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* No fit but interested */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
            Don&apos;t see your role?
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            We read every thoughtful email.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            If you&apos;ve been working on something quietly excellent and you suspect Calendro might be the right next thing — write us. Tell us what you make, and why.
          </p>
          <a
            href="mailto:careers@calendro.app"
            className="mt-8 inline-flex items-center gap-2 h-11 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            careers@calendro.app
          </a>
        </div>
      </section>

      <CTA
        title="Use the product you might build."
        subtitle="The best way to see if we'd work well together is to actually use Calendro for a week."
        primary={{ label: 'Try it free', href: '/login' }}
        secondary={{ label: 'Read our blog', href: '/blog' }}
      />
    </>
  )
}
