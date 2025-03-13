import React from "react"
import Topbar from "../../layout/Navbar"
import { Separator } from "@/components/ui/separator"
import OverviewSubBar from "./OverviewSubBar"
import Card from "./Card"
import StackedBarChart from "./charts/StackedBarChart"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import CustomPieChart from "./charts/PieChartPlot"
import { FeeTable } from "./tables/FeeTable"
import { DataTable } from "@/components/data-table"
import { outstandingColumns, performanceColumns } from "./tables/column"
import outstanding from "../../../data/outstanding_fees.json"
import performance from "../../../data/performance.json"
import OutstandingTable from "./tables/OutstandinfTable"
import StudentPerformance from "./tables/StudentPerformance"
import TopTeachers from "./TopTeachers"

const Overview = async () => {
  return (
    <div className="w-full  py-5 px-0 md:px-9">
      <Separator />
      <OverviewSubBar />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex justify-between flex-col lg:flex-row ">
        <div className="w-full lg:w-[60%]">
          <div className="mt-4 bg-white rounded-md p-4 mb-8">
            <div className="flex justify-between my-4 flex-col md:flex-row gap-3">
              <div className="w-full md:w-[50%]  ">
                <h2 className="font-semibold">Total Earnings</h2>
                <p>Here’s we show data about your effective monthly Earning</p>
                <div className="flex items-center gap-6 mt-8">
                  <div className="flex items-center space-x-2">
                    <span className="bg-[#E5B80B] h-[8px] w-[8px] rounded-full"></span>
                    <span>Total Earnings</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-black h-[8px] w-[8px] rounded-full"></span>
                    <span>Total Expenses</span>
                  </div>
                </div>
              </div>
              <div className="border border-[#E9EBEB] h-fit p-4 rounded-sm">
                <p className="text-[#515B6F]">Overall Earning</p>
                <p className="text-xl font-semibold">N50,600,434.00</p>
              </div>
            </div>

            <div className="w-full h-[300px] hover:bg-transparent">
              <StackedBarChart />
            </div>
          </div>
          <div className="mb-8">
            <OutstandingTable columns={outstandingColumns} data={outstanding} />
          </div>
          <div className="mb-8">
            <StudentPerformance
              columns={performanceColumns}
              data={performance}
            />
          </div>
        </div>
        <div className="w-full lg:w-[38%]">
          <div className="mt-4 bg-white rounded-md p-6 mb-8 h-[500px] w-full ">
            <h2 className="text-xl font-semibold">Total Student gender</h2>
            <div className=" h-[300px]">
              <CustomPieChart />
            </div>
            <div className="w-[80%] mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className=" bg-[#5542F6] h-[8px] w-[8px] rounded-full "></span>
                  <span>Female</span>
                </div>
                <span>75</span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-1">
                  <span className=" bg-[#FFA043] h-[8px] w-[8px] rounded-full "></span>
                  <span>Male</span>
                </div>
                <span>25</span>
              </div>
            </div>
          </div>
          <div>
            <TopTeachers />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
