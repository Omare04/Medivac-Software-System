import React, { useEffect, useState } from "react";
import {
  SideNavWrapper,
  StyledSideNavCardItemList,
  StyledSideNavCardItemListItem,
} from "../../styles/MapStyles/SidebarMapNavs";
import {
  StyledSearch,
  StyledSearchBox,
  StyledSearchIconWrap,
  StyledSearchIcon,
  StyledTableFilterBar,
} from "../../styles/TableStyles/MissionTableStyles";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Skeleton,
  Flex,
  Text,
  Badge,
} from "@chakra-ui/react";
import { dividerColor, dividerColorLight } from "../../Colors";
import { IoIosAirplane } from "react-icons/io";

function MapSideBar() {
  return (
    <Box
      display={"flex"}
      w={"100%"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      {/* <Box w={"100%"} justifyContent={"center"} display={"flex"} pb={2}>
        <Text fontWeight={600} fontSize={23}>
          Aircrafts
        </Text>
      </Box> */}
      <MapSideBarCardItem />
    </Box>
  );
}

function MapSideBarCardItem() {
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []); // Run once when component mounts

  const accordionItems = [
    { status: "active", colorProp: "purple", callSign: "CN-TME" },
    { status: "inactive", colorProp: "red", callSign: "CN-TKV" },
    { status: "active", colorProp: "blue", callSign: "CN-TMV" },
    { status: "active", colorProp: "green", callSign: "CN-TMH" },
    { status: "inactive", colorProp: "brown", callSign: "CN-TKC" },
    { status: "inactive", colorProp: "orange", callSign: "CN-TKD" },
  ];

  return (
    <>
      <Box display={"flex"} w={"100%"} mr={4}>
        <Accordion allowToggle pt={0} mb={0} pr={0} color={"black"} w={"100%"}>
          {accordionItems.map((item, index) => (
            <Box key={index} mt={index > 0 ? 4 : 0}>
              <Skeleton isLoaded={showSkeleton}>
                <AccordionItemComponent
                  status={item.status}
                  colorProp={item.colorProp}
                  callSign={item.callSign}
                />
              </Skeleton>
            </Box>
          ))}
        </Accordion>
      </Box>
    </>
  );
}
function AccordionItemComponent({ colorProp, status, callSign }) {
  return (
    <>
      <AccordionItem
        mb={0}
        background={dividerColorLight}
        border={"1px solid #f0f0f0b6"}
        borderRadius={5}
        // borderTop={"none"}
        // borderBottom={"none"}
        borderLeft={`5px solid ${colorProp}`}
      >
        <AccordionButton
          display={"flex"}
          justifyContent={"space-between"}
          p={1}
        >
          <Box
            as="span"
            display={"flex"}
            alignItems={"center"}
            // flexDirection={"column"}
          >
            <Box pl={1}>
              <IoIosAirplane size={25} color={colorProp} />
            </Box>
            <Box
              pl={2}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"flex-start"}
            >
              <Box display={"flex"} gap={3} alignItems={"center"}>
                <Text fontSize={15} fontWeight={550}>
                  {callSign}{" "}
                </Text>{" "}
                <Badge
                  colorScheme={status == "active" ? "green" : "red"}
                  fontSize={10}
                >
                  {status}
                </Badge>
              </Box>
              <Box display={"flex"} justifyContent={"flex-start"}>
                <Text fontSize={12}>2023/12/12</Text>
              </Box>
            </Box>
          </Box>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={4}>
          <AccordianBodyComponent />
        </AccordionPanel>
      </AccordionItem>
    </>
  );
}

function AccordianBodyComponent({ data }) {
  return (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
  );
}
export default MapSideBar;
