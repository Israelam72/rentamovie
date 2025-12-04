"use client"

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { z } from "zod";
import { signUpSchema } from "./schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpForm = () => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema)
  });

  const onSubmit = (data: z.infer<typeof signUpSchema>) => {
    console.log(data);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="name" className="text-sm font-medium tracking-wide text-gray-300">Your Name</FormLabel>
                <FormControl>
                  <Input id="name" type="text" placeholder="Enter your name" {...field} className="bg-gray-800 border-2 border-gray-700 focus:border-teal-light focus-visible:ring-0 rounded-none h-11 text-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="email" className="text-sm font-medium tracking-wide text-gray-300">Your Email</FormLabel>
                <FormControl>
                  <Input id="email" type="email" placeholder="Enter your email" {...field} className="bg-gray-800 border-2 border-gray-700 focus:border-teal-light focus-visible:ring-0 rounded-none h-11 text-white" />
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
                  <FormLabel htmlFor="password" className="text-sm font-medium tracking-wide text-gray-300">Choose a Password</FormLabel>
                </div>
                  <FormControl>
                    <Input id="password" type="password" placeholder="Enter your password" {...field} className="bg-gray-800 border-2 border-gray-700 focus:border-teal-light focus-visible:ring-0 rounded-none h-11 text-white" />
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="confirmPassword" className="text-sm font-medium tracking-wide text-gray-300">Confirm Your Password</FormLabel>
                <FormControl>
                  <Input id="confirmPassword" type="password" placeholder="Confirm your password" {...field} className="bg-gray-800 border-2 border-gray-700 focus:border-teal-light focus-visible:ring-0 rounded-none h-11 text-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormControl>
                  <Checkbox id="terms" className="border-gray-600 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-md" checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel 
                  htmlFor="terms" 
                  style={{ margin: "unset" }}
                  className="text-gray-300 cursor-pointer">
                    I accept the terms and conditions
                </FormLabel> 
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="privacy"
            render={({ field }) => (
            <FormItem className="flex items-center gap-2">
              <FormControl>
                <Checkbox id="privacy" className="border-gray-600 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-md" checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormLabel 
                htmlFor="privacy" 
                style={{ margin: "unset" }}
                className="text-gray-300 cursor-pointer">
                  I accept the privacy policy
              </FormLabel> 
              <FormMessage />
            </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-teal-md text-background rounded-none hover:bg-teal-dark transform -skew-x-6 transition-colors duration-300 hover:translate-x-[-1px] hover:translate-y-[1px] active:translate-x-[-4px] active:translate-y-[4px] transition-transform duration-100">Submit</Button>
        </form>
      </Form>
    </>
  )
}

export default SignUpForm;