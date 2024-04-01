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
  Text,
  UnorderedList,
  Card,
  Box,
  CardHeader,
  CardBody,
  CardFooter,
  StackDivider,
  Divider,
  Heading,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { dividerColorLight } from "../../Colors";
import {
  FakeFlight,
  AddedCrew,
  Patient,
  Companions,
  DrugOptions,
  ArrivalInfo,
  Crew,
} from "./FakeSummaryData";
import { RenderCrewInfoCard } from "./CrewInfoPage";
import { RenderAddedDrugsEquipmentTable } from "../../Components/TableComponents/CreateMissionTables";
import { IoMdDownload } from "react-icons/io";
import { LuFiles } from "react-icons/lu";
import { LiaHospitalSymbolSolid } from "react-icons/lia";

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
      <MainSummaryContentComponent />
    </>
  );
}

function MainSummaryContentComponent() {
  return (
    <div
      style={{
        width: "100%",
        height: "89%",
        borderRadius: "5px",
      }}
    >
      <Tabs orientation="vertical" pt={5} h={"100%"} display={"flex"}>
        <TabList gap={10} pr={5} pl={0}>
          <Tab isTruncated>Flight Information</Tab>
          <Tab isTruncated>Crew Information</Tab>
          <Tab isTruncated>Drugs & Equipment</Tab>
          <Tab isTruncated>Patient Information</Tab>
          <Tab isTruncated>General Information</Tab>
        </TabList>
        <TabPanels background={dividerColorLight} display={"flex"} w={"100%"}>
          <TabPanel display={"flex"} w={"100%"}>
            <FlightInfoSummaryComponent />
          </TabPanel>
          <TabPanel display={"flex"} w={"100%"} overflow={"auto"}>
            <CrewInfoSummaryComponent />
          </TabPanel>
          <TabPanel display={"flex"} w={"100%"} overflow={"auto"}>
            <DrugsAndEquipmentSummaryComponent />
          </TabPanel>
          <TabPanel display={"flex"} w={"100%"}>
            <PatientInfoSummaryComponent patient={Patient} />
          </TabPanel>
          <TabPanel display={"flex"} w={"100%"}>
            <ArrivalInfoSummaryComponent arrivalInfo={ArrivalInfo} />
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

export function FlightInfoSummaryComponent() {
  // Mock flight details object
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
    <div
      id="flight-info"
      style={{
        width: "100%",
        display: "flex",
        // height: "100%",
        gap: "10px",
        overflowY: "auto",
      }}
    >
      <Box width={"60%"} display={"flex"} flexDirection={"column"} gap={"10px"}>
        <FlightCardComponent data={flightDetails} header="Flight Information" />
        <Box height={"30%"}>
          <FlightCardComponent
            data={flightDetailsLocation}
            header="Location Details"
          />
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        p={0}
        w={"50%"}
        overflow={"auto"}
        pr={4}
      >
        <Heading
          size={"md"}
          pl={3}
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          pt={1}
        >
          {" "}
          Files <LuFiles />
        </Heading>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={1}
          w={"100%"}
          flexWrap={"wrap"}
          overflow={"auto"}
        >
          <FileCardComponent files={FakeFlight[0].files} />
        </Box>
      </Box>
    </div>
  );
}

export function FlightCardComponent({ data, header }) {
  return (
    <Card w={"100%"} overflow={"auto"}>
      <CardBody p={4} w={"100%"}>
        <CardHeader pl={0} pb={5} pt={0}>
          <Heading size={"md"}>{header}</Heading>
        </CardHeader>
        <Stack divider={<StackDivider />} spacing="1.5" w={"100%"}>
          {Object.entries(data).map(([title, value]) => (
            <Box
              key={value}
              display={"flex"}
              justifyContent={"space-between"}
              w={"100%"}
            >
              <Text fontWeight="bold" pr={20}>
                {title}
              </Text>
              <Text>{value}</Text>
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
}

export function CrewInfoSummaryComponent() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        // height: "100%",
        gap: "10px",
        flexWrap: "wrap",
        justifyContent: "center",
        // overflow: "auto",
      }}
    >
      {Object.values(Crew).map((crewMember) => (
        <Card
          key={crewMember.name}
          w={"48%"}
          // height={"100%"}
          display={"flex"}
          // overflow={"auto"}
        >
          <CardBody p={4} h={"100%"}>
            <CardHeader pl={0} pt={1}>
              <Heading size={"md"}>{crewMember.position}</Heading>
            </CardHeader>
            <Stack divider={<StackDivider />} spacing="1.5">
              {Object.entries(crewMember)
                .filter(([key]) => key !== "position")
                .map(([key, value]) => (
                  <Box
                    key={key}
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <Text fontWeight="bold">{`${
                      key.charAt(0).toUpperCase() + key.slice(1)
                    }:`}</Text>
                    <Text>{value}</Text>
                  </Box>
                ))}
            </Stack>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export function DrugsAndEquipmentSummaryComponent() {
  return (
    <div id="drugs-equipment" style={wrapperStyle}>
      <RenderAddedDrugsEquipmentTable
        items={DrugOptions}
        setItems={null}
        editable={false}
      />
    </div>
  );
}

export function PatientInfoSummaryComponent({ patient }) {
  return (
    <div
      id="patient-info"
      style={{
        width: "100%",
        display: "flex",
        height: "100%",
        gap: "10px",
        overflowY: "auto",
      }}
    >
      <Card w={"55%"} h={"100%"} display={"flex"} overflow={"auto"}>
        <CardBody p={4}>
          <CardHeader pl={0}>
            <Heading size={"md"}>Patient Info</Heading>
          </CardHeader>
          <Stack divider={<StackDivider />} spacing="2.5">
            {Object.entries(patient.personalInformation).map(([key, value]) => (
              <Box key={key} display={"flex"} justifyContent={"space-between"}>
                <Text fontWeight="bold">{`${
                  key.charAt(0).toUpperCase() +
                  key
                    .slice(1)
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                }: `}</Text>
                <Text>{value}</Text>
              </Box>
            ))}
            {Object.entries(patient.admissionDetails).map(([key, value]) => (
              <Box key={key} display={"flex"} justifyContent={"space-between"}>
                <Text fontWeight="bold">{`${
                  key.charAt(0).toUpperCase() +
                  key
                    .slice(1)
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                }: `}</Text>
                <Text>{value}</Text>
              </Box>
            ))}
          </Stack>
        </CardBody>
      </Card>
      <Box w={"45%"} display={"flex"} flexDirection={"column"}>
        <CompanionListComponent companionList={Companions} />
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          flexWrap={"wrap"}
          overflow={"auto"}
        >
          <FileCardComponent files={patient.files} />
        </Box>
      </Box>
    </div>
  );
}

function CompanionListComponent({ companionList }) {
  return (
    <>
      <Card h={"100%"} display={"flex"} overflow={"auto"}>
        <CardBody h={"100%"}>
          <Stack divider={<StackDivider />} spacing="1.5" h={"100%"}>
            {companionList.map((companion, index) => (
              <Box key={index} h={"100%"}>
                <Text fontWeight="bold">Companion {index + 1}</Text>
                <Text
                  marginTop="0.5rem"
                  display="flex"
                  justifyContent="space-between"
                >
                  Name:{" "}
                  <span>
                    {companion.name.first} {companion.name.last}
                  </span>
                </Text>
                <Text
                  marginTop="0.5rem"
                  display="flex"
                  justifyContent="space-between"
                >
                  Nationality: <span>{companion.nationality}</span>
                </Text>
                <Text
                  marginTop="0.5rem"
                  display="flex"
                  justifyContent="space-between"
                >
                  Document Number: <span>{companion.documentNumber}</span>
                </Text>
                <Text
                  marginTop="0.5rem"
                  display="flex"
                  justifyContent="space-between"
                >
                  Visa Number: <span>{companion.visaNumber}</span>
                </Text>
                <Text
                  marginTop="0.5rem"
                  display="flex"
                  justifyContent="space-between"
                >
                  Phone Number: <span>{companion.phoneNumber}</span>
                </Text>
              </Box>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export function ArrivalInfoSummaryComponent({ arrivalInfo }) {
  return (
    <>
      <div
        id="medivac-info"
        style={{
          width: "100%",
          display: "flex",
          height: "100%",
          gap: "10px",
          overflowY: "auto",
        }}
      >
        <Box
          display={"flex"}
          gap={2}
          flexDirection={"column"}
          height={"100%"}
          w={"100%"}
        >
          <CardRender
            data={arrivalInfo.departureAmbulanceContact}
            title={"Ambulance On Departure Info"}
          />
          <CardRender
            data={arrivalInfo.physicianContactOnDeparture}
            title={"Physician Contact On Departure"}
          />
        </Box>
        <Box
          display={"flex"}
          gap={2}
          flexDirection={"column"}
          height={"100%"}
          w={"100%"}
        >
          <CardRender
            data={arrivalInfo.arrivalAmbulanceContact}
            title={"Ambulance On Arrival Info"}
          />

          <CardRender
            data={arrivalInfo.physicianContactOnArrival}
            title={"Physician Contact On Arrival"}
          />
        </Box>

        <CardRenderHospital
          data={arrivalInfo.hostHospitalDestination}
          title={"Hospital Info"}
          dataObject={arrivalInfo}
        />
      </div>
    </>
  );
}

export function CardRender({ data, title }) {
  return (
    <Card w={"100%"} h={"100%"} display={"flex"} overflow={"auto"}>
      <CardBody p={4}>
        <CardHeader pl={0}>
          <Heading size={"md"}>{title}</Heading>
        </CardHeader>
        <Stack divider={<StackDivider />} spacing="1.5">
          {/* Rendering hostHospitalDestination */}
          {Object.entries(data).map(([key, value]) => (
            <Box key={key} display={"flex"} justifyContent={"space-between"}>
              <Text fontWeight="bold">{`${
                key.charAt(0).toUpperCase() +
                key
                  .slice(1)
                  .replace(/([A-Z])/g, " $1")
                  .trim()
              }: `}</Text>
              <Text>{value}</Text>
            </Box>
          ))}
          {/* Pass arrivalInfo.files to FileCardComponent */}
          {/* <FileCardComponent files={data.files} /> */}
        </Stack>
      </CardBody>
    </Card>
  );
}

export function CardRenderHospital({ data, title, dataObject }) {
  return (
    <Card w={"100%"} h={"100%"} display={"flex"} overflow={"auto"}>
      <CardBody p={4}>
        <CardHeader pl={0}>
          <Heading
            size={"md"}
            display={"flex"}
            alignItems={"center"}
            gap={"10px"}
            pt={1}
          >
            {title} <LiaHospitalSymbolSolid />{" "}
          </Heading>
        </CardHeader>
        <Stack divider={<StackDivider />} spacing="1.5">
          {/* Rendering hostHospitalDestination */}
          {Object.entries(data).map(([key, value]) => (
            <Box key={key} display={"flex"} justifyContent={"space-between"}>
              <Text fontWeight="bold">{`${
                key.charAt(0).toUpperCase() +
                key
                  .slice(1)
                  .replace(/([A-Z])/g, " $1")
                  .trim()
              }: `}</Text>
              <Text>{value}</Text>
            </Box>
          ))}
          <Box display={"flex"} flexWrap={"wrap"} gap={1}>
            <FileCardComponent files={dataObject.files} />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export function FileCardComponent({ files }) {
  return (
    <>
      {Object.entries(files).map(([key, file]) => (
        <Card
          key={key}
          mt={4}
          p={4}
          w={"49%"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box>
              <Text fontWeight="bold">{file.title}</Text>
              <Text>Type: {file.type}</Text>
              <Text>Size: {file.size}</Text>
            </Box>
            <Box display="flex" justifyContent="flex-end" alignItems={"center"}>
              <IconButton
                aria-label="Download"
                icon={<IoMdDownload />}
                size="sm"
                colorScheme="blue"
                _hover={{ bg: "blue.400" }}
                _active={{ bg: "blue.300" }}
                transition="background 0.15s ease"
              />
            </Box>
          </Box>
        </Card>
      ))}
    </>
  );
}

const wrapperStyle = {
  width: "100%",
  // display: "flex",
  height: "100%",
  gap: "10px",
  overflowY: "auto",
};

export default MissionSummaryPage;
