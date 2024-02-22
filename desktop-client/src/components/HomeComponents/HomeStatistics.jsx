import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatGroup,
  Box,
  extendTheme,
  ChakraProvider,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  ListItem,
  ListIcon,
  UnorderedList,
  Text,
} from "@chakra-ui/react";
import { StyledLinkLogo } from "../../styles/HomeLayout";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const theme = extendTheme({
  styles: {
    global: {
      ".chakra-stat .chakra-stat-label, .chakra-stat .chakra-stat-number, .chakra-stat .chakra-stat-help-text":
        {
          marginInlineStart: "0px",
          paddingLeft: "0px",
        },
    },
  },
});

function MedicalEquipmentStats() {
  return (
    <>
      <Box w="60%">
        <ChakraProvider theme={theme}>
          <StatGroup>
            <Stat>
              <Flex align="center">
                <StatLabel fontSize="sm" color={"grey"} mr={2}>
                  Equipment
                </StatLabel>
              </Flex>
              <StatNumber fontSize="4xl" pb={9}>
                120
              </StatNumber>
              <StatHelpText color={"red"}>23 Expired</StatHelpText>
              <StatHelpText color={"green"}>23 Approaching exp</StatHelpText>
            </Stat>
          </StatGroup>
        </ChakraProvider>
      </Box>
    </>
  );
}

function StockEntries() {
  return (
    <>
      <UnorderedList listStyleType={"none"} w={"100%"} fontSize={14.3}>
        <Flex alignItems="center" justifyContent="space-between">
          <ListItem>
            <ListIcon as={AiOutlinePlusCircle} color="green.500" />
            Xerox
          </ListItem>
          <Text>Qty: 3</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <ListItem>
            <ListIcon as={AiOutlineMinusCircle} color="red.500" />
            Fentanyl 2 ui
          </ListItem>
          <Text>Qty: 1</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <ListItem>
            <ListIcon as={AiOutlineMinusCircle} color="red.500" />
            Fentanyl 2 ui
          </ListItem>
          <Text>Qty: 1</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <ListItem>
            <ListIcon as={AiOutlineMinusCircle} color="red.500" />
            Fentanyl 2 ui
          </ListItem>
          <Text>Qty: 1</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <ListItem>
            <ListIcon as={AiOutlineMinusCircle} color="red.500" />
            Fentanyl 2 ui
          </ListItem>
          <Text>Qty: 1</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <ListItem>
            <ListIcon as={AiOutlineMinusCircle} color="red.500" />
            Fentanyl 2 ui
          </ListItem>
          <Text>Qty: 1</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <ListItem>
            <ListIcon as={AiOutlineMinusCircle} color="red.500" />
            Fentanyl 2 ui
          </ListItem>
          <Text>Qty: 1</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <ListItem>
            <ListIcon as={AiOutlinePlusCircle} color="green.500" />
            Xerox
          </ListItem>
          <Text>Qty: 3</Text>
        </Flex>
      </UnorderedList>
    </>
  );
}
export function StatsTab() {
  const handleTabChange = (index) => {
    // Handle tab change logic if needed
    console.log(`Tab changed to index ${index}`);
  };

  return (
    <ChakraProvider>
      <Tabs
        position="relative"
        variant="unstyled"
        colorScheme="blue"
        onChange={handleTabChange}
      >
        <TabList pt={3}>
          <Tab
            _hover={{ color: "gray.600", borderBottom: "2px solid blue.500" }}
            _active={{ color: "blue.500", borderBottom: "2px solid blue.500" }}
          >
            Medical Equipment
          </Tab>
          <Tab
            pl={25}
            _hover={{ color: "gray.600", borderBottom: "2px solid blue.500" }}
            _active={{ color: "blue.500", borderBottom: "2px solid blue.500" }}
          >
            Pharmaceuticals
          </Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel pl={0} pt={5} display={"flex"}>
            <MedicalEquipmentStats />
            <StockEntries />
          </TabPanel>
          <TabPanel>
            <p>Pharmaceuticals</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  );
}
