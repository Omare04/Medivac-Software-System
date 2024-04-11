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
import {
  Box,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
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
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import {
  FlightInfoSummaryComponent,
  FlightCardComponent,
  CrewInfoSummaryComponent,
  PatientInfoSummaryComponent,
  DrugsAndEquipmentSummaryComponent,
  CardRender,
  CardRenderHospital,
  ArrivalInfoSummaryComponent,
  FileCardComponent,
} from "../../Pages/Missions/MissionSummaryPage";
import {
  FakeFlight,
  Patient,
  ArrivalInfo,
} from "../../Pages/Missions/FakeSummaryData";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const columnHeaders = [
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
    const status = Math.random() < 0.5 ? "Active" : "Complete";

    rows.push(
      <MissionTableRow key={index} onClick={() => openMissionDrawer(missionId)}>
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

function MissionTable({ isMounted }) {
  const [drawer, setDrawer] = useState(false);
  const [missionId, setMissionId] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const openMissionDrawer = (missionId) => {
    setMissionId(missionId);
    setDrawer(true);
    setActiveTab(0);
  };

  const closeMissionDrawer = () => {
    setDrawer(false);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <MissionTableWrapper>
        {columnHeaders.map((data) => (
          <MissionTableHeader key={data}>{data}</MissionTableHeader>
        ))}

        {mapTableRows(openMissionDrawer, isMounted)}
      </MissionTableWrapper>
      <Drawer
        isOpen={drawer}
        placement="right"
        onClose={closeMissionDrawer}
        size={"xl"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{missionId}</DrawerHeader>

          <DrawerBody
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            p={0}
          >
            <Box p={5}>
              <RenderDrawerBody page={activeTab} />
            </Box>
          </DrawerBody>

          <DrawerFooter p={0}>
            <Tabs isLazy pl={5} pr={5} w={"100%"} pb={2}>
              <TabList
                justifyContent={"center"}
                display={"flex"}
                gap={20}
                w={"100%"}
              >
                <Tab
                  onClick={() => handleTabClick(0)}
                  isSelected={activeTab === 0}
                >
                  Flight
                </Tab>
                <Tab
                  onClick={() => handleTabClick(1)}
                  isSelected={activeTab === 1}
                >
                  Crew
                </Tab>
                <Tab
                  onClick={() => handleTabClick(2)}
                  isSelected={activeTab === 2}
                >
                  Drugs & Equipment
                </Tab>
                <Tab
                  onClick={() => handleTabClick(3)}
                  isSelected={activeTab === 3}
                >
                  Patient
                </Tab>
                <Tab
                  onClick={() => handleTabClick(4)}
                  isSelected={activeTab === 4}
                >
                  General
                </Tab>
              </TabList>
            </Tabs>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function MissionSummaryDrawer() {}

export function RenderDrawerBody({ page }) {
  switch (page) {
    case 0:
      return <FlightSummaryDrawerBody />;
    case 1:
      return <CrewSummaryDrawerBody />;
    case 2:
      return <DrugsEquipmentSummaryDrawerBody />;
    case 3:
      return <PatientSummaryDrawerBody />;
    case 4:
      return <GeneralSummaryDrawerBody />;
    default:
      return null;
  }
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

function FlightSummaryDrawerBody() {
  const flightDetails = {
    "Flight Number": FakeFlight[0].flightNo,
    Aircraft: FakeFlight[0].aircraft,
    "Block Time": FakeFlight[0].blockTime,
    "Stop Over Time": FakeFlight[0].stopOverTime,
    "Medivac Method": FakeFlight[0].medivacDetails.method,
    "Medivac Type": FakeFlight[0].medivacDetails.type,
    Urgency: FakeFlight[0].medivacDetails.urgency,
  };

  const flightDetailsLocation = {
    "Airport Of Departure": FakeFlight[0].location.airportOfDeparture,
    "Airport Of Arrival": FakeFlight[0].location.airportOfArrival,
    "City Of Arrival": FakeFlight[0].location.cityOfArrival,
    "City Of Departure": FakeFlight[0].location.cityOfDeparture,
  };

  return (
    <>
      <Box display={"flex"} gap={"10px"} flexDirection={"column"}>
        <Box display={"flex"} gap={"10px"}>
          <FlightCardComponent data={flightDetails} header={"Flight Details"} />
          <FlightCardComponent
            data={flightDetailsLocation}
            header={"Location Details"}
          />
        </Box>
        <Box
          display={"flex"}
          p={0}
          flexWrap={"wrap"}
          w={"100%"}
          gap={"10px"}
          justifyContent={"center"}
          overflow={"auto"}
        >
          <FileCardComponent files={FakeFlight[0].files} />
        </Box>
      </Box>
    </>
  );
}

function CrewSummaryDrawerBody() {
  return <CrewInfoSummaryComponent />;
}

function PatientSummaryDrawerBody() {
  return <PatientInfoSummaryComponent patient={Patient} />;
}

function DrugsEquipmentSummaryDrawerBody() {
  return <DrugsAndEquipmentSummaryComponent />;
}

function GeneralSummaryDrawerBody() {
  return (
    <Box
      display={"flex"}
      w={"100%"}
      gap={2}
      flexDirection={"column"}
      h={"100%"}
    >
      <Box display={"flex"} w={"100%"} gap={2}>
        <CardRenderHospital
          data={ArrivalInfo.hostHospitalDestination}
          title={"Hospital Info"}
          dataObject={ArrivalInfo}
        />
      </Box>
      <Box w={"100%"} gap={2} display={"flex"}>
        <CardRender
          data={ArrivalInfo.departureAmbulanceContact}
          title={"Ambulance On Departure Info"}
        />
        <CardRender
          data={ArrivalInfo.physicianContactOnDeparture}
          title={"Physician Contact On Departure"}
        />
      </Box>
      <Box display={"flex"} w={"100%"} gap={2}>
        <CardRender
          data={ArrivalInfo.arrivalAmbulanceContact}
          title={"Ambulance On Arrival Info"}
        />

        <CardRender
          data={ArrivalInfo.physicianContactOnArrival}
          title={"Physician Contact On Arrival"}
        />
      </Box>
    </Box>
  );
}
export default MissionTableComponent;
