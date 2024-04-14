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
class MedicalStock {
  constructor(id, name, type, pn, date) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.pn = pn;
    this.date = date;
  }
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
  {
    id: "9",
    name: "Blood Gas Analyzer",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
    qty: 1,
  },
];

function MedicalStockTable() {
  let data = { nodes };

  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 30,
    },
    onChange: onPaginationChange,
  });

  function onPaginationChange(action, state) {
    // console.log(action, state);
  }

  const chakraTheme = getTheme(DEFAULT_OPTIONS);
  const theme = useTheme(chakraTheme);

  const [search, setSearch] = useState("");
  const [addStockModalState, setAddStockModalState] = useState(false);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  data = {
    nodes: data.nodes.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
  };

  const select = useRowSelect(data, {
    onChange: onSelectChange,
  });

  function onSelectChange(action, state) {
    console.log(action, state);
  }

  const COLUMNS = [
    {
      label: (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            Product Name
            <Icon as={FaChevronDown} boxSize={4} ml={3} style={{}} />
          </div>
        </>
      ),
      renderCell: (item) => (
        <>
          <span style={{}}>{item.name}</span>
        </>
      ),
      select: {
        renderCellSelect: (item) => (
          <Checkbox
            isChecked={select.state.ids.includes(item.id)}
            onChange={() => select.fns.onToggleById(item.id)}
          />
        ),
      },
    },
    {
      label: "Product Type",
      renderCell: (item) => (
        <Badge cursor={"pointer"} p={1}>
          {item.type}
        </Badge>
      ),
    },
    { label: "Pn", renderCell: (item) => item.pn },
    {
      label: (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            Date Entered
            <Icon as={FaChevronDown} boxSize={4} ml={3} style={{}} />
          </div>
        </>
      ),
      renderCell: (item) =>
        item.date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
    },

    {
      label: "Quantity",
      renderCell: (item) => <>{item.qty}</>,
    },
  ];

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
        <TableFilterBar />

        <div
          style={{
            width: "100%",
            borderRadius: "3px",
            background: "white",
            overflow: "auto",
            paddingRight: "5px",
          }}
        >
          <Box p={3} borderWidth="1px" borderRadius="lg">
            <CompactTable
              columns={COLUMNS}
              data={data}
              theme={theme}
              // layout={{ custom: true }}
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

function TableFilterBar() {
  const [itemType, setItemType] = useState("");

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "none",
      borderRadius: "4px",
      background: dividerColorLight,
      boxShadow: state.isFocused ? "0 0 0 1px #c4c4c4" : provided.boxShadow,
      "&:active": {
        boxShadow: "0 0 0 1px #c4c4c4",
      },
    }),
  };

  const options = ["Cardiological", "Neurological", "Respiratory"];

  const [partNumber, setPartNumber] = useState("");

  const handlePartNumberChange = (event) => {
    setPartNumber(event.target.value);
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        w={"100%"}
        pr={5}
        p={3}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            width: "50%",
            background: dividerColorLight,
            borderRadius: "5px",
            padding: "5px",
          }}
        >
          <Box display={"flex"} w={"100%"} gap={3}>
            <SearchBarComponent />
            <Box>
              <InputComponentIcon
                type={"number"}
                value={partNumber}
                onChange={handlePartNumberChange}
                icon={<Icon as={MdNumbers} />}
                isTitle={false}
                placeholder={"Part Number"}
              />
            </Box>
          </Box>
          <Box display={"flex"} w={"35%"} gap={3}>
            <Box w={"100%"} zIndex={1000}>
              <ReactSelectComponent
                selectOptions={[
                  { value: "Respiratory", label: "Respiratory" },
                  { value: "Cardiological", label: "Cardiological" },
                  { value: "Neurological", label: "Neurological" },
                  { value: "Dermatologic", label: "Dermatologic" },
                ]}
                placeholder={"Product Type"}
                title={"Item Type"}
                selectedOptions={itemType}
                setSelectedOptions={setItemType}
                isTitle={false}
                customStyles={null}
              />
            </Box>
          </Box>
        </div>
        <AddToStockModal />
      </Box>
    </>
  );
}

export default MedicalStockTable;
