"use client"
import React from "react"
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { name: "Female", value: 75 },
  { name: "Male", value: 25 },
]

const COLORS = ["#5542F6", "#FFA043"]

const CustomPieChart = () => {
  const totalValue = data.reduce((acc, entry) => acc + entry.value, 0)

  const renderCenterText = () => {
    return (
      <>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          {totalValue}
        </text>
        <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle">
          {"Total Students"}
        </text>
      </>
    )
  }

  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <PieChart>
        <Pie
          data={data}
          outerRadius={90}
          innerRadius={75}
          label={() => renderCenterText()}
          dataKey="value"
          nameKey="name"
          cx={"50%"}
          cy={"50%"}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default CustomPieChart
