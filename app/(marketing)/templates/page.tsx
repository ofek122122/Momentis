import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Download, ArrowUpRight, Calendar, Dumbbell, Book, Plane, Baby, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Templates — Start with a ready-made week',
  description: 'Download and import pre-built Calendro templates: deep-work week, student semester, founder operating rhythm, parent-of-three, travel routine.',
  alternates: { canonical: '/templates' },
  openGraph: {
    title: 'Calendro Templates',
    description: 'Ready-made weekly rhythms for common patterns.',
    url: '/templates',
  },
}

const TEMPLATES = [
  {
    icon: Calendar,
    name: 'The Deep-Work Week',
    persona: 'For makers',
    blocks: 14,
    desc: 'Two 3-hour deep-work blocks every morning. Meetings compressed into Tuesday and Thursday afternoons. Friday afternoon free for reading.',
    tags: ['Focus', 'Weekly', 'Maker'],
    color: 'from-emerald-500/10 to-transparent',
  },
  {
    icon: Book,
    name: 'The Student Semester',
    persona: 'For college students',
    blocks: 42,
    desc: 'Pre-configured study blocks, assignment reminders with 3-day lead time, social hours protected, and a weekly reflection session.',
    tags: ['Education', 'Weekly', 'Student'],
    color: 'from-sky-500/10 to-transparent',
  },
  {
    icon: Dumbbell,
    name: 'The Athlete Schedule',
    persona: 'For serious trainers',
    blocks: 21,
    desc: 'Morning lifts, tempo runs, two mobility sessions, one long run, and protected rest days. Syncs with Strava and Whoop.',
    tags: ['Health', 'Weekly', 'Fitness'],
    color: 'from-rose-500/10 to-transparent',
  },
  {
    icon: Plane,
    name: 'The Nomad Rhythm',
    persona: 'For digital nomads',
    blocks: 18,
    desc: 'Timezone-aware blocks, travel buffer on move days, local-time client calls, and a weekly "where-am-I-going-next" review.',
    tags: ['Travel', 'Weekly', 'Remote'],
    color: 'from-amber-500/10 to-transparent',
  },
  {
    icon: Baby,
    name: 'The Family Operating System',
    persona: 'For busy parents',
    blocks: 32,
    desc: 'School drop-offs, extracurriculars, meal planning blocks, couple-time, and a weekly family meeting. Shared with partner and caregiver.',
    tags: ['Family', 'Weekly', 'Parent'],
    color: 'from-violet-500/10 to-transparent',
  },
  {
    icon: Wrench,
    name: 'The Founder Operating Rhythm',
    persona: 'For startup founders',
    blocks: 24,
    desc: 'Monday strategy, Tuesday-Thursday execution, Friday 1:1s, weekly board prep, monthly investor updates, quarterly offsite block.',
    tags: ['Startup', 'Monthly', 'Founder'],
    color: 'from-gold/10 to-transparent',
  },
]

export default function TemplatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Templates"
        title={
          <>
            Start with a <em className="not-italic text-gold">ready-made</em> week.
          </>
        }
        lede="Six battle-tested weekly rhythms built by people who've lived them. Import in one click, customize in five minutes, use forever."
        crumbs={[{ label: 'Templates' }]}
      />

      {/* Grid */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEMPLATES.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 70}>
              <div className={`relative rounded-2xl border border-border bg-gradient-to-b ${t.color} overflow-hidden group h-full flex flex-col`}>
                <div className="p-6 md:p-7 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/15 flex items-center justify-center">
                      <t.icon className="h-5 w-5 text-gold" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70">
                      {t.blocks} blocks
                    </span>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    {t.persona}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {t.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{t.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full border border-border text-[10px] font-mono text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Import
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Preview <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Submit your own */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
            Have a rhythm that works?
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Share it with the community.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
            If your weekly pattern has genuinely changed your life, submit it. We curate the best
            ones into the public gallery. Accepted authors get 6 months of Pro free.
          </p>
          <a
            href="mailto:templates@calendro.app"
            className="mt-8 inline-flex items-center gap-2 h-11 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            Submit a template
          </a>
        </div>
      </section>

      <CTA
        title="Your perfect week, pre-built."
        subtitle="Free forever plan includes all templates. No upsell."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See use cases', href: '/use-cases' }}
      />
    </>
  )
}
