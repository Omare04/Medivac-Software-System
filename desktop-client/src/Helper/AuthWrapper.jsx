import { Routes, Route } from "react-router-dom";
import React, {
  useContext,
  useEffect,
  useReducer,
  useState,
  createContext,
} from "react";
import { Home } from "../Pages/Home";

export function ProtectedRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
