"use client"

import { zodResolver } from "@hookform/resolvers/zod"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Separator } from "../../ui/separator"
import { DatePickerAdmin } from "./DatePickerAdmin"
import { useToast } from "@/components/ui/use-toast"
import { useCompulsory } from "@/contexts/compulsory-context"

const formSchema = z.object({
  email: z.string().min(2, { message: "Email is required" }),
})

export function TermAndSessionForm() {
  const { goNextStep, activeIndex } = useCompulsory()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      variant: "default",
      title: "Success",
      description: "Submitted successfully!",
    })
    goNextStep(activeIndex)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-white p-8 flex flex-col gap-4 mb-8 rounded-md "
      >
        <div className="flex justify-between flex-col md:flex-row">
          <div>
            <h3 className="font-semibold">Tell us your about School session</h3>
            <p className="text-muted-foreground">
              this most be the name on your registration Documentation.
            </p>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-fit md:w-[60%]">
                <FormLabel>Email</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator className="my-4 h-[2px]" />
        <div className="flex justify-between my-4 flex-col md:flex-row">
          <div className="w-full md:w-fit">
            <h3 className="font-semibold">First Term</h3>
            <p className="text-muted-foreground">
              this most be the name on your registration Documentation.
            </p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-[60%]">
            <DatePickerAdmin title="Start Date" />
            <DatePickerAdmin title="End Date" />
          </div>
        </div>
        <div className="flex justify-between my-4 flex-col md:flex-row">
          <div>
            <h3 className="font-semibold">Second Term</h3>
            <p className="text-muted-foreground">
              this most be the name on your registration Documentation.
            </p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-[60%]">
            <DatePickerAdmin title="Start Date" />
            <DatePickerAdmin title="End Date" />
          </div>
        </div>
        <div className="flex justify-between my-4 flex-col md:flex-row">
          <div>
            <h3 className="font-semibold">Third Term</h3>
            <p className="text-muted-foreground">
              this most be the name on your registration Documentation.
            </p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-[60%]">
            <DatePickerAdmin title="Start Date" />
            <DatePickerAdmin title="End Date" />
          </div>
        </div>
        <Button type="submit" className=" w-[60%] self-end text-white">
          Submit
        </Button>
      </form>
    </Form>
  )
}
