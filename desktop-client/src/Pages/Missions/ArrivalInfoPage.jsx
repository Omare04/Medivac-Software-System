import React, { useState, useEffect } from "react";
import FileUploadComponent from "../../helper/FileUpload";
import {
  InputUnit,
  InputUnitSelect,
  InputUnitNumber,
} from "../Orders/MedicalEquipmentOrders";
import { dividerColorLight, dividerColor, buttonBlue } from "../../Colors";
import {
  InputComponentTextArea,
  MultiSelectComponent,
  InputComponentIcon,
  InputComponentRadio,
} from "../../Components/InputComponents/InputComponents";
import { Button } from "@chakra-ui/react";
import { CompanionTable } from "../../Components/TableComponents/CreateMissionTables";
import { IoMdTime } from "react-icons/io";
import { BiPlusMedical, BiSolidPhone } from "react-icons/bi";
import { PiHash } from "react-icons/pi";
import { IoPerson } from "react-icons/io5";
import { CountrySelectComponent } from "../../Components/InputComponents/InputComponents";
import { FaHospitalSymbol, FaAmbulance } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";

function ArrivalInfoPage() {
  return (
    <div
      id="arrival_info_root_page"
      style={{
        padding: "10px",
        paddingBottom: "70px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <div
        className="patient_info_wrapepr"
        style={{
          display: "flex",
          width: "100%",
          gap: "10px",
          paddingBottom: "30px",
        }}
      >
        <ArrivalHospitalComponent
          ComponentTitle={"Arrival Hospital Information"}
        />
        <div
          id="doctor_comments_vertical_wrapper"
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            gap: "10px",
            flexDirection: "column",
          }}
        >
          <DoctorOnArrivalInfo ComponentTitle={"Arrival Doctor Information"} />
          <div
            id="briefing_comments_mission_wrapper"
            style={{
              background: dividerColorLight,
              padding: "15px",
              height: "100%",
              width: "100%",
            }}
          >
            <InputComponentTextArea
              title={"Briefing Comments"}
              placeholder={"Text"}
            />
          </div>
        </div>
      </div>
      <div
        id="arrival_ambulance_component_wrapper"
        style={{
          display: "flex",
          width: "100%",
          gap: "10px",
          paddingBottom: "30px",
        }}
      >
        <ArrivalAmbulanceComponent
          ComponentTitle={"Departure Ambulance Information"}
        />
        <ArrivalAmbulanceComponent
          ComponentTitle={"Arrival Ambulance Information"}
        />
      </div>
    </div>
  );
}

const hospitalDepartments = [
  "Emergency Medicine",
  "Internal Medicine",
  "Surgery",
  "Pediatrics",
  "Obstetrics and Gynecology",
  "Orthopedics",
  "Cardiology",
  "Neurology",
  "Oncology",
  "Radiology",
  "Anesthesiology",
  "Psychiatry",
  "Dermatology",
  "Ophthalmology",
  "Otolaryngology (ENT)",
  "Urology",
  "Gastroenterology",
  "Pulmonology",
  "Nephrology",
  "Endocrinology",
  "Hematology",
  "Infectious Diseases",
  "Physical Therapy",
  "Occupational Therapy",
  "Speech Therapy",
  "Nutrition and Dietetics",
  "Pharmacy",
  "Laboratory Services",
  "Medical Imaging",
  "Medical Records",
  "Hospital Administration",
  "Quality Assurance",
  "Patient Services",
  "Facilities Management",
  "Billing and Coding",
  "Human Resources",
  "Research and Development",
  "Education and Training",
  "Community Outreach",
  "Social Services",
  "Chaplaincy Services",
];

const cities = [
  "New York City, USA",
  "Tokyo, Japan",
  "London, UK",
  "Paris, France",
  "Beijing, China",
  "Mumbai, India",
  "Sao Paulo, Brazil",
  "Istanbul, Turkey",
  "Moscow, Russia",
  "Cairo, Egypt",
  "Sydney, Australia",
  "Mexico City, Mexico",
  "Berlin, Germany",
  "Seoul, South Korea",
  "Cape Town, South Africa",
];

