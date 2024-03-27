import React, { useState } from "react";
import {
  InputUnit,
  InputUnitSelect,
  InputUnitNumber,
} from "../Orders/MedicalEquipmentOrders"; // assuming these components are in a separate file
import {
  Button,
  Stack,
  Heading,
  CardHeader,
  Card,
  CardBody,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Text,
  WrapItem,
  List,
  ListItem,
  Box,
  Icon,
} from "@chakra-ui/react"; // assuming you're using Chakra UI components
import { OrderItemsTable } from "../Orders/MedicalEquipmentOrders";
import { FaTrash, FaTrashAlt } from "react-icons/fa";
import { buttonBlue, dividerColorLight } from "../../Colors";
import { FaPlus } from "react-icons/fa";
import { IoMdMedical, IoIosAirplane } from "react-icons/io";

const flightCrew = [
  {
    firstName: "Jane",
    lastName: "Smith",
    position: "Captain",
    dob: "1985-09-20",
    sex: "Female",
    nationality: "British",
    documentNumber: "DEF654321",
    visaNumber: "", // No visa number
    profilePicture: "https://example.com/profile_picture_2.jpg",
    icon: <IoIosAirplane size={23} color={buttonBlue} />,
  },
  {
    firstName: "Si",
    lastName: "Bouazza",
    position: "First Officer",
    dob: "1985-09-20",
    sex: "Female",
    nationality: "British",
    documentNumber: "DEF654321",
    visaNumber: "", // No visa number
    profilePicture: "https://example.com/profile_picture_2.jpg",
    icon: <IoIosAirplane size={23} color={buttonBlue} />,
  },
  {
    firstName: "John",
    lastName: "Beans",
    position: "First Officer",
    dob: "1985-09-20",
    sex: "Female",
    nationality: "British",
    documentNumber: "DEF654321",
    visaNumber: "", // No visa number
    profilePicture: "https://example.com/profile_picture_2.jpg",
    icon: <IoIosAirplane size={23} color={buttonBlue} />,
  },
];

const medicalCrew = [
  {
    firstName: "John",
    lastName: "Doe",
    position: "Nurse",
    dob: "1990-05-15",
    sex: "Male",
    nationality: "American",
    documentNumber: "ABC123456",
    visaNumber: "XYZ789",
    profilePicture: "https://example.com/profile_picture_1.jpg",
    icon: <IoMdMedical color="red" />,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    position: "Doctor",
    dob: "1985-09-20",
    sex: "Female",
    nationality: "British",
    documentNumber: "DEF654321",
    visaNumber: "", // No visa number
    profilePicture: "https://example.com/profile_picture_2.jpg",
    icon: <IoMdMedical color="red" />,
  },
  {
    firstName: "John",
    lastName: "Doe",
    position: "Nurse",
    dob: "1990-05-15",
    sex: "Male",
    nationality: "American",
    documentNumber: "ABC123456",
    visaNumber: "XYZ789",
    profilePicture: "https://example.com/profile_picture_1.jpg",
    icon: <IoMdMedical color="red" />,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    position: "Doctor",
    dob: "1985-09-20",
    sex: "Female",
    nationality: "British",
    documentNumber: "DEF654321",
    visaNumber: "", // No visa number
    profilePicture: "https://example.com/profile_picture_2.jpg",
    icon: <IoMdMedical color="red" />,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    position: "Doctor",
    dob: "1985-09-20",
    sex: "Female",
    nationality: "British",
    documentNumber: "DEF654321",
    visaNumber: "", // No visa number
    profilePicture: "https://example.com/profile_picture_2.jpg",
    icon: <IoMdMedical color="red" />,
  },
];

const addedCrew = [
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
    firstName: "Jane",
    lastName: "Smith",
    position: "Medical Crew",
    dob: "1985-09-20",
    sex: "Female",
    nationality: "British",
    documentNumber: "DEF654321",
    visaNumber: "", // No visa number
    profilePicture: "https://example.com/profile_picture_2.jpg",
    icon: <IoMdMedical color="red" />,
  },
];

