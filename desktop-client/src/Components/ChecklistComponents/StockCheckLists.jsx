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
} from "@chakra-ui/react";
import { FaEllipsisH } from "react-icons/fa";

const checklistItems = [
  {
    id: 0,
    title: "Zool Monthly Inspection",
    type: "Medical Equipment Inspection",
    date: "02/04/2024",
  },
  {
    id: 1,
    title: "Zool Monthly Inspection",
    type: "Medical Equipment Inspection",
    date: "02/04/2024",
  },
  {
    id: 2,
    title: "Zool Monthly Inspection",
    type: "Medical Equipment Inspection",
    date: "02/04/2024",
  },
  {
    id: 3,
    title: "Zool Monthly Inspection",
    type: "Medical Equipment Inspection",
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
          // overflow: "auto",
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
                    {item.title}
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
