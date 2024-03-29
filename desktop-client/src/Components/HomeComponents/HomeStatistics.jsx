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
import { StyledLinkLogo, StyledSeeMoreEntries } from "../../styles/HomeLayout";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { buttonBlue, dividerColor } from "../../Colors";

const theme = extendTheme({
  styles: {
    global: {
      ".chakra-stat .chakra-stat-label, .chakra-stat .chakra-stat-number, .chakra-stat .chakra-stat-help-text":
        {
          marginInlineStart: "0px",
          paddingLeft: "10px",
        },
    },
  },
});

function PharmaceuticalStats() {
  return (
    <>
      <Box w="50%">
        <ChakraProvider theme={theme}>
          <StatGroup>
            <Stat>
              <Flex align="center">
                <StatLabel fontSize="sm" color={"grey"} mr={2}>
                  Drug Items
                </StatLabel>
              </Flex>
              <StatNumber fontSize="4xl" pb={6}>
                56
              </StatNumber>
              <StatHelpText color={"red"} mb={0.5}>
                6 Expired
              </StatHelpText>
              <StatHelpText color={"#c5a025"}>16 Approaching exp</StatHelpText>
            </Stat>
          </StatGroup>
        </ChakraProvider>
      </Box>
    </>
  );
}

function MedicalEquipmentStats() {
  return (
    <>
      <Box w="50%">
        <ChakraProvider theme={theme}>
          <StatGroup>
            <Stat>
              <Flex align="center">
                <StatLabel fontSize="sm" color={"grey"} mr={2}>
                  Equipment
                </StatLabel>
              </Flex>
              <StatNumber fontSize="4xl" pb={6}>
                120
              </StatNumber>
              <StatHelpText color={"red"} mb={0.5}>
                3 Expired
              </StatHelpText>
              <StatHelpText color={"#c5a025"}>2 Approaching exp</StatHelpText>
            </Stat>
          </StatGroup>
        </ChakraProvider>
      </Box>
    </>
  );
}

function MedicalStockEntries() {
  return (
    <>
      <Stat mr={0}>
        <StatLabel
          fontSize="sm"
          color={"grey"}
          mb={2}
          pb={1}
          style={{ borderBottom: `1px solid ${dividerColor}` }}
        >
          Recent Entries
        </StatLabel>
        <UnorderedList listStyleType={"none"} w={"100%"} ml={0}>
          <Flex alignItems="center" justifyContent="space-between">
            <ListItem>
              <ListIcon as={AiOutlinePlusCircle} color="green.500" />
              <span style={{ fontSize: "13px", paddingLeft: "0px" }}>6</span>
            </ListItem>
            <Text fontSize={13}>(02/04/2024)</Text>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            <ListItem>
              <ListIcon as={AiOutlineMinusCircle} color="red.500" />
              <span style={{ fontSize: "13px", paddingLeft: "0px" }}>3</span>
            </ListItem>
            <Text fontSize={13}>(02/04/2024)</Text>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            <ListItem>
              <ListIcon as={AiOutlinePlusCircle} color="green.500" />
              <span style={{ fontSize: "13px", paddingLeft: "0px" }}>6</span>
            </ListItem>
            <Text fontSize={13}>(02/04/2024)</Text>
          </Flex>
          <StyledSeeMoreEntries>
            <Flex alignItems="center" justifyContent="space-between">
              <ListItem>
                <ListIcon as={AiOutlineMinusCircle} color="red.500" />
                <span style={{ fontSize: "13px", paddingLeft: "0px" }}>3</span>
              </ListItem>
              <Text fontSize={13}>(02/04/2024)</Text>
            </Flex>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: " center",
                color: `#4c79c2`,
                fontSize: "14px",
              }}
            >
              see more
            </span>
          </StyledSeeMoreEntries>
        </UnorderedList>
      </Stat>
    </>
  );
}

function PharmaceuticalEntries() {
  return (
    <>
      <Stat mr={0}>
        <StatLabel
          fontSize="sm"
          color={"grey"}
          mb={2}
          pb={1}
          style={{ borderBottom: `1px solid ${dividerColor}` }}
        >
          Recent Entries
        </StatLabel>
        <UnorderedList listStyleType={"none"} w={"100%"} ml={0}>
          <Flex alignItems="center" justifyContent="space-between">
            <ListItem>
              <ListIcon as={AiOutlinePlusCircle} color="green.500" />
              <span style={{ fontSize: "13px", paddingLeft: "0px" }}>2</span>
            </ListItem>
            <Text fontSize={13}>(02/04/2024)</Text>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            <ListItem>
              <ListIcon as={AiOutlineMinusCircle} color="red.500" />
              <span style={{ fontSize: "13px", paddingLeft: "0px" }}>3</span>
            </ListItem>
            <Text fontSize={13}>(02/04/2024)</Text>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            <ListItem>
              <ListIcon as={AiOutlinePlusCircle} color="green.500" />
              <span style={{ fontSize: "13px", paddingLeft: "0px" }}>7</span>
            </ListItem>
            <Text fontSize={13}>(02/04/2024)</Text>
          </Flex>
          <StyledSeeMoreEntries>
            <Flex alignItems="center" justifyContent="space-between">
              <ListItem>
                <ListIcon as={AiOutlineMinusCircle} color="red.500" />
                <span style={{ fontSize: "13px", paddingLeft: "0px" }}>1</span>
              </ListItem>
              <Text fontSize={13}>(02/04/2024)</Text>
            </Flex>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: " center",
                color: `#4c79c2`,
                fontSize: "14px",
              }}
            >
              see more
            </span>
          </StyledSeeMoreEntries>
        </UnorderedList>
      </Stat>
    </>
  );
}

export function StatsTab() {
  const handleTabChange = (index) => {
    // Handle tab change logic if needed
    console.log(`Tab changed to index ${index}`);
  };

  return (
    <ChakraProvider pr={0} pl={0}>
      <Tabs
        position="relative"
        variant="unstyled"
        colorScheme="blue"
        onChange={handleTabChange}
        pr={0}
      >
        <TabList>
          <Tab
            _hover={{ color: "gray.600", borderBottom: "2px solid blue.500" }}
            _active={{ color: "blue.500", borderBottom: "2px solid blue.500" }}
            fontSize={14}
          >
            Medical Equipment
          </Tab>
          <Tab
            pl={25}
            _hover={{ color: "gray.600", borderBottom: "2px solid blue.500" }}
            _active={{ color: "blue.500", borderBottom: "2px solid blue.500" }}
            fontSize={14}
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
          <TabPanel pl={0} pr={0} borderRadius={10} display={"flex"}>
            <MedicalEquipmentStats />
            <MedicalStockEntries />
          </TabPanel>

          <TabPanel pl={0} pr={0} borderRadius={10} display={"flex"}>
            <PharmaceuticalStats />
            <PharmaceuticalEntries />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  );
}