function CrewInfoPage() {
  const [crewMembers, setCrewMembers] = useState([]);
  const [addedMembers, setAddedMembers] = useState([]);

  const handleAddToAddedMembers = (member) => {
    setAddedMembers([...addedMembers, member]);
  };

  const handleRemoveFromAddedMembers = (memberIndex) => {
    const updatedAddedMembers = addedMembers.filter(
      (_, index) => index !== memberIndex
    );
    setAddedMembers(updatedAddedMembers);
  };

  return (
    <div style={{ padding: "5px", paddingBottom: "100px" }}>
      <div>
        <div className="card_info_wrapper" style={{}}>
          <h3
            style={{
              fontSize: "18px",
              borderBottom: `1px solid ${dividerColorLight}`,
              marginBottom: "5px",
              paddingTop: "15px",
              fontWeight: "bold",
            }}
          >
            Available Medical Crew
          </h3>
          <div
            style={{
              overflowY: "auto",
              background: dividerColorLight,
              padding: "5px",
              borderRadius: "5px",
            }}
            id="available_medical_crew_wrapper"
          >
            <RenderCrewInfoCard crew={medicalCrew} />
          </div>
        </div>

        <div
          className="card_info_wrapper"
          style={{
            paddingTop: "25px",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              borderBottom: `1px solid ${dividerColorLight}`,
              marginBottom: "5px",
              paddingTop: "15px",
              fontWeight: "bold",
            }}
          >
            Available Flight Crew
          </h3>
          <div
            style={{
              overflowY: "auto",
              background: dividerColorLight,
              padding: "5px",
              borderRadius: "5px",
            }}
            id="available_flight_crew_wrapper"
          >
            <RenderCrewInfoCard crew={flightCrew} />
          </div>
        </div>
      </div>

      <div
        className="card_info_wrapper"
        style={{
          paddingTop: "25px",
        }}
      >
        {" "}
        <h3
          style={{
            fontSize: "18px",
            borderBottom: `1px solid ${dividerColorLight}`,
            marginBottom: "5px",
            paddingTop: "15px",
            fontWeight: "bold",
          }}
        >
          Added Crew
        </h3>
        <div
          style={{
            overflowY: "auto",
            background: dividerColorLight,
            padding: "5px",
            borderRadius: "5px",
          }}
          id="available_flight_crew_wrapper"
        >
          <RenderCrewInfoCard crew={addedCrew} added={true} />
        </div>
      </div>
    </div>
  );
}

export function RenderCrewInfoCard({
  crew,
  added,
  handleAddToAddedMembers,
  summary,
}) {
  return (
    <Box gap={5} display={"flex"} flexWrap={"wrap"}>
      {crew.map((member, index) => (
        <Card key={index} variant={"outline"} maxW={"xs"} maxH={"xs"} p={0}>
          <CardHeader p={3} background={dividerColorLight} mb={3}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                {/* <Avatar
                  name={member.firstName + " " + member.lastName}
                  src={member.profilePicture}
                  mr={3}
                  size="sm"
                /> */}
                {member.icon}
                <Heading size="sm" pl={1}>
                  {member.firstName + " " + member.lastName}
                </Heading>
              </Box>
              {summary ? null : added ? (
                <Icon
                  as={FaTrash}
                  boxSize={4}
                  cursor={"pointer"}
                  onClick={() => handleRemoveFromAddedMembers(member)}
                />
              ) : (
                <Icon
                  as={FaPlus}
                  boxSize={4}
                  cursor={"pointer"}
                  onClick={() => handleAddToAddedMembers(member)}
                />
              )}
            </Box>
          </CardHeader>

          <CardBody pt={0} p={4}>
            <List spacing={1} fontSize={"14px"}>
              <ListItem
                display="flex"
                justifyContent="space-between"
                fontWeight={"bold"}
                fontStyle={"italic"}
              >
                <span>Position:</span>
                <span>{member.position}</span>
              </ListItem>
              <ListItem display="flex" justifyContent="space-between">
                <span>Date of Birth:</span>
                <span>{member.dob}</span>
              </ListItem>
              <ListItem display="flex" justifyContent="space-between">
                <span>Sex:</span>
                <span>{member.sex}</span>
              </ListItem>
              <ListItem display="flex" justifyContent="space-between">
                <span>Nationality:</span>
                <span>{member.nationality}</span>
              </ListItem>
              <ListItem display="flex" justifyContent="space-between">
                <span style={{ paddingRight: "15px" }}>Document Number:</span>
                <span>{member.documentNumber}</span>
              </ListItem>
              <ListItem display="flex" justifyContent="space-between">
                <span>Visa Number:</span>
                <span>{member.visaNumber || "N/A"}</span>
              </ListItem>
            </List>
          </CardBody>
        </Card>
      ))}
    </Box>
  );
}

export default CrewInfoPage;
