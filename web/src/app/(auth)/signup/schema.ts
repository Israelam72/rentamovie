import { z } from "zod"

export type SignUpData = z.infer<typeof signUpSchema>

export const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .max(15, "Password must be less than 15 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and NO special characters"
    ),
  confirmPassword: z.string()
    .min(8, "Password must be at least 8 characters")
    .max(15, "Password must be less than 15 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and NO special characters"
    ),
  terms: z.boolean().refine((data) => data, {
    message: "You must accept the terms and conditions"
  }),
  privacy: z.boolean().refine((data) => data, {
    message: "You must accept the privacy policy"
  })
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
})