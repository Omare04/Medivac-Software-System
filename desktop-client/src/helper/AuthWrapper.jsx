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
import Personele from "../Pages/Personele/Personnel";
import Missions from "../Pages/Missions/Missions";
import Header from "../Layout/Header";
import { Divider, Flex } from "@chakra-ui/react";
import OrderPageMain from "../Pages/Orders/OrderPageMain";

export function ProtectedRoutes() {
  return (
    <>
      <Header />
      <div style={{ height: "calc(100% - (50px))", padding: "10px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inventory" element={<MedicalEquipmentStock />} />
          <Route path="/orders" element={<OrderPageMain />} />
          <Route path="/personnel" element={<Personele />} />
          <Route path="/Missions" element={<Missions />} />
          {/* <Route path="/Map" element={<Map />} style={{ padding: "0px" }} /> */}
        </Routes>
      </div>
    </>
  );
}
