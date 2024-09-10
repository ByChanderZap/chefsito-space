import {prisma} from '@/lib/prisma'
import { Prisma } from '@prisma/client'


export async function getUserByEmail({ email }: { email: string }) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    return user
  } catch(e) {
    console.error(e)
    return null
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({ where: { id }})

    return user
  } catch(e) {
    console.error(e)
    return null
  }
}

export async function createUser(data: Prisma.UserCreateInput) {
  const user = await prisma.user.create({
    data,
  });
  return user;
}