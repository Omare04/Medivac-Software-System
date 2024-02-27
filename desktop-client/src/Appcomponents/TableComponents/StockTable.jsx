import * as React from "react";
import { useState, useEffect } from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import {
  StyledSearch,
  StyledSearchBox,
  StyledSearchIconWrap,
  StyledSearchIcon,
  StyledTableFilterBar,
} from "../../styles/TableStyles/MissionTableStyles";
import { dividerColorLight } from "../../Colors";

const key = "Composed Table";

const nodes = [
  {
    id: "0",
    name: "Shopping List",
    tasks: "9",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "a",
    tasks: "9",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Shopping List",
    tasks: "9",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Shopping List",
    tasks: "9",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
];

function MedicalStockTable() {
  let data = { nodes };

  const theme = useTheme([
    getTheme(),
    {
      HeaderRow: `
        background-color: #7b7b7b;
        color: white;
        font-weight: 200; 
      `,
      Row: `
        background-color: #ffffff;
        font-weight: 300;
        color: #383838; 
        font-family: 'Inter', sans-serif;
        cursor: pointer; 
        transition: background-color 0.3s ease; 
        
        &:nth-of-type(even) {
          background-color: ${dividerColorLight};
        }
  
        &:hover {
          color: #383838; 
          background-color: ${dividerColorLight}; /* Keep alternating color for even rows on hover */
        }
        
        &:hover:nth-of-type(even) {
          background-color: #ffffff; /* Toggle to a different color on hover */
        }
      `,
      HeaderCell: `
        div {
          font-weight: 350; /* Adjust the font-weight for the div within the th */
        }
      `,
    },
  ]);

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
    { label: "Task", renderCell: (item) => item.name },
    {
      label: "Deadline",
      renderCell: (item) =>
        item.deadline.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
    },
    { label: "Type", renderCell: (item) => item.type },
    {
      label: "Complete",
      renderCell: (item) => item.isComplete.toString(),
    },
    { label: "Tasks", renderCell: (item) => item.nodes?.length },
  ];

  return (
    <>
      <StyledTableFilterBar style={{ height: " 30px" }}>
        <StyledSearchIconWrap>
          <StyledSearchIcon />
        </StyledSearchIconWrap>
        <StyledSearchBox>
          <StyledSearch
            type="search"
            placeholder="Filter"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></StyledSearch>
        </StyledSearchBox>
      </StyledTableFilterBar>
      <br />
      <CompactTable columns={COLUMNS} data={data} theme={theme} />
      <br />
    </>
  );
}

export default MedicalStockTable;
