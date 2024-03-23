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

export function CreateMissionTables() {
  return <div>CreateMissionTables</div>;
}

export const RenderAddedDrugsEquipmentTable = ({ items, setItems }) => {
  useEffect(() => {
    console.log(items);
  }, [items]);

  const handleSubmitOrder = () => {
    console.log("Order submitted");
  };

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
