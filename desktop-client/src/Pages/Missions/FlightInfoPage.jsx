import React, { useState } from "react";
import {
  InputUnit,
  InputUnitSelect,
  InputUnitNumber,
} from "../Orders/MedicalEquipmentOrders";
import { dividerColorLight, dividerColor } from "../../Colors";
import { IoAirplaneSharp } from "react-icons/io5";
import {
  InputComponentIcon,
  InputComponentSelectRight,
} from "../../Components/InputComponents/InputComponents";
import { FaPlaneArrival, FaClock, FaPlaneDeparture } from "react-icons/fa";
import { CountrySelectComponent } from "../../Components/InputComponents/InputComponents";

const timeZones = [
  "UTC",
  "GMT",
  "EST",
  "CST",
  "MST",
  "PST",
  "AEDT",
  "AEST",
  "JST",
  "CET",
  "EET",
  "IST",
  "PST",
  "PDT",
  "AST",
  "HST",
];

function FlightInfoPage() {
  // State variables for flight information
  const [cityOfOrigin, setCityOfOrigin] = useState("");
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [cityOfDestination, setCityOfDestination] = useState("");
  const [countryOfDestination, setCountryOfDestination] = useState("");
  const [airportOfDeparture, setAirportOfDeparture] = useState("");
  const [airportOfArrival, setAirportOfArrival] = useState("");
  const [eta, setETA] = useState("");
  const [flightHours, setFlightHours] = useState(0);
  const [numberOfStops, setNumberOfStops] = useState(0);
  const [stopsInformation, setStopsInformation] = useState([]);
  const [scheduledStopoverTimes, setScheduledStopoverTimes] = useState("");
  const [typeOfTransfer, setTypeOfTransfer] = useState("");
  const [urgency, setUrgency] = useState("");

  // Handlers for input changes
  const handleCityOfOriginChange = (event) => {
    setCityOfOrigin(event.target.value);
  };

  const handleCountryOfOriginChange = (event) => {
    setCountryOfOrigin(event.target.value);
  };

  const handleCityOfDestinationChange = (event) => {
    setCityOfDestination(event.target.value);
  };

  const handleCountryOfDestinationChange = (event) => {
    setCountryOfDestination(event.target.value);
  };

  const handleAirportOfDepartureChange = (event) => {
    setAirportOfDeparture(event.target.value);
  };

  const handleAirportOfArrivalChange = (event) => {
    setAirportOfArrival(event.target.value);
  };

  const handleETAChange = (event) => {
    setETA(event.target.value);
  };

  const handleFlightHoursChange = (value) => {
    setFlightHours(value);
  };

  const handleNumberOfStopsChange = (value) => {
    setNumberOfStops(value);
  };

  const handleStopsInformationChange = (event, index) => {
    const newStopsInformation = [...stopsInformation];
    newStopsInformation[index] = event.target.value;
    setStopsInformation(newStopsInformation);
  };

  const handleScheduledStopoverTimesChange = (event) => {
    setScheduledStopoverTimes(event.target.value);
  };

  const handleTypeOfTransferChange = (event) => {
    setTypeOfTransfer(event.target.value);
  };

  const handleUrgencyTransferChange = (event) => {
    setUrgency(event.target.value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "10px",
          paddingBottom: "80px",
        }}
      >
        {/* Flight Information Header */}
        <div
          style={{
            fontSize: "25px",
            borderBottom: `1px solid ${dividerColorLight}`,
            marginBottom: "30px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <IoAirplaneSharp />
          Flight Information
        </div>

        {/* Destination */}
        <div style={{ paddingBottom: "20px" }}>
          <h3
            style={{
              fontSize: "18px",
              borderBottom: `1px solid ${dividerColorLight}`,
              marginBottom: "15px",
              fontWeight: "bold",
            }}
          >
            Destination
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              flexDirection: "column",
            }}
          >
            <div
              className="origin_wrapper"
              style={{ display: "flex", gap: "10px" }}
            >
              <CountrySelectComponent
                title={"City of Origin"}
                value={countryOfOrigin}
                onSelect={handleCountryOfOriginChange}
              />
            </div>
            <div
              className="destination"
              style={{ display: "flex", gap: "10px" }}
            >
              <InputUnit
                title={"City of Destination"}
                type="text"
                value={cityOfDestination}
                onChange={handleCityOfDestinationChange}
              />
              <InputUnit
                title={"Country of Destination"}
                type="text"
                value={countryOfDestination}
                onChange={handleCountryOfDestinationChange}
              />
            </div>
          </div>
        </div>

        {/* Plane Details */}
        <div style={{ paddingBottom: "20px" }}>
          <h3
            style={{
              fontSize: "18px",
              borderBottom: `1px solid ${dividerColorLight}`,
              marginBottom: "15px",
              fontWeight: "bold",
            }}
          >
            Plane Details
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <InputComponentIcon
              icon={<FaPlaneDeparture />}
              title={"Airport of Departure"}
              type="text"
              value={airportOfDeparture}
              onChange={handleAirportOfDepartureChange}
            />
            <InputComponentIcon
              icon={<FaPlaneArrival />}
              title={"Airport of Arrival"}
              type="text"
              value={airportOfArrival}
              onChange={handleAirportOfArrivalChange}
            />
            <InputComponentSelectRight
              icon={<FaClock />}
              placeholder={"ETA"}
              title={"ETA"}
              type="text"
              value={eta}
              selectItems={timeZones}
              selectPlaceHolder={"TZ"}
              onChange={handleETAChange}
            />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <InputUnitNumber
                title={"Number of Flight Hours"}
                value={flightHours}
                onChange={handleFlightHoursChange}
              />
              <InputUnitNumber
                title={"Number of Stops"}
                value={numberOfStops}
                onChange={handleNumberOfStopsChange}
              />
              {numberOfStops > 0 &&
                Array.from({ length: numberOfStops }, (_, index) => (
                  <InputUnit
                    key={index}
                    title={`Stop ${index + 1}`}
                    type="text"
                    value={stopsInformation[index] || ""}
                    onChange={(event) =>
                      handleStopsInformationChange(event, index)
                    }
                  />
                ))}
            </div>
          </div>
        </div>

        {/* Other Details */}
        <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h2
            style={{
              fontSize: "18px",
              borderBottom: `1px solid ${dividerColorLight}`,
              marginBottom: "15px",
              fontWeight: "bold",
            }}
          >
            Medivac Flight Details
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <InputUnit
              title={"Scheduled Stopover Times"}
              type="text"
              value={scheduledStopoverTimes}
              onChange={handleScheduledStopoverTimesChange}
            />
            <InputUnitSelect
              title={"Type of Transfer"}
              value={typeOfTransfer}
              onChange={handleTypeOfTransferChange}
              items={[
                "Bed -> Bed",
                "Wing -> Wing",
                "Bed -> Airport",
                "Airport -> Airport",
                "Airport -> Bed",
              ]}
            />
            <InputUnitSelect
              title={"Medivac Urgency"}
              value={urgency}
              onChange={handleUrgencyTransferChange}
              items={[
                "Moderate Urgency",
                "Non Urgent",
                "Moderate Urgency",
                "Extreme Urgency",
                "Non Urgent",
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FlightInfoPage;
