"use client"
import React, { useState } from "react"

import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Password = () => {
  const [currentPin, setCurrentPin] = useState(["", "", "", ""])
  const [newPin, setNewPin] = useState(["", "", "", ""])
  return (
    <div className="bg-white rounded-md p-6 flex flex-col gap-4 ">
      <form className="mx-auto py-4 w-[95%] max-w-[500px]">
       <p className="text-primaryColor text-center font-bold text-2xl">Change Password</p>
       <p className="text-[#434547] text-center font-medium text-[1.2rem] mt-3 mb-6">Your new password must be different from previous used passwords</p>
        <div className="mx-auto w-full gap-4 ">
         
          <div className="mt-3">
            <Label>Password</Label>
            <Input />
          </div>
          <div className="mt-3">
            <Label>Confirm Password</Label>
            <Input />
          </div>
          <Button className="w-full text-white mt-6">Change Password</Button>
        </div>
      </form>    
    </div>
  )
}

export default Password
