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

export const RenderAddedDrugsEquipmentTable = ({
  items,
  setItems,
  editable,
}) => {
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
      <TableContainer w={"100%"}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Type</Th>
              <Th>Item</Th>
              <Th>Category</Th>
              <Th>Pn</Th>
              {editable ? <Th isNumeric>Quantity</Th> : null}
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
                {editable ? (
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
                ) : null}
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
      <TableContainer borderRadius={"5px"} height={"100%"} overflowY={"auto"}>
        <h2
          style={{
            fontSize: "20px",

            fontWeight: "500",
            marginBottom: "10px",
            paddingBottom: "10px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            // background: dividerColorLight,
            padding: "10px",
          }}
        >
          Companions
        </h2>
        <Table
          variant="simple"
          background={dividerColorLight}
          overflow={"auto"}
        >
          <Thead>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Nationality</Th>
              <Th>Document Number</Th>
              <Th>Visa Number</Th>
              <Th>Date Of Birth</Th>
              <Th>Date Of Emergency Contact Name</Th>
              <Th>Date Of Emergency Contact Number</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item, index) => (
              <Tr key={index}>
                <Td>{item.fname}</Td>
                <Td>{item.lname}</Td>
                <Td>{item.nationality}</Td>
                <Td>{item.documentNumber}</Td>
                <Td>{item.visaNumber}</Td>
                <Td>{item.dateOfBirth}</Td>
                <Td>{item.emergencyContactName}</Td>
                <Td>{item.emergencyContactNumber}</Td>
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
