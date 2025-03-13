"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

const formSchema = z.object({
  bank: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  account_number: z
    .string()
    .min(10, { message: "Provide a valid account number" }),
  account_name: z.string().min(5),
})

export function BankInfoForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bank: "",
      account_number: "",
      account_name: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-white p-8 flex flex-col gap-20 mb-8 rounded-md "
      >
        <div className="flex gap-4 flex-col md:flex-row w-full lg:w-[85%] ">
          <div className="max-w-[400px]">
            <h3 className="font-semibold">Tell us your about School session</h3>
            <p className="text-muted-foreground">
              this most be the name on your registration Documentation.
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-8">
            <FormField
              control={form.control}
              name="bank"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bank Name</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select bank" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="first bank">First Bank</SelectItem>
                      <SelectItem value="eco bank">EcoBank</SelectItem>
                      <SelectItem value="kuda">Kuda Microfinance</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="account_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Number</FormLabel>
                  <FormControl>
                    <Input placeholder="account number" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="account_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Name</FormLabel>
                  <FormControl>
                    <Input placeholder="account name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full text-white">
              Submit
            </Button>
          </div>
        </div>
        <div className="flex  justify-between flex-col md:flex-row w-full ">
          <div className="w-fit md:w-[40%] max-w-[400px]">
            <h3 className="font-semibold">Additional account</h3>
            <p className="text-muted-foreground">
              if your school don&apos;t have a brand ignore.
            </p>
          </div>
          <div className="mx-auto flex items-center text-primaryColor cursor-pointer hover:bg-gray-50 rounded-md p-2">
            <Plus />
            <Button
              type="button"
              className="bg-transparent text-primaryColor hover:bg-transparent "
            >
              Add Account
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
