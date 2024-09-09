import { PrismaAdapter } from '@auth/prisma-adapter';
import type { NextAuthConfig } from 'next-auth';
import {prisma} from './lib/prisma';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      if (isLoggedIn && nextUrl.pathname === '/login') {
        return Response.redirect(new URL('/profile', nextUrl));
      }

      /**
       * TODO:
       * Remove this shit, this is just for understand
       */
      const isOnProtected = nextUrl.pathname.startsWith('/protected');
      if(isOnProtected) {
        return isLoggedIn
      }
      // Allow access to all other pages for now
      return true;
    },
  },
  providers: [],
  adapter: PrismaAdapter(prisma),
  debug: true
} satisfies NextAuthConfig;
