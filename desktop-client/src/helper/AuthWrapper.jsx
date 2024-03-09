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
import Personele from "../Pages/Personele/Personele";
import Missions from "../Pages/Missions";
import Header from "../Layout/Header";
import { Divider, Flex } from "@chakra-ui/react";

export function ProtectedRoutes() {
  return (
    <>
      <Header />
      <div style={{ height: "calc(100% - (50px ))", padding: "10px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/stock" element={<MedicalEquipmentStock />} />
          <Route path="/personele" element={<Personele />} />
          <Route path="/Missions" element={<Missions />} />
        </Routes>
      </div>
    </>
  );
}
