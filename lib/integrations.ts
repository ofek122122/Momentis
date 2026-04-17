export type Integration = {
  slug: string
  name: string
  category: 'Calendar' | 'Messaging' | 'Video' | 'Notes' | 'Project' | 'Developer' | 'Automation' | 'Mobile' | 'Tasks' | 'CRM'
  tagline: string
  description: string
  status: 'live' | 'beta' | 'soon'
  letter: string
  color: string
  keyFeatures: { title: string; desc: string }[]
  howItWorks: string[]
  permissions: string[]
  faqs: { q: string; a: string }[]
}

export const INTEGRATIONS: Integration[] = [
  {
    slug: 'google-calendar',
    name: 'Google Calendar',
    category: 'Calendar',
    tagline: 'Two-way sync for every Google Calendar you own.',
    description:
      'Calendro is built on top of Google Calendar. Every event you create in Calendro syncs instantly to Google; every event you create in Google appears in Calendro within seconds. Same source of truth, two interfaces.',
    status: 'live',
    letter: 'G',
    color: '#4285F4',
    keyFeatures: [
      { title: 'Two-way real-time sync', desc: 'Events flow both ways within a few seconds. Edit in either interface; the other catches up.' },
      { title: 'Multiple accounts', desc: 'Connect as many Google Workspace and personal Gmail calendars as you need.' },
      { title: 'Color-coded by source', desc: 'Every connected account gets a color so you can tell work from personal at a glance.' },
      { title: 'Respects permissions', desc: 'Read-only calendars stay read-only in Calendro. You can\'t accidentally modify a shared schedule.' },
    ],
    howItWorks: [
      'Click Connect Google Calendar in Settings → Integrations.',
      'Sign in with Google and grant calendar permissions.',
      'Calendro lists all your calendars — pick which ones to sync.',
      'Within 5 seconds your events appear. New events sync in under a second.',
    ],
    permissions: [
      'Read and write Google Calendar events (to sync and create).',
      'List your calendars (to let you choose which ones to display).',
      'That\'s it. We never access Gmail, Drive, Contacts, or any other Google service.',
    ],
    faqs: [
      { q: 'How fast is the sync?', a: 'Calendro→Google is instant (<1s). Google→Calendro uses a webhook + fallback poll; expect <5s typical.' },
      { q: 'Can I disconnect anytime?', a: 'Yes. Settings → Integrations → hover the account → Disconnect. Your Google Calendar is unchanged.' },
      { q: 'Does it work with Google Workspace?', a: 'Yes. Personal Gmail and Workspace both work with the same OAuth flow.' },
    ],
  },
  {
    slug: 'apple-calendar',
    name: 'Apple Calendar',
    category: 'Calendar',
    tagline: 'Full CalDAV sync with iCloud. App passwords supported.',
    description:
      'Calendro speaks CalDAV, the open protocol iCloud uses. You generate an app-specific password, enter it once, and every iCloud calendar appears in your unified Calendro view.',
    status: 'live',
    letter: 'A',
    color: '#8E8E93',
    keyFeatures: [
      { title: 'Full two-way CalDAV sync', desc: 'Create in Calendro, appears on your iPhone. Create on your iPhone, appears in Calendro.' },
      { title: 'Multiple iCloud accounts', desc: 'Personal + family iCloud calendars? Connect both, see both.' },
      { title: 'Recurring events', desc: 'RRULE parsing matches iCloud\'s behavior. Series edit, single-occurrence override — all supported.' },
      { title: 'Timezone-aware', desc: 'VTIMEZONE blocks are honored. No 3am surprises after a trip to Tokyo.' },
    ],
    howItWorks: [
      'Go to appleid.apple.com and generate an app-specific password named "Calendro."',
      'In Calendro, Settings → Integrations → Connect Apple Calendar.',
      'Enter your Apple ID email and the 16-character app password.',
      'Your iCloud calendars appear within 30 seconds. First sync for large calendars can take up to 2 minutes.',
    ],
    permissions: [
      'Your Apple ID email (used only for CalDAV authentication).',
      'Your app-specific password (stored encrypted, never transmitted to us in plain text beyond the initial setup).',
      'We access only calendar data. Not reminders, notes, photos, or anything else in iCloud.',
    ],
    faqs: [
      { q: 'Why do I need an app password?', a: 'Apple doesn\'t offer OAuth for iCloud Calendar. App-specific passwords are their recommended alternative.' },
      { q: 'Does two-factor authentication have to be on?', a: 'Yes. Apple requires 2FA for app passwords to be issued.' },
      { q: 'Is this secure?', a: 'Yes. The app password is stored encrypted at rest using a per-user envelope key, and the CalDAV connection is over TLS 1.3.' },
    ],
  },
  {
    slug: 'outlook',
    name: 'Outlook & Microsoft 365',
    category: 'Calendar',
    tagline: 'Microsoft Graph API. OAuth in two clicks.',
    description:
      'Outlook integration is coming in Q3 2026. We\'ve built on Microsoft Graph API for the deepest possible integration — calendar, contacts, and teams-aware availability.',
    status: 'soon',
    letter: 'O',
    color: '#0078D4',
    keyFeatures: [
      { title: 'Microsoft Graph API', desc: 'The official Microsoft 365 API, not a deprecated shim. Same stability Microsoft itself relies on.' },
      { title: 'Works with personal + work', desc: 'Outlook.com, Hotmail, Microsoft 365 Business, and Microsoft 365 Enterprise all supported.' },
      { title: 'Teams meeting generation', desc: 'One-click Teams meeting links auto-embed in events.' },
      { title: 'Shared mailbox support', desc: 'Connect delegated mailboxes for assistants and team calendars.' },
    ],
    howItWorks: [
      'Outlook integration opens for beta users in Q3 2026. Join the waitlist on this page.',
      'Beta invitees receive a Microsoft OAuth link; one click enables read/write.',
      'Existing Google Calendar + Apple Calendar users will see Outlook events in the same unified view.',
    ],
    permissions: [
      'Read and write calendar events.',
      'List calendars and folders.',
      'Generate Teams meeting links (optional, per event).',
    ],
    faqs: [
      { q: 'When does it ship?', a: 'Public beta Q3 2026, GA by end of Q4 2026. Waitlist is open now.' },
      { q: 'Will it support Exchange on-prem?', a: 'Yes, via EWS fallback for customers who can\'t use Graph. Enterprise tier only.' },
      { q: 'Can I migrate from Outlook to Calendro?', a: 'Calendro doesn\'t replace Outlook — it adds to it. Outlook continues to own your mail; Calendro becomes a richer calendar view.' },
    ],
  },
  {
    slug: 'slack',
    name: 'Slack',
    category: 'Messaging',
    tagline: 'Daily briefing in-channel. Mention @calendro to schedule.',
    description:
      'The Calendro Slack app brings scheduling into the conversation. Type /schedule in any channel to create an event. Receive your daily briefing in a DM each morning. Let others book time with /calendro book @you.',
    status: 'live',
    letter: 'S',
    color: '#4A154B',
    keyFeatures: [
      { title: 'Slash commands', desc: '/schedule, /cal today, /cal tomorrow, /book — all work in any channel or DM.' },
      { title: 'Daily briefing DM', desc: 'An optional, quiet morning summary of your day, delivered as a Slack message.' },
      { title: 'Interactive event cards', desc: 'Event blocks in Slack show full details and let attendees RSVP without leaving the thread.' },
      { title: 'Private by default', desc: 'Events you share with the bot stay between you and the bot unless you explicitly post them to a channel.' },
    ],
    howItWorks: [
      'Install the Calendro Slack app from your workspace\'s app directory.',
      'Connect your Calendro account on first use (OAuth inside Slack).',
      'Use /schedule "meeting name sometime this week" to create events from anywhere in Slack.',
    ],
    permissions: [
      'Send messages (for daily briefing DMs and replies to slash commands).',
      'Access channels you\'ve added the bot to.',
      'Read user identity (to map Slack IDs to Calendro accounts).',
    ],
    faqs: [
      { q: 'Does the Slack bot see all my messages?', a: 'No. It only receives messages that explicitly mention @calendro or use a / slash command.' },
      { q: 'Is it available on Enterprise Grid?', a: 'Yes, with org-wide install and admin controls. Contact sales for rollout.' },
    ],
  },
  {
    slug: 'zoom',
    name: 'Zoom',
    category: 'Video',
    tagline: 'Auto-generate meeting links for every scheduled event.',
    description:
      'Toggle "Zoom meeting" on any event and a new meeting room is created, link embedded, and dial-ins included. Works for individual events and recurring series.',
    status: 'live',
    letter: 'Z',
    color: '#2D8CFF',
    keyFeatures: [
      { title: 'Auto-generated links', desc: 'Every Zoom-toggled event gets its own unique meeting URL.' },
      { title: 'Dial-in numbers included', desc: 'International dial-ins automatically added based on attendee locations.' },
      { title: 'Recording & waiting room controls', desc: 'Configure defaults per event or per account.' },
      { title: 'Deep integration with recurring events', desc: 'One meeting room for a full series, not 52 separate links per year.' },
    ],
    howItWorks: [
      'Settings → Integrations → Connect Zoom.',
      'Complete the Zoom OAuth flow (standard Zoom Marketplace app).',
      'When creating any event, toggle "Add Zoom meeting" to attach a link.',
    ],
    permissions: [
      'Create, update, and delete meetings on your Zoom account.',
      'Read your Zoom profile (for default settings).',
      'No access to your recordings or meeting contents.',
    ],
    faqs: [
      { q: 'What if I use Zoom Basic (free)?', a: 'Works, but 40-minute meeting limit applies. Pro Zoom accounts are unlimited.' },
      { q: 'Does it work with Zoom SSO?', a: 'Yes. Enterprise Zoom SSO is fully supported via OIDC.' },
    ],
  },
  {
    slug: 'notion',
    name: 'Notion',
    category: 'Notes',
    tagline: 'Embed your calendar in Notion. Pull meeting notes back.',
    description:
      'Calendro and Notion integrate two ways: embed your Calendro calendar inside any Notion page, and auto-link Notion meeting notes to their corresponding calendar events.',
    status: 'live',
    letter: 'N',
    color: '#E8E8E8',
    keyFeatures: [
      { title: 'Embed blocks', desc: 'Paste a Calendro URL into Notion, get an interactive calendar embed.' },
      { title: 'Auto-link meeting notes', desc: 'Notion pages created during a meeting window get auto-attached to the corresponding event.' },
      { title: 'Database sync', desc: 'Sync a Notion calendar database both ways with a specific Calendro calendar.' },
      { title: 'Private by default', desc: 'Embeds respect Notion\'s permissions — only people who can see the Notion page see the calendar.' },
    ],
    howItWorks: [
      'Settings → Integrations → Connect Notion.',
      'Authorize Calendro to access specific Notion pages (not the whole workspace).',
      'Paste Calendro URLs into Notion to embed; events now offer a "Attach Notion page" option.',
    ],
    permissions: [
      'Read and write specific pages and databases you explicitly grant.',
      'No workspace-wide access.',
    ],
    faqs: [
      { q: 'Can I use this without a Notion account?', a: 'Yes. The integration is optional. Calendro works on its own.' },
      { q: 'Does it work with Notion Teams and Enterprise?', a: 'Yes, including SSO-enabled workspaces.' },
    ],
  },
]

export function getIntegration(slug: string) {
  return INTEGRATIONS.find((i) => i.slug === slug) ?? null
}
