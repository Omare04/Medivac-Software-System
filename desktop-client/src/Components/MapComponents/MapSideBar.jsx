import React from "react";
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
  Flex,
} from "@chakra-ui/react";
import { dividerColor, dividerColorLight } from "../../Colors";
import { RiPlaneFill } from "react-icons/ri";

function MapSideBar() {
  return (
    <SideNavWrapper>
      {/* <StyledTableFilterBar
        style={{
          height: " 30px",
          backgroundColor: "white",
          color: "white",
        }}
      >
        <StyledSearchIconWrap style={{ color: "#6f6f6f" }}>
          <StyledSearchIcon />
        </StyledSearchIconWrap>
        <StyledSearchBox
          style={{ width: "100%", backgroundColor: "white", color: "white" }}
        >
          <StyledSearch
            type="search"
            placeholder="Filter"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></StyledSearch>
        </StyledSearchBox>
      </StyledTableFilterBar> */}
      <MapSideBarCardItem />
    </SideNavWrapper>
  );
}

function MapSideBarCardItem() {
  return (
    <>
      <div
        id="map-card-item-wrapper"
        style={{
          width: "100%",
          paddingLeft: "0px",
          overflow: "auto",
        }}
      >
        <Accordion allowToggle pt={0} mb={0} >
          <AccordianItemComponent colorProp={"#323297"} />
          <AccordianItemComponent colorProp={"#bb2222"} />
          <AccordianItemComponent colorProp={"#399732"} />
        </Accordion>
      </div>
    </>
  );
}

function AccordianItemComponent({ colorProp }) {
  return (
    <>
      <AccordionItem mb={0}>
          <AccordionButton
            backgroundColor={"#1e1e25"}
            border={"none"}
            pl={3}
            borderLeft={`4px solid ${colorProp}`}
            cursor={"pointer"}
            // pt={10}
            // pb={10}
          >
            <Flex
              as="span"
              flex="1"
              textAlign="left"
              flexDirection={"column"}
              color={dividerColorLight}
              fontSize={16}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-start"}
              >
                <RiPlaneFill
                  color={colorProp}
                  style={{ paddingRight: "8px" }}
                  size={30}
                />
                CNTKC
              </Box>
              <Box fontSize={11} color={dividerColor}>
                Recent: AOM012K
              </Box>
            </Flex>
            <AccordionIcon color={dividerColorLight} fontSize={19} />
          </AccordionButton>
        <AccordionPanel

          // mb={7}
          pl={4}
          borderLeft={`4px solid ${colorProp}`}
        >
          <Box
            fontSize={13}
            pt={2}
            pb={2}

            backgroundColor={"#4949493d"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            AOM012B
          </Box>
          <Box
            fontSize={12.5}

            pb={2}
            pt={2}
            color={dividerColor}
            display={"flex"}
            justifyContent={"space-between"}
            borderBottom={`1px solid #323232`}
          >
            Baro Alt:
            <span>19500 ft</span>
          </Box>
          <Box
            fontSize={12.5}
            pb={2}
            pt={2}
            color={dividerColor}
            display={"flex"}
            justifyContent={"space-between"}
            borderBottom={`1px solid #323232`}
          >
            Ground Speed:
            <span>441 kt</span>
          </Box>
          <Box
            fontSize={12.5}
            pb={2}
            pt={2}
            color={dividerColor}
            display={"flex"}
            justifyContent={"space-between"}
            borderBottom={`1px solid #323232`}
          >
            Position:
            <span>31.12° , -89.1°</span>
          </Box>
          <Box
            fontSize={12.5}
            pb={2}
            pt={2}
            color={dividerColor}
            display={"flex"}
            justifyContent={"space-between"}
            borderBottom={`1px solid #323232`}
          >
            Distance:
            <span>3123 nm</span>
          </Box>
          <Box
            fontSize={12.5}
            pb={2}
            pt={2}
            color={dividerColor}
            display={"flex"}
            justifyContent={"space-between"}
            borderBottom={`1px solid #323232`}
          >
            Baro rate:
            <span>-24 ft/min</span>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
}
export default MapSideBar;
