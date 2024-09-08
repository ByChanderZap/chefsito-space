import prisma from '@/lib/prisma'
import { Prisma } from '@prisma/client'


export async function getUserByUsernameOrEmail({ username, email }: { username?: string, email?: string }) {
  return await prisma.user.findFirst({
    where: {
      OR: [
        { email: email },
        { username: username }
      ]
    }
  })
}

export async function createUser(data: Prisma.UserCreateInput) {
  const user = await prisma.user.create({
    data,
  });
  return user;
}