"use client";
import React, { useState, Suspense } from "react";
import ChartSwitcher from "@/components/ChartSwitcher";
import { salesData } from "@/data/sales";

const SalesBarChart = React.lazy(() => import("@/components/SalesBarChart"));
const SalesLineChart = React.lazy(() => import("@/components/SalesLineChart"));
const SalesPieChart = React.lazy(() => import("@/components/SalesPieChart"));
const SalesAreaChart = React.lazy(() => import("@/components/SalesAreaChart"));
const SalesRadarChart = React.lazy(() => import("@/components/SalesRadarChart"));

const years = ["2022", "2023", "2024"];

const Dashboard: React.FC = () => {
  const [chartType, setChartType] = useState("bar");
  const [selectedYear, setSelectedYear] = useState("2022");

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 animate-fade-in text-gray-800 dark:text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800 dark:text-blue-300">Sales Dashboard</h1>
        <section className="flex flex-col gap-4 md:flex-row md:gap-8 items-center justify-center mb-12">
          <ChartSwitcher chartType={chartType} setChartType={setChartType} />
          <select
            aria-label="Select Year"
            value={selectedYear}
            onChange={e => setSelectedYear(e.target.value)}
            className="px-4 py-3 rounded-lg border-2 border-blue-400 dark:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-md"
          >
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </section>
        <section className="w-full md:w-2/3 mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl">
          <Suspense fallback={<div className="text-center">Loading chart...</div>}>
            {chartType === "bar" && <SalesBarChart data={salesData} year={selectedYear} />}
            {chartType === "line" && <SalesLineChart data={salesData} year={selectedYear} />}
            {chartType === "pie" && <SalesPieChart data={salesData} />}
            {chartType === "area" && <SalesAreaChart data={salesData} year={selectedYear} />}
            {chartType === "radar" && <SalesRadarChart data={salesData} year={selectedYear} />}
          </Suspense>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;