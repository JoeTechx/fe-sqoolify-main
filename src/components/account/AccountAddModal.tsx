"use client"
import { Button } from "@/components/ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useForm } from "react-hook-form"

type TData = {
  account_name: string
  account_no: string
  bank_name: string
}
export function AccountAddModal() {
  const form = useForm({
    defaultValues: {
      account_name: "",
      account_no: "",
      bank_name: "",
    },
  })

  const onSubmit = (data: TData) => {
    console.log(data)
  }
  return (
    <div className=" w-full ">
      <div className="flex flex-col">
        <DialogContent className="sm:max-w-[40%] rounded-none  ">
          <DialogClose className=" outline-none border-none absolute bg-white -top-16 right-0 rounded-full w-10 h-10">
            X
          </DialogClose>
          <DialogHeader className="flex flex-col items-center w-[70%] mx-auto my-4">
            <DialogTitle className="text-primaryColor font-semibold text-xl mb-2">
              Add Bank Account
            </DialogTitle>
            <DialogDescription className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              molestias dolorem eos. Eius asperiores laboriosam, ad nobis nisi
              temporibus fugit, ipsa.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="bank_name"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <Label htmlFor="name" className="">
                      Bank Name
                    </Label>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full bg-[#E9EBEB]">
                          <SelectValue placeholder="Select bank" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">First Bank</SelectItem>
                          <SelectItem value="dark">Eco Bank</SelectItem>
                          <SelectItem value="system">Wema Bank</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="account_no"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <Label htmlFor="name" className="">
                      Account Nunber
                    </Label>
                    <FormControl>
                      <Input
                        id="account_no"
                        placeholder="Account Number"
                        className="bg-[#E9EBEB]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="account_name"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <Label htmlFor="name" className="">
                      Account Name
                    </Label>
                    <FormControl>
                      <Input
                        id="account_name"
                        placeholder="Account name"
                        className="bg-[#E9EBEB]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button
                  type="submit"
                  className="w-full p-2 outline-none text-white"
                >
                  Send Invite
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </div>
    </div>
  )
}
