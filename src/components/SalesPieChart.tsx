import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { SalesData } from "@/data/sales";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

interface Props {
  data: SalesData[];
}

const SalesPieChart: React.FC<Props> = ({ data }) => {
  const totalData = [
    { name: "2022", value: data.reduce((sum, item) => sum + item["2022"], 0) },
    { name: "2023", value: data.reduce((sum, item) => sum + item["2023"], 0) },
    { name: "2024", value: data.reduce((sum, item) => sum + item["2024"], 0) }
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={totalData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {totalData.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default React.memo(SalesPieChart);