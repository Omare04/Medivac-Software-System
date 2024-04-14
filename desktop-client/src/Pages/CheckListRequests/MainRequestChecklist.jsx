import React from "react";
import CheckLists from "./CheckLists";
import Requests from "./Requests";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Box,
  Tag,
  Heading,
  Button,
} from "@chakra-ui/react";



function MainRequestChecklist() {
  return (
    <div
      className="main_request_checklist_root_wrapper"
      style={{ width: "100%", height: "100%" }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "10px",
          height: "100%",
          padding: "10px",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          w={"50%"}
          h={"100%"}
          gap={5}
        >
          {/* <RequestCheckListSummary /> */}
          <Requests />
        </Box>
        <CheckLists />
      </div>
    </div>
  );
}

function RequestCheckListSummary() {
  return (
    <>
      <Card>
        {/* <CardHeader pb={0}>
          <Heading size="md">Request & Checklist Summary</Heading>
        </CardHeader> */}
        <CardBody>
          <Box pb={2}>
            <Heading size="xs" color="#e1b60b">
              Pending Request(s)
            </Heading>
            <Text pt="2" fontSize="sm">
              <Box display={"flex"} flexWrap={"wrap"} gap={2}>
                <Tag>R123M</Tag>
                <Tag>R123M</Tag>
                <Tag>R123M</Tag>
                <Tag>R123M</Tag>
                <Tag>R123M</Tag>
                <Tag>R123M</Tag>
                <Tag>R123M</Tag>
                <Tag>R123M</Tag>
              </Box>
            </Text>
          </Box>
          <Box pt={5}>
            <Heading size="sm">Checklist Items Approaching Due Date</Heading>
            <Text pt="2" fontSize="sm">
              <Box display={"flex"} flexWrap={"wrap"} gap={2}>
                <Tag>MRI Machine INSP</Tag>
                <Tag>MRI MAchine</Tag>
                <Tag>MRI MAchine</Tag>
                <Tag>MRI MAchine</Tag>
                <Tag>MRI MAchine</Tag>
              </Box>
            </Text>
          </Box>
          <Box></Box>
        </CardBody>
      </Card>
    </>
  );
}

export default MainRequestChecklist;
