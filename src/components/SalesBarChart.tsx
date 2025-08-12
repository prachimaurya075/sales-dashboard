import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface Props {
  data: { month: string; [key: string]: number }[];
  year: string;
}

const SalesBarChart: React.FC<Props> = ({ data, year }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis
          dataKey="month"
          stroke="#4b5563"
          tickLine={false}
          axisLine={false}
          padding={{ left: 20, right: 20 }}
        />
        <YAxis
          stroke="#4b5573"
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
          wrapperStyle={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px' }}
        />
        <Legend
          verticalAlign="top"
          height={36}
        />
        <Bar
          dataKey={year}
          fill="#3b82f6"
          radius={[10, 10, 0, 0]}
          barSize={40}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default React.memo(SalesBarChart);