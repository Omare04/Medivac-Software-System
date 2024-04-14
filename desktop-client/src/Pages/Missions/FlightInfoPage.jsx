import React, { useState, useEffect } from "react";
import {
  InputUnit,
  InputUnitSelect,
  InputUnitNumber,
} from "../Orders/MedicalEquipmentOrders";
import { dividerColorLight, dividerColor, buttonBlue } from "../../Colors";
import { IoAirplaneSharp } from "react-icons/io5";
import {
  InputComponentIcon,
  // InputComponentSelectRight,
} from "../../Components/InputComponents/InputComponents";
import {
  FaPlaneArrival,
  FaClock,
  FaPlaneDeparture,
  FaHandHoldingMedical,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { CountrySelectComponent } from "../../Components/InputComponents/InputComponents";
import { PiHash } from "react-icons/pi";
import { MdConnectingAirports } from "react-icons/md";
import { ReactSelectComponent } from "../../Components/InputComponents/InputComponents";
import FileUploadComponent from "../../helper/FileUpload";

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
  return (
    <>
      <div
        id="flight_info_mission_root_wrapper"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          paddingTop: "10px",
          height: "100%",
          marginBottom: "60px",
        }}
      >
        <div
          className="main_flight_info_components_mission_wrapper"
          style={{
            marginBottom: "10px",
            alignItems: "center",
            height: "100%",
            gap: "10px",
          }}
        >
          <FlightDetailsComponent />
        </div>
      </div>
    </>
  );
}

function FlightDetailsComponent() {
  const [eta, setETA] = useState("");
  const [flightHours, setFlightHours] = useState(0);
  const [numberOfStops, setNumberOfStops] = useState(0);
  const [stopsInformation, setStopsInformation] = useState([]);
  const [scheduledStopoverTimes, setScheduledStopoverTimes] = useState("");
  const [typeOfTransfer, setTypeOfTransfer] = useState("");
  const [urgency, setUrgency] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [selectedAircraft, setSelectedAircraft] = useState([]);

  const handleAirportOfDepartureChange = (event) => {
    setAirportOfDeparture(event.target.value);
  };

  const handleFlightNumberChange = (event) => {
    setFlightNumber(event.target.value);
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

  return (
    <>
      <div
        className="medivac_flight_root_wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "15px",
          background: dividerColorLight,
          padding: "15px ",
          borderRadius: "5px",
        }}
      >
        <div
          className="medivac_flight_wrapper"
          style={{
            display: "flex",
            width: "100%",
            gap: "25px",
            borderBottom: `1px solid #ececec`,
            borderWidth: "30%",
            paddingBottom: "15px",
          }}
        >
          <div
            id="plane_details"
            style={{ paddingBottom: "20px", width: "50%" }}
          >
            <h3
              style={{
                fontSize: "18px",
                borderBottom: `1px solid ${dividerColorLight}`,
                marginBottom: "15px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <IoAirplaneSharp />
              Flight Details
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
                width: "100%",
              }}
            >
              <div
                className="airport_wrapper"
                style={{ display: "flex", gap: "10px", width: "100%" }}
              >
                <ReactSelectComponent
                  selectOptions={[
                    { value: "CNTKC", label: "CN-TKC" },
                    { value: "CNTKV", label: "CN-TKV" },
                    { value: "CNTMV", label: "CN-TMV" },
                    { value: "CNTKX", label: "CN-TKX" },
                  ]}
                  placeHolder={"Select"}
                  title={"Aircraft"}
                  selectedOptions={selectedAircraft}
                  setSelectedOptions={setSelectedAircraft}
                  isTitle={true}
                />
              </div>
              <div
                className="flightNum_eta_component_wrapper"
                style={{ display: "flex", gap: "10px", width: "100%" }}
              >
                <InputComponentIcon
                  title={"Flight Number"}
                  isTitle={true}
                  icon={<PiHash />}
                  type={"number"}
                  value={flightNumber}
                  onChange={handleFlightNumberChange}
                />
                {/* <InputComponentSelectRight
                  icon={<FaClock />}
                  placeholder={"ETA"}
                  title={"ETA"}
                  type="text"
                  value={eta}
                  selectItems={timeZones}
                  selectPlaceHolder={"TZ"}
                  onChange={handleETAChange}
                /> */}
              </div>
              <div
                id="flight_hours_wrapper"
                style={{
                  display: "flex",
                  gap: "10px",
                  width: "100%",
                }}
              >
                <InputUnitNumber
                  title={"Block Time"}
                  value={flightHours}
                  onChange={handleFlightHoursChange}
                />
                <InputUnitNumber
                  title={"Number of Stops"}
                  value={numberOfStops}
                  onChange={handleNumberOfStopsChange}
                />
              </div>
            </div>
          </div>
          <MedivacDetailsComponent />
        </div>

        <div
          id="number_of_stops_wrapper"
          style={{
            display: "flex",
            gap: "10px",
            width: "100%",
          }}
        >
          {numberOfStops > 0 &&
            Array.from({ length: numberOfStops }, (_, index) => (
              <div
                className="number_of_stops_wrapper"
                style={{
                  display: "flex",
                  gap: "10px",
                  width: "100%",
                }}
              >
                <InputComponentIcon
                  key={index}
                  isTitle={true}
                  icon={<MdConnectingAirports size={25} />}
                  title={`Stop ${index + 1} Airport Code`}
                  type="text"
                  value={stopsInformation[index] || ""}
                  onChange={(event) =>
                    handleStopsInformationChange(event, index)
                  }
                />
              </div>
            ))}
        </div>
        <DestinationFormComponent />
      </div>
    </>
  );
}

