import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata: Metadata = {
  title: 'Glossary — Calendar & scheduling terms, defined',
  description: 'Plain-English definitions of calendar, scheduling, and AI-parsing terminology. From CalDAV to chrono-node to RRULE.',
  alternates: { canonical: '/glossary' },
  openGraph: {
    title: 'Momenties Glossary',
    description: 'Calendar and scheduling terms, in plain English.',
    url: '/glossary',
  },
}

type Entry = {
  term: string
  short: string
  body: string
  related?: string[]
}

const GLOSSARY: Entry[] = [
  { term: 'All-day event', short: 'An event that has a date but no specific time.', body: 'All-day events span an entire calendar day (midnight to midnight in the user\'s timezone) and display differently from timed events — usually as a band at the top of the day column. "Flight to Tokyo" is often better modeled as an all-day event than a 14-hour block.', related: ['RRULE', 'Timezone'] },
  { term: 'Availability', short: 'Whether a person or resource is free at a given time.', body: 'Availability is derived from events: a user is "busy" if they have an event during a slot, "free" if they don\'t. In team scheduling, availability is computed by intersecting the free slots of multiple calendars.' },
  { term: 'CalDAV', short: 'The open protocol for calendar sync, used by iCloud, Fastmail, and others.', body: 'CalDAV is an extension of WebDAV for calendar data. It uses HTTP verbs (REPORT, PROPFIND, PUT) to read and write iCalendar (.ics) data. Momenties speaks CalDAV to sync with iCloud and other CalDAV-compatible providers.', related: ['iCalendar', 'RFC 5545'] },
  { term: 'chrono-node', short: 'A JavaScript library that parses natural-language dates locally.', body: 'chrono-node is Momenties\'s first-stage parser. It\'s fast (under 20ms), free, and handles about 75% of inputs ("dentist thursday 3pm", "lunch tomorrow") without needing to call an AI model. Ambiguous inputs escalate to Gemini.', related: ['Gemini', 'Natural language processing'] },
  { term: 'CRDT', short: 'Conflict-free replicated data type. The magic behind offline-first sync.', body: 'CRDTs are data structures designed to merge concurrent edits without conflicts. They\'re used in collaborative editors (Figma, Notion) and — soon — Momenties\'s mobile app, so you can edit your calendar offline and have it merge seamlessly when you reconnect.', related: ['Offline-first'] },
  { term: 'DTSTART / DTEND', short: 'iCalendar fields for event start and end times.', body: 'DTSTART and DTEND are the core temporal fields in iCalendar (and therefore CalDAV). Both can be floating (no timezone) or zoned (with a TZID reference). Getting these right in the face of DST transitions is the hardest part of calendar engineering.', related: ['iCalendar', 'TZID'] },
  { term: 'Gemini', short: 'Google\'s family of AI models. We use Gemini 2.5 Flash for parsing.', body: 'Gemini 2.5 Flash is the current frontier "fast + cheap" model from Google. We use it as our second-stage parser: when chrono-node isn\'t confident, we send the user\'s input (and only the input) to Gemini, which returns structured JSON that we validate with Zod.', related: ['chrono-node', 'Zod'] },
  { term: 'iCalendar', short: 'The file format that powers most calendar interop (.ics files).', body: 'iCalendar, defined in RFC 5545, is the lingua franca of calendars. It\'s a plain-text format that encodes events, todos, and journals. When you subscribe to a sports team\'s schedule or download your conference agenda, you\'re downloading iCalendar.', related: ['CalDAV', 'RFC 5545'] },
  { term: 'Natural language processing', short: 'Turning human sentences into structured data.', body: 'NLP is the umbrella discipline for getting computers to understand unstructured text. Calendar NLP specifically focuses on extracting dates, times, durations, and intents from sentences like "coffee with sarah tomorrow at 3."' },
  { term: 'Offline-first', short: 'Software that works fully without an internet connection.', body: 'An offline-first app queues every write locally, syncs when online, and resolves conflicts automatically. Momenties\'s mobile app (shipping Q4 2026) is being built this way so you can schedule on airplanes and in subways.', related: ['CRDT'] },
  { term: 'OAuth 2.0', short: 'The standard protocol for delegating access without sharing passwords.', body: 'When you click "Sign in with Google," OAuth is what\'s happening. Momenties uses OAuth to request specific scopes (just calendar read/write) without ever seeing your Google password.' },
  { term: 'Recurring event', short: 'An event that repeats on a pattern — daily, weekly, monthly, or custom.', body: 'Recurring events are encoded in iCalendar using RRULE (for the pattern), RDATE (for extra occurrences), and EXDATE (for exclusions). They\'re deceptively simple to describe and famously tricky to implement correctly.', related: ['RRULE'] },
  { term: 'RFC 5545', short: 'The IETF specification for iCalendar.', body: 'Published in 2009 and updated since, RFC 5545 is the authoritative technical standard for calendar data. When Momenties generates or parses .ics files, we\'re following this spec line by line. It is, famously, among the more difficult RFCs.' },
  { term: 'RRULE', short: 'The iCalendar field that defines how an event repeats.', body: 'RRULE is a compact string that encodes recurrence patterns. "FREQ=WEEKLY;BYDAY=MO,WE,FR" means "every Monday, Wednesday, and Friday." Momenties\'s parser can generate RRULEs from phrases like "every weekday" or "first Monday of each month."', related: ['Recurring event'] },
  { term: 'Smart time suggestions', short: 'AI that proposes a meeting slot based on your existing calendar.', body: 'When you type an event without a time, Momenties\'s smart-scheduling engine finds a free slot that respects your existing meetings, focus windows, working hours, and timezone. It runs locally for speed and privacy.' },
  { term: 'SSO', short: 'Single Sign-On — one login for many apps.', body: 'SSO lets users sign in to Momenties using their organization\'s identity provider (Okta, Azure AD, Google Workspace). Momenties supports SAML 2.0 and OIDC on the Enterprise tier.' },
  { term: 'Timezone', short: 'A region that shares a standard time offset from UTC.', body: 'Timezones are stored in the IANA database (e.g., "America/New_York") and are distinct from static UTC offsets because they include daylight-saving rules. Momenties stores every event in a timezone; display is user-configurable.', related: ['TZID', 'UTC'] },
  { term: 'TZID', short: 'An iCalendar field that links an event to a timezone definition.', body: 'TZID (e.g., "America/New_York") is embedded in iCalendar alongside DTSTART/DTEND so that "3pm meeting" can mean the right time wherever the event is viewed. CalDAV clients occasionally send broken TZIDs; we have a small defensive layer.', related: ['DTSTART / DTEND', 'Timezone'] },
  { term: 'UTC', short: 'Coordinated Universal Time — the reference clock for the globe.', body: 'UTC is the timezone-less timekeeping standard. Internally, Momenties converts everything to UTC for storage and comparison, then back to the user\'s display timezone at render time.', related: ['Timezone'] },
  { term: 'Vision model', short: 'An AI model that reads images, not just text.', body: 'Momenties\'s photo-to-events feature is powered by Gemini\'s vision capabilities. The model reads schedules from photos — exam timetables, class schedules, concert bills — and extracts every event in one call.' },
  { term: 'Webhooks', short: 'HTTP callbacks that notify your server when something happens.', body: 'Instead of polling every minute to check for new events, webhook-enabled calendars push a small HTTP POST to Momenties within seconds of any change. We support webhooks both inbound (from Google) and outbound (to your API).' },
  { term: 'Zod', short: 'A TypeScript-first schema validation library.', body: 'Zod is used throughout Momenties to validate data — especially the JSON Gemini returns from parsing requests. If Gemini\'s output doesn\'t match the expected schema, we fall back to chrono-node\'s result. This is how we ship AI safely.', related: ['Gemini'] },
]

