import { z } from 'zod'
import { patterns } from '../../constants'
import { Placement } from '../../components/placement'
export const schema = z.object({
  name: z.string()
    .min(1, { message: 'Name is required' })
    .max(50, { message: 'Max length is 50' }),
  age: z.number()
    .min(18, { message: 'Min age is 18' }),
  placement: z.array(z.string()).min(1).max(2),
  email: z.string()
    .min(1, { message: 'Email is required' })
    .refine((theInputValue) =>
      patterns.email.test(theInputValue)
      , { message: 'Invalid email' })
})
//    .email({ message: 'Invalid email' }),
export type Schema = z.infer<typeof schema>
