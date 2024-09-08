'use server'

import { createUser, getUserByUsernameOrEmail } from "@/lib/store/user.queries";
import { hashPassword } from "@/lib/utils/password-utils";
import { FormState } from "@/types/auth/signin-formstate";
import { SignInFormSchema } from '@/validations/auth.schema'



export async function signUp(prevState: FormState, formData: FormData) {
  const validatedFields = SignInFormSchema.safeParse({
    name: formData.get('name'),
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirm_password'),
  }) 

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

 
  const { name, username, password, email, confirmPassword } = validatedFields.data
  // console.log({
  //   name,
  //   username,
  //   email,
  //   password,
  //   confirmPassword
  // })

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

  return {
    
  }
}