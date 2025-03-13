import StudentTopBar from "@/components/student/StudentTopBar"
import { Separator } from "@/components/ui/separator"
import React, { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return <section className="w-full">{children}</section>
}

export default layout
