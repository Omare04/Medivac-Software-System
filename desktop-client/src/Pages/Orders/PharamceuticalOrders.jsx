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
    po: "123",
    date: new Date(2020, 1, 15),
    status: "Pending",
    country: "UK",
    supplier: "INC INC",
    quantity: 34,
  },
  {
    po: "456",
    date: new Date(2020, 3, 20),
    status: "Delivered",
    country: "UK",
    supplier: "ABC Corp",
    quantity: 20,
  },
  {
    po: "789",
    date: new Date(2020, 5, 10),
    status: "On The Way",
    country: "UK",
    supplier: "XYZ Corp",
    quantity: 50,
  },
  {
    po: "101",
    date: new Date(2020, 7, 5),
    status: "Pending",
    country: "UK",
    supplier: "DEF Inc",
    quantity: 15,
  },
  {
    po: "101",
    date: new Date(2020, 7, 5),
    status: "Pending",
    country: "UK",
    supplier: "DEF Inc",
    quantity: 15,
  },
  {
    po: "101",
    date: new Date(2020, 7, 5),
    status: "Pending",
    country: "UK",
    supplier: "DEF Inc",
    quantity: 15,
  },
  {
    po: "101",
    date: new Date(2020, 7, 5),
    status: "Pending",
    country: "UK",
    supplier: "DEF Inc",
    quantity: 15,
  },
  {
    po: "101",
    date: new Date(2020, 7, 5),
    status: "Pending",
    country: "UK",
    supplier: "DEF Inc",
    quantity: 15,
  },
  {
    po: "101",
    date: new Date(2020, 7, 5),
    status: "Pending",
    country: "UK",
    supplier: "DEF Inc",
    quantity: 15,
  },
  {
    po: "101",
    date: new Date(2020, 7, 5),
    status: "Pending",
    country: "UK",
    supplier: "DEF Inc",
    quantity: 15,
  },
  {
    po: "101",
    date: new Date(2020, 7, 5),
    status: "Pending",
    country: "UK",
    supplier: "DEF Inc",
    quantity: 15,
  },
  {
    po: "101",
    date: new Date(2020, 7, 5),
    status: "Pending",
    country: "UK",
    supplier: "DEF Inc",
    quantity: 15,
  },
  {
    po: "101",
    date: new Date(2020, 7, 5),
    status: "Pending",
    country: "UK",
    supplier: "DEF Inc",
    quantity: 15,
  },
  {
    po: "101",
    date: new Date(2020, 7, 5),
    status: "Pending",
    country: "UK",
    supplier: "DEF Inc",
    quantity: 15,
  },
  {
    po: "101",
    date: new Date(2020, 7, 5),
    status: "Pending",
    country: "UK",
    supplier: "DEF Inc",
    quantity: 15,
  },
];

function PharamceuticalOrders() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
          <Button
            colorScheme="blue"
            ref={btnRef}
            leftIcon={<FaPlus size={15} />}
            onClick={onOpen}
          >
            Create New Order
          </Button>
        </div>
        <OrderTable nodes={nodes} />
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
      </div>
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
