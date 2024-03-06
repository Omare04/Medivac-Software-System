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
} from "@chakra-ui/react";
import { FaUserPlus } from "react-icons/fa";
import StyledLinkButton from "../../styles/ButtonStyles/TransparentLinks";

export function CreatePersoneleRolesModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay onClick={onClose} />
        <ModalContent borderRadius={2}>
          <ModalHeader fontWeight={420}>Create Role</ModalHeader>
          <ModalCloseButton borderRadius={2} />
          <ModalBody pb={6}>{/* Your modal content */}</ModalBody>

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
