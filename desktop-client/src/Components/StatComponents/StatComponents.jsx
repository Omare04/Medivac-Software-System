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
    { name: "B-B", Mission_Type: 9 },
    { name: "B-W", Mission_Type: 2 },
    { name: "B-A", Mission_Type: 20 },
    { name: "A-A", Mission_Type: 10 },
    { name: "A-B", Mission_Type: 1 },
  ];

  const missionTypeAccessor = (entry) => entry["Mission_Type"];
  return (
    <>
      <ResponsiveContainer width="100%" height={230}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey={missionTypeAccessor}
            name="Mission Type"
            fill={buttonBlue}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
