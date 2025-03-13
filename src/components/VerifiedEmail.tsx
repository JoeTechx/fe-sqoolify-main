"use client"
import React, { useState } from "react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Dialog, DialogTrigger } from "./ui/dialog"
import Requirement from "./Requirement"
import { useRouter } from "next/navigation"

const VerifiedEmail = () => {
  const navigation = useRouter()
  const [resend, setResend] = useState(false)
  const resendHandler = () => {
    setTimeout(() => {
      setResend(true)
    }, 300)
    navigation.push("/onboarding")
  }
  return (
    <MaxWidthWrapper>
      <div className="flex justify-between items-center w-full">
        <Link
          href={"/"}
          className="uppercase text-[#E5B80B] text-md font-bold sm:text-3xl hover:cursor-pointer  transition "
        >
          Sqoolify
        </Link>
      </div>
      <div className="flex justify-center items-center flex-col w-full mt-20">
        <Dialog>
          <div className="flex flex-col justify-center items-center max-w-[450px] w-full">
            <div className=" rounded-full overflow-hidden">
              <Image
                src={require("../../public/images/illustration.jpg")}
                alt="label"
                width={100}
                height={100}
              />
            </div>
            <p className="text-2xl text-primaryColor font-bold">
              Verify your Email
            </p>
            <span className="text-muted-foreground ">
              We have sent a confirmation email to the address you provided.
              This verification link is only good for 24 hours.
            </span>
            <div className="mt-12 w-full">
              <DialogTrigger asChild>
                <Button className="bg-primaryColor font-semibold text-white w-full py-4 shadow-lg">
                  View Requirement
                </Button>
              </DialogTrigger>
              <Button
                onClick={resendHandler}
                variant={"outline"}
                className="w-full text-primaryColor mt-4 hover:text-yellow-500"
              >
                {resend ? "Resending..." : "Resend Link"}
              </Button>
            </div>
          </div>
          <Requirement />
        </Dialog>
      </div>
    </MaxWidthWrapper>
  )
}

export default VerifiedEmail
