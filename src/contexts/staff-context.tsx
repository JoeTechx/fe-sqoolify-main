"use client"
import { ReactNode, createContext, useContext } from "react"
import { useState } from "react"
import PersonDetail from "@/components/settings/PersonDetail"
import CompanySetting from "@/components/settings/CompanySetting"
import PasswordSetting from "@/components/settings/PasswordSetting"
import TeacherDetail from "@/components/staff/TeacherDetail"
import { TimeTable } from "@/components/staff/tables/timetable"
import { LessonTable } from "@/components/staff/tables/lesson-table"

export const StaffContext = createContext({
  updateIndex: (index: number): void => {},
  step: () => <></>,
  activeIndex: 0,
})

const StaffContextProvider = ({ children }: { children: ReactNode }) => {
  const Elements = [TeacherDetail, LessonTable, TimeTable]
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const updateIndex = (index: number) => {
    setActiveIndex(index)
  }
  const step = activeIndex < 3 ? activeIndex : 2
  const value = { updateIndex, step: Elements[step], activeIndex }
  return <StaffContext.Provider value={value}>{children}</StaffContext.Provider>
}
export function useStaff() {
  const { step, updateIndex, activeIndex } = useContext(StaffContext)
  return { step, updateIndex, activeIndex }
}
export default StaffContextProvider
