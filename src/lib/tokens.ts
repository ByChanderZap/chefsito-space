import { v4 as uuidv4 } from "uuid"
import { createVerificationToken, getVerificationTokenByEmail, removeVerificationToken } from "@/lib/data/verification-token"

import { createPasswordResetToken, getPasswordResetTokenByEmail, removePasswordResetToken } from '@/lib/data/password-reset-token'

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4()
  const expires = new Date(new Date().getTime() + 3600 * 1000)

  const existingToken = await getPasswordResetTokenByEmail(email)

  if (existingToken) {
    removePasswordResetToken(existingToken.id)
  }

  const passwordResetToken = createPasswordResetToken({
    email,
    expires,
    token
  })

  return passwordResetToken
}



export const generateVerificationToken = async (email: string) => {
  const token = uuidv4()
  const expires = new Date(new Date().getTime() + 3600 * 1000)

  const existingToken = await getVerificationTokenByEmail(email)
  if (existingToken) {
    await removeVerificationToken(existingToken.id)
  }

  const verificationToken = createVerificationToken({
    email,
    token,
    expires
  })
  
  return verificationToken
}