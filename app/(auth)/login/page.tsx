import { signIn } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign in',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen dot-grid flex">
      {/* Left — decorative */}
      <div className="hidden lg:flex flex-1 flex-col justify-between p-12 border-r border-border">
        <div className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Momenties" className="h-7 w-7" />
          <span className="font-display text-lg font-semibold">Momenties</span>
        </div>
        <blockquote className="space-y-3">
          <p className="font-display text-3xl font-semibold leading-snug text-foreground max-w-xs">
            &ldquo;The best calendar is the one you actually keep up to date.&rdquo;
          </p>
          <footer className="font-mono text-xs text-gold/70 tracking-wider">
            — ZERO FRICTION SCHEDULING
          </footer>
        </blockquote>
        <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
          {new Date().getFullYear()} · AI Calendar
        </div>
      </div>

      {/* Right — sign in */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        <div className="w-full max-w-sm space-y-10 animate-fade-up">
          {/* Logo (mobile only) */}
          <div className="lg:hidden flex flex-col items-center gap-2">
            <img src="/logo.png" alt="Momenties" className="h-12 w-12" />
            <span className="font-display text-2xl font-bold">Momenties</span>
          </div>

          {/* Heading */}
          <div className="space-y-2 text-center lg:text-left">
            <h1 className="font-display text-3xl font-bold">
              Welcome back.
            </h1>
            <p className="text-muted-foreground text-sm">
              Connect Google Calendar and start scheduling in seconds.
            </p>
          </div>

          {/* Google sign-in */}
          <form
            action={async () => {
              'use server'
              await signIn('google', { redirectTo: '/calendar' })
            }}
            className="space-y-4"
          >
            <Button
              type="submit"
              size="lg"
              className="w-full gap-3 bg-foreground text-background hover:bg-foreground/90 font-medium press rounded-xl h-12"
            >
              <GoogleIcon />
              Continue with Google
            </Button>

            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              We request Google Calendar access to create and display your events.
            </p>
          </form>

          {/* Gold divider decoration */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-border" />
            <span className="font-mono text-xs text-gold/40">✦</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <p className="text-center text-xs text-muted-foreground">
            By continuing you agree to our{' '}
            <a href="/terms" className="text-foreground/60 underline underline-offset-2 hover:text-foreground transition-colors">
              Terms
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-foreground/60 underline underline-offset-2 hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}
