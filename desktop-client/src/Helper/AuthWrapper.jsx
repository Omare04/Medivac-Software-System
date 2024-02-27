import { Routes, Route } from "react-router-dom";
import React, {
  useContext,
  useEffect,
  useReducer,
  useState,
  createContext,
} from "react";
import { Home } from "../Pages/Home";
import Map from "../Pages/Map";
import MedicalEquipmentStock from "../Pages/Stock/MedicalEquipmentStock";

export function ProtectedRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/stock" element={<MedicalEquipmentStock />} />
      </Routes>
    </>
  );
}
