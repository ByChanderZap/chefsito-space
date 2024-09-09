import bcrypt from 'bcrypt'
export async function hashPassword(password: string, saltRounds: number): Promise<string> {
  return await bcrypt.hash(password, saltRounds)
}

export async function passwordMatch(password: string, storedPassword: string){
  return await bcrypt.compare(password, storedPassword);
}