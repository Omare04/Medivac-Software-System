import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tag,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { dividerColor, dividerColorLight } from "../../Colors";

export function CreateMissionTables() {
  return <div>CreateMissionTables</div>;
}

export const RenderAddedDrugsEquipmentTable = ({ items, setItems }) => {
  const handleIncreaseQuantity = (index) => {
    const updatedItems = [...items];
    updatedItems[index].quantity += 1;
    setItems(updatedItems);
  };

  const handleDecreaseQuantity = (index) => {
    const updatedItems = [...items];
    updatedItems[index].quantity -= 1;
    setItems(updatedItems);
  };

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Type</Th>
              <Th>Item</Th>
              <Th>Category</Th>
              <Th>Pn</Th>
              <Th isNumeric>Quantity</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item, index) => (
              <Tr key={index}>
                <Td>
                  <Tag
                    colorScheme={
                      item.type == "Pharmaceuticals" ? "red" : "blue"
                    }
                  >
                    {item.type}
                  </Tag>
                </Td>
                <Td>{item.label}</Td>
                <Td>{item.category}</Td>
                <Td>{item.pn}</Td>
                <Td isNumeric>
                  <Button
                    size="xs"
                    colorScheme="blue"
                    // ml={2}
                    onClick={() => handleIncreaseQuantity(index)}
                  >
                    +
                  </Button>
                  <span style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                    {/* {item.quantity} */}
                    {"1"}
                  </span>
                  <Button
                    size="xs"
                    colorScheme="blue"
                    // ml={2}
                    onClick={() => handleDecreaseQuantity(index)}
                  >
                    -
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        ></div>
      </TableContainer>
    </>
  );
};

export const CompanionTable = ({ items, removeRow }) => {
  return (
    <>
      <TableContainer
        background={"#f2f2f2"}
        borderRadius={"5px"}
        height={"100%"}
        overflow={"auto"}
      >
        <h2
          style={{
            fontSize: "20px",

            fontWeight: "500",
            marginBottom: "10px",
            paddingBottom: "10px",
            display: "flex",
            alignItems: "center",
            background: dividerColorLight
          }}
        >
          Companions
        </h2>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Nationality</Th>
              <Th>Document Number</Th>
              <Th>Visa Number</Th>
              <Th>Date Of Birth</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item, index) => (
              <Tr key={index}>
                <Td>{item.name}</Td>
                <Td>{item.nationality}</Td>
                <Td>{item.documentNumber}</Td>
                <Td>{item.visaNumber}</Td>
                <Td>{item.dateOfBirth}</Td>
                <Td>
                  <FaTrash />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        {items.length == 0 ? (
          <>
            <div
              style={{
                width: "100%",
                padding: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                color: "grey",
                fontStyle: "italic",
              }}
            >
              No Items Added
            </div>
          </>
        ) : null}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        ></div>
      </TableContainer>
    </>
  );
};
