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
  IconButton,
} from "@chakra-ui/react";
import { FaUserPlus } from "react-icons/fa";
import StyledLinkButton from "../../styles/ButtonStyles/TransparentLinks";
import {
  InputUnitNumber,
  InputUnit,
  InputUnitSelect,
} from "../../Pages/Orders/MedicalEquipmentOrders";
import Select from "react-select";
import { FaPlus } from "react-icons/fa";
import makeAnimated from "react-select/animated";
import { dividerColor, dividerColorLight } from "../../Colors";

export function AddToStockModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [itemName, setItemName] = useState("");
  const [pn, setPn] = useState("");
  const [access, setAccess] = useState("");
  const [productType, setProductType] = useState("");
  const [qty, setQty] = useState(0);

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
          <ModalHeader fontWeight={420}>Add Item</ModalHeader>
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
                title={"Item Name"}
                type={"input"}
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
              <InputUnit
                title={"PN"}
                type={"input"}
                value={pn}
                onChange={(e) => setPn(e.target.value)}
              />
              <InputUnitSelect
                title={"Product Type"}
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                items={["Cardiological", "Neurological", "Respiratory"]}
              />
              <InputUnitNumber
                title={"Quantity"}
                value={qty}
                onChange={(e) => setQty(e)}
              />
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

      <div style={{ display: "flex" }}>
        <Button
          aria-label="Add item"
          leftIcon={<FaPlus />}
          colorScheme="blue"
          ml={2}
          onClick={() => {
            onOpen();
          }}
        >
          Add Item
        </Button>
      </div>
    </>
  );
}
