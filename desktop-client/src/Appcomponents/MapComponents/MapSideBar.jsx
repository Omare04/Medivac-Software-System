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
        <Accordion allowToggle pt={0} mb={0}>
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
        <h2 style={{ margin: "0px" }}>
          <AccordionButton
            backgroundColor={"#1e1e25"}
            border={"none"}
            pl={8}
            borderLeft={`4px solid ${colorProp}`}
            cursor={"pointer"}
            pt={10}
            pb={10}
          >
            <Flex
              as="span"
              flex="1"
              textAlign="left"
              flexDirection={"column"}
              color={dividerColorLight}
              fontSize={16}
            >
              <Box>
                <RiPlaneFill color = {colorProp} style={{paddingRight: "8px"}}/>
                CNTKC
              </Box>
              <Box fontSize={11} marginTop={5} color={dividerColor}>
                Recent: AOM012K
              </Box>
            </Flex>
            <AccordionIcon color={dividerColorLight} fontSize={19} />
          </AccordionButton>
        </h2>
        <AccordionPanel
          pb={4}
          mb={7}
          pl={10}
          borderLeft={`4px solid ${colorProp}`}
        >
          <Box
            fontSize={13}
            pt={5}
            pb={5}
            color={"#dcdcdc"}
            backgroundColor={"#4949493d"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            AOM012B
          </Box>
          <Box
            fontSize={12.5}
            marginTop={5}
            pb={7}
            pt={5}
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
            marginTop={5}
            pb={7}
            pt={5}
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
            marginTop={5}
            pb={7}
            pt={5}
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
            marginTop={5}
            pb={7}
            pt={5}
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
            marginTop={5}
            pb={7}
            pt={5}
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
