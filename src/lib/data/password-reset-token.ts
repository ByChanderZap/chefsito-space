import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await prisma.passwordResetToken.findUnique({
      where: { token }
    })

    return passwordResetToken 
  } catch (error) {
    return null
  }
}

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await prisma.passwordResetToken.findFirst({
      where: { email }
    })

    return passwordResetToken 
  } catch (error) {
    return null
  }
}

export const removePasswordResetToken = async (tokenId: string) => {
  await prisma.passwordResetToken.delete({
    where: {
      id: tokenId
    }
  })
}


export const createPasswordResetToken = async (data: Prisma.PasswordResetTokenCreateInput) => {
  return await prisma.passwordResetToken.create({
    data: {
      ...data
    }
  })
}