// Group by first letter
const GROUPED = GLOSSARY.reduce<Record<string, Entry[]>>((acc, e) => {
  const letter = e.term[0].toUpperCase()
  acc[letter] = acc[letter] ?? []
  acc[letter].push(e)
  return acc
}, {})

const LETTERS = Object.keys(GROUPED).sort()

export default function GlossaryPage() {
  return (
    <>
      <PageHero
        eyebrow="Glossary"
        title={
          <>
            Calendar terms, <em className="not-italic text-gold">defined</em>.
          </>
        }
        lede="Plain-English definitions of the language of calendaring, scheduling, and AI parsing. From CalDAV to chrono-node to RRULE."
        crumbs={[{ label: 'Glossary' }]}
      />

      {/* Jump letters */}
      <section className="px-5 md:px-8 py-6 border-b border-border sticky top-16 bg-[#0c0c0f]/80 backdrop-blur-xl z-20">
        <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 shrink-0 mr-2">
            Jump:
          </span>
          {LETTERS.map((L) => (
            <a
              key={L}
              href={`#l-${L}`}
              className="shrink-0 w-8 h-8 inline-flex items-center justify-center rounded-lg border border-border hover:border-gold/30 hover:text-gold transition-colors text-xs font-mono text-muted-foreground"
            >
              {L}
            </a>
          ))}
        </div>
      </section>

      {/* Entries */}
      <section className="py-14 px-5 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto space-y-14">
          {LETTERS.map((L, li) => (
            <div key={L} id={`l-${L}`}>
              <Reveal>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-gold tracking-tight mb-6">
                  {L}
                </h2>
              </Reveal>
              <div className="space-y-8">
                {GROUPED[L].map((e, ei) => (
                  <Reveal key={e.term} delay={ei * 30}>
                    <article>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                        {e.term}
                      </h3>
                      <p className="text-sm italic text-gold/80 mt-1">{e.short}</p>
                      <p className="mt-3 text-[15px] leading-[1.78] text-foreground/85 font-light">
                        {e.body}
                      </p>
                      {e.related && e.related.length > 0 && (
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                            Related:
                          </span>
                          {e.related.map((r) => {
                            const target = GLOSSARY.find((x) => x.term === r)
                            if (!target) return null
                            const L = target.term[0].toUpperCase()
                            return (
                              <a
                                key={r}
                                href={`#l-${L}`}
                                className="text-[11px] font-mono text-gold/70 hover:text-gold transition-colors px-2 py-0.5 rounded-full border border-gold/20"
                              >
                                {r}
                              </a>
                            )
                          })}
                        </div>
                      )}
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA
        title="See these concepts in action."
        subtitle="Try Momenties for free — type a sentence and watch the parser do its thing."
        primary={{ label: 'Try the demo', href: '/demo' }}
        secondary={{ label: 'Read the blog', href: '/blog' }}
      />
    </>
  )
}
