import React, { useState, useEffect } from "react";
import { MultiSelectComponent } from "../../Components/InputComponents/InputComponents";
import { Button } from "@chakra-ui/react";
import { RenderAddedDrugsEquipmentTable } from "../../Components/TableComponents/CreateMissionTables";
import { dividerColorLight } from "../../Colors";
import { ReactSelectComponent } from "../../Components/InputComponents/InputComponents";

const drugOptions = [
  {
    value: "aspirin",
    label: "Aspirin (DRG001)",
    category: "Pain Relief",
    pn: "DRG001",
    type: "Pharmaceuticals",
  },
  {
    value: "ibuprofen",
    label: "Ibuprofen (DRG002)",
    category: "Pain Relief",
    pn: "DRG002",
    type: "Pharmaceuticals",
  },
  {
    value: "paracetamol",
    label: "Paracetamol (DRG003)",
    category: "Pain Relief",
    pn: "DRG003",
    type: "Pharmaceuticals",
  },
  {
    value: "amoxicillin",
    label: "Amoxicillin (DRG004)",
    category: "Antibiotics",
    pn: "DRG004",
    type: "Pharmaceuticals",
  },
  {
    value: "penicillin",
    label: "Penicillin (DRG005)",
    category: "Antibiotics",
    pn: "DRG005",
    type: "Pharmaceuticals",
  },
  {
    value: "ciprofloxacin",
    label: "Ciprofloxacin (DRG006)",
    category: "Antibiotics",
    pn: "DRG006",
    type: "Pharmaceuticals",
  },
  {
    value: "acetaminophen",
    label: "Acetaminophen (DRG007)",
    category: "Pain Relief",
    pn: "DRG007",
    type: "Pharmaceuticals",
  },
  {
    value: "prednisone",
    label: "Prednisone (DRG008)",
    category: "Steroids",
    pn: "DRG008",
    type: "Pharmaceuticals",
  },
  {
    value: "omeprazole",
    label: "Omeprazole (DRG009)",
    category: "Gastrointestinal",
    pn: "DRG009",
    type: "Pharmaceuticals",
  },
  {
    value: "metformin",
    label: "Metformin (DRG010)",
    category: "Diabetes",
    pn: "DRG010",
    type: "Pharmaceuticals",
  },
  {
    value: "lisinopril",
    label: "Lisinopril (DRG011)",
    category: "Cardiovascular",
    pn: "DRG011",
    type: "Pharmaceuticals",
  },
  {
    value: "simvastatin",
    label: "Simvastatin (DRG012)",
    category: "Cholesterol",
    pn: "DRG012",
    type: "Pharmaceuticals",
  },
  {
    value: "atorvastatin",
    label: "Atorvastatin (DRG013)",
    category: "Cholesterol",
    pn: "DRG013",
    type: "Pharmaceuticals",
  },
  {
    value: "levothyroxine",
    label: "Levothyroxine (DRG014)",
    category: "Thyroid",
    pn: "DRG014",
    type: "Pharmaceuticals",
  },
  {
    value: "losartan",
    label: "Losartan (DRG015)",
    category: "Hypertension",
    pn: "DRG015",
    type: "Pharmaceuticals",
  },
];

const options = [
  {
    value: "stethoscope",
    label: `Stethoscope (EQP001)`,
    category: "Diagnostic Equipment",
    pn: "EQP001",
    type: "Medical Equipment",
  },
  {
    value: "thermometer",
    label: "Thermometer (EQP002)",
    category: "Diagnostic Equipment",
    pn: "EQP002",
    type: "Medical Equipment",
  },
  {
    value: "blood_pressure_monitor",
    label: "Blood Pressure Monitor (EQP003)",
    category: "Diagnostic Equipment",
    pn: "EQP003",
    type: "Medical Equipment",
  },
  {
    value: "glucometer",
    label: "Glucometer (EQP004)",
    category: "Diagnostic Equipment",
    pn: "EQP004",
    type: "Medical Equipment",
  },
  {
    value: "pulse_oximeter",
    label: "Pulse Oximeter (EQP005)",
    category: "Diagnostic Equipment",
    pn: "EQP005",
    type: "Medical Equipment",
  },
  {
    value: "wheelchair",
    label: "Wheelchair (EQP006)",
    category: "Mobility Aid",
    pn: "EQP006",
    type: "Medical Equipment",
  },
  {
    value: "crutches",
    label: "Crutches (EQP007)",
    category: "Mobility Aid",
    pn: "EQP007",
    type: "Medical Equipment",
  },
  {
    value: "walker",
    label: "Walker (EQP008)",
    category: "Mobility Aid",
    pn: "EQP008",
    type: "Medical Equipment",
  },
  {
    value: "hospital_bed",
    label: "Hospital Bed (EQP009)",
    category: "Medical Furniture",
    pn: "EQP009",
    type: "Medical Equipment",
  },
  {
    value: "surgical_mask",
    label: "Surgical Mask (EQP010)",
    category: "Protective Equipment",
    pn: "EQP010",
    type: "Medical Equipment",
  },
  {
    value: "syringe",
    label: "Syringe (EQP011)",
    category: "Medical Supplies",
    pn: "EQP011",
    type: "Medical Equipment",
  },
  {
    value: "scalpel",
    label: "Scalpel (EQP012)",
    category: "Surgical Instrument",
    pn: "EQP012",
    type: "Medical Equipment",
  },
  {
    value: "gloves",
    label: "Gloves (EQP013)",
    category: "Protective Equipment",
    pn: "EQP013",
    type: "Medical Equipment",
  },
  {
    value: "defibrillator",
    label: "Defibrillator (EQP014)",
    category: "Life-Saving Equipment",
    pn: "EQP014",
    type: "Medical Equipment",
  },
  {
    value: "ambulance",
    label: "Ambulance (EQP015)",
    category: "Emergency Transport",
    pn: "EQP015",
    type: "Medical Equipment",
  },
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
          marginBottom: "15px",
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
          <ReactSelectComponent
            selectOptions={drugOptions}
            placeHolder={"Drugs"}
            title={"Select Drugs"}
            selectedOptions={selectedDrugs}
            isMulti={true}
            setSelectedOptions={setSelectedDrugs} // Pass setSelectedDrugs here
          />
          <ReactSelectComponent
            selectOptions={options}
            isMulti={true}
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
          <RenderAddedDrugsEquipmentTable
            items={items}
            setItems={setItems}
            editable={true}
          />
        </div>
      </div>
    </>
  );
}

export default DrugsEquipmentPage;
