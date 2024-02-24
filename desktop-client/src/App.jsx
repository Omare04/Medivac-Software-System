import { useState } from "react";
import Home from "./Pages/Home";
import Header from "./Layout/Header";
import { ProtectedRoutes } from "./helper/AuthWrapper";

function App() {
  return (
    <>
      <Header />
      <ProtectedRoutes/>
    </>
  );
}

export default App;
