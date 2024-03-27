import { IoIosAirplane, IoMdMedical } from "react-icons/io";
import { buttonBlue } from "../../Colors";
import { GiCaptainHatProfile } from "react-icons/gi";

export const FakeFlight = [
  {
    flightNo: "AOM123",
    aircraft: "CN-TKC",
    blockTime: "5",
    stopOverTime: "6:50",
    medivacDetails: {
      method: "Bed-To-Bed",
      type: "Neurological",
      urgency: "Moderate",
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
