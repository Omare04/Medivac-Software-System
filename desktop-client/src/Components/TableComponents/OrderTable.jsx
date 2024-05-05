import React, { Children } from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Badge,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Button,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  Tooltip,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { AddToStockModal } from "../Modals/AddStockModal";
import { usePagination } from "@table-library/react-table-library/pagination";
import { ReactSelectComponent } from "../InputComponents/InputComponents";
import { PiMagnifyingGlass } from "react-icons/pi";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { IoFilterOutline, IoLogoNodejs } from "react-icons/io5";
import { OrderItemModal } from "../Modals/OrderModals";

import { FaPlus } from "react-icons/fa";
import { buttonBlue, dividerColorLight } from "../../Colors";

function OrderTable({ nodes, headers, values, openDrawer }) {
  let data = { nodes };
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null);
  const [itemType, setItemType] = useState("");

  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 15,
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
          openDrawer={openDrawer}
        />
        <Box
          p={1}
          borderWidth="1px"
          borderRadius="lg"
          overflow={"auto"}
          background={"white"}
        >
          <OrderTableComponent
            pagination={pagination}
            search={search}
            itemType={itemType}
            totalItems={data.nodes.length}
            itemsPerPage={pagination.state.size}
            currentPage={pagination.state.page}
            nodes={data.nodes}
            headers={headers}
            values={values}
          />
        </Box>
        {/* Pagination logic */}
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

function TableFilterBar({
  itemType,
  setItemType,
  search,
  handleSearch,
  openDrawer,
}) {
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
        pb={2}
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
            <Box display={"flex"} w={"100%"} gap={3}>
              <InputGroup background={"white"} borderRadius={5}>
                <InputLeftElement colorScheme="whiteAlpha" pointerEvents="none">
                  {" "}
                  <PiMagnifyingGlass
                    style={{ color: "#96989a" }}
                    size={"20px"}
                  />
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
                <Popover>
                  <PopoverTrigger>
                    <IconButton
                      background={"white"}
                      icon={<IoFilterOutline />}
                      variant={"outline"}
                      borderColor={"#e2e8f0"}
                      color={"grey"}
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Filters</PopoverHeader>
                    <PopoverBody>
                      <ReactSelectComponent
                        selectOptions={[
                          { value: "Pending", label: "Pending" },
                          { value: "Delivered", label: "Delivered" },
                          { value: "On The Way", label: "On The Way" },
                        ]}
                        placeholder={"Type"}
                        title={"Item Type"}
                        selectedOptions={itemType}
                        setSelectedOptions={setItemType}
                        isTitle={false}
                        customStyles={null}
                      />
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Box>
            </Box>
          </Box>
        </div>
        <Button
          colorScheme="blackAlpha"
          leftIcon={<FaPlus size={15} />}
          onClick={openDrawer}
          variant="ghost"
        >
          Create New Order
        </Button>
      </Box>
    </>
  );
}

function OrderTableComponent({
  totalItems,
  itemsPerPage,
  currentPage,
  nodes,
  search,
  itemType,
  headers,
  values,
}) {
  const [displayedNodes, setDisplayedNodes] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState({});

  const openItemModal = (index) => {
    setModalItem(nodes[index]);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

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

  useEffect(() => {
    const filteredNodes = nodes.filter(
      (node) => node.po.includes(search.toLowerCase())
      // (itemType.value ? node.type === itemType.value : true)
    );
    setDisplayedNodes(filteredNodes);
  }, [search, itemType.value, nodes]);

  return (
    <>
      <TableContainer borderRadius={5}>
        <Table
          variant="simple"
          size={"sm"}
          position={"relative"}
          overflow={"auto"}
        >
          <Thead top={0} position={"sticky"} background={dividerColorLight}>
            <Tr>
              {headers.map((value, index) =>
                value === "Quantity" ? (
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
                _hover={{
                  cursor: "pointer",
                  backgroundColor: "gray.50",
                  transition: "background-color 0.3s ease",
                }}
                onClick={() => openItemModal(i)}
              >
                {values.map((key, index) =>
                  (key !== "id" && key === "status") || key === "supplier" ? (
                    <TooltipComponent
                      key={index}
                      text={
                        key === "supplier" &&
                        displayedNodes[i].hasOwnProperty("address") != " "
                          ? node["address"]
                          : node[key]
                      }
                    >
                      {RenderStatusColumn({ index, node, key })}
                    </TooltipComponent>
                  ) : key === "quantity" ? (
                    <Td key={index} isNumeric>
                      <Badge>{node[key]}</Badge>
                    </Td>
                  ) : (
                    <Td key={index}>
                      {node[key] instanceof Date
                        ? node[key].toLocaleDateString("en-US")
                        : node[key]}
                    </Td>
                  )
                )}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <OrderItemModal
        isOpen={openModal}
        onClose={closeModal}
        item={modalItem}
      />
    </>
  );
}

const TooltipComponent = ({ text, children }) => {
  return (
    <Tooltip label={text} aria-label={text} bg={"gray.400"}>
      {children}
    </Tooltip>
  );
};

const RenderStatusColumn = ({ index, node, key }) => {
  return (
    <Td key={index}>
      <Badge
        colorScheme={
          node[key] == "Pending"
            ? "yellow"
            : node[key] == "Delivered"
            ? "green"
            : key == "supplier"
            ? "grey"
            : "green"
        }
      >
        {node[key]}
      </Badge>
    </Td>
  );
};
export default OrderTable;
