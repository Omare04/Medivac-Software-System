import React, { useState, useEffect } from "react";
import {
  Tooltip,
  ModalOverlay,
  ModalCloseButton,
  Button,
  Stack,
  Box,
  StackDivider,
  Card,
  Text,
  Badge,
  Drawer,
  DrawerBody,
  DrawerHeader,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  DrawerContent,
} from "@chakra-ui/react";
import { ReactSelectComponent } from "../InputComponents/InputComponents";
import { dividerColorLight } from "../../Colors";
import { AiOutlineExport } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";

export function OrderItemModal({ isOpen, onClose, item }) {
  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} size={"md"}>
        <ModalOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={3}
              justifyContent={"space-between"}
            >
              <Box>{item?.po}</Box>
              <Button size={"sm"} leftIcon={<FaDownload />} colorScheme="gray">
                Export File
              </Button>
            </Box>
          </DrawerHeader>
          <DrawerBody h={"100%"} overflow={"auto"} mb={5} p={5}>
            <Card variant={"unstyled"}>
              <Stack divider={<StackDivider />}>
                {Object.keys(item).map((key) => {
                  if (key === "orderItems") {
                    return null;
                  }

                  return (
                    <Box
                      key={key}
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Text fontWeight="bold">
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                      </Text>
                      {item[key] instanceof Date ? (
                        <Text>{item[key].toLocaleString()}</Text>
                      ) : key === "status" ? (
                        <ChangeOrderStatus item={item} />
                      ) : (
                        <Text>{item[key]}</Text>
                      )}
                    </Box>
                  );
                })}
              </Stack>
            </Card>
            <OrderItems items={item["orderItems"]} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function OrderItems({ items }) {
  return (
    <>
      <Box
        display={"flex"}
        gap={2}
        mt={8}
        flexDirection={"column"}
        p={0}
        h={"100%"}
        w={"100%"}
      >
        <Text pl={1} fontWeight={"bold"} fontSize={18}>
          Order Items:{" "}
        </Text>
        {items &&
          items.map((item, index) => (
            <Card
              p={"8px"}
              display={"flex"}
            >
              <Box
                display={"flex"}
                variant={"outline"}
                justifyContent={"space-between"}
              >
                <Text key={item?.itemId} fontSize={15} pl={"2px"}>
                  {item?.itemName}
                  <span style={{ paddingLeft: "7px", fontSize: 13 }}>
                    ({item?.pn})
                  </span>
                </Text>
                <Text key={item?.itemId} fontSize={13}>
                  Qty: {item?.quantity}
                </Text>
              </Box>
              <Text fontSize={13}>
                <Badge>{item?.itemType}</Badge>
              </Text>
            </Card>
          ))}
      </Box>
    </>
  );
}

function ChangeOrderStatus({ item }) {
  const [status, setStatus] = useState("");
  return (
    <Popover>
      <PopoverTrigger>
        <Text>
          <Popover defaultIsOpen>
            <Badge
              fontSize={"sm"}
              cursor={"pointer"}
              colorScheme={
                item?.status == "Pending"
                  ? "yellow"
                  : item?.status == "Delivered"
                  ? "green"
                  : "red"
              }
            >
              {item["status"]}
            </Badge>
          </Popover>
        </Text>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />

        <PopoverBody>
          {" "}
          <ReactSelectComponent
            selectOptions={[
              { value: "pending", label: "Pending" },
              { value: "delivered", label: "Delivered" },
              { value: "on_the_way", label: "On The Way" },
            ]}
            placeholder={item["status"]}
            title={"Transfer Method"}
            selectedOptions={status}
            setSelectedOptions={setStatus}
            isTitle={false}
            customStyles={null}
          />
        </PopoverBody>
        <PopoverFooter display={"flex"} justifyContent={"flex-end"}>
          <Button w={"100%"} colorScheme="blue">
            Apply
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
