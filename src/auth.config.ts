// import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"

import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { SignInFormSchema } from '@/validations/auth.schema';
import { getUserByEmail } from "@/lib/data/user.queries";
import { passwordMatch } from "./lib/utils/password-utils";
import Discord from "next-auth/providers/discord";

 
export default { 
  providers: [
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET
    }),
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
