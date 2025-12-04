"use client"

import { FormControl, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Form, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signInSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignInForm = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema)
  })

  const onSubmit = (data: z.infer<typeof signInSchema>) => {
    console.log(data)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex justify-between items-center">
                  <FormLabel htmlFor="password" className="text-sm font-medium tracking-wide text-gray-300">Password</FormLabel>
                  <Link href="/forgot-password" className="text-pink-md text-xs hover:underline hover:text-pink-light transition-colors duration-100">Forgot password?</Link>
                </div>
                  <FormControl>
                    <Input id="password" type="password" placeholder="Enter your password" {...field} className="bg-gray-800 border-2 border-gray-700 focus:border-pink-light focus-visible:ring-0 rounded-none h-11 text-white" />
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormControl>
                  <Checkbox id="rememberMe" className="border-gray-600 data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-md" checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel 
                  htmlFor="rememberMe" 
                  style={{ margin: "unset" }}
                  className="text-gray-300 cursor-pointer">
                    Remember me
                </FormLabel> 
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-pink-md text-background rounded-none hover:bg-pink-dark transform -skew-x-6 transition-colors duration-300 hover:translate-x-[-1px] hover:translate-y-[1px] active:translate-x-[-4px] active:translate-y-[4px] transition-transform duration-100">Sign In</Button>
          <div className="flex items-center justify-center">
            <p className="text-gray-300 text-sm">Don't have an account? <Link href="/signup" className="text-pink-md hover:underline hover:text-pink-light transition-colors duration-100 m-0 p-0">Sign up</Link></p>
          </div>
        </form>
      </Form>
    </>
  )
}

export default SignInForm;