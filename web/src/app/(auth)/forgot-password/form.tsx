"use client"

import { FormControl, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Form, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { forgotPasswordSchema } from "./schema";

const ForgotPasswordForm = () => {
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema)
  })

  const onSubmit = (data: z.infer<typeof forgotPasswordSchema>) => {
    console.log(data)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
          <p className="text-gray-300 text-sm text-center">Enter the email address associated with your RENTAMOVIE account.</p>
          <FormField 
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="email" className="text-sm font-medium tracking-wide text-gray-300">Email</FormLabel>
                <FormControl>
                  <Input id="email" type="email" placeholder="Enter your email" {...field} className="bg-gray-800 border-2 border-gray-700 focus:border-pink-light focus-visible:ring-0 rounded-none h-11 text-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-pink-md text-background rounded-none hover:bg-pink-dark transform -skew-x-6 transition-colors duration-300 hover:translate-x-[-1px] hover:translate-y-[1px] active:translate-x-[-4px] active:translate-y-[4px] transition-transform duration-100">Continue</Button>
        </form>
      </Form>
    </>
  )
}

export default ForgotPasswordForm;