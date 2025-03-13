import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ChevronRight,
  Instagram,
  Mail,
  Smartphone,
  Star,
  Twitter,
  User,
} from "lucide-react"
import { Separator } from "../ui/separator"
import MultiLevelProgressBar from "../progressbar"
const StudentLeftBar = () => {
  return (
    <div className="bg-white min-w-[25%] py-4 md:py-8 md:px-4 max-h-screen flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/images/user.png" />
          <AvatarFallback>JB</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center items-baseline">
          <p className="text-2xl font-semibold">Jerome Bell</p>
          <p>ID AM21-10</p>
          <div className="flex items-center gap-1">
            <Star className="text-yellow-400" size={20} />
            <span className="text-[18px]">4.0</span>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F8FD] rounded-md px-2 py-3 flex flex-col gap-2">
        <p className="text-muted-foreground">Teaching Role</p>
        <Separator />
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">Physics</p>
          <span className="bg-[#5542F61A] px-2 py-1 rounded-sm text-[#5542F6]">
            Full time
          </span>
        </div>
      </div>
      <div className="bg-[#F8F8FD] rounded-md px-2 py-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">Class</p>
          <p className="">SS 2B</p>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">Sub Subject</p>
          <p className="">Chemistry</p>
        </div>
      </div>
      <MultiLevelProgressBar completionPercent={70} />
      <Separator />
      <div className="flex flex-col gap-4">
        <p className="text-xl">Parent contact</p>
        <div className="flex items-center justify-between bg-[#FAFAFA] p-2 w-[95%] hover:shadow-sm cursor-pointer">
          <div className="flex gap-4">
            <User className="text-muted-foreground" size={24} />
            <div>
              <p className="text-muted-foreground">Father</p>
              <p className="text-[14px]">James Bond</p>
            </div>
          </div>
          <ChevronRight />
        </div>
        <div className="flex items-center justify-between bg-[#FAFAFA] p-2 w-[95%] hover:shadow-sm cursor-pointer">
          <div className="flex gap-4">
            <User className="text-muted-foreground" size={24} />
            <div>
              <p className="text-muted-foreground">Mpther</p>
              <p className="text-[14px]">Marry Bond</p>
            </div>
          </div>
          <ChevronRight />
        </div>
      </div>
    </div>
  )
}

export default StudentLeftBar
