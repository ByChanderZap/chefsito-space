import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { SignInFormSchema } from './validations/auth.schema';
import { getUserByUsernameOrEmail } from './lib/store/user.queries';
import { passwordMatch } from './lib/utils/password-utils';
import Discord from 'next-auth/providers/discord';

 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name:'credentials',
      async authorize(credentials) {
        const parsedCredentials = SignInFormSchema.safeParse(credentials) 
        
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUserByUsernameOrEmail({email});

          if (!user) return null;

          const match = await passwordMatch(password, user.password as string)

          if(match) return user
        }
        console.log('Invalid credentials')
        return null;
      },
    }),
  ],
});
