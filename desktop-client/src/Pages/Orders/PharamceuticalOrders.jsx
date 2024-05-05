import React, { useEffect, useState } from "react";
import OrderTable from "../../Components/TableComponents/OrderTable";
import { Button, Select, Text } from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  Tab,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Input,
  useDisclosure,
  DrawerCloseButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Box,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import {
  InputUnit,
  InputUnitNumber,
  InputUnitSelect,
} from "./MedicalEquipmentOrders";

const nodes = [
  {
    id: 0,
    po: "PO02302",
    date: new Date(2020, 1, 15),
    status: "Pending",
    quantity: 34,
    createdBy: "Clinical Manager",
    orderItems: [
      { itemId: 1, itemName: "Item 1", pn: "12394AM",itemType: "Cardiology", quantity: 10 },
      { itemId: 2, itemName: "Item 2", itemType: "Cardiology", quantity: 24 },
      { itemId: 3, itemName: "Item 2", itemType: "Cardiology", quantity: 24 },
      { itemId: 4, itemName: "Item 2", itemType: "Cardiology", quantity: 24 },
      { itemId: 5, itemName: "Item 2", itemType: "Cardiology", quantity: 24 },
      { itemId: 6, itemName: "Item 2", itemType: "Cardiology", quantity: 24 },
      { itemId: 7, itemName: "Item 2", itemType: "Cardiology", quantity: 24 },
      { itemId: 7, itemName: "Item 2", itemType: "Cardiology", quantity: 24 },
      { itemId: 7, itemName: "Item 2", itemType: "Cardiology", quantity: 24 },
      { itemId: 7, itemName: "Item 2", itemType: "Cardiology", quantity: 24 },
      { itemId: 7, itemName: "Item 2", itemType: "Cardiology", quantity: 24 },
    ],
  },
  {
    id: 1,
    po: "456",
    date: new Date(2020, 3, 20),
    status: "Delivered",
    quantity: 20,
  },
  {
    id: 99,
    po: "789",
    date: new Date(2020, 5, 10),
    status: "On The Way",

    quantity: 50,
  },
  {
    id: 1233,
    po: "101",
    date: new Date(2020, 7, 5),
    status: "Pending",
    quantity: 15,
  },
  {
    id: 12,
    po: "101",
    date: new Date(2020, 7, 5),
    status: "Pending",
    quantity: 15,
  },
  {
    id: 6,
    po: "101",
    date: new Date(2020, 7, 5),
    status: "Pending",

    quantity: 15,
  },
];

function PharamceuticalOrders() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box h={"100%"}>
        <OrderTable
          values={["po", "status", "date", "quantity"]}
          nodes={nodes}
          itemsPerPage={15}
          headers={["PO", "Status", "Date", "Quantity"]}
          openDrawer={onOpen}
        />
      </Box>
      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        size={"xl"}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`Create A New Order`}</DrawerHeader>
          <DrawerBody>
            <DrawerBodyContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const supplierArray = ["medinc"];

function DrawerBodyContent() {
  const [itemName, setItemName] = useState("");
  const [supplier, setSupplier] = useState("");
  const [productType, setProductType] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [pn, setPn] = useState("");
  const [orderItems, setOrderItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    //Dynamically get the supplier
  }, []);

  const handleAddItem = () => {
    // Validate if all fields are filled
    if (!itemName) {
      setError("Please enter the item name.");
      return;
    }
    if (!supplier) {
      setError("Please select a supplier.");
      return;
    }
    if (!productType) {
      setError("Please select a product type.");
      return;
    }
    if (quantity === 0) {
      setError("Please enter a quantity greater than zero.");
      return;
    }
    if (!pn) {
      setError("Please enter the PN.");
      return;
    }

    const newItem = { itemName, supplier, productType, quantity, pn };
    setOrderItems([...orderItems, newItem]);
    // Reset input fields after adding item
    setItemName("");
    setProductType("");
    setQuantity(0);
    setPn("");
    setError("");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <div
          className="order_component_wrapper"
          style={{
            display: "flex",
            // flexWrap: "wrap",
            width: "100%",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <InputUnit
            title={"Item Name"}
            type={"input"}
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <InputUnitSelect
            title={"Supplier"}
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            items={supplierArray}
          />

          <InputUnitSelect
            title={"Product Type"}
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            items={["hi"]}
          />
        </div>
        <div
          className="order_component_wrapper"
          style={{
            display: "flex",
            // flexWrap: "wrap",
            width: "100%",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <InputUnitNumber
            title={"Quantity"}
            value={quantity}
            onChange={(newValue) => setQuantity(newValue)}
          />
          <InputUnit
            title={"PN"}
            type={"input"}
            value={pn}
            onChange={(e) => setPn(e.target.value)}
          />
          <Button
            colorScheme="blue"
            leftIcon={<FaPlus size={15} />}
            mt={6}
            w={"30%"}
            onClick={handleAddItem}
          >
            Add
          </Button>
        </div>
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <OrderItemsTable items={orderItems} />
    </>
  );
}

function OrderItemsTable({ items }) {
  useEffect(() => {
    console.log(items);
  }, [items]);

  const handleSubmitOrder = () => {
    // Handle order submission logic here
    console.log("Order submitted");
  };

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Item</Th>
            <Th>Type</Th>
            <Th>Pn</Th>
            <Th>Supplier</Th>
            <Th isNumeric>Quantity</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item, index) => (
            <Tr key={index}>
              <Td>{item.itemName}</Td>
              <Td>{item.productType}</Td>
              <Td>{item.pn}</Td>
              <Td>{item.supplier}</Td>
              <Td isNumeric>{item.quantity}</Td>
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
      >
        {items.length == 0 ? (
          <Button colorScheme="blue" mt={6} disabled>
            Submit Order
          </Button>
        ) : (
          <Button colorScheme="blue" mt={6} onClick={handleSubmitOrder}>
            Submit Order
          </Button>
        )}
      </div>
    </TableContainer>
  );
}

export default PharamceuticalOrders;