function MedivacDetailsComponent() {
  const [scheduledStopoverTimes, setScheduledStopoverTimes] = useState("");
  const [typeOfTransfer, setTypeOfTransfer] = useState("");
  const [methodOfTransfer, setMethodOfTransfer] = useState("");
  const [urgency, setUrgency] = useState("");

  const handleScheduledStopoverTimesChange = (event) => {
    setScheduledStopoverTimes(event.target.value);
  };

  return (
    <div
      id="medivac_flight_details"
      style={{ addingBottom: "20px", width: "50%" }}
    >
      <h2
        style={{
          fontSize: "18px",
          borderBottom: `1px solid ${dividerColorLight}`,
          marginBottom: "15px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <FaHandHoldingMedical />
        Medivac Details
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        <InputUnit
          title={"Scheduled Stopover Times"}
          type="text"
          value={scheduledStopoverTimes}
          onChange={handleScheduledStopoverTimesChange}
        />
        <div
          className="medivac_transfer_types_wrapper"
          style={{ display: "flex", width: "100%", gap: "10px" }}
        >
          <ReactSelectComponent
            selectOptions={[
              { value: "Bed -> Bed", label: "Bed to Bed" },
              { value: "Wing -> Wing", label: "Wing to Wing" },
              { value: "Bed -> Airport", label: "Bed to Airport" },
              { value: "Airport -> Airport", label: "Airport to Airport" },
              { value: "Airport -> Bed", label: "Airport to Bed" },
            ]}
            placeHolder={"Select"}
            title={"Transfer Method"}
            selectedOptions={methodOfTransfer}
            setSelectedOptions={setMethodOfTransfer}
            isTitle={true}
            customStyles={null}
          />
          <ReactSelectComponent
            selectOptions={[
              { value: "Neurological", label: "Neurological" },
              { value: "Cardiological", label: "Cardiological" },
              { value: "Respitory", label: "Respitory" },
            ]}
            placeHolder={"Select"}
            title={"Transfer Type"}
            selectedOptions={typeOfTransfer}
            setSelectedOptions={setTypeOfTransfer}
            isTitle={true}
          />
        </div>
        <ReactSelectComponent
          selectOptions={[
            { value: "Moderate Urgency", label: "Moderate Urgency" },
            { value: "Non Urgent", label: "Non Urgent" },
            { value: "Extreme Urgency", label: "Extreme Urgency" },
            { value: "Non Urgent", label: "Non Urgent" },
          ]}
          placeHolder={"Select"}
          title={"Medivac Urgency"}
          selectedOptions={urgency}
          setSelectedOptions={setUrgency}
          isTitle={true}
        />
      </div>
    </div>
  );
}

function DestinationFormComponent() {
  const [cityOfOrigin, setCityOfOrigin] = useState("");
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [cityOfDestination, setCityOfDestination] = useState("");
  const [countryOfDestination, setCountryOfDestination] = useState("");
  const [airportOfDeparture, setAirportOfDeparture] = useState("");
  const [airportOfArrival, setAirportOfArrival] = useState("");

  const handleAirportOfDepartureChange = (event) => {
    setAirportOfDeparture(event.target.value);
  };

  const handleAirportOfArrivalChange = (event) => {
    setAirportOfArrival(event.target.value);
  };

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
  return (
    <>
      <div
        id="destination_component_root_wrapper"
        style={{
          background: dividerColorLight,
          borderRadius: "5px",
          height: "100%",
          width: "100%",
        }}
      >
        <h2
          style={{
            fontSize: "18px",
            borderBottom: `1px solid ${dividerColorLight}`,
            marginBottom: "15px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <FaMapMarkedAlt />
          Location Details
        </h2>
        <div
          style={{
            display: "flex",
            height: "100%",
          }}
        >
          <div
            className="flight_departure_arrival_wrapper"
            style={{
              display: "flex",
              gap: "15px",
              width: "70%",
              height: "100%",
              flexDirection: "column",
            }}
          >
            <div
              className="origin_wrapper"
              style={{ display: "flex", gap: "10px", height: "100%" }}
            >
              <InputComponentIcon
                icon={<FaPlaneDeparture />}
                title={"Airport of Departure"}
                type="text"
                value={airportOfDeparture}
                onChange={handleAirportOfDepartureChange}
                isTitle={true}
              />
              <InputUnit
                title={"City of origin"}
                type="text"
                value={cityOfOrigin}
                onChange={handleCityOfOriginChange}
              />
              <InputComponentIcon
                icon={<FaPlaneArrival />}
                title={"Airport of Arrival"}
                type="text"
                value={airportOfArrival}
                onChange={handleAirportOfArrivalChange}
                isTitle={true}
              />
              <InputUnit
                title={"City of Destination"}
                type="text"
                value={cityOfDestination}
                onChange={handleCityOfDestinationChange}
              />
            </div>
            <div
              className="destination"
              style={{ display: "flex", gap: "10px" }}
            >
              <CountrySelectComponent
                title={"Country of Origin"}
                value={countryOfOrigin}
                onSelect={handleCountryOfOriginChange}
              />
              <CountrySelectComponent
                title={"Country of Destination"}
                value={countryOfDestination}
                onSelect={handleCountryOfDestinationChange}
              />
            </div>
          </div>
          <div
            className="file_upload_component"
            style={{
              width: "30%",
              height: "100%",
              display: "flex",
              flexWrap: "wrap",
              paddingLeft: "10px",
            }}
          >
            <FileUploadComponent title={"Flight Documents"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default FlightInfoPage;
