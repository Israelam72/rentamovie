import { z } from "zod"

export type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>

export const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address")
})