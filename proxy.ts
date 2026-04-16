import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
  const session = await auth()
  const { pathname } = request.nextUrl

  const isAppRoute =
    pathname.startsWith('/calendar') || pathname.startsWith('/settings')

  if (isAppRoute && !session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (pathname === '/login' && session) {
    return NextResponse.redirect(new URL('/calendar', request.url))
  }

  return NextResponse.next()
}

export const proxyConfig = {
  matcher: ['/calendar/:path*', '/settings/:path*', '/login'],
}
