"use client"
import React, { useState } from "react"
import { Separator } from "../ui/separator"
// import TeacherProfile from "./TeacherProfile"
// import LessonBook from "./LessonBook"
// import TeacherTimeTable from "./TeacherTimeTable"
import Review from "./Review"
import TeacherSettings from "./TeacherSettings"
import TeacherProfile from "./TecherProfile"
import { LessonBook } from "./LessonBook"
import { TeacherTimeTable } from "./TeacherTimeTable"

const tabs = [
  "Teacher profile",
  "Lesson books",
  "Timetable",
  "Reviews",
  "Setting",
] as const

type TabIndex = 0 | 1 | 2 | 3 | 4

interface StaffContentProps {
  activeIndex: TabIndex
}

const StaffContent: React.FC<StaffContentProps> = ({ activeIndex }) => {
  switch (activeIndex) {
    case 0:
      return <TeacherProfile />
    case 1:
      return <LessonBook />
    case 2:
      return <TeacherTimeTable />
    case 3:
      return <Review />
    case 4:
      return <TeacherSettings />
    default:
      return null
  }
}

const isValidTabIndex = (index: number): index is TabIndex => {
  return index >= 0 && index <= 4
}

const StaffSteps: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<TabIndex>(0)

  const handleTabClick = (index: number) => {
    if (isValidTabIndex(index)) {
      setActiveIndex(index)
    }
  }

  return (
    <div className="w-full">
      <div className="flex space-x-4 mb-4 pt-3 px-3">
        {tabs.map((item, ind) => (
          <button
            onClick={() => handleTabClick(ind)}
            key={ind}
            className={`cursor-pointer transition pb-2 ${
              activeIndex === ind
                ? "border-b-2 border-primaryColor text-black"
                : "text-muted-foreground"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <Separator className="my-4" />
      <div className="">

      <StaffContent activeIndex={activeIndex} />
      </div>
    </div>
  )
}

export default StaffSteps