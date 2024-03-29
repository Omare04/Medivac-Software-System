import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { dividerColorLight } from "../../Colors";
import { CreatePersoneleEventModal } from "../../Components/Modals/PersoneleModals";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

const events = [
  { title: "AOM123", start: "2024-03-07", end: "2024-03-10" },
  { title: "AOM234", date: "2024-03-10", end: "2024-03-12" },
  { title: "AOM345", date: "2024-03-10" },
  { title: "AOM456", date: "2024-03-16", end: "2024-03-18" },
  { title: "AOM456", date: "2024-03-15", end: "2024-03-17" },
  { title: "AOM567", date: "2024-03-18" },
  { title: "AOM456", date: "2024-03-20", end: "2024-03-23" },
  { title: "AOM567", date: "2024-03-30" },
  { title: "AOM456", date: "2024-03-31" },
  // { title: "AOM567", date: "2024-03-28" },
  // { title: "AOM456", date: "2024-03-25" },
  // { title: "AOM567", date: "2024-03-13" },
  { title: "AOM456", date: "2024-03-09", end: "2024-03-11" },
  { title: "AOM567", date: "2024-03-03" },
  { title: "AOM234", date: "2024-03-02" },
  // { title: "AOM234", date: "2024-03-10" },
  // { title: "AOM234", date: "2024-03-01" },
  // { title: "AOM234", date: "2024-03-01" },
  { title: "AOM234", date: "2024-03-03" },
  { title: "AOM234", date: "2024-03-04" },
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

  const renderEventContent = (eventInfo) => {
    return (
      <div>
        <p>{eventInfo.event.title} </p>
      </div>
    );
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
            left: "prev,next CreateEventButton", // Reference your custom button
            center: "title",
            right: "dayGridMonth",
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
  // Assuming id is an object containing information about the event

  const eventTitle = id ? id : "";
  console.log(eventTitle);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{eventTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PersoneleCalendar;
