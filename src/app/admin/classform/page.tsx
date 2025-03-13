import ConfigurationForm from "@/components/admin/compulsory/ConfigurationForm"
import Link from "next/link"
import React from "react"

const page = () => {
  return (
    <div>
      <Link
        href="/admin/compulsory"
        className="border py-3 px-6   rounded-md text-primaryColor"
      >
        Back{" "}
      </Link>
      <ConfigurationForm />
    </div>
  )
}

export default page
