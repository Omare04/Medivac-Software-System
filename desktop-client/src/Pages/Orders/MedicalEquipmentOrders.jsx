import React, { useEffect, useState } from "react";
import OrderTable from "../../Components/TableComponents/OrderTable";
import { Button, Select, Text } from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  Box,
  HStack,
  IconButton,
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
import { usePagination } from "@table-library/react-table-library/pagination";

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
    address: "123 ave NE, London, UK, T4K 1Tk",
    country: "UK",
    supplier: "ABC Corp",
    quantity: 20,
  },
  {
    id: 2,
    po: "456",
    date: new Date(2020, 3, 20),
    status: "Delivered",
    address: "123 ave NE, London, UK, T4K 1Tk",
    country: "UK",
    supplier: "ABC Corp",
    quantity: 20,
  },
  {
    id: 2,
    po: "456",
    date: new Date(2020, 3, 20),
    status: "Delivered",
    address: "123 ave NE, London, UK, T4K 1Tk",
    country: "UK",
    supplier: "ABC Corp",
    quantity: 20,
  },
  {
    id: 2,
    po: "456",
    date: new Date(2020, 3, 20),
    status: "Delivered",
    address: "123 ave NE, London, UK, T4K 1Tk",
    country: "UK",
    supplier: "ABC Corp",
    quantity: 20,
  },
  {
    id: 2,
    po: "456",
    date: new Date(2020, 3, 20),
    status: "Delivered",
    address: "123 ave NE, London, UK, T4K 1Tk",
    country: "UK",
    supplier: "ABC Corp",
    quantity: 20,
  },
  {
    id: 2,
    po: "456",
    date: new Date(2020, 3, 20),
    status: "Delivered",
    address: "123 ave NE, London, UK, T4K 1Tk",
    country: "UK",
    supplier: "ABC Corp",
    quantity: 20,
  },
  {
    id: 2,
    po: "456",
    date: new Date(2020, 3, 20),
    status: "Delivered",
    address: "123 ave NE, London, UK, T4K 1Tk",
    country: "UK",
    supplier: "ABC Corp",
    quantity: 20,
  },
  {
    id: 2,
    po: "456",
    date: new Date(2020, 3, 20),
    status: "Delivered",
    address: "123 ave NE, London, UK, T4K 1Tk",
    country: "UK",
    supplier: "ABC Corp",
    quantity: 20,
  },
  {
    id: 2,
    po: "456",
    date: new Date(2020, 3, 20),
    status: "Delivered",
    address: "123 ave NE, London, UK, T4K 1Tk",
    country: "UK",
    supplier: "ABC Corp",
    quantity: 20,
  },
  {
    id: 2,
    po: "456",
    date: new Date(2020, 3, 20),
    status: "Delivered",
    address: "123 ave NE, London, UK, T4K 1Tk",
    country: "UK",
    supplier: "ABC Corp",
    quantity: 20,
  },
  {
    id: 2,
    po: "456",
    date: new Date(2020, 3, 20),
    status: "Delivered",
    address: "123 ave NE, London, UK, T4K 1Tk",
    country: "UK",
    supplier: "ABC Corp",
    quantity: 20,
  },
  {
    id: 2,
    po: "456",
    date: new Date(2020, 3, 20),
    status: "Delivered",
    address: "123 ave NE, London, UK, T4K 1Tk",
    country: "UK",
    supplier: "ABC Corp",
    quantity: 20,
  },
  {
    id: 2,
    po: "456",
    date: new Date(2020, 3, 20),
    status: "Delivered",
    address: "123 ave NE, London, UK, T4K 1Tk",
    country: "UK",
    supplier: "ABC Corp",
    quantity: 20,
  },
];

function MedicalEquipmentOrders() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box h={"100%"}>
        <OrderTable
          values={["po", "status", "date", "country", "supplier", "quantity"]}
          nodes={nodes}
          itemsPerPage={15}
          headers={["PO", "Status", "Date", "Country", "Supplier", "Quantity"]}
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

const types = ["cardiology", "physi"];

function DrawerBodyContent() {
  const [itemName, setItemName] = useState("");
  const [productType, setProductType] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [pn, setPn] = useState("");
  const [orderItems, setOrderItems] = useState([]);
  const [error, setError] = useState("");

  const handleAddItem = () => {
    // Validate if all fields are filled
    if (!itemName || !productType || quantity === 0 || !pn) {
      setError("Please fill in all fields.");
      return;
    }

    const newItem = { itemName, productType, quantity, pn };
    setOrderItems([...orderItems, newItem]);
    // Reset input fields after adding item
    setItemName("");
    setProductType("");
    setQuantity(0);
    setPn("");
    setError(""); // Clear error message
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <div
          className="order_component_wrapper"
          style={{
            display: "flex",
            // flexWrap: "wrap",
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
            title={"Product Type"}
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            items={types}
          />
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
            width={"30%"}
            mt={6}
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

export function InputUnit({ title, type, value, onChange, placeholder }) {
  return (
    <div style={{ width: "100%" }}>
      <Text>{title}</Text>
      <Input
        placeholder={placeholder}
        background={"white"}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export function InputUnitSelect({ title, value, onChange, items }) {
  return (
    <div style={{ width: "100%" }}>
      <Text>{title}</Text>
      <Select
        placeholder="Select Option"
        value={value}
        onChange={onChange}
        background={"white"}
      >
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </div>
  );
}

export function InputUnitNumber({ title, value, onChange }) {
  return (
    <div style={{ width: "100%" }}>
      <Text>{title}</Text>
      <NumberInput
        value={value}
        onChange={onChange}
        min={0}
        background={"white"}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </div>
  );
}

export function OrderItemsTable({ items }) {
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
            <Th isNumeric>Quantity</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item, index) => (
            <Tr key={index}>
              <Td>{item.itemName}</Td>
              <Td>{item.productType}</Td>
              <Td>{item.pn}</Td>
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

export function CheckListProceduresTable({ items }) {
  useEffect(() => {
    console.log(items);
  }, [items]);

  const handleSubmit = () => {
    console.log("submitted");
  };

  return (
    <TableContainer overflow={"auto"}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Procedure</Th>
            <Th>Procedure Name</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item, index) => (
            <Tr key={index}>
              <Td>{item.numberOfProcedures}</Td>
              <Td>{item.itemName}</Td>
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
  );
}

export function PaginationComponent({ state }) {
  return (
    <Box display={"flex"} width="100%">
      <HStack justify="flex-end" width="100%" pt={4}>
        <IconButton
          aria-label="previous page"
          icon={<FaChevronLeft size={13} />}
          colorScheme="blue"
          variant="ghost"
          isDisabled={pagination.state.page === 0}
          height="30px"
          onClick={() => pagination.fns.onSetPage(pagination.state.page - 1)}
        />

        {pagination.state.getPages(data.nodes).map((_, index) => (
          <Button
            height="30px"
            key={index}
            colorScheme="blue"
            variant={pagination.state.page === index ? "solid" : "ghost"}
            onClick={() => pagination.fns.onSetPage(index)}
          >
            {index + 1}
          </Button>
        ))}

        <IconButton
          height="30px"
          aria-label="next page"
          icon={<FaChevronRight size={13} />}
          colorScheme="blue"
          variant="ghost"
          isDisabled={
            pagination.state.page + 1 ===
            pagination.state.getTotalPages(data.nodes)
          }
          onClick={() => pagination.fns.onSetPage(pagination.state.page + 1)}
        />
      </HStack>
    </Box>
  );
}

export default MedicalEquipmentOrders;
