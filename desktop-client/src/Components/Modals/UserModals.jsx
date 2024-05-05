import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Card,
  Stack,
  StackDivider,
  IconButton,
  SkeletonCircle,
  Avatar,
  CardBody,
} from "@chakra-ui/react";
import { dividerColorLight } from "../../Colors";
import { IoDocumentSharp, IoDownloadOutline } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";

export function ViewUserInfoModal({ isOpen, onClose, user }) {
  useEffect(() => {
    // Ensure you have access to the value object
    user.documents.forEach((value) => {
      const year = value.dateCreated.getFullYear(); const month = (value.dateCreated.getMonth() + 1)
        .toString()
        .padStart(2, "0");
      const date = value.dateCreated.getDate();
      console.log(`${year}/${month}/${date}`);
    });
  }, [user]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Box display={"flex"} gap={2} alignItems={"center"}>
            <Avatar size={"sm"} name={user.name} src={user.pfpURL} />
            {user.name}
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack divider={<StackDivider />} spacing="2" fontSize={14}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text>ID:</Text>
              <Text>{user.id}</Text>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text>Name:</Text>
              <Text>{user.name}</Text>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text>Email:</Text>
              <Text>{user.email}</Text>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text>Phone Number:</Text>
              <Text>{user.phoneNumber}</Text>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text>Position:</Text>
              <Text>{user.position}</Text>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text>Nationality:</Text>
              <Text>{user.nationality}</Text>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text>Document Number:</Text>
              <Text>
                {user.documentNumber == undefined ? "N/A" : user.documentNumber}
              </Text>
            </Box>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <AccordionItem
            w={"100%"}
            allowMultiple
            border={"none"}
            borderRadius={5}
          >
            <AccordionButton borderRadius={5} p={3} mb={1}>
              <Box as="span" flex={"1"} textAlign="left">
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <IoDocumentSharp size={18} />
                  Documents
                </Box>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} p={"1px"}>
              <Box display={"flex"} flexDirection={"column"} gap={2}>
                {user.documents.map((value, i) => (
                  <DocumentDownLoadComponent value={value} />
                ))}
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

function DocumentDownLoadComponent({ value }) {
  return (
    <>
      <Card >
        <CardBody p={2}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box display={"flex"} flexDirection={"column"}>
              <Text fontSize={14}>{value.title}</Text>
              <Text fontSize={12} fontWeight={550}>
                Created On: {value.dateCreated.getFullYear()}/
                {(value.dateCreated.getMonth() + 1).toString().padStart(2, "0")}
                /{value.dateCreated.getDate()}
              </Text>
            </Box>
            <IconButton
              colorScheme="gray"
              size={"sm"}
              aria-label="download"
              icon={<FaDownload />}
            />
          </Box>
        </CardBody>
      </Card>
    </>
  );
}
export function ViewAccountInfoModal() {
  return <></>;
}
