import NextAuth from "next-auth"
import authConfig from "@/auth.config"

import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import { getUserById } from "./lib/data/user.queries"
 
export const { 
  handlers, 
  signIn, 
  signOut, 
  auth 
} = NextAuth({
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error"
  },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    }
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow oauth without email verification
      if (account?.provider !== 'credentials') return true

      const existingUser = await getUserById(user.id as string)
      
      //Prevent sign in without email verification
      if (!existingUser?.emailVerified) return false

      // TODO: add 2fa check

      return true
    },

    async session({ user, token, session }) {

      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (token.role && session.user) {
        session.user.role = token.role
      }

      return session
    },
    async jwt({ token }) {
      if(!token.sub) return token

      const existingUser = await getUserById(token.sub)

      if(!existingUser) return token

      token.role = existingUser.role

      return token
    }
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig
})
