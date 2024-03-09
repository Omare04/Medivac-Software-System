import React, { useCallback, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export function MissionStatComponents() {
  return <div>MissionStatComponents</div>;
}

export function MissionsByAircraftStat() {
  const data = [
    {
      name: "CNTKC",
      Missions: 2,
    },
    {
      name: "CNTKV",
      Missions: 1,
    },
    {
      name: "CNTMH",
      Missions: 4,
    },
    {
      name: "CNTKX",
      Missions: 0,
    },
    {
      name: "CNTKD",
      Missions: 1,
    },
  ];
  return (
    <BarChart width={400} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Missions" fill="#82ca9d" />
    </BarChart>
  );
}

export function MissionMonthlyRecapStat() {
  return <></>;
}
