"use client"
import React from "react"
import { Separator } from "../ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Landmark, Settings } from "lucide-react"
import Link from "next/link"
import { DashboardIcon, PersonIcon, StudentIcon } from "@/utils/icon"
import { usePathname } from "next/navigation"
const Sidebar = () => {
  const pathname = usePathname()
  return (
    <div className="py-8 bg-white flex flex-col max-h-[120vh]  gap-6 w-[300px]">
      <div>
        <h2 className="text-primaryColor text-center text-2xl font-bold cursor-pointer pb-4">
          SQOOLIFY
        </h2>
        <Separator />
      </div>
      <div className="flex gap-4 justify-start w-[90%] pl-4 ">
        <Avatar className="">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <h3>Purs School</h3>
          <Accordion type="multiple">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="text-muted-foreground">
                John Doe
              </AccordionTrigger>
              <AccordionContent className="w-[50%]">
                <div className="flex flex-col gap-4">
                  <Link
                    href="#"
                    className="hover:text-primaryColor text-muted-foreground cursor-pointer"
                  >
                    Profile
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-primaryColor text-muted-foreground cursor-pointer"
                  >
                    Logout
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Separator />
      <Accordion type="multiple" className="w-[90%] hover:outline-none">
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger>
            <div className="flex items-center gap-4 pl-6">
              <DashboardIcon
                color={` #E5B80B
                `}
              />
              <p
                className={`text-[#515B6F] text-xl 
                   text-primaryColor`}
              >
                Dashboard
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="w-[50%] mx-auto">
            <div className="flex flex-col gap-4">
              <Link
                href="/admin/overview"
                className={`hover:text-primaryColor text-muted-foreground cursor-pointer ${
                  pathname === "/admin/overview" ? "text-primaryColor" : ""
                }`}
              >
                Overviews
              </Link>
              <Link
                href="/admin/compulsory"
                className={`hover:text-primaryColor text-muted-foreground cursor-pointer ${
                  pathname === "/admin/compulsory" ? "text-primaryColor" : ""
                }`}
              >
                Compulsory
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Separator />

      <div className="flex flex-col gap-10 w-[90%] mx-auto">
        {/* Student */}
        <Link href="/admin/student" className={`flex items-center gap-4 pl-4`}>
          <StudentIcon
            color={`${pathname === "/admin/student" ? "#E5B80B" : "#515B6F"}`}
          />
          <p
            className={`text-[#515B6F] ${
              pathname === "/admin/student" ? "text-primaryColor" : ""
            }`}
          >
            Student
          </p>
        </Link>
        <Link href="/admin/staff" className={`flex items-center gap-4 pl-4`}>
          <PersonIcon
            color={`${pathname === "/admin/staff" ? "#E5B80B" : "#515B6F"}`}
          />
          <p
            className={`text-[#515B6F] ${
              pathname === "/admin/staff" ? "text-primaryColor" : ""
            }`}
          >
            Staff
          </p>
        </Link>

        <Link href="/admin/account" className={`flex items-center gap-4 pl-4 `}>
          <Landmark
            className={`text-[#515B6F] ${
              pathname === "/admin/account" ? "text-primaryColor" : ""
            }`}
          />
          <p
            className={`text-[#515B6F] ${
              pathname === "/admin/account" ? "text-primaryColor" : ""
            }`}
          >
            Account
          </p>
        </Link>
        <Link
          href="/admin/exam"
          className={`flex items-center gap-4 pl-4 ${pathname === ""}`}
        >
          <Landmark
            className={`text-[#515B6F] ${
              pathname === "/admin/exam" ? "text-primaryColor" : ""
            }`}
          />
          <p
            className={`text-[#515B6F] ${
              pathname === "/admin/exam" ? "text-primaryColor" : ""
            }`}
          >
            Exam
          </p>
        </Link>
        <Link
          href="/admin/settings"
          className={`flex items-center gap-4 pl-4 ${pathname === ""}`}
        >
          <Settings
            className={`text-[#515B6F] ${
              pathname === "/admin/settings" ? "text-primaryColor" : ""
            }`}
          />
          <p
            className={`text-[#515B6F] ${
              pathname === "/admin/settings" ? "text-primaryColor" : ""
            }`}
          >
            Setting
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
