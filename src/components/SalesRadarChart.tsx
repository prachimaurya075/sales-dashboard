import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

interface Props {
  data: { month: string; sales: number }[];
  year: string;
}

const SalesRadarChart: React.FC<Props> = ({ data, year }) => (
  <ResponsiveContainer width="100%" height={300}>
    <RadarChart outerRadius={90} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="month" />
      <PolarRadiusAxis angle={30} domain={[0, 1500]} />
      <Radar name="Sales" dataKey={year} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  </ResponsiveContainer>
);

export default React.memo(SalesRadarChart);