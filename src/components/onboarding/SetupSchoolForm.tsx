"use client"
import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import DatePicker from "../DatePicker"
import AttachmentUpload from "../AttachmentUpload"
import { Plus } from "lucide-react"
import { Separator } from "../ui/separator"
import { useOnboarding } from "@/contexts/onboarding-context"

const formSchema = z.object({
  upload: z.string(),
  schoolShortName: z
    .string({ required_error: "first name is required" })
    .min(2)
    .max(50),
  schoolMoto: z
    .string({ required_error: "last name is required" })
    .min(2)
    .max(50),
  schoolPhoneNumber: z
    .string({ required_error: "phone number is required" })
    .min(2)
    .max(50),
  lga: z.string({ required_error: "local govermnent is required" }).min(2),
  foundingDate: z.string().min(2, { message: "date is required" }),
  website: z.string({ required_error: "website is required" }).min(2),
  country: z.string({ required_error: "country is required" }).min(2),
  state: z.string({ required_error: "state is required" }).min(2),
  schoolAddress: z
    .string({ required_error: "residential address is required" })
    .min(2),
  schoolEmail: z.string().email({ message: "please provide email address" }),
})

const SetupSchoolForm = () => {
  const { updateCompletionState, goNextPage } = useOnboarding()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      upload: "",
      schoolShortName: "",
      schoolAddress: "",
      schoolEmail: "",
      schoolMoto: "",
      schoolPhoneNumber: "",
      lga: "",
      website: "",
      country: "",
      foundingDate: Date.now().toLocaleString(),
    },
  })
  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("clicked")
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(data)
    goNextPage()
    updateCompletionState("Setup School")
  }
  return (
    <div className="bg-white rounded-md px-0 md:p-4 mt-8    ">
      <div className="flex items-center justify-between border-b-2 pb-4 mb-4">
        <div>
          <h3 className="text-xl font-semibold">Setup your school system</h3>
          <p className="text-sm text-muted-foreground">
            This information that you can update anytime.
          </p>
        </div>
      </div>

      <div className="flex sm:w-[100%] flex-col lg:flex-row gap-3 justify-between mt-12 ">
        <div>
          <h3 className="text-xl font-semibold">Tell us your about business</h3>
          <p className="text-sm text-muted-foreground  w-[16rem]">
            this most be the name on your registration Documentation.
          </p>
        </div>
        <div className="w-full lg:w-[60%]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-4"
            >
              <FormField
                name="upload"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Upload School Logo</FormLabel>
                    <FormControl>
                      <AttachmentUpload />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <FormField
                  name="foundingDate"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full grid">
                      <FormLabel>Founding Date</FormLabel>
                      <FormControl>
                        <DatePicker />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="schoolShortName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>School Short Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter firstname"
                          {...field}
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="schoolMoto"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>School Moto</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter firstname"
                        {...field}
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="schoolPhoneNumber"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>School Phone Number </FormLabel>
                    <FormControl className="">
                      <div className="flex">
                        <Select>
                          <SelectTrigger className="w-[80px] rounded-r-none">
                            <SelectValue placeholder="+177" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="apple">+234</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <Input
                          placeholder="Phone Number"
                          {...field}
                          className="rounded-l-none"
                          type="text"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="schoolEmail"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>School Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter school email address"
                        {...field}
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="schoolAddress"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>School Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter school address"
                        {...field}
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Country</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="nigeria">Nigeria</SelectItem>
                        <SelectItem value="ghana">Ghana</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>State</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select State" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="national_id">Oyo</SelectItem>
                          <SelectItem value="voter's_card">Lagos</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lga"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>LGA</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select LGA" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="national_id">Egbeda</SelectItem>
                          <SelectItem value="voter's_card">Irepodun</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>School Website</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter address"
                        {...field}
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="flex-1 text-white text-lg">
                Save and Continue
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <Separator className="my-6 h-[2px]" />
      <div className="flex sm:w-[95%] justify-between mt-4">
        <div>
          <h3 className="text-xl font-semibold">School Brands</h3>
          <p className="text-sm text-muted-foreground  w-[16rem]">
            if your school don&apos;t have a brands ignore.
          </p>
        </div>
        <Button className="text-primaryColor bg-white hover:bg-gray-200">
          <Plus /> Add Brands
        </Button>
      </div>
    </div>
  )
}

export default SetupSchoolForm
