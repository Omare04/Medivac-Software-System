import React, { useState, useEffect } from "react";
import MedicalEquipmentOrders from "../Orders/MedicalEquipmentOrders";
import PharamceuticalOrders from "../Orders/PharamceuticalOrders";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Box,
  Tag,
  Heading,
  Button,
} from "@chakra-ui/react";
import { FaEllipsisH, FaEllipsisV } from "react-icons/fa";
import { AddRequestItemModal } from "../../Components/Modals/ChecklistRequestModals";

function Requests() {
  const [modalState, setModalState] = useState(false);

  const handleOpenModal = () => {
    setModalState(true);
  };

  const handleCloseModal = () => {
    setModalState(false);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <Heading size={"md"} as={"h3"} pl={4}>
            Stock Requests
          </Heading>
          <Button variant="ghost" colorScheme="blue" onClick={() => handleOpenModal()}>
            Create A Request
          </Button>
        </div>
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
      </div>
      <AddRequestItemModal isOpen={modalState} onClose={handleCloseModal} />
    </>
  );
}

function RequestCard({ item }) {
  return (
    <>
      <Card>
        <CardBody p={"10px"}>
          <Box display="flex" flexDirection={"column"} width="100%">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Heading as="h3" size="sm">
                Medical Equipment Request
              </Heading>
              <FaEllipsisH style={{ margin: "10px" }} />
            </div>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={"10px"}
              pl={"3px"}
              fontSize={"14px"}
            >
              <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <Text>Clinical Manager</Text>
                <Text fontWeight={"bold"}>(02/03/2024)</Text>
              </Box>
              <Tag size={"xs"} colorScheme="green" p={"5px"} fontSize={"11px"}>
                {" "}
                active
              </Tag>
            </Box>
          </Box>
        </CardBody>
      </Card>
    </>
  );
}

export default Requests;
