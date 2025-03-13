"use client"
import React from "react"
import AccountCard from "./AccountCard"
import { ChevronRight } from "lucide-react"
import { Dialog, DialogTrigger } from "../ui/dialog"
import { AccountDeleteModal } from "./AccountDeleteModal"
import { AccountAddModal } from "./AccountAddModal"
import { AccountTable } from "./data-table"

const data = [
  {
    bank: "First Bank",
    account_number: "3127551932",
    account_name: "Kolapo Ishola",
  },
  {
    bank: "Eco Bank",
    account_number: "3127551932",
    account_name: "Idan Victor",
  },
  {
    bank: "Diamond Bank",
    account_number: "3127551932",
    account_name: "Bruce Lee",
  },
]

let title =
  "The payment has been made successfully, no refund done yet and all the balance has been cleared"
const Account = () => {
  return (
    <section className="w-full flex my-8">
      <main className="w-full">
        {/* HEAD */}
        <div className="flex justify-between flex-col lg:flex-row  gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-[60%]">
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
          </div>
          <div className="bg-white rounded-md px-0 md:p-4 flex flex-col  gap-2 w-full md:w-[40%]">
            {data.map((item, ind) => (
              <>
                <Dialog>
                  <DialogTrigger>
                    <div className="bg-[#F2F2F280] cursor-pointer flex items-center pr-2 justify-between p-3">
                      <div className="flex items-center gap-2">
                        <span>{item.bank}</span>
                        <span className="text-[#828282]">
                          {item.account_number}
                        </span>
                      </div>
                      <ChevronRight />
                    </div>
                  </DialogTrigger>
                  <AccountDeleteModal
                    account_name={item.account_number}
                    account_no={item.account_number}
                    bank_name={item.bank}
                  />
                </Dialog>
                <AccountAddModal />
              </>
            ))}
          </div>
        </div>
       
        
        {/* TABLE */}
        <div className="bg-white px-0 md:p-4 rounded-md mt-4 ">
          <h2 className="text-xl font-semibold">School Fees</h2>
          <AccountTable />
        </div>
      </main>
    </section>
  )
}

export default Account
