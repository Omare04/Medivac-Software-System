import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  Skeleton,
  CardBody,
  Stack,
  Heading,
  Box,
  Text,
  StackDivider,
  Button,
  Input,
  Tag,
} from "@chakra-ui/react";
import { FaEllipsisH } from "react-icons/fa";
import {
  SearchBarComponent,
  ReactSelectComponent,
} from "../InputComponents/InputComponents";

const checklistItems = [
  {
    id: 0,
    title: "MRI Machine Inspection",
    type: "Inspection",
    date: "02/04/2024",
  },
  {
    id: 1,
    title: "X-ray Machine Inspection",
    type: "Checkup",
    date: "02/04/2024",
  },
  {
    id: 2,
    title: "Ultrasound Scanner Inspection",
    type: "Sanitization",
    date: "02/04/2024",
  },
  {
    id: 3,
    title: "Defibrillator Inspection",
    type: "Inspection",
    date: "02/04/2024",
  },
  {
    id: 4,
    title: "ECG Machine Inspection",
    type: "Checkup",
    date: "02/04/2024",
  },
  {
    id: 5,
    title: "Anesthesia Machine Inspection",
    type: "Sanitization",
    date: "02/04/2024",
  },
  {
    id: 6,
    title: "Ventilator Inspection",
    type: "Inspection",
    date: "02/04/2024",
  },
  {
    id: 7,
    title: "Infusion Pump Inspection",
    type: "Checkup",
    date: "02/04/2024",
  },
  {
    id: 8,
    title: "Surgical Microscope Inspection",
    type: "Sanitization",
    date: "02/04/2024",
  },
  {
    id: 9,
    title: "Blood Gas Analyzer Inspection",
    type: "Inspection",
    date: "02/04/2024",
  },
];

const FilterBar = () => {
  const [methodOfTransfer, setMethodOfTransfer] = useState("");
  return (
    <Box display={"flex"} w={"90%"} gap={2} pl={1}>
      <Box w={"60%"}>
        <SearchBarComponent />
      </Box>
      <Box w={"40%"}>
        <ReactSelectComponent
          isMulti={true}
          selectOptions={[
            { value: "Inspection", label: "Inspection" },
            { value: "Checkup", label: "Checkup" },
            { value: "Sanitization", label: "Sanitization" },
          ]}
          placeholder={"Type"}
          title={"Transfer Method"}
          selectedOptions={methodOfTransfer}
          setSelectedOptions={setMethodOfTransfer}
          isTitle={false}
          customStyles={null}
        />
      </Box>
    </Box>
  );
};
function StockCheckList({ onOpen }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={"5px"}
        >
          <Heading size="md">Stock Checklist</Heading>
          <Button
            colorScheme="blue"
            variant="ghost"
            ml={4}
            onClick={() => onOpen()}
          >
            Create Checklist
          </Button>
        </Box>

        <FilterBar />
        <Card height={"100%"} overflow={"auto"}>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              {checklistItems.map((item) => (
                <Skeleton isLoaded={isLoaded}>
                  <Box key={item.id}>
                    <Heading
                      key={item.id}
                      size="xs"
                      textTransform="uppercase"
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                        {item.title}
                        <Tag
                        // colorScheme={
                        //   item.type == "Inspection"
                        //     ? "green"
                        //     : item.type == "Sanitization"
                        //     ? "blue"
                        //     : "red"
                        // }
                        >
                          {item.type}
                        </Tag>
                      </Box>

                      <FaEllipsisH />
                    </Heading>
                    <Text pt="2" fontSize="sm" display={"flex"} gap={1} alignItems={"center"}>
                      Upcoming Due Date:
                      <Text fontWeight={"bold"}>{item.date}</Text>
                    </Text>
                  </Box>
                </Skeleton>
              ))}
            </Stack>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default StockCheckList;
