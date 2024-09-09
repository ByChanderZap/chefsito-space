'use server'

import { signIn } from "@/auth";
import { createUser, getUserByUsernameOrEmail } from "@/lib/store/user.queries";
import { hashPassword } from "@/lib/utils/password-utils";
import { SignUpFormState } from "@/types/auth/signin-formstate";
import { SignUpFormSchema, SignInFormSchema } from '@/validations/auth.schema'
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";



export async function signUpAction(prevState: SignUpFormState, formData: FormData) {
  const validatedFields = SignUpFormSchema.safeParse({
    name: formData.get('name'),
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirm_password'),
  }) 

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to create user.',
    };
  }
 
  const { name, username, password, email } = validatedFields.data

  try {
    const user = await getUserByUsernameOrEmail({ username, email })
    if (user) {
      return {
        message: 'Credentials already in use.'
      }
    }

    const hashedPassword = await hashPassword(password, 10)
    
    const userCreated = await createUser({
      name,
      username,
      email,
      password: hashedPassword
    })

    console.log(userCreated)
    await new Promise((resolve) => setTimeout(resolve, 1000))
  } catch (error) {
    console.error(error)
  }

  redirect('/auth/signin')
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
