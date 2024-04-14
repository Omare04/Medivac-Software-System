import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { dividerColorLight } from "../../Colors";
import { CreatePersoneleEventModal } from "../../Components/Modals/PersoneleModals";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Text,
  Heading,
  Badge,
  Flex,
  SkeletonText,
  Skeleton,
} from "@chakra-ui/react";
import { RandomUsers } from "../Missions/FakeSummaryData";
import { FakeFlight } from "../Missions/FakeSummaryData";

const events = [
  { title: "AOM123", start: "2024-04-07", end: "2024-04-10" },
  { title: "AOM234", date: "2024-04-10", end: "2024-04-12" },
  { title: "AOM345", date: "2024-04-10" },
  { title: "AOM456", date: "2024-04-16", end: "2024-04-18" },
  { title: "AOM456", date: "2024-04-15", end: "2024-04-17" },
  { title: "Zool Annual Inspection", date: "2024-04-18" },
  { title: "AOM456", date: "2024-04-20", end: "2024-04-23" },
  { title: "AOM567", date: "2024-04-30" },
  { title: "AOM456", date: "2024-04-31" },
  // { title: "AOM567", date: "2024-03-28" },
  // { title: "AOM456", date: "2024-03-25" },
  // { title: "AOM567", date: "2024-03-13" },
  { title: "AOM456", date: "2024-03-09", end: "2024-03-11" },
  { title: "AOM567", date: "2024-04-03" },
  { title: "AOM234", date: "2024-04-02" },
  // { title: "AOM234", date: "2024-03-10" },
  // { title: "AOM234", date: "2024-03-01" },
  // { title: "AOM234", date: "2024-03-01" },
  { title: "AOM234", date: "2024-04-03" },
  { title: "AOM234", date: "2024-04-04" },
];

const PersoneleCalendar = () => {
  const [CreateEventisOpen, setCreateEventIsOpen] = useState(false);
  const [eventModalIsOpen, setEventModalIsOpen] = useState(false);
  const [eventInfo, setEventInfo] = useState(null);

  const handleCreateEventOpenModal = () => {
    setCreateEventIsOpen(true);
  };

  const handleCreateEventCloseModal = () => {
    setCreateEventIsOpen(false);
  };

  const handleEventCloseModal = () => {
    setEventModalIsOpen(false);
  };

  const customButtons = {
    CreateEventButton: {
      text: "Create Event",
      click: handleCreateEventOpenModal,
    },
  };

  const handleEventOpenModal = (info) => {
    setEventModalIsOpen(true);
    setEventInfo(info.event._def.title);
  };

  const eventTitleStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };

  const renderEventContent = ({ event }) => {
    // Apply custom style for event title
    const eventTitleStyle = {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    };

    return <div style={eventTitleStyle}>{event.title}</div>;
  };

  return (
    <>
      <div
        style={{
          width: "80%",
          height: "100%",
          background: `${dividerColorLight}`,
          padding: "10px",
          marginLeft: "10px",
          borderRadius: "5px",
        }}
      >
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          eventClick={handleEventOpenModal}
          events={events}
          eventContent={renderEventContent}
          expandRows={true}
          dayMaxEventRows={3}
          height="100%"
          customButtons={customButtons}
          headerToolbar={{
            right: "prev,next", 
            center: "title",
            left: "CreateEventButton",
          }}
        />
      </div>
      <CreatePersoneleEventModal
        isOpen={CreateEventisOpen}
        onClose={handleCreateEventCloseModal}
      />
      <EventModal
        isOpen={eventModalIsOpen}
        onClose={handleEventCloseModal}
        id={eventInfo}
      />
    </>
  );
};

const EventModal = ({ isOpen, onClose, id }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pb={0}>
            {id} <Badge ml={3}>{FakeFlight[0].medivacDetails.type}</Badge>{" "}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display={"flex"} flexDirection={"column"} gap={3}>
            <EventDescriptionBody id={id} />

            <Heading size={"sm"}> Crew</Heading>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={3}
              overflow={"auto"}
              height={"300px"}
              p={1}
            >
              {RandomUsers.map((user, key) => (
                <EventUserCards
                  key={key}
                  name={user.name}
                  position={user.position}
                  pictureURL={user.profilePicUrl}
                />
              ))}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const EventUserCards = ({ name, pictureURL, position }) => {
  const [skeleton, setSkeleton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkeleton(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Skeleton isLoaded={skeleton}>
        <Card>
          <CardBody p={2}>
            <Box>
              <Box display={"flex"} gap={2} flexDirection={"column"}>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name="Segun Adebayo" src={pictureURL} size={"sm"} />
                  <Box>
                    <Heading size="sm">
                      {name} <Badge ml={2}>{position}</Badge>
                    </Heading>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </CardBody>
        </Card>
      </Skeleton>
    </>
  );
};

const EventDescriptionBody = ({ id }) => {
  // Define box style
  const Style = {
    display: "flex",
    justifyContent: "space-between",
    background: dividerColorLight,
    padding: 6,
    borderRadius: 5,
  };

  return (
    <Box display={"flex"} flexDirection={"column"} pt={4}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        p={2}
        borderRadius={4}
        gap={2}
      >
        <Box
          display={"flex"}
          w={"100%"}
          gap={4}
          id="mission_Ades_wrapper_calendar_event"
        >
          <Box style={Style} flexWrap={"wrap"} h={"100%"}>
            {" "}
            <Text fontWeight={"bold"}>Event: </Text>
            <Text fontWeight={500} pl={2}>
              {id}
            </Text>
          </Box>
          <Box style={Style} h={"100%"}>
            {" "}
            <Text fontWeight={"bold"}>ADES: </Text>
            <Text fontWeight={500} pl={2}>
              {FakeFlight[0].location.airportOfArrival}
            </Text>
          </Box>
        </Box>
        {/* <Box style={Style}>
          <Text fontWeight={"bold"}>Evac Type:</Text>
          <Text fontWeight={500}>{FakeFlight[0].medivacDetails.type}</Text>
        </Box> */}
        <Text p={2} borderRadius={5} mt={2} style={Style}>
          Team, our medivac flight demands precision and teamwork. Let's
          prioritize patient care, maintain clear communication, and execute our
          roles with excellence. Together, we'll ensure a successful mission.
        </Text>
      </Box>
    </Box>
  );
};

export default PersoneleCalendar;
