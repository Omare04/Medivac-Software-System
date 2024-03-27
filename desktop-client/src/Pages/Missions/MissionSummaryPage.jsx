import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Progress,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { dividerColorLight } from "../../Colors";
import { FakeFlight, AddedCrew } from "./FakeSummaryData";
import { RenderCrewInfoCard } from "./CrewInfoPage";

function MissionSummaryPage() {
  const [showProgress, setShowProgress] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProgress(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        id="root_wrapper"
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
        }}
      >
        <MainSummaryContentComponent />
      </div>
    </>
  );
}

function MainSummaryContentComponent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "5px",
      }}
    >
      <Tabs orientation="vertical" pt={5} h={"100%"}>
        <TabList gap={10} pr={5}>
          <Tab isTruncated pl={2}>
            Flight Information
          </Tab>
          <Tab isTruncated pl={2}>
            Crew Information
          </Tab>
          <Tab isTruncated pl={3}>
            Drugs & Equipment
          </Tab>
          <Tab isTruncated pl={2}>
            Patient Information
          </Tab>
          <Tab isTruncated pl={2}>
            Arrival Information
          </Tab>
        </TabList>
        <TabPanels h={"100%"} background={dividerColorLight}>
          <TabPanel>
            <FlightInfoSummaryComponent />
          </TabPanel>
          <TabPanel>
            <CrewInfoSummaryComponent />
          </TabPanel>
          <TabPanel>
            <DrugsAndEquipmentSummaryComponent />
          </TabPanel>
          <TabPanel>
            <PatientInfoSummaryComponent />
          </TabPanel>
          <TabPanel>
            <ArrivalInfoSummaryComponent />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

const ulStyle = {
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: "15px",
};

const infoTitleStyle = {
  marginRight: "auto",
  // fontStyle: "italic",
  fontWeight: "450",
};

function FlightInfoSummaryComponent() {
  return (
    <div id="flight-info" style={wrapperStyle}>
      {/* <p>{FakeFlight[0].flightNo}</p> */}
      <div
        className="selected_crew_wrapper_summarypage"
        style={{ display: "flex", width: "100%" }}
      >
        <div
          id="medivac_flight_details"
          style={{ addingBottom: "20px", width: "30%" }}
        >
          <h2
            style={{
              fontSize: "28px",
              borderBottom: `1px solid #dbdbdb83`,
              marginBottom: "15px",
              paddingBottom: "8px",
              fontWeight: "455",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            Flight Information
          </h2>
          <UnorderedList
            listStyleType={"none"}
            ml={0}
            background={"white"}
            p={3}
            borderRadius={"5px"}
          >
            <ListItem style={ulStyle}>
              <span style={infoTitleStyle}>Flight Number:</span>
              <span style={{ marginLeft: "auto" }}>
                {FakeFlight[0].flightNo}
              </span>
            </ListItem>
            <ListItem style={ulStyle}>
              <span style={infoTitleStyle}>Aircraft:</span>
              <span style={{ marginLeft: "auto" }}>
                {FakeFlight[0].aircraft}
              </span>
            </ListItem>
            <ListItem style={ulStyle}>
              <span style={infoTitleStyle}>Block Time:</span>
              <span style={{ marginLeft: "auto" }}>
                {FakeFlight[0].blockTime}
              </span>
            </ListItem>
            <ListItem style={ulStyle}>
              <span style={infoTitleStyle}>Stop Over Time:</span>
              <span style={{ marginLeft: "auto" }}>
                {FakeFlight[0].stopOverTime}
              </span>
            </ListItem>
            <ListItem style={ulStyle}>
              <span style={infoTitleStyle}>Medivac Method:</span>
              <span style={{ marginLeft: "auto" }}>
                {FakeFlight[0].medivacDetails.method}
              </span>
            </ListItem>
            <ListItem style={ulStyle}>
              <span style={infoTitleStyle}>Medivac Type:</span>
              <span style={{ marginLeft: "auto" }}>
                {FakeFlight[0].medivacDetails.type}
              </span>
            </ListItem>
            <ListItem style={ulStyle}>
              <span style={infoTitleStyle}>Urgency:</span>
              <span style={{ marginLeft: "auto" }}>
                {FakeFlight[0].medivacDetails.urgency}
              </span>
            </ListItem>
          </UnorderedList>
        </div>
        {/* <RenderCrewInfoCard crew={AddedCrew} added={true} summary={true} /> */}
      </div>
    </div>
  );
}

function CrewInfoSummaryComponent() {
  return (
    <div id="crew-info" style={wrapperStyle}>
      <p>Crew Information Content</p>
    </div>
  );
}

function DrugsAndEquipmentSummaryComponent() {
  return (
    <div id="drugs-equipment" style={wrapperStyle}>
      <p>Drugs & Equipment Content</p>
    </div>
  );
}

function PatientInfoSummaryComponent() {
  return (
    <div id="patient-info" style={wrapperStyle}>
      <p>Patient Information Content</p>
    </div>
  );
}

function ArrivalInfoSummaryComponent() {
  return (
    <div id="arrival-info" style={wrapperStyle}>
      <p>Arrival Information Content</p>
    </div>
  );
}

const wrapperStyle = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  flexWrap: "wrap",
};

export default MissionSummaryPage;
