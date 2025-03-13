import React, { useState } from "react"
import OwnerInfoForm from "./OwnerInfoForm"
import { Check, Trash2 } from "lucide-react"
import { Checkbox } from "../ui/checkbox"
import { Button } from "../ui/button"
import { useOnboarding } from "@/contexts/onboarding-context"
import { useRouter } from "next/navigation"

const Ownerinfo = () => {
  const navigation = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const { onboarding } = useOnboarding()

  const submitHandler = () => {
    setTimeout(() => {
      setSubmitting(true)
    }, 300)
    navigation.push("/admin/overview")
  }

  return (
    <div className="py-4 ">
      <div>
        <h3>Review your Application</h3>
        <p className="text-muted-foreground">
          This is the final look at your application. Make sure you met all the
          registration requirement.
        </p>
      </div>
      <div className="bg-white rounded-md py-4 mt-8">
        <div className="flex flex-col gap-4">
          {onboarding.map(item => (
            <div
              key={item.label}
              className="flex gap-2 md:gap-4 items-center w-full p-4 rounded-sm border"
            >
              {!item.isCompleted && (
                <div className=" rounded-full p-3 md:p-4 bg-[#f6513b48]">
                  <Trash2 className="text-red-600 size-4 md:size-6" />
                </div>
              )}
              {item.isCompleted && (
                <div className=" rounded-full p-4 bg-[#1AD48E]">
                  <Check className="text-white" />
                </div>
              )}
              <div className="flex flex-col">
                <h3 className="text-sm md:text-[18px]">{item.label}</h3>
                <span className="text-[12px] md:text-sm text-muted-foreground">{item.text}</span>
              </div>
            </div>
          ))}
          <div className="items-top flex space-x-2 mt-8">
            <Checkbox
              id="terms1"
              className=" border-muted-foreground  
            data-[state=checked]:bg-transparent data-[state=checked]:text-primaryColor
            "
            />
            <div className="grid gap-1.5 leading-none">
              <p className="text-sm text-muted-foreground">
                I Confirm tis information provide Are Accurate and legit.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="mx-auto w-full md:w-[40%] mt-6">
              <Button onClick={submitHandler} className="text-white w-full">
                {submitting ? " Submitting Application" : " Submit Application"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ownerinfo
