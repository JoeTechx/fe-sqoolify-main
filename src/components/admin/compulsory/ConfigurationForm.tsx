"use client"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { v4 as uuidv4 } from "uuid"

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
import React, { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select"
import { Plus } from "lucide-react"
import SchoolItem from "./SchoolItem"

export const formSchema = z.object({
  classname: z.string().min(5).max(50),
  shortname: z.string().min(2).max(25),
  leveltype: z.string().min(2),
})

interface FORMTYPE extends z.infer<typeof formSchema> {
  edited?: boolean
}
type PropertyKey = "classname" | "shortname" | "leveltype"

const STEPS = ["Nursery Class", "Primary Class", "Secondary Class"]

function filterUniqueValues(data: FORMTYPE[]) {
  const uniqueValues: FORMTYPE[] = []
  for (const obj of data) {
    if (!uniqueValues.some(uObj => areObjectEqual(uObj, obj))) {
      uniqueValues.push(obj)
    }
  }

  return uniqueValues
}

function areObjectEqual(obj1: FORMTYPE, obj2: FORMTYPE) {
  if (typeof obj1 !== "object" || typeof obj2 !== "object") return false

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)
  if (keys1.length !== keys2.length) return false
  for (const key of keys1) {
    if (obj1[key as PropertyKey] !== obj2[key as PropertyKey]) return false
  }

  return true
}

const ConfigurationForm = () => {
  const form = useForm<FORMTYPE>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      edited: false,
      classname: "",
      shortname: "",
      leveltype: "",
    },
    resetOptions: {
      keepDefaultValues: true,
    },
  })

  const { setValue } = form

  const [uniqueValues, setUniqueValues] = useState<FORMTYPE[] | []>([])

  function onSubmit(value: FORMTYPE) {
    if (value.edited) {
      console.log(value)
    }
    const data = [...uniqueValues, { ...value, edited: false }]
    const values = filterUniqueValues(data)
    setUniqueValues(values)
    form.reset({ classname: "", shortname: "", leveltype: "" })
  }

  // DELETE ITEM
  function onDelete(items: FORMTYPE[], item: FORMTYPE) {
    const newItems = items.filter(data => !areObjectEqual(data, item))
    setUniqueValues(newItems)
  }

  // EDIT ITEM
  function onEdit(item: FORMTYPE) {
    item["edited"] = true
    setValue("classname", item.classname, { shouldValidate: true })
    setValue("leveltype", item.leveltype, { shouldValidate: true })
    setValue("shortname", item.shortname, { shouldValidate: true })
    // Identify the item from the uniques list

    // Update the item and save the new list
  }

  return (
    <div className="flex gap-16  my-4  bg-white px-4 py-8 rounded-md">
      <div className="w-[30%] flex flex-col gap-4">
        {STEPS.map((item, ind) => (
          <div key={ind} className="flex items-center gap-4">
            <span className=" text-white h-8 w-8 flex items-center justify-center first:bg-primaryColor rounded-full">
              {ind + 1}
            </span>
            <span className="">{item}</span>
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col gap-6 ">
        <div className="w-[80%] mx-auto flex flex-col gap-6">
          <div className="flex justify-between items-start">
            <div className="w-[50%]">
              <h3>Class Configuration</h3>
              <p className="text-muted-foreground text-sm">
                The following details must be attended to before your account
                may operate properly.
              </p>
            </div>

            <Button className="text-primaryColor bg-transparent hover:bg-[#bdbcbc50]">
              <Plus />
              Add More
            </Button>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="classname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Class Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter class name..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="shortname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter a short name..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="leveltype"
                defaultValue=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Level Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Level Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {STEPS.map((item, index) => (
                          <SelectItem value={item} key={index}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="text-white">
                Submit
              </Button>
            </form>
          </Form>
          <div>
            {uniqueValues.map((item, ind, items) => (
              <SchoolItem
                key={ind}
                classname={item.classname}
                shortname={item.shortname}
                leveltype={item.leveltype}
                onDelete={() => onDelete(items, item)}
                onEdit={() => onEdit(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfigurationForm
