import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'
import { getUserTier } from '@/lib/pro'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Download, User } from 'lucide-react'
import { AppleLink } from '@/components/settings/AppleLink'
import { PreferencesForm } from '@/components/settings/PreferencesForm'
import { ThemePicker } from '@/components/settings/ThemePicker'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Settings',
}

export default async function SettingsPage() {
  const session = await auth()
  if (!session?.user) redirect('/login')

  const apple = await db.appleCalendar.findUnique({
    where: { userId: session.user.id },
  })

  const tier = await getUserTier(session.user.id)

  return (
    <div className="flex-1 overflow-auto p-4 md:p-6 max-w-2xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight font-display">Settings</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Manage your connected accounts and preferences.
        </p>
      </div>

      <div className="space-y-5">
        {/* Profile */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <img
                src={session.user.image ?? '/logo.png'}
                className="w-12 h-12 rounded-full ring-2 ring-gold/20"
                alt={session.user.name ?? 'User'}
              />
              <div>
                <p className="text-sm font-medium">{session.user.name}</p>
                <p className="text-xs text-muted-foreground">{session.user.email}</p>
                <p className="text-[10px] text-gold/60 font-mono uppercase tracking-wider mt-1">
                  {tier === 'pro' ? 'Pro member' : 'Free plan'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Connected accounts */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Connected accounts</CardTitle>
            <CardDescription>
              Momenties syncs events with these services.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Google */}
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <img src="/google-calendar.png" alt="Google Calendar" className="h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">Google Calendar</p>
                  <p className="text-xs text-muted-foreground">{session.user.email}</p>
                </div>
              </div>
              <Badge variant="secondary" className="gap-1">
                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                Connected
              </Badge>
            </div>

            {/* Apple Calendar */}
            <div className="border-t border-border pt-4">
              <AppleLink
                linked={!!apple?.enabled}
                appleId={apple?.appleId ?? null}
              />
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Preferences</CardTitle>
            <CardDescription>
              Customize your calendar experience.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PreferencesForm />
          </CardContent>
        </Card>

        {/* Themes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Appearance</CardTitle>
            <CardDescription>
              Choose your calendar theme.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ThemePicker isPro={tier === 'pro'} />
          </CardContent>
        </Card>

        {/* Export */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Data</CardTitle>
            <CardDescription>
              Export your calendar data.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <a
              href="/api/export"
              download="momenties-export.ics"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-sm text-foreground hover:bg-gold/5 hover:border-gold/30 transition-all press"
            >
              <Download className="h-4 w-4" />
              Export as .ics file
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
