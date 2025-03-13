"use client"
import React, { useEffect, useState } from "react"
import TeacherCard from "./TeacherCard"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ListFilter } from "lucide-react"
import staff from "../../data/staff.json"
import StaffSubbar from "./StaffSubbar"
import { Dialog } from "@radix-ui/react-dialog"
import { Separator } from "../ui/separator"
import Filter from "../Filter"

type TStaff = {
  id: number
  first_name: string
  last_name: string
  email: string
  role: string
  department: string
  phone: string
  contract_type: string
}
const StaffList = () => {
  const [data, setData] = useState<TStaff[]>(staff)
  const [selectValue, setSelectValue] = useState("")
  if (selectValue === "role") {
    data.sort((a, b) => a["role"].localeCompare(b["role"]))
  } else if (selectValue === "contract_type") {
    data.sort((a, b) => a["contract_type"].localeCompare(b["contract_type"]))
  } else if (selectValue === "department") {
    data.sort((a, b) => a["department"].localeCompare(b["department"]))
  }
  return (
    <Dialog>
      {/* <Separator /> */}
      <StaffSubbar />
      <div className="bg-white min-h-[100vh]">
        <div className="w-[95%] mx-auto py-4">
          <h3 className="text-xl font-semibold">Teacher</h3>
          <div className="flex items-center justify-between my-4 flex-wrap gap-2">
            <Select
              onValueChange={value => {
                setSelectValue(value)
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="department">Department</SelectItem>
                <SelectItem value="role">Role</SelectItem>
                <SelectItem value="contract_type">Contract type</SelectItem>
              </SelectContent>
            </Select>
            {/* <div className="flex items-center gap-1 border py-2 px-6 rounded-md cursor-pointer hover:shadow-sm">
              <ListFilter />
              <p>Filter</p>
            </div> */}
            <Filter />
          </div>
          <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4 ">
            {data.map(staff => (
              <TeacherCard key={staff.id} item={staff} />
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default StaffList
