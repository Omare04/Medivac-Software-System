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
        style={{ padding: "10px", paddingBottom: "40px" }}
      >
        <div
          id={"Patient-Info-Page-Wrapper"}
          style={{
            display: "flex",
            // flexWrap: "wrap",
            width: "100%",
            // justifyContent: "center",
            gap: "15px",
            paddingBottom: "30px",
          }}
        >
          <PatientInfoComponent
            companion={false}
            ComponentTitle={"Patient Info"}
            onAddCompanion={handleAddCompanion}
          />
          <PatientInfoComponent
            companion={true}
            ComponentTitle={"Companion Info"}
            onAddCompanion={handleAddCompanion}
          />
        </div>
        <DoctorsNotesComponents tableItems={companions} />
      </div>
    </>
  );
}

function PatientInfoComponent({ companion, ComponentTitle, onAddCompanion }) {
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [visaNumber, setVisaNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [fileNumber, setFileNumber] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
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
      name,
      nationality,
      documentNumber,
      visaNumber,
      dateOfBirth,
      fileNumber,
    };

    onAddCompanion(newCompanion);

    setName("");
    setNationality("");
    setDocumentNumber("");
    setVisaNumber("");
    setDateOfBirth("");
    setFileNumber("");
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
          }}
        >
          {ComponentTitle}
        </h2>
        <InputUnit title={"Name"} value={name} onChange={handleNameChange} />
        <InputUnitSelect
          title={"Nationality"}
          value={nationality}
          onChange={handleNationalityChange}
          items={["Canada", "Morocco"]}
        />
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
        <InputUnit
          title={"Date Of Birth"}
          value={dateOfBirth}
          type={"date"}
          onChange={handleDateOfBirthChange}
        />
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
        ) : (
          <InputUnit
            title={"File Number"}
            value={fileNumber}
            onChange={handleFileNumberChange}
          />
        )}
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

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "20px",
          padding: "20px",
          borderRadius: "5px",
          background: dividerColorLight,
          flexDirection: "column",
        }}
      >
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
              title={"Patients Status"}
              selectedOptions={selectedStatus}
              setSelectedOptions={setSelectedStatus}
            />
            <InputUnit
              title={"Date Of Admission"}
              value={dateOfAdmission}
              type={"date"}
              onChange={(event) => setDateOfAdmission(event.target.value)}
            />
            <InputUnit
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
            <InputComponentTextArea
              title={"Doctors Notes"}
              value={notes}
              onChange={handleNotesChange}
              placeholder={"Doctors Notes"}
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
            <div style={{ paddingBottom: "10px" }}>
              <CompanionTable items={tableItems} />
            </div>
            <FileUploadComponent title={"Medical Documents"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientInfoPage;
