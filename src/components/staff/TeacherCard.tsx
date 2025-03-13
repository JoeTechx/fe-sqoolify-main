import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "../ui/separator"
import { Phone } from "lucide-react"
import Link from "next/link"

type TStaff = {
  item: {
    id: number
    first_name: string
    last_name: string
    email: string
    role: string
    department: string
    phone: string
    contract_type: string
  }
}
const TeacherCard = ({ item }: TStaff) => {
  return (
    <Link
      href="/admin/staff/1"
      className="bg-white border text-sm rounded-md p-4 shadow-sm hover:shadow-md hover:bg-gray-50 transition "
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p>{`${item.first_name} ${item.last_name}`} </p>
            <p className="text-muted-foreground max-w-40  break-words ">
              {item.email}
            </p>
          </div>
        </div>
        <span className=" text-[#5542F6] rounded-sm px-4 py-2 bg-[#5542F61A]">
          {item.contract_type}
        </span>
      </div>
      <Separator className="my-4" />
      <div className="flex flex-col gap-4 ">
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">ID</p>
          <p>ADM221-10</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">Role</p>
          <p>{item.role}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">Department</p>
          <p className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-600 rounded-sm"></span>{" "}
            <span>{item.department}</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">Phone Number</p>
          <p className="flex items-center gap-1">
            <Phone />
            <span>{item.phone}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default TeacherCard
