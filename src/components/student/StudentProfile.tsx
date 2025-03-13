import React from "react"
import { Separator } from "../ui/separator"

const StudentProfile = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Personal Info</h2>
      <section className="grid grid-cols-2 gap-y-4">
        <div className="flex flex-col  max-w-[300px]">
          <p className="text-muted-foreground">Full Name</p>
          <p>Jerome Bell</p>
        </div>
        <div className="flex flex-col  max-w-[300px]">
          <p className="text-muted-foreground">Gender</p>
          <p>Male</p>
        </div>
        <div className="flex flex-col  max-w-[300px]">
          <p className="text-muted-foreground">Date of Birth</p>
          <p>
            March 23, 1995{" "}
            <span className="text-muted-foreground">(26 y.o)</span>{" "}
          </p>
        </div>
        <div className="flex flex-col  max-w-[300px]">
          <p className="text-muted-foreground">Language</p>
          <p>English, French,</p>
        </div>
        <div className="flex flex-col  max-w-[300px]">
          <p className="text-muted-foreground">Address</p>
          <p>Lorem ipsum dolor sit amet consectetur. Sit scelerisque.</p>
        </div>
      </section>
      <Separator />
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">More Details</h2>
        <p className="text-muted-foreground">About Me</p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Dui diam eu scelerisque
          rhoncus urna nam ornare. Risus aliquet vulputate feugiat imperdiet
          neque. Duis congue purus fames nam ac nisl pellentesque. Faucibus eget
          nunc eleifend commodo turpis suspendisse egestas. Egestas.
        </p>
        <div className="flex gap-8">
          <div className="flex flex-col  max-w-[200px]">
            <p className="text-muted-foreground">Employed Date</p>
            <p>March 23, 1999</p>
          </div>
          <div className="flex flex-col  max-w-[200px]">
            <p className="text-muted-foreground">Total year spends with us</p>
            <p>6 Years</p>
          </div>
        </div>
        <div>
          <p className="text-muted-foreground mb-2">Hobbies</p>
          <div className="flex items-center gap-4">
            <p className="bg-[#F8F8FD] py-2 px-4 text-[#4640DE] capitalize">
              running
            </p>
            <p className="bg-[#F8F8FD] py-2 px-4 text-[#4640DE] capitalize">
              Drawing
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudentProfile
