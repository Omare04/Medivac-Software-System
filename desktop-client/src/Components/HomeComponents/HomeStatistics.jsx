import React, { useEffect, useState } from "react";
import {
  Stat,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatGroup,
  Box,
  extendTheme,
  Card,
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
  Icon,
  UnorderedList,
  CardBody,
  Text,
} from "@chakra-ui/react";
import { StyledLinkLogo, StyledSeeMoreEntries } from "../../styles/HomeLayout";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { buttonBlue, dividerColor } from "../../Colors";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);
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
              <SkeletonText pr={5} isLoaded={isLoaded}>
                <StatHelpText color={"red"} mb={0.5}>
                  6 Expired
                </StatHelpText>
                <StatHelpText color={"#c5a025"}>
                  16 Approaching exp
                </StatHelpText>
              </SkeletonText>
            </Stat>
          </StatGroup>
        </ChakraProvider>
      </Box>
    </>
  );
}

function MedicalEquipmentStats() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);
  
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
              <SkeletonText pr={5} isLoaded={isLoaded}>
                <StatHelpText color={"red"} mb={0.5}>
                  3 Expired
                </StatHelpText>
                <StatHelpText color={"#c5a025"}>2 Approaching exp</StatHelpText>
              </SkeletonText>
            </Stat>
          </StatGroup>
        </ChakraProvider>
      </Box>
    </>
  );
}

function MedicalStockEntries() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      <Stat mr={0}>
        <StatLabel fontSize="sm" color={"grey"} mb={2}>
          Recent Entries
        </StatLabel>
        <Box
          w={"100%"}
          ml={0}
          display={"flex"}
          flexDirection={"column"}
          gap={1}
          colorScheme="whiteAlpha"
        >
          <Skeleton isLoaded={isLoaded}>
            <Card>
              <CardBody
                p={1}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <Icon as={IoIosRemove} color="red.500" />
                  <span style={{ fontSize: "13px", paddingLeft: "0px" }}>
                    3
                  </span>
                </Box>
                <Text fontSize={12}>(02/04/2024)</Text>
              </CardBody>
            </Card>
          </Skeleton>
          <Skeleton isLoaded={isLoaded}>
            <Card>
              <CardBody
                p={1}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <Icon as={IoIosAdd} color="green.500" />
                  <span style={{ fontSize: "13px", paddingLeft: "0px" }}>
                    3
                  </span>
                </Box>
                <Text fontSize={12}>(02/04/2024)</Text>
              </CardBody>
            </Card>
          </Skeleton>
          <Skeleton isLoaded={isLoaded}>
            <Card>
              <CardBody
                p={1}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <Icon as={IoIosAdd} color="green.500" />
                  <span style={{ fontSize: "13px", paddingLeft: "0px" }}>
                    3
                  </span>
                </Box>
                <Text fontSize={12}>(02/04/2024)</Text>
              </CardBody>
            </Card>
          </Skeleton>

          <Skeleton isLoaded={isLoaded}>
            <Card>
              <CardBody
                p={1}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <Icon as={IoIosAdd} color="green.500" />
                  <span style={{ fontSize: "13px", paddingLeft: "0px" }}>
                    3
                  </span>
                </Box>
                <Text fontSize={12}>(02/04/2024)</Text>
              </CardBody>
            </Card>
          </Skeleton>
        </Box>
      </Stat>
    </>
  );
}

function PharmaceuticalEntries() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      <Stat mr={0}>
        <StatLabel fontSize="sm" color={"grey"} mb={2}>
          Recent Entries
        </StatLabel>
        <Box
          w={"100%"}
          ml={0}
          display={"flex"}
          flexDirection={"column"}
          gap={1}
          colorScheme="whiteAlpha"
        >
          <Skeleton isLoaded={isLoaded}>
            <Card>
              <CardBody
                p={1}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <Icon as={IoIosRemove} color="red.500" />
                  <span style={{ fontSize: "13px", paddingLeft: "0px" }}>
                    2
                  </span>
                </Box>
                <Text fontSize={12}>(02/04/2024)</Text>
              </CardBody>
            </Card>
          </Skeleton>
          <Skeleton isLoaded={isLoaded}>
            <Card>
              <CardBody
                p={1}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <Icon as={IoIosAdd} color="green.500" />
                  <span style={{ fontSize: "13px", paddingLeft: "0px" }}>
                    1
                  </span>
                </Box>
                <Text fontSize={12}>(02/04/2024)</Text>
              </CardBody>
            </Card>
          </Skeleton>
          <Skeleton isLoaded={isLoaded}>
            <Card>
              <CardBody
                p={1}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <Icon as={IoIosAdd} color="green.500" />
                  <span style={{ fontSize: "13px", paddingLeft: "0px" }}>
                    3
                  </span>
                </Box>
                <Text fontSize={12}>(02/04/2024)</Text>
              </CardBody>
            </Card>
          </Skeleton>
          <Skeleton isLoaded={isLoaded}>
            <Card>
              <CardBody
                p={1}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <Icon as={IoIosAdd} color="green.500" />
                  <span style={{ fontSize: "13px", paddingLeft: "0px" }}>
                    6
                  </span>
                </Box>
                <Text fontSize={12}>(02/04/2024)</Text>
              </CardBody>
            </Card>
          </Skeleton>
        </Box>
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
