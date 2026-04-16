'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  CheckCircle2,
  Loader2,
  Unlink,
  ExternalLink,
} from 'lucide-react'

function AppleLogo({ className }: { className?: string }) {
  return <img src="/apple-logo.svg" alt="Apple" className={className} />
}

interface AppleCalendarFormProps {
  linked: boolean
  appleId: string | null
}

export function AppleLink({ linked: initialLinked, appleId: initialAppleId }: AppleCalendarFormProps) {
  const [linked, setLinked] = useState(initialLinked)
  const [appleId, setAppleId] = useState(initialAppleId ?? '')
  const [showForm, setShowForm] = useState(false)
  const [formAppleId, setFormAppleId] = useState('')
  const [formPassword, setFormPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  async function handleLink() {
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const res = await fetch('/api/apple', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ appleId: formAppleId, appPassword: formPassword }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? 'Failed to connect')
        return
      }

      setLinked(true)
      setAppleId(formAppleId)
      setShowForm(false)
      setFormPassword('')
      setSuccess(`Connected! Found ${data.calendars?.length ?? 0} calendar(s).`)
      setTimeout(() => setSuccess(null), 5000)
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  async function handleUnlink() {
    setLoading(true)
    try {
      await fetch('/api/apple', { method: 'DELETE' })
      setLinked(false)
      setAppleId('')
      setShowForm(false)
      setSuccess(null)
    } finally {
      setLoading(false)
    }
  }

  if (linked) {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AppleLogo className="h-5 w-5 text-foreground" />
            <div>
              <p className="text-sm font-medium">Apple Calendar</p>
              <p className="text-xs text-muted-foreground">{appleId}</p>
            </div>
          </div>
          <Badge variant="secondary" className="gap-1">
            <CheckCircle2 className="h-3 w-3 text-emerald-500" />
            Connected
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleUnlink}
          disabled={loading}
          className="text-destructive hover:text-destructive"
        >
          {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin mr-1.5" /> : <Unlink className="h-3.5 w-3.5 mr-1.5" />}
          Disconnect Apple Calendar
        </Button>
        {success && (
          <p className="text-xs text-emerald-400">{success}</p>
        )}
      </div>
    )
  }

  if (!showForm) {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AppleLogo className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Apple Calendar</p>
              <p className="text-xs text-muted-foreground">Not connected</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={() => setShowForm(true)}>
            Connect
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <AppleLogo className="h-5 w-5 text-foreground" />
        <p className="text-sm font-medium">Connect Apple Calendar</p>
      </div>

      <div className="space-y-3 pl-8">
        <div className="rounded-md border border-border bg-muted/30 p-3 text-xs text-muted-foreground space-y-2">
          <p className="font-medium text-foreground/80">How to get an app-specific password:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Go to <a href="https://appleid.apple.com/account/manage" target="_blank" rel="noopener noreferrer" className="text-gold underline underline-offset-2 inline-flex items-center gap-0.5">appleid.apple.com <ExternalLink className="h-2.5 w-2.5" /></a></li>
            <li>Sign in &rarr; <strong>App-Specific Passwords</strong></li>
            <li>Click <strong>+</strong> to generate one, name it &ldquo;Calendro&rdquo;</li>
            <li>Copy the password and paste it below</li>
          </ol>
        </div>

        <div>
          <label htmlFor="apple-id" className="text-xs font-medium text-muted-foreground mb-1 block">
            Apple ID (email)
          </label>
          <Input
            id="apple-id"
            type="email"
            placeholder="you@icloud.com"
            value={formAppleId}
            onChange={e => setFormAppleId(e.target.value)}
            className="h-9 text-sm"
          />
        </div>

        <div>
          <label htmlFor="app-password" className="text-xs font-medium text-muted-foreground mb-1 block">
            App-specific password
          </label>
          <Input
            id="app-password"
            type="password"
            placeholder="xxxx-xxxx-xxxx-xxxx"
            value={formPassword}
            onChange={e => setFormPassword(e.target.value)}
            className="h-9 text-sm font-mono"
          />
        </div>

        {error && (
          <p className="text-xs text-destructive" role="alert">{error}</p>
        )}

        <div className="flex gap-2">
          <Button
            size="sm"
            onClick={handleLink}
            disabled={!formAppleId || !formPassword || loading}
            className="bg-gold text-[#0c0c0f] hover:bg-gold/90 font-medium"
          >
            {loading ? (
              <>
                <Loader2 className="h-3 w-3 animate-spin mr-1.5" />
                Connecting...
              </>
            ) : (
              'Connect'
            )}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => { setShowForm(false); setError(null) }}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
}
