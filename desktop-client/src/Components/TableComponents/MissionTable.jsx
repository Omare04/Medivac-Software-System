import React, { useState, useEffect } from "react";
import {
  MissionTableData,
  MissionTableHeader,
  MissionTableRow,
  MissionTableWrapper,
  StyledTableFilterBar,
  StyledSearchIconWrap,
  StyledSearch,
  StyledSearchIcon,
  StyledSearchBox,
} from "../../styles/TableStyles/MissionTableStyles";
import { Center, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { IoMdSearch } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import {
  IconDropDown,
  DropDownComp,
} from "../InputComponents/DropdownComponents";
import { dividerColorLight } from "../../Colors";
import { IoIosAirplane } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { StyledSeeMoreEntries } from "../../styles/HomeLayout";
import { buttonBlue } from "../../Colors";
import { FaTruckMedical } from "react-icons/fa6";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Badge,
  Button,
  DrawerCloseButton,
} from "@chakra-ui/react";

const columnHeaders = [
  "",
  "Status",
  "Flight NO.",
  "Date ",
  "ADEP",
  "ADES",
  "STA",
  ,
  "Transfer",
  "Type",
  "ACFT",
  "CPT",
  "FO",
  "DR",
  "MEDIC",
  "PAX",
];

function MissionTableComponent() {
  return (
    <>
      <TableFilterBar></TableFilterBar>
      <div style={{ overflow: "auto", height: "100%", marginTop: "10px" }}>
        <MissionTable />
      </div>
    </>
  );
}

function mapTableRows(openMissionDrawer) {
  const rows = [];

  for (let index = 0; index < 35; index++) {
    const missionId = `AOM123-${index}`;
    const status = Math.random() < 0.5 ? "Active" : "Done";

    rows.push(
      <MissionTableRow key={index} onClick={() => openMissionDrawer(missionId)}>
        <MissionTableData
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IoEllipsisHorizontalSharp />
        </MissionTableData>
        <MissionTableData>
          <Badge colorScheme={status === "Active" ? "green" : "red"}>
            {status}
          </Badge>
        </MissionTableData>
        <MissionTableData>AOM123</MissionTableData>
        <MissionTableData>02/04/2024</MissionTableData>
        <MissionTableData>GMMN</MissionTableData>
        <MissionTableData>AWWP</MissionTableData>
        <MissionTableData>16:19 UTC</MissionTableData>
        <MissionTableData>B-B</MissionTableData>
        <MissionTableData>Cardiology</MissionTableData>
        <MissionTableData>CNTKC</MissionTableData>
        <MissionTableData>Ham</MissionTableData>
        <MissionTableData>SOB</MissionTableData>
        <MissionTableData>CHM</MissionTableData>
        <MissionTableData>ROH</MissionTableData>
        <MissionTableData>2</MissionTableData>
      </MissionTableRow>
    );
  }

  return <>{rows}</>;
}

function MissionTable() {
  const [drawer, setDrawer] = useState(false);
  const [missionId, setMissionId] = useState(null);

  const openMissionDrawer = (missionId) => {
    setMissionId(missionId);
    setDrawer(true);
  };

  const closeMissionDrawer = () => {
    setDrawer(false);
  };

  return (
    <>
      <MissionTableWrapper>
        {/* <MissionTableRow> */}
        {columnHeaders.map((data) => (
          <MissionTableHeader key={data}>{data}</MissionTableHeader>
        ))}
        {/* </MissionTableRow> */}
        {mapTableRows(openMissionDrawer)}
      </MissionTableWrapper>
      <Drawer
        isOpen={drawer}
        placement="right"
        onClose={closeMissionDrawer}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{missionId}</DrawerHeader>

          <DrawerBody>Body</DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function TableFilterBar() {
  return (
    <>
      <StyledTableFilterBar>
        <StyledSearchIconWrap>
          <StyledSearchIcon />
        </StyledSearchIconWrap>
        <StyledSearchBox>
          <StyledSearch
            type="search"
            placeholder="Filter"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></StyledSearch>
        </StyledSearchBox>
        <div>
          <StyledSearch
            type="date"
            placeholder="From"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></StyledSearch>
        </div>
        <MdCompareArrows
          style={{ fontSize: " 24px", marginLeft: "10px", marginRight: "10px" }}
        />
        <div>
          <StyledSearch
            type="date"
            placeholder="To"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></StyledSearch>
        </div>
        <div
          style={{
            marginLeft: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
            height: "100%",
            fontSize: "13px",
            display: "flex",
            alignItems: "center",
            backgroundColor: `${dividerColorLight}`,
          }}
        >
          <IconDropDown
            title={"Transfer"}
            options_data={["", ""]}
            placeholderprop={"Transfer"}
            Icon={<FaTruckMedical style={{ fontSize: "17px" }} />}
          />
        </div>
        <div
          style={{
            marginLeft: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
            height: "100%",
            fontSize: "13px",
            display: "flex",
            alignItems: "center",
            backgroundColor: `${dividerColorLight}`,
          }}
        >
          <IconDropDown
            title={"Aircraft"}
            options_data={["", ""]}
            placeholderprop={"Aircraft"}
            Icon={<IoIosAirplane style={{ fontSize: "19px" }} />}
          />
        </div>
        <div
          style={{
            marginLeft: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
            height: "100%",
            fontSize: "13px",
            display: "flex",
            alignItems: "center",
            backgroundColor: `${dividerColorLight}`,
          }}
        >
          <IconDropDown
            title={"Advanced Filters"}
            options_data={["", ""]}
            placeholderprop={"Advanced Filters"}
            Icon={<FaFilter />}
          />
        </div>
      </StyledTableFilterBar>
    </>
  );
}
export default MissionTableComponent;
