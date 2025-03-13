import { MoveLeft } from "lucide-react"
import React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "../ui/separator"
import Link from "next/link"

const StaffTopbar = () => {
  return (
    <>
      <div className="flex items-center justify-between my-4  ">
        <Link
          href="/admin/staff"
          className="flex items-center  gap-2 cursor-pointer hover:bg-slate-100 py-2 px-4 rounded-md"
        >
          <MoveLeft />
          <p>Back</p>
        </Link>
        <Select>
          <SelectTrigger className="w-[120px] text-primaryColor">
            <SelectValue placeholder="More Action" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Separator />
    </>
  )
}

export default StaffTopbar
