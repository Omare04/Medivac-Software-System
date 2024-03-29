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
import MainRequestChecklist from "../Pages/CheckListRequests/MainRequestChecklist";
import { Progress } from "@chakra-ui/react";

export function ProtectedRoutes() {
  const [state, setState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 1000);
  }, []);

  return (
    <>
      {state ? (
        <>
          <div
            style={{
              height: "90%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <img
              src="/AOM_logo_horizontal.png"
              style={{
                height: "85px",
                width: "330px",
                marginLeft: "40px",
                // marginBottom: "10%",
              }}
            />
            <Progress
              ml={5}
              mt={5}
              size="xs"
              isIndeterminate
              colorScheme={"red"}
              w={"100%"}
            />
          </div>
        </>
      ) : (
        <>
          <Header />
          <div style={{ height: "calc(100% - 50px)", padding: "10px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Inventory" element={<MedicalEquipmentStock />} />
              <Route path="/orders" element={<OrderPageMain />} />
              <Route path="/personnel" element={<Personele />} />
              <Route path="/Missions" element={<Missions />} />
              <Route
                path="/checklistsRequests"
                element={<MainRequestChecklist />}
              />
            </Routes>
          </div>
        </>
      )}
    </>
  );
}
