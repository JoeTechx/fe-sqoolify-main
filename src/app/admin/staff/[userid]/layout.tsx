import LeftBar from "@/components/staff/LeftBar"
import StaffSteps from "@/components/staff/StaffSteps"
import StaffTopbar from "@/components/staff/StaffTopbar"
import React, { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <StaffTopbar />
      <section className="flex gap-8 flex-col lg:flex-row w-full  ">
        <LeftBar />
        <div className="bg-white flex-1 rounded-md">
          <StaffSteps />
          {children}
        </div>
      </section>
    </>
  )
}

export default layout