function ArrivalHospitalComponent({ ComponentTitle }) {
  const [hospitalName, setHospitalName] = useState("");
  const [address, setAddress] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  // State and onchange handler for Hospital Name input
  const handleHospitalNameChange = (event) => {
    setHospitalName(event.target.value);
  };

  // State and onchange handler for Address input
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  // State and onchange handler for Country input
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  // State and onchange handler for City input
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  // State and onchange handler for Department input
  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          padding: "20px",
          borderRadius: "5px",
          background: dividerColorLight,
          gap: "10px",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            borderBottom: `1px solid #ebebeb`,
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaHospitalSymbol />
          {ComponentTitle}
        </h2>

        <InputUnit
          title={"Hospital Name"}
          value={hospitalName}
          onChange={handleHospitalNameChange}
        />
        <div
          className="document_info_wrapper"
          style={{
            display: "flex",
            gap: "25px",
            width: "100%",
            justifyContent: "flex-start",
          }}
        >
          <CountrySelectComponent
            title={"Country"}
            value={selectedCountry}
            onChange={handleCountryChange}
          />

          <InputUnitSelect
            title={"City"}
            value={selectedCity}
            onChange={handleCityChange}
            items={cities}
          />
        </div>

        <InputUnit
          placeholder={"Address Line"}
          title={"Address"}
          value={address}
          onChange={handleAddressChange}
        />

        <div
          className="contact_info_wrapper"
          style={{
            display: "flex",
            gap: "25px",
            width: "100%",
            paddingTop: "7px",
          }}
        >
          <InputUnitSelect
            title={"Department"}
            value={selectedDepartment}
            onChange={handleDepartmentChange}
            items={hospitalDepartments}
          />
          <FileUploadComponent title={"Hospital Agreement"} />
        </div>
      </div>
    </>
  );
}

function DoctorOnArrivalInfo({ companion, ComponentTitle, onAddCompanion }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactNumber, setEmergencyContactNumber] = useState("");

  // State and onchange handler for Emergency Contact Number input
  const handleEmergencyContactNumberChange = (event) => {
    setEmergencyContactNumber(event.target.value);
  };

  const handleEmergencyContactNameChange = (event) => {
    setEmergencyContactName(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAddCompanion = () => {
    const newCompanion = {
      firstName,
      lastName,
      emergencyContactName,
      emergencyContactNumber,
    };

    onAddCompanion(newCompanion);

    setFirstName("");
    setLastName("");
    setEmergencyContactName("");
    setEmergencyContactNumber("");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          padding: "20px",
          borderRadius: "5px",
          background: dividerColorLight,
          gap: "10px",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            borderBottom: `1px solid #ebebeb`,
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaUserDoctor color="#464646" /> {ComponentTitle}
        </h2>
        <div
          style={{ display: "flex", gap: "25px", width: "100%" }}
          id="doctor_name_wrapper_mission"
        >
          <InputUnit
            title={"First Name"}
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <InputUnit
            title={"Last Name"}
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>

        <div
          className="contact_info_wrapper"
          style={{
            display: "flex",
            gap: "25px",
            width: "100%",
            paddingTop: "7px",
          }}
        >
          <InputComponentIcon
            title={"Emergency Contact Number"}
            icon={<BiSolidPhone />}
            type={"number"}
            value={emergencyContactNumber}
            onChange={handleEmergencyContactNumberChange}
            isTitle={true}
          />
          <InputComponentRadio title={"Contactable ? "} />
        </div>
        {companion ? (
          <>
            <Button
              color={"white"}
              background={buttonBlue}
              mt={6}
              onClick={handleAddCompanion}
            >
              Add
            </Button>
          </>
        ) : null}
      </div>
    </>
  );
}

function ArrivalAmbulanceComponent({ ComponentTitle }) {
  const [ambulanceType, setAmbulanceType] = useState("");
  const [estimatedTimeOfArrival, setEstimatedTimeOfArrival] = useState("");

  
  const handleAmbulanceTypeChange = (event) => {
    setAmbulanceType(event.target.value);
  };


  const handleETAChange = (event) => {
    setEstimatedTimeOfArrival(event.target.value);
  };


  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          padding: "20px",
          borderRadius: "5px",
          background: dividerColorLight,
          gap: "10px",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            borderBottom: `1px solid #ebebeb`,
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaAmbulance />
          {ComponentTitle}
        </h2>

        <div
          style={{ display: "flex", gap: "25px", width: "100%" }}
          id="patient_name_wrapper"
        >
          <InputUnit
            title={"Ambulance Type"}
            value={ambulanceType}
            onChange={handleAmbulanceTypeChange}
          />
          <InputComponentIcon
          isTitle={true}
            title={"ETA"}
            icon={<CiClock2 />}
            value={estimatedTimeOfArrival}
            onChange={handleETAChange}
          />
        </div>
      </div>
    </>
  );
}

export default ArrivalInfoPage;
