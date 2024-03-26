import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Progress,
} from "@chakra-ui/react";
import { dividerColorLight } from "../../Colors";

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
        {showProgress ? (
          <>
            <div
              id="spinner_title_wrapper"
              style={{
                display: "flex",
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                paddingBottom: "100px",
              }}
            >
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "540",
                  margin: "20px 0",
                }}
              >
                Generating Summary
              </h2>
              <Progress size="xs" isIndeterminate color={"blue"} w={"30%"} />
            </div>
          </>
        ) : (
          <MainSummaryContentComponent />
        )}
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

function FlightInfoSummaryComponent() {
  return (
    <div id="flight-info" style={wrapperStyle}>
      <p>Flight Information Content</p>
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
