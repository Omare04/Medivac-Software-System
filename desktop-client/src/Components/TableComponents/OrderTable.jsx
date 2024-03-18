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
import { FaPlus } from "react-icons/fa";
import { usePagination } from "@table-library/react-table-library/pagination";
import { IoShareOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { Badge } from "@chakra-ui/react";

const exportRow = (OID) => {
  //Export order
};

export function OrderTable({ nodes }) {
  let data = { nodes };

  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 15,
    },
    onChange: onPaginationChange,
  });

  function onPaginationChange(action, state) {
    console.log(action, state);
  }

  function onTreeChange(action, state) {
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

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  data = {
    nodes: data.nodes.filter((item) =>
      item.po.toLowerCase().includes(search.toLowerCase())
    ),
  };

  const COLUMNS = [
    {
      label: "Order ID / PO",
      renderCell: (item) => item.po,
    },
    {
      label: "Date/Time",
      renderCell: (item) =>
        item.date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
    },
    {
      label: "Status",
      renderCell: (item) => (
        <Badge
          colorScheme={
            item.status === "Delivered"
              ? "green"
              : item.status === "Pending"
              ? "yellow"
              : "blue"
          }
          p={1}
        >
          {item.status}
        </Badge>
      ),
    },
    {
      label: "Supplier",
      renderCell: (item) => item.supplier,
    },
    {
      label: "Items",
      renderCell: (item) => item.quantity,
    },
    {
      label: "",
      renderCell: (item) => (
        <div
          style={{
            // width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <IoShareOutline
            onClick={() => {
              exportRow(item.po);
            }}
            size={20}
          />
          <FaRegEye size={20} style={{ marginLeft: "15px" }} />
        </div>
      ),
      width: "10%", // Adjust the width here
    },
  ];

  return (
    <>
      <div
        style={{
          width: "100%",
          borderRadius: "3px",
          background: "white",
          overflow: "auto",
          paddingBottom: "15px",
        }}
      >
        <Stack spacing={0} pb={3}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FaSearch style={{ color: "#96989a" }} />}
            />
            <Input
              background={"white"}
              placeholder="Search Task"
              value={search}
              onChange={handleSearch}
              borderRadius={"sm"}
            />
          </InputGroup>
        </Stack>

        <Box borderWidth="1px" borderRadius="sm" width={"100%"} overflow="auto">
          <CompactTable
            columns={COLUMNS}
            data={data}
            theme={theme}
            pagination={pagination}
          />
        </Box>
        <br />
        <HStack justify="flex-end" width="100%">
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

export default OrderTable;
