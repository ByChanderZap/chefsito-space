import prisma from '@/lib/prisma'


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


export async function createUser() {
  prisma.user.create()
}