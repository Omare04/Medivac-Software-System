import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  StackDivider,
  Badge,
  Heading,
  Skeleton,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { dividerColorLight } from "../Colors";
import { IoEllipsisVerticalSharp } from "react-icons/io5";

const notificationsMockData = [
  {
    imageURL: "https://bit.ly/kent-c-dodds",
    name: "Alice Johnson",
    type: "Service",
    date: "Today",
  },
  {
    imageURL: "https://example.com/image4.jpg",
    name: "Bob Smith",
    type: "Maintenance",
    date: "Yesterday",
  },
  {
    imageURL: "https://bit.ly/code-beast",
    name: "Bouzza El Masaoudi",
    type: "order",
    date: "Last Week",
  },
  {
    imageURL: "https://bit.ly/code-beast",
    name: "Bouzza El Masaoudi",
    type: "order",
    date: "Last Week",
  },
  {
    imageURL: "https://bit.ly/kent-c-dodds",
    name: "Omar Elmasaoudi",
    type: "Equipment",
    date: "Last Week",
  },
  {
    imageURL: "https://bit.ly/code-beast",
    name: "Bouzza El Masaoudi",
    type: "order",
    date: "Last Week",
  },
  {
    imageURL: "https://bit.ly/kent-c-dodds",
    name: "Omar Elmasaoudi",
    type: "Equipment",
    date: "Last Week",
  },
  {
    imageURL: "https://bit.ly/kent-c-dodds",
    name: "Omar Elmasaoudi",
    type: "Equipment",
    date: "Last Week",
  },
  {
    imageURL: "https://bit.ly/code-beast",
    name: "Bouzza El Masaoudi",
    type: "order",
    date: "Last Week",
  },
  {
    imageURL: "https://bit.ly/code-beast",
    name: "Bouzza El Masaoudi",
    type: "order",
    date: "Last Week",
  },
  {
    imageURL: "https://bit.ly/code-beast",
    name: "Bouzza El Masaoudi",
    type: "order",
    date: "Last Week",
  },
  {
    imageURL: "https://bit.ly/code-beast",
    name: "Bouzza El Masaoudi",
    type: "order",
    date: "Last Week",
  },
];

function NotificationsCenter() {
  const [skeleton, setSkeleton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSkeleton(true);
    }, [1500]);
  }, []);

  return (
    <>
      <div
        style={{
          height: "calc(100% - 50px)",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          background={dividerColorLight}
          h={"100%"}
          borderRadius={5}
          p={5}
          w={"50%"}
          overflow={"auto"}
        >
          <Heading pb={3} pl={"1px"}> Notifications</Heading>
          <Stack divider={<StackDivider />} spacing="2">
            {notificationsMockData.map((value, i) => (
              <>
                <Skeleton isLoaded={skeleton}>
                  <Card variant={"outline"} p={3} cursor={"pointer"}>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Box display={"flex"} alignItems={"flex-start"}>
                        <Avatar
                          name={value.name}
                          src={value.imageURL}
                          size={"sm"}
                        >
                          {" "}
                          <AvatarBadge
                            boxSize="1.25em"
                            bg={value.type == "order" ? "green.500" : "red.500"}
                          />
                        </Avatar>
                        <Box pl={2} display={"flex"} flexDirection={"column"}>
                          <Box display={"flex"} gap={2}>
                            <Text fontSize={14}>{value.name}</Text>
                          </Box>
                          {value.type == "order" ? (
                            <Text fontSize={12}>Created An Order</Text>
                          ) : (
                            <Text fontSize={12}>Created A {value.type}</Text>
                          )}
                        </Box>
                      </Box>
                      <Badge
                        display={"flex"}
                        alignItems={"center"}
                        color="grey"
                        size={"xs"}
                      >
                        {value.date}
                      </Badge>
                    </Box>
                  </Card>
                </Skeleton>
              </>
            ))}
          </Stack>
        </Box>
      </div>
    </>
  );
}

export default NotificationsCenter;
