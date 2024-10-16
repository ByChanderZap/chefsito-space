"use server"

import { getPasswordResetTokenByToken, removePasswordResetToken } from "@/lib/data/password-reset-token"
import { getUserByEmail, updateUserPassword } from "@/lib/data/user.queries"
import { hashPassword } from "@/lib/utils/password-utils"
import { NewPasswordSchema } from "@/validations/auth.schema"
import * as z from 'zod'

export const newPasswordAction = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
) => {
  if (!token) {
    return {
      error: 'Missing Token!'
    }
  }

  const validatedFields = NewPasswordSchema.safeParse(values)

    if (!validatedFields.success) {
      return {
        error: "Invalid fields"
      }
    }

  const { password } = validatedFields.data

  const existingToken = await getPasswordResetTokenByToken(token)

  if (!existingToken) {
    return {
      error: "Invalid token!"
    }
  }

  const hasExpired = new Date(existingToken.expires) < new Date()

  if (hasExpired) {
    return {
      error: "Expired token"
    }
  }

  const existingUser = await getUserByEmail({ email: existingToken.email })

  if (!existingUser) {
    return {
      error: "Email does not exist"
    }
  }

  const hashedPassword = await hashPassword(password, 10)

  await updateUserPassword(existingUser.id, hashedPassword)

  await removePasswordResetToken(existingToken.id)

  return {
    success: "Password Updated!"
  }
}