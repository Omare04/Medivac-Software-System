import * as React from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { BsPlusSlashMinus } from "react-icons/bs";

const nodes = [
  {
    id: "0",
    item: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "Removal",
    comments: "Removed For flight AOM123",
    user: "clinical manager",
  },
  {
    id: "1",
    item: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "entry",
    comments: "Removed For flight AOM123",
    user: "clinical manager",
  },
  {
    id: "2",
    item: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "entry",
    comments: "Removed For flight AOM123",
    user: "clinical manager",
  },
  {
    id: "3",
    item: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "entry",
    comments: "Removed For flight AOM123",
    user: "clinical manager",
  },
  {
    id: "4",
    item: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "entry",
    comments: "Removed For flight AOM123",
    user: "clinical manager",
  },
  {
    id: "5",
    item: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "entry",
    comments: "Removed For flight AOM123",
    user: "clinical manager",
  },
  {
    id: "6",
    item: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "entry",
    comments: "Removed For flight AOM123",
    user: "clinical manager",
  },
  {
    id: "7",
    item: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "entry",
    comments: "Removed For flight AOM123",
    user: "clinical manager",
  },
  {
    id: "8",
    item: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "entry",
    comments: "Removed For flight AOM123",
    user: "clinical manager",
  },
  {
    id: "9",
    item: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "entry",
    comments: "Removed For flight AOM123",
    user: "clinical manager",
  },
  {
    id: "10",
    item: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "entry",
    comments: "Removed For flight AOM123",
    user: "clinical manager",
  },
  {
    id: "11",
    item: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "entry",
    comments: "Removed For flight AOM123",
    user: "clinical manager",
  },
  {
    id: "12",
    item: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "entry",
    comments: "Removed For flight AOM123",
    user: "clinical manager",
  },
  {
    id: "13",
    item: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "entry",
    comments: "Removed For flight AOM123",
    user: "clinical manager",
  },
  {
    id: "14",
    item: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "entry",
    comments: "Removed For flight AOM123",
    user: "clinical manager",
  },
  {
    id: "14",
    item: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "entry",
    comments: "Removed For flight AOM123",
    user: "clinical manager",
  },
  {
    id: "14",
    item: "Medicine A Xeroz",
    date: new Date(2020, 1, 15),
    type: "entry",
    comments: "Removed For flight AOM123",
    user: "clinical manager",
  },
];

const EntryRemovalTable = () => {
  const data = { nodes };

  const theme = useTheme(getTheme());

  const [ids, setIds] = React.useState([]);

  const handleExpand = (item) => {
    if (ids.includes(item.id)) {
      setIds(ids.filter((id) => id !== item.id));
    } else {
      setIds(ids.concat(item.id));
    }
  };

  const COLUMNS = [
    { label: "Item", renderCell: (item) => item.item },
    {
      label: "Date",
      renderCell: (item) =>
        item.date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
    },
    {
      label: "Type",
      renderCell: (item) =>
        item.type == "entry" ? (
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaPlusCircle color="green" style={{ marginLeft: "10px" }} />
            </div>
          </>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaCircleMinus color="red" style={{ marginLeft: "10px" }} />
            </div>
          </>
        ),
    },
  ];

  const ROW_PROPS = {
    onClick: handleExpand,
  };

  const ROW_OPTIONS = {
    renderAfterRow: (item) => (
      <>
        {ids.includes(item.id) && (
          <tr style={{ display: "flex", gridColumn: "1 / -1" }}>
            <td style={{ flex: "1" }}>
              <ul
                style={{
                  margin: "0",
                  padding: "8px",
                  backgroundColor: "#efefef",
                  borderRadius: " 5px",
                }}
              >
                <li>
                  <strong>Comments:</strong> {item.comments}
                </li>
                <li>
                  <strong>By:</strong> {item.user}
                </li>
              </ul>
            </td>
          </tr>
        )}
      </>
    ),
  };

  return (
    <>
      {/* <h1
        style={{
          display: "flex",
          alignItems: "center",
          fontWeight: "400",
          borderBottom: `1px solid #f6f6f6`,
          borderRadius: "5px",
          marginBottom: "5px",
          // marginLeft: "5px",
          color: "#000000",
          fontSize: "20px",
          padding: "10px",
        }}
      >
        Entry Removal History
        <BsPlusSlashMinus style={{ marginLeft: "15px" }} />
      </h1> */}
      <CompactTable
        columns={COLUMNS}
        rowProps={ROW_PROPS}
        rowOptions={ROW_OPTIONS}
        data={data}
        theme={theme}
      />
    </>
  );
};

export default EntryRemovalTable;
