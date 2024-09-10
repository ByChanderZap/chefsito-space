"use server"

import { getUserByEmail, verifyEmail } from '@/lib/data/user.queries'
import { getVerificationTokenByToken, removeVerificationToken } from '@/lib/data/verification-token'
import { prisma } from '@/lib/prisma'

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token)

  if(!existingToken) {
    return {
      error: "Token does not exists."
    }
  }

  const hasExpired = new Date(existingToken.expires) < new Date()

  if (hasExpired) {
    return {
      error: "Token has expired"
    }
  }

  const existingUser = await getUserByEmail({ email: existingToken.email })
  if (!existingUser) {
    return {
      error: "User does not exists"
    }
  }

  // await prisma.user.update({
  //   where: { id: existingUser.id },
  //   data: {
  //     emailVerified: new Date(),
  //     email: existingToken.email
  //   }
  // })
  await verifyEmail(existingUser.id, existingUser.email)

  // await prisma.verificationToken.delete({
  //   where: {
  //     id: existingToken.id
  //   }
  // })
  await removeVerificationToken(existingToken.id)

  return {
    success: "Email Verified"
  }
}