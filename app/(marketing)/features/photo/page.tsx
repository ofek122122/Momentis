import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Camera, Zap, ScanLine, CheckCircle2, ArrowRight, FileImage } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Photo-to-calendar — Snap a schedule, get a calendar event',
  description:
    'Point your camera at a conference programme, class timetable, or handwritten note. Momenties extracts every event and lets you add them in one tap. Powered by Gemini Vision.',
  alternates: { canonical: '/features/photo' },
  openGraph: {
    title: 'Momenties Photo-to-Calendar',
    description: 'Snap a schedule. Get calendar events.',
    url: '/features/photo',
    type: 'website',
  },
}

const USE_CASES = [
  { icon: FileImage, title: 'Conference programmes', desc: 'Snap the schedule at the registration desk. Every talk, break, and dinner lands on your calendar.' },
  { icon: ScanLine, title: 'Class timetables', desc: 'Photograph the semester timetable. Momenties extracts every recurring class and its room.' },
  { icon: Camera, title: 'Whiteboard schedules', desc: 'Team sprint planning on a whiteboard? One photo, all events in the right order.' },
  { icon: Zap, title: 'Physical mail', desc: 'Wedding invitation, doctor appointment reminder, concert ticket — if it has a date, we\'ll find it.' },
]

const STEPS = [
  {
    step: '01',
    title: 'Tap the camera icon',
    desc: 'In the input bar, tap the camera icon or press P. Upload a photo from your gallery or take one now.',
  },
  {
    step: '02',
    title: 'Gemini Vision scans it',
    desc: 'The image is sent to Gemini 2.5 Flash with structured extraction instructions. Median response: 1.2 seconds.',
  },
  {
    step: '03',
    title: 'Events appear as a list',
    desc: 'You see every extracted event: title, date, time, location. Check what you want, uncheck what you don\'t.',
  },
  {
    step: '04',
    title: 'One tap to save them all',
    desc: 'Tap "Add selected". All chosen events sync to your Google Calendar. Recurring events are detected and set up correctly.',
  },
]

const ACCURACY = [
  { label: 'Printed schedules', pct: '98%', note: 'Typed text with clear dates' },
  { label: 'Handwritten notes', pct: '89%', note: 'Legible handwriting, standard date formats' },
  { label: 'Complex tables', pct: '93%', note: 'Multi-column timetables with room numbers' },
  { label: 'Multiple timezones', pct: '78%', note: 'Requires explicit timezone labels in the image' },
]

export default function PhotoPage() {
  return (
    <>
      <PageHero
        eyebrow="Photo-to-calendar"
        title={
          <>
            Snap a schedule.
            <br />
            <em className="not-italic text-gold">Get your calendar back.</em>
          </>
        }
        lede="Momenties reads images the same way it reads text. Point your camera at anything with dates — a programme, a timetable, a handwritten note — and watch it turn into structured events."
        crumbs={[{ label: 'Features' }, { label: 'Photo' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try photo add <Camera className="h-4 w-4" />
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            See demo
          </Link>
        </div>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">When to use it</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Anything with a date in it.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {USE_CASES.map((uc, i) => (
              <Reveal key={uc.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <uc.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{uc.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How it works</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Photo to calendar in four steps.
            </h2>
          </Reveal>
          <div className="space-y-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 60}>
                <div className="flex items-start gap-5 rounded-xl border border-border/50 p-5">
                  <div className="w-9 h-9 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center shrink-0">
                    <span className="font-mono text-xs text-gold/70">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-1">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Accuracy */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Accuracy</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              What to expect.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tested on 2,000 real-world images across input types.
            </p>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-border overflow-hidden">
              {ACCURACY.map((a, i) => (
                <div key={a.label} className={`flex items-center justify-between gap-4 p-5 border-b border-border last:border-b-0 ${i % 2 === 0 ? '' : 'bg-white/[0.015]'}`}>
                  <div>
                    <p className="text-sm font-medium text-foreground">{a.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{a.note}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl font-bold text-gold">{a.pct}</p>
                    <p className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground/60">accuracy</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={60}>
            <p className="text-xs text-muted-foreground/60 mt-3 font-mono">
              Accuracy = fraction of events extracted with correct title, date, and time. Measured April 2026.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="flex items-start gap-4 rounded-xl border border-gold/20 bg-gold/5 p-6">
              <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">Images are not stored.</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Photos you upload are sent to Gemini Vision for processing and immediately discarded. We never store your images. If you&apos;re concerned about the contents of a schedule, you can redact names or personal details before uploading — the parsing will still work.{' '}
                  <Link href="/privacy" className="text-gold hover:text-gold/80 transition-colors">Read our privacy policy →</Link>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Your next conference programme is already a calendar."
        subtitle="Take a photo. Add everything. Never re-type a schedule."
        primary={{ label: 'Try photo add free', href: '/login' }}
        secondary={{ label: 'See all features', href: '/features' }}
      />
    </>
  )
}
