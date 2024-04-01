import { IoIosAirplane, IoMdMedical } from "react-icons/io";
import { buttonBlue } from "../../Colors";
import { GiCaptainHatProfile } from "react-icons/gi";

export const FakeFlight = [
  {
    flightNo: "AOM123",
    aircraft: "CN-TKC",
    blockTime: "5",
    stopOverTime: "6:50",
    numberOfStops: "6",
    medivacDetails: {
      method: "Bed-To-Bed",
      type: "Neurological",
      urgency: "Moderate",
    },
    location: {
      airportOfDeparture: "CMN",
      airportOfArrival: "CDG",
      cityOfArrival: "Paris",
      cityOfDeparture: "Paris",
    },
    files: {
      GeneralDecleration: {
        title: "General Decleration",
        type: "pdf",
        size: "39mb",
      },
      PAXManifestVIP: {
        title: "PAX Manifest VIP",
        type: "pdf",
        size: "30mb",
      },
      TripSheet: {
        title: "Trip Sheet",
        type: "pdf",
        size: "20mb",
      },
      AirportBrief: {
        title: "Airport Brief",
        type: "pdf",
        size: "24mb",
      },
      WeatherManifest: {
        title: "Weather Manifest",
        type: "pdf",
        size: "29mb",
      },
      DisinfectionChecklist: {
        title: "Disinfection Checklist",
        type: "pdf",
        size: "23mb",
      },
    },
  },
];

export const AddedCrew = [
  {
    firstName: "Jane",
    lastName: "Smith",
    position: "First Office",
    dob: "1985-09-20",
    sex: "Female",
    nationality: "British",
    documentNumber: "DEF654321",
    visaNumber: "", // No visa number
    profilePicture: "https://example.com/profile_picture_2.jpg",
    icon: <IoIosAirplane size={23} color={buttonBlue} />,
  },
  {
    firstName: "Sidi",
    lastName: "Bouazza",
    position: "Captain",
    dob: "1985-09-20",
    sex: "Female",
    nationality: "British",
    documentNumber: "DEF654321",
    visaNumber: "", // No visa number
    profilePicture: "https://example.com/profile_picture_2.jpg",
    icon: <GiCaptainHatProfile size={23} color={"gold"} />,
  },
];

export const DrugOptions = [
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
];

export const Patient = {
  personalInformation: {
    name: "John Smith",
    nationality: "American",
    documentNumber: "123456789",
    visaNumber: "ABC123 (if applicable)",
    dateOfBirth: "1980-05-15",
    fileNumber: "HOSP20240329001",
  },
  patientStatus: {
    atRiskOfInfection: "yes",
    doctorNote:
      "Patient is at risk of infection due to weakened immune system. Refer to doctor's note for details. yes yes yes ",
  },
  admissionDetails: {
    dateOfAdmission: "2024-03-29",
    durationOfHospitalization: "7 days",
    reasonForHospitalization: "Severe pneumonia",
    reasonForMedicalEvacuation:
      "Need for specialized treatment unavailable locally",
  },
  files: {
    MedicalInsurance: {
      title: "Medical Insurance",
      type: "pdf",
      size: "89mb",
    },
    MedicalEvaluation: {
      title: "Medical Evaluation",
      type: "pdf",
      size: "202mb",
    },
  },
};

export const Companions = [
  {
    name: {
      first: "Emily",
      last: "Johnson",
    },
    nationality: "British",
    documentNumber: "987654321",
    visaNumber: "XYZ456",
    phoneNumber: "+1234567890",
  },
  {
    name: {
      first: "Daniel",
      last: "Smith",
    },
    nationality: "American",
    documentNumber: "654321987",
    visaNumber: "ABC789",
    phoneNumber: "+1987654321",
  },
];

export const ArrivalInfo = {
  physicianContactOnArrival: {
    first: "John",
    last: "Doe",
    phoneNumber: "+1234567890",
    isContactable: "true",
  },
  physicianContactOnDeparture: {
    first: "Jason",
    last: "Nash",
    phoneNumber: "+9081230920",
    clinic: "Rabat Health Clinic",
    Speciality: "Cardiology",
  },
  arrivalAmbulanceContact: {
    firstname: "Bouzaa",
    lastname: "Smith",
    number: "+98765453210",
    hourOfArrival: "11:00 AM",
    typeOfAmbulance: "Advanced Life Support",
  },
  departureAmbulanceContact: {
    firstname: "Jane",
    lastname: "Smith",
    number: "+9876543210",
    hourOfArrival: "10:00 AM",
    typeOfAmbulance: "Advanced Life Support",
  },
  hostHospitalDestination: {
    name: "City Hospital",
    contactNumber: "+1234567890",
    department: "Emergency Department",
    hourOfArrival: "10:00 AM",
    typeOfAmbulance: "Advanced Life Support",
  },
  files: {
    HospitalAgreement: {
      title: "Hospital Agreement",
      type: "pdf",
      size: "59mb",
    },
    HospitalAgreement2: {
      title: "Hospital Agreement2",
      type: "pdf",
      size: "80mb",
    },
  },
};

export const Crew = {
  doctor: {
    name: "Jane Smith",
    position: "Doctor",
    dateOfBirth: "1985-09-20",
    sex: "Female",
    nationality: "British",
    documentNumber: "DEF654321",
    visaNumber: "N/A",
  },
  nurse: {
    name: "John Doe",
    position: "Nurse",
    dateOfBirth: "1990-05-15",
    sex: "Male",
    nationality: "American",
    documentNumber: "ABC123456",
    visaNumber: "N/A",
  },
  fo: {
    name: "Emily Johnson",
    position: "First Officer",
    dateOfBirth: "1988-12-10",
    sex: "Female",
    nationality: "Canadian",
    documentNumber: "GHI789012",
    visaNumber: "N/A",
  },
  captain: {
    name: "Michael Williams",
    position: "Captain",
    dateOfBirth: "1975-03-25",
    sex: "Male",
    nationality: "Australian",
    documentNumber: "JKL567890",
    visaNumber: "N/A",
  },
};

export const RandomUsers = [
  {
    name: "John Doe",
    dateOfBirth: "1990-05-15",
    email: "john@example.com",
    position: "Doctor",
    profilePicUrl: "/tarik_elmasaoudi.png",
  },
  {
    name: "Jane Smith",
    dateOfBirth: "1985-10-25",
    email: "jane@example.com",
    position: "First Officer",
    profilePicUrl: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Alex Johnson",
    dateOfBirth: "1995-03-08",
    email: "alex@example.com",
    position: "Nurse",
    profilePicUrl: "https://bit.ly/dan-abramov",
  },
  {
    name: "Emily White",
    dateOfBirth: "1988-12-20",
    email: "emily@example.com",
    position: "Captain",
    profilePicUrl: "https://bit.ly/ryan-florence",
  },


];
