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
import { useTree } from "@table-library/react-table-library/tree";

const key = "Composed Table";

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
    id: "0",
    name: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Cardiology",
    pn: 12314124,
  },
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
];

function MedicalStockTable() {
  let data = { nodes };

  const tree = useTree(data, {
    onChange: onTreeChange,
  });

  function onTreeChange(action, state) {
    console.log(action, state);
  }

  const theme = useTheme([
    getTheme(),
    {
      HeaderRow: `
        background-color: ${dividerColorLight};
        color: #000000;
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
      <CompactTable columns={COLUMNS} data={data} theme={theme} tree={tree} />
      <br />
    </>
  );
}

export default MedicalStockTable;
