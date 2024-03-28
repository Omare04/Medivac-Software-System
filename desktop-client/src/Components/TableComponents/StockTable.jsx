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
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Respiratory",
    pn: 12314124,
  },
  {
    id: "1",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "2",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Neurological",
    pn: 12314124,
  },
  {
    id: "3",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Neurological",
    pn: 12314124,
  },
  {
    id: "4",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "5",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Neurological",
    pn: 12314124,
  },
  {
    id: "6",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "7",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Neurological",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Respiratory",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Respiratory",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Neurological",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Neurological",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "8",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Respiratory",
    pn: 12314124,
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
    console.log(action, state);
  }

  const [horizontalSpacing, setHorizontalSpacing] = React.useState(
    DEFAULT_OPTIONS.horizontalSpacing
  );
  const [verticalSpacing, setVerticalSpacing] = React.useState(5);
  const [striped, setStriped] = React.useState(DEFAULT_OPTIONS.striped);
  const [hasFooter, setFooter] = React.useState(false);
  const [caption, setCaption] = React.useState("");

  const mantineTheme = getTheme({
    horizontalSpacing,
    verticalSpacing,
    striped,
  });

  const customTheme = useTheme([
    getTheme(),
    {
      HeaderRow: `
      background-color: ${dividerColorLight};
      color: #000000;
      `,
      Row: `
      background-color: #ffffff;
      color: #383838; 
      cursor: pointer; 
      transition: background-color 0.3s ease; 
      
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

  const theme = useTheme([mantineTheme]);

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
              color="#181d1f"
              boxSize={4}
              ml={3}
              style={{}}
            />
          </div>
        </>
      ),
      renderCell: (item) => item.name,
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
        <Badge
          cursor={"pointer"}
          colorScheme={
            item.type === "Cardiology"
              ? "red"
              : item.type === "Respiratory"
              ? "green"
              : "blue"
          }
          p={1}
        >
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
              color="#181d1f"
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
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          height: "100%",
        }}
      >
        <Stack spacing={0} pb={2} w={"100%"}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FaSearch style={{ color: "#96989a" }} />}
            />
            <Input
              background={"white"}
              placeholder="Search Product Name"
              value={search}
              onChange={handleSearch}
              borderRadius={"sm"}
            />
            <div
              style={{
                display: "flex",
                width: "80%",
                alignItems: "center",
                paddingLeft: "10px",
                height: "100%",
              }}
            >
              <TableFilterBar />
              <AddToStockModal />
            </div>
          </InputGroup>
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

  return (
    <>
      <div style={{ width: "100%" }}>
        <ReactSelectComponent
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
        />
      </div>
    </>
  );
}

export default MedicalStockTable;
