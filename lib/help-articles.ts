export type HelpArticle = {
  slug: string
  category: string
  categorySlug: string
  title: string
  excerpt: string
  readingMinutes: number
  updated: string
  body: { type: 'p' | 'h2' | 'ul' | 'callout' | 'code'; content: string | string[] }[]
  related?: { categorySlug: string; slug: string; title: string }[]
}

const CAT = {
  start: { label: 'Getting Started', slug: 'getting-started' },
  sync: { label: 'Calendar Sync', slug: 'calendar-sync' },
  ai: { label: 'AI Features', slug: 'ai-features' },
  billing: { label: 'Billing', slug: 'billing' },
  trouble: { label: 'Troubleshooting', slug: 'troubleshooting' },
}

export const HELP_ARTICLES: HelpArticle[] = [
  {
    slug: 'creating-your-first-event',
    category: CAT.start.label,
    categorySlug: CAT.start.slug,
    title: 'Creating your first event',
    excerpt: 'Type "coffee with mom saturday 10am" and watch it land on your calendar.',
    readingMinutes: 2,
    updated: '2026-04-02',
    body: [
      { type: 'p', content: 'The fastest way to create an event in Calendro is to type a sentence. Anywhere you see the input bar (at the top of the calendar grid, in the command palette, or in the mobile bottom bar), just say what you mean.' },
      { type: 'h2', content: 'Anatomy of a good input' },
      { type: 'p', content: 'A good input tells Calendro four things: what, when, where (optional), and who (optional). All in one sentence.' },
      { type: 'code', content: 'coffee with mom saturday 10am at blue bottle' },
      { type: 'p', content: 'That single sentence produces:' },
      { type: 'ul', content: [
        'Title: Coffee with mom',
        'When: This or next Saturday at 10:00 AM (duration defaults to 1 hour)',
        'Location: Blue Bottle (we remember this for next time)',
        'Attendees: your contact named "mom" if found',
      ]},
      { type: 'callout', content: 'You do not need to get this right on the first try. Calendro shows a preview before it commits the event — edit anything you want, then confirm.' },
      { type: 'h2', content: 'What about ambiguity?' },
      { type: 'p', content: 'Calendro resolves most ambiguity automatically. "Monday" means the nearest upcoming Monday. "Tomorrow night" means 7:00 PM by default (you can change that in Settings → Preferences → Defaults). If it really can\'t tell, it asks — gently, once, and never again.' },
      { type: 'h2', content: 'Voice, too' },
      { type: 'p', content: 'Everything on this page also works with voice. Hold the mic icon, speak naturally, let go. Multi-event sentences are fine.' },
    ],
    related: [
      { categorySlug: 'ai-features', slug: 'how-the-parser-understands-you', title: 'How the parser understands you' },
      { categorySlug: 'getting-started', slug: 'connecting-google-calendar', title: 'Connecting Google Calendar' },
    ],
  },
  {
    slug: 'connecting-google-calendar',
    category: CAT.start.label,
    categorySlug: CAT.start.slug,
    title: 'Connecting Google Calendar',
    excerpt: 'The 30-second OAuth flow and what Calendro does (and doesn\'t) access.',
    readingMinutes: 3,
    updated: '2026-03-15',
    body: [
      { type: 'p', content: 'Calendro reads from and writes to Google Calendar using the standard Google OAuth flow. You click "Connect," grant permission, and you\'re done. No API keys, no calendar IDs, no Zapier in between.' },
      { type: 'h2', content: 'Step by step' },
      { type: 'ul', content: [
        'Open Calendro → Settings → Integrations.',
        'Click "Connect Google Calendar."',
        'You\'re redirected to Google. Choose the account you want.',
        'Review the permissions — Calendar read and write. That\'s all.',
        'Click "Allow." You\'re back in Calendro, and your events start syncing within ~5 seconds.',
      ]},
      { type: 'h2', content: 'What we access' },
      { type: 'p', content: 'Only your calendars. Specifically: read events to display them, create/update events when you schedule new things, and read the list of calendars you own so you can pick which ones to sync.' },
      { type: 'h2', content: 'What we never access' },
      { type: 'p', content: 'Gmail, Drive, Contacts (beyond what\'s embedded in event attendees), or any other Google service. Our OAuth scope is strictly calendar-scoped.' },
      { type: 'callout', content: 'You can revoke Calendro\'s access any time at myaccount.google.com/permissions. If you do, your Calendro account continues to exist but new events stop syncing.' },
      { type: 'h2', content: 'Multiple Google accounts' },
      { type: 'p', content: 'You can connect as many Google accounts as you want. Each shows up as its own row in Settings → Integrations, with a color. Events are color-coded by source calendar in the grid.' },
    ],
    related: [
      { categorySlug: 'calendar-sync', slug: 'connecting-apple-calendar', title: 'Connecting Apple Calendar (CalDAV)' },
      { categorySlug: 'calendar-sync', slug: 'managing-multiple-accounts', title: 'Managing multiple accounts' },
    ],
  },
  {
    slug: 'connecting-apple-calendar',
    category: CAT.sync.label,
    categorySlug: CAT.sync.slug,
    title: 'Connecting Apple Calendar (CalDAV)',
    excerpt: 'App passwords, iCloud, and why Apple requires one extra step.',
    readingMinutes: 4,
    updated: '2026-02-28',
    body: [
      { type: 'p', content: 'Apple does not offer OAuth for iCloud Calendar. Instead, iCloud uses the CalDAV protocol with username + app-specific password. Calendro supports this natively — you just need to generate an app password first.' },
      { type: 'h2', content: 'Generating an app-specific password' },
      { type: 'ul', content: [
        'Go to appleid.apple.com and sign in.',
        'Under "Sign-In and Security," click "App-Specific Passwords."',
        'Click the "+" and give it a name like "Calendro."',
        'Apple generates a 16-character password. Copy it.',
      ]},
      { type: 'h2', content: 'Connecting in Calendro' },
      { type: 'ul', content: [
        'Settings → Integrations → Connect Apple Calendar.',
        'Enter your Apple ID email and the app-specific password you just generated.',
        'Click "Connect." Your iCloud calendars appear within a few seconds.',
      ]},
      { type: 'callout', content: 'Two-factor authentication must be enabled on your Apple ID for app passwords to work. If you see an error, check that 2FA is on.' },
      { type: 'h2', content: 'Troubleshooting' },
      { type: 'p', content: 'The most common failure modes:' },
      { type: 'ul', content: [
        'Wrong password format — paste exactly as shown, including dashes.',
        '2FA not enabled — turn on at appleid.apple.com/account/manage.',
        'iCloud account region mismatch — some older accounts need the domain "www.icloud.com.cn" instead of ".com." We detect this automatically but if it fails, email us.',
        'Events not appearing — give it 30 seconds. CalDAV can be slow on first fetch for large calendars.',
      ]},
    ],
    related: [
      { categorySlug: 'calendar-sync', slug: 'managing-multiple-accounts', title: 'Managing multiple accounts' },
      { categorySlug: 'troubleshooting', slug: 'events-disappeared', title: 'Events disappeared from my calendar' },
    ],
  },
  {
    slug: 'how-the-parser-understands-you',
    category: CAT.ai.label,
    categorySlug: CAT.ai.slug,
    title: 'How the parser understands you',
    excerpt: 'chrono-node first, Gemini second — and when we use which.',
    readingMinutes: 5,
    updated: '2026-03-22',
    body: [
      { type: 'p', content: 'Calendro\'s parser is a two-stage pipeline. The first stage is a local, free natural-language date parser called chrono-node. The second stage is Google\'s Gemini 2.5 Flash, which we call only when chrono-node isn\'t sure.' },
      { type: 'h2', content: 'Why two stages?' },
      { type: 'p', content: 'Speed, cost, and privacy. About 75% of everyday inputs — "dentist thursday 3pm," "lunch tomorrow," "standup monday 9" — are handled by chrono-node in under 20ms, for free, without any data leaving your device. For those, we never call Gemini at all.' },
      { type: 'h2', content: 'When Gemini kicks in' },
      { type: 'p', content: 'Gemini takes over when chrono-node returns low confidence — typically for inputs that require semantic understanding rather than just date parsing. Examples:' },
      { type: 'ul', content: [
        '"the friday after next" (relative date chains)',
        '"first tuesday of every month starting june" (recurrence rules)',
        '"sometime next week, probably tuesday or wednesday afternoon" (tentative multi-option)',
        '"from the 14th to the 18th, 2pm-4pm each day" (multi-day blocks)',
      ]},
      { type: 'callout', content: 'When Gemini is used, your input text is sent to Google Cloud. We do not send any other data — not your calendar contents, not your contacts, not your identity. See our privacy policy for details.' },
      { type: 'h2', content: 'Timezone intent' },
      { type: 'p', content: 'Both stages respect your active timezone — the device timezone by default, overridable per event. If your input mentions a timezone ("4pm PT") we honor that over your default.' },
    ],
    related: [
      { categorySlug: 'ai-features', slug: 'voice-multi-event', title: 'Voice: saying multiple events at once' },
      { categorySlug: 'getting-started', slug: 'creating-your-first-event', title: 'Creating your first event' },
    ],
  },
  {
    slug: 'voice-multi-event',
    category: CAT.ai.label,
    categorySlug: CAT.ai.slug,
    title: 'Voice: saying multiple events at once',
    excerpt: 'A cadence trick that unlocks multi-event dictation.',
    readingMinutes: 3,
    updated: '2026-03-05',
    body: [
      { type: 'p', content: 'You can dictate multiple events in a single voice recording — Calendro splits them automatically. The trick is to pause briefly between events, and to connect them with commas or "and."' },
      { type: 'h2', content: 'Examples' },
      { type: 'code', content: '"Standup every weekday 9 to 9:15, lunch with Marcus Thursday 12:30, dentist Tuesday 4."' },
      { type: 'p', content: 'That one recording produces three events, ready for your review.' },
      { type: 'h2', content: 'What we listen for' },
      { type: 'ul', content: [
        'Commas and pauses longer than ~350ms are event delimiters.',
        'Words like "and" or "then" also mark a new event.',
        'Filler words ("um," "also," "oh wait") are ignored.',
      ]},
      { type: 'callout', content: 'The preview always shows all parsed events before you commit. You can drop any you don\'t want with a single tap.' },
      { type: 'h2', content: 'Limits' },
      { type: 'p', content: 'We cap a single voice dictation at 15 events. If you\'re trying to bulk-load a whole semester, use photo input instead — it\'s faster and more reliable for that case.' },
    ],
    related: [
      { categorySlug: 'ai-features', slug: 'how-the-parser-understands-you', title: 'How the parser understands you' },
    ],
  },
  {
    slug: 'understanding-our-plans',
    category: CAT.billing.label,
    categorySlug: CAT.billing.slug,
    title: 'Understanding our plans',
    excerpt: 'Free vs. Pro vs. Team — what you actually get in each.',
    readingMinutes: 3,
    updated: '2026-04-01',
    body: [
      { type: 'p', content: 'Calendro has three plans. Here\'s the honest summary.' },
      { type: 'h2', content: 'Free — $0/mo' },
      { type: 'p', content: 'Intended for individuals. Includes unlimited events, type and voice input, Google Calendar sync, and 5 photo parses per day. The daily photo limit is the only real constraint. Everything else is unmetered.' },
      { type: 'h2', content: 'Pro — $8/mo' },
      { type: 'p', content: 'For people whose time matters. Removes the photo limit, adds Apple Calendar sync, daily AI briefings, analytics & insights, and priority parsing (a slightly faster Gemini tier). 30-day free trial, no card required.' },
      { type: 'h2', content: 'Team — $12/user/mo' },
      { type: 'p', content: 'Everything in Pro, plus shared calendars, team scheduling links, admin controls, SSO (SAML or OIDC), and priority support. Annual billing available with a 20% discount.' },
      { type: 'callout', content: 'Student? You get Pro for free with a .edu email. Seed-stage startup? 10 seats of Team free for a year. See /education and /startups for details.' },
      { type: 'h2', content: 'What\'s not in any plan' },
      { type: 'p', content: 'Nothing is locked behind an artificial wall. If Calendro does a thing, Free users get it. Pro and Team just raise the limits or add collaboration features. We don\'t believe in dark pattern metering.' },
    ],
    related: [
      { categorySlug: 'billing', slug: 'changing-or-canceling', title: 'Changing or canceling a subscription' },
    ],
  },
  {
    slug: 'changing-or-canceling',
    category: CAT.billing.label,
    categorySlug: CAT.billing.slug,
    title: 'Changing or canceling a subscription',
    excerpt: 'One click. Same day. Pro-rated refunds where required.',
    readingMinutes: 2,
    updated: '2026-03-20',
    body: [
      { type: 'p', content: 'Changing or canceling your plan is a single click, inside Calendro, no email required. We think cancellation friction is disrespectful — we try not to be.' },
      { type: 'h2', content: 'How to cancel' },
      { type: 'ul', content: [
        'Settings → Billing → "Manage subscription."',
        'Click "Cancel."',
        'Confirm. That\'s it.',
      ]},
      { type: 'p', content: 'You keep Pro or Team access until the end of your paid period. No partial-month grace required.' },
      { type: 'h2', content: 'Upgrading / downgrading' },
      { type: 'p', content: 'Upgrades apply immediately; your next invoice is pro-rated. Downgrades apply at the end of the current billing period — you keep the higher tier until then.' },
      { type: 'h2', content: 'Refunds' },
      { type: 'p', content: 'If you\'re in the EU or a region where consumer law requires it, we refund the pro-rated portion of the unused period. Elsewhere, we offer the same — just email billing@calendro.app. We\'ve never said no.' },
      { type: 'callout', content: 'Accounts are never deleted automatically on cancel. You drop to the free tier and your data stays. Delete your data explicitly via Settings → Account → Delete if you want it gone.' },
    ],
  },
  {
    slug: 'events-disappeared',
    category: CAT.trouble.label,
    categorySlug: CAT.trouble.slug,
    title: 'Events disappeared from my calendar',
    excerpt: 'They\'re almost always still there. Here\'s how to find them.',
    readingMinutes: 3,
    updated: '2026-02-17',
    body: [
      { type: 'p', content: 'If events seem to have vanished from your Calendro view, one of three things is usually going on. Let\'s rule them out in order.' },
      { type: 'h2', content: '1. A calendar is hidden in the sidebar' },
      { type: 'p', content: 'Check the left sidebar. Each calendar you\'ve connected has a checkbox. Unchecked calendars are hidden from the grid but their events still exist. Re-check everything and see if the missing events come back.' },
      { type: 'h2', content: '2. A filter is active' },
      { type: 'p', content: 'Above the grid, if you see a small gold pill with an X, a filter is hiding some events. Click the X to clear it.' },
      { type: 'h2', content: '3. Sync is stale' },
      { type: 'p', content: 'If you created or modified events directly in Google or Apple Calendar, Calendro may not have picked them up yet. Trigger a manual sync:' },
      { type: 'ul', content: [
        'Settings → Integrations → hover the connected calendar → "Sync now."',
        'Or press Cmd/Ctrl + Shift + R anywhere in the app.',
      ]},
      { type: 'callout', content: 'If events are truly missing — not hidden, not filtered, and not un-synced — they may have been deleted. Google and Apple Calendars both have a "Trash" where deleted events live for 30 days. Restore from there.' },
      { type: 'h2', content: 'Still nothing?' },
      { type: 'p', content: 'Write us at help@calendro.app with the date range and a calendar name. We keep 30-day backups of your Calendro-specific data and can usually restore from those. Bring any reproduction details you have.' },
    ],
  },
]

export function getArticle(categorySlug: string, slug: string) {
  return HELP_ARTICLES.find((a) => a.categorySlug === categorySlug && a.slug === slug) ?? null
}

export function articlesInCategory(categorySlug: string) {
  return HELP_ARTICLES.filter((a) => a.categorySlug === categorySlug)
}
