"use client";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import DatePicker from "../DatePicker";
import AttachmentUpload from "../AttachmentUpload";
import { useState } from "react";
import { useOnboarding } from "@/contexts/onboarding-context";

const formSchema = z.object({
  firstName: z
    .string({ required_error: "first name is required" })
    .min(2)
    .max(50),
  lastName: z
    .string({ required_error: "last name is required" })
    .min(2)
    .max(50),
  phoneNumber: z
    .string({ required_error: "phone number is required" })
    .min(2)
    .max(50),
  gender: z.string({ required_error: "gender is required" }).min(2),
  dob: z.date({ required_error: "Please select a date" }),
  nationality: z.string({ required_error: "nationality is required" }).min(2),
  address: z
    .string({ required_error: "residential address is required" })
    .min(2),
  idType: z.string().min(2),
  idNumber: z.string({ required_error: "ID is required" }).min(2),
});

const OwnerInfoForm = () => {
  const { updateCompletionState, goNextPage } = useOnboarding();
  const [isVisible, setIsVisible] = useState(false);
  function closeForm() {
    setIsVisible(false);
  }
  function openForm() {
    setIsVisible(true);
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      dob: new Date(),
      nationality: "",
      address: "",
      idType: "",
      idNumber: "",
      gender: "",
    },
  });
  function onSubmit(data: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(data);
    goNextPage();
    updateCompletionState("Owner Information");
  }
  return (
    <div className="bg-white rounded-md py-4 mt-8    ">
      <div className="flex items-center flex-wrap gap-3 justify-between border-b-2 pb-4 mb-4">
        <div>
          <h3 className="text-xl font-semibold">
            Tell us about the School Owner
          </h3>
          <p className="text-sm text-muted-foreground">
            This is Business Owner information that you can update anytime.
          </p>
        </div>
        <Button className="bg-primaryColor text-white" onClick={openForm}>
          Add School Owner
        </Button>
      </div>
      {isVisible ? (
        <div className="flex md:flex-row flex-col gap-3 sm:w-[95%] justify-between mt-12 ">
          <div className="w-full">
            <h3 className="text-xl font-semibold">
              Tell us your about business
            </h3>
            <p className="text-sm text-muted-foreground ">
              this most be the name on your registration Documentation.
            </p>
          </div>
          <div className="w-full md:w-[60%]">
            <Form {...form}>
              <form
                action=""
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full flex flex-col gap-4"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Legal Firstname</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter firstName"
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
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Legal Lastname</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter lastName"
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
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Phone Number </FormLabel>
                      <FormControl className="">
                        <div className="flex ">
                          <Select>
                            <SelectTrigger className="w-[80px] rounded-r-none bg-[#FAFAFA]">
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
                            className="rounded-l-none "
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
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">male</SelectItem>
                            <SelectItem value="female">female</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem className="w-full grid">
                      <FormLabel>Date of Birth</FormLabel>
                      <FormControl>
                        <DatePicker />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nationality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nationality</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Nationality" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="nigerian">Nigerian</SelectItem>
                          <SelectItem value="ghanian">Ghanian</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Residential Address</FormLabel>
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
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <FormField
                    control={form.control}
                    name="idType"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Form of ID</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select ID" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="national_id">
                              National ID
                            </SelectItem>
                            <SelectItem value="voter's_card">
                              Voter&apos;s Card
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="idNumber"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>ID Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter ID number"
                            {...field}
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <AttachmentUpload />
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button type="submit" className="flex-1 text-white text-lg">
                    Save and Continue
                  </Button>
                  <Button
                    type="button"
                    className="flex-1 bg-white font-semibold hover:bg-gray-200"
                    onClick={closeForm}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      ) : (
        <div className="w-full h-[60vh]"></div>
      )}
    </div>
  );
};

export default OwnerInfoForm;
