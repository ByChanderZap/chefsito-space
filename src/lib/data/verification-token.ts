import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const getVerificationTokenByEmail = async (
  email: string
) => {
  try {
    const verificationToken = prisma.verificationToken.findFirst({
      where: { email }
    })
    return verificationToken
  } catch (error) {
    return null
  }
}


export const getVerificationTokenByToken = async (
  token: string
) => {
  try {
    const verificationToken = prisma.verificationToken.findUnique({
      where: { token }
    })
    return verificationToken

  } catch (error) {
    return null
  }
}

export const removeVerificationToken = async (tokenId: string) => {
  await prisma.verificationToken.delete({
    where: {
      id: tokenId
    }
  })
}

export const createVerificationToken = async (data: Prisma.VerificationTokenCreateInput) => {
  return await prisma.verificationToken.create({
    data: {
      ...data
    }
  })
}