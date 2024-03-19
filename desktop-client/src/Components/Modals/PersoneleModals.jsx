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
import {
  InputUnitNumber,
  InputUnit,
  InputUnitSelect,
} from "../../Pages/Orders/MedicalEquipmentOrders";
export function CreatePersoneleRolesModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [roleName, setRoleName] = useState("");
  const [access, setAccess] = useState("");

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
                onChange={(e) => setItemName(e.target.value)}
              />
              <InputUnitSelect
                title={"Access Rights"}
                value={access}
                onChange={(e) => setAccess(e.target.value)}
                items={["View Only", "Admin", "Editor"]}
              />
              {"Add a dynamic Select to assign users to that role"}
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
