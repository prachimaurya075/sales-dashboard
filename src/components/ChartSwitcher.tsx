
import React from "react";

interface Props {
  chartType: string;
  setChartType: (type: string) => void;
}

const chartOptions = [
  { type: "bar", label: "Bar Chart" },
  { type: "line", label: "Line Chart" },
  { type: "area", label: "Area Chart" },
  { type: "radar", label: "Radar Chart" },
  
] as const;

const ChartSwitcher: React.FC<Props> = ({ chartType, setChartType }) => (
  <nav aria-label="Chart Type Switcher" className="flex flex-wrap justify-center gap-2 md:gap-4 p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
    {chartOptions.map(option => (
      <button
        key={option.type}
        aria-label={`Show ${option.label}`}
        className={`px-6 py-3 rounded-xl font-bold transition-all ${
          chartType === option.type
            ? "bg-blue-600 text-white shadow-xl scale-105"
            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105"
        }`}
        onClick={() => setChartType(option.type)}
      >
        {option.label}
      </button>
    ))}
  </nav>
);

export default React.memo(ChartSwitcher);