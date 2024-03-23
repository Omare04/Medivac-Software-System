import React, { useState, useEffect } from "react";
import { MultiSelectComponent } from "../../Components/InputComponents/InputComponents";
import { Button } from "@chakra-ui/react";
import { RenderAddedDrugsEquipmentTable } from "../../Components/TableComponents/CreateMissionTables";
import { dividerColorLight } from "../../Colors";

const drugOptions = [
    { value: "aspirin", label: "Aspirin", category: "Pain Relief", pn: "DRG001", type: "Pharmaceuticals" },
    { value: "ibuprofen", label: "Ibuprofen", category: "Pain Relief", pn: "DRG002", type: "Pharmaceuticals" },
    { value: "paracetamol", label: "Paracetamol", category: "Pain Relief", pn: "DRG003", type: "Pharmaceuticals" },
    { value: "amoxicillin", label: "Amoxicillin", category: "Antibiotics", pn: "DRG004", type: "Pharmaceuticals" },
    { value: "penicillin", label: "Penicillin", category: "Antibiotics", pn: "DRG005", type: "Pharmaceuticals" },
    { value: "ciprofloxacin", label: "Ciprofloxacin", category: "Antibiotics", pn: "DRG006", type: "Pharmaceuticals" },
    { value: "acetaminophen", label: "Acetaminophen", category: "Pain Relief", pn: "DRG007", type: "Pharmaceuticals" },
    { value: "prednisone", label: "Prednisone", category: "Steroids", pn: "DRG008", type: "Pharmaceuticals" },
    { value: "omeprazole", label: "Omeprazole", category: "Gastrointestinal", pn: "DRG009", type: "Pharmaceuticals" },
    { value: "metformin", label: "Metformin", category: "Diabetes", pn: "DRG010", type: "Pharmaceuticals" },
    { value: "lisinopril", label: "Lisinopril", category: "Cardiovascular", pn: "DRG011", type: "Pharmaceuticals" },
    { value: "simvastatin", label: "Simvastatin", category: "Cholesterol", pn: "DRG012", type: "Pharmaceuticals" },
    { value: "atorvastatin", label: "Atorvastatin", category: "Cholesterol", pn: "DRG013", type: "Pharmaceuticals" },
    { value: "levothyroxine", label: "Levothyroxine", category: "Thyroid", pn: "DRG014", type: "Pharmaceuticals" },
    { value: "losartan", label: "Losartan", category: "Hypertension", pn: "DRG015", type: "Pharmaceuticals" },
  ];
  
  const options = [
    { value: "stethoscope", label: "Stethoscope", category: "Diagnostic Equipment", pn: "EQP001", type: "Medical Equipment" },
    { value: "thermometer", label: "Thermometer", category: "Diagnostic Equipment", pn: "EQP002", type: "Medical Equipment" },
    { value: "blood_pressure_monitor", label: "Blood Pressure Monitor", category: "Diagnostic Equipment", pn: "EQP003", type: "Medical Equipment" },
    { value: "glucometer", label: "Glucometer", category: "Diagnostic Equipment", pn: "EQP004", type: "Medical Equipment" },
    { value: "pulse_oximeter", label: "Pulse Oximeter", category: "Diagnostic Equipment", pn: "EQP005", type: "Medical Equipment" },
    { value: "wheelchair", label: "Wheelchair", category: "Mobility Aid", pn: "EQP006", type: "Medical Equipment" },
    { value: "crutches", label: "Crutches", category: "Mobility Aid", pn: "EQP007", type: "Medical Equipment" },
    { value: "walker", label: "Walker", category: "Mobility Aid", pn: "EQP008", type: "Medical Equipment" },
    { value: "hospital_bed", label: "Hospital Bed", category: "Medical Furniture", pn: "EQP009", type: "Medical Equipment" },
    { value: "surgical_mask", label: "Surgical Mask", category: "Protective Equipment", pn: "EQP010", type: "Medical Equipment" },
    { value: "syringe", label: "Syringe", category: "Medical Supplies", pn: "EQP011", type: "Medical Equipment" },
    { value: "scalpel", label: "Scalpel", category: "Surgical Instrument", pn: "EQP012", type: "Medical Equipment" },
    { value: "gloves", label: "Gloves", category: "Protective Equipment", pn: "EQP013", type: "Medical Equipment" },
    { value: "defibrillator", label: "Defibrillator", category: "Life-Saving Equipment", pn: "EQP014", type: "Medical Equipment" },
    { value: "ambulance", label: "Ambulance", category: "Emergency Transport", pn: "EQP015", type: "Medical Equipment" },
  ];
  

function DrugsEquipmentPage() {
  const [selectedDrugs, setSelectedDrugs] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    const newItems = [...selectedDrugs, ...selectedEquipment];
    setSelectedDrugs([]);
    setSelectedEquipment([]);
    setItems((prevItems) => [...prevItems, ...newItems]);
  };

  return (
    <>
      <div
        style={{
          fontSize: "25px",
          borderBottom: `1px solid ${dividerColorLight}`,
          width: "100%",
          paddingBottom: "5px",
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        Medical Equipment And Pharmaceuticals
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          //   flexDirection: "column",
          width: "100%",
          height: "80%",

          // overflow: "auto", //
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            height: "100%",
            gap: "25px",
            width: "40%",
            marginRight: "20px",
            // overflow: "auto", //
          }}
        >
          <MultiSelectComponent
            selectOptions={drugOptions}
            placeHolder={"Drugs"}
            title={"Select Drugs"}
            selectedOptions={selectedDrugs}
            setSelectedOptions={setSelectedDrugs} // Pass setSelectedDrugs here
          />
          <MultiSelectComponent
            selectOptions={options}
            placeHolder={"Medical Equipment"}
            title={"Select Medical Equipment"}
            selectedOptions={selectedEquipment}
            setSelectedOptions={setSelectedEquipment} // Pass setSelectedEquipment here
          />
          <Button onClick={handleAdd} mt={3}>
            Add
          </Button>
        </div>
        <div
          style={{
            overflow: "auto",
            paddingBottom: "10px",
            width: "100%",
            background: dividerColorLight,
            borderRadius: "5px",
          }}
        >
          <RenderAddedDrugsEquipmentTable items={items} setItems={setItems} />
        </div>
      </div>
    </>
  );
}

export default DrugsEquipmentPage;
