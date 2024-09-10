// import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"

import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { SignInFormSchema } from '@/validations/auth.schema';
import { getUserByEmail } from "@/lib/data/user.queries";
import { passwordMatch } from "./lib/utils/password-utils";

 
export default { 
  // providers: [GitHub] 
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = SignInFormSchema.safeParse(credentials)
        if (parsedCredentials.success) {
          const {email, password} = parsedCredentials.data
          const user = await getUserByEmail({email});

          if (!user || !user.password) return null

          const match = await passwordMatch(password, user.password)

          if (match) return user
        }

        return null
      }
    })
  ]
} satisfies NextAuthConfig


// import { PrismaAdapter } from '@auth/prisma-adapter';
// import type { NextAuthConfig } from 'next-auth';
// import {prisma} from './lib/prisma';

// export const authConfig: NextAuthConfig = {
//   pages: {
//     signIn: '/auth/signin',
//   },
//   callbacks: {
//     async authorized({ auth, request: { nextUrl } }) {
//       const isLoggedIn = !!auth?.user;

//       if (isLoggedIn && nextUrl.pathname === '/login') {
//         return Response.redirect(new URL('/profile', nextUrl));
//       }

//       /**
//        * TODO:
//        * Remove this shit, this is just for understand
//        */
//       const isOnProtected = nextUrl.pathname.startsWith('/protected');
//       if(isOnProtected) {
//         return isLoggedIn
//       }
//       // Allow access to all other pages for now
//       return true;
//     },
//   },
//   providers: [],
//   adapter: PrismaAdapter(prisma),
//   debug: true
// } satisfies NextAuthConfig;
