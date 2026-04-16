import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from '@/lib/db'
import { log } from '@/lib/logger'

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      authorization: {
        params: {
          scope: [
            'openid',
            'email',
            'profile',
            'https://www.googleapis.com/auth/calendar',
          ].join(' '),
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    }),
  ],
  callbacks: {
    signIn({ account }) {
      // Only allow Google OAuth sign-ins
      if (account?.provider !== 'google') return false
      return true
    },
    redirect({ url, baseUrl }) {
      // Prevent open-redirect attacks — only allow relative or same-origin URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`
      if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    session({ session, user }) {
      session.user.id = user.id
      return session
    },
  },
  events: {
    signIn({ user }) {
      log.info('user_signed_in', { userId: user.id })
    },
    signOut(message) {
      const userId = 'token' in message ? undefined : message.session?.userId
      log.info('user_signed_out', { userId })
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
})
