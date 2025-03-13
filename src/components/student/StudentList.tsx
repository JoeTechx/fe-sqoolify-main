"use client";
import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { Separator } from "../ui/separator";
import { StudentTable } from "./student-table";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { AddNewStudentModal } from "./AddNewStudentModal";
import { data, femaleStudent, maleStudent } from "./student-data";
import { columns } from "./student-column";
import { IStudent } from "@/types";
import { AddPaymentCard } from "@/app/parent/components/payment/AddPaymentCard";

const tabs = ["New Student", "Male Student", "Female Student"];
let STUDENTS: IStudent[];
const Steps = ({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <section className="overflow-auto">
      <section className=" flex items-center gap-3 justify-between max-w-[450px] text-[.9rem]">
        {tabs.map((item, ind) => (
          <p
            onClick={() => setActiveIndex(ind)}
            key={ind}
            className={`cursor-pointer transition pb-3 w-fit  ${
              activeIndex === ind
                ? "border-b-[2px] border-primaryColor text-black"
                : "text-muted-foreground"
            }`}
          >
            {item}
          </p>
        ))}
      </section>
      <Separator />
    </section>
  );
};

const StudentList = () => {
  const items = [data, maleStudent, femaleStudent];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Dialog>
      <section className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 flex-row my-4">
          <div className="w-full md:w-[50%]">
            <h3 className="text-xl font-bold">Student</h3>
            <p className="text-muted-foreground w-full  max-w-[490px] text-sm">
              Showing your Account metrics for July 19, 2021 - July 25, 2021
            </p>
          </div>
         
          <section className="w-fit ml-auto mb-2">
          <Dialog>
            <DialogTrigger className="flex items-center text-white tex-sm rounded-md bg-primaryColor cursor-pointer py-2 px-6">
            <Plus />
            <span>Add New Student</span>
            </DialogTrigger>

            {/* <AddPaymentCard /> */}
        <AddNewStudentModal />
          </Dialog>
        </section>
        </div>
        <Steps activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <div className="bg-white p-0 md:p-4 rounded-md">
          <StudentTable data={items[activeIndex]} columns={columns} />
        </div>
      </section>
    </Dialog>
  );
};

export default StudentList;
