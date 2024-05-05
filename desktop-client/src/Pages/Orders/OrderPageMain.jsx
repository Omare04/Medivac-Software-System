import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  AccordionIcon,
} from "@chakra-ui/react";
import MedicalEquipmentOrders from "./MedicalEquipmentOrders";
import PharamceuticalOrders from "./PharamceuticalOrders";
import { IoShareOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { buttonBlue, dividerColorLight } from "../../Colors";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/chakra-ui";
import { UnorderedList, ListItem } from "@chakra-ui/react";
import { FaTruck } from "react-icons/fa";

const personeleLinks = [
  {
    title: "Suppliers",
    route: "/getMedicalPersonele",
    icon: <FaTruck size={17} style={{ marginRight: "10px" }} />,
    subRoutes: {},
  },
];

function OrderPageMain() {
  return (
    <>
      <div style={{ height: "calc(100% - 70px)", padding: "10px" }}>
        <div
          id="order_page_root_wrapper"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "10px",
            height: "100%",
          }}
        >
         <div
            id="order_page_right_wrapper"
            style={{ height: "100%", width: "100%" }}
          >
            <Tabs size="md" variant="enclosed" height="calc(100% - (53.2px))">
              <TabList>
                <Tab>Pharmaceuticals</Tab>
                <Tab>Medical Equipment</Tab>
              </TabList>
              <TabPanels height={"100%"}>
                <TabPanel
                  mt={3}
                  height={"100%"}
                  borderRadius={2}
                  overflow={"auto"}
                >
                  <PharamceuticalOrders />
                </TabPanel>
                <TabPanel
                  mt={3}
                  height={"100%"}
                  borderRadius={2}
                  // overflow={"auto"}
                >
                  <MedicalEquipmentOrders />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderPageMain;
