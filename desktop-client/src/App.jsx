import { useState } from "react";
import Home from "./Pages/Home";
import Header from "./Layout/Header";
import { ProtectedRoutes } from "./helper/AuthWrapper";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

function App() {
  return (
    <>
      <ChakraProvider>
        <ProtectedRoutes />
      </ChakraProvider>
    </>
  );
}

export default App;
