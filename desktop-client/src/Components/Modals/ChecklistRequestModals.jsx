import React, { useState, useEffect } from "react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  ModalFooter,
  Button,
  Table,
  Thead,
  Tbody,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Input,
} from "@chakra-ui/react";
import { InputUnit } from "../../Pages/Orders/MedicalEquipmentOrders";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  InputComponentTextArea,
  ReactSelectComponent,
} from "../InputComponents/InputComponents";
import FileUploadComponent from "../../helper/FileUpload";
import { CheckListProceduresTable } from "../../Pages/Orders/MedicalEquipmentOrders";
import { FaPlus } from "react-icons/fa";

export function AddChecklistItemModal({ isOpen, onClose }) {
  const [checklistType, setChecklistType] = useState("");
  const [checklistTitle, setChecklistTitle] = useState("");

  const checklistTypeItems = [
    { value: "Inspection", label: "Inspection" },
    { value: "Checkup", label: "Checkup" },
    { value: "Sanitization", label: "Sanitization" },
  ];
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" size={"md"} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create A Checklist</DrawerHeader>

          <DrawerBody
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            pt={5}
            gap={5}
            h={"100%"}
          >
            <InputUnit
              title={"CheckList Title"}
              type={"input"}
              value={checklistTitle}
              onChange={(e) => setChecklistTitle(e.target.value)}
            />
            <ReactSelectComponent
              selectOptions={checklistTypeItems}
              placeholder={"CheckList Type"}
              selectedOptions={checklistType}
              setSelectedOptions={setChecklistType}
              isTitle={false}
            />
            <ChecklistProcedureComponent />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Create</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function ChecklistProcedureComponent() {
  const [itemName, setItemName] = useState("");
  const [Items, setItems] = useState([]);
  const [error, setError] = useState("");

  const handleAddItem = () => {
    if (!itemName) {
      setError("Please enter a procedure.");
      return;
    }

    const numberOfProcedures = Items.length;
    const newItem = { itemName, numberOfProcedures };
    setItems([...Items, newItem]);

    setItemName("");

    setError("");
  };

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={3} mb={5}>
        <InputUnit
          title={"Procedure"}
          type={"input"}
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <Button
          colorScheme="blue"
          leftIcon={<FaPlus size={15} />}
          // mt={6}
          w={"100%"}
          onClick={handleAddItem}
        >
          Add Procedure
        </Button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </Box>

      <Box overflow={"auto"}>
        <CheckListProceduresTable items={Items} />{" "}
      </Box>
    </>
  );
}

export function AddRequestItemModal({ isOpen, onClose }) {
  const [requestType, setRequestType] = useState("");

  const requestTypes = [
    { value: "Pharmaceutical Request", label: "Pharmaceutical Request" },
    { value: "Equipment Request", label: "Equipment Request" },
  ];
  return (
    <>
      <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay onClick={onClose} w={"100%"} />
        <ModalContent borderRadius={2}>
          <ModalHeader fontWeight={420} w={"100%"}>
            Create A Request
          </ModalHeader>
          <ModalCloseButton borderRadius={2} />
          <ModalBody pb={6} w={"100%"}>
            <Box display={"flex"} flexDirection={"column"} gap={5}>
              <ReactSelectComponent
                selectOptions={requestTypes}
                placeholder={"Request Type"}
                selectedOptions={requestType}
                setSelectedOptions={setRequestType}
                isTitle={false}
              />
              <FileUploadComponent title={"Request Document"} />
            </Box>
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
    </>
  );
}

export function ViewRequestModal() {
  return;
}
