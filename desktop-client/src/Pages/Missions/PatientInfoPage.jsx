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
} from "../../Components/InputComponents/InputComponents";
import {
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { CompanionTable } from "../../Components/TableComponents/CreateMissionTables";
import { IoMdTime } from "react-icons/io";
import { BiPlusMedical, BiSolidPhone } from "react-icons/bi";
import { PiHash } from "react-icons/pi";
import { IoPerson } from "react-icons/io5";
import { CountrySelectComponent } from "../../Components/InputComponents/InputComponents";


function PatientInfoPage() {
  const [companions, setCompanions] = useState([]);

  const handleAddCompanion = (newCompanion) => {
    setCompanions([...companions, newCompanion]);
  };

  useEffect(() => {
    console.log(companions);
  }, [companions]);
  return (
    <>
      <div
        id="Patient_info_page_root_wrapper"
        style={{ padding: "10px", paddingBottom: "70px" }}
      >
        <div
          id={"Patient-Info-Page-Wrapper"}
          style={{
            display: "flex",
            // flexWrap: "wrap",
            width: "100%",
            // justifyContent: "center",
            // paddingBottom: "30px",
            background: dividerColorLight,
          }}
        >
          <div
            className="patient_info_wrapepr"
            style={{
              display: "flex",
              height: "100%",
              width: "60%",
              gap: "55px",
              paddingBottom: "30px",
            }}
          >
            <PatientInfoComponent
              companion={false}
              ComponentTitle={"Patient Info"}
              onAddCompanion={handleAddCompanion}
            />
          </div>
          <DoctorsNotesComponents tableItems={companions} />
        </div>
        <div
          className="companion_wrapper"
          style={{
            display: "flex",
            width: "100%",
            gap: "5px",
            paddingTop: "30px",
            overflow: "auto",
          }}
        >
          <div
            className="companion_info_wrapper"
            style={{
              display: "flex",
              borderRadius: "5px",
              height: "100%",
              width: "50%",
              gap: "55px",
              paddingBottom: "30px",
              background: dividerColorLight,
            }}
          >
            <PatientInfoComponent
              companion={true}
              ComponentTitle={"Companion Info"}
              onAddCompanion={handleAddCompanion}
            />
          </div>
          <div
            style={{
              width: "100%",
              background: dividerColorLight,
              padding: "20px",
              overflowY: "auto",
              borderRadius: "5px",
            }}
          >
            <CompanionTable items={companions} />
          </div>
        </div>
      </div>
    </>
  );
}

function PatientInfoComponent({ companion, ComponentTitle, onAddCompanion }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [nationality, setNationality] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [visaNumber, setVisaNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [fileNumber, setFileNumber] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactNumber, setEmergencyContactNumber] = useState("");

  // State and onchange handler for Emergency Contact Number input
  const handleEmergencyContactNumberChange = (event) => {
    setEmergencyContactNumber(event.target.value);
  };

  const handleEmergencyContactNameChange = (event) => {
    setEmergencyContactName(event.target.value);
  };

  const handleFnameChange = (event) => {
    setFname(event.target.value);
  };

  const handleLnameChange = (event) => {
    setLname(event.target.value);
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  const handleDocumentNumberChange = (event) => {
    setDocumentNumber(event.target.value);
  };

  const handleVisaNumberChange = (event) => {
    setVisaNumber(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handleFileNumberChange = (event) => {
    setFileNumber(event.target.value);
  };

  const handleAddCompanion = () => {
    const newCompanion = {
      fname,
      lname,
      nationality,
      documentNumber,
      visaNumber,
      dateOfBirth,
      fileNumber,
      emergencyContactName,
      emergencyContactNumber,
    };

    onAddCompanion(newCompanion);

    setLname("");
    setFname("");
    setNationality("");
    setDocumentNumber("");
    setVisaNumber("");
    setDateOfBirth("");
    setFileNumber("");
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
          <IoPerson color="#464646" /> {ComponentTitle}
        </h2>
        <div
          style={{ display: "flex", gap: "25px", width: "100%" }}
          id="patient_name_wrapper"
        >
          <InputUnit
            title={"First Name"}
            value={fname}
            onChange={handleFnameChange}
          />
          <InputUnit
            title={"Last Name"}
            value={lname}
            onChange={handleLnameChange}
          />
        </div>
        <InputUnit
          title={"Date Of Birth"}
          value={dateOfBirth}
          type={"date"}
          onChange={handleDateOfBirthChange}
        />
        <CountrySelectComponent
          title={"Nationality"}
          value={nationality}
          onChange={handleNationalityChange}
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
          <InputUnit
            title={"Document Number"}
            value={documentNumber}
            onChange={handleDocumentNumberChange}
          />
          <InputUnit
            title={"Visa Number"}
            value={visaNumber}
            onChange={handleVisaNumberChange}
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
          <InputUnit
            title={"Emergency Contact Name"}
            value={emergencyContactName}
            onChange={handleEmergencyContactNameChange}
          />
          <InputComponentIcon
            isTitle={true}
            title={"Emergency Contact Number"}
            icon={<BiSolidPhone />}
            type={"number"}
            value={emergencyContactNumber}
            onChange={handleEmergencyContactNumberChange}
          />
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

const patientStatusOptions = [
  { value: "stable", label: "Stable" },
  { value: "critical", label: "Critical" },
  { value: "improving", label: "Improving" },
  { value: "worsening", label: "Worsening" },
  { value: "recovered", label: "Recovered" },
  { value: "acute", label: "Acute" },
  { value: "chronic", label: "Chronic" },
  { value: "undergoing_treatment", label: "Undergoing Treatment" },
  { value: "awaiting_diagnosis", label: "Awaiting Diagnosis" },
  { value: "unstable", label: "Unstable" },
  { value: "palliative_care", label: "Palliative Care" },
  { value: "hospitalized", label: "Hospitalized" },
  { value: "home_care", label: "Home Care" },
  { value: "transferred", label: "Transferred" },
  { value: "discharged", label: "Discharged" },
];

function DoctorsNotesComponents({ tableItems }) {
  const [notes, setNotes] = useState("");
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [dateOfAdmission, setDateOfAdmission] = useState("");
  const [durationOfHospitalization, setDurationOfHospitalization] =
    useState("");
  const [reasonForHospitalisation, setReasonForHospitalisation] = useState("");
  const [reasonForMedicalEvacuation, setReasonForMedicalEvacuation] =
    useState("");
  const [fileNumber, setFileNumber] = useState("");

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };
  const handleFileNumberChange = (event) => {
    setFileNumber(event.target.value);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          gap: "20px",
          padding: "20px",
          borderRadius: "5px",
          background: dividerColorLight,
          flexDirection: "column",
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
          <BiPlusMedical color="#464646" /> Medical Information
        </h2>
        <div
          style={{
            width: "100%",
            display: "flex",
            height: "100%",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              gap: "10px",
              flexDirection: "column",
            }}
          >
            <MultiSelectComponent
              selectOptions={patientStatusOptions}
              placeHolder={"Select"}
              title={"Patient Status"}
              selectedOptions={selectedStatus}
              setSelectedOptions={setSelectedStatus}
            />
            <InputUnit
              title={"Date Of Admission"}
              value={dateOfAdmission}
              type={"date"}
              onChange={(event) => setDateOfAdmission(event.target.value)}
            />
            <InputComponentIcon
              isTitle={true}
              icon={<IoMdTime />}
              title={"Duration Of hospitalization"}
              value={durationOfHospitalization}
              onChange={(event) =>
                setDurationOfHospitalization(event.target.value)
              }
            />
            <InputUnit
              title={"Reason For Hospitalisation"}
              value={reasonForHospitalisation}
              onChange={(event) =>
                setReasonForHospitalisation(event.target.value)
              }
            />
            <InputUnit
              title={"Reason For Medical Evacuation"}
              value={reasonForMedicalEvacuation}
              onChange={(event) =>
                setReasonForMedicalEvacuation(event.target.value)
              }
            />
          </div>

          <div
            style={{
              display: "flex",
              width: "100%",
              gap: "10px",
              flexDirection: "column",
            }}
          >
            <InputComponentTextArea
              title={"Doctors Notes"}
              value={notes}
              onChange={handleNotesChange}
              placeholder={"Doctors Notes"}
            />
            <InputComponentIcon
              isTitle={true}
              title={"File Number"}
              icon={<PiHash />}
              type={"number"}
              value={fileNumber}
              onChange={handleFileNumberChange}
            />
            <FileUploadComponent title={"Medical Documents"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientInfoPage;
