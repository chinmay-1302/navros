"use client"

import React, { Fragment, useState } from "react";
import { createRoot } from "react-dom/client";
import { AgChartsReact } from "ag-charts-react";
import {
  AgBarSeriesOptions,
  AgCategoryAxisOptions,
  AgChartCaptionOptions,
  AgChartLegendOptions,
  AgChartOptions,
  AgChartSubtitleOptions,
  AgCharts,
  AgLineSeriesOptions,
  AgNumberAxisOptions,
} from "ag-charts-community";

const ChartsPage = () => {
  const [options, setOptions] = useState<AgChartOptions>({
    // Chart Title
    title: { text: "Ice Cream Sales and Avg Temp" } as AgChartCaptionOptions,
    // Chart Subtitle
    subtitle: { text: "Data from 2022" } as AgChartSubtitleOptions,
    // Data: Data to be displayed within the chart
    data: [
      { month: "Jan", avgTemp: 2.3, iceCreamSales: 162000 },
      { month: "Mar", avgTemp: 6.3, iceCreamSales: 302000 },
      { month: "May", avgTemp: 16.2, iceCreamSales: 800000 },
      { month: "Jul", avgTemp: 22.8, iceCreamSales: 1254000 },
      { month: "Sep", avgTemp: 14.5, iceCreamSales: 950000 },
      { month: "Nov", avgTemp: 8.9, iceCreamSales: 200000 },
    ],
    // Series: Defines which chart type and data to use
    series: [
      {
        type: "bar",
        xKey: "month",
        yKey: "iceCreamSales",
        yName: "Ice Cream Sales",
      } as AgBarSeriesOptions,
      {
        type: "line",
        xKey: "month",
        yKey: "avgTemp",
        yName: "Average Temperature (°C)",
      } as AgLineSeriesOptions,
    ],
    // Axes: Configure the axes for the chart
    axes: [
      // Display category (xKey) as the bottom axis
      {
        type: "category",
        position: "bottom",
      } as AgCategoryAxisOptions,
      // Use left axis for 'iceCreamSales' series
      {
        type: "number",
        position: "left",
        keys: ["iceCreamSales"],
        // Format the label applied to this axis
        label: {
          formatter: (params) => {
            return parseFloat(params.value).toLocaleString();
          },
        },
      } as AgNumberAxisOptions,
      // Use right axis for 'avgTemp' series
      {
        type: "number",
        position: "right",
        keys: ["avgTemp"],
        // Format the label applied to this axis (append ' °C')
        label: {
          formatter: (params) => {
            return params.value + " °C";
          },
        },
      } as AgNumberAxisOptions,
    ],
    // Legend: Matches visual elements to their corresponding series or data categories.
    legend: {
      position: "right",
    } as AgChartLegendOptions,
  });


  return (
    <div className="flex flex-col gap-8 w-full">
      <h1>Motor Actual Position</h1>
      <div className="h-[40rem]">
      <AgChartsReact options={options} />
      </div>
    </div>
  )
}

export default ChartsPage