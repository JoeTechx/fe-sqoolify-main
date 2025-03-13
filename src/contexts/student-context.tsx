"use client"
import { ReactNode, createContext, useContext } from "react"
import { useState } from "react"
import StudyProgress from "@/components/student/graphs"
import StudentProfile from "@/components/student/StudentProfile"
import AttendanceTable from "@/components/student/tables/AttendanceTable"

export const StudentContext = createContext({
  updateIndex: (index: number): void => {},
  step: () => <></>,
  activeIndex: 0,
})

const StudentContextProvider = ({ children }: { children: ReactNode }) => {
  const Elements = [
    StudentProfile,
    StudyProgress,
    AttendanceTable,
    AttendanceTable,
  ]
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const updateIndex = (index: number) => {
    setActiveIndex(index)
  }
  const step = activeIndex < Elements.length ? activeIndex : Element.length - 1
  const value = { updateIndex, step: Elements[step], activeIndex }
  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  )
}
export function useStudent() {
  const { step, updateIndex, activeIndex } = useContext(StudentContext)
  return { step, updateIndex, activeIndex }
}
export default StudentContextProvider
