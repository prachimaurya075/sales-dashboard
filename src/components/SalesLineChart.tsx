import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { SalesData } from "@/data/sales";

interface Props {
  data: { month: string; sales: number }[];
  year: string;
}

const SalesLineChart: React.FC<Props> = ({ data, year }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey={year} stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
);

export default React.memo(SalesLineChart);