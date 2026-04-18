import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import {
  TRACKS,
  LESSONS,
  LEARNING_PATHS,
  LEARN_STATS,
  KIND_LABEL,
  findLesson,
  lessonsByTrack,
  type LessonKind,
} from '@/lib/learn'
import { ArrowUpRight, BookOpen, Clock, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Learn Momenties — An hour you will not regret',
  description:
    "Momenties's learning hub: four short tracks, thirteen lessons, three curated paths. Built for people who have better things to do than read manuals.",
  alternates: { canonical: '/learn' },
  openGraph: {
    title: 'Learn Momenties',
    description:
      'Four tracks, thirteen lessons. One hour to go from new user to power user — and not a minute more.',
    url: '/learn',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn Momenties',
    description: 'Four tracks, thirteen lessons. One hour to power user.',
  },
}

function KindBadge({ kind }: { kind: LessonKind }) {
  const tone: Record<LessonKind, string> = {
    read: 'border-border text-muted-foreground',
    try: 'border-gold/30 text-gold',
    watch: 'border-emerald-500/30 text-emerald-400/90',
  }
  return (
    <span
      className={`inline-flex items-center h-5 px-2 rounded-full border text-[10px] font-mono uppercase tracking-wider ${tone[kind]}`}
    >
      {KIND_LABEL[kind]}
    </span>
  )
}

