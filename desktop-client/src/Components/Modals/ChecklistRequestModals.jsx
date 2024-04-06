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
import { InputUnit } from "../../Pages/Orders/MedicalEquipmentOrders";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { InputComponentTextArea } from "../InputComponents/InputComponents";

export function AddChecklistItemModal({ isOpen, onClose }) {
    return (
        <>
          <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay onClick={onClose} w={"100%"} />
            <ModalContent borderRadius={2}>
              <ModalHeader fontWeight={420} w={"100%"}>
                Create A Checklist
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
                ></div>
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

export function ViewChecklistItemModal() {}


export function AddRequestItemModal({ isOpen, onClose }) {
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
            <div
              style={{
                display: "flex",
                width: "100%",
                marginBottom: "10px",
                flexDirection: "column",
              }}
            ></div>
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
