import React from "react";
import { useState, useEffect } from "react";
import { dividerColorLight } from "../../Colors";
import { useTree } from "@table-library/react-table-library/tree";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/chakra-ui";
import {
  Box,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Button,
  IconButton,
  Badge,
  Checkbox,
  Icon,
  ChakraProvider,
} from "@chakra-ui/react";
import { FaSearch, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { AddToStockModal } from "../Modals/AddStockModal";
import { usePagination } from "@table-library/react-table-library/pagination";
import { useRowSelect } from "@table-library/react-table-library/select";
import {
  ReactSelectComponent,
  InputComponentIcon,
  ChakraSelectComponentIcon,
} from "../InputComponents/InputComponents";
import { AiFillMedicineBox } from "react-icons/ai";
import { MdNumbers } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { SearchBarComponent } from "../InputComponents/InputComponents";
import { IconDropDown } from "../InputComponents/DropdownComponents";
import {
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
class MedicalStock {
  constructor(id, name, type, pn, date) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.pn = pn;
    this.date = date;
  }
}

const headers = ["Name", "Date", "Type", "Pn", "Qty"];

function MedicalStockTable() {
  let data = { nodes };
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null);
  const [itemType, setItemType] = useState("");

  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 13,
    },
  });

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        <TableFilterBar
          itemType={itemType}
          setItemType={setItemType}
          search={search}
          handleSearch={handleSearch}
        />
        <div
          style={{
            width: "100%",
            borderRadius: "3px",
            background: "white",
            overflow: "auto",
            paddingRight: "5px",
          }}
        >
          <Box p={1} borderWidth="1px" borderRadius="lg">
            <TableComponent
              pagination={pagination}
              search={search}
              itemType={itemType}
              totalItems={data.nodes.length}
              itemsPerPage={pagination.state.size}
              currentPage={pagination.state.page}
              nodes={data.nodes}
              headers={["Name", "Date", "Type", "PN", "Qty"]}
            />
          </Box>
          <br />

          {/* FOOTER */}
        </div>
        <Box display={"flex"} width="100%">
          <HStack justify="flex-end" width="100%" pt={4}>
            <IconButton
              aria-label="previous page"
              icon={<FaChevronLeft size={13} />}
              colorScheme="blue"
              variant="ghost"
              isDisabled={pagination.state.page === 0}
              height="30px"
              onClick={() =>
                pagination.fns.onSetPage(pagination.state.page - 1)
              }
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
              onClick={() =>
                pagination.fns.onSetPage(pagination.state.page + 1)
              }
            />
          </HStack>
        </Box>
      </div>
    </>
  );
}

function TableFilterBar({ itemType, setItemType, search, handleSearch }) {
  const handlePartNumberChange = (event) => {
    setItemType(event.target.value);
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"100%"}
        pr={5}
        p={2}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            width: "60%",
            borderRadius: "5px",
          }}
        >
          <Box display={"flex"} w={"100%"} gap={3}>
            <Box display={"flex"} w={"80%"} gap={3}>
              <InputGroup background={"white"} borderRadius={5}>
                <InputLeftElement colorScheme="whiteAlpha" pointerEvents="none">
                  {" "}
                  <FaSearch style={{ color: "#96989a" }} />
                </InputLeftElement>
                <Input
                  height={"99.3%"}
                  background={"white"}
                  borderRadius={5}
                  colorScheme="whiteAlpha"
                  placeholder="Search Product Name"
                  value={search}
                  onChange={handleSearch}
                />
              </InputGroup>
              <Box w={"50%"} zIndex={1000}>
                <ReactSelectComponent
                  selectOptions={[
                    { value: "Respiratory", label: "Respiratory	" },
                    { value: "Cardiological", label: "Cardiological" },
                    { value: "Neurological", label: "Neurological" },
                    { value: "Dermatologic", label: "Dermatologic" },
                  ]}
                  placeholder={"Type"}
                  title={"Item Type"}
                  selectedOptions={itemType}
                  setSelectedOptions={setItemType}
                  isTitle={false}
                  customStyles={null}
                />
              </Box>
            </Box>
          </Box>
        </div>
        <AddToStockModal />
      </Box>
    </>
  );
}

