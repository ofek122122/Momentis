import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import {
  ACTIVE_LABS,
  GRADUATED,
  RETIRED,
  LABS_STATS,
  STATUS_COPY,
  RISK_COPY,
  statusTone,
  OPT_IN,
} from '@/lib/labs'
import {
  FlaskConical,
  GraduationCap,
  Trash2,
  Users,
  Shield,
  ArrowUpRight,
  Copy,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties Labs — Experiments, in plain sight',
  description:
    'Features in progress, features that graduated, and features we killed on purpose. Opt in, give us feedback, or just watch us work.',
  alternates: { canonical: '/labs' },
  openGraph: {
    title: 'Momenties Labs',
    description:
      'Features in progress, features that graduated, and features we killed on purpose — all in one place.',
    url: '/labs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momenties Labs',
    description: 'Experiments, in plain sight.',
  },
}

export default function LabsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties Labs"
        title={
          <>
            Experiments, <em className="not-italic text-gold">in plain sight</em>.
          </>
        }
        lede="Five experiments in progress. Four that graduated into the main app. Three we retired on purpose. Opt in to any active lab, or just watch us work — we keep all of it public, because that is the only way we know to stay honest about what we build."
        crumbs={[{ label: 'Labs' }]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="#active"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            See active experiments <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
          <Link
            href="#opt-in"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/40 hover:text-gold transition-colors"
          >
            How to opt in
          </Link>
        </div>
      </PageHero>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
            {[
              { label: 'Active experiments', value: LABS_STATS.active.toString() },
              { label: 'Opted-in testers', value: LABS_STATS.totalTesters.toString() },
              { label: 'Graduated', value: LABS_STATS.graduated.toString() },
              { label: 'Retired (on purpose)', value: LABS_STATS.retired.toString() },
            ].map((s) => (
              <div key={s.label} className="bg-[#0c0c0f] p-5">
                <div className="font-display text-3xl md:text-4xl text-gold font-semibold leading-none">
                  {s.value}
                </div>
                <div className="mt-2 text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground/80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active */}
      <section id="active" className="py-16 md:py-24 px-5 md:px-8 border-b border-border scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-8 flex-wrap mb-10">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center shrink-0">
                <FlaskConical className="h-5 w-5 text-gold" aria-hidden />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-2">
                  Active experiments · {LABS_STATS.active}
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                  What we&apos;re building right now, behind a flag.
                </h2>
              </div>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Each lab has a lead, an expected ship window, and a risk rating. Opt in to any of them. Opt out any time
              with no data retained.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {ACTIVE_LABS.map((lab, i) => {
              const Icon = lab.icon
              const tone = statusTone(lab.status)
              return (
                <Reveal key={lab.id} delay={i * 50}>
                  <article className="h-full rounded-2xl border border-border bg-[#131318] p-6 md:p-7 flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${tone.bg} border ${tone.ring} flex items-center justify-center`}
                      >
                        <Icon className={`h-5 w-5 ${tone.fg}`} aria-hidden />
                      </div>
                      <div className="text-right">
                        <div
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-mono uppercase tracking-wider ${tone.ring} ${tone.fg}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            lab.status === 'testing'
                              ? 'bg-gold'
                              : lab.status === 'ready'
                                ? 'bg-emerald-400'
                                : 'bg-sky-300'
                          } ${lab.status === 'testing' ? 'animate-pulse' : ''}`} aria-hidden />
                          {STATUS_COPY[lab.status].label}
                        </div>
                      </div>
                    </div>
                    <h3 className="font-display text-2xl text-foreground tracking-tight leading-snug">
                      {lab.title}
                    </h3>
                    <p className="mt-2 font-display italic text-[15px] text-foreground/85 leading-relaxed">
                      {lab.oneLiner}
                    </p>
                    <p className="mt-4 text-[13.5px] text-muted-foreground leading-relaxed">{lab.body}</p>

                    {/* Progress */}
                    <div className="mt-6 mb-4">
                      <div className="flex items-center justify-between mb-2 text-[11px] font-mono text-muted-foreground">
                        <span>{STATUS_COPY[lab.status].hint}</span>
                        <span className="text-foreground/80">{lab.progress}%</span>
                      </div>
                      <div className="h-1 rounded-full bg-white/[0.04] overflow-hidden">
                        <div
                          className="h-full bg-gold rounded-full transition-all"
                          style={{ width: `${lab.progress}%` }}
                          aria-hidden
                        />
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="mt-auto pt-4 border-t border-border/70 grid grid-cols-3 gap-3 text-[11px] font-mono">
                      <div>
                        <div className="text-muted-foreground/60 uppercase tracking-wider text-[9px] mb-0.5">
                          Lead
                        </div>
                        <div className="text-foreground">{lab.lead}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground/60 uppercase tracking-wider text-[9px] mb-0.5">
                          Ships
                        </div>
                        <div className="text-foreground">{lab.expectedShip}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground/60 uppercase tracking-wider text-[9px] mb-0.5">
                          Testers
                        </div>
                        <div className="text-foreground inline-flex items-center gap-1.5">
                          <Users className="h-3 w-3 text-gold/70" aria-hidden />
                          {lab.testers || '—'}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-border/70 flex items-center justify-between gap-3 text-[11px] font-mono">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                        <Shield className="h-3 w-3" aria-hidden />
                        {RISK_COPY[lab.risk]}
                      </span>
                      <Link
                        href={lab.status === 'planning' ? OPT_IN.emailUrl : OPT_IN.url}
                        className="inline-flex items-center gap-1 text-gold hover:underline"
                      >
                        {lab.status === 'planning' ? 'Follow this lab' : 'Opt in'}
                        <ArrowUpRight className="h-3 w-3" aria-hidden />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Graduated */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border bg-[#0a0a0e]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-emerald-400/5 border border-emerald-300/20 flex items-center justify-center shrink-0">
              <GraduationCap className="h-5 w-5 text-emerald-300" aria-hidden />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-300/80 mb-2">
                Graduated · {LABS_STATS.graduated}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Experiments that made it into the main app.
              </h2>
            </div>
          </div>

          <ol className="divide-y divide-border/70 border-y border-border/70">
            {GRADUATED.map((g, i) => {
              const Icon = g.icon
              return (
                <li key={g.id} className="py-6 flex items-start gap-6">
                  <span className="font-mono text-[11px] text-muted-foreground/60 w-10 shrink-0 pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400/15 to-emerald-400/5 border border-emerald-300/20 flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-emerald-300" aria-hidden />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display text-xl text-foreground tracking-tight">
                        {g.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-emerald-300/20 text-[10px] font-mono uppercase tracking-wider text-emerald-300">
                        Graduated {g.graduatedOn}
                      </span>
                    </div>
                    <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{g.body}</p>
                    <p className="mt-2 text-[11px] font-mono text-muted-foreground/60">
                      Entered labs: {g.enteredLabs}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* Retired */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-400/20 to-rose-400/5 border border-rose-400/20 flex items-center justify-center shrink-0">
              <Trash2 className="h-5 w-5 text-rose-300" aria-hidden />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-rose-300/80 mb-2">
                Retired · {LABS_STATS.retired}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Features we killed on purpose, with the reasoning.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                We hold ourselves to a simple test: if a shipped feature would dilute the product, it never ships. Labs
                is the safest place to find that out.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {RETIRED.map((r, i) => {
              const Icon = r.icon
              return (
                <Reveal key={r.id} delay={i * 60}>
                  <article className="h-full rounded-2xl border border-border bg-[#131318] p-6 flex flex-col">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400/15 to-rose-400/5 border border-rose-400/20 flex items-center justify-center mb-4">
                      <Icon className="h-4 w-4 text-rose-300" aria-hidden />
                    </div>
                    <h3 className="font-display text-xl text-foreground tracking-tight leading-snug">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed">{r.body}</p>
                    <div className="mt-5 pt-4 border-t border-border/70">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-rose-300/80 mb-2">
                        Why we killed it
                      </p>
                      <p className="text-[13.5px] text-foreground/85 italic leading-relaxed">{r.reason}</p>
                    </div>
                    <div className="mt-auto pt-4 text-[11px] font-mono text-muted-foreground/60">
                      Retired · {r.retiredOn}
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Opt in */}
      <section id="opt-in" className="py-16 md:py-24 px-5 md:px-8 border-b border-border scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
            How to opt in
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Three ways to touch the things we&apos;re still drafting.
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-border bg-[#131318] p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-3">01 · In the app</div>
              <h3 className="font-display text-lg text-foreground">Settings → Labs</h3>
              <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed">
                Toggle any lab on or off. Toggles persist across devices. Your data for active labs is never used to
                train models.
              </p>
              <Link
                href={OPT_IN.url}
                className="mt-4 inline-flex items-center gap-1 text-sm text-gold hover:underline"
              >
                Open Labs settings <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-[#131318] p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-3">02 · From the CLI</div>
              <h3 className="font-display text-lg text-foreground">One command</h3>
              <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed">
                For the terminal-first among you, every lab has a CLI toggle. Example:
              </p>
              <div className="mt-4 rounded-lg border border-border bg-[#0a0a0e] p-3 font-mono text-[12px] text-foreground/90 flex items-center gap-2">
                <span className="text-gold">$</span>
                <span className="flex-1 truncate">{OPT_IN.command}</span>
                <Copy className="h-3.5 w-3.5 text-muted-foreground shrink-0" aria-hidden />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-[#131318] p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-3">03 · Give feedback</div>
              <h3 className="font-display text-lg text-foreground">The forum & the inbox</h3>
              <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed">
                We read every post on{' '}
                <Link href={OPT_IN.forumUrl} className="text-gold hover:underline">
                  /community
                </Link>{' '}
                and every email sent to our labs inbox. Replies usually within 48 hours.
              </p>
              <Link
                href={OPT_IN.emailUrl}
                className="mt-4 inline-flex items-center gap-1 text-sm text-gold hover:underline"
              >
                Email the Labs team <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-gold/25 bg-gold/[0.04] p-5 md:p-6 flex items-start gap-4">
            <Shield className="h-5 w-5 text-gold shrink-0 mt-0.5" aria-hidden />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                The Labs promise
              </p>
              <p className="text-[14px] text-foreground/90 leading-relaxed">
                No lab will ever quietly become a default. No lab data trains the models. You can opt out of any lab
                and its data will be deleted within 30 days. If we break a lab, we will roll it back before we fix it —
                the same way we do in production.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Prefer the finished thing?"
        subtitle="Everything in Labs eventually graduates — or gets killed on purpose. The stable app is already worth your time."
        primary={{ label: 'Use Momenties', href: '/login' }}
        secondary={{ label: 'Read the method', href: '/method' }}
      />
    </>
  )
}
