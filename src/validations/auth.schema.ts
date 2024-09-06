import { z } from 'zod';


export const SignInFormSchema = z
  .object({
    name: z
      .string({
        invalid_type_error: 'Please enter a valid name.',
      }).trim().min(1, {
        message: 'Name is required.'
      }).max(200, {
        message: 'Name is too long.'
      }),
    username: z
      .string({
        invalid_type_error: 'Please enter a valid username.'
      })
      .trim()
      .min(1, {
        message: 'Username is required.'
      }).max(200, {
        message: 'Username is too long.'
      }),
    email: z
      .string()
      .email('Not a valid Email.')
      .min(1, { message: 'Email is required.' })
      .max(300, { message: 'Email is too long.' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long.' })
      .max(100, { message: 'Password maximum length is 100 characters.' }),
    confirmPassword: z
      .string()
      .min(8, { message: 'Confirm Password must be at least 8 characters long.' })
      .max(100, { message: 'Password maximum length is 100 characters.' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match. Please try again.',
    path: ['confirmPassword'],
  });