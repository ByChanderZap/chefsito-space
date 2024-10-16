import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)
const HOST = 'http://localhost:3000'

export const sendVerificationEmail = async (
  email: string,
  token: string
) => {
  const confirmLink = `${HOST}/auth/new-verification?token=${token}`

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `<p> Click <a href="${confirmLink}">Here</a> to confirm email</p>`
  })
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetPasswordLink = `${HOST}/auth/new-password?token=${token}`

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `<p> Click <a href="${resetPasswordLink}">Here</a> to reset your password</p>`
  })
}