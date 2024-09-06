import bcrypt from 'bcrypt'
export async function hashPassword(password: string, saltRounds: number): Promise<string> {
  return await bcrypt.hash(password, saltRounds)
}