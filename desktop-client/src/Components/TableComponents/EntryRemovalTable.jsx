import * as React from "react";
import { useState } from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { BsPlusSlashMinus } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import {
  Icon,
  Button,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { AiOutlineExport } from "react-icons/ai";
import { dividerColorLight } from "../../Colors";
import {
  ReactSelectComponent,
  InputComponentIcon,
} from "../InputComponents/InputComponents";
import { LuCalendarDays } from "react-icons/lu";
import makeAnimated from "react-select/animated";

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
  const [ids, setIds] = useState([]);
  const [itemType, setItemType] = useState("");

  const handleExpand = (item) => {
    if (ids.includes(item.id)) {
      setIds(ids.filter((id) => id !== item.id));
    } else {
      setIds(ids.concat(item.id));
    }
  };

  const COLUMNS = [
    {
      label: "Item",
      renderCell: (item) => (
        <span style={{ fontWeight: 500 }}>{item.item} </span>
      ),
    },
    {
      label: (
        <>
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            Date
            <Icon
              as={FaChevronDown}
              color="#181d1f"
              boxSize={4}
              ml={1}
              // style={{}}
            />
          </div>
        </>
      ),
      renderCell: (item) => (
        <span style={{ fontWeight: 500 }}>
          {item.date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </span>
      ),
    },
    {
      label: "Type",
      renderCell: (item) =>
        item.type == "entry" ? (
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaPlusCircle color="green" style={{ marginLeft: "10px" }} />{" "}
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "red",
              }}
            >
              <FaCircleMinus color="red" style={{ marginLeft: "10px" }} />{" "}
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "94%",
          marginBottom: "10px",
          borderRadius: "5px",
          background: "white",
        }}
      >
        <div
          className="toolbar_wrapper"
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            padding: "0px 15px 15px 5px",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "550",
              borderRadius: "5px",
              color: "#000000",
              fontSize: "20px",
            }}
          >
            Monthly Entry Removal History
          </h1>
          <div style={{}}>
            <ExportDateModal />
          </div>
        </div>
        <div style={{ overflow: "auto", height: "100%" }}>
          <CompactTable
            columns={COLUMNS}
            rowProps={ROW_PROPS}
            rowOptions={ROW_OPTIONS}
            data={data}
            theme={theme}
          />
        </div>
      </div>
    </>
  );
};

export function ExportDateModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [month, setMonth] = useState("");

  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "z", label: "Vanilla" },
    { value: "x", label: "Vanilla" },
  ];

  const animatedComponents = makeAnimated();

  return (
    <>
      <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay onClick={onClose} />
        <ModalContent borderRadius={2}>
          <ModalHeader fontWeight={420}>Export ER History</ModalHeader>
          <ModalCloseButton borderRadius={2} />
          <ModalBody pb={6}>
            <div
              style={{
                display: "flex",
                gap: "25px",
                width: "100%",
                marginBottom: "10px",
                flexDirection: "column",
              }}
            >
              <ReactSelectComponent
                selectOptions={months}
                placeholder={
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Icon as={LuCalendarDays} /> ER History Month
                  </span>
                }
                title={"Month"}
                selectedOptions={month}
                setSelectedOptions={setMonth}
                isTitle={false}
              />
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              borderRadius={2}
              onClick={onClose}
              fontWeight={420}
            >
              Export
            </Button>
            <Button onClick={onClose} borderRadius={2} fontWeight={420}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <div style={{ display: "flex" }}>
        <Button
          leftIcon={<AiOutlineExport />}
          w={"100%"}
          background={dividerColorLight}
          color={"#8a8a8a"}
          onClick={() => {
            onOpen();
          }}
        >
          Export
        </Button>
      </div>
    </>
  );
}
export default EntryRemovalTable;
