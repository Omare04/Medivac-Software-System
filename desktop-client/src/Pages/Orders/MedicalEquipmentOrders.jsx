import React from "react";
import OrderTable from "../../Components/TableComponents/OrderTable";
import { Button } from "@chakra-ui/react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { IoAddOutline } from "react-icons/io5";

const nodes = [
  {
    id: 0,
    po: "123",
    date: new Date(2020, 1, 15),
    status: "Pending",
    address: "123 ave NE, London, UK, T4K 1Tk",
    country: "UK",
    supplier: "INC INC",
    quantity: 34,
  },
  {
    id: 1,
    po: "456",
    date: new Date(2020, 3, 20),
    status: "Delivered",
    country: "UK",
    supplier: "ABC Corp",
    quantity: 20,
  },
  {
    id: 2,
    po: "456",
    date: new Date(2020, 3, 20),
    status: "Delivered",
    country: "UK",
    supplier: "ABC Corp",
    quantity: 20,
  },
];

function MedicalEquipmentOrders() {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5px",
            borderRadius: "5px",
            width: "100%",
            marginBottom: "10px",
          }}
          id="add_items_wrapper"
        >
          <Button colorScheme="blue" leftIcon={<IoAddOutline size={25} />}>
            Create New Order
          </Button>
        </div>
        <OrderTable nodes={nodes} />
      </div>
    </>
  );
}

export default MedicalEquipmentOrders;
