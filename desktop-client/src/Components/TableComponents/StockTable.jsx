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
} from "@chakra-ui/react";
import { FaSearch, FaChevronRight, FaChevronLeft } from "react-icons/fa";
const key = "Composed Table";
import { usePagination } from "@table-library/react-table-library/pagination";

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
    type: "Cardiology",
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
    type: "Cardiology",
    pn: 12314124,
  },
  {
    id: "3",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
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
    type: "Cardiology",
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
];

function MedicalStockTable() {
  let data = { nodes };

  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 20,
    },
    onChange: onPaginationChange,
  });

  function onPaginationChange(action, state) {
    console.log(action, state);
  }

  function onTreeChange(action, state) {
    console.log(action, state);
  }

  const [horizontalSpacing, setHorizontalSpacing] = React.useState(DEFAULT_OPTIONS.horizontalSpacing);
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

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  data = {
    nodes: data.nodes.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
  };

  const COLUMNS = [
    { label: "Product Name", renderCell: (item) => item.name },
    { label: "Product Type", renderCell: (item) => item.type },
    { label: "Pn", renderCell: (item) => item.pn },
    {
      label: "Date Entered",
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
      <div>
        <Stack spacing={0} pb={3} pt={1}>
          <InputGroup>
            <InputLeftElement
              
              pointerEvents="none"
              children={<FaSearch style={{ color: "#96989a" }} />}
            />
            <Input
              placeholder="Search Task"
              value={search}
              onChange={handleSearch}
              borderRadius={"sm"}
            />
          </InputGroup>
        </Stack>

        <Box p={1} borderWidth="1px" borderRadius="sm">
          <CompactTable
            columns={COLUMNS}
            data={data}
            theme={theme}
            pagination={pagination}
          />
        </Box>
        <br />
        <HStack justify="flex-end" height="0px" width="100%">
          <IconButton
            aria-label="previous page"
            icon={<FaChevronLeft size={13} />}
            colorScheme="blue"
            variant="ghost"
            disabled={pagination.state.page === 0}
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
            disabled={
              pagination.state.page + 1 ===
              pagination.state.getTotalPages(data.nodes)
            }
            onClick={() => pagination.fns.onSetPage(pagination.state.page + 1)}
          />
        </HStack>
      </div>
    </>
  );
}

export default MedicalStockTable;
