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
import { FaChevronDown } from "react-icons/fa";

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

  const [horizontalSpacing, setHorizontalSpacing] = React.useState(
    DEFAULT_OPTIONS.horizontalSpacing
  );
  const [verticalSpacing, setVerticalSpacing] = React.useState(4);
  const [striped, setStriped] = React.useState(true);
  const [hasFooter, setFooter] = React.useState(true);
  const [caption, setCaption] = React.useState("");

  const mantineTheme = getTheme({
    horizontalSpacing,
    verticalSpacing,
    // striped,
    hasFooter,
  });

  const customTheme = useTheme([
    getTheme(),
    {
      HeaderRow: `
      background-color: #f2f2f2;
      position: sticky;
      top: 0;
      `,
      Row: `
      background-color: #ffffff;
      color: #383838; 
      height: 20px;
      font-weight: 470;
      cursor: pointer; 
      transition: background-color 0.1s ease; 
      
      &:nth-of-type(even) {
        background-color: ${dividerColorLight};
      }
      
      &:hover {
        color: #383838; 
        background-color: ${dividerColorLight};
      }
      
      &:hover:nth-of-type(even) {
        background-color: #ffffff;
      }
      `,
    },
  ]);

  const theme = useTheme([customTheme]);

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
            <Icon
              as={FaChevronDown}
              boxSize={4}
              ml={3}
              style={{}}
            />
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
            <Icon
              as={FaChevronDown}
              boxSize={4}
              ml={3}
              style={{}}
            />
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
        <Stack spacing={0} pb={2} w={"100%"}>
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              paddingLeft: "10px",
              height: "100%",
            }}
          >
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FaSearch style={{ color: "#96989a" }} />}
              />
              <Input
                borderColor={"white"}
                background={dividerColorLight}
                placeholder="Search Product Name"
                value={search}
                onChange={handleSearch}
                borderRadius={"sm"}
              />
            </InputGroup>
            <TableFilterBar />
            <AddToStockModal />
          </div>
        </Stack>

        <div
          style={{
            width: "100%",
            borderRadius: "3px",
            background: "white",
            overflow: "auto",
            paddingRight: "5px",
          }}
        >
          <Box
            borderWidth="1px"
            borderRadius="sm"
            width={"100%"}
            overflow="auto"
          >
            <CompactTable
              columns={COLUMNS}
              data={data}
              theme={theme}
              pagination={pagination}
              layout={{ fixedHeader: true }}
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
              disabled={pagination.state.page === 0}
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
              disabled={
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

  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <>
      <div style={{ width: "100%", display: "flex", gap: "10px" }}>
        {/* <ReactSelectComponent
          selectOptions={[
            { value: "CNTKC", label: "CN-TKC" },
            { value: "CNTKV", label: "CN-TKV" },
            { value: "CNTMV", label: "CN-TMV" },
            { value: "CNTKX", label: "CN-TKX" },
          ]}
          placeholder={
            <span
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Icon as={AiFillMedicineBox} /> Product Type
            </span>
          }
          title={"Product Type"}
          selectedOptions={itemType}
          setSelectedOptions={setItemType}
          isTitle={false}
          customStyles={customStyles}
        /> */}
        <ChakraSelectComponentIcon
          icon={<Icon as={AiFillMedicineBox} />}
          selectPlaceHolder="Select Type"
          selectItems={options}
        />
        <ChakraSelectComponentIcon
          icon={<Icon as={AiFillMedicineBox} />}
          selectPlaceHolder="Select an option"
          selectItems={options}
        />
      </div>
    </>
  );
}

export default MedicalStockTable;
