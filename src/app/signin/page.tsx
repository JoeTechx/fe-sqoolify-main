"use client"

import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import TopBar from "@/components/TopBar"
import Wrapper from "@/components/Wrapper"
import Link from "next/link"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { useRouter } from "next/navigation"
import { useState } from "react"

const FormSchema = z.object({
  email: z.string().email("Please enter your email address"),
  password: z.string().min(5, "Please enter a valid password"),
})

export default function SignIn() {
  const navigation = useRouter()
  const [loading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // Fake Data:
  const correctData = {
    email: "sqoolify@gmail.com",
    password: "12345678",
  }

  const { toast } = useToast()
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data, correctData)
    if (
      data.email === correctData.email &&
      data.password === correctData.password
    ) {
      setTimeout(() => {
        setLoading(true)
      }, 300)
      navigation.push("/requirements")
      return
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Invalid email or password!.",
      })
    }
  }

  return (
    <MaxWidthWrapper>
      <TopBar text="New to SQOOLIFY?" btnText="Sign Up" />
      <Wrapper className="h-full max-w-[450px] w-full mx-auto gap-4 mt-[4rem] sm:mt-[4rem]">
        <div className="text-center mb-8 ">
          <h3 className="text-primaryColor text-2xl sm:text-3xl  mb-4">
            Welcome Back!
          </h3>
          <p className="text-[#434547]"> Login to visit your dashboard</p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-primaryColor text-white">
              {loading ? "Login in..." : "Login"}
            </Button>
            <div className="">
              <Link href={"/resetpassword"} className="text-sm text-[#434547]  ">
                Forgot password?
              </Link>
            </div>
          </form>
        </Form>
      </Wrapper>
    </MaxWidthWrapper>
  )
}
