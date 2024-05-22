import { z } from 'zod'
export const schema = z.object({
  name: z.string()
    .min(1, { message: 'Name is required' })
    .max(50, { message: 'Max length is 50' }),
  age: z.number()
    .min(18, { message: 'Min age is 18' }),
  email: z.string()
    .min(1, { message: 'Email is required' })
    .refine((email) => {
      return patterns.email.test(email)
    }, { message: 'Invalid email' })
//    .email({ message: 'Invalid email' }),
