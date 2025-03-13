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
import { zodResolver } from "@hookform/resolvers/zod"

import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import PhoneNumberInput from "@/components/PhoneInput"
import TopBar from "@/components/TopBar"
import Wrapper from "@/components/Wrapper"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useRouter } from "next/navigation"

const FormSchema = z
  .object({
    firstname: z.string().min(3, "Please provide your first name"),
    lastname: z.string().min(3, "Please provide your last name"),
    policy: z.boolean(),
    phone: z.string().refine(
      value => {
        // This regex allows only digits and allows optional leading '+' sign
        const phoneRegex = /^(\+\d{1,})?\d+$/
        return phoneRegex.test(value)
      },
      {
        message: "Invalid phone number format",
      }
    ),
    email: z.string().email("Please enter your email address"),
    password: z.string().refine(
      value => {
        // Minimum 8 characters, at least 1 letter, 1 number, and 1 special character
        const passwordRegex =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        return passwordRegex.test(value)
      },
      {
        message:
          "Password must be at least 8 characters long and contain at least 1 letter, 1 number, and 1 special character",
      }
    ),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "password do not match",
  })

const SignUp = () => {
  const navigation = useRouter()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      policy: false,
    },
  })
  function submitHandler(data: z.infer<typeof FormSchema>) {
    console.log(data)
    navigation.push("/requirements")
  }
  return (
    <MaxWidthWrapper>
      <TopBar btnText="Login" text="Alredy have an account?" />
      <Wrapper className="h-full max-w-[500px] w-full mx-auto gap-12 sm:gap-20 mt-[4rem] sm:mt-[6rem]">
        <div>
          <h2 className="text-primaryColor text-center text-2xl sm:text-3xl  mb-3">
            Create an account
          </h2>
          <p className="text-[#434547] text-center">
            Sign up to create your School account
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitHandler)}
            className="w-full flex flex-col gap-3 sm:gap-4  "
          >
            <div className="flex flex-col sm:flex-row items-center w-full gap-4  ">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem className="flex-1 w-full">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="first name" {...field} type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem className="flex-1 w-full">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="last name"
                        {...field}
                        type="text"
                        className="outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center w-full  gap-2">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex-1 w-full">
                    <FormLabel>Phone Number</FormLabel>
                    <PhoneNumberInput field={field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1 w-full">
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="email address"
                      {...field}
                      type="email"
                      className="outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col w-full gap-4 ">
              <div className="self-start mt-4">
                <h3 className="text-xl font-semibold ">Create your Password</h3>
                <p className="textr-[#515B6F]">enter your password</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center w-full gap-4  ">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="flex-1 w-full">
                      <FormLabel>Enter Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Password"
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="flex-1 w-full">
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="confirm password"
                          {...field}
                          type="password"
                          className="outline-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="items-top flex space-x-2 mt-4">
              <FormField
                name="policy"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        id="policy"
                        value={"false"}
                        onCheckedChange={checked => {
                          if (typeof checked === "boolean") {
                            form.setValue("policy", checked)
                          }
                          return checked
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
                <p className="text-sm text-muted-foreground">
                  By clicking &apos;Continue&apos;, you acknowledge that you
                  have read and accept the{" "}
                  <span className="text-primaryColor font-semibold">
                    Terms of Service and Privacy Policy
                  </span>
                  .
                </p>
              </div>
            </div>

            <Button
              type="submit"
              className="mt-6 text-white font-semibold bg-primaryColor"
            >
              Get Started
            </Button>
            <span className="text-sm">
              Already have an account ?{" "}
              <Link
                href={"/signin"}
                className="text-primaryColor font-semibold pb-[3rem] sm:pb-[5rem]"
              >
                Login
              </Link>
            </span>
          </form>
        </Form>
      </Wrapper>
    </MaxWidthWrapper>
  )
}

export default SignUp
