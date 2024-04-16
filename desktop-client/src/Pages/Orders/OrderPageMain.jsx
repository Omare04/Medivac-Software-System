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
      <div style={{ height: "calc(100% - 50px)", padding: "10px" }}>
        {/* <div
        style={{
          fontWeight: "450",
          borderBottom: `1px solid #ededed`,
          paddingBottom: "5px",
          marginBottom: "8px",
          width: "100%",
          paddingLeft: "5px",
          color: "#000000",
          fontSize: "22px",
        }}
      >
        Orders
      </div> */}
        <div
          id="order_page_root_wrapper"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "10px",
            height: "100%",
          }}
        >
          {/* <div
          id="order_page_left_wrapper"
          style={{
            height: "100%",
            background: "#eeeeee86",
            color: "black",
            marginRight: "10px",
            borderRadius: "3px",
          }}
        >
          <Accordion w={"200px"} allowToggle>
            {personeleLinks.map((item, key) => (
              <AccordionItem
                key={key}
                cursor={"pointer"}
                whiteSpace="pre-wrap"
                overflow="hidden"
                textOverflow="ellipsis"
                fontWeight={400}
                fontSize={15}
                transition="all 0.1s"
                onClick={() => {
                  setRoute(item.route);
                }}
                borderBottom={"none"}
              >
                <AccordionButton p={3} fontSize={"15px"} color={"black"}>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    flex="1"
                    textAlign="left"
                  >
                    {item.icon}
                    {item.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>Hi</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div> */}
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
                  style={{ background: "#f5f5f589" }}
                  height={"100%"}
                  borderRadius={2}
                  overflow={"auto"}
                >
                  <PharamceuticalOrders />
                </TabPanel>
                <TabPanel
                  mt={3}
                  style={{ background: "#f5f5f589" }}
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
