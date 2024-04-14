import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import {
  Box,
  Badge,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Tabs,
  Tab,
  TabList,
  Text,
} from "@chakra-ui/react";
import { RenderDrawerBody } from "../TableComponents/MissionTable";

const events = [
  { title: "AOM254", date: "2024-04-14", end: "2024-04-16", status: "active" },
  { title: "AOM944", date: "2024-04-14", end: "2024-04-17", status: "active" },
  { title: "AOM424", date: "2024-04-16", end: "2024-04-18", status: "active" },
  {
    title: "AOM214",
    date: "2024-04-18",
    end: "2024-04-20",
    status: "complete",
  },
  {
    title: "AOM288",
    date: "2024-04-07",
    end: "2024-04-09",
    status: "complete",
  },
  {
    title: "AOM201",
    date: "2024-04-19",
    end: "2024-04-21",
    status: "complete",
  },
  {
    title: "AOM201",
    date: "2024-04-16",
    end: "2024-04-18",
    status: "complete",
  },
];

function TimeGridComponent() {
  const calendarRef = React.createRef();
  const [drawer, setDrawer] = useState(false);
  const [missionID, setMissionID] = useState();

  const renderEventContent = ({ event }) => {
    // Apply custom style for event title
    const eventTitleStyle = {
      display: "flex",
      justifyContent: "space-between",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      fontWeight: 450,
      paddingLeft: "5px",
      paddingTop: "1px",
      paddingBottom: "1px",
      paddingRight: "5px",
    };

    const status = event.extendedProps.status;

    return (
      <>
        <div style={eventTitleStyle}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
          >
            <Box fontSize={"16"} display={"flex"} gap={1}>
              <Box display={"flex"} alignItems={"center"} gap={1}>
                {event.title} <Text fontSize={12}> (Neu)</Text>
              </Box>
            </Box>
            <Box display={"flex"} gap={2} fontSize={13} alignItems={"center"}>
              <Badge
                size={"xs"}
                colorScheme={status == "active" ? "green" : "red"}
                borderRadius={1}
              >
                {status}
              </Badge>
              {status == "active" ? <Text>10:11 - 14:32</Text> : null}
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={1} fontSize={13}>
            <Box>ADEP: CMN</Box>
            <Box>ADES: CDG</Box>
          </Box>
        </div>
      </>
    );
  };

  const handleOpenDrawer = (info) => {
    setDrawer(true);
    setMissionID(info.event._def.title);
  };

  const closeMissionDrawer = () => {
    setDrawer(false);
  };

  return (
    <>
      <div style={{ height: "100%" }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridWeek"
          weekends={true}
          eventClick={handleOpenDrawer}
          events={events}
          eventColor="#fafafa"
          eventBorderColor="#ebebebc5"
          eventTextColor="black"
          expandRows={true}
          eventContent={renderEventContent}
          dayMaxEventRows={10}
          height="100%"
          headerToolbar={{
            left: "prev,next CreateEventButton",
            center: "title",
            right: "",
          }}
        />
      </div>
      {timeGridDrawer({ drawer, closeMissionDrawer, missionID })}
    </>
  );
}

function timeGridDrawer({ drawer, closeMissionDrawer, missionID }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <Drawer
      isOpen={drawer}
      placement="right"
      onClose={closeMissionDrawer}
      size={"xl"}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{missionID}</DrawerHeader>
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
  );
}

export default TimeGridComponent;
