export type EndpointMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE'

export type EndpointParam = {
  name: string
  in: 'path' | 'query' | 'body'
  type: string
  required: boolean
  desc: string
}

export type ApiEndpoint = {
  slug: string
  method: EndpointMethod
  path: string
  name: string
  summary: string
  description: string
  category: 'Events' | 'Parsing' | 'Calendars' | 'Suggestions' | 'Insights' | 'Webhooks'
  params: EndpointParam[]
  scopes: string[]
  requestExample: string
  responseExample: string
  codeExamples: {
    curl: string
    node: string
    python: string
  }
  errors: { code: number; reason: string; when: string }[]
}

const BASE_URL = 'https://api.calendro.app'

export const ENDPOINTS: ApiEndpoint[] = [
  {
    slug: 'create-event',
    method: 'POST',
    path: '/v1/events',
    name: 'Create event',
    summary: 'Create an event from structured fields or a natural-language input.',
    description:
      'The primary endpoint for creating events. You can pass a full structured event (title, start, end, etc.) or provide an `input` string — a natural-language sentence — and let our parser turn it into an event. Either mode is idempotent when an idempotency key is supplied.',
    category: 'Events',
    params: [
      { name: 'input', in: 'body', type: 'string', required: false, desc: 'Natural-language description. Mutually exclusive with structured fields.' },
      { name: 'title', in: 'body', type: 'string', required: false, desc: 'Event title. Required if `input` is not supplied.' },
      { name: 'start', in: 'body', type: 'string (ISO 8601)', required: false, desc: 'Event start time in ISO 8601 with timezone.' },
      { name: 'end', in: 'body', type: 'string (ISO 8601)', required: false, desc: 'Event end time. Defaults to start + 1 hour.' },
      { name: 'calendar_id', in: 'body', type: 'string', required: false, desc: 'Target calendar. Defaults to the user\'s primary calendar.' },
      { name: 'location', in: 'body', type: 'string', required: false, desc: 'Free-text location or structured address.' },
      { name: 'attendees', in: 'body', type: 'string[]', required: false, desc: 'Array of email addresses.' },
    ],
    scopes: ['events:write'],
    requestExample: `{
  "input": "dentist thursday 3pm",
  "calendar_id": "primary"
}`,
    responseExample: `{
  "id": "evt_01HN7ZG...",
  "title": "Dentist appointment",
  "start": "2026-04-23T15:00:00-04:00",
  "end": "2026-04-23T16:00:00-04:00",
  "calendar_id": "primary",
  "source": "parsed",
  "parser": "chrono-node",
  "confidence": 0.94,
  "created_at": "2026-04-17T09:12:33Z"
}`,
    codeExamples: {
      curl: `curl -X POST ${BASE_URL}/v1/events \\
  -H "Authorization: Bearer $TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"input": "dentist thursday 3pm"}'`,
      node: `import { Calendro } from "@calendro/sdk";

const client = new Calendro({ token: process.env.CALENDRO_TOKEN });
const event = await client.events.create({
  input: "dentist thursday 3pm",
});`,
      python: `from calendro import Calendro

client = Calendro(token=os.environ["CALENDRO_TOKEN"])
event = client.events.create(input="dentist thursday 3pm")`,
    },
    errors: [
      { code: 400, reason: 'invalid_input', when: 'Neither `input` nor structured fields were supplied, or fields conflict.' },
      { code: 401, reason: 'unauthorized', when: 'Missing or invalid bearer token.' },
      { code: 403, reason: 'insufficient_scope', when: 'Token does not have `events:write`.' },
      { code: 422, reason: 'parse_failed', when: 'Natural-language input could not be parsed into a valid event.' },
      { code: 429, reason: 'rate_limited', when: 'Exceeded rate limit for your tier.' },
    ],
  },
  {
    slug: 'list-events',
    method: 'GET',
    path: '/v1/events',
    name: 'List events',
    summary: 'List events, filtered by calendar, time window, or search query.',
    description:
      'Returns a paginated list of events across the user\'s connected calendars. Defaults to the next 30 days from the user\'s primary calendar. Use query parameters to refine.',
    category: 'Events',
    params: [
      { name: 'calendar_id', in: 'query', type: 'string', required: false, desc: 'Limit to a single calendar.' },
      { name: 'from', in: 'query', type: 'string (ISO 8601)', required: false, desc: 'Inclusive lower bound.' },
      { name: 'to', in: 'query', type: 'string (ISO 8601)', required: false, desc: 'Exclusive upper bound.' },
      { name: 'q', in: 'query', type: 'string', required: false, desc: 'Full-text search across title and description.' },
      { name: 'limit', in: 'query', type: 'integer', required: false, desc: 'Page size. Default 100, max 500.' },
      { name: 'cursor', in: 'query', type: 'string', required: false, desc: 'Opaque cursor from a previous response.' },
    ],
    scopes: ['events:read'],
    requestExample: '',
    responseExample: `{
  "data": [
    {
      "id": "evt_01HN7ZG...",
      "title": "Dentist appointment",
      "start": "2026-04-23T15:00:00-04:00",
      "end": "2026-04-23T16:00:00-04:00"
    }
  ],
  "has_more": false,
  "next_cursor": null
}`,
    codeExamples: {
      curl: `curl "${BASE_URL}/v1/events?from=2026-04-17&to=2026-05-17" \\
  -H "Authorization: Bearer $TOKEN"`,
      node: `const page = await client.events.list({
  from: "2026-04-17",
  to: "2026-05-17",
});`,
      python: `page = client.events.list(**{"from": "2026-04-17", "to": "2026-05-17"})`,
    },
    errors: [
      { code: 401, reason: 'unauthorized', when: 'Missing or invalid bearer token.' },
      { code: 422, reason: 'invalid_range', when: '`to` is earlier than `from`.' },
    ],
  },
  {
    slug: 'retrieve-event',
    method: 'GET',
    path: '/v1/events/:id',
    name: 'Retrieve event',
    summary: 'Retrieve a single event by ID.',
    description: 'Returns the full event record. 404 if the event does not exist or is not visible to the authenticated user.',
    category: 'Events',
    params: [{ name: 'id', in: 'path', type: 'string', required: true, desc: 'The event ID.' }],
    scopes: ['events:read'],
    requestExample: '',
    responseExample: `{
  "id": "evt_01HN7ZG...",
  "title": "Dentist appointment",
  "start": "2026-04-23T15:00:00-04:00",
  "end": "2026-04-23T16:00:00-04:00",
  "location": "Dr. Lewis, Dental Clinic",
  "attendees": [],
  "calendar_id": "primary",
  "created_at": "2026-04-17T09:12:33Z",
  "updated_at": "2026-04-17T09:12:33Z"
}`,
    codeExamples: {
      curl: `curl "${BASE_URL}/v1/events/evt_01HN7ZG..." \\
  -H "Authorization: Bearer $TOKEN"`,
      node: `const event = await client.events.retrieve("evt_01HN7ZG...");`,
      python: `event = client.events.retrieve("evt_01HN7ZG...")`,
    },
    errors: [
      { code: 401, reason: 'unauthorized', when: 'Missing or invalid bearer token.' },
      { code: 404, reason: 'not_found', when: 'The event does not exist.' },
    ],
  },
  {
    slug: 'update-event',
    method: 'PATCH',
    path: '/v1/events/:id',
    name: 'Update event',
    summary: 'Partially update an event.',
    description:
      'Patch any subset of mutable fields. Omitted fields are unchanged. Returns the full updated record. Creates an audit-log entry on Enterprise tier.',
    category: 'Events',
    params: [
      { name: 'id', in: 'path', type: 'string', required: true, desc: 'The event ID.' },
      { name: 'title', in: 'body', type: 'string', required: false, desc: 'New title.' },
      { name: 'start', in: 'body', type: 'string', required: false, desc: 'New start time.' },
      { name: 'end', in: 'body', type: 'string', required: false, desc: 'New end time.' },
    ],
    scopes: ['events:write'],
    requestExample: `{
  "title": "Dentist — rescheduled"
}`,
    responseExample: `{
  "id": "evt_01HN7ZG...",
  "title": "Dentist — rescheduled",
  "updated_at": "2026-04-17T11:04:18Z"
}`,
    codeExamples: {
      curl: `curl -X PATCH "${BASE_URL}/v1/events/evt_01HN7ZG..." \\
  -H "Authorization: Bearer $TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"title": "Dentist — rescheduled"}'`,
      node: `const event = await client.events.update("evt_01HN7ZG...", {
  title: "Dentist — rescheduled",
});`,
      python: `event = client.events.update("evt_01HN7ZG...", title="Dentist — rescheduled")`,
    },
    errors: [
      { code: 404, reason: 'not_found', when: 'The event does not exist.' },
      { code: 422, reason: 'invalid_field', when: 'A field value failed validation.' },
    ],
  },
  {
    slug: 'delete-event',
    method: 'DELETE',
    path: '/v1/events/:id',
    name: 'Delete event',
    summary: 'Delete a single event.',
    description: 'Deletes the event and removes it from the source calendar. For recurring events, use the `scope` body parameter to control whether you delete this occurrence, this-and-future, or the whole series.',
    category: 'Events',
    params: [
      { name: 'id', in: 'path', type: 'string', required: true, desc: 'The event ID.' },
      { name: 'scope', in: 'body', type: 'string', required: false, desc: '"single" | "future" | "all". Default: "single".' },
    ],
    scopes: ['events:write'],
    requestExample: '',
    responseExample: `{
  "id": "evt_01HN7ZG...",
  "deleted": true
}`,
    codeExamples: {
      curl: `curl -X DELETE "${BASE_URL}/v1/events/evt_01HN7ZG..." \\
  -H "Authorization: Bearer $TOKEN"`,
      node: `await client.events.delete("evt_01HN7ZG...");`,
      python: `client.events.delete("evt_01HN7ZG...")`,
    },
    errors: [
      { code: 404, reason: 'not_found', when: 'The event does not exist.' },
    ],
  },
  {
    slug: 'parse',
    method: 'POST',
    path: '/v1/parse',
    name: 'Parse text',
    summary: 'Parse a natural-language string into a structured event preview (without creating).',
    description:
      'Returns the same structured output as Create Event, but does not commit to any calendar. Useful for preview UIs, validation flows, and bulk dry-runs.',
    category: 'Parsing',
    params: [
      { name: 'input', in: 'body', type: 'string', required: true, desc: 'The natural-language input to parse.' },
      { name: 'timezone', in: 'body', type: 'string', required: false, desc: 'IANA timezone to interpret against. Defaults to the user\'s timezone.' },
    ],
    scopes: ['parse'],
    requestExample: `{
  "input": "lunch with sarah tomorrow 12:30"
}`,
    responseExample: `{
  "title": "Lunch with Sarah",
  "start": "2026-04-18T12:30:00-04:00",
  "end": "2026-04-18T13:30:00-04:00",
  "parser": "chrono-node",
  "confidence": 0.91
}`,
    codeExamples: {
      curl: `curl -X POST ${BASE_URL}/v1/parse \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{"input": "lunch with sarah tomorrow 12:30"}'`,
      node: `const preview = await client.parse({
  input: "lunch with sarah tomorrow 12:30",
});`,
      python: `preview = client.parse(input="lunch with sarah tomorrow 12:30")`,
    },
    errors: [
      { code: 400, reason: 'empty_input', when: '`input` was empty or whitespace-only.' },
      { code: 422, reason: 'parse_failed', when: 'Neither chrono-node nor Gemini produced a valid structured event.' },
    ],
  },
  {
    slug: 'parse-voice',
    method: 'POST',
    path: '/v1/parse/voice',
    name: 'Parse voice',
    summary: 'Upload an audio file; get back one or more parsed event previews.',
    description: 'Accepts webm, mp3, or wav up to 60 seconds. Transcribes with Deepgram Nova-3, then runs the parser stage. Multi-event dictation is supported.',
    category: 'Parsing',
    params: [
      { name: 'audio', in: 'body', type: 'file (multipart)', required: true, desc: 'The audio file.' },
    ],
    scopes: ['parse'],
    requestExample: '(multipart form-data with audio file)',
    responseExample: `{
  "transcript": "standup every weekday at 9, dentist tuesday 4",
  "events": [
    { "title": "Standup", "recurrence": "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR", "start": "2026-04-20T09:00:00" },
    { "title": "Dentist", "start": "2026-04-21T16:00:00" }
  ]
}`,
    codeExamples: {
      curl: `curl -X POST ${BASE_URL}/v1/parse/voice \\
  -H "Authorization: Bearer $TOKEN" \\
  -F "audio=@recording.webm"`,
      node: `const result = await client.parse.voice({
  audio: fs.createReadStream("recording.webm"),
});`,
      python: `with open("recording.webm", "rb") as f:
    result = client.parse.voice(audio=f)`,
    },
    errors: [
      { code: 413, reason: 'too_large', when: 'Audio file exceeds 60 seconds.' },
      { code: 415, reason: 'unsupported_format', when: 'Audio must be webm, mp3, or wav.' },
    ],
  },
  {
    slug: 'parse-image',
    method: 'POST',
    path: '/v1/parse/image',
    name: 'Parse image',
    summary: 'Upload a photo of a schedule; get back extracted events.',
    description: 'Accepts JPG, PNG, HEIC, or PDF up to 10 MB. Sent to Gemini Vision for OCR + temporal reasoning. Returns a list of structured event previews for user review.',
    category: 'Parsing',
    params: [
      { name: 'image', in: 'body', type: 'file (multipart)', required: true, desc: 'The image file.' },
    ],
    scopes: ['parse'],
    requestExample: '(multipart form-data with image file)',
    responseExample: `{
  "events": [
    { "title": "Math 101", "start": "2026-10-12T09:00:00" },
    { "title": "History seminar", "start": "2026-10-13T14:00:00" }
  ],
  "extracted_count": 2
}`,
    codeExamples: {
      curl: `curl -X POST ${BASE_URL}/v1/parse/image \\
  -H "Authorization: Bearer $TOKEN" \\
  -F "image=@syllabus.jpg"`,
      node: `const result = await client.parse.image({
  image: fs.createReadStream("syllabus.jpg"),
});`,
      python: `with open("syllabus.jpg", "rb") as f:
    result = client.parse.image(image=f)`,
    },
    errors: [
      { code: 413, reason: 'too_large', when: 'Image exceeds 10 MB.' },
      { code: 422, reason: 'no_events_found', when: 'Vision model could not extract any events.' },
    ],
  },
  {
    slug: 'list-calendars',
    method: 'GET',
    path: '/v1/calendars',
    name: 'List calendars',
    summary: 'List all calendars connected to the authenticated user.',
    description: 'Returns every calendar the user has connected — across Google, Apple, Outlook — with display names, source, and sync status.',
    category: 'Calendars',
    params: [],
    scopes: ['calendars:read'],
    requestExample: '',
    responseExample: `{
  "data": [
    {
      "id": "cal_primary",
      "name": "Personal",
      "provider": "google",
      "primary": true,
      "writable": true,
      "color": "#c5a35c"
    }
  ]
}`,
    codeExamples: {
      curl: `curl "${BASE_URL}/v1/calendars" -H "Authorization: Bearer $TOKEN"`,
      node: `const calendars = await client.calendars.list();`,
      python: `calendars = client.calendars.list()`,
    },
    errors: [],
  },
  {
    slug: 'suggestions',
    method: 'POST',
    path: '/v1/suggestions',
    name: 'Time slot suggestions',
    summary: 'Get AI-proposed optimal slots for an unscheduled event.',
    description:
      'Given an event title, a rough duration, and optional constraints, returns up to 5 time slots that best fit the user\'s calendar — respecting existing meetings, focus hours, and timezone.',
    category: 'Suggestions',
    params: [
      { name: 'title', in: 'body', type: 'string', required: true, desc: 'What the event is about.' },
      { name: 'duration_minutes', in: 'body', type: 'integer', required: false, desc: 'Default 60.' },
      { name: 'within_days', in: 'body', type: 'integer', required: false, desc: 'Search horizon. Default 14.' },
    ],
    scopes: ['events:read'],
    requestExample: `{
  "title": "Coffee with Sarah",
  "duration_minutes": 45
}`,
    responseExample: `{
  "suggestions": [
    { "start": "2026-04-22T10:00:00-04:00", "score": 0.92 },
    { "start": "2026-04-23T14:30:00-04:00", "score": 0.87 }
  ]
}`,
    codeExamples: {
      curl: `curl -X POST ${BASE_URL}/v1/suggestions \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{"title": "Coffee with Sarah", "duration_minutes": 45}'`,
      node: `const slots = await client.suggestions.create({
  title: "Coffee with Sarah",
  durationMinutes: 45,
});`,
      python: `slots = client.suggestions.create(title="Coffee with Sarah", duration_minutes=45)`,
    },
    errors: [
      { code: 404, reason: 'no_suggestions', when: 'No slots found within the search horizon.' },
    ],
  },
  {
    slug: 'insights',
    method: 'GET',
    path: '/v1/insights',
    name: 'Weekly insights',
    summary: 'Analytics payload for the user\'s last 7 days.',
    description: 'Returns aggregate meeting hours, focus ratio, busiest day, and recurring-meeting breakdown. Useful for dashboards and briefings.',
    category: 'Insights',
    params: [
      { name: 'weeks', in: 'query', type: 'integer', required: false, desc: 'How many weeks back to include. Default 1, max 52.' },
    ],
    scopes: ['events:read'],
    requestExample: '',
    responseExample: `{
  "meeting_hours": 18.5,
  "focus_ratio": 0.42,
  "busiest_day": "Wednesday",
  "top_recurring": [
    { "title": "Standup", "hours": 1.25 }
  ]
}`,
    codeExamples: {
      curl: `curl "${BASE_URL}/v1/insights" -H "Authorization: Bearer $TOKEN"`,
      node: `const insights = await client.insights.retrieve();`,
      python: `insights = client.insights.retrieve()`,
    },
    errors: [],
  },
  {
    slug: 'create-webhook',
    method: 'POST',
    path: '/v1/webhooks',
    name: 'Create webhook',
    summary: 'Subscribe a URL to receive calendar events over HTTP.',
    description:
      'Signs every delivery with HMAC-SHA256. Retries with exponential backoff up to 24 hours. Supported events: `event.created`, `event.updated`, `event.deleted`, `sync.failed`.',
    category: 'Webhooks',
    params: [
      { name: 'url', in: 'body', type: 'string', required: true, desc: 'HTTPS URL that will receive deliveries.' },
      { name: 'events', in: 'body', type: 'string[]', required: true, desc: 'Which events to subscribe to.' },
      { name: 'description', in: 'body', type: 'string', required: false, desc: 'Human-readable label (shown in your dashboard).' },
    ],
    scopes: ['webhooks:write'],
    requestExample: `{
  "url": "https://hooks.example.com/calendro",
  "events": ["event.created", "event.updated"]
}`,
    responseExample: `{
  "id": "whk_01HN...",
  "url": "https://hooks.example.com/calendro",
  "events": ["event.created", "event.updated"],
  "secret": "whsec_..."
}`,
    codeExamples: {
      curl: `curl -X POST ${BASE_URL}/v1/webhooks \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{"url": "https://hooks.example.com/calendro", "events": ["event.created"]}'`,
      node: `const webhook = await client.webhooks.create({
  url: "https://hooks.example.com/calendro",
  events: ["event.created"],
});`,
      python: `webhook = client.webhooks.create(
    url="https://hooks.example.com/calendro",
    events=["event.created"],
)`,
    },
    errors: [
      { code: 400, reason: 'invalid_url', when: 'URL is not HTTPS or has an invalid format.' },
      { code: 422, reason: 'too_many_webhooks', when: 'You\'ve reached your webhook limit.' },
    ],
  },
]

export function getEndpoint(slug: string) {
  return ENDPOINTS.find((e) => e.slug === slug) ?? null
}
