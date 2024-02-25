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

export function ProtectedRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Map" element={<Map />} />
      </Routes>
    </>
  );
}
