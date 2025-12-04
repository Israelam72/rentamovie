import { z } from "zod"

export type SignInData = z.infer<typeof signInSchema>

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .max(15, "Password must be less than 15 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and NO special characters"
    ),
  rememberMe: z.boolean().optional()
})