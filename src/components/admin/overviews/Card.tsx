import React from "react"

const Card = () => {
  return (
    <div className="rounded-md bg-white py-4 px-4 flex items-center gap-2 flex-1">
      <div className=" rounded-full h-14 w-14 bg-[#FAFAFA]"></div>
      <div>
        <p className="text-[14px]">Student</p>
        <p className="text-[20px] font-bold">400</p>
      </div>
    </div>
  )
}

export default Card
