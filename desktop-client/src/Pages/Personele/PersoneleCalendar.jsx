import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { dividerColorLight } from "../../Colors";

const PersoneleCalendar = () => {
  const events = [
    // Your events data goes here
    { title: "Event 1", date: "2024-03-07" },
    { title: "Event 2", date: "2024-03-10" },
    { title: "Event 3", date: "2024-03-10" },
    { title: "Event 4", date: "2024-03-10" },
    { title: "Event 5", date: "2024-03-10" },
    { title: "Event 2", date: "2024-03-10" },
    { title: "Event 2", date: "2024-03-10" },
    { title: "Event 2", date: "2024-03-10" },
    { title: "Event 2", date: "2024-03-10" },
    { title: "Event 2", date: "2024-03-10" },
    { title: "Event 2", date: "2024-03-10" },
    // Add more events as needed
  ];

  const renderEventContent = (eventInfo) => {
    // Custom rendering logic for event content
    return (
      <div>
        <p>{eventInfo.event.title}</p>
      </div>
    );
  };

  const handleEventDidMount = (info) => {
    const eventElement = info.el;
    const eventTitle = info.event.title;

    // Check if the event title length exceeds a certain limit
    const maxTitleLength = 15; // Adjust this limit as needed

    if (eventTitle.length > maxTitleLength) {
      // Trim the title and add an ellipsis
      const truncatedTitle = eventTitle.substring(0, maxTitleLength) + "...";
      eventElement.innerHTML = `<p title="${eventTitle}">${truncatedTitle}</p>`;
    }
  };



  return (
    <div
      style={{
        width: "90%",
        height: "100%",
        background: `${dividerColorLight}`,
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        eventContent={renderEventContent}
        dayMaxEventRows={4}
        height="100%"
        headerToolbar={{
          right: "prev,next today",
          left: "title",
        }}
      />
    </div>
  );
};

export default PersoneleCalendar;
