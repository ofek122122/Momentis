'use client'

import { useEffect } from 'react'

export default function GlobalErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Fatal global error:', error)
  }, [error])

  return (
    <html lang="en">
      <body
        style={{
          minHeight: '100vh',
          margin: 0,
          background: '#0c0c0f',
          color: '#f0ece3',
          fontFamily: 'Georgia, serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <div style={{ maxWidth: 480, textAlign: 'center' }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: 'rgba(197,163,92,0.1)',
              border: '1px solid rgba(197,163,92,0.2)',
              margin: '0 auto 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#c5a35c',
              fontSize: 22,
            }}
          >
            !
          </div>
          <p
            style={{
              fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
              fontSize: 11,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(197,163,92,0.7)',
              margin: '0 0 1rem',
            }}
          >
            Fatal error
          </p>
          <h1 style={{ fontSize: 36, fontWeight: 700, margin: 0, lineHeight: 1.1 }}>
            Something failed,{' '}
            <em style={{ fontStyle: 'italic', color: '#c5a35c' }}>loudly</em>.
          </h1>
          <p
            style={{
              marginTop: '1.25rem',
              color: 'rgba(240,236,227,0.7)',
              fontSize: 15,
              lineHeight: 1.6,
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, "DM Sans", sans-serif',
            }}
          >
            A catastrophic error slipped past every guard. We&apos;ve already logged it. Try refreshing; if the problem persists, reach us at{' '}
            <a href="mailto:help@calendro.app" style={{ color: '#c5a35c' }}>
              help@calendro.app
            </a>
            .
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={reset}
              style={{
                background: '#c5a35c',
                color: '#0c0c0f',
                border: 'none',
                borderRadius: 999,
                padding: '0.6rem 1.4rem',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily:
                  'ui-sans-serif, system-ui, -apple-system, "DM Sans", sans-serif',
              }}
            >
              Try again
            </button>
            <a
              href="/"
              style={{
                display: 'inline-block',
                color: '#f0ece3',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 999,
                padding: '0.6rem 1.4rem',
                fontSize: 14,
                fontFamily:
                  'ui-sans-serif, system-ui, -apple-system, "DM Sans", sans-serif',
                textDecoration: 'none',
              }}
            >
              Back home
            </a>
          </div>
          {error.digest && (
            <p
              style={{
                marginTop: '2.5rem',
                fontFamily:
                  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                fontSize: 11,
                color: 'rgba(240,236,227,0.4)',
              }}
            >
              trace: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  )
}
