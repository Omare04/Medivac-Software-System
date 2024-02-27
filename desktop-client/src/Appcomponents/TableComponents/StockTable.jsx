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

class MedicalStock{
  constructor(id, name, type, pn, date) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.pn = pn;
    this.date = date;
  }
}

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
    { label: "Product Name", renderCell: (item) => item.name },
    { label: "Product Type", renderCell: (item) => item.type },
    {
      label: "Date Entered",
      renderCell: (item) =>
        item.deadline.toLocaleDateString("en-US", {
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
      <CompactTable columns={COLUMNS} data={data} theme={theme} />
      <br />
    </>
  );
}

export default MedicalStockTable;
