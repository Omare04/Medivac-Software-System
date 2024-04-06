import React, { useState, useEffect } from "react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
} from "@chakra-ui/react";
import { FaUserPlus } from "react-icons/fa";
import StyledLinkButton from "../../styles/ButtonStyles/TransparentLinks";
import {
  InputUnitNumber,
  InputUnit,
  InputUnitSelect,
} from "../../Pages/Orders/MedicalEquipmentOrders";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { MdEvent } from "react-icons/md";
import {
  ReactSelectComponent,
  InputComponentTextArea,
} from "../InputComponents/InputComponents";

export function CreatePersoneleRolesModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [roleName, setRoleName] = useState("");
  const [access, setAccess] = useState("");

  //Dynamically retrieve user
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "z", label: "Vanilla" },
    { value: "x", label: "Vanilla" },
  ];

  const animatedComponents = makeAnimated();

  return (
    <>
      <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay onClick={onClose} />
        <ModalContent borderRadius={2}>
          <ModalHeader fontWeight={420}>Create Role</ModalHeader>
          <ModalCloseButton borderRadius={2} />
          <ModalBody pb={6}>
            <div
              style={{
                display: "flex",
                gap: "25px",
                width: "100%",
                marginBottom: "10px",
                flexDirection: "column",
              }}
            >
              <InputUnit
                title={"Role Name"}
                type={"input"}
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
              />
              <InputUnitSelect
                title={"Access Rights"}
                value={access}
                onChange={(e) => setAccess(e.target.value)}
                items={["View Only", "Admin", "Editor"]}
              />
              <div>
                <Text>Add Users</Text>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={options}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: "#e2e8f0",
                    }),
                  }}
                />
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              borderRadius={2}
              onClick={onClose}
              fontWeight={420}
            >
              Save
            </Button>
            <Button onClick={onClose} borderRadius={2} fontWeight={420}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <StyledLinkButton
        onClick={() => {
          onOpen();
        }}
      >
        <FaUserPlus style={{ paddingRight: "10px" }} size={30} />
        Create Role
      </StyledLinkButton>
    </>
  );
}

export function CreatePersoneleEventModal({ isOpen, onClose }) {

  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDiscription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  
  const handleDescriptionChange = (event) => {
    setEventDiscription(event.target.value);
  };

  //Dynamically retrieve user
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "z", label: "Vanilla" },
    { value: "x", label: "Vanilla" },
  ];

  const animatedComponents = makeAnimated();

  return (
    <>
      <Modal
        closeOnOverlayClick={true}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay onClick={onClose} w={"100%"} />
        <ModalContent borderRadius={2}>
          <ModalHeader fontWeight={420} w={"100%"}>
            Create Event
          </ModalHeader>
          <ModalCloseButton borderRadius={2} />
          <ModalBody pb={6} w={"100%"}>
            <div
              style={{
                display: "flex",
                width: "100%",
                marginBottom: "10px",
                flexDirection: "column",
              }}
            >
              <div style={{ paddingBottom: "15px" }}>
                <InputUnit
                  title={"Event Name"}
                  type={"input"}
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                />
              </div>
              <div style={{ paddingBottom: "15px" }}>
                <InputUnit
                  title={"Start Date"}
                  type={"date"}
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div style={{ paddingBottom: "15px" }}>
                <InputUnit
                  title={"End Date"}
                  type={"date"}
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div style={{ paddingBottom: "10px" }}>
                <InputComponentTextArea
                  title={"Event Description"}
                  value={eventDescription}
                  onChange={handleDescriptionChange}
                  placeholder={"Event Description ..."}
                />
              </div>
              <div>
                <Text>Add Users</Text>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={options}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: "#e2e8f0",
                    }),
                  }}
                />
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              borderRadius={2}
              onClick={onClose}
              fontWeight={420}
            >
              Save
            </Button>
            <Button onClick={onClose} borderRadius={2} fontWeight={420}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* <StyledLinkButton
        onClick={() => {
          onOpen();
        }}
      >
        <MdEvent style={{ paddingRight: "10px" }} size={30} />
        Create Event{" "}
      </StyledLinkButton> */}
    </>
  );
}
