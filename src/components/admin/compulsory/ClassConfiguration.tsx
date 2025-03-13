import { ChevronRight } from "lucide-react"
import Link from "next/link"
import React from "react"

const ClassConfiguration = () => {
  return (
    <div className="flex gap-16 w-[90%]  flex-col lg:flex-row mx-auto my-4  bg-white px-4 py-8 rounded-md">
      <div className="w-fit lg:w-[30%]">
        <h3>Class Configuration</h3>
        <p className="text-muted-foreground text-sm">
          The following details must be attended to before your account may
          operate properly.
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <Link
          href="/admin/classform"
          className="flex items-center justify-between p-4 border shadow-sm rounded-sm cursor-pointer hover:bg-[#e6e5e575]"
        >
          <div>
            <h4>Nursery Class</h4>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet consectetur. Volutpat diam sed ut ut
              tellus.
            </p>
          </div>
          <ChevronRight className="text-sm" />
        </Link>
        <Link
          href="/admin/classform"
          className="flex items-center justify-between p-4 border shadow-sm rounded-sm cursor-pointer hover:bg-[#e6e5e575]"
        >
          <div>
            <h4>Primary Class</h4>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet consectetur. Volutpat diam sed ut ut
              tellus.
            </p>
          </div>
          <ChevronRight className="text-sm" />
        </Link>
        <Link
          href="/admin/classform"
          className="flex items-center justify-between p-4 border shadow-sm rounded-sm cursor-pointer hover:bg-[#e6e5e575]"
        >
          <div>
            <h4>Secondary Class</h4>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet consectetur. Volutpat diam sed ut ut
              tellus.
            </p>
          </div>
          <ChevronRight className="text-sm" />
        </Link>
      </div>
    </div>
  )
}

export default ClassConfiguration