function LessonCard({ lesson, index }: { lesson: (typeof LESSONS)[number]; index: number }) {
  const Icon = lesson.icon
  return (
    <Reveal delay={index * 30}>
      <article className="relative h-full rounded-2xl border border-border bg-[#131318] p-5 transition-all hover:border-gold/25 hover:-translate-y-0.5">
        {lesson.badge && (
          <span
            className={`absolute top-4 right-4 px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider ${
              lesson.badge === 'new'
                ? 'bg-gold text-[#0c0c0f]'
                : lesson.badge === 'popular'
                  ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/20'
                  : 'bg-white/[0.06] text-muted-foreground border border-border'
            }`}
          >
            {lesson.badge}
          </span>
        )}
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center mb-4">
          <Icon className="h-4 w-4 text-gold" aria-hidden />
        </div>
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <KindBadge kind={lesson.kind} />
          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground">
            <Clock className="h-3 w-3" aria-hidden />
            {lesson.minutes} min
          </span>
        </div>
        <h3 className="font-display text-lg text-foreground leading-snug tracking-tight">
          {lesson.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{lesson.summary}</p>
      </article>
    </Reveal>
  )
}

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title={
          <>
            An hour of Momenties you <em className="not-italic text-gold">won&apos;t regret</em> —
            from new user to power user, quietly.
          </>
        }
        lede="Four short tracks, thirteen lessons, three curated paths. No fluff, no breadcrumbs back to marketing, no gated video walls. Just the shortest path from download to mastery."
        crumbs={[{ label: 'Learn' }]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="#tracks"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            Start a track <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
          <Link
            href="/downloads"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/40 hover:text-gold transition-colors"
          >
            <Download className="h-3.5 w-3.5" aria-hidden />
            Cheatsheet PDF
          </Link>
        </div>
      </PageHero>

      {/* Stats strip */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
            {[
              { label: 'Lessons', value: LEARN_STATS.lessons.toString() },
              { label: 'Tracks', value: LEARN_STATS.tracks.toString() },
              { label: 'Total minutes', value: LEARN_STATS.totalMinutes.toString() },
              { label: 'Curated paths', value: LEARN_STATS.paths.toString() },
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

      {/* Tracks */}
      <section id="tracks" className="py-16 md:py-20 px-5 md:px-8 border-b border-border scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-8 mb-10 flex-wrap">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
                Four tracks
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Pick one. Finish it. Move on with your life.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Each track is self-contained. You can finish Quickstart during a coffee. You can finish Power User on a
              long flight.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {TRACKS.map((track, i) => {
              const Icon = track.icon
              const lessons = lessonsByTrack(track.id)
              return (
                <Reveal key={track.id} delay={i * 60}>
                  <div className="h-full rounded-2xl border border-border bg-[#131318] p-6 md:p-7 flex flex-col gap-4 hover:border-gold/25 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold/25 to-gold/5 border border-gold/20 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-gold" aria-hidden />
                        </div>
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70">
                            {track.tag}
                          </p>
                          <h3 className="font-display text-2xl text-foreground tracking-tight">
                            {track.label}
                          </h3>
                        </div>
                      </div>
                      <span className="font-mono text-[11px] text-muted-foreground whitespace-nowrap">
                        {track.minutes} min · {lessons.length} lessons
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{track.description}</p>
                    <ul className="mt-auto space-y-1.5 pt-3 border-t border-border/70">
                      {lessons.map((l) => (
                        <li
                          key={l.id}
                          className="flex items-center justify-between text-sm text-foreground/85"
                        >
                          <span className="truncate pr-3">{l.title}</span>
                          <span className="font-mono text-[10px] text-muted-foreground shrink-0">
                            {l.minutes}m
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Lesson grid */}
      <section className="py-16 md:py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              Every lesson
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              {LEARN_STATS.lessons} lessons. {LEARN_STATS.totalMinutes} minutes total.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              Read, try-it-in-the-app, or watch. Pick whatever fits your mood and the amount of coffee left in your cup.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LESSONS.map((lesson, i) => (
              <LessonCard key={lesson.id} lesson={lesson} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Curated paths */}
      <section className="py-16 md:py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-8 mb-10 flex-wrap">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
                Curated paths
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Three sequences we recommend, built from the lessons above.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Each path is under 30 minutes and designed around a real user we&apos;ve sat next to.
            </p>
          </div>

          <ol className="space-y-5">
            {LEARNING_PATHS.map((path, i) => (
              <Reveal key={path.id} delay={i * 60}>
                <li className="rounded-2xl border border-border bg-[#131318] overflow-hidden">
                  <div className="p-6 md:p-7 flex items-start gap-5">
                    <div className="hidden md:flex shrink-0 w-12 h-12 rounded-full bg-gold/10 border border-gold/25 items-center justify-center font-mono text-gold text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-display text-2xl text-foreground tracking-tight">
                          {path.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.04] border border-border text-[10px] font-mono text-muted-foreground">
                          <Clock className="h-3 w-3" aria-hidden />
                          {path.minutes} min
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground italic">{path.note}</p>
                      <div className="mt-5 flex flex-col divide-y divide-border/70 border-y border-border/70">
                        {path.lessons.map((lid, idx) => {
                          const l = findLesson(lid)
                          if (!l) return null
                          const Icon = l.icon
                          return (
                            <div
                              key={l.id}
                              className="flex items-center gap-4 py-3 group"
                            >
                              <span className="font-mono text-[11px] text-muted-foreground/60 w-6 shrink-0">
                                {idx + 1}
                              </span>
                              <Icon className="h-4 w-4 text-gold/70 shrink-0" aria-hidden />
                              <span className="flex-1 text-sm text-foreground/90 truncate">{l.title}</span>
                              <span className="font-mono text-[10px] text-muted-foreground shrink-0">
                                {l.minutes}m · {KIND_LABEL[l.kind]}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Something quieter */}
      <section className="py-16 md:py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <BookOpen className="h-5 w-5 text-gold mx-auto mb-4" aria-hidden />
          <p className="font-display italic text-xl md:text-2xl text-foreground leading-snug">
            &ldquo;The best software teaches itself. The second best keeps its lessons under an
            hour.&rdquo;
          </p>
          <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground/70">
            — the Momenties manifesto, §06
          </div>
        </div>
      </section>

      <CTA
        title="The fastest way to learn Momenties is to use it."
        subtitle="Free forever for individuals. The tour takes seven minutes. The rest is optional."
        primary={{ label: 'Try Momenties', href: '/login' }}
        secondary={{ label: 'Read the manifesto', href: '/manifesto' }}
      />
    </>
  )
}
