import Link from 'next/link'
import { CalendarX } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen dot-grid flex flex-col items-center justify-center gap-6 text-center px-6">
      <div className="w-20 h-20 rounded-2xl bg-gold/10 flex items-center justify-center">
        <CalendarX className="h-10 w-10 text-gold/40" />
      </div>
      <div className="space-y-2">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold/50">404</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
          Nothing here.
        </h1>
        <p className="text-muted-foreground text-sm max-w-xs mx-auto">
          This page doesn&apos;t exist — or maybe you typed a date wrong.
        </p>
      </div>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press"
      >
        Back to Calendro
      </Link>
    </div>
  )
}
