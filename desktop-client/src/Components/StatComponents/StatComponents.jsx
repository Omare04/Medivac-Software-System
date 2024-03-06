import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { buttonBlue } from "../../Colors";

export default function HorizontalBarChartMission() {
  const data = [
    { name: "B-B", Flights: 9 },
    { name: "B-W", Flights: 2 },
    { name: "B-A", Flights: 20 },
    { name: "A-A", Flights: 10 },
    { name: "A-B", Flights: 1 },
  ];
  return (
    <>
      <ResponsiveContainer width="100%" height={230}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Flights" fill = {buttonBlue} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