const nodes = [
  {
    id: "0",
    name: "MRI Scanner",
    date: new Date(2020, 1, 15),
    type: "Respiratory",
    pn: 12314124,
    qty: 1,
  },
  {
    id: "1",
    name: "X-ray Machine",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
    qty: 1,
  },
  {
    id: "2",
    name: "Ultrasound Machine",
    date: new Date(2020, 1, 15),
    type: "Neurological",
    pn: 12314124,
    qty: 1,
  },
  {
    id: "3",
    name: "Defibrillator",
    date: new Date(2020, 1, 15),
    type: "Neurological",
    pn: 12314124,
    qty: 1,
  },
  {
    id: "4",
    name: "ECG Machine",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
    qty: 1,
  },
  {
    id: "5",
    name: "Anesthesia Machine",
    date: new Date(2020, 1, 15),
    type: "Neurological",
    pn: 12314124,
    qty: 1,
  },
  {
    id: "6",
    name: "Ventilator",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
    qty: 1,
  },
  {
    id: "7",
    name: "Infusion Pump",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
    qty: 1,
  },
  {
    id: "8",
    name: "Surgical Microscope",
    date: new Date(2020, 1, 15),
    type: "Neurological",
    pn: 12314124,
    qty: 1,
  },
  {
    id: "9",
    name: "Blood Gas Analyzer",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
    qty: 1,
  },
  {
    id: "9",
    name: "Blood Gas Analyzer",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
    qty: 1,
  },
  {
    id: "9",
    name: "Blood Gas Analyzer",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
    qty: 1,
  },
  {
    id: "9",
    name: "Blood Gas Analyzer",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
    qty: 1,
  },
  {
    id: "9",
    name: "Blood Gas Analyzer",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
    qty: 1,
  },
  {
    id: "9",
    name: "Blood Gas Analyzer",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
    qty: 1,
  },
  {
    id: "9",
    name: "Blood Gas Analyzer",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
    qty: 1,
  },
  {
    id: "9",
    name: "Blood Gas Analyzer",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
    qty: 1,
  },
];

function TableComponent({
  pagination,
  totalItems,
  itemsPerPage,
  currentPage,
  nodes,
  search,
  itemType,
  headers,
}) {
  const [displayedNodes, setDisplayedNodes] = useState([]);

  //Pagination Logic
  useEffect(() => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationCount =
      totalPages - currentPage >= 5 ? 5 : totalPages - currentPage;
    const startPage =
      currentPage - Math.floor(paginationCount / 2) > 0
        ? currentPage - Math.floor(paginationCount / 2)
        : 1;

    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const displayed = nodes.slice(startIndex, endIndex);

    setDisplayedNodes(displayed);
  }, [totalItems, itemsPerPage, currentPage]);

  const handleRowClick = (id) => {
    console.log(id);
  };

  useEffect(() => {
    const filteredNodes = nodes.filter(
      (node) =>
        node.name.toLowerCase().includes(search.toLowerCase()) &&
        (itemType.value ? node.type === itemType.value : true)
    );
    setDisplayedNodes(filteredNodes);
  }, [search, itemType, nodes]);

  return (
    <TableContainer>
      <Table variant="simple" size={"sm"}>
        <Thead>
          <Tr>
            {headers.map((value, index) =>
              value === "Qty" ? (
                <Th key={index} isNumeric>
                  {value}
                </Th>
              ) : (
                <Th key={index}>{value}</Th>
              )
            )}
          </Tr>
        </Thead>
        <Tbody>
          {displayedNodes.map((node, i) => (
            <Tr
              key={i}
              onClick={() => handleRowClick(node?.id)}
              _hover={{
                cursor: "pointer",
                backgroundColor: "gray.50",
                transition: "background-color 0.3s ease",
              }}
            >
              <Td>{node?.name}</Td>
              <Td>{node?.date.toLocaleDateString("en-US")}</Td>
              <Td>{node?.type}</Td>
              <Td>{node?.pn}</Td>
              <Td isNumeric>{node?.qty}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default MedicalStockTable;
