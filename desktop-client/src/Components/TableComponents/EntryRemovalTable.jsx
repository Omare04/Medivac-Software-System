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
  Box,
  ModalBody,
  ModalFooter,
  Text,
  Stack,
  Avatar,
} from "@chakra-ui/react";
import { AiOutlineExport } from "react-icons/ai";
import { dividerColorLight } from "../../Colors";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
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

  return (
    <>
      <Box h={"100%"} pt={2}>
        <Box display={"flex"} justifyContent={"space-between"} pb={2}>
          <ExportDateModal />
        </Box>
        <Stack
          overflow={"auto"}
          h={"90%"}
          p={2}
          borderRadius={5}
          border={"1px solid #e2e8f0"}
        >
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <ErTableCardComponent
              name={"MRI Scanner"}
              pn={1231231}
              date={"2022/02/05 14:92 UTC/E"}
              ErType={"removal"}
              qty={3}
              user={"Clinal manager"}
            />
            <ErTableCardComponent
              name={"MRI Scanner"}
              pn={1231231}
              date={"2022/02/05 14:92 UTC/E"}
              ErType={"removal"}
              qty={3}
              user={"Clinal manager"}
            />
            <ErTableCardComponent
              name={"MRI Scanner"}
              pn={1231231}
              date={"2022/02/05 14:92 UTC/E"}
              ErType={"removal"}
              qty={3}
              user={"Clinal manager"}
            />
            <ErTableCardComponent
              name={"MRI Scanner"}
              pn={1231231}
              date={"2022/02/05 14:92 UTC/E"}
              ErType={"removal"}
              qty={3}
              user={"Clinal manager"}
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

function ErTableCardComponent({ name, pn, date, ErType, qty, user }) {
  return (
    <Card variant={"outline"} borderColor={dividerColorLight}>
      <CardBody p={2} display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} flexDirection={"column"}>
          <Box display={"flex"} gap={2}>
            <Avatar
              size="xs"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />

            <Box display={"flex"} flexDirection={"column"}>
              <Text fontSize={"14px"}> {user}</Text>
              <Text fontSize={"12px"} fontWeight={500}>
                {date}
              </Text>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Text fontSize={"14px"}>{name}</Text>
            <Text fontSize={"12px"}>({pn})</Text>
          </Box>
          <Text fontSize={"12px"} color={ErType == "removal" ? "red" : "green"}>
            {ErType} {ErType == "removal" ? `-${qty}` : `+${qty}`}
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
}
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
          variant={"outline"}
          leftIcon={<AiOutlineExport />}
          w={"100%"}
          // background={dividerColorLight}
          color={"#807f7f"}
          fontWeight={450}
          onClick={() => {
            onOpen();
          }}
        >
          Export Entries Or Removals
        </Button>
      </div>
    </>
  );
}
export default EntryRemovalTable;
