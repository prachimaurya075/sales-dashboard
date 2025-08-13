// /components/SalesLineChart.tsx

import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface Props {
  data: { month: string; sales: number }[];
}

const SalesLineChart: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis
          dataKey="month"
          stroke="#4b5563"
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#4b5573"
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          wrapperStyle={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px' }}
        />
        <Legend
          verticalAlign="top"
          height={36}
        />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#82ca9d"
          strokeWidth={3}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default React.memo(SalesLineChart);