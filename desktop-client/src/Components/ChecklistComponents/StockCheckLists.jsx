import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  Heading,
  Box,
  Text,
  StackDivider,
  Button,
  Tag,
} from "@chakra-ui/react";
import { FaEllipsisH } from "react-icons/fa";

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

function StockCheckList() {
  return (
    <>
      <div
        style={{
          width: "100%",
          borderRadius: "5px",
          height: "100%",
        }}
      >
        <Card height={"100%"} overflow={"auto"}>
          <CardHeader position={"sticky"}>
            <Heading size="md">
              Stock Checklist
              <Button colorScheme="blue" variant="ghost" ml={4}>
                Create Checklist
              </Button>
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              {checklistItems.map((item) => (
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
                  <Text pt="2" fontSize="sm">
                    Due: {item.date}
                  </Text>
                </Box>
              ))}
            </Stack>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default StockCheckList;
