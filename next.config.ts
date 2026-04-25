import type { NextConfig } from 'next'

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), geolocation=(), microphone=(self)' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Next.js requires unsafe-eval in dev
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://lh3.googleusercontent.com https://www.gstatic.com",
      "font-src 'self'",
      "connect-src 'self' https://generativelanguage.googleapis.com https://api.deepgram.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  // Disable built-in compression to suppress the Node.js DEP0108
  // (zlib.bytesRead) deprecation warning. In production, compression
  // should be handled by the reverse proxy (Nginx, Cloudflare, Vercel).
  compress: false,

  turbopack: {
    root: __dirname, // Momenties is the workspace root, ignore parent lockfiles
  },

  experimental: {
    // Render up to 32 static pages in parallel instead of the default 8.
    // With 400+ marketing pages this cuts static-generation time by ~4×.
    staticGenerationMaxConcurrency: 32,
    // Each worker handles at least 4 pages before spawning another,
    // avoiding excessive process-spawn overhead for small page batches.
    staticGenerationMinPagesPerWorker: 4,
  },

  headers: async () => [
    {
      source: '/(.*)',
      headers: securityHeaders,
    },
  ],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Google profile pictures
      },
    ],
  },

  // Limit API request body size (Next.js 16+)
  serverExternalPackages: ['googleapis', '@prisma/client', '.prisma/client'],

  poweredByHeader: false, // Don't expose "X-Powered-By: Next.js"
}

export default nextConfig
